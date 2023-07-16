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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apexcharts */ \"(app-client)/./node_modules/react-apexcharts/dist/react-apexcharts.min.js\");\n/* harmony import */ var _components_UI_ChartArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/UI/ChartArea */ \"(app-client)/./components/UI/ChartArea.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst PepperPrices = (param)=>{\n    let { allTrades } = param;\n    _s();\n    const calculateAveragePrices = (trades)=>{\n        const monthlyPrices = [\n            0,\n            0,\n            0,\n            0,\n            0,\n            0\n        ];\n        const monthlyWeights = [\n            0,\n            0,\n            0,\n            0,\n            0,\n            0\n        ];\n        trades.forEach((trade)=>{\n            const month = new Date(trade.date).getMonth();\n            if (month >= 5 && month <= 10) {\n                monthlyPrices[month - 5] += (trade.price + trade.price * (trade.vatRate / 100)) * trade.weight;\n                monthlyWeights[month - 5] += trade.weight;\n            }\n        });\n        const averagePrices = monthlyPrices.map((price, index)=>{\n            const count = monthlyWeights[index];\n            return count > 0 ? price / count : 0;\n        });\n        return averagePrices;\n    };\n    const calculateAverageSeasonPrice = (trades)=>{\n        let totalPrice = 0;\n        let totalWeight = 0;\n        trades.forEach((trade)=>{\n            totalPrice += (trade.price + trade.price * (trade.vatRate / 100)) * trade.weight;\n            totalWeight += trade.weight;\n        });\n        return totalWeight > 0 ? totalPrice / totalWeight : 0;\n    };\n    const averagePrices = calculateAveragePrices(allTrades);\n    const averageSeasonPrice = calculateAverageSeasonPrice(allTrades);\n    const [chartData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>{\n        const options = {\n            chart: {\n                type: \"line\"\n            },\n            xaxis: {\n                categories: [\n                    \"Czerwiec\",\n                    \"Lipiec\",\n                    \"Sierpień\",\n                    \"Wrzesień\",\n                    \"Październik\",\n                    \"Listopad\"\n                ]\n            },\n            yaxis: {\n                title: {\n                    text: \"Średnia cena (zł)\"\n                },\n                labels: {\n                    formatter: (value)=>value.toFixed(2)\n                },\n                min: 2,\n                max: 6\n            },\n            stroke: {\n                width: [\n                    3,\n                    2\n                ],\n                curve: \"straight\",\n                dashArray: [\n                    0,\n                    5\n                ]\n            },\n            tooltip: {\n                y: {\n                    formatter: (value)=>value.toFixed(2) + \" zł\"\n                }\n            },\n            colors: [\n                \"#00b000\",\n                \"#0033ff\"\n            ]\n        };\n        const labels = \"Średnia cena papryki\";\n        const seriesData = [\n            {\n                data: averagePrices,\n                name: labels\n            },\n            {\n                data: [\n                    averageSeasonPrice,\n                    averageSeasonPrice,\n                    averageSeasonPrice,\n                    averageSeasonPrice,\n                    averageSeasonPrice,\n                    averageSeasonPrice\n                ],\n                name: \"Średnia cena papryki sezonu\",\n                type: \"line\",\n                stroke: {\n                    width: 2,\n                    curve: \"dot\",\n                    dashArray: [\n                        0,\n                        2\n                    ]\n                }\n            }\n        ];\n        return {\n            series: seriesData,\n            options: options\n        };\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_ChartArea__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        className: \"w-full h-[420px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-full flex flex-col justify-start items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-5\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_apexcharts__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        options: chartData.options,\n                        series: chartData.series,\n                        type: \"line\",\n                        width: 700,\n                        height: 350\n                    }, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                        lineNumber: 132,\n                        columnNumber: 6\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                    lineNumber: 131,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                lineNumber: 129,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                lineNumber: 135,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n        lineNumber: 128,\n        columnNumber: 3\n    }, undefined);\n};\n_s(PepperPrices, \"xzfiwxcfNl3eYk9T7/kjRq/svT4=\");\n_c = PepperPrices;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PepperPrices);\nvar _c;\n$RefreshReg$(_c, \"PepperPrices\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9DaGFydHMvQXZlcmFnZVBlcHBlclByaWNlcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBdUM7QUFDTTtBQUNHO0FBd0JoRCxNQUFNSSxlQUFnQztRQUFDLEVBQUVDLFNBQVMsRUFBRTs7SUFDbkQsTUFBTUMseUJBQXlCLENBQUNDO1FBQy9CLE1BQU1DLGdCQUEwQjtZQUFDO1lBQUc7WUFBRztZQUFHO1lBQUc7WUFBRztTQUFFO1FBQ2xELE1BQU1DLGlCQUEyQjtZQUFDO1lBQUc7WUFBRztZQUFHO1lBQUc7WUFBRztTQUFFO1FBRW5ERixPQUFPRyxRQUFRQyxDQUFBQTtZQUNkLE1BQU1DLFFBQVEsSUFBSUMsS0FBS0YsTUFBTUcsTUFBTUM7WUFFbkMsSUFBSUgsU0FBUyxLQUFLQSxTQUFTLElBQUk7Z0JBQzlCSixhQUFhLENBQUNJLFFBQVEsRUFBRSxJQUFJLENBQUNELE1BQU1LLFFBQVFMLE1BQU1LLFFBQVNMLENBQUFBLE1BQU1NLFVBQVUsR0FBRSxDQUFDLElBQUtOLE1BQU1PO2dCQUN4RlQsY0FBYyxDQUFDRyxRQUFRLEVBQUUsSUFBSUQsTUFBTU87WUFDcEM7UUFDRDtRQUVBLE1BQU1DLGdCQUFnQlgsY0FBY1ksSUFBSSxDQUFDSixPQUFPSztZQUMvQyxNQUFNQyxRQUFRYixjQUFjLENBQUNZLE1BQU07WUFDbkMsT0FBT0MsUUFBUSxJQUFJTixRQUFRTSxRQUFRO1FBQ3BDO1FBRUEsT0FBT0g7SUFDUjtJQUVBLE1BQU1JLDhCQUE4QixDQUFDaEI7UUFDcEMsSUFBSWlCLGFBQWE7UUFDakIsSUFBSUMsY0FBYztRQUVsQmxCLE9BQU9HLFFBQVFDLENBQUFBO1lBQ2RhLGNBQWMsQ0FBQ2IsTUFBTUssUUFBUUwsTUFBTUssUUFBU0wsQ0FBQUEsTUFBTU0sVUFBVSxHQUFFLENBQUMsSUFBS04sTUFBTU87WUFDMUVPLGVBQWVkLE1BQU1PO1FBQ3RCO1FBRUEsT0FBT08sY0FBYyxJQUFJRCxhQUFhQyxjQUFjO0lBQ3JEO0lBRUEsTUFBTU4sZ0JBQWdCYix1QkFBdUJEO0lBQzdDLE1BQU1xQixxQkFBcUJILDRCQUE0QmxCO0lBRXZELE1BQU0sQ0FBQ3NCLFVBQVUsR0FBRzFCLCtDQUFRQSxDQUFrRjtRQUM3RyxNQUFNMkIsVUFBa0M7WUFDdkNDLE9BQU87Z0JBQ05DLE1BQU07WUFDUDtZQUNBQyxPQUFPO2dCQUNOQyxZQUFZO29CQUFDO29CQUFZO29CQUFVO29CQUFZO29CQUFZO29CQUFlO2lCQUFXO1lBQ3RGO1lBQ0FDLE9BQU87Z0JBQ05DLE9BQU87b0JBQ05DLE1BQU07Z0JBQ1A7Z0JBQ0FDLFFBQVE7b0JBQ1BDLFdBQVcsQ0FBQ0MsUUFBa0JBLE1BQU1DLFFBQVE7Z0JBQzdDO2dCQUNBQyxLQUFLO2dCQUNMQyxLQUFLO1lBQ047WUFDQUMsUUFBUTtnQkFDUEMsT0FBTztvQkFBQztvQkFBRztpQkFBRTtnQkFDYkMsT0FBTztnQkFDUEMsV0FBVztvQkFBQztvQkFBRztpQkFBRTtZQUNsQjtZQUNBQyxTQUFTO2dCQUNSQyxHQUFHO29CQUNGVixXQUFXLENBQUNDLFFBQWtCQSxNQUFNQyxRQUFRLEtBQUs7Z0JBQ2xEO1lBQ0Q7WUFDQVMsUUFBUTtnQkFBQztnQkFBVzthQUFVO1FBQy9CO1FBRUEsTUFBTVosU0FBUztRQUVmLE1BQU1hLGFBQWE7WUFDbEI7Z0JBQ0NDLE1BQU0vQjtnQkFDTmdDLE1BQU1mO1lBQ1A7WUFDQTtnQkFDQ2MsTUFBTTtvQkFDTHhCO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7aUJBQ0E7Z0JBQ0R5QixNQUFNO2dCQUNOckIsTUFBTTtnQkFDTlksUUFBUTtvQkFDUEMsT0FBTztvQkFDUEMsT0FBTztvQkFDUEMsV0FBVzt3QkFBQzt3QkFBRztxQkFBRTtnQkFDbEI7WUFDRDtTQUNBO1FBRUQsT0FBTztZQUNOTyxRQUFRSDtZQUNSckIsU0FBU0E7UUFDVjtJQUNEO0lBRUEscUJBQ0MsOERBQUN6QixnRUFBU0E7UUFBQ2tELFdBQVU7OzBCQUNwQiw4REFBQ0M7Z0JBQUlELFdBQVU7MEJBRWQsNEVBQUNDO29CQUFJRCxXQUFVOzhCQUNkLDRFQUFDbkQsd0RBQWNBO3dCQUFDMEIsU0FBU0QsVUFBVUM7d0JBQVN3QixRQUFRekIsVUFBVXlCO3dCQUFRdEIsTUFBSzt3QkFBT2EsT0FBTzt3QkFBS1ksUUFBUTs7Ozs7Ozs7Ozs7Ozs7OzswQkFHeEcsOERBQUNEOzs7Ozs7Ozs7OztBQUdKO0dBL0dNbEQ7S0FBQUE7QUFpSE4sK0RBQWVBLFlBQVlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGFydHMvQXZlcmFnZVBlcHBlclByaWNlcy50c3g/NDU4OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdEFwZXhDaGFydCBmcm9tICdyZWFjdC1hcGV4Y2hhcnRzJ1xuaW1wb3J0IENoYXJ0QXJlYSBmcm9tICdAY29tcG9uZW50cy9VSS9DaGFydEFyZWEnXG5cbmludGVyZmFjZSBUcmFkZU9mUGVwcGVyIHtcblx0X2lkOiBzdHJpbmdcblx0Y3JlYXRvcjoge1xuXHRcdF9pZDogc3RyaW5nXG5cdFx0ZW1haWw6IHN0cmluZ1xuXHRcdHVzZXJuYW1lOiBzdHJpbmdcblx0XHRpbWFnZTogc3RyaW5nXG5cdH1cblx0cG9pbnRPZlNhbGVJZDogc3RyaW5nXG5cdGRhdGU6IHN0cmluZ1xuXHRjbGFzOiBudW1iZXJcblx0Y29sb3I6IG51bWJlclxuXHRwcmljZTogbnVtYmVyXG5cdHdlaWdodDogbnVtYmVyXG5cdHZhdFJhdGU6IG51bWJlclxuXHR0b3RhbFN1bTogbnVtYmVyXG59XG5cbmludGVyZmFjZSBQcm9wcyB7XG5cdGFsbFRyYWRlczogVHJhZGVPZlBlcHBlcltdXG59XG5cbmNvbnN0IFBlcHBlclByaWNlczogUmVhY3QuRkM8UHJvcHM+ID0gKHsgYWxsVHJhZGVzIH0pID0+IHtcblx0Y29uc3QgY2FsY3VsYXRlQXZlcmFnZVByaWNlcyA9ICh0cmFkZXM6IFRyYWRlT2ZQZXBwZXJbXSkgPT4ge1xuXHRcdGNvbnN0IG1vbnRobHlQcmljZXM6IG51bWJlcltdID0gWzAsIDAsIDAsIDAsIDAsIDBdXG5cdFx0Y29uc3QgbW9udGhseVdlaWdodHM6IG51bWJlcltdID0gWzAsIDAsIDAsIDAsIDAsIDBdXG5cblx0XHR0cmFkZXMuZm9yRWFjaCh0cmFkZSA9PiB7XG5cdFx0XHRjb25zdCBtb250aCA9IG5ldyBEYXRlKHRyYWRlLmRhdGUpLmdldE1vbnRoKClcblxuXHRcdFx0aWYgKG1vbnRoID49IDUgJiYgbW9udGggPD0gMTApIHtcblx0XHRcdFx0bW9udGhseVByaWNlc1ttb250aCAtIDVdICs9ICh0cmFkZS5wcmljZSArIHRyYWRlLnByaWNlICogKHRyYWRlLnZhdFJhdGUgLyAxMDApKSAqIHRyYWRlLndlaWdodFxuXHRcdFx0XHRtb250aGx5V2VpZ2h0c1ttb250aCAtIDVdICs9IHRyYWRlLndlaWdodFxuXHRcdFx0fVxuXHRcdH0pXG5cblx0XHRjb25zdCBhdmVyYWdlUHJpY2VzID0gbW9udGhseVByaWNlcy5tYXAoKHByaWNlLCBpbmRleCkgPT4ge1xuXHRcdFx0Y29uc3QgY291bnQgPSBtb250aGx5V2VpZ2h0c1tpbmRleF1cblx0XHRcdHJldHVybiBjb3VudCA+IDAgPyBwcmljZSAvIGNvdW50IDogMFxuXHRcdH0pXG5cblx0XHRyZXR1cm4gYXZlcmFnZVByaWNlc1xuXHR9XG5cblx0Y29uc3QgY2FsY3VsYXRlQXZlcmFnZVNlYXNvblByaWNlID0gKHRyYWRlczogVHJhZGVPZlBlcHBlcltdKTogbnVtYmVyID0+IHtcblx0XHRsZXQgdG90YWxQcmljZSA9IDBcblx0XHRsZXQgdG90YWxXZWlnaHQgPSAwXG5cblx0XHR0cmFkZXMuZm9yRWFjaCh0cmFkZSA9PiB7XG5cdFx0XHR0b3RhbFByaWNlICs9ICh0cmFkZS5wcmljZSArIHRyYWRlLnByaWNlICogKHRyYWRlLnZhdFJhdGUgLyAxMDApKSAqIHRyYWRlLndlaWdodFxuXHRcdFx0dG90YWxXZWlnaHQgKz0gdHJhZGUud2VpZ2h0XG5cdFx0fSlcblxuXHRcdHJldHVybiB0b3RhbFdlaWdodCA+IDAgPyB0b3RhbFByaWNlIC8gdG90YWxXZWlnaHQgOiAwXG5cdH1cblxuXHRjb25zdCBhdmVyYWdlUHJpY2VzID0gY2FsY3VsYXRlQXZlcmFnZVByaWNlcyhhbGxUcmFkZXMpXG5cdGNvbnN0IGF2ZXJhZ2VTZWFzb25QcmljZSA9IGNhbGN1bGF0ZUF2ZXJhZ2VTZWFzb25QcmljZShhbGxUcmFkZXMpXG5cblx0Y29uc3QgW2NoYXJ0RGF0YV0gPSB1c2VTdGF0ZTx7IHNlcmllczogeyBkYXRhOiBudW1iZXJbXTsgbmFtZTogc3RyaW5nIH1bXTsgb3B0aW9uczogQXBleENoYXJ0cy5BcGV4T3B0aW9ucyB9PigoKSA9PiB7XG5cdFx0Y29uc3Qgb3B0aW9uczogQXBleENoYXJ0cy5BcGV4T3B0aW9ucyA9IHtcblx0XHRcdGNoYXJ0OiB7XG5cdFx0XHRcdHR5cGU6ICdsaW5lJyxcblx0XHRcdH0sXG5cdFx0XHR4YXhpczoge1xuXHRcdFx0XHRjYXRlZ29yaWVzOiBbJ0N6ZXJ3aWVjJywgJ0xpcGllYycsICdTaWVycGllxYQnLCAnV3J6ZXNpZcWEJywgJ1Bhxbpkemllcm5paycsICdMaXN0b3BhZCddLFxuXHRcdFx0fSxcblx0XHRcdHlheGlzOiB7XG5cdFx0XHRcdHRpdGxlOiB7XG5cdFx0XHRcdFx0dGV4dDogJ8WacmVkbmlhIGNlbmEgKHrFgiknLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRsYWJlbHM6IHtcblx0XHRcdFx0XHRmb3JtYXR0ZXI6ICh2YWx1ZTogbnVtYmVyKSA9PiB2YWx1ZS50b0ZpeGVkKDIpLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRtaW46IDIsXG5cdFx0XHRcdG1heDogNixcblx0XHRcdH0sXG5cdFx0XHRzdHJva2U6IHtcblx0XHRcdFx0d2lkdGg6IFszLCAyXSxcblx0XHRcdFx0Y3VydmU6ICdzdHJhaWdodCcsXG5cdFx0XHRcdGRhc2hBcnJheTogWzAsIDVdLFxuXHRcdFx0fSxcblx0XHRcdHRvb2x0aXA6IHtcblx0XHRcdFx0eToge1xuXHRcdFx0XHRcdGZvcm1hdHRlcjogKHZhbHVlOiBudW1iZXIpID0+IHZhbHVlLnRvRml4ZWQoMikgKyAnIHrFgicsXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0Y29sb3JzOiBbJyMwMGIwMDAnLCAnIzAwMzNmZiddLFxuXHRcdH1cblxuXHRcdGNvbnN0IGxhYmVscyA9ICfFmnJlZG5pYSBjZW5hIHBhcHJ5a2knXG5cblx0XHRjb25zdCBzZXJpZXNEYXRhID0gW1xuXHRcdFx0e1xuXHRcdFx0XHRkYXRhOiBhdmVyYWdlUHJpY2VzLFxuXHRcdFx0XHRuYW1lOiBsYWJlbHMsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRkYXRhOiBbXG5cdFx0XHRcdFx0YXZlcmFnZVNlYXNvblByaWNlLFxuXHRcdFx0XHRcdGF2ZXJhZ2VTZWFzb25QcmljZSxcblx0XHRcdFx0XHRhdmVyYWdlU2Vhc29uUHJpY2UsXG5cdFx0XHRcdFx0YXZlcmFnZVNlYXNvblByaWNlLFxuXHRcdFx0XHRcdGF2ZXJhZ2VTZWFzb25QcmljZSxcblx0XHRcdFx0XHRhdmVyYWdlU2Vhc29uUHJpY2UsXG5cdFx0XHRcdF0sXG5cdFx0XHRcdG5hbWU6ICfFmnJlZG5pYSBjZW5hIHBhcHJ5a2kgc2V6b251Jyxcblx0XHRcdFx0dHlwZTogJ2xpbmUnLFxuXHRcdFx0XHRzdHJva2U6IHtcblx0XHRcdFx0XHR3aWR0aDogMixcblx0XHRcdFx0XHRjdXJ2ZTogJ2RvdCcsXG5cdFx0XHRcdFx0ZGFzaEFycmF5OiBbMCwgMl0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdF1cblxuXHRcdHJldHVybiB7XG5cdFx0XHRzZXJpZXM6IHNlcmllc0RhdGEsXG5cdFx0XHRvcHRpb25zOiBvcHRpb25zLFxuXHRcdH1cblx0fSlcblxuXHRyZXR1cm4gKFxuXHRcdDxDaGFydEFyZWEgY2xhc3NOYW1lPSd3LWZ1bGwgaC1bNDIwcHhdJz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdoLWZ1bGwgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlcic+XG5cdFx0XHRcdFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbXQtNSc+XG5cdFx0XHRcdFx0PFJlYWN0QXBleENoYXJ0IG9wdGlvbnM9e2NoYXJ0RGF0YS5vcHRpb25zfSBzZXJpZXM9e2NoYXJ0RGF0YS5zZXJpZXN9IHR5cGU9J2xpbmUnIHdpZHRoPXs3MDB9IGhlaWdodD17MzUwfSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdj48L2Rpdj5cblx0XHQ8L0NoYXJ0QXJlYT5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBQZXBwZXJQcmljZXNcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiUmVhY3RBcGV4Q2hhcnQiLCJDaGFydEFyZWEiLCJQZXBwZXJQcmljZXMiLCJhbGxUcmFkZXMiLCJjYWxjdWxhdGVBdmVyYWdlUHJpY2VzIiwidHJhZGVzIiwibW9udGhseVByaWNlcyIsIm1vbnRobHlXZWlnaHRzIiwiZm9yRWFjaCIsInRyYWRlIiwibW9udGgiLCJEYXRlIiwiZGF0ZSIsImdldE1vbnRoIiwicHJpY2UiLCJ2YXRSYXRlIiwid2VpZ2h0IiwiYXZlcmFnZVByaWNlcyIsIm1hcCIsImluZGV4IiwiY291bnQiLCJjYWxjdWxhdGVBdmVyYWdlU2Vhc29uUHJpY2UiLCJ0b3RhbFByaWNlIiwidG90YWxXZWlnaHQiLCJhdmVyYWdlU2Vhc29uUHJpY2UiLCJjaGFydERhdGEiLCJvcHRpb25zIiwiY2hhcnQiLCJ0eXBlIiwieGF4aXMiLCJjYXRlZ29yaWVzIiwieWF4aXMiLCJ0aXRsZSIsInRleHQiLCJsYWJlbHMiLCJmb3JtYXR0ZXIiLCJ2YWx1ZSIsInRvRml4ZWQiLCJtaW4iLCJtYXgiLCJzdHJva2UiLCJ3aWR0aCIsImN1cnZlIiwiZGFzaEFycmF5IiwidG9vbHRpcCIsInkiLCJjb2xvcnMiLCJzZXJpZXNEYXRhIiwiZGF0YSIsIm5hbWUiLCJzZXJpZXMiLCJjbGFzc05hbWUiLCJkaXYiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./components/Charts/AveragePepperPrices.tsx\n"));

/***/ })

});