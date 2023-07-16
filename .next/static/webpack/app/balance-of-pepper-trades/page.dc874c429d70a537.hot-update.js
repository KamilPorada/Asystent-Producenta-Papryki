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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apexcharts */ \"(app-client)/./node_modules/react-apexcharts/dist/react-apexcharts.min.js\");\n/* harmony import */ var _components_UI_ChartArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/UI/ChartArea */ \"(app-client)/./components/UI/ChartArea.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst PepperPrices = (param)=>{\n    let { allTrades } = param;\n    _s();\n    const calculateAveragePrices = (trades)=>{\n        const monthlyPrices = [\n            0,\n            0,\n            0,\n            0,\n            0,\n            0\n        ];\n        const monthlyWeights = [\n            0,\n            0,\n            0,\n            0,\n            0,\n            0\n        ];\n        trades.forEach((trade)=>{\n            const month = new Date(trade.date).getMonth();\n            if (month >= 5 && month <= 10) {\n                monthlyPrices[month - 5] += (trade.price + trade.price * (trade.vatRate / 100)) * trade.weight;\n                monthlyWeights[month - 5] += trade.weight;\n            }\n        });\n        const averagePrices = monthlyPrices.map((price, index)=>{\n            const count = monthlyWeights[index];\n            return count > 0 ? price / count : 0;\n        });\n        return averagePrices;\n    };\n    const calculateAverageSeasonPrice = (trades)=>{\n        let totalPrice = 0;\n        let totalWeight = 0;\n        trades.forEach((trade)=>{\n            totalPrice += (trade.price + trade.price * (trade.vatRate / 100)) * trade.weight;\n            totalWeight += trade.weight;\n        });\n        return totalWeight > 0 ? totalPrice / totalWeight : 0;\n    };\n    const averagePrices = calculateAveragePrices(allTrades);\n    const averageSeasonPrice = calculateAverageSeasonPrice(allTrades);\n    const [chartData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>{\n        const options = {\n            chart: {\n                type: \"line\"\n            },\n            xaxis: {\n                categories: [\n                    \"Czerwiec\",\n                    \"Lipiec\",\n                    \"Sierpień\",\n                    \"Wrzesień\",\n                    \"Październik\",\n                    \"Listopad\"\n                ]\n            },\n            yaxis: {\n                title: {\n                    text: \"Średnia cena (zł)\"\n                },\n                labels: {\n                    formatter: (value)=>value.toFixed(2)\n                },\n                min: 2,\n                max: 6\n            },\n            stroke: {\n                width: [\n                    3,\n                    2\n                ],\n                curve: \"straight\",\n                dashArray: [\n                    0,\n                    5\n                ]\n            },\n            tooltip: {\n                y: {\n                    formatter: (value)=>value.toFixed(2) + \" zł\"\n                }\n            },\n            colors: [\n                \"#00b000\",\n                \"#0033ff\"\n            ]\n        };\n        const labels = \"Średnia cena papryki\";\n        const seriesData = [\n            {\n                data: averagePrices,\n                name: labels\n            },\n            {\n                data: [\n                    averageSeasonPrice,\n                    averageSeasonPrice,\n                    averageSeasonPrice,\n                    averageSeasonPrice,\n                    averageSeasonPrice,\n                    averageSeasonPrice\n                ],\n                name: \"Średnia cena papryki sezonu\",\n                type: \"line\",\n                stroke: {\n                    width: 2,\n                    curve: \"dot\",\n                    dashArray: [\n                        0,\n                        2\n                    ]\n                }\n            }\n        ];\n        return {\n            series: seriesData,\n            options: options\n        };\n    });\n    // Statystyki\n    const averagePricesByMonth = averagePrices.map((price, index)=>({\n            month: [\n                \"Czerwiec\",\n                \"Lipiec\",\n                \"Sierpień\",\n                \"Wrzesień\",\n                \"Październik\",\n                \"Listopad\"\n            ][index],\n            price: price.toFixed(2)\n        }));\n    const averageProfitPerTunnel = (averageSeasonPrice * 1000).toFixed(2);\n    const averageYieldPerTunnel = (averageSeasonPrice * 1000 / averagePrices.length).toFixed(2);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_ChartArea__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        className: \"w-full h-[420px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"font-semibold text-center\",\n                children: \"Kształtowanie się cen papryki na przestrzeni miesięcy sezonu\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                lineNumber: 138,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row justify-start items-center h-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-5\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_apexcharts__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            options: chartData.options,\n                            series: chartData.series,\n                            type: \"line\",\n                            width: 700,\n                            height: 350\n                        }, void 0, false, {\n                            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                            lineNumber: 141,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                        lineNumber: 140,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"divek\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: [\n                                averagePricesByMonth.map((month)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: [\n                                            \"Średnia cena papryki (\",\n                                            month.month,\n                                            \"): \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"font-semibold\",\n                                                children: [\n                                                    month.price,\n                                                    \" zł\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                                                lineNumber: 147,\n                                                columnNumber: 55\n                                            }, undefined)\n                                        ]\n                                    }, month.month, true, {\n                                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                                        lineNumber: 146,\n                                        columnNumber: 15\n                                    }, undefined)),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: [\n                                        \"Średnia cena papryki sezonu: \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            cla: true\n                                        }, void 0, false, {\n                                            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                                            lineNumber: 150,\n                                            columnNumber: 46\n                                        }, undefined),\n                                        averageSeasonPrice.toFixed(2),\n                                        \" zł\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                                    lineNumber: 150,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: [\n                                        \"Średni zysk przypadający na 1 tunel: \",\n                                        averageProfitPerTunnel,\n                                        \" zł\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                                    lineNumber: 151,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: [\n                                        \"Średnia zbior\\xf3w przypadająca na 1 tunel: \",\n                                        averageYieldPerTunnel,\n                                        \" kg\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                                    lineNumber: 152,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                            lineNumber: 144,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                        lineNumber: 143,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                lineNumber: 139,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n        lineNumber: 137,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PepperPrices, \"+ch1kEXKcqyQ6Viy2sZcbIhyxcQ=\");\n_c = PepperPrices;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PepperPrices);\nvar _c;\n$RefreshReg$(_c, \"PepperPrices\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9DaGFydHMvQXZlcmFnZVBlcHBlclByaWNlcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBd0M7QUFDTTtBQUNHO0FBd0JqRCxNQUFNSSxlQUFnQztRQUFDLEVBQUVDLFNBQVMsRUFBRTs7SUFDbEQsTUFBTUMseUJBQXlCLENBQUNDO1FBQzlCLE1BQU1DLGdCQUEwQjtZQUFDO1lBQUc7WUFBRztZQUFHO1lBQUc7WUFBRztTQUFFO1FBQ2xELE1BQU1DLGlCQUEyQjtZQUFDO1lBQUc7WUFBRztZQUFHO1lBQUc7WUFBRztTQUFFO1FBRW5ERixPQUFPRyxRQUFRQyxDQUFBQTtZQUNiLE1BQU1DLFFBQVEsSUFBSUMsS0FBS0YsTUFBTUcsTUFBTUM7WUFFbkMsSUFBSUgsU0FBUyxLQUFLQSxTQUFTLElBQUk7Z0JBQzdCSixhQUFhLENBQUNJLFFBQVEsRUFBRSxJQUFJLENBQUNELE1BQU1LLFFBQVFMLE1BQU1LLFFBQVNMLENBQUFBLE1BQU1NLFVBQVUsR0FBRSxDQUFDLElBQUtOLE1BQU1PO2dCQUN4RlQsY0FBYyxDQUFDRyxRQUFRLEVBQUUsSUFBSUQsTUFBTU87WUFDckM7UUFDRjtRQUVBLE1BQU1DLGdCQUFnQlgsY0FBY1ksSUFBSSxDQUFDSixPQUFPSztZQUM5QyxNQUFNQyxRQUFRYixjQUFjLENBQUNZLE1BQU07WUFDbkMsT0FBT0MsUUFBUSxJQUFJTixRQUFRTSxRQUFRO1FBQ3JDO1FBRUEsT0FBT0g7SUFDVDtJQUVBLE1BQU1JLDhCQUE4QixDQUFDaEI7UUFDbkMsSUFBSWlCLGFBQWE7UUFDakIsSUFBSUMsY0FBYztRQUVsQmxCLE9BQU9HLFFBQVFDLENBQUFBO1lBQ2JhLGNBQWMsQ0FBQ2IsTUFBTUssUUFBUUwsTUFBTUssUUFBU0wsQ0FBQUEsTUFBTU0sVUFBVSxHQUFFLENBQUMsSUFBS04sTUFBTU87WUFDMUVPLGVBQWVkLE1BQU1PO1FBQ3ZCO1FBRUEsT0FBT08sY0FBYyxJQUFJRCxhQUFhQyxjQUFjO0lB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b25lbnRzL0NoYXJ0cy9BdmVyYWdlUGVwcGVyUHJpY2VzLnRzeD80NTg4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdEFwZXhDaGFydCBmcm9tICdyZWFjdC1hcGV4Y2hhcnRzJztcbmltcG9ydCBDaGFydEFyZWEgZnJvbSAnQGNvbXBvbmVudHMvVUkvQ2hhcnRBcmVhJztcblxuaW50ZXJmYWNlIFRyYWRlT2ZQZXBwZXIge1xuICBfaWQ6IHN0cmluZztcbiAgY3JlYXRvcjoge1xuICAgIF9pZDogc3RyaW5nO1xuICAgIGVtYWlsOiBzdHJpbmc7XG4gICAgdXNlcm5hbWU6IHN0cmluZztcbiAgICBpbWFnZTogc3RyaW5nO1xuICB9O1xuICBwb2ludE9mU2FsZUlkOiBzdHJpbmc7XG4gIGRhdGU6IHN0cmluZztcbiAgY2xhczogbnVtYmVyO1xuICBjb2xvcjogbnVtYmVyO1xuICBwcmljZTogbnVtYmVyO1xuICB3ZWlnaHQ6IG51bWJlcjtcbiAgdmF0UmF0ZTogbnVtYmVyO1xuICB0b3RhbFN1bTogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBhbGxUcmFkZXM6IFRyYWRlT2ZQZXBwZXJbXTtcbn1cblxuY29uc3QgUGVwcGVyUHJpY2VzOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBhbGxUcmFkZXMgfSkgPT4ge1xuICBjb25zdCBjYWxjdWxhdGVBdmVyYWdlUHJpY2VzID0gKHRyYWRlczogVHJhZGVPZlBlcHBlcltdKSA9PiB7XG4gICAgY29uc3QgbW9udGhseVByaWNlczogbnVtYmVyW10gPSBbMCwgMCwgMCwgMCwgMCwgMF07XG4gICAgY29uc3QgbW9udGhseVdlaWdodHM6IG51bWJlcltdID0gWzAsIDAsIDAsIDAsIDAsIDBdO1xuXG4gICAgdHJhZGVzLmZvckVhY2godHJhZGUgPT4ge1xuICAgICAgY29uc3QgbW9udGggPSBuZXcgRGF0ZSh0cmFkZS5kYXRlKS5nZXRNb250aCgpO1xuXG4gICAgICBpZiAobW9udGggPj0gNSAmJiBtb250aCA8PSAxMCkge1xuICAgICAgICBtb250aGx5UHJpY2VzW21vbnRoIC0gNV0gKz0gKHRyYWRlLnByaWNlICsgdHJhZGUucHJpY2UgKiAodHJhZGUudmF0UmF0ZSAvIDEwMCkpICogdHJhZGUud2VpZ2h0O1xuICAgICAgICBtb250aGx5V2VpZ2h0c1ttb250aCAtIDVdICs9IHRyYWRlLndlaWdodDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGF2ZXJhZ2VQcmljZXMgPSBtb250aGx5UHJpY2VzLm1hcCgocHJpY2UsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBjb3VudCA9IG1vbnRobHlXZWlnaHRzW2luZGV4XTtcbiAgICAgIHJldHVybiBjb3VudCA+IDAgPyBwcmljZSAvIGNvdW50IDogMDtcbiAgICB9KTtcblxuICAgIHJldHVybiBhdmVyYWdlUHJpY2VzO1xuICB9O1xuXG4gIGNvbnN0IGNhbGN1bGF0ZUF2ZXJhZ2VTZWFzb25QcmljZSA9ICh0cmFkZXM6IFRyYWRlT2ZQZXBwZXJbXSk6IG51bWJlciA9PiB7XG4gICAgbGV0IHRvdGFsUHJpY2UgPSAwO1xuICAgIGxldCB0b3RhbFdlaWdodCA9IDA7XG5cbiAgICB0cmFkZXMuZm9yRWFjaCh0cmFkZSA9PiB7XG4gICAgICB0b3RhbFByaWNlICs9ICh0cmFkZS5wcmljZSArIHRyYWRlLnByaWNlICogKHRyYWRlLnZhdFJhdGUgLyAxMDApKSAqIHRyYWRlLndlaWdodDtcbiAgICAgIHRvdGFsV2VpZ2h0ICs9IHRyYWRlLndlaWdodDtcbiAgICB9KTtcblxuICAgIHJldHVybiB0b3RhbFdlaWdodCA+IDAgPyB0b3RhbFByaWNlIC8gdG90YWxXZWlnaHQgOiAwO1xuICB9O1xuXG4gIGNvbnN0IGF2ZXJhZ2VQcmljZXMgPSBjYWxjdWxhdGVBdmVyYWdlUHJpY2VzKGFsbFRyYWRlcyk7XG4gIGNvbnN0IGF2ZXJhZ2VTZWFzb25QcmljZSA9IGNhbGN1bGF0ZUF2ZXJhZ2VTZWFzb25QcmljZShhbGxUcmFkZXMpO1xuXG4gIGNvbnN0IFtjaGFydERhdGFdID0gdXNlU3RhdGU8eyBzZXJpZXM6IHsgZGF0YTogbnVtYmVyW107IG5hbWU6IHN0cmluZyB9W107IG9wdGlvbnM6IEFwZXhDaGFydHMuQXBleE9wdGlvbnMgfT4oKCkgPT4ge1xuICAgIGNvbnN0IG9wdGlvbnM6IEFwZXhDaGFydHMuQXBleE9wdGlvbnMgPSB7XG4gICAgICBjaGFydDoge1xuICAgICAgICB0eXBlOiAnbGluZScsXG4gICAgICB9LFxuICAgICAgeGF4aXM6IHtcbiAgICAgICAgY2F0ZWdvcmllczogWydDemVyd2llYycsICdMaXBpZWMnLCAnU2llcnBpZcWEJywgJ1dyemVzaWXFhCcsICdQYcW6ZHppZXJuaWsnLCAnTGlzdG9wYWQnXSxcbiAgICAgIH0sXG4gICAgICB5YXhpczoge1xuICAgICAgICB0aXRsZToge1xuICAgICAgICAgIHRleHQ6ICfFmnJlZG5pYSBjZW5hICh6xYIpJyxcbiAgICAgICAgfSxcbiAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgZm9ybWF0dGVyOiAodmFsdWU6IG51bWJlcikgPT4gdmFsdWUudG9GaXhlZCgyKSxcbiAgICAgICAgfSxcbiAgICAgICAgbWluOiAyLFxuICAgICAgICBtYXg6IDYsXG4gICAgICB9LFxuICAgICAgc3Ryb2tlOiB7XG4gICAgICAgIHdpZHRoOiBbMywgMl0sXG4gICAgICAgIGN1cnZlOiAnc3RyYWlnaHQnLFxuICAgICAgICBkYXNoQXJyYXk6IFswLCA1XSxcbiAgICAgIH0sXG4gICAgICB0b29sdGlwOiB7XG4gICAgICAgIHk6IHtcbiAgICAgICAgICBmb3JtYXR0ZXI6ICh2YWx1ZTogbnVtYmVyKSA9PiB2YWx1ZS50b0ZpeGVkKDIpICsgJyB6xYInLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGNvbG9yczogWycjMDBiMDAwJywgJyMwMDMzZmYnXSxcbiAgICB9O1xuXG4gICAgY29uc3QgbGFiZWxzID0gJ8WacmVkbmlhIGNlbmEgcGFwcnlraSc7XG5cbiAgICBjb25zdCBzZXJpZXNEYXRhID0gW1xuICAgICAge1xuICAgICAgICBkYXRhOiBhdmVyYWdlUHJpY2VzLFxuICAgICAgICBuYW1lOiBsYWJlbHMsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBkYXRhOiBbXG4gICAgICAgICAgYXZlcmFnZVNlYXNvblByaWNlLFxuICAgICAgICAgIGF2ZXJhZ2VTZWFzb25QcmljZSxcbiAgICAgICAgICBhdmVyYWdlU2Vhc29uUHJpY2UsXG4gICAgICAgICAgYXZlcmFnZVNlYXNvblByaWNlLFxuICAgICAgICAgIGF2ZXJhZ2VTZWFzb25QcmljZSxcbiAgICAgICAgICBhdmVyYWdlU2Vhc29uUHJpY2UsXG4gICAgICAgIF0sXG4gICAgICAgIG5hbWU6ICfFmnJlZG5pYSBjZW5hIHBhcHJ5a2kgc2V6b251JyxcbiAgICAgICAgdHlwZTogJ2xpbmUnLFxuICAgICAgICBzdHJva2U6IHtcbiAgICAgICAgICB3aWR0aDogMixcbiAgICAgICAgICBjdXJ2ZTogJ2RvdCcsXG4gICAgICAgICAgZGFzaEFycmF5OiBbMCwgMl0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIF07XG5cbiAgICByZXR1cm4ge1xuICAgICAgc2VyaWVzOiBzZXJpZXNEYXRhLFxuICAgICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICB9O1xuICB9KTtcblxuICAvLyBTdGF0eXN0eWtpXG4gIGNvbnN0IGF2ZXJhZ2VQcmljZXNCeU1vbnRoID0gYXZlcmFnZVByaWNlcy5tYXAoKHByaWNlLCBpbmRleCkgPT4gKHtcbiAgICBtb250aDogWydDemVyd2llYycsICdMaXBpZWMnLCAnU2llcnBpZcWEJywgJ1dyemVzaWXFhCcsICdQYcW6ZHppZXJuaWsnLCAnTGlzdG9wYWQnXVtpbmRleF0sXG4gICAgcHJpY2U6IHByaWNlLnRvRml4ZWQoMiksXG4gIH0pKTtcblxuICBjb25zdCBhdmVyYWdlUHJvZml0UGVyVHVubmVsID0gKGF2ZXJhZ2VTZWFzb25QcmljZSAqIDEwMDApLnRvRml4ZWQoMik7XG4gIGNvbnN0IGF2ZXJhZ2VZaWVsZFBlclR1bm5lbCA9ICgoYXZlcmFnZVNlYXNvblByaWNlICogMTAwMCkgLyBhdmVyYWdlUHJpY2VzLmxlbmd0aCkudG9GaXhlZCgyKTtcblxuICByZXR1cm4gKFxuICAgIDxDaGFydEFyZWEgY2xhc3NOYW1lPSd3LWZ1bGwgaC1bNDIwcHhdJz5cbiAgICAgIDxwIGNsYXNzTmFtZT0nZm9udC1zZW1pYm9sZCB0ZXh0LWNlbnRlcic+S3N6dGHFgnRvd2FuaWUgc2nEmSBjZW4gcGFwcnlraSBuYSBwcnplc3RyemVuaSBtaWVzacSZY3kgc2V6b251PC9wPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgaC1mdWxsJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J210LTUnPlxuICAgICAgICAgIDxSZWFjdEFwZXhDaGFydCBvcHRpb25zPXtjaGFydERhdGEub3B0aW9uc30gc2VyaWVzPXtjaGFydERhdGEuc2VyaWVzfSB0eXBlPSdsaW5lJyB3aWR0aD17NzAwfSBoZWlnaHQ9ezM1MH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZlayc+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAge2F2ZXJhZ2VQcmljZXNCeU1vbnRoLm1hcChtb250aCA9PiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e21vbnRoLm1vbnRofT5cbiAgICAgICAgICAgICAgICDFmnJlZG5pYSBjZW5hIHBhcHJ5a2kgKHttb250aC5tb250aH0pOiA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtc2VtaWJvbGQnPnttb250aC5wcmljZX0gesWCPC9zcGFuPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8bGk+xZpyZWRuaWEgY2VuYSBwYXByeWtpIHNlem9udTogPHNwYW4gY2xhPjwvc3Bhbj57YXZlcmFnZVNlYXNvblByaWNlLnRvRml4ZWQoMil9IHrFgjwvbGk+XG4gICAgICAgICAgICA8bGk+xZpyZWRuaSB6eXNrIHByenlwYWRhasSFY3kgbmEgMSB0dW5lbDoge2F2ZXJhZ2VQcm9maXRQZXJUdW5uZWx9IHrFgjwvbGk+XG4gICAgICAgICAgICA8bGk+xZpyZWRuaWEgemJpb3LDs3cgcHJ6eXBhZGFqxIVjYSBuYSAxIHR1bmVsOiB7YXZlcmFnZVlpZWxkUGVyVHVubmVsfSBrZzwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0NoYXJ0QXJlYT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBlcHBlclByaWNlcztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiUmVhY3RBcGV4Q2hhcnQiLCJDaGFydEFyZWEiLCJQZXBwZXJQcmljZXMiLCJhbGxUcmFkZXMiLCJjYWxjdWxhdGVBdmVyYWdlUHJpY2VzIiwidHJhZGVzIiwibW9udGhseVByaWNlcyIsIm1vbnRobHlXZWlnaHRzIiwiZm9yRWFjaCIsInRyYWRlIiwibW9udGgiLCJEYXRlIiwiZGF0ZSIsImdldE1vbnRoIiwicHJpY2UiLCJ2YXRSYXRlIiwid2VpZ2h0IiwiYXZlcmFnZVByaWNlcyIsIm1hcCIsImluZGV4IiwiY291bnQiLCJjYWxjdWxhdGVBdmVyYWdlU2Vhc29uUHJpY2UiLCJ0b3RhbFByaWNlIiwidG90YWxXZWlnaHQiLCJhdmVyYWdlU2Vhc29uUHJpY2UiLCJjaGFydERhdGEiLCJvcHRpb25zIiwiY2hhcnQiLCJ0eXBlIiwieGF4aXMiLCJjYXRlZ29yaWVzIiwieWF4aXMiLCJ0aXRsZSIsInRleHQiLCJsYWJlbHMiLCJmb3JtYXR0ZXIiLCJ2YWx1ZSIsInRvRml4ZWQiLCJtaW4iLCJtYXgiLCJzdHJva2UiLCJ3aWR0aCIsImN1cnZlIiwiZGFzaEFycmF5IiwidG9vbHRpcCIsInkiLCJjb2xvcnMiLCJzZXJpZXNEYXRhIiwiZGF0YSIsIm5hbWUiLCJzZXJpZXMiLCJhdmVyYWdlUHJpY2VzQnlNb250aCIsImF2ZXJhZ2VQcm9maXRQZXJUdW5uZWwiLCJhdmVyYWdlWWllbGRQZXJUdW5uZWwiLCJsZW5ndGgiLCJjbGFzc05hbWUiLCJwIiwiZGl2IiwiaGVpZ2h0IiwidWwiLCJsaSIsInNwYW4iLCJjbGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./components/Charts/AveragePepperPrices.tsx\n"));

/***/ })

});