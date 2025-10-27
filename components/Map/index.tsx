import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect } from 'react';
import { Place } from '@/payload-types';
import backpackIcon from "@/public/images/map/backpack.svg";
import utensilsIcon from "@/public/images/map/utensils.svg";
import houseIcon from "@/public/images/map/house.svg";
import carfrontIcon from "@/public/images/map/carfront.svg";
import festivalIcon from "@/public/images/map/festival.svg";

const customIcons = {
  "Espaços de Estudo": L.icon({
    iconUrl: backpackIcon.src,
    iconSize: [50, 50],
    iconAnchor: [25, 50],
  }),
  "Alimentação": L.icon({
    iconUrl: utensilsIcon.src,
    iconSize: [50, 50],
    iconAnchor: [25, 50],
  }),
  "Alojamento": L.icon({
    iconUrl: houseIcon.src,
    iconSize: [50, 50],
    iconAnchor: [25, 50],
  }),
  "Mobilidade": L.icon({
    iconUrl: carfrontIcon.src,
    iconSize: [50, 50],
    iconAnchor: [25, 50],
  }),
  "Festival": L.icon({
    iconUrl: festivalIcon.src,
    iconSize: [50, 50],
    iconAnchor: [25, 50],
  }),
};

interface Props {
  places: Place[];
  selected: null | number;
  onChange: (placeId: number | null) => void;
}

const FitMapBounds = ({ places, selected }: { places: Place[], selected: null | number }) => {
  const map = useMap();
  useEffect(() => {
    if (selected !== null) {
      const selectedPlace = places.find(place => place.id === selected);
      if (selectedPlace) {
        map.setView([selectedPlace.position.lat, selectedPlace.position.lng], Math.max(map.getZoom(), 17));
      }
    } else if (places.length > 0) {
      const bounds = new L.LatLngBounds(places.map(place => [place.position.lat, place.position.lng]));
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [places, selected, map]);
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
        url='https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png'
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      />
      <FitMapBounds places={places} selected={selected} />
      {places.map(place => (
        <Marker
          key={place.id}
          position={[place.position.lat, place.position.lng]}
          icon={customIcons[place.category] as L.Icon}
          opacity={place.id === selected ? 1 : 0.7}
          eventHandlers={{
            click: () => onChange(place.id),
          }}
        />
      ))}
    </MapContainer>
  );
};

export default Map;