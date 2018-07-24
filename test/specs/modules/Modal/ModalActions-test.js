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
      expect(buttons.at(0).prop('content')).toBe('Cancel')
      expect(buttons.at(1).prop('content')).toBe('OK')
    })

    it('passes arbitrary props', () => {
      buttons.everyWhere(action => expect(action.prop('data-foo')).toBe('something'))
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

      expect(onActionClick).toHaveBeenCalledTimes(1)
      expect(onActionClick).toHaveBeenCalledWith(event, matchProps)
      expect(onButtonClick).toHaveBeenCalledTimes(1)
      expect(onButtonClick).toHaveBeenCalledWith(event, matchProps)
    })
  })
})
