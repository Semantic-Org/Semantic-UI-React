<p align="center">
  <a href="http://technologyadvice.github.io/stardust">
    <img height="128" width="128" src="https://cloud.githubusercontent.com/assets/5067638/17415622/7ac62496-5a3f-11e6-864e-217ad1d9e021.png">
  </a>
  <p align="center">
    The official <a href="http://semantic-ui.com">Semantic UI</a>
    +
    <a href="https://facebook.github.io/react">React</a>
    integration.
  </p>
</p>

# [Semantic-UI-React (Stardust)][2]
[![Gitter](https://img.shields.io/badge/gitter-join_chat-1dce73.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB4PSIwIiB5PSI1IiBmaWxsPSIjZmZmIiB3aWR0aD0iMSIgaGVpZ2h0PSI1Ii8%2BPHJlY3QgeD0iMiIgeT0iNiIgZmlsbD0iI2ZmZiIgd2lkdGg9IjEiIGhlaWdodD0iNyIvPjxyZWN0IHg9IjQiIHk9IjYiIGZpbGw9IiNmZmYiIHdpZHRoPSIxIiBoZWlnaHQ9IjciLz48cmVjdCB4PSI2IiB5PSI2IiBmaWxsPSIjZmZmIiB3aWR0aD0iMSIgaGVpZ2h0PSI0Ii8%2BPC9zdmc%2B&logoWidth=8&style=flat-square&maxAge=2592000)](https://gitter.im/TechnologyAdvice/stardust)
[![Circle CI](https://img.shields.io/circleci/project/TechnologyAdvice/stardust/master.svg?style=flat-square)](https://circleci.com/gh/TechnologyAdvice/stardust/tree/master)
[![Codecov](https://img.shields.io/codecov/c/github/TechnologyAdvice/stardust/master.svg?style=flat-square)](https://codecov.io/gh/TechnologyAdvice/stardust)
[![Gemnasium](https://img.shields.io/gemnasium/TechnologyAdvice/stardust.svg?style=flat-square)](https://gemnasium.com/TechnologyAdvice/stardust)
[![npm](https://img.shields.io/npm/v/stardust.svg?style=flat-square)](https://www.npmjs.com/package/stardust)

Hey, we're in development. Prior to reaching [v1.0.0][6]:

1. **MINOR** versions represent **breaking changes**
1. **PATCH** versions represent **fixes _and_ features**
1. There are **no deprecation warnings** between releases
1. You should consult the [**CHANGELOG**][18] and related issues/PRs for more information

### [Voice Your Opinion][19] :speech_balloon:

Help shape this library by weighing in on our [RFC (request for comments)][19] issues. 

### [How Can I Help?](#how-can-i-help) :hand:

### [Documentation][2] :blue_book:

### Getting started

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Install](#install)
- [Usage](#usage)
- [Debugger](#debugger)
- [How Can I Help?](#how-can-i-help)
  - [[v1.0 Migrations][15]](#v10-migrations15)
  - [[Missing Components][17]](#missing-components17)
  - [[Help Wanted Label][4]](#help-wanted-label4)
- [Our Principles](#our-principles)
- [Support](#support)
- [Releasing](#releasing)
- [Credit](#credit)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Install

```sh
npm i semantic-ui-react -S
```

## Usage

**App.js**

```js
import React from 'react'
import { Button } from 'semantic-ui-react'

export default () => (
  <Button>Hello</Button>
)
```

**index.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Semantic-UI-React</title>

  <!-- SUI CSS -->
  <link href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/semantic.css" rel="stylesheet">
</head>
<body>
  <script src="bundle.js"></script>
</body>
</html>
```

We then use [Webpack][13] to create `bundle.js` from `App.js` and include it in `index.html`.

For more complete examples, check out the [Doc Site][2].

## Debugger

We use the [debug](https://www.npmjs.com/package/debug) module for debugging.  You can turn debugging on and off via the `localStorage.debug` flag from the browser console.  See the [debug docs](https://www.npmjs.com/package/debug) for more.

```js
localStorage.debug = 'semanticUIReact:*'         // default, debug all components
localStorage.debug = 'semanticUIReact:dropdown'  // debug only the dropdown
localStorage.debug = null                        // turn debug off
```

Once you change the flag, you need to refresh your browser to see the changes in debug output.

## How Can I Help?

Our [CONTRIBUTING.md][1] is a step-by-step setup and development guide. It is meant to be read from top to bottom.  Once you're up to speed, each issue here includes more information on how you can help:

### [v1.0 Migrations][15]

Have a look at the task list on the issue to see where you can jump in.

### [Missing Components][17]

We're seeking component parity with Semantic UI, plus some addons.  There is an issue for every missing component, labeled [`enhancement` `help wanted`][17].  Just comment on the issue you'd like to take.

### [Help Wanted Label][4]

Any other issue labeled [`help wanted`][4] is ready for a PR.

## Our Principles

[TechnologyAdvice][9] has been [dogfooding][10] Semantic-UI-React in production since fall of 2015.  These are the guiding principles that have developed as a result:

- No jQuery dependency
- No animation dependencies
- Reuse SUI CSS transitions
- Complete keyboard support
- Complete SUI component definition support
- Completely documented
- Completely tested
- Abstract away HTML markup intricacies

## Support

|    Elements     |   Collections   |      Views      |     Modules     |     Behaviors      |
|-----------------|-----------------|-----------------|-----------------|--------------------|
| x Button        | x Breadcrumb    | _ Advertisement | x Accordion     | x Form Validation  |
| x Container     | x Form          | x Card          | x Checkbox      | *API (NA)*         |
| x Divider       | x Grid          | _ Comment       | _ Dimmer        | *Visibility (NA)*  |
| x Flag          | x Menu          | x Feed          | x Dropdown      |                    |
| x Header        | x Message       | x Item          | _ Embed         |                    |
| x Icon          | x Table         | x Statistic     | x Modal         |                    |
| x Image         |                 |                 | _ Nag           |                    |
| x Input         |                 |                 | _ Popup         |                    |
| x Label         |                 |                 | x Progress      |                    |
| x List          |                 |                 | x Rating        |                    |
| x Loader        |                 |                 | x Search        |                    |
| x Rail          |                 |                 | _ Shape         |                    |
| _ Reveal        |                 |                 | _ Sidebar       |                    |
| x Segment       |                 |                 | _ Sticky        |                    |
| x Step          |                 |                 | _ Tab           |                    |
|                 |                 |                 | _ Transition    |                    |

## Releasing

On the latest clean `master`:

```sh
npm run release:major
npm run release:minor
npm run release:patch
```

## Credit

Made with :heart: [@TechnologyAdvice][9], a ridiculous [place to work][16].

[1]: https://github.com/TechnologyAdvice/stardust/blob/master/.github/CONTRIBUTING.md
[2]: https://technologyadvice.github.io/stardust/
[3]: https://facebook.github.io/react/
[4]: https://github.com/TechnologyAdvice/stardust/labels/help%20wanted
[5]: http://semantic-ui.com/
[6]: https://github.com/TechnologyAdvice/stardust/milestone/1
[7]: https://github.com/webpack/webpack-dev-server/
[8]: https://github.com/TechnologyAdvice/stardust/issues/243
[9]: https://github.com/TechnologyAdvice
[10]: https://en.wikipedia.org/wiki/Eating_your_own_dog_food
[11]: https://github.com/TechnologyAdvice/stardust/issues/247
[12]: https://github.com/TechnologyAdvice/stardust/issues/243
[13]: https://webpack.github.io
[14]: https://github.com/TechnologyAdvice/stardust/issues
[15]: https://github.com/TechnologyAdvice/stardust/issues/269
[16]: http://technologyadvice.com/careers
[17]: https://github.com/TechnologyAdvice/stardust/issues?q=is%3Aopen+label%3A%22help+wanted%22+label%3Aenhancement
[18]: https://github.com/TechnologyAdvice/stardust/blob/master/CHANGELOG.md
[19]: https://github.com/TechnologyAdvice/stardust/issues?q=is%3Aopen+RFC+label%3ARFC
