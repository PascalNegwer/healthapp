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
 * THIS FILE IS GENERATED AUTOMATICALLY. DON'T MODIFY IT.
 */

if (typeof goog !== 'undefined')
{
	goog.provide('Apiomat.ApiomatRequestError');

	goog.require('Apiomat.Status');
}

if(typeof exports === 'undefined')
{
	var Apiomat = Apiomat || {};
}

(function(Apiomat)
{
	Apiomat.ApiomatRequestError = function(_statusCode, _expectedCodes,
			_message)
	{
		this.message = _message || Apiomat.Status.getReasonPhrase(_statusCode);
		this.name = "ApiomatRequestError";
		this.expectedCodes = _expectedCodes;
		this.statusCode = _statusCode;
		this.extraInformations = {};
		
		this.getStatusObj = function()
		{
			return Apiomat.Status.getStatusForCode(this.statusCode);
		};
		
		this.setExtraInformations = function(_extraInformations) 
		{
			this.extraInformations = _extraInformations;
		}
		
		this.getExtraInformations = function() {
			return this.extraInformations;
		}
	};

	Apiomat.ApiomatRequestError.prototype = new Error();
	Apiomat.ApiomatRequestError.prototype.constructor = Apiomat.ApiomatRequestError;
})(typeof exports === 'undefined' ? Apiomat
		: exports);