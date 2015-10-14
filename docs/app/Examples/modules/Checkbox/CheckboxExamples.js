import React, {Component} from 'react';
import Types from './Types/Types';
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection';

export default class extends Component {
  render() {
    return (
      <div>
        <ExampleSection title='Types'>
          <Types />
        </ExampleSection>
      </div>
    );
  }
}
