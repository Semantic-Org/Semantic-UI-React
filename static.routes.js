import _ from 'lodash'

import componentMenu from './docs/src/componentMenu'
import {
  getComponentInfo,
  getInfoForSeeTags,
  getSidebarSections,
  getSubcomponentsInfo,
} from './docs/src/staticUtils'
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
  ..._.map(componentMenu, baseInfo => ({
    path: getComponentPathname(baseInfo),
    component: 'docs/src/components/ComponentDoc',
    getData: async () => {
      const componentInfo = getComponentInfo(baseInfo.displayName)

      return {
        componentInfo,
        seeTags: getInfoForSeeTags(componentInfo),
        sidebarSections: getSidebarSections(baseInfo.displayName),
        subcomponentsInfo: getSubcomponentsInfo(componentInfo),
      }
    },
  })),
  /* <LayoutsLayout exact path='/layouts/:name' component={LayoutsRoot} sidebar /> */
]
