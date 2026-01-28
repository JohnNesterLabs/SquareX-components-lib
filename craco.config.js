module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Find the source-map-loader rule and modify it to ignore node_modules
      const sourceMapLoaderRule = webpackConfig.module.rules.find(
        (rule) => rule.enforce === 'pre' && rule.use && rule.use.some(
          (use) => use.loader && use.loader.includes('source-map-loader')
        )
      );

      if (sourceMapLoaderRule) {
        // Add exclude for node_modules to ignore source map warnings
        sourceMapLoaderRule.exclude = /node_modules/;
      }

      return webpackConfig;
    },
  },
};
