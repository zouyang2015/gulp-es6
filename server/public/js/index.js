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


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Proxy代理-连接用户和中间最真实对象的一个层
// Reflect反射-反射的是object
{
  var obj = {
    time: '2017-03-11',
    name: 'net',
    _r: 123
  };

  var monitor = new Proxy(obj, {
    // 拦截对象属性的读取
    get: function get(target, key) {
      return target[key].replace('2017', '2018');
    },

    // 拦截对象设置属性
    set: function set(target, key, value) {
      return key === 'name' ? target[key] = value : target[key];
    },

    // 拦截key in object操作
    has: function has(target, key) {
      return key === 'name' ? target[key] : false;
    },

    // 拦截删除
    deleteProperty: function deleteProperty(target, key) {
      if (key.indexOf('_') > -1) {
        delete target[key];
        return true;
      } else {
        return target[key];
      }
    },

    // 拦截Object.keys,Object.getOwnPropertySymbols, Object.getOwnPropertyNames
    ownKeys: function ownKeys(target) {
      return Object.keys(target).filter(function (item) {
        return item !== 'time';
      });
    }
  });

  console.log(monitor.name, monitor.time); // net 2018-03-11

  monitor.time = '2018';
  monitor.name = 'zou';
  console.log(monitor.name, monitor.time); // zou 2018-03-11

  console.log('has', 'name' in monitor, 'time' in monitor); //has true false

  // delete monitor.time
  // delete monitor._r
  // console.log(monitor) // Proxy {time: "2017-03-11", name: "zou"}

  console.log('ownKeys', Object.keys(monitor)); // ["name", "_r"]
  console.log('ownKeys', Object.getOwnPropertyNames(monitor)); // ["name", "_r"]
}

{
  var _obj = {
    time: '2017-03-11',
    name: 'net',
    _r: 123

    // 直接使用Reflect
  };console.log('Reflect get', Reflect.get(_obj, 'time')); // 2017-03-11
  Reflect.set(_obj, 'name', 'zou');
  console.log('Reflect get', Reflect.get(_obj, 'name')); // zou
  console.log('has', Reflect.has(_obj, 'name')); // true
}

// Proxy,Reflect适用场景
{
  var validator = function validator(target, _validator) {
    return new Proxy(target, {
      _validator: _validator,
      set: function set(target, key, value, proxy) {
        if (target.hasOwnProperty(key)) {
          var va = this._validator[key];
          if (!!va(value)) {
            return Reflect.set(target, key, value, proxy);
          } else {
            throw Error('\u4E0D\u80FD\u8BBE\u7F6E' + key);
          }
        } else {
          throw Error(key + ' \u4E0D\u5B58\u5728');
        }
      }
    });
  };

  var personValidators = {
    name: function name(val) {
      return typeof val === 'string';
    },
    age: function age(val) {
      return typeof val === 'number' && val > 18;
    }
  };

  var Person = function Person(name, age) {
    _classCallCheck(this, Person);

    this.name = name;
    this.age = age;
    return validator(this, personValidators);
  };

  var person = new Person('lilei', 30);
  console.log('person', person); // Proxy {name: "lilei", age: 30}

  person.name = 48; // 报错  不能设置name
  // person.name = 'zou'
  // person.age = 12 // 报错  不能设置age
  console.log(person.name, person.age);
}

/***/ })
/******/ ]);