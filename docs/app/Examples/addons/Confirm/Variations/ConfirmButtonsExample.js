import React, { Component } from 'react'
import { Button, Icon, Confirm } from 'stardust'

class ConfirmContentExample extends Component {
  state = { active: false }

  show = () => this.setState({ active: true })
  hide = () => this.setState({ active: false })

  render() {
    const { active, size } = this.state

    return (
      <div>
        <Button onClick={this.show}>Small</Button>

        <Confirm size={size} active={active} onHide={this.hide}>
          <Confirm.Header>
            Delete Your Account
          </Confirm.Header>
          <Confirm.Content>
            <p>Are you sure you want to delete your account</p>
          </Confirm.Content>
          <Confirm.Actions>
            <Button className='negative'>
              No
            </Button>
            <Button className='positive right labeled icon'>
              Yes <Icon name='checkmark' />
            </Button>
          </Confirm.Actions>
        </Confirm>
      </div>
    )
  }
}

export default ConfirmContentExample
