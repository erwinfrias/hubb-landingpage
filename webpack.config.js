const path                  = require('path'),
      HtmlWebpackPlugin     = require('html-webpack-plugin'),
      MiniCssExtractPlugin  = require('mini-css-extract-plugin'),
      autoprefixer          = require('autoprefixer'),
      CopyPlugin            = require("copy-webpack-plugin");

module.exports = {
  entry: ['@babel/polyfill','./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: './assets/js/[name].js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(html)$/,
        loader: 'html-loader'
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader'
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              autoprefixer: { browser: ['last 2 versions'] },
              sourceMap: true,
              plugins: () => [ autoprefixer ]
            }
          },
          'resolve-url-loader',
          'sass-loader?outputStyle=compressed&sourceMap',
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg|webp)$/i,
        use: [
          'file-loader?name=assets/images/[name].[ext]',
          'image-webpack-loader?bypassOnDebug'
        ]
      },
      {
        test: /\.(mp4)$/i,
        use: 'file-loader?name=assets/videos/[name].[ext]'
      },
      {
        test: /\.(mp3)$/i,
        use: 'file-loader?name=assets/media/[name].[ext]'
      },
      {
        test: /\.(ttf|eot|woff2?)$/i,
        use: 'file-loader?name=assets/fonts/[name].[ext]'
      },
      {
        test: /\.(txt|xml|pdf)$/i,
        use: 'file-loader?name=assets/docs/[name].[ext]'
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/pug/pages/index.pug',
      minify: {
        removeScriptTypeAttributes: true
      }
    }),
    new HtmlWebpackPlugin({
      template: './src/pug/pages/about.pug',
      filename: 'about.html',
      minify: {
        removeScriptTypeAttributes: true
      }
    }),
    new HtmlWebpackPlugin({
      template: './src/pug/pages/blog.pug',
      filename: 'blog.html',
      minify: {
        removeScriptTypeAttributes: true
      }
    }),
    new HtmlWebpackPlugin({
      template: './src/pug/pages/terms-of-service.pug',
      filename: 'terms-of-service.html',
      minify: {
        removeScriptTypeAttributes: true
      }
    }),
    new HtmlWebpackPlugin({
      template: './src/pug/pages/privacy.pug',
      filename: 'privacy.html',
      minify: {
        removeScriptTypeAttributes: true
      }
    }),
    new HtmlWebpackPlugin({
      template: './src/pug/pages/careers.pug',
      filename: 'careers.html',
      minify: {
        removeScriptTypeAttributes: true
      }
    }),
    new HtmlWebpackPlugin({
      template: './src/pug/pages/contact.pug',
      filename: 'contact.html',
      minify: {
        removeScriptTypeAttributes: true
      }
    }),
    new HtmlWebpackPlugin({
      template: './src/pug/pages/landing.pug',
      filename: 'landing.html',
      minify: {
        removeScriptTypeAttributes: true
      }
    }),
    new HtmlWebpackPlugin({
      template: './src/pug/pages/thanks.pug',
      filename: 'thanks.html',
      minify: {
        removeScriptTypeAttributes: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: './assets/css/main.css'
    }),
    new CopyPlugin({
      patterns: [
        { from: './src/.htaccess', to: './' },
        { from: './src/email.php', to: './' },
      ],
    }),
  ]
};
