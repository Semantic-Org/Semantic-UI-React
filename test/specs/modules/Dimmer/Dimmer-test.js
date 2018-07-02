import React from 'react'

import Portal from 'src/addons/Portal/Portal'
import Dimmer from 'src/modules/Dimmer/Dimmer'
import DimmerDimmable from 'src/modules/Dimmer/DimmerDimmable'
import DimmerInner from 'src/modules/Dimmer/DimmerInner'
import * as common from 'test/specs/commonTests'

describe('Dimmer', () => {
  common.isConformant(Dimmer)
  common.hasSubcomponents(Dimmer, [DimmerDimmable, DimmerInner])

  common.implementsCreateMethod(Dimmer)

  describe('children', () => {
    it('renders a DimmerInner', () => {
      expect(shallow(<Dimmer />).type()).toBe(DimmerInner)
    })
  })

  describe('page', () => {
    it('renders a Portal', () => {
      expect(shallow(<Dimmer page />).type()).toBe(Portal)
    })

    describe('active', () => {
      beforeEach(() => {
        document.body.classList.remove('dimmable', 'dimmed')
      })

      it('when true, Portal is opened dimmer classes are present on body', () => {
        const dimmer = mount(<Dimmer page active />)
        const classes = document.body.classList

        expect(dimmer.find(Portal)).have.prop('open', true)

        expect(classes.contains('dimmable')).toBe(true)
        expect(classes.contains('dimmed')).toBe(true)
      })

      it('when false, Portal is closed dimmer classes are absent on body', () => {
        const dimmer = mount(<Dimmer page active={false} />)
        const classes = document.body.classList

        expect(dimmer.find(Portal)).have.prop('open', false)

        expect(classes.contains('dimmable')).toBe(false)
        expect(classes.contains('dimmed')).toBe(false)
      })

      it('when changed to false, dimmer classes are removed from body', () => {
        const dimmer = mount(<Dimmer page active />)
        const classes = document.body.classList

        dimmer.setProps({ active: false })

        expect(classes.contains('dimmable')).toBe(false)
        expect(classes.contains('dimmed')).toBe(false)
      })
    })
  })
})
