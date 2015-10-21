import _ from 'lodash';
import sandbox from 'test/utils/Sandbox-util';

//
// jQuery Mock
//
let jQueryObject = {
  on: sandbox.stub().returnsThis(),
};

function jQuery() {
  return jQueryObject;
}

jQuery.ajax = sandbox.stub().returnsThis();

//
// jQuery Plugin Mocks
//
let jQueryPlugins = {
  checkbox: sandbox.stub().returnsThis(),
  dropdown: sandbox.stub().returnsThis(),
  modal: sandbox.stub().returnsThis(),
  popup: sandbox.stub().returnsThis(),
  transition: sandbox.stub().returnsThis(),
};

// Extend jQuery with plugins
_.assign(jQueryObject, jQueryPlugins);

export default jQuery;
