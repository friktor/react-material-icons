## React Material Icons
__________________

Simple component for animated Material Icons in React. Fine works with react 15.0 or later.

## Usage & Docs

### NOTE
By default plugin work only commonjs (es6) style, without umd or other multi-module system. If you want use this lib with other module system - code of lib very simple, and you can easily rewrite lib for other module system.

### Install
You can install this lib from npm, or from github (with npm :D)

npm install

```
npm install react-morph-material-icons # from npmjs.com
npm install git+https://github.com/friktor/react-material-icons # from github
```

# What about icons?
Icons by default compile separately from library component. File with icon shapes very big. But you can import module with shapes from:

```
react-morph-material-icons/build/shapes
```

Icons sorting by category, you can use full category, or get required icons and create object set, example:

``` javascript
import icons from "react-morph-material-icons/build/shapes";

var myCollectionOfCategory = icons.action;
/* or */
var myCollection = {
  'my-name-id-for-icon': icons.action['3d_rotation']
};
```

I recommended usage personal icons object for different icon component. Why? By default svg-morpheus save all sent shapes - when you declare the components and gave him collection available for the transformation of icons.

# Import module
ES6

```import MorphIcon from "react-morph-material-icons";```

CommonJS

```var MorphIcon = require("react-morph-material-icons").default;```
