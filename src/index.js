let {resolve} = require('path')
let index = require('../index.json')

for (let locale in index) {
  index[locale].filename = resolve(__dirname, `./${locale}.i18n.js`)
}

module.exports = index
