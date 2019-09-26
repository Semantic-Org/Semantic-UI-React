import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import React from 'react';
import { Popup, Button, Icon, Grid } from 'semantic-ui-react'
import '!style-loader!css-loader!../themes/dist/sui-florence.css';

export default {
  title: 'Tooltip',
};

export const tooltip = () =>  (
  <Grid verticalAlign='middle' columns={1} style={{height: '100vh'}}>
    <Grid.Column textAlign="center" centered>

    <Popup
         trigger={<Button content='Hover over me' />}
         content='Hello. This is a popup tooltip'
         inverted
         position='bottom center'
       />

    </Grid.Column>
  </Grid>
);
