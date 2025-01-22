import { Metadata } from "next";
import { getPayload } from "payload";
import DocumentsPageClient from "./client"
import config from "payload.config";

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
   title: "Documentos",
   description: "Nesta página podes ver vários documentos relacionados com a AEFEUP e a comunidade FEUP.",
 };

async function getDocuments() {
   if(process.env.IS_BUILD) {
      console.log('skipping getProjects DB call during build')
      return []
   }

   const payload = await getPayload({ config });
   const documents = await payload.find({
      collection: "documentFolder",
   });

   return documents.docs
}
 
const DocumentsPage = async () => {
   const documents = await getDocuments()
   return <DocumentsPageClient documents={documents}></DocumentsPageClient>
}

export default DocumentsPage