"use client";

import SectionHeader from "@/components/Common/SectionHeader";
import socialAidData from "./socialAidData";
import mentalHealthData from "./mentalHealthData";
import scholarshipData from "./scholarshipsData";
import { Feature } from "@/types/feature";
import LearnMore from "@/components/LearnMore";

//restructure this

const SocialAidClientPage = async () => {
  return (
    <>
      {/* <!-- SCHOLARSHIPS SECTION --> */}
      <section id="features" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <SectionHeader
            title="Bolsas de Estudo"
            description="Descobre as diversas oportunidades de bolsas de estudo disponíveis para apoiar o teu percurso académico."
          />

          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5 ">
            {scholarshipData.map((feature: Feature) => (
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

      {/* <!-- CANAIS DE APOIO --> */}
      <section className="overflow-hidden pb-20 pt-25 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top mx-auto text-center">
            <SectionHeader
                title="Canais de Apoio"
                description="Explora os nossos programas de suporte para garantir o seu bem-estar e sucesso académico."
            />
          </div>
          {/* <!-- Section Title End --> */}
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

      {/* <!-- SAUDE MENTAL --> */}
      <section className="overflow-hidden pb-20 pt-25 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top mx-auto text-center">
            <SectionHeader
                title="Saúde Mental"
                description="Apoio psicológico para o bem-estar e sucesso dos estudantes."
            />
          </div>
          {/* <!-- Section Title End --> */}
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
