import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Statik HTML üretmesi için
  images: {
    unoptimized: true, // Image Optimization'ı devre dışı bırak
  },
}

export default nextConfig
