import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import React from 'react';
import { Divider, Grid } from 'semantic-ui-react'
import '!style-loader!css-loader!../themes/dist/sui-florence.css';

export default {
  title: 'Divider',
};

export const divider = () =>  (
  <Grid centered verticalAlign='middle' columns={1} style={{height: '100vh'}}>
    <Grid.Column width={6} centered>

      <Divider section />
      <Divider section hidden/>
      <Divider horizontal section>
        A divider with text
      </Divider>

    </Grid.Column>
  </Grid>
);
