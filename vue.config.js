module.exports = {
    chainWebpack: config => {
        const svgRule = config.module.rule('svg')
        svgRule.uses.clear()
        svgRule.use('vue-svg-loader').loader('vue-svg-loader')

        if (config.plugins.has('extract-css')) {
            const extractCSSPlugin = config.plugin('extract-css')
            extractCSSPlugin && extractCSSPlugin.tap(() => [{
                filename: '[name].css',
                chunkFilename: '[name].css'
            }])
        }
    },
    configureWebpack: {
        output: {
            filename: '[name].js',
            chunkFilename: '[name].js'
        }
    }
}
