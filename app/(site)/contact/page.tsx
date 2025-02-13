import { Metadata } from "next";
import FAQ from "./FAQ";
import { getPayload } from "payload";
import config from "payload.config";
import { Feedback } from "./Feedback";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contacta-nos para qualquer dúvida ou sugestão. Estamos aqui para ajudar!",
};

async function getFaqData() {
  if (process.env.IS_BUILD) {
    console.log('skipping getProjects DB call during build')
    return []
  }

  const payload = await getPayload({ config });
  const faqData = (await payload.find({
    collection: 'faq'
  })).docs;

  return faqData
}

async function getFeedbackLinks() {
  if (process.env.IS_BUILD) {
    console.log('skipping getFeedbackLinks DB call during build')
    return []
  }

  const payload = await getPayload({ config });
  const feedbackLinks = (await payload.find({
    collection: 'feedbacklinks'
  })).docs;

  return feedbackLinks  
}

const ContactsPage = async () => {
  const faqData = await getFaqData()
  const feedbackLinks = await getFeedbackLinks()
  return (
    <main>
      <div className="pt-20 lg:pt-25 xl:pt-30">
        {
          faqData.length > 0 && (
            <FAQ faqData={faqData} />
          )
        }
      </div>
      <div className="pt-7 lg:pt-10 xl:pt-15 pb-12 lg:pb-16">
        {
          feedbackLinks.length > 0 && (
            <Feedback feedbackData={feedbackLinks}/>
          )
        }
      </div>
    </main>
  );
}
export default ContactsPage;
