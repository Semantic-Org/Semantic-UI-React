import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import React from 'react';
import {  Container, Card, Grid } from 'semantic-ui-react'
import '!style-loader!css-loader!../themes/dist/sui-florence.css';

export default {
  title: 'Card',
};

export const card = () =>  (
  <Container>
    <Grid centered verticalAlign='middle' style={{height: '100vh'}}>
      <Grid.Column width={6}>

        <Card fluid centered>
          <Card.Content>
            <Card.Header>A card</Card.Header>
            <Card.Meta>With meta data</Card.Meta>
            <Card.Description>
              And a description
            </Card.Description>
          </Card.Content>
        </Card>

      </Grid.Column>
      <Grid.Column width={6}>

        <Card fluid color="purple" centered>
          <Card.Content>
            <Card.Header>A card with an outline</Card.Header>
            <Card.Meta>With meta data</Card.Meta>
            <Card.Description>
              And a description
            </Card.Description>
          </Card.Content>
        </Card>

      </Grid.Column>
    </Grid>
  </Container>

);
