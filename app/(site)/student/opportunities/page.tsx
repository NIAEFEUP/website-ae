"use client"

import SectionHeader from "@/components/Common/SectionHeader"
import volunteeringData from "./volunteeringData"
import workshopData from "./workshopData"
import LearnMore from "@/components/LearnMore"

const OpportunitiesPage = () => {
   return (<>
      {/* <!-- VOLUNTARIADO --> */}
      <section className="overflow-hidden pb-20 pt-25 lg:pb-15 xl:pb-20">
         <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
            {/* <!-- Section Title Start --> */}
            <div className="animate_top mx-auto text-center">
               <SectionHeader
                  headerInfo={{
                     title: `Voluntariado`,
                     subtitle: `Voluntariado Estudantil`,
                     description: `Ações de interesse social e comunitário realizadas de forma desinteressada que desenvolvem competências pessoais e sociais e promovem a responsabilidade, ética e compromisso social.`,
                  }}
               />
            </div>
            {/* <!-- Section Title End --> */}
            <div className="py-20 ">

               <div className="flex flex-wrap justify-center gap-7.5 lg:flex-nowrap xl:gap-12.5">
                  {/* <!-- Features item Start --> */}
                  {volunteeringData.map((feature) => (
                     <LearnMore
                        key={feature.id}
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                        details={feature.details}
                        href={feature.href}
                     />
                  ))}

                  {/* <!-- Features item End --> */}
               </div>
            </div>
         </div>
      </section>

      <section className="overflow-hidden pb-20 pt-25 lg:pb-25 xl:pb-30">
         <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
            {/* <!-- Section Title Start --> */}
            <div className="animate_top mx-auto text-center">
               <SectionHeader
                  headerInfo={{
                     title: `Formações`,
                     subtitle: `Formações Estudantis`,
                     description: ""
                  }}
               />
            </div>
            {/* <!-- Section Title End --> */}
            <div className="py-20 ">

               <div className="flex flex-wrap justify-center gap-7.5 lg:flex-nowrap xl:gap-12.5">
                  {/* <!-- Features item Start --> */}
                  {workshopData.map((feature) => (
                     <LearnMore
                        key={feature.id}
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                        details={feature.details}
                        href={feature.href}
                     />
                  ))}

                  {/* <!-- Features item End --> */}
               </div>
            </div>
         </div>
      </section>
   </>)
}

export default OpportunitiesPage