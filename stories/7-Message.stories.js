import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import React from 'react';
import { Divider, Message, Icon, Grid } from 'semantic-ui-react'
import '!style-loader!css-loader!../themes/dist/sui-florence.css';

export default {
  title: 'Message',
};

export const message = () =>  (
  <Grid centered verticalAlign='middle' columns={1} style={{height: '100vh'}}>
    <Grid.Column width={6} centered>

      <Message>
        <Message.Header>A default message</Message.Header>
      </Message>

    </Grid.Column>
  </Grid>
);


storiesOf('Message', module).add('States', () => (
    <Grid centered verticalAlign='middle' columns={1} style={{height: '100vh'}}>
      <Grid.Column width={6}>

        <Message success>
          <Message.Header>A success message</Message.Header>
        </Message>

        <Divider hidden/>

        <Message error>
          <Message.Header>An error message</Message.Header>
        </Message>
        <Divider hidden/>

        <Message warning>
          <Message.Header>A warning message</Message.Header>
        </Message>

      </Grid.Column>
    </Grid>
));
