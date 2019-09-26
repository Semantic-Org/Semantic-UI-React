import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import React from 'react';
import { Container, Dropdown, Grid } from 'semantic-ui-react'
import '!style-loader!css-loader!../themes/dist/sui-florence.css';

export default {
  title: 'Dropdown',
};

// example data
const options = [
  { key: 'angular', text: 'Angular', value: 'angular' },
  { key: 'css', text: 'CSS', value: 'css' },
  { key: 'design', text: 'Graphic Design', value: 'design' },
  { key: 'ember', text: 'Ember', value: 'ember' },
  { key: 'html', text: 'HTML', value: 'html' },
  { key: 'ia', text: 'Information Architecture', value: 'ia' },
  { key: 'javascript', text: 'Javascript', value: 'javascript' },
  { key: 'mech', text: 'Mechanical Engineering', value: 'mech' },
  { key: 'meteor', text: 'Meteor', value: 'meteor' },
  { key: 'node', text: 'NodeJS', value: 'node' },
  { key: 'plumbing', text: 'Plumbing', value: 'plumbing' },
  { key: 'python', text: 'Python', value: 'python' },
  { key: 'rails', text: 'Rails', value: 'rails' },
  { key: 'react', text: 'React', value: 'react' },
  { key: 'repair', text: 'Kitchen Repair', value: 'repair' },
  { key: 'ruby', text: 'Ruby', value: 'ruby' },
  { key: 'ui', text: 'UI Design', value: 'ui' },
  { key: 'ux', text: 'User Experience', value: 'ux' },
]

export const dropdown = () =>  (
  <Container>
    <Grid centered verticalAlign='middle' style={{height: '100vh'}}>
      <Grid.Column width={6} centered>

      <Dropdown
          placeholder='Select Friend'
          fluid
          selection
          options={options}
        />
      </Grid.Column>

    </Grid>
  </Container>
);

storiesOf('Dropdown', module).add('Multiple', () => (
    <Grid centered verticalAlign='middle' columns={1} style={{height: '100vh'}}>
      <Grid.Column width={6}>

        <Dropdown placeholder='Skills' fluid multiple selection options={options} />

      </Grid.Column>
    </Grid>
));
