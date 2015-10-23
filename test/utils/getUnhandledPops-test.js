import _ from 'lodash';
import getUnhandledProps from 'src/utils/getUnhandledProps';

// Helper class that takes in props and merges defaultProps
class TestClass {
  constructor(props) {
    this.props = _.assign({}, this.constructor.defaultProps, props);
    this.unhandledProps = getUnhandledProps(this);
  }
}

describe.only('getUnhandledProps', () => {
  it('removes props defined in defaultProps', () => {
    TestClass.defaultProps = {imHandled: 'thanks'};
    new TestClass()
      .unhandledProps
      .should.not.have.any.keys(_.keys(TestClass.defaultProps));
  });
  it('removes props defined in propTypes', () => {
    TestClass.propTypes = {imHandled: 'thanks'};
    new TestClass()
      .unhandledProps
      .should.not.have.any.keys(_.keys(TestClass.defaultProps));
  });
  it('leave props not in defaultProps || propTypes in tact', () => {
    TestClass.defaultProps = {imHandled: 'thanks'};
    TestClass.propTypes = {alsoHandled: 'got it'};
    const props = {thisShould: 'still be here'};
    new TestClass(props)
      .unhandledProps
      .should.eql(props);
  });
});
