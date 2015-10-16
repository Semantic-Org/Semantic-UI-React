import React, {Component} from 'react';
import Types from './Types/Types';
import States from './States/States';
import Variations from './Variations/Variations';

export default class InputExamples extends Component {
  render() {
    return (
      <div>
        <Types />
        <States />
        <Variations />
      </div>
    );
  }
}
