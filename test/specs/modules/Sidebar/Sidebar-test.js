import React from 'react'

import Sidebar from 'src/modules/Sidebar/Sidebar'
import * as common from 'test/specs/commonTests'

describe('Sidebar', () => {
  common.isConformant(Sidebar)
  common.hasUIClassName(Sidebar)
  common.rendersChildren(Sidebar)

  common.propKeyOnlyToClassName(Sidebar, 'visible')

  common.propValueOnlyToClassName(Sidebar, 'animation', [
    'overlay', 'push', 'scale down', 'uncover', 'slide out', 'slide along',
  ])
  common.propValueOnlyToClassName(Sidebar, 'direction', ['top', 'right', 'bottom', 'left'])
  common.propValueOnlyToClassName(Sidebar, 'width', ['very thin', 'thin', 'wide', 'very wide'])

  it('renders a <div /> element', () => {
    shallow(<Sidebar />)
      .should.have.tagName('div')
  })
})
