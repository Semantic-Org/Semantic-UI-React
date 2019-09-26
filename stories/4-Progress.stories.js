import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import React from 'react';
import { Progress, Divider, Grid } from 'semantic-ui-react'
import '!style-loader!css-loader!../themes/dist/sui-florence.css';

export default {
  title: 'Progress',
};

export const progress = () => (
  <Grid centered verticalAlign='middle' columns={1} style={{height: '100vh'}}>
    <Grid.Column width={6}>

      <Progress size='small' percent={0}>0%</Progress>
      <Divider hidden/>
      <Progress size='small' percent={50}>50%</Progress>
      <Divider hidden/>
      <Progress size='small' success percent={100}>100%</Progress>

    </Grid.Column>
  </Grid>
);
