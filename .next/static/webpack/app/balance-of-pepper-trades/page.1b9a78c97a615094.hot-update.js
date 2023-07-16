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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apexcharts */ \"(app-client)/./node_modules/react-apexcharts/dist/react-apexcharts.min.js\");\n/* harmony import */ var _components_UI_ChartArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/UI/ChartArea */ \"(app-client)/./components/UI/ChartArea.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction TradesOfPepperByMonth(param) {\n    let { monthlySums } = param;\n    _s();\n    const [series] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            name: \"Zyski (zł)\",\n            type: \"bar\",\n            data: monthlySums\n        },\n        {\n            name: \"Zbiory (kg)\",\n            type: \"bar\",\n            data: monthlyWeights\n        }\n    ]);\n    const [options] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        chart: {\n            type: \"line\",\n            stacked: false\n        },\n        stroke: {\n            width: [\n                0,\n                1\n            ]\n        },\n        plotOptions: {\n            bar: {\n                columnWidth: \"50%\"\n            }\n        },\n        xaxis: {\n            categories: [\n                \"Czerwiec\",\n                \"Lipiec\",\n                \"Sierpień\",\n                \"Wrzesień\",\n                \"Październik\",\n                \"Listopad\"\n            ]\n        },\n        yaxis: [\n            {\n                seriesName: \"Zyski (zł)\",\n                axisTicks: {\n                    show: true\n                },\n                axisBorder: {\n                    show: true,\n                    color: \"#262626\"\n                },\n                labels: {\n                    style: {\n                        colors: \"#262626\"\n                    }\n                },\n                title: {\n                    text: \"Zyski (zł)\",\n                    style: {\n                        color: \"#262626\"\n                    }\n                }\n            },\n            {\n                seriesName: \"Zbiory (kg)\",\n                opposite: true,\n                axisTicks: {\n                    show: true\n                },\n                axisBorder: {\n                    show: true,\n                    color: \"#262626\"\n                },\n                labels: {\n                    style: {\n                        colors: \"#262626\"\n                    }\n                },\n                title: {\n                    text: \"Zbiory (kg)\",\n                    style: {\n                        color: \"#262626\"\n                    }\n                }\n            }\n        ],\n        tooltip: {\n            shared: false,\n            intersect: true,\n            y: {\n                formatter: function(val, param) {\n                    let { seriesName } = param;\n                    if (seriesName === \"Zbiory (kg)\") {\n                        return val + \" kg\";\n                    } else if (seriesName === \"Zyski (zł)\") {\n                        return val.toLocaleString(\"pl-PL\") + \" zł\";\n                    }\n                    return val;\n                }\n            }\n        },\n        colors: [\n            \"#00b000\",\n            \"#262626\"\n        ]\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_ChartArea__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row justify-between mx-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-semibold\",\n                                children: \"Roczne zyski:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/TradesOfPepperByMonth.tsx\",\n                                lineNumber: 129,\n                                columnNumber: 6\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-lg font-semibold text-mainColor\",\n                                children: [\n                                    formattedAnnualProfit,\n                                    \" zł\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/TradesOfPepperByMonth.tsx\",\n                                lineNumber: 130,\n                                columnNumber: 6\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/TradesOfPepperByMonth.tsx\",\n                        lineNumber: 128,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-right\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-semibold\",\n                                children: \"Roczne zbiory:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/TradesOfPepperByMonth.tsx\",\n                                lineNumber: 133,\n                                columnNumber: 6\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-lg font-semibold text-mainColor\",\n                                children: [\n                                    formattedAnnualHarvest,\n                                    \" kg\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/TradesOfPepperByMonth.tsx\",\n                                lineNumber: 134,\n                                columnNumber: 6\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/TradesOfPepperByMonth.tsx\",\n                        lineNumber: 132,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/TradesOfPepperByMonth.tsx\",\n                lineNumber: 127,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"chart\",\n                className: \"flex md:justify-center md:items-center overflow-x-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_apexcharts__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    options: options,\n                    series: series,\n                    type: \"line\",\n                    height: 300,\n                    width: 750\n                }, void 0, false, {\n                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/TradesOfPepperByMonth.tsx\",\n                    lineNumber: 138,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/TradesOfPepperByMonth.tsx\",\n                lineNumber: 137,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/TradesOfPepperByMonth.tsx\",\n        lineNumber: 126,\n        columnNumber: 3\n    }, this);\n}\n_s(TradesOfPepperByMonth, \"69L7Z/jr8cwENjwC3WMLceF1720=\");\n_c = TradesOfPepperByMonth;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TradesOfPepperByMonth);\nvar _c;\n$RefreshReg$(_c, \"TradesOfPepperByMonth\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9DaGFydHMvVHJhZGVzT2ZQZXBwZXJCeU1vbnRoLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF1QztBQUNNO0FBQ0c7QUE4QmhELFNBQVNJLHNCQUFzQixLQUFzQjtRQUF0QixFQUFFQyxXQUFXLEVBQVMsR0FBdEI7O0lBQzlCLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHTCwrQ0FBUUEsQ0FBYztRQUN0QztZQUNDTSxNQUFNO1lBQ05DLE1BQU07WUFDTkMsTUFBTUo7UUFDUDtRQUNBO1lBQ0NFLE1BQU07WUFDTkMsTUFBTTtZQUNOQyxNQUFNQztRQUNQO0tBQ0E7SUFFRCxNQUFNLENBQUNDLFFBQVEsR0FBR1YsK0NBQVFBLENBQU07UUFDL0JXLE9BQU87WUFDTkosTUFBTTtZQUNOSyxTQUFTO1FBQ1Y7UUFDQUMsUUFBUTtZQUNQQyxPQUFPO2dCQUFDO2dCQUFHO2FBQUU7UUFDZDtRQUNBQyxhQUFhO1lBQ1pDLEtBQUs7Z0JBQ0pDLGFBQWE7WUFDZDtRQUNEO1FBQ0FDLE9BQU87WUFDTkMsWUFBWTtnQkFBQztnQkFBWTtnQkFBVTtnQkFBWTtnQkFBWTtnQkFBZTthQUFXO1FBQ3RGO1FBQ0FDLE9BQU87WUFDTjtnQkFDQ0MsWUFBWTtnQkFDWkMsV0FBVztvQkFDVkMsTUFBTTtnQkFDUDtnQkFDQUMsWUFBWTtvQkFDWEQsTUFBTTtvQkFDTkUsT0FBTztnQkFDUjtnQkFDQUMsUUFBUTtvQkFDUEMsT0FBTzt3QkFDTkMsUUFBUTtvQkFDVDtnQkFDRDtnQkFDQUMsT0FBTztvQkFDTkMsTUFBTTtvQkFDTkgsT0FBTzt3QkFDTkYsT0FBTztvQkFDUjtnQkFDRDtZQUNEO1lBQ0E7Z0JBQ0NKLFlBQVk7Z0JBQ1pVLFVBQVU7Z0JBQ1ZULFdBQVc7b0JBQ1ZDLE1BQU07Z0JBQ1A7Z0JBQ0FDLFlBQVk7b0JBQ1hELE1BQU07b0JBQ05FLE9BQU87Z0JBQ1I7Z0JBQ0FDLFFBQVE7b0JBQ1BDLE9BQU87d0JBQ05DLFFBQVE7b0JBQ1Q7Z0JBQ0Q7Z0JBQ0FDLE9BQU87b0JBQ05DLE1BQU07b0JBQ05ILE9BQU87d0JBQ05GLE9BQU87b0JBQ1I7Z0JBQ0Q7WUFDRDtTQUNBO1FBQ0RPLFNBQVM7WUFDUkMsUUFBUTtZQUNSQyxXQUFXO1lBQ1hDLEdBQUc7Z0JBQ0ZDLFdBQVcsU0FBVUMsR0FBVyxFQUFFLEtBQXNDO3dCQUF0QyxFQUFFaEIsVUFBVSxFQUEwQixHQUF0QztvQkFDakMsSUFBSUEsZUFBZSxlQUFlO3dCQUNqQyxPQUFPZ0IsTUFBTTtvQkFDZCxPQUFPLElBQUloQixlQUFlLGNBQWM7d0JBQ3ZDLE9BQU9nQixJQUFJQyxlQUFlLFdBQVc7b0JBQ3RDO29CQUNBLE9BQU9EO2dCQUNSO1lBQ0Q7UUFDRDtRQUNBVCxRQUFRO1lBQUM7WUFBVztTQUFVO0lBQy9CO0lBRUEscUJBQ0MsOERBQUMxQixnRUFBU0E7OzBCQUNULDhEQUFDcUM7Z0JBQUlDLFdBQVU7O2tDQUNkLDhEQUFDRDs7MENBQ0EsOERBQUNFO2dDQUFFRCxXQUFVOzBDQUFnQjs7Ozs7OzBDQUM3Qiw4REFBQ0M7Z0NBQUVELFdBQVU7O29DQUF3Q0U7b0NBQXNCOzs7Ozs7Ozs7Ozs7O2tDQUU1RSw4REFBQ0g7d0JBQUlDLFdBQVU7OzBDQUNkLDhEQUFDQztnQ0FBRUQsV0FBVTswQ0FBZ0I7Ozs7OzswQ0FDN0IsOERBQUNDO2dDQUFFRCxXQUFVOztvQ0FBd0NHO29DQUF1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFHOUUsOERBQUNKO2dCQUFJSyxJQUFHO2dCQUFRSixXQUFVOzBCQUN6Qiw0RUFBQ3ZDLHdEQUFjQTtvQkFBQ1MsU0FBU0E7b0JBQVNMLFFBQVFBO29CQUFRRSxNQUFLO29CQUFPc0MsUUFBUTtvQkFBSy9CLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXRGO0dBN0dTWDtLQUFBQTtBQStHVCwrREFBZUEscUJBQXFCQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2hhcnRzL1RyYWRlc09mUGVwcGVyQnlNb250aC50c3g/YmUzMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdEFwZXhDaGFydCBmcm9tICdyZWFjdC1hcGV4Y2hhcnRzJ1xuaW1wb3J0IENoYXJ0QXJlYSBmcm9tICdAY29tcG9uZW50cy9VSS9DaGFydEFyZWEnXG5cbnR5cGUgQ2hhcnREYXRhID0ge1xuXHRuYW1lOiBzdHJpbmdcblx0dHlwZTogc3RyaW5nXG5cdGRhdGE6IG51bWJlcltdXG59XG5cbmludGVyZmFjZSBUcmFkZU9mUGVwcGVyIHtcblx0X2lkOiBzdHJpbmdcblx0Y3JlYXRvcjoge1xuXHRcdF9pZDogc3RyaW5nXG5cdFx0ZW1haWw6IHN0cmluZ1xuXHRcdHVzZXJuYW1lOiBzdHJpbmdcblx0XHRpbWFnZTogc3RyaW5nXG5cdH1cblx0cG9pbnRPZlNhbGVJZDogc3RyaW5nXG5cdGRhdGU6IHN0cmluZ1xuXHRjbGFzOiBudW1iZXJcblx0Y29sb3I6IG51bWJlclxuXHRwcmljZTogbnVtYmVyXG5cdHdlaWdodDogbnVtYmVyXG5cdHZhdFJhdGU6IG51bWJlclxuXHR0b3RhbFN1bTogbnVtYmVyXG59XG5cbmludGVyZmFjZSBQcm9wcyB7XG5cdGFsbFRyYWRlczogVHJhZGVPZlBlcHBlcltdXG59XG5cbmZ1bmN0aW9uIFRyYWRlc09mUGVwcGVyQnlNb250aCh7IG1vbnRobHlTdW1zIH06IFByb3BzKSB7XG5cdGNvbnN0IFtzZXJpZXNdID0gdXNlU3RhdGU8Q2hhcnREYXRhW10+KFtcblx0XHR7XG5cdFx0XHRuYW1lOiAnWnlza2kgKHrFgiknLFxuXHRcdFx0dHlwZTogJ2JhcicsXG5cdFx0XHRkYXRhOiBtb250aGx5U3Vtcyxcblx0XHR9LFxuXHRcdHtcblx0XHRcdG5hbWU6ICdaYmlvcnkgKGtnKScsXG5cdFx0XHR0eXBlOiAnYmFyJyxcblx0XHRcdGRhdGE6IG1vbnRobHlXZWlnaHRzLFxuXHRcdH0sXG5cdF0pXG5cblx0Y29uc3QgW29wdGlvbnNdID0gdXNlU3RhdGU8YW55Pih7XG5cdFx0Y2hhcnQ6IHtcblx0XHRcdHR5cGU6ICdsaW5lJyxcblx0XHRcdHN0YWNrZWQ6IGZhbHNlLFxuXHRcdH0sXG5cdFx0c3Ryb2tlOiB7XG5cdFx0XHR3aWR0aDogWzAsIDFdLFxuXHRcdH0sXG5cdFx0cGxvdE9wdGlvbnM6IHtcblx0XHRcdGJhcjoge1xuXHRcdFx0XHRjb2x1bW5XaWR0aDogJzUwJScsXG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0eGF4aXM6IHtcblx0XHRcdGNhdGVnb3JpZXM6IFsnQ3plcndpZWMnLCAnTGlwaWVjJywgJ1NpZXJwaWXFhCcsICdXcnplc2llxYQnLCAnUGHFumR6aWVybmlrJywgJ0xpc3RvcGFkJ10sXG5cdFx0fSxcblx0XHR5YXhpczogW1xuXHRcdFx0e1xuXHRcdFx0XHRzZXJpZXNOYW1lOiAnWnlza2kgKHrFgiknLFxuXHRcdFx0XHRheGlzVGlja3M6IHtcblx0XHRcdFx0XHRzaG93OiB0cnVlLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRheGlzQm9yZGVyOiB7XG5cdFx0XHRcdFx0c2hvdzogdHJ1ZSxcblx0XHRcdFx0XHRjb2xvcjogJyMyNjI2MjYnLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRsYWJlbHM6IHtcblx0XHRcdFx0XHRzdHlsZToge1xuXHRcdFx0XHRcdFx0Y29sb3JzOiAnIzI2MjYyNicsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdFx0dGl0bGU6IHtcblx0XHRcdFx0XHR0ZXh0OiAnWnlza2kgKHrFgiknLFxuXHRcdFx0XHRcdHN0eWxlOiB7XG5cdFx0XHRcdFx0XHRjb2xvcjogJyMyNjI2MjYnLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRzZXJpZXNOYW1lOiAnWmJpb3J5IChrZyknLFxuXHRcdFx0XHRvcHBvc2l0ZTogdHJ1ZSxcblx0XHRcdFx0YXhpc1RpY2tzOiB7XG5cdFx0XHRcdFx0c2hvdzogdHJ1ZSxcblx0XHRcdFx0fSxcblx0XHRcdFx0YXhpc0JvcmRlcjoge1xuXHRcdFx0XHRcdHNob3c6IHRydWUsXG5cdFx0XHRcdFx0Y29sb3I6ICcjMjYyNjI2Jyxcblx0XHRcdFx0fSxcblx0XHRcdFx0bGFiZWxzOiB7XG5cdFx0XHRcdFx0c3R5bGU6IHtcblx0XHRcdFx0XHRcdGNvbG9yczogJyMyNjI2MjYnLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHRpdGxlOiB7XG5cdFx0XHRcdFx0dGV4dDogJ1piaW9yeSAoa2cpJyxcblx0XHRcdFx0XHRzdHlsZToge1xuXHRcdFx0XHRcdFx0Y29sb3I6ICcjMjYyNjI2Jyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRdLFxuXHRcdHRvb2x0aXA6IHtcblx0XHRcdHNoYXJlZDogZmFsc2UsXG5cdFx0XHRpbnRlcnNlY3Q6IHRydWUsXG5cdFx0XHR5OiB7XG5cdFx0XHRcdGZvcm1hdHRlcjogZnVuY3Rpb24gKHZhbDogbnVtYmVyLCB7IHNlcmllc05hbWUgfTogeyBzZXJpZXNOYW1lOiBzdHJpbmcgfSkge1xuXHRcdFx0XHRcdGlmIChzZXJpZXNOYW1lID09PSAnWmJpb3J5IChrZyknKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdmFsICsgJyBrZydcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHNlcmllc05hbWUgPT09ICdaeXNraSAoesWCKScpIHtcblx0XHRcdFx0XHRcdHJldHVybiB2YWwudG9Mb2NhbGVTdHJpbmcoJ3BsLVBMJykgKyAnIHrFgidcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIHZhbFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHR9LFxuXHRcdGNvbG9yczogWycjMDBiMDAwJywgJyMyNjI2MjYnXSxcblx0fSlcblxuXHRyZXR1cm4gKFxuXHRcdDxDaGFydEFyZWE+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gbXgtMTAnPlxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0nZm9udC1zZW1pYm9sZCc+Um9jem5lIHp5c2tpOjwvcD5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J3RleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LW1haW5Db2xvcic+e2Zvcm1hdHRlZEFubnVhbFByb2ZpdH0gesWCPC9wPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3RleHQtcmlnaHQnPlxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0nZm9udC1zZW1pYm9sZCc+Um9jem5lIHpiaW9yeTo8L3A+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSd0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgdGV4dC1tYWluQ29sb3InPntmb3JtYXR0ZWRBbm51YWxIYXJ2ZXN0fSBrZzwvcD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgaWQ9J2NoYXJ0JyBjbGFzc05hbWU9J2ZsZXggbWQ6anVzdGlmeS1jZW50ZXIgbWQ6aXRlbXMtY2VudGVyIG92ZXJmbG93LXgtYXV0byc+XG5cdFx0XHRcdDxSZWFjdEFwZXhDaGFydCBvcHRpb25zPXtvcHRpb25zfSBzZXJpZXM9e3Nlcmllc30gdHlwZT0nbGluZScgaGVpZ2h0PXszMDB9IHdpZHRoPXs3NTB9IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L0NoYXJ0QXJlYT5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmFkZXNPZlBlcHBlckJ5TW9udGhcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiUmVhY3RBcGV4Q2hhcnQiLCJDaGFydEFyZWEiLCJUcmFkZXNPZlBlcHBlckJ5TW9udGgiLCJtb250aGx5U3VtcyIsInNlcmllcyIsIm5hbWUiLCJ0eXBlIiwiZGF0YSIsIm1vbnRobHlXZWlnaHRzIiwib3B0aW9ucyIsImNoYXJ0Iiwic3RhY2tlZCIsInN0cm9rZSIsIndpZHRoIiwicGxvdE9wdGlvbnMiLCJiYXIiLCJjb2x1bW5XaWR0aCIsInhheGlzIiwiY2F0ZWdvcmllcyIsInlheGlzIiwic2VyaWVzTmFtZSIsImF4aXNUaWNrcyIsInNob3ciLCJheGlzQm9yZGVyIiwiY29sb3IiLCJsYWJlbHMiLCJzdHlsZSIsImNvbG9ycyIsInRpdGxlIiwidGV4dCIsIm9wcG9zaXRlIiwidG9vbHRpcCIsInNoYXJlZCIsImludGVyc2VjdCIsInkiLCJmb3JtYXR0ZXIiLCJ2YWwiLCJ0b0xvY2FsZVN0cmluZyIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJmb3JtYXR0ZWRBbm51YWxQcm9maXQiLCJmb3JtYXR0ZWRBbm51YWxIYXJ2ZXN0IiwiaWQiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./components/Charts/TradesOfPepperByMonth.tsx\n"));

/***/ })

});