(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vueCal"] = factory();
	else
		root["vueCal"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0a49":
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__("9b43");
var IObject = __webpack_require__("626a");
var toObject = __webpack_require__("4bf8");
var toLength = __webpack_require__("9def");
var asc = __webpack_require__("cd1c");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "0d58":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("ce10");
var enumBugKeys = __webpack_require__("e11e");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "1169":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("2d95");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "11e9":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("52a7");
var createDesc = __webpack_require__("4630");
var toIObject = __webpack_require__("6821");
var toPrimitive = __webpack_require__("6a99");
var has = __webpack_require__("69a8");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("9e1e") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "1495":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var anObject = __webpack_require__("cb7c");
var getKeys = __webpack_require__("0d58");

module.exports = __webpack_require__("9e1e") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "1eb2":
/***/ (function(module, exports, __webpack_require__) {

// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}


/***/ }),

/***/ "214f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hide = __webpack_require__("32e9");
var redefine = __webpack_require__("2aba");
var fails = __webpack_require__("79e5");
var defined = __webpack_require__("be13");
var wks = __webpack_require__("2b4c");

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);
  var fns = exec(defined, SYMBOL, ''[KEY]);
  var strfn = fns[0];
  var rxfn = fns[1];
  if (fails(function () {
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  })) {
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "230e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var document = __webpack_require__("7726").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "2350":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "2aba":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var has = __webpack_require__("69a8");
var SRC = __webpack_require__("ca5a")('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("8378").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "2aeb":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("cb7c");
var dPs = __webpack_require__("1495");
var enumBugKeys = __webpack_require__("e11e");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("230e")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("fab2").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "2b4c":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("5537")('wks');
var uid = __webpack_require__("ca5a");
var Symbol = __webpack_require__("7726").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "2d00":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "2d95":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "2fdb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__("5ca1");
var context = __webpack_require__("d2c8");
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__("5147")(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "32e9":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var createDesc = __webpack_require__("4630");
module.exports = __webpack_require__("9e1e") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "3dfd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"47426207-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=245b56f6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"container"},[_c('div',{staticClass:"drag-calendar",staticStyle:{"display":"block background-color: 'transparent'"}},[_c('div',{staticClass:"wrapper"},[_c('div',{ref:"monthly",staticClass:"months ui-draggable",staticStyle:{"left":"0px"},style:(_vm.monthly.phase === 'dragging' ? {pointerEvents: 'none', transition: 'none', cursor:'-webkit-grab'} : {}),attrs:{"state":"monthly"},on:{"mousedown":function($event){_vm.handleDrag($event)},"touchstart":function($event){_vm.handleDrag($event)}}},_vm._l((_vm.calendar.months),function(month){return _c('div',{staticClass:"month-cell cell",class:month.past ? 'past' : '',attrs:{"month-id":((month.fullYear) + "-" + (month.monthNumber))},on:{"click":function($event){_vm.toggleSelectMonth($event, month)}}},[_c('div',{staticClass:"date-formatted"},[_c('span',{staticClass:"cell-content month-name"},[_vm._v(_vm._s(_vm._f("abr")(_vm.MONTHS[month.monthNumber])))]),_vm._v(" "+_vm._s(month.fullYear%1000)+"\n          ")])])}))]),_c('div',{staticClass:"arrow top left",style:({visibility: _vm.monthly.realOffset === 0 ? 'hidden' : 'visible'}),on:{"click":function($event){_vm.goLeft($event, 'monthly')}}}),_c('div',{staticClass:"arrow top right",style:({visibility: _vm.monthly.realOffset <= _vm.monthly.maxOffset ? 'hidden' : 'visible'}),on:{"click":function($event){_vm.goRight($event, 'monthly')}}}),_c('div',{staticClass:"wrapper"},[_c('div',{ref:"daily",staticClass:"days ui-draggable",staticStyle:{"left":"0px"},style:(_vm.daily.phase === 'dragging' ? {pointerEvents: 'none', transition: 'none', cursor:'-webkit-grab'} : {}),attrs:{"state":"daily"},on:{"mousedown":function($event){_vm.handleDrag($event)},"touchstart":function($event){_vm.handleDrag($event)}}},_vm._l((_vm.calendar.days),function(day){return _c('div',{key:((day.fullYear) + "-" + (day.monthNumber) + "-" + (day.day)),staticClass:"cal-cell cell",class:day.day === 1 ? 'first' : '',attrs:{"date":((day.fullYear) + "-" + (day.monthNumber) + "-" + (day.day)),"month":day.monthNumber,"year":day.fullYear},on:{"click":function($event){_vm.toggleSelect($event, day)}}},[_c('div',{staticClass:"cell-content"},[_c('div',{staticClass:"day-number"},[_vm._v("\n              "+_vm._s(day.day)+"\n            ")]),_c('div',{staticClass:"day"},[_vm._v("\n              "+_vm._s(_vm._f("abr")(_vm.DAYS[day.dayOfTheWeek]))+"\n            ")])])])}))]),_c('div',{staticClass:"arrow bottom left",style:({visibility: _vm.daily.realOffset === 0 ? 'hidden' : 'visible'}),on:{"click":function($event){_vm.goLeft($event, 'daily')}}}),_c('div',{staticClass:"arrow bottom right",style:({visibility: _vm.daily.realOffset <= _vm.daily.maxOffset ? 'hidden' : 'visible'}),on:{"click":function($event){_vm.goRight($event, 'daily')}}})])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=245b56f6&scoped=true&

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/arrayWithoutHoles.js
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/iterableToArray.js
function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/toConsumableArray.js



function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.match.js
var es6_regexp_match = __webpack_require__("4917");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__("6762");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __webpack_require__("2fdb");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.find.js
var es6_array_find = __webpack_require__("7514");

// CONCATENATED MODULE: ./src/utils/filters.js
var abr = function abr(value) {
  if (!value) return '';
  return "".concat(value.slice(0, 3).toUpperCase());
};
// CONCATENATED MODULE: ./src/utils/CONSTANTS.js
var language = {
  FR: {
    DAYS: ['DIMANCHE', 'LUNDI', 'MARDI', 'MERCREDI', 'JEUDI', 'VENDREDI', 'SAMEDI'],
    MONTHS: ['JANVIER', 'FÉVRIER', 'MARS', 'AVRIL', 'MAI', 'JUIN', 'JUILLET', 'AOÛT', 'SEPTEMBRE', 'OCTOBRE', 'NOVEMBRE', 'DÉCEMBRE']
  },
  EN: {
    DAYS: ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'],
    MONTHS: ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER']
  }
};
// CONCATENATED MODULE: ./src/utils/buildCalendar.js

var TODAY = new Date();
var gWeekDay = function gWeekDay(date) {
  return date.getDay();
};
var gDay = function gDay(date) {
  return date.getDate();
};
var gMonth = function gMonth(date) {
  return date.getMonth();
};
var gYear = function gYear(date) {
  return date.getFullYear();
};
function computeMonthFromDays(NUMBER_OF_DAYS) {
  var date = new Date(gYear(TODAY), gMonth(TODAY), gDay(TODAY) + NUMBER_OF_DAYS);
  var NUMBER_OF_MONTHS = (gYear(date) - gYear(TODAY)) * 12 + gMonth(date) - gMonth(TODAY);
  return NUMBER_OF_MONTHS;
}
function computeDaysFromMonths(NUMBER_OF_MONTH) {
  var NUMBER_OF_DAYS = (Date.UTC(gYear(TODAY), gMonth(TODAY) + NUMBER_OF_MONTH) - Date.UTC(gYear(TODAY), gMonth(TODAY))) / (1000 * 60 * 60 * 24);
  return NUMBER_OF_DAYS;
}
function createDaysArray(NUMBER_OF_DAYS, fullMonths) {
  var currentConstructorDate = new Date();
  var days = [];

  var splitDate = function splitDate(date) {
    return {
      dayOfTheWeek: gWeekDay(date),
      day: gDay(date),
      monthNumber: gMonth(date),
      fullYear: gYear(date)
    };
  };

  for (var i = 0; i < NUMBER_OF_DAYS; i++) {
    var date = splitDate(currentConstructorDate);
    days.push(date);
    currentConstructorDate = new Date(date.fullYear, date.monthNumber, date.day + 1);
  }

  if (fullMonths) {
    while (gMonth(currentConstructorDate) === days[days.length - 1].monthNumber) {
      var _date = splitDate(currentConstructorDate);

      days.push(_date);
      currentConstructorDate = new Date(_date.fullYear, _date.monthNumber, _date.day + 1);
    }
  }

  return days;
}
function createMonthsArray(NUMBER_OF_MONTHS) {
  var currentConstructorMonth = new Date();
  var months = [];

  for (var i = 0; i <= NUMBER_OF_MONTHS; i++) {
    var date = {
      day: i === 0 ? gDay(currentConstructorMonth) : 1,
      monthNumber: gMonth(currentConstructorMonth),
      fullYear: gYear(currentConstructorMonth)
    };
    months.push({
      monthNumber: date.monthNumber,
      fullYear: date.fullYear
    });
    currentConstructorMonth = new Date(date.fullYear, date.monthNumber + 1, date.day);
  }

  return months;
}
function createPrependArray(PREPEND_MONTHS) {
  var prepended = [{
    fullYear: gYear(TODAY),
    monthNumber: gMonth(TODAY)
  }];

  for (var i = 0; i < PREPEND_MONTHS; i++) {
    var year = prepended[0].fullYear;
    var index = prepended[0].monthNumber - 1;

    if (index === -1) {
      index = 11;
      year--;
    }

    prepended.unshift({
      monthNumber: index,
      fullYear: year,
      past: true
    });
  }

  prepended.pop();
  return prepended;
}
function buildCalendar(NUMBER_OF_DAYS, NUMBER_OF_MONTHS, PREPEND_MONTHS, fullMonths) {
  if (NUMBER_OF_MONTHS !== 12) NUMBER_OF_DAYS = computeDaysFromMonths(NUMBER_OF_MONTHS);else if (NUMBER_OF_DAYS !== 365) NUMBER_OF_MONTHS = computeMonthFromDays(NUMBER_OF_DAYS);
  var calendar = {
    days: createDaysArray(NUMBER_OF_DAYS, fullMonths),
    months: _toConsumableArray(createPrependArray(PREPEND_MONTHS)).concat(_toConsumableArray(createMonthsArray(NUMBER_OF_MONTHS)))
  };
  return calendar;
}
// CONCATENATED MODULE: ./src/utils/props.js

/* harmony default export */ var props = ({
  lang: {
    type: String,
    enum: ['EN', 'FR'],
    default: 'EN'
  },
  days: {
    type: Number,
    default: 365
  },
  months: {
    type: Number,
    default: 12
  },
  prepended: {
    type: Number,
    default: 1
  },
  selected: {
    type: Object,
    default: null
  },
  fullMonths: {
    type: Boolean,
    default: false
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js&






//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var Appvue_type_script_lang_js_ = ({
  name: 'VueCal',
  filters: {
    abr: abr
  },
  props: props,
  computed: {
    currentMonth: function currentMonth() {
      var past = this.daily.pastBreakPoints;
      var future = this.daily.monthBreakPoints;
      var off = Math.abs(this.daily.realOffset) + this.$refs.monthly.parentNode.clientWidth / 2;

      while (off <= past[past.length - 1].offset) {
        future.unshift(past.pop());
        this.toggleSelectMonth(null, past[past.length - 1]);
      }

      while (future.length > 0 && off >= future[0].offset) {
        this.toggleSelectMonth(null, future[0]);
        past.push(future.shift());
      }

      return past[past.length - 1];
    }
  },
  data: function data() {
    return {
      NUMBER_OF_DAYS: this.days,
      NUMBER_OF_MONTHS: this.months,
      PREPEND_MONTHS: this.prepended,
      DAYS: language[this.lang].DAYS,
      MONTHS: language[this.lang].MONTHS,
      selectedDate: this.selected,
      selectedMonth: null,
      calendar: {
        months: [],
        days: []
      },
      monthly: {
        phase: 'sleep',
        startX: 0,
        currentOffset: 0,
        initLeft: 0,
        realOffset: 0,
        maxOffset: 0
      },
      daily: {
        monthBreakPoints: [],
        pastBreakPoints: [{
          offset: 0,
          monthNumber: new Date().getMonth(),
          fullYear: new Date().getFullYear()
        }],
        phase: 'sleep',
        startX: 0,
        currentOffset: 0,
        initLeft: 0,
        realOffset: 0,
        maxOffset: 0
      }
    };
  },
  methods: {
    goLeft: function goLeft(e, state) {
      if (this[state].realOffset >= 0) return;
      var elem = e.target.parentNode.querySelector('.ui-draggable');
      var cell = elem.firstChild.firstChild;
      this[state].realOffset = this[state].realOffset + Math.floor(elem.clientWidth / cell.clientWidth) * cell.clientWidth;
      if (this[state].realOffset > 0) this[state].realOffset = 0;
      this.$refs[state].style.left = "".concat(this[state].realOffset, "px");
      this.currentMonth;
    },
    goRight: function goRight(e, state) {
      var elem = e.target.parentNode.querySelector('.ui-draggable');
      var cell = elem.firstChild.firstChild;
      this[state].realOffset = this[state].realOffset - Math.floor(elem.clientWidth / cell.clientWidth) * cell.clientWidth;
      if (this[state].realOffset < this[state].maxOffset) this[state].realOffset = this[state].maxOffset;
      this.$refs[state].style.left = "".concat(this[state].realOffset, "px");
      this.currentMonth;
    },
    handleDrag: function handleDrag(e) {
      var state;

      if (e.type === 'mouseup' || e.type === 'mouseleave' || e.type === 'touchend') {
        document.body.removeEventListener('mousemove', this.handleDrag, false);
        document.body.removeEventListener('touchmove', this.handleDrag, false);
        this.daily.phase = 'sleep';
        this.monthly.phase = 'sleep';
        return true;
      }

      if (this.daily.phase !== 'sleep') state = this.daily;else if (this.monthly.phase !== 'sleep') state = this.monthly;else {
        state = this["".concat(e.path.find(function (el) {
          return el.classList.contains('ui-draggable');
        }).getAttribute('state'))];
      }

      if (e.type === 'mousedown' && e.button === 0 || e.type === 'touchstart') {
        document.body.addEventListener('mousemove', this.handleDrag, false);
        document.body.addEventListener('touchmove', this.handleDrag, false);
        state.phase = 'listen';
        state.startX = e.screenX || e.touches[0].screenX;
        var row = e.path.find(function (el) {
          return el.className.includes('ui-draggable');
        });
        state.style = row.style;
        state.initLeft = Number(state.style.left.match(/-?[0-9]+/g)[0]);
      }

      if (e.type === 'mousemove' || e.type === 'touchmove') {
        console.log(state.style, state);
        state.phase = 'dragging';
        state.currentOffset = (e.screenX || e.touches[0].screenX) - state.startX;
        state.realOffset = state.initLeft + state.currentOffset;

        if (Math.abs(state.realOffset) > Math.abs(state.maxOffset)) {
          state.realOffset = state.maxOffset;
        }

        state.style.left = state.realOffset <= 0 ? "".concat(state.realOffset, "px") : '0px';
        this.currentMonth;
      }
    },
    toggleSelectMonth: function toggleSelectMonth(e, month) {
      var exist = this.$refs.monthly.querySelector('.month-cell[selected="true"]');
      if (exist) exist.setAttribute('selected', false);
      this.$refs.monthly.querySelector("[month-id=\"".concat(month.fullYear, "-").concat(month.monthNumber, "\"]")).setAttribute('selected', true);
      this.selectedMonth = "".concat(month.fullYear, "-").concat(month.monthNumber);

      if (e) {
        var id = "[year=\"".concat(month.fullYear, "\"][month=\"").concat(month.monthNumber, "\"].cal-cell");
        this.scrollIntoView(this.$refs.daily.querySelector(id));
      }
    },
    toggleSelect: function toggleSelect(e, day) {
      var exist = this.$refs.daily.querySelector('.cal-cell[selected="true"]');

      if (exist) {
        exist.setAttribute('selected', false);

        if (e.target === exist) {
          this.selectedDate = null;
          this.selectedMonth = null;
          return this.$emit('dateCleared');
        }
      }

      this.selectedDate = day;
      this.selectedMonth = "".concat(day.fullYear, "-").concat(day.monthNumber);
      this.toggleSelectMonth(null, day);
      e.target.setAttribute('selected', true);
      this.dateSelected(day);
    },
    scrollIntoView: function scrollIntoView(element) {
      var cal = element;
      if (!element) cal = this.$refs.daily.querySelector("[selected=true].cal-cell");
      var offset = cal.offsetLeft - cal.parentNode.parentNode.clientWidth * 0.3 - cal.clientWidth;
      this.daily.realOffset = offset > 0 ? -offset : 0;
      this.$refs.daily.style.left = "".concat(this.daily.realOffset, "px");
    },
    dateSelected: function dateSelected(date) {
      var formattedDate = new Date(Date.UTC(date.fullYear, date.monthNumber, date.day));
      this.$emit('dateSelected', formattedDate);
    }
  },
  created: function created() {
    var _this = this;

    this.calendar = buildCalendar(this.NUMBER_OF_DAYS, this.NUMBER_OF_MONTHS, this.PREPEND_MONTHS, this.fullMonths);
    document.body.addEventListener('mouseup', function (e) {
      return _this.handleDrag(e);
    }, false);
    document.body.addEventListener('mouseleave', function (e) {
      return _this.handleDrag(e);
    }, false);
    document.body.addEventListener('touchend', function (e) {
      return _this.handleDrag(e);
    }, false);
  },
  mounted: function mounted() {
    this.$refs.monthly.querySelector('div:not(.past).month-cell.cell').click();

    if (this.selected) {
      this.$refs.daily.querySelector("[date=\"".concat(this.selected.fullYear, "-").concat(this.selected.monthNumber, "-").concat(this.selected.day, "\"]")).setAttribute('selected', true);
      this.scrollIntoView();
    }

    this.daily.monthBreakPoints = _toConsumableArray(this.$refs.daily.querySelectorAll('.cal-cell')).filter(function (cell) {
      return /-1$/g.test(cell.getAttribute('date'));
    }).map(function (el) {
      return {
        offset: el.offsetLeft,
        monthNumber: el.getAttribute('month'),
        fullYear: el.getAttribute('year')
      };
    });
    this.daily.maxOffset = this.$refs.daily.parentNode.clientWidth - this.$refs.daily.clientWidth;
    this.monthly.maxOffset = this.$refs.monthly.parentNode.clientWidth - this.$refs.monthly.clientWidth;
    if (this.daily.maxOffset > 0) this.daily.maxOffset = 0;
    if (this.monthly.maxOffset > 0) this.monthly.maxOffset = 0;
  },
  beforeDestroy: function beforeDestroy() {
    var _this2 = this;

    document.body.removeEventListener('mouseup', function (e) {
      return _this2.handleDrag(e);
    }, false);
    document.body.removeEventListener('mouseleave', function (e) {
      return _this2.handleDrag(e);
    }, false);
    document.body.removeEventListener('touchend', function (e) {
      return _this2.handleDrag(e);
    }, false);
  }
});
// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/App.vue?vue&type=style&index=0&id=245b56f6&lang=scss&scoped=true&
var Appvue_type_style_index_0_id_245b56f6_lang_scss_scoped_true_ = __webpack_require__("5c39");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/App.vue






/* normalize component */

var component = normalizeComponent(
  src_Appvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "245b56f6",
  null
  
)

component.options.__file = "App.vue"
/* harmony default export */ var App = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "414c":
/***/ (function(module, exports) {

module.exports = "data:font/woff2;base64,d09GMgABAAAAAAmQABAAAAAAE5QAAAk3AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGyAcKgZgADwIgQoJmm0RCApUYwsIAAE2AiQDCgQgBYNiByAMgTEbfhIR1awfItNIWTh/P/9J1ewPCFJUjNjwsbOgZWLADYlrcxOGkLxLByrPOAIiJedwKRqXUlFf90Bd7FIu6mvKu+oIQayle0ABQnAIquiqo0roAG1qO3UIMu//tx+tvhlEJJknQtlDaLS4d/5feG9mVSUhGoq4pf2baBoShEQUDZHW6A0IGJtxuIhStyH7x8Jc5PhIENEYnaIzJNobj+9SlVzqLB4OyVOtrdE6ORc39Vr23hu0ogH5HFf8U3yfykRO7hgSrrOuIZ6ny+JpOaSsN3TkL5vSG0cfvke/u/+5Rffn//8PUTkSH7OQn7HCiUv1FKbSQWgHLV5oWcECl9ZVpbYgh1p0OzGG3OFfhn/UGKAJv9qkpxDZFzkx0dCWLg3/6zwY/m9oT8eWvLY2sSWvHcLMEUVIm2ZpZfoGQYpBeyaxzJ3f0NRWB5Wdpw2ueli36THnewZOkP22SuLT7vXkoef7IAvSsj0gQTqNIwgFTo8jOIr7jN914daeHqyLcZ30ElQS46MU2O1njC99LzeMbtf4uGs9RrNrfDSt5UJo1s/6WO8a35XCuOjIRS363Uv5mPM8Y4x1Teox+LSMbfV1uh4ktdZ6cAKM6R5o24A6AYt8jGkPfabmmU72mxnqKf+3flOmQ2v7mYUIrZWgrjmyNkJJccJwg6zPKOuuQVnGqMjY830LkUZwlfSlz/2ifBgzKjJGJTFeIcZ10ivEuIabJj2U6j6jojnnHCIsLpYDuLUtk3a9bNsaaX3LuLtjIELPx10rQV1zZCOUFUZ0OCCHdBpHqCiMyFgySMYZnMNjiB5EinI9wohiThgTuvcblw4Z1DW4m9pjiF7ahkgjVNVgZIJ0Etf9ktrLqCo5N2bgZSKUIA03SDnJZVaKJndjyCuBSrCHuzlUB6VAZu3/H8v4pTk43zWtUe9eQBNIzTsajI+VEuN70rd1P8KkKhwnQT9rR5hSECkzJvUDpwVjUsYWUy61raZqR5hWjJns+OD8G5d6ucwwrVPOU8a0jGWEGdXZNYXbb9vzmDySH0WYVZ0t09k5Eu353Unzm86pgmb03kNmZjREFmM6rOE14ARxMblQUw+DWJKMUtA1RcbVhBvEec5hNpyq+xIi2ztPheCxTuC7j8Wk3sSU3kzF8MNi6kvhvbIgmpdtCA26PRBC9D+CeUUFOcmuwYyMOcGEjDEu4aYxpxDZL+fmBE1THOdpMVcJ8WnonbMRFlRB82GERVWINS1ph5Z1iVa0S6u6TGu6Qp4eoVO6Sqf1aMbDSub5Q1FJO7tGcgPiuavj8Aj1M9OWJr8dMpxWm/zOVX1GESZD29RZdUYx1uwD+ByAJYDPAzgAcA3ADwF4HZCrFLeqKEUPSTGXspYQaT3gTMZA1dPvpqEQhYjqES4o5k0uwRyZNeXjs+9K8SyPuFisOcXEWFLLHoUL9aIsFhNz0Vo49FLW9Emde1nxtUSnX1HEKEl0x4YIk4FTqbT0i2dTi/Zt2Swui0U7L8tVxS3eTPqPBNJZM8I11VhuRbgeLACE7jUj3FCFQ0sBN3jzLvAyOMH9PN+UmzJjc+jdZcch48F1IRYX6hGaCrSEWVHqBnCDIM8vxijGqA6P8oZkbuVNsZObsdxoVzBcGWumMNLHyMTvbpkTh0vsnTi10pqNY8moas6l9kXKjRSuvkYlfbx5T59gjk77EiWd9bsGjs48lHT6aOtR/+WZZIZbkxtZ05Oo6o0nU2xVR7DPlBsiKZFwdVoQJy8HGcoGU+DWLLJBDGYEqXl4dommwEZ4JB+2Y2aUa41kqxnh0eOxqKr2bIAQUYKRrexDSrxcbg3aNQ1uSf+56h8RTpJfDBdCJUA5uP+O4BVgrzXdLymR1X3orURE6KKS9DOix/SGFW/JbSW5kYN/eAOz2nS9bWu4ZRtFQyyEEe4odt32uqPf/VuftU/7nkIzDK1lrHAzzJlb9Ws/82awanB1Aw3H6vSibrparpdlGJNxulE560tucUM2TTdsq6LqBnHwgazO/8RmDYY9eIQd35JNz68r8b5NIiUZ1AxzpN2GKuhm6Mu2b8nu9KtNt3jNxwzo5r4t8w1crUd47FSg+6ogsTCPa/UIDxRu1CN0crBjIrnBG7nMcirmcVWZ74tOGOEJNSBqh6LkSTUgsaGnrPBxF4NsqVWityFlByC7gKQ9dUI03WvO31cnZksHTvjZ4CFWRwv9tJHyDAZ5FoM8F53S+nn05AWApADJ1GpDHwLpAaQPsEdJUvGkY/TtiwD7EsC+DLCvAOyrAPsaoPJ1VdAjhWffcEXjdmfym+qOvJXhZqzu5r+tCqF274zApHenCHovkR41aN93GdwHI+A+BEHpo3Bx1n0sgfsEQJ9JpJYp+1mXwX1uBNznAeoL/ln3RQnclwD05US6Zcp+xWVwXx0B9zWA+rp/1n1DAvdNQINP1cmo63zMPiUOUT1C6Xz3o+dz64gEieGQpl+utrQMr3xDqqmI1a/WUMkT8p0KEiMjBwf7IqP0QPRod49ufvffP/n3j147849Xz/zDg+rxbdzzzcTbC28vjKuiyi1VEmLCUaL5yXyZ7Hr1552377utM/7pmvRRrDz7fG3wge88zr6Z0s8/yC8UW2G1GCA8x+/uTctfTennP+QXP6uPEsVT2oRF0vBkohJNaDShIJJECYfApuXkz28J6Az9FkfLhrSnmtgnC1i0PdaLWHF3vUQcT9fLePB/vYKbYLdexUOIeH0rEoQS8plmhlXmGGWYERbwIY4YYklqFTcwwmDrQdXMs0wvEww4j6phjmnGGKRfNzmXRfmoEaaZYx4fQkwkLzDjtE4jmmiGGVU+apE+ouhnmskTPO0kDzPR/twhppligXmiIwovOjU8tPU31jHIMItM0MscCUQRSwwxpDPFIMsskK47UmS7B1t6OJ3axKANdjTSoT6G+2wszFqvlTpPf27aGWtslKHUCaJyxw5bl15ERQW+REx3iGPy+PL7vKxruSEIJ63XhQ+D+8zcQMu7Q1aUl5Cw/RNzzPLFeN1fd9Rk3bNDIelquOqhvMg874ktlhgoa8gYTbKOJ2dqCCJRcCNA2KttuZ6z13JDGii4EeR62EN9DUHO2etvaDmf09ra2mp2VaIaqDoHsgi7L5i2r8vHN0QKbikDKgUFAAAA"

/***/ }),

/***/ "4588":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "4630":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "4917":
/***/ (function(module, exports, __webpack_require__) {

// @@match logic
__webpack_require__("214f")('match', 1, function (defined, MATCH, $match) {
  // 21.1.3.11 String.prototype.match(regexp)
  return [function match(regexp) {
    'use strict';
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, $match];
});


/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "4bf8":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "5147":
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__("2b4c")('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),

/***/ "52a7":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "5537":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("8378");
var global = __webpack_require__("7726");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("2d00") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "56d7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return install; });
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3dfd");
// Import vue component
 // Declare install function executed by Vue.use()

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('MyComponent', _App_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
} // Create module definition for Vue.use()

var plugin = {
  install: install
}; // Auto-install when vue is found (eg. in browser via <script> tag)

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
} // To allow use as module (npm/webpack/etc.) export component


/* harmony default export */ __webpack_exports__["a"] = (_App_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "5c39":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_245b56f6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ee68");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_245b56f6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_245b56f6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_245b56f6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "5ca1":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var core = __webpack_require__("8378");
var hide = __webpack_require__("32e9");
var redefine = __webpack_require__("2aba");
var ctx = __webpack_require__("9b43");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "5dbc":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var setPrototypeOf = __webpack_require__("8b97").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "613b":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5537")('keys');
var uid = __webpack_require__("ca5a");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "626a":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("2d95");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "6762":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__("5ca1");
var $includes = __webpack_require__("c366")(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__("9c6c")('includes');


/***/ }),

/***/ "6821":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("626a");
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "69a8":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "6a99":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("d3f4");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "7514":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__("5ca1");
var $find = __webpack_require__("0a49")(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__("9c6c")(KEY);


/***/ }),

/***/ "7726":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "77f1":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "79e5":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "8378":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "86cc":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("cb7c");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var toPrimitive = __webpack_require__("6a99");
var dP = Object.defineProperty;

exports.f = __webpack_require__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "8b97":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("d3f4");
var anObject = __webpack_require__("cb7c");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("9b43")(Function.call, __webpack_require__("11e9").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "9093":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("ce10");
var hiddenKeys = __webpack_require__("e11e").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "9b43":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("d8e8");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "9c6c":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("2b4c")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("32e9")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "9def":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("4588");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "9e1e":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("79e5")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "aa77":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("5ca1");
var defined = __webpack_require__("be13");
var fails = __webpack_require__("79e5");
var spaces = __webpack_require__("fdef");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "aae3":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__("d3f4");
var cof = __webpack_require__("2d95");
var MATCH = __webpack_require__("2b4c")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "b041":
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "be13":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "c366":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("6821");
var toLength = __webpack_require__("9def");
var toAbsoluteIndex = __webpack_require__("77f1");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "c5f6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("7726");
var has = __webpack_require__("69a8");
var cof = __webpack_require__("2d95");
var inheritIfRequired = __webpack_require__("5dbc");
var toPrimitive = __webpack_require__("6a99");
var fails = __webpack_require__("79e5");
var gOPN = __webpack_require__("9093").f;
var gOPD = __webpack_require__("11e9").f;
var dP = __webpack_require__("86cc").f;
var $trim = __webpack_require__("aa77").trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__("2aeb")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__("9e1e") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__("2aba")(global, NUMBER, $Number);
}


/***/ }),

/***/ "c69a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("9e1e") && !__webpack_require__("79e5")(function () {
  return Object.defineProperty(__webpack_require__("230e")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "ca5a":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "cb7c":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "cd1c":
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__("e853");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "ce10":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("69a8");
var toIObject = __webpack_require__("6821");
var arrayIndexOf = __webpack_require__("c366")(false);
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "d2c8":
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__("aae3");
var defined = __webpack_require__("be13");

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),

/***/ "d3f4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "d8e8":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "de95":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("b041");
exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "/* ========================================================================== */\n@font-face {\n  font-family: 'Oswald';\n  font-style: normal;\n  font-weight: 400;\n  src: url(" + escape(__webpack_require__("414c")) + ") format(\"woff2\");\n}\n\n/* ========================================================================== */\n:root {\n  font-size: 16px;\n  font-size: 2vw;\n}\n@media (max-width: 500px) {\n:root {\n      font-size: 10px;\n}\n}\n@media (min-width: 800px) {\n:root {\n      font-size: 16px;\n}\n}\n.container[data-v-245b56f6] {\n  padding-top: 1em;\n  width: 95%;\n  margin: auto;\n}\n.drag-calendar[data-v-245b56f6] {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  clear: both;\n  height: 9.6em;\n  overflow: hidden;\n  width: 100%;\n  position: relative;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  padding: 0;\n  background-color: transparent;\n}\n.drag-calendar .cal-cell[selected='true'][data-v-245b56f6],\n  .drag-calendar .month-cell[selected='true'][data-v-245b56f6] {\n    border-radius: 0.5em;\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1);\n    -webkit-transition: -webkit-transform 0.3s ease;\n    transition: -webkit-transform 0.3s ease;\n    transition: transform 0.3s ease;\n    transition: transform 0.3s ease, -webkit-transform 0.3s ease;\n    padding: 1.25em;\n}\n.drag-calendar .cal-cell[selected='true'] .cell-content div[data-v-245b56f6],\n    .drag-calendar .month-cell[selected='true'] .cell-content div[data-v-245b56f6] {\n      -webkit-transform: scale(1.5);\n              transform: scale(1.5);\n      color: white;\n}\n.drag-calendar .cal-cell[selected='true'] .cell-content .day-number[data-v-245b56f6],\n    .drag-calendar .month-cell[selected='true'] .cell-content .day-number[data-v-245b56f6] {\n      margin-bottom: 4px;\n}\n.drag-calendar .month-cell[data-v-245b56f6] {\n    padding: 0;\n}\n.arrow[data-v-245b56f6] {\n  font-family: 'Oswald', Arial, sans-serif;\n  width: 2rem;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  position: absolute;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  z-index: 1000;\n  -webkit-transition: 0.2s all;\n  transition: 0.2s all;\n  background-color: white;\n  color: darkgrey;\n}\n.arrow[data-v-245b56f6]:hover {\n    background-color: #f8f8ff;\n    -webkit-box-shadow: inset 0px 0px 5px 1px rgba(0, 0, 0, 0.1), inset 0px 0px 5px 1px rgba(0, 0, 0, 0.1);\n            box-shadow: inset 0px 0px 5px 1px rgba(0, 0, 0, 0.1), inset 0px 0px 5px 1px rgba(0, 0, 0, 0.1);\n    cursor: pointer;\n    color: black;\n}\n.arrow.bottom[data-v-245b56f6] {\n    height: 1.75em;\n    bottom: 0.15em;\n    font-size: 3rem;\n}\n.arrow.top[data-v-245b56f6] {\n    top: 0;\n    height: 1.2em;\n    font-size: 2rem;\n}\n.arrow.left[data-v-245b56f6] {\n    left: 0;\n}\n.arrow.left[data-v-245b56f6]:before {\n      content: '<';\n      height: 1.75em;\n}\n.arrow.right[data-v-245b56f6] {\n    right: 0;\n}\n.arrow.right[data-v-245b56f6]:before {\n      content: '>';\n      height: 1.75em;\n}\n.arrow[data-v-245b56f6]:active {\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8);\n}\n.cell-content[data-v-245b56f6],\n.date-formatted[data-v-245b56f6] {\n  pointer-events: none;\n}\n.months .cell[selected='true'] .date-formatted[data-v-245b56f6] {\n  opacity: 0.5;\n  color: white;\n  background-color: darkblue;\n  border-radius: 0.5em;\n  padding: 0.3em;\n  margin-top: -0.3em;\n  font-weight: 350;\n}\n.drag-calendar .days[data-v-245b56f6] {\n  z-index: 1;\n  list-style: none;\n  float: left;\n  margin: 0;\n  padding: 0;\n  position: relative;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  -webkit-transition: all 1s ease;\n  transition: all 1s ease;\n}\n.drag-calendar .days .cell.cal-cell[selected='true'][data-v-245b56f6] {\n    background-color: darkblue;\n}\n.drag-calendar .days > .cell[data-v-245b56f6]:first-child {\n    color: red;\n    margin-left: 0.4em;\n}\n.drag-calendar .days > .cell:first-child .day-number[data-v-245b56f6] {\n      text-decoration: underline;\n}\n.drag-calendar .days > .cell[data-v-245b56f6]:last-child {\n    margin-right: 0.4em;\n}\n.drag-calendar .days .cal-cell[data-v-245b56f6] {\n  float: left;\n  width: 4em;\n  padding: 1.5em 1.25em;\n  margin: 0px;\n  border-right: 1px solid rgba(0, 0, 0, 0.03);\n  text-align: center;\n  position: relative;\n  color: #888;\n}\n.drag-calendar .days .cal-cell.first[data-v-245b56f6] {\n    background-color: rgba(0, 0, 0, 0.02);\n    color: #666;\n}\n.drag-calendar .days .cal-cell.first .day[data-v-245b56f6] {\n      font-weight: bold;\n}\n.drag-calendar .days .cal-cell.first .day-number[data-v-245b56f6] {\n      font-size: 1.2em;\n}\n.drag-calendar .days .cell .day-number[data-v-245b56f6] {\n  display: block;\n  clear: both;\n  font-weight: bold;\n  font-size: 1.2em;\n  z-index: 1;\n  position: relative;\n}\n.drag-calendar .days .cell .day[data-v-245b56f6] {\n  display: block;\n  clear: both;\n  text-transform: uppercase;\n  width: 100%;\n  font-weight: 100;\n  font-size: 12px;\n  margin-top: 0px;\n  z-index: 1;\n  position: relative;\n}\n.drag-calendar .days .cell .month[data-v-245b56f6] {\n  width: 100%;\n  font-size: 12px;\n  z-index: 1;\n  text-transform: uppercase;\n  position: absolute;\n  opacity: 1;\n  left: 0;\n  top: 10px;\n  font-weight: bold;\n}\n.drag-calendar .months[data-v-245b56f6] {\n  z-index: 1;\n  float: left;\n  margin: 0;\n  padding: 0;\n  position: relative;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  border-bottom: 0px solid ghostwhite;\n  margin-bottom: 1em;\n  background-color: transparent;\n  -webkit-transition: all 1s ease;\n  transition: all 1s ease;\n}\n.drag-calendar .months .cell[data-v-245b56f6] {\n  float: left;\n  width: 105px;\n  padding: 10px 10px;\n  text-align: center;\n  position: relative;\n  color: #888;\n  border-right: 1px solid rgba(0, 0, 0, 0.03);\n  position: relative;\n}\n.drag-calendar .months .cell .month-name[data-v-245b56f6] {\n  font-weight: bold;\n  font-size: 0.8em;\n  z-index: 1;\n  position: relative;\n  text-transform: uppercase;\n}\n.drag-calendar .months .cell .date-formatted[data-v-245b56f6] {\n  font-weight: 200;\n  font-size: 1em;\n}\n.drag-calendar .ui-draggable[data-v-245b56f6] {\n  cursor: move;\n  cursor: -webkit-grab;\n}\n.drag-calendar .months .cell.past[data-v-245b56f6] {\n  background-color: rgba(222, 222, 222, 0.6);\n  color: lightgrey;\n  opacity: 0.8;\n  pointer-events: none;\n  border-right: solid 0.5px rgba(222, 222, 222, 0.8);\n}\n", ""]);

// exports


/***/ }),

/***/ "e11e":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "e853":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var isArray = __webpack_require__("1169");
var SPECIES = __webpack_require__("2b4c")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "ee68":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("de95");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("e21cf408", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "fab2":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("7726").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setPublicPath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1eb2");
/* harmony import */ var _setPublicPath__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_setPublicPath__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _entry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("56d7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "install", function() { return _entry__WEBPACK_IMPORTED_MODULE_1__["b"]; });



/* harmony default export */ __webpack_exports__["default"] = (_entry__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);



/***/ }),

/***/ "fdef":
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ })

/******/ });
});
//# sourceMappingURL=vueCal.umd.js.map