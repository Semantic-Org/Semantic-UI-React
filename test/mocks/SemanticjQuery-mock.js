import _ from 'lodash';
import sandbox from 'test/utils/Sandbox-util';

//
// jQuery Mock
//
let jQueryObject = {};

function jQuery() {
  return jQueryObject;
}

jQuery.ajax = sandbox.stub().returnsThis();

//
// jQuery Plugin Mocks
//
let jQueryPlugins = {
  popup: sandbox.stub().returnsThis(),
  checkbox: sandbox.stub().returnsThis()
};

// Extend jQuery with plugins
_.assign(jQueryObject, jQueryPlugins);

export default jQuery;
