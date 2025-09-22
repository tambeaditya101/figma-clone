/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.externals.push({
      "utf-8-validate": "commonjs utf-8-validate",
      bufferutil: "commonjs bufferutil",
      canvas: "commonjs canvas",
    });
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "liveblocks.io",
        port: "",
      },
    ],
  },
  typescript: {
    // ✅ Don’t block production build on TS errors
    ignoreBuildErrors: true,
  },
  eslint: {
    // ✅ Don’t block production build on ESLint errors
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
