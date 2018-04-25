/*
 * Copyright (c) 2011 - 2018, Apinauten GmbH
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
 
/* define namespace */

if(typeof goog !== 'undefined')
{
    goog.provide('Apiomat.User');
    goog.require('Apiomat.AbstractClientDataModel');
}
if(typeof exports === 'undefined')
{
    var Apiomat = Apiomat || {};
}
(function(Apiomat)
{
Apiomat.User = function(_username, _password) {
    this.init();
    if(typeof _username !== 'undefined')
    {
        this.setUserName(_username);
    }
    
    if(typeof _password !== 'undefined')
    {
        this.setPassword(_password);
    }

    /**
     * Init datastore (if needed)
     * @param {boolean} allowGuest
     */
    this.initDatastoreIfNeeded = function(allowGuest) {
        //if the datastore is not initialized then do so
        if(Apiomat.Datastore.isInstantiated() === false)
        {
            if(typeof this.getUserName() !== 'undefined' &&  typeof this.getPassword() !== 'undefined')
            {
                Apiomat.Datastore.configureWithCredentials(this);
            }
            else if('getSessionToken' in this && typeof this.getSessionToken() !== 'undefined' && this.getSessionToken())
            {
                Apiomat.Datastore.configureWithSessionToken(this.getSessionToken());
            }
            else if (typeof allowGuest !== 'undefined' && allowGuest)
            {
                Apiomat.Datastore.configurePlain(Apiomat.User.AOMBASEURL, Apiomat.User.AOMAPIKEY, Apiomat.User.AOMSYS);
            }
            else
            {
                throw new Error('The Datastore needs to be configured with user credentials or a session token for this method to work.');
            }
        }
    };

    /**
     * Callback required by most functions.
     * callback name _callback
     * @param {function} onOk Function is called when everything is ok.
     * @param {function} onError Function is called when an error occurs. (containing the error object) 
     */
	 
    /**
     * override save function
     * @param {_callback} _callback
     * @param {boolean} loadAfterwards Load after save
     */
    this.save = function(_callback, loadAfterwards) {
        this.initDatastoreIfNeeded(false);
        Apiomat.AbstractClientDataModel.prototype.save.apply(this, [_callback, loadAfterwards]);
    };

    /**
	 * Resets the password for the user configured and requests a new one; user will receive an email to confirm if successful. 
	 * If you only wish to change the password, use "changePassword" 
	 *
	 * @deprecated - use "resetPasswordAsync" instead
     */
    this.requestNewPassword = function(usePersistentStorage, _callback) {
        var callback = {
            onOk : function(refHref) {
				Apiomat.Datastore.positiveCallback(_callback);
            },
            onError : function(error) {
				Apiomat.Datastore.negativeCallback(_callback, error);
            }
        };
        Apiomat.Datastore.getInstance().postOnServer(this, callback, "models/requestResetPassword/", usePersistentStorage );
    };
	
	 /**
     * Callback required by most functions.
     * callback name _callback
     * @param {function} onOk Function is called when everything is ok.
     * @param {function} onError Function is called when an error occurs. (containing the error object) 
     */
    
    /**
     * Resets the password for the user configured and requests a new one asynchronously; user will receive an email to confirm. 
	 * If you only wish to change password, use "changePassword" instead.
     */
    this.resetPasswordAsync = function(_callback, usePersistentStorage) {
        Apiomat.Datastore.getInstance().postOnServer(this, _callback, "models/requestResetPassword/", usePersistentStorage );
    };

    /**
     * Callback required by most functions.
     * callback name _callback
     * @param {function} onOk Function is called when everything is ok.
     * @param {function} onError Function is called when an error occurs. (containing the error object) 
     */
	
    /**
	 *
	 * Allows you to replace the password by newPassword.
	 * If password was forgotten and has to be reset, use "resetPasswordAsync".
	 *
	 * @deprecated - use "changePassword" instead
     * @param {string} newPassword the new password
     * @param {_callback} _callback
     */
    this.resetPassword = function(newPassword, _callback, usePersistentStorage) {
        this.changePassword(newPassword, _callback, usePersistentStorage);
    };
	
	/**
     * This function allows you the replace the userÂ´s password by newPassword.
	 * If the user has forgotten the password and wishes to reset it and request a new one, please use "resetPasswordAsync".
     * @param {string} newPassword the new password
     * @param {_callback} _callback
     */
    this.changePassword = function(newPassword, _callback, usePersistentStorage) {
        if (this.getCurrentState==Apiomat.ObjectState.PERSISTING) {
           Apiomat.Datastore.negativeCallback(_callback,error);
        }
		else 
		{
		
            var internCallback = {
                onOk : function() {
                    this.parent.setOffline(this.wasLocalSave || false);
                    Apiomat.Datastore.configure(this.parent);
                    Apiomat.Datastore.positiveCallback(_callback);
                },
                onError : function(error) {
                    Apiomat.Datastore.negativeCallback(_callback,error);
                }
            };
            internCallback.parent = this;
            this.setPassword( newPassword );
            if(Apiomat.Datastore.getInstance().shouldSendOffline("PUT"))
            {
                internCallback.wasLocalSave = true;
                Apiomat.Datastore.getInstance( ).sendOffline( "PUT", this.getHref(), this, undefined, internCallback );
            }
            else
            {
                Apiomat.Datastore.getInstance().updateOnServer(this, internCallback, usePersistentStorage);
            }
         }
    };
    
     /**
      * Callback required by requestSessionToken function.
      * callback name requestSessionTokenCallback
      * @param {Function} The callback contains a JS object that maps the following keys to their values:
      * "sessionToken", "refreshToken", "expirationDate" (Unix UTC timestamp in ms), "module" and "model"
      * @param {Object} onError Function is called when an error occurs. (containing the error object) 
      */
	
     /**
      * Request a session token with the credentials saved in this User object.
      * Optionally sets the attribute of the user and configures the datastore with the session token automatically.
      *
      * @param configure Set flag to false if you don't want the Datastore to automatically be configured with the received session token and also don't want to save the token in the user object
      * @param {requestSessionTokenCallback} callback
	  * @param access_expiration access_expiration_time in seconds
	  * @param refresh_expiration refresh_expiration_time in seconds
      */
     this.requestSessionToken = function(configure, callback, access_expiration, refresh_expiration)
     {
        this.requestSessionTokenWithRefreshToken(undefined, configure, callback, false, access_expiration, refresh_expiration);
     };
     
     /**
      * Callback required by requestSessionTokenWithRefreshToken function.
      * callback name requestSessionTokenWithRefreshTokenCallback
      * @param {function} The callback contains a JS object that maps the following keys to their values:
      * "sessionToken", "refreshToken", "expirationDate" (Unix UTC timestamp in ms), "module" and "model"
      * @param {function} onError Function is called when an error occurs. (containing the error object) 
      */
	 
     /**
      * Request a session token with a refresh token. Optionally configures the datastore with the received token and saves it in the user object.
      *
      * @param refreshToken The refresh token to use for requesting a new session token
      * @param configure Set flag to true if you want the Datastore to automatically be configured with the received session token and also save it in the user object.
      * @param {requestSessionTokenWithRefreshTokenCallback} callback
	  * @param usePersistentStorage flag to indicate if offline-data should be stored persistently
	  * @param access_expiration access_expiration_time in seconds
	  * @param refresh_expiration refresh_expiration_time in seconds
      */
     this.requestSessionTokenWithRefreshToken = function(refreshToken, configure, callback, usePersistentStorage, access_expiration, refresh_expiration)
     {
        refreshToken = refreshToken || undefined;
        this.initDatastoreIfNeeded(refreshToken === 'undefined' ? false : true);
        var internCB = callback;
        if (typeof configure !== 'undefined' && configure)
        {
            internCB = {
                onOk : function(result) {
                    /* Configure Datastore with session token */
                    var sessionToken = result.sessionToken || '';
                    if(sessionToken === '')
                    {
                        /* return error  if no token is there */
                        Apiomat.Datastore.negativeCallback(callback,new Apiomat.ApiomatRequestError(Apiomat.Status.NO_TOKEN_RECEIVED, 200));
                    }
                    else
                    {
                        this.parent.setSessionToken(sessionToken);
                        Apiomat.Datastore.configureWithUserSessionToken(this.parent);
                        Apiomat.Datastore.positiveCallback(callback,result);
                    }
                },
                onError : function(error) {
                    Apiomat.Datastore.negativeCallback(callback,error);
                }
            };
            internCB.parent = this;
        }
        if(typeof refreshToken === 'undefined')
        {
            Apiomat.Datastore.getInstance().requestSessionToken(internCB, usePersistentStorage, access_expiration, refresh_expiration);
        }
        else
        {
            Apiomat.Datastore.getInstance().requestSessionTokenWithRefreshToken(refreshToken, internCB, usePersistentStorage, access_expiration, refresh_expiration);
        }
        
     };
    /* referenced object methods */

};
/* static constants */
Apiomat.User.AOMBASEURL = "https://epdemo.apiomat.enterprises/yambas/rest/apps/Arbeitstitel";
Apiomat.User.AOMAPIKEY = "9034631742310563773";
Apiomat.User.AOMSYS = "LIVE";
Apiomat.User.AOMSDKVERSION = "2.6.2-107";
Apiomat.User.APPCONFIG = '{"app" : {"name" : "Arbeitstitel","modules" : [{"module" : {"name" : "ArbeitstitelMain","type" : "DYNAMIC","usedInSystem" : "TEST","classes" : []}},{"module" : {"name" : "Basics","type" : "STATIC","usedInSystem" : "TEST","classes" : [{"class" : {"name" : "MemberModel","attributes" : [{"attribute" : {"name" : "password","type" : "String"}},{"attribute" : {"name" : "dynamicAttributes","type" : "Map"}},{"attribute" : {"name" : "salt","type" : "String"}},{"attribute" : {"name" : "lastName","type" : "String"}},{"attribute" : {"name" : "userName","type" : "String"}},{"attribute" : {"name" : "firstName","type" : "String"}},{"attribute" : {"name" : "loc","type" : "Location"}},{"attribute" : {"name" : "sessionToken","type" : "String"}},{"attribute" : {"name" : "dateOfBirth","type" : "Date"}}],"isTransient" : "false"}},{"class" : {"name" : "Role","attributes" : [{"attribute" : {"name" : "members","type" : "String"}},{"attribute" : {"name" : "name","type" : "String"}}],"isTransient" : "false"}},{"class" : {"name" : "User","attributes" : [{"attribute" : {"name" : "password","type" : "String"}},{"attribute" : {"name" : "dynamicAttributes","type" : "Map"}},{"attribute" : {"name" : "salt","type" : "String"}},{"attribute" : {"name" : "lastName","type" : "String"}},{"attribute" : {"name" : "userName","type" : "String"}},{"attribute" : {"name" : "firstName","type" : "String"}},{"attribute" : {"name" : "loc","type" : "Location"}},{"attribute" : {"name" : "sessionToken","type" : "String"}},{"attribute" : {"name" : "dateOfBirth","type" : "Date"}}],"isTransient" : "false"}},{"class" : {"name" : "MemberModel","attributes" : [{"attribute" : {"name" : "password","type" : "String"}},{"attribute" : {"name" : "dynamicAttributes","type" : "Map"}},{"attribute" : {"name" : "salt","type" : "String"}},{"attribute" : {"name" : "lastName","type" : "String"}},{"attribute" : {"name" : "userName","type" : "String"}},{"attribute" : {"name" : "firstName","type" : "String"}},{"attribute" : {"name" : "loc","type" : "Location"}},{"attribute" : {"name" : "sessionToken","type" : "String"}},{"attribute" : {"name" : "dateOfBirth","type" : "Date"}}],"isTransient" : "false"}},{"class" : {"name" : "Role","attributes" : [{"attribute" : {"name" : "members","type" : "String"}},{"attribute" : {"name" : "name","type" : "String"}}],"isTransient" : "false"}},{"class" : {"name" : "User","attributes" : [{"attribute" : {"name" : "password","type" : "String"}},{"attribute" : {"name" : "dynamicAttributes","type" : "Map"}},{"attribute" : {"name" : "salt","type" : "String"}},{"attribute" : {"name" : "lastName","type" : "String"}},{"attribute" : {"name" : "userName","type" : "String"}},{"attribute" : {"name" : "firstName","type" : "String"}},{"attribute" : {"name" : "loc","type" : "Location"}},{"attribute" : {"name" : "sessionToken","type" : "String"}},{"attribute" : {"name" : "dateOfBirth","type" : "Date"}}],"isTransient" : "false"}},{"class" : {"name" : "MemberModel","attributes" : [{"attribute" : {"name" : "password","type" : "String"}},{"attribute" : {"name" : "dynamicAttributes","type" : "Map"}},{"attribute" : {"name" : "salt","type" : "String"}},{"attribute" : {"name" : "lastName","type" : "String"}},{"attribute" : {"name" : "userName","type" : "String"}},{"attribute" : {"name" : "firstName","type" : "String"}},{"attribute" : {"name" : "loc","type" : "Location"}},{"attribute" : {"name" : "sessionToken","type" : "String"}},{"attribute" : {"name" : "dateOfBirth","type" : "Date"}}],"isTransient" : "false"}},{"class" : {"name" : "Role","attributes" : [{"attribute" : {"name" : "members","type" : "String"}},{"attribute" : {"name" : "name","type" : "String"}}],"isTransient" : "false"}},{"class" : {"name" : "User","attributes" : [{"attribute" : {"name" : "password","type" : "String"}},{"attribute" : {"name" : "dynamicAttributes","type" : "Map"}},{"attribute" : {"name" : "salt","type" : "String"}},{"attribute" : {"name" : "lastName","type" : "String"}},{"attribute" : {"name" : "userName","type" : "String"}},{"attribute" : {"name" : "firstName","type" : "String"}},{"attribute" : {"name" : "loc","type" : "Location"}},{"attribute" : {"name" : "sessionToken","type" : "String"}},{"attribute" : {"name" : "dateOfBirth","type" : "Date"}}],"isTransient" : "false"}}]}},{"module" : {"name" : "Analytics","type" : "STATIC","usedInSystem" : "TEST","classes" : []}},{"module" : {"name" : "ArbeitstitelMain","type" : "DYNAMIC","usedInSystem" : "STAGING","classes" : []}},{"module" : {"name" : "Basics","type" : "STATIC","usedInSystem" : "STAGING","classes" : [{"class" : {"name" : "MemberModel","attributes" : [{"attribute" : {"name" : "password","type" : "String"}},{"attribute" : {"name" : "dynamicAttributes","type" : "Map"}},{"attribute" : {"name" : "salt","type" : "String"}},{"attribute" : {"name" : "lastName","type" : "String"}},{"attribute" : {"name" : "userName","type" : "String"}},{"attribute" : {"name" : "firstName","type" : "String"}},{"attribute" : {"name" : "loc","type" : "Location"}},{"attribute" : {"name" : "sessionToken","type" : "String"}},{"attribute" : {"name" : "dateOfBirth","type" : "Date"}}],"isTransient" : "false"}},{"class" : {"name" : "Role","attributes" : [{"attribute" : {"name" : "members","type" : "String"}},{"attribute" : {"name" : "name","type" : "String"}}],"isTransient" : "false"}},{"class" : {"name" : "User","attributes" : [{"attribute" : {"name" : "password","type" : "String"}},{"attribute" : {"name" : "dynamicAttributes","type" : "Map"}},{"attribute" : {"name" : "salt","type" : "String"}},{"attribute" : {"name" : "lastName","type" : "String"}},{"attribute" : {"name" : "userName","type" : "String"}},{"attribute" : {"name" : "firstName","type" : "String"}},{"attribute" : {"name" : "loc","type" : "Location"}},{"attribute" : {"name" : "sessionToken","type" : "String"}},{"attribute" : {"name" : "dateOfBirth","type" : "Date"}}],"isTransient" : "false"}},{"class" : {"name" : "MemberModel","attributes" : [{"attribute" : {"name" : "password","type" : "String"}},{"attribute" : {"name" : "dynamicAttributes","type" : "Map"}},{"attribute" : {"name" : "salt","type" : "String"}},{"attribute" : {"name" : "lastName","type" : "String"}},{"attribute" : {"name" : "userName","type" : "String"}},{"attribute" : {"name" : "firstName","type" : "String"}},{"attribute" : {"name" : "loc","type" : "Location"}},{"attribute" : {"name" : "sessionToken","type" : "String"}},{"attribute" : {"name" : "dateOfBirth","type" : "Date"}}],"isTransient" : "false"}},{"class" : {"name" : "Role","attributes" : [{"attribute" : {"name" : "members","type" : "String"}},{"attribute" : {"name" : "name","type" : "String"}}],"isTransient" : "false"}},{"class" : {"name" : "User","attributes" : [{"attribute" : {"name" : "password","type" : "String"}},{"attribute" : {"name" : "dynamicAttributes","type" : "Map"}},{"attribute" : {"name" : "salt","type" : "String"}},{"attribute" : {"name" : "lastName","type" : "String"}},{"attribute" : {"name" : "userName","type" : "String"}},{"attribute" : {"name" : "firstName","type" : "String"}},{"attribute" : {"name" : "loc","type" : "Location"}},{"attribute" : {"name" : "sessionToken","type" : "String"}},{"attribute" : {"name" : "dateOfBirth","type" : "Date"}}],"isTransient" : "false"}},{"class" : {"name" : "MemberModel","attributes" : [{"attribute" : {"name" : "password","type" : "String"}},{"attribute" : {"name" : "dynamicAttributes","type" : "Map"}},{"attribute" : {"name" : "salt","type" : "String"}},{"attribute" : {"name" : "lastName","type" : "String"}},{"attribute" : {"name" : "userName","type" : "String"}},{"attribute" : {"name" : "firstName","type" : "String"}},{"attribute" : {"name" : "loc","type" : "Location"}},{"attribute" : {"name" : "sessionToken","type" : "String"}},{"attribute" : {"name" : "dateOfBirth","type" : "Date"}}],"isTransient" : "false"}},{"class" : {"name" : "Role","attributes" : [{"attribute" : {"name" : "members","type" : "String"}},{"attribute" : {"name" : "name","type" : "String"}}],"isTransient" : "false"}},{"class" : {"name" : "User","attributes" : [{"attribute" : {"name" : "password","type" : "String"}},{"attribute" : {"name" : "dynamicAttributes","type" : "Map"}},{"attribute" : {"name" : "salt","type" : "String"}},{"attribute" : {"name" : "lastName","type" : "String"}},{"attribute" : {"name" : "userName","type" : "String"}},{"attribute" : {"name" : "firstName","type" : "String"}},{"attribute" : {"name" : "loc","type" : "Location"}},{"attribute" : {"name" : "sessionToken","type" : "String"}},{"attribute" : {"name" : "dateOfBirth","type" : "Date"}}],"isTransient" : "false"}}]}},{"module" : {"name" : "Analytics","type" : "STATIC","usedInSystem" : "STAGING","classes" : []}},{"module" : {"name" : "Webhosting","type" : "STATIC","usedInSystem" : "LIVE","classes" : []}},{"module" : {"name" : "Healthapp","type" : "NATIVE","usedInSystem" : "LIVE","classes" : [{"class" : {"name" : "FrontendUser","attributes" : [{"attribute" : {"name" : "profiles","type" : "Link"}}],"isTransient" : "false"}},{"class" : {"name" : "Profile","attributes" : [{"attribute" : {"name" : "profileName","type" : "String"}}],"isTransient" : "false"}}]}},{"module" : {"name" : "ArbeitstitelMain","type" : "DYNAMIC","usedInSystem" : "LIVE","classes" : []}},{"module" : {"name" : "Basics","type" : "STATIC","usedInSystem" : "LIVE","classes" : [{"class" : {"name" : "MemberModel","attributes" : [{"attribute" : {"name" : "password","type" : "String"}},{"attribute" : {"name" : "dynamicAttributes","type" : "Map"}},{"attribute" : {"name" : "salt","type" : "String"}},{"attribute" : {"name" : "lastName","type" : "String"}},{"attribute" : {"name" : "userName","type" : "String"}},{"attribute" : {"name" : "firstName","type" : "String"}},{"attribute" : {"name" : "loc","type" : "Location"}},{"attribute" : {"name" : "sessionToken","type" : "String"}},{"attribute" : {"name" : "dateOfBirth","type" : "Date"}}],"isTransient" : "false"}},{"class" : {"name" : "Role","attributes" : [{"attribute" : {"name" : "members","type" : "String"}},{"attribute" : {"name" : "name","type" : "String"}}],"isTransient" : "false"}},{"class" : {"name" : "User","attributes" : [{"attribute" : {"name" : "password","type" : "String"}},{"attribute" : {"name" : "dynamicAttributes","type" : "Map"}},{"attribute" : {"name" : "salt","type" : "String"}},{"attribute" : {"name" : "lastName","type" : "String"}},{"attribute" : {"name" : "userName","type" : "String"}},{"attribute" : {"name" : "firstName","type" : "String"}},{"attribute" : {"name" : "loc","type" : "Location"}},{"attribute" : {"name" : "sessionToken","type" : "String"}},{"attribute" : {"name" : "dateOfBirth","type" : "Date"}}],"isTransient" : "false"}},{"class" : {"name" : "MemberModel","attributes" : [{"attribute" : {"name" : "password","type" : "String"}},{"attribute" : {"name" : "dynamicAttributes","type" : "Map"}},{"attribute" : {"name" : "salt","type" : "String"}},{"attribute" : {"name" : "lastName","type" : "String"}},{"attribute" : {"name" : "userName","type" : "String"}},{"attribute" : {"name" : "firstName","type" : "String"}},{"attribute" : {"name" : "loc","type" : "Location"}},{"attribute" : {"name" : "sessionToken","type" : "String"}},{"attribute" : {"name" : "dateOfBirth","type" : "Date"}}],"isTransient" : "false"}},{"class" : {"name" : "Role","attributes" : [{"attribute" : {"name" : "members","type" : "String"}},{"attribute" : {"name" : "name","type" : "String"}}],"isTransient" : "false"}},{"class" : {"name" : "User","attributes" : [{"attribute" : {"name" : "password","type" : "String"}},{"attribute" : {"name" : "dynamicAttributes","type" : "Map"}},{"attribute" : {"name" : "salt","type" : "String"}},{"attribute" : {"name" : "lastName","type" : "String"}},{"attribute" : {"name" : "userName","type" : "String"}},{"attribute" : {"name" : "firstName","type" : "String"}},{"attribute" : {"name" : "loc","type" : "Location"}},{"attribute" : {"name" : "sessionToken","type" : "String"}},{"attribute" : {"name" : "dateOfBirth","type" : "Date"}}],"isTransient" : "false"}},{"class" : {"name" : "MemberModel","attributes" : [{"attribute" : {"name" : "password","type" : "String"}},{"attribute" : {"name" : "dynamicAttributes","type" : "Map"}},{"attribute" : {"name" : "salt","type" : "String"}},{"attribute" : {"name" : "lastName","type" : "String"}},{"attribute" : {"name" : "userName","type" : "String"}},{"attribute" : {"name" : "firstName","type" : "String"}},{"attribute" : {"name" : "loc","type" : "Location"}},{"attribute" : {"name" : "sessionToken","type" : "String"}},{"attribute" : {"name" : "dateOfBirth","type" : "Date"}}],"isTransient" : "false"}},{"class" : {"name" : "Role","attributes" : [{"attribute" : {"name" : "members","type" : "String"}},{"attribute" : {"name" : "name","type" : "String"}}],"isTransient" : "false"}},{"class" : {"name" : "User","attributes" : [{"attribute" : {"name" : "password","type" : "String"}},{"attribute" : {"name" : "dynamicAttributes","type" : "Map"}},{"attribute" : {"name" : "salt","type" : "String"}},{"attribute" : {"name" : "lastName","type" : "String"}},{"attribute" : {"name" : "userName","type" : "String"}},{"attribute" : {"name" : "firstName","type" : "String"}},{"attribute" : {"name" : "loc","type" : "Location"}},{"attribute" : {"name" : "sessionToken","type" : "String"}},{"attribute" : {"name" : "dateOfBirth","type" : "Date"}}],"isTransient" : "false"}}]}},{"module" : {"name" : "Analytics","type" : "STATIC","usedInSystem" : "LIVE","classes" : []}},{"module" : {"name" : "WebAppUploadModule","type" : "NATIVE","usedInSystem" : "LIVE","classes" : []}},{"module" : {"name" : "Server Code","type" : "STATIC","usedInSystem" : "LIVE","classes" : []}}]}}';
Apiomat.User.ANALYTICSURL = "https://epdemo.apiomat.enterprises/analytics";
Apiomat.User.ANALYTICSAPPKEY = "e981abb5f3ab50825c614d2f9ef1f3c64305e098";
/* static methods */

/**
 * Callback required by getUsers function.
 * callback name getUsersCallback
 * @param {function} onOk Function is called when everything is ok. (containing a list of object as {array})
 * @param {function} onError Function is called when an error occurs. (containing the error object) 
 */

/**
 * Returns a list of objects of this class from server.
 * The size of the resultset is limited to an installation specific value ('maxResults') and defaults to 1000. 
 * Use limit and offset to return all results if the expected size is larger.
 *
 * If query is given then returned list will be filtered by the given query
 *
 * @param {string} query (optional) a query filtering the results in SQL style (@see <a href="http://doc.apiomat.com">documentation</a>)
 * @param {getUsersCallback} callback
 */
Apiomat.User.getUsers = function(query, callback, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadListFromServerWithClass(Apiomat.User, query, callback, false, usePersistentStorage);
};

/**
 * Callback required by getUsersAndRefHref function.
 * callback name getUsersAndRefHrefCallback
 * @param {function} onOk Function is called when everything is ok. (containing a list of object as {array})
 * @param {function} onError Function is called when an error occurs. (containing the error object) 
 */

/**
 * Returns a list of objects of this class from server.
 * The size of the resultset is limited to an installation specific value ('maxResults') and defaults to 1000. 
 * Use limit and offset to return all results if the expected size is larger.
 * If query is given then returned list will be filtered by the given query
 *
 * @param {string} query (optional) a query filtering the results in SQL style (@see <a href="http://doc.apiomat.com">documentation</a>)
 * @param {boolean} withReferencedHrefs set to true to get also all HREFs of referenced class instances
 * @param {getUsersAndRefHrefCallback} callback which is called when request finished
 */
Apiomat.User.getUsersAndRefHref = function(query, callback,withReferencedHrefs, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadListFromServerWithClass(Apiomat.User, query, callback, withReferencedHrefs, usePersistentStorage);
};

/**
 * Callback required by getUsersCount function.
 * callback name getUsersCountCallback
 * @param {function} onOk Function is called when everything is ok. (containing count as {number})
 * @param {function} onError Function is called when an error occurs. (containing the error object) 
 */

/**
 * Returns count of objects of this class filtered by the given query from server
 * 
 * @param query a query filtering the results in SQL style (@see <a href="http://doc.apiomat.com">documentation</a>)
 * @param {getUsersCountCallback} callback which is called when request finished
 */
Apiomat.User.getUsersCount = function(query, callback, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadCountFromServer(Apiomat.User, undefined, query, callback, usePersistentStorage);
};

/**
 * Deletes the classes that have been fetched with getUsers() (or its async version) before
 *
 * Note: The SDK doesn't contain a query parser, so you need to pass the same query as in the fetch request.
 * Also, if you fetched objects from a class with different queries, the object doesn't get deleted
 *
 * @param {string} query 
 * @param {deleteAllFromStorageCallback} callback to be called after request is done
 */
Apiomat.User.deleteAllFromStorage = function(query, callback) {
    Apiomat.Datastore.getInstance().deleteCollectionFromStorage(false, Apiomat.User, query, callback);
};

/**
 * Deletes the classes that have been fetched with getUsersWithReferencedHref (or its async version) before
 *
 * Note:
 * - The SDK doesn't contain a query parser, so you need to pass the same query as in the fetch request.
 * - Also, if you fetched objects from a class with different queries, the object doesn't get deleted
 * - Lastly, if objects of this class were fetched in the context of loading a reference collection,
 *   those objects won't be deleted as well (use the respective delete..FromStorage method for that).
 *
 * @param {string} query 
 * @param {deleteAllFromStorageWithReferencedHrefsCallback} callback to be called after request is done
 */
Apiomat.User.deleteAllFromStorageWithReferencedHrefs = function(query, callback) {
    Apiomat.Datastore.getInstance().deleteCollectionFromStorage(true, Apiomat.User, query, callback);
};


/* inheritance */
Apiomat.User.prototype = new Apiomat.AbstractClientDataModel();
Apiomat.User.prototype.constructor = Apiomat.User;

/**
 * Callback required by most functions.
 * callback name _callback
 * @param {function} onOk Function is called when everything is ok.
 * @param {function} onError Function is called when an error occurs. (containing the error object) 
 */
 
/**
 * Updates this class from server.
 * Be sure that userName and password is set
 * @param {_callback} callback
 */
Apiomat.User.prototype.loadMe = function(callback, usePersistentStorage) {
    this.initDatastoreIfNeeded(false);
    Apiomat.Datastore.getInstance().loadFromServer("models/me", callback, this, false, undefined, undefined, false, usePersistentStorage);
};

Apiomat.User.prototype.init=function () {
        this.data = new Object();
    this.data["dynamicAttributes"] = {};
}
/**
 * get simple name
 * @return {string} className
 */
Apiomat.User.prototype.getSimpleName = function() {
    return "User";
};
/**
 * get module name
 * @return {string} moduleName
 */
Apiomat.User.prototype.getModuleName = function() {
    return "Basics";
};

/* easy getter and setter */

Apiomat.User.prototype.getDateOfBirth = function() 
{
    var retDate = this.data.dateOfBirth;
    return (typeof retDate != 'undefined')? new Date(retDate) : undefined;
};
    Apiomat.User.prototype.setDateOfBirth = function(_dateOfBirth) 
{
	if(_dateOfBirth != null && _dateOfBirth != undefined){
		this.data.dateOfBirth = _dateOfBirth.getTime();
	}
	else{
		this.data.dateOfBirth = null;
	}
};
    


/**
 * get FirstName
 * @return FirstName
 */
Apiomat.User.prototype.getFirstName = function() 
{
            return this.data.firstName !== null ? this.data.firstName : undefined;
    
};

/**
 * set FirstName
 * @param FirstName
 */
Apiomat.User.prototype.setFirstName = function(_firstName) {
    this.data.firstName = _firstName;
};


/**
 * get LastName
 * @return LastName
 */
Apiomat.User.prototype.getLastName = function() 
{
            return this.data.lastName !== null ? this.data.lastName : undefined;
    
};

/**
 * set LastName
 * @param LastName
 */
Apiomat.User.prototype.setLastName = function(_lastName) {
    this.data.lastName = _lastName;
};


/**
 * get Loc latitude
 * @return latitude as {floating number}
 */
Apiomat.User.prototype.getLocLatitude = function() 
{
    var locArr = this.data.loc;
    if(locArr)
    {
        return locArr[0];
    }
};

/**
 * get Loc longitude
 * @return longitude as {floating number}
 */
Apiomat.User.prototype.getLocLongitude = function() 
{
    var locArr = this.data.loc;
    if(locArr)
    {
        return locArr[1];
    }
};

/**
 * set latitude
 * @param latitude
 */
Apiomat.User.prototype.setLocLatitude = function(_latitude) 
{
    var locArr = this.data.loc;
    if(!locArr)
    {
        locArr = [_latitude, undefined];
    }
    else
    {
        locArr[0] = _latitude;
    }
    this.data.loc = locArr;
};

/**
 * set longitude
 * @param longitude
 */
Apiomat.User.prototype.setLocLongitude = function(_longitude) 
{
    var locArr = this.data.loc;
    if(!locArr)
    {
        locArr = [0, _longitude];
    }
    else
    {
        locArr[1] = _longitude;
    }
    this.data.loc = locArr;
};


/**
 * get Password
 * @return Password
 */
Apiomat.User.prototype.getPassword = function() 
{
            return this.data.password !== null ? this.data.password : undefined;
    
};

/**
 * set Password
 * @param Password
 */
Apiomat.User.prototype.setPassword = function(_password) {
    this.data.password = _password;
};


/**
 * get SessionToken
 * @return SessionToken
 */
Apiomat.User.prototype.getSessionToken = function() 
{
            return this.data.sessionToken !== null ? this.data.sessionToken : undefined;
    
};

/**
 * set SessionToken
 * @param SessionToken
 */
Apiomat.User.prototype.setSessionToken = function(_sessionToken) {
    this.data.sessionToken = _sessionToken;
};


/**
 * get UserName
 * @return UserName
 */
Apiomat.User.prototype.getUserName = function() 
{
            return this.data.userName !== null ? this.data.userName : undefined;
    
};

/**
 * set UserName
 * @param UserName
 */
Apiomat.User.prototype.setUserName = function(_userName) {
    this.data.userName = _userName;
};


})(typeof exports === 'undefined' ? Apiomat
        : exports);
