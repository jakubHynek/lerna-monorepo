const path = require('path');

module.exports = {
    i18n: {
      defaultLocale: 'cs',
      locales: ['en', 'cs'],
    },
    localePath: Boolean(process.env.VERCEL) ? '/locales' : path.resolve('./public/locales'),
  };
