import React from 'react'
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  Item,
  Label,
  Menu,
  Segment,
  Step,
  Table,
} from 'semantic-ui-react'

const style = {
  h1: {
    marginTop: '3em',
  },
  h2: {
    margin: '4em 0em 2em',
  },
  h3: {
    marginTop: '2em',
    padding: '2em 0em',
  },
  last: {
    marginBottom: '300px',
  },
}

const ResponsiveLayout = () => (
  <div>
    <Header as='h1' content='Responsive UI Examples' style={style.h1} textAlign='center' />
    <Header as='h2' content='Basic Responsive' style={style.h2} textAlign='center' />

    <Header as='h3' textAlign='center' style={style.h3} content='Container' />
    <Container>
      <Segment.Group>
        <Segment>Content</Segment>
        <Segment>Content</Segment>
        <Segment>Content</Segment>
        <Segment>Content</Segment>
      </Segment.Group>
    </Container>

    <Header as='h3' content='Text Container' style={style.h3} textAlign='center' />
    <Container text>
      <Segment.Group>
        <Segment>Content</Segment>
        <Segment>Content</Segment>
        <Segment>Content</Segment>
        <Segment>Content</Segment>
      </Segment.Group>
    </Container>

    <Header as='h3' content='Stackable Grid' textAlign='center' style={style.h3} />
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

    <Header as='h3' content='Doubling Grid' style={style.h3} textAlign='center' />
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

    <Header as='h3' content='Doubling Stackable Grid' style={style.h3} textAlign='center' />
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

    <Header as='h3' content='Nested Stackable Grid' style={style.h3} textAlign='center' />
    <Grid columns={2}>
      <Grid.Column>
        <Grid columns={2} doubling stackable>
          <Grid.Column>
            <Segment>Content</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>Content</Segment>
          </Grid.Column>
        </Grid>
      </Grid.Column>
      <Grid.Column>
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
        </Grid>
      </Grid.Column>
    </Grid>

    <Header as='h3' content='Stackable Grid Container' style={style.h3} textAlign='center' />
    <Grid container columns={2} stackable>
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

    <Header as='h3' content='Doubling Grid Container' style={style.h3} textAlign='center' />
    <Grid container columns={3} doubling>
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

    <Header
      as='h3'
      content='Doubling Stackable Grid Container'
      style={style.h3}
      textAlign='center'
    />
    <Grid container columns={3} doubling stackable>
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

    <Header as='h2' content='Device Adjustment' style={style.h2} textAlign='center' />

    <Header as='h3' content='Device Column Width' style={style.h3} textAlign='center' />
    <Grid>
      <Grid.Column computer={3} mobile={6} tablet={9}>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column width={4}>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column computer={9} mobile={6} tablet={3}>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column computer={9} mobile={6} tablet={3}>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column width={4}>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column computer={3} mobile={6} tablet={9}>
        <Segment>Content</Segment>
      </Grid.Column>
    </Grid>

    <Header as='h3' content='Device Visibility' style={style.h3} textAlign='center' />
    <Grid columns={4}>
      <Grid.Column only='widescreen' widescreen={10}>
        <Segment>Widescreen</Segment>
      </Grid.Column>
      <Grid.Column only='widescreen' widescreen={6}>
        <Segment>Widescreen</Segment>
      </Grid.Column>
      <Grid.Column only='large screen' largeScreen={6}>
        <Segment>Large Screen</Segment>
      </Grid.Column>
      <Grid.Column only='large screen' largeScreen={10}>
        <Segment>Large Screen</Segment>
      </Grid.Column>
      <Grid.Column only='mobile tablet' mobile={8} tablet={8}>
        <Segment>Tablet and Mobile</Segment>
      </Grid.Column>
      <Grid.Column only='mobile tablet' mobile={8} tablet={8}>
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
      <Grid.Column only='tablet'>
        <Segment>Tablet Only Content</Segment>
      </Grid.Column>
      <Grid.Column only='tablet'>
        <Segment>Tablet Only Content</Segment>
      </Grid.Column>
      <Grid.Column only='tablet'>
        <Segment>Tablet Only Content</Segment>
      </Grid.Column>
      <Grid.Column only='tablet'>
        <Segment>Tablet Only Content</Segment>
      </Grid.Column>
    </Grid>

    <Header as='h2' content='Responsive Grid with Variations' style={style.h2} textAlign='center' />

    <Header as='h3' content='Stackable Divided Grid' style={style.h3} textAlign='center' />
    <Grid columns={2} container divided stackable>
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

    <Header
      as='h3'
      content='Stackable Vertically Divided Grid'
      style={style.h3}
      textAlign='center'
    />
    <Grid columns={2} container divided='vertically' stackable>
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

    <Header as='h3' content='Celled Stackable Grid' style={style.h3} textAlign='center' />
    <Grid celled container stackable>
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

    <Header
      as='h3'
      content='Consecutive Doubling Stackable Grid'
      style={style.h3}
      textAlign='center'
    />
    <Grid columns={3} container doubling stackable>
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
    <Grid columns={3} container doubling stackable>
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

    <Header as='h3' content='Grid Container' style={style.h3} textAlign='center' />
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

    <Header as='h1' content='Responsive Elements' style={style.h1} textAlign='center' />

    <Header as='h3' content='Responsive Vertical Divider' style={style.h3} textAlign='center' />
    <Grid container columns={2} divided relaxed stackable>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
    </Grid>

    <Header as='h3' content='Responsive Table' style={style.h3} textAlign='center' />
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
                <Image rounded size='mini' src='/images/wireframe/square-image.png' />
                <Header.Content>
                  Lena
                  <Header.Subheader>Human Resources</Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>22</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as='h4' image>
                <Image rounded size='mini' src='/images/wireframe/square-image.png' />
                <Header.Content>
                  Matthew
                  <Header.Subheader>Fabric Design</Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>15</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as='h4' image>
                <Image rounded size='mini' src='/images/wireframe/square-image.png' />
                <Header.Content>
                  Lindsay
                  <Header.Subheader>Entertainment</Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>12</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as='h4' image>
                <Image rounded size='mini' src='/images/wireframe/square-image.png' />
                <Header.Content>
                  Mark
                  <Header.Subheader>Executive</Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>11</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Container>

    <Header as='h3' content='Responsive Menu' style={style.h3} textAlign='center' />
    <Container>
      <Menu stackable>
        <Menu.Item>
          <img src='/logo.png' />
        </Menu.Item>
        <Menu.Item>Features</Menu.Item>
        <Menu.Item>Testimonials</Menu.Item>
        <Menu.Item>Sign-in</Menu.Item>
      </Menu>
    </Container>

    <Header as='h3' content='Responsive Item' style={style.h3} textAlign='center' />
    <Container>
      <Item.Group divided>
        <Item>
          <Item.Image src='/images/wireframe/image.png' />
          <Item.Content>
            <Item.Header as='a'>Content Header</Item.Header>
            <Item.Meta>
              <span>Date</span>
              <span>Category</span>
            </Item.Meta>
            <Item.Description>
              A description which may flow for several lines and give context to the content.
            </Item.Description>
            <Item.Extra>
              <Image avatar circular src='/images/wireframe/square-image.png' />
              Username
            </Item.Extra>
          </Item.Content>
        </Item>

        <Item>
          <Item.Image src='/images/wireframe/image.png' />
          <Item.Content>
            <Item.Header as='a'>Content Header</Item.Header>
            <Item.Meta>
              <span>Date</span>
              <span>Category</span>
            </Item.Meta>
            <Item.Description>
              A description which may flow for several lines and give context to the content.
            </Item.Description>
            <Item.Extra>
              <Button floated='right' primary>
                Primary
                <Icon name='chevron right' />
              </Button>
              <Label>Limited</Label>
            </Item.Extra>
          </Item.Content>
        </Item>
        <Item>
          <Item.Image src='/images/wireframe/image.png' />
          <Item.Content>
            <Item.Header as='a'>Content Header</Item.Header>
            <Item.Meta>
              <span>Date</span>
              <span>Category</span>
            </Item.Meta>
            <Item.Description>
              A description which may flow for several lines and give context to the content.
            </Item.Description>
            <Item.Extra>
              <Button primary floated='right'>
                Primary
                <Icon name='chevron right' />
              </Button>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    </Container>

    <Header as='h3' content='Responsive Steps' style={style.h3} textAlign='center' />

    <Container style={style.last}>
      <Step.Group fluid>
        <Step icon='plane' title='Shipping' description='Choose your shipping options' />
        <Step active icon='dollar' title='Billing' description='Enter billing information' />
        <Step
          disabled
          icon='info circle'
          title='Confirm Order'
          description='Verify order details'
        />
      </Step.Group>
    </Container>
  </div>
)

export default ResponsiveLayout
