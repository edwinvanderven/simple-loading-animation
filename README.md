# Simple loading animation

These loading animations can be used in your HTML application.

[![Published on npm](https://img.shields.io/npm/v/simple-loading-animation)](https://www.npmjs.com/package/simple-loading-animation)

## Installation

Inside the root of your Node project run the following command.

```sh
npm i simple-loading-animation
```

## Usage

These web components can be combined with any HTML from your own project.

In order to use them the animations need to be imported in your project.
Inside your Javascript (or Typescript) file add the following line.

```sh
import 'simple-loading-animation/<name-of-the-loader>.js';
```

Now inside the HTML you can add the following element.

```html
<name-of-the-loader></name-of-the-loader>
```

### Examples

#### Default loading animation

```sh
import 'simple-loading-animation/simple-loader.js';
```

```html
<html>
    ...
    <simple-loader></simple-loader>
    ...
</html>
```

#### Loading animation with text

The `text` property can be used to show a string to the user while the loading process is commencing.

-   Default value for this property is `Loading`.

```sh
import 'simple-loading-animation/simple-loader-with-text.js';
```

```html
<html>
    ...
    <simple-loader-text text="Loading"></simple-loader-text>
    ...
</html>
```

#### CSS

Using the following css, the loading animations will align inside the center of your screen.

```css
.loading-state {
    position: absolute;
    top: 40%;
    bottom: 0;
    width: 100%;
    text-align: center;
    font-family: AvenirNextLTPro-Demi, Helvetica, Arial, sans-serif;
    font-size: 18px;
    color: #4d4d4d;
}
```

Don't forget to hide or remove the element again once the loading is done.

### Notes

For Angular projects you will need to add the custom scheme to support web components.

-   See [the Angular documentation](https://angular.io/api/core/CUSTOM_ELEMENTS_SCHEMA)

```js
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [ ... ],
  imports: [ ... ],
  providers: [ ... ],
  bootstrap: [ ... ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
```
