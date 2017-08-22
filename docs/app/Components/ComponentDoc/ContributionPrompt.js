import PropTypes from 'prop-types'
import React from 'react'

import { repoURL } from 'docs/app/utils'
import { Message, Icon } from 'src'

const ContributionPrompt = ({ children }) => (
  <Message info icon>
    <Icon name='bullhorn' />
    <Message.Content>
      <p>{children}</p>
      <p>
        If there's no{' '}
        <a href={`${repoURL}/pulls`}>pull request</a>{' '}
        open for this, you should{' '}
        <a href={`${repoURL}/blob/master/.github/CONTRIBUTING.md`}>
          contribute
        </a>!
      </p>
    </Message.Content>
  </Message>
)

ContributionPrompt.propTypes = {
  children: PropTypes.node,
}

export default ContributionPrompt
