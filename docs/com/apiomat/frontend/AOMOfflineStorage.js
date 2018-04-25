if (typeof goog !== 'undefined')
{
	goog.require('Apiomat.AOMHelper');

	goog.provide('Apiomat.AOMOfflineStorage');
}


(function(Apiomat){
	
	if(Apiomat.AOMHelper.isTitaniumApp())
{
	localStorage = Ti.App.Properties;
	localStorage.setItem = function(key, value) {
		localStorage.setString(key, value);
	}

	localStorage.getItem = function(key) {
		return localStorage.getString(key);
	}

	localStorage.removeItem = function(key) {
		localStorage.removeProperty(key);
	}

	localStorage.clear = function() {
		var props = localStorage.listProperties();
		for( i = 0; i < props.length; i++) {
			localStorage.removeProperty(props[i]);
		}
		return true;
	}

	localStorage.keys = (function() {
		return localStorage.listProperties();
	})();
}
	Apiomat.AOMOfflineStorage = (function()
    {
    	return {
    			addOrUpdateCollection : function(href, collection){
    				if(collection instanceof Array){
    					/* in case of deltaSync we have to do a collection-update */
    					if(_useDeltaSync){
    						if(localStorage.getItem(href) === null){
    							localStorage.setItem(href, JSON.stringify(_createIdArray(collection)));
    						}else{
    							localStorage.setItem(href, JSON.stringify(_updateIdArray(collection, href)));
    						}
    					}
    					/* in case of not-delta we just put the collection into storage */
    					else{
    						localStorage.setItem(href, JSON.stringify(_createIdArray(collection)));
    					}

    					for(i = 0; i < collection.length; i++){
    						this.addOrUpdateObject(collection[i]);
    					}
    				}
    				else{
    					this.addOrUpdateObject(collection, href);
    				}
    			},
    			/* adds an object to objectStorage or updates it if already present */
    			addOrUpdateObject : function(object, href){
    				/* the loadMe-case */
    				if(object.id != undefined && href != undefined && href.endsWith("/models/me")){
    					if(((localStorage.getItem(href) !== null) && JSON.parse(localStorage.getItem(href)).lastModifiedAt <=
    						object.lastModifiedAt) || (localStorage.getItem(href) === null)){
    						localStorage.setItem(href, JSON.stringify(object));
    					}
    				}
    				else if(object.id != undefined){
    					if(((localStorage.getItem(object.id) !== null) && JSON.parse(localStorage.getItem(object.id)).lastModifiedAt <=
    							object.lastModifiedAt) || (localStorage.getItem(object.id) === null)){
    						localStorage.setItem(object.id, JSON.stringify(object));
    					}
  					} else if(href.indexOf("images/") > -1 || href.indexOf("files/") > -1) {
  						var key = href.substring(href.lastIndexOf("/") + 1, href.lastIndexOf(".img"))
  						localStorage.setItem(key, JSON.stringify(object));
      			}
    			},
    			getCollection : function(href){
    				var ret = JSON.parse(localStorage.getItem(href));
    				if(ret == null){
    					return undefined;
    				}
    				return ret;
    			},
    			getCollectionObjects : function(href){
    				var collection = this.getCollection(href);
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
						var ret = this.getObject(id);
	    				if(ret == null){
	    					return undefined;
	    				}
	    				return ret;
    				}
    				var objectArray = new Array();
    				for(i = 0; i < collection.length; i++){
    					if(localStorage.getItem(collection[i]) !== null){
    						objectArray.push(JSON.parse(localStorage.getItem(collection[i])));
    					}
    				}
    				return objectArray;
    			},
    			getObject : function(id){
    				var ret = JSON.parse(localStorage.getItem(id));
    				if(ret == null){
    					return undefined;
    				}
    				return ret;
    			},
    			removeCollection : function(href){
    				localStorage.removeItem(href);
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
    				if((localStorage.getItem(potentialHref) !== null) && isReference){
    					_removeIdFromCollection(potentialHref, id);
    				}
    				else if((localStorage.getItem(id) !== null) && !isReference){
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
    			setUseDeltaSync : function(useDeltaSync){
    				_useDeltaSync = useDeltaSync;
    			},
    			getCollectionStorage : function(){
    				return localStorage;
    			},
    			clearStorage : function(){
    				localStorage.clear();
    			}
    	};

			function _string2Bin(str) {
			  var result = [];
			  for (var i = 0; i < str.length; i++) {
			    result.push(str.charCodeAt(i));
			  }
			  return result;
			}

			function _bin2String(array) {
			  return String.fromCharCode.apply(String, array);
			}

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
    		var idArray = JSON.parse(localStorage.getItem(href));
    		for(i = 0; i < collection.length; i++){
    			if(collection[i].id != undefined){
    				var contains = false;
    				for(j = 0; j < idArray.length; j++){
    					if(idArray[j] === collection[i].id){
    						contains = true;
    						break;
    					}
    				}
    				if(!contains){
    					idArray.push(collection[i].id);
    				}
    			}
    		}
			if(idArray == null){
				return undefined;
			}
    		return idArray;
    	}

    	/* removes a single id from a collection´s id-array */
    	function _removeIdFromCollection(href, id){
				try {
					var idArray = JSON.parse(localStorage.getItem(href));
					if(idArray instanceof Array){
						var index = idArray.indexOf(id);
						if(index !== undefined && index > -1){
							idArray.splice(index, 1);
							localStorage.setItem(href, JSON.stringify(idArray));
						}
					}
				} catch (e) {

				} finally {

				}

    	}

    	/* removes a single object from objectStorage and all references from collectionStorage */
    	function _removeObject(id){
    		localStorage.removeItem(id);
    		/* purge collections */
				if(!Apiomat.AOMHelper.isTitaniumApp())
				{
    			for(var key in localStorage){
    				_removeIdFromCollection(key, id);
    			}
				}
				else {
					var items = localStorage.listProperties();
					var i;
					for( i = 0; i < items.length; i++ ) {
						_removeIdFromCollection( items[i], id );
					}
					var items = localStorage.listProperties();
				}
    	}
    })();
})(typeof exports === 'undefined'? Apiomat: exports);
