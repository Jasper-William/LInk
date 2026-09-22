import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import { zh } from "@payloadcms/translations/languages/zh";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildConfig } from "payload";
import sharp from "sharp";
import { FocusAreas } from "./src/payload/collections/FocusAreas";
import { Media } from "./src/payload/collections/Media";
import { TeamMembers } from "./src/payload/collections/TeamMembers";
import { Users } from "./src/payload/collections/Users";
import { AboutPage } from "./src/payload/globals/AboutPage";
import { ApproachSettings } from "./src/payload/globals/ApproachSettings";
import { ContactSettings } from "./src/payload/globals/ContactSettings";
import { HomePage } from "./src/payload/globals/HomePage";
import { SeoSettings } from "./src/payload/globals/SeoSettings";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: " | LINK-HR 官网后台",
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, FocusAreas, TeamMembers],
  globals: [HomePage, ApproachSettings, AboutPage, ContactSettings, SeoSettings],
  editor: lexicalEditor(),
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || "",
    },
  }),
  secret: process.env.PAYLOAD_SECRET || "",
  sharp,
  serverURL: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  cors: [process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"],
  csrf: [process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"],
  i18n: {
    fallbackLanguage: "zh",
    supportedLanguages: { zh },
  },
  plugins: [
    vercelBlobStorage({
      collections: {
        media: true,
      },
      clientUploads: true,
      token: process.env.BLOB_READ_WRITE_TOKEN || "",
    }),
  ],
  typescript: {
    outputFile: path.resolve(dirname, "src/payload-types.ts"),
  },
});
