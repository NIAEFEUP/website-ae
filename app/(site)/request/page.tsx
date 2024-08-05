import SectionHeader from "@/components/Common/SectionHeader"
import { Metadata } from "next"

export const metadata: Metadata = {
	title: "Reequest Page",
	description: "yep"
}

export default function RequestPage() {
	return (
		<>
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
				<SectionHeader
					headerInfo={{
						title: "Request",
						subtitle: "Request Material",
						description: "Vai po caralho"
					}} />
      </section>
		</>
	)
}