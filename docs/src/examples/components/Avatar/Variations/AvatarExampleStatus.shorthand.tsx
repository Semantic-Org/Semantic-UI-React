import React from 'react'
import { Avatar } from '@stardust-ui/react'

const AvatarExampleStatusShorthand = () => (
  <div style={{ background: 'white' }}>
    <Avatar
      src="/public/images/avatar/small/matt.jpg"
      status="Available"
      style={{ marginRight: '15px' }}
    />
    <Avatar
      src="/public/images/avatar/small/matt.jpg"
      status="Busy"
      style={{ marginRight: '15px' }}
    />
    <Avatar
      src="/public/images/avatar/small/matt.jpg"
      status="DoNotDisturb"
      style={{ marginRight: '15px' }}
    />
    <Avatar
      src="/public/images/avatar/small/matt.jpg"
      status="Away"
      style={{ marginRight: '15px' }}
    />
    <Avatar
      src="/public/images/avatar/small/matt.jpg"
      status="BeRightBack"
      style={{ marginRight: '15px' }}
    />
    <Avatar
      src="/public/images/avatar/small/matt.jpg"
      status="Offline"
      style={{ marginRight: '15px' }}
    />
    <Avatar
      src="/public/images/avatar/small/matt.jpg"
      status="PresenceUnknown"
      style={{ marginRight: '15px' }}
    />
  </div>
)

export default AvatarExampleStatusShorthand
