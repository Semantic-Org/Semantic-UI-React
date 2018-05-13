import React from 'react'

import Advertisement from 'src/views/Advertisement/Advertisement'
import * as common from 'test/specs/commonTests'

const requiredProps = { unit: 'banner' }

describe('Advertisement', () => {
  common.isConformant(Advertisement, { requiredProps })
  common.hasUIClassName(Advertisement, { requiredProps })
  common.rendersChildren(Advertisement, { requiredProps })

  common.propKeyOnlyToClassName(Advertisement, 'centered', { requiredProps })
  common.propKeyOnlyToClassName(Advertisement, 'test', { requiredProps })

  common.propValueOnlyToClassName(
    Advertisement,
    'unit',
    [
      'medium rectangle',
      'large rectangle',
      'vertical rectangle',
      'small rectangle',
      'mobile banner',
      'banner',
      'vertical banner',
      'top banner',
      'half banner',
      'button',
      'square button',
      'small button',
      'skyscraper',
      'wide skyscraper',
      'leaderboard',
      'large leaderboard',
      'mobile leaderboard',
      'billboard',
      'panorama',
      'netboard',
      'half page',
      'square',
      'small square',
    ],
    { requiredProps },
  )

  it('renders a <div> by default', () => {
    shallow(<Advertisement {...requiredProps} />).should.have.tagName('div')
  })
})
