import _ from 'lodash'
import * as stardust from 'stardust'

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
const NAME_VALUES = _.keys(stardust)

/**
 * Determine if an object qualifies as a META object.
 * It must have the required keys and valid values.
 * @private
 * @param {Object} _meta A proposed Stardust _meta object.
 * @returns {Boolean}
 */
const isMeta = (_meta) => (
  _.includes(LIBRARY_VALUES, _.get(_meta, 'library')) &&
  _.includes(TYPE_VALUES, _.get(_meta, 'type')) &&
  _.includes(NAME_VALUES, _.get(_meta, 'name'))
)

/**
 * Extract the Stardust _meta object and optional key.
 * Handles literal _meta objects, classes with _meta, objects with _meta
 * @private
 * @param {function|object} arg A class, a component instance, or meta object..
 * @param {string} [key] A key to pluck from the _meta object.
 * @returns {object|string|undefined}
 */
const getMeta = (arg, key) => {
  let _meta = {}

  // literal
  if (isMeta(arg)) _meta = arg

  // from prop
  else if (isMeta(_.get(arg, '_meta'))) _meta = arg._meta

  // from class
  else if (isMeta(_.get(arg, 'constructor._meta'))) _meta = arg.constructor._meta

  // default values
  return key ? _meta[key] : _meta
}

/**
 * Component meta information.  Used to declaratively classify and identify components.
 * @type {{}}
 */
const META = {
  library: LIBRARIES,
  type: TYPES,

  // library
  isSemanticUI: (arg) => getMeta(arg, 'library') === META.library.semanticUI,
  isStardust: (arg) => getMeta(arg, 'library') === META.library.stardust,

  // type
  isAddon: (arg) => getMeta(arg, 'type') === META.type.addon,
  isGlobal: (arg) => getMeta(arg, 'type') === META.type.global,
  isCollection: (arg) => getMeta(arg, 'type') === META.type.collection,
  isElement: (arg) => getMeta(arg, 'type') === META.type.element,
  isView: (arg) => getMeta(arg, 'type') === META.type.view,
  isModule: (arg) => getMeta(arg, 'type') === META.type.module,
  isType: (arg, type) => getMeta(arg, 'type') === type,

  // parent
  isParent: (arg) => !getMeta(arg, 'parent'),
  isChild: (arg) => !!getMeta(arg, 'parent'),

  // other
  isPrivate: (arg) => _.startsWith(getMeta(arg, 'name'), '_'),
}

export default META
