import _ from 'lodash'

/**
 * @param {*} node
 * @param {Object} [options]
 * @param {Number} [options.nestingLevel]
 * @return {*}
 */
const nestedShallow = (node, options = {}) => {
  const { nestingLevel, ...rest } = options
  let wrapper = shallow(node, rest)

  _.times(nestingLevel, () => {
    wrapper = wrapper.childAt(0)
  })

  return wrapper
}

export default nestedShallow
