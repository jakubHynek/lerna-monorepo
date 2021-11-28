/** @type {import('next').NextConfig} */

// next.config.js
const withTM = require('next-transpile-modules')(['child']); // pass the modules you would like to see transpiled

module.exports = withTM({
  reactStrictMode: true,
});
// module.exports = {
//   reactStrictMode: true,
// }
