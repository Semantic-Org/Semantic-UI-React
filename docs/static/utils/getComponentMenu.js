import _ from 'lodash'
import componentMenu from '../../src/componentMenu'

const getComponentMenu = () =>
  _.sortBy(
    [
      ...componentMenu,
      {
        displayName: 'Ref',
        type: 'addon',
        external: true,
      },
    ],
    'displayName',
  )

export default getComponentMenu
