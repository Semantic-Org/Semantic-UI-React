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
import { sandbox } from 'test/utils'

describe('Form', () => {
  common.isConformant(Form)
  common.hasSubComponents(Form, [
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
  common.rendersChildren(Form)

  common.implementsWidthProp(Form, _.without(SUI.SIZES, 'medium'), { propKey: 'widths' })

  common.propKeyOnlyToClassName(Form, 'error')
  common.propKeyOnlyToClassName(Form, 'inverted')
  common.propKeyOnlyToClassName(Form, 'loading')
  common.propKeyOnlyToClassName(Form, 'reply')
  common.propKeyOnlyToClassName(Form, 'success')
  common.propKeyOnlyToClassName(Form, 'warning')

  common.propValueOnlyToClassName(Form, 'size', _.without(SUI.SIZES, 'medium'))

  describe('onSubmit', () => {
    it('prevents default on the event when there is no action', () => {
      const event = { preventDefault: sandbox.spy() }

      shallow(<Form onSubmit={sandbox.spy()} />)
        .simulate('submit', event)

      event.preventDefault.should.have.been.calledOnce()
    })

    it('does not prevent default on the event when there is an action', () => {
      const event = { preventDefault: sandbox.spy() }

      shallow(<Form action='do not prevent default!' onSubmit={sandbox.spy()} />)
        .simulate('submit', event)

      event.preventDefault.should.not.have.been.called()
    })
  })
})
