import React from 'react'
import { Icon, Popup, Grid } from 'semantic-ui-react'

const PopupExampleOffset = () => (
  <Grid columns={3} style={{ width: '600px' }}>
    <Grid.Row>
      <Grid.Column>
        <Popup
          trigger={<Icon name='heart' size='large' circular />}
          content='I am positioned to the top left but, I am now way off to top and left if I fit in viewport'
          horizontalOffset={100}
          verticalOffset={100}
          position='top left'
        />
      </Grid.Column>
      <Grid.Column textAlign='center'>
        <Popup
          trigger={<Icon name='heart' size='large' circular />}
          content='I am positioned to the top center but, I am now way off to the top if I fit in viewport'
          verticalOffset={100}
          position='top center'
        />
      </Grid.Column>
      <Grid.Column textAlign='right'>
        <Popup
          trigger={<Icon name='heart' size='large' circular />}
          content='I am positioned to the top right but, I am now way off to top and right if I fit in viewport'
          horizontalOffset={100}
          verticalOffset={100}
          position='top right'
        />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column floated='left'>
        <Popup
          trigger={<Icon name='heart' size='large' circular />}
          content='I am positioned to the left center but, I am now way off to the left if I fit in viewport'
          horizontalOffset={400}
          position='left center'
        />
      </Grid.Column>
      <Grid.Column floated='right' textAlign='right'>
        <Popup
          trigger={<Icon name='heart' size='large' circular />}
          content='I am positioned to the right center but, I am now way off to right if I fit in viewport'
          horizontalOffset={400}
          position='right center'
        />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>
        <Popup
          trigger={<Icon name='heart' size='large' circular />}
          content='I am positioned to the bottom left but, I am now way off to bottom and left if I fit in viewport'
          horizontalOffset={100}
          verticalOffset={100}
          position='bottom left'
        />
      </Grid.Column>
      <Grid.Column textAlign='center'>
        <Popup
          trigger={<Icon name='heart' size='large' circular />}
          content='I am positioned to the bottom center but, I am now way off to the bottom if I fit in viewport'
          verticalOffset={100}
          position='bottom center'
        />
      </Grid.Column>
      <Grid.Column textAlign='right'>
        <Popup
          trigger={<Icon name='heart' size='large' circular />}
          content='I am positioned to the bottom right but, I am now way off to bottom and right if I fit in viewport'
          horizontalOffset={100}
          verticalOffset={100}
          position='bottom right'
        />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default PopupExampleOffset
