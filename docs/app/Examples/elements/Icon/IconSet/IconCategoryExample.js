import _ from 'lodash'
import React, { PropTypes } from 'react'
import { Grid, Icon } from 'stardust'

const columns = (icons) => _.map(icons, icon => (
  <Grid.Column key={icon} textAlign='center'>
    <Icon name={icon} style={{ fontSize: '2em' }} />
    <div>{_.startCase(icon)}</div>
  </Grid.Column>
))

const IconCategoryExample = ({ category }) => (
  <Grid doubling columns={5}>
    {columns(category.icons)}
  </Grid>
)

IconCategoryExample.propTypes = {
  category: PropTypes.shape({
    icons: PropTypes.array.isRequired,
  }),
}

export default IconCategoryExample
