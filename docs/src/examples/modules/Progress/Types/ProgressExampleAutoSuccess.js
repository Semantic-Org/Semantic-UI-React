import React, { Component } from 'react'
import { Button, Progress } from 'semantic-ui-react'

export default class ProgressExampleAutoSuccess extends Component {
  state = { percent: 0 }

  toggle = () =>
    this.setState((prevState) => ({
      percent: prevState.percent === 0 ? 100 : 0,
    }))

  render() {
    return (
      <div>
        <Progress percent={this.state.percent} autoSuccess />
        <Button onClick={this.toggle}>Toggle Complete</Button>
      </div>
    )
  }
}
