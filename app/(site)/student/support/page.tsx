"use client";

import SectionHeader from "@/components/Common/SectionHeader";
import socialAidData from "./socialAidData";
import mentalHealthData from "./mentalHealthData";
import { Feature } from "@/types/feature";
import LearnMore from "@/components/LearnMore";

const ApoioSocialPage = async () => {
  return (
    <>
      {/* <!-- CANAIS DE APOIO --> */}
      <section className="overflow-hidden pb-20 pt-25 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: `Canais de Apoio`,
                subtitle: `Canais de Apoio`,
                description: `Explore os nossos programas de suporte para garantir o seu bem-estar e sucesso académico.`,
              }}
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
              headerInfo={{
                title: `Saúde Mental`,
                subtitle: `Saúde Mental`,
                description: `Apoio psicológico para o bem-estar e sucesso dos estudantes.`,
              }}
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

export default ApoioSocialPage;
