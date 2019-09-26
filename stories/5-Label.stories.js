import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import React from 'react';
import { Label, Divider, Icon, Grid } from 'semantic-ui-react'
import '!style-loader!css-loader!../themes/dist/sui-florence.css';

export default {
  title: 'Label',
};

export const label = () =>  (
  <Grid verticalAlign='middle' columns={1} style={{height: '100vh'}}>
    <Grid.Column textAlign="center" centered>

      <Label color='green'>
        Green
      </Label>

      <Label color='pink'>
        Pink
      </Label>

      <Label>
        Default
      </Label>

      <Label color='black'>
        Black
      </Label>

      <Label icon="file" color='yellow'/>

      <Label>
        Icon
        <Icon name="clock outline"/>
      </Label>

    </Grid.Column>
  </Grid>
);
