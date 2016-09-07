import React from 'react'

import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'

const Variations = () => {
  return (
    <ExampleSection title='Variations'>
      <ComponentExample
        title='Fixed'
        description='A menu can be fixed to a side of its context'
        examplePath='collections/Menu/Variations/Fixed'
      />

      <ComponentExample
        title='Stackable'
        description='A menu can stack at mobile resolutions'
        examplePath='collections/Menu/Variations/Stackable'
      />

      <ComponentExample
        title='Inverted'
        description='A menu may have its colors inverted to show greater contrast'
        examplePath='collections/Menu/Variations/Inverted'
      />
      <ComponentExample examplePath='collections/Menu/Variations/InvertedVertical' />
      <ComponentExample examplePath='collections/Menu/Variations/InvertedPointing' />
      <ComponentExample examplePath='collections/Menu/Variations/InvertedSegment' />
      <ComponentExample examplePath='collections/Menu/Variations/InvertedSecondary' />

      <ComponentExample
        title='Colored'
        description='Additional colors can be specified'
        examplePath='collections/Menu/Variations/Colored'
      />
      <ComponentExample examplePath='collections/Menu/Variations/ColoredMenus' />
      <ComponentExample
        description='These colors can also be inverted'
        examplePath='collections/Menu/Variations/ColoredInverted'
      />
      <ComponentExample examplePath='collections/Menu/Variations/ColoredInvertedMenus' />

      <ComponentExample
        title='Icons'
        description='A menu may have just icons'
        examplePath='collections/Menu/Variations/Icons'
      />
      <ComponentExample examplePath='collections/Menu/Variations/IconsVertical' />

      <ComponentExample
        title='Labeled Icon'
        description='A menu may have labeled icons'
        examplePath='collections/Menu/Variations/LabeledIcons'
      />
      <ComponentExample examplePath='collections/Menu/Variations/LabeledIconsVertical' />

      <ComponentExample
        title='Fluid'
        description='A vertical menu may take the size of its container'
        examplePath='collections/Menu/Variations/Fluid'
      />

      <ComponentExample
        title='Compact'
        description='A menu can take up only the space necessary to fit its content'
        examplePath='collections/Menu/Variations/Compact'
      />
      <ComponentExample examplePath='collections/Menu/Variations/CompactVertical' />

      <ComponentExample
        title='Evenly Divided'
        description='A menu may divide its items evenly'
        examplePath='collections/Menu/Variations/EvenlyDivided'
      />

      <ComponentExample
        title='Attached'
        description='A menu may be attached to other content segments'
        examplePath='collections/Menu/Variations/AttachedTabular'
      />
      <ComponentExample examplePath='collections/Menu/Variations/AttachedToSegment' />

      <ComponentExample
        title='Size'
        description='A menu can vary in size'
        examplePath='collections/Menu/Variations/SizeMini'
      />
      <ComponentExample examplePath='collections/Menu/Variations/SizeTiny' />
      <ComponentExample examplePath='collections/Menu/Variations/SizeSmall' />
      <ComponentExample examplePath='collections/Menu/Variations/SizeLarge' />
      <ComponentExample examplePath='collections/Menu/Variations/SizeHuge' />
      <ComponentExample examplePath='collections/Menu/Variations/SizeMassive' />
      <ComponentExample
        description='A vertical menu can also vary in size'
        examplePath='collections/Menu/Variations/SizeVerticalMini'
      />
      <ComponentExample examplePath='collections/Menu/Variations/SizeVerticalSmall' />
      <ComponentExample examplePath='collections/Menu/Variations/SizeVerticalLarge' />
      <ComponentExample examplePath='collections/Menu/Variations/SizeVerticalMassive' />

      <ComponentExample
        title='Fitted'
        description='A menu item or menu can remove element padding, vertically or horizontally'
        examplePath='collections/Menu/Variations/Fitted'
      />

      <ComponentExample
        title='Borderless'
        description='A menu item or menu can have no borders'
        examplePath='collections/Menu/Variations/Borderless'
      />
    </ExampleSection>
  )
}

export default Variations
