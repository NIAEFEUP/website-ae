import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect } from 'react';
import { Place } from '@/payload-types';

const customIcon = new L.Icon({
  iconUrl: '/marker-icon.png',
  shadowUrl: '/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

interface MapProps {
  places: Place[];
  hoveredPlaceId?: number;
  onHoverPlace: (placeId?: number) => void;
}

const Map = ({ places, hoveredPlaceId, onHoverPlace }: MapProps) => {
  const FitMapBounds = ({ places }: { places: Place[] }) => {
    const map = useMap();
    useEffect(() => {
      if (places.length > 0) {
        const bounds = new L.LatLngBounds(places.map(place => [place.position.lat, place.position.lng]));
        map.fitBounds(bounds, { padding: [20, 20] });
      }
    }, [places, map]);
    return null;
  };

  return (
    <div className="flex-1 bg-gray-100 dark:bg-black rounded-lg shadow-solid-4">
      <MapContainer center={[41.17821442317816, -8.595717162899934]} zoom={17} className="h-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <FitMapBounds places={places} />
        {places.map(place => (
          <Marker
            key={place.id}
            position={[place.position.lat, place.position.lng]}
            icon={customIcon}
            opacity={place.id === hoveredPlaceId ? 1 : 0.5}
            eventHandlers={{
              mouseover: () => onHoverPlace(place.id),
              mouseout: () => onHoverPlace(undefined),
            }}
          />
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
