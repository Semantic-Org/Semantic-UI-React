import _ from 'lodash';

/**
 * Component meta information.  Used to declaratively classify and identify components.
 * @type {{}}
 */
const META = {
  library: {
    semanticUI: 'Semantic UI',
    stardust: 'Stardust',
  },

  type: {
    addon: 'addon',
    global: 'global',
    collection: 'collection',
    element: 'element',
    view: 'view',
    module: 'module',
  },

  // library
  isSemanticUI: ({_meta}) => _meta.library === META.library.semanticUI,
  isStardust: ({_meta}) => _meta.library === META.library.stardust,

  // type
  isAddon: ({_meta}) => _meta.type === META.type.addon,
  isGlobal: ({_meta}) => _meta.type === META.type.global,
  isCollection: ({_meta}) => _meta.type === META.type.collection,
  isElement: ({_meta}) => _meta.type === META.type.element,
  isView: ({_meta}) => _meta.type === META.type.view,
  isModule: ({_meta}) => _meta.type === META.type.module,
  isType: ({_meta}, type) => _meta.type === type,

  // parent
  isParent: (component) => (
    // has no 'parent' or 'parent' is self
    !_.has(component, '_meta.parent') || _.get(component, '_meta.parent') === component._meta.name
  ),
  isChild: component => !META.isParent(component),

  // other
  /**
   * Components whose constructor begins with an "_" are private.
   * This helper handles strings, classes, and instances and returns true if the
   * name or class definition begins with an "_".
   * @param {string|class|object} component A class, an instance, or constructor name.
   * @returns {boolean}
   */
  isPrivate: component => {
    // handle component names from a string, a class, or an instance
    const name = _.isString(component) && component
      || _.get(component, '_meta.name')
      || _.get(component, '.constructor._meta.name');

    return _.startsWith(name, '_');
  },
};

export default META;
