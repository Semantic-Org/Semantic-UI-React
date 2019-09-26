import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import React from 'react';
import { Progress, Divider, Grid } from 'semantic-ui-react'
import '!style-loader!css-loader!../themes/dist/sui-florence.css';

export default {
  title: 'Progress',
};

export const progress = () =>  (
  <Grid centered verticalAlign='middle' columns={1} style={{height: '100vh'}}>
    <Grid.Column width={6} centered>
      <Progress size='small' percent={55}>55%</Progress>
    </Grid.Column>
  </Grid>
);

storiesOf('Progress', module).add('States', () => (
    <Grid centered verticalAlign='middle' columns={1} style={{height: '100vh'}}>
      <Grid.Column width={6}>
        <Progress size='small' success percent={100}>100%</Progress>
        <Divider hidden/>
        <Progress size='small' error percent={55}>Error</Progress>
      </Grid.Column>
    </Grid>
));
