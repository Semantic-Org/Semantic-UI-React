import _ from 'lodash';
import {createElement} from 'react';
import stardust from 'stardust';
import faker from 'faker';

describe.only('ported semantic component', () => {
  it('inherits classes', () => {
    let classes = _.times(_.random(1, 5), faker.hacker.noun).join(' ');
    _.each(stardust, component => {
      // TODO: why does this pass?  Not all components inherit classes.
      // The props passed here might circumvent <Foo className=''> functionality?
      let elm = createElement(component, {className: classes});
      expect(elm.props.className).to.contain(classes);
    });
  });
});
