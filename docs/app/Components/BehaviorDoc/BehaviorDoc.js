import React, {Component, PropTypes} from 'react';
import {Buttons, Button, Header, Message, Segment} from 'stardust';

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
        </Segment>
      </Segment>
    );
  }
}
