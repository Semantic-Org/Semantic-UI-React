import React from 'react'
import { Icon, Popup, Grid } from 'semantic-ui-react'

const PopupExamplePosition = () => (
  <Grid columns={3} style={{ width: '600px' }}>
    <Grid.Row>
      <Grid.Column>
        <Popup
          trigger={<Icon name='heart' color='red' size='large' circular />}
          content='I am positioned to the top left'
          position='top left'
        />
      </Grid.Column>
      <Grid.Column textAlign='center'>
        <Popup
          trigger={<Icon name='heart' color='red' size='large' circular />}
          content='I am positioned to the top center'
          position='top center'
        />
      </Grid.Column>
      <Grid.Column textAlign='right'>
        <Popup
          trigger={<Icon name='heart' color='red' size='large' circular />}
          content='I am positioned to the top right'
          position='top right'
        />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column floated='left'>
        <Popup
          trigger={<Icon name='heart' color='red' size='large' circular />}
          content='I am positioned to the left center'
          position='left center'
        />
      </Grid.Column>
      <Grid.Column floated='right' textAlign='right'>
        <Popup
          trigger={<Icon name='heart' color='red' size='large' circular />}
          content='I am positioned to the right center'
          position='right center'
        />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>
        <Popup
          trigger={<Icon name='heart' color='red' size='large' circular />}
          content='I am positioned to the bottom left'
          position='bottom left'
        />
      </Grid.Column>
      <Grid.Column textAlign='center'>
        <Popup
          trigger={<Icon name='heart' color='red' size='large' circular />}
          content='I am positioned to the bottom center'
          position='bottom center'
        />
      </Grid.Column>
      <Grid.Column textAlign='right'>
        <Popup
          trigger={<Icon name='heart' color='red' size='large' circular />}
          content='I am positioned to the bottom right'
          position='bottom right'
        />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default PopupExamplePosition
