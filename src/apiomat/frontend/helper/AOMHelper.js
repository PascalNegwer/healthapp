/*
 * Copyright (c) 2011 - 2016, Apinauten GmbH
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 *  * Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 * IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
 * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 * LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE
 * OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 *
 * THIS FILE IS GENERATED AUTOMATICALLY. DON'T MODIFY IT.
 */
if (typeof goog !== 'undefined')
{
	goog.provide('Apiomat.AOMHelper');
}
if(typeof exports === 'undefined')
{
	var Apiomat = Apiomat || {};
}

(function(Apiomat){
	Apiomat.AOMHelper = (function()
	{
		return {
			isTitaniumApp : function()
			{
				return typeof Ti === 'object' || typeof Titanium === 'object';
			},
			isSafari: function()
			{
				return typeof navigator === 'object'
					&& typeof navigator.userAgent != "undefined"
					&& navigator.userAgent.indexOf('Chrom') <= 0
					&& navigator.userAgent.indexOf("Safari") > -1 || false;
				},
				isNodeJS: function()
				{
					return this.isTitaniumApp() === false && typeof module !== 'undefined' && module.exports;
				},

				/* event helper methods */
				sendEvent : function(_eventName, _eventData)
				{
					var event = undefined;
					if (this.isTitaniumApp())
					{
						Ti.App.fireEvent(_eventName, _eventData || {});
					}
					else
					{
						var event = undefined;

						if (typeof CustomEvent !== 'undefined' && !(this.detectIE() >= 9))
						{
							event = new CustomEvent(_eventName, _eventData || {});
						}
						else
						{
							var event = document.createEvent("Event");
							event.initEvent(_eventName, true, true);
							event.customData = _eventData || {};
						}
						window.dispatchEvent(event);
					}
				},
				
		    isInteger : function (x) {
	        return x % 1 === 0;
		    },

				addEventListener : function(_eventName, _callback)
				{
					if (Apiomat.AOMHelper.isTitaniumApp())
					{
						Ti.App.addEventListener(_eventName, _callback);
					}
					else
					{
						window.addEventListener(_eventName, _callback);
					}
				},

				/**
				 * detect IE
				 * returns version of IE or false, if browser is not Internet Explorer
				 */
				 detectIE: function()
				 {
					 if (this.isTitaniumApp() == false && typeof navigator != "undefined" && typeof navigator.userAgent!="undefined" && navigator.userAgent!=null)
					 {
						 var ua = navigator.userAgent;

						// test values
						// IE 10
						//ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
						// IE 11
						//ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
						// IE 12 / Spartan
						//ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

						var msie = ua.indexOf('MSIE ');
						if (msie > 0)
						{
							// IE 10 or older => return version number
							return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
						}

						var trident = ua.indexOf('Trident/');
						if (trident > 0)
						{
							// IE 11 => return version number
							var rv = ua.indexOf('rv:');
							return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
						}

						var edge = ua.indexOf('Edge/');
						if (edge > 0)
						{
							// IE 12 => return version number
							return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
						}
						// other browser
					}
					return false;
				}
  	};
  })();
})(typeof exports === 'undefined'? Apiomat: exports);

/**
 * This snippet implements the array filter function for browsers that doesn't support this native
 * The native filter function is ECMA-262 standard
 *
 */
if (!Array.prototype.filter)
{
	Array.prototype.filter = function(fun /*, thisp*/)
	{
		'use strict';

		if (!this)
		{
			throw new TypeError();
		}

		var objects = Object(this);
		var len = objects.length >>> 0;
		if (typeof fun !== 'function')
		{
			throw new TypeError();
		}

		var res = [];
		var thisp = arguments[1];
		for ( var i in objects)
		{
			if (objects.hasOwnProperty(i))
			{
				if (fun.call(thisp, objects[i], i, objects))
				{
					res.push(objects[i]);
				}
			}
		}

		return res;
	};
}
/**
 * This method checks if a string ends with a given pattern
 *
 * @param {Object} suffix
 */
String.prototype.endsWith = function(suffix)
{
	return this.indexOf(suffix, this.length - suffix.length) !== -1;
};

/**
 * Implementation of Object.keys for browser that doesn't support this method natively
 * From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
 */
if (!Object.keys)
{
	Object.keys = (function()
	{
		'use strict';
		var hasOwnProperty = Object.prototype.hasOwnProperty, hasDontEnumBug = !({
			toString : null
		}).propertyIsEnumerable('toString'), dontEnums = [ 'toString',
				'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf',
				'propertyIsEnumerable', 'constructor' ], dontEnumsLength = dontEnums.length;

		return function(obj)
		{
			if (typeof obj !== 'object'
					&& (typeof obj !== 'function' || obj === null))
			{
				throw new TypeError('Object.keys called on non-object');
			}

			var result = [], prop, i;

			for (prop in obj)
			{
				if (hasOwnProperty.call(obj, prop))
				{
					result.push(prop);
				}
			}

			if (hasDontEnumBug)
			{
				for (i = 0; i < dontEnumsLength; i++)
				{
					if (hasOwnProperty.call(obj, dontEnums[i]))
					{
						result.push(dontEnums[i]);
					}
				}
			}
			return result;
		};
	}());
}
