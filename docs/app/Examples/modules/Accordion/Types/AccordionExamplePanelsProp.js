import React, { PropTypes } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'
import faker from 'faker'
import _ from 'lodash'

const CustomTitle = ({ text }) => (
  <div>
    <Icon name='folder' />
    {text}
  </div>
)

CustomTitle.propTypes = {
  text: PropTypes.string.isRequired,
}

const panels = _.times(3, i => ({
  key: `panel-${i}`,
  title: (<CustomTitle text={faker.lorem.sentence()} />),
  content: faker.lorem.paragraphs(),
}))

const AccordionExamplePanelsProp = () => (
  <Accordion panels={panels} />
)

export default AccordionExamplePanelsProp
