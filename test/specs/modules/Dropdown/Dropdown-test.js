import React from 'react'

import Dropdown from 'src/modules/Dropdown/Dropdown'
import * as common from 'test/specs/commonTests'

describe('Dropdown', () => {
  common.isConformant(Dropdown)
  common.hasUIClassName(Dropdown)
  // TODO: child text is not rendered correctly?
  // common.rendersChildren(Dropdown)

  it('accepts a default value', () => {
    const options = [
      { value: '', text: 'Please select a role' },
      { value: 'admin', text: 'Admin' },
      { value: 'editor', text: 'Editor' },
    ]
    deprecatedRender(<Dropdown className='selection' defaultValue='admin' options={options} />)
      .findTag('input')
      .value.should.equal('admin')
  })
  it('has assigned amount of options', () => {
    const options = [
      { value: '', text: 'Please select a color' },
      { value: 'red', text: 'red' },
      { value: 'green', text: 'green' },
      { value: 'orange', text: 'orange' },
      { value: 'purple', text: 'purple' },
      { value: 'blue', text: 'blue' },
    ]
    const items = deprecatedRender(<Dropdown options={options} />)
      .scryClass('sd-dropdown-item')
    items.should.have.a.lengthOf(6)
    items.map((item, i) => {
      item.textContent.should.equal(options[i].text)
      item.getAttribute('data-value').should.equal(options[i].value)
    })
  })
})
