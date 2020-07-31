import PropTypes from 'prop-types'
import React from 'react'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'

import { Message } from 'semantic-ui-react'

const subcomponentComparison = {
  shorthand: "<Form.Input label='Enter Password' type='password' />",
  longhand: `<Form.Field>
  <label>Enter Password</label>
  <Input type='password' />
</Form.Field>`,
}

const componentPropComparison = {
  shorthand:
    "<Form.Field label='Date' control={CustomCalendar} start='1' end='7' />",
  longhand: `<Form.Field>
  <label>Date</label>
  <CustomCalendar start='1' end='7' />
</Form.Field>`,
}

const htmlComparison = {
  shorthand:
    "<Form.Field label='Quantity' control='input' type='number' max={5} />",
  longhand: `<Form.Field>
  <label>Quantity</label>
  <input type='number' max={5} />
</Form.Field>`,
}

const Compare = ({ longhand, shorthand }) => (
  <Message>
    <pre>
      <code>{shorthand}</code>
    </pre>
    <p>
      <strong>vs</strong>
    </p>
    <pre>
      <code>{longhand}</code>
    </pre>
  </Message>
)
Compare.propTypes = {
  longhand: PropTypes.string,
  shorthand: PropTypes.string,
}

const FormTypesExamples = () => (
  <ExampleSection title='Shorthand'>
    <ComponentExample
      title='Form Subcomponents'
      description={[
        'Render a field containing a label and form control.',
        'All form control components are available.',
      ].join(' ')}
      examplePath='collections/Form/Shorthand/FormExampleSubcomponentControl'
    >
      <Compare {...subcomponentComparison} />
    </ComponentExample>

    <ComponentExample
      title='Field with Custom Control'
      description={[
        'Render a field containing a label and custom form control.',
        'Use any component from any library, or your own.',
      ].join(' ')}
      examplePath='collections/Form/Shorthand/FormExampleFieldControl'
    >
      <Compare {...componentPropComparison} />
    </ComponentExample>

    <ComponentExample
      title='Field with Custom Label'
      description='You can define a label with props object.'
      examplePath='collections/Form/Shorthand/FormExampleFieldLabelObject'
    />
    <ComponentExample
      description='You can define a label by passing your own element.'
      examplePath='collections/Form/Shorthand/FormExampleFieldLabelElement'
    />

    <ComponentExample
      title='Field with HTML Control'
      description='The field control prop also works with HTML tags.'
      examplePath='collections/Form/Shorthand/FormExampleFieldControlHTML'
    >
      <Compare {...htmlComparison} />
    </ComponentExample>

    <ComponentExample
      title='Accessible Labels'
      description='Adding an id to a shorthand Form.Field adds a matching htmlFor prop to the label. In case of an error, the aria-describedby prop is used to connect the error label to the form field.'
      examplePath='collections/Form/Shorthand/FormExampleFieldControlId'
    />

    <ComponentExample
      description='Adding an id to a Form subcomponent adds a matching htmlFor prop to the label.'
      examplePath='collections/Form/Shorthand/FormExampleSubcomponentId'
    />
  </ExampleSection>
)

export default FormTypesExamples
