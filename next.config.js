/** @type {import('next').NextConfig} */

const path = require('path');

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['image.tmdb.org'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
