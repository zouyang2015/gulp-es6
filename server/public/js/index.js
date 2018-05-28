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


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 类
{
  // 基本定义和生成实例
  var Parent = function Parent() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'mk';

    _classCallCheck(this, Parent);

    this.name = name;
  };

  var v_parent = new Parent('v');
  console.log('基本定义和生成实例', v_parent);
}

{
  // 继承
  var _Parent = function _Parent() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'mk';

    _classCallCheck(this, _Parent);

    this.name = name;
  };

  var Child = function (_Parent2) {
    _inherits(Child, _Parent2);

    function Child() {
      _classCallCheck(this, Child);

      return _possibleConstructorReturn(this, (Child.__proto__ || Object.getPrototypeOf(Child)).apply(this, arguments));
    }

    return Child;
  }(_Parent);

  console.log('继承', new Child());
}

{
  // 继承,子类修改父类的参数
  var _Parent3 = function _Parent3() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'mk';
    var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;

    _classCallCheck(this, _Parent3);

    this.name = name;
    this.age = age;
  };

  var _Child = function (_Parent4) {
    _inherits(_Child, _Parent4);

    function _Child() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'child';
      var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;

      _classCallCheck(this, _Child);

      // 只能放在构造函数第一行
      var _this2 = _possibleConstructorReturn(this, (_Child.__proto__ || Object.getPrototypeOf(_Child)).call(this, name, age));

      _this2.type = 'child'; // 在继承关系中，用super后，自己的定义内容一定要放到super之后
      return _this2;
    }

    return _Child;
  }(_Parent3);

  console.log('继承', new _Child());
}

{
  // getter,setter
  var _Parent5 = function () {
    function _Parent5() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'mk';
      var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;

      _classCallCheck(this, _Parent5);

      this.name = name;
      this.age = age;
    }

    _createClass(_Parent5, [{
      key: 'longName',
      get: function get() {
        // 这里是属性，不是函数
        return 'zou' + this.name;
      },
      set: function set(value) {
        this.name = value;
      }
    }]);

    return _Parent5;
  }();

  var v = new _Parent5();
  console.log('getter', v.longName);
  v.longName = 'yang';
  console.log('getter', v.longName);
}

{
  // 静态方法
  var _Parent6 = function () {
    function _Parent6() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'mk';
      var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;

      _classCallCheck(this, _Parent6);

      this.name = name;
      this.age = age;
    }

    _createClass(_Parent6, null, [{
      key: 'tell',
      value: function tell() {
        // 这时候是个方法, 只能通过类去调用，不能通过类的实例去调用
        console.log('tell');
      }
    }]);

    return _Parent6;
  }();

  _Parent6.tell();
}

{
  // 静态属性
  var _Parent7 = function _Parent7() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'mk';
    var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;

    _classCallCheck(this, _Parent7);

    this.name = name;
    this.age = age;
  };

  _Parent7.type = 'test'; // 静态属性
  console.log('静态属性', _Parent7.type);
}

/***/ })
/******/ ]);