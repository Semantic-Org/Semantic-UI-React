#!/usr/bin/env node
const childProcess = require('child_process')
const log = (...msgs) => {
  console.log('\nAUTO RELEASE:\n\n', ...msgs) // eslint-disable-line no-console
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
  perf: 'patch',
  // Skip types that have no end user consequence, no release is required.
  //  - docs
  //  - style
  //  - refactor
  //  - test
  //  - chore
}

const lastCommitMessage = childProcess.execSync('git log -1 --pretty=%B').toString().replace(/\n/g, '')
const commitType = /\w+/.exec(lastCommitMessage)
const bumpVersion = versionBumpMap[commitType]

// ----------------------------------------
// Release or Skip
// ----------------------------------------
if (bumpVersion) {
  const command = `npm run release:${bumpVersion}`
  log(`Starting auto release:
  Current Version : ${pkg.version}
  Is pre v1       : ${isPreVersion1}
  Commit Message  : ${lastCommitMessage}
  Commit Type     : ${commitType}
  Bump Version    : ${bumpVersion}
  Command         : ${command}`)

  childProcess.execSync(command)
} else {
  log(`Skipping auto release. Could not determine version to bump from the last commit message:
  Current Version : ${pkg.version}
  Is pre v1       : ${isPreVersion1}
  Commit Message  : ${lastCommitMessage}
  Commit Type     : ${commitType}
  Bump Version    : ${bumpVersion}

Version bump map: ${JSON.stringify(versionBumpMap, null, 2)}`)
}
