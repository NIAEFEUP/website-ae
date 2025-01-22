import { Metadata } from "next";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import SuggestionBox from "@/components/Sugestion";
import { getPayload } from "payload";
import config from "payload.config";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contacta-nos para qualquer dúvida ou sugestão. Estamos aqui para ajudar!", 
};



async function getFaqData() {
  if(process.env.IS_BUILD) {
     console.log('skipping getProjects DB call during build')
     return []
  }

  const payload = await getPayload({config});
  const faqData = (await payload.find({
    collection: 'faq'
  })).docs;

  return faqData
}

const ContactsPage = async () => {  
  const faqData = await getFaqData()
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
    </main>
  );
}
export default ContactsPage;
