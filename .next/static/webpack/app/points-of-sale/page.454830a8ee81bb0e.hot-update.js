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

/***/ "(app-client)/./components/UI/SearchInput.tsx":
/*!***************************************!*\
  !*** ./components/UI/SearchInput.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction SearchInput(param) {\n    let { onSearch } = param;\n    _s();\n    const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleChange = (e)=>{\n        const value = e.target.value;\n        setSearchTerm(value);\n        onSearch(value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative flex flex-row justify-between items-center w-full p-1 mt-4 text-black bg-white rounded ring-1 ring-zinc-300 before:absolute before:top-1 before:left-8 before:bottom-0 before:w-[2px] before:h-6 before:bg-mainColor\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                className: \"fa-solid fa-magnifying-glass relative mr-4 p-1 outline-none border-none\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/UI/SearchInput.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                className: \"w-full focus:outline-none\",\n                value: searchTerm,\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/UI/SearchInput.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/UI/SearchInput.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_s(SearchInput, \"a1cMJ8t0eYFnsCEdGcHtaGJdbCM=\");\n_c = SearchInput;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchInput);\nvar _c;\n$RefreshReg$(_c, \"SearchInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9VSS9TZWFyY2hJbnB1dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXFEO0FBTXJELFNBQVNFLFlBQVksS0FBOEI7UUFBOUIsRUFBRUMsUUFBUSxFQUFvQixHQUE5Qjs7SUFDbkIsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdKLCtDQUFRQSxDQUFDO0lBRTdDLE1BQU1LLGVBQWUsQ0FBQ0M7UUFDcEIsTUFBTUMsUUFBUUQsRUFBRUUsT0FBT0Q7UUFDdkJILGNBQWNHO1FBQ2RMLFNBQVNLO0lBQ1g7SUFFQSxxQkFDRSw4REFBQ0U7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFFRCxXQUFVOzs7Ozs7MEJBQ2IsOERBQUNFO2dCQUNDQyxNQUFLO2dCQUNMSCxXQUFVO2dCQUNWSCxPQUFPSjtnQkFDUFcsVUFBVVQ7Ozs7Ozs7Ozs7OztBQUlsQjtHQXBCU0o7S0FBQUE7QUFzQlQsK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VSS9TZWFyY2hJbnB1dC50c3g/YjRkYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ2hhbmdlRXZlbnQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgU2VhcmNoSW5wdXRQcm9wcyB7XG4gIG9uU2VhcmNoOiAoc2VhcmNoVGVybTogc3RyaW5nKSA9PiB2b2lkO1xufVxuXG5mdW5jdGlvbiBTZWFyY2hJbnB1dCh7IG9uU2VhcmNoIH06IFNlYXJjaElucHV0UHJvcHMpIHtcbiAgY29uc3QgW3NlYXJjaFRlcm0sIHNldFNlYXJjaFRlcm1dID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlOiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgc2V0U2VhcmNoVGVybSh2YWx1ZSk7XG4gICAgb25TZWFyY2godmFsdWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlIGZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciB3LWZ1bGwgcC0xIG10LTQgdGV4dC1ibGFjayBiZy13aGl0ZSByb3VuZGVkIHJpbmctMSByaW5nLXppbmMtMzAwIGJlZm9yZTphYnNvbHV0ZSBiZWZvcmU6dG9wLTEgYmVmb3JlOmxlZnQtOCBiZWZvcmU6Ym90dG9tLTAgYmVmb3JlOnctWzJweF0gYmVmb3JlOmgtNiBiZWZvcmU6YmctbWFpbkNvbG9yJz5cbiAgICAgIDxpIGNsYXNzTmFtZT0nZmEtc29saWQgZmEtbWFnbmlmeWluZy1nbGFzcyByZWxhdGl2ZSBtci00IHAtMSBvdXRsaW5lLW5vbmUgYm9yZGVyLW5vbmUnPjwvaT5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICBjbGFzc05hbWU9J3ctZnVsbCBmb2N1czpvdXRsaW5lLW5vbmUnXG4gICAgICAgIHZhbHVlPXtzZWFyY2hUZXJtfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoSW5wdXQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlNlYXJjaElucHV0Iiwib25TZWFyY2giLCJzZWFyY2hUZXJtIiwic2V0U2VhcmNoVGVybSIsImhhbmRsZUNoYW5nZSIsImUiLCJ2YWx1ZSIsInRhcmdldCIsImRpdiIsImNsYXNzTmFtZSIsImkiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/UI/SearchInput.tsx\n"));

/***/ })

});