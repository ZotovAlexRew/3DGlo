/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/validation */ \"./modules/validation.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"27 march 2022\");\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_validation__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n  const main = document.querySelector('main');\r\n  const menu = document.querySelector('menu');\r\n  const arrDown = document.querySelector('main>a');\r\n\r\n  const handleMenu = () => {\r\n    menu.classList.toggle('active-menu');\r\n  };\r\n\r\n  const scroll = (element) => {\r\n    const id = element.getAttribute('href');\r\n    document.querySelector(id).scrollIntoView({\r\n      behavior: 'smooth',\r\n      block: 'start'\r\n    });\r\n  };\r\n\r\n  main.addEventListener('click', (e) => {\r\n    if (e.target.closest('.menu')) {\r\n      handleMenu();\r\n    }\r\n    else if (e.target.slosest('a')) {\r\n      e.preventDefault();\r\n      scroll(arrDown);\r\n    }\r\n  });\r\n\r\n  menu.addEventListener('click', (e) => {\r\n    if(e.target.matches('ul>li>a')) {\r\n      let link = e.target.closest('a');\r\n      e.preventDefault();\r\n      scroll(link);\r\n      handleMenu();\r\n    }\r\n    else if (e.target.closest('.close-btn')) \r\n    {\r\n      e.preventDefault();\r\n      handleMenu();\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n  const modal = document.querySelector('.popup');\r\n  const buttons = document.querySelectorAll('.popup-btn');\r\n  const modalContent = modal.querySelector('.popup-content');\r\n  let animation;\r\n  let count = -70;\r\n  let widthScreen = window.screen.width;\r\n\r\n  function appear () {\r\n      count++;\r\n      animation = requestAnimationFrame(appear);\r\n      if (count > 20)\r\n      {\r\n        cancelAnimationFrame(animation);\r\n      }\r\n      else\r\n      {\r\n        modalContent.style.top = count * 6 + 'px';\r\n      }\r\n  }\r\n\r\n  buttons.forEach(btn => {\r\n    btn.addEventListener('click', () => {\r\n      if (widthScreen < 768)\r\n      {\r\n        modal.style.display = 'block';\r\n      }\r\n      else\r\n      {\r\n        modal.style.display = 'block';\r\n        appear();\r\n      }\r\n    });\r\n  });\r\n\r\n  modal.addEventListener('click', (e) => {\r\n      if(!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {\r\n         modal.style.display = 'none';\r\n         count = -70;\r\n      }\r\n   });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n    const tabPanel = document.querySelector('.service-header');\r\n    const tabs = document.querySelectorAll('.service-header-tab');\r\n    const tabContent = document.querySelectorAll('.service-tab');\r\n\r\n    tabPanel.addEventListener('click', (e) => {\r\n        if (e.target.closest('.service-header-tab')) {\r\n            const tabBtn = e.target.closest('.service-header-tab');\r\n            tabs.forEach((tab, index) => {\r\n                if(tab === tabBtn) \r\n                {\r\n                    tab.classList.add('active');\r\n                    tabContent[index].classList.remove('d-none');\r\n                } \r\n                else \r\n                {\r\n                    tab.classList.remove('active');\r\n                    tabContent[index].classList.add('d-none');\r\n                }\r\n            });\r\n        }\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n  //получил доступ к таймеру\r\n  const timerHours = document.getElementById('timer-hours');\r\n  const timerMinutes = document.getElementById('timer-minutes');\r\n  const timerSeconds = document.getElementById('timer-seconds');\r\n  \r\n  //Получаем цифры времени\r\n  const getTimeRemaining = () => {\r\n    let dateStop = new Date(deadline).getTime();\r\n    let dateNow = new Date().getTime();\r\n    let timeRemaining = (dateStop - dateNow) / 1000;\r\n    let hours = Math.floor(timeRemaining / 60 / 60);\r\n    let minutes = Math.floor((timeRemaining / 60) % 60);\r\n    let seconds = Math.floor(timeRemaining % 60);\r\n\r\n    if (timeRemaining < 0)\r\n    {\r\n      timeRemaining = 0;\r\n      hours = 0;\r\n      minutes = 0;\r\n      seconds = 0;\r\n    }\r\n\r\n    return {timeRemaining, hours, minutes, seconds};\r\n  };\r\n\r\n\r\n  //Заношу данные на страницу\r\n  const updateClock = () => {\r\n    let getTime = getTimeRemaining();\r\n\r\n    getTime.hours < 10 ? timerHours.textContent = '0' + getTime.hours : timerHours.textContent = getTime.hours;\r\n    getTime.minutes < 10 ? timerMinutes.textContent = '0' + getTime.minutes : timerMinutes.textContent = getTime.minutes;\r\n    getTime.seconds < 10 ? timerSeconds.textContent = '0' + getTime.seconds : timerSeconds.textContent = getTime.seconds;\r\n  };\r\n\r\n  //Запуск таймера\r\n  const startTimer = () => {\r\n    let intervalId;\r\n    let getTime = getTimeRemaining();\r\n    updateClock();\r\n\r\n    if(getTime.timeRemaining > 0)\r\n    {\r\n      intervalId = setInterval(updateClock, 1000);\r\n    }\r\n    else\r\n    {\r\n      clearInterval(intervalId);\r\n    }\r\n  };\r\n  startTimer();  \r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\r\n\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ }),

/***/ "./modules/validation.js":
/*!*******************************!*\
  !*** ./modules/validation.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validation = () => {\r\n  const calcItemNumbers = document.querySelectorAll('.calc-item');\r\n  const inputText = document.querySelectorAll('input[id*=name], input.mess');\r\n  const emails = document.querySelectorAll('input[type=\"email\"]');\r\n  const phone = document.querySelectorAll('input[type=\"tel\"]');\r\n\r\n\r\n  function noMoreSpace(expr) {\r\n    let reg = /\\s+/g;\r\n    expr.value = expr.value.replace(reg, ' ');\r\n    if (reg.test(expr.value[0]) || reg.test(expr.value[expr.value.length - 1])) {\r\n      expr.value = expr.value.trim();\r\n    }\r\n  }\r\n\r\n  function noMoreHyphen(expr) {\r\n    let reg = /\\-+/g;\r\n    expr.value = expr.value.replace(reg, '-');\r\n    if (reg.test(expr.value[0]) || reg.test(expr.value[expr.value.length - 1])) {\r\n      expr.value = expr.value.replace(reg, '');\r\n    }\r\n  }\r\n\r\n  function letter(expr) {\r\n    let regBig = /[А-Я]/;\r\n    let regSmall = /[а-я]/;\r\n    let arr = expr.value.split(' ');\r\n    let result = [];\r\n    arr.forEach( item => {\r\n      if(regSmall.test(item[0]))\r\n      {\r\n        item = item[0].toUpperCase() + item.slice(1).toLowerCase();\r\n      }\r\n      else\r\n      {\r\n        item = item;\r\n      }\r\n\r\n      if (regBig.test(item.slice(1)))\r\n      {\r\n        item = item[0].toUpperCase() + item.slice(1).toLowerCase();\r\n      }\r\n      else\r\n      {\r\n        item = item;\r\n      }\r\n\r\n      result.push(item);\r\n      expr.value = result.join(' ');\r\n    });\r\n  }\r\n\r\n  calcItemNumbers.forEach(item => {\r\n    item.addEventListener('input', function(e) {\r\n      e.target.value = e.target.value.replace(/\\D/g, '');\r\n    });\r\n  });\r\n\r\n  inputText.forEach(item => {\r\n    item.addEventListener('input', function(e) {\r\n      e.target.value = e.target.value.replace(/[^а-яА-я\\s\\-]/g, '');\r\n    });\r\n  });\r\n\r\n  inputText.forEach(item => {\r\n    item.addEventListener('blur', function() {\r\n      noMoreSpace(item);\r\n      noMoreHyphen(item);\r\n      letter(item);\r\n    });\r\n  });\r\n\r\n  emails.forEach(item => {\r\n    item.addEventListener('input', function(e) {\r\n      e.target.value = e.target.value.replace(/[^a-zA-Z0-9\\@\\-\\_\\.\\!\\~\\*\\']/g, '');\r\n    });\r\n  });\r\n\r\n  emails.forEach(item => {\r\n    item.addEventListener('blur', function() {\r\n      noMoreHyphen(item);\r\n    });\r\n  });\r\n\r\n  phone.forEach(item => {\r\n    item.addEventListener('input', function(e) {\r\n      e.target.value = e.target.value.replace(/[^0-9\\(\\)\\-]/g, '');\r\n    });\r\n  });\r\n\r\n  phone.forEach(item => {\r\n    item.addEventListener('blur', function() {\r\n      noMoreHyphen(item);\r\n    });\r\n  });\r\n};\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validation);\n\n//# sourceURL=webpack:///./modules/validation.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;