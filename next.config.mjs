/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/portifolio",
  assetPrefix: "/portifolio",
  trailingSlash: true,
};

export default nextConfig;
