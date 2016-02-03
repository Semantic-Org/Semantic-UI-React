import React, {Component} from 'react';
import {Progress} from 'stardust';

export default class ProgressStandardExample extends Component {
  render() {
    return (
      <Progress percent={20}>
        Standard Progress Bar
      </Progress>
    );
  }
}
