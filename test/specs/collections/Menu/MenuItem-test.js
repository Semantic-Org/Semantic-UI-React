import React from 'react'

import MenuItem from 'src/collections/Menu/MenuItem'
import { SUI } from 'src/lib'
import * as common from 'test/specs/commonTests'
import { sandbox } from 'test/utils'

describe('MenuItem', () => {
  common.isConformant(MenuItem)
  common.rendersChildren(MenuItem)

  common.implementsCreateMethod(MenuItem)
  common.implementsIconProp(MenuItem, { autoGenerateKey: false })

  common.propKeyOnlyToClassName(MenuItem, 'active')
  common.propKeyOnlyToClassName(MenuItem, 'disabled')
  common.propKeyOnlyToClassName(MenuItem, 'header')
  common.propKeyOnlyToClassName(MenuItem, 'icon')
  common.propKeyOnlyToClassName(MenuItem, 'link')

  common.propKeyOrValueAndKeyToClassName(MenuItem, 'fitted', ['horizontally', 'vertically'])

  common.propValueOnlyToClassName(MenuItem, 'color', SUI.COLORS)
  common.propValueOnlyToClassName(MenuItem, 'position', ['left', 'right'])

  it('renders a `div` by default', () => {
    shallow(<MenuItem />).should.have.tagName('div')
  })

  describe('name', () => {
    it('uses the name prop as Start Cased child text', () => {
      shallow(<MenuItem name='upcomingEvents' />).should.contain.text('Upcoming Events')
    })
  })

  describe('icon', () => {
    it('does not add `icon` className if there is also `name`', () => {
      shallow(<MenuItem icon='user' name='users' />).should.not.have.className('icon')
    })
    it('does not add `icon` className if there is also `content`', () => {
      shallow(<MenuItem icon='user' content='Users' />).should.not.have.className('icon')
    })
    it('adds `icon` className if there is an `icon` without `name` or `content`', () => {
      shallow(<MenuItem icon='user' />).should.have.className('icon')
    })
  })

  describe('onClick', () => {
    it('is called with (e, data) when clicked', () => {
      const onClick = sandbox.spy()
      const event = { target: null }
      const props = { name: 'home', index: 0 }

      shallow(<MenuItem onClick={onClick} {...props} />).simulate('click', event)

      onClick.should.have.been.calledOnce()
      onClick.should.have.been.calledWithMatch(event, props)
    })

    it('is not called when is disabled', () => {
      const onClick = sandbox.spy()

      shallow(<MenuItem disabled onClick={onClick} />).simulate('click')
      onClick.should.have.callCount(0)
    })

    it('renders an `a` tag', () => {
      shallow(<MenuItem onClick={() => null} />).should.have.tagName('a')
    })
  })

  describe('onKeyPress', () => {
    it('is called with (e, data) on Enter keyPress', () => {
      const onKeyPress = sandbox.spy()
      const event = { charCode: 13, preventDefault: sandbox.spy() }
      const props = { tabIndex: 0 }

      shallow(<MenuItem onKeyPress={onKeyPress} {...props} />).simulate('keypress', event)

      onKeyPress.should.have.been.calledOnce()
      onKeyPress.should.have.been.calledWithMatch(event, props)
    })

    it('is called with (e, data) on Space keyPress', () => {
      const onKeyPress = sandbox.spy()
      const event = { charCode: 32, preventDefault: sandbox.spy() }
      const props = { tabIndex: 0 }

      shallow(<MenuItem onKeyPress={onKeyPress} {...props} />).simulate('keypress', event)

      onKeyPress.should.have.been.calledOnce()
      onKeyPress.should.have.been.calledWithMatch(event, props)
    })

    it('does not call onClick when non space/enter key is pressed', () => {
      const onClick = sandbox.spy()
      const event = { charCode: 14, preventDefault: sandbox.spy() }

      shallow(<MenuItem onClick={onClick} />).simulate('keypress', event)

      onClick.should.not.have.been.called()
      event.preventDefault.should.not.have.been.called()
    })

    it('is not called when disabled', () => {
      const onKeyPress = sandbox.spy()
      const onClick = sandbox.spy()
      const event = { charCode: 13 }
      const props = { tabIndex: -1 }

      shallow(<MenuItem disabled onClick={onClick} onKeyPress={onKeyPress} {...props} />).simulate(
        'keypress',
        event,
      )
      shallow(<MenuItem disabled onClick={onClick} onKeyPress={onKeyPress} {...props} />).simulate(
        'click',
      )

      onClick.should.have.callCount(0)
      onKeyPress.should.have.callCount(0)
    })

    it('prevent default is called', () => {
      const onKeyPress = sandbox.spy()
      const event = { charCode: 32, preventDefault: sandbox.spy() }
      const props = { tabIndex: 0 }

      shallow(<MenuItem onKeyPress={onKeyPress} {...props} />).simulate('keypress', event)

      event.preventDefault.should.have.been.calledOnce()
    })
  })

  describe('tabIndex', () => {
    it('defaults to 0', () => {
      shallow(<MenuItem />).should.have.prop('tabIndex', 0)
    })

    it('defaults to 0 as <a>', () => {
      shallow(<MenuItem as='a' />).should.have.prop('tabIndex', 0)
    })

    it('defaults to -1 when disabled', () => {
      shallow(<MenuItem disabled />).should.have.prop('tabIndex', -1)
    })
  })
})
