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

/***/ "(app-client)/./app/balance-of-pepper-trades/page.tsx":
/*!***********************************************!*\
  !*** ./app/balance-of-pepper-trades/page.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-client)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_UI_SectionTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/UI/SectionTitle */ \"(app-client)/./components/UI/SectionTitle.tsx\");\n/* harmony import */ var _components_Charts_TradesOfPepperByMonth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Charts/TradesOfPepperByMonth */ \"(app-client)/./components/Charts/TradesOfPepperByMonth.tsx\");\n/* harmony import */ var _components_UI_ChartArea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/UI/ChartArea */ \"(app-client)/./components/UI/ChartArea.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction BalanceOfPepperTrades() {\n    var _ref;\n    _s();\n    const [allTrades, setAllTrades] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    var _id;\n    const userId = (_id = (_ref = session === null || session === void 0 ? void 0 : session.user) === null || _ref === void 0 ? void 0 : _ref.id) !== null && _id !== void 0 ? _id : \"\";\n    let monthlySums, monthlyWeights, annualProfit, formattedAnnualProfit, annualHarvest, formattedAnnualHarvest;\n    const fetchTradesOfPepper = async ()=>{\n        try {\n            const response = await fetch(\"/api/trade-of-pepper\");\n            const data = await response.json();\n            const filteredTrades = data.filter((trade)=>trade.creator._id.toString() === userId.toString());\n            setAllTrades(filteredTrades);\n        } catch (error) {\n            console.log(error);\n        } finally{\n            setLoading(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchTradesOfPepper();\n        const monthlySums = calculateMonthlySums(allTrades);\n        monthlyWeights = calculateMonthlyWeights(allTrades);\n        const annualProfit = monthlySums.reduce((total, sum)=>total + sum, 0);\n        const formattedAnnualProfit = annualProfit.toLocaleString(\"pl-PL\");\n        const annualHarvest = monthlyWeights.reduce((total, weight)=>total + weight, 0);\n        const formattedAnnualHarvest = annualHarvest.toLocaleString(\"pl-PL\");\n    }, [\n        loading\n    ]);\n    const calculateMonthlySums = (trades)=>{\n        const monthlySums = [\n            0,\n            0,\n            0,\n            0,\n            0,\n            0\n        ] // Inicjalizacja tablicy z zerowymi sumami\n        ;\n        trades.forEach((trade)=>{\n            const month = new Date(trade.date).getMonth();\n            if (month >= 5 && month <= 10) {\n                // Uwzględnienie transakcji z czerwca do listopada (indeksy 5-10)\n                monthlySums[month - 5] += trade.totalSum;\n            }\n        });\n        return monthlySums.map((sum)=>parseFloat(sum.toFixed(2)));\n    };\n    const calculateMonthlyWeights = (trades)=>{\n        const monthlyWeights = [\n            0,\n            0,\n            0,\n            0,\n            0,\n            0\n        ] // Inicjalizacja tablicy z zerowymi wagami\n        ;\n        trades.forEach((trade)=>{\n            const month = new Date(trade.date).getMonth();\n            if (month >= 5 && month <= 10) {\n                // Uwzględnienie transakcji z czerwca do listopada (indeksy 5-10)\n                monthlyWeights[month - 5] += trade.weight;\n            }\n        });\n        return monthlyWeights.map((weight)=>parseFloat(weight.toFixed(2)));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"container py-20 text-black\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_SectionTitle__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                title: \"Bilans sprzedaży papryki\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                lineNumber: 93,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_ChartArea__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row justify-between mx-10\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Roczne zyski:\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                                        lineNumber: 97,\n                                        columnNumber: 7\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-lg font-semibold text-mainColor\",\n                                        children: [\n                                            formattedAnnualProfit,\n                                            \" zł\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                                        lineNumber: 98,\n                                        columnNumber: 7\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                                lineNumber: 96,\n                                columnNumber: 6\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-right\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Roczne zbiory:\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                                        lineNumber: 101,\n                                        columnNumber: 7\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-lg font-semibold text-mainColor\",\n                                        children: [\n                                            formattedAnnualHarvest,\n                                            \" kg\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                                        lineNumber: 102,\n                                        columnNumber: 7\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 6\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Charts_TradesOfPepperByMonth__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        monthlySums: monthlySums,\n                        monthlyWeights: monthlyWeights\n                    }, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                lineNumber: 94,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n        lineNumber: 92,\n        columnNumber: 3\n    }, this);\n}\n_s(BalanceOfPepperTrades, \"iuSt3lLnJg8E9BZZxdQpE3CsXvQ=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = BalanceOfPepperTrades;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BalanceOfPepperTrades);\nvar _c;\n$RefreshReg$(_c, \"BalanceOfPepperTrades\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2JhbGFuY2Utb2YtcGVwcGVyLXRyYWRlcy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUMyQztBQUNDO0FBQ1U7QUFDN0I7QUFDbUQ7QUFDNUI7QUFvQmhELFNBQVNPO1FBSU87O0lBSGYsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdULCtDQUFRQSxDQUFrQixFQUFFO0lBQzlELE1BQU0sQ0FBQ1UsU0FBU0MsV0FBVyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLEVBQUVZLE1BQU1DLE9BQU8sRUFBRSxHQUFHWCwyREFBVUE7UUFDckI7SUFBZixNQUFNWSxTQUFTLGVBQUNELG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBU0Usa0JBQVYsZ0NBQW9DQyxnQkFBcEMsdUJBQTBDO0lBQ3pELElBQUlDLGFBQWFDLGdCQUFnQkMsY0FBY0MsdUJBQXVCQyxlQUFlQztJQUVyRixNQUFNQyxzQkFBc0I7UUFDM0IsSUFBSTtZQUNILE1BQU1DLFdBQVcsTUFBTUMsTUFBTTtZQUM3QixNQUFNYixPQUFPLE1BQU1ZLFNBQVNFO1lBRTVCLE1BQU1DLGlCQUFpQmYsS0FBS2dCLE9BQU8sQ0FBQ0MsUUFBeUJBLE1BQU1DLFFBQVFDLElBQUlDLGVBQWVsQixPQUFPa0I7WUFFckd2QixhQUFha0I7UUFDZCxFQUFFLE9BQU9NLE9BQU87WUFDZkMsUUFBUUMsSUFBSUY7UUFDYixTQUFVO1lBQ1R0QixXQUFXO1FBQ1o7SUFDRDtJQUVBVixnREFBU0EsQ0FBQztRQUNUc0I7UUFDTSxNQUFNTixjQUFjbUIscUJBQXFCNUI7UUFDaERVLGlCQUFpQm1CLHdCQUF3QjdCO1FBRXpDLE1BQU1XLGVBQWVGLFlBQVlxQixPQUFPLENBQUNDLE9BQU9DLE1BQVFELFFBQVFDLEtBQUs7UUFDckUsTUFBTXBCLHdCQUF3QkQsYUFBYXNCLGVBQWU7UUFFMUQsTUFBTXBCLGdCQUFnQkgsZUFBZW9CLE9BQU8sQ0FBQ0MsT0FBT0csU0FBV0gsUUFBUUcsUUFBUTtRQUMvRSxNQUFNcEIseUJBQXlCRCxjQUFjb0IsZUFBZTtJQUM1RCxHQUFHO1FBQUMvQjtLQUFRO0lBRVosTUFBTTBCLHVCQUF1QixDQUFDTztRQUM3QixNQUFNMUIsY0FBd0I7WUFBQztZQUFHO1lBQUc7WUFBRztZQUFHO1lBQUc7U0FBRSxDQUFDLDBDQUEwQzs7UUFFM0YwQixPQUFPQyxRQUFRZixDQUFBQTtZQUNkLE1BQU1nQixRQUFRLElBQUlDLEtBQUtqQixNQUFNa0IsTUFBTUM7WUFFbkMsSUFBSUgsU0FBUyxLQUFLQSxTQUFTLElBQUk7Z0JBQzlCLGlFQUFpRTtnQkFDakU1QixXQUFXLENBQUM0QixRQUFRLEVBQUUsSUFBSWhCLE1BQU1vQjtZQUNqQztRQUNEO1FBRUEsT0FBT2hDLFlBQVlpQyxJQUFJVixDQUFBQSxNQUFPVyxXQUFXWCxJQUFJWSxRQUFRO0lBQ3REO0lBRUEsTUFBTWYsMEJBQTBCLENBQUNNO1FBQ2hDLE1BQU16QixpQkFBMkI7WUFBQztZQUFHO1lBQUc7WUFBRztZQUFHO1lBQUc7U0FBRSxDQUFDLDBDQUEwQzs7UUFFOUZ5QixPQUFPQyxRQUFRZixDQUFBQTtZQUNkLE1BQU1nQixRQUFRLElBQUlDLEtBQUtqQixNQUFNa0IsTUFBTUM7WUFFbkMsSUFBSUgsU0FBUyxLQUFLQSxTQUFTLElBQUk7Z0JBQzlCLGlFQUFpRTtnQkFDakUzQixjQUFjLENBQUMyQixRQUFRLEVBQUUsSUFBSWhCLE1BQU1hO1lBQ3BDO1FBQ0Q7UUFFQSxPQUFPeEIsZUFBZWdDLElBQUlSLENBQUFBLFNBQVVTLFdBQVdULE9BQU9VLFFBQVE7SUFDL0Q7SUFFQSxxQkFDQyw4REFBQ0M7UUFBUUMsV0FBVTs7MEJBQ2xCLDhEQUFDbkQsbUVBQVlBO2dCQUFDb0QsT0FBTTs7Ozs7OzBCQUNwQiw4REFBQ2pELGdFQUFTQTs7a0NBQ1QsOERBQUNrRDt3QkFBSUYsV0FBVTs7MENBQ2QsOERBQUNFOztrREFDQSw4REFBQ0M7a0RBQUU7Ozs7OztrREFDSCw4REFBQ0E7d0NBQUVILFdBQVU7OzRDQUF3Q2xDOzRDQUFzQjs7Ozs7Ozs7Ozs7OzswQ0FFNUUsOERBQUNvQztnQ0FBSUYsV0FBVTs7a0RBQ2QsOERBQUNHO2tEQUFFOzs7Ozs7a0RBQ0gsOERBQUNBO3dDQUFFSCxXQUFVOzs0Q0FBd0NoQzs0Q0FBdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBRzlFLDhEQUFDakIsZ0ZBQXFCQTt3QkFBQ1ksYUFBYUE7d0JBQWFDLGdCQUFnQkE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlyRTtHQWxGU1g7O1FBR2tCTCx1REFBVUE7OztLQUg1Qks7QUFvRlQsK0RBQWVBLHFCQUFxQkEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvYmFsYW5jZS1vZi1wZXBwZXItdHJhZGVzL3BhZ2UudHN4PzM2YmYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0J1xuaW1wb3J0IFNlY3Rpb25UaXRsZSBmcm9tICdAY29tcG9uZW50cy9VSS9TZWN0aW9uVGl0bGUnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgVHJhZGVzT2ZQZXBwZXJCeU1vbnRoIGZyb20gJ0Bjb21wb25lbnRzL0NoYXJ0cy9UcmFkZXNPZlBlcHBlckJ5TW9udGgnXG5pbXBvcnQgQ2hhcnRBcmVhIGZyb20gJ0Bjb21wb25lbnRzL1VJL0NoYXJ0QXJlYSdcblxuaW50ZXJmYWNlIFRyYWRlT2ZQZXBwZXIge1xuXHRfaWQ6IHN0cmluZ1xuXHRjcmVhdG9yOiB7XG5cdFx0X2lkOiBzdHJpbmdcblx0XHRlbWFpbDogc3RyaW5nXG5cdFx0dXNlcm5hbWU6IHN0cmluZ1xuXHRcdGltYWdlOiBzdHJpbmdcblx0fVxuXHRwb2ludE9mU2FsZUlkOiBzdHJpbmdcblx0ZGF0ZTogc3RyaW5nXG5cdGNsYXM6IG51bWJlclxuXHRjb2xvcjogbnVtYmVyXG5cdHByaWNlOiBudW1iZXJcblx0d2VpZ2h0OiBudW1iZXJcblx0dmF0UmF0ZTogbnVtYmVyXG5cdHRvdGFsU3VtOiBudW1iZXJcbn1cblxuZnVuY3Rpb24gQmFsYW5jZU9mUGVwcGVyVHJhZGVzKCkge1xuXHRjb25zdCBbYWxsVHJhZGVzLCBzZXRBbGxUcmFkZXNdID0gdXNlU3RhdGU8VHJhZGVPZlBlcHBlcltdPihbXSlcblx0Y29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcblx0Y29uc3QgeyBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKClcblx0Y29uc3QgdXNlcklkID0gKHNlc3Npb24/LnVzZXIgYXMgeyBpZD86IHN0cmluZyB9KT8uaWQgPz8gJydcblx0bGV0IG1vbnRobHlTdW1zLCBtb250aGx5V2VpZ2h0cywgYW5udWFsUHJvZml0LCBmb3JtYXR0ZWRBbm51YWxQcm9maXQsIGFubnVhbEhhcnZlc3QsIGZvcm1hdHRlZEFubnVhbEhhcnZlc3RcblxuXHRjb25zdCBmZXRjaFRyYWRlc09mUGVwcGVyID0gYXN5bmMgKCkgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL3RyYWRlLW9mLXBlcHBlcicpXG5cdFx0XHRjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cblx0XHRcdGNvbnN0IGZpbHRlcmVkVHJhZGVzID0gZGF0YS5maWx0ZXIoKHRyYWRlOiBUcmFkZU9mUGVwcGVyKSA9PiB0cmFkZS5jcmVhdG9yLl9pZC50b1N0cmluZygpID09PSB1c2VySWQudG9TdHJpbmcoKSlcblxuXHRcdFx0c2V0QWxsVHJhZGVzKGZpbHRlcmVkVHJhZGVzKVxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhlcnJvcilcblx0XHR9IGZpbmFsbHkge1xuXHRcdFx0c2V0TG9hZGluZyhmYWxzZSlcblx0XHR9XG5cdH1cblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGZldGNoVHJhZGVzT2ZQZXBwZXIoKVxuICAgICAgICBjb25zdCBtb250aGx5U3VtcyA9IGNhbGN1bGF0ZU1vbnRobHlTdW1zKGFsbFRyYWRlcylcblx0bW9udGhseVdlaWdodHMgPSBjYWxjdWxhdGVNb250aGx5V2VpZ2h0cyhhbGxUcmFkZXMpXG5cblx0Y29uc3QgYW5udWFsUHJvZml0ID0gbW9udGhseVN1bXMucmVkdWNlKCh0b3RhbCwgc3VtKSA9PiB0b3RhbCArIHN1bSwgMClcblx0Y29uc3QgZm9ybWF0dGVkQW5udWFsUHJvZml0ID0gYW5udWFsUHJvZml0LnRvTG9jYWxlU3RyaW5nKCdwbC1QTCcpXG5cblx0Y29uc3QgYW5udWFsSGFydmVzdCA9IG1vbnRobHlXZWlnaHRzLnJlZHVjZSgodG90YWwsIHdlaWdodCkgPT4gdG90YWwgKyB3ZWlnaHQsIDApXG5cdGNvbnN0IGZvcm1hdHRlZEFubnVhbEhhcnZlc3QgPSBhbm51YWxIYXJ2ZXN0LnRvTG9jYWxlU3RyaW5nKCdwbC1QTCcpXG5cdH0sIFtsb2FkaW5nXSlcblxuXHRjb25zdCBjYWxjdWxhdGVNb250aGx5U3VtcyA9ICh0cmFkZXM6IFRyYWRlT2ZQZXBwZXJbXSk6IG51bWJlcltdID0+IHtcblx0XHRjb25zdCBtb250aGx5U3VtczogbnVtYmVyW10gPSBbMCwgMCwgMCwgMCwgMCwgMF0gLy8gSW5pY2phbGl6YWNqYSB0YWJsaWN5IHogemVyb3d5bWkgc3VtYW1pXG5cblx0XHR0cmFkZXMuZm9yRWFjaCh0cmFkZSA9PiB7XG5cdFx0XHRjb25zdCBtb250aCA9IG5ldyBEYXRlKHRyYWRlLmRhdGUpLmdldE1vbnRoKClcblxuXHRcdFx0aWYgKG1vbnRoID49IDUgJiYgbW9udGggPD0gMTApIHtcblx0XHRcdFx0Ly8gVXd6Z2zEmWRuaWVuaWUgdHJhbnNha2NqaSB6IGN6ZXJ3Y2EgZG8gbGlzdG9wYWRhIChpbmRla3N5IDUtMTApXG5cdFx0XHRcdG1vbnRobHlTdW1zW21vbnRoIC0gNV0gKz0gdHJhZGUudG90YWxTdW1cblx0XHRcdH1cblx0XHR9KVxuXG5cdFx0cmV0dXJuIG1vbnRobHlTdW1zLm1hcChzdW0gPT4gcGFyc2VGbG9hdChzdW0udG9GaXhlZCgyKSkpXG5cdH1cblxuXHRjb25zdCBjYWxjdWxhdGVNb250aGx5V2VpZ2h0cyA9ICh0cmFkZXM6IFRyYWRlT2ZQZXBwZXJbXSk6IG51bWJlcltdID0+IHtcblx0XHRjb25zdCBtb250aGx5V2VpZ2h0czogbnVtYmVyW10gPSBbMCwgMCwgMCwgMCwgMCwgMF0gLy8gSW5pY2phbGl6YWNqYSB0YWJsaWN5IHogemVyb3d5bWkgd2FnYW1pXG5cblx0XHR0cmFkZXMuZm9yRWFjaCh0cmFkZSA9PiB7XG5cdFx0XHRjb25zdCBtb250aCA9IG5ldyBEYXRlKHRyYWRlLmRhdGUpLmdldE1vbnRoKClcblxuXHRcdFx0aWYgKG1vbnRoID49IDUgJiYgbW9udGggPD0gMTApIHtcblx0XHRcdFx0Ly8gVXd6Z2zEmWRuaWVuaWUgdHJhbnNha2NqaSB6IGN6ZXJ3Y2EgZG8gbGlzdG9wYWRhIChpbmRla3N5IDUtMTApXG5cdFx0XHRcdG1vbnRobHlXZWlnaHRzW21vbnRoIC0gNV0gKz0gdHJhZGUud2VpZ2h0XG5cdFx0XHR9XG5cdFx0fSlcblxuXHRcdHJldHVybiBtb250aGx5V2VpZ2h0cy5tYXAod2VpZ2h0ID0+IHBhcnNlRmxvYXQod2VpZ2h0LnRvRml4ZWQoMikpKVxuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9J2NvbnRhaW5lciBweS0yMCB0ZXh0LWJsYWNrJz5cblx0XHRcdDxTZWN0aW9uVGl0bGUgdGl0bGU9J0JpbGFucyBzcHJ6ZWRhxbx5IHBhcHJ5a2knIC8+XG5cdFx0XHQ8Q2hhcnRBcmVhPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gbXgtMTAnPlxuXHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHQ8cD5Sb2N6bmUgenlza2k6PC9wPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSd0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgdGV4dC1tYWluQ29sb3InPntmb3JtYXR0ZWRBbm51YWxQcm9maXR9IHrFgjwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndGV4dC1yaWdodCc+XG5cdFx0XHRcdFx0XHQ8cD5Sb2N6bmUgemJpb3J5OjwvcD5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0ndGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtbWFpbkNvbG9yJz57Zm9ybWF0dGVkQW5udWFsSGFydmVzdH0ga2c8L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8VHJhZGVzT2ZQZXBwZXJCeU1vbnRoIG1vbnRobHlTdW1zPXttb250aGx5U3Vtc30gbW9udGhseVdlaWdodHM9e21vbnRobHlXZWlnaHRzfSAvPlxuXHRcdFx0PC9DaGFydEFyZWE+XG5cdFx0PC9zZWN0aW9uPlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhbGFuY2VPZlBlcHBlclRyYWRlc1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlU2Vzc2lvbiIsIlNlY3Rpb25UaXRsZSIsIlJlYWN0IiwiVHJhZGVzT2ZQZXBwZXJCeU1vbnRoIiwiQ2hhcnRBcmVhIiwiQmFsYW5jZU9mUGVwcGVyVHJhZGVzIiwiYWxsVHJhZGVzIiwic2V0QWxsVHJhZGVzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJkYXRhIiwic2Vzc2lvbiIsInVzZXJJZCIsInVzZXIiLCJpZCIsIm1vbnRobHlTdW1zIiwibW9udGhseVdlaWdodHMiLCJhbm51YWxQcm9maXQiLCJmb3JtYXR0ZWRBbm51YWxQcm9maXQiLCJhbm51YWxIYXJ2ZXN0IiwiZm9ybWF0dGVkQW5udWFsSGFydmVzdCIsImZldGNoVHJhZGVzT2ZQZXBwZXIiLCJyZXNwb25zZSIsImZldGNoIiwianNvbiIsImZpbHRlcmVkVHJhZGVzIiwiZmlsdGVyIiwidHJhZGUiLCJjcmVhdG9yIiwiX2lkIiwidG9TdHJpbmciLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJjYWxjdWxhdGVNb250aGx5U3VtcyIsImNhbGN1bGF0ZU1vbnRobHlXZWlnaHRzIiwicmVkdWNlIiwidG90YWwiLCJzdW0iLCJ0b0xvY2FsZVN0cmluZyIsIndlaWdodCIsInRyYWRlcyIsImZvckVhY2giLCJtb250aCIsIkRhdGUiLCJkYXRlIiwiZ2V0TW9udGgiLCJ0b3RhbFN1bSIsIm1hcCIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsInRpdGxlIiwiZGl2IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/balance-of-pepper-trades/page.tsx\n"));

/***/ })

});