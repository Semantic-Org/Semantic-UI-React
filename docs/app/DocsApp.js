import React, {Component, render} from 'react';
import {Grid, Column} from 'index';

import ComponentList from './Component/ComponentList';
<<<<<<< HEAD
import style from './Style';
import DocsMenu from './DocsMenu/DocsMenu';
=======
import Grid from 'src/components/Grid/Grid';
>>>>>>> render example code and components

class DocsApp extends Component {
  state = {menuSearch: ''};

  render() {
    return (
<<<<<<< HEAD
      <div style={style.container}>
        <div style={style.menu}>
          <DocsMenu />
        </div>
        <div style={style.main}>
          <Grid padded>
            <Column>
              <ComponentList />
            </Column>
          </Grid>
        </div>
      </div>
=======
      <Container>
        <Grid className='one column'>
          <Column>
            <ComponentList />
          </Column>
        </Grid>
      </Container>
>>>>>>> render example code and components
    );
  }
}

render(<DocsApp />, document.body);
