import React from 'react'
import {
   Menu,
   Dropdown,
   Container,
   Header,
   Image,
   Segment,
   Grid,
   List
} from 'semantic-ui-react'

const FixedMenuLayout = () =>
 <div>
    <Menu fixed inverted>
      <Container>
        <Menu.Item>
          <Image src='http://semantic-ui.com/images/logo.png' size='mini'/>
        </Menu.Item>
        <Menu.Item>
          <Menu.Header>Project Name</Menu.Header>
        </Menu.Item>
        <Menu.Item name='Home' />

        <Dropdown text='Dropdown' pointing className='link item'>
          <Dropdown.Menu>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Header Item</Dropdown.Header>
            <Dropdown.Item>
              <i className='dropdown icon'></i>
              <span className='text'>Submenu</span>
              <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>
    <Container text>
      <Header as='h1' content='Semantic UI React Fixed Template' />
      <p>This is a basic fixed menu template using fixed size containers.</p>
      <p>A text container is used for the main container, which is useful for single column layouts</p>
      <Image className='wireframe' src='http://semantic-ui.com/examples/assets/images/wireframe/media-paragraph.png' />
      <Image className='wireframe' src='http://semantic-ui.com/examples/assets/images/wireframe/paragraph.png' />
      <Image className='wireframe' src='http://semantic-ui.com/examples/assets/images/wireframe/paragraph.png' />
      <Image className='wireframe' src='http://semantic-ui.com/examples/assets/images/wireframe/paragraph.png' />
      <Image className='wireframe' src='http://semantic-ui.com/examples/assets/images/wireframe/paragraph.png' />
      <Image className='wireframe' src='http://semantic-ui.com/examples/assets/images/wireframe/paragraph.png' />
      <Image className='wireframe' src='http://semantic-ui.com/examples/assets/images/wireframe/paragraph.png' />
    </Container>

    <Segment inverted vertical>
      <Container textAlign='center'>
        <Grid stackable inverted divided>
          <Grid.Row columns={3}>
            <Grid.Column>
              <Header as='h4' content='Group 1' />
              <List link>
                <List.Item as='a'>Link One</List.Item>
                <List.Item as='a'>Link Two</List.Item>
                <List.Item as='a'>Link Three</List.Item>
                <List.Item as='a'>Link Four</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <Header as='h4' content='Group 2' />
              <List link>
              <List.Item as='a'>Link One</List.Item>
              <List.Item as='a'>Link Two</List.Item>
              <List.Item as='a'>Link Three</List.Item>
              <List.Item as='a'>Link Four</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <Header as='h4' content='Group 3' />
              <List link>
              <List.Item as='a'>Link One</List.Item>
              <List.Item as='a'>Link Two</List.Item>
              <List.Item as='a'>Link Three</List.Item>
              <List.Item as='a'>Link Four</List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </div>

export default FixedMenuLayout
