import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import META from 'src/utils/Meta';
import getUnhandledProps from 'src/utils/getUnhandledProps';

export default class Menu extends Component {
  static propTypes = {
    activeItem: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
  };

  state = {activeItem: this.props.activeItem};

  handleClickItem = (activeItem) => {
    this.setState({activeItem});
  };

  static _meta = {
    library: META.library.semanticUI,
    name: 'Menu',
    type: META.type.collection,
  };

  render() {
    const classes = classNames(
      'sd-menu',
      'ui',
      this.props.className,
      'menu'
    );
    const hasActiveItem = !!this.state.activeItem || !!this.props.activeItem;
    const children = React.Children.map(this.props.children, (child, i) => {
      const activeItemName = !hasActiveItem && i === 0
        ? child.props.name
        : this.state.activeItem || this.props.activeItem;
      return React.cloneElement(child, {
        activeItem: activeItemName,
        callbackParent: this.handleClickItem,
      });
    });
    const props = getUnhandledProps(this);
    return (
      <div {...props} className={classes}>
        {children}
      </div>
    );
  }
}
