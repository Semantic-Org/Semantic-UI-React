import React, { Component } from 'react'
import { StepGroup, Step } from 'semantic-ui-react'

export default class StepExampleLinkClickable extends Component {
  state = {}

  handleClick = (e, { title }) => this.setState({ active: title })

  render() {
    const { active } = this.state

    return (
      <StepGroup>
        <Step
          active={active === 'Shipping'}
          icon='truck'
          link
          onClick={this.handleClick}
          title='Shipping'
          description='Choose your shipping options'
        />
        <Step
          active={active === 'Billing'}
          icon='credit card'
          link
          onClick={this.handleClick}
          title='Billing'
          description='Enter billing information'
        />
      </StepGroup>
    )
  }
}
