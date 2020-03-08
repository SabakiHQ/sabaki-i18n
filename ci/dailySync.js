const {spawnSync} = require('child_process')
const {readFileSync, writeFileSync} = require('fs')
const path = require('path')
const globby = require('globby')
const index = require('../index.json')
const package = require('../package.json')

// Sync Sabaki version

let sabakiPackage = require('../.tmp/Sabaki/package.json')

package.version = sabakiPackage.version

writeFileSync(
  path.resolve(__dirname, '../package.json'),
  JSON.stringify(package, null, '  ')
)

// Sync stats

for (let filename of globby.sync(['src/*.i18n.js', '!src/template.i18n.js'])) {
  let result = spawnSync(
    'npx',
    ['dolm', 'stats', path.resolve(__dirname, '..', filename)],
    {
      cwd: path.resolve(__dirname, '../.tmp/Sabaki')
    }
  )

  let match = path.basename(filename).match(/^([^.]+)\.i18n\.js$/)
  if (match == null || match[1] == null) continue

  let locale = match[1]
  let stats = JSON.parse(result.stdout.toString())
  if (index[locale] == null) continue

  index[locale].stats = stats
}

writeFileSync(
  path.resolve(__dirname, '../index.json'),
  JSON.stringify(index, null, '  ')
)
