import _ from 'lodash'
import React, { Children, Component, PropTypes } from 'react'
import classNames from 'classnames'

import {
  getUnhandledProps,
  META,
  numberToWord,
} from '../../lib'

export default class FormFields extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    /**
     * Dynamically adds className='<count> fields'.
     */
    evenlyDivided: PropTypes.bool,
  }

  static _meta = {
    name: 'FormFields',
    parent: 'Form',
    type: META.TYPES.COLLECTION,
  }

  render() {
    let fieldCount = 0
    if (this.props.evenlyDivided) {
      Children.forEach(this.props.children, child => {
        if (_.get(child, 'type._meta.name') === 'FormField') {
          fieldCount += 1
        }
      })
    }

    const classes = classNames(
      this.props.className,
      numberToWord(fieldCount),
      'fields'
    )
    const props = getUnhandledProps(FormFields, this.props)
    return (
      <div {...props} className={classes}>
        {this.props.children}
      </div>
    )
  }
}
