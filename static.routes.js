import _ from 'lodash'

import componentMenu from './docs/src/componentMenu'
import { getComponentInfo } from './docs/src/staticUtils'
import { getComponentPathname } from './docs/src/utils'

export default async () => [
  {
    path: '/',
    redirect: '/introduction',
  },
  {
    path: '/introduction',
    component: 'docs/src/views/Introduction',
  },
  {
    path: '/layouts',
    component: 'docs/src/views/Layouts',
  },
  {
    path: '/theming',
    component: 'docs/src/views/Theming',
  },
  {
    path: '/usage',
    component: 'docs/src/views/Usage',
  },
  ..._.map(componentMenu, componentInfo => ({
    path: getComponentPathname(componentInfo),
    component: 'docs/src/components/ComponentDoc',
    getData: async () => ({
      componentInfo: getComponentInfo(componentInfo.displayName),
    }),
  })),
  /* <LayoutsLayout exact path='/layouts/:name' component={LayoutsRoot} sidebar /> */
]
