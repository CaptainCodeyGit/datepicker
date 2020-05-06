/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor_datepicker_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor/datepicker.min.js */ "./resources/js/vendor/datepicker.min.js");
/* harmony import */ var _vendor_datepicker_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_datepicker_min_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vendor_datepicker_en_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendor/datepicker-en.js */ "./resources/js/vendor/datepicker-en.js");
/* harmony import */ var _vendor_datepicker_en_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vendor_datepicker_en_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vendor_uikit_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vendor/uikit.min.js */ "./resources/js/vendor/uikit.min.js");
/* harmony import */ var _vendor_uikit_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_vendor_uikit_min_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _vendor_uikit_icons_min_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vendor/uikit-icons.min.js */ "./resources/js/vendor/uikit-icons.min.js");
/* harmony import */ var _vendor_uikit_icons_min_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_vendor_uikit_icons_min_js__WEBPACK_IMPORTED_MODULE_3__);




_vendor_uikit_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.use(_vendor_uikit_icons_min_js__WEBPACK_IMPORTED_MODULE_3___default.a); // Datepicker

$('#date').data('datepicker');

/***/ }),

/***/ "./resources/js/vendor/datepicker-en.js":
/*!**********************************************!*\
  !*** ./resources/js/vendor/datepicker-en.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

;

(function ($) {
  $.fn.datepicker.language['en'] = {
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    today: 'Today',
    clear: 'Clear',
    dateFormat: 'mm/dd/yyyy',
    timeFormat: 'hh:ii aa',
    firstDay: 0
  };
})(jQuery);

/***/ }),

/***/ "./resources/js/vendor/datepicker.min.js":
/*!***********************************************!*\
  !*** ./resources/js/vendor/datepicker.min.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (t, e, i) {
  !function () {
    var s,
        a,
        n,
        h = "2.2.3",
        o = "datepicker",
        r = ".datepicker-here",
        c = !1,
        d = '<div class="datepicker"><i class="datepicker--pointer"></i><nav class="datepicker--nav"></nav><div class="datepicker--content"></div></div>',
        l = {
      classes: "",
      inline: !1,
      language: "ru",
      startDate: new Date(),
      firstDay: "",
      weekends: [6, 0],
      dateFormat: "",
      altField: "",
      altFieldDateFormat: "@",
      toggleSelected: !0,
      keyboardNav: !0,
      position: "bottom left",
      offset: 12,
      view: "days",
      minView: "days",
      showOtherMonths: !0,
      selectOtherMonths: !0,
      moveToOtherMonthsOnSelect: !0,
      showOtherYears: !0,
      selectOtherYears: !0,
      moveToOtherYearsOnSelect: !0,
      minDate: "",
      maxDate: "",
      disableNavWhenOutOfRange: !0,
      multipleDates: !1,
      multipleDatesSeparator: ",",
      range: !1,
      todayButton: !1,
      clearButton: !1,
      showEvent: "focus",
      autoClose: !1,
      monthsField: "monthsShort",
      prevHtml: '<svg><path d="M 17,12 l -5,5 l 5,5"></path></svg>',
      nextHtml: '<svg><path d="M 14,12 l 5,5 l -5,5"></path></svg>',
      navTitles: {
        days: "MM, <i>yyyy</i>",
        months: "yyyy",
        years: "yyyy1 - yyyy2"
      },
      timepicker: !1,
      onlyTimepicker: !1,
      dateTimeSeparator: " ",
      timeFormat: "",
      minHours: 0,
      maxHours: 24,
      minMinutes: 0,
      maxMinutes: 59,
      hoursStep: 1,
      minutesStep: 1,
      onSelect: "",
      onShow: "",
      onHide: "",
      onChangeMonth: "",
      onChangeYear: "",
      onChangeDecade: "",
      onChangeView: "",
      onRenderCell: ""
    },
        u = {
      ctrlRight: [17, 39],
      ctrlUp: [17, 38],
      ctrlLeft: [17, 37],
      ctrlDown: [17, 40],
      shiftRight: [16, 39],
      shiftUp: [16, 38],
      shiftLeft: [16, 37],
      shiftDown: [16, 40],
      altUp: [18, 38],
      altRight: [18, 39],
      altLeft: [18, 37],
      altDown: [18, 40],
      ctrlShiftUp: [16, 17, 38]
    },
        m = function m(t, a) {
      this.el = t, this.$el = e(t), this.opts = e.extend(!0, {}, l, a, this.$el.data()), s == i && (s = e("body")), this.opts.startDate || (this.opts.startDate = new Date()), "INPUT" == this.el.nodeName && (this.elIsInput = !0), this.opts.altField && (this.$altField = "string" == typeof this.opts.altField ? e(this.opts.altField) : this.opts.altField), this.inited = !1, this.visible = !1, this.silent = !1, this.currentDate = this.opts.startDate, this.currentView = this.opts.view, this._createShortCuts(), this.selectedDates = [], this.views = {}, this.keys = [], this.minRange = "", this.maxRange = "", this._prevOnSelectValue = "", this.init();
    };

    n = m, n.prototype = {
      VERSION: h,
      viewIndexes: ["days", "months", "years"],
      init: function init() {
        c || this.opts.inline || !this.elIsInput || this._buildDatepickersContainer(), this._buildBaseHtml(), this._defineLocale(this.opts.language), this._syncWithMinMaxDates(), this.elIsInput && (this.opts.inline || (this._setPositionClasses(this.opts.position), this._bindEvents()), this.opts.keyboardNav && !this.opts.onlyTimepicker && this._bindKeyboardEvents(), this.$datepicker.on("mousedown", this._onMouseDownDatepicker.bind(this)), this.$datepicker.on("mouseup", this._onMouseUpDatepicker.bind(this))), this.opts.classes && this.$datepicker.addClass(this.opts.classes), this.opts.timepicker && (this.timepicker = new e.fn.datepicker.Timepicker(this, this.opts), this._bindTimepickerEvents()), this.opts.onlyTimepicker && this.$datepicker.addClass("-only-timepicker-"), this.views[this.currentView] = new e.fn.datepicker.Body(this, this.currentView, this.opts), this.views[this.currentView].show(), this.nav = new e.fn.datepicker.Navigation(this, this.opts), this.view = this.currentView, this.$el.on("clickCell.adp", this._onClickCell.bind(this)), this.$datepicker.on("mouseenter", ".datepicker--cell", this._onMouseEnterCell.bind(this)), this.$datepicker.on("mouseleave", ".datepicker--cell", this._onMouseLeaveCell.bind(this)), this.inited = !0;
      },
      _createShortCuts: function _createShortCuts() {
        this.minDate = this.opts.minDate ? this.opts.minDate : new Date(-86399999136e5), this.maxDate = this.opts.maxDate ? this.opts.maxDate : new Date(86399999136e5);
      },
      _bindEvents: function _bindEvents() {
        this.$el.on(this.opts.showEvent + ".adp", this._onShowEvent.bind(this)), this.$el.on("mouseup.adp", this._onMouseUpEl.bind(this)), this.$el.on("blur.adp", this._onBlur.bind(this)), this.$el.on("keyup.adp", this._onKeyUpGeneral.bind(this)), e(t).on("resize.adp", this._onResize.bind(this)), e("body").on("mouseup.adp", this._onMouseUpBody.bind(this));
      },
      _bindKeyboardEvents: function _bindKeyboardEvents() {
        this.$el.on("keydown.adp", this._onKeyDown.bind(this)), this.$el.on("keyup.adp", this._onKeyUp.bind(this)), this.$el.on("hotKey.adp", this._onHotKey.bind(this));
      },
      _bindTimepickerEvents: function _bindTimepickerEvents() {
        this.$el.on("timeChange.adp", this._onTimeChange.bind(this));
      },
      isWeekend: function isWeekend(t) {
        return -1 !== this.opts.weekends.indexOf(t);
      },
      _defineLocale: function _defineLocale(t) {
        "string" == typeof t ? (this.loc = e.fn.datepicker.language[t], this.loc || (console.warn("Can't find language \"" + t + '" in Datepicker.language, will use "ru" instead'), this.loc = e.extend(!0, {}, e.fn.datepicker.language.ru)), this.loc = e.extend(!0, {}, e.fn.datepicker.language.ru, e.fn.datepicker.language[t])) : this.loc = e.extend(!0, {}, e.fn.datepicker.language.ru, t), this.opts.dateFormat && (this.loc.dateFormat = this.opts.dateFormat), this.opts.timeFormat && (this.loc.timeFormat = this.opts.timeFormat), "" !== this.opts.firstDay && (this.loc.firstDay = this.opts.firstDay), this.opts.timepicker && (this.loc.dateFormat = [this.loc.dateFormat, this.loc.timeFormat].join(this.opts.dateTimeSeparator)), this.opts.onlyTimepicker && (this.loc.dateFormat = this.loc.timeFormat);
        var i = this._getWordBoundaryRegExp;
        (this.loc.timeFormat.match(i("aa")) || this.loc.timeFormat.match(i("AA"))) && (this.ampm = !0);
      },
      _buildDatepickersContainer: function _buildDatepickersContainer() {
        c = !0, s.append('<div class="datepickers-container" id="datepickers-container"></div>'), a = e("#datepickers-container");
      },
      _buildBaseHtml: function _buildBaseHtml() {
        var t,
            i = e('<div class="datepicker-inline">');
        t = "INPUT" == this.el.nodeName ? this.opts.inline ? i.insertAfter(this.$el) : a : i.appendTo(this.$el), this.$datepicker = e(d).appendTo(t), this.$content = e(".datepicker--content", this.$datepicker), this.$nav = e(".datepicker--nav", this.$datepicker);
      },
      _triggerOnChange: function _triggerOnChange() {
        if (!this.selectedDates.length) {
          if ("" === this._prevOnSelectValue) return;
          return this._prevOnSelectValue = "", this.opts.onSelect("", "", this);
        }

        var t,
            e = this.selectedDates,
            i = n.getParsedDate(e[0]),
            s = this,
            a = new Date(i.year, i.month, i.date, i.hours, i.minutes);
        t = e.map(function (t) {
          return s.formatDate(s.loc.dateFormat, t);
        }).join(this.opts.multipleDatesSeparator), (this.opts.multipleDates || this.opts.range) && (a = e.map(function (t) {
          var e = n.getParsedDate(t);
          return new Date(e.year, e.month, e.date, e.hours, e.minutes);
        })), this._prevOnSelectValue = t, this.opts.onSelect(t, a, this);
      },
      next: function next() {
        var t = this.parsedDate,
            e = this.opts;

        switch (this.view) {
          case "days":
            this.date = new Date(t.year, t.month + 1, 1), e.onChangeMonth && e.onChangeMonth(this.parsedDate.month, this.parsedDate.year);
            break;

          case "months":
            this.date = new Date(t.year + 1, t.month, 1), e.onChangeYear && e.onChangeYear(this.parsedDate.year);
            break;

          case "years":
            this.date = new Date(t.year + 10, 0, 1), e.onChangeDecade && e.onChangeDecade(this.curDecade);
        }
      },
      prev: function prev() {
        var t = this.parsedDate,
            e = this.opts;

        switch (this.view) {
          case "days":
            this.date = new Date(t.year, t.month - 1, 1), e.onChangeMonth && e.onChangeMonth(this.parsedDate.month, this.parsedDate.year);
            break;

          case "months":
            this.date = new Date(t.year - 1, t.month, 1), e.onChangeYear && e.onChangeYear(this.parsedDate.year);
            break;

          case "years":
            this.date = new Date(t.year - 10, 0, 1), e.onChangeDecade && e.onChangeDecade(this.curDecade);
        }
      },
      formatDate: function formatDate(t, e) {
        e = e || this.date;
        var i,
            s = t,
            a = this._getWordBoundaryRegExp,
            h = this.loc,
            o = n.getLeadingZeroNum,
            r = n.getDecade(e),
            c = n.getParsedDate(e),
            d = c.fullHours,
            l = c.hours,
            u = t.match(a("aa")) || t.match(a("AA")),
            m = "am",
            p = this._replacer;

        switch (this.opts.timepicker && this.timepicker && u && (i = this.timepicker._getValidHoursFromDate(e, u), d = o(i.hours), l = i.hours, m = i.dayPeriod), !0) {
          case /@/.test(s):
            s = s.replace(/@/, e.getTime());

          case /aa/.test(s):
            s = p(s, a("aa"), m);

          case /AA/.test(s):
            s = p(s, a("AA"), m.toUpperCase());

          case /dd/.test(s):
            s = p(s, a("dd"), c.fullDate);

          case /d/.test(s):
            s = p(s, a("d"), c.date);

          case /DD/.test(s):
            s = p(s, a("DD"), h.days[c.day]);

          case /D/.test(s):
            s = p(s, a("D"), h.daysShort[c.day]);

          case /mm/.test(s):
            s = p(s, a("mm"), c.fullMonth);

          case /m/.test(s):
            s = p(s, a("m"), c.month + 1);

          case /MM/.test(s):
            s = p(s, a("MM"), this.loc.months[c.month]);

          case /M/.test(s):
            s = p(s, a("M"), h.monthsShort[c.month]);

          case /ii/.test(s):
            s = p(s, a("ii"), c.fullMinutes);

          case /i/.test(s):
            s = p(s, a("i"), c.minutes);

          case /hh/.test(s):
            s = p(s, a("hh"), d);

          case /h/.test(s):
            s = p(s, a("h"), l);

          case /yyyy/.test(s):
            s = p(s, a("yyyy"), c.year);

          case /yyyy1/.test(s):
            s = p(s, a("yyyy1"), r[0]);

          case /yyyy2/.test(s):
            s = p(s, a("yyyy2"), r[1]);

          case /yy/.test(s):
            s = p(s, a("yy"), c.year.toString().slice(-2));
        }

        return s;
      },
      _replacer: function _replacer(t, e, i) {
        return t.replace(e, function (t, e, s, a) {
          return e + i + a;
        });
      },
      _getWordBoundaryRegExp: function _getWordBoundaryRegExp(t) {
        var e = "\\s|\\.|-|/|\\\\|,|\\$|\\!|\\?|:|;";
        return new RegExp("(^|>|" + e + ")(" + t + ")($|<|" + e + ")", "g");
      },
      selectDate: function selectDate(t) {
        var e = this,
            i = e.opts,
            s = e.parsedDate,
            a = e.selectedDates,
            h = a.length,
            o = "";
        if (Array.isArray(t)) return void t.forEach(function (t) {
          e.selectDate(t);
        });

        if (t instanceof Date) {
          if (this.lastSelectedDate = t, this.timepicker && this.timepicker._setTime(t), e._trigger("selectDate", t), this.timepicker && (t.setHours(this.timepicker.hours), t.setMinutes(this.timepicker.minutes)), "days" == e.view && t.getMonth() != s.month && i.moveToOtherMonthsOnSelect && (o = new Date(t.getFullYear(), t.getMonth(), 1)), "years" == e.view && t.getFullYear() != s.year && i.moveToOtherYearsOnSelect && (o = new Date(t.getFullYear(), 0, 1)), o && (e.silent = !0, e.date = o, e.silent = !1, e.nav._render()), i.multipleDates && !i.range) {
            if (h === i.multipleDates) return;
            e._isSelected(t) || e.selectedDates.push(t);
          } else i.range ? 2 == h ? (e.selectedDates = [t], e.minRange = t, e.maxRange = "") : 1 == h ? (e.selectedDates.push(t), e.maxRange ? e.minRange = t : e.maxRange = t, n.bigger(e.maxRange, e.minRange) && (e.maxRange = e.minRange, e.minRange = t), e.selectedDates = [e.minRange, e.maxRange]) : (e.selectedDates = [t], e.minRange = t) : e.selectedDates = [t];

          e._setInputValue(), i.onSelect && e._triggerOnChange(), i.autoClose && !this.timepickerIsActive && (i.multipleDates || i.range ? i.range && 2 == e.selectedDates.length && e.hide() : e.hide()), e.views[this.currentView]._render();
        }
      },
      removeDate: function removeDate(t) {
        var e = this.selectedDates,
            i = this;
        if (t instanceof Date) return e.some(function (s, a) {
          return n.isSame(s, t) ? (e.splice(a, 1), i.selectedDates.length ? i.lastSelectedDate = i.selectedDates[i.selectedDates.length - 1] : (i.minRange = "", i.maxRange = "", i.lastSelectedDate = ""), i.views[i.currentView]._render(), i._setInputValue(), i.opts.onSelect && i._triggerOnChange(), !0) : void 0;
        });
      },
      today: function today() {
        this.silent = !0, this.view = this.opts.minView, this.silent = !1, this.date = new Date(), this.opts.todayButton instanceof Date && this.selectDate(this.opts.todayButton);
      },
      clear: function clear() {
        this.selectedDates = [], this.minRange = "", this.maxRange = "", this.views[this.currentView]._render(), this._setInputValue(), this.opts.onSelect && this._triggerOnChange();
      },
      update: function update(t, i) {
        var s = arguments.length,
            a = this.lastSelectedDate;
        return 2 == s ? this.opts[t] = i : 1 == s && "object" == _typeof(t) && (this.opts = e.extend(!0, this.opts, t)), this._createShortCuts(), this._syncWithMinMaxDates(), this._defineLocale(this.opts.language), this.nav._addButtonsIfNeed(), this.opts.onlyTimepicker || this.nav._render(), this.views[this.currentView]._render(), this.elIsInput && !this.opts.inline && (this._setPositionClasses(this.opts.position), this.visible && this.setPosition(this.opts.position)), this.opts.classes && this.$datepicker.addClass(this.opts.classes), this.opts.onlyTimepicker && this.$datepicker.addClass("-only-timepicker-"), this.opts.timepicker && (a && this.timepicker._handleDate(a), this.timepicker._updateRanges(), this.timepicker._updateCurrentTime(), a && (a.setHours(this.timepicker.hours), a.setMinutes(this.timepicker.minutes))), this._setInputValue(), this;
      },
      _syncWithMinMaxDates: function _syncWithMinMaxDates() {
        var t = this.date.getTime();
        this.silent = !0, this.minTime > t && (this.date = this.minDate), this.maxTime < t && (this.date = this.maxDate), this.silent = !1;
      },
      _isSelected: function _isSelected(t, e) {
        var i = !1;
        return this.selectedDates.some(function (s) {
          return n.isSame(s, t, e) ? (i = s, !0) : void 0;
        }), i;
      },
      _setInputValue: function _setInputValue() {
        var t,
            e = this,
            i = e.opts,
            s = e.loc.dateFormat,
            a = i.altFieldDateFormat,
            n = e.selectedDates.map(function (t) {
          return e.formatDate(s, t);
        });
        i.altField && e.$altField.length && (t = this.selectedDates.map(function (t) {
          return e.formatDate(a, t);
        }), t = t.join(this.opts.multipleDatesSeparator), this.$altField.val(t)), n = n.join(this.opts.multipleDatesSeparator), this.$el.val(n);
      },
      _isInRange: function _isInRange(t, e) {
        var i = t.getTime(),
            s = n.getParsedDate(t),
            a = n.getParsedDate(this.minDate),
            h = n.getParsedDate(this.maxDate),
            o = new Date(s.year, s.month, a.date).getTime(),
            r = new Date(s.year, s.month, h.date).getTime(),
            c = {
          day: i >= this.minTime && i <= this.maxTime,
          month: o >= this.minTime && r <= this.maxTime,
          year: s.year >= a.year && s.year <= h.year
        };
        return e ? c[e] : c.day;
      },
      _getDimensions: function _getDimensions(t) {
        var e = t.offset();
        return {
          width: t.outerWidth(),
          height: t.outerHeight(),
          left: e.left,
          top: e.top
        };
      },
      _getDateFromCell: function _getDateFromCell(t) {
        var e = this.parsedDate,
            s = t.data("year") || e.year,
            a = t.data("month") == i ? e.month : t.data("month"),
            n = t.data("date") || 1;
        return new Date(s, a, n);
      },
      _setPositionClasses: function _setPositionClasses(t) {
        t = t.split(" ");
        var e = t[0],
            i = t[1],
            s = "datepicker -" + e + "-" + i + "- -from-" + e + "-";
        this.visible && (s += " active"), this.$datepicker.removeAttr("class").addClass(s);
      },
      setPosition: function setPosition(t) {
        t = t || this.opts.position;

        var e,
            i,
            s = this._getDimensions(this.$el),
            a = this._getDimensions(this.$datepicker),
            n = t.split(" "),
            h = this.opts.offset,
            o = n[0],
            r = n[1];

        switch (o) {
          case "top":
            e = s.top - a.height - h;
            break;

          case "right":
            i = s.left + s.width + h;
            break;

          case "bottom":
            e = s.top + s.height + h;
            break;

          case "left":
            i = s.left - a.width - h;
        }

        switch (r) {
          case "top":
            e = s.top;
            break;

          case "right":
            i = s.left + s.width - a.width;
            break;

          case "bottom":
            e = s.top + s.height - a.height;
            break;

          case "left":
            i = s.left;
            break;

          case "center":
            /left|right/.test(o) ? e = s.top + s.height / 2 - a.height / 2 : i = s.left + s.width / 2 - a.width / 2;
        }

        this.$datepicker.css({
          left: i,
          top: e
        });
      },
      show: function show() {
        var t = this.opts.onShow;
        this.setPosition(this.opts.position), this.$datepicker.addClass("active"), this.visible = !0, t && this._bindVisionEvents(t);
      },
      hide: function hide() {
        var t = this.opts.onHide;
        this.$datepicker.removeClass("active").css({
          left: "-100000px"
        }), this.focused = "", this.keys = [], this.inFocus = !1, this.visible = !1, this.$el.blur(), t && this._bindVisionEvents(t);
      },
      down: function down(t) {
        this._changeView(t, "down");
      },
      up: function up(t) {
        this._changeView(t, "up");
      },
      _bindVisionEvents: function _bindVisionEvents(t) {
        this.$datepicker.off("transitionend.dp"), t(this, !1), this.$datepicker.one("transitionend.dp", t.bind(this, this, !0));
      },
      _changeView: function _changeView(t, e) {
        t = t || this.focused || this.date;
        var i = "up" == e ? this.viewIndex + 1 : this.viewIndex - 1;
        i > 2 && (i = 2), 0 > i && (i = 0), this.silent = !0, this.date = new Date(t.getFullYear(), t.getMonth(), 1), this.silent = !1, this.view = this.viewIndexes[i];
      },
      _handleHotKey: function _handleHotKey(t) {
        var e,
            i,
            s,
            a = n.getParsedDate(this._getFocusedDate()),
            h = this.opts,
            o = !1,
            r = !1,
            c = !1,
            d = a.year,
            l = a.month,
            u = a.date;

        switch (t) {
          case "ctrlRight":
          case "ctrlUp":
            l += 1, o = !0;
            break;

          case "ctrlLeft":
          case "ctrlDown":
            l -= 1, o = !0;
            break;

          case "shiftRight":
          case "shiftUp":
            r = !0, d += 1;
            break;

          case "shiftLeft":
          case "shiftDown":
            r = !0, d -= 1;
            break;

          case "altRight":
          case "altUp":
            c = !0, d += 10;
            break;

          case "altLeft":
          case "altDown":
            c = !0, d -= 10;
            break;

          case "ctrlShiftUp":
            this.up();
        }

        s = n.getDaysCount(new Date(d, l)), i = new Date(d, l, u), u > s && (u = s), i.getTime() < this.minTime ? i = this.minDate : i.getTime() > this.maxTime && (i = this.maxDate), this.focused = i, e = n.getParsedDate(i), o && h.onChangeMonth && h.onChangeMonth(e.month, e.year), r && h.onChangeYear && h.onChangeYear(e.year), c && h.onChangeDecade && h.onChangeDecade(this.curDecade);
      },
      _registerKey: function _registerKey(t) {
        var e = this.keys.some(function (e) {
          return e == t;
        });
        e || this.keys.push(t);
      },
      _unRegisterKey: function _unRegisterKey(t) {
        var e = this.keys.indexOf(t);
        this.keys.splice(e, 1);
      },
      _isHotKeyPressed: function _isHotKeyPressed() {
        var t,
            e = !1,
            i = this,
            s = this.keys.sort();

        for (var a in u) {
          t = u[a], s.length == t.length && t.every(function (t, e) {
            return t == s[e];
          }) && (i._trigger("hotKey", a), e = !0);
        }

        return e;
      },
      _trigger: function _trigger(t, e) {
        this.$el.trigger(t, e);
      },
      _focusNextCell: function _focusNextCell(t, e) {
        e = e || this.cellType;
        var i = n.getParsedDate(this._getFocusedDate()),
            s = i.year,
            a = i.month,
            h = i.date;

        if (!this._isHotKeyPressed()) {
          switch (t) {
            case 37:
              "day" == e ? h -= 1 : "", "month" == e ? a -= 1 : "", "year" == e ? s -= 1 : "";
              break;

            case 38:
              "day" == e ? h -= 7 : "", "month" == e ? a -= 3 : "", "year" == e ? s -= 4 : "";
              break;

            case 39:
              "day" == e ? h += 1 : "", "month" == e ? a += 1 : "", "year" == e ? s += 1 : "";
              break;

            case 40:
              "day" == e ? h += 7 : "", "month" == e ? a += 3 : "", "year" == e ? s += 4 : "";
          }

          var o = new Date(s, a, h);
          o.getTime() < this.minTime ? o = this.minDate : o.getTime() > this.maxTime && (o = this.maxDate), this.focused = o;
        }
      },
      _getFocusedDate: function _getFocusedDate() {
        var t = this.focused || this.selectedDates[this.selectedDates.length - 1],
            e = this.parsedDate;
        if (!t) switch (this.view) {
          case "days":
            t = new Date(e.year, e.month, new Date().getDate());
            break;

          case "months":
            t = new Date(e.year, e.month, 1);
            break;

          case "years":
            t = new Date(e.year, 0, 1);
        }
        return t;
      },
      _getCell: function _getCell(t, i) {
        i = i || this.cellType;
        var s,
            a = n.getParsedDate(t),
            h = '.datepicker--cell[data-year="' + a.year + '"]';

        switch (i) {
          case "month":
            h = '[data-month="' + a.month + '"]';
            break;

          case "day":
            h += '[data-month="' + a.month + '"][data-date="' + a.date + '"]';
        }

        return s = this.views[this.currentView].$el.find(h), s.length ? s : e("");
      },
      destroy: function destroy() {
        var t = this;
        t.$el.off(".adp").data("datepicker", ""), t.selectedDates = [], t.focused = "", t.views = {}, t.keys = [], t.minRange = "", t.maxRange = "", t.opts.inline || !t.elIsInput ? t.$datepicker.closest(".datepicker-inline").remove() : t.$datepicker.remove();
      },
      _handleAlreadySelectedDates: function _handleAlreadySelectedDates(t, e) {
        this.opts.range ? this.opts.toggleSelected ? this.removeDate(e) : 2 != this.selectedDates.length && this._trigger("clickCell", e) : this.opts.toggleSelected && this.removeDate(e), this.opts.toggleSelected || (this.lastSelectedDate = t, this.opts.timepicker && (this.timepicker._setTime(t), this.timepicker.update()));
      },
      _onShowEvent: function _onShowEvent(t) {
        this.visible || this.show();
      },
      _onBlur: function _onBlur() {
        !this.inFocus && this.visible && this.hide();
      },
      _onMouseDownDatepicker: function _onMouseDownDatepicker(t) {
        this.inFocus = !0;
      },
      _onMouseUpDatepicker: function _onMouseUpDatepicker(t) {
        this.inFocus = !1, t.originalEvent.inFocus = !0, t.originalEvent.timepickerFocus || this.$el.focus();
      },
      _onKeyUpGeneral: function _onKeyUpGeneral(t) {
        var e = this.$el.val();
        e || this.clear();
      },
      _onResize: function _onResize() {
        this.visible && this.setPosition();
      },
      _onMouseUpBody: function _onMouseUpBody(t) {
        t.originalEvent.inFocus || this.visible && !this.inFocus && this.hide();
      },
      _onMouseUpEl: function _onMouseUpEl(t) {
        t.originalEvent.inFocus = !0, setTimeout(this._onKeyUpGeneral.bind(this), 4);
      },
      _onKeyDown: function _onKeyDown(t) {
        var e = t.which;

        if (this._registerKey(e), e >= 37 && 40 >= e && (t.preventDefault(), this._focusNextCell(e)), 13 == e && this.focused) {
          if (this._getCell(this.focused).hasClass("-disabled-")) return;
          if (this.view != this.opts.minView) this.down();else {
            var i = this._isSelected(this.focused, this.cellType);

            if (!i) return this.timepicker && (this.focused.setHours(this.timepicker.hours), this.focused.setMinutes(this.timepicker.minutes)), void this.selectDate(this.focused);

            this._handleAlreadySelectedDates(i, this.focused);
          }
        }

        27 == e && this.hide();
      },
      _onKeyUp: function _onKeyUp(t) {
        var e = t.which;

        this._unRegisterKey(e);
      },
      _onHotKey: function _onHotKey(t, e) {
        this._handleHotKey(e);
      },
      _onMouseEnterCell: function _onMouseEnterCell(t) {
        var i = e(t.target).closest(".datepicker--cell"),
            s = this._getDateFromCell(i);

        this.silent = !0, this.focused && (this.focused = ""), i.addClass("-focus-"), this.focused = s, this.silent = !1, this.opts.range && 1 == this.selectedDates.length && (this.minRange = this.selectedDates[0], this.maxRange = "", n.less(this.minRange, this.focused) && (this.maxRange = this.minRange, this.minRange = ""), this.views[this.currentView]._update());
      },
      _onMouseLeaveCell: function _onMouseLeaveCell(t) {
        var i = e(t.target).closest(".datepicker--cell");
        i.removeClass("-focus-"), this.silent = !0, this.focused = "", this.silent = !1;
      },
      _onTimeChange: function _onTimeChange(t, e, i) {
        var s = new Date(),
            a = this.selectedDates,
            n = !1;
        a.length && (n = !0, s = this.lastSelectedDate), s.setHours(e), s.setMinutes(i), n || this._getCell(s).hasClass("-disabled-") ? (this._setInputValue(), this.opts.onSelect && this._triggerOnChange()) : this.selectDate(s);
      },
      _onClickCell: function _onClickCell(t, e) {
        this.timepicker && (e.setHours(this.timepicker.hours), e.setMinutes(this.timepicker.minutes)), this.selectDate(e);
      },

      set focused(t) {
        if (!t && this.focused) {
          var e = this._getCell(this.focused);

          e.length && e.removeClass("-focus-");
        }

        this._focused = t, this.opts.range && 1 == this.selectedDates.length && (this.minRange = this.selectedDates[0], this.maxRange = "", n.less(this.minRange, this._focused) && (this.maxRange = this.minRange, this.minRange = "")), this.silent || (this.date = t);
      },

      get focused() {
        return this._focused;
      },

      get parsedDate() {
        return n.getParsedDate(this.date);
      },

      set date(t) {
        return t instanceof Date ? (this.currentDate = t, this.inited && !this.silent && (this.views[this.view]._render(), this.nav._render(), this.visible && this.elIsInput && this.setPosition()), t) : void 0;
      },

      get date() {
        return this.currentDate;
      },

      set view(t) {
        return this.viewIndex = this.viewIndexes.indexOf(t), this.viewIndex < 0 ? void 0 : (this.prevView = this.currentView, this.currentView = t, this.inited && (this.views[t] ? this.views[t]._render() : this.views[t] = new e.fn.datepicker.Body(this, t, this.opts), this.views[this.prevView].hide(), this.views[t].show(), this.nav._render(), this.opts.onChangeView && this.opts.onChangeView(t), this.elIsInput && this.visible && this.setPosition()), t);
      },

      get view() {
        return this.currentView;
      },

      get cellType() {
        return this.view.substring(0, this.view.length - 1);
      },

      get minTime() {
        var t = n.getParsedDate(this.minDate);
        return new Date(t.year, t.month, t.date).getTime();
      },

      get maxTime() {
        var t = n.getParsedDate(this.maxDate);
        return new Date(t.year, t.month, t.date).getTime();
      },

      get curDecade() {
        return n.getDecade(this.date);
      }

    }, n.getDaysCount = function (t) {
      return new Date(t.getFullYear(), t.getMonth() + 1, 0).getDate();
    }, n.getParsedDate = function (t) {
      return {
        year: t.getFullYear(),
        month: t.getMonth(),
        fullMonth: t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1,
        date: t.getDate(),
        fullDate: t.getDate() < 10 ? "0" + t.getDate() : t.getDate(),
        day: t.getDay(),
        hours: t.getHours(),
        fullHours: t.getHours() < 10 ? "0" + t.getHours() : t.getHours(),
        minutes: t.getMinutes(),
        fullMinutes: t.getMinutes() < 10 ? "0" + t.getMinutes() : t.getMinutes()
      };
    }, n.getDecade = function (t) {
      var e = 10 * Math.floor(t.getFullYear() / 10);
      return [e, e + 9];
    }, n.template = function (t, e) {
      return t.replace(/#\{([\w]+)\}/g, function (t, i) {
        return e[i] || 0 === e[i] ? e[i] : void 0;
      });
    }, n.isSame = function (t, e, i) {
      if (!t || !e) return !1;
      var s = n.getParsedDate(t),
          a = n.getParsedDate(e),
          h = i ? i : "day",
          o = {
        day: s.date == a.date && s.month == a.month && s.year == a.year,
        month: s.month == a.month && s.year == a.year,
        year: s.year == a.year
      };
      return o[h];
    }, n.less = function (t, e, i) {
      return t && e ? e.getTime() < t.getTime() : !1;
    }, n.bigger = function (t, e, i) {
      return t && e ? e.getTime() > t.getTime() : !1;
    }, n.getLeadingZeroNum = function (t) {
      return parseInt(t) < 10 ? "0" + t : t;
    }, n.resetTime = function (t) {
      return "object" == _typeof(t) ? (t = n.getParsedDate(t), new Date(t.year, t.month, t.date)) : void 0;
    }, e.fn.datepicker = function (t) {
      return this.each(function () {
        if (e.data(this, o)) {
          var i = e.data(this, o);
          i.opts = e.extend(!0, i.opts, t), i.update();
        } else e.data(this, o, new m(this, t));
      });
    }, e.fn.datepicker.Constructor = m, e.fn.datepicker.language = {
      ru: {
        days: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
        daysShort: ["Вос", "Пон", "Вто", "Сре", "Чет", "Пят", "Суб"],
        daysMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
        months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
        monthsShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
        today: "Сегодня",
        clear: "Очистить",
        dateFormat: "dd.mm.yyyy",
        timeFormat: "hh:ii",
        firstDay: 1
      }
    }, e(function () {
      e(r).datepicker();
    });
  }(), function () {
    var t = {
      days: '<div class="datepicker--days datepicker--body"><div class="datepicker--days-names"></div><div class="datepicker--cells datepicker--cells-days"></div></div>',
      months: '<div class="datepicker--months datepicker--body"><div class="datepicker--cells datepicker--cells-months"></div></div>',
      years: '<div class="datepicker--years datepicker--body"><div class="datepicker--cells datepicker--cells-years"></div></div>'
    },
        s = e.fn.datepicker,
        a = s.Constructor;
    s.Body = function (t, i, s) {
      this.d = t, this.type = i, this.opts = s, this.$el = e(""), this.opts.onlyTimepicker || this.init();
    }, s.Body.prototype = {
      init: function init() {
        this._buildBaseHtml(), this._render(), this._bindEvents();
      },
      _bindEvents: function _bindEvents() {
        this.$el.on("click", ".datepicker--cell", e.proxy(this._onClickCell, this));
      },
      _buildBaseHtml: function _buildBaseHtml() {
        this.$el = e(t[this.type]).appendTo(this.d.$content), this.$names = e(".datepicker--days-names", this.$el), this.$cells = e(".datepicker--cells", this.$el);
      },
      _getDayNamesHtml: function _getDayNamesHtml(t, e, s, a) {
        return e = e != i ? e : t, s = s ? s : "", a = a != i ? a : 0, a > 7 ? s : 7 == e ? this._getDayNamesHtml(t, 0, s, ++a) : (s += '<div class="datepicker--day-name' + (this.d.isWeekend(e) ? " -weekend-" : "") + '">' + this.d.loc.daysMin[e] + "</div>", this._getDayNamesHtml(t, ++e, s, ++a));
      },
      _getCellContents: function _getCellContents(t, e) {
        var i = "datepicker--cell datepicker--cell-" + e,
            s = new Date(),
            n = this.d,
            h = a.resetTime(n.minRange),
            o = a.resetTime(n.maxRange),
            r = n.opts,
            c = a.getParsedDate(t),
            d = {},
            l = c.date;

        switch (e) {
          case "day":
            n.isWeekend(c.day) && (i += " -weekend-"), c.month != this.d.parsedDate.month && (i += " -other-month-", r.selectOtherMonths || (i += " -disabled-"), r.showOtherMonths || (l = ""));
            break;

          case "month":
            l = n.loc[n.opts.monthsField][c.month];
            break;

          case "year":
            var u = n.curDecade;
            l = c.year, (c.year < u[0] || c.year > u[1]) && (i += " -other-decade-", r.selectOtherYears || (i += " -disabled-"), r.showOtherYears || (l = ""));
        }

        return r.onRenderCell && (d = r.onRenderCell(t, e) || {}, l = d.html ? d.html : l, i += d.classes ? " " + d.classes : ""), r.range && (a.isSame(h, t, e) && (i += " -range-from-"), a.isSame(o, t, e) && (i += " -range-to-"), 1 == n.selectedDates.length && n.focused ? ((a.bigger(h, t) && a.less(n.focused, t) || a.less(o, t) && a.bigger(n.focused, t)) && (i += " -in-range-"), a.less(o, t) && a.isSame(n.focused, t) && (i += " -range-from-"), a.bigger(h, t) && a.isSame(n.focused, t) && (i += " -range-to-")) : 2 == n.selectedDates.length && a.bigger(h, t) && a.less(o, t) && (i += " -in-range-")), a.isSame(s, t, e) && (i += " -current-"), n.focused && a.isSame(t, n.focused, e) && (i += " -focus-"), n._isSelected(t, e) && (i += " -selected-"), (!n._isInRange(t, e) || d.disabled) && (i += " -disabled-"), {
          html: l,
          classes: i
        };
      },
      _getDaysHtml: function _getDaysHtml(t) {
        var e = a.getDaysCount(t),
            i = new Date(t.getFullYear(), t.getMonth(), 1).getDay(),
            s = new Date(t.getFullYear(), t.getMonth(), e).getDay(),
            n = i - this.d.loc.firstDay,
            h = 6 - s + this.d.loc.firstDay;
        n = 0 > n ? n + 7 : n, h = h > 6 ? h - 7 : h;

        for (var o, r, c = -n + 1, d = "", l = c, u = e + h; u >= l; l++) {
          r = t.getFullYear(), o = t.getMonth(), d += this._getDayHtml(new Date(r, o, l));
        }

        return d;
      },
      _getDayHtml: function _getDayHtml(t) {
        var e = this._getCellContents(t, "day");

        return '<div class="' + e.classes + '" data-date="' + t.getDate() + '" data-month="' + t.getMonth() + '" data-year="' + t.getFullYear() + '">' + e.html + "</div>";
      },
      _getMonthsHtml: function _getMonthsHtml(t) {
        for (var e = "", i = a.getParsedDate(t), s = 0; 12 > s;) {
          e += this._getMonthHtml(new Date(i.year, s)), s++;
        }

        return e;
      },
      _getMonthHtml: function _getMonthHtml(t) {
        var e = this._getCellContents(t, "month");

        return '<div class="' + e.classes + '" data-month="' + t.getMonth() + '">' + e.html + "</div>";
      },
      _getYearsHtml: function _getYearsHtml(t) {
        var e = (a.getParsedDate(t), a.getDecade(t)),
            i = e[0] - 1,
            s = "",
            n = i;

        for (n; n <= e[1] + 1; n++) {
          s += this._getYearHtml(new Date(n, 0));
        }

        return s;
      },
      _getYearHtml: function _getYearHtml(t) {
        var e = this._getCellContents(t, "year");

        return '<div class="' + e.classes + '" data-year="' + t.getFullYear() + '">' + e.html + "</div>";
      },
      _renderTypes: {
        days: function days() {
          var t = this._getDayNamesHtml(this.d.loc.firstDay),
              e = this._getDaysHtml(this.d.currentDate);

          this.$cells.html(e), this.$names.html(t);
        },
        months: function months() {
          var t = this._getMonthsHtml(this.d.currentDate);

          this.$cells.html(t);
        },
        years: function years() {
          var t = this._getYearsHtml(this.d.currentDate);

          this.$cells.html(t);
        }
      },
      _render: function _render() {
        this.opts.onlyTimepicker || this._renderTypes[this.type].bind(this)();
      },
      _update: function _update() {
        var t,
            i,
            s,
            a = e(".datepicker--cell", this.$cells),
            n = this;
        a.each(function (a, h) {
          i = e(this), s = n.d._getDateFromCell(e(this)), t = n._getCellContents(s, n.d.cellType), i.attr("class", t.classes);
        });
      },
      show: function show() {
        this.opts.onlyTimepicker || (this.$el.addClass("active"), this.acitve = !0);
      },
      hide: function hide() {
        this.$el.removeClass("active"), this.active = !1;
      },
      _handleClick: function _handleClick(t) {
        var e = t.data("date") || 1,
            i = t.data("month") || 0,
            s = t.data("year") || this.d.parsedDate.year,
            a = this.d;
        if (a.view != this.opts.minView) return void a.down(new Date(s, i, e));

        var n = new Date(s, i, e),
            h = this.d._isSelected(n, this.d.cellType);

        return h ? void a._handleAlreadySelectedDates.bind(a, h, n)() : void a._trigger("clickCell", n);
      },
      _onClickCell: function _onClickCell(t) {
        var i = e(t.target).closest(".datepicker--cell");
        i.hasClass("-disabled-") || this._handleClick.bind(this)(i);
      }
    };
  }(), function () {
    var t = '<div class="datepicker--nav-action" data-action="prev">#{prevHtml}</div><div class="datepicker--nav-title">#{title}</div><div class="datepicker--nav-action" data-action="next">#{nextHtml}</div>',
        i = '<div class="datepicker--buttons"></div>',
        s = '<span class="datepicker--button" data-action="#{action}">#{label}</span>',
        a = e.fn.datepicker,
        n = a.Constructor;
    a.Navigation = function (t, e) {
      this.d = t, this.opts = e, this.$buttonsContainer = "", this.init();
    }, a.Navigation.prototype = {
      init: function init() {
        this._buildBaseHtml(), this._bindEvents();
      },
      _bindEvents: function _bindEvents() {
        this.d.$nav.on("click", ".datepicker--nav-action", e.proxy(this._onClickNavButton, this)), this.d.$nav.on("click", ".datepicker--nav-title", e.proxy(this._onClickNavTitle, this)), this.d.$datepicker.on("click", ".datepicker--button", e.proxy(this._onClickNavButton, this));
      },
      _buildBaseHtml: function _buildBaseHtml() {
        this.opts.onlyTimepicker || this._render(), this._addButtonsIfNeed();
      },
      _addButtonsIfNeed: function _addButtonsIfNeed() {
        this.opts.todayButton && this._addButton("today"), this.opts.clearButton && this._addButton("clear");
      },
      _render: function _render() {
        var i = this._getTitle(this.d.currentDate),
            s = n.template(t, e.extend({
          title: i
        }, this.opts));

        this.d.$nav.html(s), "years" == this.d.view && e(".datepicker--nav-title", this.d.$nav).addClass("-disabled-"), this.setNavStatus();
      },
      _getTitle: function _getTitle(t) {
        return this.d.formatDate(this.opts.navTitles[this.d.view], t);
      },
      _addButton: function _addButton(t) {
        this.$buttonsContainer.length || this._addButtonsContainer();
        var i = {
          action: t,
          label: this.d.loc[t]
        },
            a = n.template(s, i);
        e("[data-action=" + t + "]", this.$buttonsContainer).length || this.$buttonsContainer.append(a);
      },
      _addButtonsContainer: function _addButtonsContainer() {
        this.d.$datepicker.append(i), this.$buttonsContainer = e(".datepicker--buttons", this.d.$datepicker);
      },
      setNavStatus: function setNavStatus() {
        if ((this.opts.minDate || this.opts.maxDate) && this.opts.disableNavWhenOutOfRange) {
          var t = this.d.parsedDate,
              e = t.month,
              i = t.year,
              s = t.date;

          switch (this.d.view) {
            case "days":
              this.d._isInRange(new Date(i, e - 1, 1), "month") || this._disableNav("prev"), this.d._isInRange(new Date(i, e + 1, 1), "month") || this._disableNav("next");
              break;

            case "months":
              this.d._isInRange(new Date(i - 1, e, s), "year") || this._disableNav("prev"), this.d._isInRange(new Date(i + 1, e, s), "year") || this._disableNav("next");
              break;

            case "years":
              var a = n.getDecade(this.d.date);
              this.d._isInRange(new Date(a[0] - 1, 0, 1), "year") || this._disableNav("prev"), this.d._isInRange(new Date(a[1] + 1, 0, 1), "year") || this._disableNav("next");
          }
        }
      },
      _disableNav: function _disableNav(t) {
        e('[data-action="' + t + '"]', this.d.$nav).addClass("-disabled-");
      },
      _activateNav: function _activateNav(t) {
        e('[data-action="' + t + '"]', this.d.$nav).removeClass("-disabled-");
      },
      _onClickNavButton: function _onClickNavButton(t) {
        var i = e(t.target).closest("[data-action]"),
            s = i.data("action");
        this.d[s]();
      },
      _onClickNavTitle: function _onClickNavTitle(t) {
        return e(t.target).hasClass("-disabled-") ? void 0 : "days" == this.d.view ? this.d.view = "months" : void (this.d.view = "years");
      }
    };
  }(), function () {
    var t = '<div class="datepicker--time"><div class="datepicker--time-current">   <span class="datepicker--time-current-hours">#{hourVisible}</span>   <span class="datepicker--time-current-colon">:</span>   <span class="datepicker--time-current-minutes">#{minValue}</span></div><div class="datepicker--time-sliders">   <div class="datepicker--time-row">      <input type="range" name="hours" value="#{hourValue}" min="#{hourMin}" max="#{hourMax}" step="#{hourStep}"/>   </div>   <div class="datepicker--time-row">      <input type="range" name="minutes" value="#{minValue}" min="#{minMin}" max="#{minMax}" step="#{minStep}"/>   </div></div></div>',
        i = e.fn.datepicker,
        s = i.Constructor;
    i.Timepicker = function (t, e) {
      this.d = t, this.opts = e, this.init();
    }, i.Timepicker.prototype = {
      init: function init() {
        var t = "input";
        this._setTime(this.d.date), this._buildHTML(), navigator.userAgent.match(/trident/gi) && (t = "change"), this.d.$el.on("selectDate", this._onSelectDate.bind(this)), this.$ranges.on(t, this._onChangeRange.bind(this)), this.$ranges.on("mouseup", this._onMouseUpRange.bind(this)), this.$ranges.on("mousemove focus ", this._onMouseEnterRange.bind(this)), this.$ranges.on("mouseout blur", this._onMouseOutRange.bind(this));
      },
      _setTime: function _setTime(t) {
        var e = s.getParsedDate(t);
        this._handleDate(t), this.hours = e.hours < this.minHours ? this.minHours : e.hours, this.minutes = e.minutes < this.minMinutes ? this.minMinutes : e.minutes;
      },
      _setMinTimeFromDate: function _setMinTimeFromDate(t) {
        this.minHours = t.getHours(), this.minMinutes = t.getMinutes(), this.d.lastSelectedDate && this.d.lastSelectedDate.getHours() > t.getHours() && (this.minMinutes = this.opts.minMinutes);
      },
      _setMaxTimeFromDate: function _setMaxTimeFromDate(t) {
        this.maxHours = t.getHours(), this.maxMinutes = t.getMinutes(), this.d.lastSelectedDate && this.d.lastSelectedDate.getHours() < t.getHours() && (this.maxMinutes = this.opts.maxMinutes);
      },
      _setDefaultMinMaxTime: function _setDefaultMinMaxTime() {
        var t = 23,
            e = 59,
            i = this.opts;
        this.minHours = i.minHours < 0 || i.minHours > t ? 0 : i.minHours, this.minMinutes = i.minMinutes < 0 || i.minMinutes > e ? 0 : i.minMinutes, this.maxHours = i.maxHours < 0 || i.maxHours > t ? t : i.maxHours, this.maxMinutes = i.maxMinutes < 0 || i.maxMinutes > e ? e : i.maxMinutes;
      },
      _validateHoursMinutes: function _validateHoursMinutes(t) {
        this.hours < this.minHours ? this.hours = this.minHours : this.hours > this.maxHours && (this.hours = this.maxHours), this.minutes < this.minMinutes ? this.minutes = this.minMinutes : this.minutes > this.maxMinutes && (this.minutes = this.maxMinutes);
      },
      _buildHTML: function _buildHTML() {
        var i = s.getLeadingZeroNum,
            a = {
          hourMin: this.minHours,
          hourMax: i(this.maxHours),
          hourStep: this.opts.hoursStep,
          hourValue: this.hours,
          hourVisible: i(this.displayHours),
          minMin: this.minMinutes,
          minMax: i(this.maxMinutes),
          minStep: this.opts.minutesStep,
          minValue: i(this.minutes)
        },
            n = s.template(t, a);
        this.$timepicker = e(n).appendTo(this.d.$datepicker), this.$ranges = e('[type="range"]', this.$timepicker), this.$hours = e('[name="hours"]', this.$timepicker), this.$minutes = e('[name="minutes"]', this.$timepicker), this.$hoursText = e(".datepicker--time-current-hours", this.$timepicker), this.$minutesText = e(".datepicker--time-current-minutes", this.$timepicker), this.d.ampm && (this.$ampm = e('<span class="datepicker--time-current-ampm">').appendTo(e(".datepicker--time-current", this.$timepicker)).html(this.dayPeriod), this.$timepicker.addClass("-am-pm-"));
      },
      _updateCurrentTime: function _updateCurrentTime() {
        var t = s.getLeadingZeroNum(this.displayHours),
            e = s.getLeadingZeroNum(this.minutes);
        this.$hoursText.html(t), this.$minutesText.html(e), this.d.ampm && this.$ampm.html(this.dayPeriod);
      },
      _updateRanges: function _updateRanges() {
        this.$hours.attr({
          min: this.minHours,
          max: this.maxHours
        }).val(this.hours), this.$minutes.attr({
          min: this.minMinutes,
          max: this.maxMinutes
        }).val(this.minutes);
      },
      _handleDate: function _handleDate(t) {
        this._setDefaultMinMaxTime(), t && (s.isSame(t, this.d.opts.minDate) ? this._setMinTimeFromDate(this.d.opts.minDate) : s.isSame(t, this.d.opts.maxDate) && this._setMaxTimeFromDate(this.d.opts.maxDate)), this._validateHoursMinutes(t);
      },
      update: function update() {
        this._updateRanges(), this._updateCurrentTime();
      },
      _getValidHoursFromDate: function _getValidHoursFromDate(t, e) {
        var i = t,
            a = t;
        t instanceof Date && (i = s.getParsedDate(t), a = i.hours);
        var n = e || this.d.ampm,
            h = "am";
        if (n) switch (!0) {
          case 0 == a:
            a = 12;
            break;

          case 12 == a:
            h = "pm";
            break;

          case a > 11:
            a -= 12, h = "pm";
        }
        return {
          hours: a,
          dayPeriod: h
        };
      },

      set hours(t) {
        this._hours = t;

        var e = this._getValidHoursFromDate(t);

        this.displayHours = e.hours, this.dayPeriod = e.dayPeriod;
      },

      get hours() {
        return this._hours;
      },

      _onChangeRange: function _onChangeRange(t) {
        var i = e(t.target),
            s = i.attr("name");
        this.d.timepickerIsActive = !0, this[s] = i.val(), this._updateCurrentTime(), this.d._trigger("timeChange", [this.hours, this.minutes]), this._handleDate(this.d.lastSelectedDate), this.update();
      },
      _onSelectDate: function _onSelectDate(t, e) {
        this._handleDate(e), this.update();
      },
      _onMouseEnterRange: function _onMouseEnterRange(t) {
        var i = e(t.target).attr("name");
        e(".datepicker--time-current-" + i, this.$timepicker).addClass("-focus-");
      },
      _onMouseOutRange: function _onMouseOutRange(t) {
        var i = e(t.target).attr("name");
        this.d.inFocus || e(".datepicker--time-current-" + i, this.$timepicker).removeClass("-focus-");
      },
      _onMouseUpRange: function _onMouseUpRange(t) {
        this.d.timepickerIsActive = !1;
      }
    };
  }();
}(window, jQuery);

/***/ }),

/***/ "./resources/js/vendor/uikit-icons.min.js":
/*!************************************************!*\
  !*** ./resources/js/vendor/uikit-icons.min.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! UIkit 3.4.3 | https://www.getuikit.com | (c) 2014 - 2020 YOOtheme | MIT License */
!function (t, i) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = i() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (i),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function () {
  "use strict";

  function i(t) {
    i.installed || t.icon.add({
      "500px": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.624,11.866c-0.141,0.132,0.479,0.658,0.662,0.418c0.051-0.046,0.607-0.61,0.662-0.664c0,0,0.738,0.719,0.814,0.719 c0.1,0,0.207-0.055,0.322-0.17c0.27-0.269,0.135-0.416,0.066-0.495l-0.631-0.616l0.658-0.668c0.146-0.156,0.021-0.314-0.1-0.449 c-0.182-0.18-0.359-0.226-0.471-0.125l-0.656,0.654l-0.654-0.654c-0.033-0.034-0.08-0.045-0.124-0.045 c-0.079,0-0.191,0.068-0.307,0.181c-0.202,0.202-0.247,0.351-0.133,0.462l0.665,0.665L9.624,11.866z"/><path d="M11.066,2.884c-1.061,0-2.185,0.248-3.011,0.604c-0.087,0.034-0.141,0.106-0.15,0.205C7.893,3.784,7.919,3.909,7.982,4.066 c0.05,0.136,0.187,0.474,0.452,0.372c0.844-0.326,1.779-0.507,2.633-0.507c0.963,0,1.9,0.191,2.781,0.564 c0.695,0.292,1.357,0.719,2.078,1.34c0.051,0.044,0.105,0.068,0.164,0.068c0.143,0,0.273-0.137,0.389-0.271 c0.191-0.214,0.324-0.395,0.135-0.575c-0.686-0.654-1.436-1.138-2.363-1.533C13.24,3.097,12.168,2.884,11.066,2.884z"/><path d="M16.43,15.747c-0.092-0.028-0.242,0.05-0.309,0.119l0,0c-0.652,0.652-1.42,1.169-2.268,1.521 c-0.877,0.371-1.814,0.551-2.779,0.551c-0.961,0-1.896-0.189-2.775-0.564c-0.848-0.36-1.612-0.879-2.268-1.53 c-0.682-0.688-1.196-1.455-1.529-2.268c-0.325-0.799-0.471-1.643-0.471-1.643c-0.045-0.24-0.258-0.249-0.567-0.203 c-0.128,0.021-0.519,0.079-0.483,0.36v0.01c0.105,0.644,0.289,1.284,0.545,1.895c0.417,0.969,1.002,1.849,1.756,2.604 c0.757,0.754,1.636,1.34,2.604,1.757C8.901,18.785,9.97,19,11.088,19c1.104,0,2.186-0.215,3.188-0.645 c1.838-0.896,2.604-1.757,2.604-1.757c0.182-0.204,0.227-0.317-0.1-0.643C16.779,15.956,16.525,15.774,16.43,15.747z"/><path d="M5.633,13.287c0.293,0.71,0.723,1.341,1.262,1.882c0.54,0.54,1.172,0.971,1.882,1.264c0.731,0.303,1.509,0.461,2.298,0.461 c0.801,0,1.578-0.158,2.297-0.461c0.711-0.293,1.344-0.724,1.883-1.264c0.543-0.541,0.971-1.172,1.264-1.882 c0.314-0.721,0.463-1.5,0.463-2.298c0-0.79-0.148-1.569-0.463-2.289c-0.293-0.699-0.721-1.329-1.264-1.881 c-0.539-0.541-1.172-0.959-1.867-1.263c-0.721-0.303-1.5-0.461-2.299-0.461c-0.802,0-1.613,0.159-2.322,0.461 c-0.577,0.25-1.544,0.867-2.119,1.454v0.012V2.108h8.16C15.1,2.104,15.1,1.69,15.1,1.552C15.1,1.417,15.1,1,14.809,1H5.915 C5.676,1,5.527,1.192,5.527,1.384v6.84c0,0.214,0.273,0.372,0.529,0.428c0.5,0.105,0.614-0.056,0.737-0.224l0,0 c0.18-0.273,0.776-0.884,0.787-0.894c0.901-0.905,2.117-1.408,3.416-1.408c1.285,0,2.5,0.501,3.412,1.408 c0.914,0.914,1.408,2.122,1.408,3.405c0,1.288-0.508,2.496-1.408,3.405c-0.9,0.896-2.152,1.406-3.438,1.406 c-0.877,0-1.711-0.229-2.433-0.671v-4.158c0-0.553,0.237-1.151,0.643-1.614c0.462-0.519,1.094-0.799,1.782-0.799 c0.664,0,1.293,0.253,1.758,0.715c0.459,0.459,0.709,1.071,0.709,1.723c0,1.385-1.094,2.468-2.488,2.468 c-0.273,0-0.769-0.121-0.781-0.125c-0.281-0.087-0.405,0.306-0.438,0.436c-0.159,0.496,0.079,0.585,0.123,0.607 c0.452,0.137,0.743,0.157,1.129,0.157c1.973,0,3.572-1.6,3.572-3.57c0-1.964-1.6-3.552-3.572-3.552c-0.97,0-1.872,0.36-2.546,1.038 c-0.656,0.631-1.027,1.487-1.027,2.322v3.438v-0.011c-0.372-0.42-0.732-1.041-0.981-1.682c-0.102-0.248-0.315-0.202-0.607-0.113 c-0.135,0.035-0.519,0.157-0.44,0.439C5.372,12.799,5.577,13.164,5.633,13.287z"/></svg>',
      album: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="2" width="10" height="1"/><rect x="3" y="4" width="14" height="1"/><rect fill="none" stroke="#000" x="1.5" y="6.5" width="17" height="11"/></svg>',
      "arrow-down": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="10.5,16.08 5.63,10.66 6.37,10 10.5,14.58 14.63,10 15.37,10.66"/><line fill="none" stroke="#000" x1="10.5" y1="4" x2="10.5" y2="15"/></svg>',
      "arrow-left": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="10 14 5 9.5 10 5"/><line fill="none" stroke="#000" x1="16" y1="9.5" x2="5" y2="9.52"/></svg>',
      "arrow-right": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="10 5 15 9.5 10 14"/><line fill="none" stroke="#000" x1="4" y1="9.5" x2="15" y2="9.5"/></svg>',
      "arrow-up": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="10.5,4 15.37,9.4 14.63,10.08 10.5,5.49 6.37,10.08 5.63,9.4"/><line fill="none" stroke="#000" x1="10.5" y1="16" x2="10.5" y2="5"/></svg>',
      ban: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/><line fill="none" stroke="#000" stroke-width="1.1" x1="4" y1="3.5" x2="16" y2="16.5"/></svg>',
      behance: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.5,10.6c-0.4-0.5-0.9-0.9-1.6-1.1c1.7-1,2.2-3.2,0.7-4.7C7.8,4,6.3,4,5.2,4C3.5,4,1.7,4,0,4v12c1.7,0,3.4,0,5.2,0 c1,0,2.1,0,3.1-0.5C10.2,14.6,10.5,12.3,9.5,10.6L9.5,10.6z M5.6,6.1c1.8,0,1.8,2.7-0.1,2.7c-1,0-2,0-2.9,0V6.1H5.6z M2.6,13.8v-3.1 c1.1,0,2.1,0,3.2,0c2.1,0,2.1,3.2,0.1,3.2L2.6,13.8z"/><path d="M19.9,10.9C19.7,9.2,18.7,7.6,17,7c-4.2-1.3-7.3,3.4-5.3,7.1c0.9,1.7,2.8,2.3,4.7,2.1c1.7-0.2,2.9-1.3,3.4-2.9h-2.2 c-0.4,1.3-2.4,1.5-3.5,0.6c-0.4-0.4-0.6-1.1-0.6-1.7H20C20,11.7,19.9,10.9,19.9,10.9z M13.5,10.6c0-1.6,2.3-2.7,3.5-1.4 c0.4,0.4,0.5,0.9,0.6,1.4H13.5L13.5,10.6z"/><rect x="13" y="4" width="5" height="1.4"/></svg>',
      bell: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.1" d="M17,15.5 L3,15.5 C2.99,14.61 3.79,13.34 4.1,12.51 C4.58,11.3 4.72,10.35 5.19,7.01 C5.54,4.53 5.89,3.2 7.28,2.16 C8.13,1.56 9.37,1.5 9.81,1.5 L9.96,1.5 C9.96,1.5 11.62,1.41 12.67,2.17 C14.08,3.2 14.42,4.54 14.77,7.02 C15.26,10.35 15.4,11.31 15.87,12.52 C16.2,13.34 17.01,14.61 17,15.5 L17,15.5 Z"/><path fill="none" stroke="#000" d="M12.39,16 C12.39,17.37 11.35,18.43 9.91,18.43 C8.48,18.43 7.42,17.37 7.42,16"/></svg>',
      bold: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5,15.3 C5.66,15.3 5.9,15 5.9,14.53 L5.9,5.5 C5.9,4.92 5.56,4.7 5,4.7 L5,4 L8.95,4 C12.6,4 13.7,5.37 13.7,6.9 C13.7,7.87 13.14,9.17 10.86,9.59 L10.86,9.7 C13.25,9.86 14.29,11.28 14.3,12.54 C14.3,14.47 12.94,16 9,16 L5,16 L5,15.3 Z M9,9.3 C11.19,9.3 11.8,8.5 11.85,7 C11.85,5.65 11.3,4.8 9,4.8 L7.67,4.8 L7.67,9.3 L9,9.3 Z M9.185,15.22 C11.97,15 12.39,14 12.4,12.58 C12.4,11.15 11.39,10 9,10 L7.67,10 L7.67,15 L9.18,15 Z"/></svg>',
      bolt: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.74,20 L7.73,12 L3,12 L15.43,1 L12.32,9 L17.02,9 L4.74,20 L4.74,20 L4.74,20 Z M9.18,11 L7.1,16.39 L14.47,10 L10.86,10 L12.99,4.67 L5.61,11 L9.18,11 L9.18,11 L9.18,11 Z"/></svg>',
      bookmark: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" points="5.5 1.5 15.5 1.5 15.5 17.5 10.5 12.5 5.5 17.5"/></svg>',
      calendar: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M 2,3 2,17 18,17 18,3 2,3 Z M 17,16 3,16 3,8 17,8 17,16 Z M 17,7 3,7 3,4 17,4 17,7 Z"/><rect width="1" height="3" x="6" y="2"/><rect width="1" height="3" x="13" y="2"/></svg>',
      camera: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10.8" r="3.8"/><path fill="none" stroke="#000" d="M1,4.5 C0.7,4.5 0.5,4.7 0.5,5 L0.5,17 C0.5,17.3 0.7,17.5 1,17.5 L19,17.5 C19.3,17.5 19.5,17.3 19.5,17 L19.5,5 C19.5,4.7 19.3,4.5 19,4.5 L13.5,4.5 L13.5,2.9 C13.5,2.6 13.3,2.5 13,2.5 L7,2.5 C6.7,2.5 6.5,2.6 6.5,2.9 L6.5,4.5 L1,4.5 L1,4.5 Z"/></svg>',
      cart: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="7.3" cy="17.3" r="1.4"/><circle cx="13.3" cy="17.3" r="1.4"/><polyline fill="none" stroke="#000" points="0 2 3.2 4 5.3 12.5 16 12.5 18 6.5 8 6.5"/></svg>',
      check: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.1" points="4,10 8,15 17,4"/></svg>',
      "chevron-double-left": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.03" points="10 14 6 10 10 6"/><polyline fill="none" stroke="#000" stroke-width="1.03" points="14 14 10 10 14 6"/></svg>',
      "chevron-double-right": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.03" points="10 6 14 10 10 14"/><polyline fill="none" stroke="#000" stroke-width="1.03" points="6 6 10 10 6 14"/></svg>',
      "chevron-down": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.03" points="16 7 10 13 4 7"/></svg>',
      "chevron-left": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.03" points="13 16 7 10 13 4"/></svg>',
      "chevron-right": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.03" points="7 4 13 10 7 16"/></svg>',
      "chevron-up": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.03" points="4 13 10 7 16 13"/></svg>',
      clock: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/><rect x="9" y="4" width="1" height="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M13.018,14.197 L9.445,10.625"/></svg>',
      close: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.06" d="M16,16 L4,4"/><path fill="none" stroke="#000" stroke-width="1.06" d="M16,4 L4,16"/></svg>',
      "cloud-download": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.1" d="M6.5,14.61 L3.75,14.61 C1.96,14.61 0.5,13.17 0.5,11.39 C0.5,9.76 1.72,8.41 3.3,8.2 C3.38,5.31 5.75,3 8.68,3 C11.19,3 13.31,4.71 13.89,7.02 C14.39,6.8 14.93,6.68 15.5,6.68 C17.71,6.68 19.5,8.45 19.5,10.64 C19.5,12.83 17.71,14.6 15.5,14.6 L12.5,14.6"/><polyline fill="none" stroke="#000" points="11.75 16 9.5 18.25 7.25 16"/><path fill="none" stroke="#000" d="M9.5,18 L9.5,9.5"/></svg>',
      "cloud-upload": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.1" d="M6.5,14.61 L3.75,14.61 C1.96,14.61 0.5,13.17 0.5,11.39 C0.5,9.76 1.72,8.41 3.31,8.2 C3.38,5.31 5.75,3 8.68,3 C11.19,3 13.31,4.71 13.89,7.02 C14.39,6.8 14.93,6.68 15.5,6.68 C17.71,6.68 19.5,8.45 19.5,10.64 C19.5,12.83 17.71,14.6 15.5,14.6 L12.5,14.6"/><polyline fill="none" stroke="#000" points="7.25 11.75 9.5 9.5 11.75 11.75"/><path fill="none" stroke="#000" d="M9.5,18 L9.5,9.5"/></svg>',
      code: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.01" points="13,4 19,10 13,16"/><polyline fill="none" stroke="#000" stroke-width="1.01" points="7,4 1,10 7,16"/></svg>',
      cog: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" cx="9.997" cy="10" r="3.31"/><path fill="none" stroke="#000" d="M18.488,12.285 L16.205,16.237 C15.322,15.496 14.185,15.281 13.303,15.791 C12.428,16.289 12.047,17.373 12.246,18.5 L7.735,18.5 C7.938,17.374 7.553,16.299 6.684,15.791 C5.801,15.27 4.655,15.492 3.773,16.237 L1.5,12.285 C2.573,11.871 3.317,10.999 3.317,9.991 C3.305,8.98 2.573,8.121 1.5,7.716 L3.765,3.784 C4.645,4.516 5.794,4.738 6.687,4.232 C7.555,3.722 7.939,2.637 7.735,1.5 L12.263,1.5 C12.072,2.637 12.441,3.71 13.314,4.22 C14.206,4.73 15.343,4.516 16.225,3.794 L18.487,7.714 C17.404,8.117 16.661,8.988 16.67,10.009 C16.672,11.018 17.415,11.88 18.488,12.285 L18.488,12.285 Z"/></svg>',
      comment: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6,18.71 L6,14 L1,14 L1,1 L19,1 L19,14 L10.71,14 L6,18.71 L6,18.71 Z M2,13 L7,13 L7,16.29 L10.29,13 L18,13 L18,2 L2,2 L2,13 L2,13 Z"/></svg>',
      commenting: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" points="1.5,1.5 18.5,1.5 18.5,13.5 10.5,13.5 6.5,17.5 6.5,13.5 1.5,13.5"/><circle cx="10" cy="8" r="1"/><circle cx="6" cy="8" r="1"/><circle cx="14" cy="8" r="1"/></svg>',
      comments: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="2 0.5 19.5 0.5 19.5 13"/><path d="M5,19.71 L5,15 L0,15 L0,2 L18,2 L18,15 L9.71,15 L5,19.71 L5,19.71 L5,19.71 Z M1,14 L6,14 L6,17.29 L9.29,14 L17,14 L17,3 L1,3 L1,14 L1,14 L1,14 Z"/></svg>',
      copy: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" x="3.5" y="2.5" width="12" height="16"/><polyline fill="none" stroke="#000" points="5 0.5 17.5 0.5 17.5 17"/></svg>',
      "credit-card": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" x="1.5" y="4.5" width="17" height="12"/><rect x="1" y="7" width="18" height="3"/></svg>',
      database: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><ellipse fill="none" stroke="#000" cx="10" cy="4.64" rx="7.5" ry="3.14"/><path fill="none" stroke="#000" d="M17.5,8.11 C17.5,9.85 14.14,11.25 10,11.25 C5.86,11.25 2.5,9.84 2.5,8.11"/><path fill="none" stroke="#000" d="M17.5,11.25 C17.5,12.99 14.14,14.39 10,14.39 C5.86,14.39 2.5,12.98 2.5,11.25"/><path fill="none" stroke="#000" d="M17.49,4.64 L17.5,14.36 C17.5,16.1 14.14,17.5 10,17.5 C5.86,17.5 2.5,16.09 2.5,14.36 L2.5,4.64"/></svg>',
      desktop: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="15" width="1" height="2"/><rect x="11" y="15" width="1" height="2"/><rect x="5" y="16" width="10" height="1"/><rect fill="none" stroke="#000" x="1.5" y="3.5" width="17" height="11"/></svg>',
      download: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="14,10 9.5,14.5 5,10"/><rect x="3" y="17" width="13" height="1"/><line fill="none" stroke="#000" x1="9.5" y1="13.91" x2="9.5" y2="3"/></svg>',
      dribbble: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.4" d="M1.3,8.9c0,0,5,0.1,8.6-1c1.4-0.4,2.6-0.9,4-1.9 c1.4-1.1,2.5-2.5,2.5-2.5"/><path fill="none" stroke="#000" stroke-width="1.4" d="M3.9,16.6c0,0,1.7-2.8,3.5-4.2 c1.8-1.3,4-2,5.7-2.2C16,10,19,10.6,19,10.6"/><path fill="none" stroke="#000" stroke-width="1.4" d="M6.9,1.6c0,0,3.3,4.6,4.2,6.8 c0.4,0.9,1.3,3.1,1.9,5.2c0.6,2,0.9,4.4,0.9,4.4"/><circle fill="none" stroke="#000" stroke-width="1.4" cx="10" cy="10" r="9"/></svg>',
      etsy: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M8,4.26C8,4.07,8,4,8.31,4h4.46c.79,0,1.22.67,1.53,1.91l.25,1h.76c.14-2.82.26-4,.26-4S13.65,3,12.52,3H6.81L3.75,2.92v.84l1,.2c.73.11.9.27,1,1,0,0,.06,2,.06,5.17s-.06,5.14-.06,5.14c0,.59-.23.81-1,.94l-1,.2v.84l3.06-.1h5.11c1.15,0,3.82.1,3.82.1,0-.7.45-3.88.51-4.22h-.73l-.76,1.69a2.25,2.25,0,0,1-2.45,1.47H9.4c-1,0-1.44-.4-1.44-1.24V10.44s2.16,0,2.86.06c.55,0,.85.19,1.06,1l.23,1H13L12.9,9.94,13,7.41h-.85l-.28,1.13c-.16.74-.28.84-1,1-1,.1-2.89.09-2.89.09Z"/></svg>',
      expand: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 18 2 18 7 17 7 17 3 13 3"/><polygon points="2 13 3 13 3 17 7 17 7 18 2 18"/><path fill="none" stroke="#000" stroke-width="1.1" d="M11,9 L17,3"/><path fill="none" stroke="#000" stroke-width="1.1" d="M3,17 L9,11"/></svg>',
      facebook: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11,10h2.6l0.4-3H11V5.3c0-0.9,0.2-1.5,1.5-1.5H14V1.1c-0.3,0-1-0.1-2.1-0.1C9.6,1,8,2.4,8,5v2H5.5v3H8v8h3V10z"/></svg>',
      "file-edit": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M18.65,1.68 C18.41,1.45 18.109,1.33 17.81,1.33 C17.499,1.33 17.209,1.45 16.98,1.68 L8.92,9.76 L8,12.33 L10.55,11.41 L18.651,3.34 C19.12,2.87 19.12,2.15 18.65,1.68 L18.65,1.68 L18.65,1.68 Z"/><polyline fill="none" stroke="#000" points="16.5 8.482 16.5 18.5 3.5 18.5 3.5 1.5 14.211 1.5"/></svg>',
      "file-pdf": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" width="13" height="17" x="3.5" y="1.5"/><path d="M14.65 11.67c-.48.3-1.37-.19-1.79-.37a4.65 4.65 0 0 1 1.49.06c.35.1.36.28.3.31zm-6.3.06l.43-.79a14.7 14.7 0 0 0 .75-1.64 5.48 5.48 0 0 0 1.25 1.55l.2.15a16.36 16.36 0 0 0-2.63.73zM9.5 5.32c.2 0 .32.5.32.97a1.99 1.99 0 0 1-.23 1.04 5.05 5.05 0 0 1-.17-1.3s0-.71.08-.71zm-3.9 9a4.35 4.35 0 0 1 1.21-1.46l.24-.22a4.35 4.35 0 0 1-1.46 1.68zm9.23-3.3a2.05 2.05 0 0 0-1.32-.3 11.07 11.07 0 0 0-1.58.11 4.09 4.09 0 0 1-.74-.5 5.39 5.39 0 0 1-1.32-2.06 10.37 10.37 0 0 0 .28-2.62 1.83 1.83 0 0 0-.07-.25.57.57 0 0 0-.52-.4H9.4a.59.59 0 0 0-.6.38 6.95 6.95 0 0 0 .37 3.14c-.26.63-1 2.12-1 2.12-.3.58-.57 1.08-.82 1.5l-.8.44A3.11 3.11 0 0 0 5 14.16a.39.39 0 0 0 .15.42l.24.13c1.15.56 2.28-1.74 2.66-2.42a23.1 23.1 0 0 1 3.59-.85 4.56 4.56 0 0 0 2.91.8.5.5 0 0 0 .3-.21 1.1 1.1 0 0 0 .12-.75.84.84 0 0 0-.14-.25z"/></svg>',
      "file-text": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" width="13" height="17" x="3.5" y="1.5"/><line fill="none" stroke="#000" x1="6" x2="12" y1="12.5" y2="12.5"/><line fill="none" stroke="#000" x1="6" x2="14" y1="8.5" y2="8.5"/><line fill="none" stroke="#000" x1="6" x2="14" y1="6.5" y2="6.5"/><line fill="none" stroke="#000" x1="6" x2="14" y1="10.5" y2="10.5"/></svg>',
      file: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" x="3.5" y="1.5" width="13" height="17"/></svg>',
      flickr: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="5.5" cy="9.5" r="3.5"/><circle cx="14.5" cy="9.5" r="3.5"/></svg>',
      folder: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" points="9.5 5.5 8.5 3.5 1.5 3.5 1.5 16.5 18.5 16.5 18.5 5.5"/></svg>',
      forward: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.47,13.11 C4.02,10.02 6.27,7.85 9.04,6.61 C9.48,6.41 10.27,6.13 11,5.91 L11,2 L18.89,9 L11,16 L11,12.13 C9.25,12.47 7.58,13.19 6.02,14.25 C3.03,16.28 1.63,18.54 1.63,18.54 C1.63,18.54 1.38,15.28 2.47,13.11 L2.47,13.11 Z M5.3,13.53 C6.92,12.4 9.04,11.4 12,10.92 L12,13.63 L17.36,9 L12,4.25 L12,6.8 C11.71,6.86 10.86,7.02 9.67,7.49 C6.79,8.65 4.58,10.96 3.49,13.08 C3.18,13.7 2.68,14.87 2.49,16 C3.28,15.05 4.4,14.15 5.3,13.53 L5.3,13.53 Z"/></svg>',
      foursquare: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.23,2 C15.96,2 16.4,2.41 16.5,2.86 C16.57,3.15 16.56,3.44 16.51,3.73 C16.46,4.04 14.86,11.72 14.75,12.03 C14.56,12.56 14.16,12.82 13.61,12.83 C13.03,12.84 11.09,12.51 10.69,13 C10.38,13.38 7.79,16.39 6.81,17.53 C6.61,17.76 6.4,17.96 6.08,17.99 C5.68,18.04 5.29,17.87 5.17,17.45 C5.12,17.28 5.1,17.09 5.1,16.91 C5.1,12.4 4.86,7.81 5.11,3.31 C5.17,2.5 5.81,2.12 6.53,2 L15.23,2 L15.23,2 Z M9.76,11.42 C9.94,11.19 10.17,11.1 10.45,11.1 L12.86,11.1 C13.12,11.1 13.31,10.94 13.36,10.69 C13.37,10.64 13.62,9.41 13.74,8.83 C13.81,8.52 13.53,8.28 13.27,8.28 C12.35,8.29 11.42,8.28 10.5,8.28 C9.84,8.28 9.83,7.69 9.82,7.21 C9.8,6.85 10.13,6.55 10.5,6.55 C11.59,6.56 12.67,6.55 13.76,6.55 C14.03,6.55 14.23,6.4 14.28,6.14 C14.34,5.87 14.67,4.29 14.67,4.29 C14.67,4.29 14.82,3.74 14.19,3.74 L7.34,3.74 C7,3.75 6.84,4.02 6.84,4.33 C6.84,7.58 6.85,14.95 6.85,14.99 C6.87,15 8.89,12.51 9.76,11.42 L9.76,11.42 Z"/></svg>',
      future: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline points="19 2 18 2 18 6 14 6 14 7 19 7 19 2"/><path fill="none" stroke="#000" stroke-width="1.1" d="M18,6.548 C16.709,3.29 13.354,1 9.6,1 C4.6,1 0.6,5 0.6,10 C0.6,15 4.6,19 9.6,19 C14.6,19 18.6,15 18.6,10"/><rect x="9" y="4" width="1" height="7"/><path d="M13.018,14.197 L9.445,10.625" fill="none" stroke="#000" stroke-width="1.1"/></svg>',
      "git-branch": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.2" cx="7" cy="3" r="2"/><circle fill="none" stroke="#000" stroke-width="1.2" cx="14" cy="6" r="2"/><circle fill="none" stroke="#000" stroke-width="1.2" cx="7" cy="17" r="2"/><path fill="none" stroke="#000" stroke-width="2" d="M14,8 C14,10.41 12.43,10.87 10.56,11.25 C9.09,11.54 7,12.06 7,15 L7,5"/></svg>',
      "git-fork": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.2" cx="5.79" cy="2.79" r="1.79"/><circle fill="none" stroke="#000" stroke-width="1.2" cx="14.19" cy="2.79" r="1.79"/><circle fill="none" stroke="#000" stroke-width="1.2" cx="10.03" cy="16.79" r="1.79"/><path fill="none" stroke="#000" stroke-width="2" d="M5.79,4.57 L5.79,6.56 C5.79,9.19 10.03,10.22 10.03,13.31 C10.03,14.86 10.04,14.55 10.04,14.55 C10.04,14.37 10.04,14.86 10.04,13.31 C10.04,10.22 14.2,9.19 14.2,6.56 L14.2,4.57"/></svg>',
      "github-alt": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10,0.5 C4.75,0.5 0.5,4.76 0.5,10.01 C0.5,15.26 4.75,19.51 10,19.51 C15.24,19.51 19.5,15.26 19.5,10.01 C19.5,4.76 15.25,0.5 10,0.5 L10,0.5 Z M12.81,17.69 C12.81,17.69 12.81,17.7 12.79,17.69 C12.47,17.75 12.35,17.59 12.35,17.36 L12.35,16.17 C12.35,15.45 12.09,14.92 11.58,14.56 C12.2,14.51 12.77,14.39 13.26,14.21 C13.87,13.98 14.36,13.69 14.74,13.29 C15.42,12.59 15.76,11.55 15.76,10.17 C15.76,9.25 15.45,8.46 14.83,7.8 C15.1,7.08 15.07,6.29 14.75,5.44 L14.51,5.42 C14.34,5.4 14.06,5.46 13.67,5.61 C13.25,5.78 12.79,6.03 12.31,6.35 C11.55,6.16 10.81,6.05 10.09,6.05 C9.36,6.05 8.61,6.15 7.88,6.35 C7.28,5.96 6.75,5.68 6.26,5.54 C6.07,5.47 5.9,5.44 5.78,5.44 L5.42,5.44 C5.06,6.29 5.04,7.08 5.32,7.8 C4.7,8.46 4.4,9.25 4.4,10.17 C4.4,11.94 4.96,13.16 6.08,13.84 C6.53,14.13 7.05,14.32 7.69,14.43 C8.03,14.5 8.32,14.54 8.55,14.55 C8.07,14.89 7.82,15.42 7.82,16.16 L7.82,17.51 C7.8,17.69 7.7,17.8 7.51,17.8 C4.21,16.74 1.82,13.65 1.82,10.01 C1.82,5.5 5.49,1.83 10,1.83 C14.5,1.83 18.17,5.5 18.17,10.01 C18.18,13.53 15.94,16.54 12.81,17.69 L12.81,17.69 Z"/></svg>',
      github: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10,1 C5.03,1 1,5.03 1,10 C1,13.98 3.58,17.35 7.16,18.54 C7.61,18.62 7.77,18.34 7.77,18.11 C7.77,17.9 7.76,17.33 7.76,16.58 C5.26,17.12 4.73,15.37 4.73,15.37 C4.32,14.33 3.73,14.05 3.73,14.05 C2.91,13.5 3.79,13.5 3.79,13.5 C4.69,13.56 5.17,14.43 5.17,14.43 C5.97,15.8 7.28,15.41 7.79,15.18 C7.87,14.6 8.1,14.2 8.36,13.98 C6.36,13.75 4.26,12.98 4.26,9.53 C4.26,8.55 4.61,7.74 5.19,7.11 C5.1,6.88 4.79,5.97 5.28,4.73 C5.28,4.73 6.04,4.49 7.75,5.65 C8.47,5.45 9.24,5.35 10,5.35 C10.76,5.35 11.53,5.45 12.25,5.65 C13.97,4.48 14.72,4.73 14.72,4.73 C15.21,5.97 14.9,6.88 14.81,7.11 C15.39,7.74 15.73,8.54 15.73,9.53 C15.73,12.99 13.63,13.75 11.62,13.97 C11.94,14.25 12.23,14.8 12.23,15.64 C12.23,16.84 12.22,17.81 12.22,18.11 C12.22,18.35 12.38,18.63 12.84,18.54 C16.42,17.35 19,13.98 19,10 C19,5.03 14.97,1 10,1 L10,1 Z"/></svg>',
      gitter: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="3.5" y="1" width="1.531" height="11.471"/><rect x="7.324" y="4.059" width="1.529" height="15.294"/><rect x="11.148" y="4.059" width="1.527" height="15.294"/><rect x="14.971" y="4.059" width="1.529" height="8.412"/></svg>',
      "google-plus": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.9,9c0,2.7-0.6,5-3.2,6.3c-3.7,1.8-8.1,0.2-9.4-3.6C-1.1,7.6,1.9,3.3,6.1,3c1.7-0.1,3.2,0.3,4.6,1.3 c0.1,0.1,0.3,0.2,0.4,0.4c-0.5,0.5-1.2,1-1.7,1.6c-1-0.8-2.1-1.1-3.5-0.9C5,5.6,4.2,6,3.6,6.7c-1.3,1.3-1.5,3.4-0.5,5 c1,1.7,2.6,2.3,4.6,1.9c1.4-0.3,2.4-1.2,2.6-2.6H6.9V9H12.9z"/><polygon points="20,9 20,11 18,11 18,13 16,13 16,11 14,11 14,9 16,9 16,7 18,7 18,9"/></svg>',
      google: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.86,9.09 C18.46,12.12 17.14,16.05 13.81,17.56 C9.45,19.53 4.13,17.68 2.47,12.87 C0.68,7.68 4.22,2.42 9.5,2.03 C11.57,1.88 13.42,2.37 15.05,3.65 C15.22,3.78 15.37,3.93 15.61,4.14 C14.9,4.81 14.23,5.45 13.5,6.14 C12.27,5.08 10.84,4.72 9.28,4.98 C8.12,5.17 7.16,5.76 6.37,6.63 C4.88,8.27 4.62,10.86 5.76,12.82 C6.95,14.87 9.17,15.8 11.57,15.25 C13.27,14.87 14.76,13.33 14.89,11.75 L10.51,11.75 L10.51,9.09 L17.86,9.09 L17.86,9.09 Z"/></svg>',
      grid: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="3" height="3"/><rect x="8" y="2" width="3" height="3"/><rect x="14" y="2" width="3" height="3"/><rect x="2" y="8" width="3" height="3"/><rect x="8" y="8" width="3" height="3"/><rect x="14" y="8" width="3" height="3"/><rect x="2" y="14" width="3" height="3"/><rect x="8" y="14" width="3" height="3"/><rect x="14" y="14" width="3" height="3"/></svg>',
      happy: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="13" cy="7" r="1"/><circle cx="7" cy="7" r="1"/><circle fill="none" stroke="#000" cx="10" cy="10" r="8.5"/><path fill="none" stroke="#000" d="M14.6,11.4 C13.9,13.3 12.1,14.5 10,14.5 C7.9,14.5 6.1,13.3 5.4,11.4"/></svg>',
      hashtag: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.431,8 L15.661,7 L12.911,7 L13.831,3 L12.901,3 L11.98,7 L9.29,7 L10.21,3 L9.281,3 L8.361,7 L5.23,7 L5,8 L8.13,8 L7.21,12 L4.23,12 L4,13 L6.98,13 L6.061,17 L6.991,17 L7.911,13 L10.601,13 L9.681,17 L10.611,17 L11.531,13 L14.431,13 L14.661,12 L11.76,12 L12.681,8 L15.431,8 Z M10.831,12 L8.141,12 L9.061,8 L11.75,8 L10.831,12 Z"/></svg>',
      heart: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.03" d="M10,4 C10,4 8.1,2 5.74,2 C3.38,2 1,3.55 1,6.73 C1,8.84 2.67,10.44 2.67,10.44 L10,18 L17.33,10.44 C17.33,10.44 19,8.84 19,6.73 C19,3.55 16.62,2 14.26,2 C11.9,2 10,4 10,4 L10,4 Z"/></svg>',
      history: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="#000" points="1 2 2 2 2 6 6 6 6 7 1 7 1 2"/><path fill="none" stroke="#000" stroke-width="1.1" d="M2.1,6.548 C3.391,3.29 6.746,1 10.5,1 C15.5,1 19.5,5 19.5,10 C19.5,15 15.5,19 10.5,19 C5.5,19 1.5,15 1.5,10"/><rect x="9" y="4" width="1" height="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M13.018,14.197 L9.445,10.625"/></svg>',
      home: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="18.65 11.35 10 2.71 1.35 11.35 0.65 10.65 10 1.29 19.35 10.65"/><polygon points="15 4 18 4 18 7 17 7 17 5 15 5"/><polygon points="3 11 4 11 4 18 7 18 7 12 12 12 12 18 16 18 16 11 17 11 17 19 11 19 11 13 8 13 8 19 3 19"/></svg>',
      image: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="16.1" cy="6.1" r="1.1"/><rect fill="none" stroke="#000" x=".5" y="2.5" width="19" height="15"/><polyline fill="none" stroke="#000" stroke-width="1.01" points="4,13 8,9 13,14"/><polyline fill="none" stroke="#000" stroke-width="1.01" points="11,12 12.5,10.5 16,14"/></svg>',
      info: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.13,11.59 C11.97,12.84 10.35,14.12 9.1,14.16 C6.17,14.2 9.89,9.46 8.74,8.37 C9.3,8.16 10.62,7.83 10.62,8.81 C10.62,9.63 10.12,10.55 9.88,11.32 C8.66,15.16 12.13,11.15 12.14,11.18 C12.16,11.21 12.16,11.35 12.13,11.59 C12.08,11.95 12.16,11.35 12.13,11.59 L12.13,11.59 Z M11.56,5.67 C11.56,6.67 9.36,7.15 9.36,6.03 C9.36,5 11.56,4.54 11.56,5.67 L11.56,5.67 Z"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/></svg>',
      instagram: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13.55,1H6.46C3.45,1,1,3.44,1,6.44v7.12c0,3,2.45,5.44,5.46,5.44h7.08c3.02,0,5.46-2.44,5.46-5.44V6.44 C19.01,3.44,16.56,1,13.55,1z M17.5,14c0,1.93-1.57,3.5-3.5,3.5H6c-1.93,0-3.5-1.57-3.5-3.5V6c0-1.93,1.57-3.5,3.5-3.5h8 c1.93,0,3.5,1.57,3.5,3.5V14z"/><circle cx="14.87" cy="5.26" r="1.09"/><path d="M10.03,5.45c-2.55,0-4.63,2.06-4.63,4.6c0,2.55,2.07,4.61,4.63,4.61c2.56,0,4.63-2.061,4.63-4.61 C14.65,7.51,12.58,5.45,10.03,5.45L10.03,5.45L10.03,5.45z M10.08,13c-1.66,0-3-1.34-3-2.99c0-1.65,1.34-2.99,3-2.99s3,1.34,3,2.99 C13.08,11.66,11.74,13,10.08,13L10.08,13L10.08,13z"/></svg>',
      italic: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.63,5.48 L10.15,14.52 C10,15.08 10.37,15.25 11.92,15.3 L11.72,16 L6,16 L6.2,15.31 C7.78,15.26 8.19,15.09 8.34,14.53 L10.82,5.49 C10.97,4.92 10.63,4.76 9.09,4.71 L9.28,4 L15,4 L14.81,4.69 C13.23,4.75 12.78,4.91 12.63,5.48 L12.63,5.48 Z"/></svg>',
      joomla: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7.8,13.4l1.7-1.7L5.9,8c-0.6-0.5-0.6-1.5,0-2c0.6-0.6,1.4-0.6,2,0l1.7-1.7c-1-1-2.3-1.3-3.6-1C5.8,2.2,4.8,1.4,3.7,1.4 c-1.3,0-2.3,1-2.3,2.3c0,1.1,0.8,2,1.8,2.3c-0.4,1.3-0.1,2.8,1,3.8L7.8,13.4L7.8,13.4z"/><path d="M10.2,4.3c1-1,2.5-1.4,3.8-1c0.2-1.1,1.1-2,2.3-2c1.3,0,2.3,1,2.3,2.3c0,1.2-0.9,2.2-2,2.3c0.4,1.3,0,2.8-1,3.8L13.9,8 c0.6-0.5,0.6-1.5,0-2c-0.5-0.6-1.5-0.6-2,0L8.2,9.7L6.5,8"/><path d="M14.1,16.8c-1.3,0.4-2.8,0.1-3.8-1l1.7-1.7c0.6,0.6,1.5,0.6,2,0c0.5-0.6,0.6-1.5,0-2l-3.7-3.7L12,6.7l3.7,3.7 c1,1,1.3,2.4,1,3.6c1.1,0.2,2,1.1,2,2.3c0,1.3-1,2.3-2.3,2.3C15.2,18.6,14.3,17.8,14.1,16.8"/><path d="M13.2,12.2l-3.7,3.7c-1,1-2.4,1.3-3.6,1c-0.2,1-1.2,1.8-2.2,1.8c-1.3,0-2.3-1-2.3-2.3c0-1.1,0.8-2,1.8-2.3 c-0.3-1.3,0-2.7,1-3.7l1.7,1.7c-0.6,0.6-0.6,1.5,0,2c0.6,0.6,1.4,0.6,2,0l3.7-3.7"/></svg>',
      laptop: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect y="16" width="20" height="1"/><rect fill="none" stroke="#000" x="2.5" y="4.5" width="15" height="10"/></svg>',
      lifesaver: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10,0.5 C4.76,0.5 0.5,4.76 0.5,10 C0.5,15.24 4.76,19.5 10,19.5 C15.24,19.5 19.5,15.24 19.5,10 C19.5,4.76 15.24,0.5 10,0.5 L10,0.5 Z M10,1.5 C11.49,1.5 12.89,1.88 14.11,2.56 L11.85,4.82 C11.27,4.61 10.65,4.5 10,4.5 C9.21,4.5 8.47,4.67 7.79,4.96 L5.58,2.75 C6.87,1.95 8.38,1.5 10,1.5 L10,1.5 Z M4.96,7.8 C4.67,8.48 4.5,9.21 4.5,10 C4.5,10.65 4.61,11.27 4.83,11.85 L2.56,14.11 C1.88,12.89 1.5,11.49 1.5,10 C1.5,8.38 1.95,6.87 2.75,5.58 L4.96,7.79 L4.96,7.8 L4.96,7.8 Z M10,18.5 C8.25,18.5 6.62,17.97 5.27,17.06 L7.46,14.87 C8.22,15.27 9.08,15.5 10,15.5 C10.79,15.5 11.53,15.33 12.21,15.04 L14.42,17.25 C13.13,18.05 11.62,18.5 10,18.5 L10,18.5 Z M10,14.5 C7.52,14.5 5.5,12.48 5.5,10 C5.5,7.52 7.52,5.5 10,5.5 C12.48,5.5 14.5,7.52 14.5,10 C14.5,12.48 12.48,14.5 10,14.5 L10,14.5 Z M15.04,12.21 C15.33,11.53 15.5,10.79 15.5,10 C15.5,9.08 15.27,8.22 14.87,7.46 L17.06,5.27 C17.97,6.62 18.5,8.25 18.5,10 C18.5,11.62 18.05,13.13 17.25,14.42 L15.04,12.21 L15.04,12.21 Z"/></svg>',
      link: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.1" d="M10.625,12.375 L7.525,15.475 C6.825,16.175 5.925,16.175 5.225,15.475 L4.525,14.775 C3.825,14.074 3.825,13.175 4.525,12.475 L7.625,9.375"/><path fill="none" stroke="#000" stroke-width="1.1" d="M9.325,7.375 L12.425,4.275 C13.125,3.575 14.025,3.575 14.724,4.275 L15.425,4.975 C16.125,5.675 16.125,6.575 15.425,7.275 L12.325,10.375"/><path fill="none" stroke="#000" stroke-width="1.1" d="M7.925,11.875 L11.925,7.975"/></svg>',
      linkedin: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.77,17.89 L5.77,7.17 L2.21,7.17 L2.21,17.89 L5.77,17.89 L5.77,17.89 Z M3.99,5.71 C5.23,5.71 6.01,4.89 6.01,3.86 C5.99,2.8 5.24,2 4.02,2 C2.8,2 2,2.8 2,3.85 C2,4.88 2.77,5.7 3.97,5.7 L3.99,5.7 L3.99,5.71 L3.99,5.71 Z"/><path d="M7.75,17.89 L11.31,17.89 L11.31,11.9 C11.31,11.58 11.33,11.26 11.43,11.03 C11.69,10.39 12.27,9.73 13.26,9.73 C14.55,9.73 15.06,10.71 15.06,12.15 L15.06,17.89 L18.62,17.89 L18.62,11.74 C18.62,8.45 16.86,6.92 14.52,6.92 C12.6,6.92 11.75,7.99 11.28,8.73 L11.3,8.73 L11.3,7.17 L7.75,7.17 C7.79,8.17 7.75,17.89 7.75,17.89 L7.75,17.89 L7.75,17.89 Z"/></svg>',
      list: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="4" width="12" height="1"/><rect x="6" y="9" width="12" height="1"/><rect x="6" y="14" width="12" height="1"/><rect x="2" y="4" width="2" height="1"/><rect x="2" y="9" width="2" height="1"/><rect x="2" y="14" width="2" height="1"/></svg>',
      location: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.01" d="M10,0.5 C6.41,0.5 3.5,3.39 3.5,6.98 C3.5,11.83 10,19 10,19 C10,19 16.5,11.83 16.5,6.98 C16.5,3.39 13.59,0.5 10,0.5 L10,0.5 Z"/><circle fill="none" stroke="#000" cx="10" cy="6.8" r="2.3"/></svg>',
      lock: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" height="10" width="13" y="8.5" x="3.5"/><path fill="none" stroke="#000" d="M6.5,8 L6.5,4.88 C6.5,3.01 8.07,1.5 10,1.5 C11.93,1.5 13.5,3.01 13.5,4.88 L13.5,8"/></svg>',
      mail: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="1.4,6.5 10,11 18.6,6.5"/><path d="M 1,4 1,16 19,16 19,4 1,4 Z M 18,15 2,15 2,5 18,5 18,15 Z"/></svg>',
      menu: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="4" width="16" height="1"/><rect x="2" y="9" width="16" height="1"/><rect x="2" y="14" width="16" height="1"/></svg>',
      microphone: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" x1="10" x2="10" y1="16.44" y2="18.5"/><line fill="none" stroke="#000" x1="7" x2="13" y1="18.5" y2="18.5"/><path fill="none" stroke="#000" stroke-width="1.1" d="M13.5 4.89v5.87a3.5 3.5 0 0 1-7 0V4.89a3.5 3.5 0 0 1 7 0z"/><path fill="none" stroke="#000" stroke-width="1.1" d="M15.5 10.36V11a5.5 5.5 0 0 1-11 0v-.6"/></svg>',
      "minus-circle": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9.5" cy="9.5" r="9"/><line fill="none" stroke="#000" x1="5" y1="9.5" x2="14" y2="9.5"/></svg>',
      minus: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect height="1" width="18" y="9" x="1"/></svg>',
      "more-vertical": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="3" r="2"/><circle cx="10" cy="10" r="2"/><circle cx="10" cy="17" r="2"/></svg>',
      more: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="3" cy="10" r="2"/><circle cx="10" cy="10" r="2"/><circle cx="17" cy="10" r="2"/></svg>',
      move: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="4,5 1,5 1,9 2,9 2,6 4,6"/><polygon points="1,16 2,16 2,18 4,18 4,19 1,19"/><polygon points="14,16 14,19 11,19 11,18 13,18 13,16"/><rect fill="none" stroke="#000" x="5.5" y="1.5" width="13" height="13"/><rect x="1" y="11" width="1" height="3"/><rect x="6" y="18" width="3" height="1"/></svg>',
      nut: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" points="2.5,5.7 10,1.3 17.5,5.7 17.5,14.3 10,18.7 2.5,14.3"/><circle fill="none" stroke="#000" cx="10" cy="10" r="3.5"/></svg>',
      pagekit: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="3,1 17,1 17,16 10,16 10,13 14,13 14,4 6,4 6,16 10,16 10,19 3,19"/></svg>',
      "paint-bucket": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.21,1 L0,11.21 L8.1,19.31 L18.31,9.1 L10.21,1 L10.21,1 Z M16.89,9.1 L15,11 L1.7,11 L10.21,2.42 L16.89,9.1 Z"/><path fill="none" stroke="#000" stroke-width="1.1" d="M6.42,2.33 L11.7,7.61"/><path d="M18.49,12 C18.49,12 20,14.06 20,15.36 C20,16.28 19.24,17 18.49,17 L18.49,17 C17.74,17 17,16.28 17,15.36 C17,14.06 18.49,12 18.49,12 L18.49,12 Z"/></svg>',
      pencil: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M17.25,6.01 L7.12,16.1 L3.82,17.2 L5.02,13.9 L15.12,3.88 C15.71,3.29 16.66,3.29 17.25,3.88 C17.83,4.47 17.83,5.42 17.25,6.01 L17.25,6.01 Z"/><path fill="none" stroke="#000" d="M15.98,7.268 L13.851,5.148"/></svg>',
      "phone-landscape": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M17,5.5 C17.8,5.5 18.5,6.2 18.5,7 L18.5,14 C18.5,14.8 17.8,15.5 17,15.5 L3,15.5 C2.2,15.5 1.5,14.8 1.5,14 L1.5,7 C1.5,6.2 2.2,5.5 3,5.5 L17,5.5 L17,5.5 L17,5.5 Z"/><circle cx="3.8" cy="10.5" r=".8"/></svg>',
      phone: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M15.5,17 C15.5,17.8 14.8,18.5 14,18.5 L7,18.5 C6.2,18.5 5.5,17.8 5.5,17 L5.5,3 C5.5,2.2 6.2,1.5 7,1.5 L14,1.5 C14.8,1.5 15.5,2.2 15.5,3 L15.5,17 L15.5,17 L15.5,17 Z"/><circle cx="10.5" cy="16.5" r=".8"/></svg>',
      pinterest: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.21,1 C5.5,1 3,4.16 3,7.61 C3,9.21 3.85,11.2 5.22,11.84 C5.43,11.94 5.54,11.89 5.58,11.69 C5.62,11.54 5.8,10.8 5.88,10.45 C5.91,10.34 5.89,10.24 5.8,10.14 C5.36,9.59 5,8.58 5,7.65 C5,5.24 6.82,2.91 9.93,2.91 C12.61,2.91 14.49,4.74 14.49,7.35 C14.49,10.3 13,12.35 11.06,12.35 C9.99,12.35 9.19,11.47 9.44,10.38 C9.75,9.08 10.35,7.68 10.35,6.75 C10.35,5.91 9.9,5.21 8.97,5.21 C7.87,5.21 6.99,6.34 6.99,7.86 C6.99,8.83 7.32,9.48 7.32,9.48 C7.32,9.48 6.24,14.06 6.04,14.91 C5.7,16.35 6.08,18.7 6.12,18.9 C6.14,19.01 6.26,19.05 6.33,18.95 C6.44,18.81 7.74,16.85 8.11,15.44 C8.24,14.93 8.79,12.84 8.79,12.84 C9.15,13.52 10.19,14.09 11.29,14.09 C14.58,14.09 16.96,11.06 16.96,7.3 C16.94,3.7 14,1 10.21,1"/></svg>',
      "play-circle": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" stroke-width="1.1" points="8.5 7 13.5 10 8.5 13"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/></svg>',
      play: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" points="6.5,5 14.5,10 6.5,15"/></svg>',
      "plus-circle": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9.5" cy="9.5" r="9"/><line fill="none" stroke="#000" x1="9.5" y1="5" x2="9.5" y2="14"/><line fill="none" stroke="#000" x1="5" y1="9.5" x2="14" y2="9.5"/></svg>',
      plus: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="1" width="1" height="17"/><rect x="1" y="9" width="17" height="1"/></svg>',
      print: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="4.5 13.5 1.5 13.5 1.5 6.5 18.5 6.5 18.5 13.5 15.5 13.5"/><polyline fill="none" stroke="#000" points="15.5 6.5 15.5 2.5 4.5 2.5 4.5 6.5"/><rect fill="none" stroke="#000" width="11" height="6" x="4.5" y="11.5"/><rect width="8" height="1" x="6" y="13"/><rect width="8" height="1" x="6" y="15"/></svg>',
      pull: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="6.85,8 9.5,10.6 12.15,8 12.85,8.7 9.5,12 6.15,8.7"/><line fill="none" stroke="#000" x1="9.5" y1="11" x2="9.5" y2="2"/><polyline fill="none" stroke="#000" points="6,5.5 3.5,5.5 3.5,18.5 15.5,18.5 15.5,5.5 13,5.5"/></svg>',
      push: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="12.15,4 9.5,1.4 6.85,4 6.15,3.3 9.5,0 12.85,3.3"/><line fill="none" stroke="#000" x1="9.5" y1="10" x2="9.5" y2="1"/><polyline fill="none" stroke="#000" points="6 5.5 3.5 5.5 3.5 18.5 15.5 18.5 15.5 5.5 13 5.5"/></svg>',
      question: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/><circle cx="10.44" cy="14.42" r="1.05"/><path fill="none" stroke="#000" stroke-width="1.2" d="M8.17,7.79 C8.17,4.75 12.72,4.73 12.72,7.72 C12.72,8.67 11.81,9.15 11.23,9.75 C10.75,10.24 10.51,10.73 10.45,11.4 C10.44,11.53 10.43,11.64 10.43,11.75"/></svg>',
      "quote-right": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.27,7.79 C17.27,9.45 16.97,10.43 15.99,12.02 C14.98,13.64 13,15.23 11.56,15.97 L11.1,15.08 C12.34,14.2 13.14,13.51 14.02,11.82 C14.27,11.34 14.41,10.92 14.49,10.54 C14.3,10.58 14.09,10.6 13.88,10.6 C12.06,10.6 10.59,9.12 10.59,7.3 C10.59,5.48 12.06,4 13.88,4 C15.39,4 16.67,5.02 17.05,6.42 C17.19,6.82 17.27,7.27 17.27,7.79 L17.27,7.79 Z"/><path d="M8.68,7.79 C8.68,9.45 8.38,10.43 7.4,12.02 C6.39,13.64 4.41,15.23 2.97,15.97 L2.51,15.08 C3.75,14.2 4.55,13.51 5.43,11.82 C5.68,11.34 5.82,10.92 5.9,10.54 C5.71,10.58 5.5,10.6 5.29,10.6 C3.47,10.6 2,9.12 2,7.3 C2,5.48 3.47,4 5.29,4 C6.8,4 8.08,5.02 8.46,6.42 C8.6,6.82 8.68,7.27 8.68,7.79 L8.68,7.79 Z"/></svg>',
      receiver: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.01" d="M6.189,13.611C8.134,15.525 11.097,18.239 13.867,18.257C16.47,18.275 18.2,16.241 18.2,16.241L14.509,12.551L11.539,13.639L6.189,8.29L7.313,5.355L3.76,1.8C3.76,1.8 1.732,3.537 1.7,6.092C1.667,8.809 4.347,11.738 6.189,13.611"/></svg>',
      reddit: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M19 9.05a2.56 2.56 0 0 0-2.56-2.56 2.59 2.59 0 0 0-1.88.82 10.63 10.63 0 0 0-4.14-1v-.08c.58-1.62 1.58-3.89 2.7-4.1.38-.08.77.12 1.19.57a1.15 1.15 0 0 0-.06.37 1.48 1.48 0 1 0 1.51-1.45 1.43 1.43 0 0 0-.76.19A2.29 2.29 0 0 0 12.91 1c-2.11.43-3.39 4.38-3.63 5.19 0 0 0 .11-.06.11a10.65 10.65 0 0 0-3.75 1A2.56 2.56 0 0 0 1 9.05a2.42 2.42 0 0 0 .72 1.76A5.18 5.18 0 0 0 1.24 13c0 3.66 3.92 6.64 8.73 6.64s8.74-3 8.74-6.64a5.23 5.23 0 0 0-.46-2.13A2.58 2.58 0 0 0 19 9.05zm-16.88 0a1.44 1.44 0 0 1 2.27-1.19 7.68 7.68 0 0 0-2.07 1.91 1.33 1.33 0 0 1-.2-.72zM10 18.4c-4.17 0-7.55-2.4-7.55-5.4S5.83 7.53 10 7.53 17.5 10 17.5 13s-3.38 5.4-7.5 5.4zm7.69-8.61a7.62 7.62 0 0 0-2.09-1.91 1.41 1.41 0 0 1 .84-.28 1.47 1.47 0 0 1 1.44 1.45 1.34 1.34 0 0 1-.21.72z"/><path d="M6.69 12.58a1.39 1.39 0 1 1 1.39-1.39 1.38 1.38 0 0 1-1.38 1.39z"/><path d="M14.26 11.2a1.39 1.39 0 1 1-1.39-1.39 1.39 1.39 0 0 1 1.39 1.39z"/><path d="M13.09 14.88a.54.54 0 0 1-.09.77 5.3 5.3 0 0 1-3.26 1.19 5.61 5.61 0 0 1-3.4-1.22.55.55 0 1 1 .73-.83 4.09 4.09 0 0 0 5.25 0 .56.56 0 0 1 .77.09z"/></svg>',
      refresh: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.1" d="M17.08,11.15 C17.09,11.31 17.1,11.47 17.1,11.64 C17.1,15.53 13.94,18.69 10.05,18.69 C6.16,18.68 3,15.53 3,11.63 C3,7.74 6.16,4.58 10.05,4.58 C10.9,4.58 11.71,4.73 12.46,5"/><polyline fill="none" stroke="#000" points="9.9 2 12.79 4.89 9.79 7.9"/></svg>',
      reply: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.7,13.11 C16.12,10.02 13.84,7.85 11.02,6.61 C10.57,6.41 9.75,6.13 9,5.91 L9,2 L1,9 L9,16 L9,12.13 C10.78,12.47 12.5,13.19 14.09,14.25 C17.13,16.28 18.56,18.54 18.56,18.54 C18.56,18.54 18.81,15.28 17.7,13.11 L17.7,13.11 Z M14.82,13.53 C13.17,12.4 11.01,11.4 8,10.92 L8,13.63 L2.55,9 L8,4.25 L8,6.8 C8.3,6.86 9.16,7.02 10.37,7.49 C13.3,8.65 15.54,10.96 16.65,13.08 C16.97,13.7 17.48,14.86 17.68,16 C16.87,15.05 15.73,14.15 14.82,13.53 L14.82,13.53 Z"/></svg>',
      rss: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="3.12" cy="16.8" r="1.85"/><path fill="none" stroke="#000" stroke-width="1.1" d="M1.5,8.2 C1.78,8.18 2.06,8.16 2.35,8.16 C7.57,8.16 11.81,12.37 11.81,17.57 C11.81,17.89 11.79,18.19 11.76,18.5"/><path fill="none" stroke="#000" stroke-width="1.1" d="M1.5,2.52 C1.78,2.51 2.06,2.5 2.35,2.5 C10.72,2.5 17.5,9.24 17.5,17.57 C17.5,17.89 17.49,18.19 17.47,18.5"/></svg>',
      search: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>',
      server: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="1" height="2"/><rect x="5" y="3" width="1" height="2"/><rect x="7" y="3" width="1" height="2"/><rect x="16" y="3" width="1" height="1"/><rect x="16" y="10" width="1" height="1"/><circle fill="none" stroke="#000" cx="9.9" cy="17.4" r="1.4"/><rect x="3" y="10" width="1" height="2"/><rect x="5" y="10" width="1" height="2"/><rect x="9.5" y="14" width="1" height="2"/><rect x="3" y="17" width="6" height="1"/><rect x="11" y="17" width="6" height="1"/><rect fill="none" stroke="#000" x="1.5" y="1.5" width="17" height="5"/><rect fill="none" stroke="#000" x="1.5" y="8.5" width="17" height="5"/></svg>',
      settings: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><ellipse fill="none" stroke="#000" cx="6.11" cy="3.55" rx="2.11" ry="2.15"/><ellipse fill="none" stroke="#000" cx="6.11" cy="15.55" rx="2.11" ry="2.15"/><circle fill="none" stroke="#000" cx="13.15" cy="9.55" r="2.15"/><rect x="1" y="3" width="3" height="1"/><rect x="10" y="3" width="8" height="1"/><rect x="1" y="9" width="8" height="1"/><rect x="15" y="9" width="3" height="1"/><rect x="1" y="15" width="3" height="1"/><rect x="10" y="15" width="8" height="1"/></svg>',
      shrink: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="11 4 12 4 12 8 16 8 16 9 11 9"/><polygon points="4 11 9 11 9 16 8 16 8 12 4 12"/><path fill="none" stroke="#000" stroke-width="1.1" d="M12,8 L18,2"/><path fill="none" stroke="#000" stroke-width="1.1" d="M2,18 L8,12"/></svg>',
      "sign-in": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="7 2 17 2 17 17 7 17 7 16 16 16 16 3 7 3"/><polygon points="9.1 13.4 8.5 12.8 11.28 10 4 10 4 9 11.28 9 8.5 6.2 9.1 5.62 13 9.5"/></svg>',
      "sign-out": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="13.1 13.4 12.5 12.8 15.28 10 8 10 8 9 15.28 9 12.5 6.2 13.1 5.62 17 9.5"/><polygon points="13 2 3 2 3 17 13 17 13 16 4 16 4 3 13 3"/></svg>',
      social: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.1" x1="13.4" y1="14" x2="6.3" y2="10.7"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13.5" y1="5.5" x2="6.5" y2="8.8"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="15.5" cy="4.6" r="2.3"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="15.5" cy="14.8" r="2.3"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="4.5" cy="9.8" r="2.3"/></svg>',
      soundcloud: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.2,9.4c-0.4,0-0.8,0.1-1.101,0.2c-0.199-2.5-2.399-4.5-5-4.5c-0.6,0-1.2,0.1-1.7,0.3C9.2,5.5,9.1,5.6,9.1,5.6V15h8 c1.601,0,2.801-1.2,2.801-2.8C20,10.7,18.7,9.4,17.2,9.4L17.2,9.4z"/><rect x="6" y="6.5" width="1.5" height="8.5"/><rect x="3" y="8" width="1.5" height="7"/><rect y="10" width="1.5" height="5"/></svg>',
      star: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" stroke-width="1.01" points="10 2 12.63 7.27 18.5 8.12 14.25 12.22 15.25 18 10 15.27 4.75 18 5.75 12.22 1.5 8.12 7.37 7.27"/></svg>',
      strikethrough: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6,13.02 L6.65,13.02 C7.64,15.16 8.86,16.12 10.41,16.12 C12.22,16.12 12.92,14.93 12.92,13.89 C12.92,12.55 11.99,12.03 9.74,11.23 C8.05,10.64 6.23,10.11 6.23,7.83 C6.23,5.5 8.09,4.09 10.4,4.09 C11.44,4.09 12.13,4.31 12.72,4.54 L13.33,4 L13.81,4 L13.81,7.59 L13.16,7.59 C12.55,5.88 11.52,4.89 10.07,4.89 C8.84,4.89 7.89,5.69 7.89,7.03 C7.89,8.29 8.89,8.78 10.88,9.45 C12.57,10.03 14.38,10.6 14.38,12.91 C14.38,14.75 13.27,16.93 10.18,16.93 C9.18,16.93 8.17,16.69 7.46,16.39 L6.52,17 L6,17 L6,13.02 L6,13.02 Z"/><rect x="3" y="10" width="15" height="1"/></svg>',
      table: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="3" width="18" height="1"/><rect x="1" y="7" width="18" height="1"/><rect x="1" y="11" width="18" height="1"/><rect x="1" y="15" width="18" height="1"/></svg>',
      "tablet-landscape": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M1.5,5 C1.5,4.2 2.2,3.5 3,3.5 L17,3.5 C17.8,3.5 18.5,4.2 18.5,5 L18.5,16 C18.5,16.8 17.8,17.5 17,17.5 L3,17.5 C2.2,17.5 1.5,16.8 1.5,16 L1.5,5 L1.5,5 L1.5,5 Z"/><circle cx="3.7" cy="10.5" r=".8"/></svg>',
      tablet: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M5,18.5 C4.2,18.5 3.5,17.8 3.5,17 L3.5,3 C3.5,2.2 4.2,1.5 5,1.5 L16,1.5 C16.8,1.5 17.5,2.2 17.5,3 L17.5,17 C17.5,17.8 16.8,18.5 16,18.5 L5,18.5 L5,18.5 L5,18.5 Z"/><circle cx="10.5" cy="16.3" r=".8"/></svg>',
      tag: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.1" d="M17.5,3.71 L17.5,7.72 C17.5,7.96 17.4,8.2 17.21,8.39 L8.39,17.2 C7.99,17.6 7.33,17.6 6.93,17.2 L2.8,13.07 C2.4,12.67 2.4,12.01 2.8,11.61 L11.61,2.8 C11.81,2.6 12.08,2.5 12.34,2.5 L16.19,2.5 C16.52,2.5 16.86,2.63 17.11,2.88 C17.35,3.11 17.48,3.4 17.5,3.71 L17.5,3.71 Z"/><circle cx="14" cy="6" r="1"/></svg>',
      thumbnails: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" x="3.5" y="3.5" width="5" height="5"/><rect fill="none" stroke="#000" x="11.5" y="3.5" width="5" height="5"/><rect fill="none" stroke="#000" x="11.5" y="11.5" width="5" height="5"/><rect fill="none" stroke="#000" x="3.5" y="11.5" width="5" height="5"/></svg>',
      trash: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="6.5 3 6.5 1.5 13.5 1.5 13.5 3"/><polyline fill="none" stroke="#000" points="4.5 4 4.5 18.5 15.5 18.5 15.5 4"/><rect x="8" y="7" width="1" height="9"/><rect x="11" y="7" width="1" height="9"/><rect x="2" y="3" width="16" height="1"/></svg>',
      "triangle-down": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="5 7 15 7 10 12"/></svg>',
      "triangle-left": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="12 5 7 10 12 15"/></svg>',
      "triangle-right": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="8 5 13 10 8 15"/></svg>',
      "triangle-up": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="5 13 10 8 15 13"/></svg>',
      tripadvisor: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M19.021,7.866C19.256,6.862,20,5.854,20,5.854h-3.346C14.781,4.641,12.504,4,9.98,4C7.363,4,4.999,4.651,3.135,5.876H0\tc0,0,0.738,0.987,0.976,1.988c-0.611,0.837-0.973,1.852-0.973,2.964c0,2.763,2.249,5.009,5.011,5.009\tc1.576,0,2.976-0.737,3.901-1.879l1.063,1.599l1.075-1.615c0.475,0.611,1.1,1.111,1.838,1.451c1.213,0.547,2.574,0.612,3.825,0.15\tc2.589-0.963,3.913-3.852,2.964-6.439c-0.175-0.463-0.4-0.876-0.675-1.238H19.021z M16.38,14.594\tc-1.002,0.371-2.088,0.328-3.06-0.119c-0.688-0.317-1.252-0.817-1.657-1.438c-0.164-0.25-0.313-0.52-0.417-0.811\tc-0.124-0.328-0.186-0.668-0.217-1.014c-0.063-0.689,0.037-1.396,0.339-2.043c0.448-0.971,1.251-1.71,2.25-2.079\tc2.075-0.765,4.375,0.3,5.14,2.366c0.762,2.066-0.301,4.37-2.363,5.134L16.38,14.594L16.38,14.594z M8.322,13.066\tc-0.72,1.059-1.935,1.76-3.309,1.76c-2.207,0-4.001-1.797-4.001-3.996c0-2.203,1.795-4.002,4.001-4.002\tc2.204,0,3.999,1.8,3.999,4.002c0,0.137-0.024,0.261-0.04,0.396c-0.067,0.678-0.284,1.313-0.648,1.853v-0.013H8.322z M2.472,10.775\tc0,1.367,1.112,2.479,2.476,2.479c1.363,0,2.472-1.11,2.472-2.479c0-1.359-1.11-2.468-2.472-2.468\tC3.584,8.306,2.473,9.416,2.472,10.775L2.472,10.775z M12.514,10.775c0,1.367,1.104,2.479,2.471,2.479\tc1.363,0,2.474-1.108,2.474-2.479c0-1.359-1.11-2.468-2.474-2.468c-1.364,0-2.477,1.109-2.477,2.468H12.514z M3.324,10.775\tc0-0.893,0.726-1.618,1.614-1.618c0.889,0,1.625,0.727,1.625,1.618c0,0.898-0.725,1.627-1.625,1.627\tc-0.901,0-1.625-0.729-1.625-1.627H3.324z M13.354,10.775c0-0.893,0.726-1.618,1.627-1.618c0.886,0,1.61,0.727,1.61,1.618\tc0,0.898-0.726,1.627-1.626,1.627s-1.625-0.729-1.625-1.627H13.354z M9.977,4.875c1.798,0,3.425,0.324,4.849,0.968\tc-0.535,0.015-1.061,0.108-1.586,0.3c-1.264,0.463-2.264,1.388-2.815,2.604c-0.262,0.551-0.398,1.133-0.448,1.72\tC9.79,7.905,7.677,5.873,5.076,5.82C6.501,5.208,8.153,4.875,9.94,4.875H9.977z"/></svg>',
      tumblr: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.885,8.598c0,0,0,3.393,0,4.996c0,0.282,0,0.66,0.094,0.942c0.377,1.509,1.131,2.545,2.545,3.11 c1.319,0.472,2.356,0.472,3.676,0c0.565-0.188,1.132-0.659,1.132-0.659l-0.849-2.263c0,0-1.036,0.378-1.603,0.283 c-0.565-0.094-1.226-0.66-1.226-1.508c0-1.603,0-4.902,0-4.902h2.828V5.771h-2.828V2H8.205c0,0-0.094,0.66-0.188,0.942 C7.828,3.791,7.262,4.733,6.603,5.394C5.848,6.147,5,6.43,5,6.43v2.168H6.885z"/></svg>',
      tv: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="7" y="16" width="6" height="1"/><rect fill="none" stroke="#000" x=".5" y="3.5" width="19" height="11"/></svg>',
      twitter: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M19,4.74 C18.339,5.029 17.626,5.229 16.881,5.32 C17.644,4.86 18.227,4.139 18.503,3.28 C17.79,3.7 17.001,4.009 16.159,4.17 C15.485,3.45 14.526,3 13.464,3 C11.423,3 9.771,4.66 9.771,6.7 C9.771,6.99 9.804,7.269 9.868,7.539 C6.795,7.38 4.076,5.919 2.254,3.679 C1.936,4.219 1.754,4.86 1.754,5.539 C1.754,6.82 2.405,7.95 3.397,8.61 C2.79,8.589 2.22,8.429 1.723,8.149 L1.723,8.189 C1.723,9.978 2.997,11.478 4.686,11.82 C4.376,11.899 4.049,11.939 3.713,11.939 C3.475,11.939 3.245,11.919 3.018,11.88 C3.49,13.349 4.852,14.419 6.469,14.449 C5.205,15.429 3.612,16.019 1.882,16.019 C1.583,16.019 1.29,16.009 1,15.969 C2.635,17.019 4.576,17.629 6.662,17.629 C13.454,17.629 17.17,12 17.17,7.129 C17.17,6.969 17.166,6.809 17.157,6.649 C17.879,6.129 18.504,5.478 19,4.74"/></svg>',
      uikit: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="14.4,3.1 11.3,5.1 15,7.3 15,12.9 10,15.7 5,12.9 5,8.5 2,6.8 2,14.8 9.9,19.5 18,14.8 18,5.3"/><polygon points="9.8,4.2 6.7,2.4 9.8,0.4 12.9,2.3"/></svg>',
      unlock: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" x="3.5" y="8.5" width="13" height="10"/><path fill="none" stroke="#000" d="M6.5,8.5 L6.5,4.9 C6.5,3 8.1,1.5 10,1.5 C11.9,1.5 13.5,3 13.5,4.9"/></svg>',
      upload: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="5 8 9.5 3.5 14 8"/><rect x="3" y="17" width="13" height="1"/><line fill="none" stroke="#000" x1="9.5" y1="15" x2="9.5" y2="4"/></svg>',
      user: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9.9" cy="6.4" r="4.4"/><path fill="none" stroke="#000" stroke-width="1.1" d="M1.5,19 C2.3,14.5 5.8,11.2 10,11.2 C14.2,11.2 17.7,14.6 18.5,19.2"/></svg>',
      users: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="7.7" cy="8.6" r="3.5"/><path fill="none" stroke="#000" stroke-width="1.1" d="M1,18.1 C1.7,14.6 4.4,12.1 7.6,12.1 C10.9,12.1 13.7,14.8 14.3,18.3"/><path fill="none" stroke="#000" stroke-width="1.1" d="M11.4,4 C12.8,2.4 15.4,2.8 16.3,4.7 C17.2,6.6 15.7,8.9 13.6,8.9 C16.5,8.9 18.8,11.3 19.2,14.1"/></svg>',
      "video-camera": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" points="17.5 6.9 17.5 13.1 13.5 10.4 13.5 14.5 2.5 14.5 2.5 5.5 13.5 5.5 13.5 9.6 17.5 6.9"/></svg>',
      vimeo: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.065,7.59C1.84,7.367,1.654,7.082,1.468,6.838c-0.332-0.42-0.137-0.411,0.274-0.772c1.026-0.91,2.004-1.896,3.127-2.688 c1.017-0.713,2.365-1.173,3.286-0.039c0.849,1.045,0.869,2.629,1.084,3.891c0.215,1.309,0.421,2.648,0.88,3.901 c0.127,0.352,0.37,1.018,0.81,1.074c0.567,0.078,1.145-0.917,1.408-1.289c0.684-0.987,1.611-2.317,1.494-3.587 c-0.115-1.349-1.572-1.095-2.482-0.773c0.146-1.514,1.555-3.216,2.912-3.792c1.439-0.597,3.579-0.587,4.302,1.036 c0.772,1.759,0.078,3.802-0.763,5.396c-0.918,1.731-2.1,3.333-3.363,4.829c-1.114,1.329-2.432,2.787-4.093,3.422 c-1.897,0.723-3.021-0.686-3.667-2.318c-0.705-1.777-1.056-3.771-1.565-5.621C4.898,8.726,4.644,7.836,4.136,7.191 C3.473,6.358,2.72,7.141,2.065,7.59C1.977,7.502,2.115,7.551,2.065,7.59L2.065,7.59z"/></svg>',
      warning: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="14" r="1"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/><path d="M10.97,7.72 C10.85,9.54 10.56,11.29 10.56,11.29 C10.51,11.87 10.27,12 9.99,12 C9.69,12 9.49,11.87 9.43,11.29 C9.43,11.29 9.16,9.54 9.03,7.72 C8.96,6.54 9.03,6 9.03,6 C9.03,5.45 9.46,5.02 9.99,5 C10.53,5.01 10.97,5.44 10.97,6 C10.97,6 11.04,6.54 10.97,7.72 L10.97,7.72 Z"/></svg>',
      whatsapp: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.7,3.3c-1.8-1.8-4.1-2.8-6.7-2.8c-5.2,0-9.4,4.2-9.4,9.4c0,1.7,0.4,3.3,1.3,4.7l-1.3,4.9l5-1.3c1.4,0.8,2.9,1.2,4.5,1.2 l0,0l0,0c5.2,0,9.4-4.2,9.4-9.4C19.5,7.4,18.5,5,16.7,3.3 M10.1,17.7L10.1,17.7c-1.4,0-2.8-0.4-4-1.1l-0.3-0.2l-3,0.8l0.8-2.9 l-0.2-0.3c-0.8-1.2-1.2-2.7-1.2-4.2c0-4.3,3.5-7.8,7.8-7.8c2.1,0,4.1,0.8,5.5,2.3c1.5,1.5,2.3,3.4,2.3,5.5 C17.9,14.2,14.4,17.7,10.1,17.7 M14.4,11.9c-0.2-0.1-1.4-0.7-1.6-0.8c-0.2-0.1-0.4-0.1-0.5,0.1c-0.2,0.2-0.6,0.8-0.8,0.9 c-0.1,0.2-0.3,0.2-0.5,0.1c-0.2-0.1-1-0.4-1.9-1.2c-0.7-0.6-1.2-1.4-1.3-1.6c-0.1-0.2,0-0.4,0.1-0.5C8,8.8,8.1,8.7,8.2,8.5 c0.1-0.1,0.2-0.2,0.2-0.4c0.1-0.2,0-0.3,0-0.4C8.4,7.6,7.9,6.5,7.7,6C7.5,5.5,7.3,5.6,7.2,5.6c-0.1,0-0.3,0-0.4,0 c-0.2,0-0.4,0.1-0.6,0.3c-0.2,0.2-0.8,0.8-0.8,2c0,1.2,0.8,2.3,1,2.4c0.1,0.2,1.7,2.5,4,3.5c0.6,0.2,1,0.4,1.3,0.5 c0.6,0.2,1.1,0.2,1.5,0.1c0.5-0.1,1.4-0.6,1.6-1.1c0.2-0.5,0.2-1,0.1-1.1C14.8,12.1,14.6,12,14.4,11.9"/></svg>',
      wordpress: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10,0.5c-5.2,0-9.5,4.3-9.5,9.5s4.3,9.5,9.5,9.5c5.2,0,9.5-4.3,9.5-9.5S15.2,0.5,10,0.5L10,0.5L10,0.5z M15.6,3.9h-0.1 c-0.8,0-1.4,0.7-1.4,1.5c0,0.7,0.4,1.3,0.8,1.9c0.3,0.6,0.7,1.3,0.7,2.3c0,0.7-0.3,1.5-0.6,2.7L14.1,15l-3-8.9 c0.5,0,0.9-0.1,0.9-0.1C12.5,6,12.5,5.3,12,5.4c0,0-1.3,0.1-2.2,0.1C9,5.5,7.7,5.4,7.7,5.4C7.2,5.3,7.2,6,7.6,6c0,0,0.4,0.1,0.9,0.1 l1.3,3.5L8,15L5,6.1C5.5,6.1,5.9,6,5.9,6C6.4,6,6.3,5.3,5.9,5.4c0,0-1.3,0.1-2.2,0.1c-0.2,0-0.3,0-0.5,0c1.5-2.2,4-3.7,6.9-3.7 C12.2,1.7,14.1,2.6,15.6,3.9L15.6,3.9L15.6,3.9z M2.5,6.6l3.9,10.8c-2.7-1.3-4.6-4.2-4.6-7.4C1.8,8.8,2,7.6,2.5,6.6L2.5,6.6L2.5,6.6 z M10.2,10.7l2.5,6.9c0,0,0,0.1,0.1,0.1C11.9,18,11,18.2,10,18.2c-0.8,0-1.6-0.1-2.3-0.3L10.2,10.7L10.2,10.7L10.2,10.7z M14.2,17.1 l2.5-7.3c0.5-1.2,0.6-2.1,0.6-2.9c0-0.3,0-0.6-0.1-0.8c0.6,1.2,1,2.5,1,4C18.3,13,16.6,15.7,14.2,17.1L14.2,17.1L14.2,17.1z"/></svg>',
      world: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M1,10.5 L19,10.5"/><path fill="none" stroke="#000" d="M2.35,15.5 L17.65,15.5"/><path fill="none" stroke="#000" d="M2.35,5.5 L17.523,5.5"/><path fill="none" stroke="#000" d="M10,19.46 L9.98,19.46 C7.31,17.33 5.61,14.141 5.61,10.58 C5.61,7.02 7.33,3.83 10,1.7 C10.01,1.7 9.99,1.7 10,1.7 L10,1.7 C12.67,3.83 14.4,7.02 14.4,10.58 C14.4,14.141 12.67,17.33 10,19.46 L10,19.46 L10,19.46 L10,19.46 Z"/><circle fill="none" stroke="#000" cx="10" cy="10.5" r="9"/></svg>',
      xing: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.4,4.56 C4.24,4.56 4.11,4.61 4.05,4.72 C3.98,4.83 3.99,4.97 4.07,5.12 L5.82,8.16 L5.82,8.17 L3.06,13.04 C2.99,13.18 2.99,13.33 3.06,13.44 C3.12,13.55 3.24,13.62 3.4,13.62 L6,13.62 C6.39,13.62 6.57,13.36 6.71,13.12 C6.71,13.12 9.41,8.35 9.51,8.16 C9.49,8.14 7.72,5.04 7.72,5.04 C7.58,4.81 7.39,4.56 6.99,4.56 L4.4,4.56 L4.4,4.56 Z"/><path d="M15.3,1 C14.91,1 14.74,1.25 14.6,1.5 C14.6,1.5 9.01,11.42 8.82,11.74 C8.83,11.76 12.51,18.51 12.51,18.51 C12.64,18.74 12.84,19 13.23,19 L15.82,19 C15.98,19 16.1,18.94 16.16,18.83 C16.23,18.72 16.23,18.57 16.16,18.43 L12.5,11.74 L12.5,11.72 L18.25,1.56 C18.32,1.42 18.32,1.27 18.25,1.16 C18.21,1.06 18.08,1 17.93,1 L15.3,1 L15.3,1 Z"/></svg>',
      yelp: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.175,14.971c-0.112,0.77-1.686,2.767-2.406,3.054c-0.246,0.1-0.487,0.076-0.675-0.069\tc-0.122-0.096-2.446-3.859-2.446-3.859c-0.194-0.293-0.157-0.682,0.083-0.978c0.234-0.284,0.581-0.393,0.881-0.276\tc0.016,0.01,4.21,1.394,4.332,1.482c0.178,0.148,0.263,0.379,0.225,0.646L17.175,14.971L17.175,14.971z M11.464,10.789\tc-0.203-0.307-0.199-0.666,0.009-0.916c0,0,2.625-3.574,2.745-3.657c0.203-0.135,0.452-0.141,0.69-0.025\tc0.691,0.335,2.085,2.405,2.167,3.199v0.027c0.024,0.271-0.082,0.491-0.273,0.623c-0.132,0.083-4.43,1.155-4.43,1.155\tc-0.322,0.096-0.68-0.06-0.882-0.381L11.464,10.789z M9.475,9.563C9.32,9.609,8.848,9.757,8.269,8.817c0,0-3.916-6.16-4.007-6.351\tc-0.057-0.212,0.011-0.455,0.202-0.65C5.047,1.211,8.21,0.327,9.037,0.529c0.27,0.069,0.457,0.238,0.522,0.479\tc0.047,0.266,0.433,5.982,0.488,7.264C10.098,9.368,9.629,9.517,9.475,9.563z M9.927,19.066c-0.083,0.225-0.273,0.373-0.54,0.421\tc-0.762,0.13-3.15-0.751-3.647-1.342c-0.096-0.131-0.155-0.262-0.167-0.394c-0.011-0.095,0-0.189,0.036-0.272\tc0.061-0.155,2.917-3.538,2.917-3.538c0.214-0.272,0.595-0.355,0.952-0.213c0.345,0.13,0.56,0.428,0.536,0.749\tC10.014,14.479,9.977,18.923,9.927,19.066z M3.495,13.912c-0.235-0.009-0.444-0.148-0.568-0.382c-0.089-0.17-0.151-0.453-0.19-0.794\tC2.63,11.701,2.761,10.144,3.07,9.648c0.145-0.226,0.357-0.345,0.592-0.336c0.154,0,4.255,1.667,4.255,1.667\tc0.321,0.118,0.521,0.453,0.5,0.833c-0.023,0.37-0.236,0.655-0.551,0.738L3.495,13.912z"/></svg>',
      youtube: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15,4.1c1,0.1,2.3,0,3,0.8c0.8,0.8,0.9,2.1,0.9,3.1C19,9.2,19,10.9,19,12c-0.1,1.1,0,2.4-0.5,3.4c-0.5,1.1-1.4,1.5-2.5,1.6 c-1.2,0.1-8.6,0.1-11,0c-1.1-0.1-2.4-0.1-3.2-1c-0.7-0.8-0.7-2-0.8-3C1,11.8,1,10.1,1,8.9c0-1.1,0-2.4,0.5-3.4C2,4.5,3,4.3,4.1,4.2 C5.3,4.1,12.6,4,15,4.1z M8,7.5v6l5.5-3L8,7.5z"/></svg>'
    });
  }

  return "undefined" != typeof window && window.UIkit && window.UIkit.use(i), i;
});

/***/ }),

/***/ "./resources/js/vendor/uikit.min.js":
/*!******************************************!*\
  !*** ./resources/js/vendor/uikit.min.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! UIkit 3.4.3 | https://www.getuikit.com | (c) 2014 - 2020 YOOtheme | MIT License */
!function (t, e) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function () {
  "use strict";

  var t = Object.prototype,
      i = t.hasOwnProperty;

  function l(t, e) {
    return i.call(t, e);
  }

  var e = {},
      n = /([a-z\d])([A-Z])/g;

  function d(t) {
    return t in e || (e[t] = t.replace(n, "$1-$2").toLowerCase()), e[t];
  }

  var r = /-(\w)/g;

  function f(t) {
    return t.replace(r, o);
  }

  function o(t, e) {
    return e ? e.toUpperCase() : "";
  }

  function p(t) {
    return t.length ? o(0, t.charAt(0)) + t.slice(1) : "";
  }

  var s = String.prototype,
      a = s.startsWith || function (t) {
    return 0 === this.lastIndexOf(t, 0);
  };

  function w(t, e) {
    return a.call(t, e);
  }

  var h = s.endsWith || function (t) {
    return this.substr(-t.length) === t;
  };

  function u(t, e) {
    return h.call(t, e);
  }

  function c(t, e) {
    return !!~this.indexOf(t, e);
  }

  var m = Array.prototype,
      g = s.includes || c,
      v = m.includes || c;

  function b(t, e) {
    return t && (D(t) ? g : v).call(t, e);
  }

  var x = m.findIndex || function (t) {
    for (var e = arguments, i = 0; i < this.length; i++) {
      if (t.call(e[1], this[i], i, this)) return i;
    }

    return -1;
  };

  function y(t, e) {
    return x.call(t, e);
  }

  var k = Array.isArray;

  function $(t) {
    return "function" == typeof t;
  }

  function I(t) {
    return null !== t && "object" == _typeof(t);
  }

  var S = t.toString;

  function T(t) {
    return "[object Object]" === S.call(t);
  }

  function E(t) {
    return I(t) && t === t.window;
  }

  function A(t) {
    return I(t) && 9 === t.nodeType;
  }

  function C(t) {
    return I(t) && !!t.jquery;
  }

  function _(t) {
    return I(t) && 1 <= t.nodeType;
  }

  function M(t) {
    return I(t) && 1 === t.nodeType;
  }

  function N(t) {
    return S.call(t).match(/^\[object (NodeList|HTMLCollection)\]$/);
  }

  function z(t) {
    return "boolean" == typeof t;
  }

  function D(t) {
    return "string" == typeof t;
  }

  function B(t) {
    return "number" == typeof t;
  }

  function P(t) {
    return B(t) || D(t) && !isNaN(t - parseFloat(t));
  }

  function O(t) {
    return !(k(t) ? t.length : I(t) && Object.keys(t).length);
  }

  function H(t) {
    return void 0 === t;
  }

  function L(t) {
    return z(t) ? t : "true" === t || "1" === t || "" === t || "false" !== t && "0" !== t && t;
  }

  function F(t) {
    var e = Number(t);
    return !isNaN(e) && e;
  }

  function j(t) {
    return parseFloat(t) || 0;
  }

  function W(t) {
    return _(t) ? t : N(t) || C(t) ? t[0] : k(t) ? W(t[0]) : null;
  }

  function V(t) {
    return _(t) ? [t] : N(t) ? m.slice.call(t) : k(t) ? t.map(W).filter(Boolean) : C(t) ? t.toArray() : [];
  }

  function R(t) {
    return E(t) ? t : (t = W(t)) ? (A(t) ? t : t.ownerDocument).defaultView : window;
  }

  function q(t) {
    return k(t) ? t : D(t) ? t.split(/,(?![^(]*\))/).map(function (t) {
      return P(t) ? F(t) : L(t.trim());
    }) : [t];
  }

  function U(t) {
    return t ? u(t, "ms") ? j(t) : 1e3 * j(t) : 0;
  }

  function Y(t, i) {
    return t === i || I(t) && I(i) && Object.keys(t).length === Object.keys(i).length && J(t, function (t, e) {
      return t === i[e];
    });
  }

  function X(t, e, i) {
    return t.replace(new RegExp(e + "|" + i, "g"), function (t) {
      return t === e ? i : e;
    });
  }

  var G = Object.assign || function (t) {
    for (var e = [], i = arguments.length - 1; 0 < i--;) {
      e[i] = arguments[i + 1];
    }

    t = Object(t);

    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      if (null !== r) for (var o in r) {
        l(r, o) && (t[o] = r[o]);
      }
    }

    return t;
  };

  function K(t) {
    return t[t.length - 1];
  }

  function J(t, e) {
    for (var i in t) {
      if (!1 === e(t[i], i)) return !1;
    }

    return !0;
  }

  function Z(t, r) {
    return t.sort(function (t, e) {
      var i = t[r];
      void 0 === i && (i = 0);
      var n = e[r];
      return void 0 === n && (n = 0), n < i ? 1 : i < n ? -1 : 0;
    });
  }

  function Q(t, i) {
    var n = new Set();
    return t.filter(function (t) {
      var e = t[i];
      return !n.has(e) && (n.add(e) || !0);
    });
  }

  function tt(t, e, i) {
    return void 0 === e && (e = 0), void 0 === i && (i = 1), Math.min(Math.max(F(t) || 0, e), i);
  }

  function et() {}

  function it(t, e) {
    return t.left < e.right && t.right > e.left && t.top < e.bottom && t.bottom > e.top;
  }

  function nt(t, e) {
    return t.x <= e.right && t.x >= e.left && t.y <= e.bottom && t.y >= e.top;
  }

  var rt = {
    ratio: function ratio(t, e, i) {
      var n,
          r = "width" === e ? "height" : "width";
      return (n = {})[r] = t[e] ? Math.round(i * t[r] / t[e]) : t[r], n[e] = i, n;
    },
    contain: function contain(i, n) {
      var r = this;
      return J(i = G({}, i), function (t, e) {
        return i = i[e] > n[e] ? r.ratio(i, e, n[e]) : i;
      }), i;
    },
    cover: function cover(i, n) {
      var r = this;
      return J(i = this.contain(i, n), function (t, e) {
        return i = i[e] < n[e] ? r.ratio(i, e, n[e]) : i;
      }), i;
    }
  };

  function ot(t, e, i) {
    if (I(e)) for (var n in e) {
      ot(t, n, e[n]);
    } else {
      if (H(i)) return (t = W(t)) && t.getAttribute(e);
      V(t).forEach(function (t) {
        $(i) && (i = i.call(t, ot(t, e))), null === i ? at(t, e) : t.setAttribute(e, i);
      });
    }
  }

  function st(t, e) {
    return V(t).some(function (t) {
      return t.hasAttribute(e);
    });
  }

  function at(t, e) {
    t = V(t), e.split(" ").forEach(function (e) {
      return t.forEach(function (t) {
        return t.hasAttribute(e) && t.removeAttribute(e);
      });
    });
  }

  function ht(t, e) {
    for (var i = 0, n = [e, "data-" + e]; i < n.length; i++) {
      if (st(t, n[i])) return ot(t, n[i]);
    }
  }

  var ut = /msie|trident/i.test(window.navigator.userAgent),
      ct = "rtl" === ot(document.documentElement, "dir"),
      lt = ("ontouchstart" in window),
      dt = window.PointerEvent,
      ft = lt || window.DocumentTouch && document instanceof DocumentTouch || navigator.maxTouchPoints,
      pt = dt ? "pointerdown" : lt ? "touchstart" : "mousedown",
      mt = dt ? "pointermove" : lt ? "touchmove" : "mousemove",
      gt = dt ? "pointerup" : lt ? "touchend" : "mouseup",
      vt = dt ? "pointerenter" : lt ? "" : "mouseenter",
      wt = dt ? "pointerleave" : lt ? "" : "mouseleave",
      bt = dt ? "pointercancel" : "touchcancel";

  function xt(t, e) {
    return W(t) || $t(t, kt(t, e));
  }

  function yt(t, e) {
    var i = V(t);
    return i.length && i || It(t, kt(t, e));
  }

  function kt(t, e) {
    return void 0 === e && (e = document), At(t) || A(e) ? e : e.ownerDocument;
  }

  function $t(t, e) {
    return W(St(t, e, "querySelector"));
  }

  function It(t, e) {
    return V(St(t, e, "querySelectorAll"));
  }

  function St(t, s, e) {
    if (void 0 === s && (s = document), !t || !D(t)) return null;
    var a;
    At(t = t.replace(Et, "$1 *")) && (a = [], t = t.match(Ct).map(function (t) {
      return t.replace(/,$/, "").trim();
    }).map(function (t, e) {
      var i = s;

      if ("!" === t[0]) {
        var n = t.substr(1).trim().split(" ");
        i = Dt(Bt(s), n[0]), t = n.slice(1).join(" ").trim();
      }

      if ("-" === t[0]) {
        var r = t.substr(1).trim().split(" "),
            o = (i || s).previousElementSibling;
        i = Nt(o, t.substr(1)) ? o : null, t = r.slice(1).join(" ");
      }

      return i ? (i.id || (i.id = "uk-" + Date.now() + e, a.push(function () {
        return at(i, "id");
      })), "#" + Ot(i.id) + " " + t) : null;
    }).filter(Boolean).join(","), s = document);

    try {
      return s[e](t);
    } catch (t) {
      return null;
    } finally {
      a && a.forEach(function (t) {
        return t();
      });
    }
  }

  var Tt = /(^|[^\\],)\s*[!>+~-]/,
      Et = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g;

  function At(t) {
    return D(t) && t.match(Tt);
  }

  var Ct = /.*?[^\\](?:,|$)/g;
  var _t = Element.prototype,
      Mt = _t.matches || _t.webkitMatchesSelector || _t.msMatchesSelector;

  function Nt(t, e) {
    return V(t).some(function (t) {
      return Mt.call(t, e);
    });
  }

  var zt = _t.closest || function (t) {
    var e = this;

    do {
      if (Nt(e, t)) return e;
    } while (e = Bt(e));
  };

  function Dt(t, e) {
    return w(e, ">") && (e = e.slice(1)), M(t) ? zt.call(t, e) : V(t).map(function (t) {
      return Dt(t, e);
    }).filter(Boolean);
  }

  function Bt(t) {
    return (t = W(t)) && M(t.parentNode) && t.parentNode;
  }

  var Pt = window.CSS && CSS.escape || function (t) {
    return t.replace(/([^\x7f-\uFFFF\w-])/g, function (t) {
      return "\\" + t;
    });
  };

  function Ot(t) {
    return D(t) ? Pt.call(null, t) : "";
  }

  var Ht = {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    menuitem: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
  };

  function Lt(t) {
    return V(t).some(function (t) {
      return Ht[t.tagName.toLowerCase()];
    });
  }

  function Ft(t) {
    return V(t).some(function (t) {
      return t.offsetWidth || t.offsetHeight || t.getClientRects().length;
    });
  }

  var jt = "input,select,textarea,button";

  function Wt(t) {
    return V(t).some(function (t) {
      return Nt(t, jt);
    });
  }

  function Vt(t, e) {
    return V(t).filter(function (t) {
      return Nt(t, e);
    });
  }

  function Rt(t, e) {
    return D(e) ? Nt(t, e) || Dt(t, e) : t === e || (A(e) ? e.documentElement : W(e)).contains(W(t));
  }

  function qt(t, e) {
    for (var i = []; t = Bt(t);) {
      e && !Nt(t, e) || i.push(t);
    }

    return i;
  }

  function Ut(t, e) {
    var i = (t = W(t)) ? V(t.children) : [];
    return e ? Vt(i, e) : i;
  }

  function Yt() {
    for (var t = [], e = arguments.length; e--;) {
      t[e] = arguments[e];
    }

    var i,
        n,
        r = Zt(t),
        o = r[0],
        s = r[1],
        a = r[2],
        h = r[3],
        u = r[4];
    return o = ie(o), 1 < h.length && (i = h, h = function h(t) {
      return k(t.detail) ? i.apply(void 0, [t].concat(t.detail)) : i(t);
    }), u && u.self && (n = h, h = function h(t) {
      if (t.target === t.currentTarget || t.target === t.current) return n.call(null, t);
    }), a && (h = function (t, n, r) {
      var o = this;
      return function (i) {
        t.forEach(function (t) {
          var e = ">" === n[0] ? It(n, t).reverse().filter(function (t) {
            return Rt(i.target, t);
          })[0] : Dt(i.target, n);
          e && (i.delegate = t, i.current = e, r.call(o, i));
        });
      };
    }(o, a, h)), u = Qt(u), s.split(" ").forEach(function (e) {
      return o.forEach(function (t) {
        return t.addEventListener(e, h, u);
      });
    }), function () {
      return Xt(o, s, h, u);
    };
  }

  function Xt(t, e, i, n) {
    void 0 === n && (n = !1), n = Qt(n), t = ie(t), e.split(" ").forEach(function (e) {
      return t.forEach(function (t) {
        return t.removeEventListener(e, i, n);
      });
    });
  }

  function Gt() {
    for (var t = [], e = arguments.length; e--;) {
      t[e] = arguments[e];
    }

    var i = Zt(t),
        n = i[0],
        r = i[1],
        o = i[2],
        s = i[3],
        a = i[4],
        h = i[5],
        u = Yt(n, r, o, function (t) {
      var e = !h || h(t);
      e && (u(), s(t, e));
    }, a);
    return u;
  }

  function Kt(t, i, n) {
    return ie(t).reduce(function (t, e) {
      return t && e.dispatchEvent(Jt(i, !0, !0, n));
    }, !0);
  }

  function Jt(t, e, i, n) {
    if (void 0 === e && (e = !0), void 0 === i && (i = !1), D(t)) {
      var r = document.createEvent("CustomEvent");
      r.initCustomEvent(t, e, i, n), t = r;
    }

    return t;
  }

  function Zt(t) {
    return $(t[2]) && t.splice(2, 0, !1), t;
  }

  function Qt(t) {
    return t && ut && !z(t) ? !!t.capture : t;
  }

  function te(t) {
    return t && "addEventListener" in t;
  }

  function ee(t) {
    return te(t) ? t : W(t);
  }

  function ie(t) {
    return k(t) ? t.map(ee).filter(Boolean) : D(t) ? It(t) : te(t) ? [t] : V(t);
  }

  function ne(t) {
    return "touch" === t.pointerType || !!t.touches;
  }

  function re(t) {
    var e = t.touches,
        i = t.changedTouches,
        n = e && e[0] || i && i[0] || t;
    return {
      x: n.clientX,
      y: n.clientY
    };
  }

  function oe() {
    var i = this;
    this.promise = new se(function (t, e) {
      i.reject = e, i.resolve = t;
    });
  }

  var se = "Promise" in window ? window.Promise : ue,
      ae = 2,
      he = "setImmediate" in window ? setImmediate : setTimeout;

  function ue(t) {
    this.state = ae, this.value = void 0, this.deferred = [];
    var e = this;

    try {
      t(function (t) {
        e.resolve(t);
      }, function (t) {
        e.reject(t);
      });
    } catch (t) {
      e.reject(t);
    }
  }

  ue.reject = function (i) {
    return new ue(function (t, e) {
      e(i);
    });
  }, ue.resolve = function (i) {
    return new ue(function (t, e) {
      t(i);
    });
  }, ue.all = function (s) {
    return new ue(function (i, t) {
      var n = [],
          r = 0;

      function e(e) {
        return function (t) {
          n[e] = t, (r += 1) === s.length && i(n);
        };
      }

      0 === s.length && i(n);

      for (var o = 0; o < s.length; o += 1) {
        ue.resolve(s[o]).then(e(o), t);
      }
    });
  }, ue.race = function (n) {
    return new ue(function (t, e) {
      for (var i = 0; i < n.length; i += 1) {
        ue.resolve(n[i]).then(t, e);
      }
    });
  };
  var ce = ue.prototype;

  function le(s, a) {
    return new se(function (t, e) {
      var i = G({
        data: null,
        method: "GET",
        headers: {},
        xhr: new XMLHttpRequest(),
        beforeSend: et,
        responseType: ""
      }, a);
      i.beforeSend(i);
      var n = i.xhr;

      for (var r in i) {
        if (r in n) try {
          n[r] = i[r];
        } catch (t) {}
      }

      for (var o in n.open(i.method.toUpperCase(), s), i.headers) {
        n.setRequestHeader(o, i.headers[o]);
      }

      Yt(n, "load", function () {
        0 === n.status || 200 <= n.status && n.status < 300 || 304 === n.status ? t(n) : e(G(Error(n.statusText), {
          xhr: n,
          status: n.status
        }));
      }), Yt(n, "error", function () {
        return e(G(Error("Network Error"), {
          xhr: n
        }));
      }), Yt(n, "timeout", function () {
        return e(G(Error("Network Timeout"), {
          xhr: n
        }));
      }), n.send(i.data);
    });
  }

  function de(n, r, o) {
    return new se(function (t, e) {
      var i = new Image();
      i.onerror = e, i.onload = function () {
        return t(i);
      }, o && (i.sizes = o), r && (i.srcset = r), i.src = n;
    });
  }

  function fe(t) {
    if ("loading" === document.readyState) var e = Yt(document, "DOMContentLoaded", function () {
      e(), t();
    });else t();
  }

  function pe(t, e) {
    return e ? V(t).indexOf(W(e)) : Ut(Bt(t)).indexOf(t);
  }

  function me(t, e, i, n) {
    void 0 === i && (i = 0), void 0 === n && (n = !1);
    var r = (e = V(e)).length;
    return t = P(t) ? F(t) : "next" === t ? i + 1 : "previous" === t ? i - 1 : pe(e, t), n ? tt(t, 0, r - 1) : (t %= r) < 0 ? t + r : t;
  }

  function ge(t) {
    return (t = _e(t)).innerHTML = "", t;
  }

  function ve(t, e) {
    return t = _e(t), H(e) ? t.innerHTML : we(t.hasChildNodes() ? ge(t) : t, e);
  }

  function we(e, t) {
    return e = _e(e), ye(t, function (t) {
      return e.appendChild(t);
    });
  }

  function be(e, t) {
    return e = _e(e), ye(t, function (t) {
      return e.parentNode.insertBefore(t, e);
    });
  }

  function xe(e, t) {
    return e = _e(e), ye(t, function (t) {
      return e.nextSibling ? be(e.nextSibling, t) : we(e.parentNode, t);
    });
  }

  function ye(t, e) {
    return (t = D(t) ? Ae(t) : t) ? "length" in t ? V(t).map(e) : e(t) : null;
  }

  function ke(t) {
    V(t).map(function (t) {
      return t.parentNode && t.parentNode.removeChild(t);
    });
  }

  function $e(t, e) {
    for (e = W(be(t, e)); e.firstChild;) {
      e = e.firstChild;
    }

    return we(e, t), e;
  }

  function Ie(t, e) {
    return V(V(t).map(function (t) {
      return t.hasChildNodes ? $e(V(t.childNodes), e) : we(t, e);
    }));
  }

  function Se(t) {
    V(t).map(Bt).filter(function (t, e, i) {
      return i.indexOf(t) === e;
    }).forEach(function (t) {
      be(t, t.childNodes), ke(t);
    });
  }

  ce.resolve = function (t) {
    var e = this;

    if (e.state === ae) {
      if (t === e) throw new TypeError("Promise settled with itself.");
      var i = !1;

      try {
        var n = t && t.then;
        if (null !== t && I(t) && $(n)) return void n.call(t, function (t) {
          i || e.resolve(t), i = !0;
        }, function (t) {
          i || e.reject(t), i = !0;
        });
      } catch (t) {
        return void (i || e.reject(t));
      }

      e.state = 0, e.value = t, e.notify();
    }
  }, ce.reject = function (t) {
    var e = this;

    if (e.state === ae) {
      if (t === e) throw new TypeError("Promise settled with itself.");
      e.state = 1, e.value = t, e.notify();
    }
  }, ce.notify = function () {
    var o = this;
    he(function () {
      if (o.state !== ae) for (; o.deferred.length;) {
        var t = o.deferred.shift(),
            e = t[0],
            i = t[1],
            n = t[2],
            r = t[3];

        try {
          0 === o.state ? $(e) ? n(e.call(void 0, o.value)) : n(o.value) : 1 === o.state && ($(i) ? n(i.call(void 0, o.value)) : r(o.value));
        } catch (t) {
          r(t);
        }
      }
    });
  }, ce.then = function (i, n) {
    var r = this;
    return new ue(function (t, e) {
      r.deferred.push([i, n, t, e]), r.notify();
    });
  }, ce["catch"] = function (t) {
    return this.then(void 0, t);
  };
  var Te = /^\s*<(\w+|!)[^>]*>/,
      Ee = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;

  function Ae(t) {
    var e = Ee.exec(t);
    if (e) return document.createElement(e[1]);
    var i = document.createElement("div");
    return Te.test(t) ? i.insertAdjacentHTML("beforeend", t.trim()) : i.textContent = t, 1 < i.childNodes.length ? V(i.childNodes) : i.firstChild;
  }

  function Ce(t, e) {
    if (M(t)) for (e(t), t = t.firstElementChild; t;) {
      var i = t.nextElementSibling;
      Ce(t, e), t = i;
    }
  }

  function _e(t, e) {
    return D(t) ? Ne(t) ? W(Ae(t)) : $t(t, e) : W(t);
  }

  function Me(t, e) {
    return D(t) ? Ne(t) ? V(Ae(t)) : It(t, e) : V(t);
  }

  function Ne(t) {
    return "<" === t[0] || t.match(/^\s*</);
  }

  function ze(t) {
    for (var e = [], i = arguments.length - 1; 0 < i--;) {
      e[i] = arguments[i + 1];
    }

    Le(t, e, "add");
  }

  function De(t) {
    for (var e = [], i = arguments.length - 1; 0 < i--;) {
      e[i] = arguments[i + 1];
    }

    Le(t, e, "remove");
  }

  function Be(t, e) {
    ot(t, "class", function (t) {
      return (t || "").replace(new RegExp("\\b" + e + "\\b", "g"), "");
    });
  }

  function Pe(t) {
    for (var e = [], i = arguments.length - 1; 0 < i--;) {
      e[i] = arguments[i + 1];
    }

    e[0] && De(t, e[0]), e[1] && ze(t, e[1]);
  }

  function Oe(t, e) {
    return e && V(t).some(function (t) {
      return t.classList.contains(e.split(" ")[0]);
    });
  }

  function He(t) {
    for (var n = [], e = arguments.length - 1; 0 < e--;) {
      n[e] = arguments[e + 1];
    }

    if (n.length) {
      var r = D(K(n = Fe(n))) ? [] : n.pop();
      n = n.filter(Boolean), V(t).forEach(function (t) {
        for (var e = t.classList, i = 0; i < n.length; i++) {
          je.Force ? e.toggle.apply(e, [n[i]].concat(r)) : e[(H(r) ? !e.contains(n[i]) : r) ? "add" : "remove"](n[i]);
        }
      });
    }
  }

  function Le(t, i, n) {
    (i = Fe(i).filter(Boolean)).length && V(t).forEach(function (t) {
      var e = t.classList;
      je.Multiple ? e[n].apply(e, i) : i.forEach(function (t) {
        return e[n](t);
      });
    });
  }

  function Fe(t) {
    return t.reduce(function (t, e) {
      return t.concat.call(t, D(e) && b(e, " ") ? e.trim().split(" ") : e);
    }, []);
  }

  var je = {
    get Multiple() {
      return this.get("_multiple");
    },

    get Force() {
      return this.get("_force");
    },

    get: function get(t) {
      if (!l(this, t)) {
        var e = document.createElement("_").classList;
        e.add("a", "b"), e.toggle("c", !1), this._multiple = e.contains("b"), this._force = !e.contains("c");
      }

      return this[t];
    }
  },
      We = {
    "animation-iteration-count": !0,
    "column-count": !0,
    "fill-opacity": !0,
    "flex-grow": !0,
    "flex-shrink": !0,
    "font-weight": !0,
    "line-height": !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    "stroke-dasharray": !0,
    "stroke-dashoffset": !0,
    widows: !0,
    "z-index": !0,
    zoom: !0
  };

  function Ve(t, e, r) {
    return V(t).map(function (i) {
      if (D(e)) {
        if (e = Ge(e), H(r)) return qe(i, e);
        r || B(r) ? i.style[e] = P(r) && !We[e] ? r + "px" : r : i.style.removeProperty(e);
      } else {
        if (k(e)) {
          var n = Re(i);
          return e.reduce(function (t, e) {
            return t[e] = n[Ge(e)], t;
          }, {});
        }

        I(e) && J(e, function (t, e) {
          return Ve(i, e, t);
        });
      }

      return i;
    })[0];
  }

  function Re(t, e) {
    return (t = W(t)).ownerDocument.defaultView.getComputedStyle(t, e);
  }

  function qe(t, e, i) {
    return Re(t, i)[e];
  }

  var Ue = {};

  function Ye(t) {
    var e = document.documentElement;
    if (!ut) return Re(e).getPropertyValue("--uk-" + t);

    if (!(t in Ue)) {
      var i = we(e, document.createElement("div"));
      ze(i, "uk-" + t), Ue[t] = qe(i, "content", ":before").replace(/^["'](.*)["']$/, "$1"), ke(i);
    }

    return Ue[t];
  }

  var Xe = {};

  function Ge(t) {
    var e = Xe[t];
    return e = e || (Xe[t] = function (t) {
      t = d(t);
      var e = document.documentElement.style;
      if (t in e) return t;
      var i,
          n = Ke.length;

      for (; n--;) {
        if ((i = "-" + Ke[n] + "-" + t) in e) return i;
      }
    }(t) || t);
  }

  var Ke = ["webkit", "moz", "ms"];

  function Je(t, s, a, h) {
    return void 0 === a && (a = 400), void 0 === h && (h = "linear"), se.all(V(t).map(function (o) {
      return new se(function (i, n) {
        for (var t in s) {
          var e = Ve(o, t);
          "" === e && Ve(o, t, e);
        }

        var r = setTimeout(function () {
          return Kt(o, "transitionend");
        }, a);
        Gt(o, "transitionend transitioncanceled", function (t) {
          var e = t.type;
          clearTimeout(r), De(o, "uk-transition"), Ve(o, {
            transitionProperty: "",
            transitionDuration: "",
            transitionTimingFunction: ""
          }), ("transitioncanceled" === e ? n : i)();
        }, {
          self: !0
        }), ze(o, "uk-transition"), Ve(o, G({
          transitionProperty: Object.keys(s).map(Ge).join(","),
          transitionDuration: a + "ms",
          transitionTimingFunction: h
        }, s));
      });
    }));
  }

  var Ze = {
    start: Je,
    stop: function stop(t) {
      return Kt(t, "transitionend"), se.resolve();
    },
    cancel: function cancel(t) {
      Kt(t, "transitioncanceled");
    },
    inProgress: function inProgress(t) {
      return Oe(t, "uk-transition");
    }
  },
      Qe = "uk-animation-",
      ti = "uk-cancel-animation";

  function ei(t, e, i, a, h) {
    var u = arguments;
    return void 0 === i && (i = 200), se.all(V(t).map(function (s) {
      return new se(function (n, r) {
        if (Oe(s, ti)) requestAnimationFrame(function () {
          return se.resolve().then(function () {
            return ei.apply(void 0, u).then(n, r);
          });
        });else {
          var t = e + " " + Qe + (h ? "leave" : "enter");
          w(e, Qe) && (a && (t += " uk-transform-origin-" + a), h && (t += " " + Qe + "reverse")), o(), Gt(s, "animationend animationcancel", function (t) {
            var e = t.type,
                i = !1;
            "animationcancel" === e ? (r(), o()) : (n(), se.resolve().then(function () {
              i = !0, o();
            })), requestAnimationFrame(function () {
              i || (ze(s, ti), requestAnimationFrame(function () {
                return De(s, ti);
              }));
            });
          }, {
            self: !0
          }), Ve(s, "animationDuration", i + "ms"), ze(s, t);
        }

        function o() {
          Ve(s, "animationDuration", ""), Be(s, Qe + "\\S*");
        }
      });
    }));
  }

  var ii = new RegExp(Qe + "(enter|leave)"),
      ni = {
    "in": function _in(t, e, i, n) {
      return ei(t, e, i, n, !1);
    },
    out: function out(t, e, i, n) {
      return ei(t, e, i, n, !0);
    },
    inProgress: function inProgress(t) {
      return ii.test(ot(t, "class"));
    },
    cancel: function cancel(t) {
      Kt(t, "animationcancel");
    }
  },
      ri = {
    width: ["x", "left", "right"],
    height: ["y", "top", "bottom"]
  };

  function oi(t, e, c, l, d, i, n, r) {
    c = mi(c), l = mi(l);
    var f = {
      element: c,
      target: l
    };
    if (!t || !e) return f;
    var p = ai(t),
        m = ai(e),
        g = m;

    if (pi(g, c, p, -1), pi(g, l, m, 1), d = gi(d, p.width, p.height), i = gi(i, m.width, m.height), d.x += i.x, d.y += i.y, g.left += d.x, g.top += d.y, n) {
      var o = [ai(R(t))];
      r && o.unshift(ai(r)), J(ri, function (t, s) {
        var a = t[0],
            h = t[1],
            u = t[2];
        !0 !== n && !b(n, a) || o.some(function (n) {
          var t = c[a] === h ? -p[s] : c[a] === u ? p[s] : 0,
              e = l[a] === h ? m[s] : l[a] === u ? -m[s] : 0;

          if (g[h] < n[h] || g[h] + p[s] > n[u]) {
            var i = p[s] / 2,
                r = "center" === l[a] ? -m[s] / 2 : 0;
            return "center" === c[a] && (o(i, r) || o(-i, -r)) || o(t, e);
          }

          function o(e, t) {
            var i = g[h] + e + t - 2 * d[a];
            if (i >= n[h] && i + p[s] <= n[u]) return g[h] = i, ["element", "target"].forEach(function (t) {
              f[t][a] = e ? f[t][a] === ri[s][1] ? ri[s][2] : ri[s][1] : f[t][a];
            }), !0;
          }
        });
      });
    }

    return si(t, g), f;
  }

  function si(i, n) {
    if (!n) return ai(i);
    var r = si(i),
        o = Ve(i, "position");
    ["left", "top"].forEach(function (t) {
      if (t in n) {
        var e = Ve(i, t);
        Ve(i, t, n[t] - r[t] + j("absolute" === o && "auto" === e ? hi(i)[t] : e));
      }
    });
  }

  function ai(t) {
    if (!t) return {};
    var e,
        i,
        n = R(t),
        r = n.pageYOffset,
        o = n.pageXOffset;

    if (E(t)) {
      var s = t.innerHeight,
          a = t.innerWidth;
      return {
        top: r,
        left: o,
        height: s,
        width: a,
        bottom: r + s,
        right: o + a
      };
    }

    Ft(t) || "none" !== Ve(t, "display") || (e = ot(t, "style"), i = ot(t, "hidden"), ot(t, {
      style: (e || "") + ";display:block !important;",
      hidden: null
    }));
    var h = (t = W(t)).getBoundingClientRect();
    return H(e) || ot(t, {
      style: e,
      hidden: i
    }), {
      height: h.height,
      width: h.width,
      top: h.top + r,
      left: h.left + o,
      bottom: h.bottom + r,
      right: h.right + o
    };
  }

  function hi(t, e) {
    e = e || W(t).offsetParent || R(t).document.documentElement;
    var i = si(t),
        n = si(e);
    return {
      top: i.top - n.top - j(Ve(e, "borderTopWidth")),
      left: i.left - n.left - j(Ve(e, "borderLeftWidth"))
    };
  }

  function ui(t) {
    var e = [0, 0];
    t = W(t);

    do {
      if (e[0] += t.offsetTop, e[1] += t.offsetLeft, "fixed" === Ve(t, "position")) {
        var i = R(t);
        return e[0] += i.pageYOffset, e[1] += i.pageXOffset, e;
      }
    } while (t = t.offsetParent);

    return e;
  }

  var ci = di("height"),
      li = di("width");

  function di(n) {
    var r = p(n);
    return function (t, e) {
      if (H(e)) {
        if (E(t)) return t["inner" + r];

        if (A(t)) {
          var i = t.documentElement;
          return Math.max(i["offset" + r], i["scroll" + r]);
        }

        return (e = "auto" === (e = Ve(t = W(t), n)) ? t["offset" + r] : j(e) || 0) - fi(t, n);
      }

      Ve(t, n, e || 0 === e ? +e + fi(t, n) + "px" : "");
    };
  }

  function fi(i, t, e) {
    return void 0 === e && (e = "border-box"), Ve(i, "boxSizing") === e ? ri[t].slice(1).map(p).reduce(function (t, e) {
      return t + j(Ve(i, "padding" + e)) + j(Ve(i, "border" + e + "Width"));
    }, 0) : 0;
  }

  function pi(o, s, a, h) {
    J(ri, function (t, e) {
      var i = t[0],
          n = t[1],
          r = t[2];
      s[i] === r ? o[n] += a[e] * h : "center" === s[i] && (o[n] += a[e] * h / 2);
    });
  }

  function mi(t) {
    var e = /left|center|right/,
        i = /top|center|bottom/;
    return 1 === (t = (t || "").split(" ")).length && (t = e.test(t[0]) ? t.concat("center") : i.test(t[0]) ? ["center"].concat(t) : ["center", "center"]), {
      x: e.test(t[0]) ? t[0] : "center",
      y: i.test(t[1]) ? t[1] : "center"
    };
  }

  function gi(t, e, i) {
    var n = (t || "").split(" "),
        r = n[0],
        o = n[1];
    return {
      x: r ? j(r) * (u(r, "%") ? e / 100 : 1) : 0,
      y: o ? j(o) * (u(o, "%") ? i / 100 : 1) : 0
    };
  }

  function vi(t) {
    switch (t) {
      case "left":
        return "right";

      case "right":
        return "left";

      case "top":
        return "bottom";

      case "bottom":
        return "top";

      default:
        return t;
    }
  }

  function wi(t, e, i) {
    return void 0 === e && (e = "width"), void 0 === i && (i = window), P(t) ? +t : u(t, "vh") ? bi(ci(R(i)), t) : u(t, "vw") ? bi(li(R(i)), t) : u(t, "%") ? bi(ai(i)[e], t) : j(t);
  }

  function bi(t, e) {
    return t * j(e) / 100;
  }

  var xi = {
    reads: [],
    writes: [],
    read: function read(t) {
      return this.reads.push(t), $i(), t;
    },
    write: function write(t) {
      return this.writes.push(t), $i(), t;
    },
    clear: function clear(t) {
      return Si(this.reads, t) || Si(this.writes, t);
    },
    flush: yi
  };

  function yi(t) {
    void 0 === t && (t = 1), Ii(xi.reads), Ii(xi.writes.splice(0, xi.writes.length)), xi.scheduled = !1, (xi.reads.length || xi.writes.length) && $i(t + 1);
  }

  var ki = 5;

  function $i(t) {
    if (!xi.scheduled) {
      if (xi.scheduled = !0, ki < t) throw new Error("Maximum recursion limit reached.");
      t ? se.resolve().then(function () {
        return yi(t);
      }) : requestAnimationFrame(function () {
        return yi();
      });
    }
  }

  function Ii(t) {
    for (var e; e = t.shift();) {
      e();
    }
  }

  function Si(t, e) {
    var i = t.indexOf(e);
    return !!~i && !!t.splice(i, 1);
  }

  function Ti() {}

  Ti.prototype = {
    positions: [],
    init: function init() {
      var e,
          t = this;
      this.positions = [], this.unbind = Yt(document, "mousemove", function (t) {
        return e = re(t);
      }), this.interval = setInterval(function () {
        e && (t.positions.push(e), 5 < t.positions.length && t.positions.shift());
      }, 50);
    },
    cancel: function cancel() {
      this.unbind && this.unbind(), this.interval && clearInterval(this.interval);
    },
    movesTo: function movesTo(t) {
      if (this.positions.length < 2) return !1;
      var i = t.getBoundingClientRect(),
          e = i.left,
          n = i.right,
          r = i.top,
          o = i.bottom,
          s = this.positions[0],
          a = K(this.positions),
          h = [s, a];
      return !nt(a, i) && [[{
        x: e,
        y: r
      }, {
        x: n,
        y: o
      }], [{
        x: e,
        y: o
      }, {
        x: n,
        y: r
      }]].some(function (t) {
        var e = function (t, e) {
          var i = t[0],
              n = i.x,
              r = i.y,
              o = t[1],
              s = o.x,
              a = o.y,
              h = e[0],
              u = h.x,
              c = h.y,
              l = e[1],
              d = l.x,
              f = l.y,
              p = (f - c) * (s - n) - (d - u) * (a - r);
          if (0 == p) return !1;
          var m = ((d - u) * (r - c) - (f - c) * (n - u)) / p;
          if (m < 0) return !1;
          return {
            x: n + m * (s - n),
            y: r + m * (a - r)
          };
        }(h, t);

        return e && nt(e, i);
      });
    }
  };
  var Ei = {};

  function Ai(t, e, i) {
    return Ei.computed($(t) ? t.call(i, i) : t, $(e) ? e.call(i, i) : e);
  }

  function Ci(t, e) {
    return t = t && !k(t) ? [t] : t, e ? t ? t.concat(e) : k(e) ? e : [e] : t;
  }

  function _i(e, i, n) {
    var r = {};
    if ($(i) && (i = i.options), i["extends"] && (e = _i(e, i["extends"], n)), i.mixins) for (var t = 0, o = i.mixins.length; t < o; t++) {
      e = _i(e, i.mixins[t], n);
    }

    for (var s in e) {
      h(s);
    }

    for (var a in i) {
      l(e, a) || h(a);
    }

    function h(t) {
      r[t] = (Ei[t] || function (t, e) {
        return H(e) ? t : e;
      })(e[t], i[t], n);
    }

    return r;
  }

  function Mi(t, e) {
    var i;
    void 0 === e && (e = []);

    try {
      return t ? w(t, "{") ? JSON.parse(t) : e.length && !b(t, ":") ? ((i = {})[e[0]] = t, i) : t.split(";").reduce(function (t, e) {
        var i = e.split(/:(.*)/),
            n = i[0],
            r = i[1];
        return n && !H(r) && (t[n.trim()] = r.trim()), t;
      }, {}) : {};
    } catch (t) {
      return {};
    }
  }

  Ei.events = Ei.created = Ei.beforeConnect = Ei.connected = Ei.beforeDisconnect = Ei.disconnected = Ei.destroy = Ci, Ei.args = function (t, e) {
    return !1 !== e && Ci(e || t);
  }, Ei.update = function (t, e) {
    return Z(Ci(t, $(e) ? {
      read: e
    } : e), "order");
  }, Ei.props = function (t, e) {
    return k(e) && (e = e.reduce(function (t, e) {
      return t[e] = String, t;
    }, {})), Ei.methods(t, e);
  }, Ei.computed = Ei.methods = function (t, e) {
    return e ? t ? G({}, t, e) : e : t;
  }, Ei.data = function (e, i, t) {
    return t ? Ai(e, i, t) : i ? e ? function (t) {
      return Ai(e, i, t);
    } : i : e;
  };

  function Ni(t) {
    this.id = ++zi, this.el = W(t);
  }

  var zi = 0;

  function Di(t, e) {
    try {
      t.contentWindow.postMessage(JSON.stringify(G({
        event: "command"
      }, e)), "*");
    } catch (t) {}
  }

  function Bi(t, e, i) {
    if (void 0 === e && (e = 0), void 0 === i && (i = 0), !Ft(t)) return !1;

    for (var n = ji(t).concat(t), r = 0; r < n.length - 1; r++) {
      var o = si(Fi(n[r])),
          s = {
        top: o.top - e,
        left: o.left - i,
        bottom: o.bottom + e,
        right: o.right + i
      },
          a = si(n[r + 1]);
      if (!it(a, s) && !nt({
        x: a.left,
        y: a.top
      }, s)) return !1;
    }

    return !0;
  }

  function Pi(t, e) {
    (t = (E(t) || A(t) ? Wi : W)(t)).scrollTop = e;
  }

  function Oi(t, e) {
    void 0 === e && (e = {});
    var c = e.offset;

    if (void 0 === c && (c = 0), Ft(t)) {
      for (var l = ji(t).concat(t), i = se.resolve(), n = function n(u) {
        i = i.then(function () {
          return new se(function (i) {
            var t,
                n = l[u],
                e = l[u + 1],
                r = n.scrollTop,
                o = Math.ceil(hi(e, Fi(n)).top - c),
                s = (t = Math.abs(o), 40 * Math.pow(t, .375)),
                a = Date.now(),
                h = function h() {
              var t,
                  e = (t = tt((Date.now() - a) / s), .5 * (1 - Math.cos(Math.PI * t)));
              Pi(n, r + o * e), 1 != e ? requestAnimationFrame(h) : i();
            };

            h();
          });
        });
      }, r = 0; r < l.length - 1; r++) {
        n(r);
      }

      return i;
    }
  }

  function Hi(t, e) {
    if (void 0 === e && (e = 0), !Ft(t)) return 0;
    var i = K(Li(t)),
        n = i.scrollHeight,
        r = i.scrollTop,
        o = si(Fi(i)).height,
        s = ui(t)[0] - r - ui(i)[0],
        a = Math.min(o, s + r);
    return tt(-1 * (s - a) / Math.min(si(t).height + e + a, n - (s + r), n - o));
  }

  function Li(t, e) {
    void 0 === e && (e = /auto|scroll/);
    var i = Wi(t),
        n = qt(t).filter(function (t) {
      return t === i || e.test(Ve(t, "overflow")) && t.scrollHeight > Math.round(si(t).height);
    }).reverse();
    return n.length ? n : [i];
  }

  function Fi(t) {
    return t === Wi(t) ? window : t;
  }

  function ji(t) {
    return Li(t, /auto|scroll|hidden/);
  }

  function Wi(t) {
    var e = R(t).document;
    return e.scrollingElement || e.documentElement;
  }

  Ni.prototype.isVideo = function () {
    return this.isYoutube() || this.isVimeo() || this.isHTML5();
  }, Ni.prototype.isHTML5 = function () {
    return "VIDEO" === this.el.tagName;
  }, Ni.prototype.isIFrame = function () {
    return "IFRAME" === this.el.tagName;
  }, Ni.prototype.isYoutube = function () {
    return this.isIFrame() && !!this.el.src.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/);
  }, Ni.prototype.isVimeo = function () {
    return this.isIFrame() && !!this.el.src.match(/vimeo\.com\/video\/.*/);
  }, Ni.prototype.enableApi = function () {
    var e = this;
    if (this.ready) return this.ready;
    var i,
        r = this.isYoutube(),
        o = this.isVimeo();
    return r || o ? this.ready = new se(function (t) {
      var n;
      Gt(e.el, "load", function () {
        if (r) {
          var t = function t() {
            return Di(e.el, {
              event: "listening",
              id: e.id
            });
          };

          i = setInterval(t, 100), t();
        }
      }), n = function n(t) {
        return r && t.id === e.id && "onReady" === t.event || o && Number(t.player_id) === e.id;
      }, new se(function (i) {
        return Gt(window, "message", function (t, e) {
          return i(e);
        }, !1, function (t) {
          var e = t.data;

          if (e && D(e)) {
            try {
              e = JSON.parse(e);
            } catch (t) {
              return;
            }

            return e && n(e);
          }
        });
      }).then(function () {
        t(), i && clearInterval(i);
      }), ot(e.el, "src", e.el.src + (b(e.el.src, "?") ? "&" : "?") + (r ? "enablejsapi=1" : "api=1&player_id=" + e.id));
    }) : se.resolve();
  }, Ni.prototype.play = function () {
    var t = this;
    if (this.isVideo()) if (this.isIFrame()) this.enableApi().then(function () {
      return Di(t.el, {
        func: "playVideo",
        method: "play"
      });
    });else if (this.isHTML5()) try {
      var e = this.el.play();
      e && e["catch"](et);
    } catch (t) {}
  }, Ni.prototype.pause = function () {
    var t = this;
    this.isVideo() && (this.isIFrame() ? this.enableApi().then(function () {
      return Di(t.el, {
        func: "pauseVideo",
        method: "pause"
      });
    }) : this.isHTML5() && this.el.pause());
  }, Ni.prototype.mute = function () {
    var t = this;
    this.isVideo() && (this.isIFrame() ? this.enableApi().then(function () {
      return Di(t.el, {
        func: "mute",
        method: "setVolume",
        value: 0
      });
    }) : this.isHTML5() && (this.el.muted = !0, ot(this.el, "muted", "")));
  };
  var Vi = "IntersectionObserver" in window ? window.IntersectionObserver : function () {
    function t(e, t) {
      var i = this;
      void 0 === t && (t = {});
      var n = t.rootMargin;
      void 0 === n && (n = "0 0"), this.targets = [];
      var r,
          o = (n || "0 0").split(" ").map(j),
          s = o[0],
          a = o[1];
      this.offsetTop = s, this.offsetLeft = a, this.apply = function () {
        r = r || requestAnimationFrame(function () {
          return setTimeout(function () {
            var t = i.takeRecords();
            t.length && e(t, i), r = !1;
          });
        });
      }, this.off = Yt(window, "scroll resize load", this.apply, {
        passive: !0,
        capture: !0
      });
    }

    return t.prototype.takeRecords = function () {
      var i = this;
      return this.targets.filter(function (t) {
        var e = Bi(t.target, i.offsetTop, i.offsetLeft);
        if (null === t.isIntersecting || e ^ t.isIntersecting) return t.isIntersecting = e, !0;
      });
    }, t.prototype.observe = function (t) {
      this.targets.push({
        target: t,
        isIntersecting: null
      }), this.apply();
    }, t.prototype.disconnect = function () {
      this.targets = [], this.off();
    }, t;
  }();

  function Ri(t) {
    return !(!w(t, "uk-") && !w(t, "data-uk-")) && f(t.replace("data-uk-", "").replace("uk-", ""));
  }

  function qi(t) {
    this._init(t);
  }

  var Ui, Yi, Xi, Gi, Ki, Ji, Zi, Qi, tn;

  function en(t, e) {
    if (t) for (var i in t) {
      t[i]._connected && t[i]._callUpdate(e);
    }
  }

  function nn(t, e) {
    var i = {},
        n = t.args;
    void 0 === n && (n = []);
    var r = t.props;
    void 0 === r && (r = {});
    var o = t.el;
    if (!r) return i;

    for (var s in r) {
      var a = d(s),
          h = ht(o, a);
      H(h) || (h = r[s] === Boolean && "" === h || an(r[s], h), ("target" !== a || h && !w(h, "_")) && (i[s] = h));
    }

    var u = Mi(ht(o, e), n);

    for (var c in u) {
      var l = f(c);
      void 0 !== r[l] && (i[l] = an(r[l], u[c]));
    }

    return i;
  }

  function rn(n, r, o) {
    Object.defineProperty(n, r, {
      enumerable: !0,
      get: function get() {
        var t = n._computeds,
            e = n.$props,
            i = n.$el;
        return l(t, r) || (t[r] = (o.get || o).call(n, e, i)), t[r];
      },
      set: function set(t) {
        var e = n._computeds;
        e[r] = o.set ? o.set.call(n, t) : t, H(e[r]) && delete e[r];
      }
    });
  }

  function on(e, i, n) {
    T(i) || (i = {
      name: n,
      handler: i
    });
    var t = i.name,
        r = i.el,
        o = i.handler,
        s = i.capture,
        a = i.passive,
        h = i.delegate,
        u = i.filter,
        c = i.self;
    r = $(r) ? r.call(e) : r || e.$el, k(r) ? r.forEach(function (t) {
      return on(e, G({}, i, {
        el: t
      }), n);
    }) : !r || u && !u.call(e) || e._events.push(Yt(r, t, h ? D(h) ? h : h.call(e) : null, D(o) ? e[o] : o.bind(e), {
      passive: a,
      capture: s,
      self: c
    }));
  }

  function sn(t, e) {
    return t.every(function (t) {
      return !t || !l(t, e);
    });
  }

  function an(t, e) {
    return t === Boolean ? L(e) : t === Number ? F(e) : "list" === t ? q(e) : t ? t(e) : e;
  }

  qi.util = Object.freeze({
    __proto__: null,
    ajax: le,
    getImage: de,
    transition: Je,
    Transition: Ze,
    animate: ei,
    Animation: ni,
    attr: ot,
    hasAttr: st,
    removeAttr: at,
    data: ht,
    addClass: ze,
    removeClass: De,
    removeClasses: Be,
    replaceClass: Pe,
    hasClass: Oe,
    toggleClass: He,
    positionAt: oi,
    offset: si,
    position: hi,
    offsetPosition: ui,
    height: ci,
    width: li,
    boxModelAdjust: fi,
    flipPosition: vi,
    toPx: wi,
    ready: fe,
    index: pe,
    getIndex: me,
    empty: ge,
    html: ve,
    prepend: function prepend(e, t) {
      return (e = _e(e)).hasChildNodes() ? ye(t, function (t) {
        return e.insertBefore(t, e.firstChild);
      }) : we(e, t);
    },
    append: we,
    before: be,
    after: xe,
    remove: ke,
    wrapAll: $e,
    wrapInner: Ie,
    unwrap: Se,
    fragment: Ae,
    apply: Ce,
    $: _e,
    $$: Me,
    isIE: ut,
    isRtl: ct,
    hasTouch: ft,
    pointerDown: pt,
    pointerMove: mt,
    pointerUp: gt,
    pointerEnter: vt,
    pointerLeave: wt,
    pointerCancel: bt,
    on: Yt,
    off: Xt,
    once: Gt,
    trigger: Kt,
    createEvent: Jt,
    toEventTargets: ie,
    isTouch: ne,
    getEventPos: re,
    fastdom: xi,
    isVoidElement: Lt,
    isVisible: Ft,
    selInput: jt,
    isInput: Wt,
    filter: Vt,
    within: Rt,
    parents: qt,
    children: Ut,
    hasOwn: l,
    hyphenate: d,
    camelize: f,
    ucfirst: p,
    startsWith: w,
    endsWith: u,
    includes: b,
    findIndex: y,
    isArray: k,
    isFunction: $,
    isObject: I,
    isPlainObject: T,
    isWindow: E,
    isDocument: A,
    isJQuery: C,
    isNode: _,
    isElement: M,
    isNodeCollection: N,
    isBoolean: z,
    isString: D,
    isNumber: B,
    isNumeric: P,
    isEmpty: O,
    isUndefined: H,
    toBoolean: L,
    toNumber: F,
    toFloat: j,
    toNode: W,
    toNodes: V,
    toWindow: R,
    toList: q,
    toMs: U,
    isEqual: Y,
    swap: X,
    assign: G,
    last: K,
    each: J,
    sortBy: Z,
    uniqueBy: Q,
    clamp: tt,
    noop: et,
    intersectRect: it,
    pointInRect: nt,
    Dimensions: rt,
    MouseTracker: Ti,
    mergeOptions: _i,
    parseOptions: Mi,
    Player: Ni,
    Promise: se,
    Deferred: oe,
    IntersectionObserver: Vi,
    query: xt,
    queryAll: yt,
    find: $t,
    findAll: It,
    matches: Nt,
    closest: Dt,
    parent: Bt,
    escape: Ot,
    css: Ve,
    getStyles: Re,
    getStyle: qe,
    getCssVar: Ye,
    propName: Ge,
    isInView: Bi,
    scrollTop: Pi,
    scrollIntoView: Oi,
    scrolledOver: Hi,
    scrollParents: Li,
    getViewport: Fi
  }), qi.data = "__uikit__", qi.prefix = "uk-", qi.options = {}, qi.version = "3.4.3", Xi = (Ui = qi).data, Ui.use = function (t) {
    if (!t.installed) return t.call(null, this), t.installed = !0, this;
  }, Ui.mixin = function (t, e) {
    (e = (D(e) ? Ui.component(e) : e) || this).options = _i(e.options, t);
  }, Ui.extend = function (t) {
    t = t || {};

    function e(t) {
      this._init(t);
    }

    return ((e.prototype = Object.create(this.prototype)).constructor = e).options = _i(this.options, t), e["super"] = this, e.extend = this.extend, e;
  }, Ui.update = function (t, e) {
    qt(t = t ? W(t) : document.body).reverse().forEach(function (t) {
      return en(t[Xi], e);
    }), Ce(t, function (t) {
      return en(t[Xi], e);
    });
  }, Object.defineProperty(Ui, "container", {
    get: function get() {
      return Yi || document.body;
    },
    set: function set(t) {
      Yi = _e(t);
    }
  }), (Gi = qi).prototype._callHook = function (t) {
    var e = this,
        i = this.$options[t];
    i && i.forEach(function (t) {
      return t.call(e);
    });
  }, Gi.prototype._callConnected = function () {
    this._connected || (this._data = {}, this._computeds = {}, this._frames = {
      reads: {},
      writes: {}
    }, this._initProps(), this._callHook("beforeConnect"), this._connected = !0, this._initEvents(), this._initObserver(), this._callHook("connected"), this._callUpdate());
  }, Gi.prototype._callDisconnected = function () {
    this._connected && (this._callHook("beforeDisconnect"), this._observer && (this._observer.disconnect(), this._observer = null), this._unbindEvents(), this._callHook("disconnected"), this._connected = !1);
  }, Gi.prototype._callUpdate = function (t) {
    var o = this;
    void 0 === t && (t = "update");
    var s = t.type || t;
    b(["update", "resize"], s) && this._callWatches();
    var e = this.$options.update,
        i = this._frames,
        a = i.reads,
        h = i.writes;
    e && e.forEach(function (t, e) {
      var i = t.read,
          n = t.write,
          r = t.events;
      "update" !== s && !b(r, s) || (i && !b(xi.reads, a[e]) && (a[e] = xi.read(function () {
        var t = o._connected && i.call(o, o._data, s);
        !1 === t && n ? xi.clear(h[e]) : T(t) && G(o._data, t);
      })), n && !b(xi.writes, h[e]) && (h[e] = xi.write(function () {
        return o._connected && n.call(o, o._data, s);
      })));
    });
  }, Gi.prototype._callWatches = function () {
    var h = this,
        u = this._frames;

    if (!u.watch) {
      var c = !l(u, "watch");
      u.watch = xi.read(function () {
        if (h._connected) {
          var t = h.$options.computed,
              e = h._computeds;

          for (var i in t) {
            var n = l(e, i),
                r = e[i];
            delete e[i];
            var o = t[i],
                s = o.watch,
                a = o.immediate;
            s && (c && a || n && !Y(r, h[i])) && s.call(h, h[i], r);
          }

          u.watch = null;
        }
      });
    }
  }, Ji = 0, (Ki = qi).prototype._init = function (t) {
    (t = t || {}).data = function (t, e) {
      var i = t.data,
          n = (t.el, e.args),
          r = e.props;
      void 0 === r && (r = {});
      if (i = k(i) ? O(n) ? void 0 : i.slice(0, n.length).reduce(function (t, e, i) {
        return T(e) ? G(t, e) : t[n[i]] = e, t;
      }, {}) : i) for (var o in i) {
        H(i[o]) ? delete i[o] : i[o] = r[o] ? an(r[o], i[o]) : i[o];
      }
      return i;
    }(t, this.constructor.options), this.$options = _i(this.constructor.options, t, this), this.$el = null, this.$props = {}, this._uid = Ji++, this._initData(), this._initMethods(), this._initComputeds(), this._callHook("created"), t.el && this.$mount(t.el);
  }, Ki.prototype._initData = function () {
    var t = this.$options.data;

    for (var e in void 0 === t && (t = {}), t) {
      this.$props[e] = this[e] = t[e];
    }
  }, Ki.prototype._initMethods = function () {
    var t = this.$options.methods;
    if (t) for (var e in t) {
      this[e] = t[e].bind(this);
    }
  }, Ki.prototype._initComputeds = function () {
    var t = this.$options.computed;
    if (this._computeds = {}, t) for (var e in t) {
      rn(this, e, t[e]);
    }
  }, Ki.prototype._initProps = function (t) {
    var e;

    for (e in t = t || nn(this.$options, this.$name)) {
      H(t[e]) || (this.$props[e] = t[e]);
    }

    var i = [this.$options.computed, this.$options.methods];

    for (e in this.$props) {
      e in t && sn(i, e) && (this[e] = this.$props[e]);
    }
  }, Ki.prototype._initEvents = function () {
    var i = this;
    this._events = [];
    var t = this.$options.events;
    t && t.forEach(function (t) {
      if (l(t, "handler")) on(i, t);else for (var e in t) {
        on(i, t[e], e);
      }
    });
  }, Ki.prototype._unbindEvents = function () {
    this._events.forEach(function (t) {
      return t();
    }), delete this._events;
  }, Ki.prototype._initObserver = function () {
    var n = this,
        t = this.$options,
        r = t.attrs,
        e = t.props,
        i = t.el;

    if (!this._observer && e && !1 !== r) {
      r = k(r) ? r : Object.keys(e), this._observer = new MutationObserver(function (t) {
        var i = nn(n.$options, n.$name);
        t.some(function (t) {
          var e = t.attributeName.replace("data-", "");
          return (e === n.$name ? r : [f(e)]).some(function (t) {
            return !H(i[t]) && i[t] !== n.$props[t];
          });
        }) && n.$reset();
      });
      var o = r.map(function (t) {
        return d(t);
      }).concat(this.$name);

      this._observer.observe(i, {
        attributes: !0,
        attributeFilter: o.concat(o.map(function (t) {
          return "data-" + t;
        }))
      });
    }
  }, Qi = (Zi = qi).data, tn = {}, Zi.component = function (s, t) {
    var e = d(s);
    if (s = f(e), !t) return T(tn[s]) && (tn[s] = Zi.extend(tn[s])), tn[s];

    Zi[s] = function (t, i) {
      for (var e = arguments.length, n = Array(e); e--;) {
        n[e] = arguments[e];
      }

      var r = Zi.component(s);
      return r.options.functional ? new r({
        data: T(t) ? t : [].concat(n)
      }) : t ? Me(t).map(o)[0] : o(t);

      function o(t) {
        var e = Zi.getComponent(t, s);

        if (e) {
          if (!i) return e;
          e.$destroy();
        }

        return new r({
          el: t,
          data: i
        });
      }
    };

    var i = T(t) ? G({}, t) : t.options;
    return i.name = s, i.install && i.install(Zi, i, s), Zi._initialized && !i.functional && xi.read(function () {
      return Zi[s]("[uk-" + e + "],[data-uk-" + e + "]");
    }), tn[s] = T(t) ? i : t;
  }, Zi.getComponents = function (t) {
    return t && t[Qi] || {};
  }, Zi.getComponent = function (t, e) {
    return Zi.getComponents(t)[e];
  }, Zi.connect = function (t) {
    if (t[Qi]) for (var e in t[Qi]) {
      t[Qi][e]._callConnected();
    }

    for (var i = 0; i < t.attributes.length; i++) {
      var n = Ri(t.attributes[i].name);
      n && n in tn && Zi[n](t);
    }
  }, Zi.disconnect = function (t) {
    for (var e in t[Qi]) {
      t[Qi][e]._callDisconnected();
    }
  }, function (n) {
    var r = n.data;
    n.prototype.$create = function (t, e, i) {
      return n[t](e, i);
    }, n.prototype.$mount = function (t) {
      var e = this.$options.name;
      t[r] || (t[r] = {}), t[r][e] || ((t[r][e] = this).$el = this.$options.el = this.$options.el || t, Rt(t, document) && this._callConnected());
    }, n.prototype.$reset = function () {
      this._callDisconnected(), this._callConnected();
    }, n.prototype.$destroy = function (t) {
      void 0 === t && (t = !1);
      var e = this.$options,
          i = e.el,
          n = e.name;
      i && this._callDisconnected(), this._callHook("destroy"), i && i[r] && (delete i[r][n], O(i[r]) || delete i[r], t && ke(this.$el));
    }, n.prototype.$emit = function (t) {
      this._callUpdate(t);
    }, n.prototype.$update = function (t, e) {
      void 0 === t && (t = this.$el), n.update(t, e);
    }, n.prototype.$getComponent = n.getComponent;
    var e = {};
    Object.defineProperties(n.prototype, {
      $container: Object.getOwnPropertyDescriptor(n, "container"),
      $name: {
        get: function get() {
          var t = this.$options.name;
          return e[t] || (e[t] = n.prefix + d(t)), e[t];
        }
      }
    });
  }(qi);
  var hn = {
    connected: function connected() {
      Oe(this.$el, this.$name) || ze(this.$el, this.$name);
    }
  },
      un = {
    props: {
      cls: Boolean,
      animation: "list",
      duration: Number,
      origin: String,
      transition: String,
      queued: Boolean
    },
    data: {
      cls: !1,
      animation: [!1],
      duration: 200,
      origin: !1,
      transition: "linear",
      queued: !1,
      initProps: {
        overflow: "",
        height: "",
        paddingTop: "",
        paddingBottom: "",
        marginTop: "",
        marginBottom: ""
      },
      hideProps: {
        overflow: "hidden",
        height: 0,
        paddingTop: 0,
        paddingBottom: 0,
        marginTop: 0,
        marginBottom: 0
      }
    },
    computed: {
      hasAnimation: function hasAnimation(t) {
        return !!t.animation[0];
      },
      hasTransition: function hasTransition(t) {
        var e = t.animation;
        return this.hasAnimation && !0 === e[0];
      }
    },
    methods: {
      toggleElement: function toggleElement(u, c, l) {
        var d = this;
        return new se(function (t) {
          u = V(u);

          function e(t) {
            return se.all(t.map(function (t) {
              return d._toggleElement(t, c, l);
            }));
          }

          var i;
          if (!d.queued || !H(c) || !d.hasAnimation || u.length < 2) i = e(u);else {
            var n = u.filter(function (t) {
              return d.isToggled(t);
            }),
                r = u.filter(function (t) {
              return !b(n, t);
            }),
                o = document.body,
                s = o.scrollTop,
                a = n[0],
                h = ni.inProgress(a) && Oe(a, "uk-animation-leave") || Ze.inProgress(a) && "0px" === a.style.height;
            i = e(n), h || (i = i.then(function () {
              var t = e(r);
              return o.scrollTop = s, t;
            }));
          }
          i.then(t, et);
        });
      },
      isToggled: function isToggled(t) {
        var e = V(t || this.$el);
        return this.cls ? Oe(e, this.cls.split(" ")[0]) : !st(e, "hidden");
      },
      updateAria: function updateAria(t) {
        !1 === this.cls && ot(t, "aria-hidden", !this.isToggled(t));
      },
      _toggleElement: function _toggleElement(t, e, i) {
        var n = this;
        if (e = z(e) ? e : ni.inProgress(t) ? Oe(t, "uk-animation-leave") : Ze.inProgress(t) ? "0px" === t.style.height : !this.isToggled(t), !Kt(t, "before" + (e ? "show" : "hide"), [this])) return se.reject();
        var o,
            r = ($(i) ? i : !1 !== i && this.hasAnimation ? this.hasTransition ? cn(this) : (o = this, function (t, e) {
          ni.cancel(t);
          var i = o.animation,
              n = o.duration,
              r = o._toggle;
          return e ? (r(t, !0), ni["in"](t, i[0], n, o.origin)) : ni.out(t, i[1] || i[0], n, o.origin).then(function () {
            return r(t, !1);
          });
        }) : this._toggle)(t, e);
        Kt(t, e ? "show" : "hide", [this]);

        function s() {
          Kt(t, e ? "shown" : "hidden", [n]), n.$update(t);
        }

        return r ? r.then(s) : se.resolve(s());
      },
      _toggle: function _toggle(t, e) {
        var i;
        t && (e = Boolean(e), this.cls ? (i = b(this.cls, " ") || e !== Oe(t, this.cls)) && He(t, this.cls, b(this.cls, " ") ? void 0 : e) : (i = e === st(t, "hidden")) && ot(t, "hidden", e ? null : ""), Me("[autofocus]", t).some(function (t) {
          return Ft(t) ? t.focus() || !0 : t.blur();
        }), this.updateAria(t), i && (Kt(t, "toggled", [this]), this.$update(t)));
      }
    }
  };

  function cn(t) {
    var s = t.isToggled,
        a = t.duration,
        h = t.initProps,
        u = t.hideProps,
        c = t.transition,
        l = t._toggle;
    return function (t, e) {
      var i = Ze.inProgress(t),
          n = t.hasChildNodes ? j(Ve(t.firstElementChild, "marginTop")) + j(Ve(t.lastElementChild, "marginBottom")) : 0,
          r = Ft(t) ? ci(t) + (i ? 0 : n) : 0;
      Ze.cancel(t), s(t) || l(t, !0), ci(t, ""), xi.flush();
      var o = ci(t) + (i ? 0 : n);
      return ci(t, r), (e ? Ze.start(t, G({}, h, {
        overflow: "hidden",
        height: o
      }), Math.round(a * (1 - r / o)), c) : Ze.start(t, u, Math.round(a * (r / o)), c).then(function () {
        return l(t, !1);
      })).then(function () {
        return Ve(t, h);
      });
    };
  }

  var ln = {
    mixins: [hn, un],
    props: {
      targets: String,
      active: null,
      collapsible: Boolean,
      multiple: Boolean,
      toggle: String,
      content: String,
      transition: String,
      offset: Number
    },
    data: {
      targets: "> *",
      active: !1,
      animation: [!0],
      collapsible: !0,
      multiple: !1,
      clsOpen: "uk-open",
      toggle: "> .uk-accordion-title",
      content: "> .uk-accordion-content",
      transition: "ease",
      offset: 0
    },
    computed: {
      items: {
        get: function get(t, e) {
          return Me(t.targets, e);
        },
        watch: function watch(t, e) {
          var i = this;

          if (t.forEach(function (t) {
            return dn(_e(i.content, t), !Oe(t, i.clsOpen));
          }), !e && !Oe(t, this.clsOpen)) {
            var n = !1 !== this.active && t[Number(this.active)] || !this.collapsible && t[0];
            n && this.toggle(n, !1);
          }
        },
        immediate: !0
      }
    },
    events: [{
      name: "click",
      delegate: function delegate() {
        return this.targets + " " + this.$props.toggle;
      },
      handler: function handler(t) {
        t.preventDefault(), this.toggle(pe(Me(this.targets + " " + this.$props.toggle, this.$el), t.current));
      }
    }],
    methods: {
      toggle: function toggle(t, r) {
        var o = this,
            e = [this.items[me(t, this.items)]],
            i = Vt(this.items, "." + this.clsOpen);
        this.multiple || b(i, e[0]) || (e = e.concat(i)), (this.collapsible || Vt(e, ":not(." + this.clsOpen + ")").length) && e.forEach(function (t) {
          return o.toggleElement(t, !Oe(t, o.clsOpen), function (e, i) {
            He(e, o.clsOpen, i);

            var n = _e((e._wrapper ? "> * " : "") + o.content, e);

            if (!1 !== r && o.hasTransition) return e._wrapper || (e._wrapper = $e(n, "<div" + (i ? " hidden" : "") + ">")), dn(n, !1), cn(o)(e._wrapper, i).then(function () {
              if (dn(n, !i), delete e._wrapper, Se(n), i) {
                var t = _e(o.$props.toggle, e);

                Bi(t) || Oi(t, {
                  offset: o.offset
                });
              }
            });
            dn(n, !i);
          });
        });
      }
    }
  };

  function dn(t, e) {
    ot(t, "hidden", e ? "" : null);
  }

  var fn = {
    mixins: [hn, un],
    args: "animation",
    props: {
      close: String
    },
    data: {
      animation: [!0],
      selClose: ".uk-alert-close",
      duration: 150,
      hideProps: G({
        opacity: 0
      }, un.data.hideProps)
    },
    events: [{
      name: "click",
      delegate: function delegate() {
        return this.selClose;
      },
      handler: function handler(t) {
        t.preventDefault(), this.close();
      }
    }],
    methods: {
      close: function close() {
        var t = this;
        this.toggleElement(this.$el).then(function () {
          return t.$destroy(!0);
        });
      }
    }
  },
      pn = {
    args: "autoplay",
    props: {
      automute: Boolean,
      autoplay: Boolean
    },
    data: {
      automute: !1,
      autoplay: !0
    },
    computed: {
      inView: function inView(t) {
        return "inview" === t.autoplay;
      }
    },
    connected: function connected() {
      this.inView && !st(this.$el, "preload") && (this.$el.preload = "none"), this.player = new Ni(this.$el), this.automute && this.player.mute();
    },
    update: {
      read: function read() {
        return !!this.player && {
          visible: Ft(this.$el) && "hidden" !== Ve(this.$el, "visibility"),
          inView: this.inView && Bi(this.$el)
        };
      },
      write: function write(t) {
        var e = t.visible,
            i = t.inView;
        !e || this.inView && !i ? this.player.pause() : (!0 === this.autoplay || this.inView && i) && this.player.play();
      },
      events: ["resize", "scroll"]
    }
  },
      mn = {
    mixins: [hn, pn],
    props: {
      width: Number,
      height: Number
    },
    data: {
      automute: !0
    },
    update: {
      read: function read() {
        var t = this.$el,
            e = function (t) {
          for (; t = Bt(t);) {
            if ("static" !== Ve(t, "position")) return t;
          }
        }(t) || t.parentNode,
            i = e.offsetHeight,
            n = e.offsetWidth,
            r = rt.cover({
          width: this.width || t.naturalWidth || t.videoWidth || t.clientWidth,
          height: this.height || t.naturalHeight || t.videoHeight || t.clientHeight
        }, {
          width: n + (n % 2 ? 1 : 0),
          height: i + (i % 2 ? 1 : 0)
        });

        return !(!r.width || !r.height) && r;
      },
      write: function write(t) {
        var e = t.height,
            i = t.width;
        Ve(this.$el, {
          height: e,
          width: i
        });
      },
      events: ["resize"]
    }
  };
  var gn,
      vn = {
    props: {
      pos: String,
      offset: null,
      flip: Boolean,
      clsPos: String
    },
    data: {
      pos: "bottom-" + (ct ? "right" : "left"),
      flip: !0,
      offset: !1,
      clsPos: ""
    },
    computed: {
      pos: function pos(t) {
        var e = t.pos;
        return (e + (b(e, "-") ? "" : "-center")).split("-");
      },
      dir: function dir() {
        return this.pos[0];
      },
      align: function align() {
        return this.pos[1];
      }
    },
    methods: {
      positionAt: function positionAt(t, e, i) {
        var n;
        Be(t, this.clsPos + "-(top|bottom|left|right)(-[a-z]+)?"), Ve(t, {
          top: "",
          left: ""
        });
        var r = this.offset,
            o = this.getAxis();
        P(r) || (r = (n = _e(r)) ? si(n)["x" === o ? "left" : "top"] - si(e)["x" === o ? "right" : "bottom"] : 0);
        var s = oi(t, e, "x" === o ? vi(this.dir) + " " + this.align : this.align + " " + vi(this.dir), "x" === o ? this.dir + " " + this.align : this.align + " " + this.dir, "x" === o ? "" + ("left" === this.dir ? -r : r) : " " + ("top" === this.dir ? -r : r), null, this.flip, i).target,
            a = s.x,
            h = s.y;
        this.dir = "x" === o ? a : h, this.align = "x" === o ? h : a, He(t, this.clsPos + "-" + this.dir + "-" + this.align, !1 === this.offset);
      },
      getAxis: function getAxis() {
        return "top" === this.dir || "bottom" === this.dir ? "y" : "x";
      }
    }
  },
      wn = {
    mixins: [vn, un],
    args: "pos",
    props: {
      mode: "list",
      toggle: Boolean,
      boundary: Boolean,
      boundaryAlign: Boolean,
      delayShow: Number,
      delayHide: Number,
      clsDrop: String
    },
    data: {
      mode: ["click", "hover"],
      toggle: "- *",
      boundary: window,
      boundaryAlign: !1,
      delayShow: 0,
      delayHide: 800,
      clsDrop: !1,
      animation: ["uk-animation-fade"],
      cls: "uk-open"
    },
    computed: {
      boundary: function boundary(t, e) {
        return xt(t.boundary, e);
      },
      clsDrop: function clsDrop(t) {
        return t.clsDrop || "uk-" + this.$options.name;
      },
      clsPos: function clsPos() {
        return this.clsDrop;
      }
    },
    created: function created() {
      this.tracker = new Ti();
    },
    connected: function connected() {
      ze(this.$el, this.clsDrop);
      var t = this.$props.toggle;
      this.toggle = t && this.$create("toggle", xt(t, this.$el), {
        target: this.$el,
        mode: this.mode
      }), this.toggle || Kt(this.$el, "updatearia");
    },
    disconnected: function disconnected() {
      this.isActive() && (gn = null);
    },
    events: [{
      name: "click",
      delegate: function delegate() {
        return "." + this.clsDrop + "-close";
      },
      handler: function handler(t) {
        t.preventDefault(), this.hide(!1);
      }
    }, {
      name: "click",
      delegate: function delegate() {
        return 'a[href^="#"]';
      },
      handler: function handler(t) {
        var e = t.defaultPrevented,
            i = t.current.hash;
        e || !i || Rt(i, this.$el) || this.hide(!1);
      }
    }, {
      name: "beforescroll",
      handler: function handler() {
        this.hide(!1);
      }
    }, {
      name: "toggle",
      self: !0,
      handler: function handler(t, e) {
        t.preventDefault(), this.isToggled() ? this.hide(!1) : this.show(e, !1);
      }
    }, {
      name: "toggleshow",
      self: !0,
      handler: function handler(t, e) {
        t.preventDefault(), this.show(e);
      }
    }, {
      name: "togglehide",
      self: !0,
      handler: function handler(t) {
        t.preventDefault(), this.hide();
      }
    }, {
      name: vt,
      filter: function filter() {
        return b(this.mode, "hover");
      },
      handler: function handler(t) {
        ne(t) || this.clearTimers();
      }
    }, {
      name: wt,
      filter: function filter() {
        return b(this.mode, "hover");
      },
      handler: function handler(t) {
        ne(t) || this.hide();
      }
    }, {
      name: "toggled",
      self: !0,
      handler: function handler() {
        this.isToggled() && (this.clearTimers(), ni.cancel(this.$el), this.position());
      }
    }, {
      name: "show",
      self: !0,
      handler: function handler() {
        var o = this;
        (gn = this).tracker.init(), Kt(this.$el, "updatearia"), Gt(this.$el, "hide", Yt(document, pt, function (t) {
          var r = t.target;
          return !Rt(r, o.$el) && Gt(document, gt + " " + bt + " scroll", function (t) {
            var e = t.defaultPrevented,
                i = t.type,
                n = t.target;
            e || i !== gt || r !== n || o.toggle && Rt(r, o.toggle.$el) || o.hide(!1);
          }, !0);
        }), {
          self: !0
        }), Gt(this.$el, "hide", Yt(document, "keydown", function (t) {
          27 === t.keyCode && (t.preventDefault(), o.hide(!1));
        }), {
          self: !0
        });
      }
    }, {
      name: "beforehide",
      self: !0,
      handler: function handler() {
        this.clearTimers();
      }
    }, {
      name: "hide",
      handler: function handler(t) {
        var e = t.target;
        this.$el === e ? (gn = this.isActive() ? null : gn, Kt(this.$el, "updatearia"), this.tracker.cancel()) : gn = null === gn && Rt(e, this.$el) && this.isToggled() ? this : gn;
      }
    }, {
      name: "updatearia",
      self: !0,
      handler: function handler(t, e) {
        t.preventDefault(), this.updateAria(this.$el), (e || this.toggle) && (ot((e || this.toggle).$el, "aria-expanded", this.isToggled()), He(this.toggle.$el, this.cls, this.isToggled()));
      }
    }],
    update: {
      write: function write() {
        this.isToggled() && !ni.inProgress(this.$el) && this.position();
      },
      events: ["resize"]
    },
    methods: {
      show: function show(t, e) {
        var i = this;

        if (void 0 === t && (t = this.toggle), void 0 === e && (e = !0), this.isToggled() && t && this.toggle && t.$el !== this.toggle.$el && this.hide(!1), this.toggle = t, this.clearTimers(), !this.isActive()) {
          if (gn) {
            if (e && gn.isDelaying) return void (this.showTimer = setTimeout(this.show, 10));

            for (; gn && !Rt(this.$el, gn.$el);) {
              gn.hide(!1);
            }
          }

          this.showTimer = setTimeout(function () {
            return !i.isToggled() && i.toggleElement(i.$el, !0);
          }, e && this.delayShow || 0);
        }
      },
      hide: function hide(t) {
        var e = this;
        void 0 === t && (t = !0);

        function i() {
          return e.toggleElement(e.$el, !1, !1);
        }

        var n, r;
        this.clearTimers(), this.isDelaying = (n = this.$el, r = [], Ce(n, function (t) {
          return "static" !== Ve(t, "position") && r.push(t);
        }), r.some(function (t) {
          return e.tracker.movesTo(t);
        })), t && this.isDelaying ? this.hideTimer = setTimeout(this.hide, 50) : t && this.delayHide ? this.hideTimer = setTimeout(i, this.delayHide) : i();
      },
      clearTimers: function clearTimers() {
        clearTimeout(this.showTimer), clearTimeout(this.hideTimer), this.showTimer = null, this.hideTimer = null, this.isDelaying = !1;
      },
      isActive: function isActive() {
        return gn === this;
      },
      position: function position() {
        Be(this.$el, this.clsDrop + "-(stack|boundary)"), He(this.$el, this.clsDrop + "-boundary", this.boundaryAlign);
        var t = si(this.boundary),
            e = this.boundaryAlign ? t : si(this.toggle.$el);

        if ("justify" === this.align) {
          var i = "y" === this.getAxis() ? "width" : "height";
          Ve(this.$el, i, e[i]);
        } else this.$el.offsetWidth > Math.max(t.right - e.left, e.right - t.left) && ze(this.$el, this.clsDrop + "-stack");

        this.positionAt(this.$el, this.boundaryAlign ? this.boundary : this.toggle.$el, this.boundary);
      }
    }
  };
  var bn = {
    mixins: [hn],
    args: "target",
    props: {
      target: Boolean
    },
    data: {
      target: !1
    },
    computed: {
      input: function input(t, e) {
        return _e(jt, e);
      },
      state: function state() {
        return this.input.nextElementSibling;
      },
      target: function target(t, e) {
        var i = t.target;
        return i && (!0 === i && this.input.parentNode === e && this.input.nextElementSibling || xt(i, e));
      }
    },
    update: function update() {
      var t = this.target,
          e = this.input;

      if (t) {
        var i,
            n = Wt(t) ? "value" : "textContent",
            r = t[n],
            o = e.files && e.files[0] ? e.files[0].name : Nt(e, "select") && (i = Me("option", e).filter(function (t) {
          return t.selected;
        })[0]) ? i.textContent : e.value;
        r !== o && (t[n] = o);
      }
    },
    events: [{
      name: "change",
      handler: function handler() {
        this.$update();
      }
    }, {
      name: "reset",
      el: function el() {
        return Dt(this.$el, "form");
      },
      handler: function handler() {
        this.$update();
      }
    }]
  },
      xn = {
    update: {
      read: function read(t) {
        var e = Bi(this.$el);
        if (!e || t.isInView === e) return !1;
        t.isInView = e;
      },
      write: function write() {
        this.$el.src = this.$el.src;
      },
      events: ["scroll", "resize"]
    }
  },
      yn = {
    props: {
      margin: String,
      firstColumn: Boolean
    },
    data: {
      margin: "uk-margin-small-top",
      firstColumn: "uk-first-column"
    },
    update: {
      read: function read() {
        return {
          columns: (t = this.$el.children, e = $n(t, "left", "right"), ct ? e.reverse() : e),
          rows: kn(this.$el.children)
        };
        var t, e;
      },
      write: function write(t) {
        var i = this,
            n = t.columns;
        t.rows.forEach(function (t, e) {
          return t.forEach(function (t) {
            He(t, i.margin, 0 !== e), He(t, i.firstColumn, b(n[0], t));
          });
        });
      },
      events: ["resize"]
    }
  };

  function kn(t) {
    return $n(t, "top", "bottom");
  }

  function $n(t, e, i) {
    for (var n = [[]], r = 0; r < t.length; r++) {
      var o = t[r];
      if (Ft(o)) for (var s = In(o), a = n.length - 1; 0 <= a; a--) {
        var h = n[a];

        if (!h[0]) {
          h.push(o);
          break;
        }

        var u = void 0;

        if (u = h[0].offsetParent === o.offsetParent ? In(h[0]) : (s = In(o, !0), In(h[0], !0)), s[e] >= u[i] - 1 && s[e] !== u[e]) {
          n.push([o]);
          break;
        }

        if (s[i] > u[e] || s[e] === u[e]) {
          h.push(o);
          break;
        }

        if (0 === a) {
          n.unshift([o]);
          break;
        }
      }
    }

    return n;
  }

  function In(t, e) {
    var i;
    void 0 === e && (e = !1);
    var n = t.offsetTop,
        r = t.offsetLeft,
        o = t.offsetHeight,
        s = t.offsetWidth;
    return e && (n = (i = ui(t))[0], r = i[1]), {
      top: n,
      left: r,
      bottom: n + o,
      right: r + s
    };
  }

  var Sn = {
    "extends": yn,
    mixins: [hn],
    name: "grid",
    props: {
      masonry: Boolean,
      parallax: Number
    },
    data: {
      margin: "uk-grid-margin",
      clsStack: "uk-grid-stack",
      masonry: !1,
      parallax: 0
    },
    connected: function connected() {
      this.masonry && ze(this.$el, "uk-flex-top uk-flex-wrap-top");
    },
    update: [{
      write: function write(t) {
        var e = t.columns;
        He(this.$el, this.clsStack, e.length < 2);
      },
      events: ["resize"]
    }, {
      read: function read(t) {
        var e = t.columns,
            i = t.rows,
            n = Ut(this.$el);
        if (!n.length || !this.masonry && !this.parallax) return !1;
        var r,
            o,
            s,
            a,
            h,
            u,
            c = n.some(Ze.inProgress),
            l = !1,
            d = "",
            f = Math.abs(this.parallax);

        if (this.masonry) {
          e = e.map(function (t) {
            return Z(t, "offsetTop");
          });
          var p = e.map(function (t) {
            return t.reduce(function (t, e) {
              return t + e.offsetHeight;
            }, 0);
          }),
              m = (a = n, h = this.margin, j((u = a.filter(function (t) {
            return Oe(t, h);
          })[0]) ? Ve(u, "marginTop") : Ve(a[0], "paddingLeft")) * (i.length - 1));
          r = e, o = [], s = i.map(function (t) {
            return Math.max.apply(Math, t.map(function (t) {
              return t.offsetHeight;
            }));
          }), r.forEach(function (t, i) {
            return t.forEach(function (t, e) {
              0 === e ? o[i] = [0] : o[i][e] = s[e - 1] - r[i][e - 1].offsetHeight + o[i].reduce(function (t, e) {
                return t + e;
              }, 0);
            });
          }), l = o, d = Math.max.apply(Math, p) + m, f = f && p.reduce(function (t, e, i) {
            return Math.max(t, e + m + (i % 2 ? f : f / 8) - d);
          }, 0);
        }

        return {
          padding: f,
          columns: e,
          translates: l,
          height: !c && d
        };
      },
      write: function write(t) {
        var e = t.height,
            i = t.padding;
        Ve(this.$el, "paddingBottom", i), !1 !== e && Ve(this.$el, "height", e);
      },
      events: ["resize"]
    }, {
      read: function read(t) {
        var e = t.height;
        return {
          scrolled: !!this.parallax && Hi(this.$el, e ? e - ci(this.$el) : 0) * Math.abs(this.parallax)
        };
      },
      write: function write(t) {
        var e = t.columns,
            n = t.scrolled,
            r = t.translates;
        !1 === n && !r || e.forEach(function (t, i) {
          return t.forEach(function (t, e) {
            return Ve(t, "transform", n || r ? "translateY(" + ((r && -r[i][e]) + (n ? i % 2 ? n : n / 8 : 0)) + "px)" : "");
          });
        });
      },
      events: ["scroll", "resize"]
    }]
  };
  var Tn = ut ? {
    props: {
      selMinHeight: String
    },
    data: {
      selMinHeight: !1,
      forceHeight: !1
    },
    computed: {
      elements: function elements(t, e) {
        var i = t.selMinHeight;
        return i ? Me(i, e) : [e];
      }
    },
    update: [{
      read: function read() {
        Ve(this.elements, "height", "");
      },
      order: -5,
      events: ["resize"]
    }, {
      write: function write() {
        var i = this;
        this.elements.forEach(function (t) {
          var e = j(Ve(t, "minHeight"));
          e && (i.forceHeight || Math.round(e + fi(t, "height", "content-box")) >= t.offsetHeight) && Ve(t, "height", e);
        });
      },
      order: 5,
      events: ["resize"]
    }]
  } : {},
      En = {
    mixins: [Tn],
    args: "target",
    props: {
      target: String,
      row: Boolean
    },
    data: {
      target: "> *",
      row: !0,
      forceHeight: !0
    },
    computed: {
      elements: function elements(t, e) {
        return Me(t.target, e);
      }
    },
    update: {
      read: function read() {
        return {
          rows: (this.row ? kn(this.elements) : [this.elements]).map(An)
        };
      },
      write: function write(t) {
        t.rows.forEach(function (t) {
          var i = t.heights;
          return t.elements.forEach(function (t, e) {
            return Ve(t, "minHeight", i[e]);
          });
        });
      },
      events: ["resize"]
    }
  };

  function An(t) {
    var e;
    if (t.length < 2) return {
      heights: [""],
      elements: t
    };
    var i = Cn(t),
        n = i.heights,
        r = i.max,
        o = t.some(function (t) {
      return t.style.minHeight;
    }),
        s = t.some(function (t, e) {
      return !t.style.minHeight && n[e] < r;
    });
    return o && s && (Ve(t, "minHeight", ""), e = Cn(t), n = e.heights, r = e.max), {
      heights: n = t.map(function (t, e) {
        return n[e] === r && j(t.style.minHeight).toFixed(2) !== r.toFixed(2) ? "" : r;
      }),
      elements: t
    };
  }

  function Cn(t) {
    var e = t.map(function (t) {
      return si(t).height - fi(t, "height", "content-box");
    });
    return {
      heights: e,
      max: Math.max.apply(null, e)
    };
  }

  var _n = {
    mixins: [Tn],
    props: {
      expand: Boolean,
      offsetTop: Boolean,
      offsetBottom: Boolean,
      minHeight: Number
    },
    data: {
      expand: !1,
      offsetTop: !1,
      offsetBottom: !1,
      minHeight: 0
    },
    update: {
      read: function read(t) {
        var e = t.minHeight;
        if (!Ft(this.$el)) return !1;
        var i = "",
            n = fi(this.$el, "height", "content-box");

        if (this.expand) {
          if (this.$el.dataset.heightExpand = "", _e("[data-height-expand]") !== this.$el) return !1;
          i = ci(window) - (Mn(document.documentElement) - Mn(this.$el)) - n || "";
        } else {
          if (i = "calc(100vh", this.offsetTop) {
            var r = si(this.$el).top;
            i += 0 < r && r < ci(window) / 2 ? " - " + r + "px" : "";
          }

          !0 === this.offsetBottom ? i += " - " + Mn(this.$el.nextElementSibling) + "px" : P(this.offsetBottom) ? i += " - " + this.offsetBottom + "vh" : this.offsetBottom && u(this.offsetBottom, "px") ? i += " - " + j(this.offsetBottom) + "px" : D(this.offsetBottom) && (i += " - " + Mn(xt(this.offsetBottom, this.$el)) + "px"), i += (n ? " - " + n + "px" : "") + ")";
        }

        return {
          minHeight: i,
          prev: e
        };
      },
      write: function write(t) {
        var e = t.minHeight,
            i = t.prev;
        Ve(this.$el, {
          minHeight: e
        }), e !== i && this.$update(this.$el, "resize"), this.minHeight && j(Ve(this.$el, "minHeight")) < this.minHeight && Ve(this.$el, "minHeight", this.minHeight);
      },
      events: ["resize"]
    }
  };

  function Mn(t) {
    return t && si(t).height || 0;
  }

  var Nn = {
    args: "src",
    props: {
      id: Boolean,
      icon: String,
      src: String,
      style: String,
      width: Number,
      height: Number,
      ratio: Number,
      "class": String,
      strokeAnimation: Boolean,
      focusable: Boolean,
      attributes: "list"
    },
    data: {
      ratio: 1,
      include: ["style", "class", "focusable"],
      "class": "",
      strokeAnimation: !1
    },
    beforeConnect: function beforeConnect() {
      this["class"] += " uk-svg";
    },
    connected: function connected() {
      var t,
          e = this;
      !this.icon && b(this.src, "#") && (t = this.src.split("#"), this.src = t[0], this.icon = t[1]), this.svg = this.getSvg().then(function (t) {
        return e.applyAttributes(t), e.svgEl = function (t, e) {
          if (Lt(e) || "CANVAS" === e.tagName) {
            ot(e, "hidden", !0);
            var i = e.nextElementSibling;
            return On(t, i) ? i : xe(e, t);
          }

          var n = e.lastElementChild;
          return On(t, n) ? n : we(e, t);
        }(t, e.$el);
      }, et);
    },
    disconnected: function disconnected() {
      var e = this;
      Lt(this.$el) && ot(this.$el, "hidden", null), this.svg && this.svg.then(function (t) {
        return (!e._connected || t !== e.svgEl) && ke(t);
      }, et), this.svg = this.svgEl = null;
    },
    update: {
      read: function read() {
        return !!(this.strokeAnimation && this.svgEl && Ft(this.svgEl));
      },
      write: function write() {
        var t, e;
        t = this.svgEl, (e = Pn(t)) && t.style.setProperty("--uk-animation-stroke", e);
      },
      type: ["resize"]
    },
    methods: {
      getSvg: function getSvg() {
        var e = this;
        return function (i) {
          if (zn[i]) return zn[i];
          return zn[i] = new se(function (e, t) {
            i ? w(i, "data:") ? e(decodeURIComponent(i.split(",")[1])) : le(i).then(function (t) {
              return e(t.response);
            }, function () {
              return t("SVG not found.");
            }) : t();
          });
        }(this.src).then(function (t) {
          return function (t, e) {
            e && b(t, "<symbol") && (t = function (t, e) {
              if (!Bn[t]) {
                var i;

                for (Bn[t] = {}, Dn.lastIndex = 0; i = Dn.exec(t);) {
                  Bn[t][i[3]] = '<svg xmlns="http://www.w3.org/2000/svg"' + i[1] + "svg>";
                }
              }

              return Bn[t][e];
            }(t, e) || t);
            return (t = _e(t.substr(t.indexOf("<svg")))) && t.hasChildNodes() && t;
          }(t, e.icon) || se.reject("SVG not found.");
        });
      },
      applyAttributes: function applyAttributes(i) {
        var n = this;

        for (var t in this.$options.props) {
          this[t] && b(this.include, t) && ot(i, t, this[t]);
        }

        for (var e in this.attributes) {
          var r = this.attributes[e].split(":", 2),
              o = r[0],
              s = r[1];
          ot(i, o, s);
        }

        this.id || at(i, "id");
        var a = ["width", "height"],
            h = [this.width, this.height];
        h.some(function (t) {
          return t;
        }) || (h = a.map(function (t) {
          return ot(i, t);
        }));
        var u = ot(i, "viewBox");
        u && !h.some(function (t) {
          return t;
        }) && (h = u.split(" ").slice(2)), h.forEach(function (t, e) {
          (t = (0 | t) * n.ratio) && ot(i, a[e], t), t && !h[1 ^ e] && at(i, a[1 ^ e]);
        }), ot(i, "data-svg", this.icon || this.src);
      }
    }
  },
      zn = {};
  var Dn = /<symbol([^]*?id=(['"])(.+?)\2[^]*?<\/)symbol>/g,
      Bn = {};

  function Pn(t) {
    return Math.ceil(Math.max.apply(Math, [0].concat(Me("[stroke]", t).map(function (t) {
      try {
        return t.getTotalLength();
      } catch (t) {
        return 0;
      }
    }))));
  }

  function On(t, e) {
    return ot(t, "data-svg") === ot(e, "data-svg");
  }

  var Hn = {
    spinner: '<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"/></svg>',
    totop: '<svg width="18" height="10" viewBox="0 0 18 10" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 9 9 1 17 9 "/></svg>',
    marker: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="4" width="1" height="11"/><rect x="4" y="9" width="11" height="1"/></svg>',
    "close-icon": '<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"/></svg>',
    "close-large": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"/><line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"/></svg>',
    "navbar-toggle-icon": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect y="9" width="20" height="2"/><rect y="3" width="20" height="2"/><rect y="15" width="20" height="2"/></svg>',
    "overlay-icon": '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><rect x="19" y="0" width="1" height="40"/><rect x="0" y="19" width="40" height="1"/></svg>',
    "pagination-next": '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"/></svg>',
    "pagination-previous": '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"/></svg>',
    "search-icon": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>',
    "search-large": '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.8" cx="17.5" cy="17.5" r="16.5"/><line fill="none" stroke="#000" stroke-width="1.8" x1="38" y1="39" x2="29" y2="30"/></svg>',
    "search-navbar": '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10.5" cy="10.5" r="9.5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="23" y1="23" x2="17" y2="17"/></svg>',
    "slidenav-next": '<svg width="14px" height="24px" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1 "/></svg>',
    "slidenav-next-large": '<svg width="25px" height="40px" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="4.002,38.547 22.527,20.024 4,1.5 "/></svg>',
    "slidenav-previous": '<svg width="14px" height="24px" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23 "/></svg>',
    "slidenav-previous-large": '<svg width="25px" height="40px" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="20.527,1.5 2,20.024 20.525,38.547 "/></svg>'
  },
      Ln = {
    install: function install(r) {
      r.icon.add = function (t, e) {
        var i,
            n = D(t) ? ((i = {})[t] = e, i) : t;
        J(n, function (t, e) {
          Hn[e] = t, delete qn[e];
        }), r._initialized && Ce(document.body, function (t) {
          return J(r.getComponents(t), function (t) {
            t.$options.isIcon && t.icon in n && t.$reset();
          });
        });
      };
    },
    "extends": Nn,
    args: "icon",
    props: ["icon"],
    data: {
      include: ["focusable"]
    },
    isIcon: !0,
    beforeConnect: function beforeConnect() {
      ze(this.$el, "uk-icon");
    },
    methods: {
      getSvg: function getSvg() {
        var t = function (t) {
          if (!Hn[t]) return null;
          qn[t] || (qn[t] = _e((Hn[function (t) {
            return ct ? X(X(t, "left", "right"), "previous", "next") : t;
          }(t)] || Hn[t]).trim()));
          return qn[t].cloneNode(!0);
        }(this.icon);

        return t ? se.resolve(t) : se.reject("Icon not found.");
      }
    }
  },
      Fn = {
    args: !1,
    "extends": Ln,
    data: function data(t) {
      return {
        icon: d(t.constructor.options.name)
      };
    },
    beforeConnect: function beforeConnect() {
      ze(this.$el, this.$name);
    }
  },
      jn = {
    "extends": Fn,
    beforeConnect: function beforeConnect() {
      ze(this.$el, "uk-slidenav");
    },
    computed: {
      icon: function icon(t, e) {
        var i = t.icon;
        return Oe(e, "uk-slidenav-large") ? i + "-large" : i;
      }
    }
  },
      Wn = {
    "extends": Fn,
    computed: {
      icon: function icon(t, e) {
        var i = t.icon;
        return Oe(e, "uk-search-icon") && qt(e, ".uk-search-large").length ? "search-large" : qt(e, ".uk-search-navbar").length ? "search-navbar" : i;
      }
    }
  },
      Vn = {
    "extends": Fn,
    computed: {
      icon: function icon() {
        return "close-" + (Oe(this.$el, "uk-close-large") ? "large" : "icon");
      }
    }
  },
      Rn = {
    "extends": Fn,
    connected: function connected() {
      var e = this;
      this.svg.then(function (t) {
        return 1 !== e.ratio && Ve(_e("circle", t), "strokeWidth", 1 / e.ratio);
      }, et);
    }
  },
      qn = {};
  var Un = {
    args: "dataSrc",
    props: {
      dataSrc: String,
      dataSrcset: Boolean,
      sizes: String,
      width: Number,
      height: Number,
      offsetTop: String,
      offsetLeft: String,
      target: String
    },
    data: {
      dataSrc: "",
      dataSrcset: !1,
      sizes: !1,
      width: !1,
      height: !1,
      offsetTop: "50vh",
      offsetLeft: 0,
      target: !1
    },
    computed: {
      cacheKey: function cacheKey(t) {
        var e = t.dataSrc;
        return this.$name + "." + e;
      },
      width: function width(t) {
        var e = t.width,
            i = t.dataWidth;
        return e || i;
      },
      height: function height(t) {
        var e = t.height,
            i = t.dataHeight;
        return e || i;
      },
      sizes: function sizes(t) {
        var e = t.sizes,
            i = t.dataSizes;
        return e || i;
      },
      isImg: function isImg(t, e) {
        return Qn(e);
      },
      target: {
        get: function get(t) {
          var e = t.target;
          return [this.$el].concat(yt(e, this.$el));
        },
        watch: function watch() {
          this.observe();
        }
      },
      offsetTop: function offsetTop(t) {
        return wi(t.offsetTop, "height");
      },
      offsetLeft: function offsetLeft(t) {
        return wi(t.offsetLeft, "width");
      }
    },
    connected: function connected() {
      er[this.cacheKey] ? Yn(this.$el, er[this.cacheKey] || this.dataSrc, this.dataSrcset, this.sizes) : this.isImg && this.width && this.height && Yn(this.$el, function (t, e, i) {
        var n;
        i && (n = rt.ratio({
          width: t,
          height: e
        }, "width", wi(Gn(i))), t = n.width, e = n.height);
        return 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="' + t + '" height="' + e + '"></svg>';
      }(this.width, this.height, this.sizes)), this.observer = new Vi(this.load, {
        rootMargin: this.offsetTop + "px " + this.offsetLeft + "px"
      }), requestAnimationFrame(this.observe);
    },
    disconnected: function disconnected() {
      this.observer.disconnect();
    },
    update: {
      read: function read(t) {
        var e = this,
            i = t.image;
        if (i || "complete" !== document.readyState || this.load(this.observer.takeRecords()), this.isImg) return !1;
        i && i.then(function (t) {
          return t && "" !== t.currentSrc && Yn(e.$el, tr(t));
        });
      },
      write: function write(t) {
        if (this.dataSrcset && 1 !== window.devicePixelRatio) {
          var e = Ve(this.$el, "backgroundSize");
          !e.match(/^(auto\s?)+$/) && j(e) !== t.bgSize || (t.bgSize = (i = this.dataSrcset, n = this.sizes, r = wi(Gn(n)), (o = (i.match(Zn) || []).map(j).sort(function (t, e) {
            return t - e;
          })).filter(function (t) {
            return r <= t;
          })[0] || o.pop() || ""), Ve(this.$el, "backgroundSize", t.bgSize + "px"));
        }

        var i, n, r, o;
      },
      events: ["resize"]
    },
    methods: {
      load: function load(t) {
        var e = this;
        t.some(function (t) {
          return H(t.isIntersecting) || t.isIntersecting;
        }) && (this._data.image = de(this.dataSrc, this.dataSrcset, this.sizes).then(function (t) {
          return Yn(e.$el, tr(t), t.srcset, t.sizes), er[e.cacheKey] = tr(t), t;
        }, et), this.observer.disconnect());
      },
      observe: function observe() {
        var e = this;
        this._connected && !this._data.image && this.target.forEach(function (t) {
          return e.observer.observe(t);
        });
      }
    }
  };

  function Yn(t, e, i, n) {
    if (Qn(t)) n && (t.sizes = n), i && (t.srcset = i), e && (t.src = e);else if (e) {
      !b(t.style.backgroundImage, e) && (Ve(t, "backgroundImage", "url(" + Ot(e) + ")"), Kt(t, Jt("load", !1)));
    }
  }

  var Xn = /\s*(.*?)\s*(\w+|calc\(.*?\))\s*(?:,|$)/g;

  function Gn(t) {
    var e, i;

    for (Xn.lastIndex = 0; e = Xn.exec(t);) {
      if (!e[1] || window.matchMedia(e[1]).matches) {
        e = w(i = e[2], "calc") ? i.substring(5, i.length - 1).replace(Kn, function (t) {
          return wi(t);
        }).replace(/ /g, "").match(Jn).reduce(function (t, e) {
          return t + +e;
        }, 0) : i;
        break;
      }
    }

    return e || "100vw";
  }

  var Kn = /\d+(?:\w+|%)/g,
      Jn = /[+-]?(\d+)/g;
  var Zn = /\s+\d+w\s*(?:,|$)/g;

  function Qn(t) {
    return "IMG" === t.tagName;
  }

  function tr(t) {
    return t.currentSrc || t.src;
  }

  var er,
      ir = "__test__";

  try {
    (er = window.sessionStorage || {})[ir] = 1, delete er[ir];
  } catch (t) {
    er = {};
  }

  var nr = {
    props: {
      media: Boolean
    },
    data: {
      media: !1
    },
    computed: {
      matchMedia: function matchMedia() {
        var t = function (t) {
          if (D(t)) {
            if ("@" === t[0]) t = j(Ye("breakpoint-" + t.substr(1)));else if (isNaN(t)) return t;
          }

          return !(!t || isNaN(t)) && "(min-width: " + t + "px)";
        }(this.media);

        return !t || window.matchMedia(t).matches;
      }
    }
  };
  var rr = {
    mixins: [hn, nr],
    props: {
      fill: String
    },
    data: {
      fill: "",
      clsWrapper: "uk-leader-fill",
      clsHide: "uk-leader-hide",
      attrFill: "data-fill"
    },
    computed: {
      fill: function fill(t) {
        return t.fill || Ye("leader-fill-content");
      }
    },
    connected: function connected() {
      var t;
      t = Ie(this.$el, '<span class="' + this.clsWrapper + '">'), this.wrapper = t[0];
    },
    disconnected: function disconnected() {
      Se(this.wrapper.childNodes);
    },
    update: {
      read: function read(t) {
        var e = t.changed,
            i = t.width,
            n = i;
        return {
          width: i = Math.floor(this.$el.offsetWidth / 2),
          fill: this.fill,
          changed: e || n !== i,
          hide: !this.matchMedia
        };
      },
      write: function write(t) {
        He(this.wrapper, this.clsHide, t.hide), t.changed && (t.changed = !1, ot(this.wrapper, this.attrFill, new Array(t.width).join(t.fill)));
      },
      events: ["resize"]
    }
  },
      or = {
    props: {
      container: Boolean
    },
    data: {
      container: !0
    },
    computed: {
      container: function container(t) {
        var e = t.container;
        return !0 === e && this.$container || e && _e(e);
      }
    }
  },
      sr = [],
      ar = {
    mixins: [hn, or, un],
    props: {
      selPanel: String,
      selClose: String,
      escClose: Boolean,
      bgClose: Boolean,
      stack: Boolean
    },
    data: {
      cls: "uk-open",
      escClose: !0,
      bgClose: !0,
      overlay: !0,
      stack: !1
    },
    computed: {
      panel: function panel(t, e) {
        return _e(t.selPanel, e);
      },
      transitionElement: function transitionElement() {
        return this.panel;
      },
      bgClose: function bgClose(t) {
        return t.bgClose && this.panel;
      }
    },
    beforeDisconnect: function beforeDisconnect() {
      this.isToggled() && this.toggleElement(this.$el, !1, !1);
    },
    events: [{
      name: "click",
      delegate: function delegate() {
        return this.selClose;
      },
      handler: function handler(t) {
        t.preventDefault(), this.hide();
      }
    }, {
      name: "toggle",
      self: !0,
      handler: function handler(t) {
        t.defaultPrevented || (t.preventDefault(), this.isToggled() === b(sr, this) && this.toggle());
      }
    }, {
      name: "beforeshow",
      self: !0,
      handler: function handler(t) {
        if (b(sr, this)) return !1;
        !this.stack && sr.length ? (se.all(sr.map(function (t) {
          return t.hide();
        })).then(this.show), t.preventDefault()) : sr.push(this);
      }
    }, {
      name: "show",
      self: !0,
      handler: function handler() {
        var o = this;
        li(window) - li(document) && this.overlay && Ve(document.body, "overflowY", "scroll"), this.stack && Ve(this.$el, "zIndex", Ve(this.$el, "zIndex") + sr.length), ze(document.documentElement, this.clsPage), this.bgClose && Gt(this.$el, "hide", Yt(document, pt, function (t) {
          var r = t.target;
          K(sr) !== o || o.overlay && !Rt(r, o.$el) || Rt(r, o.panel) || Gt(document, gt + " " + bt + " scroll", function (t) {
            var e = t.defaultPrevented,
                i = t.type,
                n = t.target;
            e || i !== gt || r !== n || o.hide();
          }, !0);
        }), {
          self: !0
        }), this.escClose && Gt(this.$el, "hide", Yt(document, "keydown", function (t) {
          27 === t.keyCode && K(sr) === o && (t.preventDefault(), o.hide());
        }), {
          self: !0
        });
      }
    }, {
      name: "hidden",
      self: !0,
      handler: function handler() {
        var e = this;
        sr.splice(sr.indexOf(this), 1), sr.length || Ve(document.body, "overflowY", ""), Ve(this.$el, "zIndex", ""), sr.some(function (t) {
          return t.clsPage === e.clsPage;
        }) || De(document.documentElement, this.clsPage);
      }
    }],
    methods: {
      toggle: function toggle() {
        return this.isToggled() ? this.hide() : this.show();
      },
      show: function show() {
        var e = this;
        return this.container && this.$el.parentNode !== this.container ? (we(this.container, this.$el), new se(function (t) {
          return requestAnimationFrame(function () {
            return e.show().then(t);
          });
        })) : this.toggleElement(this.$el, !0, hr(this));
      },
      hide: function hide() {
        return this.toggleElement(this.$el, !1, hr(this));
      }
    }
  };

  function hr(t) {
    var s = t.transitionElement,
        a = t._toggle;
    return function (r, o) {
      return new se(function (i, n) {
        return Gt(r, "show hide", function () {
          r._reject && r._reject(), r._reject = n, a(r, o);
          var t = Gt(s, "transitionstart", function () {
            Gt(s, "transitionend transitioncancel", i, {
              self: !0
            }), clearTimeout(e);
          }, {
            self: !0
          }),
              e = setTimeout(function () {
            t(), i();
          }, U(Ve(s, "transitionDuration")));
        });
      });
    };
  }

  var ur = {
    install: function install(t) {
      var a = t.modal;

      function e(t, e, i, n) {
        e = G({
          bgClose: !1,
          escClose: !0,
          labels: a.labels
        }, e);
        var r = a.dialog(t(e), e),
            o = new oe(),
            s = !1;
        return Yt(r.$el, "submit", "form", function (t) {
          t.preventDefault(), o.resolve(n && n(r)), s = !0, r.hide();
        }), Yt(r.$el, "hide", function () {
          return !s && i(o);
        }), o.promise.dialog = r, o.promise;
      }

      a.dialog = function (t, e) {
        var i = a('<div class="uk-modal"> <div class="uk-modal-dialog">' + t + "</div> </div>", e);
        return i.show(), Yt(i.$el, "hidden", function () {
          return se.resolve().then(function () {
            return i.$destroy(!0);
          });
        }, {
          self: !0
        }), i;
      }, a.alert = function (i, t) {
        return e(function (t) {
          var e = t.labels;
          return '<div class="uk-modal-body">' + (D(i) ? i : ve(i)) + '</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-primary uk-modal-close" autofocus>' + e.ok + "</button> </div>";
        }, t, function (t) {
          return t.resolve();
        });
      }, a.confirm = function (i, t) {
        return e(function (t) {
          var e = t.labels;
          return '<form> <div class="uk-modal-body">' + (D(i) ? i : ve(i)) + '</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">' + e.cancel + '</button> <button class="uk-button uk-button-primary" autofocus>' + e.ok + "</button> </div> </form>";
        }, t, function (t) {
          return t.reject();
        });
      }, a.prompt = function (i, n, t) {
        return e(function (t) {
          var e = t.labels;
          return '<form class="uk-form-stacked"> <div class="uk-modal-body"> <label>' + (D(i) ? i : ve(i)) + '</label> <input class="uk-input" value="' + (n || "") + '" autofocus> </div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">' + e.cancel + '</button> <button class="uk-button uk-button-primary">' + e.ok + "</button> </div> </form>";
        }, t, function (t) {
          return t.resolve(null);
        }, function (t) {
          return _e("input", t.$el).value;
        });
      }, a.labels = {
        ok: "Ok",
        cancel: "Cancel"
      };
    },
    mixins: [ar],
    data: {
      clsPage: "uk-modal-page",
      selPanel: ".uk-modal-dialog",
      selClose: ".uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full"
    },
    events: [{
      name: "show",
      self: !0,
      handler: function handler() {
        Oe(this.panel, "uk-margin-auto-vertical") ? ze(this.$el, "uk-flex") : Ve(this.$el, "display", "block"), ci(this.$el);
      }
    }, {
      name: "hidden",
      self: !0,
      handler: function handler() {
        Ve(this.$el, "display", ""), De(this.$el, "uk-flex");
      }
    }]
  };
  var cr = {
    "extends": ln,
    data: {
      targets: "> .uk-parent",
      toggle: "> a",
      content: "> ul"
    }
  },
      lr = {
    mixins: [hn, Tn],
    props: {
      dropdown: String,
      mode: "list",
      align: String,
      offset: Number,
      boundary: Boolean,
      boundaryAlign: Boolean,
      clsDrop: String,
      delayShow: Number,
      delayHide: Number,
      dropbar: Boolean,
      dropbarMode: String,
      dropbarAnchor: Boolean,
      duration: Number
    },
    data: {
      dropdown: ".uk-navbar-nav > li",
      align: ct ? "right" : "left",
      clsDrop: "uk-navbar-dropdown",
      mode: void 0,
      offset: void 0,
      delayShow: void 0,
      delayHide: void 0,
      boundaryAlign: void 0,
      flip: "x",
      boundary: !0,
      dropbar: !1,
      dropbarMode: "slide",
      dropbarAnchor: !1,
      duration: 200,
      forceHeight: !0,
      selMinHeight: ".uk-navbar-nav > li > a, .uk-navbar-item, .uk-navbar-toggle"
    },
    computed: {
      boundary: function boundary(t, e) {
        var i = t.boundary,
            n = t.boundaryAlign;
        return !0 === i || n ? e : i;
      },
      dropbarAnchor: function dropbarAnchor(t, e) {
        return xt(t.dropbarAnchor, e);
      },
      pos: function pos(t) {
        return "bottom-" + t.align;
      },
      dropbar: {
        get: function get(t) {
          var e = t.dropbar;
          return e ? (e = this._dropbar || xt(e, this.$el) || _e("+ .uk-navbar-dropbar", this.$el)) || (this._dropbar = _e("<div></div>")) : null;
        },
        watch: function watch(t) {
          ze(t, "uk-navbar-dropbar");
        },
        immediate: !0
      },
      dropdowns: {
        get: function get(t, e) {
          return Me(t.dropdown + " ." + t.clsDrop, e);
        },
        watch: function watch(t) {
          var e = this;
          this.$create("drop", t.filter(function (t) {
            return !e.getDropdown(t);
          }), G({}, this.$props, {
            boundary: this.boundary,
            pos: this.pos,
            offset: this.dropbar || this.offset
          }));
        },
        immediate: !0
      }
    },
    disconnected: function disconnected() {
      this.dropbar && ke(this.dropbar), delete this._dropbar;
    },
    events: [{
      name: "mouseover",
      delegate: function delegate() {
        return this.dropdown;
      },
      handler: function handler(t) {
        var e = t.current,
            i = this.getActive();
        i && i.toggle && !Rt(i.toggle.$el, e) && !i.tracker.movesTo(i.$el) && i.hide(!1);
      }
    }, {
      name: "mouseleave",
      el: function el() {
        return this.dropbar;
      },
      handler: function handler() {
        var t = this.getActive();
        t && !this.dropdowns.some(function (t) {
          return Nt(t, ":hover");
        }) && t.hide();
      }
    }, {
      name: "beforeshow",
      capture: !0,
      filter: function filter() {
        return this.dropbar;
      },
      handler: function handler() {
        this.dropbar.parentNode || xe(this.dropbarAnchor || this.$el, this.dropbar);
      }
    }, {
      name: "show",
      capture: !0,
      filter: function filter() {
        return this.dropbar;
      },
      handler: function handler(t, e) {
        var i = e.$el,
            n = e.dir;
        He(this.dropbar, "uk-navbar-dropbar-slide", "slide" === this.dropbarMode || qt(this.$el).some(function (t) {
          return "static" !== Ve(t, "position");
        })), this.clsDrop && ze(i, this.clsDrop + "-dropbar"), "bottom" === n && this.transitionTo(i.offsetHeight + j(Ve(i, "marginTop")) + j(Ve(i, "marginBottom")), i);
      }
    }, {
      name: "beforehide",
      filter: function filter() {
        return this.dropbar;
      },
      handler: function handler(t, e) {
        var i = e.$el,
            n = this.getActive();
        Nt(this.dropbar, ":hover") && n && n.$el === i && t.preventDefault();
      }
    }, {
      name: "hide",
      filter: function filter() {
        return this.dropbar;
      },
      handler: function handler(t, e) {
        var i = e.$el,
            n = this.getActive();
        (!n || n && n.$el === i) && this.transitionTo(0);
      }
    }],
    methods: {
      getActive: function getActive() {
        var t = this.dropdowns.map(this.getDropdown).filter(function (t) {
          return t && t.isActive();
        })[0];
        return t && b(t.mode, "hover") && Rt(t.toggle.$el, this.$el) && t;
      },
      transitionTo: function transitionTo(t, e) {
        var i = this,
            n = this.dropbar,
            r = Ft(n) ? ci(n) : 0;
        return Ve(e = r < t && e, "clip", "rect(0," + e.offsetWidth + "px," + r + "px,0)"), ci(n, r), Ze.cancel([e, n]), se.all([Ze.start(n, {
          height: t
        }, this.duration), Ze.start(e, {
          clip: "rect(0," + e.offsetWidth + "px," + t + "px,0)"
        }, this.duration)])["catch"](et).then(function () {
          Ve(e, {
            clip: ""
          }), i.$update(n);
        });
      },
      getDropdown: function getDropdown(t) {
        return this.$getComponent(t, "drop") || this.$getComponent(t, "dropdown");
      }
    }
  },
      dr = {
    mixins: [ar],
    args: "mode",
    props: {
      mode: String,
      flip: Boolean,
      overlay: Boolean
    },
    data: {
      mode: "slide",
      flip: !1,
      overlay: !1,
      clsPage: "uk-offcanvas-page",
      clsContainer: "uk-offcanvas-container",
      selPanel: ".uk-offcanvas-bar",
      clsFlip: "uk-offcanvas-flip",
      clsContainerAnimation: "uk-offcanvas-container-animation",
      clsSidebarAnimation: "uk-offcanvas-bar-animation",
      clsMode: "uk-offcanvas",
      clsOverlay: "uk-offcanvas-overlay",
      selClose: ".uk-offcanvas-close",
      container: !1
    },
    computed: {
      clsFlip: function clsFlip(t) {
        var e = t.flip,
            i = t.clsFlip;
        return e ? i : "";
      },
      clsOverlay: function clsOverlay(t) {
        var e = t.overlay,
            i = t.clsOverlay;
        return e ? i : "";
      },
      clsMode: function clsMode(t) {
        var e = t.mode;
        return t.clsMode + "-" + e;
      },
      clsSidebarAnimation: function clsSidebarAnimation(t) {
        var e = t.mode,
            i = t.clsSidebarAnimation;
        return "none" === e || "reveal" === e ? "" : i;
      },
      clsContainerAnimation: function clsContainerAnimation(t) {
        var e = t.mode,
            i = t.clsContainerAnimation;
        return "push" !== e && "reveal" !== e ? "" : i;
      },
      transitionElement: function transitionElement(t) {
        return "reveal" === t.mode ? this.panel.parentNode : this.panel;
      }
    },
    events: [{
      name: "click",
      delegate: function delegate() {
        return 'a[href^="#"]';
      },
      handler: function handler(t) {
        var e = t.current.hash;
        !t.defaultPrevented && e && _e(e, document.body) && this.hide();
      }
    }, {
      name: "touchstart",
      passive: !0,
      el: function el() {
        return this.panel;
      },
      handler: function handler(t) {
        var e = t.targetTouches;
        1 === e.length && (this.clientY = e[0].clientY);
      }
    }, {
      name: "touchmove",
      self: !0,
      passive: !1,
      filter: function filter() {
        return this.overlay;
      },
      handler: function handler(t) {
        t.cancelable && t.preventDefault();
      }
    }, {
      name: "touchmove",
      passive: !1,
      el: function el() {
        return this.panel;
      },
      handler: function handler(t) {
        if (1 === t.targetTouches.length) {
          var e = event.targetTouches[0].clientY - this.clientY,
              i = this.panel,
              n = i.scrollTop,
              r = i.scrollHeight,
              o = i.clientHeight;
          (r <= o || 0 === n && 0 < e || r - n <= o && e < 0) && t.cancelable && t.preventDefault();
        }
      }
    }, {
      name: "show",
      self: !0,
      handler: function handler() {
        "reveal" !== this.mode || Oe(this.panel.parentNode, this.clsMode) || ($e(this.panel, "<div>"), ze(this.panel.parentNode, this.clsMode)), Ve(document.documentElement, "overflowY", this.overlay ? "hidden" : ""), ze(document.body, this.clsContainer, this.clsFlip), Ve(document.body, "touch-action", "pan-y pinch-zoom"), Ve(this.$el, "display", "block"), ze(this.$el, this.clsOverlay), ze(this.panel, this.clsSidebarAnimation, "reveal" !== this.mode ? this.clsMode : ""), ci(document.body), ze(document.body, this.clsContainerAnimation), this.clsContainerAnimation && (fr().content += ",user-scalable=0");
      }
    }, {
      name: "hide",
      self: !0,
      handler: function handler() {
        De(document.body, this.clsContainerAnimation), Ve(document.body, "touch-action", "");
      }
    }, {
      name: "hidden",
      self: !0,
      handler: function handler() {
        var t;
        this.clsContainerAnimation && ((t = fr()).content = t.content.replace(/,user-scalable=0$/, "")), "reveal" === this.mode && Se(this.panel), De(this.panel, this.clsSidebarAnimation, this.clsMode), De(this.$el, this.clsOverlay), Ve(this.$el, "display", ""), De(document.body, this.clsContainer, this.clsFlip), Ve(document.documentElement, "overflowY", "");
      }
    }, {
      name: "swipeLeft swipeRight",
      handler: function handler(t) {
        this.isToggled() && u(t.type, "Left") ^ this.flip && this.hide();
      }
    }]
  };

  function fr() {
    return _e('meta[name="viewport"]', document.head) || we(document.head, '<meta name="viewport">');
  }

  var pr = {
    mixins: [hn],
    props: {
      selContainer: String,
      selContent: String
    },
    data: {
      selContainer: ".uk-modal",
      selContent: ".uk-modal-dialog"
    },
    computed: {
      container: function container(t, e) {
        return Dt(e, t.selContainer);
      },
      content: function content(t, e) {
        return Dt(e, t.selContent);
      }
    },
    connected: function connected() {
      Ve(this.$el, "minHeight", 150);
    },
    update: {
      read: function read() {
        return !(!this.content || !this.container) && {
          current: j(Ve(this.$el, "maxHeight")),
          max: Math.max(150, ci(this.container) - (si(this.content).height - ci(this.$el)))
        };
      },
      write: function write(t) {
        var e = t.current,
            i = t.max;
        Ve(this.$el, "maxHeight", i), Math.round(e) !== Math.round(i) && Kt(this.$el, "resize");
      },
      events: ["resize"]
    }
  },
      mr = {
    props: ["width", "height"],
    connected: function connected() {
      ze(this.$el, "uk-responsive-width");
    },
    update: {
      read: function read() {
        return !!(Ft(this.$el) && this.width && this.height) && {
          width: li(this.$el.parentNode),
          height: this.height
        };
      },
      write: function write(t) {
        ci(this.$el, rt.contain({
          height: this.height,
          width: this.width
        }, t).height);
      },
      events: ["resize"]
    }
  },
      gr = {
    props: {
      offset: Number
    },
    data: {
      offset: 0
    },
    methods: {
      scrollTo: function scrollTo(t) {
        var e = this;
        t = t && _e(t) || document.body, Kt(this.$el, "beforescroll", [this, t]) && Oi(t, {
          offset: this.offset
        }).then(function () {
          return Kt(e.$el, "scrolled", [e, t]);
        });
      }
    },
    events: {
      click: function click(t) {
        t.defaultPrevented || (t.preventDefault(), this.scrollTo(Ot(decodeURIComponent(this.$el.hash)).substr(1)));
      }
    }
  },
      vr = {
    args: "cls",
    props: {
      cls: String,
      target: String,
      hidden: Boolean,
      offsetTop: Number,
      offsetLeft: Number,
      repeat: Boolean,
      delay: Number
    },
    data: function data() {
      return {
        cls: !1,
        target: !1,
        hidden: !0,
        offsetTop: 0,
        offsetLeft: 0,
        repeat: !1,
        delay: 0,
        inViewClass: "uk-scrollspy-inview"
      };
    },
    computed: {
      elements: {
        get: function get(t, e) {
          var i = t.target;
          return i ? Me(i, e) : [e];
        },
        watch: function watch(t) {
          this.hidden && Ve(Vt(t, ":not(." + this.inViewClass + ")"), "visibility", "hidden");
        },
        immediate: !0
      }
    },
    update: [{
      read: function read(t) {
        var i = this;
        t.update && this.elements.forEach(function (t) {
          var e = t._ukScrollspyState;
          (e = e || {
            cls: ht(t, "uk-scrollspy-class") || i.cls
          }).show = Bi(t, i.offsetTop, i.offsetLeft), t._ukScrollspyState = e;
        });
      },
      write: function write(n) {
        var r = this;
        if (!n.update) return this.$emit(), n.update = !0;
        this.elements.forEach(function (e) {
          function t(t) {
            Ve(e, "visibility", !t && r.hidden ? "hidden" : ""), He(e, r.inViewClass, t), He(e, i.cls), Kt(e, t ? "inview" : "outview"), i.inview = t, r.$update(e);
          }

          var i = e._ukScrollspyState;
          !i.show || i.inview || i.queued ? !i.show && i.inview && !i.queued && r.repeat && t(!1) : (i.queued = !0, n.promise = (n.promise || se.resolve()).then(function () {
            return new se(function (t) {
              return setTimeout(t, r.delay);
            });
          }).then(function () {
            t(!0), setTimeout(function () {
              return i.queued = !1;
            }, 300);
          }));
        });
      },
      events: ["scroll", "resize"]
    }]
  },
      wr = {
    props: {
      cls: String,
      closest: String,
      scroll: Boolean,
      overflow: Boolean,
      offset: Number
    },
    data: {
      cls: "uk-active",
      closest: !1,
      scroll: !1,
      overflow: !0,
      offset: 0
    },
    computed: {
      links: {
        get: function get(t, e) {
          return Me('a[href^="#"]', e).filter(function (t) {
            return t.hash;
          });
        },
        watch: function watch(t) {
          this.scroll && this.$create("scroll", t, {
            offset: this.offset || 0
          });
        },
        immediate: !0
      },
      targets: function targets() {
        return Me(this.links.map(function (t) {
          return Ot(t.hash).substr(1);
        }).join(","));
      },
      elements: function elements(t) {
        var e = t.closest;
        return Dt(this.links, e || "*");
      }
    },
    update: [{
      read: function read() {
        var i = this,
            t = this.targets.length;
        if (!t || !Ft(this.$el)) return !1;
        var e = K(Li(this.targets[0])),
            n = e.scrollTop,
            r = e.scrollHeight,
            o = Fi(e),
            s = r - si(o).height,
            a = !1;
        return n === s ? a = t - 1 : (this.targets.every(function (t, e) {
          if (hi(t, o).top - i.offset <= 0) return a = e, !0;
        }), !1 === a && this.overflow && (a = 0)), {
          active: a
        };
      },
      write: function write(t) {
        var e = t.active;
        this.links.forEach(function (t) {
          return t.blur();
        }), De(this.elements, this.cls), !1 !== e && Kt(this.$el, "active", [e, ze(this.elements[e], this.cls)]);
      },
      events: ["scroll", "resize"]
    }]
  },
      br = {
    mixins: [hn, nr],
    props: {
      top: null,
      bottom: Boolean,
      offset: String,
      animation: String,
      clsActive: String,
      clsInactive: String,
      clsFixed: String,
      clsBelow: String,
      selTarget: String,
      widthElement: Boolean,
      showOnUp: Boolean,
      targetOffset: Number
    },
    data: {
      top: 0,
      bottom: !1,
      offset: 0,
      animation: "",
      clsActive: "uk-active",
      clsInactive: "",
      clsFixed: "uk-sticky-fixed",
      clsBelow: "uk-sticky-below",
      selTarget: "",
      widthElement: !1,
      showOnUp: !1,
      targetOffset: !1
    },
    computed: {
      offset: function offset(t) {
        return wi(t.offset);
      },
      selTarget: function selTarget(t, e) {
        var i = t.selTarget;
        return i && _e(i, e) || e;
      },
      widthElement: function widthElement(t, e) {
        return xt(t.widthElement, e) || this.placeholder;
      },
      isActive: {
        get: function get() {
          return Oe(this.selTarget, this.clsActive);
        },
        set: function set(t) {
          t && !this.isActive ? (Pe(this.selTarget, this.clsInactive, this.clsActive), Kt(this.$el, "active")) : t || Oe(this.selTarget, this.clsInactive) || (Pe(this.selTarget, this.clsActive, this.clsInactive), Kt(this.$el, "inactive"));
        }
      }
    },
    connected: function connected() {
      this.placeholder = _e("+ .uk-sticky-placeholder", this.$el) || _e('<div class="uk-sticky-placeholder"></div>'), this.isFixed = !1, this.isActive = !1;
    },
    disconnected: function disconnected() {
      this.isFixed && (this.hide(), De(this.selTarget, this.clsInactive)), ke(this.placeholder), this.placeholder = null, this.widthElement = null;
    },
    events: [{
      name: "load hashchange popstate",
      el: window,
      handler: function handler() {
        var n = this;

        if (!1 !== this.targetOffset && location.hash && 0 < window.pageYOffset) {
          var r = _e(location.hash);

          r && xi.read(function () {
            var t = si(r).top,
                e = si(n.$el).top,
                i = n.$el.offsetHeight;
            n.isFixed && t <= e + i && e <= t + r.offsetHeight && Pi(window, t - i - (P(n.targetOffset) ? n.targetOffset : 0) - n.offset);
          });
        }
      }
    }],
    update: [{
      read: function read(t, e) {
        var i = t.height;
        this.isActive && "update" !== e && (this.hide(), i = this.$el.offsetHeight, this.show()), i = this.isActive ? i : this.$el.offsetHeight, this.topOffset = si(this.isFixed ? this.placeholder : this.$el).top, this.bottomOffset = this.topOffset + i;
        var n = xr("bottom", this);
        return this.top = Math.max(j(xr("top", this)), this.topOffset) - this.offset, this.bottom = n && n - this.$el.offsetHeight, this.inactive = !this.matchMedia, {
          lastScroll: !1,
          height: i,
          margins: Ve(this.$el, ["marginTop", "marginBottom", "marginLeft", "marginRight"])
        };
      },
      write: function write(t) {
        var e = t.height,
            i = t.margins,
            n = this.placeholder;
        Ve(n, G({
          height: e
        }, i)), Rt(n, document) || (xe(this.$el, n), ot(n, "hidden", "")), this.isActive = this.isActive;
      },
      events: ["resize"]
    }, {
      read: function read(t) {
        var e = t.scroll;
        return void 0 === e && (e = 0), this.width = si(Ft(this.widthElement) ? this.widthElement : this.$el).width, this.scroll = window.pageYOffset, {
          dir: e <= this.scroll ? "down" : "up",
          scroll: this.scroll,
          visible: Ft(this.$el),
          top: ui(this.placeholder)[0]
        };
      },
      write: function write(t, e) {
        var i = this,
            n = t.initTimestamp;
        void 0 === n && (n = 0);
        var r = t.dir,
            o = t.lastDir,
            s = t.lastScroll,
            a = t.scroll,
            h = t.top,
            u = t.visible,
            c = performance.now();
        if (!((t.lastScroll = a) < 0 || a === s || !u || this.disabled || this.showOnUp && "scroll" !== e || ((300 < c - n || r !== o) && (t.initScroll = a, t.initTimestamp = c), t.lastDir = r, this.showOnUp && !this.isFixed && Math.abs(t.initScroll - a) <= 30 && Math.abs(s - a) <= 10))) if (this.inactive || a < this.top || this.showOnUp && (a <= this.top || "down" === r || "up" === r && !this.isFixed && a <= this.bottomOffset)) {
          if (!this.isFixed) return void (ni.inProgress(this.$el) && a < h && (ni.cancel(this.$el), this.hide()));
          this.isFixed = !1, this.animation && a > this.topOffset ? (ni.cancel(this.$el), ni.out(this.$el, this.animation).then(function () {
            return i.hide();
          }, et)) : this.hide();
        } else this.isFixed ? this.update() : this.animation ? (ni.cancel(this.$el), this.show(), ni["in"](this.$el, this.animation)["catch"](et)) : this.show();
      },
      events: ["resize", "scroll"]
    }],
    methods: {
      show: function show() {
        this.isFixed = !0, this.update(), ot(this.placeholder, "hidden", null);
      },
      hide: function hide() {
        this.isActive = !1, De(this.$el, this.clsFixed, this.clsBelow), Ve(this.$el, {
          position: "",
          top: "",
          width: ""
        }), ot(this.placeholder, "hidden", "");
      },
      update: function update() {
        var t = 0 !== this.top || this.scroll > this.top,
            e = Math.max(0, this.offset);
        P(this.bottom) && this.scroll > this.bottom - this.offset && (e = this.bottom - this.scroll), Ve(this.$el, {
          position: "fixed",
          top: e + "px",
          width: this.width
        }), this.isActive = t, He(this.$el, this.clsBelow, this.scroll > this.bottomOffset), ze(this.$el, this.clsFixed);
      }
    }
  };

  function xr(t, e) {
    var i = e.$props,
        n = e.$el,
        r = e[t + "Offset"],
        o = i[t];
    if (o) return D(o) && o.match(/^-?\d/) ? r + wi(o) : si(!0 === o ? n.parentNode : xt(o, n)).bottom;
  }

  var yr = {
    mixins: [un],
    args: "connect",
    props: {
      connect: String,
      toggle: String,
      active: Number,
      swiping: Boolean
    },
    data: {
      connect: "~.uk-switcher",
      toggle: "> * > :first-child",
      active: 0,
      swiping: !0,
      cls: "uk-active",
      clsContainer: "uk-switcher",
      attrItem: "uk-switcher-item",
      queued: !0
    },
    computed: {
      connects: {
        get: function get(t, e) {
          return yt(t.connect, e);
        },
        watch: function watch(t) {
          var e = this;
          t.forEach(function (t) {
            return e.updateAria(t.children);
          }), this.swiping && Ve(t, "touch-action", "pan-y pinch-zoom");
        },
        immediate: !0
      },
      toggles: {
        get: function get(t, e) {
          return Me(t.toggle, e).filter(function (t) {
            return !Nt(t, ".uk-disabled *, .uk-disabled, [disabled]");
          });
        },
        watch: function watch(t) {
          var e = this.index();
          this.show(~e && e || t[this.active] || t[0]);
        },
        immediate: !0
      }
    },
    events: [{
      name: "click",
      delegate: function delegate() {
        return this.toggle;
      },
      handler: function handler(t) {
        b(this.toggles, t.current) && (t.preventDefault(), this.show(t.current));
      }
    }, {
      name: "click",
      el: function el() {
        return this.connects;
      },
      delegate: function delegate() {
        return "[" + this.attrItem + "],[data-" + this.attrItem + "]";
      },
      handler: function handler(t) {
        t.preventDefault(), this.show(ht(t.current, this.attrItem));
      }
    }, {
      name: "swipeRight swipeLeft",
      filter: function filter() {
        return this.swiping;
      },
      el: function el() {
        return this.connects;
      },
      handler: function handler(t) {
        var e = t.type;
        this.show(u(e, "Left") ? "next" : "previous");
      }
    }, {
      name: "show",
      el: function el() {
        return this.connects;
      },
      handler: function handler() {
        var i = this,
            n = this.index();
        this.toggles.forEach(function (e, t) {
          He(Ut(i.$el).filter(function (t) {
            return Rt(e, t);
          }), i.cls, n === t), ot(e, "aria-expanded", n === t);
        });
      }
    }],
    methods: {
      index: function index() {
        return pe(Ut(this.connects[0], "." + this.cls)[0]);
      },
      show: function show(t) {
        var i = this,
            n = this.index(),
            r = me(t, this.toggles, n);
        this.connects.forEach(function (t) {
          var e = t.children;
          return i.toggleElement([e[n], e[r]], void 0, 0 <= n);
        });
      }
    }
  },
      kr = {
    mixins: [hn],
    "extends": yr,
    props: {
      media: Boolean
    },
    data: {
      media: 960,
      attrItem: "uk-tab-item"
    },
    connected: function connected() {
      var t = Oe(this.$el, "uk-tab-left") ? "uk-tab-left" : !!Oe(this.$el, "uk-tab-right") && "uk-tab-right";
      t && this.$create("toggle", this.$el, {
        cls: t,
        mode: "media",
        media: this.media
      });
    }
  },
      $r = {
    mixins: [nr, un],
    args: "target",
    props: {
      href: String,
      target: null,
      mode: "list"
    },
    data: {
      href: !1,
      target: !1,
      mode: "click",
      queued: !0
    },
    computed: {
      target: {
        get: function get(t, e) {
          var i = t.href,
              n = t.target;
          return (n = yt(n || i, e)).length && n || [e];
        },
        watch: function watch() {
          Kt(this.target, "updatearia", [this]);
        },
        immediate: !0
      }
    },
    events: [{
      name: vt + " " + wt,
      filter: function filter() {
        return b(this.mode, "hover");
      },
      handler: function handler(t) {
        ne(t) || this.toggle("toggle" + (t.type === vt ? "show" : "hide"));
      }
    }, {
      name: "click",
      filter: function filter() {
        return b(this.mode, "click") || ft && b(this.mode, "hover");
      },
      handler: function handler(t) {
        var e;
        (Dt(t.target, 'a[href="#"], a[href=""]') || (e = Dt(t.target, "a[href]")) && (this.cls && !Oe(this.target, this.cls.split(" ")[0]) || !Ft(this.target) || e.hash && Nt(this.target, e.hash))) && t.preventDefault(), this.toggle();
      }
    }],
    update: {
      read: function read() {
        return !(!b(this.mode, "media") || !this.media) && {
          match: this.matchMedia
        };
      },
      write: function write(t) {
        var e = t.match,
            i = this.isToggled(this.target);
        (e ? !i : i) && this.toggle();
      },
      events: ["resize"]
    },
    methods: {
      toggle: function toggle(t) {
        Kt(this.target, t || "toggle", [this]) && this.toggleElement(this.target);
      }
    }
  },
      Ir = Object.freeze({
    __proto__: null,
    Accordion: ln,
    Alert: fn,
    Cover: mn,
    Drop: wn,
    Dropdown: wn,
    FormCustom: bn,
    Gif: xn,
    Grid: Sn,
    HeightMatch: En,
    HeightViewport: _n,
    Icon: Ln,
    Img: Un,
    Leader: rr,
    Margin: yn,
    Modal: ur,
    Nav: cr,
    Navbar: lr,
    Offcanvas: dr,
    OverflowAuto: pr,
    Responsive: mr,
    Scroll: gr,
    Scrollspy: vr,
    ScrollspyNav: wr,
    Sticky: br,
    Svg: Nn,
    Switcher: yr,
    Tab: kr,
    Toggle: $r,
    Video: pn,
    Close: Vn,
    Spinner: Rn,
    SlidenavNext: jn,
    SlidenavPrevious: jn,
    SearchIcon: Wn,
    Marker: Fn,
    NavbarToggleIcon: Fn,
    OverlayIcon: Fn,
    PaginationNext: Fn,
    PaginationPrevious: Fn,
    Totop: Fn
  }),
      Sr = {
    mixins: [hn],
    props: {
      date: String,
      clsWrapper: String
    },
    data: {
      date: "",
      clsWrapper: ".uk-countdown-%unit%"
    },
    computed: {
      date: function date(t) {
        var e = t.date;
        return Date.parse(e);
      },
      days: function days(t, e) {
        return _e(t.clsWrapper.replace("%unit%", "days"), e);
      },
      hours: function hours(t, e) {
        return _e(t.clsWrapper.replace("%unit%", "hours"), e);
      },
      minutes: function minutes(t, e) {
        return _e(t.clsWrapper.replace("%unit%", "minutes"), e);
      },
      seconds: function seconds(t, e) {
        return _e(t.clsWrapper.replace("%unit%", "seconds"), e);
      },
      units: function units() {
        var e = this;
        return ["days", "hours", "minutes", "seconds"].filter(function (t) {
          return e[t];
        });
      }
    },
    connected: function connected() {
      this.start();
    },
    disconnected: function disconnected() {
      var e = this;
      this.stop(), this.units.forEach(function (t) {
        return ge(e[t]);
      });
    },
    events: [{
      name: "visibilitychange",
      el: document,
      handler: function handler() {
        document.hidden ? this.stop() : this.start();
      }
    }],
    update: {
      write: function write() {
        var t,
            e,
            n = this,
            r = (t = this.date, {
          total: e = t - Date.now(),
          seconds: e / 1e3 % 60,
          minutes: e / 1e3 / 60 % 60,
          hours: e / 1e3 / 60 / 60 % 24,
          days: e / 1e3 / 60 / 60 / 24
        });
        r.total <= 0 && (this.stop(), r.days = r.hours = r.minutes = r.seconds = 0), this.units.forEach(function (t) {
          var e = String(Math.floor(r[t]));
          e = e.length < 2 ? "0" + e : e;
          var i = n[t];
          i.textContent !== e && ((e = e.split("")).length !== i.children.length && ve(i, e.map(function () {
            return "<span></span>";
          }).join("")), e.forEach(function (t, e) {
            return i.children[e].textContent = t;
          }));
        });
      }
    },
    methods: {
      start: function start() {
        this.stop(), this.date && this.units.length && (this.$update(), this.timer = setInterval(this.$update, 1e3));
      },
      stop: function stop() {
        this.timer && (clearInterval(this.timer), this.timer = null);
      }
    }
  };
  var Tr,
      Er = "uk-animation-target",
      Ar = {
    props: {
      animation: Number
    },
    data: {
      animation: 150
    },
    computed: {
      target: function target() {
        return this.$el;
      }
    },
    methods: {
      animate: function animate(t) {
        var n = this;
        !function () {
          if (Tr) return;
          (Tr = we(document.head, "<style>").sheet).insertRule("." + Er + " > * {\n            margin-top: 0 !important;\n            transform: none !important;\n        }", 0);
        }();
        var r = Ut(this.target),
            o = r.map(function (t) {
          return Cr(t, !0);
        }),
            e = ci(this.target),
            i = window.pageYOffset;
        t(), Ze.cancel(this.target), r.forEach(Ze.cancel), _r(this.target), this.$update(this.target, "resize"), xi.flush();
        var s = ci(this.target),
            a = (r = r.concat(Ut(this.target).filter(function (t) {
          return !b(r, t);
        }))).map(function (t, e) {
          return !!(t.parentNode && e in o) && (o[e] ? Ft(t) ? Mr(t) : {
            opacity: 0
          } : {
            opacity: Ft(t) ? 1 : 0
          });
        });
        return o = a.map(function (t, e) {
          var i = r[e].parentNode === n.target && (o[e] || Cr(r[e]));
          if (i) if (t) {
            if (!("opacity" in t)) {
              i.opacity % 1 ? t.opacity = 1 : delete i.opacity;
            }
          } else delete i.opacity;
          return i;
        }), ze(this.target, Er), r.forEach(function (t, e) {
          return o[e] && Ve(t, o[e]);
        }), Ve(this.target, {
          height: e,
          display: "block"
        }), Pi(window, i), se.all(r.map(function (t, e) {
          return ["top", "left", "height", "width"].some(function (t) {
            return o[e][t] !== a[e][t];
          }) && Ze.start(t, a[e], n.animation, "ease");
        }).concat(e !== s && Ze.start(this.target, {
          height: s
        }, this.animation, "ease"))).then(function () {
          r.forEach(function (t, e) {
            return Ve(t, {
              display: 0 === a[e].opacity ? "none" : "",
              zIndex: ""
            });
          }), _r(n.target), n.$update(n.target, "resize"), xi.flush();
        }, et);
      }
    }
  };

  function Cr(t, e) {
    var i = Ve(t, "zIndex");
    return !!Ft(t) && G({
      display: "",
      opacity: e ? Ve(t, "opacity") : "0",
      pointerEvents: "none",
      position: "absolute",
      zIndex: "auto" === i ? pe(t) : i
    }, Mr(t));
  }

  function _r(t) {
    Ve(t.children, {
      height: "",
      left: "",
      opacity: "",
      pointerEvents: "",
      position: "",
      top: "",
      width: ""
    }), De(t, Er), Ve(t, {
      height: "",
      display: ""
    });
  }

  function Mr(t) {
    var e = si(t),
        i = e.height,
        n = e.width,
        r = hi(t);
    return {
      top: r.top,
      left: r.left,
      height: i,
      width: n
    };
  }

  var Nr = {
    mixins: [Ar],
    args: "target",
    props: {
      target: Boolean,
      selActive: Boolean
    },
    data: {
      target: null,
      selActive: !1,
      attrItem: "uk-filter-control",
      cls: "uk-active",
      animation: 250
    },
    computed: {
      toggles: {
        get: function get(t, e) {
          t.attrItem;
          return Me("[" + this.attrItem + "],[data-" + this.attrItem + "]", e);
        },
        watch: function watch() {
          var e = this;

          if (this.updateState(), !1 !== this.selActive) {
            var i = Me(this.selActive, this.$el);
            this.toggles.forEach(function (t) {
              return He(t, e.cls, b(i, t));
            });
          }
        },
        immediate: !0
      },
      target: function target(t, e) {
        return _e(t.target, e);
      },
      children: {
        get: function get() {
          return Ut(this.target);
        },
        watch: function watch(t, e) {
          var i, n;
          n = e, (i = t).length === n.length && i.every(function (t) {
            return ~n.indexOf(t);
          }) || this.updateState();
        }
      }
    },
    events: [{
      name: "click",
      delegate: function delegate() {
        return "[" + this.attrItem + "],[data-" + this.attrItem + "]";
      },
      handler: function handler(t) {
        t.preventDefault(), this.apply(t.current);
      }
    }],
    methods: {
      apply: function apply(t) {
        this.setState(Dr(t, this.attrItem, this.getState()));
      },
      getState: function getState() {
        var i = this;
        return this.toggles.filter(function (t) {
          return Oe(t, i.cls);
        }).reduce(function (t, e) {
          return Dr(e, i.attrItem, t);
        }, {
          filter: {
            "": ""
          },
          sort: []
        });
      },
      setState: function setState(u, t) {
        var c = this;
        void 0 === t && (t = !0), u = G({
          filter: {
            "": ""
          },
          sort: []
        }, u), Kt(this.$el, "beforeFilter", [this, u]);
        var l = this.children;
        this.toggles.forEach(function (t) {
          return He(t, c.cls, !!function (t, e, i) {
            var n = i.filter;
            void 0 === n && (n = {
              "": ""
            });
            var r = i.sort,
                o = r[0],
                s = r[1],
                a = zr(t, e),
                h = a.filter;
            void 0 === h && (h = "");
            var u = a.group;
            void 0 === u && (u = "");
            var c = a.sort,
                l = a.order;
            void 0 === l && (l = "asc");
            return H(c) ? u in n && h === n[u] || !h && u && !(u in n) && !n[""] : o === c && s === l;
          }(t, c.attrItem, u));
        });

        function e() {
          var t,
              e,
              i = (t = u.filter, e = "", J(t, function (t) {
            return e += t || "";
          }), e);
          l.forEach(function (t) {
            return Ve(t, "display", i && !Nt(t, i) ? "none" : "");
          });
          var n,
              r,
              o = u.sort,
              s = o[0],
              a = o[1];

          if (s) {
            var h = (n = s, r = a, G([], l).sort(function (t, e) {
              return ht(t, n).localeCompare(ht(e, n), void 0, {
                numeric: !0
              }) * ("asc" === r || -1);
            }));
            Y(h, l) || h.forEach(function (t) {
              return we(c.target, t);
            });
          }
        }

        t ? this.animate(e).then(function () {
          return Kt(c.$el, "afterFilter", [c]);
        }) : (e(), Kt(this.$el, "afterFilter", [this]));
      },
      updateState: function updateState() {
        var t = this;
        xi.write(function () {
          return t.setState(t.getState(), !1);
        });
      }
    }
  };

  function zr(t, e) {
    return Mi(ht(t, e), ["filter"]);
  }

  function Dr(t, e, i) {
    var n = zr(t, e),
        r = n.filter,
        o = n.group,
        s = n.sort,
        a = n.order;
    return void 0 === a && (a = "asc"), (r || H(s)) && (o ? r ? (delete i.filter[""], i.filter[o] = r) : (delete i.filter[o], (O(i.filter) || "" in i.filter) && (i.filter = {
      "": r || ""
    })) : i.filter = {
      "": r || ""
    }), H(s) || (i.sort = [s, a]), i;
  }

  var Br = {
    slide: {
      show: function show(t) {
        return [{
          transform: Or(-100 * t)
        }, {
          transform: Or()
        }];
      },
      percent: function percent(t) {
        return Pr(t);
      },
      translate: function translate(t, e) {
        return [{
          transform: Or(-100 * e * t)
        }, {
          transform: Or(100 * e * (1 - t))
        }];
      }
    }
  };

  function Pr(t) {
    return Math.abs(Ve(t, "transform").split(",")[4] / t.offsetWidth) || 0;
  }

  function Or(t, e) {
    return void 0 === t && (t = 0), void 0 === e && (e = "%"), t += t ? e : "", ut ? "translateX(" + t + ")" : "translate3d(" + t + ", 0, 0)";
  }

  function Hr(t) {
    return "scale3d(" + t + ", " + t + ", 1)";
  }

  var Lr = G({}, Br, {
    fade: {
      show: function show() {
        return [{
          opacity: 0
        }, {
          opacity: 1
        }];
      },
      percent: function percent(t) {
        return 1 - Ve(t, "opacity");
      },
      translate: function translate(t) {
        return [{
          opacity: 1 - t
        }, {
          opacity: t
        }];
      }
    },
    scale: {
      show: function show() {
        return [{
          opacity: 0,
          transform: Hr(.8)
        }, {
          opacity: 1,
          transform: Hr(1)
        }];
      },
      percent: function percent(t) {
        return 1 - Ve(t, "opacity");
      },
      translate: function translate(t) {
        return [{
          opacity: 1 - t,
          transform: Hr(1 - .2 * t)
        }, {
          opacity: t,
          transform: Hr(.8 + .2 * t)
        }];
      }
    }
  });

  function Fr(t, e, i) {
    Kt(t, Jt(e, !1, !1, i));
  }

  var jr = {
    mixins: [{
      props: {
        autoplay: Boolean,
        autoplayInterval: Number,
        pauseOnHover: Boolean
      },
      data: {
        autoplay: !1,
        autoplayInterval: 7e3,
        pauseOnHover: !0
      },
      connected: function connected() {
        this.autoplay && this.startAutoplay();
      },
      disconnected: function disconnected() {
        this.stopAutoplay();
      },
      update: function update() {
        ot(this.slides, "tabindex", "-1");
      },
      events: [{
        name: "visibilitychange",
        el: document,
        filter: function filter() {
          return this.autoplay;
        },
        handler: function handler() {
          document.hidden ? this.stopAutoplay() : this.startAutoplay();
        }
      }],
      methods: {
        startAutoplay: function startAutoplay() {
          var t = this;
          this.stopAutoplay(), this.interval = setInterval(function () {
            return (!t.draggable || !_e(":focus", t.$el)) && (!t.pauseOnHover || !Nt(t.$el, ":hover")) && !t.stack.length && t.show("next");
          }, this.autoplayInterval);
        },
        stopAutoplay: function stopAutoplay() {
          this.interval && clearInterval(this.interval);
        }
      }
    }, {
      props: {
        draggable: Boolean
      },
      data: {
        draggable: !0,
        threshold: 10
      },
      created: function created() {
        var n = this;
        ["start", "move", "end"].forEach(function (t) {
          var i = n[t];

          n[t] = function (t) {
            var e = re(t).x * (ct ? -1 : 1);
            n.prevPos = e !== n.pos ? n.pos : n.prevPos, n.pos = e, i(t);
          };
        });
      },
      events: [{
        name: pt,
        delegate: function delegate() {
          return this.selSlides;
        },
        handler: function handler(t) {
          var e;
          !this.draggable || !ne(t) && !(e = t.target).children.length && e.childNodes.length || Dt(t.target, jt) || 0 < t.button || this.length < 2 || this.start(t);
        }
      }, {
        name: "touchmove",
        passive: !1,
        handler: "move",
        filter: function filter() {
          return "touchmove" == mt;
        },
        delegate: function delegate() {
          return this.selSlides;
        }
      }, {
        name: "dragstart",
        handler: function handler(t) {
          t.preventDefault();
        }
      }],
      methods: {
        start: function start() {
          var t = this;
          this.drag = this.pos, this._transitioner ? (this.percent = this._transitioner.percent(), this.drag += this._transitioner.getDistance() * this.percent * this.dir, this._transitioner.cancel(), this._transitioner.translate(this.percent), this.dragging = !0, this.stack = []) : this.prevIndex = this.index;
          var e = "touchmove" != mt ? Yt(document, mt, this.move, {
            passive: !1
          }) : et;
          this.unbindMove = function () {
            e(), t.unbindMove = null;
          }, Yt(window, "scroll", this.unbindMove), Yt(window.visualViewport, "resize", this.unbindMove), Yt(document, gt + " " + bt, this.end, !0), Ve(this.list, "userSelect", "none");
        },
        move: function move(t) {
          var e = this;

          if (this.unbindMove) {
            var i = this.pos - this.drag;

            if (!(0 == i || this.prevPos === this.pos || !this.dragging && Math.abs(i) < this.threshold)) {
              Ve(this.list, "pointerEvents", "none"), t.cancelable && t.preventDefault(), this.dragging = !0, this.dir = i < 0 ? 1 : -1;

              for (var n = this.slides, r = this.prevIndex, o = Math.abs(i), s = this.getIndex(r + this.dir, r), a = this._getDistance(r, s) || n[r].offsetWidth; s !== r && a < o;) {
                this.drag -= a * this.dir, r = s, o -= a, s = this.getIndex(r + this.dir, r), a = this._getDistance(r, s) || n[r].offsetWidth;
              }

              this.percent = o / a;
              var h,
                  u = n[r],
                  c = n[s],
                  l = this.index !== s,
                  d = r === s;
              [this.index, this.prevIndex].filter(function (t) {
                return !b([s, r], t);
              }).forEach(function (t) {
                Kt(n[t], "itemhidden", [e]), d && (h = !0, e.prevIndex = r);
              }), (this.index === r && this.prevIndex !== r || h) && Kt(n[this.index], "itemshown", [this]), l && (this.prevIndex = r, this.index = s, d || Kt(u, "beforeitemhide", [this]), Kt(c, "beforeitemshow", [this])), this._transitioner = this._translate(Math.abs(this.percent), u, !d && c), l && (d || Kt(u, "itemhide", [this]), Kt(c, "itemshow", [this]));
            }
          }
        },
        end: function end() {
          if (Xt(window, "scroll", this.unbindMove), Xt(window.visualViewport, "resize", this.unbindMove), this.unbindMove && this.unbindMove(), Xt(document, gt, this.end, !0), this.dragging) if (this.dragging = null, this.index === this.prevIndex) this.percent = 1 - this.percent, this.dir *= -1, this._show(!1, this.index, !0), this._transitioner = null;else {
            var t = (ct ? this.dir * (ct ? 1 : -1) : this.dir) < 0 == this.prevPos > this.pos;
            this.index = t ? this.index : this.prevIndex, t && (this.percent = 1 - this.percent), this.show(0 < this.dir && !t || this.dir < 0 && t ? "next" : "previous", !0);
          }
          Ve(this.list, {
            userSelect: "",
            pointerEvents: ""
          }), this.drag = this.percent = null;
        }
      }
    }, {
      data: {
        selNav: !1
      },
      computed: {
        nav: function nav(t, e) {
          return _e(t.selNav, e);
        },
        selNavItem: function selNavItem(t) {
          var e = t.attrItem;
          return "[" + e + "],[data-" + e + "]";
        },
        navItems: function navItems(t, e) {
          return Me(this.selNavItem, e);
        }
      },
      update: {
        write: function write() {
          var i = this;
          this.nav && this.length !== this.nav.children.length && ve(this.nav, this.slides.map(function (t, e) {
            return "<li " + i.attrItem + '="' + e + '"><a href></a></li>';
          }).join("")), He(Me(this.selNavItem, this.$el).concat(this.nav), "uk-hidden", !this.maxIndex), this.updateNav();
        },
        events: ["resize"]
      },
      events: [{
        name: "click",
        delegate: function delegate() {
          return this.selNavItem;
        },
        handler: function handler(t) {
          t.preventDefault(), this.show(ht(t.current, this.attrItem));
        }
      }, {
        name: "itemshow",
        handler: "updateNav"
      }],
      methods: {
        updateNav: function updateNav() {
          var i = this,
              n = this.getValidIndex();
          this.navItems.forEach(function (t) {
            var e = ht(t, i.attrItem);
            He(t, i.clsActive, F(e) === n), He(t, "uk-invisible", i.finite && ("previous" === e && 0 === n || "next" === e && n >= i.maxIndex));
          });
        }
      }
    }],
    props: {
      clsActivated: Boolean,
      easing: String,
      index: Number,
      finite: Boolean,
      velocity: Number,
      selSlides: String
    },
    data: function data() {
      return {
        easing: "ease",
        finite: !1,
        velocity: 1,
        index: 0,
        prevIndex: -1,
        stack: [],
        percent: 0,
        clsActive: "uk-active",
        clsActivated: !1,
        Transitioner: !1,
        transitionOptions: {}
      };
    },
    connected: function connected() {
      this.prevIndex = -1, this.index = this.getValidIndex(this.index), this.stack = [];
    },
    disconnected: function disconnected() {
      De(this.slides, this.clsActive);
    },
    computed: {
      duration: function duration(t, e) {
        var i = t.velocity;
        return Wr(e.offsetWidth / i);
      },
      list: function list(t, e) {
        return _e(t.selList, e);
      },
      maxIndex: function maxIndex() {
        return this.length - 1;
      },
      selSlides: function selSlides(t) {
        return t.selList + " " + (t.selSlides || "> *");
      },
      slides: {
        get: function get() {
          return Me(this.selSlides, this.$el);
        },
        watch: function watch() {
          this.$reset();
        }
      },
      length: function length() {
        return this.slides.length;
      }
    },
    events: {
      itemshown: function itemshown() {
        this.$update(this.list);
      }
    },
    methods: {
      show: function show(t, e) {
        var i = this;

        if (void 0 === e && (e = !1), !this.dragging && this.length) {
          var n = this.stack,
              r = e ? 0 : n.length,
              o = function o() {
            n.splice(r, 1), n.length && i.show(n.shift(), !0);
          };

          if (n[e ? "unshift" : "push"](t), !e && 1 < n.length) 2 === n.length && this._transitioner.forward(Math.min(this.duration, 200));else {
            var s = this.getIndex(this.index),
                a = Oe(this.slides, this.clsActive) && this.slides[s],
                h = this.getIndex(t, this.index),
                u = this.slides[h];

            if (a !== u) {
              var c, l;
              if (this.dir = (l = s, "next" !== (c = t) && ("previous" === c || c < l) ? -1 : 1), this.prevIndex = s, this.index = h, a && !Kt(a, "beforeitemhide", [this]) || !Kt(u, "beforeitemshow", [this, a])) return this.index = this.prevIndex, void o();

              var d = this._show(a, u, e).then(function () {
                return a && Kt(a, "itemhidden", [i]), Kt(u, "itemshown", [i]), new se(function (t) {
                  xi.write(function () {
                    n.shift(), n.length ? i.show(n.shift(), !0) : i._transitioner = null, t();
                  });
                });
              });

              return a && Kt(a, "itemhide", [this]), Kt(u, "itemshow", [this]), d;
            }

            o();
          }
        }
      },
      getIndex: function getIndex(t, e) {
        return void 0 === t && (t = this.index), void 0 === e && (e = this.index), tt(me(t, this.slides, e, this.finite), 0, this.maxIndex);
      },
      getValidIndex: function getValidIndex(t, e) {
        return void 0 === t && (t = this.index), void 0 === e && (e = this.prevIndex), this.getIndex(t, e);
      },
      _show: function _show(t, e, i) {
        if (this._transitioner = this._getTransitioner(t, e, this.dir, G({
          easing: i ? e.offsetWidth < 600 ? "cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "cubic-bezier(0.165, 0.84, 0.44, 1)" : this.easing
        }, this.transitionOptions)), !i && !t) return this._translate(1), se.resolve();
        var n = this.stack.length;
        return this._transitioner[1 < n ? "forward" : "show"](1 < n ? Math.min(this.duration, 75 + 75 / (n - 1)) : this.duration, this.percent);
      },
      _getDistance: function _getDistance(t, e) {
        return this._getTransitioner(t, t !== e && e).getDistance();
      },
      _translate: function _translate(t, e, i) {
        void 0 === e && (e = this.prevIndex), void 0 === i && (i = this.index);

        var n = this._getTransitioner(e !== i && e, i);

        return n.translate(t), n;
      },
      _getTransitioner: function _getTransitioner(t, e, i, n) {
        return void 0 === t && (t = this.prevIndex), void 0 === e && (e = this.index), void 0 === i && (i = this.dir || 1), void 0 === n && (n = this.transitionOptions), new this.Transitioner(B(t) ? this.slides[t] : t, B(e) ? this.slides[e] : e, i * (ct ? -1 : 1), n);
      }
    }
  };

  function Wr(t) {
    return .5 * t + 300;
  }

  var Vr = {
    mixins: [jr],
    props: {
      animation: String
    },
    data: {
      animation: "slide",
      clsActivated: "uk-transition-active",
      Animations: Br,
      Transitioner: function Transitioner(o, s, a, t) {
        var e = t.animation,
            h = t.easing,
            i = e.percent,
            n = e.translate,
            r = e.show;
        void 0 === r && (r = et);
        var u = r(a),
            c = new oe();
        return {
          dir: a,
          show: function show(t, e, i) {
            var n = this;
            void 0 === e && (e = 0);
            var r = i ? "linear" : h;
            return t -= Math.round(t * tt(e, -1, 1)), this.translate(e), Fr(s, "itemin", {
              percent: e,
              duration: t,
              timing: r,
              dir: a
            }), Fr(o, "itemout", {
              percent: 1 - e,
              duration: t,
              timing: r,
              dir: a
            }), se.all([Ze.start(s, u[1], t, r), Ze.start(o, u[0], t, r)]).then(function () {
              n.reset(), c.resolve();
            }, et), c.promise;
          },
          stop: function stop() {
            return Ze.stop([s, o]);
          },
          cancel: function cancel() {
            Ze.cancel([s, o]);
          },
          reset: function reset() {
            for (var t in u[0]) {
              Ve([s, o], t, "");
            }
          },
          forward: function forward(t, e) {
            return void 0 === e && (e = this.percent()), Ze.cancel([s, o]), this.show(t, e, !0);
          },
          translate: function translate(t) {
            this.reset();
            var e = n(t, a);
            Ve(s, e[1]), Ve(o, e[0]), Fr(s, "itemtranslatein", {
              percent: t,
              dir: a
            }), Fr(o, "itemtranslateout", {
              percent: 1 - t,
              dir: a
            });
          },
          percent: function percent() {
            return i(o || s, s, a);
          },
          getDistance: function getDistance() {
            return o && o.offsetWidth;
          }
        };
      }
    },
    computed: {
      animation: function animation(t) {
        var e = t.animation,
            i = t.Animations;
        return G(i[e] || i.slide, {
          name: e
        });
      },
      transitionOptions: function transitionOptions() {
        return {
          animation: this.animation
        };
      }
    },
    events: {
      "itemshow itemhide itemshown itemhidden": function itemshowItemhideItemshownItemhidden(t) {
        var e = t.target;
        this.$update(e);
      },
      beforeitemshow: function beforeitemshow(t) {
        ze(t.target, this.clsActive);
      },
      itemshown: function itemshown(t) {
        ze(t.target, this.clsActivated);
      },
      itemhidden: function itemhidden(t) {
        De(t.target, this.clsActive, this.clsActivated);
      }
    }
  },
      Rr = {
    mixins: [or, ar, un, Vr],
    functional: !0,
    props: {
      delayControls: Number,
      preload: Number,
      videoAutoplay: Boolean,
      template: String
    },
    data: function data() {
      return {
        preload: 1,
        videoAutoplay: !1,
        delayControls: 3e3,
        items: [],
        cls: "uk-open",
        clsPage: "uk-lightbox-page",
        selList: ".uk-lightbox-items",
        attrItem: "uk-lightbox-item",
        selClose: ".uk-close-large",
        selCaption: ".uk-lightbox-caption",
        pauseOnHover: !1,
        velocity: 2,
        Animations: Lr,
        template: '<div class="uk-lightbox uk-overflow-hidden"> <ul class="uk-lightbox-items"></ul> <div class="uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque"> <button class="uk-lightbox-toolbar-icon uk-close-large" type="button" uk-close></button> </div> <a class="uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade" href uk-slidenav-previous uk-lightbox-item="previous"></a> <a class="uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade" href uk-slidenav-next uk-lightbox-item="next"></a> <div class="uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque"></div> </div>'
      };
    },
    created: function created() {
      var t = _e(this.template),
          e = _e(this.selList, t);

      this.items.forEach(function () {
        return we(e, "<li>");
      }), this.$mount(we(this.container, t));
    },
    computed: {
      caption: function caption(t, e) {
        t.selCaption;
        return _e(".uk-lightbox-caption", e);
      }
    },
    events: [{
      name: mt + " " + pt + " keydown",
      handler: "showControls"
    }, {
      name: "click",
      self: !0,
      delegate: function delegate() {
        return this.selSlides;
      },
      handler: function handler(t) {
        t.defaultPrevented || this.hide();
      }
    }, {
      name: "shown",
      self: !0,
      handler: function handler() {
        this.showControls();
      }
    }, {
      name: "hide",
      self: !0,
      handler: function handler() {
        this.hideControls(), De(this.slides, this.clsActive), Ze.stop(this.slides);
      }
    }, {
      name: "hidden",
      self: !0,
      handler: function handler() {
        this.$destroy(!0);
      }
    }, {
      name: "keyup",
      el: document,
      handler: function handler(t) {
        if (this.isToggled(this.$el) && this.draggable) switch (t.keyCode) {
          case 37:
            this.show("previous");
            break;

          case 39:
            this.show("next");
        }
      }
    }, {
      name: "beforeitemshow",
      handler: function handler(t) {
        this.isToggled() || (this.draggable = !1, t.preventDefault(), this.toggleElement(this.$el, !0, !1), this.animation = Lr.scale, De(t.target, this.clsActive), this.stack.splice(1, 0, this.index));
      }
    }, {
      name: "itemshow",
      handler: function handler() {
        ve(this.caption, this.getItem().caption || "");

        for (var t = -this.preload; t <= this.preload; t++) {
          this.loadItem(this.index + t);
        }
      }
    }, {
      name: "itemshown",
      handler: function handler() {
        this.draggable = this.$props.draggable;
      }
    }, {
      name: "itemload",
      handler: function handler(t, r) {
        var o = this,
            n = r.source,
            e = r.type,
            s = r.alt;
        void 0 === s && (s = "");
        var i = r.poster,
            a = r.attrs;

        if (void 0 === a && (a = {}), this.setItem(r, "<span uk-spinner></span>"), n) {
          var h,
              u = {
            frameborder: "0",
            allow: "autoplay",
            allowfullscreen: "",
            style: "max-width: 100%; box-sizing: border-box;",
            "uk-responsive": "",
            "uk-video": "" + this.videoAutoplay
          };
          if ("image" === e || n.match(/\.(jpe?g|png|gif|svg|webp)($|\?)/i)) de(n, a.srcset, a.size).then(function (t) {
            var e = t.width,
                i = t.height;
            return o.setItem(r, qr("img", G({
              src: n,
              width: e,
              height: i,
              alt: s
            }, a)));
          }, function () {
            return o.setError(r);
          });else if ("video" === e || n.match(/\.(mp4|webm|ogv)($|\?)/i)) {
            var c = qr("video", G({
              src: n,
              poster: i,
              controls: "",
              playsinline: "",
              "uk-video": "" + this.videoAutoplay
            }, a));
            Yt(c, "loadedmetadata", function () {
              ot(c, {
                width: c.videoWidth,
                height: c.videoHeight
              }), o.setItem(r, c);
            }), Yt(c, "error", function () {
              return o.setError(r);
            });
          } else "iframe" === e || n.match(/\.(html|php)($|\?)/i) ? this.setItem(r, qr("iframe", G({
            src: n,
            frameborder: "0",
            allowfullscreen: "",
            "class": "uk-lightbox-iframe"
          }, a))) : (h = n.match(/\/\/(?:.*?youtube(-nocookie)?\..*?[?&]v=|youtu\.be\/)([\w-]{11})[&?]?(.*)?/)) ? this.setItem(r, qr("iframe", G({
            src: "https://www.youtube" + (h[1] || "") + ".com/embed/" + h[2] + (h[3] ? "?" + h[3] : ""),
            width: 1920,
            height: 1080
          }, u, a))) : (h = n.match(/\/\/.*?vimeo\.[a-z]+\/(\d+)[&?]?(.*)?/)) && le("https://vimeo.com/api/oembed.json?maxwidth=1920&url=" + encodeURI(n), {
            responseType: "json",
            withCredentials: !1
          }).then(function (t) {
            var e = t.response,
                i = e.height,
                n = e.width;
            return o.setItem(r, qr("iframe", G({
              src: "https://player.vimeo.com/video/" + h[1] + (h[2] ? "?" + h[2] : ""),
              width: n,
              height: i
            }, u, a)));
          }, function () {
            return o.setError(r);
          });
        }
      }
    }],
    methods: {
      loadItem: function loadItem(t) {
        void 0 === t && (t = this.index);
        var e = this.getItem(t);
        this.getSlide(e).childElementCount || Kt(this.$el, "itemload", [e]);
      },
      getItem: function getItem(t) {
        return void 0 === t && (t = this.index), this.items[me(t, this.slides)];
      },
      setItem: function setItem(t, e) {
        Kt(this.$el, "itemloaded", [this, ve(this.getSlide(t), e)]);
      },
      getSlide: function getSlide(t) {
        return this.slides[this.items.indexOf(t)];
      },
      setError: function setError(t) {
        this.setItem(t, '<span uk-icon="icon: bolt; ratio: 2"></span>');
      },
      showControls: function showControls() {
        clearTimeout(this.controlsTimer), this.controlsTimer = setTimeout(this.hideControls, this.delayControls), ze(this.$el, "uk-active", "uk-transition-active");
      },
      hideControls: function hideControls() {
        De(this.$el, "uk-active", "uk-transition-active");
      }
    }
  };

  function qr(t, e) {
    var i = Ae("<" + t + ">");
    return ot(i, e), i;
  }

  var Ur,
      Yr = {
    install: function install(t, e) {
      t.lightboxPanel || t.component("lightboxPanel", Rr);
      G(e.props, t.component("lightboxPanel").options.props);
    },
    props: {
      toggle: String
    },
    data: {
      toggle: "a"
    },
    computed: {
      toggles: {
        get: function get(t, e) {
          return Me(t.toggle, e);
        },
        watch: function watch() {
          this.hide();
        }
      }
    },
    disconnected: function disconnected() {
      this.hide();
    },
    events: [{
      name: "click",
      delegate: function delegate() {
        return this.toggle + ":not(.uk-disabled)";
      },
      handler: function handler(t) {
        t.preventDefault(), this.show(t.current);
      }
    }],
    methods: {
      show: function show(t) {
        var e = this,
            i = Q(this.toggles.map(Xr), "source");

        if (M(t)) {
          var n = Xr(t).source;
          t = y(i, function (t) {
            var e = t.source;
            return n === e;
          });
        }

        return this.panel = this.panel || this.$create("lightboxPanel", G({}, this.$props, {
          items: i
        })), Yt(this.panel.$el, "hidden", function () {
          return e.panel = !1;
        }), this.panel.show(t);
      },
      hide: function hide() {
        return this.panel && this.panel.hide();
      }
    }
  };

  function Xr(e) {
    var i = {};
    return ["href", "caption", "type", "poster", "alt", "attrs"].forEach(function (t) {
      i["href" === t ? "source" : t] = ht(e, t);
    }), i.attrs = Mi(i.attrs), i;
  }

  var Gr = {
    functional: !0,
    args: ["message", "status"],
    data: {
      message: "",
      status: "",
      timeout: 5e3,
      group: null,
      pos: "top-center",
      clsContainer: "uk-notification",
      clsClose: "uk-notification-close",
      clsMsg: "uk-notification-message"
    },
    install: function install(r) {
      r.notification.closeAll = function (i, n) {
        Ce(document.body, function (t) {
          var e = r.getComponent(t, "notification");
          !e || i && i !== e.group || e.close(n);
        });
      };
    },
    computed: {
      marginProp: function marginProp(t) {
        return "margin" + (w(t.pos, "top") ? "Top" : "Bottom");
      },
      startProps: function startProps() {
        var t;
        return (t = {
          opacity: 0
        })[this.marginProp] = -this.$el.offsetHeight, t;
      }
    },
    created: function created() {
      var t = _e("." + this.clsContainer + "-" + this.pos, this.$container) || we(this.$container, '<div class="' + this.clsContainer + " " + this.clsContainer + "-" + this.pos + '" style="display: block"></div>');
      this.$mount(we(t, '<div class="' + this.clsMsg + (this.status ? " " + this.clsMsg + "-" + this.status : "") + '"> <a href class="' + this.clsClose + '" data-uk-close></a> <div>' + this.message + "</div> </div>"));
    },
    connected: function connected() {
      var t,
          e = this,
          i = j(Ve(this.$el, this.marginProp));
      Ze.start(Ve(this.$el, this.startProps), ((t = {
        opacity: 1
      })[this.marginProp] = i, t)).then(function () {
        e.timeout && (e.timer = setTimeout(e.close, e.timeout));
      });
    },
    events: ((Ur = {
      click: function click(t) {
        Dt(t.target, 'a[href="#"],a[href=""]') && t.preventDefault(), this.close();
      }
    })[vt] = function () {
      this.timer && clearTimeout(this.timer);
    }, Ur[wt] = function () {
      this.timeout && (this.timer = setTimeout(this.close, this.timeout));
    }, Ur),
    methods: {
      close: function close(t) {
        function e() {
          var t = i.$el.parentNode;
          Kt(i.$el, "close", [i]), ke(i.$el), t && !t.hasChildNodes() && ke(t);
        }

        var i = this;
        this.timer && clearTimeout(this.timer), t ? e() : Ze.start(this.$el, this.startProps).then(e);
      }
    }
  };
  var Kr = ["x", "y", "bgx", "bgy", "rotate", "scale", "color", "backgroundColor", "borderColor", "opacity", "blur", "hue", "grayscale", "invert", "saturate", "sepia", "fopacity", "stroke"],
      Jr = {
    mixins: [nr],
    props: Kr.reduce(function (t, e) {
      return t[e] = "list", t;
    }, {}),
    data: Kr.reduce(function (t, e) {
      return t[e] = void 0, t;
    }, {}),
    computed: {
      props: function props(m, g) {
        var v = this;
        return Kr.reduce(function (t, e) {
          if (H(m[e])) return t;
          var i,
              n,
              r,
              o = e.match(/color/i),
              s = o || "opacity" === e,
              a = m[e].slice(0);
          s && Ve(g, e, ""), a.length < 2 && a.unshift(("scale" === e ? 1 : s ? Ve(g, e) : 0) || 0);
          var h = a.reduce(function (t, e) {
            return D(e) && e.replace(/-|\d/g, "").trim() || t;
          }, "");

          if (o) {
            var u = g.style.color;
            a = a.map(function (t) {
              return Ve(Ve(g, "color", t), "color").split(/[(),]/g).slice(1, -1).concat(1).slice(0, 4).map(j);
            }), g.style.color = u;
          } else if (w(e, "bg")) {
            var c = "bgy" === e ? "height" : "width";

            if (a = a.map(function (t) {
              return wi(t, c, v.$el);
            }), Ve(g, "background-position-" + e[2], ""), n = Ve(g, "backgroundPosition").split(" ")["x" === e[2] ? 0 : 1], v.covers) {
              var l = Math.min.apply(Math, a),
                  d = Math.max.apply(Math, a),
                  f = a.indexOf(l) < a.indexOf(d);
              r = d - l, a = a.map(function (t) {
                return t - (f ? l : d);
              }), i = (f ? -r : 0) + "px";
            } else i = n;
          } else a = a.map(j);

          if ("stroke" === e) {
            if (!a.some(function (t) {
              return t;
            })) return t;
            var p = Pn(v.$el);
            Ve(g, "strokeDasharray", p), "%" === h && (a = a.map(function (t) {
              return t * p / 100;
            })), a = a.reverse(), e = "strokeDashoffset";
          }

          return t[e] = {
            steps: a,
            unit: h,
            pos: i,
            bgPos: n,
            diff: r
          }, t;
        }, {});
      },
      bgProps: function bgProps() {
        var e = this;
        return ["bgx", "bgy"].filter(function (t) {
          return t in e.props;
        });
      },
      covers: function covers(t, e) {
        return n = (i = e).style.backgroundSize, r = "cover" === Ve(Ve(i, "backgroundSize", ""), "backgroundSize"), i.style.backgroundSize = n, r;
        var i, n, r;
      }
    },
    disconnected: function disconnected() {
      delete this._image;
    },
    update: {
      read: function read(t) {
        var h = this;

        if (t.active = this.matchMedia, t.active) {
          if (!t.image && this.covers && this.bgProps.length) {
            var e = Ve(this.$el, "backgroundImage").replace(/^none|url\(["']?(.+?)["']?\)$/, "$1");

            if (e) {
              var i = new Image();
              i.src = e, (t.image = i).naturalWidth || (i.onload = function () {
                return h.$update();
              });
            }
          }

          var n = t.image;

          if (n && n.naturalWidth) {
            var u = {
              width: this.$el.offsetWidth,
              height: this.$el.offsetHeight
            },
                c = {
              width: n.naturalWidth,
              height: n.naturalHeight
            },
                l = rt.cover(c, u);
            this.bgProps.forEach(function (t) {
              var e = h.props[t],
                  i = e.diff,
                  n = e.bgPos,
                  r = e.steps,
                  o = "bgy" === t ? "height" : "width",
                  s = l[o] - u[o];
              if (s < i) u[o] = l[o] + i - s;else if (i < s) {
                var a = u[o] / wi(n, o, h.$el);
                a && (h.props[t].steps = r.map(function (t) {
                  return t - (s - i) / a;
                }));
              }
              l = rt.cover(c, u);
            }), t.dim = l;
          }
        }
      },
      write: function write(t) {
        var e = t.dim;
        t.active ? e && Ve(this.$el, {
          backgroundSize: e.width + "px " + e.height + "px",
          backgroundRepeat: "no-repeat"
        }) : Ve(this.$el, {
          backgroundSize: "",
          backgroundRepeat: ""
        });
      },
      events: ["resize"]
    },
    methods: {
      reset: function reset() {
        var i = this;
        J(this.getCss(0), function (t, e) {
          return Ve(i.$el, e, "");
        });
      },
      getCss: function getCss(l) {
        var d = this.props;
        return Object.keys(d).reduce(function (t, e) {
          var i = d[e],
              n = i.steps,
              r = i.unit,
              o = i.pos,
              s = function (t, e, i) {
            void 0 === i && (i = 2);
            var n = Zr(t, e),
                r = n[0],
                o = n[1],
                s = n[2];
            return (B(r) ? r + Math.abs(r - o) * s * (r < o ? 1 : -1) : +o).toFixed(i);
          }(n, l);

          switch (e) {
            case "x":
            case "y":
              r = r || "px", t.transform += " translate" + p(e) + "(" + j(s).toFixed("px" === r ? 0 : 2) + r + ")";
              break;

            case "rotate":
              r = r || "deg", t.transform += " rotate(" + (s + r) + ")";
              break;

            case "scale":
              t.transform += " scale(" + s + ")";
              break;

            case "bgy":
            case "bgx":
              t["background-position-" + e[2]] = "calc(" + o + " + " + s + "px)";
              break;

            case "color":
            case "backgroundColor":
            case "borderColor":
              var a = Zr(n, l),
                  h = a[0],
                  u = a[1],
                  c = a[2];
              t[e] = "rgba(" + h.map(function (t, e) {
                return t += c * (u[e] - t), 3 === e ? j(t) : parseInt(t, 10);
              }).join(",") + ")";
              break;

            case "blur":
              r = r || "px", t.filter += " blur(" + (s + r) + ")";
              break;

            case "hue":
              r = r || "deg", t.filter += " hue-rotate(" + (s + r) + ")";
              break;

            case "fopacity":
              r = r || "%", t.filter += " opacity(" + (s + r) + ")";
              break;

            case "grayscale":
            case "invert":
            case "saturate":
            case "sepia":
              r = r || "%", t.filter += " " + e + "(" + (s + r) + ")";
              break;

            default:
              t[e] = s;
          }

          return t;
        }, {
          transform: "",
          filter: ""
        });
      }
    }
  };

  function Zr(t, e) {
    var i = t.length - 1,
        n = Math.min(Math.floor(i * e), i - 1),
        r = t.slice(n, n + 2);
    return r.push(1 === e ? 1 : e % (1 / i) * i), r;
  }

  var Qr = {
    mixins: [Jr],
    props: {
      target: String,
      viewport: Number,
      easing: Number
    },
    data: {
      target: !1,
      viewport: 1,
      easing: 1
    },
    computed: {
      target: function target(t, e) {
        var i = t.target;
        return function t(e) {
          return e ? "offsetTop" in e ? e : t(e.parentNode) : document.body;
        }(i && xt(i, e) || e);
      }
    },
    update: {
      read: function read(t, e) {
        var i = t.percent;

        if ("scroll" !== e && (i = !1), t.active) {
          var n,
              r,
              o = i;
          return n = Hi(this.target) / (this.viewport || 1), r = this.easing, {
            percent: i = tt(n * (1 - (r - r * n))),
            style: o !== i && this.getCss(i)
          };
        }
      },
      write: function write(t) {
        var e = t.style;
        t.active ? e && Ve(this.$el, e) : this.reset();
      },
      events: ["scroll", "resize"]
    }
  };
  var to = {
    update: {
      write: function write() {
        if (!this.stack.length && !this.dragging) {
          var t = this.getValidIndex(this.index);
          ~this.prevIndex && this.index === t || this.show(t);
        }
      },
      events: ["resize"]
    }
  };

  function eo(t, e, i) {
    var n,
        r = ro(t, e);
    return i ? r - (n = t, si(e).width / 2 - si(n).width / 2) : Math.min(r, io(e));
  }

  function io(t) {
    return Math.max(0, no(t) - si(t).width);
  }

  function no(t) {
    return so(t).reduce(function (t, e) {
      return si(e).width + t;
    }, 0);
  }

  function ro(t, e) {
    return (hi(t).left + (ct ? si(t).width - si(e).width : 0)) * (ct ? -1 : 1);
  }

  function oo(t, e, i) {
    Kt(t, Jt(e, !1, !1, i));
  }

  function so(t) {
    return Ut(t);
  }

  var ao = {
    mixins: [hn, jr, to],
    props: {
      center: Boolean,
      sets: Boolean
    },
    data: {
      center: !1,
      sets: !1,
      attrItem: "uk-slider-item",
      selList: ".uk-slider-items",
      selNav: ".uk-slider-nav",
      clsContainer: "uk-slider-container",
      Transitioner: function Transitioner(r, n, o, t) {
        var e = t.center,
            s = t.easing,
            a = t.list,
            h = new oe(),
            i = r ? eo(r, a, e) : eo(n, a, e) + si(n).width * o,
            u = n ? eo(n, a, e) : i + si(r).width * o * (ct ? -1 : 1);
        return {
          dir: o,
          show: function show(t, e, i) {
            void 0 === e && (e = 0);
            var n = i ? "linear" : s;
            return t -= Math.round(t * tt(e, -1, 1)), this.translate(e), r && this.updateTranslates(), e = r ? e : tt(e, 0, 1), oo(this.getItemIn(), "itemin", {
              percent: e,
              duration: t,
              timing: n,
              dir: o
            }), r && oo(this.getItemIn(!0), "itemout", {
              percent: 1 - e,
              duration: t,
              timing: n,
              dir: o
            }), Ze.start(a, {
              transform: Or(-u * (ct ? -1 : 1), "px")
            }, t, n).then(h.resolve, et), h.promise;
          },
          stop: function stop() {
            return Ze.stop(a);
          },
          cancel: function cancel() {
            Ze.cancel(a);
          },
          reset: function reset() {
            Ve(a, "transform", "");
          },
          forward: function forward(t, e) {
            return void 0 === e && (e = this.percent()), Ze.cancel(a), this.show(t, e, !0);
          },
          translate: function translate(t) {
            var e = this.getDistance() * o * (ct ? -1 : 1);
            Ve(a, "transform", Or(tt(e - e * t - u, -no(a), si(a).width) * (ct ? -1 : 1), "px")), this.updateTranslates(), r && (t = tt(t, -1, 1), oo(this.getItemIn(), "itemtranslatein", {
              percent: t,
              dir: o
            }), oo(this.getItemIn(!0), "itemtranslateout", {
              percent: 1 - t,
              dir: o
            }));
          },
          percent: function percent() {
            return Math.abs((Ve(a, "transform").split(",")[4] * (ct ? -1 : 1) + i) / (u - i));
          },
          getDistance: function getDistance() {
            return Math.abs(u - i);
          },
          getItemIn: function getItemIn(t) {
            void 0 === t && (t = !1);
            var e = this.getActives(),
                i = Z(so(a), "offsetLeft"),
                n = pe(i, e[0 < o * (t ? -1 : 1) ? e.length - 1 : 0]);
            return ~n && i[n + (r && !t ? o : 0)];
          },
          getActives: function getActives() {
            var i = eo(r || n, a, e);
            return Z(so(a).filter(function (t) {
              var e = ro(t, a);
              return i <= e && e + si(t).width <= si(a).width + i;
            }), "offsetLeft");
          },
          updateTranslates: function updateTranslates() {
            var i = this.getActives();
            so(a).forEach(function (t) {
              var e = b(i, t);
              oo(t, "itemtranslate" + (e ? "in" : "out"), {
                percent: e ? 1 : 0,
                dir: t.offsetLeft <= n.offsetLeft ? 1 : -1
              });
            });
          }
        };
      }
    },
    computed: {
      avgWidth: function avgWidth() {
        return no(this.list) / this.length;
      },
      finite: function finite(t) {
        return t.finite || Math.ceil(no(this.list)) < si(this.list).width + so(this.list).reduce(function (t, e) {
          return Math.max(t, si(e).width);
        }, 0) + this.center;
      },
      maxIndex: function maxIndex() {
        if (!this.finite || this.center && !this.sets) return this.length - 1;
        if (this.center) return K(this.sets);
        Ve(this.slides, "order", "");

        for (var t = io(this.list), e = this.length; e--;) {
          if (ro(this.list.children[e], this.list) < t) return Math.min(e + 1, this.length - 1);
        }

        return 0;
      },
      sets: function sets(t) {
        var o = this,
            e = t.sets,
            s = si(this.list).width / (this.center ? 2 : 1),
            a = 0,
            h = s,
            u = 0;
        return !O(e = e && this.slides.reduce(function (t, e, i) {
          var n = si(e).width;

          if (a < u + n && (!o.center && i > o.maxIndex && (i = o.maxIndex), !b(t, i))) {
            var r = o.slides[i + 1];
            o.center && r && n < h - si(r).width / 2 ? h -= n : (h = s, t.push(i), a = u + s + (o.center ? n / 2 : 0));
          }

          return u += n, t;
        }, [])) && e;
      },
      transitionOptions: function transitionOptions() {
        return {
          center: this.center,
          list: this.list
        };
      }
    },
    connected: function connected() {
      He(this.$el, this.clsContainer, !_e("." + this.clsContainer, this.$el));
    },
    update: {
      write: function write() {
        var i = this;
        Me("[" + this.attrItem + "],[data-" + this.attrItem + "]", this.$el).forEach(function (t) {
          var e = ht(t, i.attrItem);
          i.maxIndex && He(t, "uk-hidden", P(e) && (i.sets && !b(i.sets, j(e)) || e > i.maxIndex));
        }), !this.length || this.dragging || this.stack.length || (this.reorder(), this._translate(1));

        var e = this._getTransitioner(this.index).getActives();

        this.slides.forEach(function (t) {
          return He(t, i.clsActive, b(e, t));
        }), this.sets && !b(this.sets, j(this.index)) || this.slides.forEach(function (t) {
          return He(t, i.clsActivated, b(e, t));
        });
      },
      events: ["resize"]
    },
    events: {
      beforeitemshow: function beforeitemshow(t) {
        !this.dragging && this.sets && this.stack.length < 2 && !b(this.sets, this.index) && (this.index = this.getValidIndex());
        var e = Math.abs(this.index - this.prevIndex + (0 < this.dir && this.index < this.prevIndex || this.dir < 0 && this.index > this.prevIndex ? (this.maxIndex + 1) * this.dir : 0));

        if (!this.dragging && 1 < e) {
          for (var i = 0; i < e; i++) {
            this.stack.splice(1, 0, 0 < this.dir ? "next" : "previous");
          }

          t.preventDefault();
        } else this.duration = Wr(this.avgWidth / this.velocity) * (si(this.dir < 0 || !this.slides[this.prevIndex] ? this.slides[this.index] : this.slides[this.prevIndex]).width / this.avgWidth), this.reorder();
      },
      itemshow: function itemshow() {
        ~this.prevIndex && ze(this._getTransitioner().getItemIn(), this.clsActive);
      }
    },
    methods: {
      reorder: function reorder() {
        var i = this;
        if (this.finite) Ve(this.slides, "order", "");else {
          var n = 0 < this.dir && this.slides[this.prevIndex] ? this.prevIndex : this.index;
          if (this.slides.forEach(function (t, e) {
            return Ve(t, "order", 0 < i.dir && e < n ? 1 : i.dir < 0 && e >= i.index ? -1 : "");
          }), this.center) for (var t = this.slides[n], e = si(this.list).width / 2 - si(t).width / 2, r = 0; 0 < e;) {
            var o = this.getIndex(--r + n, n),
                s = this.slides[o];
            Ve(s, "order", n < o ? -2 : -1), e -= si(s).width;
          }
        }
      },
      getValidIndex: function getValidIndex(t, e) {
        if (void 0 === t && (t = this.index), void 0 === e && (e = this.prevIndex), t = this.getIndex(t, e), !this.sets) return t;
        var i;

        do {
          if (b(this.sets, t)) return t;
          i = t, t = this.getIndex(t + this.dir, e);
        } while (t !== i);

        return t;
      }
    }
  },
      ho = {
    mixins: [Jr],
    data: {
      selItem: "!li"
    },
    computed: {
      item: function item(t, e) {
        return xt(t.selItem, e);
      }
    },
    events: [{
      name: "itemshown",
      self: !0,
      el: function el() {
        return this.item;
      },
      handler: function handler() {
        Ve(this.$el, this.getCss(.5));
      }
    }, {
      name: "itemin itemout",
      self: !0,
      el: function el() {
        return this.item;
      },
      handler: function handler(t) {
        var e = t.type,
            i = t.detail,
            n = i.percent,
            r = i.duration,
            o = i.timing,
            s = i.dir;
        Ze.cancel(this.$el), Ve(this.$el, this.getCss(co(e, s, n))), Ze.start(this.$el, this.getCss(uo(e) ? .5 : 0 < s ? 1 : 0), r, o)["catch"](et);
      }
    }, {
      name: "transitioncanceled transitionend",
      self: !0,
      el: function el() {
        return this.item;
      },
      handler: function handler() {
        Ze.cancel(this.$el);
      }
    }, {
      name: "itemtranslatein itemtranslateout",
      self: !0,
      el: function el() {
        return this.item;
      },
      handler: function handler(t) {
        var e = t.type,
            i = t.detail,
            n = i.percent,
            r = i.dir;
        Ze.cancel(this.$el), Ve(this.$el, this.getCss(co(e, r, n)));
      }
    }]
  };

  function uo(t) {
    return u(t, "in");
  }

  function co(t, e, i) {
    return i /= 2, uo(t) ? e < 0 ? 1 - i : i : e < 0 ? i : 1 - i;
  }

  var lo,
      fo,
      po = G({}, Br, {
    fade: {
      show: function show() {
        return [{
          opacity: 0,
          zIndex: 0
        }, {
          zIndex: -1
        }];
      },
      percent: function percent(t) {
        return 1 - Ve(t, "opacity");
      },
      translate: function translate(t) {
        return [{
          opacity: 1 - t,
          zIndex: 0
        }, {
          zIndex: -1
        }];
      }
    },
    scale: {
      show: function show() {
        return [{
          opacity: 0,
          transform: Hr(1.5),
          zIndex: 0
        }, {
          zIndex: -1
        }];
      },
      percent: function percent(t) {
        return 1 - Ve(t, "opacity");
      },
      translate: function translate(t) {
        return [{
          opacity: 1 - t,
          transform: Hr(1 + .5 * t),
          zIndex: 0
        }, {
          zIndex: -1
        }];
      }
    },
    pull: {
      show: function show(t) {
        return t < 0 ? [{
          transform: Or(30),
          zIndex: -1
        }, {
          transform: Or(),
          zIndex: 0
        }] : [{
          transform: Or(-100),
          zIndex: 0
        }, {
          transform: Or(),
          zIndex: -1
        }];
      },
      percent: function percent(t, e, i) {
        return i < 0 ? 1 - Pr(e) : Pr(t);
      },
      translate: function translate(t, e) {
        return e < 0 ? [{
          transform: Or(30 * t),
          zIndex: -1
        }, {
          transform: Or(-100 * (1 - t)),
          zIndex: 0
        }] : [{
          transform: Or(100 * -t),
          zIndex: 0
        }, {
          transform: Or(30 * (1 - t)),
          zIndex: -1
        }];
      }
    },
    push: {
      show: function show(t) {
        return t < 0 ? [{
          transform: Or(100),
          zIndex: 0
        }, {
          transform: Or(),
          zIndex: -1
        }] : [{
          transform: Or(-30),
          zIndex: -1
        }, {
          transform: Or(),
          zIndex: 0
        }];
      },
      percent: function percent(t, e, i) {
        return 0 < i ? 1 - Pr(e) : Pr(t);
      },
      translate: function translate(t, e) {
        return e < 0 ? [{
          transform: Or(100 * t),
          zIndex: 0
        }, {
          transform: Or(-30 * (1 - t)),
          zIndex: -1
        }] : [{
          transform: Or(-30 * t),
          zIndex: -1
        }, {
          transform: Or(100 * (1 - t)),
          zIndex: 0
        }];
      }
    }
  }),
      mo = {
    mixins: [hn, Vr, to],
    props: {
      ratio: String,
      minHeight: Number,
      maxHeight: Number
    },
    data: {
      ratio: "16:9",
      minHeight: !1,
      maxHeight: !1,
      selList: ".uk-slideshow-items",
      attrItem: "uk-slideshow-item",
      selNav: ".uk-slideshow-nav",
      Animations: po
    },
    update: {
      read: function read() {
        var t = this.ratio.split(":").map(Number),
            e = t[0],
            i = t[1];
        return i = i * this.list.offsetWidth / e || 0, this.minHeight && (i = Math.max(this.minHeight, i)), this.maxHeight && (i = Math.min(this.maxHeight, i)), {
          height: i - fi(this.list, "height", "content-box")
        };
      },
      write: function write(t) {
        var e = t.height;
        0 < e && Ve(this.list, "minHeight", e);
      },
      events: ["resize"]
    }
  },
      go = {
    mixins: [hn, Ar],
    props: {
      group: String,
      threshold: Number,
      clsItem: String,
      clsPlaceholder: String,
      clsDrag: String,
      clsDragState: String,
      clsBase: String,
      clsNoDrag: String,
      clsEmpty: String,
      clsCustom: String,
      handle: String
    },
    data: {
      group: !1,
      threshold: 5,
      clsItem: "uk-sortable-item",
      clsPlaceholder: "uk-sortable-placeholder",
      clsDrag: "uk-sortable-drag",
      clsDragState: "uk-drag",
      clsBase: "uk-sortable",
      clsNoDrag: "uk-sortable-nodrag",
      clsEmpty: "uk-sortable-empty",
      clsCustom: "",
      handle: !1,
      pos: {}
    },
    created: function created() {
      var i = this;
      ["init", "start", "move", "end"].forEach(function (t) {
        var e = i[t];

        i[t] = function (t) {
          G(i.pos, re(t)), e(t);
        };
      });
    },
    events: {
      name: pt,
      passive: !1,
      handler: "init"
    },
    computed: {
      target: function target() {
        return (this.$el.tBodies || [this.$el])[0];
      },
      items: function items() {
        return Ut(this.target);
      },
      isEmpty: {
        get: function get() {
          return O(this.items);
        },
        watch: function watch(t) {
          He(this.target, this.clsEmpty, t);
        },
        immediate: !0
      },
      handles: {
        get: function get(t, e) {
          var i = t.handle;
          return i ? Me(i, e) : this.items;
        },
        watch: function watch(t, e) {
          Ve(e, {
            touchAction: "",
            userSelect: ""
          }), Ve(t, {
            touchAction: ft ? "none" : "",
            userSelect: "none"
          });
        },
        immediate: !0
      }
    },
    update: {
      write: function write() {
        if (this.drag && Bt(this.placeholder)) {
          var t = this.pos,
              e = t.x,
              i = t.y,
              n = this.origin,
              r = n.offsetTop,
              o = n.offsetLeft,
              s = this.drag,
              a = s.offsetHeight,
              h = s.offsetWidth,
              u = si(window),
              c = u.right,
              l = u.bottom,
              d = document.elementFromPoint(e, i);
          Ve(this.drag, {
            top: tt(i - r, 0, l - a),
            left: tt(e - o, 0, c - h)
          });
          var f = this.getSortable(d),
              p = this.getSortable(this.placeholder),
              m = f !== p;

          if (f && !Rt(d, this.placeholder) && (!m || f.group && f.group === p.group)) {
            if (d = f.target === d.parentNode && d || f.items.filter(function (t) {
              return Rt(d, t);
            })[0], m) p.remove(this.placeholder);else if (!d) return;
            f.insert(this.placeholder, d), b(this.touched, f) || this.touched.push(f);
          }
        }
      },
      events: ["move"]
    },
    methods: {
      init: function init(t) {
        var e = t.target,
            i = t.button,
            n = t.defaultPrevented,
            r = this.items.filter(function (t) {
          return Rt(e, t);
        })[0];
        !r || n || 0 < i || Wt(e) || Rt(e, "." + this.clsNoDrag) || this.handle && !Rt(e, this.handle) || (t.preventDefault(), this.touched = [this], this.placeholder = r, this.origin = G({
          target: e,
          index: pe(r)
        }, this.pos), Yt(document, mt, this.move), Yt(document, gt, this.end), this.threshold || this.start(t));
      },
      start: function start(t) {
        var e, i, n;
        this.drag = (e = this.$container, i = this.placeholder, ot(n = we(e, i.outerHTML.replace(/(^<)(?:li|tr)|(?:li|tr)(\/>$)/g, "$1div$2")), "style", ot(n, "style") + ";margin:0!important"), Ve(n, G({
          boxSizing: "border-box",
          width: i.offsetWidth,
          height: i.offsetHeight,
          overflow: "hidden"
        }, Ve(i, ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom"]))), ci(n.firstElementChild, ci(i.firstElementChild)), n);
        var r,
            o,
            s = this.placeholder.getBoundingClientRect(),
            a = s.left,
            h = s.top;
        G(this.origin, {
          offsetLeft: this.pos.x - a,
          offsetTop: this.pos.y - h
        }), ze(this.drag, this.clsDrag, this.clsCustom), ze(this.placeholder, this.clsPlaceholder), ze(this.items, this.clsItem), ze(document.documentElement, this.clsDragState), Kt(this.$el, "start", [this, this.placeholder]), r = this.pos, o = Date.now(), lo = setInterval(function () {
          var t = r.x,
              a = r.y;
          a += window.pageYOffset;
          var h = .3 * (Date.now() - o);
          o = Date.now(), Li(document.elementFromPoint(t, r.y)).some(function (t) {
            var e = t.scrollTop,
                i = t.scrollHeight,
                n = si(Fi(t)),
                r = n.top,
                o = n.bottom,
                s = n.height;
            if (r < a && a < r + 30) e -= h;else {
              if (!(a < o && o - 30 < a)) return;
              e += h;
            }
            if (0 < e && e < i - s) return Pi(t, e), !0;
          });
        }, 15), this.move(t);
      },
      move: function move(t) {
        this.drag ? this.$emit("move") : (Math.abs(this.pos.x - this.origin.x) > this.threshold || Math.abs(this.pos.y - this.origin.y) > this.threshold) && this.start(t);
      },
      end: function end(t) {
        if (Xt(document, mt, this.move), Xt(document, gt, this.end), Xt(window, "scroll", this.scroll), this.drag) {
          clearInterval(lo);
          var e = this.getSortable(this.placeholder);
          this === e ? this.origin.index !== pe(this.placeholder) && Kt(this.$el, "moved", [this, this.placeholder]) : (Kt(e.$el, "added", [e, this.placeholder]), Kt(this.$el, "removed", [this, this.placeholder])), Kt(this.$el, "stop", [this, this.placeholder]), ke(this.drag), this.drag = null;
          var i = this.touched.map(function (t) {
            return t.clsPlaceholder + " " + t.clsItem;
          }).join(" ");
          this.touched.forEach(function (t) {
            return De(t.items, i);
          }), De(document.documentElement, this.clsDragState);
        } else "touchend" === t.type && t.target.click();
      },
      insert: function insert(i, n) {
        var r = this;
        ze(this.items, this.clsItem);

        function t() {
          var t, e;
          n ? (!Rt(i, r.target) || (e = n, (t = i).parentNode === e.parentNode && pe(t) > pe(e)) ? be : xe)(n, i) : we(r.target, i);
        }

        this.animation ? this.animate(t) : t();
      },
      remove: function remove(t) {
        Rt(t, this.target) && (this.animation ? this.animate(function () {
          return ke(t);
        }) : ke(t));
      },
      getSortable: function getSortable(t) {
        return t && (this.$getComponent(t, "sortable") || this.getSortable(t.parentNode));
      }
    }
  };
  var vo = [],
      wo = {
    mixins: [or, un, vn],
    args: "title",
    props: {
      delay: Number,
      title: String
    },
    data: {
      pos: "top",
      title: "",
      delay: 0,
      animation: ["uk-animation-scale-up"],
      duration: 100,
      cls: "uk-active",
      clsPos: "uk-tooltip"
    },
    beforeConnect: function beforeConnect() {
      this._hasTitle = st(this.$el, "title"), ot(this.$el, {
        title: "",
        "aria-expanded": !1
      });
    },
    disconnected: function disconnected() {
      this.hide(), ot(this.$el, {
        title: this._hasTitle ? this.title : null,
        "aria-expanded": null
      });
    },
    methods: {
      show: function show() {
        var e = this;
        !this.isActive() && this.title && (vo.forEach(function (t) {
          return t.hide();
        }), vo.push(this), this._unbind = Yt(document, gt, function (t) {
          return !Rt(t.target, e.$el) && e.hide();
        }), clearTimeout(this.showTimer), this.showTimer = setTimeout(this._show, this.delay));
      },
      hide: function hide() {
        var t = this;
        this.isActive() && !Nt(this.$el, "input:focus") && this.toggleElement(this.tooltip, !1, !1).then(function () {
          vo.splice(vo.indexOf(t), 1), clearTimeout(t.showTimer), t.tooltip = ke(t.tooltip), t._unbind();
        });
      },
      _show: function _show() {
        var e = this;
        this.tooltip = we(this.container, '<div class="' + this.clsPos + '"> <div class="' + this.clsPos + '-inner">' + this.title + "</div> </div>"), Yt(this.tooltip, "toggled", function () {
          var t = e.isToggled(e.tooltip);
          ot(e.$el, "aria-expanded", t), t && (e.positionAt(e.tooltip, e.$el), e.origin = "y" === e.getAxis() ? vi(e.dir) + "-" + e.align : e.align + "-" + vi(e.dir));
        }), this.toggleElement(this.tooltip, !0);
      },
      isActive: function isActive() {
        return b(vo, this);
      }
    },
    events: ((fo = {
      focus: "show",
      blur: "hide"
    })[vt + " " + wt] = function (t) {
      ne(t) || (t.type === vt ? this.show() : this.hide());
    }, fo[pt] = function (t) {
      ne(t) && (this.isActive() ? this.hide() : this.show());
    }, fo)
  },
      bo = {
    props: {
      allow: String,
      clsDragover: String,
      concurrent: Number,
      maxSize: Number,
      method: String,
      mime: String,
      msgInvalidMime: String,
      msgInvalidName: String,
      msgInvalidSize: String,
      multiple: Boolean,
      name: String,
      params: Object,
      type: String,
      url: String
    },
    data: {
      allow: !1,
      clsDragover: "uk-dragover",
      concurrent: 1,
      maxSize: 0,
      method: "POST",
      mime: !1,
      msgInvalidMime: "Invalid File Type: %s",
      msgInvalidName: "Invalid File Name: %s",
      msgInvalidSize: "Invalid File Size: %s Kilobytes Max",
      multiple: !1,
      name: "files[]",
      params: {},
      type: "",
      url: "",
      abort: et,
      beforeAll: et,
      beforeSend: et,
      complete: et,
      completeAll: et,
      error: et,
      fail: et,
      load: et,
      loadEnd: et,
      loadStart: et,
      progress: et
    },
    events: {
      change: function change(t) {
        Nt(t.target, 'input[type="file"]') && (t.preventDefault(), t.target.files && this.upload(t.target.files), t.target.value = "");
      },
      drop: function drop(t) {
        yo(t);
        var e = t.dataTransfer;
        e && e.files && (De(this.$el, this.clsDragover), this.upload(e.files));
      },
      dragenter: function dragenter(t) {
        yo(t);
      },
      dragover: function dragover(t) {
        yo(t), ze(this.$el, this.clsDragover);
      },
      dragleave: function dragleave(t) {
        yo(t), De(this.$el, this.clsDragover);
      }
    },
    methods: {
      upload: function upload(t) {
        var n = this;

        if (t.length) {
          Kt(this.$el, "upload", [t]);

          for (var e = 0; e < t.length; e++) {
            if (this.maxSize && 1e3 * this.maxSize < t[e].size) return void this.fail(this.msgInvalidSize.replace("%s", this.maxSize));
            if (this.allow && !xo(this.allow, t[e].name)) return void this.fail(this.msgInvalidName.replace("%s", this.allow));
            if (this.mime && !xo(this.mime, t[e].type)) return void this.fail(this.msgInvalidMime.replace("%s", this.mime));
          }

          this.multiple || (t = [t[0]]), this.beforeAll(this, t);

          var r = function (t, e) {
            for (var i = [], n = 0; n < t.length; n += e) {
              for (var r = [], o = 0; o < e; o++) {
                r.push(t[n + o]);
              }

              i.push(r);
            }

            return i;
          }(t, this.concurrent),
              o = function o(t) {
            var e = new FormData();

            for (var i in t.forEach(function (t) {
              return e.append(n.name, t);
            }), n.params) {
              e.append(i, n.params[i]);
            }

            le(n.url, {
              data: e,
              method: n.method,
              responseType: n.type,
              beforeSend: function beforeSend(t) {
                var e = t.xhr;
                e.upload && Yt(e.upload, "progress", n.progress), ["loadStart", "load", "loadEnd", "abort"].forEach(function (t) {
                  return Yt(e, t.toLowerCase(), n[t]);
                }), n.beforeSend(t);
              }
            }).then(function (t) {
              n.complete(t), r.length ? o(r.shift()) : n.completeAll(t);
            }, function (t) {
              return n.error(t);
            });
          };

          o(r.shift());
        }
      }
    }
  };

  function xo(t, e) {
    return e.match(new RegExp("^" + t.replace(/\//g, "\\/").replace(/\*\*/g, "(\\/[^\\/]+)*").replace(/\*/g, "[^\\/]+").replace(/((?!\\))\?/g, "$1.") + "$", "i"));
  }

  function yo(t) {
    t.preventDefault(), t.stopPropagation();
  }

  var ko,
      $o,
      Io,
      So = Object.freeze({
    __proto__: null,
    Countdown: Sr,
    Filter: Nr,
    Lightbox: Yr,
    LightboxPanel: Rr,
    Notification: Gr,
    Parallax: Qr,
    Slider: ao,
    SliderParallax: ho,
    Slideshow: mo,
    SlideshowParallax: ho,
    Sortable: go,
    Tooltip: wo,
    Upload: bo
  });

  function To(t, e) {
    qi.component(e, t);
  }

  return J(Ir, To), J(So, To), qi.use(function (r) {
    fe(function () {
      var e;
      r.update(), Yt(window, "load resize", function () {
        return r.update(null, "resize");
      }), Yt(document, "loadedmetadata load", function (t) {
        var e = t.target;
        return r.update(e, "resize");
      }, !0), Yt(window, "scroll", function (t) {
        e || (e = !0, xi.write(function () {
          return e = !1;
        }), r.update(null, t.type));
      }, {
        passive: !0,
        capture: !0
      });
      var i,
          n = 0;
      Yt(document, "animationstart", function (t) {
        var e = t.target;
        (Ve(e, "animationName") || "").match(/^uk-.*(left|right)/) && (n++, Ve(document.body, "overflowX", "hidden"), setTimeout(function () {
          --n || Ve(document.body, "overflowX", "");
        }, U(Ve(e, "animationDuration")) + 100));
      }, !0), Yt(document, pt, function (t) {
        if (i && i(), ne(t)) {
          var s = re(t),
              a = "tagName" in t.target ? t.target : t.target.parentNode;
          i = Gt(document, gt + " " + bt, function (t) {
            var e = re(t),
                r = e.x,
                o = e.y;
            (a && r && 100 < Math.abs(s.x - r) || o && 100 < Math.abs(s.y - o)) && setTimeout(function () {
              var t, e, i, n;
              Kt(a, "swipe"), Kt(a, "swipe" + (t = s.x, e = s.y, i = r, n = o, Math.abs(t - i) >= Math.abs(e - n) ? 0 < t - i ? "Left" : "Right" : 0 < e - n ? "Up" : "Down"));
            });
          });
        }
      }, {
        passive: !0
      });
    });
  }), $o = (ko = qi).connect, Io = ko.disconnect, "MutationObserver" in window && xi.read(function () {
    document.body && Ce(document.body, $o);
    new MutationObserver(function (t) {
      var r = [];
      t.forEach(function (t) {
        return i = r, n = (e = t).target, void (("attributes" !== e.type ? function (t) {
          for (var e = t.addedNodes, i = t.removedNodes, n = 0; n < e.length; n++) {
            Ce(e[n], $o);
          }

          for (var r = 0; r < i.length; r++) {
            Ce(i[r], Io);
          }

          return !0;
        } : function (t) {
          var e = t.target,
              i = t.attributeName;
          if ("href" === i) return !0;
          var n = Ri(i);
          if (!(n && n in ko)) return;
          if (st(e, i)) return ko[n](e), !0;
          var r = ko.getComponent(e, n);
          if (r) return r.$destroy(), !0;
        })(e) && !i.some(function (t) {
          return t.contains(n);
        }) && i.push(n.contains ? n : n.parentNode));
        var e, i, n;
      }), r.forEach(function (t) {
        return ko.update(t);
      });
    }).observe(document, {
      childList: !0,
      subtree: !0,
      characterData: !0,
      attributes: !0
    }), ko._initialized = !0;
  }), qi;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Applications/MAMP/htdocs/datepicker/resources/js/app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/datepicker/resources/sass/app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });