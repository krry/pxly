// webpack.config.js
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'development',
  module: {
    rules: [
      { // required
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      { // es6+ everywhere but at the root here
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: file => (
          /node_modules/.test(file) &&  // exclude node_modules, but...
          !/\.vue\.js/.test(file)       // whitelist .vue SFCs in node_modules
        )
      },
      { // for css in SFCs
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      { // for stylus from vuetify
        test: /\.styl(us)?$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'stylus-loader'
        ]
      },
      { // pug templates
        test: /\.pug$/,
        loader: 'pug-plain-loader'
      }
    ]
  },
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin()
  ]
}
