import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import React from 'react';
import { Button, Icon, Grid } from 'semantic-ui-react'
import '!style-loader!css-loader!../themes/dist/sui-florence.css';

export default {
  title: 'Button',
};

export const button = () =>  (
  <Grid verticalAlign='middle' columns={1} style={{height: '100vh'}}>
    <Grid.Column textAlign="center">
      <Button>Hello Florence</Button>
    </Grid.Column>
  </Grid>
);

storiesOf('Button', module).add('Colours', () => (
    <Grid verticalAlign='middle' columns={1} style={{height: '100vh'}}>
      <Grid.Column textAlign="center">
        <Button color="yellow">Yellow</Button>
        <Button color="pink">Pink</Button>
        <Button color="green">Green</Button>
        <Button color="blue">Blue</Button>
        <Button color="purple">Purple</Button>
        <Button color="grey">Grey</Button>
      </Grid.Column>
    </Grid>
));

storiesOf('Button', module).add('Icons', () => (
    <Grid verticalAlign='middle' columns={1} style={{height: '100vh'}}>
      <Grid.Column textAlign="center">
        <Button icon color="purple">
          <Icon name='add' />
          Icon
        </Button>
        <Button basic icon color="purple">
          <Icon name='add' />
          Icon
        </Button>
      </Grid.Column>
    </Grid>
));

storiesOf('Button', module).add('Disabled', () => (
    <Grid verticalAlign='middle' columns={1} style={{height: '100vh'}}>
      <Grid.Column textAlign="center">
        <Button disabled icon color="purple">
          Disabled
        </Button>
        <Button disabled basic icon color="purple">
          <Icon name='add' />
          Icon
        </Button>
      </Grid.Column>
    </Grid>
));
