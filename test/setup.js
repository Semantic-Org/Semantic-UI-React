/**
 * Setup
 * This is the bootstrap code that is run before any tests, utils, mocks.
 */
import chai from 'chai';
import sinonChai from 'sinon-chai';
import dirtyChai from 'dirty-chai';

//
// Mocha
//
mocha.setup({
  ui: 'bdd'
});

//
// Chai
//
global.expect = chai.expect;
chai.should();
chai.use(sinonChai);
chai.use(dirtyChai);
