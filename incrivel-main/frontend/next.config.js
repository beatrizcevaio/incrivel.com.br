const withSvgr = require('next-plugin-svgr')
const redirectsJSON = require('./config/redirects.json')

const nextConfig = {
  reactStrictMode: true,
  env: {
    siteUrl: process.env.SITE_URL,
    cmsBaseUrl: process.env.CMS_BASE_URL,
    apiBaseUrl: process.env.API_BASE_URL,
    gtmId: process.env.GTM_ID,
    nodeEnv: process.env.NODE_ENV,
  },
  trailingSlash: true,
  images: {
    domains: [
      'amplifyapp.com',
      'futurebrand.dev',
      'incrivel.com',
      'incrivel-hml.adtsys.com.br',
      'incrivel-prd.adtsys.com.br',
    ],
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
  svgrOptions: {
    titleProp: true,
    icon: true,
  },
  async redirects() {
    return redirectsJSON
  },
}

module.exports = withSvgr(nextConfig)
