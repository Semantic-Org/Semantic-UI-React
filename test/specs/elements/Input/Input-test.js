import React from 'react';
import {Input} from 'stardust';

describe('Input', () => {
  it('has the input type of text by default', () => {
    render(<Input />)
      .findTag('input')
      .getAttribute('type')
      .should.equal('text');
  });

  it('allows a defaultValue', () => {
    render(<Input defaultValue='John' />)
      .findTag('input')
      .value.should.equal('John');
  });

  it('spreads type on the input element', () => {
    render(<Input type='phone' />)
      .findTag('input')
      .getAttribute('type')
      .should.equal('phone');
  });

  it('spreads name on the input element', () => {
    render(<Input name='emailAddress' />)
      .findTag('input')
      .getAttribute('name')
      .should.equal('emailAddress');
  });

  it('adds an icon element given an icon class and prop', () => {
    render(<Input className='icon' icon='linkedin' />)
      .findTag('i');
  });
});
