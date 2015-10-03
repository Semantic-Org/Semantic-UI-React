import React, {Component, render} from 'react';
import ComponentList from './Component/ComponentList';
import Container from 'src/components/Container/Container';
import Grid from 'src/components/Grid/Grid';
import Column from 'src/components/Grid/Column';

class DocsApp extends Component {
  render() {
    return (
      <Container>
        <Grid>
          <Column>
            <h1>
              Stardust Components
            </h1>
            <ComponentList />
          </Column>
        </Grid>
      </Container>
    );
  }
}

render(<DocsApp />, document.body);
