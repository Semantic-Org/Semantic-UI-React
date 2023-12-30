await import('@babel/register')

import _ from 'lodash'

const { names } = (await import('../../../src/elements/Flag/Flag.js')).default
const { positions } = (await import('../../../src/modules/Popup/lib/positions.js')).default
const SUI = (await import('../../../src/lib/SUI.js')).default

const evalValue = (value) => eval(value) // eslint-disable-line no-eval

const isTransformable = (value) =>
  typeof value === 'string' &&
  (value.includes('SUI') || value.includes('names') || value.includes('positions'))

const uniqValues = (values) => {
  return values.filter((val, i, arr) => arr.indexOf(`${val}`) === arr.lastIndexOf(`${val}`))
}

const transformEnumValues = (values) => {
  return values.flatMap(({ value }) => {
    if (value === 'names') {
      return evalValue(value)
    }

    if (value.startsWith('...SUI')) {
      return evalValue(value.substring(3))
    }

    return value.replace(/'/g, '')
  })
}

const parseEnum = (propDef) => {
  const { value } = propDef.type

  if (value) {
    if (isTransformable(value)) {
      return { ...propDef.type, value: uniqValues(evalValue(value)) }
    }

    return { ...propDef.type, value: uniqValues(transformEnumValues(value)) }
  }

  return {
    ...propDef.type,
    value: undefined,
  }
}

const parseUnion = (propDef) => {
  const { value } = propDef.type
  const values = value.filter((v) => v.name === 'enum').flatMap((type) => parseEnum({ type }).value)

  return {
    ...propDef.type,
    name: value.map((v) => v.name).join('|'),
    value: values,
  }
}

const parsers = {
  enum: parseEnum,
  union: parseUnion,
}

export default function parseType(propName, propDef) {
  if (propDef.type === undefined) {
    throw new Error(
      [
        `The prop "${propName}" does not contain propType definition. This happens if the property is in the `,
        'defaultProps, but it is not in the propTypes',
      ].join(' '),
    )
  }

  const parser = parsers[propDef.type.name]

  return parser ? parser(propDef) : propDef.type
}
