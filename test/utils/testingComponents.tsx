import React from 'react'
import { mount } from 'enzyme'

import Provider from 'src/components/Provider'

export const getComponentMountedWithProvider = (Element: any, options?: {}) =>
  mount(<Provider siteVariables={{}}>{Element}</Provider>, options)

export const getTestingRenderedComponent = (Component: any, Element: any, options?: {}) => {
  let wrapper = getComponentMountedWithProvider(Element, options)

  while (wrapper.name() !== Component.wrappedComponent) {
    wrapper = wrapper.childAt(0)
  }

  return wrapper
}
