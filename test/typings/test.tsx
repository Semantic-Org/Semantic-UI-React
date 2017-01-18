import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';

import { Button } from '../../'; // Import Button from the main index.d.ts
import { Icon } from '../../dist/commonjs/elements/Icon'; // Import Icon directly from a subfolder

const Component = () => (
  <Button>
    <Icon name="sidebar"/>
  </Button>
);

console.log(ReactDOMServer.renderToStaticMarkup(<Component/>));


