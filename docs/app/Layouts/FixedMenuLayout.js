import React from 'react'
import {
   Menu,
   Dropdown,
   Container,
   Header,
   Image,
   Segment,
   Grid,
   List,
   Divider
} from 'semantic-ui-react'

const FixedMenuLayout = () =>
 <div>
    <Menu fixed inverted>
      <Container>
        <Menu.Item>
          <Image src='http://react.semantic-ui.com/logo.png' size='mini'/>
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
        <Grid columns={3} stackable inverted divided>
          <Grid.Row >
            <Grid.Column>
              <Header inverted  as='h4' content='Group 1' />
              <List link inverted>
                <List.Item as='a'>Link One</List.Item>
                <List.Item as='a'>Link Two</List.Item>
                <List.Item as='a'>Link Three</List.Item>
                <List.Item as='a'>Link Four</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <Header inverted as='h4' content='Group 2' />
              <List link inverted>
              <List.Item as='a'>Link One</List.Item>
              <List.Item as='a'>Link Two</List.Item>
              <List.Item as='a'>Link Three</List.Item>
              <List.Item as='a'>Link Four</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <Header inverted as='h4' content='Group 3' />
              <List link inverted >
              <List.Item as='a'>Link One</List.Item>
              <List.Item as='a'>Link Two</List.Item>
              <List.Item as='a'>Link Three</List.Item>
              <List.Item as='a'>Link Four</List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={7}>
            <Grid.Column>
              <Header inverted as='h4' content='Footer Header' />
              <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
         <Divider inverted section />
         <Image src="http://react.semantic-ui.com/logo.png" centered  size='mini' />
         <List horizontal inverted divided link>
           <List.Item as='a' href="#">Site Map</List.Item>
           <List.Item as='a' href="#">Contact Us</List.Item>
           <List.Item as='a' href="#">Terms and Conditions</List.Item>
           <List.Item as='a' href="#">Privacy Policy</List.Item>
         </List>
      </Container>
    </Segment>
  </div>

export default FixedMenuLayout
