import React, {Component, render} from 'react';
import ComponentList from './Component/ComponentList';
import Container from 'src/components/Container/Container';
import Grid from 'src/components/Grid/Grid';
import Column from 'src/components/Grid/Column';
import Icon from 'src/components/Icon/Icon';

class DocsApp extends Component {
  render() {
    return (
      <Container>
        <Grid>
          <Column>
            <h1 style={{textAlign: 'center'}}>
              <i className='icons'>
                <Icon className='mini violet loading star empty icon' />
                <Icon className='star empty violet icon' />
              </i>
              <i className='big icons'>
                <Icon className='mini violet loading star empty icon' />
                <Icon className='star empty violet icon' />
              </i>
              STARDUST
              <i className='big icons'>
                <Icon className='mini violet loading star empty icon' />
                <Icon className='star empty violet icon' />
              </i>
              <i className='icons'>
                <Icon className='mini violet loading star empty icon' />
                <Icon className='star empty violet icon' />
              </i>
            </h1>
            <ComponentList />
          </Column>
        </Grid>
      </Container>
    );
  }
}

render(<DocsApp />, document.body);
