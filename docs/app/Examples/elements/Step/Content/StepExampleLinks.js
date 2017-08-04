import React, { Component } from 'react'
import { Step } from 'semantic-ui-react'

class ClickableStep extends Component {
  state = {}

  handleClick = () => this.setState({ active: !this.state.active })

  render() {
    return <Step {...this.props} active={this.state.active} onClick={this.handleClick} />
  }
}

const StepExampleLinks = () => (
  <div>
    <Step.Group>
      <Step active href='http://google.com' icon='truck' title='Shipping' description='Choose your shipping options' />
      <Step href='http://google.com' icon='credit card' title='Billing' description='Enter billing information' />
    </Step.Group>

    <br />

    <Step.Group>
      <ClickableStep icon='truck' title='Shipping' description='Choose your shipping options' />
      <ClickableStep icon='credit card' title='Billing' description='Enter billing information' />
    </Step.Group>

    <br />

    <Step.Group>
      <Step link icon='truck' title='Shipping' description='Choose your shipping options' />
      <Step link icon='credit card' title='Billing' description='Enter billing information' />
    </Step.Group>
  </div>
)

export default StepExampleLinks
