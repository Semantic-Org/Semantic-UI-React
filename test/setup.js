/**
 * Setup
 * This is the bootstrap code that is run before any tests, utils, mocks.
 */
import enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

//
// Enzyme
//
global.enzyme = enzyme
global.shallow = enzyme.shallow
global.render = enzyme.render
global.mount = enzyme.mount

enzyme.configure({
  adapter: new Adapter(),
  disableLifecycleMethods: true,
})
