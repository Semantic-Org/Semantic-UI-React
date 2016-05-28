import _ from 'lodash'
import classNames from 'classnames'
import React, { Component, PropTypes, Children } from 'react'
import META from '../../utils/Meta'
import { getUnhandledProps } from '../../utils/propUtils'
import Icon from '../../elements/Icon/Icon'

export default class Input extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    icon: PropTypes.string,
    type: PropTypes.string,
  }

  static defaultProps = {
    type: 'text',
  }

  static _meta = {
    library: META.library.semanticUI,
    name: 'Input',
    type: META.type.element,
  }

  render() {
    const { className, children, icon, type } = this.props
    // Semantic supports actions and labels on either side of an input.
    // The element must be on the same side as the indicated class.
    // We first determine the left/right classes for each type of child,
    //   then we extract the children and place them on the correct side
    //   of the input.
    const isLeftAction = _.includes(className, 'left action')
    const isRightAction = !isLeftAction && _.includes(className, 'action')
    const isRightLabeled = _.includes(className, 'right labeled')
    const isLeftLabeled = !isRightLabeled && _.includes(className, 'labeled')

    const labelChildren = []
    const actionChildren = []

    Children.forEach(children, child => {
      const isButton = child.type.name === 'Button'
      const isDropdown = child.type.name === 'Dropdown'
      // TODO: use child.type.name === 'Label' once Label component is merged.
      const isLabel = _.isString(child.props.className) && !!child.props.className.match(/ui.*label$/)
      const childIsAction = !isLabel && isButton || isDropdown

      if (childIsAction) {
        actionChildren.push(child)
      } else if (isLabel) {
        labelChildren.push(child)
      }
    })

    const classes = classNames(
      'sd-input',
      'ui',
      className,
      'input'
    )
    const props = getUnhandledProps(Input, this.props)

    return (
      <div className={classes}>
        {isLeftLabeled && labelChildren}
        {isLeftAction && actionChildren}
        <input {...props} type={type} />
        {icon && <Icon className={icon} />}
        {isRightLabeled && labelChildren}
        {isRightAction && actionChildren}
      </div>
    )
  }
}
