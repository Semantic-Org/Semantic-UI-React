import React, {Component} from 'react';
import {Progress} from 'stardust';

export default class ProgressStandardExample extends Component {
  render() {
    return (
      <div>
        <Progress
          percent={32}
          showActivity={false}
        >
          Standard Progress Bar
        </Progress>
      </div>
    );
  }
}
