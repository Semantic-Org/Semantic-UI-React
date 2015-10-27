import _ from 'lodash';
import faker from 'faker';
import React, {Component} from 'react';
import {isDOMComponent} from 'react-addons-test-utils';
import stardust from 'stardust';
import META from 'src/utils/Meta';

const getSDClassName = componentName => `sd-${_.kebabCase(componentName)}`;

/**
 * This test ensures all Stardust components conform to our guidelines.
 */
describe('Conformance', () => {
  /* eslint-disable no-console */
  console.info('Conformance-test renders each component with no props, required prop warnings may occur.');
  /* eslint-enable no-console */
  _.each(stardust, (SDComponent, name) => {
    const classes = faker.fake('{{hacker.noun}} {{hacker.noun}} {{hacker.noun}}');
    const sdClass = getSDClassName(name);
    const firstChild = _.first(render(<SDComponent />).children());

    describe(name, () => {
      it('extends Component', () => {
        expect(SDComponent.prototype).to.eql(Component.prototype);
      });

      it(`constructor name is "${name}" (matches component name)`, () => {
        SDComponent.prototype.constructor.name.should.equal(name);
      });

      it(`has the "${sdClass}" element as its first child (no wrapper elements)`, () => {
        if (isDOMComponent(firstChild)) {
          expect(firstChild.getAttribute('class')).to.contain(sdClass);
        } else {
          expect(firstChild.props.className).to.contain(sdClass);
        }
      });

      describe('_meta', () => {
        const _meta = SDComponent._meta;

        it('is a static object prop', () => {
          expect(_meta).to.be.an('object');
        });

        describe('library', () => {
          it('is defined', () => {
            expect(_meta).to.have.any.keys('library');
          });
          it('is a META.library', () => {
            expect(_.values(META.library)).to.include(_meta.library);
          });
        });
        describe('name', () => {
          it('is defined', () => {
            expect(_meta).to.have.any.keys('name');
          });
          it('matches the component name', () => {
            expect(_meta.name).to.equal(name);
          });
        });
        if (_.has(_meta, 'parent')) {
          describe('parent', () => {
            it('is a stardust component name', () => {
              expect(_.keys(stardust)).to.contain(_meta.parent);
            });
          });
        }
        describe('type', () => {
          it('is defined', () => {
            expect(_meta).to.have.any.keys('type');
          });
          it('is a META.type', () => {
            expect(_.values(META.type)).to.include(_meta.type);
          });
        });
      });

      describe('props', () => {
        it('spreads props', () => {
          const props = {};
          // JSX does not render custom html attributes so we prefix them with data-*.
          // https://facebook.github.io/react/docs/jsx-gotchas.html#custom-html-attributes
          props[`data-${_.kebabCase(faker.hacker.noun())}`] = faker.hacker.noun();

          // create element with random props
          render(<SDComponent {...props} />)
            .children()
            .some(child => {
              return _.every(props, (val, key) => {
                return isDOMComponent(child)
                  ? child.getAttribute(key) === val
                  : child.props[key] === val;
              });
            })
            .should.equal(true);
        });
        describe('className', () => {
          it(`has props.className after "${sdClass}"`, () => {
            let renderedClasses;
            const rendered = render(<SDComponent className={classes} />)
              .findClass(sdClass);
            if (isDOMComponent(rendered)) {
              renderedClasses = rendered.getAttribute('class');
            } else {
              renderedClasses = rendered.props.className;
            }
            const sdClassIndex = renderedClasses.indexOf(sdClass);
            const classesIndex = renderedClasses.indexOf(classes);
            expect(sdClassIndex).to.be.below(classesIndex);
          });

          // Determine if this SDComponent is composed of DOM components (div, span, etc)
          // or if it is composed of other components (<Modal />, <textarea />, etc)
          //
          // Components composed of DOM components will have their "sd-*" class listed first:
          //
          //   <Modal /> => <div className='sd-modal...
          //   The "sd-modal" class is first.
          //
          // Components composed of Components will have their "sd-*" classes in an unknown position:
          //
          //   <Confirm /> => <Modal /> => <div className='sd-modal sd-confirm...
          //   The "sd-confirm" class is inherited by Modal, after the "sd-modal" class
          //   It is not practical to assume the position of the "sd-*" for composite components.
          //   There may be intermediate classes such as "ui" and other composite component classes.

          if (isDOMComponent(firstChild)) {
            it(`has "${sdClass}" as the first class`, () => {
              render(<SDComponent />)
                .findClass(sdClass)
                .getAttribute('class')
                .indexOf(sdClass).should.equal(0);
            });
          }
        });
      });
    });
  });
});
