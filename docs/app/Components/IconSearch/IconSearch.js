import copyToClipboard from 'copy-to-clipboard'
import React, { Component } from 'react'
import _ from 'lodash/fp'
import { SUI, leven } from 'src/lib'
import {
  Form,
  Grid,
  Header,
  Icon,
  Message,
  Popup,
} from 'src'

const gridStyle = {
  background: '#fff',
}

const iconKeyToHeaderMap = {
  WEB_CONTENT_ICONS: 'Web Content',
  USER_ACTIONS_ICONS: 'User Actions',
  MESSAGES_ICONS: 'Messages',
  USERS_ICONS: 'Users',
  GENDER_SEXUALITY_ICONS: 'Gender & Sexuality',
  ACCESSIBILITY_ICONS: 'Accessibility',
  VIEW_ADJUSTMENT_ICONS: 'View Adjustment',
  LITERAL_OBJECTS_ICONS: 'Literal Objects',
  SHAPES_ICONS: 'Shapes',
  ITEM_SELECTION_ICONS: 'Item Selection',
  MEDIA_ICONS: 'Media',
  POINTERS_ICONS: 'Pointers',
  MOBILE_ICONS: 'Mobile',
  COMPUTER_ICONS: 'Computer',
  FILE_SYSTEM_ICONS: 'File System',
  TECHNOLOGIES_ICONS: 'Technologies',
  RATING_ICONS: 'Rating',
  AUDIO_ICONS: 'Audio',
  MAP_LOCATIONS_TRANSPORTATION_ICONS: 'Map, Locations & Transportation',
  TABLES_ICONS: 'Tables',
  TEXT_EDITOR_ICONS: 'Text Editor',
  CURRENCY_ICONS: 'Currency',
  PAYMENT_OPTIONS_ICONS: 'Payment Options',
  NETWORKS_AND_WEBSITE_ICONS: 'Networks And Website',
  ICON_ALIASES: 'Icon Aliases',
}

const similarityScore = (strA, strB) => {
  const aWords = strA.trim().split(' ')
  const bWords = strB.trim().split(' ')

  return _.flow(
    _.map(a => _.map(b => leven(a, b), bWords)),
    _.map(_.min),
    _.sum,
  )(aWords)
}
export default class IconSearch extends Component {
  state = { search: '', includeSimilar: true }

  componentDidMount() {
    const input = document.querySelector('#docs-icon-set-input')
    input.focus()
  }

  handleChange = _.debounce(100, (e, { value }) => this.setState({ search: value }))

  handleIncludeSimilarChange = (e, { checked }) => this.setState({ includeSimilar: checked })

  copy = text => () => {
    copyToClipboard(text)
    this.setState({ copied: true })
    setTimeout(() => this.setState({ copied: false }), 1000)
  }

  renderIconColumn = name => (
    <Popup
      key={name}
      mouseEnterDelay={1000}
      inverted
      closeOnTriggerClick={false}
      closeOnRootNodeClick={false}
      closeOnDocumentClick={false}
      style={{ width: '8em', textAlign: 'center' }}
      size='mini'
      position='top center'
      content={this.state.copied ? 'Copied!' : 'Click to copy'}
      trigger={(
        <Grid.Column className='docs-icon-set-column' onClick={this.copy(name)}>
          <Icon name={name} size='big' />
          <p className='name'>{name}</p>
        </Grid.Column>
      )}
    />
  )

  renderIcons = () => {
    const { includeSimilar, search } = this.state
    const query = search.trim().toLowerCase()
    const iconKeys = Object.keys(iconKeyToHeaderMap)

    // no search
    if (!query) {
      return iconKeys.map(iconKey => (
        <Grid key={iconKey} columns={5} doubling>
          <Grid.Column width={16}>
            <Header as='h3' textAlign='left' dividing>
              {iconKeyToHeaderMap[iconKey]}
            </Header>
          </Grid.Column>
          {SUI[iconKey].map(this.renderIconColumn)}
        </Grid>
      ))
    }

    const iconSearchMatches = SUI.ICONS_AND_ALIASES
      .filter((name) => {
        // contains
        if (name.indexOf(query) !== -1) return true

        // similar
        return includeSimilar && similarityScore(name, query) <= 2
      })
      .map(this.renderIconColumn)

    // no results
    if (iconSearchMatches.length === 0) {
      return (
        <Grid>
          <Grid.Column textAlign='left'>
            <Message
              info
              icon='search'
              content={`There is no icon name or alias ${includeSimilar ? 'similar' : 'that contains'} to "${query}".`}
              header='No Results'
            />
          </Grid.Column>
        </Grid>
      )
    }

    // results
    return <Grid columns={5} doubling>{iconSearchMatches}</Grid>
  }

  render() {
    const { includeSimilar } = this.state
    return (
      <Grid columns={1} padded style={gridStyle}>
        <Grid.Column>
          <Header as='h2'>Icon Set</Header>
          <p>An icon set contains an arbitrary number of glyphs.</p>

          <Message>
            Semantic includes a complete port of{' '}
            <a href='http://fontawesome.io/whats-new/' rel='noopener noreferrer' target='_blank'>Font Awesome 4.7.0</a>
            {' '}designed by{' '}
            <a href='http://www.twitter.com/davegandy' rel='noopener noreferrer'>Dave Gandy</a> for its standard icon
            set.
          </Message>

          <Form>
            <Form.Group inline>
              <Form.Input
                id='docs-icon-set-input'
                placeholder='Search...'
                icon='search'
                onChange={this.handleChange}
              />
              <Form.Checkbox
                toggle
                label='Show similar'
                checked={includeSimilar}
                onChange={this.handleIncludeSimilarChange}
              />
            </Form.Group>
          </Form>
        </Grid.Column>
        <Grid.Column textAlign='center'>
          {this.renderIcons()}
        </Grid.Column>
      </Grid>
    )
  }
}
