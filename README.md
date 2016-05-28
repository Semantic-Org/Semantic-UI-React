# Stardust
[![Circle CI](https://img.shields.io/circleci/project/TechnologyAdvice/stardust/master.svg?style=flat-square)](https://circleci.com/gh/TechnologyAdvice/stardust/tree/master)
[![Codecov](https://img.shields.io/codecov/c/github/TechnologyAdvice/stardust/master.svg?style=flat-square)](https://codecov.io/gh/TechnologyAdvice/stardust)
[![Code Climate](https://img.shields.io/codeclimate/github/TechnologyAdvice/stardust.svg?style=flat-square)](https://codeclimate.com/github/TechnologyAdvice/stardust)
[![Gemnasium](https://img.shields.io/gemnasium/TechnologyAdvice/stardust.svg?style=flat-square)](https://gemnasium.com/TechnologyAdvice/stardust)

The [official][8] integration between [Semantic UI][5] and [React][3].

## Getting Started
Hey, we're in development. Minor versions may introduce **breaking changes until the [v1.0][6] release**.

>There are [big changes][11] taking place while we [migrate to SUI-Org][12].

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

## Our Principles

[TechnologyAdvice][9] has been [dogfooding][10] Stardust in production since fall of 2015.  This living list is updated as we iterate.  We'll lock it in as our v1.0 constitution soon.

- No jQuery dependency
- No animation dependencies
- Reuse SUI CSS transitions
- Complete keyboard support
- Complete SUI component definition support
- Completely documented
- Completely tested
- Abstract away HTML markup intricacies

## Support

### Elements

- [x] Button
- [x] Container
- [x] Divider
- [ ] Flag
- [x] Header
- [x] Icon
- [x] Image
- [x] Input
- [x] Label
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

## Credit

Originally created with :heart: at [TechnologyAdvice][9].


[1]: https://github.com/TechnologyAdvice/stardust/blob/master/docs/app/ComponentGuidelines.md
[2]: https://technologyadvice.github.io/stardust/
[3]: https://facebook.github.io/react/
[4]: https://github.com/TechnologyAdvice/stardust/blob/master/ROADMAP.md
[5]: http://semantic-ui.com/
[6]: https://github.com/TechnologyAdvice/stardust/blob/master/ROADMAP.md#v1.0
[7]: https://github.com/webpack/webpack-dev-server/
[8]: https://github.com/TechnologyAdvice/stardust/issues/243
[9]: https://github.com/TechnologyAdvice
[10]: https://en.wikipedia.org/wiki/Eating_your_own_dog_food
[11]: https://github.com/TechnologyAdvice/stardust/issues/247
[12]: https://github.com/TechnologyAdvice/stardust/issues/243
