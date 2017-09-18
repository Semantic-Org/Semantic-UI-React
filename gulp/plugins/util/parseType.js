const _ = require('lodash')
const { names } = require('../../../src/elements/Flag/Flag') // eslint-disable-line no-unused-vars
const SUI = require('../../../src/lib/SUI') // eslint-disable-line no-unused-vars

const evalValue = value => eval(value) // eslint-disable-line no-eval

const isTransformable = value => typeof value === 'string' && (value.includes('SUI') || value.includes('names'))

const uniqValues = values => _.uniqWith(values, (val, other) => `${val}` === `${other}`)

const transformEnumValues = values => _.flatMap(values, ({ value }) => {
  if (value === 'names') return evalValue(value)
  if (_.startsWith(value, '...SUI')) return evalValue(value.substring(3))
  return value.replace(/'/g, '')
})

const parseEnum = (type) => {
  const { value } = type

  if (isTransformable(value)) return { ...type, value: uniqValues(evalValue(value)) }
  return { ...type, value: uniqValues(transformEnumValues(value)) }
}

const parseUnion = (union) => {
  const { value } = union
  const values = _.map(value, type => (type.name === 'enum' ? parseEnum(type).value : type.name))

  return {
    ...union,
    name: 'enum',
    value: _.flatten(values),
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
