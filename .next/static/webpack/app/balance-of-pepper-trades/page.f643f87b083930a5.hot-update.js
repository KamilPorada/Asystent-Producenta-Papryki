"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/balance-of-pepper-trades/page",{

/***/ "(app-client)/./components/Charts/NumberOfTradesPepper.tsx":
/*!****************************************************!*\
  !*** ./components/Charts/NumberOfTradesPepper.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apexcharts */ \"(app-client)/./node_modules/react-apexcharts/dist/react-apexcharts.min.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction NumberOfTradesPepper(param) {\n    let { monthlyTransactionCounts } = param;\n    _s();\n    const [series] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            name: \"Liczba transakcji w poszczeg\\xf3lnych miesiącach sezonu\",\n            type: \"bar\",\n            data: monthlyTransactionCounts\n        }\n    ]);\n    const [options] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        chart: {\n            type: \"radar\"\n        },\n        title: {\n            text: \"\"\n        },\n        xaxis: {\n            categories: [\n                \"Czerwiec\",\n                \"Lipiec\",\n                \"Sierpień\",\n                \"Wrzesień\",\n                \"Październik\",\n                \"Listopad\"\n            ]\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"chart\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_apexcharts__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            options: options,\n            series: series,\n            type: \"radar\",\n            height: 300,\n            width: 300\n        }, void 0, false, {\n            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/NumberOfTradesPepper.tsx\",\n            lineNumber: 37,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/NumberOfTradesPepper.tsx\",\n        lineNumber: 36,\n        columnNumber: 3\n    }, this);\n}\n_s(NumberOfTradesPepper, \"BYJ58Jti9n3ARNp/ZtuC106Zg3E=\");\n_c = NumberOfTradesPepper;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NumberOfTradesPepper);\nvar _c;\n$RefreshReg$(_c, \"NumberOfTradesPepper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9DaGFydHMvTnVtYmVyT2ZUcmFkZXNQZXBwZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBdUM7QUFDTTtBQVk3QyxTQUFTRyxxQkFBcUIsS0FBbUM7UUFBbkMsRUFBRUMsd0JBQXdCLEVBQVMsR0FBbkM7O0lBQzdCLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHSiwrQ0FBUUEsQ0FBYztRQUN0QztZQUNDSyxNQUFNO1lBQ05DLE1BQU07WUFDTkMsTUFBTUo7UUFDUDtLQUNBO0lBRUQsTUFBTSxDQUFDSyxRQUFRLEdBQUdSLCtDQUFRQSxDQUFNO1FBQy9CUyxPQUFPO1lBQ05ILE1BQU07UUFDUDtRQUNBSSxPQUFPO1lBQ05DLE1BQU07UUFDUDtRQUNBQyxPQUFPO1lBQ05DLFlBQVk7Z0JBQUM7Z0JBQVk7Z0JBQVU7Z0JBQVk7Z0JBQVk7Z0JBQWU7YUFBVztRQUN0RjtJQUNEO0lBRUEscUJBQ0MsOERBQUNDO1FBQUlDLElBQUc7a0JBQ1AsNEVBQUNkLHdEQUFjQTtZQUFDTyxTQUFTQTtZQUFTSixRQUFRQTtZQUFRRSxNQUFLO1lBQVFVLFFBQVE7WUFBS0MsT0FBTzs7Ozs7Ozs7Ozs7QUFHdEY7R0ExQlNmO0tBQUFBO0FBNEJULCtEQUFlQSxvQkFBb0JBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGFydHMvTnVtYmVyT2ZUcmFkZXNQZXBwZXIudHN4PzZlNzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RBcGV4Q2hhcnQgZnJvbSAncmVhY3QtYXBleGNoYXJ0cydcblxudHlwZSBDaGFydERhdGEgPSB7XG5cdG5hbWU6IHN0cmluZ1xuXHR0eXBlOiBzdHJpbmdcblx0ZGF0YTogbnVtYmVyW11cbn1cblxuaW50ZXJmYWNlIFByb3BzIHtcblx0bW9udGhseVRyYW5zYWN0aW9uQ291bnRzOiBudW1iZXJbXVxufVxuXG5mdW5jdGlvbiBOdW1iZXJPZlRyYWRlc1BlcHBlcih7IG1vbnRobHlUcmFuc2FjdGlvbkNvdW50cyB9OiBQcm9wcykge1xuXHRjb25zdCBbc2VyaWVzXSA9IHVzZVN0YXRlPENoYXJ0RGF0YVtdPihbXG5cdFx0e1xuXHRcdFx0bmFtZTogJ0xpY3piYSB0cmFuc2FrY2ppIHcgcG9zemN6ZWfDs2xueWNoIG1pZXNpxIVjYWNoIHNlem9udScsXG5cdFx0XHR0eXBlOiAnYmFyJyxcblx0XHRcdGRhdGE6IG1vbnRobHlUcmFuc2FjdGlvbkNvdW50cyxcblx0XHR9LFxuXHRdKVxuXG5cdGNvbnN0IFtvcHRpb25zXSA9IHVzZVN0YXRlPGFueT4oe1xuXHRcdGNoYXJ0OiB7XG5cdFx0XHR0eXBlOiAncmFkYXInLFxuXHRcdH0sXG5cdFx0dGl0bGU6IHtcblx0XHRcdHRleHQ6ICcnLFxuXHRcdH0sXG5cdFx0eGF4aXM6IHtcblx0XHRcdGNhdGVnb3JpZXM6IFsnQ3plcndpZWMnLCAnTGlwaWVjJywgJ1NpZXJwaWXFhCcsICdXcnplc2llxYQnLCAnUGHFumR6aWVybmlrJywgJ0xpc3RvcGFkJ10sXG5cdFx0fSxcblx0fSlcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgaWQ9J2NoYXJ0Jz5cblx0XHRcdDxSZWFjdEFwZXhDaGFydCBvcHRpb25zPXtvcHRpb25zfSBzZXJpZXM9e3Nlcmllc30gdHlwZT0ncmFkYXInIGhlaWdodD17MzAwfSB3aWR0aD17MzAwfSAvPlxuXHRcdDwvZGl2PlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlck9mVHJhZGVzUGVwcGVyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlJlYWN0QXBleENoYXJ0IiwiTnVtYmVyT2ZUcmFkZXNQZXBwZXIiLCJtb250aGx5VHJhbnNhY3Rpb25Db3VudHMiLCJzZXJpZXMiLCJuYW1lIiwidHlwZSIsImRhdGEiLCJvcHRpb25zIiwiY2hhcnQiLCJ0aXRsZSIsInRleHQiLCJ4YXhpcyIsImNhdGVnb3JpZXMiLCJkaXYiLCJpZCIsImhlaWdodCIsIndpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/Charts/NumberOfTradesPepper.tsx\n"));

/***/ })

});