import React, {Component, render} from 'react';
import {Grid, Column} from 'index';

import ComponentList from './Component/ComponentList';
import style from './Style';
import DocsMenu from './DocsMenu/DocsMenu';

class DocsApp extends Component {
  state = {menuSearch: ''};

  render() {
    return (
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
    );
  }
}

render(<DocsApp />, document.body);
