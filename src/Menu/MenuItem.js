import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

class MenuItem extends Component {
  static propTypes = {
    activeItem: PropTypes.string,
    callbackParent: PropTypes.func,
    children: PropTypes.node,
    label: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    name: PropTypes.string.isRequired,
    onClickMenuItem: PropTypes.func,
  };

  handleClick = (e) => {
    if (this.props.onClickMenuItem) {
      this.props.onClickMenuItem(this.props.name);
    }
    this.props.callbackParent(this.props.name);
  };

  render() {
    let menuLabel = <div className='sd-menu-label ui blue label'>{this.props.label}</div>;
    let isActive = this.props.activeItem === this.props.name;
    let classes = classNames('sd-menu-item', 'blue', 'item', {active: isActive});
    return (
      <a className={classes} onClick={this.handleClick}>
        {this.props.name}
        {this.props.label && menuLabel}
      </a>
    );
  }
}

export default MenuItem;
