import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

import { Message } from 'src'

const InputVariations = () => (
  <ExampleSection title='Variations'>
    <ComponentExample
      title='Icon'
      description='An input can be formatted with an icon'
      examplePath='elements/Input/Variations/InputIcon'
    />
    <ComponentExample
      description='You can position the icon'
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
      description='You can pass an Icon child'
      examplePath='elements/Input/Variations/InputIconChild'
    >
      <Message warning>
        When using <code>children</code>, you must add your own <code>{'<input />'}</code>.
      </Message>
    </ComponentExample>
    <ComponentExample
      title='Labeled'
      description='An input can be formatted with a label'
      examplePath='elements/Input/Variations/InputLabeled'
    />
    <ComponentExample
      description='You can pass any element'
      examplePath='elements/Input/Variations/InputRightLabeled'
    />
    <ComponentExample
      description='You can pass a Label props object'
      examplePath='elements/Input/Variations/InputRightLabeledBasic'
    />
    <ComponentExample
      description='You can pass a Label child'
      examplePath='elements/Input/Variations/InputRightLeftLabeled'
    >
      <Message warning>
        Multiple Labels require <code>children</code>.
        When using <code>children</code>, you must add your own <code>{'<input />'}</code>.
      </Message>
    </ComponentExample>
    <ComponentExample examplePath='elements/Input/Variations/InputRightLabeledTag' />
    <ComponentExample examplePath='elements/Input/Variations/InputLeftCornerLabeled' />
    <ComponentExample examplePath='elements/Input/Variations/InputRightCornerLabeled' />
    <ComponentExample
      title='Action'
      description='An input can be formatted to alert the user to an action they may perform'
      examplePath='elements/Input/Variations/InputAction'
    />
    <ComponentExample
      description='You can pass a Button props object'
      examplePath='elements/Input/Variations/InputLeftActionLabeledButton'
    />
    <ComponentExample
      description='You can pass any element'
      examplePath='elements/Input/Variations/InputActionDropdown'
    />
    <ComponentExample examplePath='elements/Input/Variations/InputActions'>
      <Message warning>
        Multiple Actions require <code>children</code>.
        When using <code>children</code>, you must add your own <code>{'<input />'}</code>.
      </Message>
    </ComponentExample>
    <ComponentExample examplePath='elements/Input/Variations/InputActionLabeledButton' />
    <ComponentExample examplePath='elements/Input/Variations/InputActionIconButton' />
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
