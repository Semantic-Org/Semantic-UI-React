import React from 'react';
import sandbox from 'test/utils/Sandbox-util';
import {Button} from 'stardust';

describe('Button', () => {
  it('has type button by default', () => {
    const renderedButton = render(<Button />).findTag('button');
    renderedButton.props.type.should.equal('button');
    renderedButton.getDOMNode().getAttribute('type').should.equal('button');
  });
  it('renders "Click Here" by default', () => {
    render(<Button />).findText('Click Here');
  });
  it('has type of submit', () => {
    const renderedButton = render(<Button type='submit' />).findTag('button');
    renderedButton.props.type.should.equal('submit');
    renderedButton.getDOMNode().getAttribute('type').should.equal('submit');
  });
  it('renders its children', () => {
    render(<Button>Save Now</Button>).findText('Save Now');
  });
  it('should run passed in handleClick function', () => {
    const customHandleClick = sandbox.spy();
    const renderedButton = render(<Button type='submit' onClick={customHandleClick} />).findTag('button');
    const node = renderedButton.getDOMNode();
    React.addons.TestUtils.Simulate.click(node);
    customHandleClick.called.should.be.true;
  });
});
