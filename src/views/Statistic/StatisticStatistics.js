import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import META from '../../utils/Meta'

export default class StatisticStatistics extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  }

  static _meta = {
    library: META.library.semanticUI,
    name: 'StatisticStatistics',
    type: META.type.view,
    parent: 'Statistic',
  }

  render() {
    const classes = classNames(
      'ui',
      this.props.className,
      'statistics'
    )
    return (
      <div {...this.props} className={classes}>
        {this.props.children}
      </div>
    )
  }
}
