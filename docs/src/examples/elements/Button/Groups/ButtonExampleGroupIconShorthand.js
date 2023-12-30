import React from 'react'
import { ButtonGroup } from 'semantic-ui-react'

const ButtonExampleGroupIconShorthand = () => (
  <div>
    <ButtonGroup
      buttons={[
        { key: 'align left', icon: 'align left' },
        { key: 'align center', icon: 'align center' },
        { key: 'align right', icon: 'align right' },
        { key: 'align justify', icon: 'align justify' },
      ]}
    />{' '}
    <ButtonGroup
      buttons={[
        { key: 'bold', icon: 'bold' },
        { key: 'underline', icon: 'underline' },
        { key: 'text width', icon: 'text width' },
      ]}
    />
  </div>
)

export default ButtonExampleGroupIconShorthand
