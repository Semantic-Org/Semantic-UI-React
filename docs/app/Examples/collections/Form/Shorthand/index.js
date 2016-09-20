import React, { PropTypes } from 'react'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'

import { Message } from 'src/collections'

const subComponentComparison = {
  shorthand: "<Form.Input label='Enter Password' type='password' />",
  longhand: `<Form.Field>
  <label>Enter Password</label>
  <Input type='password' />
</Form.Field>`,
}

const componentPropComparison = {
  shorthand: "<Form.Field label='Date' control={CustomCalendar} start='1' end='7' />",
  longhand: `<Form.Field>
  <label>Date</label>
  <CustomCalendar start='1' end='7' />
</Form.Field>`,
}

const htmlComparison = {
  shorthand: "<Form.Field label='Quantity' control='input' type='number' max={5} />",
  longhand: `<Form.Field>
  <label>Quantity</label>
  <input type='number' max={5} />
</Form.Field>`,
}

const Compare = ({ longhand, shorthand }) => (
  <Message>
    <pre><code>{shorthand}</code></pre>
    <p><strong>vs</strong></p>
    <pre><code>{longhand}</code></pre>
  </Message>
)
Compare.propTypes = {
  longhand: PropTypes.string,
  shorthand: PropTypes.string,
}

const FormTypesExamples = () => (
  <ExampleSection title='Shorthand'>
    <ComponentExample
      title='Form Sub Components'
      examplePath='collections/Form/Shorthand/FormSubComponentControlExample'
    >
      <p>
        Render a Field containing a label and form control.
        All form control components are available.
      </p>
      <Compare { ...subComponentComparison } />
    </ComponentExample>
    <ComponentExample
      title='Field with Custom Control'
      examplePath='collections/Form/Shorthand/FormFieldControlExample'
    >
      <p>
        Render a Field containing a label and custom form control.
        Use any component form any library, or your own.
      </p>
      <Compare { ...componentPropComparison } />
    </ComponentExample>
    <ComponentExample
      title='Field with HTML Control'
      examplePath='collections/Form/Shorthand/FormFieldControlHTMLExample'
    >
      <p>The Field control prop also works with HTML tags</p>
      <Compare { ...htmlComparison } />
    </ComponentExample>
  </ExampleSection>
)

export default FormTypesExamples
