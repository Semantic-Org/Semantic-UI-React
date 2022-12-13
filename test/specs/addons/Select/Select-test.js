import React from 'react'

import Select from 'src/addons/Select/Select'
import Dropdown from 'src/modules/Dropdown/Dropdown'
import * as common from 'test/specs/commonTests'

const requiredProps = {
  options: [],
}

describe('Select', () => {
  common.isConformant(Select, { requiredProps })
  common.hasSubcomponents(Select, [Dropdown.Divider, Dropdown.Header, Dropdown.Item, Dropdown.Menu])
  common.forwardsRef(Select, { requiredProps })

  it('renders a selection Dropdown', () => {
    shallow(<Select {...requiredProps} />)
      .first()
      .should.contain(<Dropdown {...requiredProps} selection />)
  })
})
