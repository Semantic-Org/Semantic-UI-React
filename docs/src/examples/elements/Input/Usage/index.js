import React from 'react'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const InputUsageExamples = () => (
  <ExampleSection title='Usage'>
    <ComponentExample
      title='Focus'
      description='An input can be focused via a ref.'
      examplePath='elements/Input/Usage/InputExampleRefFocus'
    />
    <ComponentExample
      title='Datalist'
      description={
        <span>
          An input can be used with a <code>datalist</code>.
        </span>
      }
      examplePath='elements/Input/Usage/InputExampleDatalist'
    />
  </ExampleSection>
)

export default InputUsageExamples
