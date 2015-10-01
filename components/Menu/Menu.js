import React, {Component, PropTypes} from 'react';

class Menu extends Component {
  static propTypes = {
    activeItem: PropTypes.string,
    children: PropTypes.node,
  };

  state = {activeItem: this.props.activeItem};

  handleClickItem = (activeItem) => {
    this.setState({activeItem: activeItem});
  };

  render() {
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
      <div className='sd-menu ui secondary vertical pointing fluid menu'>
        {children}
      </div>
    );
  }
}

export default Menu;
