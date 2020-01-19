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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ \"./src/page-load.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\nObject(_page_load__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\nconst navigationHeader = document.getElementById( 'header-banner' );\n\n\nconst updatePageContent = event => {\n  console.log( event.target.textContent );\n};\n\nnavigationHeader.addEventListener( 'click', updatePageContent );\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: addMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addMenu\", function() { return addMenu; });\nconst menuContents = [\n  {\n    name: \"Margherita\",\n    ingredients: \"tomato, mozzarela, oregano\",\n    price: 10,\n  },\n  {\n    name: \"Napolitana\",\n    ingredients: \"tomato, mozzarela, oregano, mushrooms\",\n    price: 12,\n  },\n  {\n    name: \"Capriciosa\",\n    ingredients: \"tomato, mozzarela, oregano, mushrooms, ham\",\n    price: 12,\n  },\n  {\n    name: \"Diavola\",\n    ingredients: \"tomato, mozzarela, pepperoni, oregano, mushrooms\",\n    price: 12,\n  },\n  {\n    name: \"Del Capo\",\n    ingredients: \"tomato, mozzarela, oregano, mushrooms, Parma\",\n    price: 14,\n  },\n  {\n    name: \"Quattro Fromaggio\",\n    ingredients: \"tomato, mozzarela, oregano, pargimiano, gorgonzola, magor\",\n    price: 14,\n  },\n];\n\nfunction addMenu() {\n  const menuDiv  = document.createElement( 'div' );\n  const menuList = document.createElement( 'ul' );\n\n  menuDiv.setAttribute( 'id', 'menu-content' );\n  menuList.setAttribute( 'id', 'menu-list' );\n\n  menuContents.forEach( pizza => {\n    const menuListElement = document.createElement( 'li' );\n    const nameSpan        = document.createElement( 'span' );\n    const ingredientsSpan = document.createElement( 'span' );\n    const priceSpan       = document.createElement( 'span' );\n\n    menuListElement.classList.add( 'menu-list-item' );\n    nameSpan.classList.add( 'name-span' );\n    ingredientsSpan.classList.add( 'ingredients-span' );\n    priceSpan.classList.add( 'price-span' );\n\n    nameSpan.textContent = pizza.name;\n    ingredientsSpan.textContent = pizza.ingredients;\n    priceSpan.textContent = pizza.price;\n\n    menuListElement.append( nameSpan, ingredientsSpan, priceSpan );\n    menuList.append( menuListElement );\n  });\n\n    menuDiv.append( menuList );\n    document.body.append( menuDiv );\n}\n\n\n\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return loadPage; });\nconst contentDiv = document.getElementById( \"content\" );\n\nconst addHeader = () => {\n  const header = document.createElement( 'h1' );\n  header.setAttribute( \"id\", \"header-title\" );\n  header.textContent = \"Don Giovanni's Pizza Restaurant\";\n  contentDiv.append( header );\n}\n\nconst addImage = () => {\n  const imageSource = \"../src/assets/images/pizza restaurant.jpeg\";\n  document.body.style.backgroundImage = `url( \"${imageSource}\" )`;\n}\n\nconst addCopy = () => {\n  const copy = document.createElement( 'p' );\n  copy.setAttribute( \"id\", \"excerpt\" );\n  copy.textContent =\n      \"Don Giovanni's will open your eyes as to what a real, napolitan Pizza is supposed to taste like. Baked in a wood oven, using only the freshest ingredients our mediterranean soil gives us, they're a proud example of the noble craft we set out to master more than 25 years ago.\";\n  contentDiv.append( copy );\n}\n\nfunction loadPage() {\n  addHeader();\n  addImage();\n  addCopy();\n}\n\n\n\n\n//# sourceURL=webpack:///./src/page-load.js?");

/***/ })

/******/ });