import React from 'react'
import { Icon, Popup, Grid } from 'semantic-ui-react'

const PopupPositionExample = () => (
  <Grid columns={3} style={{ width: '600px' }}>
    <Grid.Row>
      <Grid.Column>
        <Popup
          trigger={<Icon name='heart' color='red' size='large' circular />}
          content='I am positioned to the top left'
          positioning='top left'
        />
      </Grid.Column>
      <Grid.Column textAlign='center'>
        <Popup
          trigger={<Icon name='heart' color='red' size='large' circular />}
          content='I am positioned to the top center'
          positioning='top center'
        />
      </Grid.Column>
      <Grid.Column textAlign='right'>
        <Popup
          trigger={<Icon name='heart' color='red' size='large' circular />}
          content='I am positioned to the top right'
          positioning='top right'
        />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column floated='left'>
        <Popup
          trigger={<Icon name='heart' color='red' size='large' circular />}
          content='I am positioned to the left center'
          positioning='left center'
        />
      </Grid.Column>
      <Grid.Column floated='right' textAlign='right'>
        <Popup
          trigger={<Icon name='heart' color='red' size='large' circular />}
          content='I am positioned to the right center'
          positioning='right center'
        />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>
        <Popup
          trigger={<Icon name='heart' color='red' size='large' circular />}
          content='I am positioned to the bottom left'
          positioning='bottom left'
        />
      </Grid.Column>
      <Grid.Column textAlign='center'>
        <Popup
          trigger={<Icon name='heart' color='red' size='large' circular />}
          content='I am positioned to the bottom center'
          positioning='bottom center'
        />
      </Grid.Column>
      <Grid.Column textAlign='right'>
        <Popup
          trigger={<Icon name='heart' color='red' size='large' circular />}
          content='I am positioned to the bottom right'
          positioning='bottom right'
        />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default PopupPositionExample
