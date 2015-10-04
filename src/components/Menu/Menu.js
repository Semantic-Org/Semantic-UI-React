import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

class Menu extends Component {
  static propTypes = {
    activeItem: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    fluid: PropTypes.bool,
    inverted: PropTypes.bool,
    pointing: PropTypes.bool,
    secondary: PropTypes.bool,
    small: PropTypes.bool,
    text: PropTypes.bool,
    vertical: PropTypes.bool,
  };

  state = {activeItem: this.props.activeItem};

  handleClickItem = (activeItem) => {
    this.setState({activeItem: activeItem});
  };

  render() {
    let classes = classNames(
      'sd-menu',
      this.props.className,
      'ui',
      {inverted: this.props.inverted},
      {secondary: this.props.secondary},
      {small: this.props.small},
      {pointing: this.props.pointing},
      {fluid: this.props.fluid},
      {text: this.props.text},
      {vertical: this.props.vertical},
      'menu'
    );
    let hasActiveItem = !!this.state.activeItem || !!this.props.activeItem;
    let children = React.Children.map(this.props.children, (child, i) => {
      let activeItemName = !hasActiveItem && i === 0
        ? child.props.name
        : this.state.activeItem || this.props.activeItem;
      return React.cloneElement(child, {
        activeItem: activeItemName,
        callbackParent: this.handleClickItem,
      });
    });
    return (
      <div className={classes}>
        {children}
      </div>
    );
  }
}

export default Menu;
