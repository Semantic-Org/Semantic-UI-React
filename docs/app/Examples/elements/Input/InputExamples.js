import React, {Component} from 'react';
import InputTypesExamples from './Types/InputTypesExamples';
import InputStatesExamples from './States/InputStatesExamples';
import InputVariationsExamples from './Variations/InputVariationsExamples';

export default class InputExamples extends Component {
  render() {
    return (
      <div>
        <InputTypesExamples />
        <InputStatesExamples />
        <InputVariationsExamples />
      </div>
    );
  }
}
