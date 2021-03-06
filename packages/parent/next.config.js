/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

// next.config.js
const withTM = require('next-transpile-modules')(['child']); // pass the modules you would like to see transpiled

module.exports = withTM({
  i18n,
  reactStrictMode: true,
});
// module.exports = {
//   reactStrictMode: true,
// }
