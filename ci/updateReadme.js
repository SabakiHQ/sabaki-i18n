const {readFileSync, writeFileSync} = require('fs')
const path = require('path')
const index = require('../index.json')

let readmeFilename = path.resolve(__dirname, '../README.md')
let readme = readFileSync(readmeFilename, 'utf8')
let progressTable = [['Language', 'File', 'Progress'], Array(3).fill('---')]

for (let locale of Object.keys(index).sort()) {
  let entry = index[locale]

  progressTable.push([
    `${entry.nativeName} (${entry.name})`,
    `\`${locale}.i18n.js\``,
    entry.stats == null || entry.stats.progress == null
      ? '-'
      : Math.round(entry.stats.progress * 100) + '%'
  ])
}

let renderedProgressTable = progressTable
  .map(row => '| ' + row.join(' | ') + ' |')
  .join('\n')

readme = readme.replace(
  /(<!-- begin-progress-table -->)([^]*?)(<!-- end-progress-table -->)/g,
  `$1\n${renderedProgressTable}\n$3`
)

writeFileSync(readmeFilename, readme)
