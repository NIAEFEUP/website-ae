"use client"

import SectionHeader from "@/components/Common/SectionHeader"
import LearnMore from "@/components/LearnMore"
import { HandHeart, BookOpenText, HeartHandshake, Heart, Users, GraduationCap, Globe, Sheet, Star, Briefcase, HelpingHand } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  HandHeart: <HandHeart />,
  BookOpenText: <BookOpenText />,
  HeartHandshake: <HeartHandshake />,
  Heart: <Heart />,
  Users: <Users />,
  GraduationCap: <GraduationCap />,
  Globe: <Globe />,
  Sheet: <Sheet />,
  Star: <Star />,
  Briefcase: <Briefcase />,
  HelpingHand: <HelpingHand />,
};

const OpportunitiesClientPage = ({ opportunities }: { opportunities: any }) => {
   return (<>
      {opportunities?.types?.map((type: any, idx: number) => (
         <section key={idx} className="overflow-hidden pt-25 lg:pb-15 xl:pb-20">
            <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
               {/* <!-- Section Title Start --> */}
               <div className="animate_top mx-auto text-center">
                  <SectionHeader
                     title={type.title}
                     description={type.description}
                  />
               </div>
               {/* <!-- Section Title End --> */}
               <div className="py-20">

                  <div className="flex flex-wrap justify-center gap-7.5 lg:flex-nowrap xl:gap-12.5">
                     {/* <!-- Features item Start --> */}
                     {type.opportunities?.map((feature: any, i: number) => (
                        <LearnMore
                           key={i}
                           icon={iconMap[feature.icon]}
                           title={feature.title}
                           description={feature.description}
                           details={feature.details?.map((d: any) => d.detail)}
                           href={feature.href}
                        />
                     ))}

                     {/* <!-- Features item End --> */}
                  </div>
               </div>
            </div>
         </section>
      ))}
   </>)
}

export default OpportunitiesClientPage