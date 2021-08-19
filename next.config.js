/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
const withLess = require('@zeit/next-less')
const withPlugins = require('next-compose-plugins')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withLess({
  lessLoaderOptions: {
    javascriptEnabled: true
  },
  basePath: '/retail-for-manufacturers',
  trailingSlash: true
})

module.exports = withPlugins(
  [
    [
      withLess,
      {
        lessLoaderOptions: {
          javascriptEnabled: true
        },
        trailingSlash: true
      }
    ],
    [
      withPWA,
      {
        pwa: {
          dest: 'public',
          disable: !isProd
        }
      }
    ]
  ],
  {
    webpack5: false
  }
)
