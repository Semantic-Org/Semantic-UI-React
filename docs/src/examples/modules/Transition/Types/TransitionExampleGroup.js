import _ from 'lodash'
import React, { Component } from 'react'
import {
  TransitionGroup,
  ListItem,
  ListContent,
  ButtonGroup,
  Button,
  Image,
  List,
} from 'semantic-ui-react'

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
        <ButtonGroup>
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
        </ButtonGroup>

        <TransitionGroup
          as={List}
          duration={200}
          divided
          size='huge'
          verticalAlign='middle'
        >
          {items.map((item) => (
            <ListItem key={item}>
              <Image avatar src={`/images/avatar/small/${item}.jpg`} />
              <ListContent header={_.startCase(item)} />
            </ListItem>
          ))}
        </TransitionGroup>
      </div>
    )
  }
}
