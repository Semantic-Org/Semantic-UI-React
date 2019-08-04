import _ from 'lodash'
import React from 'react'

import { SUI } from 'src/lib'
import Statistic from 'src/views/Statistic/Statistic'
import StatisticGroup from 'src/views/Statistic/StatisticGroup'
import StatisticLabel from 'src/views/Statistic/StatisticLabel'
import StatisticValue from 'src/views/Statistic/StatisticValue'
import * as common from 'test/specs/commonTests'

describe('Statistic', () => {
  common.isConformant(Statistic)
  common.implementsCreateMethod(Statistic)
  common.hasSubcomponents(Statistic, [StatisticGroup, StatisticLabel, StatisticValue])
  common.hasUIClassName(Statistic)
  common.rendersChildren(Statistic)

  common.implementsShorthandProp(Statistic, {
    autoGenerateKey: false,
    propKey: 'label',
    ShorthandComponent: StatisticLabel,
    mapValueToProps: (content) => ({ content }),
  })
  common.implementsShorthandProp(Statistic, {
    autoGenerateKey: false,
    propKey: 'value',
    ShorthandComponent: StatisticValue,
    mapValueToProps: (content) => ({ content }),
    shorthandDefaultProps: {
      text: undefined,
    },
  })

  common.propKeyAndValueToClassName(Statistic, 'floated', SUI.FLOATS)

  common.propKeyOnlyToClassName(Statistic, 'horizontal')
  common.propKeyOnlyToClassName(Statistic, 'inverted')

  common.propValueOnlyToClassName(Statistic, 'color', SUI.COLORS)
  common.propValueOnlyToClassName(
    Statistic,
    'size',
    _.without(SUI.SIZES, 'big', 'massive', 'medium'),
  )

  describe('text', () => {
    it('passes value to StatisticValue', () => {
      shallow(<Statistic text value='foo' />)
        .find('StatisticValue')
        .first()
        .should.have.prop('text', true)
    })
  })
})
