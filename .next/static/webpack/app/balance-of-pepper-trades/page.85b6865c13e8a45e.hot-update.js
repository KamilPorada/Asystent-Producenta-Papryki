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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apexcharts */ \"(app-client)/./node_modules/react-apexcharts/dist/react-apexcharts.min.js\");\n/* harmony import */ var _components_UI_ChartArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/UI/ChartArea */ \"(app-client)/./components/UI/ChartArea.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst PepperWeightsBySeller = (param)=>{\n    let { allTrades } = param;\n    _s();\n    const calculateWeightsBySellerAndMonth = (trades)=>{\n        const weightsBySellerAndMonth = {};\n        trades.forEach((trade)=>{\n            const month = new Date(trade.date).getMonth();\n            const sellerId = trade.pointOfSaleId;\n            if (month >= 5 && month <= 10) {\n                if (weightsBySellerAndMonth[sellerId]) {\n                    weightsBySellerAndMonth[sellerId][month - 5] += trade.weight;\n                } else {\n                    weightsBySellerAndMonth[sellerId] = [\n                        0,\n                        0,\n                        0,\n                        0,\n                        0,\n                        0\n                    ];\n                    weightsBySellerAndMonth[sellerId][month - 5] = trade.weight;\n                }\n            }\n        });\n        return weightsBySellerAndMonth;\n    };\n    const weightsBySellerAndMonth = calculateWeightsBySellerAndMonth(allTrades);\n    const sellers = Object.keys(weightsBySellerAndMonth);\n    const seriesData = sellers.map((sellerId)=>{\n        const sellerWeights = weightsBySellerAndMonth[sellerId];\n        return {\n            name: sellerId,\n            data: sellerWeights\n        };\n    });\n    const [chartData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>{\n        const options = {\n            chart: {\n                type: \"bar\",\n                height: 350,\n                stacked: true\n            },\n            plotOptions: {\n                bar: {\n                    horizontal: true,\n                    dataLabels: {\n                        total: {\n                            enabled: true,\n                            offsetX: 0,\n                            style: {\n                                fontSize: \"13px\",\n                                fontWeight: 900\n                            }\n                        }\n                    }\n                }\n            },\n            stroke: {\n                width: 1,\n                colors: [\n                    \"#fff\"\n                ]\n            },\n            title: {\n                text: \"Punkty sprzedaży\"\n            },\n            xaxis: {\n                categories: [\n                    \"Czerwiec\",\n                    \"Lipiec\",\n                    \"Sierpień\",\n                    \"Wrzesień\",\n                    \"Październik\",\n                    \"Listopad\"\n                ],\n                labels: {\n                    formatter: (value)=>(parseInt(value) * 1000).toString()\n                }\n            },\n            yaxis: {\n                title: {\n                    text: undefined\n                }\n            },\n            tooltip: {\n                y: {\n                    formatter: (val)=>val.toFixed(0) + \"kg\"\n                }\n            },\n            fill: {\n                opacity: 1\n            },\n            legend: {\n                position: \"top\",\n                horizontalAlign: \"left\",\n                offsetX: 40\n            }\n        };\n        return {\n            series: seriesData,\n            options: options\n        };\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_ChartArea__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        className: \"w-full h-[420px]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: \"chart\",\n            className: \"h-full flex flex-col justify-start items-center overflow-x-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"font-semibold text-center\",\n                    children: \"Miesięczny rozkład sprzedaży papryki w odniesieniu do punkt\\xf3w sprzedaży\"\n                }, void 0, false, {\n                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/MonthlyPointOfSalesTrades.tsx\",\n                    lineNumber: 123,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-5\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_apexcharts__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        options: chartData.options,\n                        series: chartData.series,\n                        type: \"bar\",\n                        height: 350,\n                        width: 1100\n                    }, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/MonthlyPointOfSalesTrades.tsx\",\n                        lineNumber: 125,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/MonthlyPointOfSalesTrades.tsx\",\n                    lineNumber: 124,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/MonthlyPointOfSalesTrades.tsx\",\n            lineNumber: 122,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/MonthlyPointOfSalesTrades.tsx\",\n        lineNumber: 121,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PepperWeightsBySeller, \"6wny8KANQhlykjqRiHl4Pdr2s40=\");\n_c = PepperWeightsBySeller;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PepperWeightsBySeller);\nvar _c;\n$RefreshReg$(_c, \"PepperWeightsBySeller\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9DaGFydHMvTW9udGhseVBvaW50T2ZTYWxlc1RyYWRlcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBdUM7QUFDTTtBQUNHO0FBd0JoRCxNQUFNSSx3QkFBeUM7UUFBQyxFQUFFQyxTQUFTLEVBQUU7O0lBQzNELE1BQU1DLG1DQUFtQyxDQUFDQztRQUN4QyxNQUFNQywwQkFBNEQsQ0FBQztRQUVuRUQsT0FBT0UsUUFBUUMsQ0FBQUE7WUFDYixNQUFNQyxRQUFRLElBQUlDLEtBQUtGLE1BQU1HLE1BQU1DO1lBQ25DLE1BQU1DLFdBQVdMLE1BQU1NO1lBRXZCLElBQUlMLFNBQVMsS0FBS0EsU0FBUyxJQUFJO2dCQUM3QixJQUFJSCx1QkFBdUIsQ0FBQ08sU0FBUyxFQUFFO29CQUNyQ1AsdUJBQXVCLENBQUNPLFNBQVMsQ0FBQ0osUUFBUSxFQUFFLElBQUlELE1BQU1PO2dCQUN4RCxPQUFPO29CQUNMVCx1QkFBdUIsQ0FBQ08sU0FBUyxHQUFHO3dCQUFDO3dCQUFHO3dCQUFHO3dCQUFHO3dCQUFHO3dCQUFHO3FCQUFFO29CQUN0RFAsdUJBQXVCLENBQUNPLFNBQVMsQ0FBQ0osUUFBUSxFQUFFLEdBQUdELE1BQU1PO2dCQUN2RDtZQUNGO1FBQ0Y7UUFFQSxPQUFPVDtJQUNUO0lBRUEsTUFBTUEsMEJBQTBCRixpQ0FBaUNEO0lBRWpFLE1BQU1hLFVBQVVDLE9BQU9DLEtBQUtaO0lBQzVCLE1BQU1hLGFBQWFILFFBQVFJLElBQUlQLENBQUFBO1FBQzdCLE1BQU1RLGdCQUFnQmYsdUJBQXVCLENBQUNPLFNBQVM7UUFDdkQsT0FBTztZQUNMUyxNQUFNVDtZQUNOVSxNQUFNRjtRQUNSO0lBQ0Y7SUFFQSxNQUFNLENBQUNHLFVBQVUsR0FBR3pCLCtDQUFRQSxDQUFrRjtRQUM1RyxNQUFNMEIsVUFBa0M7WUFDdENDLE9BQU87Z0JBQ0xDLE1BQU07Z0JBQ05DLFFBQVE7Z0JBQ1JDLFNBQVM7WUFDWDtZQUNBQyxhQUFhO2dCQUNYQyxLQUFLO29CQUNIQyxZQUFZO29CQUNaQyxZQUFZO3dCQUNWQyxPQUFPOzRCQUNMQyxTQUFTOzRCQUNUQyxTQUFTOzRCQUNUQyxPQUFPO2dDQUNMQyxVQUFVO2dDQUNWQyxZQUFZOzRCQUNkO3dCQUNGO29CQUNGO2dCQUNGO1lBQ0Y7WUFDQUMsUUFBUTtnQkFDTkMsT0FBTztnQkFDUEMsUUFBUTtvQkFBQztpQkFBTztZQUNsQjtZQUNBQyxPQUFPO2dCQUNMQyxNQUFNO1lBQ1I7WUFDQUMsT0FBTztnQkFDTEMsWUFBWTtvQkFBQztvQkFBWTtvQkFBVTtvQkFBWTtvQkFBWTtvQkFBZTtpQkFBVztnQkFDckZDLFFBQVE7b0JBQ05DLFdBQVcsQ0FBQ0MsUUFBa0IsQ0FBQ0MsU0FBU0QsU0FBUyxJQUFHLEVBQUdFO2dCQUN6RDtZQUNGO1lBQ0FDLE9BQU87Z0JBQ0xULE9BQU87b0JBQ0xDLE1BQU1TO2dCQUNSO1lBQ0Y7WUFDQUMsU0FBUztnQkFDUEMsR0FBRztvQkFDRFAsV0FBVyxDQUFDUSxNQUFnQkEsSUFBSUMsUUFBUSxLQUFLO2dCQUMvQztZQUNGO1lBQ0FDLE1BQU07Z0JBQ0pDLFNBQVM7WUFDWDtZQUNBQyxRQUFRO2dCQUNOQyxVQUFVO2dCQUNWQyxpQkFBaUI7Z0JBQ2pCMUIsU0FBUztZQUNYO1FBQ0Y7UUFFQSxPQUFPO1lBQ0wyQixRQUFRNUM7WUFDUk0sU0FBU0E7UUFDWDtJQUNGO0lBRUEscUJBQ0UsOERBQUN4QixnRUFBU0E7UUFBQytELFdBQVU7a0JBQ25CLDRFQUFDQztZQUFJQyxJQUFHO1lBQVFGLFdBQVU7OzhCQUN4Qiw4REFBQ0c7b0JBQUVILFdBQVU7OEJBQTRCOzs7Ozs7OEJBQ3pDLDhEQUFDQztvQkFBSUQsV0FBVTs4QkFDYiw0RUFBQ2hFLHdEQUFjQTt3QkFBQ3lCLFNBQVNELFVBQVVDO3dCQUFTc0MsUUFBUXZDLFVBQVV1Qzt3QkFBUXBDLE1BQUs7d0JBQU1DLFFBQVE7d0JBQUthLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLL0c7R0F2R012QztLQUFBQTtBQXlHTiwrREFBZUEscUJBQXFCQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2hhcnRzL01vbnRobHlQb2ludE9mU2FsZXNUcmFkZXMudHN4PzE3MTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RBcGV4Q2hhcnQgZnJvbSAncmVhY3QtYXBleGNoYXJ0cydcbmltcG9ydCBDaGFydEFyZWEgZnJvbSAnQGNvbXBvbmVudHMvVUkvQ2hhcnRBcmVhJ1xuXG5pbnRlcmZhY2UgVHJhZGVPZlBlcHBlciB7XG4gIF9pZDogc3RyaW5nXG4gIGNyZWF0b3I6IHtcbiAgICBfaWQ6IHN0cmluZ1xuICAgIGVtYWlsOiBzdHJpbmdcbiAgICB1c2VybmFtZTogc3RyaW5nXG4gICAgaW1hZ2U6IHN0cmluZ1xuICB9XG4gIHBvaW50T2ZTYWxlSWQ6IHN0cmluZ1xuICBkYXRlOiBzdHJpbmdcbiAgY2xhczogbnVtYmVyXG4gIGNvbG9yOiBudW1iZXJcbiAgcHJpY2U6IG51bWJlclxuICB3ZWlnaHQ6IG51bWJlclxuICB2YXRSYXRlOiBudW1iZXJcbiAgdG90YWxTdW06IG51bWJlclxufVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBhbGxUcmFkZXM6IFRyYWRlT2ZQZXBwZXJbXVxufVxuXG5jb25zdCBQZXBwZXJXZWlnaHRzQnlTZWxsZXI6IFJlYWN0LkZDPFByb3BzPiA9ICh7IGFsbFRyYWRlcyB9KSA9PiB7XG4gIGNvbnN0IGNhbGN1bGF0ZVdlaWdodHNCeVNlbGxlckFuZE1vbnRoID0gKHRyYWRlczogVHJhZGVPZlBlcHBlcltdKSA9PiB7XG4gICAgY29uc3Qgd2VpZ2h0c0J5U2VsbGVyQW5kTW9udGg6IHsgW3NlbGxlcklkOiBzdHJpbmddOiBudW1iZXJbXSB9ID0ge31cblxuICAgIHRyYWRlcy5mb3JFYWNoKHRyYWRlID0+IHtcbiAgICAgIGNvbnN0IG1vbnRoID0gbmV3IERhdGUodHJhZGUuZGF0ZSkuZ2V0TW9udGgoKVxuICAgICAgY29uc3Qgc2VsbGVySWQgPSB0cmFkZS5wb2ludE9mU2FsZUlkXG5cbiAgICAgIGlmIChtb250aCA+PSA1ICYmIG1vbnRoIDw9IDEwKSB7XG4gICAgICAgIGlmICh3ZWlnaHRzQnlTZWxsZXJBbmRNb250aFtzZWxsZXJJZF0pIHtcbiAgICAgICAgICB3ZWlnaHRzQnlTZWxsZXJBbmRNb250aFtzZWxsZXJJZF1bbW9udGggLSA1XSArPSB0cmFkZS53ZWlnaHRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3ZWlnaHRzQnlTZWxsZXJBbmRNb250aFtzZWxsZXJJZF0gPSBbMCwgMCwgMCwgMCwgMCwgMF1cbiAgICAgICAgICB3ZWlnaHRzQnlTZWxsZXJBbmRNb250aFtzZWxsZXJJZF1bbW9udGggLSA1XSA9IHRyYWRlLndlaWdodFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiB3ZWlnaHRzQnlTZWxsZXJBbmRNb250aFxuICB9XG5cbiAgY29uc3Qgd2VpZ2h0c0J5U2VsbGVyQW5kTW9udGggPSBjYWxjdWxhdGVXZWlnaHRzQnlTZWxsZXJBbmRNb250aChhbGxUcmFkZXMpXG5cbiAgY29uc3Qgc2VsbGVycyA9IE9iamVjdC5rZXlzKHdlaWdodHNCeVNlbGxlckFuZE1vbnRoKVxuICBjb25zdCBzZXJpZXNEYXRhID0gc2VsbGVycy5tYXAoc2VsbGVySWQgPT4ge1xuICAgIGNvbnN0IHNlbGxlcldlaWdodHMgPSB3ZWlnaHRzQnlTZWxsZXJBbmRNb250aFtzZWxsZXJJZF1cbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogc2VsbGVySWQsXG4gICAgICBkYXRhOiBzZWxsZXJXZWlnaHRzLFxuICAgIH1cbiAgfSlcblxuICBjb25zdCBbY2hhcnREYXRhXSA9IHVzZVN0YXRlPHsgc2VyaWVzOiB7IGRhdGE6IG51bWJlcltdOyBuYW1lOiBzdHJpbmcgfVtdOyBvcHRpb25zOiBBcGV4Q2hhcnRzLkFwZXhPcHRpb25zIH0+KCgpID0+IHtcbiAgICBjb25zdCBvcHRpb25zOiBBcGV4Q2hhcnRzLkFwZXhPcHRpb25zID0ge1xuICAgICAgY2hhcnQ6IHtcbiAgICAgICAgdHlwZTogJ2JhcicsXG4gICAgICAgIGhlaWdodDogMzUwLFxuICAgICAgICBzdGFja2VkOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHBsb3RPcHRpb25zOiB7XG4gICAgICAgIGJhcjoge1xuICAgICAgICAgIGhvcml6b250YWw6IHRydWUsXG4gICAgICAgICAgZGF0YUxhYmVsczoge1xuICAgICAgICAgICAgdG90YWw6IHtcbiAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgb2Zmc2V0WDogMCxcbiAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEzcHgnLFxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDkwMCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBzdHJva2U6IHtcbiAgICAgICAgd2lkdGg6IDEsXG4gICAgICAgIGNvbG9yczogWycjZmZmJ10sXG4gICAgICB9LFxuICAgICAgdGl0bGU6IHtcbiAgICAgICAgdGV4dDogJ1B1bmt0eSBzcHJ6ZWRhxbx5JyxcbiAgICAgIH0sXG4gICAgICB4YXhpczoge1xuICAgICAgICBjYXRlZ29yaWVzOiBbJ0N6ZXJ3aWVjJywgJ0xpcGllYycsICdTaWVycGllxYQnLCAnV3J6ZXNpZcWEJywgJ1Bhxbpkemllcm5paycsICdMaXN0b3BhZCddLFxuICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICBmb3JtYXR0ZXI6ICh2YWx1ZTogc3RyaW5nKSA9PiAocGFyc2VJbnQodmFsdWUpICogMTAwMCkudG9TdHJpbmcoKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB5YXhpczoge1xuICAgICAgICB0aXRsZToge1xuICAgICAgICAgIHRleHQ6IHVuZGVmaW5lZCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB0b29sdGlwOiB7XG4gICAgICAgIHk6IHtcbiAgICAgICAgICBmb3JtYXR0ZXI6ICh2YWw6IG51bWJlcikgPT4gdmFsLnRvRml4ZWQoMCkgKyAna2cnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGZpbGw6IHtcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgIH0sXG4gICAgICBsZWdlbmQ6IHtcbiAgICAgICAgcG9zaXRpb246ICd0b3AnLFxuICAgICAgICBob3Jpem9udGFsQWxpZ246ICdsZWZ0JyxcbiAgICAgICAgb2Zmc2V0WDogNDAsXG4gICAgICB9LFxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBzZXJpZXM6IHNlcmllc0RhdGEsXG4gICAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDxDaGFydEFyZWEgY2xhc3NOYW1lPSd3LWZ1bGwgaC1bNDIwcHhdJz5cbiAgICAgIDxkaXYgaWQ9J2NoYXJ0JyBjbGFzc05hbWU9J2gtZnVsbCBmbGV4IGZsZXgtY29sIGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIG92ZXJmbG93LXgtYXV0byc+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nZm9udC1zZW1pYm9sZCB0ZXh0LWNlbnRlcic+TWllc2nEmWN6bnkgcm96a8WCYWQgc3ByemVkYcW8eSBwYXByeWtpIHcgb2RuaWVzaWVuaXUgZG8gcHVua3TDs3cgc3ByemVkYcW8eTwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J210LTUnPlxuICAgICAgICAgIDxSZWFjdEFwZXhDaGFydCBvcHRpb25zPXtjaGFydERhdGEub3B0aW9uc30gc2VyaWVzPXtjaGFydERhdGEuc2VyaWVzfSB0eXBlPSdiYXInIGhlaWdodD17MzUwfSB3aWR0aD17MTEwMH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0NoYXJ0QXJlYT5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQZXBwZXJXZWlnaHRzQnlTZWxsZXJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiUmVhY3RBcGV4Q2hhcnQiLCJDaGFydEFyZWEiLCJQZXBwZXJXZWlnaHRzQnlTZWxsZXIiLCJhbGxUcmFkZXMiLCJjYWxjdWxhdGVXZWlnaHRzQnlTZWxsZXJBbmRNb250aCIsInRyYWRlcyIsIndlaWdodHNCeVNlbGxlckFuZE1vbnRoIiwiZm9yRWFjaCIsInRyYWRlIiwibW9udGgiLCJEYXRlIiwiZGF0ZSIsImdldE1vbnRoIiwic2VsbGVySWQiLCJwb2ludE9mU2FsZUlkIiwid2VpZ2h0Iiwic2VsbGVycyIsIk9iamVjdCIsImtleXMiLCJzZXJpZXNEYXRhIiwibWFwIiwic2VsbGVyV2VpZ2h0cyIsIm5hbWUiLCJkYXRhIiwiY2hhcnREYXRhIiwib3B0aW9ucyIsImNoYXJ0IiwidHlwZSIsImhlaWdodCIsInN0YWNrZWQiLCJwbG90T3B0aW9ucyIsImJhciIsImhvcml6b250YWwiLCJkYXRhTGFiZWxzIiwidG90YWwiLCJlbmFibGVkIiwib2Zmc2V0WCIsInN0eWxlIiwiZm9udFNpemUiLCJmb250V2VpZ2h0Iiwic3Ryb2tlIiwid2lkdGgiLCJjb2xvcnMiLCJ0aXRsZSIsInRleHQiLCJ4YXhpcyIsImNhdGVnb3JpZXMiLCJsYWJlbHMiLCJmb3JtYXR0ZXIiLCJ2YWx1ZSIsInBhcnNlSW50IiwidG9TdHJpbmciLCJ5YXhpcyIsInVuZGVmaW5lZCIsInRvb2x0aXAiLCJ5IiwidmFsIiwidG9GaXhlZCIsImZpbGwiLCJvcGFjaXR5IiwibGVnZW5kIiwicG9zaXRpb24iLCJob3Jpem9udGFsQWxpZ24iLCJzZXJpZXMiLCJjbGFzc05hbWUiLCJkaXYiLCJpZCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./components/Charts/MonthlyPointOfSalesTrades.tsx\n"));

/***/ })

});