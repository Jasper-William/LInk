import { createClient } from "next-sanity";

export const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
export const sanityDataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const isSanityConfigured = /^[a-z0-9-]+$/i.test(sanityProjectId) && sanityProjectId.length >= 6;

export const sanityClient = isSanityConfigured ? createClient({ projectId: sanityProjectId, dataset: sanityDataset, apiVersion: "2026-09-01", useCdn: true }) : null;
