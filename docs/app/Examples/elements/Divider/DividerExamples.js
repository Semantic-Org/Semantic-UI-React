import React, {Component} from 'react';
import DividerTypesExamples from './Types/DividerTypesExamples';
import DividerVariationsExamples from './Variations/DividerVariationsExamples';

export default class DividerExamples extends Component {
  render() {
    return (
      <div>
        <DividerTypesExamples />
        <DividerVariationsExamples />
      </div>
    );
  }
}
