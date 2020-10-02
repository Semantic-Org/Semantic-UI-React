## Design System

The Florence design system is hosted at: [https://design.florence.co.uk](). It is a themed version of Semantic-UI that is a fork of: [lolero/semantic-ui-theme-builder](https://github.com/lolero/semantic-ui-theme-builder). More info can be found in the README of this repo if needed.

Running the Florence application locally also requires running the design system. This is so we can make adjustments and test any otherwise potentially breaking changes.

### Installation

1. Clone the design system repo: `git clone git@github.com:team-florence/semantic-ui-theme-builder.git`
2. Run: `yarn` to install all dependencies
3. Run the yarn script: `yarn start:florence` or `yarn start:flexibank` (see below for explanation)
4. Navigate to: `localhost:5001` to view the interactive Semantic UI React documentation
5. The compiled CSS file will be running locally at: `localhost:5000/css/sui-florence.css`

### Explanation

Running `yarn start:florence` or `yarn:start:flexibank` does a number of things:

1. Builds & compiles the `sui-florence.css` file that is used within the Florence app
2. Starts the semantic documentation server which allows you to view (and interact with) all components in the design system
3. Runs a gulp watcher that will look for any changes within `themes/src/themes` and recompile the main CSS file
4. Runs a gulp watcher that will hot reload any .css/.less changes into the components in the Semantic UI React documentation
5. Runs a node.js server that serves the `sui-florence.css` file. This is used in both development & production

### Contributing

Read the Semantic UI documentation to get an understanding of how "theming" works before making any changes: https://semantic-ui.com/usage/theming.html.

1. Navigate to `themes/src/themes/parent-theme`.
2. You will see a number of folders such as: `collections`, `elements` etc. This folder structure directly relates to the Semantic UI documentation for how it "groups" different elements.
3. Navigate into the `elements` directory. You will see for every 'element', there are two files - ending in `.variables` and `.overrides`.
4. Most configuration of an element can be changed simply by adjusting the Semantic LESS variables in the respective `.variables` file, however if you need fine grained control you can write CSS changes directly into the `{element}.overrides` file instead (we have already used this quite a lot!).

### Deploying

The project is configured in Heroku such that any changes pushed to the `master` branch will automatically be deployed to: [https://design.florence.co.uk]().
