import _ from 'lodash'
import React from 'react'
import { Container, Divider, Dropdown, Grid, Header, Icon, Image, List, Menu, Segment } from 'semantic-ui-react'

const LeftImage = () => (
  <Image
    floated='left'
    size='medium'
    src='/assets/images/wireframe/square-image.png'
    style={{ margin: '2em 2em 2em -4em' }}
  />
)

const RightImage = () => (
  <Image
    floated='right'
    size='medium'
    src='/assets/images/wireframe/square-image.png'
    style={{ margin: '2em -4em 2em 2em' }}
  />
)

const Paragraph = () => (
  <p>
    {[
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ',
      'tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas ',
      'semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ',
      'ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean ',
      'fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. ',
      'Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor ',
      'neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, ',
      'accumsan porttitor, facilisis luctus, metus',
    ].join('')}
  </p>
)

const StickyLayout = () => (
  <div>
    <Container text style={{ marginTop: '2em' }}>
      <Header as='h1'>Sticky Example</Header>
      <p>This example shows how to use lazy loaded images, a sticky menu, and a simple text container</p>
    </Container>

    <Menu style={{
      background: '#f7f7f7',
      border: 'none',
      borderRadius: 0,
      boxShadow: 'none',
      marginTop: '4em',
      transition: 'box-shadow 0.5s ease, padding 0.5s ease',
    }}
    >
      <Container text>
        <Menu.Item>
          <Image size='mini' src='/logo.png' />
        </Menu.Item>
        <Menu.Item header>Project Name</Menu.Item>
        <Menu.Item as='a'>Blog</Menu.Item>
        <Menu.Item as='a'>Articles</Menu.Item>

        <Menu.Menu position='right'>
          <Dropdown text='Dropdown' pointing className='link item'>
            <Dropdown.Menu>
              <Dropdown.Item>List Item</Dropdown.Item>
              <Dropdown.Item>List Item</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Header>Header Item</Dropdown.Header>
              <Dropdown.Item>
                <i className='dropdown icon' />
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
      { _.times(3, i => <Paragraph key={i} />) }

      <div style={{ float: 'left', margin: '0em 3em 1em 0em' }}>
        <Menu icon='labeled' vertical>
          <Menu.Item>
            <Icon name='twitter' />
            Twitter
          </Menu.Item>

          <Menu.Item >
            <Icon name='facebook' />
            Facebook
          </Menu.Item>

          <Menu.Item>
            <Icon name='mail' />
            Email
          </Menu.Item>
        </Menu>
      </div>

      { _.times(3, i => <Paragraph key={i} />) }
      <LeftImage />

      <Paragraph />
      <RightImage />

      { _.times(4, i => <Paragraph key={i} />) }
      <LeftImage />

      <Paragraph />
      <RightImage />

      { _.times(2, i => <Paragraph key={i} />) }
    </Container>

    <Segment
      inverted
      style={{ margin: '5em 0em 0em', padding: '5em 0em' }}
      vertical
    >
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
              <List link inverted>
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
        <Image src='/logo.png' centered size='mini' />
        <List horizontal inverted divided link>
          <List.Item as='a' href='#'>Site Map</List.Item>
          <List.Item as='a' href='#'>Contact Us</List.Item>
          <List.Item as='a' href='#'>Terms and Conditions</List.Item>
          <List.Item as='a' href='#'>Privacy Policy</List.Item>
        </List>
      </Container>
    </Segment>
  </div>
)

export default StickyLayout
