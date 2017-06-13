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
   Label,
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

    <Grid.Row>
     <Grid.Column>
       <Header as="h1">Badges</Header>
       <Divider />
       <Menu vertical>
         <Menu.Item>
           <Label>2</Label>
           One
         </Menu.Item>
         <Menu.Item>
           <Label>2</Label>
           Two
         </Menu.Item>
         <Menu.Item>
           <Label>2</Label>
           Three
         </Menu.Item>
       </Menu>
     </Grid.Column>
   </Grid.Row>

      <Grid.Row>
        <Grid.Column>
         <Header as="h1">Tables</Header>
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
  </Grid>

export default BootstrapMigrationLayout
