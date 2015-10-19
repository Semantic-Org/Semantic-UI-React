import React, {Component, findDOMNode, PropTypes} from 'react';
import classNames from 'classnames';
import $ from 'jquery';

export default class Message extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    dismissable: PropTypes.bool,
    header: PropTypes.string,
    icon: PropTypes.string,
  };

  componentDidMount() {
    this.messageElm = $(findDOMNode(this.refs.message));
  }

  handleDismiss = (e) => {
    this.messageElm.transition('fade');
  };

  render() {
    let classes = classNames(
      'sd-message',
      'ui',
      this.props.className,
      {icon: this.props.icon},
      'message',
    );

    let iconClasses = classNames(
      'sd-message-icon',
      this.props.icon,
      'icon'
    );

    let closeIcon = <i className='sd-message-close-icon close icon' onClick={this.handleDismiss} />;
    let header = <div className='sd-message-header header'>{this.props.header}</div>;
    let icon = <i className={iconClasses} />;

    // wrap children in <p> if there is a header
    let children = this.props.header ? <p>{this.props.children}</p> : this.props.children;

    // wrap header and children in content if there is an icon
    let content = (
      <div className='sd-message-content content'>
        {this.props.header && header}
        {children}
      </div>
    );

    // prevent spreading icon classes as props on message element
    let messageProps = _.clone(this.props);
    delete messageProps.icon;

    return (
      <div {...messageProps} className={classes} ref='message'>
        {this.props.dismissable && closeIcon}
        {this.props.icon && icon}
        {this.props.icon && content}
        {!this.props.icon && this.props.header && header}
        {!this.props.icon && this.props.children && children}
      </div>
    );
  }
}
