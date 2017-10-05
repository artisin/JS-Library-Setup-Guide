/*!
 * The MIT License
 * 
 * Copyright (c) 2017 Joe
 * https://github.com/user/project-name
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */


/* eslint-disable */

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash/map"), require("core-js/modules/es6.typed.array-buffer"), require("core-js/modules/es6.typed.int8-array"), require("core-js/modules/es6.typed.uint8-array"), require("core-js/modules/es6.typed.uint8-clamped-array"), require("core-js/modules/es6.typed.int16-array"), require("core-js/modules/es6.typed.uint16-array"), require("core-js/modules/es6.typed.int32-array"), require("core-js/modules/es6.typed.uint32-array"), require("core-js/modules/es6.typed.float32-array"), require("core-js/modules/es6.typed.float64-array"), require("core-js/modules/es6.map"), require("core-js/modules/es6.set"), require("core-js/modules/es6.weak-map"), require("core-js/modules/es6.weak-set"), require("core-js/modules/es6.reflect.apply"), require("core-js/modules/es6.reflect.construct"), require("core-js/modules/es6.reflect.define-property"), require("core-js/modules/es6.reflect.delete-property"), require("core-js/modules/es6.reflect.get"), require("core-js/modules/es6.reflect.get-own-property-descriptor"), require("core-js/modules/es6.reflect.get-prototype-of"), require("core-js/modules/es6.reflect.has"), require("core-js/modules/es6.reflect.is-extensible"), require("core-js/modules/es6.reflect.own-keys"), require("core-js/modules/es6.reflect.prevent-extensions"), require("core-js/modules/es6.reflect.set"), require("core-js/modules/es6.reflect.set-prototype-of"), require("core-js/modules/es6.promise"), require("core-js/modules/es6.symbol"), require("core-js/modules/es6.function.name"), require("core-js/modules/es6.regexp.flags"), require("core-js/modules/es6.regexp.match"), require("core-js/modules/es6.regexp.replace"), require("core-js/modules/es6.regexp.split"), require("core-js/modules/es6.regexp.search"), require("core-js/modules/es6.array.from"), require("core-js/modules/es7.array.includes"), require("core-js/modules/es7.object.values"), require("core-js/modules/es7.object.entries"), require("core-js/modules/es7.object.get-own-property-descriptors"), require("core-js/modules/es7.string.pad-start"), require("core-js/modules/es7.string.pad-end"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash/map", "core-js/modules/es6.typed.array-buffer", "core-js/modules/es6.typed.int8-array", "core-js/modules/es6.typed.uint8-array", "core-js/modules/es6.typed.uint8-clamped-array", "core-js/modules/es6.typed.int16-array", "core-js/modules/es6.typed.uint16-array", "core-js/modules/es6.typed.int32-array", "core-js/modules/es6.typed.uint32-array", "core-js/modules/es6.typed.float32-array", "core-js/modules/es6.typed.float64-array", "core-js/modules/es6.map", "core-js/modules/es6.set", "core-js/modules/es6.weak-map", "core-js/modules/es6.weak-set", "core-js/modules/es6.reflect.apply", "core-js/modules/es6.reflect.construct", "core-js/modules/es6.reflect.define-property", "core-js/modules/es6.reflect.delete-property", "core-js/modules/es6.reflect.get", "core-js/modules/es6.reflect.get-own-property-descriptor", "core-js/modules/es6.reflect.get-prototype-of", "core-js/modules/es6.reflect.has", "core-js/modules/es6.reflect.is-extensible", "core-js/modules/es6.reflect.own-keys", "core-js/modules/es6.reflect.prevent-extensions", "core-js/modules/es6.reflect.set", "core-js/modules/es6.reflect.set-prototype-of", "core-js/modules/es6.promise", "core-js/modules/es6.symbol", "core-js/modules/es6.function.name", "core-js/modules/es6.regexp.flags", "core-js/modules/es6.regexp.match", "core-js/modules/es6.regexp.replace", "core-js/modules/es6.regexp.split", "core-js/modules/es6.regexp.search", "core-js/modules/es6.array.from", "core-js/modules/es7.array.includes", "core-js/modules/es7.object.values", "core-js/modules/es7.object.entries", "core-js/modules/es7.object.get-own-property-descriptors", "core-js/modules/es7.string.pad-start", "core-js/modules/es7.string.pad-end"], factory);
	else if(typeof exports === 'object')
		exports["project-name"] = factory(require("lodash/map"), require("core-js/modules/es6.typed.array-buffer"), require("core-js/modules/es6.typed.int8-array"), require("core-js/modules/es6.typed.uint8-array"), require("core-js/modules/es6.typed.uint8-clamped-array"), require("core-js/modules/es6.typed.int16-array"), require("core-js/modules/es6.typed.uint16-array"), require("core-js/modules/es6.typed.int32-array"), require("core-js/modules/es6.typed.uint32-array"), require("core-js/modules/es6.typed.float32-array"), require("core-js/modules/es6.typed.float64-array"), require("core-js/modules/es6.map"), require("core-js/modules/es6.set"), require("core-js/modules/es6.weak-map"), require("core-js/modules/es6.weak-set"), require("core-js/modules/es6.reflect.apply"), require("core-js/modules/es6.reflect.construct"), require("core-js/modules/es6.reflect.define-property"), require("core-js/modules/es6.reflect.delete-property"), require("core-js/modules/es6.reflect.get"), require("core-js/modules/es6.reflect.get-own-property-descriptor"), require("core-js/modules/es6.reflect.get-prototype-of"), require("core-js/modules/es6.reflect.has"), require("core-js/modules/es6.reflect.is-extensible"), require("core-js/modules/es6.reflect.own-keys"), require("core-js/modules/es6.reflect.prevent-extensions"), require("core-js/modules/es6.reflect.set"), require("core-js/modules/es6.reflect.set-prototype-of"), require("core-js/modules/es6.promise"), require("core-js/modules/es6.symbol"), require("core-js/modules/es6.function.name"), require("core-js/modules/es6.regexp.flags"), require("core-js/modules/es6.regexp.match"), require("core-js/modules/es6.regexp.replace"), require("core-js/modules/es6.regexp.split"), require("core-js/modules/es6.regexp.search"), require("core-js/modules/es6.array.from"), require("core-js/modules/es7.array.includes"), require("core-js/modules/es7.object.values"), require("core-js/modules/es7.object.entries"), require("core-js/modules/es7.object.get-own-property-descriptors"), require("core-js/modules/es7.string.pad-start"), require("core-js/modules/es7.string.pad-end"));
	else
		root["project-name"] = factory(root["lodash/map"], root["core-js/modules/es6.typed.array-buffer"], root["core-js/modules/es6.typed.int8-array"], root["core-js/modules/es6.typed.uint8-array"], root["core-js/modules/es6.typed.uint8-clamped-array"], root["core-js/modules/es6.typed.int16-array"], root["core-js/modules/es6.typed.uint16-array"], root["core-js/modules/es6.typed.int32-array"], root["core-js/modules/es6.typed.uint32-array"], root["core-js/modules/es6.typed.float32-array"], root["core-js/modules/es6.typed.float64-array"], root["core-js/modules/es6.map"], root["core-js/modules/es6.set"], root["core-js/modules/es6.weak-map"], root["core-js/modules/es6.weak-set"], root["core-js/modules/es6.reflect.apply"], root["core-js/modules/es6.reflect.construct"], root["core-js/modules/es6.reflect.define-property"], root["core-js/modules/es6.reflect.delete-property"], root["core-js/modules/es6.reflect.get"], root["core-js/modules/es6.reflect.get-own-property-descriptor"], root["core-js/modules/es6.reflect.get-prototype-of"], root["core-js/modules/es6.reflect.has"], root["core-js/modules/es6.reflect.is-extensible"], root["core-js/modules/es6.reflect.own-keys"], root["core-js/modules/es6.reflect.prevent-extensions"], root["core-js/modules/es6.reflect.set"], root["core-js/modules/es6.reflect.set-prototype-of"], root["core-js/modules/es6.promise"], root["core-js/modules/es6.symbol"], root["core-js/modules/es6.function.name"], root["core-js/modules/es6.regexp.flags"], root["core-js/modules/es6.regexp.match"], root["core-js/modules/es6.regexp.replace"], root["core-js/modules/es6.regexp.split"], root["core-js/modules/es6.regexp.search"], root["core-js/modules/es6.array.from"], root["core-js/modules/es7.array.includes"], root["core-js/modules/es7.object.values"], root["core-js/modules/es7.object.entries"], root["core-js/modules/es7.object.get-own-property-descriptors"], root["core-js/modules/es7.string.pad-start"], root["core-js/modules/es7.string.pad-end"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_16__, __WEBPACK_EXTERNAL_MODULE_17__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_19__, __WEBPACK_EXTERNAL_MODULE_20__, __WEBPACK_EXTERNAL_MODULE_21__, __WEBPACK_EXTERNAL_MODULE_22__, __WEBPACK_EXTERNAL_MODULE_23__, __WEBPACK_EXTERNAL_MODULE_24__, __WEBPACK_EXTERNAL_MODULE_25__, __WEBPACK_EXTERNAL_MODULE_26__, __WEBPACK_EXTERNAL_MODULE_27__, __WEBPACK_EXTERNAL_MODULE_28__, __WEBPACK_EXTERNAL_MODULE_29__, __WEBPACK_EXTERNAL_MODULE_30__, __WEBPACK_EXTERNAL_MODULE_31__, __WEBPACK_EXTERNAL_MODULE_32__, __WEBPACK_EXTERNAL_MODULE_33__, __WEBPACK_EXTERNAL_MODULE_34__, __WEBPACK_EXTERNAL_MODULE_35__, __WEBPACK_EXTERNAL_MODULE_36__, __WEBPACK_EXTERNAL_MODULE_37__, __WEBPACK_EXTERNAL_MODULE_38__, __WEBPACK_EXTERNAL_MODULE_39__, __WEBPACK_EXTERNAL_MODULE_40__, __WEBPACK_EXTERNAL_MODULE_41__, __WEBPACK_EXTERNAL_MODULE_42__, __WEBPACK_EXTERNAL_MODULE_43__) {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addMap = exports.subtract = exports.add = undefined;

var _map2 = __webpack_require__(1);

var _map3 = _interopRequireDefault(_map2);

__webpack_require__(2);

__webpack_require__(3);

__webpack_require__(4);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(7);

__webpack_require__(8);

__webpack_require__(9);

__webpack_require__(10);

__webpack_require__(11);

__webpack_require__(12);

__webpack_require__(13);

__webpack_require__(14);

__webpack_require__(15);

__webpack_require__(16);

__webpack_require__(17);

__webpack_require__(18);

__webpack_require__(19);

__webpack_require__(20);

__webpack_require__(21);

__webpack_require__(22);

__webpack_require__(23);

__webpack_require__(24);

__webpack_require__(25);

__webpack_require__(26);

__webpack_require__(27);

__webpack_require__(28);

__webpack_require__(29);

__webpack_require__(30);

__webpack_require__(31);

__webpack_require__(32);

__webpack_require__(33);

__webpack_require__(34);

__webpack_require__(35);

__webpack_require__(36);

__webpack_require__(37);

__webpack_require__(38);

__webpack_require__(39);

__webpack_require__(40);

__webpack_require__(41);

__webpack_require__(42);

__webpack_require__(43);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @NOTE babel-polyfill needs to be declared in order need for babel-preset-env to polyfill
var add = exports.add = function add(a, b) {
  return a + b;
};
var subtract = exports.subtract = function subtract(a, b) {
  return a - b;
};
var addMap = exports.addMap = function addMap(arr) {
  return (0, _map3.default)(arr, add);
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("lodash/map");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.typed.array-buffer");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.typed.int8-array");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.typed.uint8-array");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.typed.uint8-clamped-array");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.typed.int16-array");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.typed.uint16-array");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.typed.int32-array");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.typed.uint32-array");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.typed.float32-array");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.typed.float64-array");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.map");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.set");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.weak-map");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.weak-set");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.reflect.apply");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.reflect.construct");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.reflect.define-property");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.reflect.delete-property");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.reflect.get");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.reflect.get-own-property-descriptor");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.reflect.get-prototype-of");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.reflect.has");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.reflect.is-extensible");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.reflect.own-keys");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.reflect.prevent-extensions");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.reflect.set");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.reflect.set-prototype-of");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.promise");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.symbol");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.function.name");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.regexp.flags");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.regexp.match");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.regexp.replace");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.regexp.split");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.regexp.search");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.array.from");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es7.array.includes");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es7.object.values");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es7.object.entries");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es7.object.get-own-property-descriptors");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es7.string.pad-start");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es7.string.pad-end");

/***/ })
/******/ ]);
});
//# sourceMappingURL=project-name.js.map