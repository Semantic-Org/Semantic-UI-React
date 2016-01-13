# Stardust  [![Code Climate](https://img.shields.io/codeclimate/github/TechnologyAdvice/stardust.svg?style=flat-square)](https://codeclimate.com/github/TechnologyAdvice/stardust) [![Gemnasium](https://img.shields.io/gemnasium/TechnologyAdvice/stardust.svg?style=flat-square)](https://gemnasium.com/TechnologyAdvice/stardust) [![Circle CI](https://img.shields.io/circleci/project/TechnologyAdvice/stardust.svg?style=flat-square)](https://circleci.com/gh/TechnologyAdvice/stardust/tree/master)

A [React] component library based on the delightful and easy-to-use [Semantic UI].

## Getting Started
Hey, we're in development. Minor versions may introduce **breaking changes until the [v1.0] release**. Please review [Contributing](#contributing) before submitting a PR.

### Installation

Install and save Stardust as a project dependency:

    npm i stardust -S

Stardust is built with ES6 and ES7 and needs to be compiled. We use [Babel] with a [.babelrc] file. If you're using Webpack it's also possible to specify `query` in the loader configuration with Babel `presets`.

### Usage

For more complete examples, check out the [Doc Site].

**ES6**
```jsx
import React, {Component} from 'react';
import {Button} from 'stardust';

export default class TryStardust extends Component {
  render() {
    return <Button>Hello</Button>;
  }
}
```

**ES5**
```js
var React = require('react');
var stardust = require('stardust');
var Button = stardust.Button;

var TryStardust = React.createClass({
  render: function() {
    return <Button>Make it happen!</Button>;
  }
});

module.exports = TryStardust;
```

## Development
Start by cloning this repo and installing dependencies:

    git clone git@github.com:TechnologyAdvice/stardust.git
    cd stardust
    npm install               # or simply npm i

Once dependencies are installed, start the application with:

    npm start

This will start a [Webpack Dev Server] which will watch your JS files for changes and automatically transpile, lint and provide source maps for development.

### Commands

For a listing of development commands use the following:

    npm run                   # list npm commands 
    gulp help                 # list gulp commands

### Deploying

    npm version <version>     # bump the new version
    git push                  # push bump commit
    git push --tags           # push version tag

## Contributing
Before submitting PRs please review our [Component Guidelines] and [Roadmap].

[.babelrc]: http://babeljs.io/docs/usage/babelrc/
[Babel]: http://babeljs.io/
[Component Guidelines]: https://github.com/TechnologyAdvice/stardust/blob/master/docs/app/ComponentGuidelines.md
[Doc Site]: https://technologyadvice.github.io/stardust/
[React]: https://facebook.github.io/react/
[Roadmap]: https://github.com/TechnologyAdvice/stardust/blob/master/ROADMAP.md
[Semantic UI]: http://semantic-ui.com/
[v1.0]: https://github.com/TechnologyAdvice/stardust/blob/master/ROADMAP.md#v1.0
[Webpack Dev Server]: https://github.com/webpack/webpack-dev-server/
