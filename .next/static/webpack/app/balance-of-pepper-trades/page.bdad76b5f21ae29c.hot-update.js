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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apexcharts */ \"(app-client)/./node_modules/react-apexcharts/dist/react-apexcharts.min.js\");\n/* harmony import */ var _components_UI_ChartArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/UI/ChartArea */ \"(app-client)/./components/UI/ChartArea.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction TradesOfPepperByMonth(param) {\n    let { monthlySums, monthlyWeights } = param;\n    _s();\n    const [series] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            name: \"Zyski (zł)\",\n            type: \"bar\",\n            data: monthlySums\n        },\n        {\n            name: \"Zbiory (kg)\",\n            type: \"bar\",\n            data: monthlyWeights\n        }\n    ]);\n    const [options] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        chart: {\n            type: \"line\",\n            stacked: false\n        },\n        stroke: {\n            width: [\n                0,\n                1\n            ]\n        },\n        plotOptions: {\n            bar: {\n                columnWidth: \"50%\"\n            }\n        },\n        xaxis: {\n            categories: [\n                \"Czerwiec\",\n                \"Lipiec\",\n                \"Sierpień\",\n                \"Wrzesień\",\n                \"Październik\",\n                \"Listopad\"\n            ]\n        },\n        yaxis: [\n            {\n                seriesName: \"Zyski (zł)\",\n                axisTicks: {\n                    show: true\n                },\n                axisBorder: {\n                    show: true,\n                    color: \"#262626\"\n                },\n                labels: {\n                    style: {\n                        colors: \"#262626\"\n                    }\n                },\n                title: {\n                    text: \"Zyski (zł)\",\n                    style: {\n                        color: \"#262626\"\n                    }\n                }\n            },\n            {\n                seriesName: \"Zbiory (kg)\",\n                opposite: true,\n                axisTicks: {\n                    show: true\n                },\n                axisBorder: {\n                    show: true,\n                    color: \"#262626\"\n                },\n                labels: {\n                    style: {\n                        colors: \"#262626\"\n                    }\n                },\n                title: {\n                    text: \"Zbiory (kg)\",\n                    style: {\n                        color: \"#262626\"\n                    }\n                }\n            }\n        ],\n        tooltip: {\n            shared: false,\n            intersect: true,\n            y: {\n                formatter: function(val, param) {\n                    let { seriesName } = param;\n                    if (seriesName === \"Zbiory (kg)\") {\n                        return val + \" kg\";\n                    } else if (seriesName === \"Zyski (zł)\") {\n                        return val.toLocaleString(\"pl-PL\") + \" zł\";\n                    }\n                    return val;\n                }\n            }\n        },\n        colors: [\n            \"#00b000\",\n            \"#262626\"\n        ]\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_ChartArea__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row justify-between mx-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-semibold\",\n                                children: \"Roczne zyski:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/TradesOfPepperByMonth.tsx\",\n                                lineNumber: 125,\n                                columnNumber: 6\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-lg font-semibold text-mainColor\",\n                                children: [\n                                    formattedAnnualProfit,\n                                    \" zł\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/TradesOfPepperByMonth.tsx\",\n                                lineNumber: 126,\n                                columnNumber: 6\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/TradesOfPepperByMonth.tsx\",\n                        lineNumber: 124,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-right\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-semibold\",\n                                children: \"Roczne zbiory:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/TradesOfPepperByMonth.tsx\",\n                                lineNumber: 129,\n                                columnNumber: 6\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-lg font-semibold text-mainColor\",\n                                children: [\n                                    formattedAnnualHarvest,\n                                    \" kg\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/TradesOfPepperByMonth.tsx\",\n                                lineNumber: 130,\n                                columnNumber: 6\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/TradesOfPepperByMonth.tsx\",\n                        lineNumber: 128,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/TradesOfPepperByMonth.tsx\",\n                lineNumber: 123,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"chart\",\n                className: \"flex md:justify-center md:items-center overflow-x-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_apexcharts__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    options: options,\n                    series: series,\n                    type: \"line\",\n                    height: 300,\n                    width: 750\n                }, void 0, false, {\n                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/TradesOfPepperByMonth.tsx\",\n                    lineNumber: 134,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/TradesOfPepperByMonth.tsx\",\n                lineNumber: 133,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/TradesOfPepperByMonth.tsx\",\n        lineNumber: 122,\n        columnNumber: 3\n    }, this);\n}\n_s(TradesOfPepperByMonth, \"69L7Z/jr8cwENjwC3WMLceF1720=\");\n_c = TradesOfPepperByMonth;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TradesOfPepperByMonth);\nvar _c;\n$RefreshReg$(_c, \"TradesOfPepperByMonth\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9DaGFydHMvVHJhZGVzT2ZQZXBwZXJCeU1vbnRoLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF1QztBQUNNO0FBQ0c7QUEwQmhELFNBQVNJLHNCQUFzQixLQUFzQztRQUF0QyxFQUFFQyxXQUFXLEVBQUVDLGNBQWMsRUFBUyxHQUF0Qzs7SUFDOUIsTUFBTSxDQUFDQyxPQUFPLEdBQUdOLCtDQUFRQSxDQUFjO1FBQ3RDO1lBQ0NPLE1BQU07WUFDTkMsTUFBTTtZQUNOQyxNQUFNTDtRQUNQO1FBQ0E7WUFDQ0csTUFBTTtZQUNOQyxNQUFNO1lBQ05DLE1BQU1KO1FBQ1A7S0FDQTtJQUVELE1BQU0sQ0FBQ0ssUUFBUSxHQUFHViwrQ0FBUUEsQ0FBTTtRQUMvQlcsT0FBTztZQUNOSCxNQUFNO1lBQ05JLFNBQVM7UUFDVjtRQUNBQyxRQUFRO1lBQ1BDLE9BQU87Z0JBQUM7Z0JBQUc7YUFBRTtRQUNkO1FBQ0FDLGFBQWE7WUFDWkMsS0FBSztnQkFDSkMsYUFBYTtZQUNkO1FBQ0Q7UUFDQUMsT0FBTztZQUNOQyxZQUFZO2dCQUFDO2dCQUFZO2dCQUFVO2dCQUFZO2dCQUFZO2dCQUFlO2FBQVc7UUFDdEY7UUFDQUMsT0FBTztZQUNOO2dCQUNDQyxZQUFZO2dCQUNaQyxXQUFXO29CQUNWQyxNQUFNO2dCQUNQO2dCQUNBQyxZQUFZO29CQUNYRCxNQUFNO29CQUNORSxPQUFPO2dCQUNSO2dCQUNBQyxRQUFRO29CQUNQQyxPQUFPO3dCQUNOQyxRQUFRO29CQUNUO2dCQUNEO2dCQUNBQyxPQUFPO29CQUNOQyxNQUFNO29CQUNOSCxPQUFPO3dCQUNORixPQUFPO29CQUNSO2dCQUNEO1lBQ0Q7WUFDQTtnQkFDQ0osWUFBWTtnQkFDWlUsVUFBVTtnQkFDVlQsV0FBVztvQkFDVkMsTUFBTTtnQkFDUDtnQkFDQUMsWUFBWTtvQkFDWEQsTUFBTTtvQkFDTkUsT0FBTztnQkFDUjtnQkFDQUMsUUFBUTtvQkFDUEMsT0FBTzt3QkFDTkMsUUFBUTtvQkFDVDtnQkFDRDtnQkFDQUMsT0FBTztvQkFDTkMsTUFBTTtvQkFDTkgsT0FBTzt3QkFDTkYsT0FBTztvQkFDUjtnQkFDRDtZQUNEO1NBQ0E7UUFDRE8sU0FBUztZQUNSQyxRQUFRO1lBQ1JDLFdBQVc7WUFDWEMsR0FBRztnQkFDRkMsV0FBVyxTQUFVQyxHQUFXLEVBQUUsS0FBc0M7d0JBQXRDLEVBQUVoQixVQUFVLEVBQTBCLEdBQXRDO29CQUNqQyxJQUFJQSxlQUFlLGVBQWU7d0JBQ2pDLE9BQU9nQixNQUFNO29CQUNkLE9BQU8sSUFBSWhCLGVBQWUsY0FBYzt3QkFDdkMsT0FBT2dCLElBQUlDLGVBQWUsV0FBVztvQkFDdEM7b0JBQ0EsT0FBT0Q7Z0JBQ1I7WUFDRDtRQUNEO1FBQ0FULFFBQVE7WUFBQztZQUFXO1NBQVU7SUFDL0I7SUFFQSxxQkFDQyw4REFBQzFCLGdFQUFTQTs7MEJBQ1QsOERBQUNxQztnQkFBSUMsV0FBVTs7a0NBQ2QsOERBQUNEOzswQ0FDQSw4REFBQ0U7Z0NBQUVELFdBQVU7MENBQWdCOzs7Ozs7MENBQzdCLDhEQUFDQztnQ0FBRUQsV0FBVTs7b0NBQXdDRTtvQ0FBc0I7Ozs7Ozs7Ozs7Ozs7a0NBRTVFLDhEQUFDSDt3QkFBSUMsV0FBVTs7MENBQ2QsOERBQUNDO2dDQUFFRCxXQUFVOzBDQUFnQjs7Ozs7OzBDQUM3Qiw4REFBQ0M7Z0NBQUVELFdBQVU7O29DQUF3Q0c7b0NBQXVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUc5RSw4REFBQ0o7Z0JBQUlLLElBQUc7Z0JBQVFKLFdBQVU7MEJBQ3pCLDRFQUFDdkMsd0RBQWNBO29CQUFDUyxTQUFTQTtvQkFBU0osUUFBUUE7b0JBQVFFLE1BQUs7b0JBQU9xQyxRQUFRO29CQUFLL0IsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJdEY7R0E3R1NYO0tBQUFBO0FBK0dULCtEQUFlQSxxQkFBcUJBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGFydHMvVHJhZGVzT2ZQZXBwZXJCeU1vbnRoLnRzeD9iZTMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0QXBleENoYXJ0IGZyb20gJ3JlYWN0LWFwZXhjaGFydHMnXG5pbXBvcnQgQ2hhcnRBcmVhIGZyb20gJ0Bjb21wb25lbnRzL1VJL0NoYXJ0QXJlYSdcblxudHlwZSBDaGFydERhdGEgPSB7XG5cdG5hbWU6IHN0cmluZ1xuXHR0eXBlOiBzdHJpbmdcblx0ZGF0YTogbnVtYmVyW11cbn1cblxuaW50ZXJmYWNlIFRyYWRlT2ZQZXBwZXIge1xuXHRfaWQ6IHN0cmluZ1xuXHRjcmVhdG9yOiB7XG5cdFx0X2lkOiBzdHJpbmdcblx0XHRlbWFpbDogc3RyaW5nXG5cdFx0dXNlcm5hbWU6IHN0cmluZ1xuXHRcdGltYWdlOiBzdHJpbmdcblx0fVxuXHRwb2ludE9mU2FsZUlkOiBzdHJpbmdcblx0ZGF0ZTogc3RyaW5nXG5cdGNsYXM6IG51bWJlclxuXHRjb2xvcjogbnVtYmVyXG5cdHByaWNlOiBudW1iZXJcblx0d2VpZ2h0OiBudW1iZXJcblx0dmF0UmF0ZTogbnVtYmVyXG5cdHRvdGFsU3VtOiBudW1iZXJcbn1cblxuZnVuY3Rpb24gVHJhZGVzT2ZQZXBwZXJCeU1vbnRoKHsgbW9udGhseVN1bXMsIG1vbnRobHlXZWlnaHRzIH06IFByb3BzKSB7XG5cdGNvbnN0IFtzZXJpZXNdID0gdXNlU3RhdGU8Q2hhcnREYXRhW10+KFtcblx0XHR7XG5cdFx0XHRuYW1lOiAnWnlza2kgKHrFgiknLFxuXHRcdFx0dHlwZTogJ2JhcicsXG5cdFx0XHRkYXRhOiBtb250aGx5U3Vtcyxcblx0XHR9LFxuXHRcdHtcblx0XHRcdG5hbWU6ICdaYmlvcnkgKGtnKScsXG5cdFx0XHR0eXBlOiAnYmFyJyxcblx0XHRcdGRhdGE6IG1vbnRobHlXZWlnaHRzLFxuXHRcdH0sXG5cdF0pXG5cblx0Y29uc3QgW29wdGlvbnNdID0gdXNlU3RhdGU8YW55Pih7XG5cdFx0Y2hhcnQ6IHtcblx0XHRcdHR5cGU6ICdsaW5lJyxcblx0XHRcdHN0YWNrZWQ6IGZhbHNlLFxuXHRcdH0sXG5cdFx0c3Ryb2tlOiB7XG5cdFx0XHR3aWR0aDogWzAsIDFdLFxuXHRcdH0sXG5cdFx0cGxvdE9wdGlvbnM6IHtcblx0XHRcdGJhcjoge1xuXHRcdFx0XHRjb2x1bW5XaWR0aDogJzUwJScsXG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0eGF4aXM6IHtcblx0XHRcdGNhdGVnb3JpZXM6IFsnQ3plcndpZWMnLCAnTGlwaWVjJywgJ1NpZXJwaWXFhCcsICdXcnplc2llxYQnLCAnUGHFumR6aWVybmlrJywgJ0xpc3RvcGFkJ10sXG5cdFx0fSxcblx0XHR5YXhpczogW1xuXHRcdFx0e1xuXHRcdFx0XHRzZXJpZXNOYW1lOiAnWnlza2kgKHrFgiknLFxuXHRcdFx0XHRheGlzVGlja3M6IHtcblx0XHRcdFx0XHRzaG93OiB0cnVlLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRheGlzQm9yZGVyOiB7XG5cdFx0XHRcdFx0c2hvdzogdHJ1ZSxcblx0XHRcdFx0XHRjb2xvcjogJyMyNjI2MjYnLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRsYWJlbHM6IHtcblx0XHRcdFx0XHRzdHlsZToge1xuXHRcdFx0XHRcdFx0Y29sb3JzOiAnIzI2MjYyNicsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdFx0dGl0bGU6IHtcblx0XHRcdFx0XHR0ZXh0OiAnWnlza2kgKHrFgiknLFxuXHRcdFx0XHRcdHN0eWxlOiB7XG5cdFx0XHRcdFx0XHRjb2xvcjogJyMyNjI2MjYnLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRzZXJpZXNOYW1lOiAnWmJpb3J5IChrZyknLFxuXHRcdFx0XHRvcHBvc2l0ZTogdHJ1ZSxcblx0XHRcdFx0YXhpc1RpY2tzOiB7XG5cdFx0XHRcdFx0c2hvdzogdHJ1ZSxcblx0XHRcdFx0fSxcblx0XHRcdFx0YXhpc0JvcmRlcjoge1xuXHRcdFx0XHRcdHNob3c6IHRydWUsXG5cdFx0XHRcdFx0Y29sb3I6ICcjMjYyNjI2Jyxcblx0XHRcdFx0fSxcblx0XHRcdFx0bGFiZWxzOiB7XG5cdFx0XHRcdFx0c3R5bGU6IHtcblx0XHRcdFx0XHRcdGNvbG9yczogJyMyNjI2MjYnLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHRpdGxlOiB7XG5cdFx0XHRcdFx0dGV4dDogJ1piaW9yeSAoa2cpJyxcblx0XHRcdFx0XHRzdHlsZToge1xuXHRcdFx0XHRcdFx0Y29sb3I6ICcjMjYyNjI2Jyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRdLFxuXHRcdHRvb2x0aXA6IHtcblx0XHRcdHNoYXJlZDogZmFsc2UsXG5cdFx0XHRpbnRlcnNlY3Q6IHRydWUsXG5cdFx0XHR5OiB7XG5cdFx0XHRcdGZvcm1hdHRlcjogZnVuY3Rpb24gKHZhbDogbnVtYmVyLCB7IHNlcmllc05hbWUgfTogeyBzZXJpZXNOYW1lOiBzdHJpbmcgfSkge1xuXHRcdFx0XHRcdGlmIChzZXJpZXNOYW1lID09PSAnWmJpb3J5IChrZyknKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdmFsICsgJyBrZydcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHNlcmllc05hbWUgPT09ICdaeXNraSAoesWCKScpIHtcblx0XHRcdFx0XHRcdHJldHVybiB2YWwudG9Mb2NhbGVTdHJpbmcoJ3BsLVBMJykgKyAnIHrFgidcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIHZhbFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHR9LFxuXHRcdGNvbG9yczogWycjMDBiMDAwJywgJyMyNjI2MjYnXSxcblx0fSlcblxuXHRyZXR1cm4gKFxuXHRcdDxDaGFydEFyZWE+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gbXgtMTAnPlxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0nZm9udC1zZW1pYm9sZCc+Um9jem5lIHp5c2tpOjwvcD5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J3RleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LW1haW5Db2xvcic+e2Zvcm1hdHRlZEFubnVhbFByb2ZpdH0gesWCPC9wPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3RleHQtcmlnaHQnPlxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0nZm9udC1zZW1pYm9sZCc+Um9jem5lIHpiaW9yeTo8L3A+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSd0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgdGV4dC1tYWluQ29sb3InPntmb3JtYXR0ZWRBbm51YWxIYXJ2ZXN0fSBrZzwvcD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgaWQ9J2NoYXJ0JyBjbGFzc05hbWU9J2ZsZXggbWQ6anVzdGlmeS1jZW50ZXIgbWQ6aXRlbXMtY2VudGVyIG92ZXJmbG93LXgtYXV0byc+XG5cdFx0XHRcdDxSZWFjdEFwZXhDaGFydCBvcHRpb25zPXtvcHRpb25zfSBzZXJpZXM9e3Nlcmllc30gdHlwZT0nbGluZScgaGVpZ2h0PXszMDB9IHdpZHRoPXs3NTB9IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L0NoYXJ0QXJlYT5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmFkZXNPZlBlcHBlckJ5TW9udGhcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiUmVhY3RBcGV4Q2hhcnQiLCJDaGFydEFyZWEiLCJUcmFkZXNPZlBlcHBlckJ5TW9udGgiLCJtb250aGx5U3VtcyIsIm1vbnRobHlXZWlnaHRzIiwic2VyaWVzIiwibmFtZSIsInR5cGUiLCJkYXRhIiwib3B0aW9ucyIsImNoYXJ0Iiwic3RhY2tlZCIsInN0cm9rZSIsIndpZHRoIiwicGxvdE9wdGlvbnMiLCJiYXIiLCJjb2x1bW5XaWR0aCIsInhheGlzIiwiY2F0ZWdvcmllcyIsInlheGlzIiwic2VyaWVzTmFtZSIsImF4aXNUaWNrcyIsInNob3ciLCJheGlzQm9yZGVyIiwiY29sb3IiLCJsYWJlbHMiLCJzdHlsZSIsImNvbG9ycyIsInRpdGxlIiwidGV4dCIsIm9wcG9zaXRlIiwidG9vbHRpcCIsInNoYXJlZCIsImludGVyc2VjdCIsInkiLCJmb3JtYXR0ZXIiLCJ2YWwiLCJ0b0xvY2FsZVN0cmluZyIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJmb3JtYXR0ZWRBbm51YWxQcm9maXQiLCJmb3JtYXR0ZWRBbm51YWxIYXJ2ZXN0IiwiaWQiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./components/Charts/TradesOfPepperByMonth.tsx\n"));

/***/ })

});