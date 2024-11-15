import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect, useMemo } from 'react';
import { Place } from '@/payload-types';

import MarkerIcon from 'leaflet/dist/images/marker-icon.png';
import MarkerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import MarkerShadow from 'leaflet/dist/images/marker-shadow.png';

L.Icon.Default.mergeOptions({
  iconRetinaUrl: MarkerIcon2x.src,
  iconUrl: MarkerIcon.src,
  shadowUrl: MarkerShadow.src,
});

interface Props {
  places: Place[];
  selected: null | number;
  onChange: (placeId: number | null) => void;
}

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

const Map = ({ places = [], selected, onChange }: Props) => {
  return (
    <MapContainer 
      center={[41.17821442317816, -8.595717162899934]} 
      zoom={17} 
      className="h-full"
      style={{ width: '100%', height: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <FitMapBounds places={places} />
      {places.map(place => (
        <Marker
          key={place.id}
          position={[place.position.lat, place.position.lng]}
          opacity={place.id === selected ? 1 : 0.8}
          eventHandlers={{
            click: () => onChange(place.id),
          }}
        />
      ))}
    </MapContainer>
  );
};

export default Map;