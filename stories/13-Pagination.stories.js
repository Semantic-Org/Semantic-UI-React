import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import React from 'react';
import { Container, Pagination, Grid } from 'semantic-ui-react'
import '!style-loader!css-loader!../themes/dist/sui-florence.css';

export default {
  title: 'Pagination',
};

export const pagination = () =>  (
  <Container>
    <Grid centered verticalAlign='middle' style={{height: '100vh'}}>
      <Grid.Column width={6} centered>
      
        <Pagination defaultActivePage={5} totalPages={10} />

      </Grid.Column>
    </Grid>
  </Container>
);
