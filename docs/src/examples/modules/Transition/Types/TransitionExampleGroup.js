import _ from 'lodash'
import React, { Component } from 'react'
import { Button, Image, List, Transition } from 'semantic-ui-react'

const users = ['ade', 'chris', 'christian', 'daniel', 'elliot', 'helen']

export default class TransitionExampleGroup extends Component {
  state = { items: users.slice(0, 3) }

  handleAdd = () =>
    this.setState((prevState) => ({
      items: users.slice(0, prevState.items.length + 1),
    }))

  handleRemove = () =>
    this.setState((prevState) => ({ items: prevState.items.slice(0, -1) }))

  render() {
    const { items } = this.state

    return (
      <div>
        <Button.Group>
          <Button
            disabled={items.length === 0}
            icon='minus'
            onClick={this.handleRemove}
          />
          <Button
            disabled={items.length === users.length}
            icon='plus'
            onClick={this.handleAdd}
          />
        </Button.Group>

        <Transition.Group
          as={List}
          duration={200}
          divided
          size='huge'
          verticalAlign='middle'
        >
          {items.map((item) => (
            <List.Item key={item}>
              <Image avatar src={`/images/avatar/small/${item}.jpg`} />
              <List.Content header={_.startCase(item)} />
            </List.Item>
          ))}
        </Transition.Group>
      </div>
    )
  }
}
