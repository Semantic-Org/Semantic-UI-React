require('babel-register')
const _ = require('lodash')
const SUI = require('../../../src/lib/SUI')

module.exports = (propDef) => {
  const { type } = propDef
  const { name, value } = type

  if (name !== 'enum') return type
  if (!_.startsWith(value, 'SUI') && !_.startsWith(value, '_.without(SUI')) return type
  return _.assign(type, { value: eval(value) })
}
