// NOTE!!!
//
// We have to load polyfills directly from source as non-minified files are not
// published by the polyfills. An issue was raised to discuss this problem and
// to see if it can be resolved.
//
// See https://github.com/webcomponents/custom-elements/issues/45

// Polyfill Promise in IE <= 11 required by some of the polyfills.
require('es6-promise').polyfill();

// We have to include this first so that it can patch native. This must be done
// befoer any polyfills are loaded.
require('./native-shim');

// This comes after the native shim because it requries it to be patched first.
require('@webcomponents/custom-elements/src/custom-elements');

// Force the polyfill in Safari 10.0.0 and 10.0.1.
const { navigator } = window;
const { userAgent } = navigator;
const safari = userAgent.indexOf('Safari/60') !== -1;
const safariVersion = safari && userAgent.match(/Version\/([^\s]+)/)[1];
const safariVersions = [0, 1].map(v => `10.0.${v}`).concat(['10.0']);

if (safari && safariVersions.indexOf(safariVersion) > -1) {
  window.ShadyDOM = { force: true };
}

// ShadyDOM comes first. Both because it may need to be forced and the
// ShadyCSS polyill requires it to function.
require('@webcomponents/shadydom/src/env');
require('@webcomponents/shadycss/index');
