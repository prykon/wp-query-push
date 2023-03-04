const defaults = require('@wordpress/scripts/config/webpack.config');
const { getWebpackEntryPoints } = require('@wordpress/scripts/utils/config');
const config = { ...defaults };
const path = require('path');

// Add server only for development mode and not for production.
if ('production' !== process.env.NODE_ENV) {
    config.devServer = {
        devMiddleware: {
            writeToDisk: true,
        },
        allowedHosts: 'all',
        host: 'localhost',
        port: 8887,
        proxy: {
            '/build': {
                pathRewrite: {
                    '^/build': '',
                },
            },
        },
    };
}

module.exports = {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        }
      ]
    },
    ...config,
    entry: {
        ...getWebpackEntryPoints(), // For blocks.

        index: './src/index.jsx', // For admin scripts.
    },
    resolve: {
      preferRelative: true,
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
      extensions: ['', '.js', '.ts', '.jsx', '.tsx']
    }
};
