# SkateJS Web Components

This repo gives you the bare minimum you'd need in an environment that doesn't support Custom Elements or Shadow DOM natively. It gives you support for the V1 APIs of each respectively and ensures all their polyfill dependencies are met all through a single import.

*Using this is great for development, or if you need all of the features polyfilled. However if you only need some of the features, it's recommended that you include them piecemeal instead.*

*Once the polyfills are all set up on polyfills.io, then it's likely we'll recommend using that instead as it'll only deliver what the visiting browser needs.*

### Installing

You can install via NPM:

```sh
npm install skatejs-web-components
```

Or you can download it from unpkg:

```
https://unpkg.com/skatejs-web-components/dist/index-with-deps.min.js
```



### Importing

You can import it using any module format:

```js
// ES2015
import 'skatejs-web-components';

// CommonJS
require('skatejs-web-components');

// AMD
require(['skatejs-web-components']);
```

Or you can use a `<script>` tag:

```html
<script src="https://unpkg.com/skatejs-web-components/dist/index-with-deps.min.js"></script>
