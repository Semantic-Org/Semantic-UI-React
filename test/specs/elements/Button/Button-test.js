import React from 'react'

import Button from 'src/elements/Button/Button'
import ButtonContent from 'src/elements/Button/ButtonContent'
import ButtonGroup from 'src/elements/Button/ButtonGroup'
import ButtonOr from 'src/elements/Button/ButtonOr'
import { SUI } from 'src/lib'
import * as common from 'test/specs/commonTests'
import { sandbox } from 'test/utils'

const syntheticEvent = { preventDefault: () => undefined }

describe('Button', () => {
  common.isConformant(Button)
  common.hasSubComponents(Button, [ButtonContent, ButtonGroup, ButtonOr])
  common.hasUIClassName(Button)
  common.rendersChildren(Button)

  common.implementsCreateMethod(Button)
  common.implementsIconProp(Button)
  common.implementsLabelProp(Button, {
    shorthandDefaultProps: {
      basic: true,
      pointing: 'left',
    },
  })

  common.propKeyAndValueToClassName(Button, 'floated', SUI.FLOATS)

  common.propKeyOnlyToClassName(Button, 'active')
  common.propKeyOnlyToClassName(Button, 'basic')
  common.propKeyOnlyToClassName(Button, 'circular')
  common.propKeyOnlyToClassName(Button, 'compact')
  common.propKeyOnlyToClassName(Button, 'disabled')
  common.propKeyOnlyToClassName(Button, 'fluid')
  common.propKeyOnlyToClassName(Button, 'inverted')
  common.propKeyOnlyToClassName(Button, 'loading')
  common.propKeyOnlyToClassName(Button, 'primary')
  common.propKeyOnlyToClassName(Button, 'negative')
  common.propKeyOnlyToClassName(Button, 'positive')
  common.propKeyOnlyToClassName(Button, 'secondary')

  common.propKeyOrValueAndKeyToClassName(Button, 'animated', ['fade', 'vertical'])
  common.propKeyOrValueAndKeyToClassName(Button, 'attached', ['left', 'right', 'top', 'bottom'])
  common.propKeyOrValueAndKeyToClassName(Button, 'labelPosition', ['right', 'left'], {
    className: 'labeled',
  })

  common.propValueOnlyToClassName(Button, 'color', [
    ...SUI.COLORS,
    'facebook',
    'twitter',
    'google plus',
    'vk',
    'linkedin',
    'instagram',
    'youtube',
  ])
  common.propValueOnlyToClassName(Button, 'size', SUI.SIZES)

  it('renders a button by default', () => {
    shallow(<Button />)
      .first()
      .should.have.tagName('button')
  })

  describe('attached', () => {
    it('renders a div', () => {
      shallow(<Button attached />)
        .should.have.tagName('div')
    })
  })

  describe('disabled', () => {
    it('is not set by default', () => {
      shallow(<Button />)
        .should.not.have.prop('disabled')
    })

    it('applied when defined', () => {
      shallow(<Button disabled />)
        .should.have.prop('disabled', true)
    })

    it("don't apply when the element's type isn't button", () => {
      shallow(<Button as='div' disabled />)
        .should.not.have.prop('disabled')
    })

    it('is not set by default when has a label', () => {
      shallow(<Button label='foo' />)
        .find('button')
        .should.not.have.prop('disabled')
    })

    it('applied when defined and has a label', () => {
      shallow(<Button disabled label='foo' />)
        .find('button')
        .should.have.prop('disabled', true)
    })
  })

  describe('focus', () => {
    it('can be set via a ref', () => {
      const mountNode = document.createElement('div')
      document.body.appendChild(mountNode)

      const wrapper = mount(<Button />, { attachTo: mountNode })
      wrapper.instance().focus()

      const button = document.querySelector('button')
      document.activeElement.should.equal(button)

      wrapper.detach()
      document.body.removeChild(mountNode)
    })
  })

  describe('icon', () => {
    it('adds className icon', () => {
      shallow(<Button icon='user' />)
        .should.have.className('icon')
    })

    it('adds className icon when true', () => {
      shallow(<Button icon />)
        .should.have.className('icon')
    })

    it('does not add className icon when there is content', () => {
      shallow(<Button icon='user' content={0} />)
        .should.not.have.className('icon')
      shallow(<Button icon='user' content='Yo' />)
        .should.not.have.className('icon')
    })

    it('adds className icon given labelPosition and content', () => {
      shallow(<Button labelPosition='left' icon='user' content='My Account' />)
        .should.have.className('icon')
      shallow(<Button labelPosition='right' icon='user' content='My Account' />)
        .should.have.className('icon')
    })
  })

  describe('label', () => {
    it('renders as a div', () => {
      shallow(<Button label='http' />)
        .should.have.tagName('div')
    })
    it('renders a div with a button and Label child', () => {
      const wrapper = shallow(<Button label='hi' />)

      wrapper.should.have.tagName('div')
      wrapper.should.have.exactly(1).descendants('button')
      wrapper.should.have.exactly(1).descendants('Label')
    })
    it('adds the labeled className to the root element', () => {
      shallow(<Button label='hi' />)
        .should.have.className('labeled')
    })
    it('contains children without disabled class when disabled attribute is set', () => {
      const wrapper = shallow(<Button label='hi' disabled />)

      wrapper.should.have.className('disabled')
      wrapper.find('Label').should.not.have.className('disabled')
      wrapper.find('button').should.not.have.className('disabled')
    })
    it('contains children without floated class when floated attribute is set', () => {
      const wrapper = shallow(<Button label='hi' floated='left' />)

      wrapper.should.have.className('floated')
      wrapper.find('Label').should.not.have.className('floated')
      wrapper.find('button').should.not.have.className('floated')
    })
    it('creates a basic pointing label', () => {
      shallow(<Button label='foo' />)
        .should.have.exactly(1).descendants('Label[basic][pointing]')
    })
    it('is before the button and pointing="right" when labelPosition="left"', () => {
      const wrapper = shallow(<Button labelPosition='left' label='foo' />)
      wrapper.should.have.exactly(1).descendants('Label[pointing="right"]')

      wrapper.children().at(0).shallow().should.match('.ui.label')
      wrapper.children().at(1).should.match('button')
    })
    it('is after the button and pointing="left" when labelPosition="right"', () => {
      const wrapper = shallow(<Button labelPosition='right' label='foo' />)
      wrapper.should.have.exactly(1).descendants('Label[pointing="left"]')

      wrapper.children().at(0).should.match('button')
      wrapper.children().at(1).shallow().should.match('.ui.label')
    })
    it('is after the button and pointing="left" by default', () => {
      const wrapper = shallow(<Button label='foo' />)
      wrapper.should.have.exactly(1).descendants('Label[pointing="left"]')

      wrapper.children().at(0).should.match('button')
      wrapper.children().at(1).shallow().should.match('.ui.label')
    })
  })

  describe('labelPosition', () => {
    it('renders as a button when given an icon', () => {
      shallow(<Button labelPosition='left' icon='user' />)
        .should.have.tagName('button')
      shallow(<Button labelPosition='right' icon='user' />)
        .should.have.tagName('button')
    })
  })

  describe('onClick', () => {
    it('is called with (e, data) when clicked', () => {
      const onClick = sandbox.spy()

      shallow(<Button onClick={onClick} />)
        .simulate('click', syntheticEvent)

      onClick.should.have.been.calledOnce()
      onClick.should.have.been.calledWithExactly(syntheticEvent, { onClick, as: 'button' })
    })

    it('is not called when is disabled', () => {
      const onClick = sandbox.spy()

      shallow(<Button disabled onClick={onClick} />)
        .simulate('click', syntheticEvent)
      onClick.should.have.callCount(0)
    })
  })

  describe('tabIndex', () => {
    it('is not set by default', () => {
      shallow(<Button />)
        .should.not.have.prop('tabIndex')
    })
    it('defaults to 0 as div', () => {
      shallow(<Button as='div' />)
        .should.have.prop('tabIndex', 0)
    })
    it('defaults to -1 when disabled', () => {
      shallow(<Button disabled />)
        .should.have.prop('tabIndex', -1)
    })
    it('can be set explicitly', () => {
      shallow(<Button tabIndex={123} />)
        .should.have.prop('tabIndex', 123)
    })
    it('can be set explicitly when disabled', () => {
      shallow(<Button tabIndex={123} disabled />)
        .should.have.prop('tabIndex', 123)
    })
  })
})
