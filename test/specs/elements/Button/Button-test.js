import faker from 'faker'
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
  common.forwardsRef(Button, { tagName: 'button' })
  common.forwardsRef(Button, { requiredProps: { label: faker.lorem.word() }, tagName: 'button' })
  common.hasSubcomponents(Button, [ButtonContent, ButtonGroup, ButtonOr])
  common.hasUIClassName(Button)
  common.rendersChildren(Button)

  common.implementsCreateMethod(Button)
  common.implementsIconProp(Button, { autoGenerateKey: false })
  common.implementsLabelProp(Button, {
    autoGenerateKey: false,
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
      shallow(<Button attached />).should.have.tagName('div')
    })
  })

  describe('disabled', () => {
    it('is not set by default', () => {
      shallow(<Button />, { autoNesting: true }).should.not.have.prop('disabled')
    })

    it('applied when defined', () => {
      shallow(<Button disabled />, { autoNesting: true }).should.have.prop('disabled', true)
    })

    it("don't apply when the element's type isn't button", () => {
      shallow(<Button as='div' disabled />, { autoNesting: true }).should.not.have.prop('disabled')
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

  describe('toggle', () => {
    it('is not set by default', () => {
      shallow(<Button />, { autoNesting: true }).should.not.have.prop('toggle')
    })

    it('should have aria-pressed', () => {
      shallow(<Button toggle />, { autoNesting: true }).should.have.prop('aria-pressed')
    })

    it('aria-pressed should be true when active', () => {
      shallow(<Button toggle active />, { autoNesting: true }).should.have.prop(
        'aria-pressed',
        true,
      )
    })

    it('aria-pressed should be false when inactive', () => {
      shallow(<Button toggle />, { autoNesting: true }).should.have.prop('aria-pressed', false)
    })
  })

  describe('icon', () => {
    it('adds className icon', () => {
      shallow(<Button icon='user' />, { autoNesting: true }).should.have.className('icon')
    })

    it('adds className icon when true', () => {
      shallow(<Button icon />, { autoNesting: true }).should.have.className('icon')
    })

    it('does not add className icon when there is content', () => {
      shallow(<Button icon='user' content={0} />, { autoNesting: true }).should.not.have.className(
        'icon',
      )
      shallow(<Button icon='user' content='Yo' />, { autoNesting: true }).should.not.have.className(
        'icon',
      )
    })

    it('adds className icon given labelPosition and content', () => {
      shallow(<Button labelPosition='left' icon='user' content='My Account' />, {
        autoNesting: true,
      }).should.have.className('icon')
      shallow(<Button labelPosition='right' icon='user' content='My Account' />, {
        autoNesting: true,
      }).should.have.className('icon')
    })
  })

  describe('label', () => {
    it('renders as a div', () => {
      shallow(<Button label='http' />).should.have.tagName('div')
    })

    it('renders a div with a button and Label child', () => {
      const wrapper = shallow(<Button label='hi' />)

      wrapper.should.have.tagName('div')
      wrapper.should.have.exactly(1).descendants('button')
      wrapper.should.have.exactly(1).descendants('Label')
    })

    it('adds the labeled className to the root element', () => {
      shallow(<Button label='hi' />).should.have.className('labeled')
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
        .should.have.exactly(1)
        .descendants('Label[basic][pointing]')
    })

    it('is before the button and pointing="right" when labelPosition="left"', () => {
      const wrapper = mount(<Button labelPosition='left' label='foo' />)

      wrapper.should.have.exactly(1).descendants('Label[pointing="right"]')

      wrapper.childAt(0).childAt(0).should.have.className('label')
      wrapper.childAt(0).childAt(1).should.have.tagName('button')
    })

    it('is after the button and pointing="left" when labelPosition="right"', () => {
      const wrapper = mount(<Button labelPosition='right' label='foo' />)

      wrapper.should.have.exactly(1).descendants('Label[pointing="left"]')

      wrapper.childAt(0).childAt(0).should.have.tagName('button')
      wrapper.childAt(0).childAt(1).should.have.className('label')
    })

    it('is after the button and pointing="left" by default', () => {
      const wrapper = mount(<Button label='foo' />)

      wrapper.should.have.exactly(1).descendants('Label[pointing="left"]')

      wrapper.childAt(0).childAt(0).should.have.tagName('button')
      wrapper.childAt(0).childAt(1).should.have.className('label')
    })
  })

  describe('labelPosition', () => {
    it('renders as a button when given an icon', () => {
      shallow(<Button labelPosition='left' icon='user' />).should.have.tagName('button')
      shallow(<Button labelPosition='right' icon='user' />).should.have.tagName('button')
    })
  })

  describe('onClick', () => {
    it('is called with (e, data) when clicked', () => {
      const onClick = sandbox.spy()
      const wrapper = shallow(<Button onClick={onClick} />, { autoNesting: true })

      wrapper.simulate('click', syntheticEvent)

      onClick.should.have.been.calledOnce()
      onClick.should.have.been.calledWithExactly(syntheticEvent, {
        onClick,
        ...Button.defaultProps,
      })
    })

    it('is not called when is disabled', () => {
      const onClick = sandbox.spy()

      shallow(<Button disabled onClick={onClick} />).simulate('click', syntheticEvent)
      onClick.should.have.callCount(0)
    })
  })

  describe('role', () => {
    it('is not set by default', () => {
      shallow(<Button />, { autoNesting: true }).should.not.have.prop('role')
    })
    it('defaults to "button" when rendered as not "button" element', () => {
      shallow(<Button as='label' />, { autoNesting: true }).should.have.prop('role', 'button')
    })
    it('is configurable', () => {
      shallow(<Button role='link' />, { autoNesting: true }).should.have.prop('role', 'link')
      shallow(<Button role='button' />, { autoNesting: true }).should.have.prop('role', 'button')
    })
  })

  describe('type', () => {
    it('is not set by default', () => {
      mount(<Button />)
        .find('button')
        .should.not.have.prop('type')
    })

    it('is passed to <button />', () => {
      mount(<Button type='submit' />)
        .find('button')
        .should.have.prop('type', 'submit')
    })

    it('is passed to <button /> when "label" is defined', () => {
      mount(<Button label='Foo' type='submit' />)
        .find('button')
        .should.have.prop('type', 'submit')
    })
  })

  describe('tabIndex', () => {
    it('is not set by default', () => {
      shallow(<Button />, { autoNesting: true }).should.not.have.prop('tabIndex')
    })
    it('defaults to 0 as div', () => {
      shallow(<Button as='div' />, { autoNesting: true }).should.have.prop('tabIndex', 0)
    })
    it('defaults to -1 when disabled', () => {
      shallow(<Button disabled />, { autoNesting: true }).should.have.prop('tabIndex', -1)
    })
    it('can be set explicitly', () => {
      shallow(<Button tabIndex={123} />, { autoNesting: true }).should.have.prop('tabIndex', 123)
    })
    it('can be set explicitly when disabled', () => {
      shallow(<Button tabIndex={123} disabled />, { autoNesting: true }).should.have.prop(
        'tabIndex',
        123,
      )
    })
  })
})
