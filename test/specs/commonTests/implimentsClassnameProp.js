// ----------------------------------------
// Handles className
// ----------------------------------------
const implimentsClassnameProp = () => {
  describe('className (common)', () => {
    it(`has the Semantic UI className "${componentClassName}"`, () => {
      const wrapper = render(<Component {...requiredProps} />)
      // don't test components with no className at all (i.e. MessageItem)
      if (wrapper.prop('className')) {
        wrapper.should.have.className(componentClassName)
      }
    })

    it("applies user's className to root component", () => {
      const className = 'is-conformant-class-string'

      // Portal powered components can render to two elements, a trigger and the actual component
      // The actual component is shown when the portal is open
      // If a trigger is rendered, open the portal and make assertions on the portal element
      if (rendersPortal) {
        const mountNode = document.createElement('div')
        document.body.appendChild(mountNode)

        const wrapper = mount(<Component {...requiredProps} className={className} />, { attachTo: mountNode })
        wrapper.setProps({ open: true })

        // portals/popups/etc may render the component to somewhere besides descendants
        // we look for the component anywhere in the DOM
        assertBodyContains(`.${className}`)

        wrapper.detach()
        document.body.removeChild(mountNode)
      } else {
        shallow(<Component {...requiredProps} className={className} />)
          .should.have.className(className)
      }
    })

    it("user's className does not override the default classes", () => {
      const defaultClasses = shallow(<Component {...requiredProps} />)
        .prop('className')

      if (!defaultClasses) return

      const userClasses = faker.hacker.verb()
      const mixedClasses = shallow(<Component {...requiredProps} className={userClasses} />)
        .prop('className')

      defaultClasses.split(' ').forEach((defaultClass) => {
        mixedClasses.should.include(defaultClass, [
          'Make sure you are using the `getUnhandledProps` util to spread the `rest` props.',
          'This may also be of help: https://facebook.github.io/react/docs/transferring-props.html.',
        ].join(' '))
      })
    })
  })
}