import React from 'react'
import { Container, Divider, Grid, Header, Icon } from 'semantic-ui-react'

// Ported from the amazing codepen by Alexei Popkov.
// https://codepen.io/Reystleen/pen/oydqxz

const AnotherGridLayout = () => (
  <Container>
    {/* Heads up! We apply there some custom styling, you usually will not need it. */}
    <style>
      {`
      html, body {
        background-color: #252839 !important;
      }

      p {
        align-content: center;
        background-color: #495285;
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: 6em;
      }

      p > span {
        opacity: 0.4;
        text-align: center;
      }
    }
    `}
    </style>

    <Header as='h2' icon inverted textAlign='center'>
      <Icon name='grid layout' />
      Advanced Grid
      <Header.Subheader>
        This page contains some helpful examples that can be usefull for advanced layouts.
      </Header.Subheader>
    </Header>
    <Divider />

    <Header as='h2' inverted textAlign='center'>
      Basic 16
    </Header>
    <Grid>
      {/* Heads up! Grid.Row is not mandatory, Grid.Column is enough for grid to work */}
      <Grid.Row>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Header as='h2' inverted textAlign='center'>
      16/5 || 4x8x4
    </Header>
    <Grid>
      <Grid.Row columns={5}>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={4}>
          <p>
            <span>Four</span>
          </p>
        </Grid.Column>
        <Grid.Column width={8}>
          <p>
            <span>Eight</span>
          </p>
        </Grid.Column>
        <Grid.Column width={4}>
          <p>
            <span>Four</span>
          </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Header as='h2' inverted textAlign='center'>
      Relaxed 4x8x4
    </Header>
    <Grid relaxed>
      <Grid.Row>
        <Grid.Column width={4}>
          <p>
            <span>Four</span>
          </p>
        </Grid.Column>
        <Grid.Column width={8}>
          <p>
            <span>Eight</span>
          </p>
        </Grid.Column>
        <Grid.Column width={4}>
          <p>
            <span>Four</span>
          </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Header as='h2' inverted textAlign='center'>
      Floated
    </Header>
    <Grid>
      <Grid.Row columns={5}>
        <Grid.Column floated='left'>
          <p>
            <span>Left</span>
          </p>
        </Grid.Column>
        <Grid.Column floated='right'>
          <p>
            <span>Right</span>
          </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Header as='h2' inverted textAlign='center'>
      Equal width
    </Header>
    <Grid columns='equal'>
      <Grid.Row columns='equal'>
        <Grid.Column>
          <p>
            <span>=</span>
          </p>
        </Grid.Column>
        <Grid.Column>
          <p>
            <span>=</span>
          </p>
        </Grid.Column>
        <Grid.Column>
          <p>
            <span>=</span>
          </p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns='equal'>
        <Grid.Column>
          <p>
            <span>=</span>
          </p>
        </Grid.Column>
        <Grid.Column>
          <p>
            <span>=</span>
          </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Header as='h2' inverted textAlign='center'>
      Celled
    </Header>
    <Grid celled columns={3}>
      <Grid.Row>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Header as='h2' inverted textAlign='center'>
      Internally Celled
    </Header>
    <Grid celled='internally' columns={3}>
      <Grid.Row>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
      </Grid.Row>
    </Grid>

    {/* Heads up! Override division color to make it visible on dark background. */}
    <style>
      {`
      .ui.grid.divided:not([class*="vertically divided"]) > .row > .column {
        box-shadow: -1px 0 0 0 #d4d4d4;
      }

      .ui[class*="vertically divided"].grid > .row:before {
        box-shadow: 0 -1px 0 0 rgba(212, 212, 212, 1.0);
      }
    `}
    </style>
    <Header as='h2' inverted textAlign='center'>
      Divided
    </Header>
    <Grid columns={3} divided>
      <Grid.Row>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Header as='h2' inverted textAlign='center'>
      Vertically Divided
    </Header>
    <Grid columns={3} divided='vertically'>
      <Grid.Row>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <style>
      {`
      #nested_1, #nested_2 {
        background-color: rgba(96, 112, 175, .2);
        border: 3px dashed #495285;
      }

      #nested_1 p, #nested_2 p {
        background-color: #f2b632;
      }

      #nested_3 {
        background-color: rgba(242, 182, 50, .3);
        border: 3px dashed #f2b632;
      }

      #nested_3 p {
        background-color: #fff;
      }
    `}
    </style>
    <Header as='h2' inverted textAlign='center'>
      Nested
    </Header>
    <Grid columns={2}>
      <Grid.Column>
        <Grid columns={3} id='nested_1'>
          <Grid.Column>
            <p />
          </Grid.Column>
          <Grid.Column>
            <p />
          </Grid.Column>
          <Grid.Column>
            <p />
          </Grid.Column>
        </Grid>
      </Grid.Column>
      <Grid.Column>
        <p />
      </Grid.Column>
      <Grid.Column>
        <p />
      </Grid.Column>
      <Grid.Column>
        <Grid id='nested_2'>
          <Grid.Column width={4}>
            <p />
          </Grid.Column>
          <Grid.Column width={12}>
            <Grid columns='equal' id='nested_3'>
              <Grid.Column>
                <p />
              </Grid.Column>
              <Grid.Column>
                <p />
              </Grid.Column>
            </Grid>
          </Grid.Column>
        </Grid>
      </Grid.Column>
    </Grid>

    <style>
      {`
      #colors p {
        background-color: 000;
        opacity: 0.1;
      }
    `}
    </style>
    <Header as='h2' inverted textAlign='center'>
      Color variations
    </Header>
    <Grid className='ui equal width center aligned grid container' id='colors'>
      <Grid.Row>
        <Grid.Column color='red'>
          <p />
        </Grid.Column>
        <Grid.Column color='orange'>
          <p />
        </Grid.Column>
        <Grid.Column color='yellow'>
          <p />
        </Grid.Column>
        <Grid.Column color='olive'>
          <p />
        </Grid.Column>
        <Grid.Column color='green'>
          <p />
        </Grid.Column>
        <Grid.Column color='teal'>
          <p />
        </Grid.Column>
        <Grid.Column color='blue'>
          <p />
        </Grid.Column>
        <Grid.Column color='violet'>
          <p />
        </Grid.Column>
        <Grid.Column color='purple'>
          <p />
        </Grid.Column>
        <Grid.Column color='pink'>
          <p />
        </Grid.Column>
        <Grid.Column color='brown'>
          <p />
        </Grid.Column>
        <Grid.Column color='grey'>
          <p />
        </Grid.Column>
        <Grid.Column color='black'>
          <p />
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Header as='h2' inverted textAlign='center'>
      Stackable (mobile)
    </Header>
    <Grid columns={4} stackable>
      <Grid.Row>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
        <Grid.Column>
          <p />
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Header as='h2' inverted textAlign='center'>
      Reverse order (mobile)
    </Header>
    <Grid columns={4} reversed='mobile'>
      <Grid.Row>
        <Grid.Column>
          <p>
            <span>1</span>
          </p>
        </Grid.Column>
        <Grid.Column>
          <p>
            <span>2</span>
          </p>
        </Grid.Column>
        <Grid.Column>
          <p>
            <span>3</span>
          </p>
        </Grid.Column>
        <Grid.Column>
          <p>
            <span>4</span>
          </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <style>
      {`
      #db_1 p {
        background-color: #db2828;
      }

      #db_2 p {
        background-color: #fbbd08;
      }

      #db_3 p {
        background-color: #21ba45;
      }
    `}
    </style>
    <Header as='h2' inverted textAlign='center'>
      Doubling column width (mobile)
    </Header>
    <Grid doubling>
      <Grid.Row columns={8} id='db_1'>
        <Grid.Column>
          <p>
            <span>1</span>
          </p>
        </Grid.Column>
        <Grid.Column>
          <p>
            <span>2</span>
          </p>
        </Grid.Column>
        <Grid.Column>
          <p>
            <span>3</span>
          </p>
        </Grid.Column>
        <Grid.Column>
          <p>
            <span>4</span>
          </p>
        </Grid.Column>
        <Grid.Column>
          <p>
            <span>5</span>
          </p>
        </Grid.Column>
        <Grid.Column>
          <p>
            <span>6</span>
          </p>
        </Grid.Column>
        <Grid.Column>
          <p>
            <span>7</span>
          </p>
        </Grid.Column>
        <Grid.Column>
          <p>
            <span>8</span>
          </p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={6} id='db_2'>
        <Grid.Column>
          <p>
            <span>1</span>
          </p>
        </Grid.Column>
        <Grid.Column>
          <p>
            <span>2</span>
          </p>
        </Grid.Column>
        <Grid.Column>
          <p>
            <span>3</span>
          </p>
        </Grid.Column>
        <Grid.Column>
          <p>
            <span>4</span>
          </p>
        </Grid.Column>
        <Grid.Column>
          <p>
            <span>5</span>
          </p>
        </Grid.Column>
        <Grid.Column>
          <p>
            <span>6</span>
          </p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={4} id='db_3'>
        <Grid.Column>
          <p>
            <span>1</span>
          </p>
        </Grid.Column>
        <Grid.Column>
          <p>
            <span>2</span>
          </p>
        </Grid.Column>
        <Grid.Column>
          <p>
            <span>3</span>
          </p>
        </Grid.Column>
        <Grid.Column>
          <p>
            <span>4</span>
          </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Header as='h2' inverted textAlign='center'>
      Custom visibility (mobile)
    </Header>
    <Grid>
      <Grid.Row only='widescreen'>
        <Grid.Column>
          <p>
            <span>Widescreen</span>
          </p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row only='large screen'>
        <Grid.Column>
          <p>
            <span>Large Screen</span>
          </p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row only='computer'>
        <Grid.Column>
          <p>
            <span>Computer</span>
          </p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row only='tablet computer'>
        <Grid.Column>
          <p>
            <span>Tablet &amp; Computer</span>
          </p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={2} only='tablet'>
        <Grid.Column>
          <p>
            <span>Tablet</span>
          </p>
        </Grid.Column>
        <Grid.Column>
          <p>
            <span>Tablet</span>
          </p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={3} only='mobile'>
        <Grid.Column>
          <p>
            <span>Mobile</span>
          </p>
        </Grid.Column>
        <Grid.Column>
          <p>
            <span>Mobile</span>
          </p>
        </Grid.Column>
        <Grid.Column>
          <p>
            <span>Mobile</span>
          </p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column mobile={3} tablet={6} computer={12} widescreen={16}>
          <p>
            <span>Different width based on screen size</span>
          </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
)

export default AnotherGridLayout
