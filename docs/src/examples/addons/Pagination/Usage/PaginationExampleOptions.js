import React, { Component } from 'react'
import { Grid, Form, Pagination, Segment } from 'semantic-ui-react'

export default class PaginationExampleCustomization extends Component {
  state = {
    activePage: 5,
    boundaryRange: 1,
    siblingRange: 1,
    showEllipsis: true,
    showFirstAndLastNav: true,
    showPreviousAndNextNav: true,
    totalPages: 50,
  }

  handleCheckboxChange = (e, { checked, name }) =>
    this.setState({ [name]: checked })

  handleInputChange = (e, { name, value }) => this.setState({ [name]: value })

  handlePaginationChange = (e, { activePage }) => this.setState({ activePage })

  render() {
    const {
      activePage,
      boundaryRange,
      siblingRange,
      showEllipsis,
      showFirstAndLastNav,
      showPreviousAndNextNav,
      totalPages,
    } = this.state

    return (
      <Grid columns={1}>
        <Grid.Column>
          <Pagination
            activePage={activePage}
            boundaryRange={boundaryRange}
            onPageChange={this.handlePaginationChange}
            size='mini'
            siblingRange={siblingRange}
            totalPages={totalPages}
            // Heads up! All items are powered by shorthands, if you want to hide one of them, just pass `null` as value
            ellipsisItem={showEllipsis ? undefined : null}
            firstItem={showFirstAndLastNav ? undefined : null}
            lastItem={showFirstAndLastNav ? undefined : null}
            prevItem={showPreviousAndNextNav ? undefined : null}
            nextItem={showPreviousAndNextNav ? undefined : null}
          />
        </Grid.Column>

        <Grid.Column>
          <Form as={Segment}>
            <Form.Group widths={2}>
              <Form.Input
                label='Active page'
                name='activePage'
                min={1}
                onChange={this.handleInputChange}
                type='number'
                value={activePage}
              />
              <Form.Input
                label='Total pages'
                name='totalPages'
                min={1}
                onChange={this.handleInputChange}
                type='number'
                value={totalPages}
              />
            </Form.Group>
            <Form.Group widths={2}>
              <Form.Input
                label='Boundary pages range'
                name='boundaryRange'
                min={0}
                onChange={this.handleInputChange}
                type='number'
                value={boundaryRange}
              />
              <Form.Input
                label='Sibling pages range'
                name='siblingRange'
                min={0}
                onChange={this.handleInputChange}
                type='number'
                value={siblingRange}
              />
            </Form.Group>
            <Form.Group inline>
              <Form.Checkbox
                checked={showEllipsis}
                label='Show ellipsis'
                name='showEllipsis'
                onChange={this.handleCheckboxChange}
              />
              <Form.Checkbox
                checked={showFirstAndLastNav}
                label='Show first and last nav pages'
                name='showFirstAndLastNav'
                onChange={this.handleCheckboxChange}
              />
              <Form.Checkbox
                checked={showPreviousAndNextNav}
                label='Show previous and next nav pages'
                name='showPreviousAndNextNav'
                onChange={this.handleCheckboxChange}
              />
            </Form.Group>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}
