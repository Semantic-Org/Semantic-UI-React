import React, {Component, render} from 'react';
import ComponentList from './Component/ComponentList';
import Container from 'src/components/Container/Container';
import Grid from 'src/components/Grid/Grid';
import Column from 'src/components/Grid/Column';
import Icon from 'src/components/Icon/Icon';

class DocsApp extends Component {
  render() {
    let colors = [
      'red',
      'green',
      'purple',
      'blue',
      'black',
      'brown',
      'teal',
      'pink',
      'olive',
      'yellow',
      'orange',
      'gray',
      'violet'
    ];
    let dust;
    dust = colors.map((color, index) => {
      return (
        <i className='icons' key={index}>
          <Icon className={'mini loading star empty icon ' + color} />
          <Icon className={'star empty icon ' + color} />
        </i>
      );
    });
    return (
      <Container>
        <Grid>
          <Column>
            <h1 style={{textAlign: 'center'}}>
              {dust}
              {dust}
            </h1>
            <h1 style={{textAlign: 'center', fontSize: '120px'}}>
              STARDUST
            </h1>
            <h1 style={{textAlign: 'center'}}>
              {dust}
              {dust}
            </h1>
            <ComponentList />
          </Column>
        </Grid>
      </Container>
    );
  }
}

render(<DocsApp />, document.body);
