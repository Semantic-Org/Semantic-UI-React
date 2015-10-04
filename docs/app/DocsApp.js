import React, {Component, render} from 'react';
import ComponentList from './Component/ComponentList';
import Header from './Component/Header';
import Container from 'src/components/Container/Container';
import Grid from 'src/components/Grid/Grid';
import Column from 'src/components/Grid/Column';

class DocsApp extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container>
          <Grid>
            <Column>
              <ComponentList />
            </Column>
          </Grid>
        </Container>
      </div>
    );
  }
}

render(<DocsApp />, document.body);
