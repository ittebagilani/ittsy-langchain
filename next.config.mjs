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
    webpack: (config) => {
      // Ignore node-specific modules when bundling for the browser
      config.resolve.alias = {
        ...config.resolve.alias,
        'sharp$': false,
        'onnxruntime-node$': false,
      };
      return config;
    },
  };
  
  export default nextConfig;
  