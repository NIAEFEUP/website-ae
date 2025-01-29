import { Metadata } from "next";
import SectionHeader from "@/components/Common/SectionHeader";
import PdfViewer from "@/components/Pdf";
import Links from "@/components/Links";
import { getPayload } from 'payload';
import config from 'payload.config';

export const revalidate = 10
export const dynamicParams = true

async function getStudentGuide() {
  if(process.env.IS_BUILD) {
     console.log('skipping getStudentGuide DB call during build')
     return []
  }

  const payload = await getPayload({ config });
  const studentGuide = (await payload.find({
    collection: "studentGuide",
  })).docs

  return studentGuide
}

async function getLinksData() {
  if(process.env.IS_BUILD) {
     console.log('skipping getLinksData DB call during build')
     return []
  }

  const payload = await getPayload({ config });
  const linksData = (await payload.find({
    collection: "link"
  })).docs

  return linksData 
}


export const metadata: Metadata = {
  title: "Guia do Estudante",
  description: "O Guia do Estudante é um projeto da AEFEUP em que poderás ter acesso a toda a informação necessária durante o teu percurso académico. Aqui poderás encontrar conteúdo relacionado com os serviços da FEUP, redes de transporte, alimentação, contactos úteis, entre outros.",
};

const StudentPage = async () => {
  const linksData = await getLinksData()
  const studentGuide = await getStudentGuide()

  return (
    <section className="pt-20 pb-12 lg:pt-25 xl:pt-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <SectionHeader
          title="Informações"
          description="O Guia do Estudante é um projeto da AEFEUP em que poderás ter acesso a toda a informação necessária durante o teu percurso académico. Aqui poderás encontrar conteúdo relacionado com os serviços da FEUP, redes de transporte, alimentação, contactos úteis, entre outros."
        />
      </div>

      <Links links={linksData}></Links>
      <PdfViewer files={studentGuide}></PdfViewer>

    </section>
  );
};

export default StudentPage;
