import SidebarPusher from 'src/modules/Sidebar/SidebarPusher'
import * as common from 'test/specs/commonTests'

describe('SidebarPusher', () => {
  common.isConformant(SidebarPusher)
  common.forwardsRef(SidebarPusher)
  common.rendersChildren(SidebarPusher)

  common.propKeyOnlyToClassName(SidebarPusher, 'dimmed')
})
