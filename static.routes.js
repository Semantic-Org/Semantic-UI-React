import _ from 'lodash'

import {
  getComponentGroupInfo,
  getComponentMenu,
  getExampleSources,
  getInfoForSeeTags,
  getLayoutPaths,
  getSidebarSections,
} from './docs/src/staticUtils'
import { getComponentPathname } from './docs/src/utils'

export default async () => {
  const exampleSources = getExampleSources()

  return [
    {
      path: '/',
      component: 'docs/src/views/Introduction',
      priority: 1,
    },
    {
      path: '/introduction',
      redirect: '/',
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
    {
      component: 'docs/src/views/PageNotFound',
      is404: true,
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
    ..._.map(await getLayoutPaths(), ({ routeName, componentFilename }) => ({
      path: `/layouts/${routeName}`,
      component: 'docs/src/components/LayoutsLayout',
      priority: 0.6,
      getData: async () => ({
        componentFilename,
      }),
    })),
    ..._.map(exampleSources, (source, path) => ({
      path: `/maximize/${_.kebabCase(path.split('/').slice(-1))}`,
      component: 'docs/src/components/ExternalExampleLayout',
      priority: 0.4,
      getData: async () => ({
        path,
      }),
    })),
  ]
}
