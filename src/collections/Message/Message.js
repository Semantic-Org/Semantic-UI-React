import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import $ from 'jquery'
import META from '../../utils/Meta'
import Header from '../../elements/Header/Header'
import Icon from '../../elements/Icon/Icon'

export default class Message extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    dismissable: PropTypes.bool,
    header: PropTypes.string,
    icon: PropTypes.string,
  }

  componentDidMount() {
    this.messageElm = $(this.refs.message)
  }

  handleDismiss = e => {
    this.messageElm.transition('fade')
  }

  static _meta = {
    library: META.library.semanticUI,
    name: 'Message',
    type: META.type.collection,
  }

  render() {
    const classes = classNames(
      'ui',
      this.props.className,
      { icon: this.props.icon },
      'message'
    )

    const closeIcon = <Icon name='close' onClick={this.handleDismiss} />
    const header = <Header>{this.props.header}</Header>
    const icon = <Icon name={this.props.icon} />

    // wrap children in <p> if there is a header
    const children = this.props.header ? <p>{this.props.children}</p> : this.props.children

    // wrap header and children in content if there is an icon
    const content = (
      <div className='content'>
        {this.props.header && header}
        {children}
      </div>
    )

    // prevent spreading icon classes as props on message element
    const messageProps = { ...this.props }
    delete messageProps.icon

    return (
      <div {...messageProps} className={classes} ref='message'>
        {this.props.dismissable && closeIcon}
        {this.props.icon && icon}
        {this.props.icon && content}
        {!this.props.icon && this.props.header && header}
        {!this.props.icon && this.props.children && children}
      </div>
    )
  }
}
