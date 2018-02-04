import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const PopupVariationsExamples = () => (
  <ExampleSection title='Variations'>
    <ComponentExample
      title='Basic'
      description='A popup can provide more basic formatting.'
      examplePath='modules/Popup/Variations/PopupExampleBasic'
    />
    <ComponentExample
      title='Wide'
      description='A popup can be extra wide to allow for longer content.'
      examplePath='modules/Popup/Variations/PopupExampleWide'
    />
    <ComponentExample
      title='Size'
      description='A popup can vary in size.'
      examplePath='modules/Popup/Variations/PopupExampleSize'
    />
    <ComponentExample
      title='Flowing'
      description='A popup can have no maximum width and continue to flow to fit its content.'
      examplePath='modules/Popup/Variations/PopupExampleFlowing'
    />
    <ComponentExample
      title='Inverted'
      description='A popup can have its colors inverted.'
      examplePath='modules/Popup/Variations/PopupExampleInverted'
    />
    <ComponentExample
      title='Position'
      description='A popup can be position around its trigger.'
      examplePath='modules/Popup/Variations/PopupExamplePosition'
    />
    <ComponentExample
      title='Offset'
      description='A popup position can be offset from its position.'
      examplePath='modules/Popup/Variations/PopupExampleOffset'
    />
    <ComponentExample
      title='Style'
      description='A popup accepts custom styles.'
      examplePath='modules/Popup/Variations/PopupExampleStyle'
    />
    <ComponentExample
      title='Hide on scroll'
      description='A popup can be hidden on a scroll event.'
      examplePath='modules/Popup/Variations/PopupExampleHideOnScroll'
    />
  </ExampleSection>
)

export default PopupVariationsExamples
