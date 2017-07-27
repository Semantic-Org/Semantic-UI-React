import { ShallowWrapper } from 'enzyme'

const meetsName = (wrapper, name) => name === wrapper.type().name

const dive = wrapper => {
  if (meetsName(wrapper, 'refHOC')) wrapper = wrapper.dive()
  if (meetsName(wrapper, 'Ref')) wrapper = wrapper.dive()

  return wrapper
}

class Wrapper extends ShallowWrapper {
  shallow(options) {
    return this.single('shallow', n => dive(new Wrapper(n, null, options)))
  }
}

export default (...args) => dive(new Wrapper(...args))
