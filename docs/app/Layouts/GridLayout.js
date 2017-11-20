import React from 'react'
import { Container, Divider, Grid, Header, Image } from 'semantic-ui-react'

const InlineStyle = () => (
  <style>{`
    .grid {
      position: relative;
    }
    .grid:before {
      background-color: #F0F0F0;
      box-shadow: 0px 0px 0px 1px #DDDDDD inset;
      content: '';
      height: calc(100% - 2rem);
      left: 1rem;
      top: 1rem;
      position: absolute;
      width: calc(100% - 2rem);
     }
    .ui.divided.grid:before, .celled.grid:before {
      display: none;
    }
    .ui.aligned .column:after {
      display: none !important;
    }
    .grid .column:not(.row):not(.grid):after {
      background-color: rgba(86, 61, 124, .15);
      box-shadow: 0px 0px 0px 1px rgba(86, 61, 124, 0.2) inset;
      content: '';
      display: block;
      min-height: 50px;
    }
    @media only screen and (max-width: 768px) {
      .stackable.grid:before {
        width: 100%;
        left: 0em;
      }
    }
  `}</style>
)

const GridLayout = () => (
  <div>
    <InlineStyle />

    <Container text>
      <Header as='h1' dividing>Using Grids</Header>
      <Header as='h3'>Container</Header>
      <p>
        A container is a fixed width element that wraps your site's content. It remains a constant size and
        uses <b>margin</b> to center. Containers are the simplest way to center page content inside a grid.
      </p>
    </Container>

    <Divider hidden />

    <Container>
      <Grid>
        <Grid.Row>
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

    <Divider hidden />

    <Container text>
      <Header as='h3'>Text Container</Header>
      <p>
        Sometimes you just need to put a single column of centered text on a page. A <code>text container</code> is
        a special type of container optimized for a single flowing column of text, like this instructions on this page.
      </p>
      <p>Text containers <b>do not need to use grids</b> and help simplify basic page layouts.</p>

      <Grid>
        <Grid.Row columns={1}>
          <Grid.Column />
        </Grid.Row>
      </Grid>

      <Header as='h1' dividing>Grid Content</Header>
      <Header as='h3'>Column Flow</Header>
      <p>
        A grid does not necessarily need to specify rows. If you include <code>columns</code> as direct child of
        <code>ui grid</code> content will automatically flow to the next row when all the grid columns are taken in the
        current row.
      </p>
      <Grid>
        <Grid.Column width={4} />
        <Grid.Column width={4} />
        <Grid.Column width={4} />
        <Grid.Column width={4} />
        <Grid.Column width={4} />
        <Grid.Column width={4} />
        <Grid.Column width={4} />
        <Grid.Column width={4} />
      </Grid>

      <Header as='h3'>Clearing Rows</Header>
      <p>Adding row wrappers allow you to manually specify you want a new row to begin.</p>

      <Grid columns={3}>
        <Grid.Column />
        <Grid.Row>
          <Grid.Column />
          <Grid.Column />
          <Grid.Column />
        </Grid.Row>
      </Grid>

      <Header as='h3'>Specifying Row Width</Header>
      <p>
        Specifying a grid column count will divide columns into rows of predetermined column count. Additional columns
        will automatically flow to the next row.
      </p>
      <Grid columns={3}>
        <Grid.Column>column</Grid.Column>
        <Grid.Column>column</Grid.Column>
        <Grid.Column>column</Grid.Column>
        <Grid.Column>column</Grid.Column>
        <Grid.Column>column</Grid.Column>
        <Grid.Column>column</Grid.Column>
      </Grid>

      <Header as='h3'>Specifying Column Width</Header>
      <p>You can also specify column widths for each column individually.</p>

      <Grid>
        <Grid.Column width={4}>four wide column</Grid.Column>
        <Grid.Column width={8}>eight wide column</Grid.Column>
        <Grid.Column width={4}>four wide column</Grid.Column>
      </Grid>

      <Header as='h3'>Special Variations</Header>
      <p>
        Some special variations that format grids like tables require you to specify rows. For example a
        <code>divided grid</code> or a <code>celled grid</code> requires row wrappers.
      </p>

      <Divider section horizontal>Celled Grid</Divider>
      <Grid celled>
        <Grid.Row>
          <Grid.Column width={4} />
          <Grid.Column width={4} />
          <Grid.Column width={4} />
          <Grid.Column width={4} />
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={4} />
          <Grid.Column width={4} />
          <Grid.Column width={4} />
          <Grid.Column width={4} />
        </Grid.Row>
      </Grid>

      <Divider horizontal section>Internally Celled Grid</Divider>

      <Grid celled='internally'>
        <Grid.Row>
          <Grid.Column width={4} />
          <Grid.Column width={4} />
          <Grid.Column width={4} />
          <Grid.Column width={4} />
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={4} />
          <Grid.Column width={4} />
          <Grid.Column width={4} />
          <Grid.Column width={4} />
        </Grid.Row>
      </Grid>


      <Divider horizontal section>Divided Grid</Divider>

      <Grid divided>
        <Grid.Row>
          <Grid.Column width={4} />
          <Grid.Column width={4} />
          <Grid.Column width={4} />
          <Grid.Column width={4} />
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={4} />
          <Grid.Column width={4} />
          <Grid.Column width={4} />
          <Grid.Column width={4} />
        </Grid.Row>
      </Grid>

      <Divider horizontal section>Vertically Divided Grid</Divider>

      <Grid divided='verticallly'>
        <Grid.Row>
          <Grid.Column width={4} />
          <Grid.Column width={4} />
          <Grid.Column width={4} />
          <Grid.Column width={4} />
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={4} />
          <Grid.Column width={4} />
          <Grid.Column width={4} />
          <Grid.Column width={4} />
        </Grid.Row>
      </Grid>

      <Header as='h1' dividing>Adjusting Grids</Header>
      <Header as='h3'>Centering Content</Header>
      <p>
        If a row does not take up all sixteen grid columns, you can use a <code>ui centered grid</code>,
        <code>centered row</code>, or <code>centered column</code> to center the column contents inside the grid.
      </p>

      <Grid centered columns={2}>
        <Grid.Column />
        <Grid.Row centered columns={4}>
          <Grid.Column />
          <Grid.Column />
        </Grid.Row>
      </Grid>

      <Header as='h3'>Floating Rows</Header>
      <p>
        Since Semantic UI's grid is based on flex box, a <code>left floated</code> item should come first, and a
        <code>right floated</code> item last in its row.
      </p>

      <Grid>
        <Grid.Column floated='left' width={6}>Left floated</Grid.Column>
        <Grid.Column floated='right' width={6}>Right floated</Grid.Column>
      </Grid>

      <Header as='h3'>Text Alignment</Header>
      <p>You can specify text alignment using alignment variations on a grid, row, or column level.</p>

      <Grid>
        <Grid.Column verticalAlign='right' width={8}>right aligned column</Grid.Column>
        <Grid.Column verticalAlign='left' width={8}>left aligned column</Grid.Column>
        <Grid.Row columns={2} verticalAlign='center'>
          <Grid.Column>center aligned row</Grid.Column>
          <Grid.Column>center aligned row</Grid.Column>
        </Grid.Row>
        <Grid.Column verticalAlign='right' width={16}>right aligned column</Grid.Column>
      </Grid>

      <Header as='h3'>Vertical Alignment</Header>
      <p>You can specify vertical alignment on a grid, row, or column level.</p>

      <Grid verticalAlign='middle' columns={4} centered>
        <Grid.Row>
          <Grid.Column>
            <Image src='/assets/images/wireframe/image.png' />
          </Grid.Column>
          <Grid.Column>
            <Image src='/assets/images/wireframe/image.png' />
            <Image src='/assets/images/wireframe/image.png' />
          </Grid.Column>
          <Grid.Column>
            <Image src='/assets/images/wireframe/image.png' />
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Header as='h3'>Equal Width Columns</Header>
      <p>
        Specifying an <code>equal width grid</code> will automatically determine column sizes to fit evenly inside
        one row.
      </p>

      <Grid columns='equal'>
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

      <Header as='h1'>Responsive Patterns</Header>
      <Header as='h3'>Doubling</Header>
      <p>You can set columns to double in width at each device jump.</p>

      <Grid columns={5} doubling>
        <Grid.Column>column</Grid.Column>
        <Grid.Column>column</Grid.Column>
        <Grid.Column>column</Grid.Column>
        <Grid.Column>column</Grid.Column>
        <Grid.Column>column</Grid.Column>
      </Grid>

      <Header as='h3'>Stackable</Header>
      <p>You can set columns to stack on mobile.</p>

      <Grid columns={3} stackable>
        <Grid.Column>column</Grid.Column>
        <Grid.Column>column</Grid.Column>
        <Grid.Column>column</Grid.Column>
      </Grid>

      <Header as='h3'>Responsive Width Adjustments</Header>
      <p>You can specify columns to appear at different widths on different screens.</p>

      <Grid>
        <Grid.Column computer={4} mobile={8} tablet={6} />
        <Grid.Column computer={4} mobile={8} tablet={6} />
        <Grid.Column computer={4} mobile={8} tablet={6} />
        <Grid.Column computer={4} mobile={8} tablet={6} />
        <Grid.Column computer={4} mobile={8} tablet={6} />
      </Grid>
      <Grid>
        <Grid.Column largescreen={2} widescreen={1} width={4} />
        <Grid.Column largescreen={2} widescreen={1} width={4} />
        <Grid.Column largescreen={2} widescreen={1} width={4} />
        <Grid.Column largescreen={2} widescreen={1} width={4} />
      </Grid>

      <Header as='h3'>Specifying Device Visibility</Header>
      <p>You can specify columns to appear only a particular screen.</p>

      <Grid>
        <Grid.Row columns={2} only='computer'>
          <Grid.Column width={10}>ten wide column computer only</Grid.Column>
          <Grid.Column width={6}>six wide column computer only</Grid.Column>
        </Grid.Row>
        <Grid.Column only='mobile' width={16}>sixteen wide column mobile only</Grid.Column>
        <Grid.Row columns={3} only='computer'>
          <Grid.Column>computer only row</Grid.Column>
          <Grid.Column>computer only row</Grid.Column>
          <Grid.Column>computer only row</Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2} only='mobile'>
          <Grid.Column>mobile only column</Grid.Column>
          <Grid.Column>mobile only column</Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column>column</Grid.Column>
          <Grid.Column>column</Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </div>
)

export default GridLayout
