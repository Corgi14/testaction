/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/testaction",
    assetPrefix: "/testaction/",
    output: "export",
    reactStrictMode: true,
    images: {
        loader: "akamai",
        path: "/",
      },
};

export default nextConfig;
