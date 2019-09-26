import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import React from 'react';
import { Form, Input, Icon, Divider, TextArea, Grid } from 'semantic-ui-react'
import '!style-loader!css-loader!../themes/dist/sui-florence.css';

export default {
  title: 'Input',
};

export const input = () => (
  <Grid verticalAlign='middle' centered style={{height: '100vh'}}>
    <Grid.Column width={4} >

      <Form>
        <Form.Field>
          <label for="input">First Name</label>
          <Input id="input" placeholder='Placeholder' />
        </Form.Field>
        <Form.Field>
          <label for="focussed">First Name</label>
          <Input focus id="focussed" placeholder='Placeholder' />
        </Form.Field>
      </Form>

    </Grid.Column>
  </Grid>
);

storiesOf('Input', module).add('States', () => (
  <Grid centered verticalAlign='middle' columns={1} style={{height: '100vh'}}>
    <Grid.Column width={4}>

    <Form>
      <Form.Field>
        <label for="error">Label</label>
        <span class="error">Please enter a valid email address</span>
        <Input id="error" icon='close' error placeholder='Error'/>
      </Form.Field>
      <Form.Field>
        <label for="warning">Warning</label>
        <Input id="warning" icon='warning sign' className="warning" placeholder='Warning'/>
      </Form.Field>
      <Form.Field>
        <label for="success">Success</label>
        <Input id="success" icon='check' className="success" placeholder='Success'/>
      </Form.Field>
    </Form>

    </Grid.Column>
  </Grid>
));

storiesOf('Input', module).add('Numbers', () => (
  <Grid centered verticalAlign='middle' columns={1} style={{height: '100vh'}}>
    <Grid.Column width={4}>

    <Form>
      <Form.Field>
        <label for="numbers">Success</label>
        <Input icon='numbers' placeholder='Numbers'/>
      </Form.Field>
    </Form>

    </Grid.Column>
  </Grid>
));

storiesOf('Input', module).add('Text Area', () => (
  <Grid centered verticalAlign='middle' columns={1} style={{height: '100vh'}}>
    <Grid.Column width={4}>

    <Form>
      <Form.Field>
        <label for="numbers">Text area</label>
        <TextArea placeholder='Tell us more' />
      </Form.Field>
    </Form>

    </Grid.Column>
  </Grid>
));
