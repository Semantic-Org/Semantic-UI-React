import { ShallowWrapper } from 'enzyme'

const meetsName = (wrapper, name) => name === wrapper.type().name

const dive = (wrapper) => {
  /* eslint-disable no-param-reassign */
  if (meetsName(wrapper, 'refHOC')) wrapper = wrapper.dive()
  if (meetsName(wrapper, 'Ref')) wrapper = wrapper.dive()
  /* eslint-enable */

  return wrapper
}

// Heads up! This monkey patch overrides behaviour of shallow() method of Enzyme
const shallowMethod = ShallowWrapper.prototype.shallow

ShallowWrapper.prototype.shallow = function (...args) {
  return dive(shallowMethod.apply(this, ...args))
}

export default (...args) => dive(new ShallowWrapper(...args))
