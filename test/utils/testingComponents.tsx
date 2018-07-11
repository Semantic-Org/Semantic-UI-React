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
  return mountWithProvider(Element, options).find(Component)
}
