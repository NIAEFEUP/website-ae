import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect, useRef, memo, useState } from 'react';
import { Bus, Clock, MapPin, Wifi, WifiOff, PartyPopper } from 'lucide-react';
import type { EnrichedBusData } from "@/types/bus";

interface BusMapProps {
  buses: EnrichedBusData[];
  isConnected?: boolean;
  selectedBusId?: string | null;
  onBusClick?: (busId: string) => void;
  showStops?: boolean;
  showFestival?: boolean;
}

const BUS_STOPS = [
  { id: 'HSJ', name: 'Hospital São João', lat: 41.1832476, lon: -8.6000586, color: '#0063EC' },
  { id: 'EXP', name: 'Exponor', lat: 41.198222205665814, lon: -8.69155082756477, color: '#10b981' },
  { id: 'BXP', name: 'Baixa do Porto', lat: 41.14521356392103, lon: -8.615951335581975, color: '#9D2F21' },
];

const FESTIVAL_LOCATION = {
  name: "Arraial D'Engenharia",
  lat: 41.198839,
  lon: -8.688565,
};

const createBusIcon = (line: string, isStale: boolean, isSelected: boolean) => {
  const colors = {
    'HSJ': '#0063EC', // blue - Hospital São João
    'BXP': '#9D2F21',  // red - Baixa do Porto
  };
  
  const color = colors[line as keyof typeof colors] || '#6b7280';
  const opacity = isStale ? 0.5 : 1;
  
  return L.divIcon({
    className: 'custom-bus-icon',
    html: `
      <div class="relative flex items-center justify-center w-10 h-10">
        <div class="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white shadow-md transition-transform duration-300"
             style="background: ${color}; opacity: ${opacity}; transform: ${isSelected ? 'scale(1.2)' : 'scale(1)'};">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M8 6v6"/>
            <path d="M15 6v6"/>
            <path d="M2 12h19.6"/>
            <path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"/>
            <circle cx="7" cy="18" r="2"/>
            <circle cx="17" cy="18" r="2"/>
          </svg>
        </div>
        ${!isStale ? `
          <div class="absolute -top-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full animate-[pulse_2s_infinite]"></div>
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

// Create icon for bus stops
const createStopIcon = (stopId: string, color: string) => {
  return L.divIcon({
    className: 'custom-stop-icon',
    html: `
      <div class="flex items-center justify-center w-8 h-8 border-2 border-white shadow-md"
           style="border-radius:50% 50% 50% 0;transform:rotate(-45deg);background:${color};">
        <span class="text-white font-bold text-[12px]" style="transform:rotate(45deg);">${stopId}</span>
      </div>
    `,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
};

const createFestivalIcon = () => {
  return L.divIcon({
    className: 'custom-festival-icon',
    html: `
      <div class="w-10 h-10 rounded-full flex items-center justify-center border-2 border-white shadow-lg animate-[festivalPulse_3s_infinite]"
           style="background: linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%);">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5.8 11.3 2 22l10.7-3.79"/>
          <path d="M4 3h.01"/>
          <path d="M22 8h.01"/>
          <path d="M15 2h.01"/>
          <path d="M22 20h.01"/>
          <path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"/>
          <path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17"/>
          <path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7"/>
          <path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"/>
        </svg>
      </div>
      <style>
        @keyframes festivalPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.9; }
        }
      </style>
    `,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  });
};

// Component to handle map bounds and animations
const MapController = memo(({ buses, selectedBusId }: { buses: EnrichedBusData[], selectedBusId: string | null }) => {
  const map = useMap();
  const isInitialMount = useRef(true);
  const prevSelectedBusId = useRef<string | null>(null);

  useEffect(() => {
    if (buses.length > 0) {
      const stopCoords = BUS_STOPS.map(stop => [stop.lat, stop.lon] as [number, number]);
      const busCoords = buses.map(bus => [bus.lat, bus.lon] as [number, number]);
      const allCoords = [...busCoords, ...stopCoords];
      const bounds = new L.LatLngBounds(allCoords);

      if (isInitialMount.current) {
        map.fitBounds(bounds, { padding: [15, 15], maxZoom: 15 });
        isInitialMount.current = false;
      }
    }
  }, [buses, map]);

  // Fly to selected marker when it changes (bus, stop, or festival)
  useEffect(() => {
    if (selectedBusId && selectedBusId !== prevSelectedBusId.current) {
      let targetLat: number | null = null;
      let targetLon: number | null = null;

      // Check if it's a bus
      const selectedBus = buses.find(b => String(b.busId) === selectedBusId);
      if (selectedBus) {
        targetLat = selectedBus.lat;
        targetLon = selectedBus.lon;
      } else {
        // Check if it's a bus stop
        const selectedStop = BUS_STOPS.find(s => s.id === selectedBusId);
        if (selectedStop) {
          targetLat = selectedStop.lat;
          targetLon = selectedStop.lon;
        } else if (selectedBusId === 'FESTIVAL') {
          // Check if it's the festival location
          targetLat = FESTIVAL_LOCATION.lat;
          targetLon = FESTIVAL_LOCATION.lon;
        }
      }

      if (targetLat !== null && targetLon !== null) {
        const isMobile = window.innerWidth < 768;
        const targetZoom = Math.max(map.getZoom(), 15);
        
        if (isMobile) {
          // On mobile, offset the target point downward so the popup fits above
          const point = map.project([targetLat, targetLon], targetZoom);
          // Offset by ~25% of map height downward
          point.y -= map.getSize().y * 0.25;
          const newLatLng = map.unproject(point, targetZoom);
          
          map.flyTo(newLatLng, targetZoom, {
            duration: 0.5
          });
        } else {
          // On desktop, center normally
          map.flyTo([targetLat, targetLon], targetZoom, {
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

// Animated stop marker component
const AnimatedStopMarker = memo(({ stop, isSelected, onClick }: { stop: typeof BUS_STOPS[0], isSelected?: boolean, onClick?: (id: string) => void }) => {
  const markerRef = useRef<L.Marker | null>(null);
  const prevSelected = useRef(isSelected);

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

  return (
    <Marker
      ref={markerRef}
      position={[stop.lat, stop.lon]}
      icon={createStopIcon(stop.id, stop.color)}
      eventHandlers={{
        click: () => onClick?.(stop.id),
        popupclose: () => {
          if (isSelected) {
            onClick?.(stop.id);
          }
        },
      }}
    >
      <Popup>
        <div className="p-2 min-w-[180px]">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="w-5 h-5" style={{ color: stop.color }} />
            <h3 className="font-bold">{stop.name}</h3>
          </div>
          <div className="text-sm">
            <span className="px-2 py-1 rounded text-white text-xs font-medium inline-block"
                  style={{ backgroundColor: stop.color }}>
              Paragem {stop.id}
            </span>
          </div>
        </div>
      </Popup>
    </Marker>
  );
});

AnimatedStopMarker.displayName = 'AnimatedStopMarker';

// Animated festival marker component
const AnimatedFestivalMarker = memo(({ isSelected, onClick }: { isSelected?: boolean, onClick?: (id: string) => void }) => {
  const markerRef = useRef<L.Marker | null>(null);
  const prevSelected = useRef(isSelected);

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

  return (
    <Marker
      ref={markerRef}
      position={[FESTIVAL_LOCATION.lat, FESTIVAL_LOCATION.lon]}
      icon={createFestivalIcon()}
      eventHandlers={{
        click: () => onClick?.('FESTIVAL'),
        popupclose: () => {
          if (isSelected) {
            onClick?.('FESTIVAL');
          }
        },
      }}
    >
      <Popup>
        <div className="p-2 min-w-[200px]">
          <div className="flex items-center gap-2 mb-2">
            <PartyPopper className="w-5 h-5 text-pink-500" />
            <h3 className="font-bold text-lg">{FESTIVAL_LOCATION.name}</h3>
          </div>
          <div className="space-y-1 text-sm">
            <a
              href="https://maps.app.goo.gl/KMc4yd6Ufjs6hHgYA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline text-xs mt-2 block"
            >
              Abrir no Google Maps
            </a>
          </div>
        </div>
      </Popup>
    </Marker>
  );
});

AnimatedFestivalMarker.displayName = 'AnimatedFestivalMarker';

// Main BusMap component
const BusMap = ({ buses, isConnected = true, selectedBusId = null, onBusClick, showStops = true, showFestival = true }: BusMapProps) => {
  const handleMarkerClick = (id: string) => {
    onBusClick?.(id);
  };

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
        
        {/* Festival location marker */}
        {showFestival && (
          <AnimatedFestivalMarker
            isSelected={selectedBusId === 'FESTIVAL'}
            onClick={handleMarkerClick}
          />
        )}

        {/* Bus stop markers */}
        {showStops && BUS_STOPS.map((stop) => (
          <AnimatedStopMarker
            key={stop.id}
            stop={stop}
            isSelected={selectedBusId === stop.id}
            onClick={handleMarkerClick}
          />
        ))}

        {/* Bus markers */}
        {buses.map((bus) => (
          <AnimatedBusMarker
            key={bus.busId}
            bus={bus}
            isSelected={selectedBusId !== null && String(bus.busId) === String(selectedBusId)}
            onClick={handleMarkerClick}
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