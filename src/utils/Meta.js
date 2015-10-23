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

  // parent
  isChild: ({_meta}) => !!_meta.parent,
};

export default META;
