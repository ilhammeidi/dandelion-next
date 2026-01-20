// Enable this code below for Server Side Rendering/Translation (SSR)
const withImages = require('next-images');

module.exports = withImages({
  output: 'export', // Please disable/comment for SSR Mode
  trailingSlash: true,
  images: {
    disableStaticImages: true
  },
  turbopack: {}
});
