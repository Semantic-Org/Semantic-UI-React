import React from 'react'
import { Accordion, List, Image, Button } from '@stardust-ui/react'

class AccordionExampleList extends React.Component {
  render() {
    const panels = [
      {
        title: 'Pets',
        content: (
          <div>
            <List
              items={[
                { key: 'a', media: <Image avatar src="//placehold.it/100" />, header: 'cat' },
                { key: 'b', media: <Image avatar src="//placehold.it/100" />, header: 'dog' },
                { key: 'c', media: <Image avatar src="//placehold.it/100" />, header: 'mouse' },
              ]}
            />
            <Button>Add pet</Button>
          </div>
        ),
      },
    ]

    return <Accordion panels={panels} />
  }
}

export default AccordionExampleList
