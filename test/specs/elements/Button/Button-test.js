import React from 'react'

import Button from 'src/elements/Button/Button'
import ButtonContent from 'src/elements/Button/ButtonContent'
import ButtonGroup from 'src/elements/Button/ButtonGroup'
import ButtonOr from 'src/elements/Button/ButtonOr'
import { SUI } from 'src/lib'
import * as common from 'test/specs/commonTests'

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
    expect(
      shallow(<Button />)
        .first()
        .type(),
    ).toBe('button')
  })

  describe('attached', () => {
    it('renders a div', () => {
      expect(shallow(<Button attached />).type()).toBe('div')
    })
  })

  describe('disabled', () => {
    it('is not set by default', () => {
      expect(shallow(<Button />).prop('disabled')).toBeUndefined()
    })

    it('applied when defined', () => {
      expect(shallow(<Button disabled />).prop('disabled')).toBe(true)
    })

    it("don't apply when the element's type isn't button", () => {
      expect(shallow(<Button as='div' disabled />).prop('disabled')).toBeUndefined()
    })

    it('is not set by default when has a label', () => {
      expect(
        shallow(<Button label='foo' />)
          .find('button')
          .prop('disabled'),
      ).toBeUndefined()
    })

    it('applied when defined and has a label', () => {
      expect(
        shallow(<Button disabled label='foo' />)
          .find('button')
          .prop('disabled'),
      ).toBe(true)
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
      expect(shallow(<Button icon='user' />).hasClass('icon')).toBe(true)
    })

    it('adds className icon when true', () => {
      expect(shallow(<Button icon />).hasClass('icon')).toBe(true)
    })

    it('does not add className icon when there is content', () => {
      expect(shallow(<Button icon='user' content={0} />).hasClass('icon')).toBe(false)
      expect(shallow(<Button icon='user' content='Yo' />).hasClass('icon')).toBe(false)
    })

    it('adds className icon given labelPosition and content', () => {
      expect(
        shallow(<Button labelPosition='left' icon='user' content='My Account' />).hasClass('icon'),
      ).toBe(true)
      expect(
        shallow(<Button labelPosition='right' icon='user' content='My Account' />).hasClass('icon'),
      ).toBe(true)
    })
  })

  describe('label', () => {
    it('renders as a div', () => {
      expect(shallow(<Button label='http' />).type()).toBe('div')
    })

    it('renders a div with a button and Label child', () => {
      const wrapper = shallow(<Button label='hi' />)

      expect(wrapper.type()).toBe('div')
      expect(wrapper.find('button')).toHaveLength(1)
      expect(wrapper.find('Label')).toHaveLength(1)
    })

    it('adds the labeled className to the root element', () => {
      expect(shallow(<Button label='hi' />).hasClass('labeled')).toBe(true)
    })

    it('contains children without disabled class when disabled attribute is set', () => {
      const wrapper = shallow(<Button label='hi' disabled />)

      expect(wrapper.hasClass('disabled')).toBe(true)
      expect(wrapper.find('Label').hasClass('disabled')).toBe(false)
      expect(wrapper.find('button').hasClass('disabled')).toBe(false)
    })

    it('contains children without floated class when floated attribute is set', () => {
      const wrapper = shallow(<Button label='hi' floated='left' />)

      expect(wrapper.hasClass('floated')).toBe(true)
      expect(wrapper.find('Label').hasClass('floated')).toBe(false)
      expect(wrapper.find('button').hasClass('floated')).toBe(false)
    })

    it('creates a basic pointing label', () => {
      expect(shallow(<Button label='foo' />).find('Label[basic][pointing]')).toHaveLength(1)
    })

    it('is before the button and pointing="right" when labelPosition="left"', () => {
      const wrapper = shallow(<Button labelPosition='left' label='foo' />)

      expect(wrapper.find('Label[pointing="right"]')).toHaveLength(1)
      expect(
        wrapper
          .children()
          .at(0)
          .shallow()
          .hasClass('label'),
      ).toBe(true)
      expect(
        wrapper
          .children()
          .at(1)
          .type(),
      ).toBe('button')
    })

    it('is after the button and pointing="left" when labelPosition="right"', () => {
      const wrapper = shallow(<Button labelPosition='right' label='foo' />)

      expect(wrapper.find('Label[pointing="left"]')).toHaveLength(1)
      expect(
        wrapper
          .children()
          .at(0)
          .type(),
      ).toBe('button')
      expect(
        wrapper
          .children()
          .at(1)
          .is('Label'),
      ).toBe(true)
    })

    it('is after the button and pointing="left" by default', () => {
      const wrapper = shallow(<Button label='foo' />)

      expect(wrapper.find('Label[pointing="left"]')).toHaveLength(1)
      expect(
        wrapper
          .children()
          .at(0)
          .type(),
      ).toBe('button')
      expect(
        wrapper
          .children()
          .at(1)
          .is('Label'),
      ).toBe(true)
    })
  })

  describe('labelPosition', () => {
    it('renders as a button when given an icon', () => {
      expect(shallow(<Button labelPosition='left' icon='user' />).type()).toBe('button')
      expect(shallow(<Button labelPosition='right' icon='user' />).type()).toBe('button')
    })
  })

  describe('onClick', () => {
    it('is called with (e, data) when clicked', () => {
      const onClick = jest.fn()

      shallow(<Button onClick={onClick} />).simulate('click', syntheticEvent)

      expect(onClick).toHaveBeenCalledTimes(1)
      expect(onClick).toHaveBeenCalledWith(
        expect.objectContaining(syntheticEvent),
        expect.objectContaining({
          onClick,
          ...Button.defaultProps,
        }),
      )
    })

    it('is not called when is disabled', () => {
      const onClick = jest.fn()

      shallow(<Button disabled onClick={onClick} />).simulate('click', syntheticEvent)
      expect(onClick).not.toHaveBeenCalled()
    })
  })

  describe('role', () => {
    it('defaults to a button', () => {
      expect(Button.defaultProps.role).toBe('button')
      expect(shallow(<Button />).prop('role')).toBe('button')
    })
    it('is configurable', () => {
      expect(shallow(<Button role='link' />).prop('role')).toBe('link')
    })
  })

  describe('tabIndex', () => {
    it('is not set by default', () => {
      expect(shallow(<Button />).prop('tabIndex')).toBeUndefined()
    })
    it('defaults to 0 as div', () => {
      expect(shallow(<Button as='div' />).prop('tabIndex')).toBe(0)
    })
    it('defaults to -1 when disabled', () => {
      expect(shallow(<Button disabled />).prop('tabIndex')).toBe(-1)
    })
    it('can be set explicitly', () => {
      expect(shallow(<Button tabIndex={123} />).prop('tabIndex')).toBe(123)
    })
    it('can be set explicitly when disabled', () => {
      expect(shallow(<Button tabIndex={123} disabled />).prop('tabIndex')).toBe(123)
    })
  })
})
