import React from 'react'
import { mount } from 'enzyme'

import Provider from 'src/components/Provider'

export const withProvider = element => <Provider siteVariables={{}}>{element}</Provider>

export const mountWithProvider = (Element: React.ReactNode, options?: {}) =>
  mount(withProvider(Element), options)

export const getTestingRenderedComponent = (
  Component: any,
  Element: React.ReactNode,
  options?: {},
) => {
  let wrapper = mountWithProvider(Element, options)

  while (wrapper.name() !== Component.wrappedComponent) {
    wrapper = wrapper.childAt(0)
  }

  return wrapper
}
