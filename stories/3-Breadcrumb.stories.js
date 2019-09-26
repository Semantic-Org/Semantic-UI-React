import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import React from 'react';
import { Button, Icon, Grid } from 'semantic-ui-react'
import '!style-loader!css-loader!../themes/dist/sui-florence.css';

export default {
  title: 'Breadcrumb',
};

export const breadcrumb = () =>  (
  <Grid verticalAlign='middle' columns={1} style={{height: '100vh'}}>
    <Grid.Column textAlign="center">

      <Button.Group className="breadcrumb">
        <Button href="#" icon='left chevron' content='Home'/>
        <Button disabled icon='right chevron'/>
        <Button href="#" content='Category'/>
        <Button disabled icon='right chevron'/>
        <Button disabled content='Page'/>
      </Button.Group>

    </Grid.Column>
  </Grid>
);
