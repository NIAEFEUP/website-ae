"use client";

import { useState } from 'react';
import CategorySelector from './CategorySelector';
import PlaceItem from './PlaceItem';
import { Category, Place } from '@/payload-types';

interface MapFilterProps {
  categories: Category[];
  places: Place[];
  onCategoryChange: (categoryId?: number) => void;
  onHoverPlace: (placeId: number) => void;
  hoveredPlaceId?: number;
}

const MapFilter = ({ categories, places, onCategoryChange, onHoverPlace, hoveredPlaceId }: MapFilterProps) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | undefined>();

  const handleCategoryChange = (categoryId?: number) => {
    setSelectedCategoryId(categoryId);
    onCategoryChange(categoryId);
  };

  return (
    <div className="h-full w-80 ml-4 bg-gray-50 dark:bg-gray-900 bg-opacity-50 rounded-lg shadow-sm">
      <CategorySelector 
        categories={categories} 
        selectedCategoryId={selectedCategoryId} 
        onSelectCategory={handleCategoryChange} 
      />
      <div className="max-h-80 overflow-y-auto divide-y divide-gray-300 dark:divide-gray-700">
        {places.map(place => (
          <PlaceItem
            key={place.id}
            place={place}
            onHover={() => onHoverPlace(place.id)}
            onHoverOut={() => onHoverPlace(undefined)}
            isHovered={place.id === hoveredPlaceId}
          />
        ))}
      </div>
    </div>
  );
};

export default MapFilter;
