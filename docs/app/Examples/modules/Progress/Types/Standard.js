import React, {Component} from 'react';
import {Progress, Button} from 'stardust';
import cx from 'classnames';

export default class ProgressStandardExample extends Component {
  state = {
    percent: 50,
    hasError: true,
  };

  render() {
    const {percent, hasError} = this.state;
    return (
      <div>
        <Button onClick={() => this.setState({
          percent: Math.random() * 100,
        })}
        >
          add percent
        </Button>
        <Button onClick={() => this.setState({hasError: !hasError})}>
          {hasError ? 'Remove' : 'Create'} Error
        </Button>
        <Progress
          className={cx({error: hasError})}
          percent={percent}
          showActivity={false}
        >
          Standard Progress Bar
        </Progress>
      </div>
    );
  }
}
