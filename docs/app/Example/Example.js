import React, {Component, createElement, PropTypes} from 'react';
import {Grid, Column, Segment, Button} from 'stardust';
import Highlight from 'react-highlight/index';

/**
 * Renders a `component` and the raw `code` that produced it.
 */
export default class extends Component {
  static propTypes = {
    /**
     * The raw string of code that created the component.
     */
    code: PropTypes.string,
    /**
     * A React Component demonstrating how to use a component.
     */
    component: PropTypes.node,
  };

  state = {showCode: false};

  toggleShowCode = () => {
    this.setState({showCode: !this.state.showCode});
  };

  render() {
    let code = (
      <Highlight className='language-javascript'>
        {this.props.code}
      </Highlight>
    );

    return (
      <Segment className='vertical'>
        <Grid className='one column'>
          <Column>
            <Segment className='right aligned basic vertical'>
              <Button className='basic mini labeled icon' onClick={this.toggleShowCode}>
                Code
                <i className='code icon' />
              </Button>
            </Segment>
            {createElement(this.props.component)}
          </Column>
        </Grid>
        {this.state.showCode && code}
      </Segment>
    );
  }
}
