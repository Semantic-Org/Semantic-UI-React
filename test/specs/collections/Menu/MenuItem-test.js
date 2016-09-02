import React from 'react'

import MenuItem from 'src/collections/Menu/MenuItem'
import * as common from 'test/specs/commonTests'
import { sandbox } from 'test/utils'

describe('MenuItem', () => {
  common.isConformant(MenuItem)
  common.propKeyOnlyToClassName(MenuItem, 'active')
  common.propKeyOnlyToClassName(MenuItem, 'header')
  common.propKeyOnlyToClassName(MenuItem, 'link')
  common.propValueOnlyToClassName(MenuItem, 'position')
  common.rendersChildren(MenuItem)

  it('renders a `div` by default', () => {
    shallow(<MenuItem />)
      .should.have.tagName('div')
  })

  describe('name', () => {
    it('uses the name prop as text', () => {
      shallow(<MenuItem name='This is an item' />)
        .should.contain.text('This is an item')
    })
  })

  describe('onClick', () => {
    it('is called with (e, { name, index }) when clicked', () => {
      const spy = sandbox.spy()
      const event = { target: null }
      const props = { name: 'home', index: 0 }

      shallow(<MenuItem onClick={spy} {...props} />)
        .simulate('click', event)

      spy.should.have.been.calledOnce()
      spy.should.have.been.calledWithMatch(event, props)
    })

    it('renders an `a` tag', () => {
      shallow(<MenuItem onClick={() => null} />)
        .should.have.tagName('a')
    })
  })
})
