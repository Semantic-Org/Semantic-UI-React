import _ from 'lodash/fp'

export const TYPES = {
  ADDON: 'addon',
  COLLECTION: 'collection',
  ELEMENT: 'element',
  VIEW: 'view',
  MODULE: 'module',
}

const TYPE_VALUES = _.values(TYPES)

/**
 * Determine if an object qualifies as a META object.
 * It must have the required keys and valid values.
 * @private
 * @param {Object} _meta A proposed component _meta object.
 * @returns {Boolean}
 */
export const isMeta = (_meta) => (
  _.includes(_.get('type', _meta), TYPE_VALUES)
)

/**
 * Extract a component's _meta object and optional key.
 * Handles literal _meta objects, classes with _meta, objects with _meta
 * @private
 * @param {function|object} metaArg A class, a component instance, or meta object..
 * @returns {object|string|undefined}
 */
const getMeta = (metaArg) => {
  // literal
  if (isMeta(metaArg)) return metaArg

  // from prop
  else if (isMeta(_.get('_meta', metaArg))) return metaArg._meta

  // from class
  else if (isMeta(_.get('constructor._meta', metaArg))) return metaArg.constructor._meta
}

const metaHasKeyValue = _.curry((key, val, metaArg) => _.flow(getMeta, _.get(key), _.eq(val))(metaArg))
export const isType = metaHasKeyValue('type')

// ----------------------------------------
// Export
// ----------------------------------------

// type
export const isAddon = isType(TYPES.ADDON)
export const isCollection = isType(TYPES.COLLECTION)
export const isElement = isType(TYPES.ELEMENT)
export const isView = isType(TYPES.VIEW)
export const isModule = isType(TYPES.MODULE)

// parent
export const isParent = _.flow(getMeta, _.has('parent'), _.eq(false))
export const isChild = _.flow(getMeta, _.has('parent'))

// other
export const isPrivate = _.flow(getMeta, _.get('name'), _.startsWith('_'))
