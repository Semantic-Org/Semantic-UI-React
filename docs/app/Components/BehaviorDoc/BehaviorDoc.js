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

const FIELDS = new Map([
  ['name', {rules: [
    {type: 'empty', prompt: 'Please enter your name'},
  ]}],
  ['skills', {rules: [
    {type: 'minCount[2]', prompt: 'Please select at least two skills'},
  ]}],
  ['gender', {rules: [
    {type: 'empty', prompt: 'Please select a gender'},
  ]}],
  ['username', {rules: [
      {type: 'empty', prompt: 'Please enter a username'},
  ]}],
  ['password', {rules: [
    {type: 'empty', prompt: 'Please enter a password'},
    {type: 'minLength[6]', prompt: 'Your password must be at least {ruleValue} characters'},
  ]}],
  ['terms', {rules: [
    {type: 'checked', prompt: 'You must agree to the terms and conditions'},
  ]}]
]);

// TODO: Add BehaviorExample component
// TODO: Confirm validaiton rules Message is correct WRT use of data attributes
export default class BehaviorDoc extends Component {
  static propTypes = {
    name: PropTypes.string,
  };

  validateForm() {
    for (const [key, value] of FIELDS) {
      return [this.refs[key], value];
    }
  }

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
                    <Input
                      ref='name'
                      name='name'
                      placeholder='First Name'
                    />
                  </Field>
                  <Field label='Gender'>
                    <Dropdown
                      ref='gender'
                      name='gender'
                      className='compact selection'
                      options={DROPDOWN_GENDER_OPTIONS}
                    />
                  </Field>
                </Fields>
                <Fields evenlyDivided>
                  <Field label='Username'>
                    <Input
                      ref='username'
                      name='username'
                      placeholder='Username'
                    />
                  </Field>
                  <Field label='Password'>
                    <Input
                      ref='password'
                      name='password'
                      pattern='(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$'
                      placeholder='i*6}G[q9<[3TUbt%'
                      type='password'
                      required
                    />
                    <div className='ui pointing label'>
                      Must contain uppercase and lowercase characters, at least one number or special character, and be
                      a minimum of 8 characters in length.
                    </div>
                  </Field>
                </Fields>
                <Field label='Skills'>
                  <Dropdown
                    ref='skills'
                    name='skills'
                    className='compact selection'
                    options={DROPDOWN_SKILLS_OPTIONS}
                  />
                </Field>
                <Field>
                  <Checkbox
                    ref='terms'
                    name='terms'
                    label='I agree to the Terms and Conditions'
                  />
                </Field>
              </fieldset>
              <Divider />
              <Button type='submit' onClick={this.validateForm.bind(this)}>Submit</Button>
            </Form>
          </Segment>
        </Segment>
      </Segment>
    );
  }
}
