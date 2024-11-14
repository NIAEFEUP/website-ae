import { Card, CardContent } from "@/components/ui/card"
import { Docfile } from "@/payload-types"

type FileListProps = {
   files: Docfile[]
}

const FileList = ({ files }: FileListProps) => {
   return (
      <div className="flex">
         {
            files.map((file) => (
               <Card key={file.id} className="w-52">
                  <CardContent>
                     {file.filename}
                  </CardContent>
               </Card>
            ))
         }
      </div>
   )
}

export default FileList