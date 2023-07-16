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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apexcharts */ \"(app-client)/./node_modules/react-apexcharts/dist/react-apexcharts.min.js\");\n/* harmony import */ var _components_UI_ChartArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/UI/ChartArea */ \"(app-client)/./components/UI/ChartArea.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst PepperPrices = (param)=>{\n    let { allTrades } = param;\n    _s();\n    const calculateAveragePrices = (trades)=>{\n        const monthlyPrices = [\n            0,\n            0,\n            0,\n            0,\n            0,\n            0\n        ];\n        const monthlyWeights = [\n            0,\n            0,\n            0,\n            0,\n            0,\n            0\n        ];\n        trades.forEach((trade)=>{\n            const month = new Date(trade.date).getMonth();\n            if (month >= 5 && month <= 10) {\n                monthlyPrices[month - 5] += (trade.price + trade.price * (trade.vatRate / 100)) * trade.weight;\n                monthlyWeights[month - 5] += trade.weight;\n            }\n        });\n        const averagePrices = monthlyPrices.map((price, index)=>{\n            const count = monthlyWeights[index];\n            return count > 0 ? price / count : 0;\n        });\n        return averagePrices;\n    };\n    const calculateAverageSeasonPrice = (trades)=>{\n        let totalPrice = 0;\n        let totalWeight = 0;\n        trades.forEach((trade)=>{\n            totalPrice += (trade.price + trade.price * (trade.vatRate / 100)) * trade.weight;\n            totalWeight += trade.weight;\n        });\n        return totalWeight > 0 ? totalPrice / totalWeight : 0;\n    };\n    const averagePrices = calculateAveragePrices(allTrades);\n    const averageSeasonPrice = calculateAverageSeasonPrice(allTrades);\n    const [chartData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>{\n        const options = {\n            chart: {\n                type: \"line\"\n            },\n            xaxis: {\n                categories: [\n                    \"Czerwiec\",\n                    \"Lipiec\",\n                    \"Sierpień\",\n                    \"Wrzesień\",\n                    \"Październik\",\n                    \"Listopad\"\n                ]\n            },\n            yaxis: {\n                title: {\n                    text: \"Średnia cena (zł)\"\n                },\n                labels: {\n                    formatter: (value)=>value.toFixed(2)\n                },\n                min: 2,\n                max: 6\n            },\n            stroke: {\n                width: [\n                    3,\n                    2\n                ],\n                curve: \"straight\",\n                dashArray: [\n                    0,\n                    5\n                ]\n            },\n            tooltip: {\n                y: {\n                    formatter: (value)=>value.toFixed(2) + \" zł\"\n                }\n            },\n            colors: [\n                \"#00b000\",\n                \"#0033ff\"\n            ]\n        };\n        const labels = \"Średnia cena papryki\";\n        const seriesData = [\n            {\n                data: averagePrices,\n                name: labels\n            },\n            {\n                data: [\n                    averageSeasonPrice,\n                    averageSeasonPrice,\n                    averageSeasonPrice,\n                    averageSeasonPrice,\n                    averageSeasonPrice,\n                    averageSeasonPrice\n                ],\n                name: \"Średnia cena papryki sezonu\",\n                type: \"line\",\n                stroke: {\n                    width: 2,\n                    curve: \"dot\",\n                    dashArray: [\n                        0,\n                        2\n                    ]\n                }\n            }\n        ];\n        return {\n            series: seriesData,\n            options: options\n        };\n    });\n    // Statystyki\n    const averagePricesByMonth = averagePrices.map((price, index)=>({\n            month: [\n                \"Czerwiec\",\n                \"Lipiec\",\n                \"Sierpień\",\n                \"Wrzesień\",\n                \"Październik\",\n                \"Listopad\"\n            ][index],\n            price: price.toFixed(2)\n        }));\n    const averageProfitPerTunnel = (averageSeasonPrice * 1000).toFixed(2);\n    const averageYieldPerTunnel = (averageSeasonPrice * 1000 / averagePrices.length).toFixed(2);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_ChartArea__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        className: \"w-full h-[420px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"font-semibold text-center\",\n                children: \"Kształtowanie się cen papryki na przestrzeni miesięcy sezonu\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                lineNumber: 138,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row justify-between items-center h-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-5 w-2/3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_apexcharts__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            options: chartData.options,\n                            series: chartData.series,\n                            type: \"line\",\n                            width: 700,\n                            height: 350\n                        }, void 0, false, {\n                            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                            lineNumber: 141,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                        lineNumber: 140,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" w-1/3 self-start mt-5\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: [\n                                averagePricesByMonth.map((month)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"flex flex-row justify-between \",\n                                        children: [\n                                            \"Średnia cena papryki (\",\n                                            month.month,\n                                            \"): \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"font-semibold\",\n                                                children: [\n                                                    month.price,\n                                                    \" zł\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                                                lineNumber: 147,\n                                                columnNumber: 55\n                                            }, undefined)\n                                        ]\n                                    }, month.month, true, {\n                                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                                        lineNumber: 146,\n                                        columnNumber: 15\n                                    }, undefined)),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"flex flex-row justify-between\",\n                                    children: [\n                                        \"Średnia cena papryki sezonu: \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"font-semibold\",\n                                            children: [\n                                                averageSeasonPrice.toFixed(2),\n                                                \" zł\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                                            lineNumber: 150,\n                                            columnNumber: 88\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                                    lineNumber: 150,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"flex flex-row justify-between\",\n                                    children: [\n                                        \"Średni zysk przypadający na 1 tunel: \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"font-semibold\",\n                                            children: [\n                                                averageProfitPerTunnel,\n                                                \" zł\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                                            lineNumber: 151,\n                                            columnNumber: 96\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                                    lineNumber: 151,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"flex flex-row justify-between\",\n                                    children: [\n                                        \"Średnia zbior\\xf3w przypadająca na 1 tunel: \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"font-semibold\",\n                                            children: [\n                                                averageYieldPerTunnel,\n                                                \" kg\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                                            lineNumber: 152,\n                                            columnNumber: 100\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                                    lineNumber: 152,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                            lineNumber: 144,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                        lineNumber: 143,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                lineNumber: 139,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n        lineNumber: 137,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PepperPrices, \"+ch1kEXKcqyQ6Viy2sZcbIhyxcQ=\");\n_c = PepperPrices;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PepperPrices);\nvar _c;\n$RefreshReg$(_c, \"PepperPrices\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9DaGFydHMvQXZlcmFnZVBlcHBlclByaWNlcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBd0M7QUFDTTtBQUNHO0FBd0JqRCxNQUFNSSxlQUFnQztRQUFDLEVBQUVDLFNBQVMsRUFBRTs7SUFDbEQsTUFBTUMseUJBQXlCLENBQUNDO1FBQzlCLE1BQU1DLGdCQUEwQjtZQUFDO1lBQUc7WUFBRztZQUFHO1lBQUc7WUFBRztTQUFFO1FBQ2xELE1BQU1DLGlCQUEyQjtZQUFDO1lBQUc7WUFBRztZQUFHO1lBQUc7WUFBRztTQUFFO1FBRW5ERixPQUFPRyxRQUFRQyxDQUFBQTtZQUNiLE1BQU1DLFFBQVEsSUFBSUMsS0FBS0YsTUFBTUcsTUFBTUM7WUFFbkMsSUFBSUgsU0FBUyxLQUFLQSxTQUFTLElBQUk7Z0JBQzdCSixhQUFhLENBQUNJLFFBQVEsRUFBRSxJQUFJLENBQUNELE1BQU1LLFFBQVFMLE1BQU1LLFFBQVNMLENBQUFBLE1BQU1NLFVBQVUsR0FBRSxDQUFDLElBQUtOLE1BQU1PO2dCQUN4RlQsY0FBYyxDQUFDRyxRQUFRLEVBQUUsSUFBSUQsTUFBTU87WUFDckM7UUFDRjtRQUVBLE1BQU1DLGdCQUFnQlgsY0FBY1ksSUFBSSxDQUFDSixPQUFPSztZQUM5QyxNQUFNQyxRQUFRYixjQUFjLENBQUNZLE1BQU07WUFDbkMsT0FBT0MsUUFBUSxJQUFJTixRQUFRTSxRQUFRO1FBQ3JDO1FBRUEsT0FBT0g7SUFDVDtJQUVBLE1BQU1JLDhCQUE4QixDQUFDaEI7UUFDbkMsSUFBSWlCLGFBQWE7UUFDakIsSUFBSUMsY0FBYztRQUVsQmxCLE9BQU9HLFFBQVFDLENBQUFBO1lBQ2JhLGNBQWMsQ0FBQ2IsTUFBTUssUUFBUUwsTUFBTUssUUFBU0wsQ0FBQUEsTUFBTU0sVUFBVSxHQUFFLENBQUMsSUFBS04sTUFBTU87WUFDMUVPLGVBQWVkLE1BQU1PO1FBQ3ZCO1FBRUEsT0FBT08sY0FBYyxJQUFJRCxhQUFhQyxjQUFjO0lB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RjtnREFBc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU0xSjtHQW5JTW5EO0tBQUFBO0FBcUlOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2hhcnRzL0F2ZXJhZ2VQZXBwZXJQcmljZXMudHN4PzQ1ODgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0QXBleENoYXJ0IGZyb20gJ3JlYWN0LWFwZXhjaGFydHMnO1xuaW1wb3J0IENoYXJ0QXJlYSBmcm9tICdAY29tcG9uZW50cy9VSS9DaGFydEFyZWEnO1xuXG5pbnRlcmZhY2UgVHJhZGVPZlBlcHBlciB7XG4gIF9pZDogc3RyaW5nO1xuICBjcmVhdG9yOiB7XG4gICAgX2lkOiBzdHJpbmc7XG4gICAgZW1haWw6IHN0cmluZztcbiAgICB1c2VybmFtZTogc3RyaW5nO1xuICAgIGltYWdlOiBzdHJpbmc7XG4gIH07XG4gIHBvaW50T2ZTYWxlSWQ6IHN0cmluZztcbiAgZGF0ZTogc3RyaW5nO1xuICBjbGFzOiBudW1iZXI7XG4gIGNvbG9yOiBudW1iZXI7XG4gIHByaWNlOiBudW1iZXI7XG4gIHdlaWdodDogbnVtYmVyO1xuICB2YXRSYXRlOiBudW1iZXI7XG4gIHRvdGFsU3VtOiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGFsbFRyYWRlczogVHJhZGVPZlBlcHBlcltdO1xufVxuXG5jb25zdCBQZXBwZXJQcmljZXM6IFJlYWN0LkZDPFByb3BzPiA9ICh7IGFsbFRyYWRlcyB9KSA9PiB7XG4gIGNvbnN0IGNhbGN1bGF0ZUF2ZXJhZ2VQcmljZXMgPSAodHJhZGVzOiBUcmFkZU9mUGVwcGVyW10pID0+IHtcbiAgICBjb25zdCBtb250aGx5UHJpY2VzOiBudW1iZXJbXSA9IFswLCAwLCAwLCAwLCAwLCAwXTtcbiAgICBjb25zdCBtb250aGx5V2VpZ2h0czogbnVtYmVyW10gPSBbMCwgMCwgMCwgMCwgMCwgMF07XG5cbiAgICB0cmFkZXMuZm9yRWFjaCh0cmFkZSA9PiB7XG4gICAgICBjb25zdCBtb250aCA9IG5ldyBEYXRlKHRyYWRlLmRhdGUpLmdldE1vbnRoKCk7XG5cbiAgICAgIGlmIChtb250aCA+PSA1ICYmIG1vbnRoIDw9IDEwKSB7XG4gICAgICAgIG1vbnRobHlQcmljZXNbbW9udGggLSA1XSArPSAodHJhZGUucHJpY2UgKyB0cmFkZS5wcmljZSAqICh0cmFkZS52YXRSYXRlIC8gMTAwKSkgKiB0cmFkZS53ZWlnaHQ7XG4gICAgICAgIG1vbnRobHlXZWlnaHRzW21vbnRoIC0gNV0gKz0gdHJhZGUud2VpZ2h0O1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgYXZlcmFnZVByaWNlcyA9IG1vbnRobHlQcmljZXMubWFwKChwcmljZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGNvdW50ID0gbW9udGhseVdlaWdodHNbaW5kZXhdO1xuICAgICAgcmV0dXJuIGNvdW50ID4gMCA/IHByaWNlIC8gY291bnQgOiAwO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGF2ZXJhZ2VQcmljZXM7XG4gIH07XG5cbiAgY29uc3QgY2FsY3VsYXRlQXZlcmFnZVNlYXNvblByaWNlID0gKHRyYWRlczogVHJhZGVPZlBlcHBlcltdKTogbnVtYmVyID0+IHtcbiAgICBsZXQgdG90YWxQcmljZSA9IDA7XG4gICAgbGV0IHRvdGFsV2VpZ2h0ID0gMDtcblxuICAgIHRyYWRlcy5mb3JFYWNoKHRyYWRlID0+IHtcbiAgICAgIHRvdGFsUHJpY2UgKz0gKHRyYWRlLnByaWNlICsgdHJhZGUucHJpY2UgKiAodHJhZGUudmF0UmF0ZSAvIDEwMCkpICogdHJhZGUud2VpZ2h0O1xuICAgICAgdG90YWxXZWlnaHQgKz0gdHJhZGUud2VpZ2h0O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRvdGFsV2VpZ2h0ID4gMCA/IHRvdGFsUHJpY2UgLyB0b3RhbFdlaWdodCA6IDA7XG4gIH07XG5cbiAgY29uc3QgYXZlcmFnZVByaWNlcyA9IGNhbGN1bGF0ZUF2ZXJhZ2VQcmljZXMoYWxsVHJhZGVzKTtcbiAgY29uc3QgYXZlcmFnZVNlYXNvblByaWNlID0gY2FsY3VsYXRlQXZlcmFnZVNlYXNvblByaWNlKGFsbFRyYWRlcyk7XG5cbiAgY29uc3QgW2NoYXJ0RGF0YV0gPSB1c2VTdGF0ZTx7IHNlcmllczogeyBkYXRhOiBudW1iZXJbXTsgbmFtZTogc3RyaW5nIH1bXTsgb3B0aW9uczogQXBleENoYXJ0cy5BcGV4T3B0aW9ucyB9PigoKSA9PiB7XG4gICAgY29uc3Qgb3B0aW9uczogQXBleENoYXJ0cy5BcGV4T3B0aW9ucyA9IHtcbiAgICAgIGNoYXJ0OiB7XG4gICAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgIH0sXG4gICAgICB4YXhpczoge1xuICAgICAgICBjYXRlZ29yaWVzOiBbJ0N6ZXJ3aWVjJywgJ0xpcGllYycsICdTaWVycGllxYQnLCAnV3J6ZXNpZcWEJywgJ1Bhxbpkemllcm5paycsICdMaXN0b3BhZCddLFxuICAgICAgfSxcbiAgICAgIHlheGlzOiB7XG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgdGV4dDogJ8WacmVkbmlhIGNlbmEgKHrFgiknLFxuICAgICAgICB9LFxuICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICBmb3JtYXR0ZXI6ICh2YWx1ZTogbnVtYmVyKSA9PiB2YWx1ZS50b0ZpeGVkKDIpLFxuICAgICAgICB9LFxuICAgICAgICBtaW46IDIsXG4gICAgICAgIG1heDogNixcbiAgICAgIH0sXG4gICAgICBzdHJva2U6IHtcbiAgICAgICAgd2lkdGg6IFszLCAyXSxcbiAgICAgICAgY3VydmU6ICdzdHJhaWdodCcsXG4gICAgICAgIGRhc2hBcnJheTogWzAsIDVdLFxuICAgICAgfSxcbiAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgeToge1xuICAgICAgICAgIGZvcm1hdHRlcjogKHZhbHVlOiBudW1iZXIpID0+IHZhbHVlLnRvRml4ZWQoMikgKyAnIHrFgicsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgY29sb3JzOiBbJyMwMGIwMDAnLCAnIzAwMzNmZiddLFxuICAgIH07XG5cbiAgICBjb25zdCBsYWJlbHMgPSAnxZpyZWRuaWEgY2VuYSBwYXByeWtpJztcblxuICAgIGNvbnN0IHNlcmllc0RhdGEgPSBbXG4gICAgICB7XG4gICAgICAgIGRhdGE6IGF2ZXJhZ2VQcmljZXMsXG4gICAgICAgIG5hbWU6IGxhYmVscyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGRhdGE6IFtcbiAgICAgICAgICBhdmVyYWdlU2Vhc29uUHJpY2UsXG4gICAgICAgICAgYXZlcmFnZVNlYXNvblByaWNlLFxuICAgICAgICAgIGF2ZXJhZ2VTZWFzb25QcmljZSxcbiAgICAgICAgICBhdmVyYWdlU2Vhc29uUHJpY2UsXG4gICAgICAgICAgYXZlcmFnZVNlYXNvblByaWNlLFxuICAgICAgICAgIGF2ZXJhZ2VTZWFzb25QcmljZSxcbiAgICAgICAgXSxcbiAgICAgICAgbmFtZTogJ8WacmVkbmlhIGNlbmEgcGFwcnlraSBzZXpvbnUnLFxuICAgICAgICB0eXBlOiAnbGluZScsXG4gICAgICAgIHN0cm9rZToge1xuICAgICAgICAgIHdpZHRoOiAyLFxuICAgICAgICAgIGN1cnZlOiAnZG90JyxcbiAgICAgICAgICBkYXNoQXJyYXk6IFswLCAyXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXTtcblxuICAgIHJldHVybiB7XG4gICAgICBzZXJpZXM6IHNlcmllc0RhdGEsXG4gICAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgIH07XG4gIH0pO1xuXG4gIC8vIFN0YXR5c3R5a2lcbiAgY29uc3QgYXZlcmFnZVByaWNlc0J5TW9udGggPSBhdmVyYWdlUHJpY2VzLm1hcCgocHJpY2UsIGluZGV4KSA9PiAoe1xuICAgIG1vbnRoOiBbJ0N6ZXJ3aWVjJywgJ0xpcGllYycsICdTaWVycGllxYQnLCAnV3J6ZXNpZcWEJywgJ1Bhxbpkemllcm5paycsICdMaXN0b3BhZCddW2luZGV4XSxcbiAgICBwcmljZTogcHJpY2UudG9GaXhlZCgyKSxcbiAgfSkpO1xuXG4gIGNvbnN0IGF2ZXJhZ2VQcm9maXRQZXJUdW5uZWwgPSAoYXZlcmFnZVNlYXNvblByaWNlICogMTAwMCkudG9GaXhlZCgyKTtcbiAgY29uc3QgYXZlcmFnZVlpZWxkUGVyVHVubmVsID0gKChhdmVyYWdlU2Vhc29uUHJpY2UgKiAxMDAwKSAvIGF2ZXJhZ2VQcmljZXMubGVuZ3RoKS50b0ZpeGVkKDIpO1xuXG4gIHJldHVybiAoXG4gICAgPENoYXJ0QXJlYSBjbGFzc05hbWU9J3ctZnVsbCBoLVs0MjBweF0nPlxuICAgICAgPHAgY2xhc3NOYW1lPSdmb250LXNlbWlib2xkIHRleHQtY2VudGVyJz5Lc3p0YcWCdG93YW5pZSBzacSZIGNlbiBwYXByeWtpIG5hIHByemVzdHJ6ZW5pIG1pZXNpxJljeSBzZXpvbnU8L3A+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIGgtZnVsbCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC01IHctMi8zJz5cbiAgICAgICAgICA8UmVhY3RBcGV4Q2hhcnQgb3B0aW9ucz17Y2hhcnREYXRhLm9wdGlvbnN9IHNlcmllcz17Y2hhcnREYXRhLnNlcmllc30gdHlwZT0nbGluZScgd2lkdGg9ezcwMH0gaGVpZ2h0PXszNTB9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nIHctMS8zIHNlbGYtc3RhcnQgbXQtNSc+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAge2F2ZXJhZ2VQcmljZXNCeU1vbnRoLm1hcChtb250aCA9PiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e21vbnRoLm1vbnRofSBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuICc+XG4gICAgICAgICAgICAgICAgxZpyZWRuaWEgY2VuYSBwYXByeWtpICh7bW9udGgubW9udGh9KTogPHNwYW4gY2xhc3NOYW1lPSdmb250LXNlbWlib2xkJz57bW9udGgucHJpY2V9IHrFgjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4nPsWacmVkbmlhIGNlbmEgcGFwcnlraSBzZXpvbnU6IDxzcGFuIGNsYXNzTmFtZT0nZm9udC1zZW1pYm9sZCc+e2F2ZXJhZ2VTZWFzb25QcmljZS50b0ZpeGVkKDIpfSB6xYI8L3NwYW4+PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuJz7FmnJlZG5pIHp5c2sgcHJ6eXBhZGFqxIVjeSBuYSAxIHR1bmVsOiA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtc2VtaWJvbGQnPnthdmVyYWdlUHJvZml0UGVyVHVubmVsfSB6xYI8L3NwYW4+PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuJz7FmnJlZG5pYSB6YmlvcsOzdyBwcnp5cGFkYWrEhWNhIG5hIDEgdHVuZWw6IDxzcGFuIGNsYXNzTmFtZT0nZm9udC1zZW1pYm9sZCc+e2F2ZXJhZ2VZaWVsZFBlclR1bm5lbH0ga2c8L3NwYW4+PC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvQ2hhcnRBcmVhPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGVwcGVyUHJpY2VzO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJSZWFjdEFwZXhDaGFydCIsIkNoYXJ0QXJlYSIsIlBlcHBlclByaWNlcyIsImFsbFRyYWRlcyIsImNhbGN1bGF0ZUF2ZXJhZ2VQcmljZXMiLCJ0cmFkZXMiLCJtb250aGx5UHJpY2VzIiwibW9udGhseVdlaWdodHMiLCJmb3JFYWNoIiwidHJhZGUiLCJtb250aCIsIkRhdGUiLCJkYXRlIiwiZ2V0TW9udGgiLCJwcmljZSIsInZhdFJhdGUiLCJ3ZWlnaHQiLCJhdmVyYWdlUHJpY2VzIiwibWFwIiwiaW5kZXgiLCJjb3VudCIsImNhbGN1bGF0ZUF2ZXJhZ2VTZWFzb25QcmljZSIsInRvdGFsUHJpY2UiLCJ0b3RhbFdlaWdodCIsImF2ZXJhZ2VTZWFzb25QcmljZSIsImNoYXJ0RGF0YSIsIm9wdGlvbnMiLCJjaGFydCIsInR5cGUiLCJ4YXhpcyIsImNhdGVnb3JpZXMiLCJ5YXhpcyIsInRpdGxlIiwidGV4dCIsImxhYmVscyIsImZvcm1hdHRlciIsInZhbHVlIiwidG9GaXhlZCIsIm1pbiIsIm1heCIsInN0cm9rZSIsIndpZHRoIiwiY3VydmUiLCJkYXNoQXJyYXkiLCJ0b29sdGlwIiwieSIsImNvbG9ycyIsInNlcmllc0RhdGEiLCJkYXRhIiwibmFtZSIsInNlcmllcyIsImF2ZXJhZ2VQcmljZXNCeU1vbnRoIiwiYXZlcmFnZVByb2ZpdFBlclR1bm5lbCIsImF2ZXJhZ2VZaWVsZFBlclR1bm5lbCIsImxlbmd0aCIsImNsYXNzTmFtZSIsInAiLCJkaXYiLCJoZWlnaHQiLCJ1bCIsImxpIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/Charts/AveragePepperPrices.tsx\n"));

/***/ })

});