import React from 'react'
import { Segment } from 'stardust'

const SegmentEmphasisInvertedExample = () => (
  <div>
    <Segment inverted>
      I'm here to tell you something, and you will probably read me first.
    </Segment>
    <Segment inverted secondary>
      I am pretty noticeable but you might check out other content before you look at me.
    </Segment>
    <Segment inverted tertiary>
      If you notice me you must be looking very hard.
    </Segment>
  </div>
)

export default SegmentEmphasisInvertedExample
