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
      <Grid.Column mobile={6} tablet={4} computer={2} centered>
        <Grid>
          <Grid.Column width={12} color="yellow" style={{height: '100px'}} />
          <Grid.Row>
            <Grid.Column width={4} color="yellow" tertiary />
            <Grid.Column width={4} color="yellow" secondary  />
            <Grid.Column width={4} color="yellow" quaternary />
          </Grid.Row>
        </Grid>
      </Grid.Column>
      <Grid.Column mobile={6} tablet={4} computer={2} centered>
        <Grid>
          <Grid.Column width={12} color="green" style={{height: '100px'}} />
          <Grid.Row>
            <Grid.Column width={4} color="green" tertiary />
            <Grid.Column width={4} color="green" secondary  />
            <Grid.Column width={4} color="green" quaternary />
          </Grid.Row>
        </Grid>
      </Grid.Column>
      <Grid.Column mobile={6} tablet={4} computer={2} centered>
        <Grid>
          <Grid.Column width={12} color="purple" style={{height: '100px'}} />
          <Grid.Row>
            <Grid.Column width={4} color="purple" tertiary />
            <Grid.Column width={4} color="purple" secondary  />
            <Grid.Column width={4} color="purple" quaternary />
          </Grid.Row>
        </Grid>
      </Grid.Column>
      <Grid.Column mobile={6} tablet={4} computer={2} centered>
        <Grid>
          <Grid.Column width={12} color="pink" style={{height: '100px'}} />
          <Grid.Row>
            <Grid.Column width={4} color="pink" tertiary />
            <Grid.Column width={4} color="pink" secondary  />
            <Grid.Column width={4} color="pink" quaternary />
          </Grid.Row>
        </Grid>
      </Grid.Column>
      <Grid.Column mobile={6} tablet={4} computer={2} centered>
        <Grid>
          <Grid.Column width={12} color="blue" style={{height: '100px'}} />
          <Grid.Row>
            <Grid.Column width={4} color="blue" tertiary />
            <Grid.Column width={4} color="blue" secondary  />
            <Grid.Column width={4} color="blue" quaternary />
          </Grid.Row>
        </Grid>
      </Grid.Column>
      <Grid.Column mobile={6} tablet={4} computer={2} centered>
        <Grid>
          <Grid.Column color="black" width={12} style={{height: '100px'}}/>
          <Grid.Row>
            <Grid.Column width={4} color="black" tertiary />
            <Grid.Column width={4} color="black" secondary  />
            <Grid.Column width={4} color="black" quaternary />
          </Grid.Row>
        </Grid>
      </Grid.Column>
    </Grid>
  </Container>
);
