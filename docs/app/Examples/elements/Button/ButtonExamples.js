import React, {Component} from 'react';
import Types from './Types/Types';
import States from './States/States';
import Variations from './Variations/Variations';
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection';

export default class extends Component {
  render() {
    return (
      <div>
        <ExampleSection title='Types'>
          <Types />
        </ExampleSection>
        <ExampleSection title='States'>
          <States />
        </ExampleSection>
        <ExampleSection title='Variations'>
          <Variations />
        </ExampleSection>
      </div>
    );
  }
}
