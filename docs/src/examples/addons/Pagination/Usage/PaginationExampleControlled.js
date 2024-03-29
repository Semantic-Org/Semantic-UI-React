import React, { Component } from 'react'
import { GridColumn, Grid, Input, Pagination, Segment } from 'semantic-ui-react'

export default class PaginationExampleControlled extends Component {
  state = { activePage: 1 }

  handleInputChange = (e, { value }) => this.setState({ activePage: value })

  handlePaginationChange = (e, { activePage }) => this.setState({ activePage })

  render() {
    const { activePage } = this.state

    return (
      <Grid columns={2} verticalAlign='middle'>
        <GridColumn>
          <Segment secondary>
            <div>activePage: {activePage}</div>
            <Input
              min={1}
              max={5}
              onChange={this.handleInputChange}
              type='range'
              value={activePage}
            />
          </Segment>
        </GridColumn>
        <GridColumn>
          <Pagination
            activePage={activePage}
            onPageChange={this.handlePaginationChange}
            totalPages={5}
          />
        </GridColumn>
      </Grid>
    )
  }
}
