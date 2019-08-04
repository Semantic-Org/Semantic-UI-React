import React, { Component } from 'react'
import { Button, Progress } from 'semantic-ui-react'

export default class ProgressExampleIndicating extends Component {
  state = { percent: 33 }

  increment = () =>
    this.setState((prevState) => ({
      percent: prevState.percent >= 100 ? 0 : prevState.percent + 20,
    }))

  render() {
    return (
      <div>
        <Progress percent={this.state.percent} indicating />
        <Button onClick={this.increment}>Increment</Button>
      </div>
    )
  }
}
