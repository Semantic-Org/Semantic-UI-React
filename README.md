# Stardust

Stardust is a set of specifications and tools for building UI libraries. It is based on a fork of [Semantic UI React (SUIR)][200], and designed to support two initiatives: Stardust itself and SUIR v2.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Why?](#why)
- [Scope](#scope)
- [Specifications](#specifications)
- [Contribute](#contribute)
- [Semantic UI React v2](#semantic-ui-react-v2)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Why?

There are a number of packages that a UI library needs to create great UI components. Take a look at SUIR's [`/src/lib`][201] as an example. This core library enables the SUIR features we love today such as shorthand props, event stack handling, auto controlled state, controlling the rendered component, and more.

Other libraries in the wild have some of these features and some of their own. It is our desire that the community share the best UI component practices in a core library to the greater benefit of the web.

A shared library means more great ideas and more engineering support for features and bug fixes. More importantly, it means more consistency in UI components on the web. We're really excited to see just how far we can take this aspect of collaboration.

## Scope

You can think of Stardust as the internals of a good component library. This encompasses everything except for the actual UI components themselves.

We are currently discussing which, if any, components will be included. The collaborative result of our [specifications](#specifications) will determine Stardust's final scope.

## Specifications

All of our specifications are listed in [/specifications][100], and are open for collaboration. You are also welcome to submit your own proposals via a pull request.

It is our desire that the patterns and utilities around modern component libraries are not proprietary but the result of collaboration and shared sentiment among library developers and consumers.

- [Creating Components][101]
- [CSS-in-JS][102]
- [Theming][103]
- [Component API][104]
- [Shorthand API][105]
- [Event Stack][106]
- [HTML Font Size][107]
- [Parent Child Coupling][108]

## Contribute

Currently, these teams are actively participating in Stardust's specifications and development:

- [Semantic UI React][200]
- [Office UI Fabric][300]
- [Teams (Microsoft)][301]

If you own or are building a UI component library, we'd love to have your input. [Post an issue][2] introducing yourself and your team and join us today.

## Semantic UI React v2

See the [MANIFESTO.md][1] for details. SUIR v2 will be built on the specifications and tools from Stardust.

<!-- REPO -->
[1]: https://github.com/stardust-ui/react/blob/master/MANIFESTO.md
[2]: https://github.com/stardust-ui/react/issues/new/choose
[3]: https://github.com/stardust-ui/react/.github/CONTRIBUTING.md

<!-- SPECIFICATIONS -->
[100]: https://github.com/stardust-ui/react/tree/master/specifications
[101]: https://github.com/stardust-ui/react/tree/master/specifications/creating-components.md
[102]: https://github.com/stardust-ui/react/tree/master/specifications/css-in-js.md
[103]: https://github.com/stardust-ui/react/tree/master/specifications/theming.md
[104]: https://github.com/stardust-ui/react/tree/master/specifications/component-api.md
[105]: https://github.com/stardust-ui/react/tree/master/specifications/shorthand-api.md
[106]: https://github.com/stardust-ui/react/tree/master/specifications/event-stack.md
[107]: https://github.com/stardust-ui/react/tree/master/specifications/html-font-size.md
[108]: https://github.com/stardust-ui/react/tree/master/specifications/parent-child-couplnig.md

<!-- SUIR -->
[200]: https://github.com/Semantic-Org/Semantic-UI-React
[201]: https://github.com/Semantic-Org/Semantic-UI-React/tree/master/src/lib

<!-- EXTERNAL -->
[300]: https://developer.microsoft.com/en-us/fabric
[301]: https://products.office.com/en-US/microsoft-teams/group-chat-software

