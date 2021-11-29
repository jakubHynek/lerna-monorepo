const path = require('path');
// const { readFileSync } = require('fs')


module.exports = {
    i18n: {
      defaultLocale: 'cs',
      locales: ['en', 'cs'],
      localePath: path.resolve('./public/locales')
    },
    // localePath: Boolean(process.env.VERCEL) ? path.join(__dirname, 'public/locales') : path.resolve('./public/locales'),
  };
