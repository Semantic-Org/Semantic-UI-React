import React from 'react'
import { Segment } from 'semantic-ui-react'

const SegmentGroupSizesExample = () => {
  const sizes = ['mini', 'tiny', 'small', 'large', 'big', 'huge', 'massive']

  return (
    <div>
      {sizes.map((size) => (
        <Segment.Group key={size} size={size}>
          <Segment>It's a {size} segment</Segment>
          <Segment>And it's a {size} segment, too</Segment>
        </Segment.Group>
      ))}
    </div>
  )
}

export default SegmentGroupSizesExample
