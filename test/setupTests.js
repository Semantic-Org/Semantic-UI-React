/**
 * Setup
 * This is the bootstrap code that is run before any tests, utils, mocks.
 */
import enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import consoleUtil from './utils/consoleUtil'

// ----------------------------------------
// Enzyme
// ----------------------------------------
global.shallow = enzyme.shallow
global.mount = enzyme.mount

enzyme.configure({
  adapter: new Adapter(),
  disableLifecycleMethods: true,
})

// ----------------------------------------
// Console util
// ----------------------------------------
afterEach(() => {
  consoleUtil.afterTest()
})
