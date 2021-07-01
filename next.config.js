const path = require('path')
const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
})

module.exports = withMDX({
    pageExtensions: ['ts', 'tsx', 'mdx'],    
    poweredByHeader: false,
    reactStrictMode: true,
    trailingSlash: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'src/styles')],
    },
})