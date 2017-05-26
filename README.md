# Evista Starter Wordpress Theme with Sass

## Before install
Run `npm install -g yarn`

## Install
1. Run in theme root: `yarn install`

2. Set your Wordpress theme name in `package.json`:
```javascript
"scripts": {
  "watch": "set WPTHEME=evista-starter-theme-sass && npm rebuild node-sass && node node_modules/webpack/bin/webpack.js --watch --config webpack.config.js",
  "build": "set WPTHEME=evista-starter-theme-sass && npm rebuild node-sass && node node_modules/webpack/bin/webpack.js --optimize-minimize --config webpack.production.config.js"
}
```
Change **evista-starter-theme-sass** to your theme directory name.

3. Run `npm run build`

## Watch
`npm run watch`

## build
`npm run build`

### How to use Google Fonts
Run `yarn add google-fonts-webpack-plugin -D`

##### Then add this to `webpack.config.js`:

```javascript
const GoogleFontsPlugin = require('google-fonts-webpack-plugin')

...

const configs = [{
  entry: './assets/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    ...
  },
  plugins: {
    new GoogleFontsPlugin({
      name: 'googlefonts',
      filename: 'googleFonts.css',
      path: 'fonts/google',
      fonts: [
        {
          family: 'Exo 2',
          variants: ['100', '200', '300', '400', '400italic', '500', '600', '700', '700italic'],
          subsets: ['latin', 'latinext']
        },
        {
          family: 'Open Sans',
          variants: ['300', '400', '400italic', '600', '700', '700italic'],
          subsets: ['latin', 'latinext']
        }
      ]
    })
  }
}]
```

More settings on: [https://www.npmjs.com/package/google-fonts-webpack-plugin](https://www.npmjs.com/package/google-fonts-webpack-plugin)

### Documentations:
* [Bootstrap 4](https://v4-alpha.getbootstrap.com/getting-started/introduction/)
* [Webpack](https://webpack.js.org/)
* [Yarn](https://yarnpkg.com/en/docs)

### Credits
* [Zsolt Schutzbach](https://github.com/succli)
* [Bálint Séra](https://github.com/balintsera)
* [Evista Creative Agency](http://digital-agency.co/)
