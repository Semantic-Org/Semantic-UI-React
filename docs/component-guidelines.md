Component Guidelines
====================

## Overview

### Intuitive

- Stardust elements work and behave like normal React elements.
- Stardust markup looks and behaves like Semantic UI markup.

### Abstracted

Semantic UI JavaScript has been wired into React component lifecycle methods.

## Attributes

### Size

Sizes are exposed via the `size={}` attribute.

>mini, small, <none>, large, big, huge, massive

### Color

Colors should be exposed via a `color={}` attribute.

>red, orange, yellow, olive, green, teal, blue, violet, purple, pink, brown, grey, black

### Other

All other Semantic UI classes are applied to Stardust components via boolean props `<Image avatar src={url} />`.

## Form Elements

Stardust form components feel transparent.  A Stardust `<Input />` works just like an html `<input />`.
 
### Event handlers

- Stardust components always bubble up the event.
- Stardust components never change the event's default behavior.
