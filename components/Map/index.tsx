import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
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

const Map = ({ places = [], selected, onChange } : Props) => {
  return (
    <div className="flex-1 bg-gray-100 dark:bg-black rounded-lg shadow-solid-4">
      <MapContainer center={[41.17821442317816, -8.595717162899934]} zoom={17} className="h-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {places.map(place => (
          <Marker
            key={place.id}
            position={[place.position.lat, place.position.lng]}
            opacity={place.id === selected ? 1 : 0.8}
            eventHandlers={{
              click: () => onChange(place.id)
            }}
          />
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;