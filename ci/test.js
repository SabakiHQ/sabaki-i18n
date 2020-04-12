const index = require('..')

for (let locale in index) {
  require(`../src/${locale}.i18n.js`)
}
