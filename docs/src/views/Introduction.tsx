import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import Editor from 'docs/src/components/Editor/Editor'
import pkg from 'package.json'
import { Container, Divider, Grid, Header, Icon, Label, List, Segment } from 'semantic-ui-react'
import Logo from '../components/Logo/Logo'

const Comparison: any = ({ jsx, html }) => (
  <Segment className="code-example">
    <Grid columns="equal" centered textAlign="left">
      <Grid.Column computer="8" largeScreen="7" widescreen="7" width="16">
        <Label size="tiny" attached="top left">
          JSX
        </Label>
        <Editor id={btoa(jsx)} value={jsx} readOnly />
      </Grid.Column>
      <Grid.Column largeScreen="2" only="large screen" textAlign="center">
        <Divider vertical>
          <Icon name={'right arrow circle' as any} />
        </Divider>
      </Grid.Column>
      <Grid.Column computer="8" largeScreen="7" widescreen="7" width="16">
        <Label size="tiny" attached="top right">
          Rendered HTML
        </Label>
        <Editor id={btoa(html)} mode="html" value={html} readOnly />
      </Grid.Column>
    </Grid>
  </Segment>
)

Comparison.propTypes = {
  jsx: PropTypes.string,
  html: PropTypes.string,
}

const Introduction = () => (
  <Container id="introduction-page">
    <Segment basic textAlign="center">
      <Logo centered size="small" />
      <Header as="h1" textAlign="center">
        {_.capitalize(pkg.name)}
        <Header.Subheader>{pkg.description}</Header.Subheader>
      </Header>
    </Segment>
  </Container>
)

export default Introduction
