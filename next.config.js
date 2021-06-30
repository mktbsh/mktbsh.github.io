const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
})

module.exports = withMDX({
    pageExtensions: ['ts', 'tsx', 'mdx'],    
    poweredByHeader: false,
    reactStrictMode: true,
    trailingSlash: true,
})