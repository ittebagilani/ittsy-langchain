/** @type {import('next').NextConfig} */
import CopyWebpackPlugin from "copy-webpack-plugin";

const nextConfig = {
  output: 'standalone',
  experimental: {
    outputFileTracingExcludes: {
      '**/*': [
        './.next/cache/**',
        './.next/trace/**',
      ],
    },
    serverComponentsExternalPackages: [
      'sharp',
      'onnxruntime-node',
    ],
  },
  webpack: (config) => {
    // Ignore node-specific modules when bundling for the browser
    config.resolve.alias = {
      ...config.resolve.alias,
      'sharp$': false,
      'onnxruntime-node$': false,
    };
    // Copy tiktoken_bg.wasm file
    config.plugins.push(
      new CopyWebpackPlugin({
        patterns: [
          {
            from: "node_modules/tiktoken/lite/tiktoken_bg.wasm",
            to: "static/chunks/tiktoken_bg.wasm",
          },
        ],
      })
    );

    return config;
  },
  async headers() {
    return [
        {
            // matching all API routes
            source: "/api/:path*",
            headers: [
                { key: "Access-Control-Allow-Credentials", value: "true" },
                { key: "Access-Control-Allow-Origin", value: "https://ittsy-llama-itteba-gs-projects.vercel.app/api/chat" }, // replace this your actual origin
                { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
            ]
        }
    ]
}
};

export default nextConfig;
