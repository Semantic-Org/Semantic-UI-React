import SidebarPusher from 'src/collections/Sidebar/SidebarPusher'
import * as common from 'test/specs/commonTests'

describe('SidebarPusher', () => {
  common.isConformant(SidebarPusher)
  common.rendersChildren(SidebarPusher)

  common.propKeyOnlyToClassName(SidebarPusher, 'dimmed')
})
