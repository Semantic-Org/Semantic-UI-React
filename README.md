# Stardust  [![Code Climate](https://img.shields.io/codeclimate/github/TechnologyAdvice/stardust.svg?style=flat-square)](https://codeclimate.com/github/TechnologyAdvice/stardust)
[![Gemnasium](https://img.shields.io/gemnasium/TechnologyAdvice/stardust.svg?style=flat-square)](https://gemnasium.com/TechnologyAdvice/stardust)
[![Circle CI](https://circleci.com/gh/TechnologyAdvice/stardust/tree/master.svg?style=svg)](https://circleci.com/gh/TechnologyAdvice/stardust/tree/master)

[React] component library based on [Semantic UI].

    npm i stardust -S

## Learn
Check out the [Doc Site] for usage documentation.

Review our [Component Guidelines].

## Getting Started
Hey, we're in development.  Minor versions may introduce **breaking changes until v1**.

### Babel
Stardust is built with ES6 and ES7.  Use Babel with the [stage 0](http://babeljs.io/docs/usage/experimental/#enable-by-stage) option to enable these features.  We suggest using a [.babelrc](http://babeljs.io/docs/usage/babelrc/) file, which is also picked up by the webpack [babel-loader](https://github.com/babel/babel-loader).

### Usage

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

## Installation
Start by cloning this repo and installing dependencies:

    git clone git@github.com:TechnologyAdvice/stardust.git stardust && cd $_
    npm install               # or simply npm i

## Usage
Once dependencies are installed, start the application with:

    npm start

This will start a [Webpack Dev Server] which will watch your JS files for changes and automatically transpile, lint and provide source maps for development.

### Commands

    npm run                   # list npm commands 
    gulp help                 # list gulp commands

### Deploying

    npm version <version>     # bump the new version
    npm run deploy            # pushes tags and publishes package

[Component Guidelines]: https://github.com/TechnologyAdvice/stardust/blob/master/docs/app/ComponentGuidelines.md
[Doc Site]: https://technologyadvice.github.io/stardust/
[React]: https://facebook.github.io/react/
[Semantic UI]: http://semantic-ui.com/
[Webpack Dev Server]: https://github.com/webpack/webpack-dev-server/
