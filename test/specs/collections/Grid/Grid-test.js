import React from 'react';
import faker from 'faker';
import Grid from 'src/collections/Grid/Grid';

describe('Grid', () => {
  it('is an sd-grid', () => {
    let gridClassName = render(<Grid />).findClass('sd-grid').props.className;
    gridClassName.should.contain('sd-grid');
    let nodeClass = render(<Grid />).findClass('sd-grid').getDOMNode().getAttribute('class');
    nodeClass.should.contain('sd-grid');
  });

  it('inherits classes', () => {
    // generate crap classes like "system firewall protocol"
    let classes = _.times(_.random(3), faker.hacker.noun).join(' ');

    let renderedGridClasses = render(<Grid className={classes} />)
      .findClass('sd-grid')
      .getDOMNode()
      .getAttribute('class');
    renderedGridClasses.should.contain(classes);
  });

  it('inherits style', () => {
    let style = {display: 'block'};
    render(<Grid style={style} />).findClass('sd-grid').props.style.should.deep.equal(style);
  });

  it('renders its children', () => {
    render(<Grid><br /></Grid>).findClass('sd-grid').props.children.type.should.equal('br');
  });

  it('text example', () => {
    render(
      <Grid>
        root
        <div>div1</div>
        <div>div2</div>
        after
        <div className='nested'>
          child div
          <div>nested child div</div>
        </div>
      </Grid>
    )
      .findText('root');
  });
});
