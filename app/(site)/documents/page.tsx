import { Metadata } from "next";
import SectionHeader from "@/components/Common/SectionHeader";
import PdfViewer from "@/components/Pdf";
import Links from "@/components/Links";
import { getPayload } from 'payload';
import config from 'payload.config';


const payload = await getPayload({config});
const aeDocuments = (await payload.find({
  collection: "document",
})).docs

const linksData = (await payload.find({
  collection: "link"
})).docs

export const metadata: Metadata = {
  title: "Documentos",
  description: "",
};

const DocumentPage = async () => {
  return (
    <section className="pt-20 pb-12 lg:pt-25 xl:pt-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <SectionHeader
            headerInfo={{
              title: "Documentos",
              subtitle: "Estudantes",
            }}
          />
        </div>
    <PdfViewer files={aeDocuments}></PdfViewer>

    </section>
  );
};

export default DocumentPage;
