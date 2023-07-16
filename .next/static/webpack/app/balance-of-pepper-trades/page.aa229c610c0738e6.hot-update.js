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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apexcharts */ \"(app-client)/./node_modules/react-apexcharts/dist/react-apexcharts.min.js\");\n/* harmony import */ var _components_UI_ChartArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/UI/ChartArea */ \"(app-client)/./components/UI/ChartArea.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst PepperPrices = (param)=>{\n    let { allTrades } = param;\n    _s();\n    const calculateAveragePrices = (trades)=>{\n        const monthlyPrices = [\n            0,\n            0,\n            0,\n            0,\n            0,\n            0\n        ];\n        const monthlyWeights = [\n            0,\n            0,\n            0,\n            0,\n            0,\n            0\n        ];\n        trades.forEach((trade)=>{\n            const month = new Date(trade.date).getMonth();\n            if (month >= 5 && month <= 10) {\n                monthlyPrices[month - 5] += (trade.price + trade.price * (trade.vatRate / 100)) * trade.weight;\n                monthlyWeights[month - 5] += trade.weight;\n            }\n        });\n        const averagePrices = monthlyPrices.map((price, index)=>{\n            const count = monthlyWeights[index];\n            return count > 0 ? price / count : 0;\n        });\n        return averagePrices;\n    };\n    const calculateAverageSeasonPrice = (trades)=>{\n        let totalPrice = 0;\n        let totalWeight = 0;\n        trades.forEach((trade)=>{\n            totalPrice += (trade.price + trade.price * (trade.vatRate / 100)) * trade.weight;\n            totalWeight += trade.weight;\n        });\n        return totalWeight > 0 ? totalPrice / totalWeight : 0;\n    };\n    const averagePrices = calculateAveragePrices(allTrades);\n    const averageSeasonPrice = calculateAverageSeasonPrice(allTrades);\n    const [chartData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>{\n        const options = {\n            chart: {\n                type: \"line\"\n            },\n            xaxis: {\n                categories: [\n                    \"Czerwiec\",\n                    \"Lipiec\",\n                    \"Sierpień\",\n                    \"Wrzesień\",\n                    \"Październik\",\n                    \"Listopad\"\n                ]\n            },\n            yaxis: {\n                title: {\n                    text: \"Średnia cena (zł)\"\n                },\n                labels: {\n                    formatter: (value)=>value.toFixed(2)\n                },\n                min: 2,\n                max: 6\n            },\n            stroke: {\n                curve: \"smooth\"\n            },\n            tooltip: {\n                y: {\n                    formatter: (value)=>value.toFixed(2) + \" zł\"\n                }\n            },\n            colors: [\n                \"#00b000\",\n                \"#0033ff\"\n            ]\n        };\n        const labels = \"Średnia cena papryki\";\n        const seriesData = [\n            {\n                data: averagePrices,\n                name: labels\n            },\n            {\n                data: [\n                    averageSeasonPrice,\n                    averageSeasonPrice,\n                    averageSeasonPrice,\n                    averageSeasonPrice,\n                    averageSeasonPrice,\n                    averageSeasonPrice\n                ],\n                name: \"Średnia cena papryki sezonu\",\n                type: \"line\",\n                stroke: {\n                    width: 2,\n                    dashArray: [\n                        4\n                    ]\n                }\n            }\n        ];\n        return {\n            series: seriesData,\n            options: options\n        };\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_ChartArea__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        className: \"w-full h-[420px]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: \"chart\",\n            className: \"h-full flex flex-col justify-start items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"font-semibold text-center\",\n                    children: \"Kształtowanie się cen papryki na przestrzeni miesięcy sezonu\"\n                }, void 0, false, {\n                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                    lineNumber: 120,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-5\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_apexcharts__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        options: chartData.options,\n                        series: chartData.series,\n                        type: \"line\",\n                        width: 500,\n                        height: 350\n                    }, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                        lineNumber: 122,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                    lineNumber: 121,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n            lineNumber: 119,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n        lineNumber: 118,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PepperPrices, \"1KgOwm0ckqttqJdk2tczjiRLVmY=\");\n_c = PepperPrices;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PepperPrices);\nvar _c;\n$RefreshReg$(_c, \"PepperPrices\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9DaGFydHMvQXZlcmFnZVBlcHBlclByaWNlcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBdUM7QUFDTTtBQUNHO0FBd0JoRCxNQUFNSSxlQUFnQztRQUFDLEVBQUVDLFNBQVMsRUFBRTs7SUFDbEQsTUFBTUMseUJBQXlCLENBQUNDO1FBQzlCLE1BQU1DLGdCQUEwQjtZQUFDO1lBQUc7WUFBRztZQUFHO1lBQUc7WUFBRztTQUFFO1FBQ2xELE1BQU1DLGlCQUEyQjtZQUFDO1lBQUc7WUFBRztZQUFHO1lBQUc7WUFBRztTQUFFO1FBRW5ERixPQUFPRyxRQUFRQyxDQUFBQTtZQUNiLE1BQU1DLFFBQVEsSUFBSUMsS0FBS0YsTUFBTUcsTUFBTUM7WUFFbkMsSUFBSUgsU0FBUyxLQUFLQSxTQUFTLElBQUk7Z0JBQzdCSixhQUFhLENBQUNJLFFBQVEsRUFBRSxJQUFJLENBQUNELE1BQU1LLFFBQVFMLE1BQU1LLFFBQVNMLENBQUFBLE1BQU1NLFVBQVUsR0FBRSxDQUFDLElBQUtOLE1BQU1PO2dCQUN4RlQsY0FBYyxDQUFDRyxRQUFRLEVBQUUsSUFBSUQsTUFBTU87WUFDckM7UUFDRjtRQUVBLE1BQU1DLGdCQUFnQlgsY0FBY1ksSUFBSSxDQUFDSixPQUFPSztZQUM5QyxNQUFNQyxRQUFRYixjQUFjLENBQUNZLE1BQU07WUFDbkMsT0FBT0MsUUFBUSxJQUFJTixRQUFRTSxRQUFRO1FBQ3JDO1FBRUEsT0FBT0g7SUFDVDtJQUVBLE1BQU1JLDhCQUE4QixDQUFDaEI7UUFDbkMsSUFBSWlCLGFBQWE7UUFDakIsSUFBSUMsY0FBYztRQUVsQmxCLE9BQU9HLFFBQVFDLENBQUFBO1lBQ2JhLGNBQWMsQ0FBQ2IsTUFBTUssUUFBUUwsTUFBTUssUUFBU0wsQ0FBQUEsTUFBTU0sVUFBVSxHQUFFLENBQUMsSUFBS04sTUFBTU87WUFDMUVPLGVBQWVkLE1BQU1PO1FBQ3ZCO1FBRUEsT0FBT08sY0FBYyxJQUFJRCxhQUFhQyxjQUFjO0lBQ3REO0lBRUEsTUFBTU4sZ0JBQWdCYix1QkFBdUJEO0lBQzdDLE1BQU1xQixxQkFBcUJILDRCQUE0QmxCO0lBRXZELE1BQU0sQ0FBQ3NCLFVBQVUsR0FBRzFCLCtDQUFRQSxDQUFrRjtRQUM1RyxNQUFNMkIsVUFBa0M7WUFDdENDLE9BQU87Z0JBQ0xDLE1BQU07WUFDUjtZQUNBQyxPQUFPO2dCQUNMQyxZQUFZO29CQUFDO29CQUFZO29CQUFVO29CQUFZO29CQUFZO29CQUFlO2lCQUFXO1lBQ3ZGO1lBQ0FDLE9BQU87Z0JBQ0xDLE9BQU87b0JBQ0xDLE1BQU07Z0JBQ1I7Z0JBQ0FDLFFBQVE7b0JBQ05DLFdBQVcsQ0FBQ0MsUUFBa0JBLE1BQU1DLFFBQVE7Z0JBQzlDO2dCQUNBQyxLQUFLO2dCQUNMQyxLQUFLO1lBQ1A7WUFDQUMsUUFBUTtnQkFDTkMsT0FBTztZQUNUO1lBQ0FDLFNBQVM7Z0JBQ1BDLEdBQUc7b0JBQ0RSLFdBQVcsQ0FBQ0MsUUFBa0JBLE1BQU1DLFFBQVEsS0FBSztnQkFDbkQ7WUFDRjtZQUNBTyxRQUFRO2dCQUFDO2dCQUFXO2FBQVU7UUFDaEM7UUFFQSxNQUFNVixTQUFTO1FBRWYsTUFBTVcsYUFBYTtZQUNqQjtnQkFDRUMsTUFBTTdCO2dCQUNOOEIsTUFBTWI7WUFDUjtZQUNBO2dCQUNFWSxNQUFNO29CQUFDdEI7b0JBQW9CQTtvQkFBb0JBO29CQUFvQkE7b0JBQW9CQTtvQkFBb0JBO2lCQUFtQjtnQkFDOUh1QixNQUFNO2dCQUNObkIsTUFBTTtnQkFDTlksUUFBUTtvQkFDTlEsT0FBTztvQkFDUEMsV0FBVzt3QkFBQztxQkFBRTtnQkFDaEI7WUFDRjtTQUNEO1FBRUQsT0FBTztZQUNMQyxRQUFRTDtZQUNSbkIsU0FBU0E7UUFDWDtJQUNGO0lBRUEscUJBQ0UsOERBQUN6QixnRUFBU0E7UUFBQ2tELFdBQVU7a0JBQ25CLDRFQUFDQztZQUFJQyxJQUFHO1lBQVFGLFdBQVU7OzhCQUN4Qiw4REFBQ0c7b0JBQUVILFdBQVU7OEJBQTRCOzs7Ozs7OEJBQ3pDLDhEQUFDQztvQkFBSUQsV0FBVTs4QkFDYiw0RUFBQ25ELHdEQUFjQTt3QkFBQzBCLFNBQVNELFVBQVVDO3dCQUFTd0IsUUFBUXpCLFVBQVV5Qjt3QkFBUXRCLE1BQUs7d0JBQU9vQixPQUFPO3dCQUFLTyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2hIO0dBcEdNckQ7S0FBQUE7QUFzR04sK0RBQWVBLFlBQVlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGFydHMvQXZlcmFnZVBlcHBlclByaWNlcy50c3g/NDU4OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdEFwZXhDaGFydCBmcm9tICdyZWFjdC1hcGV4Y2hhcnRzJ1xuaW1wb3J0IENoYXJ0QXJlYSBmcm9tICdAY29tcG9uZW50cy9VSS9DaGFydEFyZWEnXG5cbmludGVyZmFjZSBUcmFkZU9mUGVwcGVyIHtcbiAgX2lkOiBzdHJpbmdcbiAgY3JlYXRvcjoge1xuICAgIF9pZDogc3RyaW5nXG4gICAgZW1haWw6IHN0cmluZ1xuICAgIHVzZXJuYW1lOiBzdHJpbmdcbiAgICBpbWFnZTogc3RyaW5nXG4gIH1cbiAgcG9pbnRPZlNhbGVJZDogc3RyaW5nXG4gIGRhdGU6IHN0cmluZ1xuICBjbGFzOiBudW1iZXJcbiAgY29sb3I6IG51bWJlclxuICBwcmljZTogbnVtYmVyXG4gIHdlaWdodDogbnVtYmVyXG4gIHZhdFJhdGU6IG51bWJlclxuICB0b3RhbFN1bTogbnVtYmVyXG59XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGFsbFRyYWRlczogVHJhZGVPZlBlcHBlcltdXG59XG5cbmNvbnN0IFBlcHBlclByaWNlczogUmVhY3QuRkM8UHJvcHM+ID0gKHsgYWxsVHJhZGVzIH0pID0+IHtcbiAgY29uc3QgY2FsY3VsYXRlQXZlcmFnZVByaWNlcyA9ICh0cmFkZXM6IFRyYWRlT2ZQZXBwZXJbXSkgPT4ge1xuICAgIGNvbnN0IG1vbnRobHlQcmljZXM6IG51bWJlcltdID0gWzAsIDAsIDAsIDAsIDAsIDBdXG4gICAgY29uc3QgbW9udGhseVdlaWdodHM6IG51bWJlcltdID0gWzAsIDAsIDAsIDAsIDAsIDBdXG5cbiAgICB0cmFkZXMuZm9yRWFjaCh0cmFkZSA9PiB7XG4gICAgICBjb25zdCBtb250aCA9IG5ldyBEYXRlKHRyYWRlLmRhdGUpLmdldE1vbnRoKClcblxuICAgICAgaWYgKG1vbnRoID49IDUgJiYgbW9udGggPD0gMTApIHtcbiAgICAgICAgbW9udGhseVByaWNlc1ttb250aCAtIDVdICs9ICh0cmFkZS5wcmljZSArIHRyYWRlLnByaWNlICogKHRyYWRlLnZhdFJhdGUgLyAxMDApKSAqIHRyYWRlLndlaWdodFxuICAgICAgICBtb250aGx5V2VpZ2h0c1ttb250aCAtIDVdICs9IHRyYWRlLndlaWdodFxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBhdmVyYWdlUHJpY2VzID0gbW9udGhseVByaWNlcy5tYXAoKHByaWNlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgY291bnQgPSBtb250aGx5V2VpZ2h0c1tpbmRleF1cbiAgICAgIHJldHVybiBjb3VudCA+IDAgPyBwcmljZSAvIGNvdW50IDogMFxuICAgIH0pXG5cbiAgICByZXR1cm4gYXZlcmFnZVByaWNlc1xuICB9XG5cbiAgY29uc3QgY2FsY3VsYXRlQXZlcmFnZVNlYXNvblByaWNlID0gKHRyYWRlczogVHJhZGVPZlBlcHBlcltdKTogbnVtYmVyID0+IHtcbiAgICBsZXQgdG90YWxQcmljZSA9IDBcbiAgICBsZXQgdG90YWxXZWlnaHQgPSAwXG5cbiAgICB0cmFkZXMuZm9yRWFjaCh0cmFkZSA9PiB7XG4gICAgICB0b3RhbFByaWNlICs9ICh0cmFkZS5wcmljZSArIHRyYWRlLnByaWNlICogKHRyYWRlLnZhdFJhdGUgLyAxMDApKSAqIHRyYWRlLndlaWdodFxuICAgICAgdG90YWxXZWlnaHQgKz0gdHJhZGUud2VpZ2h0XG4gICAgfSlcblxuICAgIHJldHVybiB0b3RhbFdlaWdodCA+IDAgPyB0b3RhbFByaWNlIC8gdG90YWxXZWlnaHQgOiAwXG4gIH1cblxuICBjb25zdCBhdmVyYWdlUHJpY2VzID0gY2FsY3VsYXRlQXZlcmFnZVByaWNlcyhhbGxUcmFkZXMpXG4gIGNvbnN0IGF2ZXJhZ2VTZWFzb25QcmljZSA9IGNhbGN1bGF0ZUF2ZXJhZ2VTZWFzb25QcmljZShhbGxUcmFkZXMpXG5cbiAgY29uc3QgW2NoYXJ0RGF0YV0gPSB1c2VTdGF0ZTx7IHNlcmllczogeyBkYXRhOiBudW1iZXJbXTsgbmFtZTogc3RyaW5nIH1bXTsgb3B0aW9uczogQXBleENoYXJ0cy5BcGV4T3B0aW9ucyB9PigoKSA9PiB7XG4gICAgY29uc3Qgb3B0aW9uczogQXBleENoYXJ0cy5BcGV4T3B0aW9ucyA9IHtcbiAgICAgIGNoYXJ0OiB7XG4gICAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgIH0sXG4gICAgICB4YXhpczoge1xuICAgICAgICBjYXRlZ29yaWVzOiBbJ0N6ZXJ3aWVjJywgJ0xpcGllYycsICdTaWVycGllxYQnLCAnV3J6ZXNpZcWEJywgJ1Bhxbpkemllcm5paycsICdMaXN0b3BhZCddLFxuICAgICAgfSxcbiAgICAgIHlheGlzOiB7XG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgdGV4dDogJ8WacmVkbmlhIGNlbmEgKHrFgiknLFxuICAgICAgICB9LFxuICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICBmb3JtYXR0ZXI6ICh2YWx1ZTogbnVtYmVyKSA9PiB2YWx1ZS50b0ZpeGVkKDIpLFxuICAgICAgICB9LFxuICAgICAgICBtaW46IDIsXG4gICAgICAgIG1heDogNixcbiAgICAgIH0sXG4gICAgICBzdHJva2U6IHtcbiAgICAgICAgY3VydmU6ICdzbW9vdGgnLFxuICAgICAgfSxcbiAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgeToge1xuICAgICAgICAgIGZvcm1hdHRlcjogKHZhbHVlOiBudW1iZXIpID0+IHZhbHVlLnRvRml4ZWQoMikgKyAnIHrFgicsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgY29sb3JzOiBbJyMwMGIwMDAnLCAnIzAwMzNmZiddLFxuICAgIH1cblxuICAgIGNvbnN0IGxhYmVscyA9ICfFmnJlZG5pYSBjZW5hIHBhcHJ5a2knXG5cbiAgICBjb25zdCBzZXJpZXNEYXRhID0gW1xuICAgICAge1xuICAgICAgICBkYXRhOiBhdmVyYWdlUHJpY2VzLFxuICAgICAgICBuYW1lOiBsYWJlbHMsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBkYXRhOiBbYXZlcmFnZVNlYXNvblByaWNlLCBhdmVyYWdlU2Vhc29uUHJpY2UsIGF2ZXJhZ2VTZWFzb25QcmljZSwgYXZlcmFnZVNlYXNvblByaWNlLCBhdmVyYWdlU2Vhc29uUHJpY2UsIGF2ZXJhZ2VTZWFzb25QcmljZV0sXG4gICAgICAgIG5hbWU6ICfFmnJlZG5pYSBjZW5hIHBhcHJ5a2kgc2V6b251JyxcbiAgICAgICAgdHlwZTogJ2xpbmUnLFxuICAgICAgICBzdHJva2U6IHtcbiAgICAgICAgICB3aWR0aDogMiwgLy8gU3plcm9rb8WbxIcgbGluaWlcbiAgICAgICAgICBkYXNoQXJyYXk6IFs0XSwgLy8gU3R5bCBsaW5paSBwcnplcnl3YW5lalxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdXG5cbiAgICByZXR1cm4ge1xuICAgICAgc2VyaWVzOiBzZXJpZXNEYXRhLFxuICAgICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8Q2hhcnRBcmVhIGNsYXNzTmFtZT0ndy1mdWxsIGgtWzQyMHB4XSc+XG4gICAgICA8ZGl2IGlkPSdjaGFydCcgY2xhc3NOYW1lPSdoLWZ1bGwgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlcic+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nZm9udC1zZW1pYm9sZCB0ZXh0LWNlbnRlcic+S3N6dGHFgnRvd2FuaWUgc2nEmSBjZW4gcGFwcnlraSBuYSBwcnplc3RyemVuaSBtaWVzacSZY3kgc2V6b251PC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXQtNSc+XG4gICAgICAgICAgPFJlYWN0QXBleENoYXJ0IG9wdGlvbnM9e2NoYXJ0RGF0YS5vcHRpb25zfSBzZXJpZXM9e2NoYXJ0RGF0YS5zZXJpZXN9IHR5cGU9J2xpbmUnIHdpZHRoPXs1MDB9IGhlaWdodD17MzUwfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvQ2hhcnRBcmVhPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBlcHBlclByaWNlc1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJSZWFjdEFwZXhDaGFydCIsIkNoYXJ0QXJlYSIsIlBlcHBlclByaWNlcyIsImFsbFRyYWRlcyIsImNhbGN1bGF0ZUF2ZXJhZ2VQcmljZXMiLCJ0cmFkZXMiLCJtb250aGx5UHJpY2VzIiwibW9udGhseVdlaWdodHMiLCJmb3JFYWNoIiwidHJhZGUiLCJtb250aCIsIkRhdGUiLCJkYXRlIiwiZ2V0TW9udGgiLCJwcmljZSIsInZhdFJhdGUiLCJ3ZWlnaHQiLCJhdmVyYWdlUHJpY2VzIiwibWFwIiwiaW5kZXgiLCJjb3VudCIsImNhbGN1bGF0ZUF2ZXJhZ2VTZWFzb25QcmljZSIsInRvdGFsUHJpY2UiLCJ0b3RhbFdlaWdodCIsImF2ZXJhZ2VTZWFzb25QcmljZSIsImNoYXJ0RGF0YSIsIm9wdGlvbnMiLCJjaGFydCIsInR5cGUiLCJ4YXhpcyIsImNhdGVnb3JpZXMiLCJ5YXhpcyIsInRpdGxlIiwidGV4dCIsImxhYmVscyIsImZvcm1hdHRlciIsInZhbHVlIiwidG9GaXhlZCIsIm1pbiIsIm1heCIsInN0cm9rZSIsImN1cnZlIiwidG9vbHRpcCIsInkiLCJjb2xvcnMiLCJzZXJpZXNEYXRhIiwiZGF0YSIsIm5hbWUiLCJ3aWR0aCIsImRhc2hBcnJheSIsInNlcmllcyIsImNsYXNzTmFtZSIsImRpdiIsImlkIiwicCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/Charts/AveragePepperPrices.tsx\n"));

/***/ })

});