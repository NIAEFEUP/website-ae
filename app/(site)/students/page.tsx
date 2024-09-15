import { Metadata } from "next";
import SectionHeader from "@/components/Common/SectionHeader";
import PdfViewer from "@/components/Pdf";
import Links from "@/components/Links";
import { getPayload } from 'payload';
import config from 'payload/config';

const payload = await getPayload({config});
const result = await payload.find({
  collection: "board_section",
})

export const metadata: Metadata = {
  title: "Estudantes",
  description: "",
};

const StudentPage = async () => {
  return (
    <section className="pt-20 pb-12 lg:pt-25 xl:pt-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <SectionHeader
            headerInfo={{
              title: "Informações",
              subtitle: "Estudantes",
              description: `O Guia do Estudante é um projeto da AEFEUP em que poderás ter acesso a toda a informação necessária durante o teu percurso académico.
Aqui poderás encontrar conteúdo relacionado com os serviços da FEUP, redes de transporte, alimentação, contactos úteis, entre outros.
`,
            }}
          />
        </div>
    
    <PdfViewer files={result.docs}></PdfViewer>
    <Links></Links>



    </section>
  );
};

export default StudentPage;
