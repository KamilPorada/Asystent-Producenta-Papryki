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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apexcharts */ \"(app-client)/./node_modules/react-apexcharts/dist/react-apexcharts.min.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction TradesOfPepperByMonth() {\n    _s();\n    const [series, setSeries] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            name: \"Zbiory (kg)\",\n            type: \"bar\",\n            data: [\n                100,\n                150,\n                120,\n                180,\n                200,\n                160\n            ]\n        },\n        {\n            name: \"Zyski (zł)\",\n            type: \"line\",\n            data: [\n                5000,\n                6000,\n                5500,\n                7000,\n                8000,\n                6500\n            ]\n        }\n    ]);\n    const [options, setOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        chart: {\n            height: 350,\n            type: \"line\",\n            stacked: false\n        },\n        stroke: {\n            width: [\n                0,\n                4\n            ]\n        },\n        plotOptions: {\n            bar: {\n                columnWidth: \"25%\"\n            }\n        },\n        xaxis: {\n            categories: [\n                \"Czerwiec\",\n                \"Lipiec\",\n                \"Sierpień\",\n                \"Wrzesień\",\n                \"Październik\",\n                \"Listopad\"\n            ]\n        },\n        yaxis: [\n            {\n                seriesName: \"Zbiory (kg)\",\n                axisTicks: {\n                    show: true\n                },\n                axisBorder: {\n                    show: true,\n                    color: \"#262626\"\n                },\n                labels: {\n                    style: {\n                        colors: \"#262626\"\n                    }\n                },\n                title: {\n                    text: \"Zbiory (kg)\",\n                    style: {\n                        color: \"#262626\"\n                    }\n                }\n            },\n            {\n                seriesName: \"Zyski (zł)\",\n                opposite: true,\n                axisTicks: {\n                    show: true\n                },\n                axisBorder: {\n                    show: true,\n                    color: \"#262626\"\n                },\n                labels: {\n                    style: {\n                        colors: \"#262626\"\n                    }\n                },\n                title: {\n                    text: \"Zyski (zł)\",\n                    style: {\n                        color: \"#262626\"\n                    }\n                }\n            }\n        ],\n        tooltip: {\n            shared: false,\n            intersect: true,\n            y: {\n                formatter: function(val, param) {\n                    let { seriesName } = param;\n                    if (seriesName === \"Zbiory (kg)\") {\n                        return val + \" kg\";\n                    } else if (seriesName === \"Zyski (zł)\") {\n                        return val.toLocaleString(\"pl-PL\") + \" zł\";\n                    }\n                    return val;\n                }\n            }\n        },\n        colors: [\n            \"#262626\",\n            \"#00E396\"\n        ]\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"chart\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_apexcharts__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            options: options,\n            series: series,\n            type: \"line\",\n            height: 350\n        }, void 0, false, {\n            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/TradesOfPepperByMonth.tsx\",\n            lineNumber: 106,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/TradesOfPepperByMonth.tsx\",\n        lineNumber: 105,\n        columnNumber: 3\n    }, this);\n}\n_s(TradesOfPepperByMonth, \"VLUVn0ETvXLluhV8R1oHsHJY++Q=\");\n_c = TradesOfPepperByMonth;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TradesOfPepperByMonth);\nvar _c;\n$RefreshReg$(_c, \"TradesOfPepperByMonth\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9DaGFydHMvVHJhZGVzT2ZQZXBwZXJCeU1vbnRoLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ3VDO0FBQ007QUFRN0MsU0FBU0c7O0lBQ1IsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdKLCtDQUFRQSxDQUFjO1FBQ2pEO1lBQ0NLLE1BQU07WUFDTkMsTUFBTTtZQUNOQyxNQUFNO2dCQUFDO2dCQUFLO2dCQUFLO2dCQUFLO2dCQUFLO2dCQUFLO2FBQUk7UUFDckM7UUFDQTtZQUNDRixNQUFNO1lBQ05DLE1BQU07WUFDTkMsTUFBTTtnQkFBQztnQkFBTTtnQkFBTTtnQkFBTTtnQkFBTTtnQkFBTTthQUFLO1FBQzNDO0tBQ0E7SUFFRCxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1QsK0NBQVFBLENBQU07UUFDM0NVLE9BQU87WUFDTkMsUUFBUTtZQUNSTCxNQUFNO1lBQ05NLFNBQVM7UUFDVjtRQUNBQyxRQUFRO1lBQ1BDLE9BQU87Z0JBQUM7Z0JBQUc7YUFBRTtRQUNkO1FBQ0FDLGFBQWE7WUFDWkMsS0FBSztnQkFDSkMsYUFBYTtZQUNkO1FBQ0Q7UUFDQUMsT0FBTztZQUNOQyxZQUFZO2dCQUFDO2dCQUFZO2dCQUFVO2dCQUFZO2dCQUFZO2dCQUFlO2FBQVc7UUFDdEY7UUFDQUMsT0FBTztZQUNOO2dCQUNDQyxZQUFZO2dCQUNaQyxXQUFXO29CQUNWQyxNQUFNO2dCQUNQO2dCQUNBQyxZQUFZO29CQUNYRCxNQUFNO29CQUNORSxPQUFPO2dCQUNSO2dCQUNBQyxRQUFRO29CQUNQQyxPQUFPO3dCQUNOQyxRQUFRO29CQUNUO2dCQUNEO2dCQUNBQyxPQUFPO29CQUNOQyxNQUFNO29CQUNOSCxPQUFPO3dCQUNORixPQUFPO29CQUNSO2dCQUNEO1lBQ0Q7WUFDQTtnQkFDQ0osWUFBWTtnQkFDWlUsVUFBVTtnQkFDVlQsV0FBVztvQkFDVkMsTUFBTTtnQkFDUDtnQkFDQUMsWUFBWTtvQkFDWEQsTUFBTTtvQkFDTkUsT0FBTztnQkFDUjtnQkFDQUMsUUFBUTtvQkFDUEMsT0FBTzt3QkFDTkMsUUFBUTtvQkFDVDtnQkFDRDtnQkFDQUMsT0FBTztvQkFDTkMsTUFBTTtvQkFDTkgsT0FBTzt3QkFDTkYsT0FBTztvQkFDUjtnQkFDRDtZQUNEO1NBQ0E7UUFDRE8sU0FBUztZQUNSQyxRQUFRO1lBQ1JDLFdBQVc7WUFDWEMsR0FBRztnQkFDRkMsV0FBVyxTQUFVQyxHQUFXLEVBQUUsS0FBc0M7d0JBQXRDLEVBQUVoQixVQUFVLEVBQTBCLEdBQXRDO29CQUNqQyxJQUFJQSxlQUFlLGVBQWU7d0JBQ2pDLE9BQU9nQixNQUFNO29CQUNkLE9BQU8sSUFBSWhCLGVBQWUsY0FBYzt3QkFDdkMsT0FBT2dCLElBQUlDLGVBQWUsV0FBVztvQkFDdEM7b0JBQ0EsT0FBT0Q7Z0JBQ1I7WUFDRDtRQUNEO1FBQ0FULFFBQVE7WUFBQztZQUFXO1NBQVU7SUFDL0I7SUFFQSxxQkFDQyw4REFBQ1c7UUFBSUMsSUFBRztrQkFDUCw0RUFBQ3ZDLHdEQUFjQTtZQUFDTyxTQUFTQTtZQUFTTCxRQUFRQTtZQUFRRyxNQUFLO1lBQU9LLFFBQVE7Ozs7Ozs7Ozs7O0FBR3pFO0dBbEdTVDtLQUFBQTtBQW9HVCwrREFBZUEscUJBQXFCQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2hhcnRzL1RyYWRlc09mUGVwcGVyQnlNb250aC50c3g/YmUzMyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0QXBleENoYXJ0IGZyb20gJ3JlYWN0LWFwZXhjaGFydHMnXG5cbnR5cGUgQ2hhcnREYXRhID0ge1xuXHRuYW1lOiBzdHJpbmdcblx0dHlwZTogc3RyaW5nXG5cdGRhdGE6IG51bWJlcltdXG59XG5cbmZ1bmN0aW9uIFRyYWRlc09mUGVwcGVyQnlNb250aCgpIHtcblx0Y29uc3QgW3Nlcmllcywgc2V0U2VyaWVzXSA9IHVzZVN0YXRlPENoYXJ0RGF0YVtdPihbXG5cdFx0e1xuXHRcdFx0bmFtZTogJ1piaW9yeSAoa2cpJyxcblx0XHRcdHR5cGU6ICdiYXInLFxuXHRcdFx0ZGF0YTogWzEwMCwgMTUwLCAxMjAsIDE4MCwgMjAwLCAxNjBdLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bmFtZTogJ1p5c2tpICh6xYIpJyxcblx0XHRcdHR5cGU6ICdsaW5lJyxcblx0XHRcdGRhdGE6IFs1MDAwLCA2MDAwLCA1NTAwLCA3MDAwLCA4MDAwLCA2NTAwXSxcblx0XHR9LFxuXHRdKVxuXG5cdGNvbnN0IFtvcHRpb25zLCBzZXRPcHRpb25zXSA9IHVzZVN0YXRlPGFueT4oe1xuXHRcdGNoYXJ0OiB7XG5cdFx0XHRoZWlnaHQ6IDM1MCxcblx0XHRcdHR5cGU6ICdsaW5lJyxcblx0XHRcdHN0YWNrZWQ6IGZhbHNlLFxuXHRcdH0sXG5cdFx0c3Ryb2tlOiB7XG5cdFx0XHR3aWR0aDogWzAsIDRdLFxuXHRcdH0sXG5cdFx0cGxvdE9wdGlvbnM6IHtcblx0XHRcdGJhcjoge1xuXHRcdFx0XHRjb2x1bW5XaWR0aDogJzI1JScsXG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0eGF4aXM6IHtcblx0XHRcdGNhdGVnb3JpZXM6IFsnQ3plcndpZWMnLCAnTGlwaWVjJywgJ1NpZXJwaWXFhCcsICdXcnplc2llxYQnLCAnUGHFumR6aWVybmlrJywgJ0xpc3RvcGFkJ10sXG5cdFx0fSxcblx0XHR5YXhpczogW1xuXHRcdFx0e1xuXHRcdFx0XHRzZXJpZXNOYW1lOiAnWmJpb3J5IChrZyknLFxuXHRcdFx0XHRheGlzVGlja3M6IHtcblx0XHRcdFx0XHRzaG93OiB0cnVlLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRheGlzQm9yZGVyOiB7XG5cdFx0XHRcdFx0c2hvdzogdHJ1ZSxcblx0XHRcdFx0XHRjb2xvcjogJyMyNjI2MjYnLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRsYWJlbHM6IHtcblx0XHRcdFx0XHRzdHlsZToge1xuXHRcdFx0XHRcdFx0Y29sb3JzOiAnIzI2MjYyNicsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdFx0dGl0bGU6IHtcblx0XHRcdFx0XHR0ZXh0OiAnWmJpb3J5IChrZyknLFxuXHRcdFx0XHRcdHN0eWxlOiB7XG5cdFx0XHRcdFx0XHRjb2xvcjogJyMyNjI2MjYnLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRzZXJpZXNOYW1lOiAnWnlza2kgKHrFgiknLFxuXHRcdFx0XHRvcHBvc2l0ZTogdHJ1ZSxcblx0XHRcdFx0YXhpc1RpY2tzOiB7XG5cdFx0XHRcdFx0c2hvdzogdHJ1ZSxcblx0XHRcdFx0fSxcblx0XHRcdFx0YXhpc0JvcmRlcjoge1xuXHRcdFx0XHRcdHNob3c6IHRydWUsXG5cdFx0XHRcdFx0Y29sb3I6ICcjMjYyNjI2Jyxcblx0XHRcdFx0fSxcblx0XHRcdFx0bGFiZWxzOiB7XG5cdFx0XHRcdFx0c3R5bGU6IHtcblx0XHRcdFx0XHRcdGNvbG9yczogJyMyNjI2MjYnLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHRpdGxlOiB7XG5cdFx0XHRcdFx0dGV4dDogJ1p5c2tpICh6xYIpJyxcblx0XHRcdFx0XHRzdHlsZToge1xuXHRcdFx0XHRcdFx0Y29sb3I6ICcjMjYyNjI2Jyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRdLFxuXHRcdHRvb2x0aXA6IHtcblx0XHRcdHNoYXJlZDogZmFsc2UsXG5cdFx0XHRpbnRlcnNlY3Q6IHRydWUsXG5cdFx0XHR5OiB7XG5cdFx0XHRcdGZvcm1hdHRlcjogZnVuY3Rpb24gKHZhbDogbnVtYmVyLCB7IHNlcmllc05hbWUgfTogeyBzZXJpZXNOYW1lOiBzdHJpbmcgfSkge1xuXHRcdFx0XHRcdGlmIChzZXJpZXNOYW1lID09PSAnWmJpb3J5IChrZyknKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdmFsICsgJyBrZydcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHNlcmllc05hbWUgPT09ICdaeXNraSAoesWCKScpIHtcblx0XHRcdFx0XHRcdHJldHVybiB2YWwudG9Mb2NhbGVTdHJpbmcoJ3BsLVBMJykgKyAnIHrFgidcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIHZhbFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHR9LFxuXHRcdGNvbG9yczogWycjMjYyNjI2JywgJyMwMEUzOTYnXSwgLy8gS29sb3IgY3plcndvbnkgZGxhIHNlcmlpIFwiWmJpb3J5IChrZylcIlxuXHR9KVxuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBpZD0nY2hhcnQnPlxuXHRcdFx0PFJlYWN0QXBleENoYXJ0IG9wdGlvbnM9e29wdGlvbnN9IHNlcmllcz17c2VyaWVzfSB0eXBlPSdsaW5lJyBoZWlnaHQ9ezM1MH0gLz5cblx0XHQ8L2Rpdj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmFkZXNPZlBlcHBlckJ5TW9udGhcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiUmVhY3RBcGV4Q2hhcnQiLCJUcmFkZXNPZlBlcHBlckJ5TW9udGgiLCJzZXJpZXMiLCJzZXRTZXJpZXMiLCJuYW1lIiwidHlwZSIsImRhdGEiLCJvcHRpb25zIiwic2V0T3B0aW9ucyIsImNoYXJ0IiwiaGVpZ2h0Iiwic3RhY2tlZCIsInN0cm9rZSIsIndpZHRoIiwicGxvdE9wdGlvbnMiLCJiYXIiLCJjb2x1bW5XaWR0aCIsInhheGlzIiwiY2F0ZWdvcmllcyIsInlheGlzIiwic2VyaWVzTmFtZSIsImF4aXNUaWNrcyIsInNob3ciLCJheGlzQm9yZGVyIiwiY29sb3IiLCJsYWJlbHMiLCJzdHlsZSIsImNvbG9ycyIsInRpdGxlIiwidGV4dCIsIm9wcG9zaXRlIiwidG9vbHRpcCIsInNoYXJlZCIsImludGVyc2VjdCIsInkiLCJmb3JtYXR0ZXIiLCJ2YWwiLCJ0b0xvY2FsZVN0cmluZyIsImRpdiIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/Charts/TradesOfPepperByMonth.tsx\n"));

/***/ })

});