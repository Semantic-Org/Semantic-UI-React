import React from 'react';
import PageLayout from '../PageLayout/PageLayout';

describe('PageLayout', () => {
  it('has a heading', () => {
    render(<PageLayout heading='foo' />).findText('foo');
  });

  it('renders children', () => {
    let bodyContent = 'I am a child';
    render(
      <PageLayout heading='foo'>
        <div>{bodyContent}</div>
      </PageLayout>
    )
      .findText(bodyContent);
  });

  it('adds a stretched row when fitted is specified', () => {
    let tree = render(<PageLayout heading='foo' fitted />);
    tree.findClass('sd-row').should.be.a('object');
  });

  it('is not fitted by default', () => {
    function tryFindingStretchedRow() {
      let tree = render(<PageLayout heading='foo' />);
      // this should throw because there is no 'stretched row' found
      tree.findClass('stretched row');
    }

    expect(tryFindingStretchedRow).to.throw();
  });
});
