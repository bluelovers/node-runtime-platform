const { Cc, Ci, Cu, Cr } = require('chrome');

console.log(require('./lib/runtime'));
console.log(Cu.import(URI_PREFIX + "lib/runtime.js"));
