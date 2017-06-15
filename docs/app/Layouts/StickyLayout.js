import React from 'react'
import {
   Container,
   Header,
   Image,
   Segment,
   Grid,
   Divider,
   Menu,
   Icon,
   Dropdown,
   List,
} from 'semantic-ui-react'

const baseSrc = 'http://semantic-ui.com/examples/'
const imageComponent = (<Image size='medium' floated='right'
  src={ baseSrc + 'assets/images/wireframe/square-image.png'}
                        />)

let text = 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\
             Vestibulum tortor quam, feugiat vitae, ultricies eget, \
            tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. \
            Aenean ultricies mi vitae est. Mauris placerat eleifend leo. \
            Quisque sit amet est et sapien ullamcorper pharetra. \
            Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. \
            Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci,\
             sagittis tempus lacus enim ac dui. \
            Donec non enim in turpis pulvinar facilisis. Ut felis. \
            Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue,\
             eu vulputate magna eros eu erat. Aliquam erat volutpat. \
            Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus'

const StickyLayout = () =>
<div>
  <Container text>
    <Header as='h1'>Sticky Example</Header>
    <p>This example shows how to use lazy loaded images, a sticky menu, and a simple text container</p>
  </Container>

  <Menu fixed >
    <Container>
      <Menu.Item>
        <Image alt='' src='http://react.semantic-ui.com/logo.png' size='mini' />
      </Menu.Item>
      <Menu.Item header>
        Project Name
      </Menu.Item>
      <Menu.Item name='Blog' />
      <Menu.Item name='Articles' />

      <Menu.Menu position='right'>
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
      </Menu.Menu>
    </Container>
  </Menu>

  <Container text>
    <p>{text}</p>
    <p>{text}</p>
    <p>{text}</p>
      <div className='overlay'>
        <Menu icon='labeled' vertical>
         <Menu.Item name='twitter' >
           <Icon name='twitter' />
           Twitter
         </Menu.Item>

         <Menu.Item name='facebook'>
           <Icon name='facebook' />
           Facebook
         </Menu.Item>

         <Menu.Item name='Email'>
           <Icon name='mail' />
           Email
         </Menu.Item>
        </Menu>
      </div>
      <p>{text}</p>
      <p>{text}</p>
      <p>{text}</p>
        {imageComponent}
      <p>{text}</p>
        {imageComponent}
      <p>{text}</p>
      <p>{text}</p>
      <p>{text}</p>
      <p>{text}</p>
        {imageComponent}
      <p>{text}</p>
        {imageComponent}
      <p>{text}</p>
      <p>{text}</p>

  </Container>
  <Segment inverted vertical>
    <Container textAlign='center'>
      <Grid columns={4} divided stackable inverted>
        <Grid.Row>
          <Grid.Column>
            <Header inverted as='h4' content='Group 1' />
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
          <Grid.Column>
            <Header inverted as='h4' content='Footer Header' />
            <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
       <Divider inverted section />
       <Image alt='' src='http://react.semantic-ui.com/logo.png' centered size='mini' />
       <List horizontal inverted divided link>
         <List.Item as='a' href='#'>Site Map</List.Item>
         <List.Item as='a' href='#'>Contact Us</List.Item>
         <List.Item as='a' href='#'>Terms and Conditions</List.Item>
         <List.Item as='a' href='#'>Privacy Policy</List.Item>
       </List>
    </Container>
  </Segment>
</div>

export default StickyLayout
