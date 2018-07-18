import React from 'react'

import ModalActions from 'src/modules/Modal/ModalActions'
import * as common from 'test/specs/commonTests'

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
      expect(buttons.at(0)).have.prop('content', 'Cancel')
      expect(buttons.at(1)).have.prop('content', 'OK')
    })

    it('passes arbitrary props', () => {
      buttons.everyWhere(action => expect(action).have.prop('data-foo', 'something'))
    })
  })

  describe('onActionClick', () => {
    it('can be omitted', () => {
      const click = () =>
        mount(<ModalActions actions={actions} />)
          .find('Button')
          .first()
          .simulate('click')

      expect(click).not.toThrowError()
    })

    it('is called with (e, actionProps) when clicked', () => {
      const event = { target: null }
      const onActionClick = jest.fn()
      const onButtonClick = jest.fn()

      const action = { key: 'users', content: 'Disable', onClick: onButtonClick }
      const matchProps = { content: 'Disable' }

      mount(<ModalActions actions={[...actions, action]} onActionClick={onActionClick} />)
        .find('Button')
        .last()
        .simulate('click', event)

      expect(onActionClick).have.been.calledOnce()
      expect(onActionClick).have.been.calledWithMatch(event, matchProps)
      expect(onButtonClick).have.been.calledOnce()
      expect(onButtonClick).have.been.calledWithMatch(event, matchProps)
    })
  })
})
