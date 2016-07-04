# Stardust
[![Circle CI](https://img.shields.io/circleci/project/TechnologyAdvice/stardust/master.svg?style=flat-square)](https://circleci.com/gh/TechnologyAdvice/stardust/tree/master)
[![Codecov](https://img.shields.io/codecov/c/github/TechnologyAdvice/stardust/master.svg?style=flat-square)](https://codecov.io/gh/TechnologyAdvice/stardust)
[![Code Climate](https://img.shields.io/codeclimate/github/TechnologyAdvice/stardust.svg?style=flat-square)](https://codeclimate.com/github/TechnologyAdvice/stardust)
[![Gemnasium](https://img.shields.io/gemnasium/TechnologyAdvice/stardust.svg?style=flat-square)](https://gemnasium.com/TechnologyAdvice/stardust)
[![npm](https://img.shields.io/npm/v/stardust.svg?style=flat-square)](https://www.npmjs.com/package/stardust)

The [official][8] integration between [Semantic UI][5] and [React][3].

>Hey, we're in development. There are [big changes](#how-can-i-help) taking place while we [migrate to SUI-Org][12]. Minor versions may introduce **breaking changes until the [v1.0][6] release**.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Install](#install)
- [Usage](#usage)
- [Debugger](#debugger)
- [How Can I Help?](#how-can-i-help)
  - [v1.0 Migrations](#v10-migrations)
  - [New Components](#new-components)
- [Our Principles](#our-principles)
- [Support](#support)
- [Releasing](#releasing)
- [Credit](#credit)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Install

```sh
npm i stardust -S
```

## Usage

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

## Debugger

We use the [debug](https://www.npmjs.com/package/debug) module for debugging.  You can turn debugging on and off via the `localStorage.debug` flag from the browser console.  See the [debug docs](https://www.npmjs.com/package/debug) for more.

```js
localStorage.debug = 'stardust:*'         // default, debug all components
localStorage.debug = 'stardust:dropdown'  // debug only the dropdown
localStorage.debug = null                 // turn debug off
```

Once you change the flag, you need to refresh your browser to see the changes in debug output.

## How Can I Help?

First, get setup and acquainted with development by reading the [contributing guidelines][1].

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

|    Elements     |   Collections   |      Views      |     Modules     |     Behaviors      |
|-----------------|-----------------|-----------------|-----------------|--------------------|
| x Button        | _ Breadcrumb    | _ Advertisement | x Accordion     | x Form Validation  |
| x Container     | x Form          | _ Card          | x Checkbox      | *API (NA)*         |
| x Divider       | x Grid          | _ Comment       | _ Dimmer        | *Visibility (NA)*  |
| _ Flag          | x Menu          | _ Feed          | x Dropdown      |                    |
| x Header        | x Message       | x Item          | _ Embed         |                    |
| x Icon          | x Table         | x Statistic     | x Modal         |                    |
| x Image         |                 |                 | _ Nag           |                    |
| x Input         |                 |                 | _ Popup         |                    |
| x Label         |                 |                 | x Progress      |                    |
| x List          |                 |                 | _ Rating        |                    |
| _ Loader        |                 |                 | _ Search        |                    |
| _ Rail          |                 |                 | _ Shape         |                    |
| _ Reveal        |                 |                 | _ Sidebar       |                    |
| x Segment       |                 |                 | _ Sticky        |                    |
| _ Step          |                 |                 | _ Tab           |                    |
|                 |                 |                 | _ Transition    |                    |

## Releasing

On the latest clean `master`:

```sh
npm run release:major
npm run release:minor
npm run release:patch
```

## Credit

Originally created with :heart: at [TechnologyAdvice][9].  A ridiculous [place to work][15].

[1]: https://github.com/TechnologyAdvice/stardust/blob/master/CONTRIBUTING.md
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
[16]: https://github.com/TechnologyAdvice/careers
