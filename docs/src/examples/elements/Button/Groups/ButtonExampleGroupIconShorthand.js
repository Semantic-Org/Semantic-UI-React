import React from 'react'
import { Button } from 'semantic-ui-react'

const ButtonExampleGroupIconShorthand = () => (
  <div>
    <Button.Group
      buttons={[
        { key: 'align left', icon: 'align left' },
        { key: 'align center', icon: 'align center' },
        { key: 'align right', icon: 'align right' },
        { key: 'align justify', icon: 'align justify' },
      ]}
    />{' '}
    <Button.Group
      buttons={[
        { key: 'bold', icon: 'bold' },
        { key: 'underline', icon: 'underline' },
        { key: 'text width', icon: 'text width' },
      ]}
    />
  </div>
)

export default ButtonExampleGroupIconShorthand
