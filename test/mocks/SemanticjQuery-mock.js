import sandbox from '../utils/Sandbox-util'

//
// jQuery Plugin Mocks
//
const jQueryPlugins = {
  checkbox: sandbox.stub().returnsThis(),
  dropdown: sandbox.stub().returnsThis(),
  form: sandbox.stub().returnsThis(),
  modal: sandbox.stub().returnsThis(),
  popup: sandbox.stub().returnsThis(),
  progress: sandbox.stub().returnsThis(),
  transition: sandbox.stub().returnsThis(),
}

//
// jQuery Mock
//
const jQueryObject = {
  on: sandbox.stub().returnsThis(),
  ...jQueryPlugins,
}

function jQuery() {
  return jQueryObject
}

jQuery.ajax = sandbox.stub().returnsThis()

export default jQuery
