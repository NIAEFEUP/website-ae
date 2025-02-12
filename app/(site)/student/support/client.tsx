"use client";

import { useState } from "react";
import SectionHeader from "@/components/Common/SectionHeader";
import LearnMore from "@/components/LearnMore";
import scholarshipData from "./scholarshipsData";
import socialAidData from "./socialAidData";
import mentalHealthData from "./mentalHealthData";
import { Feature } from "@/types/feature";

const categories = [
  { label: "Bolsas Ação Social", filter: "acao-social" },
  { label: "Bolsas Mérito", filter: "merito" },
  { label: "Bolsas PALOP", filter: "palop" },
  { label: "Bolsas Doutoramento", filter: "doutoramento" },
  { label: "Outras", filter: "outras" },
];

const filterScholarships = (filter: string) => {
  if (!filter) return scholarshipData;
  return scholarshipData.filter((scholarship) => scholarship.category === filter);
};

const SocialAidClientPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("acao-social");

  return (
    <>
      {/* <!-- SCHOLARSHIPS SECTION --> */}
      <section className="overflow-hidden pb-20 pt-25 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              title="Bolsas de Estudo"
              description="Descobre as diversas oportunidades de bolsas de estudo disponíveis para apoiar o teu percurso académico."
            />
          </div>
        </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-8 px-4">
        {categories.map((category) => (
          <button
            key={category.filter}
            className={`px-4 py-2 rounded text-white transition-all duration-200
              ${
                selectedCategory === category.filter
                  ? "bg-[#97321D] font-bold"
                  : "bg-gray-500 hover:bg-gray-600"
              }`}
            onClick={() =>
              setSelectedCategory(
                category.filter
              )
            }
          >
            {category.label}
          </button>
        ))}
      </div>

        {/* Scholarships List*/}
        <div className="flex flex-wrap justify-center gap-4 xl:gap-6 m-10 w-full">
          {filterScholarships(selectedCategory).map((feature) => (
              <LearnMore
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                href={feature.href}
                buttonLabel="Saber mais"
              />
          ))}
        </div>


      </section>

      {/* <!-- CANAIS DE APOIO --> */}
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              title="Canais de Apoio"
              description="Explora os nossos programas de suporte para garantir o seu bem-estar e sucesso académico."
            />
          </div>
        </div>
        <div className="relative mx-auto mt-15 max-w-[1207px] px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="flex flex-wrap justify-center gap-7.5 lg:flex-nowrap xl:gap-12.5">
            {socialAidData.map((feature: Feature) => (
              <LearnMore
                key={feature.id}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                href={feature.href}
                buttonLabel="Saber mais"
              />
            ))}
          </div>
        </div>
      </section>

      {/* <!-- SAÚDE MENTAL --> */}
      <section className="overflow-hidden pb-20 pt-25 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              title="Saúde Mental"
              description="Apoio psicológico para o bem-estar e sucesso dos estudantes."
            />
          </div>
        </div>
        <div className="py-7.5">
          <div className="flex flex-wrap justify-center gap-7.5 lg:flex-nowrap xl:gap-12.5">
            {mentalHealthData.map((feature) => (
              <LearnMore
                key={feature.id}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                details={feature.details}
                href={feature.href}
                buttonLabel="Saber mais"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SocialAidClientPage;
