import React from 'react';
import Button from 'src/components/Button/Button';
import sandbox from 'test/utils/Sandbox-util';

describe('Button', () => {
  it('has type button by default', () => {
    let renderedButton = render(<Button />).findTag('button');
    renderedButton.props.type.should.equal('button');
    renderedButton.getDOMNode().getAttribute('type').should.equal('button');
  });
  it('renders "Click Here" by default', () => {
    render(<Button />).findText('Click Here');
  });
  it('has type of submit', () => {
    let renderedButton = render(<Button type='submit' />).findTag('button');
    renderedButton.props.type.should.equal('submit');
    renderedButton.getDOMNode().getAttribute('type').should.equal('submit');
  });
  it('renders its children', () => {
    render(<Button>Save Now</Button>).findText('Save Now');
  });
  it('should run passed in handleClick function', () => {
    let customHandleClick = sandbox.spy();
    let renderedButton = render(<Button type='submit' onClick={customHandleClick} />).findTag('button');
    let node = renderedButton.getDOMNode();
    React.addons.TestUtils.Simulate.click(node);
    customHandleClick.called.should.be.true;
  });
  it('should take in a color attribute', () => {
    let coloredButton = render(<Button color={'teal'}>Submit</Button>).findTag('button');
    coloredButton.props.className.should.contain('teal');
    coloredButton.getDOMNode().getAttribute('class').should.contain('teal');
  });
  it('should take in boolean attributes', () => {
    let disabledButton = render(<Button disabled>Submit</Button>).findTag('button');
    disabledButton.props.className.should.contain('disabled');
    disabledButton.getDOMNode().getAttribute('class').should.contain('disabled');
  });
  it('should ignore unknown attributes', () => {
    let unknownAttrButton = render(<Button fakeValue>Submit</Button>).findTag('button');
    unknownAttrButton.props.className.should.not.contain('fakeValue');
    unknownAttrButton.getDOMNode().getAttribute('class').should.not.contain('fakeValue');
  });
});
