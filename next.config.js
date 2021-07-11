const path = require('path')

module.exports = {
    pageExtensions: ['ts', 'tsx', 'mdx'],    
    poweredByHeader: false,
    reactStrictMode: true,
    trailingSlash: true,
    i18n: {
        locales: ['ja', 'en', 'unown'],
        defaultLocale: 'ja'
    },
    env: {
        resumeUrl: 'https://raw.githubusercontent.com/mktbsh/resume/master/docs/README.md',
    },
}