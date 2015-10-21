import _ from 'lodash';
import React, {Component, PropTypes, Children} from 'react';
import classNames from 'classnames';

export default class Input extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    dataContent: PropTypes.string,
    defaultValue: PropTypes.string,
    icon: PropTypes.string,
    ref: PropTypes.string,
  };

  static defaultProps = {
    type: 'text',
  };

  render() {
    // TODO: replace with <Icon /> once it is merged
    let iconClasses = classNames(
      this.props.icon,
      'icon',
    );
    // Semantic supports actions and labels on either side of an input.
    // The element must be on the same side as the indicated class.
    // We first determine the left/right classes for each type of child,
    //   then we extract the children and place them on the correct side
    //   of the input.
    let isLeftAction = _.includes(this.props.className, 'left action');
    let isRightAction = !isLeftAction && _.includes(this.props.className, 'action');
    let isRightLabeled = _.includes(this.props.className, 'right labeled');
    let isLeftLabeled = !isRightLabeled && _.includes(this.props.className, 'labeled');

    let labelChildren = [];
    let actionChildren = [];

    Children.forEach(this.props.children, child => {
      // TODO: use child._meta here, once merged, to determine component type
      let isButton = child.type.name === 'Button';
      let isDropdown = child.type.name === 'Dropdown';
      // TODO: use child.type.name === 'Label' once Label component is merged.
      let isLabel = _.isString(child.props.className) && !!child.props.className.match(/ui.*label$/);
      let childIsAction = !isLabel && isButton || isDropdown;

      if (childIsAction) {
        actionChildren.push(child);
      } else if (isLabel) {
        labelChildren.push(child);
      }
    });

    let icon = <i className={iconClasses} />;
    let classes = classNames(
      'sd-input',
      'ui',
      this.props.className,
      'input'
    );
    let inputProps = _.clone(this.props);
    delete inputProps.className;
    delete inputProps.children;
    return (
      <div className={classes}>
        {isLeftLabeled && labelChildren}
        {isLeftAction && actionChildren}
        <input {...inputProps} />
        {this.props.icon && icon}
        {isRightLabeled && labelChildren}
        {isRightAction && actionChildren}
      </div>
    );
  }
}
