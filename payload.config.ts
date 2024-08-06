import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
<<<<<<< HEAD
import { Person } from "./collections/Person";
=======
>>>>>>> ebc44c9 (Request Page First Draft)
import { Material } from "./collections/Material";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    dateFormat: "dd MMMM yyyy",
  },
<<<<<<< HEAD
  collections: [
    Users,
    Media,
    Person,
    Material
  ],
=======
  collections: [Users, Media,Material],
>>>>>>> ebc44c9 (Request Page First Draft)
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
