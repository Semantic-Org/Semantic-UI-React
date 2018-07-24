import faker from 'faker'
import _ from 'lodash'
import React from 'react'

import Form from 'src/collections/Form/Form'
import FormButton from 'src/collections/Form/FormButton'
import FormCheckbox from 'src/collections/Form/FormCheckbox'
import FormDropdown from 'src/collections/Form/FormDropdown'
import FormField from 'src/collections/Form/FormField'
import FormGroup from 'src/collections/Form/FormGroup'
import FormInput from 'src/collections/Form/FormInput'
import FormRadio from 'src/collections/Form/FormRadio'
import FormSelect from 'src/collections/Form/FormSelect'
import FormTextArea from 'src/collections/Form/FormTextArea'
import { SUI } from 'src/lib'
import * as common from 'test/specs/commonTests'
import { consoleUtil } from 'test/utils'

describe('Form', () => {
  common.isConformant(Form)
  common.hasSubcomponents(Form, [
    FormButton,
    FormCheckbox,
    FormDropdown,
    FormField,
    FormTextArea,
    FormGroup,
    FormInput,
    FormRadio,
    FormSelect,
  ])
  common.hasUIClassName(Form)
  common.rendersChildren(Form, {
    rendersContent: false,
  })

  common.implementsWidthProp(Form, [], {
    propKey: 'widths',
  })

  common.propKeyOnlyToClassName(Form, 'error')
  common.propKeyOnlyToClassName(Form, 'inverted')
  common.propKeyOnlyToClassName(Form, 'loading')
  common.propKeyOnlyToClassName(Form, 'reply')
  common.propKeyOnlyToClassName(Form, 'success')
  common.propKeyOnlyToClassName(Form, 'unstackable')
  common.propKeyOnlyToClassName(Form, 'warning')

  common.propValueOnlyToClassName(Form, 'size', _.without(SUI.SIZES, 'medium'))

  describe('action', () => {
    it('is not set by default', () => {
      expect(shallow(<Form />).prop('action')).toBeUndefined()
    })

    it('applied when defined', () => {
      const action = faker.internet.url()

      expect(shallow(<Form action={action} />).prop('action')).toBe(action)
    })
  })

  describe('onSubmit', () => {
    it('prevents default on the event when there is no action', () => {
      // Heads up!
      // In this test we pass some invalid values to verify correct work.
      consoleUtil.disableOnce()

      const event = { preventDefault: jest.fn() }

      shallow(<Form />).simulate('submit', event)
      shallow(<Form action={false} />).simulate('submit', event)
      shallow(<Form action={null} />).simulate('submit', event)

      expect(event.preventDefault).toHaveBeenCalledTimes(3)
    })

    it('does not prevent default on the event when there is an action', () => {
      const event = { preventDefault: jest.fn() }

      shallow(<Form action='do not prevent default!' />).simulate('submit', event)
      shallow(<Form action='' />).simulate('submit', event)

      expect(event.preventDefault).not.toHaveBeenCalled()
    })

    it('is called with (e, props) on submit', () => {
      const onSubmit = jest.fn()
      const event = { name: 'foo' }
      const props = { 'data-bar': 'baz' }

      shallow(<Form {...props} onSubmit={onSubmit} />).simulate('submit', event)

      expect(onSubmit).toHaveBeenCalledTimes(1)
      expect(onSubmit).toHaveBeenCalledWith(
        expect.objectContaining(event),
        expect.objectContaining(props),
      )
    })

    it('passes all args to onSubmit', () => {
      const onSubmit = jest.fn()
      const props = { 'data-baz': 'baz' }
      const event = { fake: 'event' }
      const args = ['some', 'extra', 'args']

      shallow(<Form {...props} onSubmit={onSubmit} />).simulate('submit', event, ...args)

      expect(onSubmit).toHaveBeenCalledTimes(1)
      expect(onSubmit).toHaveBeenCalledWith(
        expect.objectContaining(event),
        expect.objectContaining(props),
        ...args,
      )
    })
  })
})
