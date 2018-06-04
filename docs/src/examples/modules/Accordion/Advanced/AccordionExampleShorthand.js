import faker from 'faker'
import _ from 'lodash'
import React from 'react'
import { Accordion, Label, Message } from 'semantic-ui-react'

const panels = _.times(3, i => ({
  title: {
    content: <Label color='blue' content={faker.lorem.sentence()} />,
    key: `title-${i}`,
  },
  content: {
    content: (
      <Message
        info
        header={faker.lorem.sentence()}
        content={faker.lorem.paragraph()}
      />
    ),
    key: `content-${i}`,
  },
}))

const AccordionExampleShorthand = () => (
  <Accordion defaultActiveIndex={1} panels={panels} />
)

export default AccordionExampleShorthand
