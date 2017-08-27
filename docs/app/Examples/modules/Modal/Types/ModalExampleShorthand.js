import React from 'react'
import { Button, Modal } from 'semantic-ui-react'

const ModalExampleShorthand = () => (
  <Modal
    trigger={<Button>Show Modal</Button>}
    header='Reminder!'
    content='Call Benjamin regarding the reports.'
    actions={[
      'Snooze',
      { key: 'done', content: 'Done', positive: true },
    ]}
  />
)

export default ModalExampleShorthand
