let {readFile} = require('fs').promises
let {resolve} = require('path')
let index = require('../index.json')

function safeModuleEval(input) {
  return Function(`
    "use strict"

    let exports = {}
    let module = {exports}

    ;(() => {${input}})()

    return module.exports
  `)()
}

for (let locale in index) {
  index[locale].loadStrings = async function() {
    let content = await readFile(
      resolve(__dirname, `./${locale}.i18n.js`),
      'utf8'
    )

    return safeModuleEval(content)
  }
}

module.exports = index
