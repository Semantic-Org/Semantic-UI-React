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
   Divider,
} from 'semantic-ui-react'
import style from '../Style'

const GridLayout = () =>
  <div>
    <Container text>
       <Header as='h1' dividing>Using Grids</Header>
       <h3 style={style.first}>Container</h3>
       <p>A container is a fixed width element that wraps your site's content. It remains a constant size and uses <b>margin</b> to center. Containers are the simplest way to center page content inside a grid.
       </p>
    </Container>
    <Container>
      <Grid columns={15}>
        <Grid.Row>
         <Grid.Column></Grid.Column>
         <Grid.Column></Grid.Column>
         <Grid.Column></Grid.Column>
         <Grid.Column></Grid.Column>
         <Grid.Column></Grid.Column>
         <Grid.Column></Grid.Column>
         <Grid.Column></Grid.Column>
         <Grid.Column></Grid.Column>
         <Grid.Column></Grid.Column>
         <Grid.Column></Grid.Column>
         <Grid.Column></Grid.Column>
         <Grid.Column></Grid.Column>
         <Grid.Column></Grid.Column>
         <Grid.Column></Grid.Column>
         <Grid.Column></Grid.Column>
         <Grid.Column></Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
    <Container text>
       <h3 style={style.first}>Text Container</h3>
       <p>Sometimes you just need to put a single column of centered text on a page. A <code>text container</code> is a special type of container optimized for a single flowing column of text, like this instructions on this page.
       </p>
       <p>Text containers <b>do not need to use grids</b> and help simplify basic page layouts.</p>
    </Container>

     <Container text>
       <Grid columns={1}>
         <Grid.Column />
       </Grid>
    </Container>
  </div>

export default GridLayout
