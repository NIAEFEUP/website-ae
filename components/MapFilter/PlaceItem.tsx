import { Place } from '@/payload-types';
import PlaceCard from './PlaceCard';

interface PlaceItemProps {
  place: Place;
  onHover: () => void;
  onHoverOut: () => void;
  isHovered: boolean;
}

const PlaceItem = ({ place, onHover, onHoverOut, isHovered }: PlaceItemProps) => {
  return (
    <div
      className="relative p-3 cursor-pointer hover:bg-primary hover:text-white shadow-sm"
      onMouseEnter={onHover}
      onMouseLeave={onHoverOut}
    >
      <p>{place.name}</p>
    </div>
  );
};

export default PlaceItem;
