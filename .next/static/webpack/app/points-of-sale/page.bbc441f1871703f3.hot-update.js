"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/points-of-sale/page",{

/***/ "(app-client)/./components/Items/PointOfSaleItem.tsx":
/*!**********************************************!*\
  !*** ./components/Items/PointOfSaleItem.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_UI_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/UI/Button */ \"(app-client)/./components/UI/Button.tsx\");\n\n\n\nconst PointOfSaleItem = (props)=>{\n    const latitude = 51.39920065708797 // Szerokość geograficzna\n    ;\n    const longitude = 21.18576542850925 // Długość geograficzna\n    ;\n    const marker = \"markers=\".concat(latitude, \",\").concat(longitude);\n    const iframeSrc = \"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.2326203809153!2d\".concat(longitude, \"!3d\").concat(latitude, \"!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z\").concat(latitude, \"%2C\").concat(longitude, \"!5e0!3m2!1sen!2sus!4v1687448119935!5m2!1sen!2sus&\").concat(marker);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col p-5 bg-white rounded-sm ring-1 ring-zinc-200 text-black \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col md:flex-row md:justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-lg font-semibold\",\n                                children: \"Rolno-Spożywczy Rynek Hurtowy S.A.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Items/PointOfSaleItem.tsx\",\n                                lineNumber: 16,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-thin\",\n                                children: \"Adres: Lubelska 65, 26-600 Radom\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Items/PointOfSaleItem.tsx\",\n                                lineNumber: 17,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-thin\",\n                                children: \"Typ plac\\xf3wki: Rynek hurtowy\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Items/PointOfSaleItem.tsx\",\n                                lineNumber: 18,\n                                columnNumber: 6\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Items/PointOfSaleItem.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-3 md:mt-0 w-1/2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-lg font-semibold\",\n                                children: \"Mapa dojazdu\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Items/PointOfSaleItem.tsx\",\n                                lineNumber: 21,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                                src: iframeSrc,\n                                allowFullScreen: true,\n                                loading: \"lazy\",\n                                referrerPolicy: \"no-referrer-when-downgrade\",\n                                className: \"w-full h-auto\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Items/PointOfSaleItem.tsx\",\n                                lineNumber: 22,\n                                columnNumber: 6\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Items/PointOfSaleItem.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Items/PointOfSaleItem.tsx\",\n                lineNumber: 14,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"div3 flex flex-row justify-start w-auto text-white mt-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        className: \"mx-0\",\n                        children: \"Edytuj\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Items/PointOfSaleItem.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        children: \"Usuń\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Items/PointOfSaleItem.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Items/PointOfSaleItem.tsx\",\n                lineNumber: 30,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Items/PointOfSaleItem.tsx\",\n        lineNumber: 13,\n        columnNumber: 3\n    }, undefined);\n};\n_c = PointOfSaleItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PointOfSaleItem);\nvar _c;\n$RefreshReg$(_c, \"PointOfSaleItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9JdGVtcy9Qb2ludE9mU2FsZUl0ZW0udHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUF5QjtBQUNpQjtBQUUxQyxNQUFNRSxrQkFBZ0NDLENBQUFBO0lBQ3JDLE1BQU1DLFdBQVcsa0JBQWtCLHlCQUF5Qjs7SUFDNUQsTUFBTUMsWUFBWSxrQkFBa0IsdUJBQXVCOztJQUUzRCxNQUFNQyxTQUFTLFdBQXVCRCxPQUFaRCxVQUFTLEtBQWEsT0FBVkM7SUFFdEMsTUFBTUUsWUFBWSw4RUFBNkZILE9BQWZDLFdBQVUsT0FBK0VELE9BQTFFQSxVQUFTLG1FQUErRUMsT0FBZEQsVUFBUyxPQUFrRUUsT0FBN0RELFdBQVUscURBQTBELE9BQVBDO0lBRXBRLHFCQUNDLDhEQUFDRTtRQUFJQyxXQUFVOzswQkFDZCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNkLDhEQUFDRDs7MENBQ0EsOERBQUNFO2dDQUFHRCxXQUFVOzBDQUF3Qjs7Ozs7OzBDQUN0Qyw4REFBQ0U7Z0NBQUVGLFdBQVU7MENBQVk7Ozs7OzswQ0FDekIsOERBQUNFO2dDQUFFRixXQUFVOzBDQUFZOzs7Ozs7Ozs7Ozs7a0NBRTFCLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2QsOERBQUNFO2dDQUFFRixXQUFVOzBDQUF3Qjs7Ozs7OzBDQUNyQyw4REFBQ0c7Z0NBQ0FDLEtBQUtOO2dDQUNMTyxlQUFlO2dDQUNmQyxTQUFRO2dDQUNSQyxnQkFBZTtnQ0FDR1AsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUcvQiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNkLDhEQUFDUiw2REFBTUE7d0JBQUNRLFdBQVU7a0NBQU87Ozs7OztrQ0FDekIsOERBQUNSLDZEQUFNQTtrQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSVo7S0FoQ01DO0FBa0NOLCtEQUFlQSxlQUFlQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSXRlbXMvUG9pbnRPZlNhbGVJdGVtLnRzeD81MTJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBCdXR0b24gZnJvbSAnQGNvbXBvbmVudHMvVUkvQnV0dG9uJ1xuXG5jb25zdCBQb2ludE9mU2FsZUl0ZW06IFJlYWN0LkZDPHt9PiA9IHByb3BzID0+IHtcblx0Y29uc3QgbGF0aXR1ZGUgPSA1MS4zOTkyMDA2NTcwODc5NyAvLyBTemVyb2tvxZvEhyBnZW9ncmFmaWN6bmFcblx0Y29uc3QgbG9uZ2l0dWRlID0gMjEuMTg1NzY1NDI4NTA5MjUgLy8gRMWCdWdvxZvEhyBnZW9ncmFmaWN6bmFcblxuXHRjb25zdCBtYXJrZXIgPSBgbWFya2Vycz0ke2xhdGl0dWRlfSwke2xvbmdpdHVkZX1gXG5cblx0Y29uc3QgaWZyYW1lU3JjID0gYGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDI0ODIuMjMyNjIwMzgwOTE1MyEyZCR7bG9uZ2l0dWRlfSEzZCR7bGF0aXR1ZGV9ITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHgwJTNBMHgwITJ6JHtsYXRpdHVkZX0lMkMke2xvbmdpdHVkZX0hNWUwITNtMiExc2VuITJzdXMhNHYxNjg3NDQ4MTE5OTM1ITVtMiExc2VuITJzdXMmJHttYXJrZXJ9YFxuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgcC01IGJnLXdoaXRlIHJvdW5kZWQtc20gcmluZy0xIHJpbmctemluYy0yMDAgdGV4dC1ibGFjayAnPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgbWQ6anVzdGlmeS1iZXR3ZWVuJz5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPSd0ZXh0LWxnIGZvbnQtc2VtaWJvbGQnPlJvbG5vLVNwb8W8eXdjenkgUnluZWsgSHVydG93eSBTLkEuPC9oMz5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J2ZvbnQtdGhpbic+QWRyZXM6IEx1YmVsc2thIDY1LCAyNi02MDAgUmFkb208L3A+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdmb250LXRoaW4nPlR5cCBwbGFjw7N3a2k6IFJ5bmVrIGh1cnRvd3k8L3A+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbXQtMyBtZDptdC0wIHctMS8yJz5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J3RleHQtbGcgZm9udC1zZW1pYm9sZCc+TWFwYSBkb2phemR1PC9wPlxuXHRcdFx0XHRcdDxpZnJhbWVcblx0XHRcdFx0XHRcdHNyYz17aWZyYW1lU3JjfVxuXHRcdFx0XHRcdFx0YWxsb3dGdWxsU2NyZWVuXG5cdFx0XHRcdFx0XHRsb2FkaW5nPSdsYXp5J1xuXHRcdFx0XHRcdFx0cmVmZXJyZXJQb2xpY3k9J25vLXJlZmVycmVyLXdoZW4tZG93bmdyYWRlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3LWZ1bGwgaC1hdXRvJz48L2lmcmFtZT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdkaXYzIGZsZXggZmxleC1yb3cganVzdGlmeS1zdGFydCB3LWF1dG8gdGV4dC13aGl0ZSBtdC01Jz5cblx0XHRcdFx0PEJ1dHRvbiBjbGFzc05hbWU9J214LTAnPkVkeXR1ajwvQnV0dG9uPlxuXHRcdFx0XHQ8QnV0dG9uPlVzdcWEPC9CdXR0b24+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb2ludE9mU2FsZUl0ZW1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkJ1dHRvbiIsIlBvaW50T2ZTYWxlSXRlbSIsInByb3BzIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJtYXJrZXIiLCJpZnJhbWVTcmMiLCJkaXYiLCJjbGFzc05hbWUiLCJoMyIsInAiLCJpZnJhbWUiLCJzcmMiLCJhbGxvd0Z1bGxTY3JlZW4iLCJsb2FkaW5nIiwicmVmZXJyZXJQb2xpY3kiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./components/Items/PointOfSaleItem.tsx\n"));

/***/ })

});