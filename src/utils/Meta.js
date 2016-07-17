import _ from 'lodash/fp'

const LIBRARIES = {
  semanticUI: 'Semantic UI',
  stardust: 'Stardust',
}

const TYPES = {
  addon: 'addon',
  global: 'global',
  collection: 'collection',
  element: 'element',
  view: 'view',
  module: 'module',
}

const LIBRARY_VALUES = _.values(LIBRARIES)
const TYPE_VALUES = _.values(TYPES)

/**
 * Determine if an object qualifies as a META object.
 * It must have the required keys and valid values.
 * @private
 * @param {Object} _meta A proposed Stardust _meta object.
 * @returns {Boolean}
 */
const isMeta = (_meta) => (
  _.includes(_.get('library', _meta), LIBRARY_VALUES) &&
  _.includes(_.get('type', _meta), TYPE_VALUES)
)

/**
 * Extract the Stardust _meta object and optional key.
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
const isType = metaHasKeyValue('type')
const isLibrary = metaHasKeyValue('library')

/**
 * Component meta information.  Used to declaratively classify and identify components.
 * @type {{}}
 */
const META = {
  library: LIBRARIES,
  type: TYPES,

  // library
  isSemanticUI: isLibrary(LIBRARIES.semanticUI),
  isStardust: isLibrary(LIBRARIES.stardust),

  // type
  isType,
  isAddon: isType(TYPES.addon),
  isGlobal: isType(TYPES.global),
  isCollection: isType(TYPES.collection),
  isElement: isType(TYPES.element),
  isView: isType(TYPES.view),
  isModule: isType(TYPES.module),

  // parent
  isParent: _.flow(getMeta, _.has('parent'), _.eq(false)),
  isChild: _.flow(getMeta, _.has('parent')),

  // other
  isPrivate: _.flow(getMeta, _.get('name'), _.startsWith('_')),
}

export default META
