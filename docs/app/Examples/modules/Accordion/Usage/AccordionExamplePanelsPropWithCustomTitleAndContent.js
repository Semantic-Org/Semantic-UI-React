import React from 'react'
import { Accordion, Header, Message } from 'semantic-ui-react'
import faker from 'faker'
import _ from 'lodash'

const panels = _.times(3, i => ({
  key: `panel-${i}`,
  title: (<Header size='medium' as='span'>{faker.lorem.sentence()}</Header>),
  content: (
    <Message
      info
      header={faker.lorem.sentence()}
      content={faker.lorem.paragraph()}
    />
  ),
}))

const AccordionExamplePanelsPropWithCustomTitleAndContent = () => (
  <Accordion panels={panels} />
)

export default AccordionExamplePanelsPropWithCustomTitleAndContent
