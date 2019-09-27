import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import React from 'react';
import { Container, Segment, Icon, Header, Progress, Grid } from 'semantic-ui-react'
import '!style-loader!css-loader!../themes/dist/sui-florence.css';

export default {
  title: 'Upload',
};

export const upload = () =>  (
  <Container>
    <Grid centered verticalAlign='middle' style={{height: '100vh'}}>
      <Grid.Column width={6} centered>

        <Segment className="upload" textAlign="center">
          <Header as='h4' icon>
            <Icon color="grey" size="large" name='refresh' />
            Click/tap here to upload
          </Header>
        </Segment>

        <Segment className="upload" textAlign="center">
          <Header color="purple" as='h4' icon>
            <Icon loading color="purple" size="large" name='refresh' />
            Uploading...
          </Header>
          <Progress percent={50} attached='bottom' />
        </Segment>

      </Grid.Column>
      <Grid.Column width={6} centered>

        <Segment className="upload" textAlign="right">
          <Icon color="grey" name='file' />
          <Header floated="left" as='h4'>Click/tap here to upload</Header>
        </Segment>

        <Segment className="upload" textAlign="right">
          <Icon hidden color="grey" name='file' />
          <Header floated="left" color="purple" as='h4'>Uploading...</Header>
          <Progress percent={50} attached='bottom' />
        </Segment>

      </Grid.Column>
    </Grid>
  </Container>
);
