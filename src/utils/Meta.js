import _ from 'lodash';

/**
 * Component meta information.  Used to declaratively classify and identify components.
 * @type {{}}
 */
const META = {
  library: {
    semanticUI: 'Semantic UI',
    stardust: 'Stardust'
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
};

export default META;
