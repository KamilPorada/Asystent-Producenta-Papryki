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

/***/ "(app-client)/./components/Charts/TradesOfPepperByMonth.tsx":
/*!*****************************************************!*\
  !*** ./components/Charts/TradesOfPepperByMonth.tsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apexcharts */ \"(app-client)/./node_modules/react-apexcharts/dist/react-apexcharts.min.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction TradesOfPepperByMonth() {\n    _s();\n    const [series, setSeries] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            name: \"Zyski (zł)\",\n            type: \"bar\",\n            data: [\n                1000,\n                1500,\n                1200,\n                1800,\n                2000,\n                1600\n            ]\n        },\n        {\n            name: \"Zbiory (kg)\",\n            type: \"bar\",\n            data: [\n                500,\n                600,\n                550,\n                700,\n                800,\n                650\n            ]\n        }\n    ]);\n    const [options, setOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        chart: {\n            height: 350,\n            width: 200,\n            type: \"line\",\n            stacked: false\n        },\n        stroke: {\n            width: [\n                0,\n                1\n            ]\n        },\n        plotOptions: {\n            bar: {\n                columnWidth: \"25%\"\n            }\n        },\n        xaxis: {\n            categories: [\n                \"Czerwiec\",\n                \"Lipiec\",\n                \"Sierpień\",\n                \"Wrzesień\",\n                \"Październik\",\n                \"Listopad\"\n            ]\n        },\n        yaxis: [\n            {\n                seriesName: \"Zbiory (kg)\",\n                axisTicks: {\n                    show: true\n                },\n                axisBorder: {\n                    show: true,\n                    color: \"#262626\"\n                },\n                labels: {\n                    style: {\n                        colors: \"#262626\"\n                    }\n                },\n                title: {\n                    text: \"Zyski (zł)\",\n                    style: {\n                        color: \"#262626\"\n                    }\n                }\n            },\n            {\n                seriesName: \"Zbiory (kg)\",\n                opposite: true,\n                axisTicks: {\n                    show: true\n                },\n                axisBorder: {\n                    show: true,\n                    color: \"#262626\"\n                },\n                labels: {\n                    style: {\n                        colors: \"#262626\"\n                    }\n                },\n                title: {\n                    text: \"Zyski (zł)\",\n                    style: {\n                        color: \"#262626\"\n                    }\n                }\n            }\n        ],\n        tooltip: {\n            shared: false,\n            intersect: true\n        },\n        colors: [\n            \"#00b000\",\n            \"#262626\"\n        ]\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"chart\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_apexcharts__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            options: options,\n            series: series,\n            type: \"line\",\n            height: 350\n        }, void 0, false, {\n            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/TradesOfPepperByMonth.tsx\",\n            lineNumber: 97,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/TradesOfPepperByMonth.tsx\",\n        lineNumber: 96,\n        columnNumber: 3\n    }, this);\n}\n_s(TradesOfPepperByMonth, \"WZAZ56WieGXoCVRMeb+t44TKthc=\");\n_c = TradesOfPepperByMonth;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TradesOfPepperByMonth);\nvar _c;\n$RefreshReg$(_c, \"TradesOfPepperByMonth\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9DaGFydHMvVHJhZGVzT2ZQZXBwZXJCeU1vbnRoLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ3VDO0FBQ007QUFRN0MsU0FBU0c7O0lBQ1IsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdKLCtDQUFRQSxDQUFjO1FBQ2pEO1lBQ0NLLE1BQU07WUFDTkMsTUFBTTtZQUNOQyxNQUFNO2dCQUFDO2dCQUFNO2dCQUFNO2dCQUFNO2dCQUFNO2dCQUFNO2FBQUs7UUFDM0M7UUFDQTtZQUNDRixNQUFNO1lBQ05DLE1BQU07WUFDTkMsTUFBTTtnQkFBQztnQkFBSztnQkFBSztnQkFBSztnQkFBSztnQkFBSzthQUFJO1FBQ3JDO0tBQ0E7SUFFRCxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1QsK0NBQVFBLENBQU07UUFDM0NVLE9BQU87WUFDTkMsUUFBUTtZQUNMQyxPQUFNO1lBQ1ROLE1BQU07WUFDTk8sU0FBUztRQUNWO1FBQ0FDLFFBQVE7WUFDUEYsT0FBTztnQkFBQztnQkFBRzthQUFFO1FBQ2Q7UUFDQUcsYUFBYTtZQUNaQyxLQUFLO2dCQUNKQyxhQUFhO1lBQ2Q7UUFDRDtRQUNBQyxPQUFPO1lBQ05DLFlBQVk7Z0JBQUM7Z0JBQVk7Z0JBQVU7Z0JBQVk7Z0JBQVk7Z0JBQWU7YUFBVztRQUN0RjtRQUNBQyxPQUFPO1lBQ047Z0JBQ0NDLFlBQVk7Z0JBQ1pDLFdBQVc7b0JBQ1ZDLE1BQU07Z0JBQ1A7Z0JBQ0FDLFlBQVk7b0JBQ1hELE1BQU07b0JBQ05FLE9BQU87Z0JBQ1I7Z0JBQ0FDLFFBQVE7b0JBQ1BDLE9BQU87d0JBQ05DLFFBQVE7b0JBQ1Q7Z0JBQ0Q7Z0JBQ0FDLE9BQU87b0JBQ05DLE1BQU07b0JBQ05ILE9BQU87d0JBQ05GLE9BQU87b0JBQ1I7Z0JBQ0Q7WUFDRDtZQUNBO2dCQUNDSixZQUFZO2dCQUNaVSxVQUFVO2dCQUNWVCxXQUFXO29CQUNWQyxNQUFNO2dCQUNQO2dCQUNBQyxZQUFZO29CQUNYRCxNQUFNO29CQUNORSxPQUFPO2dCQUNSO2dCQUNBQyxRQUFRO29CQUNQQyxPQUFPO3dCQUNOQyxRQUFRO29CQUNUO2dCQUNEO2dCQUNBQyxPQUFPO29CQUNOQyxNQUFNO29CQUNOSCxPQUFPO3dCQUNORixPQUFPO29CQUNSO2dCQUNEO1lBQ0Q7U0FDQTtRQUNETyxTQUFTO1lBQ1JDLFFBQVE7WUFDUkMsV0FBVztRQUNaO1FBQ0FOLFFBQVE7WUFBQztZQUFXO1NBQVU7SUFDL0I7SUFFQSxxQkFDQyw4REFBQ087UUFBSUMsSUFBRztrQkFDUCw0RUFBQ25DLHdEQUFjQTtZQUFDTyxTQUFTQTtZQUFTTCxRQUFRQTtZQUFRRyxNQUFLO1lBQU9LLFFBQVE7Ozs7Ozs7Ozs7O0FBR3pFO0dBekZTVDtLQUFBQTtBQTJGVCwrREFBZUEscUJBQXFCQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2hhcnRzL1RyYWRlc09mUGVwcGVyQnlNb250aC50c3g/YmUzMyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0QXBleENoYXJ0IGZyb20gJ3JlYWN0LWFwZXhjaGFydHMnXG5cbnR5cGUgQ2hhcnREYXRhID0ge1xuXHRuYW1lOiBzdHJpbmdcblx0dHlwZTogc3RyaW5nXG5cdGRhdGE6IG51bWJlcltdXG59XG5cbmZ1bmN0aW9uIFRyYWRlc09mUGVwcGVyQnlNb250aCgpIHtcblx0Y29uc3QgW3Nlcmllcywgc2V0U2VyaWVzXSA9IHVzZVN0YXRlPENoYXJ0RGF0YVtdPihbXG5cdFx0e1xuXHRcdFx0bmFtZTogJ1p5c2tpICh6xYIpJyxcblx0XHRcdHR5cGU6ICdiYXInLFxuXHRcdFx0ZGF0YTogWzEwMDAsIDE1MDAsIDEyMDAsIDE4MDAsIDIwMDAsIDE2MDBdLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bmFtZTogJ1piaW9yeSAoa2cpJyxcblx0XHRcdHR5cGU6ICdiYXInLFxuXHRcdFx0ZGF0YTogWzUwMCwgNjAwLCA1NTAsIDcwMCwgODAwLCA2NTBdLFxuXHRcdH0sXG5cdF0pXG5cblx0Y29uc3QgW29wdGlvbnMsIHNldE9wdGlvbnNdID0gdXNlU3RhdGU8YW55Pih7XG5cdFx0Y2hhcnQ6IHtcblx0XHRcdGhlaWdodDogMzUwLFxuICAgICAgd2lkdGg6MjAwLFxuXHRcdFx0dHlwZTogJ2xpbmUnLFxuXHRcdFx0c3RhY2tlZDogZmFsc2UsXG5cdFx0fSxcblx0XHRzdHJva2U6IHtcblx0XHRcdHdpZHRoOiBbMCwgMV0sXG5cdFx0fSxcblx0XHRwbG90T3B0aW9uczoge1xuXHRcdFx0YmFyOiB7XG5cdFx0XHRcdGNvbHVtbldpZHRoOiAnMjUlJyxcblx0XHRcdH0sXG5cdFx0fSxcblx0XHR4YXhpczoge1xuXHRcdFx0Y2F0ZWdvcmllczogWydDemVyd2llYycsICdMaXBpZWMnLCAnU2llcnBpZcWEJywgJ1dyemVzaWXFhCcsICdQYcW6ZHppZXJuaWsnLCAnTGlzdG9wYWQnXSxcblx0XHR9LFxuXHRcdHlheGlzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdHNlcmllc05hbWU6ICdaYmlvcnkgKGtnKScsXG5cdFx0XHRcdGF4aXNUaWNrczoge1xuXHRcdFx0XHRcdHNob3c6IHRydWUsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGF4aXNCb3JkZXI6IHtcblx0XHRcdFx0XHRzaG93OiB0cnVlLFxuXHRcdFx0XHRcdGNvbG9yOiAnIzI2MjYyNicsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGxhYmVsczoge1xuXHRcdFx0XHRcdHN0eWxlOiB7XG5cdFx0XHRcdFx0XHRjb2xvcnM6ICcjMjYyNjI2Jyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR0aXRsZToge1xuXHRcdFx0XHRcdHRleHQ6ICdaeXNraSAoesWCKScsXG5cdFx0XHRcdFx0c3R5bGU6IHtcblx0XHRcdFx0XHRcdGNvbG9yOiAnIzI2MjYyNicsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHNlcmllc05hbWU6ICdaYmlvcnkgKGtnKScsXG5cdFx0XHRcdG9wcG9zaXRlOiB0cnVlLFxuXHRcdFx0XHRheGlzVGlja3M6IHtcblx0XHRcdFx0XHRzaG93OiB0cnVlLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRheGlzQm9yZGVyOiB7XG5cdFx0XHRcdFx0c2hvdzogdHJ1ZSxcblx0XHRcdFx0XHRjb2xvcjogJyMyNjI2MjYnLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRsYWJlbHM6IHtcblx0XHRcdFx0XHRzdHlsZToge1xuXHRcdFx0XHRcdFx0Y29sb3JzOiAnIzI2MjYyNicsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdFx0dGl0bGU6IHtcblx0XHRcdFx0XHR0ZXh0OiAnWnlza2kgKHrFgiknLFxuXHRcdFx0XHRcdHN0eWxlOiB7XG5cdFx0XHRcdFx0XHRjb2xvcjogJyMyNjI2MjYnLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdF0sXG5cdFx0dG9vbHRpcDoge1xuXHRcdFx0c2hhcmVkOiBmYWxzZSxcblx0XHRcdGludGVyc2VjdDogdHJ1ZSxcblx0XHR9LFxuXHRcdGNvbG9yczogWycjMDBiMDAwJywgJyMyNjI2MjYnXSwgLy8gS29sb3IgY3plcndvbnkgZGxhIHNlcmlpIFwiWmJpb3J5IChrZylcIlxuXHR9KVxuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBpZD0nY2hhcnQnPlxuXHRcdFx0PFJlYWN0QXBleENoYXJ0IG9wdGlvbnM9e29wdGlvbnN9IHNlcmllcz17c2VyaWVzfSB0eXBlPSdsaW5lJyBoZWlnaHQ9ezM1MH0gLz5cblx0XHQ8L2Rpdj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmFkZXNPZlBlcHBlckJ5TW9udGhcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiUmVhY3RBcGV4Q2hhcnQiLCJUcmFkZXNPZlBlcHBlckJ5TW9udGgiLCJzZXJpZXMiLCJzZXRTZXJpZXMiLCJuYW1lIiwidHlwZSIsImRhdGEiLCJvcHRpb25zIiwic2V0T3B0aW9ucyIsImNoYXJ0IiwiaGVpZ2h0Iiwid2lkdGgiLCJzdGFja2VkIiwic3Ryb2tlIiwicGxvdE9wdGlvbnMiLCJiYXIiLCJjb2x1bW5XaWR0aCIsInhheGlzIiwiY2F0ZWdvcmllcyIsInlheGlzIiwic2VyaWVzTmFtZSIsImF4aXNUaWNrcyIsInNob3ciLCJheGlzQm9yZGVyIiwiY29sb3IiLCJsYWJlbHMiLCJzdHlsZSIsImNvbG9ycyIsInRpdGxlIiwidGV4dCIsIm9wcG9zaXRlIiwidG9vbHRpcCIsInNoYXJlZCIsImludGVyc2VjdCIsImRpdiIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/Charts/TradesOfPepperByMonth.tsx\n"));

/***/ })

});