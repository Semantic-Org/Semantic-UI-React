import React, {Component, PropTypes} from 'react';

import {
  Button,
  Buttons,
  Checkbox,
  Divider,
  Dropdown,
  Field,
  Fields,
  Form,
  Header,
  Input,
  Message,
  Segment,
} from 'stardust';

const DROPDOWN_GENDER_OPTIONS = [
  {value: 'female', text: 'Female'},
  {value: 'male', text: 'Male'},
];

const DROPDOWN_SKILLS_OPTIONS = [
  {value: 'css', text: 'CSS'},
  {value: 'html', text: 'HTML'},
  {value: 'graphic_design', text: 'Graphic Design'},
  {value: 'plumbing', text: 'Plumbing'},
  {value: 'mechanical_engineering', text: 'Mechanical Engineering'},
  {value: 'kitchen_repair', text: 'Kitchen Repair'},
];

// TODO: Add BehaviorExample component
// TODO: Confirm validaiton rules Message is correct WRT use of data attributes
export default class BehaviorDoc extends Component {
  static propTypes = {
    name: PropTypes.string,
  };

  render() {
    return (
      <Segment>
        <Segment className='vertical'>
          <Header.H1>
            Form Validation
            <Header.Subheader>
              A form validation behavior checks data against a set of criteria before passing it along to the server.
            </Header.Subheader>
          </Header.H1>
          <Buttons className='basic fluid'>
            <Button>Usage</Button>
            <Button>Examples</Button>
            <Button>Settings</Button>
          </Buttons>
        </Segment>
        <Segment className='vertical'>
          <Header.H2 className='dividing'>
            Usage
          </Header.H2>
          <Header.H3>
            Specifying Validation Rules
            <Header.Subheader>
              Form validation requires passing in a validation object with the rules required to validate your form.
            </Header.Subheader>
          </Header.H3>
          <Message className='info'>
            A validation object includes a list of form elements, and rules to validate each field against.
            Fields are matched by either the <code>id</code>, <code>name</code>, or <code>data-validate</code> property
            matching the identifier specified in the settings object.
          </Message>
          <Segment>
            <div className='ui attached top label'>
              <strong>Shorthand validation</strong>
              <em style={{float: 'right'}}>JSX</em>
            </div>
            <pre>
              ...
            </pre>
          </Segment>
          <div className='ui horizontal divider'>or</div>
          <Segment>
            <div className='ui attached top label'>
              <strong>Full validation settings</strong>
              <em style={{float: 'right'}}>JSX</em>
            </div>
            <pre>
              ...
            </pre>
          </Segment>
          <Segment>
            <p>Tell us a little something about yourself.</p>
            <Form>
              <fieldset>
                <legend>
                  <Header.H3>About Me</Header.H3>
                </legend>
                <Fields evenlyDivided>
                  <Field label='Name'>
                    <Input placeholder='First Name' />
                  </Field>
                  <Field label='Gender'>
                    <Dropdown className='compact selection' options={DROPDOWN_GENDER_OPTIONS} />
                  </Field>
                </Fields>
                <Fields evenlyDivided>
                  <Field label='Username'>
                    <Input placeholder='Username' />
                  </Field>
                  <Field label='Password'>
                    <Input
                      placeholder='i*6}G[q9<[3TUbt%'
                      type='password'
                      errorText='Your password must be at least 6 characters'
                      required
                    />
                  </Field>
                </Fields>
                <Field label='Skills'>
                  <Dropdown className='compact selection' options={DROPDOWN_SKILLS_OPTIONS} />
                </Field>
                <Field>
                  <Checkbox label='I agree to the Terms and Conditions' />
                </Field>
              </fieldset>
              <Divider />
              <Button type='submit'>Submit</Button>
            </Form>
          </Segment>
        </Segment>
      </Segment>
    );
  }
}
