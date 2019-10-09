// vue.config.js

// site.com/modals

// site.com/css/main.css
// site.com/modals/css/main.css

module.exports = {
    // baseUrl:'./',
    // assetsDir:'./',

    publicPath: process.env.NODE_ENV === 'production'
    // на серевер только с /

    ? './'
    // ? '/modals'
    
    : './'
    // ,
    // assetsDir: '',
    // // assetsDir: 'assets',
    // productionSourceMap: false

    // publicPath: 'notes'
}