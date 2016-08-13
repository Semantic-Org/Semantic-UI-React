import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import {
  META,
  numberToWord,
} from '../../lib'

export default class FormField extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    label: PropTypes.string,
    width: PropTypes.number,
  }

  static _meta = {
    name: 'FormField',
    parent: 'Form',
    type: META.TYPES.COLLECTION,
  }

  render() {
    const classes = classNames(
      this.props.width && `${numberToWord(this.props.width)} wide`,
      this.props.className,
      'field'
    )
    return (
      <div {...this.props} className={classes}>
        {this.props.label && <label>{this.props.label}</label>}
        {this.props.children}
      </div>
    )
  }
}
