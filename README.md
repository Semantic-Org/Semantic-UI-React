<!-- Logo -->
<p align="center">
  <a href="https://react.semantic-ui.com">
    <img height="128" width="128" src="https://github.com/Semantic-Org/Semantic-UI-React/raw/master/docs/public/logo.png">
  </a>
</p>

<!-- Name -->
<h1 align="center">
  <a href="https://react.semantic-ui.com/">Semantic UI React</a> theme builder
</h1>

## Introduction
I am a big fan of Semantic UI and even more so of Semantic UI React.
Aside from them being excellent libraries, their docs are amazing.

However, writing and maintaining themes for their components can be cumbersome.
And it becomes even more difficult to write, build, and maintain multiple themes.

So I set on the journey to write, build, and maintain multiple Semantic UI themes
and review their state using the official Semantic UI docs.

After working with Semantic UI for years and finally getting down to write a proper theme builder,
I came up with this solution to the problem.

The repo is a clone of the [Semantic UI React](https://react.semantic-ui.com/), with a themes directory at the root.

The source code of the themes that get built lives in `themes/src/themes/`. In the example included in this repo
you will find one parent theme and two children themes.

- parent-theme: a parent theme where general overrides can be defined, which consume variables from children themes
- child-theme-light: a child theme where color variables for a light theme are defined,
which are consumed by the variables and overrides in the parent theme
- child-theme-dark: a child theme where color variables for a dark theme are defined,
which are consumed by the variables and overrides in the parent theme

I wrote it like this to be able to create nested themes that share common characteristics,
e.g. light and dark themes for the same application where color variables are defined in the child themes,
and the overrides are defined in the parent theme, which consume the color variables.

I also added the capability of using Font Awesome native classes so you can write
`<Icon className='fas fa-check'>` and the check icon will render.


## Installation & Usage

Clone the repository

`git clone https://github.com/lolero/semantic-ui-theme-builder.git my-theme-builder`

Navigate to the cloned repo

`cd my-theme-builder`

Install the repos dependencies

`yarn all:reset`

Build the empty themes

`yarn themes:build`

Run the dev server

`yarn docs:start:light`

Navigate to `themes/src/<theme name>` and start writing your theme's overrides as oulined in
the [Semantic UI theming guide](https://semantic-ui.com/theming).
The docs application should hot-reload when changes are made to the theme's `.less` files


## Consuming themes

Once you are satisfied with the state of your themes, you can run

`yarn themes:build`

which will generate your themes' compiled CSS into `themes/dist/sui-<theme name>.css`.
You can then consume this file in your web app and have all Semantic UI components themed to your preference.

You can also run

`yarn docs:build`

Which will generate a [react-static](https://github.com/nozzle/react-static) application with the
Semantic UI docs web app, with your themes and your custom examples. You can also deploy this application
to your private domain if you want to make your themed components reviewable to anyone.

Note: for the icons to work in applications that consume the themes, you must copy the Semantic UI icon and
the Font Awesome webfont files to the application's public folder, these icons are respectively located in

```
node_modules/semantic-ui-less/themes/default/assets/fonts
node_modules/@fortawesome/fontawesome-free/webfonts
```


## Credit

Made possible only by [@jlukic](https://github.com/jlukic) authoring [Semantic UI](https://semantic-ui.com/).
The substantial contributions of [@lzear](https://github.com/lzear) are greatly appreciated!
