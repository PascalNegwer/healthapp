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
    goog.provide('Apiomat.EyeExercise');
    goog.require('Apiomat.AbstractClientDataModel');
}
if(typeof exports === 'undefined')
{
    var Apiomat = Apiomat || {};
}
(function(Apiomat)
{
Apiomat.EyeExercise = function() {
    this.init();
    /* referenced object methods */

};
/* static methods */

/**
 * Callback required by getEyeExercises function.
 * callback name getEyeExercisesCallback
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
 * @param {getEyeExercisesCallback} callback
 */
Apiomat.EyeExercise.getEyeExercises = function(query, callback, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadListFromServerWithClass(Apiomat.EyeExercise, query, callback, false, usePersistentStorage);
};

/**
 * Callback required by getEyeExercisesAndRefHref function.
 * callback name getEyeExercisesAndRefHrefCallback
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
 * @param {getEyeExercisesAndRefHrefCallback} callback which is called when request finished
 */
Apiomat.EyeExercise.getEyeExercisesAndRefHref = function(query, callback,withReferencedHrefs, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadListFromServerWithClass(Apiomat.EyeExercise, query, callback, withReferencedHrefs, usePersistentStorage);
};

/**
 * Callback required by getEyeExercisesCount function.
 * callback name getEyeExercisesCountCallback
 * @param {function} onOk Function is called when everything is ok. (containing count as {number})
 * @param {function} onError Function is called when an error occurs. (containing the error object) 
 */

/**
 * Returns count of objects of this class filtered by the given query from server
 * 
 * @param query a query filtering the results in SQL style (@see <a href="http://doc.apiomat.com">documentation</a>)
 * @param {getEyeExercisesCountCallback} callback which is called when request finished
 */
Apiomat.EyeExercise.getEyeExercisesCount = function(query, callback, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadCountFromServer(Apiomat.EyeExercise, undefined, query, callback, usePersistentStorage);
};

/**
 * Deletes the classes that have been fetched with getEyeExercises() (or its async version) before
 *
 * Note: The SDK doesn't contain a query parser, so you need to pass the same query as in the fetch request.
 * Also, if you fetched objects from a class with different queries, the object doesn't get deleted
 *
 * @param {string} query 
 * @param {deleteAllFromStorageCallback} callback to be called after request is done
 */
Apiomat.EyeExercise.deleteAllFromStorage = function(query, callback) {
    Apiomat.Datastore.getInstance().deleteCollectionFromStorage(false, Apiomat.EyeExercise, query, callback);
};

/**
 * Deletes the classes that have been fetched with getEyeExercisesWithReferencedHref (or its async version) before
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
Apiomat.EyeExercise.deleteAllFromStorageWithReferencedHrefs = function(query, callback) {
    Apiomat.Datastore.getInstance().deleteCollectionFromStorage(true, Apiomat.EyeExercise, query, callback);
};


/* inheritance */
Apiomat.EyeExercise.prototype = new Apiomat.AbstractClientDataModel();
Apiomat.EyeExercise.prototype.constructor = Apiomat.EyeExercise;


Apiomat.EyeExercise.prototype.init=function () {
        this.data = new Object();
}
/**
 * get simple name
 * @return {string} className
 */
Apiomat.EyeExercise.prototype.getSimpleName = function() {
    return "EyeExercise";
};
/**
 * get module name
 * @return {string} moduleName
 */
Apiomat.EyeExercise.prototype.getModuleName = function() {
    return "Healthapp";
};

/* easy getter and setter */


/**
 * get Description
 * @return Description
 */
Apiomat.EyeExercise.prototype.getDescription = function() 
{
            return this.data.description !== null ? this.data.description : undefined;
    
};

/**
 * set Description
 * @param Description
 */
Apiomat.EyeExercise.prototype.setDescription = function(_description) {
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
Apiomat.EyeExercise.prototype.getImageURL = function(width, height, bgColorAsHex, alpha, format) 
{
    var url = this.data.imageURL;
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
 * Callback required by loadImage function.
 * callback name loadImageCountCallback
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
 * @param {loadImageCountCallback} _callback
  * @return the ressource URL of the image
 */
Apiomat.EyeExercise.prototype.loadImage = function(width, height, bgColorAsHex, alpha, format,_callback, usePersistentStorage)
{
    var resUrl = this.getImageURL(width, height, bgColorAsHex, alpha, format);
    if (typeof resUrl === "undefined") {
        var error = new Apiomat.ApiomatRequestError(Apiomat.Status.ATTACHED_HREF_MISSING, 200);
        Apiomat.Datastore.negativeCallback(_callback, error);
        return;
    }    
    return Apiomat.Datastore.getInstance().loadResource(resUrl, _callback, usePersistentStorage);
}

/**
 * Callback required by postImage functions.
 * callback name postImageCallback
 * @param {function} onOk Function is called when everything is ok.
 * @param {function} onError Function is called when an error occurs. (containing the error object) 
 */

/**
 * add an image
 * @param _data image data as byte array
 * @param {postImageCallback} _callback
 */
Apiomat.EyeExercise.prototype.postImage = function(_data, _callback, usePersistentStorage) 
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
                    this.parent.data.imageURL = _imgHref;
					if(Apiomat.AOMNetworkHandler.isConnected() === false){
                		Apiomat.Datastore.getInstance().getStorageImpl(usePersistentStorage).addOrUpdateCollection(this.parent.data.href, this.parent.data);
                	}
                    /* object was not saved yet, this is needed for media push */
                    if(this.parent.wasLocalSave) {
                        this.parent.data.imageURL = _imgHref;
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
        Apiomat.Datastore.getInstance( ).sendOffline( "POST", null, _data, true, postCB, this.getOptionsForStaticData("image"));
    }
    else {
    	this.wasLocalSave = false;
        Apiomat.Datastore.getInstance().postStaticDataOnServer(_data, true, postCB, usePersistentStorage, this.getOptionsForStaticData("image"));
    }
};

/**
 * Callback required by deleteImage functions.
 * callback name deleteImageCallback
 * @param {function} onOk Function is called when everything is ok.
 * @param {function} onError Function is called when an error occurs. (containing the error object) 
 */

/**
 * delete a image
 * @param {deleteImageCallback} _callback
 */
Apiomat.EyeExercise.prototype.deleteImage = function(_callback, usePersistentStorage) 
{
	var dataUrl = this.data.imageURL;
	if (dataUrl === undefined || dataUrl === "") {
		var error = new Apiomat.ApiomatRequestError(Apiomat.Status.ATTACHED_HREF_MISSING);
		Apiomat.Datastore.negativeCallback(_callback, error);
		return;
	}
	/* Decide whether to use the old or new data handling */
	if (dataUrl.indexOf( "/data/" +  "images/"  + this.getModuleName() + "/EyeExercise/" ) !== -1)
	{
		var deleteCB = {
			onOk : function() {
				if(this.parent.wasLocalDelete) {
					delete this.parent.data.imageURL;
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
		delete this.data.imageURL;
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
				this.parent.data.imageURL = dataUrl;
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
Apiomat.EyeExercise.prototype.getTitle = function() 
{
            return this.data.title !== null ? this.data.title : undefined;
    
};

/**
 * set Title
 * @param Title
 */
Apiomat.EyeExercise.prototype.setTitle = function(_title) {
    this.data.title = _title;
};


})(typeof exports === 'undefined' ? Apiomat
        : exports);
