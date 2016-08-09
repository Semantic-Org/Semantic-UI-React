import React, { Component } from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

export default class RatingExamples extends Component {
  render() {
    return (
      <div>
        <ExampleSection title='Types'>
          <ComponentExample
            title='Rating'
            description='A basic rating'
            examplePath='modules/Rating/Types/RatingRatingExample'
          />
          <ComponentExample
            title='Star'
            description='A rating can use a set of star icons'
            examplePath='modules/Rating/Types/RatingStarExample'
          />
          <ComponentExample
            title='Heart'
            description='A rating can use a set of heart icons'
            examplePath='modules/Rating/Types/RatingHeartExample'
          />
          <ComponentExample
            title='Clearable'
            description='A rating can be cleared by clicking again'
            examplePath='modules/Rating/Types/RatingClearableExample'
          />
          <ComponentExample
            title='Disabled'
            description='A rating can be disabled'
            examplePath='modules/Rating/Types/RatingDisabledExample'
          />
          <ComponentExample
            title='Controlled'
            description='A rating can be a controlled component'
            examplePath='modules/Rating/Types/RatingControlledExample'
          />
          <ComponentExample
            title='onRate Callback'
            description='A rating calls back when the rating changes'
            examplePath='modules/Rating/Types/RatingOnRateExample'
          />
        </ExampleSection>

        <ExampleSection title='Variations'>
          <ComponentExample
            title='Size'
            description='A rating can vary in size'
            examplePath='modules/Rating/Variations/RatingSizeExample'
          />
        </ExampleSection>
      </div>
    )
  }
}
