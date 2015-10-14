import _ from 'lodash';
import React from 'react';
import stardust from 'stardust';
import faker from 'faker';

/**
 * This test ensures all Stardust components conform to our guidelines.
 */
describe('Conformance', () => {
  _.each(stardust, (SDComponent, name) => {
    let classes = faker.hacker.phrase();
    let sdClass = `sd-${_.kebabCase(name)}`;

    describe(name, () => {
      it('extends React.Component', () => {
        expect(SDComponent.prototype).to.eql(React.Component.prototype);
      });

      it(`constructor name is "${name}" (matches component name)`, () => {
        SDComponent.prototype.constructor.name.should.equal(name);
      });

      it(`has the "${sdClass}" element as its first child (no wrapper elements)`, () => {
        let firstChild = _.first(render(<SDComponent />).children());
        expect(firstChild.props.className).to.contain(sdClass);
      });

      describe('classes', () => {
        it(`has "${sdClass}" as the first class`, () => {
          render(<SDComponent />)
            .findClass(sdClass)
            .props.className.indexOf(sdClass).should.equal(0);
        });

        it(`has props.className after "${sdClass}"`, () => {
          let renderedClasses = render(<SDComponent className={classes} />)
            .findClass(sdClass)
            .props.className;

          expect(renderedClasses).to.include(classes);
          let sdClassIndex = renderedClasses.indexOf(sdClass);
          let classesIndex = renderedClasses.indexOf(classes);
          expect(sdClassIndex).to.be.below(classesIndex);
        });

        // test ui class guidelines, if present
        let uiComponent = render(<SDComponent className={classes} />);
        let hasUIClass = uiComponent.scryClass('ui').length;
        if (hasUIClass) {
          it(`has "ui" class immediately after "${sdClass}"`, () => {
            uiComponent.findClass(`${sdClass} ui`);
          });
          it('has props.className immediately after "ui" ', () => {
            uiComponent.findClass(`ui ${classes}`);
          });
        }
      });

      describe('props', () => {
        it('spreads props', () => {
          // create random props object
          let props = {};
          _.times(5, () => props[faker.hacker.noun()] = faker.hacker.noun());

          // create element with random props
          let componentWithProps = <SDComponent {...props} />;

          let hasSpreadProps = render(componentWithProps)
            .children()
            .some(element => _.every([element.props], props));

          hasSpreadProps.should.equal(true);
        });
      });
    });
  });
});
