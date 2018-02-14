import React from 'react'
import {
  Button,
  Divider,
  Dropdown,
  Grid,
  Header,
  Icon,
  Image,
  Label,
  Menu,
  Message,
  Segment,
  Table,
} from 'semantic-ui-react'

const BootstrapMigrationLayout = () => (
  <Grid container style={{ padding: '5em 0em' }}>
    <Grid.Row>
      <Grid.Column>
        <Header as='h1' dividing>Bootstrap Migration</Header>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <Message>
          <Header as='h1'>Hello, world!</Header>
          <p>
            This is a template for a simple marketing or informational website. It includes a large callout called a
            jumbotron and three supporting pieces of content. Use it as a starting point to create something more
            unique.
          </p>
          <Button color='blue'>Learn more &raquo;</Button>
        </Message>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <Header as='h1'>Buttons</Header>
        <Button as='a' tabindex='0'>Default</Button>
        <Button as='a' primary tabindex='0'>Primary</Button>
        <Button as='a' basic tabindex='0'>Basic</Button>
        <Button as='a' positive tabindex='0'>Success</Button>
        <Button as='a' negative tabindex='0'>Error</Button>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <Header as='h1'>Thumbnails</Header>
        <Divider />

        <Image size='small' src='/assets/images/wireframe/image.png' />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <Header as='h1'>Dropdown</Header>
        <Divider />

        <Dropdown
          options={[
            { key: 'Male', value: 'Male', text: 'Male' },
            { key: 'Female', value: 'Female', text: 'Female' },
          ]}
          placeholder='Select'
          selection
        />
        <Menu vertical>
          <Menu.Item active>Friends</Menu.Item>
          <Menu.Item>Messages</Menu.Item>
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

    <Grid.Row>
      <Grid.Column>
        <Header as='h1'>Badges</Header>
        <Divider />

        <Menu vertical>
          <Menu.Item>
            One <Label>2</Label>
          </Menu.Item>
          <Menu.Item>
            Two <Label>2</Label>
          </Menu.Item>
          <Menu.Item>
            Three <Label>2</Label>
          </Menu.Item>
        </Menu>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <Header as='h1'>Tables</Header>

        <Grid columns={2}>
          <Grid.Column>
            <Table>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>Premium Plan</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>John</Table.Cell>
                  <Table.Cell>No</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Jamie</Table.Cell>
                  <Table.Cell>Yes</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Jill</Table.Cell>
                  <Table.Cell>Yes</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Grid.Column>
          <Grid.Column>
            <Table basic>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>Premium Plan</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>John</Table.Cell>
                  <Table.Cell>No</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Jamie</Table.Cell>
                  <Table.Cell>Yes</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Jill</Table.Cell>
                  <Table.Cell>Yes</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Grid.Column>
          <Grid.Column>
            <Table definition>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>Premium Plan</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>John</Table.Cell>
                  <Table.Cell>No</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Jamie</Table.Cell>
                  <Table.Cell>Yes</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Jill</Table.Cell>
                  <Table.Cell>Yes</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Grid.Column>
          <Grid.Column>
            <Table basic='very'>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>Premium Plan</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>John</Table.Cell>
                  <Table.Cell>No</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Jamie</Table.Cell>
                  <Table.Cell>Yes</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Jill</Table.Cell>
                  <Table.Cell>Yes</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Grid.Column>
          <Grid.Column width={16}>
            <Table celled structured>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell rowSpan='2'>Name</Table.HeaderCell>
                  <Table.HeaderCell rowSpan='2'>Type</Table.HeaderCell>
                  <Table.HeaderCell rowSpan='2'>Files</Table.HeaderCell>
                  <Table.HeaderCell colSpan='3'>Languages</Table.HeaderCell>
                </Table.Row>
                <Table.Row>
                  <Table.HeaderCell>Ruby</Table.HeaderCell>
                  <Table.HeaderCell>JavaScript</Table.HeaderCell>
                  <Table.HeaderCell>Python</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell>Alpha Team</Table.Cell>
                  <Table.Cell>Project 1</Table.Cell>
                  <Table.Cell textAlign='right'>2</Table.Cell>
                  <Table.Cell textAlign='center'>
                    <Icon color='green' name='checkmark' size='large' />
                  </Table.Cell>
                  <Table.Cell />
                  <Table.Cell />
                </Table.Row>
                <Table.Row>
                  <Table.Cell rowSpan='3'>Beta Team</Table.Cell>
                  <Table.Cell>Project 1</Table.Cell>
                  <Table.Cell textAlign='right'>52</Table.Cell>
                  <Table.Cell textAlign='center'>
                    <Icon color='green' name='checkmark' size='large' />
                  </Table.Cell>
                  <Table.Cell />
                  <Table.Cell />
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Project 2</Table.Cell>
                  <Table.Cell textAlign='right'>12</Table.Cell>
                  <Table.Cell />
                  <Table.Cell textAlign='center'>
                    <Icon color='green' name='checkmark' size='large' />
                  </Table.Cell>
                  <Table.Cell />
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Project 3</Table.Cell>
                  <Table.Cell textAlign='right'>21</Table.Cell>
                  <Table.Cell textAlign='center'>
                    <Icon color='green' name='checkmark' size='large' />
                  </Table.Cell>
                  <Table.Cell />
                  <Table.Cell />
                </Table.Row>
              </Table.Body>
            </Table>
          </Grid.Column>
        </Grid>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <Header as='h1'>Alerts</Header>
        <Divider />

        <Message positive>Well done! You successfully read this important alert message.</Message>
        <Message info>Heads up! This alert needs your attention, but it's not super important.</Message>
        <Message warning>Warning! Best check yo self, you're not looking too good.</Message>
        <Message error>Oh snap! Change a few things up and try submitting again.</Message>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>
        <Header as='h1'>List groups</Header>
        <Divider />

        <Grid columns={3}>
          <Grid.Column>
            <Segment.Group>
              <Segment>
                <p>Cras justo odio</p>
              </Segment>
              <Segment>
                <p>Dapibus ac facilisis in</p>
              </Segment>
              <Segment>
                <p>Morbi leo risus</p>
              </Segment>
              <Segment>
                <p>Porta ac consectetur ac</p>
              </Segment>
              <Segment>
                <p>Vestibulum at eros</p>
              </Segment>
            </Segment.Group>
          </Grid.Column>
          <Grid.Column>
            <Menu vertical fluid>
              <Menu.Item>
                <p>Cras justo odio</p>
              </Menu.Item>
              <Menu.Item>
                <p>Vestibulum at eros</p>
              </Menu.Item>
            </Menu>
          </Grid.Column>
          <Grid.Column>
            <Menu vertical fluid>
              <Menu.Item>
                <Header size='medium' as='h1'>List group item heading</Header>
                <p>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
              </Menu.Item>
              <Menu.Item>
                <Header size='medium' as='h1'>List group item heading</Header>
                <p>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
              </Menu.Item>
              <Menu.Item>
                <Header size='medium' as='h1'>List group item heading</Header>
                <p>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
              </Menu.Item>
            </Menu>
          </Grid.Column>
        </Grid>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <Header as='h1'>Panels</Header>
        <Divider />
        <Grid columns={3}>
          <Grid.Column>
            <Segment.Group>
              <Segment color='red'>One</Segment>
              <Segment color='blue'>Two</Segment>
              <Segment color='green'>Three</Segment>
            </Segment.Group>
          </Grid.Column>
          <Grid.Column>
            <Segment.Group raised>
              <Segment>One</Segment>
              <Segment>Two</Segment>
              <Segment>Three</Segment>
            </Segment.Group>
          </Grid.Column>
          <Grid.Column>
            <Segment.Group stacked>
              <Segment>One</Segment>
              <Segment>Two</Segment>
              <Segment>Three</Segment>
            </Segment.Group>
          </Grid.Column>
          <Grid.Column>
            <Message attached='top' error>Error</Message>
            <Segment attached='bottom'>Panel content</Segment>
          </Grid.Column>
          <Grid.Column>
            <Message attached='top' info>Info</Message>
            <Segment attached='bottom'>Panel content</Segment>
          </Grid.Column>
          <Grid.Column>
            <Message attached='top' success>Success</Message>
            <Segment attached='bottom'>Panel content</Segment>
          </Grid.Column>
          <Grid.Column>
            <Header attached='top' as='h4' inverted>Header</Header>
            <Segment attached='bottom'>Panel content</Segment>
          </Grid.Column>
          <Grid.Column>
            <Header attached='top' as='h4' block>Header</Header>
            <Segment attached='bottom'>Panel content</Segment>
          </Grid.Column>
          <Grid.Column>
            <Header attached='top' as='h4'>Header</Header>
            <Segment attached='bottom'>Panel content</Segment>
          </Grid.Column>
        </Grid>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <Header as='h1'>Wells</Header>
        <Divider />

        <Segment>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit
            amet non magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non
            commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla
            sed consectetur.
          </p>
        </Segment>
        <Segment secondary>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit
            amet non magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non
            commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla
            sed consectetur.
          </p>
        </Segment>
        <Segment tertiary>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit
            amet non magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non
            commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla
            sed consectetur.
          </p>
        </Segment>
        <Segment inverted>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit
            amet non magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non
            commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla
            sed consectetur.
          </p>
        </Segment>
        <Segment inverted secondary>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit
            amet non magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non
            commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla
            sed consectetur.
          </p>
        </Segment>
        <Segment inverted tertiary>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit
            amet non magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non
            commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla
            sed consectetur.
          </p>
        </Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default BootstrapMigrationLayout
