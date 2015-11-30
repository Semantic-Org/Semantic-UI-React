import React, {Component, PropTypes} from 'react';
import {Segment} from 'stardust';

export default class BehaviorDoc extends Component {
  static propTypes = {
    name: PropTypes.string,
  };

  render() {
    return (
      <Segment>
        Behavior documentation
      </Segment>
    );
  }
}
