require('babel-register')
const _ = require('lodash')
const SUI = require('../../../src/lib/SUI') // eslint-disable-line no-unused-vars

const evalValue = (values) => _.uniq(eval(values)).map(value => ({ // eslint-disable-line no-eval
  computed: true,
  value: `'${value}'`,
}))

const transformValues = (items) => _.flatMap(items, item => {
  const { value } = item

  if (_.startsWith(value, '...SUI')) return evalValue(value.substring(3))
  return item
})

const parseEnum = type => {
  const { value } = type

  if (typeof value === 'string' && value.includes('SUI')) {
    return Object.assign(type, { value: evalValue(value) })
  }

  return Object.assign(type, { value: transformValues(value) })
}

const parsers = {
  enum: parseEnum,
}

module.exports = ({ type }) => {
  const parser = parsers[type.name]

  return parser ? parser(type) : type
}
