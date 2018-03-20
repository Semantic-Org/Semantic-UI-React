import copyToClipboard from 'copy-to-clipboard'
import _ from 'lodash/fp'
import leven from 'leven'
import React, { Component } from 'react'

import { SUI } from 'src/lib'
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
  ACCESSIBILITY_ICONS: {
    title: 'Accessibility',
    description: 'Icons can represent accessibility standards.',
  },
  ARROWS_ICONS: {
    title: 'Arrows',
    description: 'Icons can be used to indicate a direction.',
  },
  AUDIO_VIDEO_ICONS: {
    title: 'Audio & Video',
    description: 'Icons can be used to represent common ways to interact with audio and video.',
  },
  BUSINESS_ICONS: {
    title: 'Business',
    description: 'Icons can be used to represent business and common business actions.',
  },
  CHESS_ICONS: {
    title: 'Chess',
    description: 'Icons which represent the game chess.',
  },
  CODE_ICONS: {
    title: 'Code',
    description: 'Icons can represent programming and programming tools.',
  },
  COMMUNICATION_ICONS: {
    title: 'Communication',
    description: 'Icons which represent common ways of communication.',
  },
  COMPUTERS_ICONS: {
    title: 'Computers',
    description: 'Icons can represent computing devices, or types of content found on a computer.',
  },
  CURRENCY_ICONS: {
    title: 'Currency',
    description: 'Icons can represent units of currency.',
  },
  DATE_TIME_ICONS: {
    title: 'Date & Time',
    description: 'Icons that represent common ways of showing date and time.',
  },
  DESIGN_ICONS: {
    title: 'Design',
    description: 'Icons can represent common design related symbols or techniques.',
  },
  EDITORS_ICONS: {
    title: 'Editors',
    description: 'Icons can represent text editors and common editor actions.',
  },
  FILES_ICONS: {
    title: 'Files',
    description: 'Icons can represent elements of a computer and its file system.',
  },
  GENDERS_ICONS: {
    title: 'Genders',
    description: 'Icons can represent genders or types of sexuality.',
  },
  HANDS_ICONS: {
    title: 'Hands & Gestures',
    description: 'Icons can represent hand signals and gestures.',
  },
  HEALTH_ICONS: {
    title: 'Health',
    description: 'Icons which represent common health symbols.',
  },
  IMAGES_ICONS: {
    title: 'Images',
    description: 'Icons that represent common image symbols and actions.',
  },
  INTERFACES_ICONS: {
    title: 'Interfaces',
    description: 'Icons can represent common actions a user can take or use.',
  },
  MAPS_ICONS: {
    title: 'Maps',
    description: 'Icons can be used to represent elements on a map.',
  },
  OBJECTS_ICONS: {
    title: 'Objects',
    description: 'Icons can be used to represent common objects.',
  },
  PAYMENTS_SHOPPING_ICONS: {
    title: 'Payments & Shopping',
    description: 'Icons can represent common forms of payment and shopping actions.',
  },
  SHAPES_ICONS: {
    title: 'Shapes',
    description: 'Icons can be used to create shapes.',
  },
  SPINNERS_ICONS: {
    title: 'Spinners',
    description: 'Icons can represent loading.',
  },
  SPORTS_ICONS: {
    title: 'Sports',
    description: 'Icons which represent sports.',
  },
  STATUS_ICONS: {
    title: 'Status',
    description: 'Icons can represent different states.',
  },
  USERS_PEOPLE_ICONS: {
    title: 'Users & People',
    description: 'Icons can represent users or people.',
  },
  BRANDS_ICONS: {
    title: 'Brands',
    description: 'Icons can represent logos to common brands.',
  },
  ICON_ALIASES: {
    title: 'Icon Aliases',
    description: 'Some of icons have usefull aliases.',
  },
  DEPRECATED: {
    title: 'Deprecated',
    description: [
      'Icons which where removed in FontAwesome 5, but pointed them to another icon which matches or is similar for ',
      'compatibility reasons.',
    ].join(''),
  },
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
            <Header
              as='h3'
              content={iconKeyToHeaderMap[iconKey].title}
              dividing
              subheader={iconKeyToHeaderMap[iconKey].description}
              textAlign='left'
            />
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
            <a href='https://fontawesome.com/' rel='noopener noreferrer' target='_blank'>Font Awesome 5.0.8</a>
            {' '}designed by the{' '}
            <a href='https://twitter.com/fontawesome' rel='noopener noreferrer'>FontAwesome</a> for its standard icon
            {' '}set.
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
