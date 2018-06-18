import _ from 'lodash'
import React from 'react'
import { Divider } from 'stardust'

const DividerExampleSize = () =>
  _.times(10, (i) => {
    const size = i + 1

    return (
      <Divider key={size} size={size}>
        Size {size}
      </Divider>
    )
  })

export default DividerExampleSize
