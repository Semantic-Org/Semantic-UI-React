import React, { Component } from 'react'
import { Input, Button } from 'semantic-ui-react'

class InputExampleRefFocus extends Component {
  handleRef = (c) => {
    this.inputRef = c
  }

  focus = () => {
    this.inputRef.focus()
  }

  render() {
    return (
      <div>
        <Button content='focus' onClick={this.focus} />
        <Input ref={this.handleRef} placeholder='Search...' />
      </div>
    )
  }
}

export default InputExampleRefFocus
