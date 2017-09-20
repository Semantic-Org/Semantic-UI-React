const _ = require('lodash')
const SUI = require('../../../src/lib/SUI') // eslint-disable-line no-unused-vars

const evalValue = value => eval(value) // eslint-disable-line no-eval

const uniqValues = values => _.uniqWith(values, (val, other) => `${val}` === `${other}`)

const transformEnumValues = values => _.flatMap(values, ({ value }) => {
  if (_.startsWith(value, '...SUI')) return evalValue(value.substring(3))
  return value.replace(/'/g, '')
})

const parseEnum = (type) => {
  const { value } = type

  if (typeof value === 'string' && value.includes('SUI')) {
    return { ...type, value: uniqValues(evalValue(value)) }
  }

  return { ...type, value: uniqValues(transformEnumValues(value)) }
}

const parseUnion = (union) => {
  const { value } = union

  return {
    ...union,
    name: _.map(value, 'name').join('|'),
    value: _.map(value, type => (type.name === 'enum' ? parseEnum(type) : type)),
  }
}

const parsers = {
  enum: parseEnum,
  union: parseUnion,
}

export default ({ type }) => {
  const parser = parsers[type.name]

  return parser ? parser(type) : type
}
