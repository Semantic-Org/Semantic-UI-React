import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const StatisticExamples = () => (
  <div>
    <ExampleSection title='Types'>
      <ComponentExample
        title='Statistic'
        description='A statistic can display a value with a label above or below it.'
        examplePath='views/Statistic/Types/StatisticBottomLabelExample'
      />
      <ComponentExample examplePath='views/Statistic/Types/StatisticTopLabelExample' />

      <ComponentExample
        title='Statistic Group'
        description='A group of statistics'
        examplePath='views/Statistic/Types/StatisticGroupExample'
      />
    </ExampleSection>

    <ExampleSection title='Content'>
      <ComponentExample
        title='Value'
        description='A statistic can contain a numeric, icon, image, or text value.'
        examplePath='views/Statistic/Content/StatisticValueExample'
      />
      <ComponentExample examplePath='views/Statistic/Content/StatisticValuePropsExample' />

      <ComponentExample
        title='Label'
        description='A statistic can contain a label to help provide context for the presented value'
        examplePath='views/Statistic/Content/StatisticLabelExample'
      />
    </ExampleSection>

    <ExampleSection title='Variations'>
      <ComponentExample
        title='Horizontal Statistic'
        description='A statistic can present its measurement horizontally.'
        examplePath='views/Statistic/Variations/StatisticHorizontalExample'
      />
      <ComponentExample examplePath='views/Statistic/Variations/StatisticGroupHorizontalExample' />

      <ComponentExample
        title='Colored'
        description='A statistic can be formatted to be different colors'
        examplePath='views/Statistic/Variations/StatisticColoredExample'
      />

      <ComponentExample
        title='Inverted'
        description='A statistic can be formatted to fit on a dark background'
        examplePath='views/Statistic/Variations/StatisticInvertedExample'
      />

      <ComponentExample
        title='Evenly Divided'
        description='A statistic group can have its items divided evenly'
        examplePath='views/Statistic/Variations/StatisticEvenlyDividedExample'
      />

      <ComponentExample
        title='Floated'
        description='An statistic can sit to the left or right of other content'
        examplePath='views/Statistic/Variations/StatisticFloatedExample'
      />

      <ComponentExample
        title='Size'
        description='A statistic can vary in size.'
        examplePath='views/Statistic/Variations/StatisticSizeExamples'
      />
      <ComponentExample examplePath='views/Statistic/Variations/StatisticSizeDividedExamples' />
    </ExampleSection>
  </div>
)

export default StatisticExamples
