import _ from 'lodash/fp'
import React from 'react'

import * as semanticUIReact from 'src'
import docgenInfo from 'docs/app/docgenInfo'
import { parentComponents } from 'docs/app/utils'

const { Form, Grid, Header, Table, Statistic } = semanticUIReact

class APIEAnalyzer extends React.Component {
  state = {
    hideAria: true,
    hideDefaults: true,
    hideReactProps: true,
    showJSON: false,
  }

  hideReactProps = () =>
    this.setState(({ hideReactProps }) => ({ hideReactProps: !hideReactProps }))

  hideDefaults = () => this.setState(({ hideDefaults }) => ({ hideDefaults: !hideDefaults }))

  hideAria = () => this.setState(({ hideAria }) => ({ hideAria: !hideAria }))

  showJSON = () => this.setState(({ showJSON }) => ({ showJSON: !showJSON }))

  renderTable = (props, data) => (
    <Table compact definition>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell content='Prop' />
          <Table.HeaderCell content='Count' />
          <Table.HeaderCell content='Components' />
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {_.keys(data).map(prop => (
          <Table.Row key={prop}>
            <Table.Cell>{prop}</Table.Cell>
            <Table.Cell>{data[prop].count}</Table.Cell>
            <Table.Cell>
              <div
                style={{ display: 'grid', gridTemplateColumns: '10rem 1fr', gridGap: '0.5em 1em' }}
              >
                {_.map(
                  ({ displayName, description }) => [
                    <strong key='displayName'>{displayName}</strong>,
                    <span key='description'>{description}</span>,
                  ],
                  data[prop].components,
                )}
              </div>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )

  renderStatistics = (props, data) => {
    const componentCount = _.keys(semanticUIReact).length
    const parentCount = _.keys(parentComponents).length
    const partCount = componentCount - parentCount

    const propCount = _.keys(data).length
    const globalPropCount = _.filter(x => x.count === componentCount, data).length
    const oneOffPropCount = _.filter(x => x.count === 1, data).length

    return (
      <Grid padded columns='equal'>
        <Grid.Column>
          <Header dividing textAlign='center'>
            Components
          </Header>
          <Statistic.Group widths={3}>
            <Statistic value={parentCount} label='Parents' />
            <Statistic value={partCount} label='Parts' />
            <Statistic value={componentCount} label='Total' />
          </Statistic.Group>
        </Grid.Column>
        <Grid.Column>
          <Header dividing textAlign='center'>
            Props
          </Header>
          <Statistic.Group widths={3}>
            <Statistic value={globalPropCount} label='Globals' color='grey' />
            <Statistic value={oneOffPropCount} label='One offs' color='grey' />
            <Statistic value={propCount} label='Total' color='grey' />
          </Statistic.Group>
        </Grid.Column>
      </Grid>
    )
  }

  render() {
    const { hideAria, hideDefaults, hideReactProps, showJSON } = this.state

    // [{ prop, component, description }, ...{}]
    const data = _.flow(
      _.flatMap(({ displayName, props }) =>
        _.map(
          ({ name, description }) => ({
            prop: name,
            displayName,
            description: description.join(' '),
          }),
          props,
        ),
      ),
      !hideReactProps
        ? _.identity
        : _.filter(({ prop }) => !['children', 'className'].includes(prop)),
      !hideDefaults ? _.identity : _.filter(({ prop }) => !/^defaultA-Z/.test(prop)),
      !hideAria ? _.identity : _.filter(({ prop }) => !/^aria-/.test(prop)),
      _.sortBy('prop'),
      _.groupBy('prop'),
      _.mapValues(val => ({ components: val, count: val.length })),
    )(docgenInfo)

    return (
      <Grid padded columns='1'>
        <Grid.Column>{this.renderStatistics(this.props, data)}</Grid.Column>
        <Grid.Column>
          <Form>
            <Form.Group inline>
              <Form.Checkbox label='Hide Aria' checked={hideAria} onChange={this.hideAria} />
              <Form.Checkbox
                label='Hide Defaults'
                checked={hideDefaults}
                onChange={this.hideDefaults}
              />
              <Form.Checkbox
                label='Hide React Props'
                checked={hideReactProps}
                onChange={this.hideReactProps}
              />
              <Form.Checkbox label='Show JSON' checked={showJSON} onChange={this.showJSON} />
            </Form.Group>
          </Form>
        </Grid.Column>
        <Grid.Column>
          {showJSON ? (
            <pre>{JSON.stringify(data, null, 2)}</pre>
          ) : (
            this.renderTable(this.props, data)
          )}
        </Grid.Column>
      </Grid>
    )
  }
}

export default APIEAnalyzer
