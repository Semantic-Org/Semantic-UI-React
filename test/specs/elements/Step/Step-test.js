import faker from 'faker'
import React from 'react'

import Step from 'src/elements/Step/Step'
import StepContent from 'src/elements/Step/StepContent'
import StepDescription from 'src/elements/Step/StepDescription'
import StepTitle from 'src/elements/Step/StepTitle'
import * as common from 'test/specs/commonTests'

describe('Step', () => {
  common.isConformant(Step)
  common.hasSubcomponents(Step, [StepContent, StepDescription, StepTitle])
  common.rendersChildren(Step)

  common.implementsIconProp(Step)

  common.propKeyOnlyToClassName(Step, 'active')
  common.propKeyOnlyToClassName(Step, 'completed')
  common.propKeyOnlyToClassName(Step, 'disabled')
  common.propKeyOnlyToClassName(Step, 'link')

  describe('children', () => {
    expect(shallow(<Step>{faker.hacker.phrase()}</Step>).find('StepContent')).toHaveLength(0)
  })

  describe('description', () => {
    it('passes prop to StepContent', () => {
      const description = faker.hacker.phrase()

      expect(
        shallow(<Step description={description} />)
          .find('StepContent')
          .prop('description'),
      ).toBe(description)
    })
  })

  describe('href', () => {
    it('renders as `a` when defined', () => {
      const url = faker.internet.url()
      const wrapper = shallow(<Step href={url} />)

      expect(wrapper.type()).toBe('a')
      expect(wrapper.prop('href')).toBe(url)
    })
  })

  describe('onClick', () => {
    it('is called with (e, data) when clicked', () => {
      const event = { target: null }
      const onClick = jest.fn()

      shallow(<Step onClick={onClick} />).simulate('click', event)

      expect(onClick).toHaveBeenCalledTimes(1)
      expect(onClick).toHaveBeenCalledWith(
        expect.objectContaining(event),
        expect.objectContaining({ onClick }),
      )
    })

    it('is not called when is disabled', () => {
      const onClick = jest.fn()

      shallow(<Step disabled onClick={onClick} />).simulate('click')
      expect(onClick).not.toHaveBeenCalled()
    })

    it('renders as `a` when defined', () => {
      expect(shallow(<Step onClick={() => null} />).type()).toBe('a')
    })
  })

  describe('title', () => {
    it('passes prop to StepContent', () => {
      const title = faker.hacker.phrase()

      expect(
        shallow(<Step title={title} />)
          .find('StepContent')
          .prop('title'),
      ).toBe(title)
    })
  })
})
