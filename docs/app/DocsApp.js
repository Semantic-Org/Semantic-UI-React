import React, {Component} from 'react';
import {render} from 'react-dom';
import stardust, {Grid, Column} from 'stardust';

import ComponentDoc from 'docs/app/Components/ComponentDoc/ComponentDoc';
import BehaviorDoc from 'docs/app/Components/BehaviorDoc/BehaviorDoc';
import DocsMenu from 'Components/Sidebar/Sidebar';
import style from './Style';

class DocsApp extends Component {
  state = {menuSearch: ''};

  render() {
    const components = Object.keys(stardust)
      .sort()
      .map(name => <ComponentDoc key={name} name={name} />);

    const behaviors = ['FormValidation'];
    behaviors.forEach(behavior => {
      components.push(<BehaviorDoc key={behavior} name={behavior} />);
    });

    return (
      <div style={style.container}>
        <div style={style.menu}>
          <DocsMenu />
        </div>
        <div style={style.main}>
          <Grid className='padded'>
            <Column>
              {components}
            </Column>
          </Grid>
        </div>
      </div>
    );
  }
}

render(<DocsApp />, document.getElementById('root'));
