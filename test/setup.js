/**
 * Setup
 * This is the bootstrap code that is run before any tests, utils, mocks.
 */
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import dirtyChai from 'dirty-chai'
import sinonChai from 'sinon-chai'
import enzyme from 'enzyme'
import RenderedTree from 'test/utils/RenderedTree'

//
// Enzyme
//
global.enzyme = enzyme

global.shallow = chai.expect
global.render = chai.expect
global.mount = chai.expect

//
// Our Deprecated render method
//
global.deprecatedRender = (reactElement) => new RenderedTree(reactElement)

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
