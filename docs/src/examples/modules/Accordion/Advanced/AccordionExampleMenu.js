import React, { Component } from 'react'
import {
  AccordionTitle,
  AccordionContent,
  MenuItem,
  FormRadio,
  FormGroup,
  FormCheckbox,
  Accordion,
  Form,
  Menu,
} from 'semantic-ui-react'

const ColorForm = (
  <Form>
    <FormGroup grouped>
      <FormCheckbox label='Red' name='color' value='red' />
      <FormCheckbox label='Orange' name='color' value='orange' />
      <FormCheckbox label='Green' name='color' value='green' />
      <FormCheckbox label='Blue' name='color' value='blue' />
    </FormGroup>
  </Form>
)

const SizeForm = (
  <Form>
    <FormGroup grouped>
      <FormRadio label='Small' name='size' type='radio' value='small' />
      <FormRadio label='Medium' name='size' type='radio' value='medium' />
      <FormRadio label='Large' name='size' type='radio' value='large' />
      <FormRadio label='X-Large' name='size' type='radio' value='x-large' />
    </FormGroup>
  </Form>
)

export default class AccordionExampleMenu extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <Accordion as={Menu} vertical>
        <MenuItem>
          <AccordionTitle
            active={activeIndex === 0}
            content='Size'
            index={0}
            onClick={this.handleClick}
          />
          <AccordionContent active={activeIndex === 0} content={SizeForm} />
        </MenuItem>

        <MenuItem>
          <AccordionTitle
            active={activeIndex === 1}
            content='Colors'
            index={1}
            onClick={this.handleClick}
          />
          <AccordionContent active={activeIndex === 1} content={ColorForm} />
        </MenuItem>
      </Accordion>
    )
  }
}
