import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-static'
import { Divider, Grid, Header } from 'semantic-ui-react'

const DocumentationPageFooter = ({ nextPage, prevPage }) =>
  nextPage || prevPage ? (
    <>
      <Divider />

      <Grid columns={2}>
        <Grid.Column>
          {prevPage && (
            <Header
              as={Link}
              content={prevPage.title}
              subheader='Previous page'
              to={prevPage.href}
            />
          )}
        </Grid.Column>
        <Grid.Column textAlign='right'>
          {nextPage && (
            <Header as={Link} content={nextPage.title} subheader='Next page' to={nextPage.href} />
          )}
        </Grid.Column>
      </Grid>
    </>
  ) : null

DocumentationPageFooter.propTypes = {
  nextPage: PropTypes.shape({ title: PropTypes.string, href: PropTypes.string }),
  prevPage: PropTypes.shape({ title: PropTypes.string, href: PropTypes.string }),
}

export default DocumentationPageFooter
