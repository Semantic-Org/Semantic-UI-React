import { configure, addDecorator } from '@storybook/react';

import { withA11y } from '@storybook/addon-a11y';
import 'font-awesome/css/font-awesome.min.css';

addDecorator(withA11y)

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);
