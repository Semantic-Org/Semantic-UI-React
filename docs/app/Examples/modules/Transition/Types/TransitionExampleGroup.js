import _ from 'lodash'
import React, { Component } from 'react'
import { Button, Image, List, Transition } from 'semantic-ui-react'

const users = [
  'ade', 'chris', 'christian', 'daniel', 'elliot', 'helen', 'jenny', 'joe', 'justen', 'laura', 'matt', 'nan', 'nom',
  'steve', 'stevie', 'tom', 'veronika', 'zoe',
]

export default class TransitionExampleGroup extends Component {
  state = { items: users.slice(0, 5) }

  handleAdd = () => {
    const { items } = this.state
    this.setState({ items: users.slice(0, items.length + 1) })
  }

  handleRemove = () => {
    const { items } = this.state
    this.setState({ items: items.slice(0, -1) })
  }

  render() {
    const { items } = this.state

    return (
      <div>
        <Transition.Group
          as={List}
          duration={1000}
          divided size='huge'
          verticalAlign='middle'
        >
          {items.map(item => (
            <List.Item key={item}>
              <Image avatar src={`/assets/images/avatar/small/${item}.jpg`} />
              <List.Content header={_.startCase(item)} />
            </List.Item>
          ))}
        </Transition.Group>

        <Button.Group>
          <Button icon='minus' onClick={this.handleRemove} />
          <Button icon='plus' onClick={this.handleAdd} />
        </Button.Group>
      </div>
    )
  }
}
