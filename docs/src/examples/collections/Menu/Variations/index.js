import React from 'react'

import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'

const Variations = () => (
  <ExampleSection title='Variations'>
    <ComponentExample
      title='Fixed'
      description='A menu can be fixed to a side of its context.'
      examplePath='collections/Menu/Variations/MenuExampleFixed'
    />

    <ComponentExample
      title='Stackable'
      description='A menu can stack at mobile resolutions.'
      examplePath='collections/Menu/Variations/MenuExampleStackable'
    />

    <ComponentExample
      title='Inverted'
      description='A menu may have its colors inverted to show greater contrast.'
      examplePath='collections/Menu/Variations/MenuExampleInverted'
    />
    <ComponentExample examplePath='collections/Menu/Variations/MenuExampleInvertedVertical' />
    <ComponentExample examplePath='collections/Menu/Variations/MenuExampleInvertedPointing' />
    <ComponentExample examplePath='collections/Menu/Variations/MenuExampleInvertedSegment' />
    <ComponentExample examplePath='collections/Menu/Variations/MenuExampleInvertedSecondary' />

    <ComponentExample
      title='Colored'
      description='Additional colors can be specified.'
      examplePath='collections/Menu/Variations/MenuExampleColored'
    />
    <ComponentExample examplePath='collections/Menu/Variations/MenuExampleColoredMenus' />
    <ComponentExample
      description='These colors can also be inverted.'
      examplePath='collections/Menu/Variations/MenuExampleColoredInverted'
    />
    <ComponentExample examplePath='collections/Menu/Variations/MenuExampleColoredInvertedMenus' />

    <ComponentExample
      title='Icons'
      description='A menu may have just icons.'
      examplePath='collections/Menu/Variations/MenuExampleIcons'
    />
    <ComponentExample examplePath='collections/Menu/Variations/MenuExampleIconsVertical' />

    <ComponentExample
      title='Labeled Icon'
      description='A menu may have labeled icons.'
      examplePath='collections/Menu/Variations/MenuExampleLabeledIcons'
    />
    <ComponentExample examplePath='collections/Menu/Variations/MenuExampleLabeledIconsVertical' />

    <ComponentExample
      title='Fluid'
      description='A vertical menu may take the size of its container.'
      examplePath='collections/Menu/Variations/MenuExampleFluid'
    />

    <ComponentExample
      title='Compact'
      description='A menu can take up only the space necessary to fit its content.'
      examplePath='collections/Menu/Variations/MenuExampleCompact'
    />
    <ComponentExample examplePath='collections/Menu/Variations/MenuExampleCompactVertical' />

    <ComponentExample
      title='Evenly Divided'
      description='A menu may divide its items evenly.'
      examplePath='collections/Menu/Variations/MenuExampleEvenlyDivided'
    />

    <ComponentExample
      title='Attached'
      description='A menu may be attached to other content segments.'
      examplePath='collections/Menu/Variations/MenuExampleAttachedTabular'
    />
    <ComponentExample examplePath='collections/Menu/Variations/MenuExampleAttachedToSegment' />

    <ComponentExample
      title='Size'
      description='A menu can vary in size.'
      examplePath='collections/Menu/Variations/MenuExampleSizeMini'
    />
    <ComponentExample examplePath='collections/Menu/Variations/MenuExampleSizeTiny' />
    <ComponentExample examplePath='collections/Menu/Variations/MenuExampleSizeSmall' />
    <ComponentExample examplePath='collections/Menu/Variations/MenuExampleSizeLarge' />
    <ComponentExample examplePath='collections/Menu/Variations/MenuExampleSizeHuge' />
    <ComponentExample examplePath='collections/Menu/Variations/MenuExampleSizeMassive' />
    <ComponentExample
      description='A vertical menu can also vary in size.'
      examplePath='collections/Menu/Variations/MenuExampleSizeVerticalMini'
    />
    <ComponentExample examplePath='collections/Menu/Variations/MenuExampleSizeVerticalSmall' />
    <ComponentExample examplePath='collections/Menu/Variations/MenuExampleSizeVerticalLarge' />
    <ComponentExample examplePath='collections/Menu/Variations/MenuExampleSizeVerticalMassive' />

    <ComponentExample
      title='Fitted'
      description='A menu item or menu can remove element padding, vertically or horizontally.'
      examplePath='collections/Menu/Variations/MenuExampleFitted'
    />
    <ComponentExample examplePath='collections/Menu/Variations/MenuExampleVerticalFitted' />

    <ComponentExample
      title='Borderless'
      description='A menu item or menu can have no borders.'
      examplePath='collections/Menu/Variations/MenuExampleBorderless'
    />
  </ExampleSection>
)

export default Variations
