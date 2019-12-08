import React from 'react'
import { Accordion } from 'semantic-ui-react'

const panels = [
  {
    key: 'acquire-dog',
    title: {
      content: 'How do you acquire a dog?',
      icon: 'question',
    },
    content: {
      content: (
        <span>
          Three common ways for a prospective owner to acquire a dog is from pet
          shops, private owners, or shelters.
        </span>
      ),
    },
  },
  {
    key: 'care-for-dogs',
    title: {
      content: 'How do I care for a dog?',
      icon: 'question',
    },
    content: {
      content: (
        <span>
          It is entirely acceptable to feed your dog a pure kibble diet. Or you
          can mix their diet up with some cooked or raw meat, fish, vegetables
          and rice.
        </span>
      ),
    },
  },
]

const AccordionExampleIconShorthand = () => (
  <Accordion defaultActiveIndex={0} panels={panels} />
)

export default AccordionExampleIconShorthand
