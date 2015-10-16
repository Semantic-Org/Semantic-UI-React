import React, {Component, createElement, PropTypes} from 'react';
import {Grid, Column, Button} from 'stardust';
import Highlight from 'react-highlight';
import exampleContext from 'docs/app/utils/ExampleContext';

/**
 * Renders a `component` and the raw `code` that produced it.
 * Allows toggling the the raw `code` code block.
 */
export default class ComponentExample extends Component {
  static propTypes = {
    description: PropTypes.string,
    examplePath: PropTypes.string.isRequired,
    title: PropTypes.string,
  };

  state = {showCode: false};
  fileContents = require(`!raw!docs/app/Examples/${this.props.examplePath}`);
  component = exampleContext(`./${this.props.examplePath}.js`);

  toggleShowCode = () => {
    this.setState({showCode: !this.state.showCode});
  };

  render() {
    let code = (
      <Column>
        <Highlight className='language-javascript'>
          {this.fileContents}
        </Highlight>
      </Column>
    );

    return (
      <Grid className='one column' style={{marginBottom: '4em', marginTop: '4em'}}>
        <Column>
          <Grid>
            <Column width={12}>
              <h3 className='ui header' style={{marginBottom: 0}}>
                {this.props.title}
              </h3>
              <p>{this.props.description}</p>
            </Column>
            <Column width={4} className='right aligned'>
              <Button className='basic mini labeled icon' onClick={this.toggleShowCode}>
                code
                <i className='code icon' />
              </Button>
            </Column>
          </Grid>
        </Column>

        <Column>
          {createElement(this.component)}
        </Column>
        {this.state.showCode && code}
      </Grid>
    );
  }
}
