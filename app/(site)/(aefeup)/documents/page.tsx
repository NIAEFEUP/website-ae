import { Metadata } from "next";
import { getPayload } from "payload";
import DocumentsPageClient from "./client"
import config from "payload.config";

export const metadata: Metadata = {
   title: "Documentos",
   description: "Nesta página podes ver vários documentos relacionados com a AEFEUP e a comunidade FEUP.",
 };

 
const DocumentsPage = async () => {

   const payload = await getPayload({ config });

   const documents = await payload.find({
      collection: "documentFolder",
   });

   return <DocumentsPageClient documents={documents.docs}></DocumentsPageClient>
}

export default DocumentsPage