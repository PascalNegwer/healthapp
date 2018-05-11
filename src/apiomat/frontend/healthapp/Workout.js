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
    goog.provide('Apiomat.Workout');
    goog.require('Apiomat.AbstractClientDataModel');
}
if(typeof exports === 'undefined')
{
    var Apiomat = Apiomat || {};
}
(function(Apiomat)
{
Apiomat.Workout = function() {
    this.init();
    /* referenced object methods */
    
    var workoutType = undefined;
    
    /**
     * Getter for local linked variable
     * @return {string} attributeName 
     */
    this.getWorkoutType = function()
    {
           return this.workoutType !== null? this.workoutType : undefined;
     
    };
	
    /**
     * Callback required by loadWorkoutType function.
     * callback name loadWorkoutTypeCallback
	      * @param {function} onOk Function is called when everything is ok. (containing referenced object as {object})
	      * @param {function} onError Function is called when an error occurs. (containing the error object) 
     */
    
    /** 
     * Load referenced object(s) and
     * add result from server to member variable of this class.
	 * @param {loadWorkoutTypeCallback} callback
	 */
    this.loadWorkoutType = function(callback, usePersistentStorage) 
    {
        var refUrl = this.data.workoutTypeHref;
        if (typeof refUrl == "undefined")
        {
            throw new Apiomat.ApiomatRequestError(Apiomat.Status.ATTACHED_HREF_MISSING,200);
        }    
        var loadFromServerCB={
            onOk : function(obj, meta) {
                				this.parent.workoutType = obj;
                                Apiomat.Datastore.positiveCallback(callback,obj);
            },
            onError : function(error) {
                if (error.statusCode==204) {
                    this.parent.workoutType = null;
                }
				Apiomat.Datastore.negativeCallback(callback,error);
            }
        };
        loadFromServerCB.parent=this;
        Apiomat.Datastore.getInstance().loadFromServer(refUrl,loadFromServerCB, undefined,false, undefined, Apiomat.WorkoutTypes, false, usePersistentStorage);
    };
	
    /**
     * Callback required by loadWorkoutTypeAndRefHref function.
     * callback name loadWorkoutTypeAndRefHrefCallback
          * @param {function} onOk Function is called when everything is ok. (containing referenced objects with refHref as {object})
     	 * @param {function} onError Function is called when an error occurs. (containing the error object) 
     */
    
    /** 
     * Load referenced object(s) with refHref and
     * add result from server to member variable of this class.
	 * @param {loadWorkoutTypeAndRefHrefCallback} callback
     */
    this.loadWorkoutTypeAndRefHref = function(callback, usePersistentStorage)
    {
        var refUrl = this.data.workoutTypeHref;
        if (typeof refUrl == "undefined")
        {
            throw new Apiomat.ApiomatRequestError(Apiomat.Status.ATTACHED_HREF_MISSING,200);
        }
        
        var loadFromServerCB={
            onOk : function(obj) {
                					this.parent.workoutType = obj;
                				Apiomat.Datastore.positiveCallback(callback,obj);
            },
            onError : function(error) {
                Apiomat.Datastore.negativeCallback(callback,error);
            }
        }
        loadFromServerCB.parent=this;
        Apiomat.Datastore.getInstance().loadFromServer(refUrl,loadFromServerCB , undefined,true, undefined, Apiomat.WorkoutTypes, false, usePersistentStorage);
    };
    
    /**
     * Callback required by postWorkoutType function.
     * callback name postWorkoutTypeCallback
     * @param {function} onOk Function is called when everything is ok. (containing refHref as {string})
     * @param {function} onError Function is called when an error occurs. (containing the error object) 
     */
	
    /**
     * Adds a given reference to this object
	 * @param _refData reference
	 * @param {postWorkoutTypeCallback} _callback
     */
    this.postWorkoutType = function(_refData, _callback, usePersistentStorage) 
    {
        if(_refData == false || typeof _refData.getHref() === 'undefined') {
            var error = new Apiomat.ApiomatRequestError(Apiomat.Status.SAVE_REFERENECE_BEFORE_REFERENCING);
            if (_callback) {
                    Apiomat.Datastore.negativeCallback(_callback,error);
            } else if(console && console.log) {
                    console.log("Error occured: " + error);
            }
            return;
        }
        
        var callback = {
            onOk : function(refHref) {
                if (refHref) {
                                     this.parent.workoutType = _refData;
                                }
                Apiomat.Datastore.positiveCallback(_callback,refHref);
            },
            onError : function(error) {
                Apiomat.Datastore.negativeCallback(_callback,error);
            }
        };
        callback.parent=this;
        if(Apiomat.Datastore.getInstance().shouldSendOffline("POST"))
        {
            Apiomat.Datastore.getInstance( ).sendOffline( "POST", this.getHref(), _refData, "workoutType", callback );
        }
        else
        {
            Apiomat.Datastore.getInstance().postOnServer(_refData, callback, this.data.workoutTypeHref, usePersistentStorage);
        }
    };
	
    /**
     * Callback required by removeWorkoutType function.
     * callback name removeWorkoutTypeCallback
     * @param {function} onOk Function is called when everything is ok.
     * @param {function} onError Function is called when an error occurs. (containing the error object) 
     */
    
    /**
     * remove a given reference to this object
	 * @param _refData reference
	 * @param {removeWorkoutTypeCallback} _callback
     */
    this.removeWorkoutType = function(_refData, _callback, usePersistentStorage) 
    {
        var id = _refData.getHref().substring(_refData.getHref().lastIndexOf("/") + 1);
        var deleteHref = this.data.workoutTypeHref + "/" + id;
        var callback = {
            onOk : function(obj) {
                             this.parent.workoutType = undefined
            ;                 
                Apiomat.Datastore.positiveCallback(_callback);
            },
            onError : function(error) {
                Apiomat.Datastore.negativeCallback(_callback,error);
            }
        };
        callback.parent=this;
        Apiomat.Datastore.getInstance().deleteOnServer(deleteHref, callback, usePersistentStorage);
    };
    
    
};
/* static methods */

/**
 * Callback required by getWorkouts function.
 * callback name getWorkoutsCallback
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
 * @param {getWorkoutsCallback} callback
 */
Apiomat.Workout.getWorkouts = function(query, callback, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadListFromServerWithClass(Apiomat.Workout, query, callback, false, usePersistentStorage);
};

/**
 * Callback required by getWorkoutsAndRefHref function.
 * callback name getWorkoutsAndRefHrefCallback
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
 * @param {getWorkoutsAndRefHrefCallback} callback which is called when request finished
 */
Apiomat.Workout.getWorkoutsAndRefHref = function(query, callback,withReferencedHrefs, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadListFromServerWithClass(Apiomat.Workout, query, callback, withReferencedHrefs, usePersistentStorage);
};

/**
 * Callback required by getWorkoutsCount function.
 * callback name getWorkoutsCountCallback
 * @param {function} onOk Function is called when everything is ok. (containing count as {number})
 * @param {function} onError Function is called when an error occurs. (containing the error object) 
 */

/**
 * Returns count of objects of this class filtered by the given query from server
 * 
 * @param query a query filtering the results in SQL style (@see <a href="http://doc.apiomat.com">documentation</a>)
 * @param {getWorkoutsCountCallback} callback which is called when request finished
 */
Apiomat.Workout.getWorkoutsCount = function(query, callback, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadCountFromServer(Apiomat.Workout, undefined, query, callback, usePersistentStorage);
};

/**
 * Deletes the classes that have been fetched with getWorkouts() (or its async version) before
 *
 * Note: The SDK doesn't contain a query parser, so you need to pass the same query as in the fetch request.
 * Also, if you fetched objects from a class with different queries, the object doesn't get deleted
 *
 * @param {string} query 
 * @param {deleteAllFromStorageCallback} callback to be called after request is done
 */
Apiomat.Workout.deleteAllFromStorage = function(query, callback) {
    Apiomat.Datastore.getInstance().deleteCollectionFromStorage(false, Apiomat.Workout, query, callback);
};

/**
 * Deletes the classes that have been fetched with getWorkoutsWithReferencedHref (or its async version) before
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
Apiomat.Workout.deleteAllFromStorageWithReferencedHrefs = function(query, callback) {
    Apiomat.Datastore.getInstance().deleteCollectionFromStorage(true, Apiomat.Workout, query, callback);
};


/* inheritance */
Apiomat.Workout.prototype = new Apiomat.AbstractClientDataModel();
Apiomat.Workout.prototype.constructor = Apiomat.Workout;


Apiomat.Workout.prototype.init=function () {
        this.data = new Object();
    this.workoutType = undefined;
}
/**
 * get simple name
 * @return {string} className
 */
Apiomat.Workout.prototype.getSimpleName = function() {
    return "Workout";
};
/**
 * get module name
 * @return {string} moduleName
 */
Apiomat.Workout.prototype.getModuleName = function() {
    return "Healthapp";
};

/* easy getter and setter */


/**
 * get Description
 * @return Description
 */
Apiomat.Workout.prototype.getDescription = function() 
{
            return this.data.description !== null ? this.data.description : undefined;
    
};

/**
 * set Description
 * @param Description
 */
Apiomat.Workout.prototype.setDescription = function(_description) {
    this.data.description = _description;
};

/**
 * Returns an URL of the image.
 
 <br/> You can provide several optional parameters to
 * manipulate the image:
 * 
 * @param width (optional)
 *            the width of the image, 0 to use the original size. If only width
 *            or height are provided, the other value is computed.
 * @param height (optional)
 *            the height of the image, 0 to use the original size. If only width
 *            or height are provided, the other value is computed.
 * @param backgroundColorAsHex (optional)
 *            the background color of the image, null or empty uses the original
 *            background color. Caution: Don't send the '#' symbol! Example:
 *            <i>ff0000</i>
 * @param alpha (optional)
 *            the alpha value of the image (between 0 and 1), null to take the original value.
 * @param format (optional)
 *            the file format of the image to return, e.g. <i>jpg</i> or <i>png</i>
  * @return the URL of the image
 */
Apiomat.Workout.prototype.getImage1URL = function(width, height, bgColorAsHex, alpha, format) 
{
    var url = this.data.image1URL;
    if(!url)
    {
        return undefined;
    }
    url += ".img?apiKey=" + Apiomat.User.AOMAPIKEY + "&system=" + Apiomat.User.AOMSYS;
    if (width) {
        url += "&width=" + width;
    }
    if (height) {
        url += "&height=" + height;
    }
    if (bgColorAsHex) {
        url += "&bgcolor=" + bgColorAsHex;
    }
    if (alpha) {
        url += "&alpha=" + alpha;
    }
    if (format) {
        url += "&format=" + format;
    }
    return url;
}

/**
 * Callback required by loadImage1 function.
 * callback name loadImage1CountCallback
  * @param {function} onOk Function is called when everything is ok. (containg image as bytearray)
  * @param {function} onError Function is called when an error occurs. (containing the error object) 
 */

/** 
 * Load referenced object(s) and
 * add result from server to member variable of this class. <br/> You can provide several optional parameters to
 * manipulate the image:
 * 
 * @param width (optional)
 *            the width of the image, 0 to use the original size. If only width
 *            or height are provided, the other value is computed.
 * @param height (optional)
 *            the height of the image, 0 to use the original size. If only width
 *            or height are provided, the other value is computed.
 * @param bgColorAsHex (optional)
 *            the background color of the image, null or empty uses the original
 *            background color. Caution: Don't send the '#' symbol! Example:
 *            <i>ff0000</i>
 * @param alpha (optional)
 *            the alpha value of the image (between 0 and 1), null to take the original value.
 * @param format (optional)
 *            the file format of the image to return, e.g. <i>jpg</i> or <i>png</i>
 * @param {loadImage1CountCallback} _callback
  * @return the ressource URL of the image
 */
Apiomat.Workout.prototype.loadImage1 = function(width, height, bgColorAsHex, alpha, format,_callback, usePersistentStorage)
{
    var resUrl = this.getImage1URL(width, height, bgColorAsHex, alpha, format);
    if (typeof resUrl === "undefined") {
        var error = new Apiomat.ApiomatRequestError(Apiomat.Status.ATTACHED_HREF_MISSING, 200);
        Apiomat.Datastore.negativeCallback(_callback, error);
        return;
    }    
    return Apiomat.Datastore.getInstance().loadResource(resUrl, _callback, usePersistentStorage);
}

/**
 * Callback required by postImage1 functions.
 * callback name postImage1Callback
 * @param {function} onOk Function is called when everything is ok.
 * @param {function} onError Function is called when an error occurs. (containing the error object) 
 */

/**
 * add an image
 * @param _data image data as byte array
 * @param {postImage1Callback} _callback
 */
Apiomat.Workout.prototype.postImage1 = function(_data, _callback, usePersistentStorage) 
{
	if(typeof _data === 'undefined' || _data === null){
	    var error = new Apiomat.ApiomatRequestError(Apiomat.Status.BAD_RESOURCE);
        Apiomat.Datastore.negativeCallback(_callback, error);
        return;
    }
    if(_data.length <= 0){
        var error = new Apiomat.ApiomatRequestError(Apiomat.Status.BAD_IMAGE);
        Apiomat.Datastore.negativeCallback(_callback, error);
        return;
    }
    if(typeof this.getHref() === "undefined" || this.getHref() === "") {
        var error = new Apiomat.ApiomatRequestError(Apiomat.Status.HREF_NOT_FOUND);
        Apiomat.Datastore.negativeCallback(_callback, error);
        return;
    }
    var postCB = {
            onOk : function(_imgHref) {
                if (_imgHref) {
                    this.parent.data.image1URL = _imgHref;
					if(Apiomat.AOMNetworkHandler.isConnected() === false){
                		Apiomat.Datastore.getInstance().getStorageImpl(usePersistentStorage).addOrUpdateCollection(this.parent.data.href, this.parent.data);
                	}
                    /* object was not saved yet, this is needed for media push */
                    if(this.parent.wasLocalSave) {
                        this.parent.data.image1URL = _imgHref;
                        this.parent.save(_callback, true, usePersistentStorage);
                    }
                    else {
                        this.parent.load(_callback, usePersistentStorage);
                    }
                }
                else {
                    var error = new Apiomat.ApiomatRequestError(Apiomat.Status.HREF_NOT_FOUND);
                    if (_callback) {
                        Apiomat.Datastore.negativeCallback(_callback,error);
                    } else if(console && console.log) {
                        console.log("Error occurred: " + error);
                    }
                }
            },
            onError : function(error) {
                Apiomat.Datastore.negativeCallback(_callback,error);
            }
    };
    postCB.parent = this;
    if(Apiomat.Datastore.getInstance().shouldSendOffline("POST")) {
    	this.wasLocalSave = true;
        Apiomat.Datastore.getInstance( ).sendOffline( "POST", null, _data, true, postCB, this.getOptionsForStaticData("image1"));
    }
    else {
    	this.wasLocalSave = false;
        Apiomat.Datastore.getInstance().postStaticDataOnServer(_data, true, postCB, usePersistentStorage, this.getOptionsForStaticData("image1"));
    }
};

/**
 * Callback required by deleteImage1 functions.
 * callback name deleteImage1Callback
 * @param {function} onOk Function is called when everything is ok.
 * @param {function} onError Function is called when an error occurs. (containing the error object) 
 */

/**
 * delete a image
 * @param {deleteImage1Callback} _callback
 */
Apiomat.Workout.prototype.deleteImage1 = function(_callback, usePersistentStorage) 
{
	var dataUrl = this.data.image1URL;
	if (dataUrl === undefined || dataUrl === "") {
		var error = new Apiomat.ApiomatRequestError(Apiomat.Status.ATTACHED_HREF_MISSING);
		Apiomat.Datastore.negativeCallback(_callback, error);
		return;
	}
	/* Decide whether to use the old or new data handling */
	if (dataUrl.indexOf( "/data/" +  "images/"  + this.getModuleName() + "/Workout/" ) !== -1)
	{
		var deleteCB = {
			onOk : function() {
				if(this.parent.wasLocalDelete) {
					delete this.parent.data.image1URL;
					this.parent.save(_callback, true, usePersistentStorage);
				}
				else {
					this.parent.load(_callback, usePersistentStorage);
				}
			},
			onError : function(error) {
				Apiomat.Datastore.negativeCallback(_callback, error);
			}
		};
		deleteCB.parent = this;

		if(Apiomat.Datastore.getInstance().shouldSendOffline("DELETE")) {
			this.wasLocalDelete = true;
			Apiomat.Datastore.getInstance( ).sendOffline( "DELETE", dataUrl, null, null, deleteCB );
		}
		else {
			this.wasLocalDelete = false;
			Apiomat.Datastore.getInstance().deleteOnServer(dataUrl, deleteCB);
		}
	}
	else
	{
		// First try to delete the attribute and then save, to find out if the caller is allowed to do so
		delete this.data.image1URL;
		/* update object again and save deleted image reference in object */
		var saveCB = {
			onOk : function() {
				//save was successful, now call delete on server
				var deleteCB = {
					onOk : function() {
						Apiomat.Datastore.positiveCallback(_callback);
					},
					onError : function(error) {
						Apiomat.Datastore.negativeCallback(_callback, error);
					}
				};
				if(Apiomat.Datastore.getInstance().shouldSendOffline("DELETE"))
				{
					Apiomat.Datastore.getInstance( ).sendOffline( "DELETE", dataUrl, null, null, deleteCB );
				}
				else
				{
					Apiomat.Datastore.getInstance().deleteOnServer(dataUrl, deleteCB);
				}
			},
			onError : function(error) {
				//save was unsuccessful, reset data
				this.parent.data.image1URL = dataUrl;
				Apiomat.Datastore.negativeCallback(_callback, error);
			}
		};
		saveCB.parent=this;
		this.save(saveCB);
	}
};

/**
 * Returns an URL of the image.
 
 <br/> You can provide several optional parameters to
 * manipulate the image:
 * 
 * @param width (optional)
 *            the width of the image, 0 to use the original size. If only width
 *            or height are provided, the other value is computed.
 * @param height (optional)
 *            the height of the image, 0 to use the original size. If only width
 *            or height are provided, the other value is computed.
 * @param backgroundColorAsHex (optional)
 *            the background color of the image, null or empty uses the original
 *            background color. Caution: Don't send the '#' symbol! Example:
 *            <i>ff0000</i>
 * @param alpha (optional)
 *            the alpha value of the image (between 0 and 1), null to take the original value.
 * @param format (optional)
 *            the file format of the image to return, e.g. <i>jpg</i> or <i>png</i>
  * @return the URL of the image
 */
Apiomat.Workout.prototype.getImage2URL = function(width, height, bgColorAsHex, alpha, format) 
{
    var url = this.data.image2URL;
    if(!url)
    {
        return undefined;
    }
    url += ".img?apiKey=" + Apiomat.User.AOMAPIKEY + "&system=" + Apiomat.User.AOMSYS;
    if (width) {
        url += "&width=" + width;
    }
    if (height) {
        url += "&height=" + height;
    }
    if (bgColorAsHex) {
        url += "&bgcolor=" + bgColorAsHex;
    }
    if (alpha) {
        url += "&alpha=" + alpha;
    }
    if (format) {
        url += "&format=" + format;
    }
    return url;
}

/**
 * Callback required by loadImage2 function.
 * callback name loadImage2CountCallback
  * @param {function} onOk Function is called when everything is ok. (containg image as bytearray)
  * @param {function} onError Function is called when an error occurs. (containing the error object) 
 */

/** 
 * Load referenced object(s) and
 * add result from server to member variable of this class. <br/> You can provide several optional parameters to
 * manipulate the image:
 * 
 * @param width (optional)
 *            the width of the image, 0 to use the original size. If only width
 *            or height are provided, the other value is computed.
 * @param height (optional)
 *            the height of the image, 0 to use the original size. If only width
 *            or height are provided, the other value is computed.
 * @param bgColorAsHex (optional)
 *            the background color of the image, null or empty uses the original
 *            background color. Caution: Don't send the '#' symbol! Example:
 *            <i>ff0000</i>
 * @param alpha (optional)
 *            the alpha value of the image (between 0 and 1), null to take the original value.
 * @param format (optional)
 *            the file format of the image to return, e.g. <i>jpg</i> or <i>png</i>
 * @param {loadImage2CountCallback} _callback
  * @return the ressource URL of the image
 */
Apiomat.Workout.prototype.loadImage2 = function(width, height, bgColorAsHex, alpha, format,_callback, usePersistentStorage)
{
    var resUrl = this.getImage2URL(width, height, bgColorAsHex, alpha, format);
    if (typeof resUrl === "undefined") {
        var error = new Apiomat.ApiomatRequestError(Apiomat.Status.ATTACHED_HREF_MISSING, 200);
        Apiomat.Datastore.negativeCallback(_callback, error);
        return;
    }    
    return Apiomat.Datastore.getInstance().loadResource(resUrl, _callback, usePersistentStorage);
}

/**
 * Callback required by postImage2 functions.
 * callback name postImage2Callback
 * @param {function} onOk Function is called when everything is ok.
 * @param {function} onError Function is called when an error occurs. (containing the error object) 
 */

/**
 * add an image
 * @param _data image data as byte array
 * @param {postImage2Callback} _callback
 */
Apiomat.Workout.prototype.postImage2 = function(_data, _callback, usePersistentStorage) 
{
	if(typeof _data === 'undefined' || _data === null){
	    var error = new Apiomat.ApiomatRequestError(Apiomat.Status.BAD_RESOURCE);
        Apiomat.Datastore.negativeCallback(_callback, error);
        return;
    }
    if(_data.length <= 0){
        var error = new Apiomat.ApiomatRequestError(Apiomat.Status.BAD_IMAGE);
        Apiomat.Datastore.negativeCallback(_callback, error);
        return;
    }
    if(typeof this.getHref() === "undefined" || this.getHref() === "") {
        var error = new Apiomat.ApiomatRequestError(Apiomat.Status.HREF_NOT_FOUND);
        Apiomat.Datastore.negativeCallback(_callback, error);
        return;
    }
    var postCB = {
            onOk : function(_imgHref) {
                if (_imgHref) {
                    this.parent.data.image2URL = _imgHref;
					if(Apiomat.AOMNetworkHandler.isConnected() === false){
                		Apiomat.Datastore.getInstance().getStorageImpl(usePersistentStorage).addOrUpdateCollection(this.parent.data.href, this.parent.data);
                	}
                    /* object was not saved yet, this is needed for media push */
                    if(this.parent.wasLocalSave) {
                        this.parent.data.image2URL = _imgHref;
                        this.parent.save(_callback, true, usePersistentStorage);
                    }
                    else {
                        this.parent.load(_callback, usePersistentStorage);
                    }
                }
                else {
                    var error = new Apiomat.ApiomatRequestError(Apiomat.Status.HREF_NOT_FOUND);
                    if (_callback) {
                        Apiomat.Datastore.negativeCallback(_callback,error);
                    } else if(console && console.log) {
                        console.log("Error occurred: " + error);
                    }
                }
            },
            onError : function(error) {
                Apiomat.Datastore.negativeCallback(_callback,error);
            }
    };
    postCB.parent = this;
    if(Apiomat.Datastore.getInstance().shouldSendOffline("POST")) {
    	this.wasLocalSave = true;
        Apiomat.Datastore.getInstance( ).sendOffline( "POST", null, _data, true, postCB, this.getOptionsForStaticData("image2"));
    }
    else {
    	this.wasLocalSave = false;
        Apiomat.Datastore.getInstance().postStaticDataOnServer(_data, true, postCB, usePersistentStorage, this.getOptionsForStaticData("image2"));
    }
};

/**
 * Callback required by deleteImage2 functions.
 * callback name deleteImage2Callback
 * @param {function} onOk Function is called when everything is ok.
 * @param {function} onError Function is called when an error occurs. (containing the error object) 
 */

/**
 * delete a image
 * @param {deleteImage2Callback} _callback
 */
Apiomat.Workout.prototype.deleteImage2 = function(_callback, usePersistentStorage) 
{
	var dataUrl = this.data.image2URL;
	if (dataUrl === undefined || dataUrl === "") {
		var error = new Apiomat.ApiomatRequestError(Apiomat.Status.ATTACHED_HREF_MISSING);
		Apiomat.Datastore.negativeCallback(_callback, error);
		return;
	}
	/* Decide whether to use the old or new data handling */
	if (dataUrl.indexOf( "/data/" +  "images/"  + this.getModuleName() + "/Workout/" ) !== -1)
	{
		var deleteCB = {
			onOk : function() {
				if(this.parent.wasLocalDelete) {
					delete this.parent.data.image2URL;
					this.parent.save(_callback, true, usePersistentStorage);
				}
				else {
					this.parent.load(_callback, usePersistentStorage);
				}
			},
			onError : function(error) {
				Apiomat.Datastore.negativeCallback(_callback, error);
			}
		};
		deleteCB.parent = this;

		if(Apiomat.Datastore.getInstance().shouldSendOffline("DELETE")) {
			this.wasLocalDelete = true;
			Apiomat.Datastore.getInstance( ).sendOffline( "DELETE", dataUrl, null, null, deleteCB );
		}
		else {
			this.wasLocalDelete = false;
			Apiomat.Datastore.getInstance().deleteOnServer(dataUrl, deleteCB);
		}
	}
	else
	{
		// First try to delete the attribute and then save, to find out if the caller is allowed to do so
		delete this.data.image2URL;
		/* update object again and save deleted image reference in object */
		var saveCB = {
			onOk : function() {
				//save was successful, now call delete on server
				var deleteCB = {
					onOk : function() {
						Apiomat.Datastore.positiveCallback(_callback);
					},
					onError : function(error) {
						Apiomat.Datastore.negativeCallback(_callback, error);
					}
				};
				if(Apiomat.Datastore.getInstance().shouldSendOffline("DELETE"))
				{
					Apiomat.Datastore.getInstance( ).sendOffline( "DELETE", dataUrl, null, null, deleteCB );
				}
				else
				{
					Apiomat.Datastore.getInstance().deleteOnServer(dataUrl, deleteCB);
				}
			},
			onError : function(error) {
				//save was unsuccessful, reset data
				this.parent.data.image2URL = dataUrl;
				Apiomat.Datastore.negativeCallback(_callback, error);
			}
		};
		saveCB.parent=this;
		this.save(saveCB);
	}
};

/**
 * Returns an URL of the image.
 
 <br/> You can provide several optional parameters to
 * manipulate the image:
 * 
 * @param width (optional)
 *            the width of the image, 0 to use the original size. If only width
 *            or height are provided, the other value is computed.
 * @param height (optional)
 *            the height of the image, 0 to use the original size. If only width
 *            or height are provided, the other value is computed.
 * @param backgroundColorAsHex (optional)
 *            the background color of the image, null or empty uses the original
 *            background color. Caution: Don't send the '#' symbol! Example:
 *            <i>ff0000</i>
 * @param alpha (optional)
 *            the alpha value of the image (between 0 and 1), null to take the original value.
 * @param format (optional)
 *            the file format of the image to return, e.g. <i>jpg</i> or <i>png</i>
  * @return the URL of the image
 */
Apiomat.Workout.prototype.getImage3URL = function(width, height, bgColorAsHex, alpha, format) 
{
    var url = this.data.image3URL;
    if(!url)
    {
        return undefined;
    }
    url += ".img?apiKey=" + Apiomat.User.AOMAPIKEY + "&system=" + Apiomat.User.AOMSYS;
    if (width) {
        url += "&width=" + width;
    }
    if (height) {
        url += "&height=" + height;
    }
    if (bgColorAsHex) {
        url += "&bgcolor=" + bgColorAsHex;
    }
    if (alpha) {
        url += "&alpha=" + alpha;
    }
    if (format) {
        url += "&format=" + format;
    }
    return url;
}

/**
 * Callback required by loadImage3 function.
 * callback name loadImage3CountCallback
  * @param {function} onOk Function is called when everything is ok. (containg image as bytearray)
  * @param {function} onError Function is called when an error occurs. (containing the error object) 
 */

/** 
 * Load referenced object(s) and
 * add result from server to member variable of this class. <br/> You can provide several optional parameters to
 * manipulate the image:
 * 
 * @param width (optional)
 *            the width of the image, 0 to use the original size. If only width
 *            or height are provided, the other value is computed.
 * @param height (optional)
 *            the height of the image, 0 to use the original size. If only width
 *            or height are provided, the other value is computed.
 * @param bgColorAsHex (optional)
 *            the background color of the image, null or empty uses the original
 *            background color. Caution: Don't send the '#' symbol! Example:
 *            <i>ff0000</i>
 * @param alpha (optional)
 *            the alpha value of the image (between 0 and 1), null to take the original value.
 * @param format (optional)
 *            the file format of the image to return, e.g. <i>jpg</i> or <i>png</i>
 * @param {loadImage3CountCallback} _callback
  * @return the ressource URL of the image
 */
Apiomat.Workout.prototype.loadImage3 = function(width, height, bgColorAsHex, alpha, format,_callback, usePersistentStorage)
{
    var resUrl = this.getImage3URL(width, height, bgColorAsHex, alpha, format);
    if (typeof resUrl === "undefined") {
        var error = new Apiomat.ApiomatRequestError(Apiomat.Status.ATTACHED_HREF_MISSING, 200);
        Apiomat.Datastore.negativeCallback(_callback, error);
        return;
    }    
    return Apiomat.Datastore.getInstance().loadResource(resUrl, _callback, usePersistentStorage);
}

/**
 * Callback required by postImage3 functions.
 * callback name postImage3Callback
 * @param {function} onOk Function is called when everything is ok.
 * @param {function} onError Function is called when an error occurs. (containing the error object) 
 */

/**
 * add an image
 * @param _data image data as byte array
 * @param {postImage3Callback} _callback
 */
Apiomat.Workout.prototype.postImage3 = function(_data, _callback, usePersistentStorage) 
{
	if(typeof _data === 'undefined' || _data === null){
	    var error = new Apiomat.ApiomatRequestError(Apiomat.Status.BAD_RESOURCE);
        Apiomat.Datastore.negativeCallback(_callback, error);
        return;
    }
    if(_data.length <= 0){
        var error = new Apiomat.ApiomatRequestError(Apiomat.Status.BAD_IMAGE);
        Apiomat.Datastore.negativeCallback(_callback, error);
        return;
    }
    if(typeof this.getHref() === "undefined" || this.getHref() === "") {
        var error = new Apiomat.ApiomatRequestError(Apiomat.Status.HREF_NOT_FOUND);
        Apiomat.Datastore.negativeCallback(_callback, error);
        return;
    }
    var postCB = {
            onOk : function(_imgHref) {
                if (_imgHref) {
                    this.parent.data.image3URL = _imgHref;
					if(Apiomat.AOMNetworkHandler.isConnected() === false){
                		Apiomat.Datastore.getInstance().getStorageImpl(usePersistentStorage).addOrUpdateCollection(this.parent.data.href, this.parent.data);
                	}
                    /* object was not saved yet, this is needed for media push */
                    if(this.parent.wasLocalSave) {
                        this.parent.data.image3URL = _imgHref;
                        this.parent.save(_callback, true, usePersistentStorage);
                    }
                    else {
                        this.parent.load(_callback, usePersistentStorage);
                    }
                }
                else {
                    var error = new Apiomat.ApiomatRequestError(Apiomat.Status.HREF_NOT_FOUND);
                    if (_callback) {
                        Apiomat.Datastore.negativeCallback(_callback,error);
                    } else if(console && console.log) {
                        console.log("Error occurred: " + error);
                    }
                }
            },
            onError : function(error) {
                Apiomat.Datastore.negativeCallback(_callback,error);
            }
    };
    postCB.parent = this;
    if(Apiomat.Datastore.getInstance().shouldSendOffline("POST")) {
    	this.wasLocalSave = true;
        Apiomat.Datastore.getInstance( ).sendOffline( "POST", null, _data, true, postCB, this.getOptionsForStaticData("image3"));
    }
    else {
    	this.wasLocalSave = false;
        Apiomat.Datastore.getInstance().postStaticDataOnServer(_data, true, postCB, usePersistentStorage, this.getOptionsForStaticData("image3"));
    }
};

/**
 * Callback required by deleteImage3 functions.
 * callback name deleteImage3Callback
 * @param {function} onOk Function is called when everything is ok.
 * @param {function} onError Function is called when an error occurs. (containing the error object) 
 */

/**
 * delete a image
 * @param {deleteImage3Callback} _callback
 */
Apiomat.Workout.prototype.deleteImage3 = function(_callback, usePersistentStorage) 
{
	var dataUrl = this.data.image3URL;
	if (dataUrl === undefined || dataUrl === "") {
		var error = new Apiomat.ApiomatRequestError(Apiomat.Status.ATTACHED_HREF_MISSING);
		Apiomat.Datastore.negativeCallback(_callback, error);
		return;
	}
	/* Decide whether to use the old or new data handling */
	if (dataUrl.indexOf( "/data/" +  "images/"  + this.getModuleName() + "/Workout/" ) !== -1)
	{
		var deleteCB = {
			onOk : function() {
				if(this.parent.wasLocalDelete) {
					delete this.parent.data.image3URL;
					this.parent.save(_callback, true, usePersistentStorage);
				}
				else {
					this.parent.load(_callback, usePersistentStorage);
				}
			},
			onError : function(error) {
				Apiomat.Datastore.negativeCallback(_callback, error);
			}
		};
		deleteCB.parent = this;

		if(Apiomat.Datastore.getInstance().shouldSendOffline("DELETE")) {
			this.wasLocalDelete = true;
			Apiomat.Datastore.getInstance( ).sendOffline( "DELETE", dataUrl, null, null, deleteCB );
		}
		else {
			this.wasLocalDelete = false;
			Apiomat.Datastore.getInstance().deleteOnServer(dataUrl, deleteCB);
		}
	}
	else
	{
		// First try to delete the attribute and then save, to find out if the caller is allowed to do so
		delete this.data.image3URL;
		/* update object again and save deleted image reference in object */
		var saveCB = {
			onOk : function() {
				//save was successful, now call delete on server
				var deleteCB = {
					onOk : function() {
						Apiomat.Datastore.positiveCallback(_callback);
					},
					onError : function(error) {
						Apiomat.Datastore.negativeCallback(_callback, error);
					}
				};
				if(Apiomat.Datastore.getInstance().shouldSendOffline("DELETE"))
				{
					Apiomat.Datastore.getInstance( ).sendOffline( "DELETE", dataUrl, null, null, deleteCB );
				}
				else
				{
					Apiomat.Datastore.getInstance().deleteOnServer(dataUrl, deleteCB);
				}
			},
			onError : function(error) {
				//save was unsuccessful, reset data
				this.parent.data.image3URL = dataUrl;
				Apiomat.Datastore.negativeCallback(_callback, error);
			}
		};
		saveCB.parent=this;
		this.save(saveCB);
	}
};

/**
 * Returns an URL of the image.
 
 <br/> You can provide several optional parameters to
 * manipulate the image:
 * 
 * @param width (optional)
 *            the width of the image, 0 to use the original size. If only width
 *            or height are provided, the other value is computed.
 * @param height (optional)
 *            the height of the image, 0 to use the original size. If only width
 *            or height are provided, the other value is computed.
 * @param backgroundColorAsHex (optional)
 *            the background color of the image, null or empty uses the original
 *            background color. Caution: Don't send the '#' symbol! Example:
 *            <i>ff0000</i>
 * @param alpha (optional)
 *            the alpha value of the image (between 0 and 1), null to take the original value.
 * @param format (optional)
 *            the file format of the image to return, e.g. <i>jpg</i> or <i>png</i>
  * @return the URL of the image
 */
Apiomat.Workout.prototype.getImage4URL = function(width, height, bgColorAsHex, alpha, format) 
{
    var url = this.data.image4URL;
    if(!url)
    {
        return undefined;
    }
    url += ".img?apiKey=" + Apiomat.User.AOMAPIKEY + "&system=" + Apiomat.User.AOMSYS;
    if (width) {
        url += "&width=" + width;
    }
    if (height) {
        url += "&height=" + height;
    }
    if (bgColorAsHex) {
        url += "&bgcolor=" + bgColorAsHex;
    }
    if (alpha) {
        url += "&alpha=" + alpha;
    }
    if (format) {
        url += "&format=" + format;
    }
    return url;
}

/**
 * Callback required by loadImage4 function.
 * callback name loadImage4CountCallback
  * @param {function} onOk Function is called when everything is ok. (containg image as bytearray)
  * @param {function} onError Function is called when an error occurs. (containing the error object) 
 */

/** 
 * Load referenced object(s) and
 * add result from server to member variable of this class. <br/> You can provide several optional parameters to
 * manipulate the image:
 * 
 * @param width (optional)
 *            the width of the image, 0 to use the original size. If only width
 *            or height are provided, the other value is computed.
 * @param height (optional)
 *            the height of the image, 0 to use the original size. If only width
 *            or height are provided, the other value is computed.
 * @param bgColorAsHex (optional)
 *            the background color of the image, null or empty uses the original
 *            background color. Caution: Don't send the '#' symbol! Example:
 *            <i>ff0000</i>
 * @param alpha (optional)
 *            the alpha value of the image (between 0 and 1), null to take the original value.
 * @param format (optional)
 *            the file format of the image to return, e.g. <i>jpg</i> or <i>png</i>
 * @param {loadImage4CountCallback} _callback
  * @return the ressource URL of the image
 */
Apiomat.Workout.prototype.loadImage4 = function(width, height, bgColorAsHex, alpha, format,_callback, usePersistentStorage)
{
    var resUrl = this.getImage4URL(width, height, bgColorAsHex, alpha, format);
    if (typeof resUrl === "undefined") {
        var error = new Apiomat.ApiomatRequestError(Apiomat.Status.ATTACHED_HREF_MISSING, 200);
        Apiomat.Datastore.negativeCallback(_callback, error);
        return;
    }    
    return Apiomat.Datastore.getInstance().loadResource(resUrl, _callback, usePersistentStorage);
}

/**
 * Callback required by postImage4 functions.
 * callback name postImage4Callback
 * @param {function} onOk Function is called when everything is ok.
 * @param {function} onError Function is called when an error occurs. (containing the error object) 
 */

/**
 * add an image
 * @param _data image data as byte array
 * @param {postImage4Callback} _callback
 */
Apiomat.Workout.prototype.postImage4 = function(_data, _callback, usePersistentStorage) 
{
	if(typeof _data === 'undefined' || _data === null){
	    var error = new Apiomat.ApiomatRequestError(Apiomat.Status.BAD_RESOURCE);
        Apiomat.Datastore.negativeCallback(_callback, error);
        return;
    }
    if(_data.length <= 0){
        var error = new Apiomat.ApiomatRequestError(Apiomat.Status.BAD_IMAGE);
        Apiomat.Datastore.negativeCallback(_callback, error);
        return;
    }
    if(typeof this.getHref() === "undefined" || this.getHref() === "") {
        var error = new Apiomat.ApiomatRequestError(Apiomat.Status.HREF_NOT_FOUND);
        Apiomat.Datastore.negativeCallback(_callback, error);
        return;
    }
    var postCB = {
            onOk : function(_imgHref) {
                if (_imgHref) {
                    this.parent.data.image4URL = _imgHref;
					if(Apiomat.AOMNetworkHandler.isConnected() === false){
                		Apiomat.Datastore.getInstance().getStorageImpl(usePersistentStorage).addOrUpdateCollection(this.parent.data.href, this.parent.data);
                	}
                    /* object was not saved yet, this is needed for media push */
                    if(this.parent.wasLocalSave) {
                        this.parent.data.image4URL = _imgHref;
                        this.parent.save(_callback, true, usePersistentStorage);
                    }
                    else {
                        this.parent.load(_callback, usePersistentStorage);
                    }
                }
                else {
                    var error = new Apiomat.ApiomatRequestError(Apiomat.Status.HREF_NOT_FOUND);
                    if (_callback) {
                        Apiomat.Datastore.negativeCallback(_callback,error);
                    } else if(console && console.log) {
                        console.log("Error occurred: " + error);
                    }
                }
            },
            onError : function(error) {
                Apiomat.Datastore.negativeCallback(_callback,error);
            }
    };
    postCB.parent = this;
    if(Apiomat.Datastore.getInstance().shouldSendOffline("POST")) {
    	this.wasLocalSave = true;
        Apiomat.Datastore.getInstance( ).sendOffline( "POST", null, _data, true, postCB, this.getOptionsForStaticData("image4"));
    }
    else {
    	this.wasLocalSave = false;
        Apiomat.Datastore.getInstance().postStaticDataOnServer(_data, true, postCB, usePersistentStorage, this.getOptionsForStaticData("image4"));
    }
};

/**
 * Callback required by deleteImage4 functions.
 * callback name deleteImage4Callback
 * @param {function} onOk Function is called when everything is ok.
 * @param {function} onError Function is called when an error occurs. (containing the error object) 
 */

/**
 * delete a image
 * @param {deleteImage4Callback} _callback
 */
Apiomat.Workout.prototype.deleteImage4 = function(_callback, usePersistentStorage) 
{
	var dataUrl = this.data.image4URL;
	if (dataUrl === undefined || dataUrl === "") {
		var error = new Apiomat.ApiomatRequestError(Apiomat.Status.ATTACHED_HREF_MISSING);
		Apiomat.Datastore.negativeCallback(_callback, error);
		return;
	}
	/* Decide whether to use the old or new data handling */
	if (dataUrl.indexOf( "/data/" +  "images/"  + this.getModuleName() + "/Workout/" ) !== -1)
	{
		var deleteCB = {
			onOk : function() {
				if(this.parent.wasLocalDelete) {
					delete this.parent.data.image4URL;
					this.parent.save(_callback, true, usePersistentStorage);
				}
				else {
					this.parent.load(_callback, usePersistentStorage);
				}
			},
			onError : function(error) {
				Apiomat.Datastore.negativeCallback(_callback, error);
			}
		};
		deleteCB.parent = this;

		if(Apiomat.Datastore.getInstance().shouldSendOffline("DELETE")) {
			this.wasLocalDelete = true;
			Apiomat.Datastore.getInstance( ).sendOffline( "DELETE", dataUrl, null, null, deleteCB );
		}
		else {
			this.wasLocalDelete = false;
			Apiomat.Datastore.getInstance().deleteOnServer(dataUrl, deleteCB);
		}
	}
	else
	{
		// First try to delete the attribute and then save, to find out if the caller is allowed to do so
		delete this.data.image4URL;
		/* update object again and save deleted image reference in object */
		var saveCB = {
			onOk : function() {
				//save was successful, now call delete on server
				var deleteCB = {
					onOk : function() {
						Apiomat.Datastore.positiveCallback(_callback);
					},
					onError : function(error) {
						Apiomat.Datastore.negativeCallback(_callback, error);
					}
				};
				if(Apiomat.Datastore.getInstance().shouldSendOffline("DELETE"))
				{
					Apiomat.Datastore.getInstance( ).sendOffline( "DELETE", dataUrl, null, null, deleteCB );
				}
				else
				{
					Apiomat.Datastore.getInstance().deleteOnServer(dataUrl, deleteCB);
				}
			},
			onError : function(error) {
				//save was unsuccessful, reset data
				this.parent.data.image4URL = dataUrl;
				Apiomat.Datastore.negativeCallback(_callback, error);
			}
		};
		saveCB.parent=this;
		this.save(saveCB);
	}
};

/**
 * Returns an URL of the image.
 
 <br/> You can provide several optional parameters to
 * manipulate the image:
 * 
 * @param width (optional)
 *            the width of the image, 0 to use the original size. If only width
 *            or height are provided, the other value is computed.
 * @param height (optional)
 *            the height of the image, 0 to use the original size. If only width
 *            or height are provided, the other value is computed.
 * @param backgroundColorAsHex (optional)
 *            the background color of the image, null or empty uses the original
 *            background color. Caution: Don't send the '#' symbol! Example:
 *            <i>ff0000</i>
 * @param alpha (optional)
 *            the alpha value of the image (between 0 and 1), null to take the original value.
 * @param format (optional)
 *            the file format of the image to return, e.g. <i>jpg</i> or <i>png</i>
  * @return the URL of the image
 */
Apiomat.Workout.prototype.getImage5URL = function(width, height, bgColorAsHex, alpha, format) 
{
    var url = this.data.image5URL;
    if(!url)
    {
        return undefined;
    }
    url += ".img?apiKey=" + Apiomat.User.AOMAPIKEY + "&system=" + Apiomat.User.AOMSYS;
    if (width) {
        url += "&width=" + width;
    }
    if (height) {
        url += "&height=" + height;
    }
    if (bgColorAsHex) {
        url += "&bgcolor=" + bgColorAsHex;
    }
    if (alpha) {
        url += "&alpha=" + alpha;
    }
    if (format) {
        url += "&format=" + format;
    }
    return url;
}

/**
 * Callback required by loadImage5 function.
 * callback name loadImage5CountCallback
  * @param {function} onOk Function is called when everything is ok. (containg image as bytearray)
  * @param {function} onError Function is called when an error occurs. (containing the error object) 
 */

/** 
 * Load referenced object(s) and
 * add result from server to member variable of this class. <br/> You can provide several optional parameters to
 * manipulate the image:
 * 
 * @param width (optional)
 *            the width of the image, 0 to use the original size. If only width
 *            or height are provided, the other value is computed.
 * @param height (optional)
 *            the height of the image, 0 to use the original size. If only width
 *            or height are provided, the other value is computed.
 * @param bgColorAsHex (optional)
 *            the background color of the image, null or empty uses the original
 *            background color. Caution: Don't send the '#' symbol! Example:
 *            <i>ff0000</i>
 * @param alpha (optional)
 *            the alpha value of the image (between 0 and 1), null to take the original value.
 * @param format (optional)
 *            the file format of the image to return, e.g. <i>jpg</i> or <i>png</i>
 * @param {loadImage5CountCallback} _callback
  * @return the ressource URL of the image
 */
Apiomat.Workout.prototype.loadImage5 = function(width, height, bgColorAsHex, alpha, format,_callback, usePersistentStorage)
{
    var resUrl = this.getImage5URL(width, height, bgColorAsHex, alpha, format);
    if (typeof resUrl === "undefined") {
        var error = new Apiomat.ApiomatRequestError(Apiomat.Status.ATTACHED_HREF_MISSING, 200);
        Apiomat.Datastore.negativeCallback(_callback, error);
        return;
    }    
    return Apiomat.Datastore.getInstance().loadResource(resUrl, _callback, usePersistentStorage);
}

/**
 * Callback required by postImage5 functions.
 * callback name postImage5Callback
 * @param {function} onOk Function is called when everything is ok.
 * @param {function} onError Function is called when an error occurs. (containing the error object) 
 */

/**
 * add an image
 * @param _data image data as byte array
 * @param {postImage5Callback} _callback
 */
Apiomat.Workout.prototype.postImage5 = function(_data, _callback, usePersistentStorage) 
{
	if(typeof _data === 'undefined' || _data === null){
	    var error = new Apiomat.ApiomatRequestError(Apiomat.Status.BAD_RESOURCE);
        Apiomat.Datastore.negativeCallback(_callback, error);
        return;
    }
    if(_data.length <= 0){
        var error = new Apiomat.ApiomatRequestError(Apiomat.Status.BAD_IMAGE);
        Apiomat.Datastore.negativeCallback(_callback, error);
        return;
    }
    if(typeof this.getHref() === "undefined" || this.getHref() === "") {
        var error = new Apiomat.ApiomatRequestError(Apiomat.Status.HREF_NOT_FOUND);
        Apiomat.Datastore.negativeCallback(_callback, error);
        return;
    }
    var postCB = {
            onOk : function(_imgHref) {
                if (_imgHref) {
                    this.parent.data.image5URL = _imgHref;
					if(Apiomat.AOMNetworkHandler.isConnected() === false){
                		Apiomat.Datastore.getInstance().getStorageImpl(usePersistentStorage).addOrUpdateCollection(this.parent.data.href, this.parent.data);
                	}
                    /* object was not saved yet, this is needed for media push */
                    if(this.parent.wasLocalSave) {
                        this.parent.data.image5URL = _imgHref;
                        this.parent.save(_callback, true, usePersistentStorage);
                    }
                    else {
                        this.parent.load(_callback, usePersistentStorage);
                    }
                }
                else {
                    var error = new Apiomat.ApiomatRequestError(Apiomat.Status.HREF_NOT_FOUND);
                    if (_callback) {
                        Apiomat.Datastore.negativeCallback(_callback,error);
                    } else if(console && console.log) {
                        console.log("Error occurred: " + error);
                    }
                }
            },
            onError : function(error) {
                Apiomat.Datastore.negativeCallback(_callback,error);
            }
    };
    postCB.parent = this;
    if(Apiomat.Datastore.getInstance().shouldSendOffline("POST")) {
    	this.wasLocalSave = true;
        Apiomat.Datastore.getInstance( ).sendOffline( "POST", null, _data, true, postCB, this.getOptionsForStaticData("image5"));
    }
    else {
    	this.wasLocalSave = false;
        Apiomat.Datastore.getInstance().postStaticDataOnServer(_data, true, postCB, usePersistentStorage, this.getOptionsForStaticData("image5"));
    }
};

/**
 * Callback required by deleteImage5 functions.
 * callback name deleteImage5Callback
 * @param {function} onOk Function is called when everything is ok.
 * @param {function} onError Function is called when an error occurs. (containing the error object) 
 */

/**
 * delete a image
 * @param {deleteImage5Callback} _callback
 */
Apiomat.Workout.prototype.deleteImage5 = function(_callback, usePersistentStorage) 
{
	var dataUrl = this.data.image5URL;
	if (dataUrl === undefined || dataUrl === "") {
		var error = new Apiomat.ApiomatRequestError(Apiomat.Status.ATTACHED_HREF_MISSING);
		Apiomat.Datastore.negativeCallback(_callback, error);
		return;
	}
	/* Decide whether to use the old or new data handling */
	if (dataUrl.indexOf( "/data/" +  "images/"  + this.getModuleName() + "/Workout/" ) !== -1)
	{
		var deleteCB = {
			onOk : function() {
				if(this.parent.wasLocalDelete) {
					delete this.parent.data.image5URL;
					this.parent.save(_callback, true, usePersistentStorage);
				}
				else {
					this.parent.load(_callback, usePersistentStorage);
				}
			},
			onError : function(error) {
				Apiomat.Datastore.negativeCallback(_callback, error);
			}
		};
		deleteCB.parent = this;

		if(Apiomat.Datastore.getInstance().shouldSendOffline("DELETE")) {
			this.wasLocalDelete = true;
			Apiomat.Datastore.getInstance( ).sendOffline( "DELETE", dataUrl, null, null, deleteCB );
		}
		else {
			this.wasLocalDelete = false;
			Apiomat.Datastore.getInstance().deleteOnServer(dataUrl, deleteCB);
		}
	}
	else
	{
		// First try to delete the attribute and then save, to find out if the caller is allowed to do so
		delete this.data.image5URL;
		/* update object again and save deleted image reference in object */
		var saveCB = {
			onOk : function() {
				//save was successful, now call delete on server
				var deleteCB = {
					onOk : function() {
						Apiomat.Datastore.positiveCallback(_callback);
					},
					onError : function(error) {
						Apiomat.Datastore.negativeCallback(_callback, error);
					}
				};
				if(Apiomat.Datastore.getInstance().shouldSendOffline("DELETE"))
				{
					Apiomat.Datastore.getInstance( ).sendOffline( "DELETE", dataUrl, null, null, deleteCB );
				}
				else
				{
					Apiomat.Datastore.getInstance().deleteOnServer(dataUrl, deleteCB);
				}
			},
			onError : function(error) {
				//save was unsuccessful, reset data
				this.parent.data.image5URL = dataUrl;
				Apiomat.Datastore.negativeCallback(_callback, error);
			}
		};
		saveCB.parent=this;
		this.save(saveCB);
	}
};


/**
 * get Title
 * @return Title
 */
Apiomat.Workout.prototype.getTitle = function() 
{
            return this.data.title !== null ? this.data.title : undefined;
    
};

/**
 * set Title
 * @param Title
 */
Apiomat.Workout.prototype.setTitle = function(_title) {
    this.data.title = _title;
};


/**
 * get WorkoutType
 * @return WorkoutType
 */
Apiomat.Workout.prototype.getWorkoutType = function() 
{
            return this.data.workoutType !== null ? this.data.workoutType : undefined;
    
};

/**
 * set WorkoutType
 * @param WorkoutType
 */
Apiomat.Workout.prototype.setWorkoutType = function(_workoutType) {
    this.data.workoutType = _workoutType;
};


})(typeof exports === 'undefined' ? Apiomat
        : exports);
