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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/validation */ \"./modules/validation.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"24 march 2022\");\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_validation__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('.portfolio-content', '.portfolio-item');\r\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(100);\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calc = (price = 100) => {\r\n    const calcBlock = document.querySelector('.calc-block');\r\n    const calcType = document.querySelector('.calc-type');\r\n    const calcSquare= document.querySelector('.calc-square');\r\n    const calcCount = document.querySelector('.calc-count');\r\n    const calcDay = document.querySelector('.calc-day');\r\n    const total = document.querySelector('#total');\r\n\r\n    const countCalc = () => {\r\n        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;\r\n        const calcSquareValue = calcSquare.value;\r\n\r\n        let totalValue = 0;\r\n        let calcCountValue = 1;\r\n        let calcDayValue = 1;\r\n\r\n        if (calcCount.value > 1) \r\n        {\r\n            calcCountValue +=  +calcCount.value / 10;\r\n        }\r\n\r\n        if (calcDay.value && calcDay.value < 5) \r\n        {\r\n            calcDayValue = 2;\r\n        } \r\n        else if (calcDay.value && calcDay.value < 10) \r\n        {\r\n            calcDayValue = 1.5;\r\n        }\r\n        \r\n        if(calcTypeValue && calcSquareValue) \r\n        {\r\n            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;\r\n        } \r\n        else \r\n        {\r\n            totalValue = 0;\r\n        }\r\n        \r\n        \r\n        const animationNumbers = (result) => {\r\n            if (result === 0) \r\n            {\r\n                return;\r\n            }\r\n\r\n            let start = +total.textContent;\r\n            let increment;\r\n            if (result > start)\r\n            {\r\n                increment = 1;\r\n            }\r\n            else if (result < start)\r\n            {\r\n                increment = -1;\r\n            }\r\n            else if (result === start)\r\n            {\r\n                return;\r\n            }\r\n\r\n            let current = start;\r\n            let timer = setInterval(function() {\r\n                current += increment;\r\n                total.textContent = current;\r\n                \r\n               if (current === result)\r\n                {\r\n                    clearInterval(timer);\r\n                    \r\n                }\r\n            }, 0.000001);\r\n        };\r\n\r\n        animationNumbers(totalValue);\r\n    };\r\n\r\n    \r\n\r\n    calcBlock.addEventListener('change', (e) => {\r\n        if (e.target === calcType || e.target === calcSquare ||\r\n            e.target === calcCount || e.target === calcDay) {\r\n                countCalc();\r\n            }\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack:///./modules/calc.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n  const body = document.querySelector('body');\r\n  const menu = document.querySelector('menu');\r\n  const main = document.querySelector('main');\r\n  const arrDown = document.querySelector('main>a');\r\n  const arrDownImg = document.querySelector('main>a>img');\r\n\r\n  const handleMenu = () => {\r\n    menu.classList.toggle('active-menu');\r\n  };\r\n\r\n  const scroll = (element) => {\r\n    const id = element.getAttribute('href');\r\n\r\n    document.querySelector(id).scrollIntoView({\r\n      behavior: 'smooth',\r\n      block: 'start'\r\n    });\r\n  };\r\n\r\n  body.addEventListener('click', (e) => {\r\n      if (e.target.closest('.menu')) \r\n      {\r\n        handleMenu();\r\n      }\r\n      else if (e.target === arrDownImg)\r\n      {\r\n        e.preventDefault();\r\n        scroll(arrDown);\r\n      }\r\n      else if (e.target.matches('menu>ul>li>a')) \r\n      {\r\n        let link = e.target.closest('a');\r\n        e.preventDefault();\r\n        scroll(link);\r\n        handleMenu();\r\n      }\r\n      else if (e.target.closest('.close-btn'))\r\n      {\r\n        e.preventDefault();\r\n        handleMenu();\r\n      }\r\n      else if (!e.target.closest('menu') && menu.classList.contains('active-menu'))\r\n      {\r\n        menu.classList.remove('active-menu');\r\n      }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n  const modal = document.querySelector('.popup');\r\n  const buttons = document.querySelectorAll('.popup-btn');\r\n  const closeBtn = modal.querySelector('.popup-close');\r\n  const modalContent = modal.querySelector('.popup-content');\r\n  let animation;\r\n  let count = -70;\r\n  let widthScreen = window.screen.width;\r\n\r\n  function appear () {\r\n      count++;\r\n      animation = requestAnimationFrame(appear);\r\n      if (count > 20)\r\n      {\r\n        cancelAnimationFrame(animation);\r\n      }\r\n      else\r\n      {\r\n        modalContent.style.top = count * 6 + 'px';\r\n      }\r\n  }\r\n\r\n  buttons.forEach(btn => {\r\n    btn.addEventListener('click', () => {\r\n      if (widthScreen < 768)\r\n      {\r\n        modal.style.display = 'block';\r\n      }\r\n      else\r\n      {\r\n        modal.style.display = 'block';\r\n        appear();\r\n      }\r\n    });\r\n  });\r\n\r\n  modal.addEventListener('click', (e) => {\r\n      if(!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {\r\n         modal.style.display = 'none';\r\n         count = -70;\r\n      }\r\n   });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = (classSlider, classSlides, activeSlideClass = 'portfolio-item-active',\r\nactiveDotClass = 'dot-active') => {\r\n  \r\n  if (!document.querySelector(classSlider) || !document.querySelectorAll(classSlides))\r\n  {\r\n    return;\r\n  }\r\n  else\r\n  {\r\n    const sliderBlock = document.querySelector(classSlider);\r\n    const slides = document.querySelectorAll(classSlides);\r\n\r\n    let currentSlide = 0;\r\n    const timerInterval = 2000;\r\n    let interval;\r\n    let dots;\r\n\r\n    const getDots = () => {\r\n      let portfolioDots = document.createElement('ul');\r\n      portfolioDots.classList.add('portfolio-dots');\r\n      portfolioDots.innerHTML = '';\r\n      for (let i = 0; i < slides.length; i++)\r\n      {\r\n        portfolioDots.innerHTML += '<li class=\"dot\"></li>';\r\n      }\r\n      sliderBlock.append(portfolioDots);\r\n      dots = document.querySelectorAll('.dot');\r\n      dots[0].classList.add(activeDotClass);\r\n    };\r\n\r\n    const prevSlide = (elems, index, strClass) => {\r\n      elems[index].classList.remove(strClass);\r\n    };\r\n\r\n    const nextSlide = (elems, index, strClass) => {\r\n      elems[index].classList.add(strClass);\r\n    };\r\n\r\n    const auroSlide = () => {\r\n      prevSlide(slides, currentSlide, activeSlideClass);\r\n      prevSlide(dots, currentSlide, activeDotClass);\r\n      currentSlide++;\r\n\r\n      if(currentSlide >= slides.length) {\r\n        currentSlide = 0;\r\n      }\r\n\r\n      nextSlide(slides, currentSlide, activeSlideClass);\r\n      nextSlide(dots, currentSlide, activeDotClass);\r\n    };\r\n\r\n    const startSlide = (timer = 1500) => {\r\n      interval = setInterval(auroSlide, timer);\r\n    };\r\n\r\n    const stopSlide = () => {\r\n      clearInterval(interval);\r\n    };\r\n\r\n    sliderBlock.addEventListener('click', (e) => {\r\n      e.preventDefault();\r\n\r\n      if (!e.target.matches('.dot, .portfolio-btn')) \r\n      {\r\n        return;\r\n      }\r\n\r\n      prevSlide(slides, currentSlide, 'portfolio-item-active');\r\n      prevSlide(dots, currentSlide, 'dot-active');\r\n\r\n      if (e.target.matches('#arrow-right')) \r\n      {\r\n        currentSlide++;\r\n      }\r\n      else if (e.target.matches('#arrow-left')) \r\n      {\r\n        currentSlide--;\r\n      }\r\n      else if (e.target.classList.contains('dot'))\r\n      {\r\n        dots.forEach((dot, index) => {\r\n          if (e.target === dot) \r\n          {\r\n            currentSlide = index;\r\n          }\r\n        });\r\n      }\r\n\r\n      if(currentSlide >= slides.length) \r\n      {\r\n        currentSlide = 0;\r\n      }\r\n\r\n      if(currentSlide < 0) \r\n      {\r\n        currentSlide = slides.length - 1;\r\n      }\r\n\r\n      nextSlide(slides, currentSlide, 'portfolio-item-active');\r\n      nextSlide(dots, currentSlide, 'dot-active');\r\n\r\n    });\r\n\r\n    sliderBlock.addEventListener('mouseenter', (e) => {\r\n      if (e.target.matches('.dot, .portfolio-btn')) {\r\n        stopSlide();\r\n      }\r\n    }, true);\r\n\r\n    sliderBlock.addEventListener('mouseleave', (e) => {\r\n      if (e.target.matches('.dot, .portfolio-btn')) {\r\n        startSlide(timerInterval);\r\n      }\r\n    }, true);\r\n\r\n    getDots();\r\n    startSlide(timerInterval);\r\n  }\r\n \r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n    const tabPanel = document.querySelector('.service-header');\r\n    const tabs = document.querySelectorAll('.service-header-tab');\r\n    const tabContent = document.querySelectorAll('.service-tab');\r\n\r\n    tabPanel.addEventListener('click', (e) => {\r\n        if (e.target.closest('.service-header-tab')) {\r\n            const tabBtn = e.target.closest('.service-header-tab');\r\n            tabs.forEach((tab, index) => {\r\n                if(tab === tabBtn) {\r\n                    tab.classList.add('active');\r\n                    tabContent[index].classList.remove('d-none');\r\n                } else {\r\n                    tab.classList.remove('active');\r\n                    tabContent[index].classList.add('d-none');\r\n                }\r\n            });\r\n        }\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack:///./modules/tabs.js?");

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