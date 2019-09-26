import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import React from 'react';
import { Container, Segment, Grid } from 'semantic-ui-react'
import '!style-loader!css-loader!../themes/dist/sui-florence.css';

export default {
  title: 'Colours',
};

export const all = () =>  (
  <Container>
    <Grid relaxed='very' centered verticalAlign='middle' style={{height: '100vh'}}>
      <Grid.Column computer={4} tablet={3} mobile={6}>
        <Segment.Group>
          <Segment inverted color="yellow" className="secondary" style={{height: "100px"}}></Segment>
          <Segment.Group horizontal>
            <Segment inverted color="yellow" className="tertiary"></Segment>
            <Segment inverted color="yellow" ></Segment>
            <Segment inverted color="yellow" className="quaternary"></Segment>
          </Segment.Group>
        </Segment.Group>
      </Grid.Column>
      <Grid.Column computer={4} tablet={3} mobile={6}>
        <Segment.Group>
          <Segment inverted color="green" className="secondary" style={{height: "100px"}}></Segment>
          <Segment.Group horizontal>
            <Segment inverted color="green" className="tertiary"></Segment>
            <Segment inverted color="green" ></Segment>
            <Segment inverted color="green" className="quaternary"></Segment>
          </Segment.Group>
        </Segment.Group>
      </Grid.Column>

      <Grid.Column computer={4} tablet={3} mobile={6}>
        <Segment.Group>
          <Segment inverted color="purple" className="secondary" style={{height: "100px"}}></Segment>
          <Segment.Group horizontal>
            <Segment inverted color="purple" className="tertiary"></Segment>
            <Segment inverted color="purple" ></Segment>
            <Segment inverted color="purple" className="quaternary"></Segment>
          </Segment.Group>
        </Segment.Group>
      </Grid.Column>

      <Grid.Column computer={4} tablet={3} mobile={6}>
        <Segment.Group>
          <Segment inverted color="pink" className="secondary" style={{height: "100px"}}></Segment>
          <Segment.Group horizontal>
            <Segment inverted color="pink" className="tertiary"></Segment>
            <Segment inverted color="pink" ></Segment>
            <Segment inverted color="pink" className="quaternary"></Segment>
          </Segment.Group>
        </Segment.Group>
      </Grid.Column>

      <Grid.Column computer={4} tablet={3} mobile={6}>
        <Segment.Group>
          <Segment inverted color="blue" className="secondary" style={{height: "100px"}}></Segment>
          <Segment.Group horizontal>
            <Segment inverted color="blue" className="tertiary"></Segment>
            <Segment inverted color="blue" ></Segment>
            <Segment inverted color="blue" className="quaternary"></Segment>
          </Segment.Group>
        </Segment.Group>
      </Grid.Column>

      <Grid.Column computer={4} tablet={3} mobile={6}>
        <Segment.Group>
          <Segment inverted color="black" className="secondary" style={{height: "100px"}}></Segment>
          <Segment.Group horizontal>
            <Segment inverted color="black" className="tertiary"></Segment>
            <Segment inverted color="black" ></Segment>
            <Segment inverted color="black" className="quaternary"></Segment>
          </Segment.Group>
        </Segment.Group>
      </Grid.Column>

    </Grid>
  </Container>
);
