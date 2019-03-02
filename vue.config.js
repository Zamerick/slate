const PurgecssPlugin = require('purgecss-webpack-plugin');
const glob = require('glob-all');
const path = require('path');

class TailwindExtractor {
  static extract (content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || []; // eslint-disable-line no-useless-escape
  }
}
module.exports = {
  configureWebpack: {
    plugins: [
      new PurgecssPlugin({
        paths: glob.sync([
          path.join(__dirname, './../src/index.html'),
          path.join(__dirname, './../**/*.vue'),
          path.join(__dirname, './../src/**/*.js')
        ]),
        extractors: [
          {
            extractor: TailwindExtractor,
            extensions: ['html', 'js', 'php', 'vue']
          }
        ],
        whitelist: ['background']
      })
    ]
  },
  chainWebpack: config => {

  },
  transpileDependencies: ['vuex-module-decorators']
};
