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
	goog.provide('Apiomat.AbstractClientDataModel');

	goog.require('Apiomat.Datastore');
	goog.require('Apiomat.AOMHelper');
}

if (typeof exports === 'undefined') 
{
	var Apiomat = Apiomat || {};
}



(function(Apiomat) {
	Apiomat.ObjectState = {
			TRANSIENT: "TRANSIENT",
			DELETING : "DELETING",
			DELETED : "DELETED",
			PERSISTING : "PERSISTING",
			PERSISTED : "PERSISTED",
			LOCAL_PERSISTED : "LOCAL_PERSISTED",
			LOCAL_DELETED : "LOCAL_DELETED"
		};
	
	Apiomat.AbstractClientDataModel = function() {
		this.data = {};
		this.toJson = function() 
		{
			if (this.getHref()) {
				this.data["id"] = this.getID();
			}
			this.data["@type"] = this.getType();
			var jsonRet = JSON.stringify(this.data);
			delete this.data["id"];
			return jsonRet;
		};

		this.fromJson = function(json) 
		{
			/* if already (Json) object */
			if (typeof json === 'object') 
			{
				/* copy properties from server to class instance */
				for ( var key in json)
				{
					this.data[key] = json[key];
				}
			}
			else
			{
				this.data = JSON.parse(json);
			}
			this.setCurrentState(Apiomat.ObjectState.PERSISTED);
			return this;
		};

		this.getCurrentState = function() 
		{
			return this.currentState;
		};

		this.setCurrentState = function(currentState) 
		{
			this.currentState = currentState;
		};
	};

	Apiomat.AbstractClientDataModel.prototype = {
		getModuleName : function() 
		{
			throw new Apiomat.ApiomatRequestError(undefined, undefined,
					"Must be implemented by child");
		},

		getSimpleName : function() 
		{
			throw new Apiomat.ApiomatRequestError(undefined, undefined,
					"Must be implemented by child");
		},

		getType : function() 
		{
			return this.getModuleName() + "$" + this.getSimpleName();
		},

		getHref : function() 
		{
			return this.data.href;
		},

		getRefModelHrefs : function() 
		{
			return this.data.referencedHrefs;
		},

		getRefModelHrefsForName : function(name) 
		{
			var referencedHrefs = this.getRefModelHrefs();
			if (referencedHrefs.hasOwnProperty(name) || name in referencedHrefs)
			{
				return referencedHrefs[name];
			}
			else
			{
				return null;
			}
		},

		getAllowedRolesGrant : function() 
		{
			return this.data.allowedRolesGrant;
		},

		setAllowedRolesGrant : function(_allowedRolesGrant) 
		{
			this.data.allowedRolesGrant = _allowedRolesGrant;
		},

		getAllowedRolesWrite : function() 
		{
			return this.data.allowedRolesWrite;
		},

		setAllowedRolesWrite : function(_allowedRolesWrite) 
		{
			this.data.allowedRolesWrite = _allowedRolesWrite;
		},

		getAllowedRolesRead : function() 
		{
			return this.data.allowedRolesRead;
		},

		setAllowedRolesRead : function(_allowedRolesRead) 
		{
			this.data.allowedRolesRead = _allowedRolesRead;
		},

		getRstrictResourceAccess : function() 
		{
			return this.data.restrictResourceAccess;
		},

		setRestrictResourceAccess : function(_restrictResourceAccess) 
		{
			this.data.restrictResourceAccess = _restrictResourceAccess;
		},

		getForeignId : function() 
		{
			return this.data.foreignId;
		},

		setForeignId : function(_foreignId) 
		{
			this.data.foreignId = _foreignId;
		},

		getCreatedAt : function() 
		{
			return new Date(this.data.createdAt);
		},

		getLastModifiedAt : function() 
		{
			return new Date(this.data.lastModifiedAt);
		},

		getAppName : function() 
		{
			return this.data.applicationName;
		},

		/* CRUD methods */
		load : function(callback, usePersistentStorage) 
		{
			this.loadWithHref(undefined, callback, usePersistentStorage);
		},
		loadAndRefHref : function(callback, usePersistentStorage) 
		{
			this.loadWithHrefAndRefHref(undefined, callback, usePersistentStorage);
		},

		loadWithHref : function(href, callback, usePersistentStorage) 
		{
			var illegalState = this.isIllegalState();
			if (illegalState) 
			{
				var error="Object is in persisting or deleting process. Please try again later";
				if (this.getCurrentState( )==Apiomat.ObjectState.PERSISTING) {
					error = new Apiomat.ApiomatRequestError(
							Apiomat.Status.IN_PERSISTING_PROCESS, 201,
							"Object is in persisting process. Please try again later" );
					
				} else if (this.getCurrentState( )==Apiomat.ObjectState.DELETING) {
					error = new Apiomat.ApiomatRequestError(
							Apiomat.Status.IN_DELETING_PROCESS, 201,
							"Object is in deleting process. Please try again later" );
				}
				Apiomat.Datastore.negativeCallback(callback,error);
			} 
			else 
			{
				Apiomat.Datastore.getInstance().loadFromServer(
						href || this.getHref(), callback, this, false, undefined, undefined, undefined, usePersistentStorage);
			}
		},
		loadWithHrefAndRefHref : function(href, callback, usePersistentStorage) 
		{
			var illegalState = this.isIllegalState();
			if (illegalState) 
			{
				var error="Object is in persisting or deleting process. Please try again later";
				if (this.getCurrentState( )==Apiomat.ObjectState.PERSISTING) {
					error = new Apiomat.ApiomatRequestError(
							Apiomat.Status.IN_PERSISTING_PROCESS, 201,
							"Object is in persisting process. Please try again later" );
					
				} else if (this.getCurrentState( )==Apiomat.ObjectState.DELETING) {
					error = new Apiomat.ApiomatRequestError(
							Apiomat.Status.IN_DELETING_PROCESS, 201,
							"Object is in deleting process. Please try again later" );
				}
				Apiomat.Datastore.negativeCallback(callback,error);
			} 
			else
			{
				Apiomat.Datastore.getInstance().loadFromServer(
						href || this.getHref(), callback, this, true, undefined, undefined, false, usePersistentStorage);
			}
		},

		save : function(_callback, loadAfterwards, usePersistentStorage) 
		{
			var illegalState = this.isIllegalState();
			if (illegalState) 
			{
				var error="Object is in persisting or deleting process. Please try again later";
				if (this.getCurrentState( )==Apiomat.ObjectState.PERSISTING) {
					error = new Apiomat.ApiomatRequestError(
							Apiomat.Status.IN_PERSISTING_PROCESS, 201,
							"Object is in persisting process. Please try again later" );
					
				} else if (this.getCurrentState( )==Apiomat.ObjectState.DELETING) {
					error = new Apiomat.ApiomatRequestError(
							Apiomat.Status.IN_DELETING_PROCESS, 201,
							"Object is in deleting process. Please try again later" );
				}
				Apiomat.Datastore.negativeCallback(_callback,error);
			} 
			else 
			{
				this.setCurrentState(Apiomat.ObjectState.PERSISTING);
				loadAfterwards = (typeof loadAfterwards !== "undefined" && loadAfterwards.constructor === Boolean) ? loadAfterwards
						: true;
				var internCallback = {
					onOk : function(href) 
					{
						/* load again */
						if (!this.parent.getHref() && href) 
						{
							this.parent.data.href = href;
						}
						this.parent.setOffline(this.wasLocalSave || false);

						/* if this was an offline request don't load again */
						if (!this.wasLocalSave && loadAfterwards) 
						{
							this.parent.setCurrentState(Apiomat.ObjectState.PERSISTED);
							this.parent.load({
								onOk : function() 
								{
									Apiomat.Datastore.positiveCallback(_callback);
								},
								onError : function(error) 
								{
									Apiomat.Datastore.negativeCallback(_callback,error);
								},
								onSecondOk : function()
								{
									Apiomat.Datastore.secondPositiveCallback(_callback);
								}
							}, usePersistentStorage);
						} 
						else
						{
							this.parent.setCurrentState(Apiomat.ObjectState.LOCAL_PERSISTED);
							Apiomat.Datastore.positiveCallback(_callback);
						}
					},
					onError : function(error) {
						this.parent.setCurrentState(Apiomat.ObjectState.TRANSIENT);
						Apiomat.Datastore.negativeCallback(_callback,error);
					},
					onSecondOk : function()
					{
						
					}
				};
				internCallback.parent = this;
				if (!this.getHref()) 
				{
					/* decide if we have to handle offline usage */
					if (Apiomat.Datastore.getInstance().shouldSendOffline(
							"POST")) 
					{
						internCallback.wasLocalSave = true;
						Apiomat.Datastore.getInstance().sendOffline("POST",
								undefined, this, undefined, internCallback);
					} 
					else 
					{
						Apiomat.Datastore.getInstance().postOnServer(this, 
								internCallback, undefined, usePersistentStorage);
					}
				} 
				else 
				{
					if (Apiomat.Datastore.getInstance()
							.shouldSendOffline("PUT"))
					{
						internCallback.wasLocalSave = true;
						Apiomat.Datastore.getInstance()
								.sendOffline("PUT", this.getHref(), this,
										undefined, internCallback);
					} 
					else
					{
						Apiomat.Datastore.getInstance().updateOnServer(this, 
								internCallback, usePersistentStorage);
					}
				}
			}
		},

		deleteModel : function(_callback, usePersistentStorage)
		{
			var illegalState = this.isIllegalState();
			if (illegalState) 
			{
				var error="Object is in persisting or deleting process. Please try again later";
				if (this.getCurrentState( )==Apiomat.ObjectState.PERSISTING) {
					error = new Apiomat.ApiomatRequestError(
							Apiomat.Status.IN_PERSISTING_PROCESS, 201,
							"Object is in persisting process. Please try again later" );
					
				} else if (this.getCurrentState( )==Apiomat.ObjectState.DELETING) {
					error = new Apiomat.ApiomatRequestError(
							Apiomat.Status.IN_DELETING_PROCESS, 201,
							"Object is in deleting process. Please try again later" );
				}
				Apiomat.Datastore.negativeCallback(_callback,error);
			}
			else 
			{
				this.setCurrentState(Apiomat.ObjectState.DELETING);

				var internCallback = {
					onOk : function(obj) 
					{
						this.parent.setCurrentState(this.finishedState);
						if (typeof obj != "undefined")
						{
							Apiomat.Datastore.positiveCallback(_callback,obj);
						}
						else
						{
							Apiomat.Datastore.positiveCallback(_callback);
						}
					},
					onError : function(error)
					{
						this.parent.setCurrentState(Apiomat.ObjectState.TRANSIENT);
						Apiomat.Datastore.negativeCallback(_callback,error);
					}
				}

				internCallback.parent = this;
				if (Apiomat.Datastore.getInstance().shouldSendOffline("DELETE"))
				{
					internCallback.finishedState = Apiomat.ObjectState.LOCAL_DELETED;
					Apiomat.Datastore.getInstance().sendOffline("DELETE",
							this.getHref(), this, undefined, internCallback);
				}
				else
				{
					internCallback.finishedState = Apiomat.ObjectState.DELETED;
					Apiomat.Datastore.getInstance().deleteModelOnServer(this, internCallback, usePersistentStorage);
				}
			}
		},

		isOffline : function()
		{
			return this.data.isOffline || false;
		},

		setOffline : function(_offline)
		{
			this.data.isOffline = _offline;
		},

		getID : function() 
		{
			/* extract from HREF */
			var id = this.getHref().substring(
					this.getHref().lastIndexOf("/") + 1);
			return id;
		},
		getAllObjectStates : function () 
		{
			return this.ObjectState;
		},
		isIllegalState : function()
		{
			/* assume legal state when state should not be checked */
			var result = false;

			if (Apiomat.Datastore.getInstance().getCheckObjectState()) 
			{
				result = this.getCurrentState() == Apiomat.ObjectState.PERSISTING
						|| this.getCurrentState() == Apiomat.ObjectState.DELETING;
			}
			return result;
		},
		getOptionsForStaticData: function(refName) {
			options = {};
			if(typeof this.getHref() !== "undefined" ) {
				options.moduleName = this.getModuleName();
				options.dataModelName = this.getSimpleName();
				options.dataModelId = this.getID();
				options.refName = refName;
			}
			return options;
		}
	};
})(typeof exports === 'undefined' ? Apiomat : exports);