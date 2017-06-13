import React from 'react'
import {
   Container,
   Header,
   Image,
   Segment,
   Grid,
   Divider,
   Table,
   Menu,
   Message,
   Icon,
   Button,
   Dropdown,
   Input,
} from 'semantic-ui-react'

let Options = [{ key: 'Male', value: 'Male', text: 'Male'}, { key: 'Female', value: 'Female', text: 'Female'}]

const BootstrapMigrationLayout = () =>
    <Grid container>
      <Grid.Row>
        <Grid.Column>
          <Header as="h1">Bootstrap Migration</Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Message>
            <Header as='h1'>Hello, world!</Header>
            <p>This is a template for a simple marketing or informational website.
              It includes a large callout called a jumbotron and three supporting pieces of content.
              Use it as a starting point to create something more unique.</p>
            <Button color='blue'>Learn more &raquo;</Button>
          </Message>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Header as="h1">Buttons</Header>
          <Button as='a' tabindex="0">
            Default
          </Button>
          <Button as='a' primary tabindex="0">
            Primary
          </Button>
          <Button as='a' basic tabindex="0">
            Basic
          </Button>
          <Button as='a' positive tabindex="0">
            Success
          </Button>
          <Button as='a' negative tabindex="0">
            Error
          </Button>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Header as="h1">Thumbnails</Header>
          <Divider />
          <Image size='small' alt='' src="http://semantic-ui.com/examples/assets/images/wireframe/image.png" />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <Header as="h1">Dropdown</Header>
          <Divider />
          <Dropdown placeholder='Select' selection options={Options} />
          <Menu vertical>
            <Menu.Item active>
              Friends
            </Menu.Item>
            <Menu.Item >
              Messages
            </Menu.Item>
            <Dropdown text='More' pointing='left' className='link item'>
              <Dropdown.Menu>
                <Dropdown.Item>Edit Profile</Dropdown.Item>
                <Dropdown.Item>Choose Language</Dropdown.Item>
                <Dropdown.Item>Account Settings</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu>
        </Grid.Column>

    </Grid.Row>
  </Grid>

export default BootstrapMigrationLayout
