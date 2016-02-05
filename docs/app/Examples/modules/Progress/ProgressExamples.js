import React, {Component} from 'react';
import Types from './Types/Types';
import Content from './Content/Content';
import States from './States/States';

export default class ProgressExamples extends Component {
  render() {
    return (
      <div>
        <Types />
        <Content />
        <States />
      </div>
    );
  }
}
