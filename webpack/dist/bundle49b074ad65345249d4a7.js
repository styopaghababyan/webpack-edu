/*! For license information please see bundle49b074ad65345249d4a7.js.LICENSE.txt */
(()=>{"use strict";var __webpack_modules__={"./src/List/styles.css":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://teacher/./src/List/styles.css?")},"./src/List/List.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "List": () => (/* binding */ List)\n/* harmony export */ });\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/List/styles.css");\n\n\nclass List {\n  render(...items) {\n    let parent = document.createElement("ul");\n    items.forEach((elm) => {\n      let child = document.createElement("li");\n      child.innerText = elm;\n      parent.append(child);\n      document.body.append(parent);\n    });\n\n    const parentElm = document.querySelector("ul");\n    const childElm = document.querySelectorAll("li");\n\n    parentElm.addEventListener("click", function (evt) {\n      if (evt.target.closest("li") && evt.target.classList.contains("active")) {\n        evt.target.classList.remove("active");\n      } else if (evt.target.closest("li")) {\n        childElm.forEach((elm) => {\n          elm.classList.remove("active");\n        });\n        evt.target.classList.toggle("active");\n      }\n    });\n  }\n}\n\n\n//# sourceURL=webpack://teacher/./src/List/List.js?')},"./src/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _List_List_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List/List.js */ "./src/List/List.js");\n\nconst app = new _List_List_js__WEBPACK_IMPORTED_MODULE_0__.List();\nlet listItems = ["Angular", "React", "Vue", "Next", "Python"];\napp.render(...listItems);\n\n//# sourceURL=webpack://teacher/./src/index.js?')}},__webpack_module_cache__={};function __webpack_require__(e){var _=__webpack_module_cache__[e];if(void 0!==_)return _.exports;var t=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](t,t.exports,__webpack_require__),t.exports}__webpack_require__.d=(e,_)=>{for(var t in _)__webpack_require__.o(_,t)&&!__webpack_require__.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:_[t]})},__webpack_require__.o=(e,_)=>Object.prototype.hasOwnProperty.call(e,_),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var __webpack_exports__=__webpack_require__("./src/index.js")})();