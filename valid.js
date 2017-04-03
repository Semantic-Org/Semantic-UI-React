const pkg = require('./package.json')
const _ = require('lodash/fp')
const fs = require('fs')
const semver = require('semver')

_.flow(
  _.get('devDependencies'),
  _.keys,
  _.forEach(key => {
    const depPkg = require(`./node_modules/${key}/package.json`)
    console.log(key, depPkg.version)
  })
)(pkg)
