import React, {Component, findDOMNode, PropTypes} from 'react';
import classNames from 'classnames';
import $ from 'jquery';

export default class Message extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    dismissable: PropTypes.bool,
    heading: PropTypes.string,
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
    let heading = <div className='sd-message-heading header'>{this.props.heading}</div>;
    let icon = <i className={iconClasses} onClick={this.handleDismiss} />;

    // wrap children in <p> if there is a heading
    let children = this.props.heading ? <p>{this.props.children}</p> : this.props.children;

    // wrap heading and children in content if there is an icon
    let content = !this.props.icon ? [this.props.heading && heading, children] : (
      <div className='sd-message-content content'>
        {this.props.heading && heading}
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
        {content}
      </div>
    );
  }
}
