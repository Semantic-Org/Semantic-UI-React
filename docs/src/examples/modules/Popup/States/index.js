/* eslint no-restricted-imports: 0 */
import React from 'react'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const PopupStatesExamples = () => (
  <ExampleSection title='States'>
    <ComponentExample
      title='Disabled'
      description='A disabled popup only renders its trigger.'
      examplePath='modules/Popup/States/PopupExampleDisabled'
    />
  </ExampleSection>
)

export default PopupStatesExamples
