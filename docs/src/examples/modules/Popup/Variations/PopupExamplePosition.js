import React from 'react'
import { GridRow, GridColumn, Icon, Popup, Grid } from 'semantic-ui-react'

const PopupExamplePosition = () => (
  <Grid columns={3} style={{ width: '600px' }}>
    <GridRow>
      <GridColumn>
        <Popup
          trigger={<Icon name='heart' color='red' size='large' circular />}
          content='I am positioned to the top left'
          position='top left'
        />
      </GridColumn>
      <GridColumn textAlign='center'>
        <Popup
          trigger={<Icon name='heart' color='red' size='large' circular />}
          content='I am positioned to the top center'
          position='top center'
        />
      </GridColumn>
      <GridColumn textAlign='right'>
        <Popup
          trigger={<Icon name='heart' color='red' size='large' circular />}
          content='I am positioned to the top right'
          position='top right'
        />
      </GridColumn>
    </GridRow>
    <GridRow>
      <GridColumn floated='left'>
        <Popup
          trigger={<Icon name='heart' color='red' size='large' circular />}
          content='I am positioned to the left center'
          position='left center'
        />
      </GridColumn>
      <GridColumn floated='right' textAlign='right'>
        <Popup
          trigger={<Icon name='heart' color='red' size='large' circular />}
          content='I am positioned to the right center'
          position='right center'
        />
      </GridColumn>
    </GridRow>
    <GridRow>
      <GridColumn>
        <Popup
          trigger={<Icon name='heart' color='red' size='large' circular />}
          content='I am positioned to the bottom left'
          position='bottom left'
        />
      </GridColumn>
      <GridColumn textAlign='center'>
        <Popup
          trigger={<Icon name='heart' color='red' size='large' circular />}
          content='I am positioned to the bottom center'
          position='bottom center'
        />
      </GridColumn>
      <GridColumn textAlign='right'>
        <Popup
          trigger={<Icon name='heart' color='red' size='large' circular />}
          content='I am positioned to the bottom right'
          position='bottom right'
        />
      </GridColumn>
    </GridRow>
  </Grid>
)

export default PopupExamplePosition
