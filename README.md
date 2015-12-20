# Stardust  [![Code Climate](https://img.shields.io/codeclimate/github/TechnologyAdvice/stardust.svg?style=flat-square)](https://codeclimate.com/github/TechnologyAdvice/stardust) [![Gemnasium](https://img.shields.io/gemnasium/TechnologyAdvice/stardust.svg?style=flat-square)](https://gemnasium.com/TechnologyAdvice/stardust)

[React](https://facebook.github.io/react/) component library based on [Semantic UI](http://semantic-ui.com/).

```
npm i stardust -S
```

## Learn
Check out the [Documentation](https://technologyadvice.github.io/stardust/).

Before submitting PRs please review our [Component Guidelines]
(https://github.com/TechnologyAdvice/stardust/blob/master/docs/app/Component Guidelines.md) and [Roadmap](https://github.com/TechnologyAdvice/stardust/blob/master/docs/app/ROADMAP.md).


## Getting Started
Hey, we're in development. Minor versions may introduce **breaking changes until the [v1.0** release](https://github.com/TechnologyAdvice/stardust/blob/master/docs/app/ROADMAP.md#v1.0).

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

## Develop

1. `git clone git@github.com:TechnologyAdvice/stardust.git`
1. `npm install`
1. `gulp`

### Commands

```
npm run                   # list npm commands
gulp help                 # list gulp commands
```

### Deploying

```
npm version <version>     # bump the new version
npm run deploy            # pushes tags and publishes package
```
