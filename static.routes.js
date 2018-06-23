import _ from 'lodash'

import componentMenu from './docs/src/componentMenu'
import {
  getExampleSources,
  getInfoForSeeTags,
  getSidebarSections,
  getComponentGroupInfo,
} from './docs/src/staticUtils'
import { getComponentPathname } from './docs/src/utils'

export default async () => {
  const exampleSources = getExampleSources()

  return [
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
        const componentsInfo = getComponentGroupInfo(baseInfo.displayName)
        const sidebarSections = getSidebarSections(baseInfo.displayName)

        return {
          componentsInfo,
          exampleSources,
          sidebarSections,
          displayName: baseInfo.displayName,
          exampleKeys: _.map(_.flatMap(sidebarSections, 'examples'), 'examplePath'),
          seeTags: getInfoForSeeTags(componentsInfo[baseInfo.displayName]),
        }
      },
    })),
    /* <LayoutsLayout exact path='/layouts/:name' component={LayoutsRoot} sidebar /> */
  ]
}
