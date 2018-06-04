import React from 'react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'
import ShorthandExample from 'docs/src/components/ComponentDoc/ShorthandExample'

const ButtonTypesExamples = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='Button'
      description='A standard button.'
      examplePath='elements/Button/Types/ButtonExampleButton'
    />
    <ShorthandExample examplePath='elements/Button/Types/ButtonExampleShorthand' />

    <ComponentExample
      title='Emphasis'
      description='A button can be formatted to show different levels of emphasis.'
      examplePath='elements/Button/Types/ButtonExampleEmphasis'
    />
    <ShorthandExample examplePath='elements/Button/Types/ButtonExampleEmphasisShorthand' />

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
    <ShorthandExample examplePath='elements/Button/Types/ButtonExampleLabeledShorthand' />
    <ComponentExample examplePath='elements/Button/Types/ButtonExampleLabeledBasic' />
    <ShorthandExample examplePath='elements/Button/Types/ButtonExampleLabeledBasicShorthand' />

    <ComponentExample
      title='Icon'
      description='A button can be made of only an icon.'
      examplePath='elements/Button/Types/ButtonExampleIcon'
    />
    <ShorthandExample examplePath='elements/Button/Types/ButtonExampleIconShorthand' />

    <ComponentExample
      title='Labeled Icon'
      description='A button can use an icon as a label.'
      examplePath='elements/Button/Types/ButtonExampleLabeledIcon'
    />
    <ShorthandExample examplePath='elements/Button/Types/ButtonExampleLabeledIconShorthand' />

    <ComponentExample
      title='Basic'
      description='The basic button has a subtle appearance.'
      examplePath='elements/Button/Types/ButtonExampleBasic'
    />
    <ShorthandExample examplePath='elements/Button/Types/ButtonExampleBasicShorthand' />

    <ComponentExample
      title='Inverted'
      description='A button can be formatted to appear on a dark background.'
      examplePath='elements/Button/Types/ButtonExampleInverted'
    />
  </ExampleSection>
)

export default ButtonTypesExamples
