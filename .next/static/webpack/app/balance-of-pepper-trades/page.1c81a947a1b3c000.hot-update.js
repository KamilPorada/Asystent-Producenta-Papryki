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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apexcharts */ \"(app-client)/./node_modules/react-apexcharts/dist/react-apexcharts.min.js\");\n/* harmony import */ var _components_UI_ChartArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/UI/ChartArea */ \"(app-client)/./components/UI/ChartArea.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst PepperPrices = (param)=>{\n    let { allTrades } = param;\n    _s();\n    const calculateAveragePrices = (trades)=>{\n        const monthlyPrices = [\n            0,\n            0,\n            0,\n            0,\n            0,\n            0\n        ];\n        const monthlyWeights = [\n            0,\n            0,\n            0,\n            0,\n            0,\n            0\n        ];\n        trades.forEach((trade)=>{\n            const month = new Date(trade.date).getMonth();\n            if (month >= 5 && month <= 10) {\n                monthlyPrices[month - 5] += (trade.price + trade.price * (trade.vatRate / 100)) * trade.weight;\n                monthlyWeights[month - 5] += trade.weight;\n            }\n        });\n        const averagePrices = monthlyPrices.map((price, index)=>{\n            const count = monthlyWeights[index];\n            return count > 0 ? price / count : 0;\n        });\n        return averagePrices;\n    };\n    const calculateAverageSeasonPrice = (trades)=>{\n        let totalPrice = 0;\n        let totalWeight = 0;\n        trades.forEach((trade)=>{\n            totalPrice += (trade.price + trade.price * (trade.vatRate / 100)) * trade.weight;\n            totalWeight += trade.weight;\n        });\n        return totalWeight > 0 ? totalPrice / totalWeight : 0;\n    };\n    const averagePrices = calculateAveragePrices(allTrades);\n    const averageSeasonPrice = calculateAverageSeasonPrice(allTrades);\n    const [chartData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>{\n        const options = {\n            chart: {\n                type: \"line\"\n            },\n            xaxis: {\n                categories: [\n                    \"Czerwiec\",\n                    \"Lipiec\",\n                    \"Sierpień\",\n                    \"Wrzesień\",\n                    \"Październik\",\n                    \"Listopad\"\n                ]\n            },\n            yaxis: {\n                title: {\n                    text: \"Średnia cena (zł)\"\n                },\n                labels: {\n                    formatter: (value)=>value.toFixed(2)\n                },\n                min: 2,\n                max: 6\n            },\n            stroke: {\n                width: [\n                    3,\n                    2\n                ],\n                curve: \"straight\",\n                dashArray: [\n                    0,\n                    5\n                ]\n            },\n            tooltip: {\n                y: {\n                    formatter: (value)=>value.toFixed(2) + \" zł\"\n                }\n            },\n            colors: [\n                \"#00b000\",\n                \"#0033ff\"\n            ]\n        };\n        const labels = \"Średnia cena papryki\";\n        const seriesData = [\n            {\n                data: averagePrices,\n                name: labels\n            },\n            {\n                data: [\n                    averageSeasonPrice,\n                    averageSeasonPrice,\n                    averageSeasonPrice,\n                    averageSeasonPrice,\n                    averageSeasonPrice,\n                    averageSeasonPrice\n                ],\n                name: \"Średnia cena papryki sezonu\",\n                type: \"line\",\n                stroke: {\n                    width: 2,\n                    curve: \"dot\",\n                    dashArray: [\n                        0,\n                        2\n                    ]\n                }\n            }\n        ];\n        return {\n            series: seriesData,\n            options: options\n        };\n    });\n    // Statystyki\n    const averagePricesByMonth = averagePrices.map((price, index)=>({\n            month: [\n                \"Czerwiec\",\n                \"Lipiec\",\n                \"Sierpień\",\n                \"Wrzesień\",\n                \"Październik\",\n                \"Listopad\"\n            ][index],\n            price: price.toFixed(2)\n        }));\n    const averageProfitPerTunnel = (averageSeasonPrice * 1000).toFixed(2);\n    const averageYieldPerTunnel = (averageSeasonPrice * 1000 / averagePrices.length).toFixed(2);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_ChartArea__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        className: \"w-full h-[420px] overflow-x-auto\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-[1100px] xl:w-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"font-semibold text-center\",\n                    children: \"Kształtowanie się cen papryki na przestrzeni miesięcy sezonu\"\n                }, void 0, false, {\n                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                    lineNumber: 139,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row justify-between items-center h-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-5 xl:w-2/3\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_apexcharts__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                options: chartData.options,\n                                series: chartData.series,\n                                type: \"line\",\n                                width: 700,\n                                height: 350\n                            }, void 0, false, {\n                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                                lineNumber: 142,\n                                columnNumber: 7\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                            lineNumber: 141,\n                            columnNumber: 6\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"xl:w-1/3 self-start mt-5\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                children: [\n                                    averagePricesByMonth.map((month)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            className: \"flex flex-row justify-between border-b border-gray-400\",\n                                            children: [\n                                                \"Średnia cena papryki (\",\n                                                month.month,\n                                                \"): \",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"font-semibold\",\n                                                    children: [\n                                                        month.price,\n                                                        \" zł\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                                                    lineNumber: 154,\n                                                    columnNumber: 48\n                                                }, undefined)\n                                            ]\n                                        }, month.month, true, {\n                                            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                                            lineNumber: 153,\n                                            columnNumber: 9\n                                        }, undefined)),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"flex flex-row justify-between border-b border-gray-400\",\n                                        children: [\n                                            \"Średnia cena papryki sezonu: \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"font-semibold\",\n                                                children: [\n                                                    averageSeasonPrice.toFixed(2),\n                                                    \" zł\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                                                lineNumber: 158,\n                                                columnNumber: 38\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                                        lineNumber: 157,\n                                        columnNumber: 8\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"flex flex-row justify-between border-b border-gray-400\",\n                                        children: [\n                                            \"Średni zysk przypadający na 1 tunel: \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"font-semibold\",\n                                                children: [\n                                                    averageProfitPerTunnel,\n                                                    \" zł\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                                                lineNumber: 161,\n                                                columnNumber: 46\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                                        lineNumber: 160,\n                                        columnNumber: 8\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"flex flex-row justify-between border-b border-gray-400\",\n                                        children: [\n                                            \"Średnia zbior\\xf3w przypadająca na 1 tunel:\",\n                                            \" \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"font-semibold\",\n                                                children: [\n                                                    averageYieldPerTunnel,\n                                                    \" kg\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                                                lineNumber: 165,\n                                                columnNumber: 9\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                                        lineNumber: 163,\n                                        columnNumber: 8\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                                lineNumber: 151,\n                                columnNumber: 7\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                            lineNumber: 150,\n                            columnNumber: 6\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                    lineNumber: 140,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n            lineNumber: 138,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n        lineNumber: 137,\n        columnNumber: 3\n    }, undefined);\n};\n_s(PepperPrices, \"xzfiwxcfNl3eYk9T7/kjRq/svT4=\");\n_c = PepperPrices;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PepperPrices);\nvar _c;\n$RefreshReg$(_c, \"PepperPrices\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9DaGFydHMvQXZlcmFnZVBlcHBlclByaWNlcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBdUM7QUFDTTtBQUNHO0FBd0JoRCxNQUFNSSxlQUFnQztRQUFDLEVBQUVDLFNBQVMsRUFBRTs7SUFDbkQsTUFBTUMseUJBQXlCLENBQUNDO1FBQy9CLE1BQU1DLGdCQUEwQjtZQUFDO1lBQUc7WUFBRztZQUFHO1lBQUc7WUFBRztTQUFFO1FBQ2xELE1BQU1DLGlCQUEyQjtZQUFDO1lBQUc7WUFBRztZQUFHO1lBQUc7WUFBRztTQUFFO1FBRW5ERixPQUFPRyxRQUFRQyxDQUFBQTtZQUNkLE1BQU1DLFFBQVEsSUFBSUMsS0FBS0YsTUFBTUcsTUFBTUM7WUFFbkMsSUFBSUgsU0FBUyxLQUFLQSxTQUFTLElBQUk7Z0JBQzlCSixhQUFhLENBQUNJLFFBQVEsRUFBRSxJQUFJLENBQUNELE1BQU1LLFFBQVFMLE1BQU1LLFFBQVNMLENBQUFBLE1BQU1NLFVBQVUsR0FBRSxDQUFDLElBQUtOLE1BQU1PO2dCQUN4RlQsY0FBYyxDQUFDRyxRQUFRLEVBQUUsSUFBSUQsTUFBTU87WUFDcEM7UUFDRDtRQUVBLE1BQU1DLGdCQUFnQlgsY0FBY1ksSUFBSSxDQUFDSixPQUFPSztZQUMvQyxNQUFNQyxRQUFRYixjQUFjLENBQUNZLE1BQU07WUFDbkMsT0FBT0MsUUFBUSxJQUFJTixRQUFRTSxRQUFRO1FBQ3BDO1FBRUEsT0FBT0g7SUFDUjtJQUVBLE1BQU1JLDhCQUE4QixDQUFDaEI7UUFDcEMsSUFBSWlCLGFBQWE7UUFDakIsSUFBSUMsY0FBYztRQUVsQmxCLE9BQU9HLFFBQVFDLENBQUFBO1lBQ2RhLGNBQWMsQ0FBQ2IsTUFBTUssUUFBUUwsTUFBTUssUUFBU0wsQ0FBQUEsTUFBTU0sVUFBVSxHQUFFLENBQUMsSUFBS04sTUFBTU87WUFDMUVPLGVBQWVkLE1BQU1PO1FBQ3RCO1FBRUEsT0FBT08sY0FBYyxJQUFJRCxhQUFhQyxjQUFjO0lB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REFDekMsOERBQUNNO2dEQUFLTixXQUFVOztvREFBaUJGO29EQUFzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRL0Q7R0FsSk1uRDtLQUFBQTtBQW9KTiwrREFBZUEsWUFBWUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NoYXJ0cy9BdmVyYWdlUGVwcGVyUHJpY2VzLnRzeD80NTg4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0QXBleENoYXJ0IGZyb20gJ3JlYWN0LWFwZXhjaGFydHMnXG5pbXBvcnQgQ2hhcnRBcmVhIGZyb20gJ0Bjb21wb25lbnRzL1VJL0NoYXJ0QXJlYSdcblxuaW50ZXJmYWNlIFRyYWRlT2ZQZXBwZXIge1xuXHRfaWQ6IHN0cmluZ1xuXHRjcmVhdG9yOiB7XG5cdFx0X2lkOiBzdHJpbmdcblx0XHRlbWFpbDogc3RyaW5nXG5cdFx0dXNlcm5hbWU6IHN0cmluZ1xuXHRcdGltYWdlOiBzdHJpbmdcblx0fVxuXHRwb2ludE9mU2FsZUlkOiBzdHJpbmdcblx0ZGF0ZTogc3RyaW5nXG5cdGNsYXM6IG51bWJlclxuXHRjb2xvcjogbnVtYmVyXG5cdHByaWNlOiBudW1iZXJcblx0d2VpZ2h0OiBudW1iZXJcblx0dmF0UmF0ZTogbnVtYmVyXG5cdHRvdGFsU3VtOiBudW1iZXJcbn1cblxuaW50ZXJmYWNlIFByb3BzIHtcblx0YWxsVHJhZGVzOiBUcmFkZU9mUGVwcGVyW11cbn1cblxuY29uc3QgUGVwcGVyUHJpY2VzOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBhbGxUcmFkZXMgfSkgPT4ge1xuXHRjb25zdCBjYWxjdWxhdGVBdmVyYWdlUHJpY2VzID0gKHRyYWRlczogVHJhZGVPZlBlcHBlcltdKSA9PiB7XG5cdFx0Y29uc3QgbW9udGhseVByaWNlczogbnVtYmVyW10gPSBbMCwgMCwgMCwgMCwgMCwgMF1cblx0XHRjb25zdCBtb250aGx5V2VpZ2h0czogbnVtYmVyW10gPSBbMCwgMCwgMCwgMCwgMCwgMF1cblxuXHRcdHRyYWRlcy5mb3JFYWNoKHRyYWRlID0+IHtcblx0XHRcdGNvbnN0IG1vbnRoID0gbmV3IERhdGUodHJhZGUuZGF0ZSkuZ2V0TW9udGgoKVxuXG5cdFx0XHRpZiAobW9udGggPj0gNSAmJiBtb250aCA8PSAxMCkge1xuXHRcdFx0XHRtb250aGx5UHJpY2VzW21vbnRoIC0gNV0gKz0gKHRyYWRlLnByaWNlICsgdHJhZGUucHJpY2UgKiAodHJhZGUudmF0UmF0ZSAvIDEwMCkpICogdHJhZGUud2VpZ2h0XG5cdFx0XHRcdG1vbnRobHlXZWlnaHRzW21vbnRoIC0gNV0gKz0gdHJhZGUud2VpZ2h0XG5cdFx0XHR9XG5cdFx0fSlcblxuXHRcdGNvbnN0IGF2ZXJhZ2VQcmljZXMgPSBtb250aGx5UHJpY2VzLm1hcCgocHJpY2UsIGluZGV4KSA9PiB7XG5cdFx0XHRjb25zdCBjb3VudCA9IG1vbnRobHlXZWlnaHRzW2luZGV4XVxuXHRcdFx0cmV0dXJuIGNvdW50ID4gMCA/IHByaWNlIC8gY291bnQgOiAwXG5cdFx0fSlcblxuXHRcdHJldHVybiBhdmVyYWdlUHJpY2VzXG5cdH1cblxuXHRjb25zdCBjYWxjdWxhdGVBdmVyYWdlU2Vhc29uUHJpY2UgPSAodHJhZGVzOiBUcmFkZU9mUGVwcGVyW10pOiBudW1iZXIgPT4ge1xuXHRcdGxldCB0b3RhbFByaWNlID0gMFxuXHRcdGxldCB0b3RhbFdlaWdodCA9IDBcblxuXHRcdHRyYWRlcy5mb3JFYWNoKHRyYWRlID0+IHtcblx0XHRcdHRvdGFsUHJpY2UgKz0gKHRyYWRlLnByaWNlICsgdHJhZGUucHJpY2UgKiAodHJhZGUudmF0UmF0ZSAvIDEwMCkpICogdHJhZGUud2VpZ2h0XG5cdFx0XHR0b3RhbFdlaWdodCArPSB0cmFkZS53ZWlnaHRcblx0XHR9KVxuXG5cdFx0cmV0dXJuIHRvdGFsV2VpZ2h0ID4gMCA/IHRvdGFsUHJpY2UgLyB0b3RhbFdlaWdodCA6IDBcblx0fVxuXG5cdGNvbnN0IGF2ZXJhZ2VQcmljZXMgPSBjYWxjdWxhdGVBdmVyYWdlUHJpY2VzKGFsbFRyYWRlcylcblx0Y29uc3QgYXZlcmFnZVNlYXNvblByaWNlID0gY2FsY3VsYXRlQXZlcmFnZVNlYXNvblByaWNlKGFsbFRyYWRlcylcblxuXHRjb25zdCBbY2hhcnREYXRhXSA9IHVzZVN0YXRlPHsgc2VyaWVzOiB7IGRhdGE6IG51bWJlcltdOyBuYW1lOiBzdHJpbmcgfVtdOyBvcHRpb25zOiBBcGV4Q2hhcnRzLkFwZXhPcHRpb25zIH0+KCgpID0+IHtcblx0XHRjb25zdCBvcHRpb25zOiBBcGV4Q2hhcnRzLkFwZXhPcHRpb25zID0ge1xuXHRcdFx0Y2hhcnQ6IHtcblx0XHRcdFx0dHlwZTogJ2xpbmUnLFxuXHRcdFx0fSxcblx0XHRcdHhheGlzOiB7XG5cdFx0XHRcdGNhdGVnb3JpZXM6IFsnQ3plcndpZWMnLCAnTGlwaWVjJywgJ1NpZXJwaWXFhCcsICdXcnplc2llxYQnLCAnUGHFumR6aWVybmlrJywgJ0xpc3RvcGFkJ10sXG5cdFx0XHR9LFxuXHRcdFx0eWF4aXM6IHtcblx0XHRcdFx0dGl0bGU6IHtcblx0XHRcdFx0XHR0ZXh0OiAnxZpyZWRuaWEgY2VuYSAoesWCKScsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGxhYmVsczoge1xuXHRcdFx0XHRcdGZvcm1hdHRlcjogKHZhbHVlOiBudW1iZXIpID0+IHZhbHVlLnRvRml4ZWQoMiksXG5cdFx0XHRcdH0sXG5cdFx0XHRcdG1pbjogMixcblx0XHRcdFx0bWF4OiA2LFxuXHRcdFx0fSxcblx0XHRcdHN0cm9rZToge1xuXHRcdFx0XHR3aWR0aDogWzMsIDJdLFxuXHRcdFx0XHRjdXJ2ZTogJ3N0cmFpZ2h0Jyxcblx0XHRcdFx0ZGFzaEFycmF5OiBbMCwgNV0sXG5cdFx0XHR9LFxuXHRcdFx0dG9vbHRpcDoge1xuXHRcdFx0XHR5OiB7XG5cdFx0XHRcdFx0Zm9ybWF0dGVyOiAodmFsdWU6IG51bWJlcikgPT4gdmFsdWUudG9GaXhlZCgyKSArICcgesWCJyxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHRjb2xvcnM6IFsnIzAwYjAwMCcsICcjMDAzM2ZmJ10sXG5cdFx0fVxuXG5cdFx0Y29uc3QgbGFiZWxzID0gJ8WacmVkbmlhIGNlbmEgcGFwcnlraSdcblxuXHRcdGNvbnN0IHNlcmllc0RhdGEgPSBbXG5cdFx0XHR7XG5cdFx0XHRcdGRhdGE6IGF2ZXJhZ2VQcmljZXMsXG5cdFx0XHRcdG5hbWU6IGxhYmVscyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGRhdGE6IFtcblx0XHRcdFx0XHRhdmVyYWdlU2Vhc29uUHJpY2UsXG5cdFx0XHRcdFx0YXZlcmFnZVNlYXNvblByaWNlLFxuXHRcdFx0XHRcdGF2ZXJhZ2VTZWFzb25QcmljZSxcblx0XHRcdFx0XHRhdmVyYWdlU2Vhc29uUHJpY2UsXG5cdFx0XHRcdFx0YXZlcmFnZVNlYXNvblByaWNlLFxuXHRcdFx0XHRcdGF2ZXJhZ2VTZWFzb25QcmljZSxcblx0XHRcdFx0XSxcblx0XHRcdFx0bmFtZTogJ8WacmVkbmlhIGNlbmEgcGFwcnlraSBzZXpvbnUnLFxuXHRcdFx0XHR0eXBlOiAnbGluZScsXG5cdFx0XHRcdHN0cm9rZToge1xuXHRcdFx0XHRcdHdpZHRoOiAyLFxuXHRcdFx0XHRcdGN1cnZlOiAnZG90Jyxcblx0XHRcdFx0XHRkYXNoQXJyYXk6IFswLCAyXSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHNlcmllczogc2VyaWVzRGF0YSxcblx0XHRcdG9wdGlvbnM6IG9wdGlvbnMsXG5cdFx0fVxuXHR9KVxuXG5cdC8vIFN0YXR5c3R5a2lcblx0Y29uc3QgYXZlcmFnZVByaWNlc0J5TW9udGggPSBhdmVyYWdlUHJpY2VzLm1hcCgocHJpY2UsIGluZGV4KSA9PiAoe1xuXHRcdG1vbnRoOiBbJ0N6ZXJ3aWVjJywgJ0xpcGllYycsICdTaWVycGllxYQnLCAnV3J6ZXNpZcWEJywgJ1Bhxbpkemllcm5paycsICdMaXN0b3BhZCddW2luZGV4XSxcblx0XHRwcmljZTogcHJpY2UudG9GaXhlZCgyKSxcblx0fSkpXG5cblx0Y29uc3QgYXZlcmFnZVByb2ZpdFBlclR1bm5lbCA9IChhdmVyYWdlU2Vhc29uUHJpY2UgKiAxMDAwKS50b0ZpeGVkKDIpXG5cdGNvbnN0IGF2ZXJhZ2VZaWVsZFBlclR1bm5lbCA9ICgoYXZlcmFnZVNlYXNvblByaWNlICogMTAwMCkgLyBhdmVyYWdlUHJpY2VzLmxlbmd0aCkudG9GaXhlZCgyKVxuXG5cdHJldHVybiAoXG5cdFx0PENoYXJ0QXJlYSBjbGFzc05hbWU9J3ctZnVsbCBoLVs0MjBweF0gb3ZlcmZsb3cteC1hdXRvJz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3LVsxMTAwcHhdIHhsOnctYXV0byc+XG5cdFx0XHRcdDxwIGNsYXNzTmFtZT0nZm9udC1zZW1pYm9sZCB0ZXh0LWNlbnRlcic+S3N6dGHFgnRvd2FuaWUgc2nEmSBjZW4gcGFwcnlraSBuYSBwcnplc3RyemVuaSBtaWVzacSZY3kgc2V6b251PC9wPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIGgtZnVsbCc+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J210LTUgeGw6dy0yLzMnPlxuXHRcdFx0XHRcdFx0PFJlYWN0QXBleENoYXJ0XG5cdFx0XHRcdFx0XHRcdG9wdGlvbnM9e2NoYXJ0RGF0YS5vcHRpb25zfVxuXHRcdFx0XHRcdFx0XHRzZXJpZXM9e2NoYXJ0RGF0YS5zZXJpZXN9XG5cdFx0XHRcdFx0XHRcdHR5cGU9J2xpbmUnXG5cdFx0XHRcdFx0XHRcdHdpZHRoPXs3MDB9XG5cdFx0XHRcdFx0XHRcdGhlaWdodD17MzUwfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0neGw6dy0xLzMgc2VsZi1zdGFydCBtdC01Jz5cblx0XHRcdFx0XHRcdDx1bD5cblx0XHRcdFx0XHRcdFx0e2F2ZXJhZ2VQcmljZXNCeU1vbnRoLm1hcChtb250aCA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0PGxpIGtleT17bW9udGgubW9udGh9IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gYm9yZGVyLWIgYm9yZGVyLWdyYXktNDAwJz5cblx0XHRcdFx0XHRcdFx0XHRcdMWacmVkbmlhIGNlbmEgcGFwcnlraSAoe21vbnRoLm1vbnRofSk6IDxzcGFuIGNsYXNzTmFtZT0nZm9udC1zZW1pYm9sZCc+e21vbnRoLnByaWNlfSB6xYI8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGJvcmRlci1iIGJvcmRlci1ncmF5LTQwMCc+XG5cdFx0XHRcdFx0XHRcdFx0xZpyZWRuaWEgY2VuYSBwYXByeWtpIHNlem9udTogPHNwYW4gY2xhc3NOYW1lPSdmb250LXNlbWlib2xkJz57YXZlcmFnZVNlYXNvblByaWNlLnRvRml4ZWQoMil9IHrFgjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gYm9yZGVyLWIgYm9yZGVyLWdyYXktNDAwJz5cblx0XHRcdFx0XHRcdFx0XHTFmnJlZG5pIHp5c2sgcHJ6eXBhZGFqxIVjeSBuYSAxIHR1bmVsOiA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtc2VtaWJvbGQnPnthdmVyYWdlUHJvZml0UGVyVHVubmVsfSB6xYI8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGJvcmRlci1iIGJvcmRlci1ncmF5LTQwMCc+XG5cdFx0XHRcdFx0XHRcdFx0xZpyZWRuaWEgemJpb3LDs3cgcHJ6eXBhZGFqxIVjYSBuYSAxIHR1bmVsOnsnICd9XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPSdmb250LXNlbWlib2xkJz57YXZlcmFnZVlpZWxkUGVyVHVubmVsfSBrZzwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9DaGFydEFyZWE+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGVwcGVyUHJpY2VzXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlJlYWN0QXBleENoYXJ0IiwiQ2hhcnRBcmVhIiwiUGVwcGVyUHJpY2VzIiwiYWxsVHJhZGVzIiwiY2FsY3VsYXRlQXZlcmFnZVByaWNlcyIsInRyYWRlcyIsIm1vbnRobHlQcmljZXMiLCJtb250aGx5V2VpZ2h0cyIsImZvckVhY2giLCJ0cmFkZSIsIm1vbnRoIiwiRGF0ZSIsImRhdGUiLCJnZXRNb250aCIsInByaWNlIiwidmF0UmF0ZSIsIndlaWdodCIsImF2ZXJhZ2VQcmljZXMiLCJtYXAiLCJpbmRleCIsImNvdW50IiwiY2FsY3VsYXRlQXZlcmFnZVNlYXNvblByaWNlIiwidG90YWxQcmljZSIsInRvdGFsV2VpZ2h0IiwiYXZlcmFnZVNlYXNvblByaWNlIiwiY2hhcnREYXRhIiwib3B0aW9ucyIsImNoYXJ0IiwidHlwZSIsInhheGlzIiwiY2F0ZWdvcmllcyIsInlheGlzIiwidGl0bGUiLCJ0ZXh0IiwibGFiZWxzIiwiZm9ybWF0dGVyIiwidmFsdWUiLCJ0b0ZpeGVkIiwibWluIiwibWF4Iiwic3Ryb2tlIiwid2lkdGgiLCJjdXJ2ZSIsImRhc2hBcnJheSIsInRvb2x0aXAiLCJ5IiwiY29sb3JzIiwic2VyaWVzRGF0YSIsImRhdGEiLCJuYW1lIiwic2VyaWVzIiwiYXZlcmFnZVByaWNlc0J5TW9udGgiLCJhdmVyYWdlUHJvZml0UGVyVHVubmVsIiwiYXZlcmFnZVlpZWxkUGVyVHVubmVsIiwibGVuZ3RoIiwiY2xhc3NOYW1lIiwiZGl2IiwicCIsImhlaWdodCIsInVsIiwibGkiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/Charts/AveragePepperPrices.tsx\n"));

/***/ })

});