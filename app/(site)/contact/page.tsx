import { Metadata } from "next";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import SuggestionBox from "@/components/Sugestion";
import { getPayload } from "payload";
import config from "payload.config";
import SectionHeader from "@/components/Common/SectionHeader";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contacta-nos para qualquer dúvida ou sugestão. Estamos aqui para ajudar!", 
};


const payload = await getPayload({config});
const faqData = (await payload.find({
  collection: 'faq'
})).docs;

const ContactsPage = () => {  
  return (
    <main>
      <div className="pt-20 lg:pt-25 xl:pt-30"> 
      <Contact />
      </div>
      <div className="pt-20 lg:pt-25 xl:pt-30"> 
      <FAQ faqData={faqData}/>
      </div>
      <div className=" pt-20 lg:pt-25 xl:pt-30 pb-20 lg:pb-25 xl:pb-30"> 
      <SuggestionBox />
      </div>

      <Toaster
        position="bottom-right"
      />
    </main>
  );
}
export default ContactsPage;
