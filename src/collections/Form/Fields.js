import _ from 'lodash'
import React, { Children, Component, PropTypes } from 'react'
import classNames from 'classnames'
import getUnhandledProps from '../../utils/getUnhandledProps'
import numberToWord from '../../utils/numberToWord'
import META from '../../utils/Meta.js'

export default class Fields extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    /**
     * Dynamically adds className='<count> fields'.
     */
    evenlyDivided: PropTypes.bool,
  };

  static _meta = {
    library: META.library.semanticUI,
    name: 'Fields',
    parent: 'Form',
    type: META.type.collection,
  };

  render() {
    let fieldCount = 0
    Children.forEach(this.props.children, child => {
      if (_.get(child, 'type._meta.name') === 'Field') fieldCount += 1
    })
    fieldCount = numberToWord(fieldCount)

    const classes = classNames(
      'sd-fields',
      this.props.evenlyDivided && fieldCount,
      this.props.className,
      'fields'
    )
    const props = getUnhandledProps(this)
    return (
      <div {...props} className={classes}>
        {this.props.children}
      </div>
    )
  }
}
