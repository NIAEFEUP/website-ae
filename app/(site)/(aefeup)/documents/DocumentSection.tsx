"use client"

import PdfViewer from "@/components/Pdf"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Docfile, DocumentFolder } from "@/payload-types"
import { Dialog, DialogContent, DialogDescription, DialogTrigger } from "@radix-ui/react-dialog"
import { Folder, FolderOpen } from "lucide-react"
import { useState } from "react"

interface DocumentFolderProps {
   title: string,
   folders: DocumentFolder[],
   setFile: (file) => void
}

const DocumentSection = ({ title, folders, setFile }: DocumentFolderProps) => {

   const [selectedFolder, setFolder] = useState<DocumentFolder | null>(null)

   return (
      <section className="px-4 md:px-24">
         <h2 className="text-2xl text-black font-bold mt-5 mb-2">{title}</h2>
         <Separator />
         <section className="flex mt-5 gap-3">
            {folders.map((folder,key) => (
               <Card key={key} className={`w-52 cursor-pointer bg-gray-50 hover:bg-slate-100 ${selectedFolder?.folder_name === folder.folder_name ? "border-solid-1 border-blue-500 bg-gray-100" : "border-none"}`} onClick={() => { setFolder(selectedFolder?.folder_name === folder.folder_name ? null : folder); }}>
                  <CardContent className="flex flex-col gap-3 p-4">
                     {selectedFolder?.folder_name === folder.folder_name ?
                        <FolderOpen size={45} color="gray" /> :
                        <Folder size={45} color="gray" />
                     }
                     <div>
                        <h1 className="text-base font-bold">{folder.folder_name}</h1>
                        <h2 className="text-xs">{folder.files.length} ficheiro{folder.files.length > 1 ? "s" : ""}</h2>
                     </div>
                  </CardContent>
               </Card>
            ))}
         </section>
         {selectedFolder &&
            
            <section className="flex mt-3 gap-2">
               {selectedFolder.files.map((file) => {
                  const docFile = file as Docfile;
                  return (
                     <DialogTrigger key={docFile.id}>
                        <Card>
                           <CardContent className="cursor-pointer p-3 hover:bg-gray-100" onClick={() => setFile(docFile)}>
                              {docFile.name}
                           </CardContent>
                        </Card>
                     </DialogTrigger>
                  );

               })}
            </section>}
      </section >
   )
}

export default DocumentSection