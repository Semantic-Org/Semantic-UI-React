<!-- Logo -->
<p align="center">
  <a href="https://react.semantic-ui.com">
    <img height="128" width="128" src="https://github.com/Semantic-Org/Semantic-UI-React/raw/master/docs/app/logo.png">
  </a>
</p>

<!-- Name -->
<h1 align="center">
  <a href="https://react.semantic-ui.com/">Semantic UI React</a>
</h1>

<!-- Badges -->
<p align="center">
  <a href="https://gitter.im/Semantic-Org/Semantic-UI-React">
    <img alt="Gitter" src="https://img.shields.io/badge/gitter-join_chat-1dce73.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB4PSIwIiB5PSI1IiBmaWxsPSIjZmZmIiB3aWR0aD0iMSIgaGVpZ2h0PSI1Ii8%2BPHJlY3QgeD0iMiIgeT0iNiIgZmlsbD0iI2ZmZiIgd2lkdGg9IjEiIGhlaWdodD0iNyIvPjxyZWN0IHg9IjQiIHk9IjYiIGZpbGw9IiNmZmYiIHdpZHRoPSIxIiBoZWlnaHQ9IjciLz48cmVjdCB4PSI2IiB5PSI2IiBmaWxsPSIjZmZmIiB3aWR0aD0iMSIgaGVpZ2h0PSI0Ii8%2BPC9zdmc%2B&logoWidth=8&style=flat-square&maxAge=2592000" />
  </a>
  <a href="ttps://circleci.com/gh/Semantic-Org/Semantic-UI-React/tree/master">
    <img alt="Circle" src="https://img.shields.io/circleci/project/Semantic-Org/Semantic-UI-React/master.svg?style=flat-square" />
  </a>
  <a href="https://codecov.io/gh/Semantic-Org/Semantic-UI-React">
    <img alt="Codecov" src="https://img.shields.io/codecov/c/github/Semantic-Org/Semantic-UI-React/master.svg?style=flat-square" />
  </a>
  <a href="https://gemnasium.com/Semantic-Org/Semantic-UI-React">
    <img alt="Gemnasium" src="https://img.shields.io/gemnasium/Semantic-Org/Semantic-UI-React.svg?style=flat-square" />
  </a>
  <a href="https://www.npmjs.com/package/semantic-ui-react">
    <img alt="npm" src="https://img.shields.io/npm/v/semantic-ui-react.svg?style=flat-square" />
  </a>
</p>

Hey, we're in development. Prior to reaching [v1.0.0][6]:

1. **MINOR** versions represent **breaking changes**
1. **PATCH** versions represent **fixes _and_ features**
1. There are **no deprecation warnings** between releases
1. You should consult the [**CHANGELOG**][18] and related issues/PRs for more information

## Installation & Usage

See the [Documentation][2] for an introduction, usage information, and extensive examples.

## Example Projects

This is a listing of example projects and guides that will help you integrate Semantic UI React into your new or existing projects.

### [react-semantic.ui-starter][102]
Production-ready, performance-first, optimized, robust, fully-featured boilerplate/example for your new Progressive Web App.

### [semantic-ui-react-todos][100]
This example modifies the well-known [react-redux Todo List][101] to use Semantic UI components. There is also a write-up on the process in the project README.

## FAQ

### Can I use custom Icons?
Yes.  Just use `<Icon className='my-icon' />` instead of `<Icon name='my-icon' />`.  See https://github.com/Semantic-Org/Semantic-UI-React/issues/931#issuecomment-263643210 for detailed info and examples.

### How do I setup CSS?
There are several options.  Refer to our doc on [CSS Usage][23].

### Can I use a custom CSS theme?
Yes.  Semantic UI React includes components that render valid Semantic UI HTML, no CSS is included.  This allows you to load any Semantic UI CSS theme on top of your Semantic UI React app.

Here are some helpful links:

- [Building CSS with Webpack][24]
- [Building CSS with Meteor][26]
- [Creating a standalone theme][25]

## Built With Semantic UI React

These great products are built on Semantic UI React. Add yours [here][22].

- Netflix's Edge Developer Experience team's numerous [internal apps](https://github.com/Semantic-Org/Semantic-UI-React/issues/1604)
- http://stoplight.io
- https://roadmap.space
- https://edabit.com
- https://blackship.com
- http://www.brewhousesolutions.com
- https://www.lifebot.fr
- https://www.stackforge.co
- https://sublimefund.org

## Voice Your Opinion

Help shape this library by weighing in on our [RFC (request for comments)][19] issues. 

## How Can I Help?

Our [CONTRIBUTING.md][1] is a step-by-step setup and development guide. It is meant to be read from top to bottom.  Once you're up to speed, each issue here includes more information on how you can help:

### [Good First Contribution][21]

Issues labeled [`good first contribution`][21] are a great way to ease into development on this project. 

### [Missing Components][17]

We're seeking component parity with Semantic UI, plus some addons.  There is an issue for every missing component, labeled [`new component`][17].  Just comment on the issue you'd like to take.

### [Help Wanted Label][4]

Any other issue labeled [`help wanted`][4] is ready for a PR.

## Debugger

We use the [debug](https://www.npmjs.com/package/debug) module for debugging.  You can turn debugging on and off via the `localStorage.debug` flag from the browser console.  See the [debug docs](https://www.npmjs.com/package/debug) for more.

```js
localStorage.debug = 'semanticUIReact:*'         // default, debug all components
localStorage.debug = 'semanticUIReact:dropdown'  // debug only the dropdown
localStorage.debug = null                        // turn debug off
```

Once you change the flag, you need to refresh your browser to see the changes in debug output.

## Support

|    Elements     |   Collections   |      Views      |     Modules     |     Behaviors      |
|-----------------|-----------------|-----------------|-----------------|--------------------|
| ✓ Button        | ✓ Breadcrumb    | ✓ Advertisement | ✓ Accordion     |   Form Validation  |
| ✓ Container     | ✓ Form          | ✓ Card          | ✓ Checkbox      | *API (NA)*         |
| ✓ Divider       | ✓ Grid          | ✓ Comment       | ✓ Dimmer        | ✓ Visibility (NA)  |
| ✓ Flag          | ✓ Menu          | ✓ Feed          | ✓ Dropdown      |                    |
| ✓ Header        | ✓ Message       | ✓ Item          | ✓ Embed         |                    |
| ✓ Icon          | ✓ Table         | ✓ Statistic     | ✓ Modal         |                    |
| ✓ Image         |                 |                 | ✓ Popup         |                    |
| ✓ Input         |                 |                 | ✓ Progress      |                    |
| ✓ Label         |                 |                 | ✓ Rating        |                    |
| ✓ List          |                 |                 | ✓ Search        |                    |
| ✓ Loader        |                 |                 |   Shape         |                    |
| ✓ Rail          |                 |                 | ✓ Sidebar       |                    |
| ✓ Reveal        |                 |                 |   Sticky        |                    |
| ✓ Segment       |                 |                 | ✓ Tab           |                    |
| ✓ Step          |                 |                 | ✓ Transition    |                    |

## Our Principles

[TechnologyAdvice][9] has been [dogfooding][10] Semantic UI React in production since fall of 2015.  These are the guiding principles that have developed as a result:

- No jQuery dependency
- No animation dependencies
- Reuse SUI CSS transitions
- Simple declarative component APIs vs intricate HTML markup
- Complete keyboard support
- Complete SUI component definition support
- Completely documented
- Completely tested

## Releasing

On the latest clean `master`:

```sh
npm run release:major
npm run release:minor
npm run release:patch
```

Deploy the docs:

```sh
npm run deploy:docs
```

Update the changelog (requires [github_changelog_generator][15]):

```sh
github_changelog_generator
git add CHANGELOG.md
git commit -m 'docs(changelog): update changelog [ci skip]'
git push
```

## Credit

Originally made for [@TechnologyAdvice][9] by [@levithomason][26].

Big thanks to our [contributors][20], especially:

- @layershifter for bringing momentum and continual support
- @jcarbo for thoughtful engineering and continual support
- @jamiehill for early engineering and support

[1]: https://github.com/Semantic-Org/Semantic-UI-React/blob/master/.github/CONTRIBUTING.md
[2]: https://react.semantic-ui.com/
[3]: https://facebook.github.io/react/
[4]: https://github.com/Semantic-Org/Semantic-UI-React/labels/help%20wanted
[5]: https://semantic-ui.com/
[6]: https://github.com/Semantic-Org/Semantic-UI-React/milestone/1
[7]: https://github.com/webpack/webpack-dev-server/
[8]: https://github.com/Semantic-Org/Semantic-UI-React/issues/243
[9]: https://github.com/TechnologyAdvice
[10]: https://en.wikipedia.org/wiki/Eating_your_own_dog_food
[11]: https://github.com/Semantic-Org/Semantic-UI-React/issues/247
[12]: https://github.com/Semantic-Org/Semantic-UI-React/issues/243
[13]: https://webpack.github.io
[14]: https://github.com/Semantic-Org/Semantic-UI-React/issues
[15]: https://github.com/skywinder/github-changelog-generator
[17]: https://github.com/Semantic-Org/Semantic-UI-React/issues?q=is%3Aissue+is%3Aopen+label%3A%22new+component%22
[18]: https://github.com/Semantic-Org/Semantic-UI-React/blob/master/CHANGELOG.md
[19]: https://github.com/Semantic-Org/Semantic-UI-React/issues?q=is%3Aopen+RFC+label%3ARFC
[20]: https://github.com/Semantic-Org/Semantic-UI-React/graphs/contributors
[21]: https://github.com/Semantic-Org/Semantic-UI-React/labels/good%20first%20contribution
[22]: https://github.com/Semantic-Org/Semantic-UI-React/edit/master/README.md
[23]: https://react.semantic-ui.com/usage#css
[24]: https://github.com/Semantic-Org/Semantic-UI-React/issues/802#issuecomment-258990274
[25]: http://learnsemantic.com/themes/creating.html
[26]: https://github.com/Semantic-Org/Semantic-UI-Meteor
[26]: https://github.com/levithomason

<!-- Examples -->
[100]: https://github.com/wyc/semantic-ui-react-todos
[101]: https://github.com/reactjs/redux/tree/master/examples/todos
[102]: https://github.com/Metnew/react-semantic.ui-starter
