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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return addContact; });\nfunction addContact() {\n  const contentDiv = document.getElementById( 'content' );\n\n  const contactDiv = document.createElement( 'id' );\n  const contactHeadline = document.createElement( 'h1' );\n  const contactAddress = document.createElement( 'address' );\n  const googleMapIFrame = document.createElement( 'iFrame' );\n\n  contactDiv.setAttribute( 'id', 'contact-content' );\n  contactAddress.setAttribute( 'id', 'contact-address' );\n  googleMapIFrame.setAttribute( 'id', 'google-map' );\n\n  contactHeadline.textContent = 'Contact';\n\n  contactAddress.innerHTML = \"Pizzeria Don Giovanni <br> Mail: Giovanni@pizzeria.com <br> Tel: 034/523.22.19 <br> 5, Piazza Bologna, 12390 Italia\";\n\n  googleMapIFrame.src = \"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.043319369189!2d12.51898761581546!3d41.91342747118094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61652cb0f03d%3A0x7786fbc021d2a78d!2sPiazza%20Bologna%2C%2000162%20Roma%20RM%2C%20Italy!5e0!3m2!1sen!2sbe!4v1579526943229!5m2!1sen!2sbe\";\n\n  googleMapIFrame.width = '600';\n  googleMapIFrame.height = '450';\n  googleMapIFrame.frameborder = '0';\n\n  contactDiv.append( contactHeadline, contactAddress, googleMapIFrame );\n  contentDiv.append( contactDiv );\n}\n\n\n\n\n//# sourceURL=webpack:///./src/contact.js?");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return addHomePage; });\nfunction addHomePage() {\n  const contentDiv = document.getElementById( \"content\" );\n\n  const homeDiv = document.createElement( 'div' );\n\n  homeDiv.setAttribute( 'id', 'home-content' );\n\n  const addHeader = () => {\n    const header = document.createElement( 'h1' );\n    header.setAttribute( \"id\", \"header-title\" );\n    header.textContent = \"Don Giovanni's Pizza Restaurant\";\n    homeDiv.append( header );\n  }\n\n  const addImage = () => {\n    const imageSource = \"../src/assets/images/pizza restaurant.jpeg\";\n    document.body.style.backgroundImage = `url( \"${imageSource}\" )`;\n  }\n\n  const addCopy = () => {\n    const copy = document.createElement( 'p' );\n    copy.setAttribute( \"id\", \"excerpt\" );\n    copy.textContent = \"Don Giovanni's will open your eyes as to what a real, napolitan Pizza is supposed to taste like. Baked in a wood oven, using only the freshest ingredients our mediterranean soil gives us, they're a proud example of the noble craft we set out to master more than 25 years ago.\";\n    homeDiv.append( copy );\n  }\n\n  addHeader();\n  addImage();\n  addCopy();\n\n  contentDiv.append( homeDiv );\n}\n\n\n\n\n//# sourceURL=webpack:///./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\nwindow.onload = Object(_homepage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\nconst navigationHeader = document.getElementById( 'header-banner' );\nconst contentDiv       = document.getElementById( 'content' );\n\nconst updatePageContent = event => {\n  const innerText = event.target.textContent;\n\n  switch( innerText ) {\n    case 'Menu' :\n      if ( document.getElementById( 'menu-content' )) {\n        return;\n      }\n      contentDiv.innerHTML = '';\n      Object(_menu__WEBPACK_IMPORTED_MODULE_1__[\"addMenu\"])();\n      updateTabStyle( innerText );\n      break;\n\n    case 'Contact' :\n      if ( document.getElementById( 'contact-content' )) {\n        return;\n      }\n      contentDiv.innerHTML = '';\n      Object(_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n      updateTabStyle( innerText );\n      break;\n\n    case 'Home' :\n      if ( document.getElementById( 'home-content' )) {\n        return;\n      }\n      contentDiv.innerHTML = '';\n      Object(_homepage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n      updateTabStyle( innerText );\n      break;\n  }\n};\n\nconst updateTabStyle = tabText => {\n  const links = [...document.getElementById( 'links' ).children];\n  const stylingClass = 'link__selected';\n\n  links.forEach( link => {\n    if ( link.textContent === tabText ) {\n      link.classList.add( stylingClass );\n    } else {\n      link.classList.remove( stylingClass );\n    }\n  });\n}\n\nnavigationHeader.addEventListener( 'click', updatePageContent );\n\nupdateTabStyle( 'Home' );\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: addMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addMenu\", function() { return addMenu; });\nconst menuContents = [\n  {\n    name: \"Margherita\",\n    ingredients: \"tomato, mozzarela, oregano\",\n    price: 10,\n  },\n  {\n    name: \"Napolitana\",\n    ingredients: \"tomato, mozzarela, oregano, mushrooms\",\n    price: 12,\n  },\n  {\n    name: \"Capriciosa\",\n    ingredients: \"tomato, mozzarela, oregano, mushrooms, ham\",\n    price: 12,\n  },\n  {\n    name: \"Diavola\",\n    ingredients: \"tomato, mozzarela, pepperoni, oregano, mushrooms\",\n    price: 12,\n  },\n  {\n    name: \"Del Capo\",\n    ingredients: \"tomato, mozzarela, oregano, mushrooms, Parma\",\n    price: 14,\n  },\n  {\n    name: \"Quattro Fromaggio\",\n    ingredients: \"tomato, mozzarela, oregano, pargimiano, gorgonzola, magor\",\n    price: 14,\n  },\n];\n\nfunction addMenu() {\n  const contentDiv = document.getElementById( 'content' );\n\n  const menuDiv      = document.createElement( 'div' );\n  const menuHeadline = document.createElement( 'h1' );\n  const menuList     = document.createElement( 'ul' );\n\n  menuDiv.setAttribute( 'id', 'menu-content' );\n  menuHeadline.setAttribute( 'id', 'menu-headline' );\n  menuList.setAttribute( 'id', 'menu-list' );\n\n  menuHeadline.innerHTML = \"Menu\";\n\n  menuContents.forEach( pizza => {\n    const menuListElement = document.createElement( 'li' );\n    const name            = document.createElement( 'h2' );\n    const menuDetails     = document.createElement( 'div' );\n    const ingredientsSpan = document.createElement( 'span' );\n    const priceSpan       = document.createElement( 'span' );\n\n    menuListElement.classList.add( 'menu-list-item' );\n    name.classList.add( 'item-name' );\n    menuDetails.classList.add( 'item-details' );\n    ingredientsSpan.classList.add( 'item-ingredients' );\n    priceSpan.classList.add( 'item-price' );\n\n    name.textContent = pizza.name;\n    ingredientsSpan.textContent = pizza.ingredients;\n    priceSpan.textContent = pizza.price;\n\n    menuDetails.append( ingredientsSpan, priceSpan );\n    menuListElement.append( name, menuDetails );\n    menuList.append( menuListElement );\n  });\n    menuDiv.append( menuHeadline, menuList );\n    contentDiv.append( menuDiv );\n}\n\n\n\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ })

/******/ });