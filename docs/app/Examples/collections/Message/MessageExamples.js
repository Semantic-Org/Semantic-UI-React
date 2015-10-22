import React, {Component} from 'react';
import MessageStatesExamples from './States/MessageStatesExamples';
import MessageTypesExamples from './Types/MessageTypesExamples';
import MessageVariationsExamples from './Variations/MessageVariationsExamples';

export default class MessageExamples extends Component {
  render() {
    return (
      <div>
        <MessageTypesExamples />
        <MessageStatesExamples />
        <MessageVariationsExamples />
      </div>
    );
  }
}
