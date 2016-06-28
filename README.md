# Stardust
[![Circle CI](https://img.shields.io/circleci/project/TechnologyAdvice/stardust/master.svg?style=flat-square)](https://circleci.com/gh/TechnologyAdvice/stardust/tree/master)
[![Codecov](https://img.shields.io/codecov/c/github/TechnologyAdvice/stardust/master.svg?style=flat-square)](https://codecov.io/gh/TechnologyAdvice/stardust)
[![Code Climate](https://img.shields.io/codeclimate/github/TechnologyAdvice/stardust.svg?style=flat-square)](https://codeclimate.com/github/TechnologyAdvice/stardust)
[![Gemnasium](https://img.shields.io/gemnasium/TechnologyAdvice/stardust.svg?style=flat-square)](https://gemnasium.com/TechnologyAdvice/stardust)

The [official][8] integration between [Semantic UI][5] and [React][3].

## Getting Started
Hey, we're in development. Minor versions may introduce **breaking changes until the [v1.0][6] release**.

>There are [big changes](#how-can-i-help) taking place while we [migrate to SUI-Org][12].

### Installation

    npm i stardust -S

### Usage

**App.js**

```jsx
import React, { Component } from 'react'
import { Button } from 'stardust'

export default class TryStardust extends Component {
  render() {
    return <Button>Hello</Button>
  }
}
```

**index.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Try Stardust</title>

  <!-- SUI CSS -->
  <link href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/semantic.css" rel="stylesheet">

  <!-- Temporary script dependencies until we're done removing jQuery -->
  <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.js"></script>
  <script src="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/semantic.js"></script>
</head>
<body>
  <script src="bundle.js"></script>
</body>
</html>
```

We then use [Webpack][13] to create `bundle.js` from `App.js` and include it in `index.html`.

For more complete examples, check out the [Doc Site][2].

## How Can I Help?

### v1.0 Migrations

We're making two migrations right now:

1. [Moving legacy component APIs to our v1 API][15]
1. [Removing jQuery and SUI JS][11]

Each of these issues includes a list of components and more information on how you can help.

### New Components

There is an [issue][14] for every missing component.  They are all labeled `enhancement` `help wanted` and we're accepting PRs for these.

Be sure to check out the above migrations before embarking on a new component.  All new components should be written in accordance with the migrations above.

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
    npm install

### Doc Site

Once dependencies are installed, start the application with:

    npm start

This launches the doc site for development.  [Webpack Dev Server][7] will watch your JS files for changes and automatically transpile, lint and provide source maps.

### Tests

It is also helpful to develop against tests:

    npm test
    
This will run PhantomJS with Karma on the command line.  Just as before, JS files are watched and re-tested on change.

### Debugger

We use the [debug](https://www.npmjs.com/package/debug) module for debugging.  You can turn debugging on and off via the `localStorage.debug` flag from the browser console.  See the [debug docs](https://www.npmjs.com/package/debug) for more.

```js
localStorage.debug = 'stardust:*'         // default, debug all components
localStorage.debug = 'stardust:dropdown'  // debug only the dropdown
localStorage.debug = null                 // turn debug off
```

Once you change the flag, you need to refresh your browser to see the changes in debug output.

### Commands

List all scripts:

    npm run

### Releasing

On the latest clean `master`:

    npm run release:major
    npm run release:minor
    npm run release:patch

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
[13]: https://webpack.github.io
[14]: https://github.com/TechnologyAdvice/stardust/issues
[15]: https://github.com/TechnologyAdvice/stardust/issues/269
