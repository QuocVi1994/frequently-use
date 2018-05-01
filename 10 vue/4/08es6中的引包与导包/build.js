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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__more_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__only_js__ = __webpack_require__(2);
// es6引入1个东东的方式：import 变量名 from '.only.js';
// es6引入多个东东的方式：import { 变量名1, 变量名2, xxx。。。 } from '.only.js';

// err，log变量的名词必须和more.js中导出的东西名称一样，因为是多个，要通过名字区分
  // 这个模块导出的是多个东东，这里可以实现按需加载，只需那些东西就写哪些

// fn变量的名称可以任意取，因为就是一个东东
   // 这个模块导出的是一个函数

__WEBPACK_IMPORTED_MODULE_0__more_js__["c" /* err */]('错误');
__WEBPACK_IMPORTED_MODULE_0__more_js__["d" /* log */]('打印');
__WEBPACK_IMPORTED_MODULE_1__only_js__["a" /* default */](10, 50);
console.log(__WEBPACK_IMPORTED_MODULE_0__more_js__["a"]);
console.log(__WEBPACK_IMPORTED_MODULE_0__more_js__["b"]);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = err;
/* harmony export (immutable) */ __webpack_exports__["d"] = log;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return b; });
// es6导出多个东东是分别export xxx;

function err(msg) {
	console.error(msg);
};

function log(msg) {
	console.log(msg);
};

// 导出基本数据类型，先得通过一个变量定义，然后导出这个变量，这样这个基础数据就有名称了
var a = 123;


var b  = 456;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// es6中保留一个东东的写法通常是这样的export default xxx;
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
	console.log(a + b);
});;


/***/ })
/******/ ]);