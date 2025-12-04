import { withContentCollections } from "@content-collections/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {},
};

export default withContentCollections(nextConfig);
