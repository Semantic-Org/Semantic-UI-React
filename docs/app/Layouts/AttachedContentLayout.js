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
} from 'semantic-ui-react'

const AttachedContentLayout = () =>
  <Container>

    <Header as='h2'>Attached Content</Header>
   <Grid columns={3}>
     <Grid.Column >
       <Segment attached >
         Segment 1
       </Segment>
       <Segment attached>
         Segment 2
       </Segment>
       <Segment attached>
         Segment 2
       </Segment>

       <Segment attached >
         Segment 3
       </Segment>

       <Segment.Group>
         <Segment>
           <p>Top</p>
         </Segment>
         <Segment.Group>
           <Segment>
             <p>Nested Top</p>
           </Segment>
           <Segment>
             <p>Nested Middle</p>
           </Segment>
           <Segment>
             <p>Nested Bottom</p>
           </Segment>
         </Segment.Group>
         <Segment>
           <p>Middle</p>
         </Segment>
         <Segment.Group horizontal>
           <Segment>
             <p>Top</p>
           </Segment>
           <Segment>
             <p>Middle</p>
           </Segment>
           <Segment>
             <p>Bottom</p>
           </Segment>
         </Segment.Group>
         <Segment>
           <p>Bottom</p>
         </Segment>
       </Segment.Group>
     </Grid.Column>

       <Grid.Column>
          <Table basic verticalAllign='top' attached >
            <Table.Header>
              <Table.HeaderCell>Header</Table.HeaderCell>
              <Table.HeaderCell>Header</Table.HeaderCell>
              <Table.HeaderCell>Header</Table.HeaderCell>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Table attached>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Table attached celled>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Table attached celled>
            <Table.Header>
              <Table.HeaderCell>Header</Table.HeaderCell>
              <Table.HeaderCell>Header</Table.HeaderCell>
              <Table.HeaderCell>Header</Table.HeaderCell>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Column>

       <Grid.Column>
         <Menu attached compact widths={3} >
           <Menu.Item>Item</Menu.Item>
           <Menu.Item>Item</Menu.Item>
           <Menu.Item>Item</Menu.Item>
         </Menu>
         <Menu attached compact widths={3}>
           <Menu.Item>Item</Menu.Item>
           <Menu.Item>Item</Menu.Item>
           <Menu.Item>Item</Menu.Item>
         </Menu>
         <Menu attached compact widths={3}>
           <Menu.Item>Item</Menu.Item>
           <Menu.Item>Item</Menu.Item>
           <Menu.Item>Item</Menu.Item>
         </Menu>
         <Menu attached compact widths={3}>
           <Menu.Item>Item</Menu.Item>
           <Menu.Item>Item</Menu.Item>
           <Menu.Item>Item</Menu.Item>
         </Menu>

         <Menu attached tabular widths={3}>
           <Menu.Item active>Active Item</Menu.Item>
           <Menu.Item>Item</Menu.Item>
           <Menu.Item>Item</Menu.Item>
         </Menu>
         <Segment attached>
           Segment
         </Segment>
         <Menu attached compact widths={3}>
           <Menu.Item active>Active Item</Menu.Item>
           <Menu.Item>Item</Menu.Item>
           <Menu.Item>Item</Menu.Item>
         </Menu>
         <Segment attached>
           Segment
         </Segment>
      </Grid.Column>

      <Container text>

        <Header as='h2'>Header Groups</Header>

        <Header as='h4' attached block={true}>
          Top Block Header
        </Header>
        <Segment attached>
          Segment
        </Segment>

        <Divider section={true} />

        <Segment attached>
          Segment
        </Segment>

        <Header as='h4' attached block={true}>
          Bottom Block Header
        </Header>

        <Divider section={true} />

        <Header as='h4' attached block={true}>
          Top Block Header
        </Header>

        <Segment attached>
          Segment
        </Segment>

        <Header as='h4' attached block={true}>
          Middle Block Header
        </Header>

        <Segment attached>
          Segment
        </Segment>

        <Header as='h4' attached block={true}>
          Bottom Block Header
        </Header>

        <Header>Mixed Attached Content</Header>

        <Divider section={true} />

        <Segment attached>
          Segment
        </Segment>

        <Menu attached compact widths={3}>
          <Menu.Item>Item</Menu.Item>
          <Menu.Item>Item</Menu.Item>
          <Menu.Item>Item</Menu.Item>
        </Menu>

         <Segment attached>
           1
         </Segment>

         <Message attached icon info={true} >
           <Icon name="help circle" />
           <Message.Content>
             Message
           </Message.Content>
         </Message>
         <Table attached>
           <Table.Header>
             <Table.HeaderCell>Header</Table.HeaderCell>
             <Table.HeaderCell>Header</Table.HeaderCell>
             <Table.HeaderCell>Header</Table.HeaderCell>
           </Table.Header>
           <Table.Body>
             <Table.Row>
               <Table.Cell>Cell</Table.Cell>
               <Table.Cell>Cell</Table.Cell>
               <Table.Cell>Cell</Table.Cell>
             </Table.Row>
             <Table.Row>
               <Table.Cell>Cell</Table.Cell>
               <Table.Cell>Cell</Table.Cell>
               <Table.Cell>Cell</Table.Cell>
             </Table.Row>
             <Table.Row>
               <Table.Cell>Cell</Table.Cell>
               <Table.Cell>Cell</Table.Cell>
               <Table.Cell>Cell</Table.Cell>
             </Table.Row>
           </Table.Body>
         </Table>

        <Divider section={true} />


        <Message attached icon warning={true} >
          <Icon name="attention" />
          <Message.Content>
            Message
          </Message.Content>
        </Message>
          <Table attached>
            <Table.Header>
              <Table.HeaderCell>Header</Table.HeaderCell>
              <Table.HeaderCell>Header</Table.HeaderCell>
              <Table.HeaderCell>Header</Table.HeaderCell>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>

          <Menu attached compact widths={3}>
            <Menu.Item>Item</Menu.Item>
            <Menu.Item>Item</Menu.Item>
            <Menu.Item>Item</Menu.Item>
          </Menu>

          <Divider section={true} />

          <Menu attached compact widths={3} inverted>
            <Menu.Item>Item</Menu.Item>
            <Menu.Item>Item</Menu.Item>
            <Menu.Item>Item</Menu.Item>
          </Menu>


          <Table attached inverted>
            <Table.Header>
              <Table.HeaderCell>Header</Table.HeaderCell>
              <Table.HeaderCell>Header</Table.HeaderCell>
              <Table.HeaderCell>Header</Table.HeaderCell>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>

          <Segment attached inverted>
            Segment
          </Segment>
        
      </Container>
    </Grid>
  </Container>

export default AttachedContentLayout
