// vue.config.js

// site.com/modals

// site.com/css/main.css
// site.com/modals/css/main.css

module.exports = {

    publicPath: process.env.NODE_ENV === 'production'
    // на серевер только с /

    ? '/notes/'
    // ? '/modals'
    
    : '/',
    assetsDir: '',
    // assetsDir: 'assets',
    productionSourceMap: false

    // publicPath: 'notes'
}