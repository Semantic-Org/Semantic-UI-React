import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import React from 'react';
import { Divider, Grid } from 'semantic-ui-react'
import '!style-loader!css-loader!../themes/dist/sui-florence.css';

export default {
  title: 'Typography',
};

export const all = () =>  (
  <Grid centered verticalAlign='middle' columns={1} style={{height: '100vh'}}>
    <Grid.Column width={4} centered>
      <h5>Desktop</h5>

      <h1>Heading One</h1>
      <h2>Heading Two</h2>
      <h3>Heading Three</h3>
      <h4>Heading Four</h4>
      <h5>Heading Five</h5>
      <p>Paragraph</p>
      <p><a>Link</a></p>
    </Grid.Column>
    <Grid.Column width={4} centered>
      <h5>Mobile</h5>

      <h1>Heading One</h1>
      <h2>Heading Two</h2>
      <h3>Heading Three</h3>
      <h4>Heading Four</h4>
      <h5>Heading Five</h5>
      <p>Paragraph</p>
      <p><a>Link</a></p>
    </Grid.Column>
  </Grid>
);
