import React, { Component } from 'react'
import { Card, Icon, Image, Shape } from 'semantic-ui-react'

import ShapeControl from '../ShapeControl'

const SteveCard = (
  <Card>
    <Image src='/assets//images/avatar/large/steve.jpg' />

    <Card.Content>
      <Card.Header as='a'>Steve Jobes</Card.Header>
      <Card.Meta><a>Acquaintances</a></Card.Meta>
      <Card.Description>
        Steve Jobes is a fictional character designed to resemble someone familiar to readers.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <span className='right floated'>Joined in 2014</span>
      <span>
        <Icon name='user' />
        151 Friends
      </span>
    </Card.Content>
  </Card>
)

const StevieCard = (
  <Card>
    <Image src='/assets//images/avatar/large/stevie.jpg' />

    <Card.Content>
      <Card.Header as='a'>Stevie Feliciano</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2014</span>
      </Card.Meta>
      <Card.Description>
        Stevie Feliciano is a library scientist living in New York City. She likes to spend her time reading, running,
        and writing.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <span>
        <Icon name='user' />
        22 Friends
      </span>
    </Card.Content>
  </Card>
)

export default class ShapeExampleShape extends Component {
  handleControl = animation => {

  }

  render() {
    const items = [
      { key: 'steve', content: SteveCard },
      { key: 'stevie', content: StevieCard },
    ]

    return (
      <div>
        <Shape items={items} />
        <ShapeControl onClick={this.handleControl} />
      </div>
    )
  }
}
