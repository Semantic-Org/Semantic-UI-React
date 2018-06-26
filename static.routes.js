import _ from 'lodash'

import {
  getComponentGroupInfo,
  getComponentMenu,
  getExampleSources,
  getInfoForSeeTags,
  getSidebarSections,
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
      priority: 1,
    },
    {
      path: '/layouts',
      component: 'docs/src/views/Layouts',
      priority: 0.8,
    },
    {
      path: '/theming',
      component: 'docs/src/views/Theming',
      priority: 0.8,
    },
    {
      path: '/usage',
      component: 'docs/src/views/Usage',
      priority: 0.9,
    },
    ..._.map(getComponentMenu(), baseInfo => ({
      path: getComponentPathname(baseInfo),
      component: 'docs/src/components/ComponentDoc',
      priority: 0.7,
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
    /* TODO: */
    /* Layout examples: <LayoutsLayout exact path='/layouts/:name' component={LayoutsRoot} sidebar /> */
    /* Maximized layout example */
  ]
}
