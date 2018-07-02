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
  common.hasSubcomponents(Button, [ButtonContent, ButtonGroup, ButtonOr])
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
    expect(shallow(<Button />).first()).have.tagName('button')
  })

  describe('attached', () => {
    it('renders a div', () => {
      expect(shallow(<Button attached />)).have.tagName('div')
    })
  })

  describe('disabled', () => {
    it('is not set by default', () => {
      expect(shallow(<Button />)).not.have.prop('disabled')
    })

    it('applied when defined', () => {
      expect(shallow(<Button disabled />)).have.prop('disabled', true)
    })

    it("don't apply when the element's type isn't button", () => {
      expect(shallow(<Button as='div' disabled />)).not.have.prop('disabled')
    })

    it('is not set by default when has a label', () => {
      expect(shallow(<Button label='foo' />).find('button')).not.have.prop('disabled')
    })

    it('applied when defined and has a label', () => {
      expect(shallow(<Button disabled label='foo' />).find('button')).have.prop('disabled', true)
    })
  })

  describe('focus', () => {
    it('can be set via a ref', () => {
      const mountNode = document.createElement('div')
      document.body.appendChild(mountNode)

      const wrapper = mount(<Button />, { attachTo: mountNode })
      wrapper.instance().focus()

      const button = document.querySelector('button')
      expect(document.activeElement).toBe(button)

      wrapper.detach()
      document.body.removeChild(mountNode)
    })
  })

  describe('icon', () => {
    it('adds className icon', () => {
      expect(shallow(<Button icon='user' />)).have.className('icon')
    })

    it('adds className icon when true', () => {
      expect(shallow(<Button icon />)).have.className('icon')
    })

    it('does not add className icon when there is content', () => {
      expect(shallow(<Button icon='user' content={0} />)).not.have.className('icon')
      expect(shallow(<Button icon='user' content='Yo' />)).not.have.className('icon')
    })

    it('adds className icon given labelPosition and content', () => {
      expect(
        shallow(<Button labelPosition='left' icon='user' content='My Account' />),
      ).have.className('icon')
      expect(
        shallow(<Button labelPosition='right' icon='user' content='My Account' />),
      ).have.className('icon')
    })
  })

  describe('label', () => {
    it('renders as a div', () => {
      expect(shallow(<Button label='http' />)).have.tagName('div')
    })
    it('renders a div with a button and Label child', () => {
      const wrapper = shallow(<Button label='hi' />)

      expect(wrapper).have.tagName('div')
      expect(wrapper)
        .have.exactly(1)
        .descendants('button')
      expect(wrapper)
        .have.exactly(1)
        .descendants('Label')
    })
    it('adds the labeled className to the root element', () => {
      expect(shallow(<Button label='hi' />)).have.className('labeled')
    })
    it('contains children without disabled class when disabled attribute is set', () => {
      const wrapper = shallow(<Button label='hi' disabled />)

      expect(wrapper).have.className('disabled')
      expect(wrapper.find('Label')).not.have.className('disabled')
      expect(wrapper.find('button')).not.have.className('disabled')
    })
    it('contains children without floated class when floated attribute is set', () => {
      const wrapper = shallow(<Button label='hi' floated='left' />)

      expect(wrapper).have.className('floated')
      expect(wrapper.find('Label')).not.have.className('floated')
      expect(wrapper.find('button')).not.have.className('floated')
    })
    it('creates a basic pointing label', () => {
      expect(shallow(<Button label='foo' />))
        .have.exactly(1)
        .descendants('Label[basic][pointing]')
    })
    it('is before the button and pointing="right" when labelPosition="left"', () => {
      const wrapper = shallow(<Button labelPosition='left' label='foo' />)
      expect(wrapper)
        .have.exactly(1)
        .descendants('Label[pointing="right"]')

      expect(
        wrapper
          .children()
          .at(0)
          .shallow(),
      ).toMatch('.ui.label')
      expect(wrapper.children().at(1)).toMatch('button')
    })
    it('is after the button and pointing="left" when labelPosition="right"', () => {
      const wrapper = shallow(<Button labelPosition='right' label='foo' />)
      expect(wrapper)
        .have.exactly(1)
        .descendants('Label[pointing="left"]')

      expect(wrapper.children().at(0)).toMatch('button')
      expect(
        wrapper
          .children()
          .at(1)
          .shallow(),
      ).toMatch('.ui.label')
    })
    it('is after the button and pointing="left" by default', () => {
      const wrapper = shallow(<Button label='foo' />)
      expect(wrapper)
        .have.exactly(1)
        .descendants('Label[pointing="left"]')

      expect(wrapper.children().at(0)).toMatch('button')
      expect(
        wrapper
          .children()
          .at(1)
          .shallow(),
      ).toMatch('.ui.label')
    })
  })

  describe('labelPosition', () => {
    it('renders as a button when given an icon', () => {
      expect(shallow(<Button labelPosition='left' icon='user' />)).have.tagName('button')
      expect(shallow(<Button labelPosition='right' icon='user' />)).have.tagName('button')
    })
  })

  describe('onClick', () => {
    it('is called with (e, data) when clicked', () => {
      const onClick = sandbox.spy()

      shallow(<Button onClick={onClick} />).simulate('click', syntheticEvent)

      expect(onClick).have.been.calledOnce()
      expect(onClick).have.been.calledWithExactly(syntheticEvent, {
        onClick,
        ...Button.defaultProps,
      })
    })

    it('is not called when is disabled', () => {
      const onClick = sandbox.spy()

      shallow(<Button disabled onClick={onClick} />).simulate('click', syntheticEvent)
      expect(onClick).have.callCount(0)
    })
  })

  describe('role', () => {
    it('defaults to a button', () => {
      expect(Button.defaultProps.role).toBe('button')
      expect(shallow(<Button />)).have.prop('role', 'button')
    })
    it('is configurable', () => {
      expect(shallow(<Button role='link' />)).have.prop('role', 'link')
    })
  })

  describe('tabIndex', () => {
    it('is not set by default', () => {
      expect(shallow(<Button />)).not.have.prop('tabIndex')
    })
    it('defaults to 0 as div', () => {
      expect(shallow(<Button as='div' />)).have.prop('tabIndex', 0)
    })
    it('defaults to -1 when disabled', () => {
      expect(shallow(<Button disabled />)).have.prop('tabIndex', -1)
    })
    it('can be set explicitly', () => {
      expect(shallow(<Button tabIndex={123} />)).have.prop('tabIndex', 123)
    })
    it('can be set explicitly when disabled', () => {
      expect(shallow(<Button tabIndex={123} disabled />)).have.prop('tabIndex', 123)
    })
  })
})
