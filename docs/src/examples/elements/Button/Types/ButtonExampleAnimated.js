import React from 'react'
import { ButtonContent, Button, Icon } from 'semantic-ui-react'

const ButtonExampleAnimated = () => (
  <div>
    <Button animated>
      <ButtonContent visible>Next</ButtonContent>
      <ButtonContent hidden>
        <Icon name='arrow right' />
      </ButtonContent>
    </Button>
    <Button animated='vertical'>
      <ButtonContent hidden>Shop</ButtonContent>
      <ButtonContent visible>
        <Icon name='shop' />
      </ButtonContent>
    </Button>
    <Button animated='fade'>
      <ButtonContent visible>Sign-up for a Pro account</ButtonContent>
      <ButtonContent hidden>$12.99 a month</ButtonContent>
    </Button>
  </div>
)

export default ButtonExampleAnimated
