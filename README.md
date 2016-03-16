# Stardust  [![Code Climate](https://img.shields.io/codeclimate/github/TechnologyAdvice/stardust.svg?style=flat-square)](https://codeclimate.com/github/TechnologyAdvice/stardust) [![Gemnasium](https://img.shields.io/gemnasium/TechnologyAdvice/stardust.svg?style=flat-square)](https://gemnasium.com/TechnologyAdvice/stardust) [![Circle CI](https://img.shields.io/circleci/project/TechnologyAdvice/stardust.svg?style=flat-square)](https://circleci.com/gh/TechnologyAdvice/stardust/tree/master)

A [React][3] component library based on the delightful and easy-to-use [Semantic UI][5].

## Getting Started
Hey, we're in development. Minor versions may introduce **breaking changes until the [v1.0][6] release**.

### Installation

    npm i stardust -S

### Usage

For more complete examples, check out the [Doc Site][2].

**ES6**
```jsx
import React, { Component } from 'react'
import { Button } from 'stardust'

export default class TryStardust extends Component {
  render() {
    return <Button>Hello</Button>
  }
}
```

## Support

### Elements

- [x] Button
- [x] Container
- [x] Divider
- [ ] Flag
- [x] Header
- [ ] Icon
- [x] Image
- [x] Input
- [ ] Label
- [x] List
- [ ] Loader
- [ ] Rail
- [ ] Reveal
- [x] Segment
- [ ] Step

### Collections

- [ ] Breadcrumb
- [x] Form
- [x] Grid
- [x] Menu
- [x] Message
- [x] Table

### Views

- [ ] Advertisement
- [ ] Card
- [ ] Comment
- [ ] Feed
- [x] Item
- [x] Statistic

### Modules

- [ ] Accordion
- [x] Checkbox
- [ ] Dimmer
- [x] Dropdown
- [ ] Embed
- [x] Modal
- [ ] Nag
- [ ] Popup
- [x] Progress
- [ ] Rating
- [ ] Search
- [ ] Shape
- [ ] Sidebar
- [ ] Sticky
- [ ] Tab
- [ ] Transition

### Behaviors

- API (not supported)
- [x] Form Validation
- Visibility (not supported)

## Development

Start by cloning this repo and installing dependencies:

    git clone git@github.com:TechnologyAdvice/stardust.git
    cd stardust
    npm install               # or simply npm i

Once dependencies are installed, start the application with:

    npm start

This will start a [Webpack Dev Server][7] which will watch your JS files for changes and automatically transpile, lint and provide source maps for development.

### Commands

For a listing of development commands use the following:

    npm run                   # list npm commands 
    gulp help                 # list gulp commands

### Releasing

On the latest clean `master`:

    npm run release:major
    npm run release:minor
    npm run release:patch

## Contributing

Before submitting PRs please review our [Component Guidelines][1] and [Roadmap][4].

[1]: https://github.com/TechnologyAdvice/stardust/blob/master/docs/app/ComponentGuidelines.md
[2]: https://technologyadvice.github.io/stardust/
[3]: https://facebook.github.io/react/
[4]: https://github.com/TechnologyAdvice/stardust/blob/master/ROADMAP.md
[5]: http://semantic-ui.com/
[6]: https://github.com/TechnologyAdvice/stardust/blob/master/ROADMAP.md#v1.0
[7]: https://github.com/webpack/webpack-dev-server/
