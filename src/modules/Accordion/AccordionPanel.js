import _ from 'lodash'
import PropTypes from 'prop-types'
import { Component } from 'react'

import { createShorthandFactory, customPropTypes } from '../../lib'
import AccordionTitle from './AccordionTitle'
import AccordionContent from './AccordionContent'

class AccordionPanel extends Component {
  static propTypes = {
    active: PropTypes.bool,
    content: customPropTypes.itemShorthand,
    index: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onTitleClick: PropTypes.func,
    title: customPropTypes.itemShorthand,
  }

  handleTitleOverrides = predefinedProps => ({
    onClick: (e, titleProps) => {
      _.invoke(predefinedProps, 'onClick', e, titleProps)
      _.invoke(this.props, 'onTitleClick', e, titleProps)
    },
  })

  render() {
    const { active, content, index, title } = this.props

    return [
      AccordionTitle.create(title, {
        defaultProps: { active, index },
        overrideProps: this.handleTitleOverrides,
      }),
      AccordionContent.create(content, { defaultProps: { active } }),
    ]
  }
}

AccordionPanel.create = createShorthandFactory(AccordionPanel, content => ({ content }))

export default AccordionPanel
