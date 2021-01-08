import PropTypes from 'prop-types'
import React from 'react'
import copyToClipboard from 'copy-to-clipboard'

class CopyToClipboard extends React.Component {
  static propTypes = {
    render: PropTypes.func.isRequired,
    timeout: PropTypes.number,
    value: PropTypes.string.isRequired,
  }

  static defaultProps = {
    timeout: 3000,
  }

  state = {
    active: false,
  }

  timeoutId

  componentWillUnmount() {
    clearTimeout(this.timeoutId)
  }

  handleClick = () => {
    const { timeout, value } = this.props

    clearTimeout(this.timeoutId)

    this.setState({ active: true })
    this.timeoutId = setTimeout(() => {
      this.setState({ active: false })
    }, timeout)

    copyToClipboard(value)
  }

  render() {
    const { render } = this.props
    const { active } = this.state

    return render(active, this.handleClick)
  }
}

export default CopyToClipboard
