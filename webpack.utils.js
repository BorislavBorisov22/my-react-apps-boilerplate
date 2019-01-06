const fs = require('fs')
const path = require('path')

function getAliasesForDir(dir) {
  const aliasesForDir = fs.readdirSync(dir).reduce((aliases, subDir) => {
    aliases[`~${subDir}`] = path.resolve(__dirname, dir, subDir);

    return aliases
  }, {})

  return aliasesForDir
}

function isDevMode() {
  return process.env.NODE_ENV !== 'production'
}

module.exports = {
  getAliasesForDir,
  isDevMode,
}
