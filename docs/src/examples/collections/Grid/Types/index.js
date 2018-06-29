import React from 'react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const GridTypesExamples = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='Grid'
      description='A basic grid.'
      examplePath='collections/Grid/Types/GridExampleGrid'
    />

    <ComponentExample
      title='Divided'
      description='A grid can have dividers between its columns.'
      examplePath='collections/Grid/Types/GridExampleDividedNumber'
    />
    <ComponentExample
      description='You can also use semantic names for columns.'
      examplePath='collections/Grid/Types/GridExampleDividedPhrase'
    />

    <ComponentExample
      title='Vertically Divided'
      description='A grid can have dividers between rows.'
      examplePath='collections/Grid/Types/GridExampleDividedVertically'
    />

    <ComponentExample
      title='Celled'
      description='A grid can have rows divided into cells.'
      examplePath='collections/Grid/Types/GridExampleCelled'
    />

    <ComponentExample
      title='Internally Celled'
      description='A grid can have rows divisions only between internal rows.'
      examplePath='collections/Grid/Types/GridExampleCelledInternally'
    />
  </ExampleSection>
)

export default GridTypesExamples
