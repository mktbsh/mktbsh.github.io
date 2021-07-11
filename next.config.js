const path = require('path')

module.exports = {
    pageExtensions: ['ts', 'tsx', 'mdx'],    
    poweredByHeader: false,
    reactStrictMode: true,
    trailingSlash: true,
    env: {
        resumeUrl: 'https://raw.githubusercontent.com/mktbsh/resume/master/docs/README.md',
    },
}