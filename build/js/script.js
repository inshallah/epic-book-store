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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/modules/bookCardTemplate.js":
/*!********************************************!*\
  !*** ./src/js/modules/bookCardTemplate.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// const bookCardTemplate = {\n//   wrap: '.j-product-cards',\n//   tag: 'a',\n//   tagClass: 'product-card-mini-wrap',\n//   setContent: function(data) {\n//     return `<a class=\"product-card-mini-wrap\" href=\"\">\n//     <article class=\"product-card-mini\">\n//     <h2 class=\"product-card-mini__title\">${data.name}</h2>\n//     <a class=\"product-card-mini__img-wrap\">\n//     <img class=\"product-card-mini__img\" src=\"img/${data.uri}.png\" alt=\"${data.name}\">\n//     </a>\n//     <p class=\"product-card-mini__descr\">${data.desc}</p>\n//     <div class=\"product-card-mini__price\">${data.price}</div>\n//     </article>\n//     </a>`\n//   }\n// };\n// export default bookCardTemplate;\nvar bookCardTemplate = {\n  wrap: '.j-product-cards',\n  tag: 'article',\n  tagClass: 'product-card-mini',\n  setContent: function setContent(data) {\n    return \"<article class=\\\"product-card-mini\\\">\\n    <a class=\\\"product-card-mini__inner\\\" href=\\\"#\\\">\\n    <h2 class=\\\"product-card-mini__title\\\">\".concat(data.name, \"</h2>\\n    <div class=\\\"product-card-mini__img-wrap\\\">\\n    <img class=\\\"product-card-mini__img\\\" src=\\\"img/book-ne-ochevidno.jpg\\\" alt=\\\"\").concat(data.name, \"\\\">\\n    </div>\\n    <p class=\\\"product-card-mini__descr\\\">\").concat(data.desc, \"</p>\\n    </a>\\n    <span class=\\\"product-card-mini__price\\\">\").concat(data.price, \"</span>\\n    </article>\");\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (bookCardTemplate);\n\n//# sourceURL=webpack:///./src/js/modules/bookCardTemplate.js?");

/***/ }),

/***/ "./src/js/modules/createElement.js":
/*!*****************************************!*\
  !*** ./src/js/modules/createElement.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction createElement(data, template) {\n  var card = document.createElement(template.tag);\n  card.classList.add(template.tagClass);\n  card.innerHTML = template.setContent(data);\n  return card;\n}\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (createElement);\n\n//# sourceURL=webpack:///./src/js/modules/createElement.js?");

/***/ }),

/***/ "./src/js/modules/insertElements.js":
/*!******************************************!*\
  !*** ./src/js/modules/insertElements.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement.js */ \"./src/js/modules/createElement.js\");\n\n\nfunction insertElements(dataArray, template) {\n  dataArray.forEach(function (item) {\n    var card = Object(_createElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(item, template);\n    var wrap = document.querySelector(template.wrap);\n    wrap.appendChild(card);\n  });\n}\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (insertElements);\n\n//# sourceURL=webpack:///./src/js/modules/insertElements.js?");

/***/ }),

/***/ "./src/js/modules/sendRequest.js":
/*!***************************************!*\
  !*** ./src/js/modules/sendRequest.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction sendRequest(data, onSuccess) {\n  var xhr = new XMLHttpRequest();\n  xhr.open('GET', data);\n  xhr.send();\n\n  xhr.onreadystatechange = function () {\n    if (xhr.readyState === 4 && xhr.status === 200) {\n      var responseObj = JSON.parse(xhr.responseText);\n      onSuccess(responseObj); // const wrap = document.querySelector(bookCardTemplate.wrap);\n      // if (wrap.children) {\n      //   wrap.innerHTML = '';\n      // }\n      // if (document.querySelector(bookCardTemplate.wrap)) {\n      //   console.log(request)\n      //   insertElements(request.items, bookCardTemplate);\n      // }\n    } else {\n      console.log(\"\\u0416\\u0434\\u0443 \\u0437\\u0430\\u0433\\u0440\\u0443\\u0437\\u043A\\u0438: \".concat(xhr.readyState));\n    }\n  };\n}\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (sendRequest);\n\n//# sourceURL=webpack:///./src/js/modules/sendRequest.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_insertElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/insertElements.js */ \"./src/js/modules/insertElements.js\");\n/* harmony import */ var _modules_bookCardTemplate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/bookCardTemplate.js */ \"./src/js/modules/bookCardTemplate.js\");\n/* harmony import */ var _modules_sendRequest_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/sendRequest.js */ \"./src/js/modules/sendRequest.js\");\n\n\n\nvar data = {\n  page: 1,\n  perPage: 8,\n  type: ''\n};\nvar wrap = document.querySelector(_modules_bookCardTemplate_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].wrap);\n\nif (wrap) {\n  var dataAjax = createDataAjax();\n  Object(_modules_sendRequest_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(dataAjax, function (responseText) {\n    console.log(responseText);\n\n    if (wrap.children) {\n      wrap.innerHTML = '';\n    }\n\n    Object(_modules_insertElements_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(responseText.items, _modules_bookCardTemplate_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  });\n} //Вешаем слушатель на табы\n\n\nvar tabWrap = document.querySelector('.j-tabs');\nvar tabsItemArray = Array.from(tabWrap.children);\ntabsItemArray.forEach(function (tab) {\n  var link = tab.firstElementChild;\n  link.addEventListener('click', function (event) {\n    event.preventDefault();\n    data.type = event.target.dataset.type;\n\n    if (window.matchMedia(\"(min-width: 768px)\").matches) {\n      data.perPage = 8;\n    } else {\n      data.perPage = 3;\n    }\n\n    ;\n    var dataAjax = createDataAjax();\n    Object(_modules_sendRequest_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(dataAjax, function (responseText) {\n      console.log(responseText);\n\n      if (wrap.children) {\n        wrap.innerHTML = '';\n      }\n\n      Object(_modules_insertElements_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(responseText.items, _modules_bookCardTemplate_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n    });\n  });\n}); //Функция подготовки урла для  GET-запроса\n\nfunction createDataAjax() {\n  if (window.matchMedia(\"(min-width: 768px)\").matches) {\n    data.perPage = 8;\n  } else {\n    data.perPage = 3;\n  }\n\n  ;\n  return \"https://api.do-epixx.ru/htmlpro/bookstore/books/get/\".concat(data.page, \"/\").concat(data.perPage, \"/\").concat(data.type);\n}\n\n; // function sendRequest(data) {\n//   let xhr = new XMLHttpRequest;\n//   xhr.open('GET', data);\n//   xhr.send();\n//   xhr.onreadystatechange = function() {\n//     if (xhr.readyState === 4 && xhr.status === 200) {\n//       const request = JSON.parse(xhr.responseText);\n//       const wrap = document.querySelector(bookCardTemplate.wrap);\n//       if (wrap.children) {\n//         wrap.innerHTML = '';\n//       }\n//       if (document.querySelector(bookCardTemplate.wrap)) {\n//         console.log(request)\n//         insertElements(request.items, bookCardTemplate);\n//       };\n//     } else {\n//       console.log(`Жду загрузки: ${xhr.readyState}`)\n//     }\n//   };\n// };\n// const data = {\n//   books: [\n//   {\n//     title: \"Латеральная логика\",\n//     image: \"img/book/*jpg\",\n//     description: \"Головоломный путь к нестандартному мышлению\",\n//     price: '500р'\n//     // href:\n//   }, {\n//     title: \"Латеральная логика\",\n//     image: \"img/book/*jpg\",\n//     description: \"Головоломный путь к нестандартному мышлению\",\n//     price: '500р'\n//     // href:\n//   }, {\n//     title: \"Латеральная логика\",\n//     image: \"img/book/*jpg\",\n//     description: \"Головоломный путь к нестандартному мышлению\",\n//     price: '500р'\n//     // href:\n//   }, {\n//     title: \"Латеральная логика\",\n//     image: \"img/book/*jpg\",\n//     description: \"Головоломный путь к нестандартному мышлению\",\n//     price: '500р'\n//     // href:\n//   } ,   {\n//     title: \"Латеральная логика\",\n//     image: \"img/book/*jpg\",\n//     description: \"Головоломный путь к нестандартному мышлению\",\n//     price: '500р'\n//     // href:\n//   }, {\n//     title: \"Латеральная логика\",\n//     image: \"img/book/*jpg\",\n//     description: \"Головоломный путь к нестандартному мышлению\",\n//     price: '500р'\n//     // href:\n//   }, {\n//     title: \"Латеральная логика\",\n//     image: \"img/book/*jpg\",\n//     description: \"Головоломный путь к нестандартному мышлению\",\n//     price: '500р'\n//     // href:\n//   }, {\n//     title: \"Латеральная логика\",\n//     image: \"img/book/*jpg\",\n//     description: \"Головоломный путь к нестандартному мышлению\",\n//     price: '500р'\n//     // href:\n//   }\n//   ]\n// };\n// const cards = document.querySelector('.j-product-cards');\n// const elements = cards.querySelectorAll('.product-card-mini');\n// function createCards(data) {\n//   const booksArray = data.books;\n//   let cardString = ``;\n// booksArray.forEach(function(book) {\n//   cardString = cardString + `<a class=\"product-card-mini-wrap\" href=\"\">\n//   <article class=\"product-card-mini\">\n//   <h2 class=\"product-card-mini__title\">${book.title}</h2>\n//   <a class=\"product-card-mini__img-wrap\">\n//   <img class=\"product-card-mini__img\" src=\"${book.src}\" alt=\"${book.title}\">\n//   </a>\n//   <p class=\"product-card-mini__descr\">${book.description}</p>\n//   <div class=\"product-card-mini__price\">${book.price}</div>\n//   </article>\n//   </a>`\n// })\n//   return cardString;\n// };\n// function insertElements(data, wrap) {\n//   const html = createCards(data);\n//   wrap.innerHTML = html;\n// };\n// if(cards) {\n//   insertElements(data, cards);\n// };\n// const cardsWrap = document.querySelector('.j-member-cards');\n// function createElement(member) {\n//   const card = document.createElement('div');\n//   card.classList.add('member-card');\n//   card.innerHTML = `<a class=\"product-card-mini-wrap\" href=\"\">\n//   <article class=\"product-card-mini\">\n//   <h2 class=\"product-card-mini__title\">${book.title}</h2>\n//   <a class=\"product-card-mini__img-wrap\">\n//   <img class=\"product-card-mini__img\" src=\"${book.src}\" alt=\"${book.title}\">\n//   </a>\n//   <p class=\"product-card-mini__descr\">${book.description}</p>\n//   <div class=\"product-card-mini__price\">${book.price}</div>\n//   </article>\n//   </a>`;\n//   return card;\n// };\n// function insertElements(obj, wrap) {\n//   const membersArr = obj.members;\n//   membersArr.forEach((member) => {\n//     const card = createElement(member);\n//     wrap.appendChild(card);\n//   })\n// };\n// if (cardsWrap) {\n//   insertElements(data, cardsWrap);\n// };\n\n//# sourceURL=webpack:///./src/js/script.js?");

/***/ })

/******/ });