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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apexcharts */ \"(app-client)/./node_modules/react-apexcharts/dist/react-apexcharts.min.js\");\n/* harmony import */ var _components_UI_ChartArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/UI/ChartArea */ \"(app-client)/./components/UI/ChartArea.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst PepperPrices = (param)=>{\n    let { allTrades } = param;\n    _s();\n    const calculateAveragePrices = (trades)=>{\n        const monthlyPrices = [\n            0,\n            0,\n            0,\n            0,\n            0,\n            0\n        ];\n        const monthlyWeights = [\n            0,\n            0,\n            0,\n            0,\n            0,\n            0\n        ];\n        trades.forEach((trade)=>{\n            const month = new Date(trade.date).getMonth();\n            if (month >= 5 && month <= 10) {\n                monthlyPrices[month - 5] += (trade.price + trade.price * (trade.vatRate / 100)) * trade.weight;\n                monthlyWeights[month - 5] += trade.weight;\n            }\n        });\n        const averagePrices = monthlyPrices.map((price, index)=>{\n            const count = monthlyWeights[index];\n            return count > 0 ? price / count : 0;\n        });\n        return averagePrices;\n    };\n    const calculateAverageSeasonPrice = (trades)=>{\n        let totalPrice = 0;\n        let totalWeight = 0;\n        trades.forEach((trade)=>{\n            totalPrice += (trade.price + trade.price * (trade.vatRate / 100)) * trade.weight;\n            totalWeight += trade.weight;\n        });\n        return totalWeight > 0 ? totalPrice / totalWeight : 0;\n    };\n    const averagePrices = calculateAveragePrices(allTrades);\n    const averageSeasonPrice = calculateAverageSeasonPrice(allTrades);\n    const [chartData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>{\n        const options = {\n            chart: {\n                type: \"line\"\n            },\n            xaxis: {\n                categories: [\n                    \"Czerwiec\",\n                    \"Lipiec\",\n                    \"Sierpień\",\n                    \"Wrzesień\",\n                    \"Październik\",\n                    \"Listopad\"\n                ]\n            },\n            yaxis: {\n                title: {\n                    text: \"Średnia cena (zł)\"\n                },\n                labels: {\n                    formatter: (value)=>value.toFixed(2)\n                },\n                min: 2,\n                max: 6\n            },\n            stroke: {\n                width: [\n                    3,\n                    2\n                ],\n                curve: \"straight\",\n                dashArray: [\n                    0,\n                    5\n                ]\n            },\n            tooltip: {\n                y: {\n                    formatter: (value)=>value.toFixed(2) + \" zł\"\n                }\n            },\n            colors: [\n                \"#00b000\",\n                \"#0033ff\"\n            ]\n        };\n        const labels = \"Średnia cena papryki\";\n        const seriesData = [\n            {\n                data: averagePrices,\n                name: labels\n            },\n            {\n                data: [\n                    averageSeasonPrice,\n                    averageSeasonPrice,\n                    averageSeasonPrice,\n                    averageSeasonPrice,\n                    averageSeasonPrice,\n                    averageSeasonPrice\n                ],\n                name: \"Średnia cena papryki sezonu\",\n                type: \"line\",\n                stroke: {\n                    width: 2,\n                    curve: \"dot\",\n                    dashArray: [\n                        0,\n                        2\n                    ]\n                }\n            }\n        ];\n        return {\n            series: seriesData,\n            options: options\n        };\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_ChartArea__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        className: \"w-full h-[420px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-full flex flex-col justify-start items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"font-semibold text-center\",\n                        children: \"Kształtowanie się cen papryki na przestrzeni miesięcy sezonu\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                        lineNumber: 130,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-5\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_apexcharts__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            options: chartData.options,\n                            series: chartData.series,\n                            type: \"line\",\n                            width: 700,\n                            height: 350\n                        }, void 0, false, {\n                            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                            lineNumber: 132,\n                            columnNumber: 6\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                        lineNumber: 131,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                lineNumber: 129,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                lineNumber: 135,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n        lineNumber: 128,\n        columnNumber: 3\n    }, undefined);\n};\n_s(PepperPrices, \"xzfiwxcfNl3eYk9T7/kjRq/svT4=\");\n_c = PepperPrices;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PepperPrices);\nvar _c;\n$RefreshReg$(_c, \"PepperPrices\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9DaGFydHMvQXZlcmFnZVBlcHBlclByaWNlcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBdUM7QUFDTTtBQUNHO0FBd0JoRCxNQUFNSSxlQUFnQztRQUFDLEVBQUVDLFNBQVMsRUFBRTs7SUFDbkQsTUFBTUMseUJBQXlCLENBQUNDO1FBQy9CLE1BQU1DLGdCQUEwQjtZQUFDO1lBQUc7WUFBRztZQUFHO1lBQUc7WUFBRztTQUFFO1FBQ2xELE1BQU1DLGlCQUEyQjtZQUFDO1lBQUc7WUFBRztZQUFHO1lBQUc7WUFBRztTQUFFO1FBRW5ERixPQUFPRyxRQUFRQyxDQUFBQTtZQUNkLE1BQU1DLFFBQVEsSUFBSUMsS0FBS0YsTUFBTUcsTUFBTUM7WUFFbkMsSUFBSUgsU0FBUyxLQUFLQSxTQUFTLElBQUk7Z0JBQzlCSixhQUFhLENBQUNJLFFBQVEsRUFBRSxJQUFJLENBQUNELE1BQU1LLFFBQVFMLE1BQU1LLFFBQVNMLENBQUFBLE1BQU1NLFVBQVUsR0FBRSxDQUFDLElBQUtOLE1BQU1PO2dCQUN4RlQsY0FBYyxDQUFDRyxRQUFRLEVBQUUsSUFBSUQsTUFBTU87WUFDcEM7UUFDRDtRQUVBLE1BQU1DLGdCQUFnQlgsY0FBY1ksSUFBSSxDQUFDSixPQUFPSztZQUMvQyxNQUFNQyxRQUFRYixjQUFjLENBQUNZLE1BQU07WUFDbkMsT0FBT0MsUUFBUSxJQUFJTixRQUFRTSxRQUFRO1FBQ3BDO1FBRUEsT0FBT0g7SUFDUjtJQUVBLE1BQU1JLDhCQUE4QixDQUFDaEI7UUFDcEMsSUFBSWlCLGFBQWE7UUFDakIsSUFBSUMsY0FBYztRQUVsQmxCLE9BQU9HLFFBQVFDLENBQUFBO1lBQ2RhLGNBQWMsQ0FBQ2IsTUFBTUssUUFBUUwsTUFBTUssUUFBU0wsQ0FBQUEsTUFBTU0sVUFBVSxHQUFFLENBQUMsSUFBS04sTUFBTU87WUFDMUVPLGVBQWVkLE1BQU1PO1FBQ3RCO1FBRUEsT0FBT08sY0FBYyxJQUFJRCxhQUFhQyxjQUFjO0lBQ3JEO0lBRUEsTUFBTU4sZ0JBQWdCYix1QkFBdUJEO0lBQzdDLE1BQU1xQixxQkFBcUJILDRCQUE0QmxCO0lBRXZELE1BQU0sQ0FBQ3NCLFVBQVUsR0FBRzFCLCtDQUFRQSxDQUFrRjtRQUM3RyxNQUFNMkIsVUFBa0M7WUFDdkNDLE9BQU87Z0JBQ05DLE1BQU07WUFDUDtZQUNBQyxPQUFPO2dCQUNOQyxZQUFZO29CQUFDO29CQUFZO29CQUFVO29CQUFZO29CQUFZO29CQUFlO2lCQUFXO1lBQ3RGO1lBQ0FDLE9BQU87Z0JBQ05DLE9BQU87b0JBQ05DLE1BQU07Z0JBQ1A7Z0JBQ0FDLFFBQVE7b0JBQ1BDLFdBQVcsQ0FBQ0MsUUFBa0JBLE1BQU1DLFFBQVE7Z0JBQzdDO2dCQUNBQyxLQUFLO2dCQUNMQyxLQUFLO1lBQ047WUFDQUMsUUFBUTtnQkFDUEMsT0FBTztvQkFBQztvQkFBRztpQkFBRTtnQkFDYkMsT0FBTztnQkFDUEMsV0FBVztvQkFBQztvQkFBRztpQkFBRTtZQUNsQjtZQUNBQyxTQUFTO2dCQUNSQyxHQUFHO29CQUNGVixXQUFXLENBQUNDLFFBQWtCQSxNQUFNQyxRQUFRLEtBQUs7Z0JBQ2xEO1lBQ0Q7WUFDQVMsUUFBUTtnQkFBQztnQkFBVzthQUFVO1FBQy9CO1FBRUEsTUFBTVosU0FBUztRQUVmLE1BQU1hLGFBQWE7WUFDbEI7Z0JBQ0NDLE1BQU0vQjtnQkFDTmdDLE1BQU1mO1lBQ1A7WUFDQTtnQkFDQ2MsTUFBTTtvQkFDTHhCO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7aUJBQ0E7Z0JBQ0R5QixNQUFNO2dCQUNOckIsTUFBTTtnQkFDTlksUUFBUTtvQkFDUEMsT0FBTztvQkFDUEMsT0FBTztvQkFDUEMsV0FBVzt3QkFBQzt3QkFBRztxQkFBRTtnQkFDbEI7WUFDRDtTQUNBO1FBRUQsT0FBTztZQUNOTyxRQUFRSDtZQUNSckIsU0FBU0E7UUFDVjtJQUNEO0lBRUEscUJBQ0MsOERBQUN6QixnRUFBU0E7UUFBQ2tELFdBQVU7OzBCQUNwQiw4REFBQ0M7Z0JBQUlELFdBQVU7O2tDQUNkLDhEQUFDRTt3QkFBRUYsV0FBVTtrQ0FBNEI7Ozs7OztrQ0FDekMsOERBQUNDO3dCQUFJRCxXQUFVO2tDQUNkLDRFQUFDbkQsd0RBQWNBOzRCQUFDMEIsU0FBU0QsVUFBVUM7NEJBQVN3QixRQUFRekIsVUFBVXlCOzRCQUFRdEIsTUFBSzs0QkFBT2EsT0FBTzs0QkFBS2EsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR3hHLDhEQUFDRjs7Ozs7Ozs7Ozs7QUFHSjtHQS9HTWxEO0tBQUFBO0FBaUhOLCtEQUFlQSxZQUFZQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2hhcnRzL0F2ZXJhZ2VQZXBwZXJQcmljZXMudHN4PzQ1ODgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RBcGV4Q2hhcnQgZnJvbSAncmVhY3QtYXBleGNoYXJ0cydcbmltcG9ydCBDaGFydEFyZWEgZnJvbSAnQGNvbXBvbmVudHMvVUkvQ2hhcnRBcmVhJ1xuXG5pbnRlcmZhY2UgVHJhZGVPZlBlcHBlciB7XG5cdF9pZDogc3RyaW5nXG5cdGNyZWF0b3I6IHtcblx0XHRfaWQ6IHN0cmluZ1xuXHRcdGVtYWlsOiBzdHJpbmdcblx0XHR1c2VybmFtZTogc3RyaW5nXG5cdFx0aW1hZ2U6IHN0cmluZ1xuXHR9XG5cdHBvaW50T2ZTYWxlSWQ6IHN0cmluZ1xuXHRkYXRlOiBzdHJpbmdcblx0Y2xhczogbnVtYmVyXG5cdGNvbG9yOiBudW1iZXJcblx0cHJpY2U6IG51bWJlclxuXHR3ZWlnaHQ6IG51bWJlclxuXHR2YXRSYXRlOiBudW1iZXJcblx0dG90YWxTdW06IG51bWJlclxufVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuXHRhbGxUcmFkZXM6IFRyYWRlT2ZQZXBwZXJbXVxufVxuXG5jb25zdCBQZXBwZXJQcmljZXM6IFJlYWN0LkZDPFByb3BzPiA9ICh7IGFsbFRyYWRlcyB9KSA9PiB7XG5cdGNvbnN0IGNhbGN1bGF0ZUF2ZXJhZ2VQcmljZXMgPSAodHJhZGVzOiBUcmFkZU9mUGVwcGVyW10pID0+IHtcblx0XHRjb25zdCBtb250aGx5UHJpY2VzOiBudW1iZXJbXSA9IFswLCAwLCAwLCAwLCAwLCAwXVxuXHRcdGNvbnN0IG1vbnRobHlXZWlnaHRzOiBudW1iZXJbXSA9IFswLCAwLCAwLCAwLCAwLCAwXVxuXG5cdFx0dHJhZGVzLmZvckVhY2godHJhZGUgPT4ge1xuXHRcdFx0Y29uc3QgbW9udGggPSBuZXcgRGF0ZSh0cmFkZS5kYXRlKS5nZXRNb250aCgpXG5cblx0XHRcdGlmIChtb250aCA+PSA1ICYmIG1vbnRoIDw9IDEwKSB7XG5cdFx0XHRcdG1vbnRobHlQcmljZXNbbW9udGggLSA1XSArPSAodHJhZGUucHJpY2UgKyB0cmFkZS5wcmljZSAqICh0cmFkZS52YXRSYXRlIC8gMTAwKSkgKiB0cmFkZS53ZWlnaHRcblx0XHRcdFx0bW9udGhseVdlaWdodHNbbW9udGggLSA1XSArPSB0cmFkZS53ZWlnaHRcblx0XHRcdH1cblx0XHR9KVxuXG5cdFx0Y29uc3QgYXZlcmFnZVByaWNlcyA9IG1vbnRobHlQcmljZXMubWFwKChwcmljZSwgaW5kZXgpID0+IHtcblx0XHRcdGNvbnN0IGNvdW50ID0gbW9udGhseVdlaWdodHNbaW5kZXhdXG5cdFx0XHRyZXR1cm4gY291bnQgPiAwID8gcHJpY2UgLyBjb3VudCA6IDBcblx0XHR9KVxuXG5cdFx0cmV0dXJuIGF2ZXJhZ2VQcmljZXNcblx0fVxuXG5cdGNvbnN0IGNhbGN1bGF0ZUF2ZXJhZ2VTZWFzb25QcmljZSA9ICh0cmFkZXM6IFRyYWRlT2ZQZXBwZXJbXSk6IG51bWJlciA9PiB7XG5cdFx0bGV0IHRvdGFsUHJpY2UgPSAwXG5cdFx0bGV0IHRvdGFsV2VpZ2h0ID0gMFxuXG5cdFx0dHJhZGVzLmZvckVhY2godHJhZGUgPT4ge1xuXHRcdFx0dG90YWxQcmljZSArPSAodHJhZGUucHJpY2UgKyB0cmFkZS5wcmljZSAqICh0cmFkZS52YXRSYXRlIC8gMTAwKSkgKiB0cmFkZS53ZWlnaHRcblx0XHRcdHRvdGFsV2VpZ2h0ICs9IHRyYWRlLndlaWdodFxuXHRcdH0pXG5cblx0XHRyZXR1cm4gdG90YWxXZWlnaHQgPiAwID8gdG90YWxQcmljZSAvIHRvdGFsV2VpZ2h0IDogMFxuXHR9XG5cblx0Y29uc3QgYXZlcmFnZVByaWNlcyA9IGNhbGN1bGF0ZUF2ZXJhZ2VQcmljZXMoYWxsVHJhZGVzKVxuXHRjb25zdCBhdmVyYWdlU2Vhc29uUHJpY2UgPSBjYWxjdWxhdGVBdmVyYWdlU2Vhc29uUHJpY2UoYWxsVHJhZGVzKVxuXG5cdGNvbnN0IFtjaGFydERhdGFdID0gdXNlU3RhdGU8eyBzZXJpZXM6IHsgZGF0YTogbnVtYmVyW107IG5hbWU6IHN0cmluZyB9W107IG9wdGlvbnM6IEFwZXhDaGFydHMuQXBleE9wdGlvbnMgfT4oKCkgPT4ge1xuXHRcdGNvbnN0IG9wdGlvbnM6IEFwZXhDaGFydHMuQXBleE9wdGlvbnMgPSB7XG5cdFx0XHRjaGFydDoge1xuXHRcdFx0XHR0eXBlOiAnbGluZScsXG5cdFx0XHR9LFxuXHRcdFx0eGF4aXM6IHtcblx0XHRcdFx0Y2F0ZWdvcmllczogWydDemVyd2llYycsICdMaXBpZWMnLCAnU2llcnBpZcWEJywgJ1dyemVzaWXFhCcsICdQYcW6ZHppZXJuaWsnLCAnTGlzdG9wYWQnXSxcblx0XHRcdH0sXG5cdFx0XHR5YXhpczoge1xuXHRcdFx0XHR0aXRsZToge1xuXHRcdFx0XHRcdHRleHQ6ICfFmnJlZG5pYSBjZW5hICh6xYIpJyxcblx0XHRcdFx0fSxcblx0XHRcdFx0bGFiZWxzOiB7XG5cdFx0XHRcdFx0Zm9ybWF0dGVyOiAodmFsdWU6IG51bWJlcikgPT4gdmFsdWUudG9GaXhlZCgyKSxcblx0XHRcdFx0fSxcblx0XHRcdFx0bWluOiAyLFxuXHRcdFx0XHRtYXg6IDYsXG5cdFx0XHR9LFxuXHRcdFx0c3Ryb2tlOiB7XG5cdFx0XHRcdHdpZHRoOiBbMywgMl0sXG5cdFx0XHRcdGN1cnZlOiAnc3RyYWlnaHQnLFxuXHRcdFx0XHRkYXNoQXJyYXk6IFswLCA1XSxcblx0XHRcdH0sXG5cdFx0XHR0b29sdGlwOiB7XG5cdFx0XHRcdHk6IHtcblx0XHRcdFx0XHRmb3JtYXR0ZXI6ICh2YWx1ZTogbnVtYmVyKSA9PiB2YWx1ZS50b0ZpeGVkKDIpICsgJyB6xYInLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdGNvbG9yczogWycjMDBiMDAwJywgJyMwMDMzZmYnXSxcblx0XHR9XG5cblx0XHRjb25zdCBsYWJlbHMgPSAnxZpyZWRuaWEgY2VuYSBwYXByeWtpJ1xuXG5cdFx0Y29uc3Qgc2VyaWVzRGF0YSA9IFtcblx0XHRcdHtcblx0XHRcdFx0ZGF0YTogYXZlcmFnZVByaWNlcyxcblx0XHRcdFx0bmFtZTogbGFiZWxzLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZGF0YTogW1xuXHRcdFx0XHRcdGF2ZXJhZ2VTZWFzb25QcmljZSxcblx0XHRcdFx0XHRhdmVyYWdlU2Vhc29uUHJpY2UsXG5cdFx0XHRcdFx0YXZlcmFnZVNlYXNvblByaWNlLFxuXHRcdFx0XHRcdGF2ZXJhZ2VTZWFzb25QcmljZSxcblx0XHRcdFx0XHRhdmVyYWdlU2Vhc29uUHJpY2UsXG5cdFx0XHRcdFx0YXZlcmFnZVNlYXNvblByaWNlLFxuXHRcdFx0XHRdLFxuXHRcdFx0XHRuYW1lOiAnxZpyZWRuaWEgY2VuYSBwYXByeWtpIHNlem9udScsXG5cdFx0XHRcdHR5cGU6ICdsaW5lJyxcblx0XHRcdFx0c3Ryb2tlOiB7XG5cdFx0XHRcdFx0d2lkdGg6IDIsXG5cdFx0XHRcdFx0Y3VydmU6ICdkb3QnLFxuXHRcdFx0XHRcdGRhc2hBcnJheTogWzAsIDJdLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRdXG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0c2VyaWVzOiBzZXJpZXNEYXRhLFxuXHRcdFx0b3B0aW9uczogb3B0aW9ucyxcblx0XHR9XG5cdH0pXG5cblx0cmV0dXJuIChcblx0XHQ8Q2hhcnRBcmVhIGNsYXNzTmFtZT0ndy1mdWxsIGgtWzQyMHB4XSc+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0naC1mdWxsIGZsZXggZmxleC1jb2wganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXInPlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9J2ZvbnQtc2VtaWJvbGQgdGV4dC1jZW50ZXInPktzenRhxYJ0b3dhbmllIHNpxJkgY2VuIHBhcHJ5a2kgbmEgcHJ6ZXN0cnplbmkgbWllc2nEmWN5IHNlem9udTwvcD5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J210LTUnPlxuXHRcdFx0XHRcdDxSZWFjdEFwZXhDaGFydCBvcHRpb25zPXtjaGFydERhdGEub3B0aW9uc30gc2VyaWVzPXtjaGFydERhdGEuc2VyaWVzfSB0eXBlPSdsaW5lJyB3aWR0aD17NzAwfSBoZWlnaHQ9ezM1MH0gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXY+PC9kaXY+XG5cdFx0PC9DaGFydEFyZWE+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGVwcGVyUHJpY2VzXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlJlYWN0QXBleENoYXJ0IiwiQ2hhcnRBcmVhIiwiUGVwcGVyUHJpY2VzIiwiYWxsVHJhZGVzIiwiY2FsY3VsYXRlQXZlcmFnZVByaWNlcyIsInRyYWRlcyIsIm1vbnRobHlQcmljZXMiLCJtb250aGx5V2VpZ2h0cyIsImZvckVhY2giLCJ0cmFkZSIsIm1vbnRoIiwiRGF0ZSIsImRhdGUiLCJnZXRNb250aCIsInByaWNlIiwidmF0UmF0ZSIsIndlaWdodCIsImF2ZXJhZ2VQcmljZXMiLCJtYXAiLCJpbmRleCIsImNvdW50IiwiY2FsY3VsYXRlQXZlcmFnZVNlYXNvblByaWNlIiwidG90YWxQcmljZSIsInRvdGFsV2VpZ2h0IiwiYXZlcmFnZVNlYXNvblByaWNlIiwiY2hhcnREYXRhIiwib3B0aW9ucyIsImNoYXJ0IiwidHlwZSIsInhheGlzIiwiY2F0ZWdvcmllcyIsInlheGlzIiwidGl0bGUiLCJ0ZXh0IiwibGFiZWxzIiwiZm9ybWF0dGVyIiwidmFsdWUiLCJ0b0ZpeGVkIiwibWluIiwibWF4Iiwic3Ryb2tlIiwid2lkdGgiLCJjdXJ2ZSIsImRhc2hBcnJheSIsInRvb2x0aXAiLCJ5IiwiY29sb3JzIiwic2VyaWVzRGF0YSIsImRhdGEiLCJuYW1lIiwic2VyaWVzIiwiY2xhc3NOYW1lIiwiZGl2IiwicCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/Charts/AveragePepperPrices.tsx\n"));

/***/ })

});