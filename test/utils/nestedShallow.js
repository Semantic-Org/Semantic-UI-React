import { Ref } from '@stardust-ui/react-component-ref'
import enzyme from 'enzyme'
import _ from 'lodash'

const diveToLevel = (wrapper, autoNesting, nestingLevel) => {
  let nestedWrapper = wrapper

  if (autoNesting && nestedWrapper.is(Ref)) {
    nestedWrapper = nestedWrapper.childAt(0)
  }

  _.times(nestingLevel, () => {
    nestedWrapper = nestedWrapper.childAt(0)
  })

  return nestedWrapper
}

/**
 * @param {*} node
 * @param {Object} [options]
 * @param {Boolean} [options.autoNesting]
 * @param {Number} [options.nestingLevel]
 * @return {*}
 */
const nestedShallow = (node, options = {}) => {
  const { autoNesting = false, nestingLevel, ...rest } = options

  return diveToLevel(enzyme.shallow(node, rest), autoNesting, nestingLevel)
}

export default nestedShallow
