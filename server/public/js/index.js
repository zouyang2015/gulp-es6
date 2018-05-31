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
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Map、Set与Array的对比
// 能使用Map,不使用数组，如果考虑存储的唯一性考虑set, 放弃使用obj做存储，数组也要放弃
{
  // 数据结构横向对比，增，查，改，删
  var map = new Map();
  var array = [];
  // 增
  map.set('t', 1);
  array.push({ t: 1 });
  console.info('map-array', map, array); // Map(1) {"t" => 1} [Object]
  // 查
  var map_exist = map.has('t');
  var array_exist = array.find(function (item) {
    return item.t;
  });
  console.info('map-array', map_exist, array_exist); // true Object {t: 1}
  // 改
  map.set('t', 2);
  array.forEach(function (item) {
    return item.t ? item.t = 2 : '';
  });
  console.info('map-array', map, array); // Map(1) {"t" => 2} [Object]
  // 删除
  map.delete('t');
  var index = array.findIndex(function (item) {
    return item.t;
  });
  array.splice(index, 1);
  console.info('map-array', map, array); // Map(0) {} []
}

{
  // set
  var set = new Set();
  var _array = [];
  // 增
  set.add({ t: 1 });
  _array.push({ t: 1 });
  console.info('set-array', set, _array); // Set(1) {Object {t: 1}} [Object]
  // 查
  var set_exist = set.has({ t: 1 }); // *
  var _array_exist = _array.find(function (item) {
    return item.t;
  });
  console.info('map-array', set_exist, _array_exist);
  // 改
  set.forEach(function (item) {
    return item.t ? item.t = 2 : '';
  });
  _array.forEach(function (item) {
    return item.t ? item.t = 2 : '';
  });
  console.info('map-array', set, _array); // Set(1) {Object {t: 2}} [Object]
  // 删除
  set.forEach(function (item) {
    return item.t ? set.delete(item) : '';
  });
  var _index = _array.findIndex(function (item) {
    return item.t;
  });
  _array.splice(_index, 1);
  console.info('map-array', set, _array); // Set(0) {} []
}

// Map与Set与Object做对比
{
  var item = { t: 1 };
  var _map = new Map();
  var _set = new Set();
  var obj = {};

  // 增
  _map.set('t', 1);
  _set.add(item);
  obj['t'] = 1;
  console.log(_map, _set, obj);

  // 查
  console.info({ // {map: true, set: true, obj: true}
    map: _map.has('t'),
    set: _set.has(item),
    obj: 't' in obj
  });

  // 改
  _map.set('t', 2);
  item.t = 2;
  obj['t'] = 2;
  console.log(_map, _set, obj); // Map(1) {"t" => 2} Set(1) {Object {t: 2}} Object {t: 2}

  // 删除
  _map.delete('t');
  _set.delete(item);
  delete obj['t'];
  console.log(_map, _set, obj); // Map(0) {} Set(0) {} Object {}
}

/***/ })
/******/ ]);