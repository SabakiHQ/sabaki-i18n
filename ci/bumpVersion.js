const {spawnSync} = require('child_process')
const {resolve} = require('path')
const pkg = require('../package.json')

let version = pkg.version.split('-')
version[1] = +version[1] + 1

spawnSync(process.platform === 'win32' ? 'npm.cmd' : 'npm', [
  'version',
  version.join('-')
])
