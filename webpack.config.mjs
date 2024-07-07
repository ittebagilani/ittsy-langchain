export default function webpack(config) {
  config.resolve.fallback = {
    aws4: false,
  };

  // Add style-loader and css-loader
  config.module.rules.push({
    test: /\.css$/,
    use: [
      'style-loader',
      'css-loader',
    ],
  });

  return config;
}
