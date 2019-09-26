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

<div>
<Segment.Group>
  <Segment inverted color="yellow" className="secondary" style={{height: "100px"}}>Left</Segment>
  <Segment.Group horizontal>
    <Segment inverted color="yellow" className="tertiary">Left</Segment>
    <Segment inverted color="yellow" >Middle</Segment>
    <Segment inverted color="yellow" className="quaternary">Right</Segment>
  </Segment.Group>
</Segment.Group>

<Segment.Group>
  <Segment inverted color="green" className="secondary" style={{height: "100px"}}>Left</Segment>
  <Segment.Group horizontal>
    <Segment inverted color="green" className="tertiary">Left</Segment>
    <Segment inverted color="green" >Middle</Segment>
    <Segment inverted color="green" className="quaternary">Right</Segment>
  </Segment.Group>
</Segment.Group>

<Segment.Group>
  <Segment inverted color="purple" className="secondary" style={{height: "100px"}}>Left</Segment>
  <Segment.Group horizontal>
    <Segment inverted color="purple" className="tertiary">Left</Segment>
    <Segment inverted color="purple" >Middle</Segment>
    <Segment inverted color="purple" className="quaternary">Right</Segment>
  </Segment.Group>
</Segment.Group>

<Segment.Group>
  <Segment inverted color="pink" className="secondary" style={{height: "100px"}}>Left</Segment>
  <Segment.Group horizontal>
    <Segment inverted color="pink" className="tertiary">Left</Segment>
    <Segment inverted color="pink" >Middle</Segment>
    <Segment inverted color="pink" className="quaternary">Right</Segment>
  </Segment.Group>
</Segment.Group>

<Segment.Group>
  <Segment inverted color="blue" className="secondary" style={{height: "100px"}}>Left</Segment>
  <Segment.Group horizontal>
    <Segment inverted color="blue" className="tertiary">Left</Segment>
    <Segment inverted color="blue" >Middle</Segment>
    <Segment inverted color="blue" className="quaternary">Right</Segment>
  </Segment.Group>
</Segment.Group>

<Segment.Group>
  <Segment color="black" className="secondary" style={{height: "100px"}}>Left</Segment>
  <Segment.Group horizontal>
    <Segment color="black" className="tertiary">Left</Segment>
    <Segment color="black" >Middle</Segment>
    <Segment color="black" className="quaternary">Right</Segment>
  </Segment.Group>
</Segment.Group>
</div>
