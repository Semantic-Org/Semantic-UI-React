import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const ButtonGroupVariationsExamples = () => (
  <ExampleSection title='Group Variations'>
    <ComponentExample
      title='Vertical Group'
      description='Groups can be formatted to appear vertically'
      examplePath='elements/Button/GroupVariations/ButtonGroupVerticalExample'
    />
    <ComponentExample
      title='Icon Group'
      description='Groups can be formatted as icons'
      examplePath='elements/Button/GroupVariations/ButtonGroupIconExample'
    />
    <ComponentExample
      description='Using shorthand icons formats each individual button as an icon button'
      examplePath='elements/Button/GroupVariations/ButtonGroupIconShorthandExample'
    />
    <ComponentExample
      title='Labeled Icon Groups'
      description='Groups can be formatted as labeled icons'
      examplePath='elements/Button/GroupVariations/ButtonGroupLabeledIconExample'
    />
    <ComponentExample
      title='Mixed Group'
      description='Groups can be formatted to use multiple button types together'
      examplePath='elements/Button/GroupVariations/ButtonGroupMixedExample'
    />
    <ComponentExample
      title='Equal Width'
      description='Groups can have their widths divided evenly'
      examplePath='elements/Button/GroupVariations/ButtonGroupEqualWidthExample'
    />
    <ComponentExample
      title='Colored Group'
      description='Groups can have a shared color'
      examplePath='elements/Button/GroupVariations/ButtonGroupColoredExample'
    />
    <ComponentExample
      title='Basic Group'
      description='A button group can be less pronounced'
      examplePath='elements/Button/GroupVariations/ButtonGroupBasicExample'
    />
    <ComponentExample
      examplePath='elements/Button/GroupVariations/ButtonGroupBasicColoredExample'
    />
    <ComponentExample
      title='Group Sizes'
      description='Groups can have a shared size'
      examplePath='elements/Button/GroupVariations/ButtonGroupSizeExample'
    />
    <ComponentExample
      examplePath='elements/Button/GroupVariations/ButtonGroupIconSizeExample'
    />
    <ComponentExample
      examplePath='elements/Button/GroupVariations/ButtonGroupOrSizeExample'
    />
  </ExampleSection>
)

export default ButtonGroupVariationsExamples
