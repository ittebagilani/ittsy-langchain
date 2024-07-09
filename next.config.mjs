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
};

export default nextConfig;
