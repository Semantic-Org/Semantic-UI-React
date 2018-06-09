import cx from 'classnames'
import { withRouter } from 'next/router'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

class ActiveLink extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    href: PropTypes.string.isRequired,
    router: PropTypes.shape({
      pathname: PropTypes.string,
    }).isRequired,
  }

  handleClick = (e) => {
    const { router } = this.props

    e.preventDefault()
    router.push(href)
  }

  render() {
    const {
      children,
      className,
      href,
      router: { pathname },
      ...rest
    } = this.props
    const classes = cx(pathname === href && 'active', className)

    return (
      <a {...rest} className={classes} href={href}>
        {children}
      </a>
    )
  }
}

export default withRouter(ActiveLink)
