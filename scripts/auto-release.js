#!/usr/bin/env node
const childProcess = require('child_process')
const log = (...msgs) => {
  console.log('AUTO RELEASE:', ...msgs) // eslint-disable-line no-console
}

// ----------------------------------------
// Gather info
// ----------------------------------------
const pkg = require('../package')
const isPreVersion1 = /^0/.test(pkg.version)

const versionBumpMap = {
  breaking: isPreVersion1 ? 'minor' : 'major',
  feat: isPreVersion1 ? 'patch' : 'minor',
  fix: 'patch',
  docs: 'patch',
  style: 'patch',
  refactor: 'patch',
  perf: 'patch',
  test: 'patch',
  chore: 'patch',
}

const lastCommitMessage = childProcess.execSync('git log -1 --pretty=%B').toString().replace(/\n/g, '')
const commitType = /\w+/.exec(lastCommitMessage)
const bumpVersion = versionBumpMap[commitType]

// ----------------------------------------
// Safety Checks
// ----------------------------------------
if (!bumpVersion) {
  log(`

Could not determine version to bump from the last commit message:
  Current Version : ${pkg.version}
  Is pre v1       : ${isPreVersion1}
  Commit Message  : ${lastCommitMessage}
  Commit Type     : ${commitType}
  Bump Version    : ${bumpVersion}

Version bump map: ${JSON.stringify(versionBumpMap, null, 2)}`)
  process.exit(1)
}

// ----------------------------------------
// Release
// ----------------------------------------
const command = `npm run release:${bumpVersion}`
log(`
  Current Version : ${pkg.version}
  Is pre v1       : ${isPreVersion1}
  Commit Message  : ${lastCommitMessage}
  Commit Type     : ${commitType}
  Bump Version    : ${bumpVersion}
  Command         : ${command}`)

childProcess.execSync(command)
