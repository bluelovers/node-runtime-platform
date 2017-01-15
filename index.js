/**
 * Created by user on 2017/1/15.
 */

this.exports = this.exports || {};

{
	const undefined = void(0);

	let data = {
		id: undefined,
		env: {},
	};

	if (typeof(require) === 'function' && typeof(module) === 'object')
	{
		data.id = 'commonjs';

		try
		{
			if (typeof process !== 'undefined' && typeof __filename !== 'undefined' && process.versions && process.versions.node)
			{
				data.id = 'node';

				data.env.node = process.versions.node;
			}
		}
		catch (e)
		{

		}

		try
		{
			const { Cu } = require('chrome');
			
			if (typeof Cu.import === 'function')
			{
				data.id = 'firefox-addon-sdk';
			}
		}
		catch (e)
		{
			
		}
	}
	else if (typeof(__URI__) === 'string')
	{
		try
		{
			if (typeof Components !== 'undefined' && Components.interfaces)
			{
				data.id = 'firefox';

				if (typeof console == 'undefined')
				{
					data.id = 'firefox-addon-jsm';
				}
			}
		}
		catch (e)
		{

		}
	}
	else
	{
		// other
		data.id = null;
	}

	let arr = data.id.split('-');

	for (let i in arr)
	{
		let k = i == 0 ? arr[i] : arr.slice(0, i).join('-');
		
		data.env[k] = data.env[k] || true;
	}

	data.env[data.id] = data.env[data.id] || true;

	Object.defineProperty(this.exports, 'id', {
		enumerable: true,
		get: function () {
			return data.id;
		}
	});

	Object.defineProperty(this.exports, 'env', {
		enumerable: true,
		get: function () {
			return data.env;
		}
	});

	if (this.exports.id === 'firefox-addon-jsm')
	{
		this.EXPORTED_SYMBOLS = this.EXPORTED_SYMBOLS || [];
		//this.EXPORTED_SYMBOLS = Object.keys(this.exports);

		Object.assign(this, this.exports);
	}

	//console.log(this.exports.id, this.exports.env);
}

this.exports;
