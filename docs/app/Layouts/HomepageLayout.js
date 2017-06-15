import React from 'react'
import {
   Container,
   Header,
   Image,
   Segment,
   Grid,
   Menu,
   Icon,
   Button,
   List,
} from 'semantic-ui-react'

let src = 'http://semantic-ui.com/examples/assets/images/wireframe/white-image.png'
let src2 = 'http://semantic-ui.com/examples/assets/images/avatar/nan.jpg'

const HomepageLayout = () =>
<div>
    <Segment inverted vertical textAlign='center'>
      <Menu size='large' fixed='top'>
        <Menu.Item active>
          Home
        </Menu.Item>
        <Menu.Item >
          Work
        </Menu.Item>
        <Menu.Item >
          Company
        </Menu.Item>
        <Menu.Item >
          Careers
        </Menu.Item>
       <Menu.Menu position='right'>
         <Menu.Item>
           <Button> Login </Button>
         </Menu.Item>
         <Menu.Item>
           <Button primary> Sign Up </Button>
         </Menu.Item>
       </Menu.Menu>
      </Menu>
        <Container>
          <Segment inverted>
            <Menu size='large' inverted pointing secondary>
              <Menu.Item name='Home' active />
              <Menu.Item name='Work' />
              <Menu.Item name='Company' />
              <Menu.Item name='Careers' />
            </Menu>
          </Segment>
       </Container>

       <Container text>
          <Header as='h1' inverted>
            Imagine-a-Company
          </Header>
          <Header as='h2'>Do whatever you want when you want to.</Header>
          <Button size='huge' primary icon>
            Get Started
            <Icon name='right arrow' />
          </Button>
      </Container>
     </Segment>

     <Segment vertical className='stripe'>
       <Grid container verticalAlign='middle' stackable>
         <Grid.Row>
           <Grid.Column width={8}>
             <Header as='h3'>We Help Companies and Companions</Header>
             <p>We can give your company superpowers to do things that they \
               never thought possible. Let us delight your customers and empower \
               your needs...through pure data analytics.</p>
             <Header as='h3'>We Make Bananas That Can Dance</Header>
             <p>Yes that's right, you thought it was the stuff of dreams,\
                but even bananas can be bioengineered.</p>
           </Grid.Column>

           <Grid.Column width={6} floated='right'>
             <Image shape='rounded' bordered size='large' alt='' src={src} />
           </Grid.Column>

         <Grid.Row>
           <Grid.Column textAlign='center'>
             <Button size='huge'>Check Them Out</Button>
           </Grid.Column>
         </Grid.Row>

       </Grid.Row>
     </Grid>
   </Segment>

   <Segment vertical className='stripe quote'>
    <Grid stackable celled='internally' container >
      <Grid.Row textAlign='center' stretched>
        <Grid.Column width={5}>
          <Header as='h3'>'What a Company'</Header>
          <p>That is what they all say about us</p>
        </Grid.Column>
        <Grid.Column width={5}>
          <Header as='h3'>'I shouldn't have gone with their competitor.'</Header>
          <p>
            <Image avatar alt=''src={src2} /> <b>Nan</b> Chief Fun Officer Acme Toys
          </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>

    <Segment vertical className='stripe'>
      <Container text>
        <Header as='h3'>Breaking The Grid, Grabs Your Attention</Header>
        <p>Instead of focusing on content creation and hard work, we have learned how to master\
           the art of doing nothing by providing massive amounts of whitespace and generic content\
           that can seem massive, monolithic and worth your attention.</p>
        <Button size='large'>Read More</Button>
        <Header as='h4'dividing>
          <a href='#'>Case Studies</a>
        </Header>
        <Header as='h3'>Did We Tell You About Our Bananas?</Header>
        <p>Yes I know you probably disregarded the earlier boasts as non-sequitur filler content,\
          but its really true. It took years of gene splicing and combinatory DNA research,\
          but our bananas can really dance.</p>
        <Button size='large'>I'm Still Quite Interested</Button>
      </Container>
    </Segment>

    <Segment inverted vertical>
      <Container textAlign='center'>
        <Grid columns={3} divided stackable inverted>
          <Grid.Row>
            <Grid.Column>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>Sitemap</List.Item>
                <List.Item as='a'>Contact Us</List.Item>
                <List.Item as='a'>Religious Ceremonies</List.Item>
                <List.Item as='a'>Gazebo Plans</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
              <List.Item as='a'>Banana Pre-Order</List.Item>
              <List.Item as='a'>DNA FAQ</List.Item>
              <List.Item as='a'>How To Access</List.Item>
              <List.Item as='a'>Favorite X-Men</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <Header inverted as='h4' content='Footer Header' />
              <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
</div>

export default HomepageLayout
