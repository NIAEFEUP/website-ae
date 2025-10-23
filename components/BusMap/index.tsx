import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect, useRef, memo, useState } from 'react';
import { Bus, Clock, MapPin, Wifi, WifiOff } from 'lucide-react';
import type { EnrichedBusData } from "@/types/bus";

interface BusMapProps {
  buses: EnrichedBusData[];
  isConnected?: boolean;
  selectedBusId?: string | null;
  onBusClick?: (busId: string) => void;
}

const createBusIcon = (line: string, isStale: boolean, isSelected: boolean) => {
  const colors = {
    'HSJ': '#0063EC', // blue - Hospital São João
    'BXP': '#9D2F21',  // red - Baixa do Porto
  };
  
  const color = colors[line as keyof typeof colors] || '#6b7280';
  const opacity = isStale ? 0.5 : 1;
  const scale = isSelected ? 1.2 : 1;
  
  return L.divIcon({
    className: 'custom-bus-icon',
    html: `
      <div style="
        position: relative;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
      ">
        <div style="
          width: 40px;
          height: 40px;
          background: ${color};
          opacity: ${opacity};
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
          border: 3px solid white;
          transition: transform 0.3s ease;
        ">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M8 6v6"/>
            <path d="M15 6v6"/>
            <path d="M2 12h19.6"/>
            <path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"/>
            <circle cx="7" cy="18" r="2"/>
            <circle cx="17" cy="18" r="2"/>
          </svg>
        </div>
        ${!isStale ? `
          <div style="
            position: absolute;
            top: -2px;
            right: -2px;
            width: 12px;
            height: 12px;
            background: #10b981;
            border: 2px solid white;
            border-radius: 50%;
            animation: pulse 2s infinite;
          "></div>
        ` : ''}
      </div>
      <style>
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      </style>
    `,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20],
  });
};

// Component to handle map bounds and animations
const MapController = memo(({ buses, selectedBusId }: { buses: EnrichedBusData[], selectedBusId: string | null }) => {
  const map = useMap();
  const isInitialMount = useRef(true);
  const prevSelectedBusId = useRef<string | null>(null);

  useEffect(() => {
    if (buses.length > 0) {
      const bounds = new L.LatLngBounds(
        buses.map(bus => [bus.lat, bus.lon] as [number, number])
      );
      
      if (isInitialMount.current) {
        map.fitBounds(bounds, { padding: [50, 50], maxZoom: 15 });
        isInitialMount.current = false;
      }
    }
  }, [buses, map]);

  // Fly to selected bus when it changes
  useEffect(() => {
    if (selectedBusId && selectedBusId !== prevSelectedBusId.current) {
      const selectedBus = buses.find(b => String(b.busId) === selectedBusId);
      if (selectedBus) {
        const isMobile = window.innerWidth < 768;
        const targetZoom = Math.max(map.getZoom(), 15);
        
        if (isMobile) {
          // On mobile, offset the target point downward so the popup fits above
          const point = map.project([selectedBus.lat, selectedBus.lon], targetZoom);
          // Offset by ~25% of map height downward
          point.y -= map.getSize().y * 0.25;
          const newLatLng = map.unproject(point, targetZoom);
          
          map.flyTo(newLatLng, targetZoom, {
            duration: 0.5
          });
        } else {
          // On desktop, center normally
          map.flyTo([selectedBus.lat, selectedBus.lon], targetZoom, {
            duration: 0.5
          });
        }
      }
    }
    prevSelectedBusId.current = selectedBusId;
  }, [selectedBusId, buses, map]);

  return null;
});

MapController.displayName = 'MapController';

// Animated marker component
const AnimatedBusMarker = memo(({ bus, isSelected, onClick }: { bus: EnrichedBusData, isSelected?: boolean, onClick?: (id: string) => void }) => {
  const markerRef = useRef<L.Marker | null>(null);
  const prevPosition = useRef({ lat: bus.lat, lon: bus.lon });
  const prevSelected = useRef(isSelected);
  const [, forceUpdate] = useState({});

  useEffect(() => {
    if (markerRef.current) {
      const newLatLng = new L.LatLng(bus.lat, bus.lon);
      const oldLatLng = new L.LatLng(prevPosition.current.lat, prevPosition.current.lon);
      
      if (!newLatLng.equals(oldLatLng)) {
        markerRef.current.setLatLng(newLatLng);
        prevPosition.current = { lat: bus.lat, lon: bus.lon };
      }
    }
  }, [bus.lat, bus.lon]);

  // Open/close popup when selection changes
  useEffect(() => {
    if (markerRef.current) {
      if (isSelected && !prevSelected.current) {
        markerRef.current.openPopup();
      } else if (!isSelected && prevSelected.current) {
        markerRef.current.closePopup();
      }
    }
    prevSelected.current = isSelected;
  }, [isSelected]);

  // Update relative time with dynamic interval based on time elapsed
  useEffect(() => {
    if (!isSelected) return;
    
    const getUpdateInterval = () => {
      const lastUpdate = new Date(bus.timestamp);
      const now = new Date();
      const diffMs = now.getTime() - lastUpdate.getTime();
      const minutesAgo = Math.floor(diffMs / 60000);
      const hoursAgo = Math.floor(diffMs / (60 * 60000));

      if (minutesAgo < 60) {
        return 60000; // Update every minute
      } else if (hoursAgo < 24) {
        return 60 * 60000; // Update every hour
      } else {
        return 24 * 60 * 60000; // Update every day
      }
    };

    let timeoutId: NodeJS.Timeout;

    const scheduleNextUpdate = () => {
      const interval = getUpdateInterval();
      timeoutId = setTimeout(() => {
        forceUpdate({});
        scheduleNextUpdate();
      }, interval);
    };

    scheduleNextUpdate();

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isSelected, bus.timestamp]);

  const lastUpdate = new Date(bus.timestamp);
  const now = new Date();
  const diffMs = now.getTime() - lastUpdate.getTime();
  const minutesAgo = Math.floor(diffMs / 60000);
  const hoursAgo = Math.floor(diffMs / (60 * 60000));
  const daysAgo = Math.floor(diffMs / (24 * 60 * 60000));
  const isStale = minutesAgo > 5;

  let timeAgoStr = '';
  if (minutesAgo === 0) {
    timeAgoStr = 'agora';
  } else if (minutesAgo < 60) {
    timeAgoStr = `há ${minutesAgo}m`;
  } else if (hoursAgo < 24) {
    timeAgoStr = `há ${hoursAgo}h`;
  } else {
    timeAgoStr = `há ${daysAgo}d`;
  }

  return (
    <Marker
      ref={markerRef}
      position={[bus.lat, bus.lon]}
      icon={createBusIcon(bus.line || '', isStale, !!isSelected)}
      eventHandlers={{
        click: () => onClick?.(String(bus.busId)),
        popupclose: () => {
          // When popup is closed manually (X button), deselect the bus
          if (isSelected) {
            onClick?.(String(bus.busId));
          }
        },
      }}
    >
      <Popup>
        <div className="p-2 min-w-[200px]">
          <div className="flex items-center gap-2 mb-2">
            <Bus className="w-5 h-5" style={{ color: bus.line === 'HSJ' ? '#0063EC' : bus.line === 'BXP' ? '#9D2F21' : undefined }} />
            <h3 className="font-bold text-lg">
              {bus.name || `Autocarro ${bus.busId}`}
            </h3>
          </div>
          
          <div className="space-y-1 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gray-500" />
              <span className="font-semibold">Linha:</span>
              <span className="px-2 py-0.5 rounded text-white text-xs font-medium"
                    style={{ backgroundColor: bus.line === 'HSJ' ? '#0063EC' : bus.line === 'BXP' ? '#9D2F21' : undefined }}>
                {bus.line || 'Desconhecida'}
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gray-500" />
              <span className="font-semibold">Atualizado:</span>
              <span className={isStale ? 'text-orange-600' : 'text-green-600'}>
                {timeAgoStr}
              </span>
            </div>
            
            <div className="text-xs text-gray-500 mt-2 pt-2 border-t">
              {lastUpdate.toLocaleTimeString('pt-PT')}
            </div>
          </div>
        </div>
      </Popup>
    </Marker>
  );
});

AnimatedBusMarker.displayName = 'AnimatedBusMarker';

// Main BusMap component
const BusMap = ({ buses, isConnected = true, selectedBusId = null, onBusClick }: BusMapProps) => {

  return (
    <div className="relative w-full h-full">
      {/* Connection status indicator */}
      <div className="absolute top-4 right-4 z-[1000] bg-white rounded-lg shadow-lg p-3">
        <div className="flex items-center gap-2">
          {isConnected ? (
            <>
              <Wifi className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-600">Conectado</span>
            </>
          ) : (
            <>
              <WifiOff className="w-4 h-4 text-red-600" />
              <span className="text-sm font-medium text-red-600">Reconectando...</span>
            </>
          )}
        </div>
      </div>

      {/* Map */}
      <MapContainer
        center={[41.178214, -8.595717]}
        zoom={13}
        className="h-full w-full"
        style={{ width: '100%', height: '100%' }}
        zoomControl={true}
      >
        <TileLayer
          url='https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />
        <MapController buses={buses} selectedBusId={selectedBusId} />
        {buses.map((bus) => (
          <AnimatedBusMarker
            key={bus.busId}
            bus={bus}
            isSelected={selectedBusId !== null && String(bus.busId) === String(selectedBusId)}
            onClick={onBusClick}
          />
        ))}
      </MapContainer>

      {/* No buses message */}
      {buses.length === 0 && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-90 z-[1000]">
          <div className="text-center">
            <Bus className="w-12 h-12 mx-auto text-gray-400 mb-2" />
            <p className="text-gray-600">Nenhum autocarro disponível</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BusMap;