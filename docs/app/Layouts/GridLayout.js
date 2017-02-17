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
import style from './LayoutStyle'

const src = 'http://semantic-ui.com/examples/assets/images/wireframe/image.png'

const GridLayout = () =>
  <div>
    <Container text>
       <Header dividing as='h1' dividing>Using Grids</Header>
       <h3 style={style.first}>Container</h3>
       <p>A container is a fixed width element that wraps your site's content. It remains a constant size and uses <b>margin</b> to center. Containers are the simplest way to center page content inside a grid.
       </p>
    </Container>
    <Container text>
      <Grid style={style.grid}>
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
       <Grid style={style.grid}>
        <Grid.Row columns={1}>
          <Grid.Column />
        </Grid.Row>
       </Grid>
    </Container>

    <Container text>
      <Header as='h1' dividing>Grid Content</Header>

      <h3 style={style.first}>Column Flow</h3>
      <p>A grid does not necessarily need to specify rows. If you include <code>columns</code> as direct child of <code>ui grid</code> content will automatically flow to the next row when all the grid columns are taken in the current row.</p>

      <Grid style={style.grid}>
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
      <Grid style={style.grid}>
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

      <Divider section horizontal>Internally Celled Grid</Divider>

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


     <Divider section horizontal>Divided Grid</Divider>

     <Grid divided>
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

     <Divider section horizontal>Vertically Divided Grid</Divider>

     <Grid divided vertical>
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

     <Header dividing>Adjusting Grids</Header>


     <Header as='h3' style={style.first}>Centering Content</Header>
     <p>If a row does not take up all sixteen grid columns, you can use a <code>ui centered grid</code>, <code>centered row</code>, or <code>centered column</code> to center the column contents inside the grid.
     </p>
     <Grid columns={2} centered>
       <Grid.Column></Grid.Column>
       <Grid.Row columns={4} centered>
         <Grid.Column></Grid.Column>
         <Grid.Column></Grid.Column>
       </Grid.Row>
     </Grid>

     <h3>Floating Rows</h3>
     <p>Since Semantic UI's grid is based on flex box, a <code>left floated</code> item should come first, and a <code>right floated</code> item last in its row.</p>

     <Grid style={style.grid}>
       <Grid.Column width={6} floated='left'>
         <Segment>
           Left floated
         </Segment>
       </Grid.Column>
       <Grid.Column width={6} floated='right'>
         <Segment>
           Right floated
         </Segment>
       </Grid.Column>
     </Grid>


     <h3>Text Alignment</h3>
     <p>You can specify text alignment using alignment variations on a grid, row, or column level.</p>

     <Grid style={style.grid}>
       <Grid.Column verticalAllign='left' width={8}>
         right aligned column
       </Grid.Column>
       <Grid.Column verticalAllign='left' width={8}>
         left aligned column
       </Grid.Column>
       <Grid.Row columns={2} verticalAllign='center'>
         <Grid.Column>
           center aligned row
         </Grid.Column>
         <Grid.Column>
           center aligned row
         </Grid.Column>
       </Grid.Row>
       <Grid.Column verticalAllign='right' width={16}>
         right aligned column
       </Grid.Column>
     </Grid>

     <h3>Vertical Alignment</h3>
     <p>You can specify vertical alignment on a grid, row, or column level.</p>
     <Grid allign='middle' columns={4} centered>
       <Grid.Row>
         <Grid.Column>
           <Image className='wireframe' src={src} />
         </Grid.Column>
         <Grid.Column>
           <Image className='wireframe' src={src} />
           <Image className='wireframe' src={src} />
         </Grid.Column>
         <Grid.Column>
           <Image className='wireframe' src={src} />
         </Grid.Column>
       </Grid.Row>
     </Grid>

     <h3>Equal Width Columns</h3>
     <p>Specifying an <code>equal width grid</code> will automatically determine column sizes to fit evenly inside one row</p>
     <Grid className="ui equal width grid">
       <Grid.Row>
         <Grid.Column>column</Grid.Column>
         <Grid.Column>column</Grid.Column>
         <Grid.Column>column</Grid.Column>
         <Grid.Column>column</Grid.Column>
       </Grid.Row>
       <Grid.Row>
         <Grid.Column>column</Grid.Column>
         <Grid.Column>column</Grid.Column>
         <Grid.Column>column</Grid.Column>
       </Grid.Row>
     </Grid>


     <h1>Responsive Patterns</h1>

     <Header as='h3' style={style.first}>Doubling</Header>
     <p>You can set columns to double in width at each device jump</p>
     <Grid columns={5} doubling>
       <Grid.Column>column</Grid.Column>
       <Grid.Column>column</Grid.Column>
       <Grid.Column>column</Grid.Column>
       <Grid.Column>column</Grid.Column>
       <Grid.Column>column</Grid.Column>
     </Grid>

     <h3>Stackable</h3>
     <p>You can set columns to stack on mobile</p>
     <Grid columns={3} stackable>
       <Grid.Column>column</Grid.Column>
       <Grid.Column>column</Grid.Column>
       <Grid.Column>column</Grid.Column>
     </Grid>

     <h3>Responsive Width Adjustments</h3>
     <p>You can specify columns to appear at different widths on different screens</p>

     <Grid style={style.grid}>
       <Grid.Column mobile={8} tablet={6} computer={4}></Grid.Column>
       <Grid.Column mobile={8} tablet={6} computer={4}></Grid.Column>
       <Grid.Column mobile={8} tablet={6} computer={4}></Grid.Column>
       <Grid.Column mobile={8} tablet={6} computer={4}></Grid.Column>
       <Grid.Column mobile={8} tablet={6} computer={4}></Grid.Column>
     </Grid>
     <Grid style={style.grid}>
       <Grid.Column width={4} largescreen={2} widescreen={1}></Grid.Column>
       <Grid.Column width={4} largescreen={2} widescreen={1}></Grid.Column>
       <Grid.Column width={4} largescreen={2} widescreen={1}></Grid.Column>
       <Grid.Column width={4} largescreen={2} widescreen={1}></Grid.Column>
     </Grid>

     <h3>Specifying Device Visibility</h3>
     <p>You can specify columns to appear only a particular screen</p>
     <Grid style={style.grid}>
       <Grid.Row columns={2} only='computer'>
         <Grid.Column width={10}>ten wide column computer only</Grid.Column>
         <Grid.Column width={6}>six wide column computer only</Grid.Column>
       </Grid.Row>
       <Grid.Column width={16} only='mobile'>sixteen wide column mobile only</Grid.Column>
       <Grid.Row columns={3} only='computer'>
         <Grid.Column>computer only row</Grid.Column>
         <Grid.Column>computer only row</Grid.Column>
         <Grid.Column>computer only row</Grid.Column>
       </Grid.Row>
       <Grid.Row columns={2} only='mobile'>
         <div class="column">mobile only column</div>
         <div class="column">mobile only column</div>
       </Grid.Row>
       <Grid.Row columns={2}>
         <Grid.Column>column</Grid.Column>
         <Grid.Column>column</Grid.Column>
       </Grid.Row>
       </Grid>
    </Container>
  </div>

export default GridLayout
