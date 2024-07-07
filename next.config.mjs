import CopyWebpackPlugin from 'copy-webpack-plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
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
  webpack: (config, { isServer }) => {
    // Ignore node-specific modules when bundling for the browser
    config.resolve.alias = {
      ...config.resolve.alias,
      'sharp$': false,
      'onnxruntime-node$': false,
    };

    config.experiments = {
      asyncWebAssembly: true,
      layers: true,
    };

    if (!isServer) {
      config.output.webassemblyModuleFilename = "static/wasm/[modulehash].wasm";
    }

    config.plugins = [
      ...config.plugins,
      new CopyWebpackPlugin({
        patterns: [
          {
            from: "node_modules/tiktoken/lite/tiktoken_bg.wasm",
            to: "static/wasm/tiktoken_bg.wasm",
            toType: "file",
          },
        ],
      }),
    ];

    return config;
  },
};

export default nextConfig;
