var Apiomat;
"undefined" !== typeof goog && (Apiomat = {AOMHelper: {}});
"undefined" === typeof exports && (Apiomat = Apiomat || {});
(function (a) {
  a.AOMHelper = function () {
    return {
      isTitaniumApp: function () {
        return "object" === typeof Ti || "object" === typeof Titanium
      }, isSafari: function () {
        return "object" === typeof navigator && "undefined" != typeof navigator.userAgent && 0 >= navigator.userAgent.indexOf("Chrom") && -1 < navigator.userAgent.indexOf("Safari") || !1
      }, isNodeJS: function () {
        return !1 === this.isTitaniumApp() && "undefined" !== typeof module && module.exports
      }, sendEvent: function (a, c) {
        if (this.isTitaniumApp()) Ti.App.fireEvent(a, c || {}); else {
          if ("undefined" ===
            typeof CustomEvent || 9 <= this.detectIE()) {
            var b = document.createEvent("Event");
            b.initEvent(a, !0, !0);
            b.customData = c || {}
          } else b = new CustomEvent(a, c || {});
          window.dispatchEvent(b)
        }
      }, isInteger: function (a) {
        return 0 === a % 1
      }, addEventListener: function (b, c) {
        a.AOMHelper.isTitaniumApp() ? Ti.App.addEventListener(b, c) : window.addEventListener(b, c)
      }, detectIE: function () {
        if (0 == this.isTitaniumApp() && "undefined" != typeof navigator && "undefined" != typeof navigator.userAgent && null != navigator.userAgent) {
          var a = navigator.userAgent,
            c = a.indexOf("MSIE ");
          if (0 < c) return parseInt(a.substring(c + 5, a.indexOf(".", c)), 10);
          if (0 < a.indexOf("Trident/")) return c = a.indexOf("rv:"), parseInt(a.substring(c + 3, a.indexOf(".", c)), 10);
          c = a.indexOf("Edge/");
          if (0 < c) return parseInt(a.substring(c + 5, a.indexOf(".", c)), 10)
        }
        return !1
      }
    }
  }()
})("undefined" === typeof exports ? Apiomat : exports);
Array.prototype.filter || (Array.prototype.filter = function (a, b) {
  if (!this) throw new TypeError;
  var c = Object(this);
  if ("function" !== typeof a) throw new TypeError;
  var e = [], d;
  for (d in c) c.hasOwnProperty(d) && a.call(b, c[d], d, c) && e.push(c[d]);
  return e
});
String.prototype.endsWith = function (a) {
  return -1 !== this.indexOf(a, this.length - a.length)
};
Object.keys || (Object.keys = function () {
  var a = Object.prototype.hasOwnProperty, b = !{toString: null}.propertyIsEnumerable("toString"),
    c = "toString toLocaleString valueOf hasOwnProperty isPrototypeOf propertyIsEnumerable constructor".split(" "),
    e = c.length;
  return function (d) {
    if ("object" !== typeof d && ("function" !== typeof d || null === d)) throw new TypeError("Object.keys called on non-object");
    var f = [], l;
    for (l in d) a.call(d, l) && f.push(l);
    if (b) for (l = 0; l < e; l++) a.call(d, c[l]) && f.push(c[l]);
    return f
  }
}());
"undefined" !== typeof goog && (Apiomat.Status = {});
"undefined" === typeof exports && (Apiomat = Apiomat || {});
(function (a) {
  a.Status = {
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
    getReasonPhrase: function (b) {
      switch (b) {
        case a.Status.SCRIPT_ERROR:
          b = "Script error!";
          break;
        case a.Status.APPLICATION_NOT_ACTIVE:
          b =
            "Application is deactivated!";
          break;
        case a.Status.BAD_IMAGE:
          b = "Image format seems to be corrupted!";
          break;
        case a.Status.BAD_ID:
          b = "ID format is wrong!";
          break;
        case a.Status.CONCURRENT_ACCESS:
          b = "Concurrent access forbidden!";
          break;
        case a.Status.APPLICATION_SANDBOX:
          b = "Application is in sandbox mode!";
          break;
        case a.Status.MODEL_NOT_DEPLOYED:
          b = "Class is not deployed!";
          break;
        case a.Status.WRONG_REF_TYPE:
          b = "Wrong reference type!";
          break;
        case a.Status.ATTRIBUTE_NOT_SET:
          b = "Attribute not set!";
          break;
        case a.Status.OPERATION_NOT_POSSIBLE:
          b =
            "CRUD operation not possible on this class!";
          break;
        case a.Status.APPLICATION_NAME_MISMATCH:
          b = "Application name does not match the one defined in the class!";
          break;
        case a.Status.WRONG_AUTH_HEADER:
          b = "Wrong authentication header format, must be 'username:password'";
          break;
        case a.Status.MODEL_STILL_USED:
          b = "Class is still used by other attributes, scripts or subclasses!'";
          break;
        case a.Status.COLLECTION_NOT_ALLOWED:
          b = "Collection is not supported for this class type!";
          break;
        case a.Status.FB_NO_VALID_MEMBER:
          b =
            "Request send from no valid member";
          break;
        case a.Status.FB_NO_OAUTH_TOKEN:
          b = "Requesting member has no oAuth token, please authenticate! See http://doc.apiomat.com";
          break;
        case a.Status.FB_POST_ID_MISSING:
          b = "Facebook post id has to be set!";
          break;
        case a.Status.RESTORE_NO_DUMPS_FOUND:
          b = "No dumps for app on this date exist!";
          break;
        case a.Status.TW_NO_VALID_MEMBER:
          b = "Request send from no valid member";
          break;
        case a.Status.TW_NO_OAUTH_TOKEN:
          b = "Requesting member has no oAuth token, please authenticate! See http://doc.apiomat.com";
          break;
        case a.Status.IMEXPORT_WRONG_ENCODING:
          b = "Wrong Encoding";
          break;
        case a.Status.IMEXPORT_WRONG_CONTENT:
          b = "Wrong Filecontent";
          break;
        case a.Status.PUSH_PAYLOAD_EXCEEDED:
          b = "Payload size exceeded!";
          break;
        case a.Status.PUSH_ERROR:
          b = "Error in push request!";
          break;
        case a.Status.BAD_EMAIL:
          b = "eMail format is wrong!";
          break;
        case a.Status.BAD_PROMOTIONCODE_DISCOUNT:
          b = "Discount value is wrong!";
          break;
        case a.Status.BAD_PROMOTIONCODE_CODE:
          b = "Code is invalid";
          break;
        case a.Status.PLAN_PRICE:
          b = "Plan price must be \x3e\x3d 0!";
          break;
        case a.Status.PLAN_NO_SYSTEMS:
          b = "Plan must have at least one system!";
          break;
        case a.Status.SCRIPT_TIME_ERROR:
          b = "Script was interrupted, execution took too long.";
          break;
        case a.Status.INVALID_NAME:
          b = "Name must start with a letter, followed only by letters or numbers.";
          break;
        case a.Status.ATTRIBUTE_IN_SUPERCLASS:
          b = "Attribute is already defined in superclass.";
          break;
        case a.Status.JSON_TYPE_ERROR:
          b = "The @type is not correctly defined in your JSON (must be: MODULENAME$CLASSNAME";
          break;
        case a.Status.TBLR_NO_VALID_MEMBER:
          b =
            "Request send from no valid member";
          break;
        case a.Status.TBLR_NO_OAUTH_TOKEN:
          b = "Requesting member has no oAuth token, please authenticate! See http://doc.apiomat.com";
          break;
        case a.Status.TBLR_POST_ID_MISSING:
          b = "Tumblr post id has to be set!";
          break;
        case a.Status.LOCATION_INVALID:
          b = "Location data is invalid (latitude or longitude missing)!";
          break;
        case a.Status.SCRIPT_EXCEPTION:
          b = "Exception was raised in external code!";
          break;
        case a.Status.BAD_ACCOUNTNAME:
          b = "Account name must contain only characters A-Z,a-z or 0-9!";
          break;
        case a.Status.BAD_IMAGE_ALPHA:
          b = "alpha is wrong (must be a double value between 0.0 and 1.0)";
          break;
        case a.Status.BAD_IMAGE_BGCOLOR:
          b = "bgcolor is wrong (must be an RGB hex value without #, like 'FF0000' for red)";
          break;
        case a.Status.BAD_IMAGE_FORMAT:
          b = "format is wrong (can only be png, gif, bmp or jpg/jpeg)";
          break;
        case a.Status.QUERY_ERROR:
          b = "Query could not be parsed!";
          break;
        case a.Status.BAD_TYPE_IN_QUERY:
          b = "The query contains a value with the wrong type";
          break;
        case a.Status.UNKNOWN_CLASS_IN_QUERY:
          b =
            "The definition of the class couldn't be found";
          break;
        case a.Status.WRONG_NUM_FORMAT_IN_QUERY:
          b = "A number was supplied in the wrong format";
          break;
        case a.Status.QUERY_PARSE_ERROR:
          b = "The query couldn't be parsed";
          break;
        case a.Status.UNKNOWN_ATTRIBUTE_IN_QUERY:
          b = "An attribute that was used in the query doesn't exist in the class";
          break;
        case a.Status.FOREIGNID_NOT_SET:
          b = "Foreign ID must be set to a unique value for this class!";
          break;
        case a.Status.CLASSES_MISSING:
          b = "Not all classes for this module are contained in the jar! This will lead to compile errors.";
          break;
        case a.Status.INVALID_ATTRIBUTE_TYPE:
          b = "Attributes type is invalid";
          break;
        case a.Status.TOKEN_VALUE_EXISTS:
          b = "The token value already exists";
          break;
        case a.Status.JSON_FORMAT_ERROR:
          b = "JSON could not be parsed";
          break;
        case a.Status.MODULE_DEPLOYMENT:
          b = "Module is currently deploying. Please try again later.";
          break;
        case a.Status.BAD_USERNAME:
          b = "User name must not contain a ':'.";
          break;
        case a.Status.CSV_ZIP_FORMAT:
          b = "CSV import only accepts a single .zip file!";
          break;
        case a.Status.VERIFICATION:
          b =
            "Verification error";
          break;
        case a.Status.MODULE_STILL_USED:
          b = "Module is still used by other modules of this app!'";
          break;
        case a.Status.CLASS_NOT_IN_MODULE:
          b = "Model name not found for this module!";
          break;
        case a.Status.ORDER_TRANSACTION_TIMESTAMP_OUTDATED:
          b = "Transaction outdated!";
          break;
        case a.Status.ORDER_TRANSACTION_ID_INVALID:
          b = "Transaction ID invalid!";
          break;
        case a.Status.ORDER_TRANSACTION_SECRET_INVALID:
          b = "Transaction secret invalid!";
          break;
        case a.Status.MANDATORY_FIELD:
          b = "Mandatory fields must not be empty or null!";
          break;
        case a.Status.INVALID_PASSWD_LENGTH:
          b = "Password must have a length of at least 6 characters!";
          break;
        case a.Status.BAD_PROMOTIONCODE_VALID:
          b = "Valid from/to of Code is null";
          break;
        case a.Status.BAD_CLASS_NAME_SAME_AS_MODULE:
          b = "Class name must not be the same as the module name!";
          break;
        case a.Status.NO_ORG_MEMBER:
          b = "Customer is not a member of the organization";
          break;
        case a.Status.MODULE_CLASS_NOT_CONTAINED:
          b = "Module main class is not contained in the uploaded file! Probably wrong module uploaded?";
          break;
        case a.Status.BAD_GROUP_NAME:
          b = "Account name must contain only characters A-Z,a-z or 0-9!";
          break;
        case a.Status.INVISIBLE_CLASS:
          b = "Class is not visible to REST!";
          break;
        case a.Status.MODULE_TYPE_NOT_ALLOWED:
          b = "The action is not allowed for this module type";
          break;
        case a.Status.MAX_FILE_SIZE:
          b = "File is larger than maximum file size!";
          break;
        case a.Status.BAD_RESOURCE:
          b = "Resource seems to be corrupted or is unexpectedly null or empty.";
          break;
        case a.Status.BEFORE_POST_DATA_HOOK:
          b = "An error occured during calling the beforePostData hook method";
          break;
        case a.Status.SAVE_DATA:
          b = "An error occured during saving the data (image/file)";
          break;
        case a.Status.UPDATE_OBJECT_WITH_DATA:
          b = "The object couldn't be updated with the URL of the saved data (image/file)";
          break;
        case a.Status.AFTER_POST_DATA_HOOK:
          b = "An error occured during calling the afterPostData hook method";
          break;
        case a.Status.ABORT_SAVE_DATA:
          b = "Saving the data was aborted by beforePostData hook method";
          break;
        case a.Status.ATTRIBUTE_NOT_FOUND:
          b = "The attribute doesn't exist";
          break;
        case a.Status.SYSTEM_NOT_FOUND:
          b =
            "The system doesn't exist";
          break;
        case a.Status.BEFORE_DELETE_DATA_HOOK:
          b = "An error occured during calling the beforeDeleteData hook method";
          break;
        case a.Status.ABORT_DELETE_DATA:
          b = "deleting the data was aborted by beforedeleteData hook method";
          break;
        case a.Status.UPDATE_OBJECT_WITH_DELETED_DATA:
          b = "The object couldn't be updated with the deleted URL of the data (image/file)";
          break;
        case a.Status.TRANSIENT_DATA_DELETE_UNSUCCESSFUL:
          b = "The deletion of the data or removal of the data (image/file) reference from the object was unsuccessful in the doDeleteData() Native Module hook method";
          break;
        case a.Status.DELETE_DATA_FAILED:
          b = "Deleting the data (image/file) from the database failed";
          break;
        case a.Status.PASSWORD_POLICY_RULE_VIOLATED:
          b = "The password doesn't fulfill the password policies.";
          break;
        case a.Status.PASSWORD_LOCKED:
          b = "Your password is locked, so you are currently not allowed to access this resource.";
          break;
        case a.Status.NO_OBJECT_ID:
          b = "The object doesn't have an ID (non-transient) or foreign ID (transient) yet";
          break;
        case a.Status.ACCOUNT_TEMPORARY_BLOCKED:
          b = "Your account is currently blocked due to failing login attempts.";
          break;
        case a.Status.APPLICATION_NOT_FOUND:
          b = "Application was not found!";
          break;
        case a.Status.CUSTOMER_NOT_FOUND:
          b = "Customer was not found!";
          break;
        case a.Status.ID_NOT_FOUND:
          b = "ID was not found!";
          break;
        case a.Status.MODEL_NOT_FOUND:
          b = "Class was not found! Maybe you should (re-)deploy first?";
          break;
        case a.Status.MODULE_NOT_FOUND:
          b = "Module was not found!";
          break;
        case a.Status.PLAN_NOT_FOUND:
          b = "Plan was not found!";
          break;
        case a.Status.PROMOCODE_NOT_FOUND:
          b = "Promotion code not valid!";
          break;
        case a.Status.DEMOAPP_NOT_FOUND:
          b =
            "This language has no demo content";
          break;
        case a.Status.ORGANIZATION_NOT_FOUND:
          b = "Organization was not found!";
          break;
        case a.Status.GROUP_NOT_FOUND:
          b = "Group was not found!";
          break;
        case a.Status.ACCOUNT_NOT_FOUND:
          b = "Account was not found!";
          break;
        case a.Status.DEFAULT_MODULE_NOT_FOUND:
          b = "Default module was not found for the given account";
          break;
        case a.Status.MODULE_USE_FORBIDDEN:
          b = "Required module is not attached to app";
          break;
        case a.Status.PUSH_ERROR_APIKEY:
          b = "No API Key defined for Push service!";
          break;
        case a.Status.PUSH_ERROR_CERTIFICATE:
          b = "No certificate defined for Push service!";
          break;
        case a.Status.SAME_NAME_USED_IN_SUPERCLASS:
          b = "Same name is already used in a superclass.";
          break;
        case a.Status.PAYMENT_MAX_MODULE:
          b = "Maximum number of used modules exceeded for this plan.";
          break;
        case a.Status.PAYMENT_SYSTEM:
          b = "Selected system use is not allowed for this plan.";
          break;
        case a.Status.PAYMENT_DOWNGRADE:
          b = "Up/Downgrading plans is only allowed for super admins.";
          break;
        case a.Status.SAVE_REFERENECE_BEFORE_REFERENCING:
          b =
            "Object you are trying to reference is not on the server. Please save it first.";
          break;
        case a.Status.PAYMENT_DB_SIZE:
          b = "Used database size exceeds plan";
          break;
        case a.Status.ENDPOINT_PATH_NOT_ALLOWED:
          b = "Endpoint not allowed for app; please add path to your app's config.";
          break;
        case a.Status.PAYMENT_NO_CRON:
          b = "Cronjobs are not allowed for this plan.";
          break;
        case a.Status.PAYMENT_MODULE_NOT_FREE:
          b = "This module is not available for free plan.";
          break;
        case a.Status.NATIVEMODULE_DEACTIVATED:
          b = "Native Module feature is not activated for this installation.";
          break;
        case a.Status.LICENSE_INVALID:
          b = "Your license does not allow this action.";
          break;
        case a.Status.PAYMENT_NO_CUSTOMERROLES:
          b = "Customer role usage is not available for free plan.";
          break;
        case a.Status.WHITELABEL:
          b = "Only available for whitelabel installations.";
          break;
        case a.Status.WHITELABEL_NOT:
          b = "Not available for whitelabel installations.";
          break;
        case a.Status.MODULE_CONFIG_NO_DOT:
          b = "No dot allowed in module config key.";
          break;
        case a.Status.PLAN_FALLBACK:
          b = "Application cannot be activated without valid plan.";
          break;
        case a.Status.PLAN_INACTIVE:
          b = "Plan is not selectable!";
          break;
        case a.Status.ENTERPRISE:
          b = "Only available for enterprise installations.";
          break;
        case a.Status.ACCOUNT_UNACCEPTED_CONTRACTS:
          b = "Account has unaccepted Contracts";
          break;
        case a.Status.DELETE_MANDATORY_DEFAULT_MODULE:
          b = "It is not allowed to remove this default module";
          break;
        case a.Status.ID_EXISTS:
          b = "ID exists!";
          break;
        case a.Status.NAME_RESERVED:
          b = "Name is reserved!";
          break;
        case a.Status.CIRCULAR_DEPENDENCY:
          b = "You can't set circular inheritance!";
          break;
        case a.Status.NAME_EXISTS:
          b = "Name is already used!";
          break;
        case a.Status.EMAIL_EXISTS:
          b = "E-mail is already used!";
          break;
        case a.Status.CUSTOMER_IN_ORG:
          b = "Customer is already member of an organization";
          break;
        case a.Status.PUSH_ERROR_PROXY:
          b = "Proxy configuration caused an error for Push service!";
          break;
        case a.Status.UNAUTHORIZED:
          b = "Authorization failed!";
          break;
        case a.Status.WRONG_APIKEY:
          b = "API Key was not correct!";
          break;
        case a.Status.EVALANCHE_UNAUTH:
          b = "Authorization failed! Maybe username/password was not set for evelanche configuration?";
          break;
        case a.Status.PW_CHANGE_W_TOKEN:
          b = "Not authorized to change a user's password when authenticating with a token.";
          break;
        case a.Status.TOKEN_AUTH_ERROR:
          b = "The token could not be authenticated";
          break;
        case a.Status.TOKEN_READ_ONLY:
          b = "The token can only be used for read requests.";
          break;
        case a.Status.AUTHENTICATION_REJECTED:
          b = "Authentication with username/password was rejected by third-party-system.";
          break;
        case a.Status.CRUD_ERROR:
          b = "Internal error during CRUD operation";
          break;
        case a.Status.IMEXPORT_ERROR:
          b =
            "Error during im/export!";
          break;
        case a.Status.COMPILE_ERROR:
          b = "Classes could not be compiled!";
          break;
        case a.Status.REFERENCE_ERROR:
          b = "Error in class reference!";
          break;
        case a.Status.PUSH_PAYLOAD_ERROR:
          b = "Failed to create payload!";
          break;
        case a.Status.PUSH_SEND_ERROR:
          b = "Failed to send message(s)!";
          break;
        case a.Status.PUSH_INIT_FAILED:
          b = "Failed to initialize push service!";
          break;
        case a.Status.FACEBOOK_ERROR:
          b = "An error occured while communicating with facebook!";
          break;
        case a.Status.FACEBOOK_OAUTH_ERROR:
          b =
            "facebook throws oAuth error! Please show login dialog again";
          break;
        case a.Status.FACEBOOK_OAUTH_ERROR2:
          b = "Received OAuth2 error from Facebook";
          break;
        case a.Status.MEMBER_NOT_FOUND:
          b = "Can't find member with this id/username";
          break;
        case a.Status.WORDPRESS_FETCH_DATA_ERROR:
          b = "Can't fetch data for wordpress blog";
          break;
        case a.Status.TUMBLR_OAUTH_ERROR:
          b = "tumblr threw oAuth error! Please show login dialog again";
          break;
        case a.Status.TUMBLR_ERROR:
          b = "Error communicating with tumblr!";
          break;
        case a.Status.EXECUTE_METHOD_ERROR_PRIMITIVE:
          b =
            "Only primitive types are allowed";
          break;
        case a.Status.EXECUTE_METHOD_ERROR:
          b = "Execute method failed";
          break;
        case a.Status.OAUTH_TOKEN_REQUEST_ERROR:
          b = "An error occured during requesting an ApiOmat OAuth2 token";
          break;
        case a.Status.FINDING_RESOURCE_ERROR:
          b = "An error occured while trying to find the resource";
          break;
        case a.Status.NATIVEMODULE_DEPLOY:
          b = "Executing onDeploy failed";
          break;
        case a.Status.TOKEN_SEARCH_ERROR:
          b = "An error occured while searching for tokens";
          break;
        case a.Status.MODULE_CONFIG_MISSING:
          b =
            "Your module seems not to be configured properly";
          break;
        case a.Status.NATIVEMODULE_INIT:
          b = "Could not initialize git repository";
          break;
        case a.Status.NATIVEMODULE_PULL:
          b = "Could not pull git repository";
          break;
        case a.Status.NATIVEMODULE_PUSH:
          b = "Could not push git repository";
          break;
        case a.Status.NO_DOGET_RETURN:
          b = "The module's doGet didn't return a model";
          break;
        case a.Status.CUSTOMER_TWO_ORGS:
          b = "The customer was found in two organizations";
          break;
        case a.Status.NATIVEMODULE_HOOKS_NOT_FOUND:
          b = "Annotated hook class not found";
          break;
        case a.Status.ANALYTICS_ERROR:
          b = "The analytics instance couldn't process the request correctly";
          break;
        case a.Status.EMAIL_ERROR:
          b = "Error during sending email";
          break;
        case a.Status.MAX_HOOK_CALL_DEPTH_EXCEEDED:
          b = "The maximum call depth for hook methods was exceeded";
          break;
        case a.Status.HREF_NOT_FOUND:
          b = "Class has no HREF; please save it first!";
          break;
        case a.Status.WRONG_URI_SYNTAX:
          b = "URI syntax is wrong";
          break;
        case a.Status.WRONG_CLIENT_PROTOCOL:
          b = "Client protocol is wrong";
          break;
        case a.Status.IO_EXCEPTION:
          b =
            "IOException was thrown";
          break;
        case a.Status.UNSUPPORTED_ENCODING:
          b = "Encoding is not supported";
          break;
        case a.Status.INSTANTIATE_EXCEPTION:
          b = "Error on class instantiation";
          break;
        case a.Status.IN_PERSISTING_PROCESS:
          b = "Object is in persisting process. Please try again later";
          break;
        case a.Status.VERIFY_SOCIALMEDIA:
          b = "Can't verify against social media provider";
          break;
        case a.Status.TOO_MANY_LOCALIDS:
          b = "Can't create more localIDs. Please try again later";
          break;
        case a.Status.MAX_CACHE_SIZE_REACHED:
          b = "The maximum cache size is reached.";
          break;
        case a.Status.CANT_WRITE_IN_CACHE:
          b = "Can't persist data to cache.";
          break;
        case a.Status.BAD_DATASTORE_CONFIG:
          b = "For requesting a session token without a refresh token, the Datastore must be configured with a username and password";
          break;
        case a.Status.NO_TOKEN_RECEIVED:
          b = "The response didn't contain a token";
          break;
        case a.Status.NO_NETWORK:
          b = "No network connection available";
          break;
        case a.Status.ID_NOT_FOUND_OFFLINE:
          b = "ID was not found in offline storage";
          break;
        case a.Status.ATTACHED_HREF_MISSING:
          b =
            "HREF of attached image / file / reference is missing";
          break;
        case a.Status.REQUEST_TIMEOUT:
          b = "The request timed out during connecting or reading the response";
          break;
        case a.Status.ASYNC_WAIT_ERROR:
          b = "An error occured during waiting for an async task to finish";
          break;
        case a.Status.IN_DELETING_PROCESS:
          b = "Object is in deleting process. Please try again later";
          break;
        case a.Status.SSO_REDIRECT:
          b = "The request was redirected to an SSO Identity Provider";
          break;
        case a.Status.MANUAL_CONCURRENT_WRITE_FAILED:
          b =
            "Concurrent write to own concurrent data type failed";
          break;
        case a.Status.SAVE_FAILED:
          b = "Load not executed because save already failed";
          break;
        case a.Status.SSL_ERROR:
          b = "An error occurred during establishing a secure connection";
          break;
        case a.Status.MAX_FILE_SIZE_OFFLINE_EXCEEDED:
          b = "The max file size for offline saving is exceeded";
          break;
        case a.Status.SQL_CONSTRAINT:
          b = "An error occurred because of an SQL constraint (for example unique ForeignID";
          break;
        case a.Status.MALICIOUS_MEMBER:
          b = "Malicious use of member detected!";
          break;
        default:
          b = "No reason found"
      }
      return b
    },
    getStatusForCode: function (b) {
      var c = void 0;
      switch (b) {
        case 701:
          c = a.Status.SCRIPT_ERROR;
          break;
        case 702:
          c = a.Status.APPLICATION_NOT_ACTIVE;
          break;
        case 703:
          c = a.Status.BAD_IMAGE;
          break;
        case 704:
          c = a.Status.BAD_ID;
          break;
        case 705:
          c = a.Status.CONCURRENT_ACCESS;
          break;
        case 706:
          c = a.Status.APPLICATION_SANDBOX;
          break;
        case 707:
          c = a.Status.MODEL_NOT_DEPLOYED;
          break;
        case 709:
          c = a.Status.WRONG_REF_TYPE;
          break;
        case 710:
          c = a.Status.ATTRIBUTE_NOT_SET;
          break;
        case 711:
          c = a.Status.OPERATION_NOT_POSSIBLE;
          break;
        case 712:
          c = a.Status.APPLICATION_NAME_MISMATCH;
          break;
        case 713:
          c = a.Status.WRONG_AUTH_HEADER;
          break;
        case 714:
          c = a.Status.MODEL_STILL_USED;
          break;
        case 715:
          c = a.Status.COLLECTION_NOT_ALLOWED;
          break;
        case 716:
          c = a.Status.FB_NO_VALID_MEMBER;
          break;
        case 717:
          c = a.Status.FB_NO_OAUTH_TOKEN;
          break;
        case 718:
          c = a.Status.FB_POST_ID_MISSING;
          break;
        case 719:
          c = a.Status.RESTORE_NO_DUMPS_FOUND;
          break;
        case 720:
          c = a.Status.TW_NO_VALID_MEMBER;
          break;
        case 721:
          c = a.Status.TW_NO_OAUTH_TOKEN;
          break;
        case 722:
          c = a.Status.IMEXPORT_WRONG_ENCODING;
          break;
        case 723:
          c = a.Status.IMEXPORT_WRONG_CONTENT;
          break;
        case 724:
          c = a.Status.PUSH_PAYLOAD_EXCEEDED;
          break;
        case 725:
          c = a.Status.PUSH_ERROR;
          break;
        case 726:
          c = a.Status.BAD_EMAIL;
          break;
        case 727:
          c = a.Status.BAD_PROMOTIONCODE_DISCOUNT;
          break;
        case 728:
          c = a.Status.BAD_PROMOTIONCODE_CODE;
          break;
        case 729:
          c = a.Status.PLAN_PRICE;
          break;
        case 730:
          c = a.Status.PLAN_NO_SYSTEMS;
          break;
        case 731:
          c = a.Status.SCRIPT_TIME_ERROR;
          break;
        case 732:
          c = a.Status.INVALID_NAME;
          break;
        case 733:
          c = a.Status.ATTRIBUTE_IN_SUPERCLASS;
          break;
        case 734:
          c =
            a.Status.JSON_TYPE_ERROR;
          break;
        case 735:
          c = a.Status.TBLR_NO_VALID_MEMBER;
          break;
        case 736:
          c = a.Status.TBLR_NO_OAUTH_TOKEN;
          break;
        case 737:
          c = a.Status.TBLR_POST_ID_MISSING;
          break;
        case 738:
          c = a.Status.LOCATION_INVALID;
          break;
        case 739:
          c = a.Status.SCRIPT_EXCEPTION;
          break;
        case 740:
          c = a.Status.BAD_ACCOUNTNAME;
          break;
        case 746:
          c = a.Status.BAD_IMAGE_ALPHA;
          break;
        case 747:
          c = a.Status.BAD_IMAGE_BGCOLOR;
          break;
        case 748:
          c = a.Status.BAD_IMAGE_FORMAT;
          break;
        case 708:
          c = a.Status.QUERY_ERROR;
          break;
        case 741:
          c = a.Status.BAD_TYPE_IN_QUERY;
          break;
        case 742:
          c = a.Status.UNKNOWN_CLASS_IN_QUERY;
          break;
        case 743:
          c = a.Status.WRONG_NUM_FORMAT_IN_QUERY;
          break;
        case 744:
          c = a.Status.QUERY_PARSE_ERROR;
          break;
        case 745:
          c = a.Status.UNKNOWN_ATTRIBUTE_IN_QUERY;
          break;
        case 749:
          c = a.Status.FOREIGNID_NOT_SET;
          break;
        case 750:
          c = a.Status.CLASSES_MISSING;
          break;
        case 751:
          c = a.Status.INVALID_ATTRIBUTE_TYPE;
          break;
        case 752:
          c = a.Status.TOKEN_VALUE_EXISTS;
          break;
        case 753:
          c = a.Status.JSON_FORMAT_ERROR;
          break;
        case 754:
          c = a.Status.MODULE_DEPLOYMENT;
          break;
        case 755:
          c = a.Status.BAD_USERNAME;
          break;
        case 756:
          c = a.Status.CSV_ZIP_FORMAT;
          break;
        case 757:
          c = a.Status.VERIFICATION;
          break;
        case 758:
          c = a.Status.MODULE_STILL_USED;
          break;
        case 759:
          c = a.Status.CLASS_NOT_IN_MODULE;
          break;
        case 760:
          c = a.Status.ORDER_TRANSACTION_TIMESTAMP_OUTDATED;
          break;
        case 761:
          c = a.Status.ORDER_TRANSACTION_ID_INVALID;
          break;
        case 762:
          c = a.Status.ORDER_TRANSACTION_SECRET_INVALID;
          break;
        case 763:
          c = a.Status.MANDATORY_FIELD;
          break;
        case 764:
          c = a.Status.INVALID_PASSWD_LENGTH;
          break;
        case 765:
          c = a.Status.BAD_PROMOTIONCODE_VALID;
          break;
        case 766:
          c =
            a.Status.BAD_CLASS_NAME_SAME_AS_MODULE;
          break;
        case 767:
          c = a.Status.NO_ORG_MEMBER;
          break;
        case 768:
          c = a.Status.MODULE_CLASS_NOT_CONTAINED;
          break;
        case 769:
          c = a.Status.BAD_GROUP_NAME;
          break;
        case 770:
          c = a.Status.INVISIBLE_CLASS;
          break;
        case 771:
          c = a.Status.MODULE_TYPE_NOT_ALLOWED;
          break;
        case 772:
          c = a.Status.MAX_FILE_SIZE;
          break;
        case 773:
          c = a.Status.BAD_RESOURCE;
          break;
        case 774:
          c = a.Status.BEFORE_POST_DATA_HOOK;
          break;
        case 775:
          c = a.Status.SAVE_DATA;
          break;
        case 776:
          c = a.Status.UPDATE_OBJECT_WITH_DATA;
          break;
        case 777:
          c = a.Status.AFTER_POST_DATA_HOOK;
          break;
        case 778:
          c = a.Status.ABORT_SAVE_DATA;
          break;
        case 779:
          c = a.Status.ATTRIBUTE_NOT_FOUND;
          break;
        case 780:
          c = a.Status.SYSTEM_NOT_FOUND;
          break;
        case 781:
          c = a.Status.BEFORE_DELETE_DATA_HOOK;
          break;
        case 782:
          c = a.Status.ABORT_DELETE_DATA;
          break;
        case 783:
          c = a.Status.UPDATE_OBJECT_WITH_DELETED_DATA;
          break;
        case 784:
          c = a.Status.TRANSIENT_DATA_DELETE_UNSUCCESSFUL;
          break;
        case 785:
          c = a.Status.DELETE_DATA_FAILED;
          break;
        case 786:
          c = a.Status.PASSWORD_POLICY_RULE_VIOLATED;
          break;
        case 787:
          c = a.Status.PASSWORD_LOCKED;
          break;
        case 788:
          c =
            a.Status.NO_OBJECT_ID;
          break;
        case 789:
          c = a.Status.ACCOUNT_TEMPORARY_BLOCKED;
          break;
        case 801:
          c = a.Status.APPLICATION_NOT_FOUND;
          break;
        case 802:
          c = a.Status.CUSTOMER_NOT_FOUND;
          break;
        case 803:
          c = a.Status.ID_NOT_FOUND;
          break;
        case 804:
          c = a.Status.MODEL_NOT_FOUND;
          break;
        case 805:
          c = a.Status.MODULE_NOT_FOUND;
          break;
        case 807:
          c = a.Status.PLAN_NOT_FOUND;
          break;
        case 808:
          c = a.Status.PROMOCODE_NOT_FOUND;
          break;
        case 809:
          c = a.Status.DEMOAPP_NOT_FOUND;
          break;
        case 810:
          c = a.Status.ORGANIZATION_NOT_FOUND;
          break;
        case 811:
          c = a.Status.GROUP_NOT_FOUND;
          break;
        case 812:
          c = a.Status.ACCOUNT_NOT_FOUND;
          break;
        case 813:
          c = a.Status.DEFAULT_MODULE_NOT_FOUND;
          break;
        case 820:
          c = a.Status.MODULE_USE_FORBIDDEN;
          break;
        case 821:
          c = a.Status.PUSH_ERROR_APIKEY;
          break;
        case 822:
          c = a.Status.PUSH_ERROR_CERTIFICATE;
          break;
        case 823:
          c = a.Status.SAME_NAME_USED_IN_SUPERCLASS;
          break;
        case 824:
          c = a.Status.PAYMENT_MAX_MODULE;
          break;
        case 825:
          c = a.Status.PAYMENT_SYSTEM;
          break;
        case 826:
          c = a.Status.PAYMENT_DOWNGRADE;
          break;
        case 827:
          c = a.Status.SAVE_REFERENECE_BEFORE_REFERENCING;
          break;
        case 828:
          c = a.Status.PAYMENT_DB_SIZE;
          break;
        case 829:
          c = a.Status.ENDPOINT_PATH_NOT_ALLOWED;
          break;
        case 1820:
          c = a.Status.PAYMENT_NO_CRON;
          break;
        case 1821:
          c = a.Status.PAYMENT_MODULE_NOT_FREE;
          break;
        case 1822:
          c = a.Status.NATIVEMODULE_DEACTIVATED;
          break;
        case 1823:
          c = a.Status.LICENSE_INVALID;
          break;
        case 1824:
          c = a.Status.PAYMENT_NO_CUSTOMERROLES;
          break;
        case 1825:
          c = a.Status.WHITELABEL;
          break;
        case 1826:
          c = a.Status.WHITELABEL_NOT;
          break;
        case 1827:
          c = a.Status.MODULE_CONFIG_NO_DOT;
          break;
        case 1828:
          c = a.Status.PLAN_FALLBACK;
          break;
        case 1829:
          c = a.Status.PLAN_INACTIVE;
          break;
        case 1830:
          c = a.Status.ENTERPRISE;
          break;
        case 1831:
          c = a.Status.ACCOUNT_UNACCEPTED_CONTRACTS;
          break;
        case 1832:
          c = a.Status.DELETE_MANDATORY_DEFAULT_MODULE;
          break;
        case 830:
          c = a.Status.ID_EXISTS;
          break;
        case 831:
          c = a.Status.NAME_RESERVED;
          break;
        case 832:
          c = a.Status.CIRCULAR_DEPENDENCY;
          break;
        case 833:
          c = a.Status.NAME_EXISTS;
          break;
        case 834:
          c = a.Status.EMAIL_EXISTS;
          break;
        case 835:
          c = a.Status.CUSTOMER_IN_ORG;
          break;
        case 836:
          c = a.Status.PUSH_ERROR_PROXY;
          break;
        case 840:
          c = a.Status.UNAUTHORIZED;
          break;
        case 841:
          c = a.Status.WRONG_APIKEY;
          break;
        case 842:
          c = a.Status.EVALANCHE_UNAUTH;
          break;
        case 843:
          c = a.Status.PW_CHANGE_W_TOKEN;
          break;
        case 844:
          c = a.Status.TOKEN_AUTH_ERROR;
          break;
        case 845:
          c = a.Status.TOKEN_READ_ONLY;
          break;
        case 846:
          c = a.Status.AUTHENTICATION_REJECTED;
          break;
        case 901:
          c = a.Status.CRUD_ERROR;
          break;
        case 902:
          c = a.Status.IMEXPORT_ERROR;
          break;
        case 903:
          c = a.Status.COMPILE_ERROR;
          break;
        case 904:
          c = a.Status.REFERENCE_ERROR;
          break;
        case 905:
          c = a.Status.PUSH_PAYLOAD_ERROR;
          break;
        case 906:
          c = a.Status.PUSH_SEND_ERROR;
          break;
        case 907:
          c = a.Status.PUSH_INIT_FAILED;
          break;
        case 908:
          c = a.Status.FACEBOOK_ERROR;
          break;
        case 910:
          c = a.Status.FACEBOOK_OAUTH_ERROR;
          break;
        case 917:
          c = a.Status.FACEBOOK_OAUTH_ERROR2;
          break;
        case 911:
          c = a.Status.MEMBER_NOT_FOUND;
          break;
        case 912:
          c = a.Status.WORDPRESS_FETCH_DATA_ERROR;
          break;
        case 913:
          c = a.Status.TUMBLR_OAUTH_ERROR;
          break;
        case 914:
          c = a.Status.TUMBLR_ERROR;
          break;
        case 915:
          c = a.Status.EXECUTE_METHOD_ERROR_PRIMITIVE;
          break;
        case 916:
          c = a.Status.EXECUTE_METHOD_ERROR;
          break;
        case 918:
          c = a.Status.OAUTH_TOKEN_REQUEST_ERROR;
          break;
        case 919:
          c = a.Status.FINDING_RESOURCE_ERROR;
          break;
        case 920:
          c = a.Status.NATIVEMODULE_DEPLOY;
          break;
        case 921:
          c = a.Status.TOKEN_SEARCH_ERROR;
          break;
        case 922:
          c = a.Status.MODULE_CONFIG_MISSING;
          break;
        case 923:
          c = a.Status.NATIVEMODULE_INIT;
          break;
        case 924:
          c = a.Status.NATIVEMODULE_PULL;
          break;
        case 925:
          c = a.Status.NATIVEMODULE_PUSH;
          break;
        case 926:
          c = a.Status.NO_DOGET_RETURN;
          break;
        case 927:
          c = a.Status.CUSTOMER_TWO_ORGS;
          break;
        case 928:
          c = a.Status.NATIVEMODULE_HOOKS_NOT_FOUND;
          break;
        case 929:
          c = a.Status.ANALYTICS_ERROR;
          break;
        case 930:
          c = a.Status.EMAIL_ERROR;
          break;
        case 931:
          c =
            a.Status.MAX_HOOK_CALL_DEPTH_EXCEEDED;
          break;
        case 601:
          c = a.Status.HREF_NOT_FOUND;
          break;
        case 602:
          c = a.Status.WRONG_URI_SYNTAX;
          break;
        case 603:
          c = a.Status.WRONG_CLIENT_PROTOCOL;
          break;
        case 604:
          c = a.Status.IO_EXCEPTION;
          break;
        case 605:
          c = a.Status.UNSUPPORTED_ENCODING;
          break;
        case 606:
          c = a.Status.INSTANTIATE_EXCEPTION;
          break;
        case 607:
          c = a.Status.IN_PERSISTING_PROCESS;
          break;
        case 608:
          c = a.Status.VERIFY_SOCIALMEDIA;
          break;
        case 609:
          c = a.Status.TOO_MANY_LOCALIDS;
          break;
        case 610:
          c = a.Status.MAX_CACHE_SIZE_REACHED;
          break;
        case 611:
          c =
            a.Status.CANT_WRITE_IN_CACHE;
          break;
        case 612:
          c = a.Status.BAD_DATASTORE_CONFIG;
          break;
        case 613:
          c = a.Status.NO_TOKEN_RECEIVED;
          break;
        case 614:
          c = a.Status.NO_NETWORK;
          break;
        case 615:
          c = a.Status.ID_NOT_FOUND_OFFLINE;
          break;
        case 616:
          c = a.Status.ATTACHED_HREF_MISSING;
          break;
        case 617:
          c = a.Status.REQUEST_TIMEOUT;
          break;
        case 618:
          c = a.Status.ASYNC_WAIT_ERROR;
          break;
        case 619:
          c = a.Status.IN_DELETING_PROCESS;
          break;
        case 620:
          c = a.Status.SSO_REDIRECT;
          break;
        case 621:
          c = a.Status.MANUAL_CONCURRENT_WRITE_FAILED;
          break;
        case 622:
          c = a.Status.SAVE_FAILED;
          break;
        case 623:
          c = a.Status.SSL_ERROR;
          break;
        case 624:
          c = a.Status.MAX_FILE_SIZE_OFFLINE_EXCEEDED;
          break;
        case 625:
          c = a.Status.SQL_CONSTRAINT;
          break;
        case 950:
          c = a.Status.MALICIOUS_MEMBER
      }
      return c
    }
  }
})("undefined" === typeof exports ? Apiomat : exports);
"undefined" !== typeof goog && (Apiomat.ApiomatRequestError = {});
"undefined" === typeof exports && (Apiomat = Apiomat || {});
(function (a) {
  a.ApiomatRequestError = function (b, c, e) {
    this.message = e || a.Status.getReasonPhrase(b);
    this.name = "ApiomatRequestError";
    this.expectedCodes = c;
    this.statusCode = b;
    this.extraInformations = {};
    this.getStatusObj = function () {
      return a.Status.getStatusForCode(this.statusCode)
    };
    this.setExtraInformations = function (a) {
      this.extraInformations = a
    };
    this.getExtraInformations = function () {
      return this.extraInformations
    }
  };
  a.ApiomatRequestError.prototype = Error();
  a.ApiomatRequestError.prototype.constructor = a.ApiomatRequestError
})("undefined" ===
typeof exports ? Apiomat : exports);
if ("undefined" !== typeof goog) var base64 = {};
(function (a) {
  if (!a.Base64) {
    var b = function (a) {
        for (var b = {}, c = 0, f = a.length; c < f; c++) b[a.charAt(c)] = c;
        return b
      }("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"), c = String.fromCharCode, e = function (a) {
        if (2 > a.length) {
          var b = a.charCodeAt(0);
          return 128 > b ? a : 2048 > b ? c(192 | b >>> 6) + c(128 | b & 63) : c(224 | b >>> 12 & 15) + c(128 | b >>> 6 & 63) + c(128 | b & 63)
        }
        b = 65536 + 1024 * (a.charCodeAt(0) - 55296) + (a.charCodeAt(1) - 56320);
        return c(240 | b >>> 18 & 7) + c(128 | b >>> 12 & 63) + c(128 | b >>> 6 & 63) + c(128 | b & 63)
      }, d = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
      f = function (a) {
        return a.replace(d, e)
      }, l = function (a) {
        var b = [0, 2, 1][a.length % 3];
        a = a.charCodeAt(0) << 16 | (1 < a.length ? a.charCodeAt(1) : 0) << 8 | (2 < a.length ? a.charCodeAt(2) : 0);
        return ["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(a >>> 18), "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(a >>> 12 & 63), 2 <= b ? "\x3d" : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(a >>> 6 & 63), 1 <= b ? "\x3d" : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(a &
          63)].join("")
      }, h = a.btoa || function (a) {
        return a.replace(/[\s\S]{1,3}/g, l)
      }, g = function (a, b) {
        return b ? h(f(a)).replace(/[+\/]/g, function (a) {
          return "+" == a ? "-" : "_"
        }).replace(/=/g, "") : h(f(a))
      }, A = /[\u00c0-\u00df][\u0080-\u00bf]|[\u00e0-\u00ef][\u0080-\u00bf]{2}|[\u00f0-\u00f7][\u0080-\u00bf]{3}/g,
      F = function (a) {
        switch (a.length) {
          case 4:
            return a = ((7 & a.charCodeAt(0)) << 18 | (63 & a.charCodeAt(1)) << 12 | (63 & a.charCodeAt(2)) << 6 | 63 & a.charCodeAt(3)) - 65536, c((a >>> 10) + 55296) + c((a & 1023) + 56320);
          case 3:
            return c((15 & a.charCodeAt(0)) <<
              12 | (63 & a.charCodeAt(1)) << 6 | 63 & a.charCodeAt(2));
          default:
            return c((31 & a.charCodeAt(0)) << 6 | 63 & a.charCodeAt(1))
        }
      }, u = function (a) {
        return a.replace(A, F)
      }, B = function (a) {
        var f = a.length, d = f % 4;
        a = (0 < f ? b[a.charAt(0)] << 18 : 0) | (1 < f ? b[a.charAt(1)] << 12 : 0) | (2 < f ? b[a.charAt(2)] << 6 : 0) | (3 < f ? b[a.charAt(3)] : 0);
        a = [c(a >>> 16), c(a >>> 8 & 255), c(a & 255)];
        a.length -= [0, 0, 2, 1][d];
        return a.join("")
      }, I = a.atob || function (a) {
        return a.replace(/[\s\S]{1,4}/g, B)
      }, v = function (a) {
        return u(I(a.replace(/[-_]/g, function (a) {
          return "-" == a ? "+" : "/"
        }).replace(/[^A-Za-z0-9\+\/]/g,
          "")))
      };
    a.Base64 = {
      VERSION: "2.1.2",
      atob: I,
      btoa: h,
      fromBase64: v,
      toBase64: g,
      utob: f,
      encode: g,
      encodeURI: function (a) {
        return g(a, !0)
      },
      btou: u,
      decode: v
    };
    if ("function" === typeof Object.defineProperty) {
      var E = function (a) {
        return {value: a, enumerable: !1, writable: !0, configurable: !0}
      };
      a.Base64.extendString = function () {
        Object.defineProperty(String.prototype, "fromBase64", E(function () {
          return v(this)
        }));
        Object.defineProperty(String.prototype, "toBase64", E(function (a) {
          return g(this, a)
        }));
        Object.defineProperty(String.prototype,
          "toBase64URI", E(function () {
            return g(this, !0)
          }))
      }
    }
  }
})("undefined" === typeof exports ? this : exports);
var XMLHttpRequest;
"undefined" !== typeof goog && (XMLHttpRequest = {});
if ("undefined" === typeof Ti && "undefined" !== typeof module && module.exports) {
  var Url = require("url"), spawn = require("child_process").spawn, fs = require("fs");
  exports.XMLHttpRequest = function () {
    var a = this, b = require("http"), c = require("https"), e, d, f, l, h, g, A, F = !1,
      u = {"User-Agent": "node-XMLHttpRequest", Accept: "*/*"}, B = u,
      I = "accept-charset accept-encoding access-control-request-headers access-control-request-method connection content-length content-transfer-encoding cookie cookie2 date expect host keep-alive origin referer te trailer transfer-encoding upgrade via".split(" "),
      v =
        ["TRACE", "TRACK", "CONNECT"], E = !1, m = !1, q = {};
    this.UNSENT = 0;
    this.OPENED = 1;
    this.HEADERS_RECEIVED = 2;
    this.LOADING = 3;
    this.DONE = 4;
    this.readyState = this.UNSENT;
    this.onreadystatechange = null;
    this.responseXML = this.responseText = "";
    this.statusText = this.status = null;
    this.open = function (a, b, c, d, e) {
      this.abort();
      m = !1;
      if (!a || -1 !== v.indexOf(a)) throw"SecurityError: Request method not allowed";
      f = a;
      l = b.toString();
      h = "boolean" !== typeof c ? !0 : c;
      g = d || null;
      A = e || null;
      w(this.OPENED)
    };
    this.setDisableHeaderCheck = function (a) {
      F = a
    };
    this.setRequestHeader =
      function (a, b) {
        if (this.readyState != this.OPENED) throw"INVALID_STATE_ERR: setRequestHeader can only be called when state is OPEN";
        if (F || a && -1 === I.indexOf(a.toLowerCase())) {
          if (E) throw"INVALID_STATE_ERR: send flag is true";
          B[a] = b
        } else console.warn('Refused to set unsafe header "' + a + '"')
      };
    this.getResponseHeader = function (a) {
      return "string" === typeof a && this.readyState > this.OPENED && d.headers[a.toLowerCase()] && !m ? d.headers[a.toLowerCase()] : null
    };
    this.getAllResponseHeaders = function () {
      if (this.readyState < this.HEADERS_RECEIVED ||
        m) return "";
      var a = "", b;
      for (b in d.headers) "set-cookie" !== b && "set-cookie2" !== b && (a += b + ": " + d.headers[b] + "\r\n");
      return a.substr(0, a.length - 2)
    };
    this.getRequestHeader = function (a) {
      return "string" === typeof a && B[a] ? B[a] : ""
    };
    this.send = function (p) {
      function q(b) {
        d = b;
        302 === d.statusCode || 303 === d.statusCode || 307 === d.statusCode ? (l = d.headers.location, b = Url.parse(l), F = b.hostname, e = I({
          hostname: b.hostname,
          port: b.port,
          path: b.path,
          method: 303 === d.statusCode ? "GET" : f,
          headers: B
        }, q).on("error", u), e.end()) : (d.setEncoding("utf8"),
          w(a.HEADERS_RECEIVED), a.status = d.statusCode, d.on("data", function (b) {
          b && (a.responseText += b);
          E && w(a.LOADING)
        }), d.on("end", function () {
          E && (w(a.DONE), E = !1)
        }), d.on("error", function (b) {
          a.handleError(b)
        }))
      }

      function u(b) {
        a.handleError(b)
      }

      if (this.readyState != this.OPENED) throw"INVALID_STATE_ERR: connection must be opened before send() is called";
      if (E) throw"INVALID_STATE_ERR: send has already been called";
      var v = !1, n = !1, z = Url.parse(l);
      switch (z.protocol) {
        case "https:":
          v = !0;
        case "http:":
          var F = z.hostname;
          break;
        case "file:":
          n =
            !0;
          break;
        case void 0:
        case "":
          F = "localhost";
          break;
        default:
          throw"Protocol not supported.";
      }
      if (n) {
        if ("GET" !== f) throw"XMLHttpRequest: Only GET method is supported";
        if (h) fs.readFile(z.pathname, "utf8", function (b, c) {
          b ? a.handleError(b) : (a.status = 200, a.responseText = c, w(a.DONE))
        }); else try {
          this.responseText = fs.readFileSync(z.pathname, "utf8"), this.status = 200, w(a.DONE)
        } catch (Q) {
          this.handleError(Q)
        }
      } else {
        n = z.port || (v ? 443 : 80);
        var t = z.pathname + (z.search ? z.search : "");
        B.Host = F;
        v && 443 === n || 80 === n || (B.Host += ":" + z.port);
        g && ("undefined" == typeof A && (A = ""), z = new Buffer(g + ":" + A), B.Authorization = "Basic " + z.toString("base64"));
        "GET" === f || "HEAD" === f ? p = null : p ? (B["Content-Length"] = Buffer.isBuffer(p) ? p.length : Buffer.byteLength(p), B["Content-Type"] || (B["Content-Type"] = "text/plain;charset\x3dUTF-8")) : "POST" === f && (B["Content-Length"] = 0);
        t = {host: F, port: n, path: t, method: f, headers: B, agent: !1};
        m = !1;
        if (h) {
          var I = v ? c.request : b.request;
          E = !0;
          a.dispatchEvent("readystatechange");
          e = I(t, q).on("error", u);
          p && e.write(p);
          e.end();
          a.dispatchEvent("loadstart")
        } else {
          z =
            ".node-xmlhttprequest-content-" + process.pid;
          n = ".node-xmlhttprequest-sync-" + process.pid;
          fs.writeFileSync(n, "", "utf8");
          p = "var http \x3d require('http'), https \x3d require('https'), fs \x3d require('fs');var doRequest \x3d http" + (v ? "s" : "") + ".request;var options \x3d " + JSON.stringify(t) + ";var responseText \x3d '';var req \x3d doRequest(options, function(response) {response.setEncoding('utf8');response.on('data', function(chunk) {  responseText +\x3d chunk;});response.on('end', function() {fs.writeFileSync('" +
            z + "', 'NODE-XMLHTTPREQUEST-STATUS:' + response.statusCode + ',' + responseText, 'utf8');fs.unlinkSync('" + n + "');});response.on('error', function(error) {fs.writeFileSync('" + z + "', 'NODE-XMLHTTPREQUEST-ERROR:' + JSON.stringify(error), 'utf8');fs.unlinkSync('" + n + "');});}).on('error', function(error) {fs.writeFileSync('" + z + "', 'NODE-XMLHTTPREQUEST-ERROR:' + JSON.stringify(error), 'utf8');fs.unlinkSync('" + n + "');});" + (p ? "req.write('" + p.replace(/'/g, "\\'") + "');" : "") + "req.end();";
          for (p = spawn(process.argv[0],
            ["-e", p]); fs.existsSync(n);) ;
          a.responseText = fs.readFileSync(z, "utf8");
          p.stdin.end();
          fs.unlinkSync(z);
          a.responseText.match(/^NODE-XMLHTTPREQUEST-ERROR:/) ? (p = a.responseText.replace(/^NODE-XMLHTTPREQUEST-ERROR:/, ""), a.handleError(p)) : (a.status = parseInt(a.responseText.replace(/^NODE-XMLHTTPREQUEST-STATUS:([0-9]*),.*/, "$1"), 10), a.responseText = a.responseText.replace(/^NODE-XMLHTTPREQUEST-STATUS:[0-9]*,(.*)/, "$1"), w(a.DONE))
        }
      }
    };
    this.handleError = function (a) {
      this.status = 503;
      this.statusText = a;
      this.responseText =
        a.stack;
      m = !0;
      w(this.DONE)
    };
    this.abort = function () {
      e && (e.abort(), e = null);
      B = u;
      this.responseXML = this.responseText = "";
      m = !0;
      this.readyState === this.UNSENT || this.readyState === this.OPENED && !E || this.readyState === this.DONE || (E = !1, w(this.DONE));
      this.readyState = this.UNSENT
    };
    this.addEventListener = function (a, b) {
      a in q || (q[a] = []);
      q[a].push(b)
    };
    this.removeEventListener = function (a, b) {
      a in q && (q[a] = q[a].filter(function (a) {
        return a !== b
      }))
    };
    this.dispatchEvent = function (b) {
      if ("function" === typeof a["on" + b]) a["on" + b]();
      if (b in
        q) for (var c = 0, f = q[b].length; c < f; c++) q[b][c].call(a)
    };
    var w = function (b) {
      a.readyState !== b && (a.readyState = b, (h || a.readyState < a.OPENED || a.readyState === a.DONE) && a.dispatchEvent("readystatechange"), a.readyState !== a.DONE || m || (a.dispatchEvent("load"), a.dispatchEvent("loadend")))
    }
  }
}
;"undefined" !== typeof goog && (Apiomat.MemoryStorage = {});
Array.prototype.contains = function (a) {
  for (var b = this.length; b--;) if (this[b] === a) return !0;
  return !1
};
var _collectionStorage = {}, _objectStorage = {}, _useDeltaSync = !1;
(function (a) {
  a.MemoryStorage = function () {
    function a(a) {
      var b = [];
      for (i = 0; i < a.length; i++) a[i] && void 0 != a[i].id && b.push(a[i].id);
      return b
    }

    function c(a) {
      delete _objectStorage[a];
      for (var b in _collectionStorage) e(b, a)
    }

    function e(a, b) {
      b = _collectionStorage[a].indexOf(b);
      void 0 !== b && -1 < b && _collectionStorage[a].splice(b, 1)
    }

    return {
      addOrUpdateCollection: function (b, c) {
        if (c instanceof Array) {
          if (_useDeltaSync) if (_collectionStorage.hasOwnProperty(b)) {
            var f = _collectionStorage, d = _collectionStorage[b];
            for (i = 0; i < c.length; i++) void 0 ==
            c[i].id || d.contains(c[i].id) || d.push(c[i].id);
            f[b] = d
          } else _collectionStorage[b] = a(c); else _collectionStorage[b] = a(c);
          for (i = 0; i < c.length; i++) this.addOrUpdateObject(c[i])
        } else this.addOrUpdateObject(c, b)
      }, addOrUpdateObject: function (a, b) {
        if (void 0 != a.id && void 0 != b && b.endsWith("/models/me")) {
          if (_objectStorage.hasOwnProperty(b) && _objectStorage[b].lastModifiedAt <= a.lastModifiedAt || !_objectStorage.hasOwnProperty(b)) _objectStorage[b] = a
        } else if (void 0 != a.id) {
          if (_objectStorage.hasOwnProperty(a.id) && _objectStorage[a.id].lastModifiedAt <=
            a.lastModifiedAt || !_objectStorage.hasOwnProperty(a.id)) _objectStorage[a.id] = a
        } else if (-1 < b.indexOf("images/") || -1 < b.indexOf("files/")) b = b.substring(b.lastIndexOf("/") + 1, b.lastIndexOf(".img")), _objectStorage[b] = a
      }, getCollection: function (a) {
        return _collectionStorage[a]
      }, getCollectionObjects: function (a) {
        collection = this.getCollection(a);
        if (a.endsWith("/models/me")) return null == collection ? void 0 : collection;
        if (!collection) return a = a.substring(a.lastIndexOf("/") + 1, a.length), -1 < a.indexOf(".img") && (a = a.substring(0,
          a.lastIndexOf(".img"))), this.getObject(a);
        a = [];
        for (i = 0; i < collection.length; i++) _objectStorage[collection[i]] && a.push(_objectStorage[collection[i]]);
        return a
      }, getObject: function (a) {
        return _objectStorage[a]
      }, removeCollection: function (a) {
        delete _collectionStorage[a]
      }, removeObjectByHref: function (a) {
        var b = a.substring(0, a.lastIndexOf("/"));
        a = a.substring(a.lastIndexOf("/") + 1, a.length);
        var l = b.split("/"), d = !1;
        for (i = l.length - 1; 2 < i; i--) if (null != l[i].slice(0, 1).match(/[0-9]/)) {
          d = !0;
          break
        }
        b in _collectionStorage &&
        d ? e(b, a) : a in _objectStorage && !d && c(a)
      }, removeObjectById: function (a) {
        c(a)
      }, removeObjectsOnDeltaDeleted: function (a, b) {
        if (_useDeltaSync) for (i = 0; i < b.length; i++) c(b[i])
      }, removeObjectsOnDeltaRemoved: function (a, b) {
        if (_useDeltaSync && a in _collectionStorage) for (i = 0; i < b.length; i++) e(a, b[i])
      }, getCollectionStorage: function () {
        return _collectionStorage
      }, setUseDeltaSync: function (a) {
        _useDeltaSync = a
      }, getObjectStorage: function () {
        return _objectStorage
      }, clearStorage: function () {
        this.clearCollections();
        this.clearObjects()
      },
      clearCollections: function () {
        _collectionStorage = {}
      }, clearObjects: function () {
        _objectStorage = {}
      }
    }
  }()
})("undefined" === typeof exports ? Apiomat : exports);
"undefined" !== typeof goog && (Apiomat.AOMOfflineStorage = {});
(function (a) {
  a.AOMHelper.isTitaniumApp() && (localStorage = Ti.App.Properties, localStorage.setItem = function (a, c) {
    localStorage.setString(a, c)
  }, localStorage.getItem = function (a) {
    return localStorage.getString(a)
  }, localStorage.removeItem = function (a) {
    localStorage.removeProperty(a)
  }, localStorage.clear = function () {
    var a = localStorage.listProperties();
    for (i = 0; i < a.length; i++) localStorage.removeProperty(a[i]);
    return !0
  }, localStorage.keys = localStorage.listProperties());
  a.AOMOfflineStorage = function () {
    function b(a) {
      var b =
        [];
      for (i = 0; i < a.length; i++) a[i] && void 0 != a[i].id && b.push(a[i].id);
      return b
    }

    function c(a, b) {
      b = JSON.parse(localStorage.getItem(b));
      for (i = 0; i < a.length; i++) if (void 0 != a[i].id) {
        var c = !1;
        for (j = 0; j < b.length; j++) if (b[j] === a[i].id) {
          c = !0;
          break
        }
        c || b.push(a[i].id)
      }
      if (null != b) return b
    }

    function e(a, b) {
      try {
        var c = JSON.parse(localStorage.getItem(a));
        if (c instanceof Array) {
          var f = c.indexOf(b);
          void 0 !== f && -1 < f && (c.splice(f, 1), localStorage.setItem(a, JSON.stringify(c)))
        }
      } catch (A) {
      } finally {
      }
    }

    function d(b) {
      localStorage.removeItem(b);
      if (a.AOMHelper.isTitaniumApp()) {
        var c = localStorage.listProperties(), f;
        for (f = 0; f < c.length; f++) e(c[f], b);
        localStorage.listProperties()
      } else for (c in localStorage) e(c, b)
    }

    return {
      addOrUpdateCollection: function (a, d) {
        if (d instanceof Array) for (_useDeltaSync ? null === localStorage.getItem(a) ? localStorage.setItem(a, JSON.stringify(b(d))) : localStorage.setItem(a, JSON.stringify(c(d, a))) : localStorage.setItem(a, JSON.stringify(b(d))), i = 0; i < d.length; i++) this.addOrUpdateObject(d[i]); else this.addOrUpdateObject(d, a)
      }, addOrUpdateObject: function (a,
                                      b) {
        if (void 0 != a.id && void 0 != b && b.endsWith("/models/me")) (null !== localStorage.getItem(b) && JSON.parse(localStorage.getItem(b)).lastModifiedAt <= a.lastModifiedAt || null === localStorage.getItem(b)) && localStorage.setItem(b, JSON.stringify(a)); else if (void 0 != a.id) (null !== localStorage.getItem(a.id) && JSON.parse(localStorage.getItem(a.id)).lastModifiedAt <= a.lastModifiedAt || null === localStorage.getItem(a.id)) && localStorage.setItem(a.id, JSON.stringify(a)); else if (-1 < b.indexOf("images/") || -1 < b.indexOf("files/")) b =
          b.substring(b.lastIndexOf("/") + 1, b.lastIndexOf(".img")), localStorage.setItem(b, JSON.stringify(a))
      }, getCollection: function (a) {
        a = JSON.parse(localStorage.getItem(a));
        if (null != a) return a
      }, getCollectionObjects: function (a) {
        var b = this.getCollection(a);
        if (a.endsWith("/models/me")) return null == b ? void 0 : b;
        if (!b) return b = a.substring(a.lastIndexOf("/") + 1, a.length), -1 < b.indexOf(".img") && (b = b.substring(0, b.lastIndexOf(".img"))), b = this.getObject(b), null == b ? void 0 : b;
        a = [];
        for (i = 0; i < b.length; i++) null !== localStorage.getItem(b[i]) &&
        a.push(JSON.parse(localStorage.getItem(b[i])));
        return a
      }, getObject: function (a) {
        a = JSON.parse(localStorage.getItem(a));
        if (null != a) return a
      }, removeCollection: function (a) {
        localStorage.removeItem(a)
      }, removeObjectByHref: function (a) {
        var b = a.substring(0, a.lastIndexOf("/"));
        a = a.substring(a.lastIndexOf("/") + 1, a.length);
        var c = b.split("/"), f = !1;
        for (i = c.length - 1; 2 < i; i--) if (null != c[i].slice(0, 1).match(/[0-9]/)) {
          f = !0;
          break
        }
        null !== localStorage.getItem(b) && f ? e(b, a) : null === localStorage.getItem(a) || f || d(a)
      }, removeObjectById: function (a) {
        d(a)
      },
      removeObjectsOnDeltaDeleted: function (a, b) {
        if (_useDeltaSync) for (i = 0; i < b.length; i++) d(b[i])
      }, removeObjectsOnDeltaRemoved: function (a, b) {
        if (_useDeltaSync && a in _collectionStorage) for (i = 0; i < b.length; i++) e(a, b[i])
      }, setUseDeltaSync: function (a) {
        _useDeltaSync = a
      }, getCollectionStorage: function () {
        return localStorage
      }, clearStorage: function () {
        localStorage.clear()
      }
    }
  }()
})("undefined" === typeof exports ? Apiomat : exports);
"undefined" !== typeof goog && (Apiomat.Datastore = {});
"undefined" === typeof exports && (Apiomat = Apiomat || {});

function headerHook(a) {
  return a
}

function responseHook(a) {
  return a
}

function processOfflineHook(a) {
  return a
}

(function (a) {
  a.AOMOfflineStrategy = {NO_OFFLINE_HANDLING: 0, USE_OFFLINE_CACHE: 1};
  a.AOMCacheStrategy = {NETWORK_ONLY: 0, NETWORK_ELSE_CACHE: 1, CACHE_ELSE_NETWORK: 2, CACHE_THEN_NETWORK: 3};
  a.AOMAuthType = {GUEST: 0, USERNAME_PASSWORD: 1, OAUTH2_TOKEN: 2};
  a.SSO_REDIRECT_URL = "AOM_SSO_REDIRECT_URL";
  a.SSO_REDIRECT_DATA = "AOM_SSO_REDIRECT_DATA";
  a.HEADER = {
    ETAG: "Etag",
    LAST_MODIFIED: "Last-Modified",
    MODIFIED_SINCE: "If-Modified-Since",
    EXPIRES: "Expires",
    CACHE_CONTROL: "Cache-Control"
  };
  a.Datastore = function () {
    function b(b, c, d, e, f,
               g, h) {
      G = b;
      Z = c;
      ea = d;
      n = e;
      p = f;
      w = g;
      Q = h;
      J = "undefined" !== typeof Q ? a.AOMAuthType.OAUTH2_TOKEN : "undefined" !== typeof p && "undefined" !== typeof w ? a.AOMAuthType.USERNAME_PASSWORD : a.AOMAuthType.GUEST;
      O = !0
    }

    function c() {
      return {
        getUsername: function () {
          return p
        }, getPassword: function () {
          return w
        }, getAuthType: function () {
          return J
        }, setUseAsyncRequests: function (a) {
          z = a
        }, setUseDeltaSync: function (a) {
          S = a
        }, getUseDeltaSync: function () {
          return S
        }, setOfflineUsageForClass: function (a, b) {
          T[a] = b
        }, getOfflineUsageForClass: function (a) {
          return (a =
            T[a]) ? a : !1
        }, loadFromServer: function (b, c, d, e, g, h, l, m) {
          var k = d && b === d.getHref();
          f("GET", b, [200, 304], d ? {
            onOk: function (b, k) {
              b && k && 304 !== k.status ? d.fromJson(b) : k && 304 === k.status || d.fromJson(b);
              a.Datastore.positiveCallback(c, k && 304 == k.status ? d : void 0, k)
            }, onError: function (b, k) {
              a.Datastore.negativeCallback(c, b, k)
            }, onSecondOk: function (b, k) {
              d.fromJson(b);
              a.Datastore.secondPositiveCallback(c, k)
            }
          } : c, h, {isReload: k, data: g, withReferencedHrefs: e}, l, m)
        }, getOrCreateUser: function (b, c, d) {
          var k = a.User.AOMBASEURL.substring(a.User.AOMBASEURL.lastIndexOf("/") +
            1);
          b = G.substring(0, G.indexOf("yambas/rest") + 11) + "/modules/facebook/spec/" + k + "/aomuser?facebookToken\x3d" + b;
          f("GET", b, [200], c, void 0, void 0, d)
        }, loginFacebook: function (b, c, d) {
          a.Datastore.getInstance().getOrCreateUser(b, c, d)
        }, setCheckObjectState: function (a) {
          O = a
        }, getCheckObjectState: function () {
          return O
        }, loadResource: function (a, b, c) {
          f("GET", a, [200, 206], b, void 0, {isByteData: !0}, !1, c)
        }, loadListFromServerWithClass: function (a, b, c, d, e) {
          f("GET", F(a), [200, 304], c, a, {data: b, withReferencedHrefs: d}, !0, e)
        }, postOnServer: function (a,
                                   b, c, d) {
          c || (c = A(a));
          f("POST", c, [200, 201], b, void 0, {data: a.toJson()}, void 0, d)
        }, updateOnServer: function (a, b, c) {
          var k = a.getHref();
          a = a.toJson();
          f("PUT", k, [200, 204], b, void 0, {data: a}, void 0, c)
        }, updateOnServerWithJSON: function (a, b, c, d) {
          f("PUT", a, [200, 204], c, void 0, {data: b}, void 0, d)
        }, deleteOnServer: function (a, b, c) {
          e(a, void 0, b, c)
        }, deleteModelOnServer: function (a, b, c) {
          e(void 0, a, b, c)
        }, postStaticDataOnServer: function (a, b, c, d, e) {
          b = u(b, e);
          this.postStaticDataOnServerWithHref(a, b, c, d)
        }, postStaticDataOnServerWithHref: function (a,
                                                     b, c, d) {
          f("POST", b, [201], c, void 0, {isByteData: !0, data: a}, d)
        }, shouldSendOffline: function (b) {
          return y !== a.AOMCacheStrategy.NETWORK_ONLY && void 0 != this.getOfflineHandler() && !1 === this.getOfflineHandler().isConnected()
        }, getOfflineHandler: function () {
          return t
        }, getOfflineStrategy: function () {
          return aa
        }, syncCollection: function (a, b, c) {
          var k = [], d = [], e, x;
          if (c) for (e = 0; e < a.length; e++) {
            var f = !1;
            for (x = 0; x < c.length; x++) a[e].getID() == c[x] && (f = !0);
            f || k.push(a[e])
          } else k = a;
          for (a = 0; a < b.length; a++) {
            f = !1;
            for (c = 0; c < k.length; c++) k[c].getID() ===
            b[a].getID() && (k[c] = b[a], f = !0);
            f || d.push(b[a])
          }
          return k.concat(d)
        }, sendOffline: function (b, c, d, e, f, g) {
          !c && d instanceof a.AbstractClientDataModel ? c = A(d) : c || (c = u(e, g));
          this.getOfflineHandler().addTask(b, c, d, e, function (c) {
            "POST" === b && c ? a.Datastore.positiveCallback(f, c) : a.Datastore.positiveCallback(f)
          }, function (c) {
            "undefined" !== typeof f ? ("POST" === b && (c = new a.ApiomatRequestError(a.Status.CRUD_ERROR, 201, "Can't save offline")), a.Datastore.negativeCallback(f, c)) : "undefined" !== typeof console && console.error &&
              console.error("Can't send request to offline queue: " + c)
          })
        }, requestSessionToken: function (b, c, e, f) {
          if (J !== a.AOMAuthType.USERNAME_PASSWORD) c = new a.ApiomatRequestError(a.Status.BAD_DATASTORE_CONFIG), "undefined" !== typeof b ? a.Datastore.negativeCallback(b, c) : "undefined" !== typeof console && console.error && console.error("Error occured: " + c); else {
            var k = G.substring(G.lastIndexOf("/") + 1);
            k = {
              grant_type: "aom_user",
              client_id: k,
              client_secret: Z,
              scope: "read write",
              username: p,
              password: w,
              app: k,
              system: ea
            };
            "undefined" !==
            typeof e && "default" !== e && (k.access_expiration = e);
            "undefined" !== typeof f && "default" !== f && (k.refresh_expiration = f);
            d(k, b, c)
          }
        }, requestSessionTokenWithRefreshToken: function (a, b, c, e, f) {
          a = {
            grant_type: "refresh_token",
            client_id: G.substring(G.lastIndexOf("/") + 1),
            client_secret: Z,
            refresh_token: a
          };
          "undefined" !== typeof e && "default" !== e && (a.access_expiration = e);
          "undefined" !== typeof f && "default" !== f && (a.refresh_expiration = f);
          d(a, b, c)
        }, loadCountFromServer: function (b, c, d, e, g) {
          var k = void 0;
          k = "string" === typeof b && "undefined" !==
          typeof c ? b + "/" + c : F(b);
          f("GET", k + "/count", [200], {
            onOk: function (b) {
              a.Datastore.positiveCallback(e, Number(b))
            }, onError: function (b) {
              typeof e && a.Datastore.negativeCallback(e, b)
            }
          }, void 0, {data: d, returnpost: !0}, g)
        }, setIdPHosts: function (a) {
          P = a
        }, getIdPHosts: function () {
          return P
        }, deleteCollectionFromStorage: function (b, c, d, e) {
          var k = !1;
          try {
            var f = c.prototype.getModuleName(), x = c.prototype.getSimpleName();
            c = G + "/models/" + f + "/" + x;
            b && (c += "?withReferencedHrefs\x3d" + b);
            d && (c = b ? c + "\x26" : c + "?", c += "q\x3d" + d);
            collectionHref =
              c;
            headerHook(collectionHref);
            a.MemoryStorage.removeCollection(collectionHref);
            a.AOMOfflineStorage.removeCollection(collectionHref);
            a.Datastore.positiveCallback(e)
          } catch (ka) {
            K ? Ti.API.log("Error occured: " + ka) : k = !0
          } finally {
            k && (b = new a.ApiomatRequestError(a.status.MODEL_NOT_FOUND), "undefined" !== typeof e ? a.Datastore.negativeCallback(e, b) : "undefined" !== typeof console && console.error && console.error("Error occured: " + b))
          }
        }, deleteObjectFromStorage: function (a, b) {
          v(b).removeObjectById(a)
        }, removeCollectionFromStorage: function (a,
                                                  b) {
          v(b).removeObjectByHref(a)
        }, createHrefFromClass: function (a) {
          return F(a)
        }, getStorageImpl: function (a) {
          return v(a)
        }
      }
    }

    function e(b, c, d, e) {
      b ? f("DELETE", b, [204], d, void 0, void 0, e) : c && c.getHref() ? f("DELETE", c.getHref(), [204], d, void 0, void 0, e) : (b = new a.ApiomatRequestError(a.Status.HREF_NOT_FOUND), d ? a.Datastore.negativeCallback(d, b) : console && console.error && console.error("Error occured: " + b))
    }

    function d(b, c, d) {
      var k = G.substring(0, G.indexOf("yambas") + 6) + "/oauth/token", e = "", g;
      for (g in b) "" !== e && (e += "\x26"),
        e += g + "\x3d" + b[g];
      f("POST", k, [200], {
        onOk: function (b) {
          var d = {};
          b = JSON.parse(b) || {};
          d.sessionToken = b.access_token;
          d.refreshToken = b.refresh_token;
          var k = b.expires_in || 0;
          d.expirationDate = (new Date).getTime() + 1E3 * k;
          d.module = b.aom_module;
          d.model = b.aom_model;
          a.Datastore.positiveCallback(c, d)
        }, onError: function (b) {
          b = new a.ApiomatRequestError(b.statusCode, 200, "Requesting the session token failed");
          "undefined" !== typeof c ? a.Datastore.negativeCallback(c, b) : console && console.error && console.error("Error occured: " +
            b)
        }
      }, void 0, {
        data: e,
        returnpost: !0,
        headerDetails: {authHeader: !1, contentType: "application/x-www-form-urlencoded"}
      }, d)
    }

    function f(b, c, d, e, f, m, q, p) {
      m = m || {};
      var k = m.data || void 0, x = m.withReferencedHrefs || void 0, L = m.isByteData || !1, R = m.returnpost || !1,
        w = m.headerDetails || {}, A = m.isReload;
      if (K) {
        var n = Ti.Network.createHTTPClient({
          onload: function (a) {
            l(this, d, e, b, f, R, c, p)
          }, onerror: function (b) {
            var c = b.error || "";
            if (-1 < c.indexOf("connection failure")) b = new a.ApiomatRequestError(a.Status.NO_NETWORK, d, c); else {
              if (-1 <
                d.indexOf(this.status)) throw b;
              b = new a.ApiomatRequestError(this.status, d, this.responseText)
            }
            "undefined" !== typeof e ? a.Datastore.negativeCallback(e, b) : Ti.API.error("Received HTTP error: " + b)
          }
        });
        n.overrideMimeType = function () {
        }
      } else n = "object" === typeof window && window.XMLHttpRequest ? new XMLHttpRequest : ba ? new exports.XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
      "GET" === b && k && (c += "?q\x3d" + encodeURIComponent(k));
      if (0 == K && 0 == ba && 0 == X) {
        var u = !1;
        u = ca;
        "GET" === b && 0 != u && 10 >= u && (c = k ? c + "\x26" : c + "?", c += "dIE\x3d" +
          (new Date).getTime())
      }
      "GET" === b && "undefined" != typeof x && 1 == x && (c = k || 0 != u && 10 >= u ? c + "\x26" : c + "?", c += "withReferencedHrefs\x3d" + x);
      c = B(c);
      a.AOMNetworkHandler.isConnected() && y !== a.AOMCacheStrategy.CACHE_ELSE_NETWORK && y !== a.AOMCacheStrategy.CACHE_THEN_NETWORK || "GET" !== b ? (n.open(b, c, z), g(c, b, n, L, w, A, q, p), L && "GET" === b && n.overrideMimeType("text/plain; charset\x3dx-user-defined"), 0 == K && (n.onreadystatechange = function () {
        4 == n.readyState && l(n, d, e, b, f, R, c, p)
      }), "POST" !== b && "PUT" !== b || "undefined" === typeof k ? n.send() :
        m && m.isByteData ? (m = k, !1 === K && (k = new Uint8Array(k), m = "ArrayBufferView" in window ? k : k.buffer), n.send(m)) : n.send(k)) : y !== a.AOMCacheStrategy.NETWORK_ONLY ? h(e, f, c, n, b, L, w, q, d, R, p) : (k = new a.ApiomatRequestError(a.Status.NO_NETWORK, d), "undefined" !== typeof e ? a.Datastore.negativeCallback(e, k) : "undefined" !== typeof console && console.error && console.error("Error occured: " + k))
    }

    function l(b, c, d, e, f, g, h, l) {
      var k, x = !1;
      responseHook(b);
      processOfflineHook(!1);
      try {
        var q = b.responseURL, p = b.getResponseHeader("Content-Type"),
          w = void 0;
        if (p && -1 < p.indexOf("text/html")) {
          p = void 0;
          for (var L = b.responseText, n = /<form.+method.?=.?"POST".+?action=.?"(.*?)".*?>/g; match = n.exec(L);) for (var R in P) if (-1 < match[1].indexOf(P[R])) {
            p = match[1];
            break
          }
          w = p;
          if ("undefined" !== typeof w) {
            var r = new a.ApiomatRequestError(a.Status.SSO_REDIRECT, c, null);
            e = {};
            e[a.SSO_REDIRECT_URL] = w;
            e[a.SSO_REDIRECT_DATA] = b.responseText;
            r.setExtraInformations(e);
            if ("undefined" !== typeof d && d.onError) d.onError(r, {status: b.status});
            return
          }
        }
        if (-1 < c.indexOf(b.status)) {
          if (d &&
            d.hasOwnProperty("onOk")) {
            (X || ca) && "GET" === e && (da[h] = b.getResponseHeader("Last-Modified"), ca && (Y[h] = b.getResponseHeader(a.HEADER.ETAG)));
            var C = b.responseText;
            if ("GET" === e && 0 < C.length) try {
              if (y !== a.AOMCacheStrategy.NETWORK_ONLY) {
                r = void 0;
                r = "undefined" !== typeof f ? m(f) : E(h);
                var U = void 0 != r && void 0 != T[r] ? v(T[r]) : v(l);
                U.addOrUpdateCollection(q ? q : h, JSON.parse(C));
                if (S) {
                  var N = {
                    deletedItems: JSON.parse(b.getResponseHeader("X-apiomat-delta-deleted")),
                    removedItems: JSON.parse(b.getResponseHeader("X-apiomat-delta-removed"))
                  };
                  U = v(l);
                  N.deletedItems && 0 < N.deletedItems.length && U.removeObjectsOnDeltaDeleted(h, N.deletedItems);
                  N.removedItems && 0 < N.removedItems.length && U.removeObjectsOnDeltaRemoved(h, N.removedItems)
                }
              }
            } catch (ha) {
              r = "";
              w = [];
              var ia;
              for (k = 0; k < C.length; k++) w.push(C[k].charCodeAt(0) & 255);
              for (ia = 0; ia < w.length; ia++) r += String.fromCharCode(w[ia]);
              U = v(l);
              U.addOrUpdateCollection(q ? q : h, r);
              if (S) {
                try {
                  N = {deletedItems: JSON.parse(b.getResponseHeader("X-apiomat-delta-deleted"))}
                } catch (ra) {
                  N = {deletedItems: void 0}
                }
                N.deletedItems && 0 <
                N.deletedItems.length && (U = v(l), U.removeObjectsOnDelta(h, N.deletedItems))
              }
            }
            "DELETE" === e && y !== a.AOMCacheStrategy.NETWORK_ONLY && (a.AOMOfflineStorage.removeObjectByHref(h), a.MemoryStorage.removeObjectByHref(h));
            C = b.responseText;
            if ("GET" === e && "undefined" !== typeof f) {
              var M = [];
              M = S && y !== a.AOMCacheStrategy.NETWORK_ONLY || y === a.AOMCacheStrategy.NETWORK_ELSE_CACHE && 304 === b.status ? v(l).getCollectionObjects(h) : JSON.parse(C);
              if (M instanceof Array) for (C = [], k = 0; k < M.length; k++) {
                var u = new f;
                u.fromJson(M[k]);
                C.push(u)
              } else C =
                new f, C.fromJson(M)
            }
            f = void 0;
            "POST" === e && !1 === g && (f = b.getResponseHeader("Location"));
            "GET" === e && y === a.AOMCacheStrategy.CACHE_THEN_NETWORK && d.hasOwnProperty("onSecondOk") ? a.Datastore.secondPositiveCallback(d, C) : a.Datastore.positiveCallback(d, "GET" === e || g ? C : f || void 0, N, {status: b.status})
          }
        } else if ("GET" === e && y === a.AOMCacheStrategy.NETWORK_ELSE_CACHE) if ("undefined" !== typeof f) {
          M = [];
          M = v(l).getCollectionObjects(h);
          if (M instanceof Array) for (C = [], k = 0; k < M.length; k++) u = new f, u.fromJson(M[k]), C.push(u); else C =
            new f, C.fromJson(M);
          a.Datastore.positiveCallback(d, C)
        } else x = !0; else x = !0
      } catch (ha) {
        K && Ti.API.log("Error occured: " + ha);
        if (b && -1 < c.indexOf(b.status)) throw ha;
        x = !0
      } finally {
        x && (r = new a.ApiomatRequestError(b.status, c, b.responseText), "undefined" !== typeof d ? a.Datastore.negativeCallback(d, r, {status: b.status}) : "undefined" !== typeof console && console.error && console.error("Error occured: " + r))
      }
    }

    function h(b, c, d, e, f, h, p, q, w, n, u) {
      processOfflineHook(!0);
      var k = !1;
      try {
        if (b && b.hasOwnProperty("onOk")) {
          var x, L = void 0;
          L = "undefined" !== typeof c ? m(c) : E(d);
          if (x = void 0 != T[L] ? v(T[L]).getCollectionObjects(d) : v(u).getCollectionObjects(d)) {
            if (x instanceof Array) {
              var A = [];
              var t;
              for (t = 0; t < x.length; t++) {
                var r = new c;
                r.fromJson(x[t]);
                A.push(r)
              }
            } else c ? (A = new c, A.fromJson(x)) : A = x instanceof Object ? JSON.stringify(x) : x;
            a.Datastore.positiveCallback(b, A);
            y === a.AOMCacheStrategy.CACHE_THEN_NETWORK && (e.open(f, d, z), g(d, f, e, h, p, q, u), h && "GET" === f && e.overrideMimeType("text/plain; charset\x3dx-user-defined"), 0 == K && (e.onreadystatechange =
              function () {
                4 == e.readyState && l(e, w, b, f, c, n, d, u)
              }), e.send())
          } else if (a.AOMNetworkHandler.isConnected() && y === a.AOMCacheStrategy.CACHE_ELSE_NETWORK || y === a.AOMCacheStrategy.CACHE_THEN_NETWORK) y === a.AOMCacheStrategy.CACHE_THEN_NETWORK && a.Datastore.positiveCallback(b, []), e.open(f, d, z), g(d, f, e, h, p, q, u), h && "GET" === f && e.overrideMimeType("text/plain; charset\x3dx-user-defined"), 0 == K && (e.onreadystatechange = function () {
            4 == e.readyState && l(e, w, b, f, c, n, d, u)
          }), e.send(); else {
            k = !0;
            var C = new a.ApiomatRequestError(a.Status.ID_NOT_FOUND_OFFLINE,
              201, "No data found offline")
          }
        }
      } catch (U) {
        K && Ti.API.log("Error occured: " + U), k = !0
      } finally {
        k && (C || (C = new a.ApiomatRequestError(a.Status.HREF_NOT_FOUND)), "undefined" !== typeof b ? a.Datastore.negativeCallback(b, C) : "undefined" !== typeof console && console.error && console.error("Error occured: " + C))
      }
    }

    function g(b, c, d, e, f, h, g, m) {
      d.setRequestHeader("X-apiomat-system", ea);
      d.setRequestHeader("X-apiomat-apikey", Z);
      f.contentType ? d.setRequestHeader("Content-Type", f.contentType) : "undefined" !== typeof e && e ? d.setRequestHeader("Content-Type",
        "application/octet-stream") : (d.setRequestHeader("Content-Type", "application/json"), d.setRequestHeader("Accept", "application/json"));
      d.setRequestHeader("X-apiomat-fullupdate", "true");
      if (!f.hasOwnProperty("authHeader") || 0 != f.authHeader) if (J === a.AOMAuthType.USERNAME_PASSWORD) {
        e = p + ":" + w;
        if (ba) try {
          e = (new (require("buffer").Buffer)(e)).toString("base64")
        } catch (la) {
          e = Base64.Base64.encode(e)
        } else try {
          e = Base64.encode(e)
        } catch (la) {
          e = Base64.Base64.encode(e)
        }
        d.setRequestHeader("Authorization", "Basic " + e)
      } else J ===
      a.AOMAuthType.OAUTH2_TOKEN && d.setRequestHeader("Authorization", "Bearer " + Q);
      d.setRequestHeader("X-apiomat-sdkVersion", n);
      (X || K) && "GET" === c ? d.setRequestHeader("If-Modified-Since", "01.01.1970 00:00:00:00 CEST") : ca && "GET" === c && (d.setRequestHeader(a.HEADER.MODIFIED_SINCE, "Wed, 02 Mar 1970 12:00:00 GMT"), d.setRequestHeader(a.HEADER.EXPIRES, -1), d.setRequestHeader(a.HEADER.CACHE_CONTROL, "must-revalidate, private"), h && (Y[b] && d.setRequestHeader("If-None-Match", Y[b]), null !== da[b] && d.setRequestHeader(a.HEADER.LAST_MODIFIED,
        da[b])));
      if (g && "GET" == c && S && y !== a.AOMCacheStrategy.NETWORK_ONLY) if (c = v(m), b = c.getCollection(b)) {
        h = [];
        for (i = 0; i < b.length; i++) (g = c.getObject(b[i])) && h.push(g);
        d.setRequestHeader("X-apiomat-delta", I(h));
        headerHook(h)
      } else d.setRequestHeader("X-apiomat-delta", "{}")
    }

    function A(a) {
      var b = G;
      b = b + "/models/" + a.getModuleName();
      return b = b + "/" + a.getSimpleName()
    }

    function F(a) {
      var b = G;
      b = b + "/models/" + a.prototype.getModuleName.call();
      return b = b + "/" + a.prototype.getSimpleName.call()
    }

    function u(a, b) {
      var c = G;
      c = c + "/data/" +
        (a ? "images" : "files") + "/";
      "undefined" !== typeof b.dataModelId && (c += b.moduleName + "/", c += b.dataModelName + "/", c += b.dataModelId + "/", c += b.refName);
      return c
    }

    function B(a) {
      return void 0 === a || "http" === a.substring(0, 4) ? a : "/apps" === a.substring(0, 5) ? G.substring(0, G.indexOf("/apps")) + a : G + "/" + a
    }

    function I(a) {
      var b = "{";
      for (i = 0; i < a.length; i++) 0 < i && (b = b.concat(", ")), b = b.concat('"' + a[i].id + '" : ' + a[i].lastModifiedAt);
      return b = b.concat("}")
    }

    function v(b) {
      if (b && !t) if (y) t || y === a.AOMCacheStrategy.NETWORK_ONLY || (t = new a.AOMOfflineHandler),
      "undefined" !== typeof t && t.init(void 0, void 0); else throw"No cachingStrategy is set. Please set the strategy in the Datastore with setCachingStrategy(cacheStrategy, callback)";
      return b ? a.AOMOfflineStorage : a.MemoryStorage
    }

    function E(a) {
      if (!(-1 < a.indexOf("images/") || -1 < a.indexOf("files/"))) {
        a = a.substring(0, a.lastIndexOf("/"));
        var b = a.substring(a.lastIndexOf("/") + 1, a.length);
        a = a.substring(0, a.lastIndexOf("/"));
        return a.substring(a.lastIndexOf("/") + 1, a.length) + "$" + b
      }
    }

    function m(a) {
      if (void 0 != a.prototype.getModuleName() &&
        void 0 != a.prototype.getSimpleName()) return a.prototype.getModuleName() + "$" + a.prototype.getSimpleName()
    }

    var q, w, p, G, Z, ea, n, z = !0, aa = a.AOMOfflineStrategy.NO_OFFLINE_HANDLING, t = void 0,
      J = a.AOMAuthType.GUEST, Q, O = void 0, P = [], S = !1, T = {}, y = a.AOMCacheStrategy.NETWORK_ELSE_CACHE,
      ja = !1, X = a.AOMHelper.isSafari(), K = a.AOMHelper.isTitaniumApp(), ba = a.AOMHelper.isNodeJS(),
      ca = a.AOMHelper.detectIE(), da = [], Y = [];
    a.MemoryStorage.clearCollections();
    a.MemoryStorage.clearObjects();
    return {
      getInstance: function () {
        q || (q = c());
        return q
      },
      isInstantiated: function () {
        return "undefined" !== typeof q && q
      }, positiveCallback: function (a, b, c) {
        a || console.log("Positive callback: callback not defined");
        var d;
        if ("undefined" !== typeof a && a != {}) for (d in a) {
          var e = "function" == typeof a[d] && "onok" == d.toString().toLowerCase() ? d.toString() : void 0;
          if ("undefined" != typeof e) {
            if ("undefined" != typeof b && null !== b) a[e](b, c); else a[e](void 0, c);
            break
          }
        }
      }, secondPositiveCallback: function (a, b, c) {
        a || console.log("Second positive callback: callback not defined");
        var d;
        if ("undefined" !==
          typeof a && a != {}) for (d in a) {
          var e = "function" == typeof a[d] && "onsecondok" == d.toString().toLowerCase() ? d.toString() : void 0;
          if ("undefined" != typeof e) {
            if ("undefined" != typeof b && null !== b) a[e](b, c); else a[e]();
            break
          }
        }
      }, negativeCallback: function (a, b, c) {
        var d;
        if ("undefined" !== typeof a && a != {}) for (d in a) if (c = "function" == typeof a[d] && "onerror" == d.toString().toLowerCase() ? d.toString() : void 0, "undefined" != typeof c) {
          if ("undefined" != typeof b && null !== b) a[c](b); else a[c]();
          break
        }
      }, configure: function (a) {
        this.configureWithCredentials(a)
      },
      configureWithCredentials: function (c) {
        b(a.User.AOMBASEURL, a.User.AOMAPIKEY, a.User.AOMSYS, a.User.AOMSDKVERSION, c.getUserName(), c.getPassword())
      }, configureAsGuest: function (a, c, d, e) {
        b(a, c, d, e)
      }, configureWithUserSessionToken: function (a) {
        this.configureWithSessionToken(a.getSessionToken())
      }, configureWithSessionToken: function (c) {
        b(a.User.AOMBASEURL, a.User.AOMAPIKEY, a.User.AOMSYS, a.User.AOMSDKVERSION, void 0, void 0, c)
      }, configurePlain: function (a, b, c, d) {
        this.configureAsGuest(a, b, c, d)
      }, setOfflineStrategy: function (b,
                                       c) {
        aa = b;
        t || aa == a.AOMOfflineStrategy.NO_OFFLINE_HANDLING || (t = new a.AOMOfflineHandler);
        "undefined" !== typeof t && ("undefined" !== typeof c ? t.init(c.onOk || void 0, c.onError || void 0) : t.init(void 0, void 0))
      }, getCachingStrategy: function () {
        return y
      }, getOfflineHandler: function () {
        return t
      }, setCachingStrategy: function (b, c) {
        if (!this) throw"The datastore hasn't been configured yet - call Datastore.configure(...) before sending requests.";
        y = b;
        t || y === a.AOMCacheStrategy.NETWORK_ONLY || (t = new a.AOMOfflineHandler);
        "undefined" !==
        typeof t && ("undefined" !== typeof c ? t.init(c.onOk || void 0, c.onError || void 0) : t.init(void 0, void 0))
      }, setUseDeltaSync: function (b) {
        S = b;
        a.MemoryStorage.setUseDeltaSync(b);
        a.AOMOfflineStorage.setUseDeltaSync(b)
      }, setIsReact: function (a) {
        ja = a
      }, getIsReact: function () {
        return ja
      }
    }
  }()
})("undefined" === typeof exports ? Apiomat : exports);
"undefined" !== typeof goog && (Apiomat.AbstractClientDataModel = {});
"undefined" === typeof exports && (Apiomat = Apiomat || {});
(function (a) {
  a.ObjectState = {
    TRANSIENT: "TRANSIENT",
    DELETING: "DELETING",
    DELETED: "DELETED",
    PERSISTING: "PERSISTING",
    PERSISTED: "PERSISTED",
    LOCAL_PERSISTED: "LOCAL_PERSISTED",
    LOCAL_DELETED: "LOCAL_DELETED"
  };
  a.AbstractClientDataModel = function () {
    this.data = {};
    this.toJson = function () {
      this.getHref() && (this.data.id = this.getID());
      this.data["@type"] = this.getType();
      var a = JSON.stringify(this.data);
      delete this.data.id;
      return a
    };
    this.fromJson = function (b) {
      if ("object" === typeof b) for (var c in b) this.data[c] = b[c]; else this.data =
        JSON.parse(b);
      this.setCurrentState(a.ObjectState.PERSISTED);
      return this
    };
    this.getCurrentState = function () {
      return this.currentState
    };
    this.setCurrentState = function (a) {
      this.currentState = a
    }
  };
  a.AbstractClientDataModel.prototype = {
    getModuleName: function () {
      throw new a.ApiomatRequestError(void 0, void 0, "Must be implemented by child");
    }, getSimpleName: function () {
      throw new a.ApiomatRequestError(void 0, void 0, "Must be implemented by child");
    }, getType: function () {
      return this.getModuleName() + "$" + this.getSimpleName()
    },
    getHref: function () {
      return this.data.href
    }, getRefModelHrefs: function () {
      return this.data.referencedHrefs
    }, getRefModelHrefsForName: function (a) {
      var b = this.getRefModelHrefs();
      return b.hasOwnProperty(a) || a in b ? b[a] : null
    }, getAllowedRolesGrant: function () {
      return this.data.allowedRolesGrant
    }, setAllowedRolesGrant: function (a) {
      this.data.allowedRolesGrant = a
    }, getAllowedRolesWrite: function () {
      return this.data.allowedRolesWrite
    }, setAllowedRolesWrite: function (a) {
      this.data.allowedRolesWrite = a
    }, getAllowedRolesRead: function () {
      return this.data.allowedRolesRead
    },
    setAllowedRolesRead: function (a) {
      this.data.allowedRolesRead = a
    }, getRstrictResourceAccess: function () {
      return this.data.restrictResourceAccess
    }, setRestrictResourceAccess: function (a) {
      this.data.restrictResourceAccess = a
    }, getForeignId: function () {
      return this.data.foreignId
    }, setForeignId: function (a) {
      this.data.foreignId = a
    }, getCreatedAt: function () {
      return new Date(this.data.createdAt)
    }, getLastModifiedAt: function () {
      return new Date(this.data.lastModifiedAt)
    }, getAppName: function () {
      return this.data.applicationName
    },
    load: function (a, c) {
      this.loadWithHref(void 0, a, c)
    }, loadAndRefHref: function (a, c) {
      this.loadWithHrefAndRefHref(void 0, a, c)
    }, loadWithHref: function (b, c, e) {
      this.isIllegalState() ? (b = "Object is in persisting or deleting process. Please try again later", this.getCurrentState() == a.ObjectState.PERSISTING ? b = new a.ApiomatRequestError(a.Status.IN_PERSISTING_PROCESS, 201, "Object is in persisting process. Please try again later") : this.getCurrentState() == a.ObjectState.DELETING && (b = new a.ApiomatRequestError(a.Status.IN_DELETING_PROCESS,
        201, "Object is in deleting process. Please try again later")), a.Datastore.negativeCallback(c, b)) : a.Datastore.getInstance().loadFromServer(b || this.getHref(), c, this, !1, void 0, void 0, void 0, e)
    }, loadWithHrefAndRefHref: function (b, c, e) {
      this.isIllegalState() ? (b = "Object is in persisting or deleting process. Please try again later", this.getCurrentState() == a.ObjectState.PERSISTING ? b = new a.ApiomatRequestError(a.Status.IN_PERSISTING_PROCESS, 201, "Object is in persisting process. Please try again later") : this.getCurrentState() ==
        a.ObjectState.DELETING && (b = new a.ApiomatRequestError(a.Status.IN_DELETING_PROCESS, 201, "Object is in deleting process. Please try again later")), a.Datastore.negativeCallback(c, b)) : a.Datastore.getInstance().loadFromServer(b || this.getHref(), c, this, !0, void 0, void 0, !1, e)
    }, save: function (b, c, e) {
      if (this.isIllegalState()) {
        var d = "Object is in persisting or deleting process. Please try again later";
        this.getCurrentState() == a.ObjectState.PERSISTING ? d = new a.ApiomatRequestError(a.Status.IN_PERSISTING_PROCESS, 201,
          "Object is in persisting process. Please try again later") : this.getCurrentState() == a.ObjectState.DELETING && (d = new a.ApiomatRequestError(a.Status.IN_DELETING_PROCESS, 201, "Object is in deleting process. Please try again later"));
        a.Datastore.negativeCallback(b, d)
      } else this.setCurrentState(a.ObjectState.PERSISTING), c = "undefined" !== typeof c && c.constructor === Boolean ? c : !0, d = {
        onOk: function (d) {
          !this.parent.getHref() && d && (this.parent.data.href = d);
          this.parent.setOffline(this.wasLocalSave || !1);
          !this.wasLocalSave &&
          c ? (this.parent.setCurrentState(a.ObjectState.PERSISTED), this.parent.load({
            onOk: function () {
              a.Datastore.positiveCallback(b)
            }, onError: function (c) {
              a.Datastore.negativeCallback(b, c)
            }, onSecondOk: function () {
              a.Datastore.secondPositiveCallback(b)
            }
          }, e)) : (this.parent.setCurrentState(a.ObjectState.LOCAL_PERSISTED), a.Datastore.positiveCallback(b))
        }, onError: function (c) {
          this.parent.setCurrentState(a.ObjectState.TRANSIENT);
          a.Datastore.negativeCallback(b, c)
        }, onSecondOk: function () {
        }, parent: this
      }, this.getHref() ? a.Datastore.getInstance().shouldSendOffline("PUT") ?
        (d.wasLocalSave = !0, a.Datastore.getInstance().sendOffline("PUT", this.getHref(), this, void 0, d)) : a.Datastore.getInstance().updateOnServer(this, d, e) : a.Datastore.getInstance().shouldSendOffline("POST") ? (d.wasLocalSave = !0, a.Datastore.getInstance().sendOffline("POST", void 0, this, void 0, d)) : a.Datastore.getInstance().postOnServer(this, d, void 0, e)
    }, deleteModel: function (b, c) {
      if (this.isIllegalState()) c = "Object is in persisting or deleting process. Please try again later", this.getCurrentState() == a.ObjectState.PERSISTING ?
        c = new a.ApiomatRequestError(a.Status.IN_PERSISTING_PROCESS, 201, "Object is in persisting process. Please try again later") : this.getCurrentState() == a.ObjectState.DELETING && (c = new a.ApiomatRequestError(a.Status.IN_DELETING_PROCESS, 201, "Object is in deleting process. Please try again later")), a.Datastore.negativeCallback(b, c); else {
        this.setCurrentState(a.ObjectState.DELETING);
        var e = {
          onOk: function (c) {
            this.parent.setCurrentState(this.finishedState);
            "undefined" != typeof c ? a.Datastore.positiveCallback(b, c) :
              a.Datastore.positiveCallback(b)
          }, onError: function (c) {
            this.parent.setCurrentState(a.ObjectState.TRANSIENT);
            a.Datastore.negativeCallback(b, c)
          }, parent: this
        };
        a.Datastore.getInstance().shouldSendOffline("DELETE") ? (e.finishedState = a.ObjectState.LOCAL_DELETED, a.Datastore.getInstance().sendOffline("DELETE", this.getHref(), this, void 0, e)) : (e.finishedState = a.ObjectState.DELETED, a.Datastore.getInstance().deleteModelOnServer(this, e, c))
      }
    }, isOffline: function () {
      return this.data.isOffline || !1
    }, setOffline: function (a) {
      this.data.isOffline =
        a
    }, getID: function () {
      return this.getHref().substring(this.getHref().lastIndexOf("/") + 1)
    }, getAllObjectStates: function () {
      return this.ObjectState
    }, isIllegalState: function () {
      var b = !1;
      a.Datastore.getInstance().getCheckObjectState() && (b = this.getCurrentState() == a.ObjectState.PERSISTING || this.getCurrentState() == a.ObjectState.DELETING);
      return b
    }, getOptionsForStaticData: function (a) {
      options = {};
      "undefined" !== typeof this.getHref() && (options.moduleName = this.getModuleName(), options.dataModelName = this.getSimpleName(),
        options.dataModelId = this.getID(), options.refName = a);
      return options
    }
  }
})("undefined" === typeof exports ? Apiomat : exports);
(function (a) {
  function b() {
    if (X) {
      var b = {name: X, segment: qa};
      a.add_event({key: "[CLY]_view", dur: g() - K, segmentation: b});
      X = null
    }
  }

  function c(b) {
    if (!a.ignore_visitor) if (a.app_key && a.device_id) {
      b.app_key = a.app_key;
      b.device_id = a.device_id;
      b.sdk_name = "javascript_native_web";
      b.sdk_version = "17.09";
      a.country_code && (b.country_code = a.country_code);
      a.city && (b.city = a.city);
      null !== a.ip_address && (b.ip_address = a.ip_address);
      b.timestamp = A();
      var c = new Date;
      b.hour = c.getHours();
      b.dow = c.getDay();
      t.length > aa && t.shift();
      t.push(b);
      D("cly_queue", t, !0)
    } else h("app_key or device_id is missing")
  }

  function e() {
    if (a.ignore_visitor) oa = !1; else {
      oa = !0;
      var b = 0;
      if ("undefined" !== typeof a.onload && 0 < a.onload.length) {
        for (b = 0; b < a.onload.length; b++) if ("function" === typeof a.onload[b]) a.onload[b]();
        a.onload = []
      }
      if ("undefined" !== typeof a.q && 0 < a.q.length) {
        var d = a.q;
        a.q = [];
        for (b = 0; b < d.length; b++) {
          var f = d[b];
          h("Processing queued call", f);
          if ("function" === typeof f) f(); else if (f.constructor === Array && 0 < f.length) if ("undefined" !== typeof a[f[0]]) a[f[0]].apply(null,
            f.slice(1)); else {
            var m = f[0].replace("userData.", "");
            "undefined" !== typeof a.userData[m] && a.userData[m].apply(null, f.slice(1))
          }
        }
      }
      n && T && fa && (b = g(), b - y > x && (a.session_duration(b - y), y = b));
      0 < J.length && (J.length <= L ? (c({events: JSON.stringify(J)}), J = []) : (b = J.splice(0, L), c({events: JSON.stringify(b)})), D("cly_event", J));
      0 < t.length && na && g() > ca && (na = !1, b = t.shift(), h("Processing request", b), u(b, function (a, b) {
        h("Request Finished", b, a);
        a && (t.unshift(b), ca = g() + da);
        D("cly_queue", t, !0);
        na = !0
      }));
      setTimeout(e, z)
    }
  }

  function d() {
    return D("cly_id") ||
      f()
  }

  function f() {
    var a = (new Date).getTime();
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (b) {
      var c = (a + 16 * Math.random()) % 16 | 0;
      a = Math.floor(a / 16);
      return ("x" == b ? c : c & 3 | 8).toString(16)
    })
  }

  function l() {
    var b = {};
    b._app_version = a.app_version;
    b._ua = navigator.userAgent;
    if (screen.width) {
      var c = screen.width ? parseInt(screen.width) : 0, d = screen.height ? parseInt(screen.height) : 0;
      if (0 !== c && 0 !== d) {
        if (navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform) && window.devicePixelRatio) c = Math.round(c *
          window.devicePixelRatio), d = Math.round(d * window.devicePixelRatio); else if (90 === Math.abs(window.orientation)) {
          var e = c;
          c = d;
          d = e
        }
        b._resolution = "" + c + "x" + d
      }
    }
    window.devicePixelRatio && (b._density = window.devicePixelRatio);
    c = navigator.language || navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage;
    "undefined" !== typeof c && (b._locale = c);
    if ("undefined" !== typeof document.referrer && document.referrer.length && (c = ka.exec(document.referrer)) && c[11] && c[11] != window.location.hostname) {
      c = !1;
      if (P && P.length) for (d =
                                0; d < P.length; d++) try {
        if ((new RegExp(P[d])).test(document.referrer)) {
          h("Ignored:", document.referrer);
          c = !0;
          break
        }
      } catch (ia) {
      }
      c || (b._store = document.referrer)
    }
    h("Got metrics", b);
    return b
  }

  function h() {
    a.debug && "undefined" !== typeof console && (arguments[1] && "object" == typeof arguments[1] && (arguments[1] = JSON.stringify(arguments[1])), console.log(Array.prototype.slice.call(arguments).join("\n")))
  }

  function g() {
    return Math.floor((new Date).getTime() / 1E3)
  }

  function A() {
    var a = (new Date).getTime();
    R >= a ? R++ : R = a;
    return R
  }

  function F(a, b, d) {
    if (a) {
      d = d || S;
      var r = "";
      "object" === typeof a ? "undefined" !== typeof a.stack ? r = a.stack : ("undefined" !== typeof a.name && (r += a.name + ":"), "undefined" !== typeof a.message && (r += a.message + "\n"), "undefined" !== typeof a.fileName && (r += "in " + a.fileName + "\n"), "undefined" !== typeof a.lineNumber && (r += "on " + a.lineNumber), "undefined" !== typeof a.columnNumber && (r += ":" + a.columnNumber)) : r = a + "";
      b = b ? !0 : !1;
      a = l();
      r = {_resolution: a._resolution, _error: r, _app_version: a._app_version, _run: g() - pa, _not_os_specific: !0};
      if (a =
          navigator.battery || navigator.webkitBattery || navigator.mozBattery || navigator.msBattery) r._bat = Math.floor(100 * a.level);
      "undefined" !== typeof navigator.onLine && (r._online = navigator.onLine ? !0 : !1);
      r._background = document.hasFocus() ? !1 : !0;
      0 < Q.length && (r._logs = Q.join("\n"));
      Q = [];
      r._nonfatal = b;
      r._view = (window.location.pathname || "") + (window.location.search || "") + (window.location.hash || "");
      "undefined" !== typeof d && (r._custom = d);
      try {
        var e = document.createElement("canvas").getContext("experimental-webgl");
        r._opengl =
          e.getParameter(e.VERSION)
      } catch (M) {
      }
      c({crash: JSON.stringify(r)})
    }
  }

  function u(b, c) {
    try {
      h("Sending XML HTTP request");
      var d = window.XMLHttpRequest ? new window.XMLHttpRequest : window.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : null,
        r = B(b), e = "GET";
      2E3 <= r.length ? e = "POST" : a.force_post && (e = "POST");
      "GET" === e ? d.open("GET", a.url + "/i?" + r, !0) : (d.open("POST", a.url + "/i", !0), d.setRequestHeader("Content-type", "application/x-www-form-urlencoded"));
      d.onreadystatechange = function () {
        4 === this.readyState && 200 <= this.status &&
        300 > this.status ? "function" === typeof c && c(!1, b) : 4 === this.readyState && (h("Failed Server XML HTTP request", this.status), "function" === typeof c && c(!0, b))
      };
      "GET" == e ? d.send() : d.send(r)
    } catch (M) {
      h("Failed XML HTTP request", M), "function" === typeof c && c(!0, b)
    }
  }

  function B(a) {
    var b = [], c;
    for (c in a) b.push(c + "\x3d" + encodeURIComponent(a[c]));
    return b.join("\x26")
  }

  function I(a) {
    return "/" == a.substr(a.length - 1) ? a.substr(0, a.length - 1) : a
  }

  function v(a, b) {
    for (var c = {}, d, r = 0; r < b.length; r++) d = b[r], "undefined" !== typeof a[d] &&
    (c[d] = a[d]);
    return c
  }

  function E(a) {
    "undefined" == typeof a.pageY && "number" == typeof a.clientX && document.documentElement && (a.pageX = a.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, a.pageY = a.clientY + document.body.scrollTop + document.documentElement.scrollTop);
    return a
  }

  function m() {
    var a = document;
    return Math.max(Math.max(a.body.scrollHeight, a.documentElement.scrollHeight), Math.max(a.body.offsetHeight, a.documentElement.offsetHeight), Math.max(a.body.clientHeight, a.documentElement.clientHeight))
  }

  function q() {
    var a = document;
    return Math.max(Math.max(a.body.scrollWidth, a.documentElement.scrollWidth), Math.max(a.body.offsetWidth, a.documentElement.offsetWidth), Math.max(a.body.clientWidth, a.documentElement.clientWidth))
  }

  function w(a) {
    D("cly_token", a)
  }

  function p(a, b) {
    var c = document.createElement("script"), d;
    c.setAttribute("type", "text/javascript");
    c.setAttribute("src", a);
    b && (c.onreadystatechange = c.onload = function () {
      d || b();
      d = !0
    });
    document.getElementsByTagName("head")[0].appendChild(c)
  }

  function G() {
    var a =
      document.getElementById("cly-loader");
    if (!a) {
      h("setting up loader");
      a = document.head || document.getElementsByTagName("head")[0];
      var b = document.createElement("style");
      b.type = "text/css";
      b.styleSheet ? b.styleSheet.cssText = "#cly-loader {height: 4px; width: 100%; position: absolute; z-index: 99999; overflow: hidden; background-color: #fff; top:0px; left:0px;}#cly-loader:before{display: block; position: absolute; content: ''; left: -200px; width: 200px; height: 4px; background-color: #2EB52B; animation: cly-loading 2s linear infinite;}@keyframes cly-loading { from {left: -200px; width: 30%;} 50% {width: 30%;} 70% {width: 70%;} 80% { left: 50%;} 95% {left: 120%;} to {left: 100%;}}" :
        b.appendChild(document.createTextNode("#cly-loader {height: 4px; width: 100%; position: absolute; z-index: 99999; overflow: hidden; background-color: #fff; top:0px; left:0px;}#cly-loader:before{display: block; position: absolute; content: ''; left: -200px; width: 200px; height: 4px; background-color: #2EB52B; animation: cly-loading 2s linear infinite;}@keyframes cly-loading { from {left: -200px; width: 30%;} 50% {width: 30%;} 70% {width: 70%;} 80% { left: 50%;} 95% {left: 120%;} to {left: 100%;}}"));
      a.appendChild(b);
      a = document.createElement("div");
      a.setAttribute("id", "cly-loader");
      document.body.appendChild(a)
    }
    a.style.display = "block"
  }

  function Z() {
    var a = document.getElementById("cly-loader");
    a && (a.style.display = "none")
  }

  var ea = !1, n = !1, z = 500, aa = 1E3, t = [], J = [], Q = [], O = {}, P = [], S = null, T = !0, y, ja = 0, X = null,
    K = 0, ba = 0, ca = 0, da = 60, Y = 20, k = 0, x = 60, L = 10, R = 0, na = !0, qa, oa = !1,
    ka = /^(((([^:\/#\?]+:)?(?:(\/\/)((?:(([^:@\/#\?]+)(?:\:([^:@\/#\?]+))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?:\:([0-9]+))?))?)?)?((\/?(?:[^\/\?#]+\/+)*)([^\?#]*)))?(\?[^#]+)?)(#.*)?/,
    la = /(CountlySiteBot|nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver|bingbot|Google Web Preview|Mediapartners-Google|AdsBot-Google|Baiduspider|Ezooms|YahooSeeker|AltaVista|AVSearch|Mercator|Scooter|InfoSeek|Ultraseek|Lycos|Wget|YandexBot|Yandex|YaDirectFetcher|SiteBot|Exabot|AhrefsBot|MJ12bot|TurnitinBot|magpie-crawler|Nutch Crawler|CMS Crawler|rogerbot|Domnutch|ssearch_bot|XoviBot|netseer|digincore|fr-crawler|wesee|AliasIO)/,
    fa = !0, pa;
  a.init = function (b) {
    if (!ea && (pa = g(), ea =
        !0, t = D("cly_queue") || [], O = {}, J = D("cly_event") || [], b = b || {}, z = b.interval || a.interval || z, aa = b.queue_size || a.queue_size || aa, da = b.fail_timeout || a.fail_timeout || da, Y = b.inactivity_time || a.inactivity_time || Y, x = b.session_update || a.session_update || x, L = b.max_events || a.max_events || L, a.ignore_prefetch = b.ignore_prefetch || a.ignore_prefetch || !0, a.debug = b.debug || a.debug || !1, a.app_key = b.app_key || a.app_key || null, a.device_id = b.device_id || a.device_id || d(), a.url = I(b.url || a.url || ""), a.app_version = b.app_version || a.app_version ||
        "0.0", a.country_code = b.country_code || a.country_code || null, a.city = b.city || a.city || null, a.ip_address = b.ip_address || a.ip_address || null, a.ignore_bots = b.ignore_bots || a.ignore_bots || !0, a.force_post = b.force_post || a.force_post || !1, a.q = a.q || [], a.onload = a.onload || [], a.ignore_visitor = b.ignore_visitor || a.ignore_visitor || !1, b.ignore_referrers && b.ignore_referrers.constructor === Array ? P = b.ignore_referrers : a.ignore_referrers && a.ignore_referrers.constructor === Array && (P = a.ignore_referrers), "" === a.url && (h("Please provide server URL"),
        a.ignore_visitor = !0), D("cly_ignore") && (a.ignore_visitor = !0), a.ignore_prefetch && "undefined" !== typeof document.visibilityState && "prerender" === document.visibilityState && (a.ignore_visitor = !0), a.ignore_bots && la.test(navigator.userAgent) && (a.ignore_visitor = !0), window.name && 0 === window.name.indexOf("cly:") ? a.passed_data = JSON.parse(window.name.replace("cly:", "")) : location.hash && 0 === location.hash.indexOf("#cly:") && (a.passed_data = JSON.parse(location.hash.replace("#cly:", ""))), a.passed_data && a.passed_data.token &&
      a.passed_data.purpose && (a.passed_data.token != D("cly_old_token") && (w(a.passed_data.token), D("cly_old_token", a.passed_data.token)), "heatmap" === a.passed_data.purpose && (a.ignore_visitor = !0, G(), p(a.url + "/views/heatmap.js", Z))), !a.ignore_visitor && (h("Countly initialized"), a.onload.constructor !== Array && (a.onload = []), a.q.constructor !== Array && (a.q = []), e(), D("cly_id", a.device_id), location.search))) {
      b = location.search.substring(1).split("\x26");
      for (var c = 0; c < b.length; c++) {
        var r = b[c].split("\x3d");
        "cly_id" == r[0] ?
          D("cly_cmp_id", r[1]) : "cly_uid" == r[0] && D("cly_cmp_uid", r[1])
      }
    }
  };
  a.begin_session = function (a) {
    n || (h("Session started"), y = g(), n = !0, T = a ? !1 : !0, a = {begin_session: 1}, a.metrics = JSON.stringify(l()), c(a))
  };
  a.session_duration = function (a) {
    n && (h("Session extended", a), c({session_duration: a}))
  };
  a.end_session = function (a) {
    n && (a = a || g() - y, h("Ending session"), b(), n = !1, c({end_session: 1, session_duration: a}))
  };
  a.change_id = function (b, d) {
    if (a.device_id != b) {
      d || (a.end_session(), O = {});
      var e = a.device_id;
      a.device_id = b;
      D("cly_id",
        a.device_id);
      h("Changing id");
      d ? c({old_device_id: e}) : a.begin_session(!T)
    }
  };
  a.add_event = function (a) {
    if (a.key) {
      a.count || (a.count = 1);
      var b = v(a, ["key", "count", "sum", "dur", "segmentation"]);
      b.timestamp = A();
      var c = new Date;
      b.hour = c.getHours();
      b.dow = c.getDay();
      J.push(b);
      D("cly_event", J);
      h("Adding event: ", a)
    } else h("Event must have key property")
  };
  a.start_event = function (a) {
    O[a] ? h("Timed event with key " + a + " already started") : O[a] = g()
  };
  a.end_event = function (b) {
    "string" == typeof b && (b = {key: b});
    b.key ? O[b.key] ?
      (b.dur = g() - O[b.key], a.add_event(b), delete O[b.key]) : h("Timed event with key " + b.key + " was not started") : h("Event must have key property")
  };
  a.user_details = function (a) {
    h("Adding userdetails: ", a);
    c({user_details: JSON.stringify(v(a, "name username email organization phone picture gender byear custom".split(" ")))})
  };
  a.report_conversion = function (a, b) {
    a = a || D("cly_cmp_id") || "cly_organic";
    b = b || D("cly_cmp_uid");
    a && b ? c({campaign_id: a, campaign_user: b}) : a ? c({campaign_id: a}) : h("No campaign data found")
  };
  var V =
    {}, W = function (a, b, c) {
    V[a] || (V[a] = {});
    "$push" == c || "$pull" == c || "$addToSet" == c ? (V[a][c] || (V[a][c] = []), V[a][c].push(b)) : V[a][c] = b
  };
  a.userData = {
    set: function (a, b) {
      V[a] = b
    }, set_once: function (a, b) {
      W(a, 1, "$setOnce")
    }, increment: function (a) {
      W(a, 1, "$inc")
    }, increment_by: function (a, b) {
      W(a, b, "$inc")
    }, multiply: function (a, b) {
      W(a, b, "$mul")
    }, max: function (a, b) {
      W(a, b, "$max")
    }, min: function (a, b) {
      W(a, b, "$min")
    }, push: function (a, b) {
      W(a, b, "$push")
    }, push_unique: function (a, b) {
      W(a, b, "$addToSet")
    }, pull: function (a, b) {
      W(a, b, "$pull")
    },
    save: function () {
      c({user_details: JSON.stringify({custom: V})});
      V = {}
    }
  };
  a.track_errors = function (a) {
    S = a;
    window.onerror = function (a, b, c, d, e) {
      if ("undefined" !== typeof e) F(e, !1); else {
        d = d || window.event && window.event.errorCharacter;
        var f = "";
        "undefined" !== typeof a && (f += a + "\n");
        "undefined" !== typeof b && (f += "at " + b);
        "undefined" !== typeof c && (f += ":" + c);
        "undefined" !== typeof d && (f += ":" + d);
        f += "\n";
        try {
          for (var h = [], r = arguments.callee.caller; r;) h.push(r.name), r = r.caller;
          f += h.join("\n")
        } catch (sa) {
        }
        F(f, !1)
      }
    }
  };
  a.log_error =
    function (a, b) {
      F(a, !0, b)
    };
  a.add_log = function (a) {
    Q.push(a)
  };
  a.stop_time = function () {
    fa && (fa = !1, ja = g() - y, ba = g() - K)
  };
  a.start_time = function () {
    fa || (fa = !0, y = g() - ja, K = g() - ba, ba = 0)
  };
  a.track_sessions = function () {
    function b() {
      document[d] ? a.stop_time() : a.start_time()
    }

    function c() {
      k >= Y && a.start_time();
      k = 0
    }

    a.begin_session();
    a.start_time();
    H(window, "beforeunload", function () {
      a.end_session()
    });
    H(window, "unload", function () {
      a.end_session()
    });
    var d = "hidden";
    d in document ? document.addEventListener("visibilitychange", b) :
      (d = "mozHidden") in document ? document.addEventListener("mozvisibilitychange", b) : (d = "webkitHidden") in document ? document.addEventListener("webkitvisibilitychange", b) : (d = "msHidden") in document ? document.addEventListener("msvisibilitychange", b) : "onfocusin" in document ? (H(window, "focusin", function () {
        a.start_time()
      }), H(window, "focusout", function () {
        a.stop_time()
      })) : (H(window, "focus", function () {
        a.start_time()
      }), H(window, "blur", function () {
        a.stop_time()
      }), H(window, "pageshow", function () {
        a.start_time()
      }), H(window,
        "pagehide", function () {
          a.stop_time()
        }));
    H(window, "mousemove", c);
    H(window, "click", c);
    H(window, "keydown", c);
    H(window, "scroll", c);
    setInterval(function () {
      k++;
      k >= Y && a.stop_time()
    }, 6E4)
  };
  a.track_pageview = function (c, d) {
    b();
    c && c.constructor === Array && (d = c, c = null);
    c = c || window.location.pathname;
    if (d && d.length) for (var e = 0; e < d.length; e++) try {
      if ((new RegExp(d[e])).test(c)) {
        h("Ignored:", c);
        return
      }
    } catch (N) {
    }
    X = c;
    K = g();
    c = {name: c, visit: 1, domain: window.location.hostname};
    "undefined" !== typeof document.referrer && document.referrer.length &&
    (d = ka.exec(document.referrer)) && d[11] && d[11] != window.location.hostname && (c.start = 1);
    a.add_event({key: "[CLY]_view", segmentation: c})
  };
  a.track_view = function (b, c) {
    a.track_pageview(b, c)
  };
  a.track_clicks = function (b) {
    b = b || document;
    var c = !0;
    H(b, "click", function (b) {
      if (c) {
        c = !1;
        E(b);
        if ("undefined" !== typeof b.pageX && "undefined" !== typeof b.pageY) {
          var d = m(), e = q();
          a.add_event({
            key: "[CLY]_action",
            segmentation: {
              type: "click",
              x: b.pageX,
              y: b.pageY,
              width: e,
              height: d,
              domain: window.location.hostname,
              view: window.location.pathname
            }
          })
        }
        setTimeout(function () {
          c =
            !0
        }, 1E3)
      }
    })
  };
  a.track_links = function (b) {
    b = b || document;
    H(b, "click", function (b) {
      var c = ma(b).closest("a");
      c && (E(b), a.add_event({
        key: "linkClick",
        segmentation: {
          href: c.href,
          text: c.innerText,
          id: c.id,
          x: b.pageX,
          y: b.pageY,
          view: window.location.pathname
        }
      }), "undefined" === typeof c.href || "_blank" === c.target || b.metaKey || b.altKey || b.ctrlKey || b.shiftKey || 0 !== c.href.replace(window.location.href.split("#")[0], "").indexOf("#") && a.end_session())
    })
  };
  a.track_forms = function (b) {
    function c(a) {
      return a.name || a.id || a.type || a.nodeName
    }

    b = b || document;
    H(b, "submit", function (b) {
      b = ma(b);
      var d = {id: b.id, name: b.name, action: b.action, method: b.method, view: window.location.pathname}, e;
      if ("undefined" !== typeof b.elements) for (var f = 0; f < b.elements.length; f++) if ((e = b.elements[f]) && "password" != e.type) if ("undefined" === typeof d["input:" + c(e)] && (d["input:" + c(e)] = []), "select" == e.nodeName.toLowerCase()) if ("undefined" !== typeof e.multiple) {
        var h = [];
        if ("undefined" !== typeof e.options) for (var g = 0; g < e.options.length; g++) e.options[g].selected && h.push(e.options[g].value);
        d["input:" + c(e)].push(h.join(", "))
      } else d["input:" + c(e)].push(e.options[e.selectedIndex].value); else "input" == e.nodeName.toLowerCase() ? "undefined" !== typeof e.type ? "checkbox" == e.type.toLowerCase() || "radio" == e.type.toLowerCase() ? e.checked && d["input:" + c(e)].push(e.value) : d["input:" + c(e)].push(e.value) : d["input:" + c(e)].push(e.value) : "textarea" == e.nodeName.toLowerCase() ? d["input:" + c(e)].push(e.value) : "undefined" !== typeof e.value && d["input:" + c(e)].push(e.value);
      for (var m in d) "undefined" != typeof d[m].join &&
      (d[m] = d[m].join(", "));
      a.add_event({key: "formSubmit", segmentation: d});
      a.end_session()
    })
  };
  a.collect_from_forms = function (b, c) {
    b = b || document;
    H(b, "submit", function (d) {
      d = ma(d);
      var e = {}, f = !1, g;
      if ("undefined" !== typeof d.elements) {
        var m = {}, l = b.getElementsByTagName("LABEL"), p;
        for (p = 0; p < l.length; p++) l[p].htmlFor && "" !== l[p].htmlFor && (m[l[p].htmlFor] = l[p].innerText || l[p].textContent || l[p].innerHTML);
        for (p = 0; p < d.elements.length; p++) if ((g = d.elements[p]) && "password" != g.type && -1 == g.className.indexOf("cly_user_ignore")) {
          var q =
            "";
          if ("select" == g.nodeName.toLowerCase()) if ("undefined" !== typeof g.multiple) {
            q = [];
            if ("undefined" !== typeof g.options) for (l = 0; l < g.options.length; l++) g.options[l].selected && q.push(g.options[l].value);
            q = q.join(", ")
          } else q = g.options[g.selectedIndex].value; else "input" == g.nodeName.toLowerCase() ? "undefined" !== typeof g.type ? "checkbox" == g.type.toLowerCase() || "radio" == g.type.toLowerCase() ? g.checked && (q = g.value) : q = g.value : q = g.value : "textarea" == g.nodeName.toLowerCase() ? q = g.value : "undefined" !== typeof g.value &&
            (q = g.value);
          if (g.className && -1 != g.className.indexOf("cly_user_")) for (g = g.className.split(" "), l = 0; l < g.length; l++) {
            if (0 === g[l].indexOf("cly_user_")) {
              e[g[l].replace("cly_user_", "")] = q;
              f = !0;
              break
            }
          } else if (g.type && "email" == g.type.toLowerCase() || g.name && -1 != g.name.toLowerCase().indexOf("email") || g.id && -1 != g.id.toLowerCase().indexOf("email") || g.id && m[g.id] && -1 != m[g.id].toLowerCase().indexOf("email") || /[^@\s]+@[^@\s]+\.[^@\s]+/.test(q)) e.email || (e.email = q), f = !0; else if (g.name && -1 != g.name.toLowerCase().indexOf("username") ||
            g.id && -1 != g.id.toLowerCase().indexOf("username") || g.id && m[g.id] && -1 != m[g.id].toLowerCase().indexOf("username")) e.username || (e.username = q), f = !0; else if (g.name && (-1 != g.name.toLowerCase().indexOf("tel") || -1 != g.name.toLowerCase().indexOf("phone") || -1 != g.name.toLowerCase().indexOf("number")) || g.id && (-1 != g.id.toLowerCase().indexOf("tel") || -1 != g.id.toLowerCase().indexOf("phone") || -1 != g.id.toLowerCase().indexOf("number")) || g.id && m[g.id] && (-1 != m[g.id].toLowerCase().indexOf("tel") || -1 != m[g.id].toLowerCase().indexOf("phone") ||
              -1 != m[g.id].toLowerCase().indexOf("number"))) e.phone || (e.phone = q), f = !0; else if (g.name && (-1 != g.name.toLowerCase().indexOf("org") || -1 != g.name.toLowerCase().indexOf("company")) || g.id && (-1 != g.id.toLowerCase().indexOf("org") || -1 != g.id.toLowerCase().indexOf("company")) || g.id && m[g.id] && (-1 != m[g.id].toLowerCase().indexOf("org") || -1 != m[g.id].toLowerCase().indexOf("company"))) e.organization || (e.organization = q), f = !0; else if (g.name && -1 != g.name.toLowerCase().indexOf("name") || g.id && -1 != g.id.toLowerCase().indexOf("name") ||
            g.id && m[g.id] && -1 != m[g.id].toLowerCase().indexOf("name")) e.name || (e.name = ""), e.name += q + " ", f = !0
        }
      }
      f && (h("Gathered user data", e), c ? a.user_details({custom: e}) : a.user_details(e));
      a.end_session()
    })
  };
  a.collect_from_facebook = function (b) {
    FB && FB.api && FB.api("/me", function (c) {
      var d = {};
      c.name && (d.name = c.name);
      c.email && (d.email = c.email);
      "male" == c.gender ? d.gender = "M" : "female" == c.gender && (d.gender = "F");
      if (c.birthday) {
        var e = c.birthday.split("/").pop();
        e && 4 == e.length && (d.byear = e)
      }
      c.work && c.work[0] && c.work[0].employer &&
      c.work[0].employer.name && (d.organization = c.work[0].employer.name);
      if (b) {
        d.custom = {};
        for (var f in b) {
          e = b[f].split(".");
          for (var g = c, h = 0; h < e.length && (g = g[e[h]], "undefined" !== typeof g); h++) ;
          "undefined" !== typeof g && (d.custom[f] = g)
        }
      }
      a.user_details(d)
    })
  };
  a.opt_out = function () {
    a.ignore_visitor = !0;
    D("cly_ignore", !0)
  };
  a.opt_in = function () {
    D("cly_ignore", !1);
    a.ignore_visitor = !1;
    a.ignore_prefetch && "undefined" !== typeof document.visibilityState && "prerender" === document.visibilityState && (a.ignore_visitor = !0);
    a.ignore_bots &&
    la.test(navigator.userAgent) && (a.ignore_visitor = !0);
    a.ignore_visitor || oa || e()
  };
  Element.prototype.closest || (Element.prototype.closest = function (a) {
    var b = this;
    for (a = a.toUpperCase(); b;) {
      if (b.nodeName.toUpperCase() == a) return b;
      b = b.parentElement
    }
  });
  var H = function (a, b, c) {
    "undefined" !== typeof a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent("on" + b, c)
  }, ma = function (a) {
    return a ? "undefined" !== typeof a.target ? a.target : a.srcElement : window.event.srcElement
  }, D = function (a, b, c) {
    function d(a, b, c) {
      var d = new Date;
      d.setTime(d.getTime() + 864E5 * c);
      c = "; expires\x3d" + d.toGMTString();
      document.cookie = a + "\x3d" + b + c + "; path\x3d/"
    }

    function e(a) {
      a += "\x3d";
      for (var b = document.cookie.split(";"), c = 0, d = b.length; c < d; c++) {
        for (var e = b[c]; " " === e.charAt(0);) e = e.substring(1, e.length);
        if (0 === e.indexOf(a)) return e.substring(a.length, e.length)
      }
      return null
    }

    c = c || !1;
    var f = !1, g;
    f = !0;
    try {
      "undefined" !== typeof localStorage && localStorage.setItem("testLocal", !0)
    } catch (ha) {
      f = !1
    }
    "undefined" !== typeof b && null !== b && ("object" === typeof b && (b = JSON.stringify(b)),
      f ? localStorage.setItem(a, b) : c || d(a, b, 30));
    if ("undefined" === typeof b) {
      f ? g = localStorage.getItem(a) : c || (g = e(a));
      try {
        g = JSON.parse(g)
      } catch (ha) {
      }
      return g
    }
    null === b && (f ? localStorage.removeItem(a) : c || d(a, "", -1))
  };
  a._internals = {
    store: D,
    getDocWidth: q,
    getDocHeight: m,
    get_page_coord: E,
    get_event_target: ma,
    add_event: H,
    getProperties: v,
    stripTrailingSlash: I,
    prepareParams: B,
    sendXmlHttpRequest: u,
    recordError: F,
    getMsTimestamp: A,
    getTimestamp: g,
    log: h,
    getMetrics: l,
    generateUUID: f,
    getId: d,
    heartBeat: e,
    toRequestQueue: c,
    reportViewDuration: b,
    loadJS: p,
    getLastView: function () {
      return X
    },
    setToken: w,
    getToken: function () {
      var a = D("cly_token");
      D("cly_token", null);
      return a
    },
    showLoader: G,
    hideLoader: Z
  }
})(window.Countly = window.Countly || {});
"undefined" !== typeof goog && (Apiomat.AOMNetworkHandler = {});
"undefined" === typeof exports && (Apiomat = Apiomat || {});
(function (a) {
  a.AOMNetworkHandler = function () {
    return {
      AOMNETWORKEVENT: "AomNetworkEvent", isChecking: !1, checkForConnection: function () {
        a.AOMNetworkHandler.isChecking = !0;
        !1 === a.AOMNetworkHandler.isConnected() ? setTimeout(a.AOMNetworkHandler.checkForConnection, 150) : (console.log("Connection is back..."), a.AOMNetworkHandler.isChecking = !1, a.AOMHelper.sendEvent(a.AOMNetworkHandler.AOMNETWORKEVENT, {isConnected: !0}))
      }, isConnectedReact: function () {
        return Promise.resolve().then(function () {
          try {
            return NetInfo.isConnected.fetch()
          } catch (b) {
            return !1
          }
        }).then(function () {
        })
      },
      isConnected: function () {
        var b = a.Datastore.getIsReact() ? a.AOMNetworkHandler.isConnectedReact() : a.AOMHelper.isTitaniumApp() ? Titanium.Network.online : navigator.onLine;
        !0 === a.forceOffline && (b = !a.forceOffline);
        !1 === b && !1 === a.AOMNetworkHandler.isChecking && a.AOMNetworkHandler.checkForConnection();
        return b
      }
    }
  }()
})("undefined" === typeof exports ? Apiomat : exports);
"undefined" !== typeof goog && (Apiomat.AOMFileHandler = {});
"undefined" === typeof exports && (Apiomat = Apiomat || {});
(function (a) {
  a.AOMFileHandler = function () {
    var a = {}, c = void 0;
    if ("undefined" !== typeof window && window.File && window.FileReader && window.FileList && window.Blob) {
      var e = function (a) {
        console.log(a.target.error.code)
      }, d = function (a) {
        c = a
      }, f = window.PERSISTENT;
      f || "undefined" === typeof LocalFileSystem || (f = LocalFileSystem.PERSISTENT);
      f && "undefined" !== typeof window && window.requestFileSystem && window.requestFileSystem(f, 0, d, e)
    }
    this.getAppDirectory = function (a, b) {
      "undefined" !== typeof c ? c.root.getDirectory("apiomatpersists",
        {create: !0}, function (b) {
          a && a(b)
        }, function (a) {
          console.error("Can't get directory handle!!");
          b && b(a)
        }) : a && a(void 0)
    };
    this.getFileHandler = function (a, b, c, d) {
      this.getAppDirectory(function (d) {
        "undefined" !== typeof d ? d.getFile(a, {}, function (a) {
          b && b(a)
        }, c) : c()
      }, c)
    };
    this.getSizeOfAppDir = function (a, b) {
      if ("undefined" !== typeof c) {
        var d = this, e = function (a, c, f, g, h, m) {
          f >= a.length ? h(g) : d.getFileHandler(c, function (b) {
              b.file(function (b) {
                g += b.size;
                b = void 0;
                "undefined" !== typeof a[++f] && (b = a[f].name);
                e(a, b, f, g, h, m)
              }, m)
            },
            function (c) {
              c.code !== FileError.NOT_FOUND_ERR && b ? m(c) : ("undefined" !== typeof a[++f] && (nextName = a[f].name), e(a, _nextName, f, g, h, m))
            })
        }, f = function (c) {
          0 < c.length ? e(c, c[0].name, 0, 0, function (b) {
            a && a(b)
          }, b) : a && a(0)
        };
        this.getAppDirectory(function (a) {
          a.createReader().readEntries(f, b)
        }, b)
      } else a && a(0)
    };
    this.createFileName = function (a) {
      return a + "_" + (new Date).getTime()
    };
    this.removeFile = function (b, d, e) {
      "undefined" !== typeof c ? this.getFileHandler(b, function (a) {
        a.remove(function () {
          d && d()
        }, e)
      }, function (a) {
        a.code !==
        FileError.NOT_FOUND_ERR && e ? e(a) : d && d()
      }) : (delete a[b], d && d())
    };
    this.readFile = function (b, d, e) {
      "undefined" !== typeof c ? this.getFileHandler(b, function (a) {
        a.file(function (a) {
          var b = new FileReader;
          b.onloadend = function (a) {
            d && d(a.target.result)
          };
          b.readAsText(a)
        })
      }, function (a) {
        a.code !== FileError.NOT_FOUND_ERR && e ? e(a) : d && d(void 0)
      }) : d && d(a[b])
    };
    this.writeFile = function (b, d, e, f) {
      "undefined" !== typeof c ? this.getFileHandler(b, function (a) {
          a.createWriter(function (a) {
            a.onwriteend = function (a) {
              e && e()
            };
            a.write(d)
          }, f)
        },
        f, {create: !0, exclusive: !1}) : (a[b] = d, e && e())
    }
  };
  a.AOMFileHandler.HREFMAP_FILENAME = "hrefMap";
  a.AOMFileHandler.USEDLOCALIDS_FILENAME = "usedLocalIDs";
  a.AOMFileHandler.TASKLIST_FILENAME = "taskList";
  a.AOMFileHandler.prototype = {}
})("undefined" === typeof exports ? Apiomat : exports);
"undefined" !== typeof goog && (Apiomat.AOMFileHandlerTi = {});
"undefined" === typeof exports && (Apiomat = Apiomat || {});
(function (a) {
  a.AOMFileHandlerTi = function () {
    var a = function () {
      var a = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, "apiomatpersists");
      !1 === a.exists() && a.createDirectory();
      return a
    };
    this.getAppDirectory = function (b, e) {
      var c = a();
      "undefined" === typeof c && e ? e() : b && b(c.nativePath)
    };
    this.getSizeOfAppDir = function (b, e) {
      var c = a();
      "undefined" === typeof c && e ? e() : b && b(c.size)
    }
  };
  a.AOMHelper.isTitaniumApp() && (a.AOMFileHandlerTi.prototype = new a.AOMFileHandler, a.AOMFileHandlerTi.prototype.constructor = a.AOMFileHandlerTi,
    a.AOMFileHandlerTi.prototype.removeFile = function (a, c, e) {
      var b = !1;
      this.getAppDirectory(function (d) {
        d = Ti.Filesystem.getFile(d, a);
        d.exists() && d.writeable && (b = d.deleteFile());
        b ? c && c() : e && e()
      }, e)
    }, a.AOMFileHandlerTi.prototype.readFile = function (a, c, e) {
    this.getAppDirectory(function (b) {
      var d = void 0;
      b = Ti.Filesystem.getFile(b, a);
      b.exists() && (d = b.read());
      d && "undefined" !== typeof d ? c && c(d.text) : c && c(void 0)
    }, e)
  }, a.AOMFileHandlerTi.prototype.writeFile = function (a, c, e, d) {
    this.getAppDirectory(function (b) {
      Ti.Filesystem.getFile(b,
        a).write(c) ? e && e() : d && d()
    }, d)
  })
})("undefined" === typeof exports ? Apiomat : exports);
"undefined" !== typeof goog && (Apiomat.AOMOfflineInfo = {}, Apiomat.AOMOfflineHandler = {});
"undefined" === typeof exports && (Apiomat = Apiomat || {});
(function (a) {
  a.AOMOfflineInfo = function (a, c, e, d, f, l, h) {
    this.httpMethod = a;
    this.fileKey = e;
    this.timestamp = d;
    this.url = c;
    this.clazz = d;
    this.localId = f;
    this.refName = l;
    this.isStaticData = h
  };
  a.AOMOfflineHandler = function () {
    a.AOMOfflineHandler.AOMTASKEVENT = "AomTaskEvent";
    var b = [], c = {}, e = {}, d = [], f = new a.AOMFileHandler;
    a.AOMHelper.isTitaniumApp() && (f = new a.AOMFileHandlerTi);
    a.AOMHelper.addEventListener(a.AOMNetworkHandler.AOMNETWORKEVENT, function (a) {
      h()
    });
    var l = function (a, b, c, d) {
      f.readFile(a, function (a) {
        a && JSON.parse(a);
        c && c()
      }, function (b) {
        console.error("Error on restoring content of " + a + " --\x3e " + b.code);
        d && d(b)
      })
    }, h = function () {
      if (1 > b.length) c = {}, I(); else if (!1 !== a.AOMNetworkHandler.isConnected()) {
        var e = b.shift();
        delete d[e.localId];
        v();
        f.readFile(e.fileKey, function (a) {
          f.removeFile(e.fileKey);
          if (a && !1 === e.isStaticData) {
            var b = new e.clazz;
            b.fromJson(a);
            a = b
          }
          (a || e.isStaticData && e.url) && A(e, a, e.isStaticData, !0)
        }, function (a) {
          console.error("Error occured on reading file " + a)
        })
      }
    }, g = {
      extCallback: void 0, onOk: function (a) {
        if (g.extCallback &&
          g.extCallback.onOk) g.extCallback.onOk(a);
        h()
      }, onError: function (a) {
        if (g.extCallback && g.extCallback.onError) g.extCallback.onError(a);
        h()
      }
    }, A = function (b, d, f) {
      var h = b.url;
      var m = void 0 != b.refName && 0 < b.refName.length;
      switch (b.httpMethod) {
        case "POST":
          if (m && !1 === f) {
            h = h.substring(h.lastIndexOf("/") + 1);
            u(d);
            var l = h.substring(h.lastIndexOf("/") + 1);
            void 0 !== c[l] && (h = l);
            h = c[h] + "/" + b.refName
          } else if (f) {
            l = h.lastIndexOf("/data/images/");
            var q = h.lastIndexOf("/data/files/");
            -1 < l + q && (h = h.split("/"), l = h.length, temp_url =
              c[h[l - 2]], void 0 !== temp_url && (h[l - 2] = temp_url.substring(temp_url.lastIndexOf("/") + 1, temp_url.length)), h = h.join("/"))
          }
          g.extCallback = {
            onOk: function (d) {
              if (null != d && 0 < d.length) {
                c[b.localId] = d;
                I();
                if (!1 === f) {
                  var g = b.localId;
                  (model = e[g]) && model.isOffline() && (delete e[g], model.data.href = d, model.setOffline(!1))
                }
                a.AOMHelper.sendEvent(a.AOMOfflineHandler.AOMTASKEVENT, {wasSuccess: !0, info: b, href: d})
              }
            }, onError: function (c) {
              a.AOMHelper.sendEvent(a.AOMOfflineHandler.AOMTASKEVENT, {wasSuccess: !1, reason: c, info: b, href: n})
            }
          };
          if (h) if (f) a.Datastore.getInstance().postStaticDataOnServerWithHref(d, h, g, !0); else {
            if (m && void 0 !== d && void 0 !== d.data && void 0 !== d.data.id && void 0 !== c[d.data.id]) {
              var n = c[d.data.id];
              void 0 !== n && (d.data.id = n.substring(n.lastIndexOf("/") + 1), d.data.href = n)
            }
            a.Datastore.getInstance().postOnServer(d, g, h, !0)
          } else a.AOMHelper.sendEvent(a.AOMOfflineHandler.AOMTASKEVENT, {
            wasSuccess: !1,
            reason: error,
            info: b,
            href: n
          });
          break;
        case "PUT":
          n = u(d);
          void 0 !== n && 0 < n.length ? (g.extCallback = {
            onOk: function () {
              a.AOMHelper.sendEvent(a.AOMOfflineHandler.AOMTASKEVENT,
                {wasSuccess: !0, info: b})
            }, onError: function (c) {
              a.AOMHelper.sendEvent(a.AOMOfflineHandler.AOMTASKEVENT, {wasSuccess: !1, reason: c, info: b})
            }
          }, a.Datastore.getInstance().updateOnServer(d, g, !0)) : a.AOMHelper.sendEvent(a.AOMOfflineHandler.AOMTASKEVENT, {
            wasSuccess: !1,
            reason: a.Status.HREF_NOT_FOUND,
            info: b
          });
          break;
        case "DELETE":
          n = void 0, n = f ? B(h) : u(d), m && (h = h.substring(h.lastIndexOf("/") + 1), n = c[h] + "/" + b.refName + "/" + n.substring(n.lastIndexOf("/") + 1)), n && 0 < n.length ? (g.extCallback = {
            onOk: function () {
              a.AOMHelper.sendEvent(a.AOMOfflineHandler.AOMTASKEVENT,
                {wasSuccess: !0, info: b})
            }, onError: function (c) {
              a.AOMHelper.sendEvent(a.AOMOfflineHandler.AOMTASKEVENT, {wasSuccess: !1, reason: c, info: b})
            }
          }, m || f ? a.Datastore.getInstance().deleteOnServer(n, g, !0) : a.Datastore.getInstance().deleteModelOnServer(d, g, !0)) : a.AOMHelper.sendEvent(a.AOMOfflineHandler.AOMTASKEVENT, {
            wasSuccess: !1,
            reason: a.Status.HREF_NOT_FOUND,
            info: b
          })
      }
    }, F = function () {
      for (var b = 0, c = Math.floor(1E6 * Math.random() + 1); d[c] && 5 > b;) b++, c = Math.floor(1E6 * Math.random() + 1);
      if (4 <= b) throw new a.ApiomatRequestError(a.Status.TOO_MANY_LOCALIDS);
      return c
    }, u = function (a) {
      var b = a.getHref();
      if (a.isOffline()) {
        var d = a.getID();
        void 0 !== d && 0 < d.length && (d = c[d]) && (b = d, a.data.href = b);
        for (var e in a.data) e.endsWith("URL") && (d = B(a.data[e])) && (a.data[e] = d)
      }
      return b
    }, B = function (a) {
      var b = a.substring(a.lastIndexOf("/") + 1);
      return void 0 !== c[b] ? c[b] : a
    }, I = function () {
      return f.writeFile(a.AOMFileHandler.HREFMAP_FILENAME, JSON.stringify(c))
    }, v = function () {
      f.writeFile(a.AOMFileHandler.USEDLOCALIDS_FILENAME, JSON.stringify(d));
      f.writeFile(a.AOMFileHandler.TASKLIST_FILENAME,
        JSON.stringify(b))
    }, E = function (b, c, d, e) {
      var g = void 0;
      f.getSizeOfAppDir(function (h) {
        h && h >= 1024 * this.cacheSizeInMB ? (console.error("Max cache size is reached. Can't add to cache!"), e && e(new a.ApiomatRequestError(a.Status.MAX_CACHE_SIZE_REACHED))) : (g = f.createFileName(c), f.writeFile(g, b || "", function () {
          d && d(g)
        }, function (b) {
          console.error("Can't persist to cache: " + b.code);
          e && e(new a.ApiomatRequestError(a.Status.CANT_WRITE_IN_CACHE))
        }))
      })
    };
    this.cacheSizeInMB = 4;
    this.addTask = function (c, d, f, g, h, l) {
      var m = d, n =
        !1 === f instanceof a.AbstractClientDataModel, q = f;
      !1 === n && (q = f.toJson());
      var p = void 0;
      if ("POST" === c) {
        try {
          p = F()
        } catch (t) {
          throw t;
        }
        -1 === m.indexOf("/", m.length - 1) && (m += "/");
        m += (g && !1 === n ? g + "/" : "") + p;
        !1 === n && (e[p] = f)
      }
      E(q, p || c, function (e) {
        e && (e = new a.AOMOfflineInfo(c, d, e, f ? f.constructor : void 0, p, g, n), b.push(e), v());
        h && h(m)
      }, function (a) {
        console.error("Got error on adding task to offline queue: " + a);
        l && l(a)
      })
    };
    this.getTasks = function () {
      return b
    };
    this.init = function (e, f) {
      var g = function () {
        l(a.AOMFileHandler.USEDLOCALIDS_FILENAME,
          d, function () {
            h();
            "undefined" !== typeof e && e()
          }, function (a) {
            "undefined" !== typeof f && f(a)
          })
      }, m = function () {
        l(a.AOMFileHandler.HREFMAP_FILENAME, c, function () {
          g()
        }, function (a) {
          g()
        })
      };
      l(a.AOMFileHandler.TASKLIST_FILENAME, b, function () {
        m()
      }, function (a) {
        m()
      })
    };
    this.isConnected = function () {
      return a.AOMNetworkHandler.isConnected()
    };
    this.clearCache = function () {
      c = {};
      I();
      for (var a = 0, d = b.length; a < d; a++) {
        var g = b[a];
        g.fileKey && f.removeFile(g.fileKey)
      }
      e = {};
      b = [];
      v()
    }
  }
})("undefined" === typeof exports ? Apiomat : exports);
"undefined" !== typeof goog && (Apiomat.Role = {});
"undefined" === typeof exports && (Apiomat = Apiomat || {});
(function (a) {
  a.Role = function () {
    this.init()
  };
  a.Role.getRoles = function (b, c, e) {
    a.Datastore.getInstance().loadListFromServerWithClass(a.Role, b, c, !1, e)
  };
  a.Role.getRolesAndRefHref = function (b, c, e, d) {
    a.Datastore.getInstance().loadListFromServerWithClass(a.Role, b, c, e, d)
  };
  a.Role.getRolesCount = function (b, c, e) {
    a.Datastore.getInstance().loadCountFromServer(a.Role, void 0, b, c, e)
  };
  a.Role.deleteAllFromStorage = function (b, c) {
    a.Datastore.getInstance().deleteCollectionFromStorage(!1, a.Role, b, c)
  };
  a.Role.deleteAllFromStorageWithReferencedHrefs =
    function (b, c) {
      a.Datastore.getInstance().deleteCollectionFromStorage(!0, a.Role, b, c)
    };
  a.Role.prototype = new a.AbstractClientDataModel;
  a.Role.prototype.constructor = a.Role;
  a.Role.prototype.init = function () {
    this.data = {}
  };
  a.Role.prototype.getSimpleName = function () {
    return "Role"
  };
  a.Role.prototype.getModuleName = function () {
    return "Basics"
  };
  a.Role.prototype.getMembers = function () {
    return this.data.members
  };
  a.Role.prototype.setMembers = function (a) {
    this.data.members = a
  };
  a.Role.prototype.getName = function () {
    return null !==
    this.data.name ? this.data.name : void 0
  };
  a.Role.prototype.setName = function (a) {
    this.data.name = a
  }
})("undefined" === typeof exports ? Apiomat : exports);
"undefined" !== typeof goog && (Apiomat.User = {});
"undefined" === typeof exports && (Apiomat = Apiomat || {});
(function (a) {
  a.User = function (b, c) {
    this.init();
    "undefined" !== typeof b && this.setUserName(b);
    "undefined" !== typeof c && this.setPassword(c);
    this.initDatastoreIfNeeded = function (b) {
      if (!1 === a.Datastore.isInstantiated()) if ("undefined" !== typeof this.getUserName() && "undefined" !== typeof this.getPassword()) a.Datastore.configureWithCredentials(this); else if ("getSessionToken" in this && "undefined" !== typeof this.getSessionToken() && this.getSessionToken()) a.Datastore.configureWithSessionToken(this.getSessionToken());
      else if ("undefined" !== typeof b && b) a.Datastore.configurePlain(a.User.AOMBASEURL, a.User.AOMAPIKEY, a.User.AOMSYS); else throw Error("The Datastore needs to be configured with user credentials or a session token for this method to work.");
    };
    this.save = function (b, c) {
      this.initDatastoreIfNeeded(!1);
      a.AbstractClientDataModel.prototype.save.apply(this, [b, c])
    };
    this.requestNewPassword = function (b, c) {
      a.Datastore.getInstance().postOnServer(this, {
        onOk: function (b) {
          a.Datastore.positiveCallback(c)
        }, onError: function (b) {
          a.Datastore.negativeCallback(c,
            b)
        }
      }, "models/requestResetPassword/", b)
    };
    this.resetPasswordAsync = function (b, c) {
      a.Datastore.getInstance().postOnServer(this, b, "models/requestResetPassword/", c)
    };
    this.resetPassword = function (a, b, c) {
      this.changePassword(a, b, c)
    };
    this.changePassword = function (b, c, f) {
      if (this.getCurrentState == a.ObjectState.PERSISTING) a.Datastore.negativeCallback(c, error); else {
        var d = {
          onOk: function () {
            this.parent.setOffline(this.wasLocalSave || !1);
            a.Datastore.configure(this.parent);
            a.Datastore.positiveCallback(c)
          }, onError: function (b) {
            a.Datastore.negativeCallback(c,
              b)
          }, parent: this
        };
        this.setPassword(b);
        a.Datastore.getInstance().shouldSendOffline("PUT") ? (d.wasLocalSave = !0, a.Datastore.getInstance().sendOffline("PUT", this.getHref(), this, void 0, d)) : a.Datastore.getInstance().updateOnServer(this, d, f)
      }
    };
    this.requestSessionToken = function (a, b, c, l) {
      this.requestSessionTokenWithRefreshToken(void 0, a, b, !1, c, l)
    };
    this.requestSessionTokenWithRefreshToken = function (b, c, f, l, h, g) {
      b = b || void 0;
      this.initDatastoreIfNeeded("undefined" === b ? !1 : !0);
      var d = f;
      "undefined" !== typeof c && c && (d =
        {
          onOk: function (b) {
            var c = b.sessionToken || "";
            "" === c ? a.Datastore.negativeCallback(f, new a.ApiomatRequestError(a.Status.NO_TOKEN_RECEIVED, 200)) : (this.parent.setSessionToken(c), a.Datastore.configureWithUserSessionToken(this.parent), a.Datastore.positiveCallback(f, b))
          }, onError: function (b) {
            a.Datastore.negativeCallback(f, b)
          }, parent: this
        });
      "undefined" === typeof b ? a.Datastore.getInstance().requestSessionToken(d, l, h, g) : a.Datastore.getInstance().requestSessionTokenWithRefreshToken(b, d, l, h, g)
    }
  };
  a.User.AOMBASEURL =
    "https://epdemo.apiomat.enterprises/yambas/rest/apps/Arbeitstitel";
  a.User.AOMAPIKEY = "9034631742310563773";
  a.User.AOMSYS = "LIVE";
  a.User.AOMSDKVERSION = "2.6.2-107";
  a.User.APPCONFIG = '{"app" : {"name" : "Arbeitstitel","modules" : [{"module" : {"name" : "ArbeitstitelMain","type" : "DYNAMIC","usedInSystem" : "TEST","classes" : []}},{"module" : {"name" : "Basics","type" : "STATIC","usedInSystem" : "TEST","classes" : [{"class" : {"name" : "MemberModel","attributes" : [{"attribute" : {"name" : "password","type" : "String"}},{"attribute" : {"name" : "dynamicAttributes","type" : "Map"}},{"attribute" : {"name" : "salt","type" : "String"}},{"attribute" : {"name" : "lastName","type" : "String"}},{"attribute" : {"name" : "userName","type" : "String"}},{"attribute" : {"name" : "firstName","type" : "String"}},{"attribute" : {"name" : "loc","type" : "Location"}},{"attribute" : {"name" : "sessionToken","type" : "String"}},{"attribute" : {"name" : "dateOfBirth","type" : "Date"}}],"isTransient" : "false"}},{"class" : {"name" : "Role","attributes" : [{"attribute" : {"name" : "members","type" : "String"}},{"attribute" : {"name" : "name","type" : "String"}}],"isTransient" : "false"}},{"class" : {"name" : "User","attributes" : [{"attribute" : {"name" : "password","type" : "String"}},{"attribute" : {"name" : "dynamicAttributes","type" : "Map"}},{"attribute" : {"name" : "salt","type" : "String"}},{"attribute" : {"name" : "lastName","type" : "String"}},{"attribute" : {"name" : "userName","type" : "String"}},{"attribute" : {"name" : "firstName","type" : "String"}},{"attribute" : {"name" : "loc","type" : "Location"}},{"attribute" : {"name" : "sessionToken","type" : "String"}},{"attribute" : {"name" : "dateOfBirth","type" : "Date"}}],"isTransient" : "false"}},{"class" : {"name" : "MemberModel","attributes" : [{"attribute" : {"name" : "password","type" : "String"}},{"attribute" : {"name" : "dynamicAttributes","type" : "Map"}},{"attribute" : {"name" : "salt","type" : "String"}},{"attribute" : {"name" : "lastName","type" : "String"}},{"attribute" : {"name" : "userName","type" : "String"}},{"attribute" : {"name" : "firstName","type" : "String"}},{"attribute" : {"name" : "loc","type" : "Location"}},{"attribute" : {"name" : "sessionToken","type" : "String"}},{"attribute" : {"name" : "dateOfBirth","type" : "Date"}}],"isTransient" : "false"}},{"class" : {"name" : "Role","attributes" : [{"attribute" : {"name" : "members","type" : "String"}},{"attribute" : {"name" : "name","type" : "String"}}],"isTransient" : "false"}},{"class" : {"name" : "User","attributes" : [{"attribute" : {"name" : "password","type" : "String"}},{"attribute" : {"name" : "dynamicAttributes","type" : "Map"}},{"attribute" : {"name" : "salt","type" : "String"}},{"attribute" : {"name" : "lastName","type" : "String"}},{"attribute" : {"name" : "userName","type" : "String"}},{"attribute" : {"name" : "firstName","type" : "String"}},{"attribute" : {"name" : "loc","type" : "Location"}},{"attribute" : {"name" : "sessionToken","type" : "String"}},{"attribute" : {"name" : "dateOfBirth","type" : "Date"}}],"isTransient" : "false"}},{"class" : {"name" : "MemberModel","attributes" : [{"attribute" : {"name" : "password","type" : "String"}},{"attribute" : {"name" : "dynamicAttributes","type" : "Map"}},{"attribute" : {"name" : "salt","type" : "String"}},{"attribute" : {"name" : "lastName","type" : "String"}},{"attribute" : {"name" : "userName","type" : "String"}},{"attribute" : {"name" : "firstName","type" : "String"}},{"attribute" : {"name" : "loc","type" : "Location"}},{"attribute" : {"name" : "sessionToken","type" : "String"}},{"attribute" : {"name" : "dateOfBirth","type" : "Date"}}],"isTransient" : "false"}},{"class" : {"name" : "Role","attributes" : [{"attribute" : {"name" : "members","type" : "String"}},{"attribute" : {"name" : "name","type" : "String"}}],"isTransient" : "false"}},{"class" : {"name" : "User","attributes" : [{"attribute" : {"name" : "password","type" : "String"}},{"attribute" : {"name" : "dynamicAttributes","type" : "Map"}},{"attribute" : {"name" : "salt","type" : "String"}},{"attribute" : {"name" : "lastName","type" : "String"}},{"attribute" : {"name" : "userName","type" : "String"}},{"attribute" : {"name" : "firstName","type" : "String"}},{"attribute" : {"name" : "loc","type" : "Location"}},{"attribute" : {"name" : "sessionToken","type" : "String"}},{"attribute" : {"name" : "dateOfBirth","type" : "Date"}}],"isTransient" : "false"}}]}},{"module" : {"name" : "Analytics","type" : "STATIC","usedInSystem" : "TEST","classes" : []}},{"module" : {"name" : "ArbeitstitelMain","type" : "DYNAMIC","usedInSystem" : "STAGING","classes" : []}},{"module" : {"name" : "Basics","type" : "STATIC","usedInSystem" : "STAGING","classes" : [{"class" : {"name" : "MemberModel","attributes" : [{"attribute" : {"name" : "password","type" : "String"}},{"attribute" : {"name" : "dynamicAttributes","type" : "Map"}},{"attribute" : {"name" : "salt","type" : "String"}},{"attribute" : {"name" : "lastName","type" : "String"}},{"attribute" : {"name" : "userName","type" : "String"}},{"attribute" : {"name" : "firstName","type" : "String"}},{"attribute" : {"name" : "loc","type" : "Location"}},{"attribute" : {"name" : "sessionToken","type" : "String"}},{"attribute" : {"name" : "dateOfBirth","type" : "Date"}}],"isTransient" : "false"}},{"class" : {"name" : "Role","attributes" : [{"attribute" : {"name" : "members","type" : "String"}},{"attribute" : {"name" : "name","type" : "String"}}],"isTransient" : "false"}},{"class" : {"name" : "User","attributes" : [{"attribute" : {"name" : "password","type" : "String"}},{"attribute" : {"name" : "dynamicAttributes","type" : "Map"}},{"attribute" : {"name" : "salt","type" : "String"}},{"attribute" : {"name" : "lastName","type" : "String"}},{"attribute" : {"name" : "userName","type" : "String"}},{"attribute" : {"name" : "firstName","type" : "String"}},{"attribute" : {"name" : "loc","type" : "Location"}},{"attribute" : {"name" : "sessionToken","type" : "String"}},{"attribute" : {"name" : "dateOfBirth","type" : "Date"}}],"isTransient" : "false"}},{"class" : {"name" : "MemberModel","attributes" : [{"attribute" : {"name" : "password","type" : "String"}},{"attribute" : {"name" : "dynamicAttributes","type" : "Map"}},{"attribute" : {"name" : "salt","type" : "String"}},{"attribute" : {"name" : "lastName","type" : "String"}},{"attribute" : {"name" : "userName","type" : "String"}},{"attribute" : {"name" : "firstName","type" : "String"}},{"attribute" : {"name" : "loc","type" : "Location"}},{"attribute" : {"name" : "sessionToken","type" : "String"}},{"attribute" : {"name" : "dateOfBirth","type" : "Date"}}],"isTransient" : "false"}},{"class" : {"name" : "Role","attributes" : [{"attribute" : {"name" : "members","type" : "String"}},{"attribute" : {"name" : "name","type" : "String"}}],"isTransient" : "false"}},{"class" : {"name" : "User","attributes" : [{"attribute" : {"name" : "password","type" : "String"}},{"attribute" : {"name" : "dynamicAttributes","type" : "Map"}},{"attribute" : {"name" : "salt","type" : "String"}},{"attribute" : {"name" : "lastName","type" : "String"}},{"attribute" : {"name" : "userName","type" : "String"}},{"attribute" : {"name" : "firstName","type" : "String"}},{"attribute" : {"name" : "loc","type" : "Location"}},{"attribute" : {"name" : "sessionToken","type" : "String"}},{"attribute" : {"name" : "dateOfBirth","type" : "Date"}}],"isTransient" : "false"}},{"class" : {"name" : "MemberModel","attributes" : [{"attribute" : {"name" : "password","type" : "String"}},{"attribute" : {"name" : "dynamicAttributes","type" : "Map"}},{"attribute" : {"name" : "salt","type" : "String"}},{"attribute" : {"name" : "lastName","type" : "String"}},{"attribute" : {"name" : "userName","type" : "String"}},{"attribute" : {"name" : "firstName","type" : "String"}},{"attribute" : {"name" : "loc","type" : "Location"}},{"attribute" : {"name" : "sessionToken","type" : "String"}},{"attribute" : {"name" : "dateOfBirth","type" : "Date"}}],"isTransient" : "false"}},{"class" : {"name" : "Role","attributes" : [{"attribute" : {"name" : "members","type" : "String"}},{"attribute" : {"name" : "name","type" : "String"}}],"isTransient" : "false"}},{"class" : {"name" : "User","attributes" : [{"attribute" : {"name" : "password","type" : "String"}},{"attribute" : {"name" : "dynamicAttributes","type" : "Map"}},{"attribute" : {"name" : "salt","type" : "String"}},{"attribute" : {"name" : "lastName","type" : "String"}},{"attribute" : {"name" : "userName","type" : "String"}},{"attribute" : {"name" : "firstName","type" : "String"}},{"attribute" : {"name" : "loc","type" : "Location"}},{"attribute" : {"name" : "sessionToken","type" : "String"}},{"attribute" : {"name" : "dateOfBirth","type" : "Date"}}],"isTransient" : "false"}}]}},{"module" : {"name" : "Analytics","type" : "STATIC","usedInSystem" : "STAGING","classes" : []}},{"module" : {"name" : "Webhosting","type" : "STATIC","usedInSystem" : "LIVE","classes" : []}},{"module" : {"name" : "Healthapp","type" : "NATIVE","usedInSystem" : "LIVE","classes" : [{"class" : {"name" : "FrontendUser","attributes" : [{"attribute" : {"name" : "profiles","type" : "Link"}}],"isTransient" : "false"}},{"class" : {"name" : "Profile","attributes" : [{"attribute" : {"name" : "profileName","type" : "String"}}],"isTransient" : "false"}}]}},{"module" : {"name" : "ArbeitstitelMain","type" : "DYNAMIC","usedInSystem" : "LIVE","classes" : []}},{"module" : {"name" : "Basics","type" : "STATIC","usedInSystem" : "LIVE","classes" : [{"class" : {"name" : "MemberModel","attributes" : [{"attribute" : {"name" : "password","type" : "String"}},{"attribute" : {"name" : "dynamicAttributes","type" : "Map"}},{"attribute" : {"name" : "salt","type" : "String"}},{"attribute" : {"name" : "lastName","type" : "String"}},{"attribute" : {"name" : "userName","type" : "String"}},{"attribute" : {"name" : "firstName","type" : "String"}},{"attribute" : {"name" : "loc","type" : "Location"}},{"attribute" : {"name" : "sessionToken","type" : "String"}},{"attribute" : {"name" : "dateOfBirth","type" : "Date"}}],"isTransient" : "false"}},{"class" : {"name" : "Role","attributes" : [{"attribute" : {"name" : "members","type" : "String"}},{"attribute" : {"name" : "name","type" : "String"}}],"isTransient" : "false"}},{"class" : {"name" : "User","attributes" : [{"attribute" : {"name" : "password","type" : "String"}},{"attribute" : {"name" : "dynamicAttributes","type" : "Map"}},{"attribute" : {"name" : "salt","type" : "String"}},{"attribute" : {"name" : "lastName","type" : "String"}},{"attribute" : {"name" : "userName","type" : "String"}},{"attribute" : {"name" : "firstName","type" : "String"}},{"attribute" : {"name" : "loc","type" : "Location"}},{"attribute" : {"name" : "sessionToken","type" : "String"}},{"attribute" : {"name" : "dateOfBirth","type" : "Date"}}],"isTransient" : "false"}},{"class" : {"name" : "MemberModel","attributes" : [{"attribute" : {"name" : "password","type" : "String"}},{"attribute" : {"name" : "dynamicAttributes","type" : "Map"}},{"attribute" : {"name" : "salt","type" : "String"}},{"attribute" : {"name" : "lastName","type" : "String"}},{"attribute" : {"name" : "userName","type" : "String"}},{"attribute" : {"name" : "firstName","type" : "String"}},{"attribute" : {"name" : "loc","type" : "Location"}},{"attribute" : {"name" : "sessionToken","type" : "String"}},{"attribute" : {"name" : "dateOfBirth","type" : "Date"}}],"isTransient" : "false"}},{"class" : {"name" : "Role","attributes" : [{"attribute" : {"name" : "members","type" : "String"}},{"attribute" : {"name" : "name","type" : "String"}}],"isTransient" : "false"}},{"class" : {"name" : "User","attributes" : [{"attribute" : {"name" : "password","type" : "String"}},{"attribute" : {"name" : "dynamicAttributes","type" : "Map"}},{"attribute" : {"name" : "salt","type" : "String"}},{"attribute" : {"name" : "lastName","type" : "String"}},{"attribute" : {"name" : "userName","type" : "String"}},{"attribute" : {"name" : "firstName","type" : "String"}},{"attribute" : {"name" : "loc","type" : "Location"}},{"attribute" : {"name" : "sessionToken","type" : "String"}},{"attribute" : {"name" : "dateOfBirth","type" : "Date"}}],"isTransient" : "false"}},{"class" : {"name" : "MemberModel","attributes" : [{"attribute" : {"name" : "password","type" : "String"}},{"attribute" : {"name" : "dynamicAttributes","type" : "Map"}},{"attribute" : {"name" : "salt","type" : "String"}},{"attribute" : {"name" : "lastName","type" : "String"}},{"attribute" : {"name" : "userName","type" : "String"}},{"attribute" : {"name" : "firstName","type" : "String"}},{"attribute" : {"name" : "loc","type" : "Location"}},{"attribute" : {"name" : "sessionToken","type" : "String"}},{"attribute" : {"name" : "dateOfBirth","type" : "Date"}}],"isTransient" : "false"}},{"class" : {"name" : "Role","attributes" : [{"attribute" : {"name" : "members","type" : "String"}},{"attribute" : {"name" : "name","type" : "String"}}],"isTransient" : "false"}},{"class" : {"name" : "User","attributes" : [{"attribute" : {"name" : "password","type" : "String"}},{"attribute" : {"name" : "dynamicAttributes","type" : "Map"}},{"attribute" : {"name" : "salt","type" : "String"}},{"attribute" : {"name" : "lastName","type" : "String"}},{"attribute" : {"name" : "userName","type" : "String"}},{"attribute" : {"name" : "firstName","type" : "String"}},{"attribute" : {"name" : "loc","type" : "Location"}},{"attribute" : {"name" : "sessionToken","type" : "String"}},{"attribute" : {"name" : "dateOfBirth","type" : "Date"}}],"isTransient" : "false"}}]}},{"module" : {"name" : "Analytics","type" : "STATIC","usedInSystem" : "LIVE","classes" : []}},{"module" : {"name" : "WebAppUploadModule","type" : "NATIVE","usedInSystem" : "LIVE","classes" : []}},{"module" : {"name" : "Server Code","type" : "STATIC","usedInSystem" : "LIVE","classes" : []}}]}}';
  a.User.ANALYTICSURL = "https://epdemo.apiomat.enterprises/analytics";
  a.User.ANALYTICSAPPKEY = "e981abb5f3ab50825c614d2f9ef1f3c64305e098";
  a.User.getUsers = function (b, c, e) {
    a.Datastore.getInstance().loadListFromServerWithClass(a.User, b, c, !1, e)
  };
  a.User.getUsersAndRefHref = function (b, c, e, d) {
    a.Datastore.getInstance().loadListFromServerWithClass(a.User, b, c, e, d)
  };
  a.User.getUsersCount = function (b, c, e) {
    a.Datastore.getInstance().loadCountFromServer(a.User, void 0, b, c, e)
  };
  a.User.deleteAllFromStorage = function (b, c) {
    a.Datastore.getInstance().deleteCollectionFromStorage(!1,
      a.User, b, c)
  };
  a.User.deleteAllFromStorageWithReferencedHrefs = function (b, c) {
    a.Datastore.getInstance().deleteCollectionFromStorage(!0, a.User, b, c)
  };
  a.User.prototype = new a.AbstractClientDataModel;
  a.User.prototype.constructor = a.User;
  a.User.prototype.loadMe = function (b, c) {
    this.initDatastoreIfNeeded(!1);
    a.Datastore.getInstance().loadFromServer("models/me", b, this, !1, void 0, void 0, !1, c)
  };
  a.User.prototype.init = function () {
    this.data = {};
    this.data.dynamicAttributes = {}
  };
  a.User.prototype.getSimpleName = function () {
    return "User"
  };
  a.User.prototype.getModuleName = function () {
    return "Basics"
  };
  a.User.prototype.getDateOfBirth = function () {
    var a = this.data.dateOfBirth;
    return "undefined" != typeof a ? new Date(a) : void 0
  };
  a.User.prototype.setDateOfBirth = function (a) {
    this.data.dateOfBirth = null != a && void 0 != a ? a.getTime() : null
  };
  a.User.prototype.getFirstName = function () {
    return null !== this.data.firstName ? this.data.firstName : void 0
  };
  a.User.prototype.setFirstName = function (a) {
    this.data.firstName = a
  };
  a.User.prototype.getLastName = function () {
    return null !==
    this.data.lastName ? this.data.lastName : void 0
  };
  a.User.prototype.setLastName = function (a) {
    this.data.lastName = a
  };
  a.User.prototype.getLocLatitude = function () {
    var a = this.data.loc;
    if (a) return a[0]
  };
  a.User.prototype.getLocLongitude = function () {
    var a = this.data.loc;
    if (a) return a[1]
  };
  a.User.prototype.setLocLatitude = function (a) {
    var b = this.data.loc;
    b ? b[0] = a : b = [a, void 0];
    this.data.loc = b
  };
  a.User.prototype.setLocLongitude = function (a) {
    var b = this.data.loc;
    b ? b[1] = a : b = [0, a];
    this.data.loc = b
  };
  a.User.prototype.getPassword =
    function () {
      return null !== this.data.password ? this.data.password : void 0
    };
  a.User.prototype.setPassword = function (a) {
    this.data.password = a
  };
  a.User.prototype.getSessionToken = function () {
    return null !== this.data.sessionToken ? this.data.sessionToken : void 0
  };
  a.User.prototype.setSessionToken = function (a) {
    this.data.sessionToken = a
  };
  a.User.prototype.getUserName = function () {
    return null !== this.data.userName ? this.data.userName : void 0
  };
  a.User.prototype.setUserName = function (a) {
    this.data.userName = a
  }
})("undefined" === typeof exports ?
  Apiomat : exports);
"undefined" !== typeof goog && (Apiomat.FrontendUser = {});
"undefined" === typeof exports && (Apiomat = Apiomat || {});
(function (a) {
  a.FrontendUser = function (b, c) {
    this.init();
    "undefined" !== typeof b && this.setUserName(b);
    "undefined" !== typeof c && this.setPassword(c);
    this.getProfiles = function () {
      return this.profiles
    };
    this.loadProfiles = function (b, c, f) {
      var d = this.data.profilesHref;
      if ("undefined" == typeof d) throw new a.ApiomatRequestError(a.Status.ATTACHED_HREF_MISSING, 200);
      var e = {
        onOk: function (b, d) {
          a.Datastore.getInstance().getUseDeltaSync() ? this.parent.profiles = a.Datastore.getInstance().syncCollection(this.parent.profiles,
            b, d ? d.deletedItems : void 0) : this.parent.profiles = b;
          a.Datastore.positiveCallback(c, b)
        }, onError: function (b) {
          204 == b.statusCode && (this.parent.profiles = null);
          a.Datastore.negativeCallback(c, b)
        }, parent: this
      };
      a.Datastore.getInstance().loadFromServer(d, e, void 0, !1, b, a.Profile, !0, f)
    };
    this.loadProfilesAndRefHref = function (b, c, f) {
      var d = this.data.profilesHref;
      if ("undefined" == typeof d) throw new a.ApiomatRequestError(a.Status.ATTACHED_HREF_MISSING, 200);
      var e = {
        onOk: function (b) {
          a.Datastore.getInstance().getUseDeltaSync() ?
            this.parent.profiles = a.Datastore.getInstance().syncCollection(this.parent.profiles, b, meta ? meta.deletedItems : void 0) : this.parent.profiles = b;
          a.Datastore.positiveCallback(c, b)
        }, onError: function (b) {
          a.Datastore.negativeCallback(c, b)
        }, parent: this
      };
      a.Datastore.getInstance().loadFromServer(d, e, void 0, !0, b, a.Profile, !0, f)
    };
    this.postProfiles = function (b, c, f) {
      if (0 == b || "undefined" === typeof b.getHref()) f = new a.ApiomatRequestError(a.Status.SAVE_REFERENECE_BEFORE_REFERENCING), c ? a.Datastore.negativeCallback(c, f) :
        console && console.log && console.log("Error occured: " + f); else {
        var d = {
          onOk: function (d) {
            d && 1 > this.parent.profiles.filter(function (a) {
              return a.getHref() && d && a.getHref() === d
            }).length && this.parent.profiles.push(b);
            a.Datastore.positiveCallback(c, d)
          }, onError: function (b) {
            a.Datastore.negativeCallback(c, b)
          }, parent: this
        };
        a.Datastore.getInstance().shouldSendOffline("POST") ? a.Datastore.getInstance().sendOffline("POST", this.getHref(), b, "profiles", d) : a.Datastore.getInstance().postOnServer(b, d, this.data.profilesHref,
          f)
      }
    };
    this.removeProfiles = function (b, c, f) {
      var d = b.getHref().substring(b.getHref().lastIndexOf("/") + 1);
      d = this.data.profilesHref + "/" + d;
      var e = {
        onOk: function (d) {
          d = -1;
          if ("undefined" != typeof this.parent.profiles && "undefined" != typeof this.parent.profiles.length && 0 < this.parent.profiles.length) for (var e = 0; e < this.parent.profiles.length; e++) if (this.parent.profiles[e].data.href === b.data.href) {
            d = e;
            break
          }
          -1 != d && this.parent.profiles.splice(d, 1);
          a.Datastore.positiveCallback(c)
        }, onError: function (b) {
          a.Datastore.negativeCallback(c,
            b)
        }, parent: this
      };
      a.Datastore.getInstance().deleteOnServer(d, e, f)
    };
    this.getProfilesCount = function (b, c, f) {
      a.Datastore.getInstance().loadCountFromServer(this.getHref(), "profiles", b, c, f)
    }
  };
  a.FrontendUser.getFrontendUsers = function (b, c, e) {
    a.Datastore.getInstance().loadListFromServerWithClass(a.FrontendUser, b, c, !1, e)
  };
  a.FrontendUser.getFrontendUsersAndRefHref = function (b, c, e, d) {
    a.Datastore.getInstance().loadListFromServerWithClass(a.FrontendUser, b, c, e, d)
  };
  a.FrontendUser.getFrontendUsersCount = function (b, c,
                                                   e) {
    a.Datastore.getInstance().loadCountFromServer(a.FrontendUser, void 0, b, c, e)
  };
  a.FrontendUser.deleteAllFromStorage = function (b, c) {
    a.Datastore.getInstance().deleteCollectionFromStorage(!1, a.FrontendUser, b, c)
  };
  a.FrontendUser.deleteAllFromStorageWithReferencedHrefs = function (b, c) {
    a.Datastore.getInstance().deleteCollectionFromStorage(!0, a.FrontendUser, b, c)
  };
  a.FrontendUser.prototype = new a.User;
  a.FrontendUser.prototype.constructor = a.FrontendUser;
  a.FrontendUser.prototype.init = function () {
    a.User.prototype.init.call(this);
    this.data.dynamicAttributes = {};
    this.profiles = []
  };
  a.FrontendUser.prototype.getSimpleName = function () {
    return "FrontendUser"
  };
  a.FrontendUser.prototype.getModuleName = function () {
    return "Healthapp"
  };
  a.FrontendUser.prototype.getProfiles = function () {
    return this.data.profiles
  };
  a.FrontendUser.prototype.setProfiles = function (a) {
    this.data.profiles = a
  }
})("undefined" === typeof exports ? Apiomat : exports);
"undefined" !== typeof goog && (Apiomat.Profile = {});
"undefined" === typeof exports && (Apiomat = Apiomat || {});
(function (a) {
  a.Profile = function () {
    this.init()
  };
  a.Profile.getProfiles = function (b, c, e) {
    a.Datastore.getInstance().loadListFromServerWithClass(a.Profile, b, c, !1, e)
  };
  a.Profile.getProfilesAndRefHref = function (b, c, e, d) {
    a.Datastore.getInstance().loadListFromServerWithClass(a.Profile, b, c, e, d)
  };
  a.Profile.getProfilesCount = function (b, c, e) {
    a.Datastore.getInstance().loadCountFromServer(a.Profile, void 0, b, c, e)
  };
  a.Profile.deleteAllFromStorage = function (b, c) {
    a.Datastore.getInstance().deleteCollectionFromStorage(!1, a.Profile,
      b, c)
  };
  a.Profile.deleteAllFromStorageWithReferencedHrefs = function (b, c) {
    a.Datastore.getInstance().deleteCollectionFromStorage(!0, a.Profile, b, c)
  };
  a.Profile.prototype = new a.AbstractClientDataModel;
  a.Profile.prototype.constructor = a.Profile;
  a.Profile.prototype.init = function () {
    this.data = {}
  };
  a.Profile.prototype.getSimpleName = function () {
    return "Profile"
  };
  a.Profile.prototype.getModuleName = function () {
    return "Healthapp"
  };
  a.Profile.prototype.getProfileName = function () {
    return null !== this.data.profileName ? this.data.profileName :
      void 0
  };
  a.Profile.prototype.setProfileName = function (a) {
    this.data.profileName = a
  }
})("undefined" === typeof exports ? Apiomat : exports);