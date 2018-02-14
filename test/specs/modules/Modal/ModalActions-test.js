import React from 'react'

import ModalActions from 'src/modules/Modal/ModalActions'
import * as common from 'test/specs/commonTests'
import { sandbox } from 'test/utils'

describe('ModalActions', () => {
  common.isConformant(ModalActions)
  common.rendersChildren(ModalActions)

  common.implementsCreateMethod(ModalActions)

  const actions = [
    { key: 'cancel', content: 'Cancel', 'data-foo': 'something' },
    { key: 'ok', content: 'OK', 'data-foo': 'something' },
  ]

  describe('actions', () => {
    const buttons = mount(<ModalActions actions={actions} />).find('Button')

    it('renders children', () => {
      buttons.at(0).should.have.prop('content', 'Cancel')
      buttons.at(1).should.have.prop('content', 'OK')
    })

    it('passes arbitrary props', () => {
      buttons.everyWhere(action => action.should.have.prop('data-foo', 'something'))
    })
  })

  describe('onActionClick', () => {
    it('can be omitted', () => {
      const click = () => mount(<ModalActions actions={actions} />)
        .find('Button')
        .first()
        .simulate('click')

      expect(click).to.not.throw()
    })

    it('is called with (e, actionProps) when clicked', () => {
      const event = { target: null }
      const onActionClick = sandbox.spy()
      const onButtonClick = sandbox.spy()

      const action = { key: 'users', content: 'Disable', onClick: onButtonClick }
      const matchProps = { content: 'Disable' }

      mount(<ModalActions actions={[...actions, action]} onActionClick={onActionClick} />)
        .find('Button')
        .last()
        .simulate('click', event)

      onActionClick.should.have.been.calledOnce()
      onActionClick.should.have.been.calledWithMatch(event, matchProps)
      onButtonClick.should.have.been.calledOnce()
      onButtonClick.should.have.been.calledWithMatch(event, matchProps)
    })
  })
})
