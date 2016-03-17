import _ from 'lodash'
import React, { Children, Component, PropTypes } from 'react'
import classNames from 'classnames'
import getUnhandledProps from '../../utils/getUnhandledProps'
import numberToWord from '../../utils/numberToWord'
import META from '../../utils/Meta.js'

export default class FormFields extends Component {
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
    name: 'FormFields',
    parent: 'Form',
    type: META.type.collection,
  };

  render() {
    let fieldCount = 0
    if (this.props.evenlyDivided) {
      Children.forEach(this.props.children, child => {
        if (_.get(child, 'type._meta.name') === 'FormField') {
          fieldCount += 1
        }
      })
    }

    // Only apply the class "fields" if the className from props does not
    // include "field" (styles do not work when both are applied).
    const fieldClass = (
      !this.props.className ||
      !this.props.className.includes('field')
    ) ? 'fields' : null

    const classes = classNames(
      'sd-form-fields',
      this.props.className,
      numberToWord(fieldCount),
      fieldClass,
    )
    const props = getUnhandledProps(this)
    return (
      <div {...props} className={classes}>
        {this.props.children}
      </div>
    )
  }
}
