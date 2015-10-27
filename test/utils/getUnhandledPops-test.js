import _ from 'lodash';
import getUnhandledProps from 'src/utils/getUnhandledProps';

// Helper class that takes in props and merges defaultProps
class TestClass {
  constructor(props) {
    this.props = _.assign({}, this.constructor.defaultProps, props);
    this.unhandledProps = getUnhandledProps(this);
  }
}

describe('getUnhandledProps', () => {
  it('removes props defined in propTypes', () => {
    TestClass.propTypes = {removeMe: 'thanks'};
    new TestClass()
      .unhandledProps
      .should.not.have.any.keys(_.keys(TestClass.propTypes));
  });
  it('leaves props if not defined in propTypes', () => {
    const userProps = {leaveThis: 'because it is unhandled'};
    TestClass.propTypes = {removeMe: 'because we are handling it'};
    const unhandled = new TestClass(userProps).unhandledProps;

    unhandled.should.not.have.any.keys(_.keys(TestClass.propTypes));
    unhandled.should.have.all.keys(_.keys(userProps));
  });
  it('leaves propType props if also defined in defaultProps', () => {
    TestClass.propTypes = {leaveMe: 'because it is also in defaultProps'};
    TestClass.defaultProps = {leaveMe: 'here i am'};
    const unhandled = new TestClass().unhandledProps;

    unhandled.should.have.all.keys(_.keys(TestClass.defaultProps));
  });
});
