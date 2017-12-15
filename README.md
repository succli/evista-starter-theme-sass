# Evista Starter Wordpress Theme with Sass

## Install
1. Run in theme root: `npm install`
2. Run `npm run build`

## Watch
`npm run watch`

## build
`npm run build`

### How to use Google Fonts
Run `npm install google-fonts-webpack-plugin`

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
* [Bootstrap 4](https://getbootstrap.com/docs/4.0/getting-started/introduction/)
* [Webpack](https://webpack.js.org/)

### Credits
* [Zsolt Schutzbach](https://github.com/succli)
* [Bálint Séra](https://github.com/balintsera)
* [Evista Creative Agency](http://digital-agency.co/)
