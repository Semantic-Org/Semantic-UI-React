import _ from 'lodash'

import {
  getComponentGroupInfo,
  getComponentMenu,
  getExampleSources,
  getInfoForSeeTags,
  getLayoutPaths,
  getPagesPaths,
  getSidebarSections,
} from './docs/static/utils'
import { getComponentPathname } from './docs/src/utils'

export default async () => {
  const exampleSources = getExampleSources()

  return [
    {
      path: '/',
      component: 'docs/src/pages/Introduction',
      priority: 1,
    },
    {
      component: 'docs/src/pages/PageNotFound',
      is404: true,
    },

    // Routes for pages, i.e /theming
    ..._.map(getPagesPaths(), ({ pageName, routeName }) => ({
      path: routeName,
      component: 'docs/src/components/DocumentationPage',
      priority: 0.9,
      getData: async () => ({
        pageName,
      }),
    })),

    // Routes for components, i.e. /element/button
    ..._.map(getComponentMenu(), (baseInfo) => ({
      path: getComponentPathname(baseInfo),
      component: 'docs/src/components/ComponentDoc',
      priority: 0.8,
      getData: async () => {
        const componentsInfo = getComponentGroupInfo(baseInfo.displayName)
        const sidebarSections = getSidebarSections(baseInfo.displayName)

        return {
          componentsInfo,
          exampleSources,
          sidebarSections,
          displayName: baseInfo.displayName,
          deprecated: !!_.find(
            _.get(componentsInfo[baseInfo.displayName], 'docblock.tags'),
            (tag) => tag.title === 'deprecated',
          ),
          seeTags: getInfoForSeeTags(componentsInfo[baseInfo.displayName]),
        }
      },
    })),

    // Routes for layouts, i.e. /layouts/theming
    ..._.map(await getLayoutPaths(), ({ routeName, componentFilename }) => ({
      path: `/layouts/${routeName}`,
      component: 'docs/src/components/LayoutsLayout',
      priority: 0.7,
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
