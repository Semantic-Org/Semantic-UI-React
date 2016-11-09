import React, { Component } from 'react'
import { Button, Select, Grid, Image, Transition } from 'semantic-ui-react'

const options = Transition._meta.props.animation.map(name => ({ text: name, value: name }))

class TransitionExampleScale extends Component {
  state = { show: true, animation: options[0].value, duration: 300 }

  setAnimation = (animation) => this.setState({ animation })

  setDuration = (e) => {
    this.setState({ duration: Number(e.target.value) })
    this.replay()
  }

  replay = () => {
    this.setState({ show: false })
    setTimeout(() => this.setState({ show: true }), 1)
  }

  render() {
    const { show, animation, duration } = this.state

    return (
      <Grid columns='equal'>
        <Grid.Column>
          <div>
            Duration {(duration * 0.001).toFixed(1)}s
            <br />
            100ms <input type='range' min='100' max='2000' step='100' value={duration} onChange={this.setDuration} /> 2s
          </div>
          <Select options={options} value={animation} onChange={(e, { value }) => this.setAnimation(value)} />
          <Button icon='refresh' content='Replay' onClick={this.replay} />
        </Grid.Column>
        <Grid.Column textAlign='center'>
          {show ? (
            <Transition
              active
              visible
              animation={animation}
              duration={duration}
              as={Image}
              centered
              size='small'
              src='http://semantic-ui.com/images/leaves/1.png'
            />
          ) : (
            <Image centered size='small' src='http://semantic-ui.com/images/leaves/1.png' />
          )}
        </Grid.Column>
      </Grid>
    )
  }
}

export default TransitionExampleScale
