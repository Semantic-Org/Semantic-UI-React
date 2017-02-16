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
    <Container text>
      <Grid>
        <Grid.Row columns={15}>
         <Grid.Column />
         <Grid.Column />
         <Grid.Column />
         <Grid.Column />
         <Grid.Column />
         <Grid.Column />
         <Grid.Column />
         <Grid.Column />
         <Grid.Column />
         <Grid.Column />
         <Grid.Column />
         <Grid.Column />
         <Grid.Column />
         <Grid.Column />
         <Grid.Column />
         <Grid.Column />
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
       <Grid>
        <Grid.Row columns={1}>
          <Grid.Column />
        </Grid.Row>
       </Grid>
    </Container>

    <Container text>
      <Header as='h1' dividing>Grid Content</Header>

      <h3 style={style.first}>Column Flow</h3>
      <p>A grid does not necessarily need to specify rows. If you include <code>columns</code> as direct child of <code>ui grid</code> content will automatically flow to the next row when all the grid columns are taken in the current row.</p>

      <Grid>
        <Grid.Row columns={7}>
          <Grid.Column />
          <Grid.Column />
          <Grid.Column />
          <Grid.Column />
          <Grid.Column />
          <Grid.Column />
          <Grid.Column />
          <Grid.Column />
        </Grid.Row>
      </Grid>

     <h3>Clearing Rows</h3>
     <p>Adding row wrappers allow you to manually specify you want a new row to begin.</p>

     <Grid >
       <Grid.Column />
       <Grid.Row columns={3}>
         <Grid.Column />
         <Grid.Column />
         <Grid.Column />
       </Grid.Row>
     </Grid>

      <h3>Specifying Row Width</h3>
      <p>Specifying a grid column count will divide columns into rows of predetermined column count. Additional columns will automatically flow to the next row.</p>
      <Grid columns={3}>
        <Grid.Column>column</Grid.Column>
        <Grid.Column>column</Grid.Column>
        <Grid.Column>column</Grid.Column>
        <Grid.Column>column</Grid.Column>
        <Grid.Column>column</Grid.Column>
        <Grid.Column>column</Grid.Column>
      </Grid>

      <h3>Specifying Column Width</h3>
      <p>You can also specify column widths for each column individually</p>
      <Grid>
        <Grid.Column width={4}>four wide column</Grid.Column>
        <Grid.Column width={8}>eight wide column</Grid.Column>
        <Grid.Column width={4}>four wide column</Grid.Column>
      </Grid>

      <h3>Special Variations</h3>
      <p>Some special variations that format grids like tables require you to specify rows. For example a <code>divided grid</code> or a <code>celled grid</code> requires row wrappers.</p>

      <Divider section horizontal>Celled Grid</Divider>
      <Grid celled>
        <Grid.Row>
          <Grid.Column width={4}></Grid.Column>
          <Grid.Column width={4}></Grid.Column>
          <Grid.Column width={4}></Grid.Column>
          <Grid.Column width={4}></Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={4}></Grid.Column>
          <Grid.Column width={4}></Grid.Column>
          <Grid.Column width={4}></Grid.Column>
          <Grid.Column width={4}></Grid.Column>
        </Grid.Row>
      </Grid>

    </Container>
  </div>

export default GridLayout
