import faker from 'faker'
import times from 'lodash/times'
import React from 'react'
import { Accordion, Label, Message } from 'semantic-ui-react'

const panels = times(3, (i) => ({
  key: `panel-${i}`,
  title: {
    content: <Label color='blue' content={faker.lorem.sentence()} />,
  },
  content: {
    content: (
      <Message
        info
        header={faker.lorem.sentence()}
        content={faker.lorem.paragraph()}
      />
    ),
  },
}))

const AccordionExampleShorthand = () => (
  <Accordion defaultActiveIndex={1} panels={panels} />
)

export default AccordionExampleShorthand
