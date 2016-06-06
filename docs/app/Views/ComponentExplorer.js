import faker from 'faker'
import _ from 'lodash'
import React, { Component, PropTypes } from 'react'

import * as stardust from 'stardust'
import { Button, Divider, Grid, Header, Icon, Select } from 'src'
import ExperimentBanner from 'docs/app/Components/ExperimentBanner/ExperimentBanner'

const options = _.sortBy(_.map(stardust, (component, name) => ({
  text: _.startCase(name),
  value: name,
})), 'text')

const inputStyle = {
  padding: '0.25em 0.5em',
  width: '100%',
  borderRadius: '0.2em',
  border: '1px solid #ccc',
}

const selectStyle = {
  paddingLeft: '1em',
  margin: '0.2em 0',
  width: '100%',
  fontSize: '0.95em',
  border: 'none',
}

const preStyle = {
  fontSize: '0.85em',
}

const initialComponent = 'Icon'

const initialProps = {
  Accordion: {
    styled: true,
    panels: _.times(3, n => ({
      title: `${faker.hacker.verb()} ${faker.hacker.noun()}`,
      content: faker.hacker.phrase(),
    })),
  },
  Breadcrumb: {
    sections: [
      { text: 'Home', link: true },
      { text: 'Store', link: true },
      { text: 'T-Shirt', active: true },
    ],
  },
  Button: {
    children: 'Click Me',
  },
  Card: {
    image: 'http://semantic-ui.com/images/avatar/large/elliot.jpg',
    header: 'Elliot Baker',
    meta: 'Friend',
    description: 'Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.',
    extra: '16 Friends',
  },
  Checkbox: {
    label: 'I agree to the terms and conditions.',
  },
  Dropdown: {
    placeholder: 'Select a user...',
    search: true,
    selection: true,
    fluid: true,
    options: _.times(5, n => {
      const text = faker.name.findName()
      return { text, value: _.snakeCase(text) }
    }),
  },
  Feed: {
    events: [{
      date: '1 Hour Ago',
      image: 'http://semantic-ui.com/images/avatar/small/elliot.jpg',
      meta: '4 Likes',
      summary: 'Elliot Fu added you as a friend',
    }, {
      date: '4 days ago',
      image: 'http://semantic-ui.com/images/avatar/small/helen.jpg',
      meta: '1 Like',
      summary: 'Helen Troy added 2 new illustrations',
      extraImages: [
        'http://semantic-ui.com/images/wireframe/image.png',
        'http://semantic-ui.com/images/wireframe/image.png',
      ],
    }, {
      date: '3 days ago',
      image: 'http://semantic-ui.com/images/avatar/small/joe.jpg',
      meta: '8 Likes',
      summary: 'Joe Henderson posted on his page',
      extraText: [
        "Ours is a life of constant reruns. We're always circling back to where we'd we started, then starting all",
        "over again. Even if we don't run extra laps that day, we surely will come back for more of the same another",
        'day soon.',
      ].join(' '),
    }],
  },
  Icon: {
    name: 'thumbs up',
    color: 'green',
    inverted: true,
    circular: true,
    size: 'large',
  },
  Image: {
    src: '//unsplash.it/640/480',
  },
  Input: {
    type: 'password',
    icon: 'lock',
    className: 'icon',
    placeholder: 'Password',
  },
  Label: {
    children: 'Inbox',
  },
  Loader: {
    active: true,
    inline: 'centered',
  },
  Radio: {
    label: 'Make my profile visible',
  },
  Rating: {
    defaultRating: 3,
    maxRating: 5,
    icon: 'star',
    size: 'large',
  },
  Segment: {
    children: faker.company.bs(),
  },
}

const getInitialProps = name => initialProps[name] || {}

export default class ComponentExplorer extends Component {
  state = {
    componentName: initialComponent,
    SelectedComponent: stardust[initialComponent],
    props: getInitialProps(initialComponent),
    callbackLog: [],
  }

  handleComponentChange = (e, value) => {
    this.setState({
      componentName: value,
      SelectedComponent: stardust[value],
      props: getInitialProps(value),
      callbackLog: [],
    })
  }

  generateCallbacks = () => {
    const { propTypes } = this.state.SelectedComponent
    const funcProps = _.sortBy(_.keys(_.pickBy(propTypes, func => func === PropTypes.func)))

    const callbacks = {}

    const printArgument = a => typeof a === 'object' ? JSON.stringify(a) : a

    _.each(funcProps, propName => {
      callbacks[propName] = (...args) => {
        // don't log the entire event object
        if (args[0].nativeEvent) args[0] = '[SyntheticEvent]'

        this.setState({
          callbackLog: [
            ...this.state.callbackLog,
            `${propName}(${args.map(printArgument).join(', ')})`,
          ],
        })
      }
    })

    return callbacks
  }

  setProps = (name, value) => {
    this.setState({
      props: {
        ...this.state.props,
        [name]: value,
      },
    })
  }

  renderFields = () => {
    const { propTypes, _meta } = this.state.SelectedComponent
    const { props } = this.state

    const boolProps = _.sortBy(_.keys(_.pickBy(propTypes, func => func === PropTypes.bool)))
    const funcProps = _.sortBy(_.keys(_.pickBy(propTypes, func => func === PropTypes.func)))
    const stringProps = _.sortBy(_.keys(_.pickBy(propTypes, func => func === PropTypes.string)))
    const enumProps = _meta.props
    const unknownProps = _.without(_.keys(propTypes), ...boolProps, ...funcProps, ...stringProps, ..._.keys(enumProps))

    return (
      <div>
        {/* Booleans */}
        {!boolProps.length ? null : _.map(boolProps, name => (
          <div key={name}>
            <label key={name}>
              <input
                type='checkbox'
                name={name}
                checked={props[name] || false}
                onChange={e => this.setProps(name, e.target.checked || false)}
              />
              &nbsp;{name}
            </label>
          </div>
        ))}
        {/* Enums */}
        {!enumProps ? null : _.map(enumProps, (values, propName) => (
          <div key={propName}>
            <select
              value={props[propName]}
              style={selectStyle}
              onChange={e => this.setProps(propName, e.target.value)}
            >
              <option value={undefined}>{propName}=</option>
              {_.map(values, propValue => (
                <option key={propValue} value={propValue}>
                  {propName}={`'${propValue}'`}
                </option>
              ))}
            </select>
          </div>
        ))}
        {/* Strings */}
        {!stringProps.length ? null : _.map(stringProps, name => (
          <div key={name}>
            <label>{name}</label>
            <input
              value={props[name] || ''}
              onChange={e => this.setProps(name, e.target.value)}
              style={inputStyle}
            />
          </div>
        ))}
        {!funcProps.length ? null : (
          <div>
            <Divider hidden />
            <Header.H4>Callbacks</Header.H4>
            {_.map(funcProps, name => (
              <div key={name}><code>{name}</code></div>
            ))}
          </div>
        )}
        {!unknownProps.length ? null : (
          <div>
            <Divider hidden />
            <Header.H4>Unknown <Header.Subheader>No controls generated for:</Header.Subheader></Header.H4>
            {_.map(unknownProps, name => (
              <div key={name}><code>{name}</code></div>
            ))}
          </div>
        )}
      </div>
    )
  }

  render() {
    const { SelectedComponent, componentName, props, callbackLog } = this.state
    const callbacks = this.generateCallbacks()

    return (
      <div>
        <ExperimentBanner />
        <div style={{ display: 'flex' }}>
          <div style={{ flex: '0 0 200px', paddingRight: '2em' }}>
            <Select fluid search options={options} value={componentName} onChange={this.handleComponentChange} />
            <Divider hidden />
            {this.renderFields()}
            <Divider hidden />
            <Button className='fluid basic' onClick={() => this.handleComponentChange(null, componentName)}>
              <Icon name='refresh' />
              Initial
            </Button>
            <br />
          </div>
          <div style={{ flex: 1 }}>
            <Header.H3>Rendered:</Header.H3>
            <Grid padded columns={1}>
              <Grid.Column>
                <SelectedComponent {...props} {...callbacks} />
              </Grid.Column>
            </Grid>
            <Divider section />
            <Grid padded columns={2}>
              <Grid.Column>
                <Header.H3>Props:</Header.H3>
                <pre style={preStyle}>{JSON.stringify(props, null, 2)}</pre>
              </Grid.Column>
              <Grid.Column>
                <Header.H3>Callback Log:</Header.H3>
                <pre style={preStyle}>{_.map(callbackLog, (item, i) => (
                  <div key={i}>{item}</div>
                ))}</pre>
              </Grid.Column>
            </Grid>
          </div>
        </div>
      </div>
    )
  }
}
