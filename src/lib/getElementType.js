import React, { Component } from 'react'
import computeElementType from './computeElementType'
import ElementType from './ElementType'

const getElementType = (options = {}) => {
  return class ElementType extends Component {
    // static propTypes = {
    //   defaultAs: customPropTypes.as,
    //   typeComputer: PropTypes.string,
    //   /**
    //    * Called when componentDidMount.
    //    *
    //    * @param {HTMLElement} node - Referred node.
    //    */
    //   innerRef: PropTypes.func,
    // }

    render() {
      const { defaultAs, innerRef, typeComputer, ...rest } = this.props
      const Child = computeElementType({ defaultProps: { as: options.as }}, rest, typeComputer)
      console.log(Child)
      // if (typeof Child === 'string') return <Child {...rest} ref={innerRef}/>
      // if (Child._meta) return <Child {...rest} innerRef={innerRef}/>
      this.default = defaultAs
      this.as = Child

      return <Child {...rest} ref={innerRef} />
      // return (
      //   <Ref innerRef={innerRef}>
      //     <Child {...rest} />
      //   </Ref>
      // )
    }
  }
}
// const getElementType = defaultAs => props => {
//   const { innerRef, typeComputer, ...rest } = props
//   const Child = computeElementType({ defaultProps: { as: defaultAs }}, rest, typeComputer)
//   console.log(Child, defaultAs)
//   // if (typeof Child === 'string') return <Child {...rest} ref={innerRef}/>
//   // if (Child._meta) return <Child {...rest} innerRef={innerRef}/>
//   // this.defaultAs = defaultAs
//   // this.as = Child
//
//   return <Child {...rest} ref={innerRef} />
// }
//<ElementType defaultAs={defaultAs} {...props} />

export default getElementType
