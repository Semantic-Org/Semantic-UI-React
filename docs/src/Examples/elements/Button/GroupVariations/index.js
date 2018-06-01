import React from 'react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'
import ShorthandExample from 'docs/src/components/ComponentDoc/ShorthandExample'

const ButtonGroupVariationsExamples = () => (
  <ExampleSection title='Group Variations'>
    <ComponentExample
      title='Floated Group'
      description='Groups can be aligned to the left or right of its container.'
      examplePath='elements/Button/GroupVariations/ButtonExampleGroupFloated'
    />
    <ComponentExample
      title='Vertical Group'
      description='Groups can be formatted to appear vertically.'
      examplePath='elements/Button/GroupVariations/ButtonExampleGroupVertical'
    />
    <ComponentExample
      title='Icon Group'
      description='Groups can be formatted as icons.'
      examplePath='elements/Button/GroupVariations/ButtonExampleGroupIcon'
    />
    <ShorthandExample
      description='Using shorthand icons formats each individual button as an icon button.'
      examplePath='elements/Button/GroupVariations/ButtonExampleGroupIconShorthand'
    />
    <ComponentExample
      title='Labeled Icon Groups'
      description='Groups can be formatted as labeled icons.'
      examplePath='elements/Button/GroupVariations/ButtonExampleGroupLabeledIcon'
    />
    <ComponentExample
      title='Mixed Group'
      description='Groups can be formatted to use multiple button types together.'
      examplePath='elements/Button/GroupVariations/ButtonExampleGroupMixed'
    />
    <ComponentExample
      title='Equal Width'
      description='Groups can have their widths divided evenly.'
      examplePath='elements/Button/GroupVariations/ButtonExampleGroupEqualWidth'
    />
    <ComponentExample
      title='Colored Group'
      description='Groups can have a shared color.'
      examplePath='elements/Button/GroupVariations/ButtonExampleGroupColored'
    />
    <ComponentExample
      title='Basic Group'
      description='A button group can be less pronounced.'
      examplePath='elements/Button/GroupVariations/ButtonExampleGroupBasic'
    />
    <ComponentExample examplePath='elements/Button/GroupVariations/ButtonExampleGroupBasicColored' />
    <ComponentExample
      title='Group Sizes'
      description='Groups can have a shared size.'
      examplePath='elements/Button/GroupVariations/ButtonExampleGroupSize'
    />
    <ComponentExample examplePath='elements/Button/GroupVariations/ButtonExampleGroupIconSize' />
    <ComponentExample examplePath='elements/Button/GroupVariations/ButtonExampleGroupOrSize' />
  </ExampleSection>
)

export default ButtonGroupVariationsExamples
