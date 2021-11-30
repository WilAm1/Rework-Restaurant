/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    const div = document.createElement('div');
    div.id = "home";
    div.innerHTML = `
            <header>
            <nav>
                <ul>
                    <li><a href="#" id="home">Home</a> </li>
                    <li><a href="#" id="menu">Menu</a></li>
                    <li><a href="#" id="about">About</a></li>
                    <li><a href="#" id="contact">Contact</a></li>
                </ul>
            </nav>
        </header>
        <h1>Willy Pizzariea</h1>
        <div id="intro">
            Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.
        </div>
        <div id="hours">
            <h2>Hours</h2>
            <p>Monday to Friday</p>
            <p>8 AM - 10 PM</p>
        </div>
        <div id="location">
            <h2>Location</h2>
            <p>123 Totally Made up Street, Pampanga</p>
        </div>
    `;

    return div
}

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");


const config = (() => {
    const content = document.querySelector('#content');
    const replaceContent = (newContent) => {
        content.replaceChildren(newContent);
    };
    return {
        replaceContent
    }
})();

const onLoad = function({ replaceContent }) {
    const homePage = (0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    replaceContent(homePage);
    // replaceContent('hei')
    const home = homePage.querySelector('#home');
    home.textContent = 'hello';
    const menu = homePage.querySelector('#menu');
    const contact = homePage.querySelector('#contact');
};


window.onload = () => { onLoad(config) };
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLDZCQUFlLHNDQUFXO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7VUM5QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05vQzs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsMEJBQTBCLGdCQUFnQjtBQUMxQyxxQkFBcUIsb0RBQVc7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLHdCQUF3QixpQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jld29yay1yZXN0YXVyYW50Ly4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmV3b3JrLXJlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmV3b3JrLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jld29yay1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmV3b3JrLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXdvcmstcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuaWQgPSBcImhvbWVcIjtcbiAgICBkaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgIDxuYXY+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIiBpZD1cImhvbWVcIj5Ib21lPC9hPiA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIiBpZD1cIm1lbnVcIj5NZW51PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiIGlkPVwiYWJvdXRcIj5BYm91dDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIiBpZD1cImNvbnRhY3RcIj5Db250YWN0PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPGgxPldpbGx5IFBpenphcmllYTwvaDE+XG4gICAgICAgIDxkaXYgaWQ9XCJpbnRyb1wiPlxuICAgICAgICAgICAgQmVhcnkncyBoYXMgdGhlIGJlc3QgcG9ycmlkZ2UhIFRoZSBhdG1vc3BoZXJlIGFuZCBjdXN0b21lciBzZXJ2aWNlIG1ha2UgeW91IGZlZWwgbGlrZSB5b3UgYXJlIHNpdHRpbmcgaW4gdGhlIG1pZGRsZSBvZiB0aGUgd29vZHMsIGVhdGluZyBsaWtlIGEgYmVhciEgVGhpcyBpcyBleGFjdGx5IHRoZSBraW5kIG9mIHBsYWNlIHRoYXQgSSBsaWtlIHRvIHJldHVybiB0byBhZ2FpbiBhbmQgYWdhaW4uXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPVwiaG91cnNcIj5cbiAgICAgICAgICAgIDxoMj5Ib3VyczwvaDI+XG4gICAgICAgICAgICA8cD5Nb25kYXkgdG8gRnJpZGF5PC9wPlxuICAgICAgICAgICAgPHA+OCBBTSAtIDEwIFBNPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD1cImxvY2F0aW9uXCI+XG4gICAgICAgICAgICA8aDI+TG9jYXRpb248L2gyPlxuICAgICAgICAgICAgPHA+MTIzIFRvdGFsbHkgTWFkZSB1cCBTdHJlZXQsIFBhbXBhbmdhPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICBgO1xuXG4gICAgcmV0dXJuIGRpdlxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGhvbWVDb250ZW50IGZyb20gJy4vaG9tZS5qcyc7XG5cbmNvbnN0IGNvbmZpZyA9ICgoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgY29uc3QgcmVwbGFjZUNvbnRlbnQgPSAobmV3Q29udGVudCkgPT4ge1xuICAgICAgICBjb250ZW50LnJlcGxhY2VDaGlsZHJlbihuZXdDb250ZW50KTtcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlcGxhY2VDb250ZW50XG4gICAgfVxufSkoKTtcblxuY29uc3Qgb25Mb2FkID0gZnVuY3Rpb24oeyByZXBsYWNlQ29udGVudCB9KSB7XG4gICAgY29uc3QgaG9tZVBhZ2UgPSBob21lQ29udGVudCgpO1xuICAgIHJlcGxhY2VDb250ZW50KGhvbWVQYWdlKTtcbiAgICAvLyByZXBsYWNlQ29udGVudCgnaGVpJylcbiAgICBjb25zdCBob21lID0gaG9tZVBhZ2UucXVlcnlTZWxlY3RvcignI2hvbWUnKTtcbiAgICBob21lLnRleHRDb250ZW50ID0gJ2hlbGxvJztcbiAgICBjb25zdCBtZW51ID0gaG9tZVBhZ2UucXVlcnlTZWxlY3RvcignI21lbnUnKTtcbiAgICBjb25zdCBjb250YWN0ID0gaG9tZVBhZ2UucXVlcnlTZWxlY3RvcignI2NvbnRhY3QnKTtcbn07XG5cblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHsgb25Mb2FkKGNvbmZpZykgfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=