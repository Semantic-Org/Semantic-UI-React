import React from 'react'

import DropdownMessage from 'src/modules/Dropdown/DropdownMessage'
import * as common from 'test/specs/commonTests'

const requiredProps = { type: 'noResultsMessage' }

describe('DropdownMessage', () => {
  common.isConformant(DropdownMessage, { requiredProps })

  common.implementsCreateMethod(DropdownMessage)

  describe('maxSelections', () => {
    it('shows default max selections formatted appropriately, plural', () => {
      const maxSelections = 3
      const maxSelectionsText = `Max ${maxSelections} selections.`

      const wrapper = shallow(
        <DropdownMessage
          type={'maxSelectionsMessage'}
          value={maxSelections}
        />,
      )

      wrapper
        .find('.message')
        .should.have.text(maxSelectionsText)
    })

    it('shows default max selections formatted appropriately, singular', () => {
      const maxSelections = 1
      const maxSelectionsText = `Max ${maxSelections} selection.`

      const wrapper = shallow(
        <DropdownMessage
          type={'maxSelectionsMessage'}
          value={maxSelections}
        />,
      )

      wrapper
        .find('.message')
        .should.have.text(maxSelectionsText)
    })

    it('should render a localized message without problems', () => {
      const maxSelections = 1
      const maxSelectionsMessage = 'No more selections for you!'

      const wrapper = shallow(
        <DropdownMessage
          type={'maxSelectionsMessage'}
          value={maxSelections}
          maxSelectionsMessage={maxSelectionsMessage}
        />,
      )

      wrapper
        .find('.message')
        .should.have.text(maxSelectionsMessage)
    })
    it('should render a localized message element without problems', () => {
      const maxSelections = 1
      const text = 'No more selections for you!'
      const maxSelectionsMessage = <span className={'red'}>{text}</span>

      const wrapper = shallow(
        <DropdownMessage
          type={'maxSelectionsMessage'}
          value={maxSelections}
          maxSelectionsMessage={maxSelectionsMessage}
        />,
      )

      wrapper
        .should.have.exactly(1).descendants('span.red')
        .which.contain.text(text)
    })
  })

  describe('noResultsMessage', () => {
    it('shows default no results message appropriately', () => {
      const text = 'No results found.'

      const wrapper = shallow(
        <DropdownMessage
          type={'noResultsMessage'}
          noResultsMessage={text}
        />,
      )

      wrapper
        .should.have.text(text)
    })

    it('shows default no results message element appropriately', () => {
      const text = 'No results found, I\'m sorry about that!'
      const el = <span className={'red'}>{text}</span>

      const wrapper = shallow(
        <DropdownMessage
          type={'noResultsMessage'}
          noResultsMessage={el}
        />,
      )

      wrapper
        .should.have.exactly(1).descendants('span.red')
        .which.contain.text(text)
    })
  })
})
