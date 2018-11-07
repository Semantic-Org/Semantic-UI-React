export const isForwardRef = Component =>
  (Component && Component.$$typeof && typeof Component.render === 'function') || false

export const isBasic = Component => typeof Component === 'string'
