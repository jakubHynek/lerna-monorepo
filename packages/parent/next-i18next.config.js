const path = require('path');

module.exports = {
    i18n: {
      defaultLocale: 'cs',
      locales: ['en', 'cs'],
      localePath: process.env.VERCEL ? path.resolve('./packages/parent/public/locales') : path.resolve('./public/locales')
    },
  };
