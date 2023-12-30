import React, { Component } from 'react'
import {
  GridColumn,
  FormInput,
  FormGroup,
  FormCheckbox,
  Grid,
  Form,
  Pagination,
  Segment,
} from 'semantic-ui-react'

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
        <GridColumn>
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
        </GridColumn>

        <GridColumn>
          <Form as={Segment}>
            <FormGroup widths={2}>
              <FormInput
                label='Active page'
                name='activePage'
                min={1}
                onChange={this.handleInputChange}
                type='number'
                value={activePage}
              />
              <FormInput
                label='Total pages'
                name='totalPages'
                min={1}
                onChange={this.handleInputChange}
                type='number'
                value={totalPages}
              />
            </FormGroup>
            <FormGroup widths={2}>
              <FormInput
                label='Boundary pages range'
                name='boundaryRange'
                min={0}
                onChange={this.handleInputChange}
                type='number'
                value={boundaryRange}
              />
              <FormInput
                label='Sibling pages range'
                name='siblingRange'
                min={0}
                onChange={this.handleInputChange}
                type='number'
                value={siblingRange}
              />
            </FormGroup>
            <FormGroup inline>
              <FormCheckbox
                checked={showEllipsis}
                label='Show ellipsis'
                name='showEllipsis'
                onChange={this.handleCheckboxChange}
              />
              <FormCheckbox
                checked={showFirstAndLastNav}
                label='Show first and last nav pages'
                name='showFirstAndLastNav'
                onChange={this.handleCheckboxChange}
              />
              <FormCheckbox
                checked={showPreviousAndNextNav}
                label='Show previous and next nav pages'
                name='showPreviousAndNextNav'
                onChange={this.handleCheckboxChange}
              />
            </FormGroup>
          </Form>
        </GridColumn>
      </Grid>
    )
  }
}
