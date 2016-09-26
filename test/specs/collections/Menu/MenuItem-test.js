import faker from 'faker'
import React from 'react'

import MenuItem from 'src/collections/Menu/MenuItem'
import * as common from 'test/specs/commonTests'
import { sandbox } from 'test/utils'

describe('MenuItem', () => {
  common.isConformant(MenuItem)
  common.implementsIconProp(MenuItem)
  common.propKeyOnlyToClassName(MenuItem, 'active')
  common.propValueOnlyToClassName(MenuItem, 'color')
  common.propKeyOrValueAndKeyToClassName(MenuItem, 'fitted')
  common.propKeyOnlyToClassName(MenuItem, 'icon')
  common.propKeyOnlyToClassName(MenuItem, 'header')
  common.propKeyOnlyToClassName(MenuItem, 'link')
  common.propValueOnlyToClassName(MenuItem, 'position')
  common.rendersChildren(MenuItem)

  it('renders a `div` by default', () => {
    shallow(<MenuItem />)
      .should.have.tagName('div')
  })

  describe('content', () => {
    it('renders text', () => {
      const text = faker.hacker.phrase()

      shallow(<MenuItem content={text} />)
        .should.contain.text(text)
    })
  })

  describe('name', () => {
    it('uses the name prop as Start Cased child text', () => {
      shallow(<MenuItem name='upcomingEvents' />)
        .should.contain.text('Upcoming Events')
    })
  })

  describe('onClick', () => {
    it('can be omitted', () => {
      const click = () => mount(<MenuItem />).simulate('click')

      expect(click).to.not.throw()
    })

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
