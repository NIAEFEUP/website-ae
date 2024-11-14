import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Person } from "./collections/Person";
import { Material } from "./collections/Material";
import { SportsTeam } from "./collections/SportsTeam";
import { SpaceData } from "./collections/SpaceData";
import { Sponsor } from "./collections/Sponsor";
import { Association } from "./collections/Association";
import { StudentGuide } from "./collections/StudentGuide";
import { Link } from "./collections/Link";
import { Position } from "./collections/Position";
import { BoardSection } from "./collections/BoardSection";
import { President } from "./collections/President";
import { DocumentFolder } from "./collections/DocumentFolder";
import { DocFile } from "./collections/DocFile";
import { Video } from "./collections/Video";
import { Faq } from "./collections/Faq";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    dateFormat: "dd MMMM yyyy",
  },
  collections: [
    Users,
    Media,
    Person,
    Material,
    SportsTeam,
    Sponsor,
    Association,
    StudentGuide,
    Link,
    Position,
    BoardSection,
    President,
    SpaceData,
    DocumentFolder,
    DocFile,
    Video,
    Faq
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URL || "",
    },
  }),
  sharp,
  plugins: [
    // storage-adapter-placeholder
  ],
  //livePreview: false, // Lets set it to true if we use pages collection (Globals)
});
