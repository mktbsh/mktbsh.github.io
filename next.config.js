const path = require('path')

module.exports = {
    pageExtensions: ['ts', 'tsx', 'mdx'],    
    poweredByHeader: false,
    reactStrictMode: true,
    trailingSlash: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'src/styles')],
    },
}