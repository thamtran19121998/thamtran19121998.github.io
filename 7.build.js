webpackJsonp([7],{

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1.jpg?8cccc71bedb39a2e967fdb1e76532b39";

/***/ }),

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(399);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function deepMerge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ 376:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2.jpg?92fb17ecdfda04c14deb22b1175e31cf";

/***/ }),

/***/ 381:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3.jpg?7896245001dbc6883d17f7b6e412acac";

/***/ }),

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4.jpg?7eef6399163e94d847992e8f7f9797bb";

/***/ }),

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5.jpg?764ff0464199e47c14d2db98d10304b9";

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_ProjectDataService__ = __webpack_require__(448);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var image_1 = __webpack_require__(372);
var image_2 = __webpack_require__(376);
var image_3 = __webpack_require__(381);
var image_4 = __webpack_require__(382);
var image_5 = __webpack_require__(383);
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      enabled: true,
      data: [{
        id: 0,
        projectName: "Đồ án tốt nghiệp",
        mode: 1,
        state: 1,
        time: "01/07/2020",
        taskNumber: 34,
        Description: "Xây dựng hệ thống quản lý công việc trên hai phân hệ web và android. Ứng dụng kết hợp giữa Trello, Asana và Slack.",
        team: [{
          id: 0,
          memberName: "Nguyễn Quang Thạch",
          avt: image_1
        }, {
          id: 1,
          memberName: "Phạm Hồng Thái",
          avt: image_2
        }, {
          id: 2,
          memberName: "Lê Quốc Thái",
          avt: image_3
        }, {
          id: 3,
          memberName: "Trần Thị Hồng Thắm",
          avt: image_4
        }]
      }, {
        id: 1,
        projectName: "Phát triển ứng dụng web",
        mode: 1,
        state: 1,
        time: "01/07/2020",
        taskNumber: 63,
        Description: "Xây dựng website đọc báo online.",
        team: [{
          id: 0,
          memberName: "Nguyễn Quang Thạch",
          avt: image_1
        }, {
          id: 3,
          memberName: "Trần Thị Hồng Thắm",
          avt: image_4
        }]
      }, {
        id: 2,
        projectName: "Phát triển ứng dụng di động",
        mode: 2,
        state: 1,
        time: "01/07/2020",
        taskNumber: 63,
        Description: "Xây dựng ứng dụng android album ảnh. Giúp lưu trữ và quản lý ảnh.",
        team: [{
          id: 0,
          memberName: "Nguyễn Quang Thạch",
          avt: image_1
        }, {
          id: 1,
          memberName: "Phạm Hồng Thái",
          avt: image_2
        }, {
          id: 2,
          memberName: "Lê Quốc Thái",
          avt: image_3
        }]
      }, {
        id: 3,
        projectName: "Phát triển ứng dụng web",
        mode: 1,
        state: 2,
        time: "01/07/2020",
        taskNumber: 63,
        Description: "Xây dựng website đọc báo online.",
        team: [{
          id: 2,
          memberName: "Lê Quốc Thái",
          avt: image_3
        }, {
          id: 3,
          memberName: "Trần Thị Hồng Thắm",
          avt: image_4
        }]
      }, {
        id: 4,
        projectName: "Phát triển ứng dụng di động",
        mode: 1,
        state: 1,
        time: "01/07/2020",
        taskNumber: 63,
        Description: "Xây dựng ứng dụng android album ảnh. Giúp lưu trữ và quản lý ảnh.",
        team: [{
          id: 1,
          memberName: "Phạm Hồng Thái",
          avt: image_2
        }, {
          id: 2,
          memberName: "Lê Quốc Thái",
          avt: image_3
        }, {
          id: 3,
          memberName: "Trần Thị Hồng Thắm",
          avt: image_4
        }]
      }, {
        id: 5,
        projectName: "Đồ án tốt nghiệp",
        mode: 2,
        state: 2,
        time: "01/07/2020",
        taskNumber: 34,
        Description: "Xây dựng hệ thống quản lý công việc trên hai phân hệ web và android. Ứng dụng kết hợp giữa Trello, Asana và Slack.",
        team: [{
          id: 0,
          memberName: "Nguyễn Quang Thạch",
          avt: image_1
        }, {
          id: 2,
          memberName: "Lê Quốc Thái",
          avt: image_3
        }, {
          id: 3,
          memberName: "Trần Thị Hồng Thắm",
          avt: image_4
        }]
      }, {
        id: 6,
        projectName: "Phát triển ứng dụng di động",
        mode: 2,
        state: 1,
        time: "01/07/2020",
        taskNumber: 63,
        Description: "Xây dựng ứng dụng android album ảnh. Giúp lưu trữ và quản lý ảnh.",
        team: [{
          id: 0,
          memberName: "Nguyễn Quang Thạch",
          avt: image_1
        }, {
          id: 1,
          memberName: "Phạm Hồng Thái",
          avt: image_2
        }, {
          id: 2,
          memberName: "Lê Quốc Thái",
          avt: image_3
        }, {
          id: 3,
          memberName: "Trần Thị Hồng Thắm",
          avt: image_4
        }, {
          id: 4,
          memberName: "Phạm Duy Thanh",
          avt: image_5
        }]
      }, {
        id: 7,
        projectName: "Đồ án tốt nghiệp",
        mode: 1,
        state: 2,
        time: "01/07/2020",
        taskNumber: 34,
        Description: "Xây dựng hệ thống quản lý công việc trên hai phân hệ web và android. Ứng dụng kết hợp giữa Trello, Asana và Slack.",
        team: [{
          id: 1,
          memberName: "Phạm Hồng Thái",
          avt: image_2
        }, {
          id: 2,
          memberName: "Lê Quốc Thái",
          avt: image_3
        }]
      }, {
        id: 8,
        projectName: "Phát triển ứng dụng web",
        mode: 1,
        state: 1,
        time: "01/07/2020",
        taskNumber: 63,
        Description: "Xây dựng website đọc báo online.",
        team: [{
          id: 0,
          memberName: "Nguyễn Quang Thạch",
          avt: image_1
        }, {
          id: 2,
          memberName: "Lê Quốc Thái",
          avt: image_3
        }, {
          id: 3,
          memberName: "Trần Thị Hồng Thắm",
          avt: image_4
        }]
      }],
      projects: []
    };
  },

  methods: {
    showTask: function showTask() {
      window.location.assign("/#/tasks");

      //location.reload(true);
      //setTimeout('location.reload()', 0)
    },
    getAllProject: function getAllProject() {
      var _this = this;

      __WEBPACK_IMPORTED_MODULE_0__services_ProjectDataService__["a" /* default */].getAll().then(function (response) {
        _this.projects = response.data;
        console.log(response.data);
      }).catch(function (e) {
        console.log(e);
      });
    }
  },
  mounted: function mounted() {
    this.getAllProject();
  }
});

/***/ }),

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(373);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(373);
var normalizeHeaderName = __webpack_require__(456);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(403);
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(403);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),

/***/ 403:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(373);
var settle = __webpack_require__(457);
var buildURL = __webpack_require__(400);
var buildFullPath = __webpack_require__(459);
var parseHeaders = __webpack_require__(462);
var isURLSameOrigin = __webpack_require__(463);
var createError = __webpack_require__(404);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(464);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(458);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ 405:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(373);

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'params', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy'];
  var defaultToConfig2Keys = [
    'baseURL', 'url', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress',
    'maxContentLength', 'validateStatus', 'maxRedirects', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath'
  ];

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys);

  var otherKeys = Object
    .keys(config2)
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, function otherKeysDefaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  return config;
};


/***/ }),

/***/ 406:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ 446:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(447);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(12).default
var update = add("f23f0d40", content, true, {});

/***/ }),

/***/ 447:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, ".project-state[data-v-44abb91b]{flex-grow:1;margin-bottom:10px}.active-project[data-v-44abb91b]{align-self:center;color:#1ac0c6}.completed-project[data-v-44abb91b]{align-self:center;color:#ff4d4d}.page-titles[data-v-44abb91b]{position:sticky;top:54px;height:50px;margin-bottom:20px;display:flex;flex-direction:row}.title[data-v-44abb91b]{margin-left:15px;display:flex;flex-grow:1}.ui-project[data-v-44abb91b]{margin-top:0}.project[data-v-44abb91b]{margin-bottom:20px;cursor:pointer}a.project>.card:hover .card-header[data-v-44abb91b],a.project>.card[data-v-44abb91b]:hover{background:#f6f8f9}.card[data-v-44abb91b]{margin:0;padding:0;height:100%;transition:width height 1s}.card-header[data-v-44abb91b]{font-family:Poppins,sans-serif;font-size:16px;color:#455a64;font-weight:500;background-color:#fff;display:flex;justify-content:center}.card-body[data-v-44abb91b]{padding:10px;font-family:Poppins,sans-serif;font-size:14px;color:#455a64;font-weight:400}.first-row[data-v-44abb91b],.second-row[data-v-44abb91b]{color:#455a64}.row[data-v-44abb91b]{margin-left:0;margin-right:0}.project-tasks-number[data-v-44abb91b],.project-time[data-v-44abb91b]{margin-bottom:10px;padding-left:0;padding-right:0}.icon-time[data-v-44abb91b]{vertical-align:center;margin-right:5px;color:#99abb4;background-color:#6b7db3;border-radius:100px;padding:5px}.icon-time span>i[data-v-44abb91b]{color:#fff}.icon-tasks[data-v-44abb91b]{vertical-align:center;margin-right:5px;color:#99abb4;background-color:#6bb3b3;border-radius:100px;padding:5px}.icon-tasks span>i[data-v-44abb91b]{color:#fff}.icon-state[data-v-44abb91b]{vertical-align:center;margin-right:5px;color:#99abb4;background-color:#7094ff;border-radius:100px;padding:5px}.icon-state span>i[data-v-44abb91b]{color:#fff}.icon-team[data-v-44abb91b]{vertical-align:center;margin-right:5px;color:#99abb4;background-color:#b392f7;border-radius:100px;padding:5px}.icon-team span>i[data-v-44abb91b]{color:#fff}.text-time[data-v-44abb91b]{align-self:center;margin-top:2px}.team-member[data-v-44abb91b]{border-radius:100px;width:25px;margin-right:3px;align-self:center}.project-team[data-v-44abb91b]{flex-grow:1;padding-left:0;padding-right:0;margin-bottom:10px}.btn-filter[data-v-44abb91b]{margin-right:3px}.btn-add-project[data-v-44abb91b],.btn-filter[data-v-44abb91b]{background-color:transparent;cursor:pointer;border-radius:5px;padding:6px;align-self:center;color:#455a64}.btn-add-project[data-v-44abb91b]{margin-right:10px}.btn-group.show>.btn-filter[data-v-44abb91b],div.btn-add-project[data-v-44abb91b]:hover,div.btn-filter[data-v-44abb91b]:hover{background:#d7dde9}.dropdown-item[data-v-44abb91b]{color:#455a64}a.dropdown-item[data-v-44abb91b]:hover{background:#ebeff7}a.dropdown-item[data-v-44abb91b]:active{background:#d7dde9}", ""]);

// exports


/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http_common__ = __webpack_require__(449);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var ProjectDataService = function () {
  function ProjectDataService() {
    _classCallCheck(this, ProjectDataService);
  }

  _createClass(ProjectDataService, [{
    key: "getAll",
    value: function getAll() {
      return __WEBPACK_IMPORTED_MODULE_0__http_common__["a" /* default */].get("/projects");
    }
  }, {
    key: "get",
    value: function get(id) {
      return __WEBPACK_IMPORTED_MODULE_0__http_common__["a" /* default */].get("/projects/" + id);
    }
  }, {
    key: "create",
    value: function create(data) {
      return __WEBPACK_IMPORTED_MODULE_0__http_common__["a" /* default */].post("/projects", data);
    }
  }, {
    key: "update",
    value: function update(id, data) {
      return __WEBPACK_IMPORTED_MODULE_0__http_common__["a" /* default */].put("/projects/" + id, data);
    }
  }, {
    key: "delete",
    value: function _delete(id) {
      return __WEBPACK_IMPORTED_MODULE_0__http_common__["a" /* default */].delete("/projects/" + id);
    }
  }, {
    key: "deleteAll",
    value: function deleteAll() {
      return __WEBPACK_IMPORTED_MODULE_0__http_common__["a" /* default */].delete("/projects");
    }
  }, {
    key: "findByTitle",
    value: function findByTitle(name) {
      return __WEBPACK_IMPORTED_MODULE_0__http_common__["a" /* default */].get("/projects?title=" + name);
    }
  }]);

  return ProjectDataService;
}();

/* harmony default export */ __webpack_exports__["a"] = (new ProjectDataService());

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_axios___default.a.create({
  baseURL: "https://easywork-server.herokuapp.com/api",
  headers: {
    "Content-type": "application/json"
  }
}));

/***/ }),

/***/ 450:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(451);

/***/ }),

/***/ 451:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(373);
var bind = __webpack_require__(399);
var Axios = __webpack_require__(452);
var mergeConfig = __webpack_require__(405);
var defaults = __webpack_require__(402);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(406);
axios.CancelToken = __webpack_require__(465);
axios.isCancel = __webpack_require__(401);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(466);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ 452:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(373);
var buildURL = __webpack_require__(400);
var InterceptorManager = __webpack_require__(453);
var dispatchRequest = __webpack_require__(454);
var mergeConfig = __webpack_require__(405);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ 453:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(373);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ 454:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(373);
var transformData = __webpack_require__(455);
var isCancel = __webpack_require__(401);
var defaults = __webpack_require__(402);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(373);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ 456:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(373);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(404);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ 459:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(460);
var combineURLs = __webpack_require__(461);

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ 460:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ 461:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ 462:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(373);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ 463:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(373);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ 464:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(373);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ 465:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(406);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ 466:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ui-project"},[_c('div',{staticClass:"page-titles"},[_c('div',{staticClass:"title align-self-center"},[_c('h3',{staticClass:"text-primary"},[_vm._v(_vm._s(_vm.$t("projects.title-bar.title")))])]),_vm._v(" "),_c('div',{staticClass:"btn-group"},[_c('div',{staticClass:"btn-filter",attrs:{"data-toggle":"dropdown"}},[_c('span',[_c('i',{staticClass:"mdi mdi-filter-variant f-s-18"}),_vm._v("\n          "+_vm._s(_vm.$t("projects.title-bar.filter.name"))+"\n        ")])]),_vm._v(" "),_c('div',{staticClass:"dropdown-menu dropdown-menu-right"},[_c('a',{staticClass:"dropdown-item",attrs:{"href":"#"}},[_vm._v(_vm._s(_vm.$t("projects.title-bar.filter.none")))]),_vm._v(" "),_c('a',{staticClass:"dropdown-item",attrs:{"href":"#"}},[_vm._v(_vm._s(_vm.$t("projects.title-bar.filter.active")))]),_vm._v(" "),_c('a',{staticClass:"dropdown-item",attrs:{"href":"#"}},[_vm._v(_vm._s(_vm.$t("projects.title-bar.filter.completed")))]),_vm._v(" "),_c('a',{staticClass:"dropdown-item",attrs:{"href":"#"}},[_vm._v(_vm._s(_vm.$t("projects.title-bar.filter.private")))]),_vm._v(" "),_c('a',{staticClass:"dropdown-item",attrs:{"href":"#"}},[_vm._v(_vm._s(_vm.$t("projects.title-bar.filter.public")))])])]),_vm._v(" "),_c('div',{staticClass:"btn-group"},[_c('div',{staticClass:"btn-filter",attrs:{"data-toggle":"dropdown"}},[_c('span',[_c('i',{staticClass:"mdi mdi-sort f-s-18"}),_vm._v("\n          "+_vm._s(_vm.$t("projects.title-bar.sort.name"))+"\n        ")])]),_vm._v(" "),_c('div',{staticClass:"dropdown-menu dropdown-menu-right"},[_c('a',{staticClass:"dropdown-item",attrs:{"href":"#"}},[_vm._v(_vm._s(_vm.$t("projects.title-bar.sort.none")))]),_vm._v(" "),_c('a',{staticClass:"dropdown-item",attrs:{"href":"#"}},[_vm._v(_vm._s(_vm.$t("projects.title-bar.sort.time")))]),_vm._v(" "),_c('a',{staticClass:"dropdown-item",attrs:{"href":"#"}},[_vm._v(_vm._s(_vm.$t("projects.title-bar.sort.alphabetical")))])])]),_vm._v(" "),_c('div',{staticClass:"btn-add-project"},[_c('i',{staticClass:"ti-plus"}),_vm._v("\n      "+_vm._s(_vm.$t("projects.title-bar.add-project"))+"\n    ")])]),_vm._v(" "),_c('div',{staticClass:"row",staticStyle:{"margin-left":"20px","margin-right":"20px"}},_vm._l((_vm.projects),function(element){return _c('a',{key:element.id,staticClass:"col-md-4 project",on:{"click":function($event){return _vm.showTask()}}},[_c('div',{staticClass:"card border",staticStyle:{"height":"100%"}},[_c('div',{staticClass:"card-header"},[_vm._v(_vm._s(element.projectName))]),_vm._v(" "),_c('div',{staticClass:"card-body"},[_c('div',{staticClass:"row first-row"},[_c('div',{staticClass:"row project-state"},[_vm._m(0,true),_vm._v(" "),(element.projectState==1)?_c('div',{staticClass:"active-project"},[_vm._v("Đang hoạt động")]):_c('div',{staticClass:"completed-project"},[_vm._v("Đã hoàn thành")])]),_vm._v(" "),_c('div',{staticClass:"col-md-5 row project-time"},[_vm._m(1,true),_vm._v(" "),_c('div',{staticClass:"text-time"},[_vm._v(_vm._s(element.dueDate))])])]),_vm._v(" "),_c('div',{staticClass:"row second-row"},[_c('div',{staticClass:"row project-team"},[_vm._m(2,true),_vm._v(" "),_c('div',_vm._l((element.team),function(elm){return _c('img',{key:elm.id,staticClass:"team-member",attrs:{"src":elm.avt,"alt":elm.memberName,"title":elm.memberName}})}),0)]),_vm._v(" "),_c('div',{staticClass:"col-md-5 row project-tasks-number"},[_vm._m(3,true),_vm._v(" "),_c('div',{staticClass:"text-time"},[_vm._v(_vm._s(element.taskNumber))])])]),_vm._v(" "),_c('div',{staticClass:"project-description"},[_vm._v(_vm._s(element.description))])])])])}),0)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon-state",attrs:{"title":"Trạng thái"}},[_c('span',[_c('i',{staticClass:"mdi mdi-google-circles-extended f-s-16"})])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon-time",attrs:{"title":"Thời gian"}},[_c('span',[_c('i',{staticClass:"ti-time f-s-16"})])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon-team",attrs:{"title":"Nhóm"}},[_c('span',[_c('i',{staticClass:"mdi mdi-account-multiple f-s-16"})])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon-tasks",attrs:{"title":"Số lượng công việc"}},[_c('span',[_c('i',{staticClass:"ti-check-box f-s-16"})])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_projects_vue__ = __webpack_require__(398);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_44abb91b_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_projects_vue__ = __webpack_require__(467);
function injectStyle (ssrContext) {
  __webpack_require__(446)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-44abb91b"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_projects_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_44abb91b_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_projects_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=7.build.js.map