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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apexcharts */ \"(app-client)/./node_modules/react-apexcharts/dist/react-apexcharts.min.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction NumberOfTradesPepper(param) {\n    let { monthlyTransactionCounts } = param;\n    _s();\n    const [series] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            name: \"Liczba transakcji w poszczeg\\xf3lnych miesiącach sezonu\",\n            data: monthlyTransactionCounts\n        }\n    ]);\n    const [options] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        chart: {\n            type: \"radar\"\n        },\n        title: {\n            text: \"\"\n        },\n        xaxis: {\n            categories: [\n                \"Czerwiec\",\n                \"Lipiec\",\n                \"Sierpień\",\n                \"Wrzesień\",\n                \"Październik\",\n                \"Listopad\"\n            ]\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"chart\",\n        className: \"flex jus\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_apexcharts__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            options: options,\n            series: series,\n            type: \"radar\",\n            height: 300,\n            width: 300\n        }, void 0, false, {\n            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/NumberOfTradesPepper.tsx\",\n            lineNumber: 35,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/NumberOfTradesPepper.tsx\",\n        lineNumber: 34,\n        columnNumber: 3\n    }, this);\n}\n_s(NumberOfTradesPepper, \"r9/9CsakKqYKYaxS4SyOin3cZ7k=\");\n_c = NumberOfTradesPepper;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NumberOfTradesPepper);\nvar _c;\n$RefreshReg$(_c, \"NumberOfTradesPepper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9DaGFydHMvTnVtYmVyT2ZUcmFkZXNQZXBwZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBdUM7QUFDTTtBQVc3QyxTQUFTRyxxQkFBcUIsS0FBbUM7UUFBbkMsRUFBRUMsd0JBQXdCLEVBQVMsR0FBbkM7O0lBQzdCLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHSiwrQ0FBUUEsQ0FBYztRQUN0QztZQUNDSyxNQUFNO1lBQ05DLE1BQU1IO1FBQ1A7S0FDQTtJQUVELE1BQU0sQ0FBQ0ksUUFBUSxHQUFHUCwrQ0FBUUEsQ0FBTTtRQUMvQlEsT0FBTztZQUNOQyxNQUFNO1FBQ1A7UUFDQUMsT0FBTztZQUNOQyxNQUFNO1FBQ1A7UUFDQUMsT0FBTztZQUNOQyxZQUFZO2dCQUFDO2dCQUFZO2dCQUFVO2dCQUFZO2dCQUFZO2dCQUFlO2FBQVc7UUFDdEY7SUFDRDtJQUVBLHFCQUNDLDhEQUFDQztRQUFJQyxJQUFHO1FBQVFDLFdBQVU7a0JBQ3pCLDRFQUFDZix3REFBY0E7WUFBQ00sU0FBU0E7WUFBU0gsUUFBUUE7WUFBUUssTUFBSztZQUFRUSxRQUFRO1lBQUtDLE9BQU87Ozs7Ozs7Ozs7O0FBR3RGO0dBekJTaEI7S0FBQUE7QUEyQlQsK0RBQWVBLG9CQUFvQkEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NoYXJ0cy9OdW1iZXJPZlRyYWRlc1BlcHBlci50c3g/NmU3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdEFwZXhDaGFydCBmcm9tICdyZWFjdC1hcGV4Y2hhcnRzJ1xuXG50eXBlIENoYXJ0RGF0YSA9IHtcblx0bmFtZTogc3RyaW5nXG5cdGRhdGE6IG51bWJlcltdXG59XG5cbmludGVyZmFjZSBQcm9wcyB7XG5cdG1vbnRobHlUcmFuc2FjdGlvbkNvdW50czogbnVtYmVyW11cbn1cblxuZnVuY3Rpb24gTnVtYmVyT2ZUcmFkZXNQZXBwZXIoeyBtb250aGx5VHJhbnNhY3Rpb25Db3VudHMgfTogUHJvcHMpIHtcblx0Y29uc3QgW3Nlcmllc10gPSB1c2VTdGF0ZTxDaGFydERhdGFbXT4oW1xuXHRcdHtcblx0XHRcdG5hbWU6ICdMaWN6YmEgdHJhbnNha2NqaSB3IHBvc3pjemVnw7NsbnljaCBtaWVzacSFY2FjaCBzZXpvbnUnLFxuXHRcdFx0ZGF0YTogbW9udGhseVRyYW5zYWN0aW9uQ291bnRzLFxuXHRcdH0sXG5cdF0pXG5cblx0Y29uc3QgW29wdGlvbnNdID0gdXNlU3RhdGU8YW55Pih7XG5cdFx0Y2hhcnQ6IHtcblx0XHRcdHR5cGU6ICdyYWRhcicsXG5cdFx0fSxcblx0XHR0aXRsZToge1xuXHRcdFx0dGV4dDogJycsXG5cdFx0fSxcblx0XHR4YXhpczoge1xuXHRcdFx0Y2F0ZWdvcmllczogWydDemVyd2llYycsICdMaXBpZWMnLCAnU2llcnBpZcWEJywgJ1dyemVzaWXFhCcsICdQYcW6ZHppZXJuaWsnLCAnTGlzdG9wYWQnXSxcblx0XHR9LFxuXHR9KVxuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBpZD0nY2hhcnQnIGNsYXNzTmFtZT0nZmxleCBqdXMnPlxuXHRcdFx0PFJlYWN0QXBleENoYXJ0IG9wdGlvbnM9e29wdGlvbnN9IHNlcmllcz17c2VyaWVzfSB0eXBlPSdyYWRhcicgaGVpZ2h0PXszMDB9IHdpZHRoPXszMDB9IC8+XG5cdFx0PC9kaXY+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyT2ZUcmFkZXNQZXBwZXJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiUmVhY3RBcGV4Q2hhcnQiLCJOdW1iZXJPZlRyYWRlc1BlcHBlciIsIm1vbnRobHlUcmFuc2FjdGlvbkNvdW50cyIsInNlcmllcyIsIm5hbWUiLCJkYXRhIiwib3B0aW9ucyIsImNoYXJ0IiwidHlwZSIsInRpdGxlIiwidGV4dCIsInhheGlzIiwiY2F0ZWdvcmllcyIsImRpdiIsImlkIiwiY2xhc3NOYW1lIiwiaGVpZ2h0Iiwid2lkdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./components/Charts/NumberOfTradesPepper.tsx\n"));

/***/ })

});