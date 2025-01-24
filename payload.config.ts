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
import { Space } from "./collections/Space";
import { Sponsor } from "./collections/Sponsor";
import { Association } from "./collections/Association";
import { StudentGuide } from "./collections/StudentGuide";
import { Link } from "./collections/Link";
import { Position } from "./collections/Position";
import { BoardSection } from "./collections/BoardSection";
import { President } from "./collections/President";
import { Event } from "./collections/Event";
import { DocumentFolder } from "./collections/DocumentFolder";
import { DocFile } from "./collections/DocFile";
import { Video } from "./collections/Video";
import { Faq } from "./collections/Faq";
import { Place } from "./collections/Place";
import { Testimonal } from "./collections/Testimonial";

import { en } from '@payloadcms/translations/languages/en'
import { pt } from '@payloadcms/translations/languages/pt'

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
    Space,
    SportsTeam,
    Sponsor,
    Association,
    StudentGuide,
    Link,
    Position,
    BoardSection,
    President,
    Event,
    DocumentFolder,
    DocFile,
    Video,
    Faq,
    Place,
    Testimonal
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || "",
    },
  }),
  sharp,
  plugins: [
    // storage-adapter-placeholder
  ],
  i18n: {
    fallbackLanguage: 'pt',
    translations: { pt, en },
    //@ts-ignore
    supportedLanguages: { pt, en },
  }
  //livePreview: false, // Lets set it to true if we use pages collection (Globals)
});
