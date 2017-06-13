import React from 'react'
import {
    Header,
    Segment,
    Container,
    Grid,
    Table,
    Image,
    Menu,
    Button,
    Label,
    Item,
    Icon,
    Step,
} from 'semantic-ui-react'

import style from './LayoutStyle'

const description = 'A description which may flow for several lines and give context to the content'

const ResponsiveLayout = () => (
  <div>
    <Header as='h1' textAlign='center' content='Responsive UI Examples' style={style.responsiveh1} />
    <Header as='h2' textAlign='center' content='Basic Responsive' style={style.responsiveh2} />


    <Header as='h3' style={style.responsiveh3} textAlign='center' content='Container' style={style.responsiveh3} style={style.responsiveh3} />
    <Container>
      <Segment.Group>
        <Segment>Content</Segment>
        <Segment>Content</Segment>
        <Segment>Content</Segment>
        <Segment>Content</Segment>
      </Segment.Group>
    </Container>
    <Header textAlign='center' content='Text Container' />
    <Container text>
      <Segment.Group>
        <Segment>Content</Segment>
        <Segment>Content</Segment>
        <Segment>Content</Segment>
        <Segment>Content</Segment>
      </Segment.Group>
    </Container>

    <Header textAlign='center' content='Stackable Grid' />
    <Grid columns={2} stackable>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Row columns={3}>
        <Grid.Column>
          <Segment>Content</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>Content</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>Content</Segment>
        </Grid.Column>
      </Grid.Row>
      <Grid.Column width={10}>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column width={6}>
        <Segment>Content</Segment>
      </Grid.Column>
    </Grid>

    <Header as='h3' style={style.responsiveh3} textAlign='center' content='Doubling Grid' />
    <Grid columns={3} doubling>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
    </Grid>

    <Header as='h3' style={style.responsiveh3} textAlign='center' content='Doubling Stackable Grid' />
    <Grid columns={3} doubling stackable>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
    </Grid>

    <Header as='h3' style={style.responsiveh3} textAlign='center' content='Nested Stackable Grid' />
    <Grid columns={2}>
      <Grid.Column>
        <Grid stackable doubling columns={2}>
          <Grid.Column>
            <Segment>Content</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>Content</Segment>
          </Grid.Column>
        </Grid>
      </Grid.Column>
      <Grid.Column>
        <Grid stackable doubling columns={3}>
          <Grid.Column>
            <Segment>Content</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>Content</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>Content</Segment>
          </Grid.Column>
        </Grid>
      </Grid.Column>
    </Grid>

    <Header as='h3' style={style.responsiveh3} textAlign='center' content='Stackable Grid Container' />
    <Grid columns={2} stackable container>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
    </Grid>

    <Header as='h3' style={style.responsiveh3} textAlign='center' content='Doubling Grid Container' />
    <Grid columns={3} doubling container>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
    </Grid>

    <Header as='h3' style={style.responsiveh3} textAlign='center' content='Doubling Stackable Grid Container' />
    <Grid columns={3} doubling stackable container>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
    </Grid>

    <Header as='h2' textAlign='center' content='Device Adjustment' />

    <Header as='h3' style={style.responsiveh3} textAlign='center' content='Device Column Width' />
    <Grid>
      <Grid.Column computer={3} tablet={9} mobile={6}>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column columns={4} >
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column computer={9} tablet={3} mobile={6}>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column computer={9} tablet={3} mobile={6}>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column columns={4} >
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column computer={3} tablet={9} mobile={6}>
        <Segment>Content</Segment>
      </Grid.Column>
    </Grid>

    <Header as='h3' style={style.responsiveh3} textAlign='center' content='Device Visibility' />
    <Grid columns={4}>
      <Grid.Column only='widescreen' widescreen={10}>
        <Segment>Widescreen</Segment>
      </Grid.Column>
      <Grid.Column only='widescreen' widescreen={6}>
        <Segment>Widescreen</Segment>
      </Grid.Column>
      <Grid.Column only='large screen' largeScreen={6} >
        <Segment>Large Screen</Segment>
      </Grid.Column>
      <Grid.Column only='large screen' largeScreen={10} >
        <Segment>Large Screen</Segment>
      </Grid.Column>
      <Grid.Column only='mobile' mobile={8} only='tablet' tablet={8}>
        <Segment>Tablet and Mobile</Segment>
      </Grid.Column>
      <Grid.Column only='mobile' mobile={8} only='tablet' tablet={8}>
        <Segment>Tablet and Mobile</Segment>
      </Grid.Column>
      <Grid.Column only='mobile' mobile={16}>
        <Segment>Mobile</Segment>
      </Grid.Column>
      <Grid.Row only='computer' columns={2}>
        <Grid.Column>
          <Segment>Computer and Up</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>Computer and Up</Segment>
        </Grid.Column>
      </Grid.Row>
      <Grid.Column only='tablet' >
        <Segment>Tablet Only Content</Segment>
      </Grid.Column>
      <Grid.Column only='tablet' >
        <Segment>Tablet Only Content</Segment>
      </Grid.Column>
      <Grid.Column only='tablet' >
        <Segment>Tablet Only Content</Segment>
      </Grid.Column>
      <Grid.Column only='tablet' >
        <Segment>Tablet Only Content</Segment>
      </Grid.Column>
    </Grid>

    <Header as='h2' textAlign='center' content='Responsive Grid with Variations' style={style.responsiveh2} />

    <Header as='h3' style={style.responsiveh3} textAlign='center' content='Stackable Divided Grid' />
    <Grid container stackable divided columns={2}>
      <Grid.Row>
        <Grid.Column>
          <Segment>Content</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>Content</Segment>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Segment>Content</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>Content</Segment>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Segment>Content</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>Content</Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Header as='h3' style={style.responsiveh3} textAlign='center' content='Stackable Vertically Divided Grid' />
    <Grid container stackable divided columns={2}>
      <Grid.Row>
        <Grid.Column>
          <Segment>Content</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>Content</Segment>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Segment>Content</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>Content</Segment>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Segment>Content</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>Content</Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Header as='h3' style={style.responsiveh3} textAlign='center' content='Celled Stackable Grid' />
    <Grid stackable celled container>
      <Grid.Row columns={2}>
        <Grid.Column>
          <Segment>Content</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>Content</Segment>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={3}>
        <Grid.Column>
          <Segment>Content</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>Content</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>Content</Segment>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={2}>
        <Grid.Column>
          <Segment>Content</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>Content</Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>


    <Header as='h3' style={style.responsiveh3} textAlign='center' content='Consecutive Doubling Stackable Grid' />
    <Grid doubling stackable columns={3} container>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
    </Grid>
    <Grid doubling stackable columns={3} container>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
    </Grid>


    <Header as='h3' style={style.responsiveh3} textAlign='center' content='Grid Container' />
    <Grid columns={3} container>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
    </Grid>

    <Header as='h1' textAlign='center' content='Responsive Elements' />


    <Header as='h3' style={style.responsiveh3} textAlign='center' content='Responsive Vertical Divider' />

      <Grid stackable divided columns={2} container relaxed>
        <Grid.Column>
          <Segment>Content</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>Content</Segment>
        </Grid.Column>
      </Grid>


      <Header as='h3' style={style.responsiveh3} textAlign='center' content='Responsive Table' />

    <Container>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Employee</Table.HeaderCell>
            <Table.HeaderCell>Correct Guesses</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <Header as='h4' image>
                <Image src='http://semantic-ui.com/images/avatar2/small/lena.png' shape='rounded' size='mini' />
                <Header.Content>
                  Lena
                  <Header.Subheader>Human Resources</Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>
              22
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as='h4' image>
                <Image src='http://semantic-ui.com/images/avatar2/small/matthew.png' shape='rounded' size='mini' />
                <Header.Content>
                  Matthew
                  <Header.Subheader>Fabric Design</Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>
              15
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as='h4' image>
                <Image src='http://semantic-ui.com/images/avatar2/small/lindsay.png' shape='rounded' size='mini' />
                <Header.Content>
                  Lindsay
                  <Header.Subheader>Entertainment</Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>
              12
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as='h4' image>
                <Image src='http://semantic-ui.com/images/avatar2/small/mark.png' shape='rounded' size='mini' />
                <Header.Content>
                  Mark
                  <Header.Subheader>Executive</Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>
              11
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Container>

    <Header as='h3' style={style.responsiveh3} textAlign='center' content='Responsive Menu' />

    <Container>
      <Menu stackable>
        <Menu.Item>
          <img src='http://react.semantic-ui.com/logo.png' />
        </Menu.Item>
        <Menu.Item >
          Features
        </Menu.Item>
        <Menu.Item>
          Testimonials
        </Menu.Item>
        <Menu.Item>
          Sign-in
        </Menu.Item>
      </Menu>
    </Container>

    <Header as='h3' style={style.responsiveh3} textAlign='center' content='Responsive Item' />

    <Container>
      <Item.Group divided>
        <Item>
          <Item.Image src='http://semantic-ui.com/images/wireframe/image.png' />

          <Item.Content>
            <Item.Header as='a'>Content Header</Item.Header>
            <Item.Meta>
              <span>Date</span>
            </Item.Meta>
            <Item.Description>{ description }</Item.Description>
            <Item.Extra>
              <Label>Username</Label>
            </Item.Extra>
          </Item.Content>
        </Item>

        <Item>
          <Item.Image src='http://semantic-ui.com/images/wireframe/image.png' />

          <Item.Content>
            <Item.Header as='a'>Content Header</Item.Header>
            <Item.Meta>
              <span>Date</span>
              <span>Category</span>
            </Item.Meta>
            <Item.Description>{ description }</Item.Description>
            <Item.Extra>
              <Button primary floated='right'>
                  Primary
                <Icon name='right chevron' />
              </Button>
              <Label>Limited</Label>
            </Item.Extra>
          </Item.Content>
        </Item>
        <Item>
          <Item.Image src='http://semantic-ui.com/images/wireframe/image.png' />

          <Item.Content>
            <Item.Header as='a'>Content Header</Item.Header>
            <Item.Meta>
              <span>Date</span>
              <span>Category</span>
            </Item.Meta>
            <Item.Description>{ description }</Item.Description>
            <Item.Extra>
              <Button primary floated='right'>
                Primary
                <Icon name='right chevron' />
              </Button>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    </Container>


    <Header as='h3' style={style.responsiveh3} textAlign='center' content='Responsive Steps' />

    <Container style={style.last}>
      <Step.Group fluid>
        <Step icon='plane' title='Shipping' description='Choose your shipping options' />
        <Step active icon='dollar' title='Billing' description='Enter billing information' />
        <Step disabled icon='info circle' title='Confirm Order' description='Verify order details' />
      </Step.Group>
    </Container>

  </div>
)

export default ResponsiveLayout
