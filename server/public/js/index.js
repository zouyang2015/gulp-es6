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


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// 数据结构
// set(集合,并且数据是唯一的), WeakSet, Map, WeakMap
// 作用: 去重
// 'add', 'delete', 'clear', 'has'
// key,value是相同值,可以使用数组的遍历方法
{
  // 向set里增加元素要用add这个方法
  var list = new Set();
  // Set添加元素是用add
  list.add(5);
  list.add(7);
  console.log(list.size); // 2 list的长度
}

{
  var arr = [1, 2, 3, 4, 5];
  var _list = new Set(arr);
  console.log(_list.size); // 5
}

{
  var _list2 = new Set();
  _list2.add(1);
  _list2.add(2);
  _list2.add(1); // 没有成功添加进入
  console.log(_list2); // Set(2) {1, 2}
}

{
  // 去重-但不做数据类型的转换
  var _arr = [1, 2, 3, 1, '2'];
  var _list3 = new Set(_arr);
  console.log(_list3); // Set(4) {1, 2, 3, "2"}
}

{
  // 'add', 'delete', 'clear', 'has'
  var _arr2 = ['add', 'delete', 'clear', 'has'];
  var _list4 = new Set(_arr2);
  console.log('has', _list4.has('add')); // has true
  console.log('delete', _list4.delete('add'), _list4); // delete true Set(3) {"delete", "clear", "has"}
  _list4.clear('list');
  console.log(_list4); // Set(0) {}
}

{
  // 遍历
  var _arr3 = ['add', 'delete', 'clear', 'has'];
  var _list5 = new Set(_arr3);

  // add
  // delete
  // clear
  // has
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = _list5.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;

      console.log(key);
    }

    // add
    // delete
    // clear
    // has
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = _list5.values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var value = _step2.value;

      console.log(value);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = _list5[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var _value = _step3.value;

      console.log(_value);
    }

    // add add
    // delete delete
    // clear clear
    // has has
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3.return) {
        _iterator3.return();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    for (var _iterator4 = _list5.entries()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      var _step4$value = _slicedToArray(_step4.value, 2),
          _value2 = _step4$value[0],
          _key = _step4$value[1];

      console.log(_value2, _key);
    }
  } catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion4 && _iterator4.return) {
        _iterator4.return();
      }
    } finally {
      if (_didIteratorError4) {
        throw _iteratorError4;
      }
    }
  }

  _list5.forEach(function (item) {
    console.log(item);
  });
}

{
  // weakList
  // 接收的key值是对象
  // 没有size属行，不能用clear
  // 不能遍历
  // 不检测地址是否被垃圾回收掉了
  // 'add', 'delete', 'has'
  // 不能遍历
  var weakList = new WeakSet();
  var arg = {};
  weakList.add(arg);
  // weakList.add(2) // 出错，不能是非对象数据类型的
  console.log(weakList); // WeakSet {Object {}}
}
{
  // Map (key, value)
  // Map里的Key可以是任意数据类型
  var map = new Map();
  var _arr4 = ['123'];
  // Map添加元素是用set
  map.set(_arr4, 456);
  console.log(map); // Map(1) {["123"] => 456}
  // 用get获取数据
  console.log(map.get(_arr4)); // 456
}

{
  // Map第2种定义方式
  var _map = new Map([['a', 123], ['b', 456]]);
  console.log(_map); // Map(2) {"a" => 123, "b" => 456}
  console.log(_map.size); // 2
  // delete
  console.log(_map.delete('a'), _map); // true Map(1) {"b" => 456}
  // clear
  // 遍历同set
}

{
  // weakMap
  // 接收的key值是对象
  // 没有size属行，不能用clear
  // 不能遍历
  var weakmap = new WeakMap();
}

/***/ })
/******/ ]);