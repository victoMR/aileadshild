import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,

  // Optimización de imágenes
  images: {
    unoptimized: true,
  },

  // Configuración para Cloudflare
  // Usando el output por defecto pero optimizado
  experimental: {
    // Habilitamos características experimentales de Next.js
  },

  // Headers para seguridad y performance
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(),microphone=(),geolocation=()",
          },
        ],
      },
    ];
  },

  // Redirects
  async redirects() {
    return [
      {
        source: "/api/:path*",
        destination: "/api/:path*",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

