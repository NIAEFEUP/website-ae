"use client"

import SectionHeader from "@/components/Common/SectionHeader"
import DocumentSection from "./DocumentSection"
import { DocumentFolder } from "@/payload-types"
import { useState } from "react"
import { Docfile } from "@/payload-types"
import { Dialog, DialogContent, DialogDescription, DialogClose, DialogTitle} from "@/components/ui/dialog"
import { X } from 'lucide-react'


const sections = ['Direção', 'Assembleia Geral']

interface DocumentsPageClientProps {
   documents: DocumentFolder[]
}

const DocumentsPageClient = ({ documents }: DocumentsPageClientProps) => {

   const [selectedFile, setFile] = useState<Docfile | null>(null)

   return (
      <Dialog >
         <main className="py-20 lg:py-25 xl:py-30">
            <SectionHeader
               title="Documentos"
               description="Aqui podes visualizar os vários documentos que permitem acompanhar o trabalho da tua Associação de Estudantes, permitindo uma maior transparência relativa aos assuntos abordados."
            />
            {
               sections.map((section,key) => (
                  <DocumentSection key={key} title={section} setFile={setFile} folders={documents.filter((folder => folder.section_name == section))}></DocumentSection>
               ))
            }

         </main>
         <DialogContent>
            <DialogTitle className="hidden">
               {selectedFile?.filename}
            </DialogTitle>
            <DialogDescription>
               <DialogClose
                  className="absolute top-5 right-5 text-xl p-1 text-white bg-primary border-1 border-primary rounded">
                  <X/>
               </DialogClose>
               <iframe
                  src={selectedFile?.url!}
                  className="w-full h-[800px]"
               />
            </DialogDescription>
         </DialogContent>
      </Dialog>
   )
}

export default DocumentsPageClient