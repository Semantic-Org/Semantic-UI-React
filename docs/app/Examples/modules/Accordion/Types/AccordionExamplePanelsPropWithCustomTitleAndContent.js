import React, { PropTypes } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'
import faker from 'faker'
import _ from 'lodash'

const CustomTitle = ({ title }) => (
    <div>
      <Icon name='folder' />
      {title}
    </div>
)

CustomTitle.propTypes = {
  title: PropTypes.string.isRequired,
}

const CustomContent = ({ content }) => (
    <div>
      <Icon name='file outline' />
      {content}
    </div>
)

CustomContent.propTypes = {
  content: PropTypes.string.isRequired,
}

const panels = _.times(3, i => ({
  key: `panel-${i}`,
  title: (<CustomTitle title={faker.lorem.sentence()} />),
  content: (<CustomContent content={faker.lorem.sentence()} />),
}))

const AccordionExamplePanelsProp = () => (
  <Accordion panels={panels} />
)

export default AccordionExamplePanelsProp
