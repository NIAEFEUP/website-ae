'use client'
import SectionHeader from "@/components/Common/SectionHeader";

const HeaderEvents = () => {
  return (
    <>
      <div className="overflow-hidden pb-8 pt-36 md:pt-24 xl:pb-24 xl:pt-32">
        <SectionHeader
          title="Eventos"
          subtitle="Conhece os nossos eventos"
          description="A AEFEUP organiza diversos eventos ao longo do ano letivo, com o objetivo de promover a integração dos estudantes e proporcionar momentos de convívio e diversão."
        />
      </div>
    </>
  )
}

export default HeaderEvents;