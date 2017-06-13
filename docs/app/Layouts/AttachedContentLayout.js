import React from 'react'
import {
   Container,
   Header,
   Image,
   Segment,
   Grid,
   Divider,
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
   </Grid>
  </Container>

export default AttachedContentLayout
