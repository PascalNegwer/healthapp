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

if(typeof goog !== 'undefined')
{
    goog.provide('Apiomat.Status');
}
if(typeof exports === 'undefined')
{
    var Apiomat = Apiomat || {};
}
/* ApiOmat status codes */
(function(Apiomat)
{
Apiomat.Status = {
    SCRIPT_ERROR: 701,
    APPLICATION_NOT_ACTIVE: 702,
    BAD_IMAGE: 703,
    BAD_ID: 704,
    CONCURRENT_ACCESS: 705,
    APPLICATION_SANDBOX: 706,
    MODEL_NOT_DEPLOYED: 707,
    WRONG_REF_TYPE: 709,
    ATTRIBUTE_NOT_SET: 710,
    OPERATION_NOT_POSSIBLE: 711,
    APPLICATION_NAME_MISMATCH: 712,
    WRONG_AUTH_HEADER: 713,
    MODEL_STILL_USED: 714,
    COLLECTION_NOT_ALLOWED: 715,
    FB_NO_VALID_MEMBER: 716,
    FB_NO_OAUTH_TOKEN: 717,
    FB_POST_ID_MISSING: 718,
    RESTORE_NO_DUMPS_FOUND: 719,
    TW_NO_VALID_MEMBER: 720,
    TW_NO_OAUTH_TOKEN: 721,
    IMEXPORT_WRONG_ENCODING: 722,
    IMEXPORT_WRONG_CONTENT: 723,
    PUSH_PAYLOAD_EXCEEDED: 724,
    PUSH_ERROR: 725,
    BAD_EMAIL: 726,
    BAD_PROMOTIONCODE_DISCOUNT: 727,
    BAD_PROMOTIONCODE_CODE: 728,
    PLAN_PRICE: 729,
    PLAN_NO_SYSTEMS: 730,
    SCRIPT_TIME_ERROR: 731,
    INVALID_NAME: 732,
    ATTRIBUTE_IN_SUPERCLASS: 733,
    JSON_TYPE_ERROR: 734,
    TBLR_NO_VALID_MEMBER: 735,
    TBLR_NO_OAUTH_TOKEN: 736,
    TBLR_POST_ID_MISSING: 737,
    LOCATION_INVALID: 738,
    SCRIPT_EXCEPTION: 739,
    BAD_ACCOUNTNAME: 740,
    BAD_IMAGE_ALPHA: 746,
    BAD_IMAGE_BGCOLOR: 747,
    BAD_IMAGE_FORMAT: 748,
    QUERY_ERROR: 708,
    BAD_TYPE_IN_QUERY: 741,
    UNKNOWN_CLASS_IN_QUERY: 742,
    WRONG_NUM_FORMAT_IN_QUERY: 743,
    QUERY_PARSE_ERROR: 744,
    UNKNOWN_ATTRIBUTE_IN_QUERY: 745,
    FOREIGNID_NOT_SET: 749,
    CLASSES_MISSING: 750,
    INVALID_ATTRIBUTE_TYPE: 751,
    TOKEN_VALUE_EXISTS: 752,
    JSON_FORMAT_ERROR: 753,
    MODULE_DEPLOYMENT: 754,
    BAD_USERNAME: 755,
    CSV_ZIP_FORMAT: 756,
    VERIFICATION: 757,
    MODULE_STILL_USED: 758,
    CLASS_NOT_IN_MODULE: 759,
    ORDER_TRANSACTION_TIMESTAMP_OUTDATED: 760,
    ORDER_TRANSACTION_ID_INVALID: 761,
    ORDER_TRANSACTION_SECRET_INVALID: 762,
    MANDATORY_FIELD: 763,
    INVALID_PASSWD_LENGTH: 764,
    BAD_PROMOTIONCODE_VALID: 765,
    BAD_CLASS_NAME_SAME_AS_MODULE: 766,
    NO_ORG_MEMBER: 767,
    MODULE_CLASS_NOT_CONTAINED: 768,
    BAD_GROUP_NAME: 769,
    INVISIBLE_CLASS: 770,
    MODULE_TYPE_NOT_ALLOWED: 771,
    MAX_FILE_SIZE: 772,
    BAD_RESOURCE: 773,
    BEFORE_POST_DATA_HOOK: 774,
    SAVE_DATA: 775,
    UPDATE_OBJECT_WITH_DATA: 776,
    AFTER_POST_DATA_HOOK: 777,
    ABORT_SAVE_DATA: 778,
    ATTRIBUTE_NOT_FOUND: 779,
    SYSTEM_NOT_FOUND: 780,
    BEFORE_DELETE_DATA_HOOK: 781,
    ABORT_DELETE_DATA: 782,
    UPDATE_OBJECT_WITH_DELETED_DATA: 783,
    TRANSIENT_DATA_DELETE_UNSUCCESSFUL: 784,
    DELETE_DATA_FAILED: 785,
    PASSWORD_POLICY_RULE_VIOLATED: 786,
    PASSWORD_LOCKED: 787,
    NO_OBJECT_ID: 788,
    ACCOUNT_TEMPORARY_BLOCKED: 789,
    APPLICATION_NOT_FOUND: 801,
    CUSTOMER_NOT_FOUND: 802,
    ID_NOT_FOUND: 803,
    MODEL_NOT_FOUND: 804,
    MODULE_NOT_FOUND: 805,
    PLAN_NOT_FOUND: 807,
    PROMOCODE_NOT_FOUND: 808,
    DEMOAPP_NOT_FOUND: 809,
    ORGANIZATION_NOT_FOUND: 810,
    GROUP_NOT_FOUND: 811,
    ACCOUNT_NOT_FOUND: 812,
    DEFAULT_MODULE_NOT_FOUND: 813,
    MODULE_USE_FORBIDDEN: 820,
    PUSH_ERROR_APIKEY: 821,
    PUSH_ERROR_CERTIFICATE: 822,
    SAME_NAME_USED_IN_SUPERCLASS: 823,
    PAYMENT_MAX_MODULE: 824,
    PAYMENT_SYSTEM: 825,
    PAYMENT_DOWNGRADE: 826,
    SAVE_REFERENECE_BEFORE_REFERENCING: 827,
    PAYMENT_DB_SIZE: 828,
    ENDPOINT_PATH_NOT_ALLOWED: 829,
    PAYMENT_NO_CRON: 1820,
    PAYMENT_MODULE_NOT_FREE: 1821,
    NATIVEMODULE_DEACTIVATED: 1822,
    LICENSE_INVALID: 1823,
    PAYMENT_NO_CUSTOMERROLES: 1824,
    WHITELABEL: 1825,
    WHITELABEL_NOT: 1826,
    MODULE_CONFIG_NO_DOT: 1827,
    PLAN_FALLBACK: 1828,
    PLAN_INACTIVE: 1829,
    ENTERPRISE: 1830,
    ACCOUNT_UNACCEPTED_CONTRACTS: 1831,
    DELETE_MANDATORY_DEFAULT_MODULE: 1832,
    ID_EXISTS: 830,
    NAME_RESERVED: 831,
    CIRCULAR_DEPENDENCY: 832,
    NAME_EXISTS: 833,
    EMAIL_EXISTS: 834,
    CUSTOMER_IN_ORG: 835,
    PUSH_ERROR_PROXY: 836,
    UNAUTHORIZED: 840,
    WRONG_APIKEY: 841,
    EVALANCHE_UNAUTH: 842,
    PW_CHANGE_W_TOKEN: 843,
    TOKEN_AUTH_ERROR: 844,
    TOKEN_READ_ONLY: 845,
    AUTHENTICATION_REJECTED: 846,
    CRUD_ERROR: 901,
    IMEXPORT_ERROR: 902,
    COMPILE_ERROR: 903,
    REFERENCE_ERROR: 904,
    PUSH_PAYLOAD_ERROR: 905,
    PUSH_SEND_ERROR: 906,
    PUSH_INIT_FAILED: 907,
    FACEBOOK_ERROR: 908,
    FACEBOOK_OAUTH_ERROR: 910,
    FACEBOOK_OAUTH_ERROR2: 917,
    MEMBER_NOT_FOUND: 911,
    WORDPRESS_FETCH_DATA_ERROR: 912,
    TUMBLR_OAUTH_ERROR: 913,
    TUMBLR_ERROR: 914,
    EXECUTE_METHOD_ERROR_PRIMITIVE: 915,
    EXECUTE_METHOD_ERROR: 916,
    OAUTH_TOKEN_REQUEST_ERROR: 918,
    FINDING_RESOURCE_ERROR: 919,
    NATIVEMODULE_DEPLOY: 920,
    TOKEN_SEARCH_ERROR: 921,
    MODULE_CONFIG_MISSING: 922,
    NATIVEMODULE_INIT: 923,
    NATIVEMODULE_PULL: 924,
    NATIVEMODULE_PUSH: 925,
    NO_DOGET_RETURN: 926,
    CUSTOMER_TWO_ORGS: 927,
    NATIVEMODULE_HOOKS_NOT_FOUND: 928,
    ANALYTICS_ERROR: 929,
    EMAIL_ERROR: 930,
    MAX_HOOK_CALL_DEPTH_EXCEEDED: 931,
    HREF_NOT_FOUND: 601,
    WRONG_URI_SYNTAX: 602,
    WRONG_CLIENT_PROTOCOL: 603,
    IO_EXCEPTION: 604,
    UNSUPPORTED_ENCODING: 605,
    INSTANTIATE_EXCEPTION: 606,
    IN_PERSISTING_PROCESS: 607,
    VERIFY_SOCIALMEDIA: 608,
    TOO_MANY_LOCALIDS: 609,
    MAX_CACHE_SIZE_REACHED: 610,
    CANT_WRITE_IN_CACHE: 611,
    BAD_DATASTORE_CONFIG: 612,
    NO_TOKEN_RECEIVED: 613,
    NO_NETWORK: 614,
    ID_NOT_FOUND_OFFLINE: 615,
    ATTACHED_HREF_MISSING: 616,
    REQUEST_TIMEOUT: 617,
    ASYNC_WAIT_ERROR: 618,
    IN_DELETING_PROCESS: 619,
    SSO_REDIRECT: 620,
    MANUAL_CONCURRENT_WRITE_FAILED: 621,
    SAVE_FAILED: 622,
    SSL_ERROR: 623,
    MAX_FILE_SIZE_OFFLINE_EXCEEDED: 624,
    SQL_CONSTRAINT: 625,
    MALICIOUS_MEMBER: 950,

/**
 * get reason phrase with statusCode
 * @param statusCode
 * @return {string} phrase
 */
getReasonPhrase : function(statusCode) {
    var phrase = undefined;
    switch (statusCode) {
    case Apiomat.Status.SCRIPT_ERROR:
        phrase = "Script error!";
        break;
    case Apiomat.Status.APPLICATION_NOT_ACTIVE:
        phrase = "Application is deactivated!";
        break;
    case Apiomat.Status.BAD_IMAGE:
        phrase = "Image format seems to be corrupted!";
        break;
    case Apiomat.Status.BAD_ID:
        phrase = "ID format is wrong!";
        break;
    case Apiomat.Status.CONCURRENT_ACCESS:
        phrase = "Concurrent access forbidden!";
        break;
    case Apiomat.Status.APPLICATION_SANDBOX:
        phrase = "Application is in sandbox mode!";
        break;
    case Apiomat.Status.MODEL_NOT_DEPLOYED:
        phrase = "Class is not deployed!";
        break;
    case Apiomat.Status.WRONG_REF_TYPE:
        phrase = "Wrong reference type!";
        break;
    case Apiomat.Status.ATTRIBUTE_NOT_SET:
        phrase = "Attribute not set!";
        break;
    case Apiomat.Status.OPERATION_NOT_POSSIBLE:
        phrase = "CRUD operation not possible on this class!";
        break;
    case Apiomat.Status.APPLICATION_NAME_MISMATCH:
        phrase = "Application name does not match the one defined in the class!";
        break;
    case Apiomat.Status.WRONG_AUTH_HEADER:
        phrase = "Wrong authentication header format, must be 'username:password'";
        break;
    case Apiomat.Status.MODEL_STILL_USED:
        phrase = "Class is still used by other attributes, scripts or subclasses!'";
        break;
    case Apiomat.Status.COLLECTION_NOT_ALLOWED:
        phrase = "Collection is not supported for this class type!";
        break;
    case Apiomat.Status.FB_NO_VALID_MEMBER:
        phrase = "Request send from no valid member";
        break;
    case Apiomat.Status.FB_NO_OAUTH_TOKEN:
        phrase = "Requesting member has no oAuth token, please authenticate! See http://doc.apiomat.com";
        break;
    case Apiomat.Status.FB_POST_ID_MISSING:
        phrase = "Facebook post id has to be set!";
        break;
    case Apiomat.Status.RESTORE_NO_DUMPS_FOUND:
        phrase = "No dumps for app on this date exist!";
        break;
    case Apiomat.Status.TW_NO_VALID_MEMBER:
        phrase = "Request send from no valid member";
        break;
    case Apiomat.Status.TW_NO_OAUTH_TOKEN:
        phrase = "Requesting member has no oAuth token, please authenticate! See http://doc.apiomat.com";
        break;
    case Apiomat.Status.IMEXPORT_WRONG_ENCODING:
        phrase = "Wrong Encoding";
        break;
    case Apiomat.Status.IMEXPORT_WRONG_CONTENT:
        phrase = "Wrong Filecontent";
        break;
    case Apiomat.Status.PUSH_PAYLOAD_EXCEEDED:
        phrase = "Payload size exceeded!";
        break;
    case Apiomat.Status.PUSH_ERROR:
        phrase = "Error in push request!";
        break;
    case Apiomat.Status.BAD_EMAIL:
        phrase = "eMail format is wrong!";
        break;
    case Apiomat.Status.BAD_PROMOTIONCODE_DISCOUNT:
        phrase = "Discount value is wrong!";
        break;
    case Apiomat.Status.BAD_PROMOTIONCODE_CODE:
        phrase = "Code is invalid";
        break;
    case Apiomat.Status.PLAN_PRICE:
        phrase = "Plan price must be >= 0!";
        break;
    case Apiomat.Status.PLAN_NO_SYSTEMS:
        phrase = "Plan must have at least one system!";
        break;
    case Apiomat.Status.SCRIPT_TIME_ERROR:
        phrase = "Script was interrupted, execution took too long.";
        break;
    case Apiomat.Status.INVALID_NAME:
        phrase = "Name must start with a letter, followed only by letters or numbers.";
        break;
    case Apiomat.Status.ATTRIBUTE_IN_SUPERCLASS:
        phrase = "Attribute is already defined in superclass.";
        break;
    case Apiomat.Status.JSON_TYPE_ERROR:
        phrase = "The @type is not correctly defined in your JSON (must be: MODULENAME$CLASSNAME";
        break;
    case Apiomat.Status.TBLR_NO_VALID_MEMBER:
        phrase = "Request send from no valid member";
        break;
    case Apiomat.Status.TBLR_NO_OAUTH_TOKEN:
        phrase = "Requesting member has no oAuth token, please authenticate! See http://doc.apiomat.com";
        break;
    case Apiomat.Status.TBLR_POST_ID_MISSING:
        phrase = "Tumblr post id has to be set!";
        break;
    case Apiomat.Status.LOCATION_INVALID:
        phrase = "Location data is invalid (latitude or longitude missing)!";
        break;
    case Apiomat.Status.SCRIPT_EXCEPTION:
        phrase = "Exception was raised in external code!";
        break;
    case Apiomat.Status.BAD_ACCOUNTNAME:
        phrase = "Account name must contain only characters A-Z,a-z or 0-9!";
        break;
    case Apiomat.Status.BAD_IMAGE_ALPHA:
        phrase = "alpha is wrong (must be a double value between 0.0 and 1.0)";
        break;
    case Apiomat.Status.BAD_IMAGE_BGCOLOR:
        phrase = "bgcolor is wrong (must be an RGB hex value without #, like 'FF0000' for red)";
        break;
    case Apiomat.Status.BAD_IMAGE_FORMAT:
        phrase = "format is wrong (can only be png, gif, bmp or jpg/jpeg)";
        break;
    case Apiomat.Status.QUERY_ERROR:
        phrase = "Query could not be parsed!";
        break;
    case Apiomat.Status.BAD_TYPE_IN_QUERY:
        phrase = "The query contains a value with the wrong type";
        break;
    case Apiomat.Status.UNKNOWN_CLASS_IN_QUERY:
        phrase = "The definition of the class couldn't be found";
        break;
    case Apiomat.Status.WRONG_NUM_FORMAT_IN_QUERY:
        phrase = "A number was supplied in the wrong format";
        break;
    case Apiomat.Status.QUERY_PARSE_ERROR:
        phrase = "The query couldn't be parsed";
        break;
    case Apiomat.Status.UNKNOWN_ATTRIBUTE_IN_QUERY:
        phrase = "An attribute that was used in the query doesn't exist in the class";
        break;
    case Apiomat.Status.FOREIGNID_NOT_SET:
        phrase = "Foreign ID must be set to a unique value for this class!";
        break;
    case Apiomat.Status.CLASSES_MISSING:
        phrase = "Not all classes for this module are contained in the jar! This will lead to compile errors.";
        break;
    case Apiomat.Status.INVALID_ATTRIBUTE_TYPE:
        phrase = "Attributes type is invalid";
        break;
    case Apiomat.Status.TOKEN_VALUE_EXISTS:
        phrase = "The token value already exists";
        break;
    case Apiomat.Status.JSON_FORMAT_ERROR:
        phrase = "JSON could not be parsed";
        break;
    case Apiomat.Status.MODULE_DEPLOYMENT:
        phrase = "Module is currently deploying. Please try again later.";
        break;
    case Apiomat.Status.BAD_USERNAME:
        phrase = "User name must not contain a ':'.";
        break;
    case Apiomat.Status.CSV_ZIP_FORMAT:
        phrase = "CSV import only accepts a single .zip file!";
        break;
    case Apiomat.Status.VERIFICATION:
        phrase = "Verification error";
        break;
    case Apiomat.Status.MODULE_STILL_USED:
        phrase = "Module is still used by other modules of this app!'";
        break;
    case Apiomat.Status.CLASS_NOT_IN_MODULE:
        phrase = "Model name not found for this module!";
        break;
    case Apiomat.Status.ORDER_TRANSACTION_TIMESTAMP_OUTDATED:
        phrase = "Transaction outdated!";
        break;
    case Apiomat.Status.ORDER_TRANSACTION_ID_INVALID:
        phrase = "Transaction ID invalid!";
        break;
    case Apiomat.Status.ORDER_TRANSACTION_SECRET_INVALID:
        phrase = "Transaction secret invalid!";
        break;
    case Apiomat.Status.MANDATORY_FIELD:
        phrase = "Mandatory fields must not be empty or null!";
        break;
    case Apiomat.Status.INVALID_PASSWD_LENGTH:
        phrase = "Password must have a length of at least 6 characters!";
        break;
    case Apiomat.Status.BAD_PROMOTIONCODE_VALID:
        phrase = "Valid from/to of Code is null";
        break;
    case Apiomat.Status.BAD_CLASS_NAME_SAME_AS_MODULE:
        phrase = "Class name must not be the same as the module name!";
        break;
    case Apiomat.Status.NO_ORG_MEMBER:
        phrase = "Customer is not a member of the organization";
        break;
    case Apiomat.Status.MODULE_CLASS_NOT_CONTAINED:
        phrase = "Module main class is not contained in the uploaded file! Probably wrong module uploaded?";
        break;
    case Apiomat.Status.BAD_GROUP_NAME:
        phrase = "Account name must contain only characters A-Z,a-z or 0-9!";
        break;
    case Apiomat.Status.INVISIBLE_CLASS:
        phrase = "Class is not visible to REST!";
        break;
    case Apiomat.Status.MODULE_TYPE_NOT_ALLOWED:
        phrase = "The action is not allowed for this module type";
        break;
    case Apiomat.Status.MAX_FILE_SIZE:
        phrase = "File is larger than maximum file size!";
        break;
    case Apiomat.Status.BAD_RESOURCE:
        phrase = "Resource seems to be corrupted or is unexpectedly null or empty.";
        break;
    case Apiomat.Status.BEFORE_POST_DATA_HOOK:
        phrase = "An error occured during calling the beforePostData hook method";
        break;
    case Apiomat.Status.SAVE_DATA:
        phrase = "An error occured during saving the data (image/file)";
        break;
    case Apiomat.Status.UPDATE_OBJECT_WITH_DATA:
        phrase = "The object couldn't be updated with the URL of the saved data (image/file)";
        break;
    case Apiomat.Status.AFTER_POST_DATA_HOOK:
        phrase = "An error occured during calling the afterPostData hook method";
        break;
    case Apiomat.Status.ABORT_SAVE_DATA:
        phrase = "Saving the data was aborted by beforePostData hook method";
        break;
    case Apiomat.Status.ATTRIBUTE_NOT_FOUND:
        phrase = "The attribute doesn't exist";
        break;
    case Apiomat.Status.SYSTEM_NOT_FOUND:
        phrase = "The system doesn't exist";
        break;
    case Apiomat.Status.BEFORE_DELETE_DATA_HOOK:
        phrase = "An error occured during calling the beforeDeleteData hook method";
        break;
    case Apiomat.Status.ABORT_DELETE_DATA:
        phrase = "deleting the data was aborted by beforedeleteData hook method";
        break;
    case Apiomat.Status.UPDATE_OBJECT_WITH_DELETED_DATA:
        phrase = "The object couldn't be updated with the deleted URL of the data (image/file)";
        break;
    case Apiomat.Status.TRANSIENT_DATA_DELETE_UNSUCCESSFUL:
        phrase = "The deletion of the data or removal of the data (image/file) reference from the object was unsuccessful in the doDeleteData() Native Module hook method";
        break;
    case Apiomat.Status.DELETE_DATA_FAILED:
        phrase = "Deleting the data (image/file) from the database failed";
        break;
    case Apiomat.Status.PASSWORD_POLICY_RULE_VIOLATED:
        phrase = "The password doesn't fulfill the password policies.";
        break;
    case Apiomat.Status.PASSWORD_LOCKED:
        phrase = "Your password is locked, so you are currently not allowed to access this resource.";
        break;
    case Apiomat.Status.NO_OBJECT_ID:
        phrase = "The object doesn't have an ID (non-transient) or foreign ID (transient) yet";
        break;
    case Apiomat.Status.ACCOUNT_TEMPORARY_BLOCKED:
        phrase = "Your account is currently blocked due to failing login attempts.";
        break;
    case Apiomat.Status.APPLICATION_NOT_FOUND:
        phrase = "Application was not found!";
        break;
    case Apiomat.Status.CUSTOMER_NOT_FOUND:
        phrase = "Customer was not found!";
        break;
    case Apiomat.Status.ID_NOT_FOUND:
        phrase = "ID was not found!";
        break;
    case Apiomat.Status.MODEL_NOT_FOUND:
        phrase = "Class was not found! Maybe you should (re-)deploy first?";
        break;
    case Apiomat.Status.MODULE_NOT_FOUND:
        phrase = "Module was not found!";
        break;
    case Apiomat.Status.PLAN_NOT_FOUND:
        phrase = "Plan was not found!";
        break;
    case Apiomat.Status.PROMOCODE_NOT_FOUND:
        phrase = "Promotion code not valid!";
        break;
    case Apiomat.Status.DEMOAPP_NOT_FOUND:
        phrase = "This language has no demo content";
        break;
    case Apiomat.Status.ORGANIZATION_NOT_FOUND:
        phrase = "Organization was not found!";
        break;
    case Apiomat.Status.GROUP_NOT_FOUND:
        phrase = "Group was not found!";
        break;
    case Apiomat.Status.ACCOUNT_NOT_FOUND:
        phrase = "Account was not found!";
        break;
    case Apiomat.Status.DEFAULT_MODULE_NOT_FOUND:
        phrase = "Default module was not found for the given account";
        break;
    case Apiomat.Status.MODULE_USE_FORBIDDEN:
        phrase = "Required module is not attached to app";
        break;
    case Apiomat.Status.PUSH_ERROR_APIKEY:
        phrase = "No API Key defined for Push service!";
        break;
    case Apiomat.Status.PUSH_ERROR_CERTIFICATE:
        phrase = "No certificate defined for Push service!";
        break;
    case Apiomat.Status.SAME_NAME_USED_IN_SUPERCLASS:
        phrase = "Same name is already used in a superclass.";
        break;
    case Apiomat.Status.PAYMENT_MAX_MODULE:
        phrase = "Maximum number of used modules exceeded for this plan.";
        break;
    case Apiomat.Status.PAYMENT_SYSTEM:
        phrase = "Selected system use is not allowed for this plan.";
        break;
    case Apiomat.Status.PAYMENT_DOWNGRADE:
        phrase = "Up/Downgrading plans is only allowed for super admins.";
        break;
    case Apiomat.Status.SAVE_REFERENECE_BEFORE_REFERENCING:
        phrase = "Object you are trying to reference is not on the server. Please save it first.";
        break;
    case Apiomat.Status.PAYMENT_DB_SIZE:
        phrase = "Used database size exceeds plan";
        break;
    case Apiomat.Status.ENDPOINT_PATH_NOT_ALLOWED:
        phrase = "Endpoint not allowed for app; please add path to your app's config.";
        break;
    case Apiomat.Status.PAYMENT_NO_CRON:
        phrase = "Cronjobs are not allowed for this plan.";
        break;
    case Apiomat.Status.PAYMENT_MODULE_NOT_FREE:
        phrase = "This module is not available for free plan.";
        break;
    case Apiomat.Status.NATIVEMODULE_DEACTIVATED:
        phrase = "Native Module feature is not activated for this installation.";
        break;
    case Apiomat.Status.LICENSE_INVALID:
        phrase = "Your license does not allow this action.";
        break;
    case Apiomat.Status.PAYMENT_NO_CUSTOMERROLES:
        phrase = "Customer role usage is not available for free plan.";
        break;
    case Apiomat.Status.WHITELABEL:
        phrase = "Only available for whitelabel installations.";
        break;
    case Apiomat.Status.WHITELABEL_NOT:
        phrase = "Not available for whitelabel installations.";
        break;
    case Apiomat.Status.MODULE_CONFIG_NO_DOT:
        phrase = "No dot allowed in module config key.";
        break;
    case Apiomat.Status.PLAN_FALLBACK:
        phrase = "Application cannot be activated without valid plan.";
        break;
    case Apiomat.Status.PLAN_INACTIVE:
        phrase = "Plan is not selectable!";
        break;
    case Apiomat.Status.ENTERPRISE:
        phrase = "Only available for enterprise installations.";
        break;
    case Apiomat.Status.ACCOUNT_UNACCEPTED_CONTRACTS:
        phrase = "Account has unaccepted Contracts";
        break;
    case Apiomat.Status.DELETE_MANDATORY_DEFAULT_MODULE:
        phrase = "It is not allowed to remove this default module";
        break;
    case Apiomat.Status.ID_EXISTS:
        phrase = "ID exists!";
        break;
    case Apiomat.Status.NAME_RESERVED:
        phrase = "Name is reserved!";
        break;
    case Apiomat.Status.CIRCULAR_DEPENDENCY:
        phrase = "You can't set circular inheritance!";
        break;
    case Apiomat.Status.NAME_EXISTS:
        phrase = "Name is already used!";
        break;
    case Apiomat.Status.EMAIL_EXISTS:
        phrase = "E-mail is already used!";
        break;
    case Apiomat.Status.CUSTOMER_IN_ORG:
        phrase = "Customer is already member of an organization";
        break;
    case Apiomat.Status.PUSH_ERROR_PROXY:
        phrase = "Proxy configuration caused an error for Push service!";
        break;
    case Apiomat.Status.UNAUTHORIZED:
        phrase = "Authorization failed!";
        break;
    case Apiomat.Status.WRONG_APIKEY:
        phrase = "API Key was not correct!";
        break;
    case Apiomat.Status.EVALANCHE_UNAUTH:
        phrase = "Authorization failed! Maybe username/password was not set for evelanche configuration?";
        break;
    case Apiomat.Status.PW_CHANGE_W_TOKEN:
        phrase = "Not authorized to change a user's password when authenticating with a token.";
        break;
    case Apiomat.Status.TOKEN_AUTH_ERROR:
        phrase = "The token could not be authenticated";
        break;
    case Apiomat.Status.TOKEN_READ_ONLY:
        phrase = "The token can only be used for read requests.";
        break;
    case Apiomat.Status.AUTHENTICATION_REJECTED:
        phrase = "Authentication with username/password was rejected by third-party-system.";
        break;
    case Apiomat.Status.CRUD_ERROR:
        phrase = "Internal error during CRUD operation";
        break;
    case Apiomat.Status.IMEXPORT_ERROR:
        phrase = "Error during im/export!";
        break;
    case Apiomat.Status.COMPILE_ERROR:
        phrase = "Classes could not be compiled!";
        break;
    case Apiomat.Status.REFERENCE_ERROR:
        phrase = "Error in class reference!";
        break;
    case Apiomat.Status.PUSH_PAYLOAD_ERROR:
        phrase = "Failed to create payload!";
        break;
    case Apiomat.Status.PUSH_SEND_ERROR:
        phrase = "Failed to send message(s)!";
        break;
    case Apiomat.Status.PUSH_INIT_FAILED:
        phrase = "Failed to initialize push service!";
        break;
    case Apiomat.Status.FACEBOOK_ERROR:
        phrase = "An error occured while communicating with facebook!";
        break;
    case Apiomat.Status.FACEBOOK_OAUTH_ERROR:
        phrase = "facebook throws oAuth error! Please show login dialog again";
        break;
    case Apiomat.Status.FACEBOOK_OAUTH_ERROR2:
        phrase = "Received OAuth2 error from Facebook";
        break;
    case Apiomat.Status.MEMBER_NOT_FOUND:
        phrase = "Can't find member with this id/username";
        break;
    case Apiomat.Status.WORDPRESS_FETCH_DATA_ERROR:
        phrase = "Can't fetch data for wordpress blog";
        break;
    case Apiomat.Status.TUMBLR_OAUTH_ERROR:
        phrase = "tumblr threw oAuth error! Please show login dialog again";
        break;
    case Apiomat.Status.TUMBLR_ERROR:
        phrase = "Error communicating with tumblr!";
        break;
    case Apiomat.Status.EXECUTE_METHOD_ERROR_PRIMITIVE:
        phrase = "Only primitive types are allowed";
        break;
    case Apiomat.Status.EXECUTE_METHOD_ERROR:
        phrase = "Execute method failed";
        break;
    case Apiomat.Status.OAUTH_TOKEN_REQUEST_ERROR:
        phrase = "An error occured during requesting an ApiOmat OAuth2 token";
        break;
    case Apiomat.Status.FINDING_RESOURCE_ERROR:
        phrase = "An error occured while trying to find the resource";
        break;
    case Apiomat.Status.NATIVEMODULE_DEPLOY:
        phrase = "Executing onDeploy failed";
        break;
    case Apiomat.Status.TOKEN_SEARCH_ERROR:
        phrase = "An error occured while searching for tokens";
        break;
    case Apiomat.Status.MODULE_CONFIG_MISSING:
        phrase = "Your module seems not to be configured properly";
        break;
    case Apiomat.Status.NATIVEMODULE_INIT:
        phrase = "Could not initialize git repository";
        break;
    case Apiomat.Status.NATIVEMODULE_PULL:
        phrase = "Could not pull git repository";
        break;
    case Apiomat.Status.NATIVEMODULE_PUSH:
        phrase = "Could not push git repository";
        break;
    case Apiomat.Status.NO_DOGET_RETURN:
        phrase = "The module's doGet didn't return a model";
        break;
    case Apiomat.Status.CUSTOMER_TWO_ORGS:
        phrase = "The customer was found in two organizations";
        break;
    case Apiomat.Status.NATIVEMODULE_HOOKS_NOT_FOUND:
        phrase = "Annotated hook class not found";
        break;
    case Apiomat.Status.ANALYTICS_ERROR:
        phrase = "The analytics instance couldn't process the request correctly";
        break;
    case Apiomat.Status.EMAIL_ERROR:
        phrase = "Error during sending email";
        break;
    case Apiomat.Status.MAX_HOOK_CALL_DEPTH_EXCEEDED:
        phrase = "The maximum call depth for hook methods was exceeded";
        break;
    case Apiomat.Status.HREF_NOT_FOUND:
        phrase = "Class has no HREF; please save it first!";
        break;
    case Apiomat.Status.WRONG_URI_SYNTAX:
        phrase = "URI syntax is wrong";
        break;
    case Apiomat.Status.WRONG_CLIENT_PROTOCOL:
        phrase = "Client protocol is wrong";
        break;
    case Apiomat.Status.IO_EXCEPTION:
        phrase = "IOException was thrown";
        break;
    case Apiomat.Status.UNSUPPORTED_ENCODING:
        phrase = "Encoding is not supported";
        break;
    case Apiomat.Status.INSTANTIATE_EXCEPTION:
        phrase = "Error on class instantiation";
        break;
    case Apiomat.Status.IN_PERSISTING_PROCESS:
        phrase = "Object is in persisting process. Please try again later";
        break;
    case Apiomat.Status.VERIFY_SOCIALMEDIA:
        phrase = "Can't verify against social media provider";
        break;
    case Apiomat.Status.TOO_MANY_LOCALIDS:
        phrase = "Can't create more localIDs. Please try again later";
        break;
    case Apiomat.Status.MAX_CACHE_SIZE_REACHED:
        phrase = "The maximum cache size is reached.";
        break;
    case Apiomat.Status.CANT_WRITE_IN_CACHE:
        phrase = "Can't persist data to cache.";
        break;
    case Apiomat.Status.BAD_DATASTORE_CONFIG:
        phrase = "For requesting a session token without a refresh token, the Datastore must be configured with a username and password";
        break;
    case Apiomat.Status.NO_TOKEN_RECEIVED:
        phrase = "The response didn't contain a token";
        break;
    case Apiomat.Status.NO_NETWORK:
        phrase = "No network connection available";
        break;
    case Apiomat.Status.ID_NOT_FOUND_OFFLINE:
        phrase = "ID was not found in offline storage";
        break;
    case Apiomat.Status.ATTACHED_HREF_MISSING:
        phrase = "HREF of attached image / file / reference is missing";
        break;
    case Apiomat.Status.REQUEST_TIMEOUT:
        phrase = "The request timed out during connecting or reading the response";
        break;
    case Apiomat.Status.ASYNC_WAIT_ERROR:
        phrase = "An error occured during waiting for an async task to finish";
        break;
    case Apiomat.Status.IN_DELETING_PROCESS:
        phrase = "Object is in deleting process. Please try again later";
        break;
    case Apiomat.Status.SSO_REDIRECT:
        phrase = "The request was redirected to an SSO Identity Provider";
        break;
    case Apiomat.Status.MANUAL_CONCURRENT_WRITE_FAILED:
        phrase = "Concurrent write to own concurrent data type failed";
        break;
    case Apiomat.Status.SAVE_FAILED:
        phrase = "Load not executed because save already failed";
        break;
    case Apiomat.Status.SSL_ERROR:
        phrase = "An error occurred during establishing a secure connection";
        break;
    case Apiomat.Status.MAX_FILE_SIZE_OFFLINE_EXCEEDED:
        phrase = "The max file size for offline saving is exceeded";
        break;
    case Apiomat.Status.SQL_CONSTRAINT:
        phrase = "An error occurred because of an SQL constraint (for example unique ForeignID";
        break;
    case Apiomat.Status.MALICIOUS_MEMBER:
        phrase = "Malicious use of member detected!";
        break;
    default:
        phrase = "No reason found";
    };
    return phrase;
},

/**
 * get status with httpCode
 * @param httpCode
 * @return {number} statusCode
 */
getStatusForCode : function(httpCode) {
    var statusCode = undefined;
    switch (httpCode) {
    case 701:
        statusCode = Apiomat.Status.SCRIPT_ERROR;
        break;
    case 702:
        statusCode = Apiomat.Status.APPLICATION_NOT_ACTIVE;
        break;
    case 703:
        statusCode = Apiomat.Status.BAD_IMAGE;
        break;
    case 704:
        statusCode = Apiomat.Status.BAD_ID;
        break;
    case 705:
        statusCode = Apiomat.Status.CONCURRENT_ACCESS;
        break;
    case 706:
        statusCode = Apiomat.Status.APPLICATION_SANDBOX;
        break;
    case 707:
        statusCode = Apiomat.Status.MODEL_NOT_DEPLOYED;
        break;
    case 709:
        statusCode = Apiomat.Status.WRONG_REF_TYPE;
        break;
    case 710:
        statusCode = Apiomat.Status.ATTRIBUTE_NOT_SET;
        break;
    case 711:
        statusCode = Apiomat.Status.OPERATION_NOT_POSSIBLE;
        break;
    case 712:
        statusCode = Apiomat.Status.APPLICATION_NAME_MISMATCH;
        break;
    case 713:
        statusCode = Apiomat.Status.WRONG_AUTH_HEADER;
        break;
    case 714:
        statusCode = Apiomat.Status.MODEL_STILL_USED;
        break;
    case 715:
        statusCode = Apiomat.Status.COLLECTION_NOT_ALLOWED;
        break;
    case 716:
        statusCode = Apiomat.Status.FB_NO_VALID_MEMBER;
        break;
    case 717:
        statusCode = Apiomat.Status.FB_NO_OAUTH_TOKEN;
        break;
    case 718:
        statusCode = Apiomat.Status.FB_POST_ID_MISSING;
        break;
    case 719:
        statusCode = Apiomat.Status.RESTORE_NO_DUMPS_FOUND;
        break;
    case 720:
        statusCode = Apiomat.Status.TW_NO_VALID_MEMBER;
        break;
    case 721:
        statusCode = Apiomat.Status.TW_NO_OAUTH_TOKEN;
        break;
    case 722:
        statusCode = Apiomat.Status.IMEXPORT_WRONG_ENCODING;
        break;
    case 723:
        statusCode = Apiomat.Status.IMEXPORT_WRONG_CONTENT;
        break;
    case 724:
        statusCode = Apiomat.Status.PUSH_PAYLOAD_EXCEEDED;
        break;
    case 725:
        statusCode = Apiomat.Status.PUSH_ERROR;
        break;
    case 726:
        statusCode = Apiomat.Status.BAD_EMAIL;
        break;
    case 727:
        statusCode = Apiomat.Status.BAD_PROMOTIONCODE_DISCOUNT;
        break;
    case 728:
        statusCode = Apiomat.Status.BAD_PROMOTIONCODE_CODE;
        break;
    case 729:
        statusCode = Apiomat.Status.PLAN_PRICE;
        break;
    case 730:
        statusCode = Apiomat.Status.PLAN_NO_SYSTEMS;
        break;
    case 731:
        statusCode = Apiomat.Status.SCRIPT_TIME_ERROR;
        break;
    case 732:
        statusCode = Apiomat.Status.INVALID_NAME;
        break;
    case 733:
        statusCode = Apiomat.Status.ATTRIBUTE_IN_SUPERCLASS;
        break;
    case 734:
        statusCode = Apiomat.Status.JSON_TYPE_ERROR;
        break;
    case 735:
        statusCode = Apiomat.Status.TBLR_NO_VALID_MEMBER;
        break;
    case 736:
        statusCode = Apiomat.Status.TBLR_NO_OAUTH_TOKEN;
        break;
    case 737:
        statusCode = Apiomat.Status.TBLR_POST_ID_MISSING;
        break;
    case 738:
        statusCode = Apiomat.Status.LOCATION_INVALID;
        break;
    case 739:
        statusCode = Apiomat.Status.SCRIPT_EXCEPTION;
        break;
    case 740:
        statusCode = Apiomat.Status.BAD_ACCOUNTNAME;
        break;
    case 746:
        statusCode = Apiomat.Status.BAD_IMAGE_ALPHA;
        break;
    case 747:
        statusCode = Apiomat.Status.BAD_IMAGE_BGCOLOR;
        break;
    case 748:
        statusCode = Apiomat.Status.BAD_IMAGE_FORMAT;
        break;
    case 708:
        statusCode = Apiomat.Status.QUERY_ERROR;
        break;
    case 741:
        statusCode = Apiomat.Status.BAD_TYPE_IN_QUERY;
        break;
    case 742:
        statusCode = Apiomat.Status.UNKNOWN_CLASS_IN_QUERY;
        break;
    case 743:
        statusCode = Apiomat.Status.WRONG_NUM_FORMAT_IN_QUERY;
        break;
    case 744:
        statusCode = Apiomat.Status.QUERY_PARSE_ERROR;
        break;
    case 745:
        statusCode = Apiomat.Status.UNKNOWN_ATTRIBUTE_IN_QUERY;
        break;
    case 749:
        statusCode = Apiomat.Status.FOREIGNID_NOT_SET;
        break;
    case 750:
        statusCode = Apiomat.Status.CLASSES_MISSING;
        break;
    case 751:
        statusCode = Apiomat.Status.INVALID_ATTRIBUTE_TYPE;
        break;
    case 752:
        statusCode = Apiomat.Status.TOKEN_VALUE_EXISTS;
        break;
    case 753:
        statusCode = Apiomat.Status.JSON_FORMAT_ERROR;
        break;
    case 754:
        statusCode = Apiomat.Status.MODULE_DEPLOYMENT;
        break;
    case 755:
        statusCode = Apiomat.Status.BAD_USERNAME;
        break;
    case 756:
        statusCode = Apiomat.Status.CSV_ZIP_FORMAT;
        break;
    case 757:
        statusCode = Apiomat.Status.VERIFICATION;
        break;
    case 758:
        statusCode = Apiomat.Status.MODULE_STILL_USED;
        break;
    case 759:
        statusCode = Apiomat.Status.CLASS_NOT_IN_MODULE;
        break;
    case 760:
        statusCode = Apiomat.Status.ORDER_TRANSACTION_TIMESTAMP_OUTDATED;
        break;
    case 761:
        statusCode = Apiomat.Status.ORDER_TRANSACTION_ID_INVALID;
        break;
    case 762:
        statusCode = Apiomat.Status.ORDER_TRANSACTION_SECRET_INVALID;
        break;
    case 763:
        statusCode = Apiomat.Status.MANDATORY_FIELD;
        break;
    case 764:
        statusCode = Apiomat.Status.INVALID_PASSWD_LENGTH;
        break;
    case 765:
        statusCode = Apiomat.Status.BAD_PROMOTIONCODE_VALID;
        break;
    case 766:
        statusCode = Apiomat.Status.BAD_CLASS_NAME_SAME_AS_MODULE;
        break;
    case 767:
        statusCode = Apiomat.Status.NO_ORG_MEMBER;
        break;
    case 768:
        statusCode = Apiomat.Status.MODULE_CLASS_NOT_CONTAINED;
        break;
    case 769:
        statusCode = Apiomat.Status.BAD_GROUP_NAME;
        break;
    case 770:
        statusCode = Apiomat.Status.INVISIBLE_CLASS;
        break;
    case 771:
        statusCode = Apiomat.Status.MODULE_TYPE_NOT_ALLOWED;
        break;
    case 772:
        statusCode = Apiomat.Status.MAX_FILE_SIZE;
        break;
    case 773:
        statusCode = Apiomat.Status.BAD_RESOURCE;
        break;
    case 774:
        statusCode = Apiomat.Status.BEFORE_POST_DATA_HOOK;
        break;
    case 775:
        statusCode = Apiomat.Status.SAVE_DATA;
        break;
    case 776:
        statusCode = Apiomat.Status.UPDATE_OBJECT_WITH_DATA;
        break;
    case 777:
        statusCode = Apiomat.Status.AFTER_POST_DATA_HOOK;
        break;
    case 778:
        statusCode = Apiomat.Status.ABORT_SAVE_DATA;
        break;
    case 779:
        statusCode = Apiomat.Status.ATTRIBUTE_NOT_FOUND;
        break;
    case 780:
        statusCode = Apiomat.Status.SYSTEM_NOT_FOUND;
        break;
    case 781:
        statusCode = Apiomat.Status.BEFORE_DELETE_DATA_HOOK;
        break;
    case 782:
        statusCode = Apiomat.Status.ABORT_DELETE_DATA;
        break;
    case 783:
        statusCode = Apiomat.Status.UPDATE_OBJECT_WITH_DELETED_DATA;
        break;
    case 784:
        statusCode = Apiomat.Status.TRANSIENT_DATA_DELETE_UNSUCCESSFUL;
        break;
    case 785:
        statusCode = Apiomat.Status.DELETE_DATA_FAILED;
        break;
    case 786:
        statusCode = Apiomat.Status.PASSWORD_POLICY_RULE_VIOLATED;
        break;
    case 787:
        statusCode = Apiomat.Status.PASSWORD_LOCKED;
        break;
    case 788:
        statusCode = Apiomat.Status.NO_OBJECT_ID;
        break;
    case 789:
        statusCode = Apiomat.Status.ACCOUNT_TEMPORARY_BLOCKED;
        break;
    case 801:
        statusCode = Apiomat.Status.APPLICATION_NOT_FOUND;
        break;
    case 802:
        statusCode = Apiomat.Status.CUSTOMER_NOT_FOUND;
        break;
    case 803:
        statusCode = Apiomat.Status.ID_NOT_FOUND;
        break;
    case 804:
        statusCode = Apiomat.Status.MODEL_NOT_FOUND;
        break;
    case 805:
        statusCode = Apiomat.Status.MODULE_NOT_FOUND;
        break;
    case 807:
        statusCode = Apiomat.Status.PLAN_NOT_FOUND;
        break;
    case 808:
        statusCode = Apiomat.Status.PROMOCODE_NOT_FOUND;
        break;
    case 809:
        statusCode = Apiomat.Status.DEMOAPP_NOT_FOUND;
        break;
    case 810:
        statusCode = Apiomat.Status.ORGANIZATION_NOT_FOUND;
        break;
    case 811:
        statusCode = Apiomat.Status.GROUP_NOT_FOUND;
        break;
    case 812:
        statusCode = Apiomat.Status.ACCOUNT_NOT_FOUND;
        break;
    case 813:
        statusCode = Apiomat.Status.DEFAULT_MODULE_NOT_FOUND;
        break;
    case 820:
        statusCode = Apiomat.Status.MODULE_USE_FORBIDDEN;
        break;
    case 821:
        statusCode = Apiomat.Status.PUSH_ERROR_APIKEY;
        break;
    case 822:
        statusCode = Apiomat.Status.PUSH_ERROR_CERTIFICATE;
        break;
    case 823:
        statusCode = Apiomat.Status.SAME_NAME_USED_IN_SUPERCLASS;
        break;
    case 824:
        statusCode = Apiomat.Status.PAYMENT_MAX_MODULE;
        break;
    case 825:
        statusCode = Apiomat.Status.PAYMENT_SYSTEM;
        break;
    case 826:
        statusCode = Apiomat.Status.PAYMENT_DOWNGRADE;
        break;
    case 827:
        statusCode = Apiomat.Status.SAVE_REFERENECE_BEFORE_REFERENCING;
        break;
    case 828:
        statusCode = Apiomat.Status.PAYMENT_DB_SIZE;
        break;
    case 829:
        statusCode = Apiomat.Status.ENDPOINT_PATH_NOT_ALLOWED;
        break;
    case 1820:
        statusCode = Apiomat.Status.PAYMENT_NO_CRON;
        break;
    case 1821:
        statusCode = Apiomat.Status.PAYMENT_MODULE_NOT_FREE;
        break;
    case 1822:
        statusCode = Apiomat.Status.NATIVEMODULE_DEACTIVATED;
        break;
    case 1823:
        statusCode = Apiomat.Status.LICENSE_INVALID;
        break;
    case 1824:
        statusCode = Apiomat.Status.PAYMENT_NO_CUSTOMERROLES;
        break;
    case 1825:
        statusCode = Apiomat.Status.WHITELABEL;
        break;
    case 1826:
        statusCode = Apiomat.Status.WHITELABEL_NOT;
        break;
    case 1827:
        statusCode = Apiomat.Status.MODULE_CONFIG_NO_DOT;
        break;
    case 1828:
        statusCode = Apiomat.Status.PLAN_FALLBACK;
        break;
    case 1829:
        statusCode = Apiomat.Status.PLAN_INACTIVE;
        break;
    case 1830:
        statusCode = Apiomat.Status.ENTERPRISE;
        break;
    case 1831:
        statusCode = Apiomat.Status.ACCOUNT_UNACCEPTED_CONTRACTS;
        break;
    case 1832:
        statusCode = Apiomat.Status.DELETE_MANDATORY_DEFAULT_MODULE;
        break;
    case 830:
        statusCode = Apiomat.Status.ID_EXISTS;
        break;
    case 831:
        statusCode = Apiomat.Status.NAME_RESERVED;
        break;
    case 832:
        statusCode = Apiomat.Status.CIRCULAR_DEPENDENCY;
        break;
    case 833:
        statusCode = Apiomat.Status.NAME_EXISTS;
        break;
    case 834:
        statusCode = Apiomat.Status.EMAIL_EXISTS;
        break;
    case 835:
        statusCode = Apiomat.Status.CUSTOMER_IN_ORG;
        break;
    case 836:
        statusCode = Apiomat.Status.PUSH_ERROR_PROXY;
        break;
    case 840:
        statusCode = Apiomat.Status.UNAUTHORIZED;
        break;
    case 841:
        statusCode = Apiomat.Status.WRONG_APIKEY;
        break;
    case 842:
        statusCode = Apiomat.Status.EVALANCHE_UNAUTH;
        break;
    case 843:
        statusCode = Apiomat.Status.PW_CHANGE_W_TOKEN;
        break;
    case 844:
        statusCode = Apiomat.Status.TOKEN_AUTH_ERROR;
        break;
    case 845:
        statusCode = Apiomat.Status.TOKEN_READ_ONLY;
        break;
    case 846:
        statusCode = Apiomat.Status.AUTHENTICATION_REJECTED;
        break;
    case 901:
        statusCode = Apiomat.Status.CRUD_ERROR;
        break;
    case 902:
        statusCode = Apiomat.Status.IMEXPORT_ERROR;
        break;
    case 903:
        statusCode = Apiomat.Status.COMPILE_ERROR;
        break;
    case 904:
        statusCode = Apiomat.Status.REFERENCE_ERROR;
        break;
    case 905:
        statusCode = Apiomat.Status.PUSH_PAYLOAD_ERROR;
        break;
    case 906:
        statusCode = Apiomat.Status.PUSH_SEND_ERROR;
        break;
    case 907:
        statusCode = Apiomat.Status.PUSH_INIT_FAILED;
        break;
    case 908:
        statusCode = Apiomat.Status.FACEBOOK_ERROR;
        break;
    case 910:
        statusCode = Apiomat.Status.FACEBOOK_OAUTH_ERROR;
        break;
    case 917:
        statusCode = Apiomat.Status.FACEBOOK_OAUTH_ERROR2;
        break;
    case 911:
        statusCode = Apiomat.Status.MEMBER_NOT_FOUND;
        break;
    case 912:
        statusCode = Apiomat.Status.WORDPRESS_FETCH_DATA_ERROR;
        break;
    case 913:
        statusCode = Apiomat.Status.TUMBLR_OAUTH_ERROR;
        break;
    case 914:
        statusCode = Apiomat.Status.TUMBLR_ERROR;
        break;
    case 915:
        statusCode = Apiomat.Status.EXECUTE_METHOD_ERROR_PRIMITIVE;
        break;
    case 916:
        statusCode = Apiomat.Status.EXECUTE_METHOD_ERROR;
        break;
    case 918:
        statusCode = Apiomat.Status.OAUTH_TOKEN_REQUEST_ERROR;
        break;
    case 919:
        statusCode = Apiomat.Status.FINDING_RESOURCE_ERROR;
        break;
    case 920:
        statusCode = Apiomat.Status.NATIVEMODULE_DEPLOY;
        break;
    case 921:
        statusCode = Apiomat.Status.TOKEN_SEARCH_ERROR;
        break;
    case 922:
        statusCode = Apiomat.Status.MODULE_CONFIG_MISSING;
        break;
    case 923:
        statusCode = Apiomat.Status.NATIVEMODULE_INIT;
        break;
    case 924:
        statusCode = Apiomat.Status.NATIVEMODULE_PULL;
        break;
    case 925:
        statusCode = Apiomat.Status.NATIVEMODULE_PUSH;
        break;
    case 926:
        statusCode = Apiomat.Status.NO_DOGET_RETURN;
        break;
    case 927:
        statusCode = Apiomat.Status.CUSTOMER_TWO_ORGS;
        break;
    case 928:
        statusCode = Apiomat.Status.NATIVEMODULE_HOOKS_NOT_FOUND;
        break;
    case 929:
        statusCode = Apiomat.Status.ANALYTICS_ERROR;
        break;
    case 930:
        statusCode = Apiomat.Status.EMAIL_ERROR;
        break;
    case 931:
        statusCode = Apiomat.Status.MAX_HOOK_CALL_DEPTH_EXCEEDED;
        break;
    case 601:
        statusCode = Apiomat.Status.HREF_NOT_FOUND;
        break;
    case 602:
        statusCode = Apiomat.Status.WRONG_URI_SYNTAX;
        break;
    case 603:
        statusCode = Apiomat.Status.WRONG_CLIENT_PROTOCOL;
        break;
    case 604:
        statusCode = Apiomat.Status.IO_EXCEPTION;
        break;
    case 605:
        statusCode = Apiomat.Status.UNSUPPORTED_ENCODING;
        break;
    case 606:
        statusCode = Apiomat.Status.INSTANTIATE_EXCEPTION;
        break;
    case 607:
        statusCode = Apiomat.Status.IN_PERSISTING_PROCESS;
        break;
    case 608:
        statusCode = Apiomat.Status.VERIFY_SOCIALMEDIA;
        break;
    case 609:
        statusCode = Apiomat.Status.TOO_MANY_LOCALIDS;
        break;
    case 610:
        statusCode = Apiomat.Status.MAX_CACHE_SIZE_REACHED;
        break;
    case 611:
        statusCode = Apiomat.Status.CANT_WRITE_IN_CACHE;
        break;
    case 612:
        statusCode = Apiomat.Status.BAD_DATASTORE_CONFIG;
        break;
    case 613:
        statusCode = Apiomat.Status.NO_TOKEN_RECEIVED;
        break;
    case 614:
        statusCode = Apiomat.Status.NO_NETWORK;
        break;
    case 615:
        statusCode = Apiomat.Status.ID_NOT_FOUND_OFFLINE;
        break;
    case 616:
        statusCode = Apiomat.Status.ATTACHED_HREF_MISSING;
        break;
    case 617:
        statusCode = Apiomat.Status.REQUEST_TIMEOUT;
        break;
    case 618:
        statusCode = Apiomat.Status.ASYNC_WAIT_ERROR;
        break;
    case 619:
        statusCode = Apiomat.Status.IN_DELETING_PROCESS;
        break;
    case 620:
        statusCode = Apiomat.Status.SSO_REDIRECT;
        break;
    case 621:
        statusCode = Apiomat.Status.MANUAL_CONCURRENT_WRITE_FAILED;
        break;
    case 622:
        statusCode = Apiomat.Status.SAVE_FAILED;
        break;
    case 623:
        statusCode = Apiomat.Status.SSL_ERROR;
        break;
    case 624:
        statusCode = Apiomat.Status.MAX_FILE_SIZE_OFFLINE_EXCEEDED;
        break;
    case 625:
        statusCode = Apiomat.Status.SQL_CONSTRAINT;
        break;
    case 950:
        statusCode = Apiomat.Status.MALICIOUS_MEMBER;
        break;
    };
    return statusCode;
}
};
})(typeof exports === 'undefined' ? Apiomat
        : exports);