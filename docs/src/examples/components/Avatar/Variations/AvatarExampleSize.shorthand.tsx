import _ from 'lodash'
import React from 'react'
import { Avatar } from 'stardust'

const AvatarExampleSizeShorthand = () =>
  _.times(10, i => {
    const size = i + 1

    return (
      <div style={{ background: 'white' }}>
        <Avatar
          key={size}
          size={size}
          src="/public/images/avatar/small/matt.jpg"
          status="Available"
        />
      </div>
    )
  })

export default AvatarExampleSizeShorthand
