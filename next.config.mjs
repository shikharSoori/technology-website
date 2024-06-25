import path from "path";
/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  output: "export",
  sassOptions: {
    includePaths: [path.join(process.cwd(), "styles")], // Correct path for SASS/SCSS
  },
  images: {
    domains: ["api-website.sooritechnology.com.np", "192.168.1.73"],
    unoptimized: true,
  },
};

export default nextConfig;
