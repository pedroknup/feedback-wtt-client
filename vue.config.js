// https://cli.vuejs.org/guide/css.html#passing-options-to-pre-processor-loaders
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/REPO_NAME/' : '/',
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "@/scss/_variables.scss";
          @import "@/scss/_fonts.scss";
          @import "@/scss/_medias.scss";
          @import "@/scss/_mixins.scss";
        `
      }
    }
  },

  devServer: {
    watchOptions: {
      clientLogLevel: 'warning'
    }
  }
}
