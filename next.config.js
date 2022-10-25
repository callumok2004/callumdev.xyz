/** @type {import('next').NextConfig} */
module.exports = {
  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/callumok2004',
        permanent: true
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/callumdev_',
        permanent: true
      },
      {
        source: '/linkedin',
        destination: 'https://www.linkedin.com/in/callum-okane-642046234/',
        permanent: true
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: '/home',
        destination: '/'
      }
    ]
  }
}
