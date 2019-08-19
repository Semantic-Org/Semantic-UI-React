import React from 'react'
import { Segment } from 'semantic-ui-react'

const SegmentExampleSizes = () => {
  const sizes = ['mini', 'tiny', 'small', 'large', 'big', 'huge', 'massive']

  return (
    <div>
      {sizes.map((size) => (
        <Segment key={size} size={size}>
          It's a {size} segment
        </Segment>
      ))}
    </div>
  )
}

export default SegmentExampleSizes
