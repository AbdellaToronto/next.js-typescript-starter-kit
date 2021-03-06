const withTypescript         = require('@zeit/next-typescript');
const withCSS                = require('@zeit/next-css');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');

module.exports = withTypescript(
  withCSS({
    webpack(config) {
        if (process.env.ANALYZE) {
            return {
                ...config,
                plugins: config.plugins.concat(new BundleAnalyzerPlugin({
                    analyzerMode: 'server',
                    analyzerPort: 8888,
                    openAnalyzer: true
                }))
            }
        }
    },
    cssModules: true,
  })
);
