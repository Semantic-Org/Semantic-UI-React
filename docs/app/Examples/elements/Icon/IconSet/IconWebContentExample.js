import _ from 'lodash'
import React from 'react'
import { Grid, Icon } from 'stardust'

const iconClasses = [
  'alarm', 'alarm slash', 'alarm outline', 'alarm slash outline', 'at', 'browser', 'bug', 'calendar outline',
  'calendar', 'cloud', 'code', 'comment', 'comments', 'comment outline', 'comments outline', 'copyright',
  'dashboard', 'dropdown', 'external square', 'external', 'eyedropper', 'feed', 'find', 'heartbeat', 'history',
  'home', 'idea', 'inbox', 'lab', 'mail', 'mail outline', 'mail square', 'map', 'options', 'paint brush',
  'payment', 'phone', 'phone square', 'privacy', 'protect', 'search', 'setting', 'settings', 'shop', 'sidebar',
  'signal', 'sitemap', 'tag', 'tags', 'tasks', 'terminal', 'text telephone', 'ticket', 'trophy', 'wifi',
]

const icons = _.map(iconClasses, iconClass => (
  <Grid.Column>
    <Icon className={iconClass} style={{ fontSize: '2em' }} />
    <div>{_.startCase(iconClass)}</div>
  </Grid.Column>
))

export default () => (
  <Grid className='center aligned doubling five column'>
    {icons}
  </Grid>
)
