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

/***/ "(app-client)/./components/Charts/MonthlyPointOfSalesTrades.tsx":
/*!*********************************************************!*\
  !*** ./components/Charts/MonthlyPointOfSalesTrades.tsx ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apexcharts */ \"(app-client)/./node_modules/react-apexcharts/dist/react-apexcharts.min.js\");\n/* harmony import */ var _components_UI_ChartArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/UI/ChartArea */ \"(app-client)/./components/UI/ChartArea.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst PepperWeightsBySeller = (param)=>{\n    let { allTrades } = param;\n    _s();\n    const calculateWeightsBySellerAndMonth = (trades)=>{\n        const weightsBySellerAndMonth = {};\n        trades.forEach((trade)=>{\n            const month = new Date(trade.date).getMonth();\n            const sellerId = trade.pointOfSaleId;\n            if (month >= 5 && month <= 10) {\n                if (weightsBySellerAndMonth[sellerId]) {\n                    weightsBySellerAndMonth[sellerId][month - 5] += trade.weight;\n                } else {\n                    weightsBySellerAndMonth[sellerId] = [\n                        0,\n                        0,\n                        0,\n                        0,\n                        0,\n                        0\n                    ];\n                    weightsBySellerAndMonth[sellerId][month - 5] = trade.weight;\n                }\n            }\n        });\n        return weightsBySellerAndMonth;\n    };\n    const weightsBySellerAndMonth = calculateWeightsBySellerAndMonth(allTrades);\n    const sellers = Object.keys(weightsBySellerAndMonth);\n    const seriesData = sellers.map((sellerId)=>{\n        const sellerWeights = weightsBySellerAndMonth[sellerId];\n        return {\n            name: sellerId,\n            data: sellerWeights\n        };\n    });\n    const [chartData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>{\n        const options = {\n            chart: {\n                type: \"bar\",\n                height: 350,\n                stacked: true\n            },\n            plotOptions: {\n                bar: {\n                    horizontal: true,\n                    dataLabels: {\n                        total: {\n                            enabled: true,\n                            offsetX: 0,\n                            style: {\n                                fontSize: \"13px\",\n                                fontWeight: 900\n                            }\n                        }\n                    }\n                }\n            },\n            stroke: {\n                width: 1,\n                colors: [\n                    \"#fff\"\n                ]\n            },\n            title: {\n                text: \"Punkty sprzedaży\"\n            },\n            xaxis: {\n                categories: [\n                    \"Czerwiec\",\n                    \"Lipiec\",\n                    \"Sierpień\",\n                    \"Wrzesień\",\n                    \"Październik\",\n                    \"Listopad\"\n                ],\n                labels: {\n                    formatter: (value)=>parseInt(value).toString()\n                }\n            },\n            yaxis: {\n                title: {\n                    text: undefined\n                }\n            },\n            tooltip: {\n                y: {\n                    formatter: (val)=>val.toFixed(0) + \"kg\"\n                }\n            },\n            fill: {\n                opacity: 1\n            },\n            legend: {\n                position: \"top\",\n                horizontalAlign: \"left\",\n                offsetX: 40\n            }\n        };\n        return {\n            series: seriesData,\n            options: options\n        };\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_ChartArea__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        className: \"w-full h-[420px]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: \"chart\",\n            className: \"h-full flex flex-col justify-start items-center overflow-x-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"font-semibold text-center\",\n                    children: \"Miesięczny rozkład sprzedaży papryki w odniesieniu do punkt\\xf3w sprzedaży\"\n                }, void 0, false, {\n                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/MonthlyPointOfSalesTrades.tsx\",\n                    lineNumber: 123,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-5\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_apexcharts__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        options: chartData.options,\n                        series: chartData.series,\n                        type: \"bar\",\n                        height: 350,\n                        width: 1100\n                    }, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/MonthlyPointOfSalesTrades.tsx\",\n                        lineNumber: 125,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/MonthlyPointOfSalesTrades.tsx\",\n                    lineNumber: 124,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/MonthlyPointOfSalesTrades.tsx\",\n            lineNumber: 122,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/MonthlyPointOfSalesTrades.tsx\",\n        lineNumber: 121,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PepperWeightsBySeller, \"o/02nvG0N4kOnlVX9EH9w9w7EbE=\");\n_c = PepperWeightsBySeller;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PepperWeightsBySeller);\nvar _c;\n$RefreshReg$(_c, \"PepperWeightsBySeller\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9DaGFydHMvTW9udGhseVBvaW50T2ZTYWxlc1RyYWRlcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBdUM7QUFDTTtBQUNHO0FBd0JoRCxNQUFNSSx3QkFBeUM7UUFBQyxFQUFFQyxTQUFTLEVBQUU7O0lBQzNELE1BQU1DLG1DQUFtQyxDQUFDQztRQUN4QyxNQUFNQywwQkFBNEQsQ0FBQztRQUVuRUQsT0FBT0UsUUFBUUMsQ0FBQUE7WUFDYixNQUFNQyxRQUFRLElBQUlDLEtBQUtGLE1BQU1HLE1BQU1DO1lBQ25DLE1BQU1DLFdBQVdMLE1BQU1NO1lBRXZCLElBQUlMLFNBQVMsS0FBS0EsU0FBUyxJQUFJO2dCQUM3QixJQUFJSCx1QkFBdUIsQ0FBQ08sU0FBUyxFQUFFO29CQUNyQ1AsdUJBQXVCLENBQUNPLFNBQVMsQ0FBQ0osUUFBUSxFQUFFLElBQUlELE1BQU1PO2dCQUN4RCxPQUFPO29CQUNMVCx1QkFBdUIsQ0FBQ08sU0FBUyxHQUFHO3dCQUFDO3dCQUFHO3dCQUFHO3dCQUFHO3dCQUFHO3dCQUFHO3FCQUFFO29CQUN0RFAsdUJBQXVCLENBQUNPLFNBQVMsQ0FBQ0osUUFBUSxFQUFFLEdBQUdELE1BQU1PO2dCQUN2RDtZQUNGO1FBQ0Y7UUFFQSxPQUFPVDtJQUNUO0lBRUEsTUFBTUEsMEJBQTBCRixpQ0FBaUNEO0lBRWpFLE1BQU1hLFVBQVVDLE9BQU9DLEtBQUtaO0lBQzVCLE1BQU1hLGFBQWFILFFBQVFJLElBQUlQLENBQUFBO1FBQzdCLE1BQU1RLGdCQUFnQmYsdUJBQXVCLENBQUNPLFNBQVM7UUFDdkQsT0FBTztZQUNMUyxNQUFNVDtZQUNOVSxNQUFNRjtRQUNSO0lBQ0Y7SUFFQSxNQUFNLENBQUNHLFVBQVUsR0FBR3pCLCtDQUFRQSxDQUFrRjtRQUM1RyxNQUFNMEIsVUFBa0M7WUFDdENDLE9BQU87Z0JBQ0xDLE1BQU07Z0JBQ05DLFFBQVE7Z0JBQ1JDLFNBQVM7WUFDWDtZQUNBQyxhQUFhO2dCQUNYQyxLQUFLO29CQUNIQyxZQUFZO29CQUNaQyxZQUFZO3dCQUNWQyxPQUFPOzRCQUNMQyxTQUFTOzRCQUNUQyxTQUFTOzRCQUNUQyxPQUFPO2dDQUNMQyxVQUFVO2dDQUNWQyxZQUFZOzRCQUNkO3dCQUNGO29CQUNGO2dCQUNGO1lBQ0Y7WUFDQUMsUUFBUTtnQkFDTkMsT0FBTztnQkFDUEMsUUFBUTtvQkFBQztpQkFBTztZQUNsQjtZQUNBQyxPQUFPO2dCQUNMQyxNQUFNO1lBQ1I7WUFDQUMsT0FBTztnQkFDTEMsWUFBWTtvQkFBQztvQkFBWTtvQkFBVTtvQkFBWTtvQkFBWTtvQkFBZTtpQkFBVztnQkFDckZDLFFBQVE7b0JBQ05DLFdBQVcsQ0FBQ0MsUUFBa0IsU0FBVUEsT0FBUUU7Z0JBQ2xEO1lBQ0Y7WUFDQUMsT0FBTztnQkFDTFQsT0FBTztvQkFDTEMsTUFBTVM7Z0JBQ1I7WUFDRjtZQUNBQyxTQUFTO2dCQUNQQyxHQUFHO29CQUNEUCxXQUFXLENBQUNRLE1BQWdCQSxJQUFJQyxRQUFRLEtBQUs7Z0JBQy9DO1lBQ0Y7WUFDQUMsTUFBTTtnQkFDSkMsU0FBUztZQUNYO1lBQ0FDLFFBQVE7Z0JBQ05DLFVBQVU7Z0JBQ1ZDLGlCQUFpQjtnQkFDakIxQixTQUFTO1lBQ1g7UUFDRjtRQUVBLE9BQU87WUFDTDJCLFFBQVE1QztZQUNSTSxTQUFTQTtRQUNYO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ3hCLGdFQUFTQTtRQUFDK0QsV0FBVTtrQkFDbkIsNEVBQUNDO1lBQUlDLElBQUc7WUFBUUYsV0FBVTs7OEJBQ3hCLDhEQUFDRztvQkFBRUgsV0FBVTs4QkFBNEI7Ozs7Ozs4QkFDekMsOERBQUNDO29CQUFJRCxXQUFVOzhCQUNiLDRFQUFDaEUsd0RBQWNBO3dCQUFDeUIsU0FBU0QsVUFBVUM7d0JBQVNzQyxRQUFRdkMsVUFBVXVDO3dCQUFRcEMsTUFBSzt3QkFBTUMsUUFBUTt3QkFBS2EsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUsvRztHQXZHTXZDO0tBQUFBO0FBeUdOLCtEQUFlQSxxQkFBcUJBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGFydHMvTW9udGhseVBvaW50T2ZTYWxlc1RyYWRlcy50c3g/MTcxNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdEFwZXhDaGFydCBmcm9tICdyZWFjdC1hcGV4Y2hhcnRzJ1xuaW1wb3J0IENoYXJ0QXJlYSBmcm9tICdAY29tcG9uZW50cy9VSS9DaGFydEFyZWEnXG5cbmludGVyZmFjZSBUcmFkZU9mUGVwcGVyIHtcbiAgX2lkOiBzdHJpbmdcbiAgY3JlYXRvcjoge1xuICAgIF9pZDogc3RyaW5nXG4gICAgZW1haWw6IHN0cmluZ1xuICAgIHVzZXJuYW1lOiBzdHJpbmdcbiAgICBpbWFnZTogc3RyaW5nXG4gIH1cbiAgcG9pbnRPZlNhbGVJZDogc3RyaW5nXG4gIGRhdGU6IHN0cmluZ1xuICBjbGFzOiBudW1iZXJcbiAgY29sb3I6IG51bWJlclxuICBwcmljZTogbnVtYmVyXG4gIHdlaWdodDogbnVtYmVyXG4gIHZhdFJhdGU6IG51bWJlclxuICB0b3RhbFN1bTogbnVtYmVyXG59XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGFsbFRyYWRlczogVHJhZGVPZlBlcHBlcltdXG59XG5cbmNvbnN0IFBlcHBlcldlaWdodHNCeVNlbGxlcjogUmVhY3QuRkM8UHJvcHM+ID0gKHsgYWxsVHJhZGVzIH0pID0+IHtcbiAgY29uc3QgY2FsY3VsYXRlV2VpZ2h0c0J5U2VsbGVyQW5kTW9udGggPSAodHJhZGVzOiBUcmFkZU9mUGVwcGVyW10pID0+IHtcbiAgICBjb25zdCB3ZWlnaHRzQnlTZWxsZXJBbmRNb250aDogeyBbc2VsbGVySWQ6IHN0cmluZ106IG51bWJlcltdIH0gPSB7fVxuXG4gICAgdHJhZGVzLmZvckVhY2godHJhZGUgPT4ge1xuICAgICAgY29uc3QgbW9udGggPSBuZXcgRGF0ZSh0cmFkZS5kYXRlKS5nZXRNb250aCgpXG4gICAgICBjb25zdCBzZWxsZXJJZCA9IHRyYWRlLnBvaW50T2ZTYWxlSWRcblxuICAgICAgaWYgKG1vbnRoID49IDUgJiYgbW9udGggPD0gMTApIHtcbiAgICAgICAgaWYgKHdlaWdodHNCeVNlbGxlckFuZE1vbnRoW3NlbGxlcklkXSkge1xuICAgICAgICAgIHdlaWdodHNCeVNlbGxlckFuZE1vbnRoW3NlbGxlcklkXVttb250aCAtIDVdICs9IHRyYWRlLndlaWdodFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdlaWdodHNCeVNlbGxlckFuZE1vbnRoW3NlbGxlcklkXSA9IFswLCAwLCAwLCAwLCAwLCAwXVxuICAgICAgICAgIHdlaWdodHNCeVNlbGxlckFuZE1vbnRoW3NlbGxlcklkXVttb250aCAtIDVdID0gdHJhZGUud2VpZ2h0XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIHdlaWdodHNCeVNlbGxlckFuZE1vbnRoXG4gIH1cblxuICBjb25zdCB3ZWlnaHRzQnlTZWxsZXJBbmRNb250aCA9IGNhbGN1bGF0ZVdlaWdodHNCeVNlbGxlckFuZE1vbnRoKGFsbFRyYWRlcylcblxuICBjb25zdCBzZWxsZXJzID0gT2JqZWN0LmtleXMod2VpZ2h0c0J5U2VsbGVyQW5kTW9udGgpXG4gIGNvbnN0IHNlcmllc0RhdGEgPSBzZWxsZXJzLm1hcChzZWxsZXJJZCA9PiB7XG4gICAgY29uc3Qgc2VsbGVyV2VpZ2h0cyA9IHdlaWdodHNCeVNlbGxlckFuZE1vbnRoW3NlbGxlcklkXVxuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiBzZWxsZXJJZCxcbiAgICAgIGRhdGE6IHNlbGxlcldlaWdodHMsXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IFtjaGFydERhdGFdID0gdXNlU3RhdGU8eyBzZXJpZXM6IHsgZGF0YTogbnVtYmVyW107IG5hbWU6IHN0cmluZyB9W107IG9wdGlvbnM6IEFwZXhDaGFydHMuQXBleE9wdGlvbnMgfT4oKCkgPT4ge1xuICAgIGNvbnN0IG9wdGlvbnM6IEFwZXhDaGFydHMuQXBleE9wdGlvbnMgPSB7XG4gICAgICBjaGFydDoge1xuICAgICAgICB0eXBlOiAnYmFyJyxcbiAgICAgICAgaGVpZ2h0OiAzNTAsXG4gICAgICAgIHN0YWNrZWQ6IHRydWUsXG4gICAgICB9LFxuICAgICAgcGxvdE9wdGlvbnM6IHtcbiAgICAgICAgYmFyOiB7XG4gICAgICAgICAgaG9yaXpvbnRhbDogdHJ1ZSxcbiAgICAgICAgICBkYXRhTGFiZWxzOiB7XG4gICAgICAgICAgICB0b3RhbDoge1xuICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICBvZmZzZXRYOiAwLFxuICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTNweCcsXG4gICAgICAgICAgICAgICAgZm9udFdlaWdodDogOTAwLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHN0cm9rZToge1xuICAgICAgICB3aWR0aDogMSxcbiAgICAgICAgY29sb3JzOiBbJyNmZmYnXSxcbiAgICAgIH0sXG4gICAgICB0aXRsZToge1xuICAgICAgICB0ZXh0OiAnUHVua3R5IHNwcnplZGHFvHknLFxuICAgICAgfSxcbiAgICAgIHhheGlzOiB7XG4gICAgICAgIGNhdGVnb3JpZXM6IFsnQ3plcndpZWMnLCAnTGlwaWVjJywgJ1NpZXJwaWXFhCcsICdXcnplc2llxYQnLCAnUGHFumR6aWVybmlrJywgJ0xpc3RvcGFkJ10sXG4gICAgICAgIGxhYmVsczoge1xuICAgICAgICAgIGZvcm1hdHRlcjogKHZhbHVlOiBzdHJpbmcpID0+IChwYXJzZUludCh2YWx1ZSkpLnRvU3RyaW5nKCksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgeWF4aXM6IHtcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICB0ZXh0OiB1bmRlZmluZWQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgdG9vbHRpcDoge1xuICAgICAgICB5OiB7XG4gICAgICAgICAgZm9ybWF0dGVyOiAodmFsOiBudW1iZXIpID0+IHZhbC50b0ZpeGVkKDApICsgJ2tnJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBmaWxsOiB7XG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICB9LFxuICAgICAgbGVnZW5kOiB7XG4gICAgICAgIHBvc2l0aW9uOiAndG9wJyxcbiAgICAgICAgaG9yaXpvbnRhbEFsaWduOiAnbGVmdCcsXG4gICAgICAgIG9mZnNldFg6IDQwLFxuICAgICAgfSxcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgc2VyaWVzOiBzZXJpZXNEYXRhLFxuICAgICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8Q2hhcnRBcmVhIGNsYXNzTmFtZT0ndy1mdWxsIGgtWzQyMHB4XSc+XG4gICAgICA8ZGl2IGlkPSdjaGFydCcgY2xhc3NOYW1lPSdoLWZ1bGwgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBvdmVyZmxvdy14LWF1dG8nPlxuICAgICAgICA8cCBjbGFzc05hbWU9J2ZvbnQtc2VtaWJvbGQgdGV4dC1jZW50ZXInPk1pZXNpxJljem55IHJvemvFgmFkIHNwcnplZGHFvHkgcGFwcnlraSB3IG9kbmllc2llbml1IGRvIHB1bmt0w7N3IHNwcnplZGHFvHk8L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC01Jz5cbiAgICAgICAgICA8UmVhY3RBcGV4Q2hhcnQgb3B0aW9ucz17Y2hhcnREYXRhLm9wdGlvbnN9IHNlcmllcz17Y2hhcnREYXRhLnNlcmllc30gdHlwZT0nYmFyJyBoZWlnaHQ9ezM1MH0gd2lkdGg9ezExMDB9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9DaGFydEFyZWE+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGVwcGVyV2VpZ2h0c0J5U2VsbGVyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlJlYWN0QXBleENoYXJ0IiwiQ2hhcnRBcmVhIiwiUGVwcGVyV2VpZ2h0c0J5U2VsbGVyIiwiYWxsVHJhZGVzIiwiY2FsY3VsYXRlV2VpZ2h0c0J5U2VsbGVyQW5kTW9udGgiLCJ0cmFkZXMiLCJ3ZWlnaHRzQnlTZWxsZXJBbmRNb250aCIsImZvckVhY2giLCJ0cmFkZSIsIm1vbnRoIiwiRGF0ZSIsImRhdGUiLCJnZXRNb250aCIsInNlbGxlcklkIiwicG9pbnRPZlNhbGVJZCIsIndlaWdodCIsInNlbGxlcnMiLCJPYmplY3QiLCJrZXlzIiwic2VyaWVzRGF0YSIsIm1hcCIsInNlbGxlcldlaWdodHMiLCJuYW1lIiwiZGF0YSIsImNoYXJ0RGF0YSIsIm9wdGlvbnMiLCJjaGFydCIsInR5cGUiLCJoZWlnaHQiLCJzdGFja2VkIiwicGxvdE9wdGlvbnMiLCJiYXIiLCJob3Jpem9udGFsIiwiZGF0YUxhYmVscyIsInRvdGFsIiwiZW5hYmxlZCIsIm9mZnNldFgiLCJzdHlsZSIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsInN0cm9rZSIsIndpZHRoIiwiY29sb3JzIiwidGl0bGUiLCJ0ZXh0IiwieGF4aXMiLCJjYXRlZ29yaWVzIiwibGFiZWxzIiwiZm9ybWF0dGVyIiwidmFsdWUiLCJwYXJzZUludCIsInRvU3RyaW5nIiwieWF4aXMiLCJ1bmRlZmluZWQiLCJ0b29sdGlwIiwieSIsInZhbCIsInRvRml4ZWQiLCJmaWxsIiwib3BhY2l0eSIsImxlZ2VuZCIsInBvc2l0aW9uIiwiaG9yaXpvbnRhbEFsaWduIiwic2VyaWVzIiwiY2xhc3NOYW1lIiwiZGl2IiwiaWQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/Charts/MonthlyPointOfSalesTrades.tsx\n"));

/***/ })

});