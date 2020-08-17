# Simple loading animation

This loading animation can be used in your HTML application.

## Installation

Inside the root of your Node project run the following command.

```sh
npm i simple-loading-animation
```

## Usage

### Import

In order to use this web component it needs to be imported in your project.
Inside your Javascript (or Typescript) file add the following line.

```sh
import 'simple-loading-animation/simple-loader.js';
```

### HTML

Now inside the HTML you can add the following element.

```html
<simple-loader active></simple-loader>
```

#### Example

This web component can be combined with any HTML from your own project.

```html
<html>
  ...
  <simple-loader class="loading-state" active></simple-loader>
  ...
</html>
```

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

- See [the Angular documentation](https://angular.io/api/core/CUSTOM_ELEMENTS_SCHEMA)

```js
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [
    ...
  ],
  imports: [
    ...
  ],
  providers: [
    ...
  ],
  bootstrap: [
    ...
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
```
