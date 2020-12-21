module.exports = {
  filenameHashing: false,
  productionSourceMap: false,
  pages: {
    index: {
      entry: './src/main.js',
      template: 'public/index.html',
      filename: 'app.html'
    }
  },
  devServer: {
    overlay: {
      warnings: false,
      errors: false
    }
  },
  chainWebpack: config => {
    config.module.rule('images')
      .test(/\.(png|jpg|gif)$/i)
      .use('url-loader')
      .loader('url-loader')
      .tap(options => {
        delete options.limit;
        return options;
      });
  }
};