if (typeof goog !== 'undefined')
{
	goog.provide('Apiomat.MemoryStorage');

	goog.require('Apiomat.AOMHelper');
}


Array.prototype.contains = function(obj) {
    var i = this.length;
    while (i--) {
        if (this[i] === obj) {
            return true;
        }
    }
    return false;
}

var _collectionStorage = {};
var _objectStorage = {};
var _useDeltaSync = false;

(function(Apiomat){
	Apiomat.MemoryStorage = (function()
    {
    	return {
    			addOrUpdateCollection : function(href, responseJSON){
    				if(responseJSON instanceof Array){
    					/* in case of deltaSync we have to do a collection-update */
    					if(_useDeltaSync){
    						if(!_collectionStorage.hasOwnProperty(href)){
    							_collectionStorage[href] = _createIdArray(responseJSON);
    						}else{
    							_collectionStorage[href] = _updateIdArray(responseJSON, href);
    						}
    					}
    					/* in case of not-delta we just put the collection into storage */
    					else{
    						_collectionStorage[href] = _createIdArray(responseJSON);
    					}

    					for(i = 0; i < responseJSON.length; i++){
    						this.addOrUpdateObject(responseJSON[i]);
    					}
    				}
    				else{
    					this.addOrUpdateObject(responseJSON, href);
    				}
    			},
    			/* adds an object to objectStorage or updates it if already present */
    			addOrUpdateObject : function(object, href){
    				/* the loadMe-case */
    				if(object.id != undefined && href != undefined && href.endsWith("/models/me")){
    					if((_objectStorage.hasOwnProperty(href) && _objectStorage[href].lastModifiedAt <=
							object.lastModifiedAt) || !_objectStorage.hasOwnProperty(href)){
						_objectStorage[href] = object;
					}
    				}
    				else if(object.id != undefined){
    					if((_objectStorage.hasOwnProperty(object.id) && _objectStorage[object.id].lastModifiedAt <=
    							object.lastModifiedAt) || !_objectStorage.hasOwnProperty(object.id)){
    						_objectStorage[object.id] = object;
    					}
    				} else if(href.indexOf("images/") > -1 || href.indexOf("files/") > -1) {
  						var key = href.substring(href.lastIndexOf("/") + 1, href.lastIndexOf(".img"))
  						_objectStorage[key] = object;
      				}
    			},
    			getCollection : function(href){
    				return _collectionStorage[href];
    			},
    			getCollectionObjects : function(href){
    				collection = this.getCollection(href);
    				if(href.endsWith("/models/me")){
        				if(collection == null){
        					return undefined;
        				}
        				return collection;
    				}
    				if(!collection){
						var id = href.substring(href.lastIndexOf("/")+1, href.length);
						if(id.indexOf(".img") > -1){
							id = id.substring(0, id.lastIndexOf(".img"));
						}
    					return this.getObject(id);
    				}
    				var objectArray = new Array();
    				for(i = 0; i < collection.length; i++){
    					if(_objectStorage[collection[i]]){
    						objectArray.push(_objectStorage[collection[i]]);
    					}
    				}
    				return objectArray;
    			},
    			getObject : function(id){
    				return _objectStorage[id];
    			},
    			removeCollection : function(href){
    				delete _collectionStorage[href];
    			},
    			removeObjectByHref : function(href){
    				var potentialHref = href.substring(0, href.lastIndexOf("/"));
    				var id = href.substring(href.lastIndexOf("/")+1, href.length);
    				/* split the href and check if there´s a second id (starting with a number). If so, it´s a reference */
    				var splits = potentialHref.split("/");
    				var isReference = false;
    				for(i = splits.length-1; i > 2; i--){
						if((splits[i].slice(0, 1).match(/[0-9]/)!=null)){
							isReference = true;
							break;
						}
    				}
    				if(potentialHref in _collectionStorage && isReference){
    					_removeIdFromCollection(potentialHref, id);
    				}
    				else if(id in _objectStorage && !isReference){
    					_removeObject(id);
    				}
    			},
    			removeObjectById : function(id){
    				_removeObject(id);
    			},
    			removeObjectsOnDeltaDeleted : function(href, ids){
    				if(_useDeltaSync){
    					for(i = 0; i < ids.length; i++){
    						_removeObject(ids[i]);
    					}
    				}
    			},
    			removeObjectsOnDeltaRemoved : function(href, ids){
    				if(_useDeltaSync){
    					if(href in _collectionStorage){
    						for(i = 0; i < ids.length; i++){
    							_removeIdFromCollection(href, ids[i]);
    						}
    					}
    				}
    			},
    			getCollectionStorage : function(){
    				return _collectionStorage;
    			},
    			setUseDeltaSync : function(useDeltaSync){
    				_useDeltaSync = useDeltaSync;
    			},
    			getObjectStorage : function(){
    				return _objectStorage;
    			},
    			clearStorage : function(){
    				this.clearCollections();
    				this.clearObjects();
    			},
    			clearCollections : function(){
    				_collectionStorage = {};
    			},
    			clearObjects : function(){
    				_objectStorage = {};
    			}
    	};

    	/* creates a new array of ids for a href */
    	function _createIdArray(collection){
    		var idArray = new Array();
    		for(i = 0; i < collection.length; i++){
    			if(collection[i] && collection[i].id != undefined){
    				idArray.push(collection[i].id);
    			}
    		}
    		return idArray;
    	}

    	/* updates an array of ids in delta-case: only adds and updates */
    	function _updateIdArray(collection, href){
    		var idArray = _collectionStorage[href];
    		for(i = 0; i < collection.length; i++){
    			if(collection[i].id != undefined && !idArray.contains(collection[i].id)){
    				idArray.push(collection[i].id);
    			}
    		}
    		return idArray;
    	}

    	/* removes a single object from objectStorage and all references from collectionStorage */
    	function _removeObject(id){
    		delete _objectStorage[id];
    		/* purge collections */
    		for(var key in _collectionStorage){
    			_removeIdFromCollection(key, id);
    		}
    	}

    	/* removes a single id from a collection´s id-array */
    	function _removeIdFromCollection(href, id){
    		var index = _collectionStorage[href].indexOf(id);
    		if(index !== undefined && index > -1){
    			_collectionStorage[href].splice(index, 1);
    		}
    	}
    })();
})(typeof exports === 'undefined'? Apiomat: exports);
