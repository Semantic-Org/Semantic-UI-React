import React, {Component, render} from 'react';
import ComponentList from './Component/ComponentList';

class DocsApp extends Component {
  render() {
    return (
      <div className='ui page container'>
        <div className='ui equal width grid'>
          <div className='column'>
            <h1 className='ui header'>
              Stardust Components
            </h1>
            <ComponentList />
          </div>
        </div>
      </div>
    );
  }
}

render(<DocsApp />, document.body);
