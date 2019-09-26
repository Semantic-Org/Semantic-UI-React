import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import React from 'react';
import { Input, Icon, Divider, Grid } from 'semantic-ui-react'
import '!style-loader!css-loader!../themes/dist/sui-florence.css';

export default {
  title: 'Input',
};

export const input = () => (
  <Grid verticalAlign='middle' columns={1} style={{height: '100vh'}}>
    <Grid.Column textAlign="center">
      <Input placeholder='Placeholder' />
    </Grid.Column>
  </Grid>
);

storiesOf('Input', module).add('Focused', () => (
    <Grid verticalAlign='middle' columns={1} style={{height: '100vh'}}>
      <Grid.Column textAlign="center">
        <Input focus placeholder='Placeholder' />
      </Grid.Column>
    </Grid>
));

storiesOf('Input', module).add('States', () => (
    <Grid centered verticalAlign='middle' columns={1} style={{height: '100vh'}}>
      <Grid.Column width={6} textAlign="center">
        <Input icon='close' error placeholder='Error'/>
        <Divider hidden/>
        <Input icon='warning sign' className="warning" placeholder='Warning'/>
        <Divider hidden/>
        <Input icon='check' className="success" placeholder='Success'/>
      </Grid.Column>
    </Grid>
));

storiesOf('Input', module).add('Numbers', () => (
    <Grid centered verticalAlign='middle' columns={1} style={{height: '100vh'}}>
      <Grid.Column width={6} textAlign="center">
        <Input icon='close' error placeholder='Error'/>
        <Divider hidden/>
        <Input icon='warning sign' className="warning" placeholder='Warning'/>
        <Divider hidden/>
        <Input icon='check' className="success" placeholder='Success'/>
      </Grid.Column>
    </Grid>
));
