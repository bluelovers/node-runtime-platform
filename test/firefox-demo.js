const { Cc, Ci, Cu, Cr } = require('chrome');

const URI_PREFIX = (function ()
{
	let self = require("sdk/self");

	return ((typeof self.name === 'string') ? self.data.url() : __URI__).replace(/\/[^\/]+\/?$/, '/');
})();

console.log(require('./lib/runtime'));
console.log(Cu.import(URI_PREFIX + "lib/runtime.js"));
