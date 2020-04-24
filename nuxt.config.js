
module.exports = {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: 'green' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [

  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    ["@nuxtjs/moment", {locales: ["en-gb", "ru"], defaultLocale: "en-gb"}],
  ],
  /*
  ** Build configuration
  */
  build: {
    analyze: {
      analyzerMode: "server",
      analyzerHost: "0.0.0.0",
      analyzerPort: "8888",
      openAnalyzer: true
    },
    extend(config, ctx) {
      // config.resolve.alias["vue"] = "vue/dist/vue.common";

      config.module.rules.push({
        enforce: "pre",

        test: /.scss/,
        use: [
          // 'vue-style-loader',
          // 'css-loader',
          // 'sass-loader'
        ],

        exclude: /(node_modules)/
      });
    }
  }
}
