"use client";

import { ReactElement, useState } from 'react';
import { Backpack, Utensils, House, CarFront } from "lucide-react";
import Map from '@/components/Map';
import PlaceBoard from '@/components/PlaceBoard';
import { Place } from '@/payload-types';

type Category = {
  name: string;
  icon: ReactElement;
  marker: string;
};

const categories: Category[] = [
  { name: "Espaços de Estudo", icon: <Backpack />, marker: "" },
  { name: "Alimentação", icon: <Utensils />, marker: "" },
  { name: "Alojamento", icon: <House />, marker: "" },
  { name: "Mobilidade", icon: <CarFront />, marker: "" }
];

interface Props {
  places: Place[];
}

const SpacesPageContent = ({places}: Props) => {
  const [selectedCategory, setSelectedCategory] = useState(0)
  const [selectedPlace, setSelectedPlace] = useState<number | null>(null)
  
  const filteredPlaces = places.filter(place => place.category === categories[selectedCategory].name);

  const handleSelectCategory = (index: number) => {
    setSelectedCategory(index)
    setSelectedPlace(null)
  }

  return (
    <>
      <div className="relative flex h-[calc(50vh)] mx-auto">
        <Map places={filteredPlaces} selected={selectedPlace} onChange={setSelectedPlace}/>
      </div>
      <section className='flex justify-center gap-5 my-5'>
        {categories.map((category,key) => (
          <button
            onClick={() => handleSelectCategory(key)}
            className={`py-2 px-4 rounded-lg transition-all duration-300 flex justify-center gap-5 ${
              selectedCategory === key
                ? "bg-primary text-white"
                : "bg-gray-200 dark:bg-gray-400 dark:text-black hover:shadow-lg"
            }`}
          >
           {category.icon}
           <span className='hidden lg:block'>{category.name}</span>
          </button>
          ))
        }
      </section>
      <PlaceBoard places={filteredPlaces} selected={selectedPlace} onChange={setSelectedPlace}/>
      {filteredPlaces.length === 0 && (
        <div className="text-center text-gray-500">
          Nenhum lugar encontrado para esta categoria.
        </div>
      )}
    </>
  );
};

export default SpacesPageContent;