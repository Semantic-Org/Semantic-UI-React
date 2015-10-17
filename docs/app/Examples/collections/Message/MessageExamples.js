import React, {Component} from 'react';
import Variations from './Variations/Variations';
import Types from './Types/Types';

export default class MessageExamples extends Component {
  render() {
    return (
      <div>
        <Types />
        <Variations />
      </div>
    );
  }
}
