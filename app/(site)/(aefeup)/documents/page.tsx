import { getPayload } from "payload";
import DocumentsPageClient from "./client"
import config from "payload.config";

const DocumentsPage = async () => {

   const payload = await getPayload({ config });

   const documents = await payload.find({
      collection: "documentFolder",
   });

   return <DocumentsPageClient documents={documents.docs}></DocumentsPageClient>
}

export default DocumentsPage