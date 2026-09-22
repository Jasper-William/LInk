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

const toOrigin = (value?: string) => {
  if (!value) return undefined;

  try {
    return new URL(value.startsWith("http") ? value : `https://${value}`).origin;
  } catch {
    return undefined;
  }
};

const siteURL = toOrigin(process.env.NEXT_PUBLIC_SITE_URL) || "http://localhost:3000";
const allowedOrigins = Array.from(
  new Set(
    [
      siteURL,
      "https://link-hr.work",
      "https://www.link-hr.work",
      toOrigin(process.env.VERCEL_PROJECT_PRODUCTION_URL),
      toOrigin(process.env.VERCEL_URL),
      "http://localhost:3000",
    ].filter((origin): origin is string => Boolean(origin)),
  ),
);

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
    migrationDir: path.resolve(dirname, "src/migrations"),
    pool: {
      connectionString: process.env.DATABASE_URL || "",
    },
  }),
  secret: process.env.PAYLOAD_SECRET || "",
  sharp,
  serverURL: siteURL,
  cors: allowedOrigins,
  csrf: allowedOrigins,
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
