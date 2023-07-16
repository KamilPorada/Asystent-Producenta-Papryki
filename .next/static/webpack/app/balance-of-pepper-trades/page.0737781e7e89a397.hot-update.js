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

/***/ "(app-client)/./components/Charts/AveragePepperPrices.tsx":
/*!***************************************************!*\
  !*** ./components/Charts/AveragePepperPrices.tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apexcharts */ \"(app-client)/./node_modules/react-apexcharts/dist/react-apexcharts.min.js\");\n/* harmony import */ var _components_UI_ChartArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/UI/ChartArea */ \"(app-client)/./components/UI/ChartArea.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst PepperPrices = (param)=>{\n    let { allTrades } = param;\n    _s();\n    const calculateAveragePrices = (trades)=>{\n        const monthlyPrices = [\n            0,\n            0,\n            0,\n            0,\n            0,\n            0\n        ];\n        const monthlyWeights = [\n            0,\n            0,\n            0,\n            0,\n            0,\n            0\n        ];\n        trades.forEach((trade)=>{\n            const month = new Date(trade.date).getMonth();\n            if (month >= 5 && month <= 10) {\n                monthlyPrices[month - 5] += (trade.price + trade.price * (trade.vatRate / 100)) * trade.weight;\n                monthlyWeights[month - 5] += trade.weight;\n            }\n        });\n        const averagePrices = monthlyPrices.map((price, index)=>{\n            const count = monthlyWeights[index];\n            return count > 0 ? price / count : 0;\n        });\n        return averagePrices;\n    };\n    const calculateAverageSeasonPrice = (trades)=>{\n        let totalPrice = 0;\n        let totalWeight = 0;\n        trades.forEach((trade)=>{\n            totalPrice += (trade.price + trade.price * (trade.vatRate / 100)) * trade.weight;\n            totalWeight += trade.weight;\n        });\n        return totalWeight > 0 ? totalPrice / totalWeight : 0;\n    };\n    const averagePrices = calculateAveragePrices(allTrades);\n    const averageSeasonPrice = calculateAverageSeasonPrice(allTrades);\n    const [chartData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>{\n        const options = {\n            chart: {\n                type: \"line\"\n            },\n            xaxis: {\n                categories: [\n                    \"Czerwiec\",\n                    \"Lipiec\",\n                    \"Sierpień\",\n                    \"Wrzesień\",\n                    \"Październik\",\n                    \"Listopad\"\n                ]\n            },\n            yaxis: {\n                title: {\n                    text: \"Średnia cena (zł)\"\n                },\n                labels: {\n                    formatter: (value)=>value.toFixed(2)\n                },\n                min: 2,\n                max: 6\n            },\n            stroke: {\n                width: [\n                    3,\n                    2\n                ],\n                curve: \"straight\",\n                dashArray: [\n                    0,\n                    5\n                ]\n            },\n            tooltip: {\n                y: {\n                    formatter: (value)=>value.toFixed(2) + \" zł\"\n                }\n            },\n            colors: [\n                \"#00b000\",\n                \"#0033ff\"\n            ]\n        };\n        const labels = \"Średnia cena papryki\";\n        const seriesData = [\n            {\n                data: averagePrices,\n                name: labels\n            },\n            {\n                data: [\n                    averageSeasonPrice,\n                    averageSeasonPrice,\n                    averageSeasonPrice,\n                    averageSeasonPrice,\n                    averageSeasonPrice,\n                    averageSeasonPrice\n                ],\n                name: \"Średnia cena papryki sezonu\",\n                type: \"line\",\n                stroke: {\n                    width: 2,\n                    curve: \"dot\",\n                    dashArray: [\n                        0,\n                        2\n                    ]\n                }\n            }\n        ];\n        return {\n            series: seriesData,\n            options: options\n        };\n    });\n    // Statystyki\n    const averagePricesByMonth = averagePrices.map((price, index)=>({\n            month: [\n                \"Czerwiec\",\n                \"Lipiec\",\n                \"Sierpień\",\n                \"Wrzesień\",\n                \"Październik\",\n                \"Listopad\"\n            ][index],\n            price: price.toFixed(2)\n        }));\n    const averageProfitPerTunnel = (averageSeasonPrice * 1000).toFixed(2);\n    const averageYieldPerTunnel = (averageSeasonPrice * 1000 / averagePrices.length).toFixed(2);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_ChartArea__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        className: \"w-full h-[420px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"font-semibold text-center\",\n                children: \"Kształtowanie się cen papryki na przestrzeni miesięcy sezonu\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                lineNumber: 138,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row justify-start items-center h-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-5\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_apexcharts__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            options: chartData.options,\n                            series: chartData.series,\n                            type: \"line\",\n                            width: 700,\n                            height: 350\n                        }, void 0, false, {\n                            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                            lineNumber: 141,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                        lineNumber: 140,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"divek\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: [\n                                averagePricesByMonth.map((month)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: [\n                                            \"Średnia cena papryki (\",\n                                            month.month,\n                                            \"): \",\n                                            month.price,\n                                            \" zł\"\n                                        ]\n                                    }, month.month, true, {\n                                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                                        lineNumber: 146,\n                                        columnNumber: 15\n                                    }, undefined)),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: [\n                                        \"Średnia cena papryki sezonu: \",\n                                        averageSeasonPrice.toFixed(2),\n                                        \" zł\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                                    lineNumber: 150,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: [\n                                        \"Średni zysk przypadający na 1 tunel: \",\n                                        averageProfitPerTunnel,\n                                        \" zł\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                                    lineNumber: 151,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: [\n                                        \"Średnia zbior\\xf3w przypadająca na 1 tunel: \",\n                                        averageYieldPerTunnel,\n                                        \" kg\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                                    lineNumber: 152,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                            lineNumber: 144,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                        lineNumber: 143,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                lineNumber: 139,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n        lineNumber: 137,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PepperPrices, \"+ch1kEXKcqyQ6Viy2sZcbIhyxcQ=\");\n_c = PepperPrices;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PepperPrices);\nvar _c;\n$RefreshReg$(_c, \"PepperPrices\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9DaGFydHMvQXZlcmFnZVBlcHBlclByaWNlcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBd0M7QUFDTTtBQUNHO0FBd0JqRCxNQUFNSSxlQUFnQztRQUFDLEVBQUVDLFNBQVMsRUFBRTs7SUFDbEQsTUFBTUMseUJBQXlCLENBQUNDO1FBQzlCLE1BQU1DLGdCQUEwQjtZQUFDO1lBQUc7WUFBRztZQUFHO1lBQUc7WUFBRztTQUFFO1FBQ2xELE1BQU1DLGlCQUEyQjtZQUFDO1lBQUc7WUFBRztZQUFHO1lBQUc7WUFBRztTQUFFO1FBRW5ERixPQUFPRyxRQUFRQyxDQUFBQTtZQUNiLE1BQU1DLFFBQVEsSUFBSUMsS0FBS0YsTUFBTUcsTUFBTUM7WUFFbkMsSUFBSUgsU0FBUyxLQUFLQSxTQUFTLElBQUk7Z0JBQzdCSixhQUFhLENBQUNJLFFBQVEsRUFBRSxJQUFJLENBQUNELE1BQU1LLFFBQVFMLE1BQU1LLFFBQVNMLENBQUFBLE1BQU1NLFVBQVUsR0FBRSxDQUFDLElBQUtOLE1BQU1PO2dCQUN4RlQsY0FBYyxDQUFDRyxRQUFRLEVBQUUsSUFBSUQsTUFBTU87WUFDckM7UUFDRjtRQUVBLE1BQU1DLGdCQUFnQlgsY0FBY1ksSUFBSSxDQUFDSixPQUFPSztZQUM5QyxNQUFNQyxRQUFRYixjQUFjLENBQUNZLE1BQU07WUFDbkMsT0FBT0MsUUFBUSxJQUFJTixRQUFRTSxRQUFRO1FBQ3JDO1FBRUEsT0FBT0g7SUFDVDtJQUVBLE1BQU1JLDhCQUE4QixDQUFDaEI7UUFDbkMsSUFBSWlCLGFBQWE7UUFDakIsSUFBSUMsY0FBYztRQUVsQmxCLE9BQU9HLFFBQVFDLENBQUFBO1lBQ2JhLGNBQWMsQ0FBQ2IsTUFBTUssUUFBUUwsTUFBTUssUUFBU0wsQ0FBQUEsTUFBTU0sVUFBVSxHQUFFLENBQUMsSUFBS04sTUFBTU87WUFDMUVPLGVBQWVkLE1BQU1PO1FBQ3ZCO1FBRUEsT0FBT08sY0FBYyxJQUFJRCxhQUFhQyxjQUFjO0lBQ3REO0lBRUEsTUFBTU4sZ0JBQWdCYix1QkFBdUJEO0lBQzdDLE1BQU1xQixxQkFBcUJILDRCQUE0QmxCO0lBRXZELE1BQU0sQ0FBQ3NCLFVBQVUsR0FBRzFCLCtDQUFRQSxDQUFrRjtRQUM1RyxNQUFNMkIsVUFBa0M7WUFDdENDLE9BQU87Z0JBQ0xDLE1BQU07WUFDUjtZQUNBQyxPQUFPO2dCQUNMQyxZQUFZO29CQUFDO29CQUFZO29CQUFVO29CQUFZO29CQUFZO29CQUFlO2lCQUFXO1lBQ3ZGO1lBQ0FDLE9BQU87Z0JBQ0xDLE9BQU87b0JBQ0xDLE1BQU07Z0JBQ1I7Z0JBQ0FDLFFBQVE7b0JBQ05DLFdBQVcsQ0FBQ0MsUUFBa0JBLE1BQU1DLFFBQVE7Z0JBQzlDO2dCQUNBQyxLQUFLO2dCQUNMQyxLQUFLO1lBQ1A7WUFDQUMsUUFBUTtnQkFDTkMsT0FBTztvQkFBQztvQkFBRztpQkFBRTtnQkFDYkMsT0FBTztnQkFDUEMsV0FBVztvQkFBQztvQkFBRztpQkFBRTtZQUNuQjtZQUNBQyxTQUFTO2dCQUNQQyxHQUFHO29CQUNEVixXQUFXLENBQUNDLFFBQWtCQSxNQUFNQyxRQUFRLEtBQUs7Z0JBQ25EO1lBQ0Y7WUFDQVMsUUFBUTtnQkFBQztnQkFBVzthQUFVO1FBQ2hDO1FBRUEsTUFBTVosU0FBUztRQUVmLE1BQU1hLGFBQWE7WUFDakI7Z0JBQ0VDLE1BQU0vQjtnQkFDTmdDLE1BQU1mO1lBQ1I7WUFDQTtnQkFDRWMsTUFBTTtvQkFDSnhCO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7aUJBQ0Q7Z0JBQ0R5QixNQUFNO2dCQUNOckIsTUFBTTtnQkFDTlksUUFBUTtvQkFDTkMsT0FBTztvQkFDUEMsT0FBTztvQkFDUEMsV0FBVzt3QkFBQzt3QkFBRztxQkFBRTtnQkFDbkI7WUFDRjtTQUNEO1FBRUQsT0FBTztZQUNMTyxRQUFRSDtZQUNSckIsU0FBU0E7UUFDWDtJQUNGO0lBRUEsYUFBYTtJQUNiLE1BQU15Qix1QkFBdUJsQyxjQUFjQyxJQUFJLENBQUNKLE9BQU9LLFFBQVc7WUFDaEVULE9BQU87Z0JBQUM7Z0JBQVk7Z0JBQVU7Z0JBQVk7Z0JBQVk7Z0JBQWU7YUFBVyxDQUFDUyxNQUFNO1lBQ3ZGTCxPQUFPQSxNQUFNdUIsUUFBUTtRQUN2QjtJQUVBLE1BQU1lLHlCQUF5QixDQUFDNUIscUJBQXFCLElBQUcsRUFBR2EsUUFBUTtJQUNuRSxNQUFNZ0Isd0JBQXdCLENBQUMscUJBQXNCLE9BQVFwQyxjQUFjcUMsTUFBSyxFQUFHakIsUUFBUTtJQUUzRixxQkFDRSw4REFBQ3BDLGdFQUFTQTtRQUFDc0QsV0FBVTs7MEJBQ25CLDhEQUFDQztnQkFBRUQsV0FBVTswQkFBNEI7Ozs7OzswQkFDekMsOERBQUNFO2dCQUFJRixXQUFVOztrQ0FDYiw4REFBQ0U7d0JBQUlGLFdBQVU7a0NBQ2IsNEVBQUN2RCx3REFBY0E7NEJBQUMwQixTQUFTRCxVQUFVQzs0QkFBU3dCLFFBQVF6QixVQUFVeUI7NEJBQVF0QixNQUFLOzRCQUFPYSxPQUFPOzRCQUFLaUIsUUFBUTs7Ozs7Ozs7Ozs7a0NBRXhHLDhEQUFDRDt3QkFBSUYsV0FBVTtrQ0FDYiw0RUFBQ0k7O2dDQUNFUixxQkFBcUJqQyxJQUFJUixDQUFBQSxzQkFDeEIsOERBQUNrRDs7NENBQXFCOzRDQUNHbEQsTUFBTUE7NENBQU07NENBQUlBLE1BQU1JOzRDQUFNOzt1Q0FENUNKLE1BQU1BOzs7Ozs4Q0FJakIsOERBQUNrRDs7d0NBQUc7d0NBQThCcEMsbUJBQW1CYSxRQUFRO3dDQUFHOzs7Ozs7OzhDQUNoRSw4REFBQ3VCOzt3Q0FBRzt3Q0FBc0NSO3dDQUF1Qjs7Ozs7Ozs4Q0FDakUsOERBQUNROzt3Q0FBRzt3Q0FBMENQO3dDQUFzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWhGO0dBbklNbkQ7S0FBQUE7QUFxSU4sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGFydHMvQXZlcmFnZVBlcHBlclByaWNlcy50c3g/NDU4OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RBcGV4Q2hhcnQgZnJvbSAncmVhY3QtYXBleGNoYXJ0cyc7XG5pbXBvcnQgQ2hhcnRBcmVhIGZyb20gJ0Bjb21wb25lbnRzL1VJL0NoYXJ0QXJlYSc7XG5cbmludGVyZmFjZSBUcmFkZU9mUGVwcGVyIHtcbiAgX2lkOiBzdHJpbmc7XG4gIGNyZWF0b3I6IHtcbiAgICBfaWQ6IHN0cmluZztcbiAgICBlbWFpbDogc3RyaW5nO1xuICAgIHVzZXJuYW1lOiBzdHJpbmc7XG4gICAgaW1hZ2U6IHN0cmluZztcbiAgfTtcbiAgcG9pbnRPZlNhbGVJZDogc3RyaW5nO1xuICBkYXRlOiBzdHJpbmc7XG4gIGNsYXM6IG51bWJlcjtcbiAgY29sb3I6IG51bWJlcjtcbiAgcHJpY2U6IG51bWJlcjtcbiAgd2VpZ2h0OiBudW1iZXI7XG4gIHZhdFJhdGU6IG51bWJlcjtcbiAgdG90YWxTdW06IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgYWxsVHJhZGVzOiBUcmFkZU9mUGVwcGVyW107XG59XG5cbmNvbnN0IFBlcHBlclByaWNlczogUmVhY3QuRkM8UHJvcHM+ID0gKHsgYWxsVHJhZGVzIH0pID0+IHtcbiAgY29uc3QgY2FsY3VsYXRlQXZlcmFnZVByaWNlcyA9ICh0cmFkZXM6IFRyYWRlT2ZQZXBwZXJbXSkgPT4ge1xuICAgIGNvbnN0IG1vbnRobHlQcmljZXM6IG51bWJlcltdID0gWzAsIDAsIDAsIDAsIDAsIDBdO1xuICAgIGNvbnN0IG1vbnRobHlXZWlnaHRzOiBudW1iZXJbXSA9IFswLCAwLCAwLCAwLCAwLCAwXTtcblxuICAgIHRyYWRlcy5mb3JFYWNoKHRyYWRlID0+IHtcbiAgICAgIGNvbnN0IG1vbnRoID0gbmV3IERhdGUodHJhZGUuZGF0ZSkuZ2V0TW9udGgoKTtcblxuICAgICAgaWYgKG1vbnRoID49IDUgJiYgbW9udGggPD0gMTApIHtcbiAgICAgICAgbW9udGhseVByaWNlc1ttb250aCAtIDVdICs9ICh0cmFkZS5wcmljZSArIHRyYWRlLnByaWNlICogKHRyYWRlLnZhdFJhdGUgLyAxMDApKSAqIHRyYWRlLndlaWdodDtcbiAgICAgICAgbW9udGhseVdlaWdodHNbbW9udGggLSA1XSArPSB0cmFkZS53ZWlnaHQ7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBhdmVyYWdlUHJpY2VzID0gbW9udGhseVByaWNlcy5tYXAoKHByaWNlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgY291bnQgPSBtb250aGx5V2VpZ2h0c1tpbmRleF07XG4gICAgICByZXR1cm4gY291bnQgPiAwID8gcHJpY2UgLyBjb3VudCA6IDA7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gYXZlcmFnZVByaWNlcztcbiAgfTtcblxuICBjb25zdCBjYWxjdWxhdGVBdmVyYWdlU2Vhc29uUHJpY2UgPSAodHJhZGVzOiBUcmFkZU9mUGVwcGVyW10pOiBudW1iZXIgPT4ge1xuICAgIGxldCB0b3RhbFByaWNlID0gMDtcbiAgICBsZXQgdG90YWxXZWlnaHQgPSAwO1xuXG4gICAgdHJhZGVzLmZvckVhY2godHJhZGUgPT4ge1xuICAgICAgdG90YWxQcmljZSArPSAodHJhZGUucHJpY2UgKyB0cmFkZS5wcmljZSAqICh0cmFkZS52YXRSYXRlIC8gMTAwKSkgKiB0cmFkZS53ZWlnaHQ7XG4gICAgICB0b3RhbFdlaWdodCArPSB0cmFkZS53ZWlnaHQ7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdG90YWxXZWlnaHQgPiAwID8gdG90YWxQcmljZSAvIHRvdGFsV2VpZ2h0IDogMDtcbiAgfTtcblxuICBjb25zdCBhdmVyYWdlUHJpY2VzID0gY2FsY3VsYXRlQXZlcmFnZVByaWNlcyhhbGxUcmFkZXMpO1xuICBjb25zdCBhdmVyYWdlU2Vhc29uUHJpY2UgPSBjYWxjdWxhdGVBdmVyYWdlU2Vhc29uUHJpY2UoYWxsVHJhZGVzKTtcblxuICBjb25zdCBbY2hhcnREYXRhXSA9IHVzZVN0YXRlPHsgc2VyaWVzOiB7IGRhdGE6IG51bWJlcltdOyBuYW1lOiBzdHJpbmcgfVtdOyBvcHRpb25zOiBBcGV4Q2hhcnRzLkFwZXhPcHRpb25zIH0+KCgpID0+IHtcbiAgICBjb25zdCBvcHRpb25zOiBBcGV4Q2hhcnRzLkFwZXhPcHRpb25zID0ge1xuICAgICAgY2hhcnQ6IHtcbiAgICAgICAgdHlwZTogJ2xpbmUnLFxuICAgICAgfSxcbiAgICAgIHhheGlzOiB7XG4gICAgICAgIGNhdGVnb3JpZXM6IFsnQ3plcndpZWMnLCAnTGlwaWVjJywgJ1NpZXJwaWXFhCcsICdXcnplc2llxYQnLCAnUGHFumR6aWVybmlrJywgJ0xpc3RvcGFkJ10sXG4gICAgICB9LFxuICAgICAgeWF4aXM6IHtcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICB0ZXh0OiAnxZpyZWRuaWEgY2VuYSAoesWCKScsXG4gICAgICAgIH0sXG4gICAgICAgIGxhYmVsczoge1xuICAgICAgICAgIGZvcm1hdHRlcjogKHZhbHVlOiBudW1iZXIpID0+IHZhbHVlLnRvRml4ZWQoMiksXG4gICAgICAgIH0sXG4gICAgICAgIG1pbjogMixcbiAgICAgICAgbWF4OiA2LFxuICAgICAgfSxcbiAgICAgIHN0cm9rZToge1xuICAgICAgICB3aWR0aDogWzMsIDJdLFxuICAgICAgICBjdXJ2ZTogJ3N0cmFpZ2h0JyxcbiAgICAgICAgZGFzaEFycmF5OiBbMCwgNV0sXG4gICAgICB9LFxuICAgICAgdG9vbHRpcDoge1xuICAgICAgICB5OiB7XG4gICAgICAgICAgZm9ybWF0dGVyOiAodmFsdWU6IG51bWJlcikgPT4gdmFsdWUudG9GaXhlZCgyKSArICcgesWCJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBjb2xvcnM6IFsnIzAwYjAwMCcsICcjMDAzM2ZmJ10sXG4gICAgfTtcblxuICAgIGNvbnN0IGxhYmVscyA9ICfFmnJlZG5pYSBjZW5hIHBhcHJ5a2knO1xuXG4gICAgY29uc3Qgc2VyaWVzRGF0YSA9IFtcbiAgICAgIHtcbiAgICAgICAgZGF0YTogYXZlcmFnZVByaWNlcyxcbiAgICAgICAgbmFtZTogbGFiZWxzLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZGF0YTogW1xuICAgICAgICAgIGF2ZXJhZ2VTZWFzb25QcmljZSxcbiAgICAgICAgICBhdmVyYWdlU2Vhc29uUHJpY2UsXG4gICAgICAgICAgYXZlcmFnZVNlYXNvblByaWNlLFxuICAgICAgICAgIGF2ZXJhZ2VTZWFzb25QcmljZSxcbiAgICAgICAgICBhdmVyYWdlU2Vhc29uUHJpY2UsXG4gICAgICAgICAgYXZlcmFnZVNlYXNvblByaWNlLFxuICAgICAgICBdLFxuICAgICAgICBuYW1lOiAnxZpyZWRuaWEgY2VuYSBwYXByeWtpIHNlem9udScsXG4gICAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgICAgc3Ryb2tlOiB7XG4gICAgICAgICAgd2lkdGg6IDIsXG4gICAgICAgICAgY3VydmU6ICdkb3QnLFxuICAgICAgICAgIGRhc2hBcnJheTogWzAsIDJdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHNlcmllczogc2VyaWVzRGF0YSxcbiAgICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgfTtcbiAgfSk7XG5cbiAgLy8gU3RhdHlzdHlraVxuICBjb25zdCBhdmVyYWdlUHJpY2VzQnlNb250aCA9IGF2ZXJhZ2VQcmljZXMubWFwKChwcmljZSwgaW5kZXgpID0+ICh7XG4gICAgbW9udGg6IFsnQ3plcndpZWMnLCAnTGlwaWVjJywgJ1NpZXJwaWXFhCcsICdXcnplc2llxYQnLCAnUGHFumR6aWVybmlrJywgJ0xpc3RvcGFkJ11baW5kZXhdLFxuICAgIHByaWNlOiBwcmljZS50b0ZpeGVkKDIpLFxuICB9KSk7XG5cbiAgY29uc3QgYXZlcmFnZVByb2ZpdFBlclR1bm5lbCA9IChhdmVyYWdlU2Vhc29uUHJpY2UgKiAxMDAwKS50b0ZpeGVkKDIpO1xuICBjb25zdCBhdmVyYWdlWWllbGRQZXJUdW5uZWwgPSAoKGF2ZXJhZ2VTZWFzb25QcmljZSAqIDEwMDApIC8gYXZlcmFnZVByaWNlcy5sZW5ndGgpLnRvRml4ZWQoMik7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2hhcnRBcmVhIGNsYXNzTmFtZT0ndy1mdWxsIGgtWzQyMHB4XSc+XG4gICAgICA8cCBjbGFzc05hbWU9J2ZvbnQtc2VtaWJvbGQgdGV4dC1jZW50ZXInPktzenRhxYJ0b3dhbmllIHNpxJkgY2VuIHBhcHJ5a2kgbmEgcHJ6ZXN0cnplbmkgbWllc2nEmWN5IHNlem9udTwvcD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIGgtZnVsbCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC01Jz5cbiAgICAgICAgICA8UmVhY3RBcGV4Q2hhcnQgb3B0aW9ucz17Y2hhcnREYXRhLm9wdGlvbnN9IHNlcmllcz17Y2hhcnREYXRhLnNlcmllc30gdHlwZT0nbGluZScgd2lkdGg9ezcwMH0gaGVpZ2h0PXszNTB9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2ZWsnPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIHthdmVyYWdlUHJpY2VzQnlNb250aC5tYXAobW9udGggPT4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXttb250aC5tb250aH0+XG4gICAgICAgICAgICAgICAgxZpyZWRuaWEgY2VuYSBwYXByeWtpICh7bW9udGgubW9udGh9KToge21vbnRoLnByaWNlfSB6xYJcbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPGxpPsWacmVkbmlhIGNlbmEgcGFwcnlraSBzZXpvbnU6IHthdmVyYWdlU2Vhc29uUHJpY2UudG9GaXhlZCgyKX0gesWCPC9saT5cbiAgICAgICAgICAgIDxsaT7FmnJlZG5pIHp5c2sgcHJ6eXBhZGFqxIVjeSBuYSAxIHR1bmVsOiB7YXZlcmFnZVByb2ZpdFBlclR1bm5lbH0gesWCPC9saT5cbiAgICAgICAgICAgIDxsaT7FmnJlZG5pYSB6YmlvcsOzdyBwcnp5cGFkYWrEhWNhIG5hIDEgdHVuZWw6IHthdmVyYWdlWWllbGRQZXJUdW5uZWx9IGtnPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvQ2hhcnRBcmVhPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGVwcGVyUHJpY2VzO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJSZWFjdEFwZXhDaGFydCIsIkNoYXJ0QXJlYSIsIlBlcHBlclByaWNlcyIsImFsbFRyYWRlcyIsImNhbGN1bGF0ZUF2ZXJhZ2VQcmljZXMiLCJ0cmFkZXMiLCJtb250aGx5UHJpY2VzIiwibW9udGhseVdlaWdodHMiLCJmb3JFYWNoIiwidHJhZGUiLCJtb250aCIsIkRhdGUiLCJkYXRlIiwiZ2V0TW9udGgiLCJwcmljZSIsInZhdFJhdGUiLCJ3ZWlnaHQiLCJhdmVyYWdlUHJpY2VzIiwibWFwIiwiaW5kZXgiLCJjb3VudCIsImNhbGN1bGF0ZUF2ZXJhZ2VTZWFzb25QcmljZSIsInRvdGFsUHJpY2UiLCJ0b3RhbFdlaWdodCIsImF2ZXJhZ2VTZWFzb25QcmljZSIsImNoYXJ0RGF0YSIsIm9wdGlvbnMiLCJjaGFydCIsInR5cGUiLCJ4YXhpcyIsImNhdGVnb3JpZXMiLCJ5YXhpcyIsInRpdGxlIiwidGV4dCIsImxhYmVscyIsImZvcm1hdHRlciIsInZhbHVlIiwidG9GaXhlZCIsIm1pbiIsIm1heCIsInN0cm9rZSIsIndpZHRoIiwiY3VydmUiLCJkYXNoQXJyYXkiLCJ0b29sdGlwIiwieSIsImNvbG9ycyIsInNlcmllc0RhdGEiLCJkYXRhIiwibmFtZSIsInNlcmllcyIsImF2ZXJhZ2VQcmljZXNCeU1vbnRoIiwiYXZlcmFnZVByb2ZpdFBlclR1bm5lbCIsImF2ZXJhZ2VZaWVsZFBlclR1bm5lbCIsImxlbmd0aCIsImNsYXNzTmFtZSIsInAiLCJkaXYiLCJoZWlnaHQiLCJ1bCIsImxpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/Charts/AveragePepperPrices.tsx\n"));

/***/ })

});