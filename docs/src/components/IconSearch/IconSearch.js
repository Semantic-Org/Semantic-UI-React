import copyToClipboard from 'copy-to-clipboard'
import _ from 'lodash/fp'
import leven from 'leven'
import React, { Component } from 'react'
import { Form, Grid, Header, Icon, Message, Popup } from 'semantic-ui-react'

import * as SUI from 'src/lib/SUI'

const gridStyle = {
  background: '#fff',
}

const iconKeyToHeaderMap = {
  ACCESSIBILITY: {
    title: 'Accessibility',
    description: 'Icons can represent accessibility standards',
  },
  ARROWS: { title: 'Arrows', description: 'Icons can be used to indicate a direction' },
  AUDIO_VIDEO: {
    title: 'Audio & Video',
    description: 'Icons can be used to represent common ways to interact with audio and video',
  },
  BUSINESS: {
    title: 'Business',
    description: 'Icons can be used to represent business and common business actions',
  },
  CHESS: { title: 'Chess', description: 'Icons which represent the game chess' },
  CODE: { title: 'Code', description: 'Icons can represent programming and programming tools' },
  COMMUNICATION: {
    title: 'Communication',
    description: 'Icons which represent common ways of communication',
  },
  COMPUTERS: {
    title: 'Computers',
    description: 'Icons can represent computing devices, or types of content found on a computer',
  },
  CURRENCY: { title: 'Currency', description: 'Icons can represent units of currency' },
  DATE_TIME: {
    title: 'Date & Time',
    description: 'Icons that represent common ways of showing date and time',
  },
  DESIGN: {
    title: 'Design',
    description: 'Icons can represent common design related symbols or techniques',
  },
  EDITORS: {
    title: 'Editors',
    description: 'Icons can represent text editors and common editor actions',
  },
  FILES: {
    title: 'Files',
    description: 'Icons can represent elements of a computer and its file system',
  },
  GENDERS: { title: 'Genders', description: 'Icons can represent genders or types of sexuality' },
  HANDS_GESTURES: {
    title: 'Hands & Gestures',
    description: 'Icons can represent hand signals and gestures',
  },
  HEALTH: { title: 'Health', description: 'Icons which represent common health symbols' },
  IMAGES: { title: 'Images', description: 'Icons that represent common image symbols and actions' },
  INTERFACES: {
    title: 'Interfaces',
    description: 'Icons can represent common actions a user can take or use',
  },
  LOGISTICS: { title: 'Logistics', description: 'Icons can represent common logistic activity' },
  MAPS: { title: 'Maps', description: 'Icons can be used to represent elements on a map' },
  MEDICAL: { title: 'Medical', description: 'Icons can represent common medical actions' },
  OBJECTS: { title: 'Objects', description: 'Icons can be used to represent common objects' },
  PAYMENTS_SHOPPING: {
    title: 'Payments & Shopping',
    description: 'Icons can represent common forms of payment and shopping actions',
  },
  SHAPES: { title: 'Shapes', description: 'Icons can be used to create shapes' },
  SPINNERS: { title: 'Spinners', description: 'Icons can represent loading' },
  SPORTS: { title: 'Sports', description: 'Icons which represent sports' },
  STATUS: { title: 'Status', description: 'Icons can represent different states' },
  USERS_PEOPLE: { title: 'Users & People', description: 'Icons can represent users or people' },
  VEHICLES: { title: 'Vehicles', description: 'Icons can represent vehicles or transport' },
  WRITING: { title: 'Writing', description: 'Icons can represent writing and editing' },
  BRANDS: { title: 'Brands', description: 'Icons can represent logos to common brands' },
  ICON_ALIASES: { title: 'Icon Aliases', description: 'Some of icons have usefull aliases.' },
}

const similarityScore = (strA, strB) => {
  const aWords = strA.trim().split(' ')
  const bWords = strB.trim().split(' ')

  return _.flow(
    _.map((a) => _.map((b) => leven(a, b), bWords)),
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

  copy = (text) => () => {
    copyToClipboard(text)
    this.setState({ copied: true })
    setTimeout(() => this.setState({ copied: false }), 1000)
  }

  renderIconColumn = (name, section) => (
    <Popup
      key={[name, section].filter(Boolean).join('_')}
      mouseEnterDelay={1000}
      inverted
      closeOnTriggerClick={false}
      closeOnDocumentClick={false}
      style={{ width: '8em', textAlign: 'center' }}
      size='mini'
      position='top center'
      content={this.state.copied ? 'Copied!' : 'Click to copy'}
      trigger={
        <Grid.Column className='docs-icon-set-column' onClick={this.copy(name)}>
          <Icon name={name} size='big' />
          <p className='name'>{name}</p>
        </Grid.Column>
      }
    />
  )

  renderIcons = () => {
    const { includeSimilar, search } = this.state
    const query = search.trim().toLowerCase()
    const iconKeys = Object.keys(iconKeyToHeaderMap)

    // no search
    if (!query) {
      return iconKeys.map((iconKey) => (
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
          {SUI[iconKey].map((name) => this.renderIconColumn(name, iconKey))}
        </Grid>
      ))
    }

    const iconSearchMatches = SUI.ICONS_AND_ALIASES.filter((name) => {
      // contains
      if (name.indexOf(query) !== -1) return true

      // similar
      return includeSimilar && similarityScore(name, query) <= 2
    }).map((name) => this.renderIconColumn(name))

    // no results
    if (iconSearchMatches.length === 0) {
      return (
        <Grid>
          <Grid.Column textAlign='left'>
            <Message
              info
              icon='search'
              content={`There is no icon name or alias ${
                includeSimilar ? 'similar' : 'that contains'
              } to "${query}".`}
              header='No Results'
            />
          </Grid.Column>
        </Grid>
      )
    }

    // results
    return (
      <Grid columns={5} doubling>
        {iconSearchMatches}
      </Grid>
    )
  }

  render() {
    const { includeSimilar } = this.state
    return (
      <Grid columns={1} padded style={gridStyle}>
        <Grid.Column>
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
                label='Show similar names'
                checked={includeSimilar}
                onChange={this.handleIncludeSimilarChange}
              />
            </Form.Group>
          </Form>

          <Message>
            Semantic includes a complete port of{' '}
            <a href='https://fontawesome.com/' rel='noopener noreferrer' target='_blank'>
              Font Awesome 5.0.8
            </a>{' '}
            designed by the{' '}
            <a href='https://twitter.com/fontawesome' rel='noopener noreferrer'>
              FontAwesome
            </a>{' '}
            for its standard icon set.
          </Message>
        </Grid.Column>
        <Grid.Column textAlign='center'>{this.renderIcons()}</Grid.Column>
      </Grid>
    )
  }
}
