"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-client)/./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"60868efce123\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3R5bGVzL2dsb2JhbHMuY3NzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvZ2xvYmFscy5jc3M/N2VmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjYwODY4ZWZjZTEyM1wiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./styles/globals.css\n"));

/***/ }),

/***/ "(app-client)/./components/Navigation/TopBar.tsx":
/*!******************************************!*\
  !*** ./components/Navigation/TopBar.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-client)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction TopBar() {\n    var _session_user, _session_user1;\n    _s();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sticky flex flex-row justify-end items-center t-0 l-0 w-full h-16 bg-mainColor\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"absolute top-1/2 left-1/3 sm:left-1/2 transform -translate-y-1/2 sm:-translate-x-1/2 text-lg sm:text-xl md:text-2xl font-semibold\",\n                children: \"Sezon 2023\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Navigation/TopBar.tsx\",\n                lineNumber: 10,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row mr-5 sm:mr-10\",\n                children: [\n                    (session === null || session === void 0 ? void 0 : (_session_user = session.user) === null || _session_user === void 0 ? void 0 : _session_user.image) && typeof session.user.image === \"string\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: session.user.image,\n                        width: 37,\n                        height: 37,\n                        className: \"rounded-full\",\n                        alt: \"profile\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Navigation/TopBar.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 6\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"ml-2 self-center md:text-lg\",\n                        children: session === null || session === void 0 ? void 0 : (_session_user1 = session.user) === null || _session_user1 === void 0 ? void 0 : _session_user1.name\n                    }, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Navigation/TopBar.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Navigation/TopBar.tsx\",\n                lineNumber: 13,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Navigation/TopBar.tsx\",\n        lineNumber: 9,\n        columnNumber: 3\n    }, this);\n}\n_s(TopBar, \"xGqsfA9Yc4bug2CeORcyTsHwvXY=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = TopBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopBar);\nvar _c;\n$RefreshReg$(_c, \"TopBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uL1RvcEJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDeUI7QUFFbUI7QUFFNUMsU0FBU0U7UUFRSkMsZUFHMkNBOztJQVYvQyxNQUFNLEVBQUVDLE1BQU1ELE9BQU8sRUFBRSxHQUFHRiwyREFBVUE7SUFDcEMscUJBQ0MsOERBQUNJO1FBQUlDLFdBQVU7OzBCQUNkLDhEQUFDQztnQkFBRUQsV0FBVTswQkFBb0k7Ozs7OzswQkFHakosOERBQUNEO2dCQUFJQyxXQUFVOztvQkFDYkgsQ0FBQUEsb0JBQUFBLHFCQUFBQSxLQUFBQSxJQUFBQSxDQUFBQSxnQkFBQUEsUUFBU0ssa0JBQVRMLDJCQUFBQSxLQUFBQSxJQUFBQSxjQUFlTSxLQUFILEtBQVksT0FBT04sUUFBUUssS0FBS0MsVUFBVSwwQkFDdEQsOERBQUNDO3dCQUFJQyxLQUFLUixRQUFRSyxLQUFLQzt3QkFBT0csT0FBTzt3QkFBSUMsUUFBUTt3QkFBSVAsV0FBVTt3QkFBZVEsS0FBSTs7Ozs7O2tDQUVuRiw4REFBQ1A7d0JBQUVELFdBQVU7a0NBQStCSCxvQkFBQUEscUJBQUFBLEtBQUFBLElBQUFBLENBQUFBLGlCQUFBQSxRQUFTSyxrQkFBVEwsNEJBQUFBLEtBQUFBLElBQUFBLGVBQWVZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJL0Q7R0FmU2I7O1FBQ2tCRCx1REFBVUE7OztLQUQ1QkM7QUFpQlQsK0RBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uL1RvcEJhci50c3g/ODAzOCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCdcblxuZnVuY3Rpb24gVG9wQmFyKCkge1xuXHRjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKVxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPSdzdGlja3kgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWVuZCBpdGVtcy1jZW50ZXIgdC0wIGwtMCB3LWZ1bGwgaC0xNiBiZy1tYWluQ29sb3InPlxuXHRcdFx0PHAgY2xhc3NOYW1lPSdhYnNvbHV0ZSB0b3AtMS8yIGxlZnQtMS8zIHNtOmxlZnQtMS8yIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXktMS8yIHNtOi10cmFuc2xhdGUteC0xLzIgdGV4dC1sZyBzbTp0ZXh0LXhsIG1kOnRleHQtMnhsIGZvbnQtc2VtaWJvbGQnPlxuXHRcdFx0XHRTZXpvbiAyMDIzXG5cdFx0XHQ8L3A+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBtci01IHNtOm1yLTEwJz5cblx0XHRcdFx0e3Nlc3Npb24/LnVzZXI/LmltYWdlICYmIHR5cGVvZiBzZXNzaW9uLnVzZXIuaW1hZ2UgPT09ICdzdHJpbmcnICYmIChcblx0XHRcdFx0XHQ8aW1nIHNyYz17c2Vzc2lvbi51c2VyLmltYWdlfSB3aWR0aD17Mzd9IGhlaWdodD17Mzd9IGNsYXNzTmFtZT0ncm91bmRlZC1mdWxsJyBhbHQ9J3Byb2ZpbGUnIC8+XG5cdFx0XHRcdCl9XG5cdFx0XHRcdDxwIGNsYXNzTmFtZT0nbWwtMiBzZWxmLWNlbnRlciBtZDp0ZXh0LWxnJz57c2Vzc2lvbj8udXNlcj8ubmFtZX08L3A+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb3BCYXJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVNlc3Npb24iLCJUb3BCYXIiLCJzZXNzaW9uIiwiZGF0YSIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJ1c2VyIiwiaW1hZ2UiLCJpbWciLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./components/Navigation/TopBar.tsx\n"));

/***/ })

});