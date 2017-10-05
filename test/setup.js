/**
 * Setup
 * This is the bootstrap code that is run before any tests, utils, mocks.
 */
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import dirtyChai from 'dirty-chai'
import sinonChai from 'sinon-chai'

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

//
// Mocha
//
mocha.setup({
  ui: 'bdd',
})

//
// Chai
//
global.expect = chai.expect
chai.should()
chai.use(chaiEnzyme())
chai.use(dirtyChai)
chai.use(sinonChai)
