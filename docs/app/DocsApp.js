import React, {Component, render} from 'react';
import {Column, Container, Grid} from 'index';
import ComponentList from './Component/ComponentList';

class DocsApp extends Component {
  render() {
    return (
      <Container>
        <Grid className='one column'>
          <Column>
            <ComponentList />
          </Column>
        </Grid>
      </Container>
    );
  }
}

render(<DocsApp />, document.body);
