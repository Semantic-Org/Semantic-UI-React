import React from 'react'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const Variations = () => (
  <ExampleSection title="Variations">
    <ComponentExample
      title="Image"
      description="An Avatar can show the image of the user."
      examplePath="components/Avatar/Variations/AvatarExampleSrc"
    />
    <ComponentExample
      title="Status"
      description="An Avatar can have a status icon showing his presence."
      examplePath="components/Avatar/Variations/AvatarExampleStatus"
    />
    <ComponentExample
      title="Name"
      description="An Avatar can have initials shown from the name prop, if no image is provided"
      examplePath="components/Avatar/Variations/AvatarExampleName"
    />
    <ComponentExample
      title="Size"
      description="An Avatar can have different sizes."
      examplePath="components/Avatar/Variations/AvatarExampleSize"
    />
  </ExampleSection>
)

export default Variations
