import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import { getUnhandledProps } from '../../utils/propUtils'
import META from '../../utils/Meta'

export default class StatisticValue extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  }

  static _meta = {
    library: META.library.semanticUI,
    name: 'StatisticValue',
    type: META.type.view,
    parent: 'Statistic',
  }

  render() {
    const classes = classNames(
      this.props.className,
      'value',
    )

    const props = getUnhandledProps(StatisticValue, this.props)

    return (
      <div {...props} className={classes}>
        {this.props.children}
      </div>
    )
  }
}
