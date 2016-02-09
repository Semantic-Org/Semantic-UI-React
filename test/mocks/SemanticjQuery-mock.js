import _ from 'lodash'
import sandbox from '../utils/Sandbox-util'

//
// jQuery Mock
//
const jQueryObject = {
  on: sandbox.stub().returnsThis(),
}

function jQuery() {
  return jQueryObject
}

jQuery.ajax = sandbox.stub().returnsThis()

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

// Extend jQuery with plugins
_.assign(jQueryObject, jQueryPlugins)

export default jQuery
