import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Icon, Menu } from 'semantic-ui-react'

export default class ComponentControlsCopyLink extends Component<any, any> {
  private mounted: boolean
  private readonly btnLabel = 'Permalink'

  public static propTypes = {
    anchorName: PropTypes.string,
    onClick: PropTypes.func,
  }

  public state: any = {}

  public shouldComponentUpdate(nextProps, nextState) {
    return this.state.active !== nextState.active
  }

  public componentDidMount() {
    this.mounted = true
  }

  public componentWillUnmount() {
    this.mounted = false
  }

  public render() {
    const { anchorName } = this.props
    const { active } = this.state

    return (
      <Menu.Item
        href={`#${anchorName}`}
        onClick={this.handleClick}
        color={active ? 'green' : undefined}
      >
        <Icon color={active ? 'green' : 'grey'} fitted name="linkify" size="large" />
        {active ? 'Copied!' : this.btnLabel}
      </Menu.Item>
    )
  }

  private handleClick = e => {
    const { onClick } = this.props

    e.preventDefault()
    onClick()

    this.setState({ active: true })
    setTimeout(this.resetActive, 3000)
  }

  private resetActive = () => this.mounted && this.setState({ active: false })
}
