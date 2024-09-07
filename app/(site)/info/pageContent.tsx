"use client";

import { useState } from 'react';
import Map from '@/components/Map';
import MapFilter from '@/components/MapFilter';
import { Category } from '@/payload-types';
import PlaceCard from '@/components/MapFilter/PlaceCard.tsx';

interface InfoMapProps {
  categories: Category[];
}

const InfoPageContent = ({ categories }: InfoMapProps) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | undefined>();
  const [hoveredPlaceId, setHoveredPlaceId] = useState<number | undefined>();

  const places = selectedCategoryId
    ? categories.find(category => category.id === selectedCategoryId)?.places || []
    : categories.flatMap(category => category.places);

  const hoveredPlace = places.find(place => place.id === hoveredPlaceId);

  return (
    <div className="relative flex h-[calc(70vh)] mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
      <Map 
        places={places} 
        hoveredPlaceId={hoveredPlaceId} 
        onHoverPlace={setHoveredPlaceId}
      />
      <MapFilter
        categories={categories}
        places={places}
        onCategoryChange={setSelectedCategoryId}
        hoveredPlaceId={hoveredPlaceId}
        onHoverPlace={setHoveredPlaceId}
      />
      {hoveredPlace && <PlaceCard place={hoveredPlace} />}
    </div>
  );
};

export default InfoPageContent;