import React from 'react'
import {
  GridColumn,
  FormInput,
  Button,
  Divider,
  Form,
  Grid,
  Segment,
} from 'semantic-ui-react'

const DividerExampleVerticalForm = () => (
  <Segment placeholder>
    <Grid columns={2} relaxed='very' stackable>
      <GridColumn>
        <Form>
          <FormInput
            icon='user'
            iconPosition='left'
            label='Username'
            placeholder='Username'
          />
          <FormInput
            icon='lock'
            iconPosition='left'
            label='Password'
            type='password'
          />

          <Button content='Login' primary />
        </Form>
      </GridColumn>

      <GridColumn verticalAlign='middle'>
        <Button content='Sign up' icon='signup' size='big' />
      </GridColumn>
    </Grid>

    <Divider vertical>Or</Divider>
  </Segment>
)

export default DividerExampleVerticalForm
