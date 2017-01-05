import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const ButtonTypesExamples = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='Button'
      description='A standard button.'
      examplePath='elements/Button/Types/ButtonExampleButton'
    />
    <ComponentExample
      description='Button content can also be defined with props.'
      examplePath='elements/Button/Types/ButtonExampleContentProp'
    />
    <ComponentExample
      title='Emphasis'
      description='A button can be formatted to show different levels of emphasis.'
      examplePath='elements/Button/Types/ButtonExampleEmphasis'
    />
    <ComponentExample
      title='Animated'
      description='Buttons can animate to show additional or hidden content.'
      examplePath='elements/Button/Types/ButtonExampleAnimated'
    />
    <ComponentExample
      title='Labeled'
      description='A button can be accompanied by a label.'
      examplePath='elements/Button/Types/ButtonExampleLabeled'
    />
    <ComponentExample
      examplePath='elements/Button/Types/ButtonExampleLabeledBasic'
    />
    <ComponentExample
      description='You can also configure the markup with props.'
      examplePath='elements/Button/Types/ButtonExampleLabeledProps'
    />
    <ComponentExample
      title='Icon'
      description='A button can be made of only an icon.'
      examplePath='elements/Button/Types/ButtonExampleIcon'
    />
    <ComponentExample
      description='You can also define an icon button with props.'
      examplePath='elements/Button/Types/ButtonExampleIconProp'
    />
    <ComponentExample
      title='Labeled Icon'
      description='A button can use an icon as a label.'
      examplePath='elements/Button/Types/ButtonExampleLabeledIcon'
    />
    <ComponentExample
      title='Basic'
      description='The basic button has a subtle appearance.'
      examplePath='elements/Button/Types/ButtonExampleBasic'
    />
    <ComponentExample
      title='Inverted'
      description='A button can be formatted to appear on a dark background.'
      examplePath='elements/Button/Types/ButtonExampleInverted'
    />
  </ExampleSection>
)

export default ButtonTypesExamples
