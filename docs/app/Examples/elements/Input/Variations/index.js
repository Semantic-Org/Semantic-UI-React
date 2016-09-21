import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const InputVariations = () => (
  <ExampleSection title='Variations'>
    <ComponentExample
      title='Icon'
      description='An input can be formatted with an icon'
      examplePath='elements/Input/Variations/InputIcon'
    />
    <ComponentExample
      examplePath='elements/Input/Variations/InputIconPosition'
    />
    <ComponentExample
      description='You can pass an Icon props object'
      examplePath='elements/Input/Variations/InputIconProps'
    />
    <ComponentExample
      description='You can pass an Icon element'
      examplePath='elements/Input/Variations/InputIconElement'
    />
    <ComponentExample
      title='Labeled'
      description='An input can be formatted with an label'
      examplePath='elements/Input/Variations/InputLabeled'
    />
    <ComponentExample
      examplePath='elements/Input/Variations/InputRightLabeled'
    />
    <ComponentExample
      title='Action'
      description='An input can be formatted to alert the user to an action they may perform'
      examplePath='elements/Input/Variations/InputAction'
    />
    <ComponentExample
      examplePath='elements/Input/Variations/InputActionExtra'
    />
    <ComponentExample
      title='Transparent'
      description='A transparent input has no background'
      examplePath='elements/Input/Variations/InputTransparent'
    />
    <ComponentExample
      title='Inverted'
      description='An input can be formatted to appear on dark backgrounds'
      examplePath='elements/Input/Variations/InputInverted'
    />
    <ComponentExample
      title='Fluid'
      description='An input can take on the size of its container'
      examplePath='elements/Input/Variations/InputFluid'
    />
    <ComponentExample
      title='Size'
      description='An input can vary in size'
      examplePath='elements/Input/Variations/InputSize'
    />

  </ExampleSection>
)

export default InputVariations
