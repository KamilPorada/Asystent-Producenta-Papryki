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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apexcharts */ \"(app-client)/./node_modules/react-apexcharts/dist/react-apexcharts.min.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction NumberOfTradesPepper(param) {\n    let { monthlyTransactionCounts } = param;\n    _s();\n    const [series] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            name: \"Liczba transakcji w poszczeg\\xf3lnych miesiącach sezonu\",\n            data: monthlyTransactionCounts\n        }\n    ]);\n    const [options] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        chart: {\n            type: \"radar\"\n        },\n        title: {\n            text: \"\"\n        },\n        xaxis: {\n            categories: [\n                \"Czerwiec\",\n                \"Lipiec\",\n                \"Sierpień\",\n                \"Wrzesień\",\n                \"Październik\",\n                \"Listopad\"\n            ]\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"chart\",\n        style: {\n            color: \"#FF0000\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_apexcharts__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            options: options,\n            series: series,\n            type: \"radar\",\n            height: 300,\n            width: 300\n        }, void 0, false, {\n            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/NumberOfTradesPepper.tsx\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/NumberOfTradesPepper.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(NumberOfTradesPepper, \"CwwSj2UNouLUnz/hnq05moQ+ZZc=\");\n_c = NumberOfTradesPepper;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NumberOfTradesPepper);\nvar _c;\n$RefreshReg$(_c, \"NumberOfTradesPepper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9DaGFydHMvTnVtYmVyT2ZUcmFkZXNQZXBwZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBd0M7QUFDTTtBQVc5QyxTQUFTRyxxQkFBcUIsS0FBbUM7UUFBbkMsRUFBRUMsd0JBQXdCLEVBQVMsR0FBbkM7O0lBQzVCLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHSiwrQ0FBUUEsQ0FBYztRQUNyQztZQUNFSyxNQUFNO1lBQ05DLE1BQU1IO1FBQ1I7S0FDRDtJQUVELE1BQU0sQ0FBQ0ksUUFBUSxHQUFHUCwrQ0FBUUEsQ0FBTTtRQUM5QlEsT0FBTztZQUNMQyxNQUFNO1FBQ1I7UUFDQUMsT0FBTztZQUNMQyxNQUFNO1FBQ1I7UUFDQUMsT0FBTztZQUNMQyxZQUFZO2dCQUFDO2dCQUFZO2dCQUFVO2dCQUFZO2dCQUFZO2dCQUFlO2FBQVc7UUFDdkY7SUFDRjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxJQUFHO1FBQVFDLE9BQU87WUFBRUMsT0FBTztRQUFVO2tCQUN4Qyw0RUFBQ2hCLHdEQUFjQTtZQUFDTSxTQUFTQTtZQUFTSCxRQUFRQTtZQUFRSyxNQUFLO1lBQVFTLFFBQVE7WUFBS0MsT0FBTzs7Ozs7Ozs7Ozs7QUFHekY7R0F6QlNqQjtLQUFBQTtBQTJCVCwrREFBZUEsb0JBQW9CQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2hhcnRzL051bWJlck9mVHJhZGVzUGVwcGVyLnRzeD82ZTcyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdEFwZXhDaGFydCBmcm9tICdyZWFjdC1hcGV4Y2hhcnRzJztcblxudHlwZSBDaGFydERhdGEgPSB7XG4gIG5hbWU6IHN0cmluZztcbiAgZGF0YTogbnVtYmVyW107XG59O1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBtb250aGx5VHJhbnNhY3Rpb25Db3VudHM6IG51bWJlcltdO1xufVxuXG5mdW5jdGlvbiBOdW1iZXJPZlRyYWRlc1BlcHBlcih7IG1vbnRobHlUcmFuc2FjdGlvbkNvdW50cyB9OiBQcm9wcykge1xuICBjb25zdCBbc2VyaWVzXSA9IHVzZVN0YXRlPENoYXJ0RGF0YVtdPihbXG4gICAge1xuICAgICAgbmFtZTogJ0xpY3piYSB0cmFuc2FrY2ppIHcgcG9zemN6ZWfDs2xueWNoIG1pZXNpxIVjYWNoIHNlem9udScsXG4gICAgICBkYXRhOiBtb250aGx5VHJhbnNhY3Rpb25Db3VudHMsXG4gICAgfSxcbiAgXSk7XG5cbiAgY29uc3QgW29wdGlvbnNdID0gdXNlU3RhdGU8YW55Pih7XG4gICAgY2hhcnQ6IHtcbiAgICAgIHR5cGU6ICdyYWRhcicsXG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgdGV4dDogJycsXG4gICAgfSxcbiAgICB4YXhpczoge1xuICAgICAgY2F0ZWdvcmllczogWydDemVyd2llYycsICdMaXBpZWMnLCAnU2llcnBpZcWEJywgJ1dyemVzaWXFhCcsICdQYcW6ZHppZXJuaWsnLCAnTGlzdG9wYWQnXSxcbiAgICB9LFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9J2NoYXJ0JyBzdHlsZT17eyBjb2xvcjogJyNGRjAwMDAnIH19PlxuICAgICAgPFJlYWN0QXBleENoYXJ0IG9wdGlvbnM9e29wdGlvbnN9IHNlcmllcz17c2VyaWVzfSB0eXBlPSdyYWRhcicgaGVpZ2h0PXszMDB9IHdpZHRoPXszMDB9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlck9mVHJhZGVzUGVwcGVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJSZWFjdEFwZXhDaGFydCIsIk51bWJlck9mVHJhZGVzUGVwcGVyIiwibW9udGhseVRyYW5zYWN0aW9uQ291bnRzIiwic2VyaWVzIiwibmFtZSIsImRhdGEiLCJvcHRpb25zIiwiY2hhcnQiLCJ0eXBlIiwidGl0bGUiLCJ0ZXh0IiwieGF4aXMiLCJjYXRlZ29yaWVzIiwiZGl2IiwiaWQiLCJzdHlsZSIsImNvbG9yIiwiaGVpZ2h0Iiwid2lkdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./components/Charts/NumberOfTradesPepper.tsx\n"));

/***/ })

});