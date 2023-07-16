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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-client)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_UI_SectionTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/UI/SectionTitle */ \"(app-client)/./components/UI/SectionTitle.tsx\");\n/* harmony import */ var _components_Charts_TradesOfPepperByMonth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Charts/TradesOfPepperByMonth */ \"(app-client)/./components/Charts/TradesOfPepperByMonth.tsx\");\n/* harmony import */ var _components_Charts_NumberOfTradesPepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/Charts/NumberOfTradesPepper */ \"(app-client)/./components/Charts/NumberOfTradesPepper.tsx\");\n/* harmony import */ var _components_UI_ChartArea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/UI/ChartArea */ \"(app-client)/./components/UI/ChartArea.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction BalanceOfPepperTrades() {\n    var _ref;\n    _s();\n    const [allTrades, setAllTrades] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    var _id;\n    const userId = (_id = (_ref = session === null || session === void 0 ? void 0 : session.user) === null || _ref === void 0 ? void 0 : _ref.id) !== null && _id !== void 0 ? _id : \"\";\n    const fetchTradesOfPepper = async ()=>{\n        try {\n            const response = await fetch(\"/api/trade-of-pepper\");\n            const data = await response.json();\n            const filteredTrades = data.filter((trade)=>trade.creator._id.toString() === userId.toString());\n            setAllTrades(filteredTrades);\n        } catch (error) {\n            console.log(error);\n        } finally{\n            setLoading(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchTradesOfPepper();\n    }, [\n        loading\n    ]);\n    const calculateMonthlySums = (trades)=>{\n        const currentYear = new Date().getFullYear();\n        const monthlySums = [\n            0,\n            0,\n            0,\n            0,\n            0,\n            0\n        ];\n        trades.forEach((trade)=>{\n            const year = new Date(trade.date).getFullYear();\n            const month = new Date(trade.date).getMonth();\n            if (year === currentYear && month >= 5 && month <= 10) {\n                monthlySums[month - 5] += trade.totalSum;\n            }\n        });\n        return monthlySums.map((sum)=>parseFloat(sum.toFixed(2)));\n    };\n    const calculateMonthlyWeights = (trades)=>{\n        const currentYear = new Date().getFullYear();\n        const monthlyWeights = [\n            0,\n            0,\n            0,\n            0,\n            0,\n            0\n        ];\n        trades.forEach((trade)=>{\n            const year = new Date(trade.date).getFullYear();\n            const month = new Date(trade.date).getMonth();\n            if (year === currentYear && month >= 5 && month <= 10) {\n                monthlyWeights[month - 5] += trade.weight;\n            }\n        });\n        return monthlyWeights.map((weight)=>parseFloat(weight.toFixed(2)));\n    };\n    const calculateMonthlyTransactionCount = (trades)=>{\n        const currentYear = new Date().getFullYear();\n        const monthlyTransactionCounts = [\n            0,\n            0,\n            0,\n            0,\n            0,\n            0\n        ];\n        trades.forEach((trade)=>{\n            const year = new Date(trade.date).getFullYear();\n            const month = new Date(trade.date).getMonth();\n            if (year === currentYear && month >= 5 && month <= 10) {\n                monthlyTransactionCounts[month - 5] += 1;\n            }\n        });\n        return monthlyTransactionCounts;\n    };\n    const monthlySums = calculateMonthlySums(allTrades);\n    const monthlyWeights = calculateMonthlyWeights(allTrades);\n    const annualProfit = monthlySums.reduce((total, sum)=>total + sum, 0);\n    const formattedAnnualProfit = annualProfit.toLocaleString(\"pl-PL\");\n    const annualHarvest = monthlyWeights.reduce((total, weight)=>total + weight, 0);\n    const formattedAnnualHarvest = annualHarvest.toLocaleString(\"pl-PL\");\n    const monthlyTransactionCounts = calculateMonthlyTransactionCount(allTrades);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (allTrades.length > 0) {\n            const monthlySums = calculateMonthlySums(allTrades);\n            const monthlyWeights = calculateMonthlyWeights(allTrades);\n            const annualProfit = monthlySums.reduce((total, sum)=>total + sum, 0);\n            const formattedAnnualProfit = annualProfit.toLocaleString(\"pl-PL\");\n            const annualHarvest = monthlyWeights.reduce((total, weight)=>total + weight, 0);\n            const formattedAnnualHarvest = annualHarvest.toLocaleString(\"pl-PL\");\n            const monthlyTransactionCounts = calculateMonthlyTransactionCount(allTrades);\n        }\n    }, [\n        allTrades\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"container py-20 text-black\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_SectionTitle__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                title: \"Bilans sprzedaży papryki\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                lineNumber: 129,\n                columnNumber: 4\n            }, this),\n            allTrades.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row flex-wrap gap-6 justify-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_ChartArea__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        className: \"mt-4 w-full md:w-[770px]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-row justify-between mx-10\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: \"Roczne zyski:\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                                                lineNumber: 135,\n                                                columnNumber: 9\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-lg font-semibold text-mainColor\",\n                                                children: [\n                                                    formattedAnnualProfit,\n                                                    \" zł\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                                                lineNumber: 136,\n                                                columnNumber: 9\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                                        lineNumber: 134,\n                                        columnNumber: 8\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-right\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: \"Roczne zbiory:\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                                                lineNumber: 139,\n                                                columnNumber: 9\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-lg font-semibold text-mainColor\",\n                                                children: [\n                                                    formattedAnnualHarvest,\n                                                    \" kg\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                                                lineNumber: 140,\n                                                columnNumber: 9\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                                        lineNumber: 138,\n                                        columnNumber: 8\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                                lineNumber: 133,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Charts_TradesOfPepperByMonth__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                monthlySums: monthlySums,\n                                monthlyWeights: monthlyWeights\n                            }, void 0, false, {\n                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                                lineNumber: 143,\n                                columnNumber: 7\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                        lineNumber: 132,\n                        columnNumber: 6\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_ChartArea__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        className: \"mt-4 w-full lg:w-[340px]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col justify-center items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-center mb-3\",\n                                    children: \"Liczba transakcji sprzedaży papryki na przestrzeni kolejnych miesięcy sezonu\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                                    lineNumber: 147,\n                                    columnNumber: 8\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Charts_NumberOfTradesPepper__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    monthlyTransactionCounts: monthlyTransactionCounts\n                                }, void 0, false, {\n                                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                                    lineNumber: 150,\n                                    columnNumber: 8\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                            lineNumber: 146,\n                            columnNumber: 7\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                        lineNumber: 145,\n                        columnNumber: 6\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                lineNumber: 131,\n                columnNumber: 5\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-10 md:text-lg text-center\",\n                children: \"Wczytywanie danych...\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                lineNumber: 155,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n        lineNumber: 128,\n        columnNumber: 3\n    }, this);\n}\n_s(BalanceOfPepperTrades, \"uvolFXoM9kh3jJrFNJwfdWegKEQ=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = BalanceOfPepperTrades;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BalanceOfPepperTrades);\nvar _c;\n$RefreshReg$(_c, \"BalanceOfPepperTrades\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2JhbGFuY2Utb2YtcGVwcGVyLXRyYWRlcy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDMkM7QUFDQztBQUNVO0FBQzdCO0FBQ21EO0FBQ0Y7QUFDMUI7QUFvQmhELFNBQVNRO1FBSU87O0lBSGYsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdWLCtDQUFRQSxDQUFrQixFQUFFO0lBQzlELE1BQU0sQ0FBQ1csU0FBU0MsV0FBVyxHQUFHWiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLEVBQUVhLE1BQU1DLE9BQU8sRUFBRSxHQUFHWiwyREFBVUE7UUFDckI7SUFBZixNQUFNYSxTQUFTLGVBQUNELG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBU0Usa0JBQVYsZ0NBQW9DQyxnQkFBcEMsdUJBQTBDO0lBRXpELE1BQU1DLHNCQUFzQjtRQUMzQixJQUFJO1lBQ0gsTUFBTUMsV0FBVyxNQUFNQyxNQUFNO1lBQzdCLE1BQU1QLE9BQU8sTUFBTU0sU0FBU0U7WUFFNUIsTUFBTUMsaUJBQWlCVCxLQUFLVSxPQUFPLENBQUNDLFFBQXlCQSxNQUFNQyxRQUFRQyxJQUFJQyxlQUFlWixPQUFPWTtZQUVyR2pCLGFBQWFZO1FBQ2QsRUFBRSxPQUFPTSxPQUFPO1lBQ2ZDLFFBQVFDLElBQUlGO1FBQ2IsU0FBVTtZQUNUaEIsV0FBVztRQUNaO0lBQ0Q7SUFFQVgsZ0RBQVNBLENBQUM7UUFDVGlCO0lBQ0QsR0FBRztRQUFDUDtLQUFRO0lBRVosTUFBTW9CLHVCQUF1QixDQUFDQztRQUM3QixNQUFNQyxjQUFjLElBQUlDLE9BQU9DO1FBQy9CLE1BQU1DLGNBQXdCO1lBQUM7WUFBRztZQUFHO1lBQUc7WUFBRztZQUFHO1NBQUU7UUFFaERKLE9BQU9LLFFBQVFiLENBQUFBO1lBQ2QsTUFBTWMsT0FBTyxJQUFJSixLQUFLVixNQUFNZSxNQUFNSjtZQUNsQyxNQUFNSyxRQUFRLElBQUlOLEtBQUtWLE1BQU1lLE1BQU1FO1lBRW5DLElB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QVU7O29EQUF3Q0g7b0RBQXVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUc5RSw4REFBQ3JELGdGQUFxQkE7Z0NBQUMrQixhQUFhQTtnQ0FBYVksZ0JBQWdCQTs7Ozs7Ozs7Ozs7O2tDQUVsRSw4REFBQ3pDLGdFQUFTQTt3QkFBQ3NELFdBQVU7a0NBQ3BCLDRFQUFDRTs0QkFBSUYsV0FBVTs7OENBQ2QsOERBQUNHO29DQUFFSCxXQUFVOzhDQUFtQjs7Ozs7OzhDQUdoQyw4REFBQ3ZELCtFQUFvQkE7b0NBQUM2QywwQkFBMEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FDQUtuRCw4REFBQ2E7Z0JBQUVILFdBQVU7MEJBQStCOzs7Ozs7Ozs7Ozs7QUFJaEQ7R0FuSVNyRDs7UUFHa0JOLHVEQUFVQTs7O0tBSDVCTTtBQXFJVCwrREFBZUEscUJBQXFCQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9iYWxhbmNlLW9mLXBlcHBlci10cmFkZXMvcGFnZS50c3g/MzZiZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnXG5pbXBvcnQgU2VjdGlvblRpdGxlIGZyb20gJ0Bjb21wb25lbnRzL1VJL1NlY3Rpb25UaXRsZSdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBUcmFkZXNPZlBlcHBlckJ5TW9udGggZnJvbSAnQGNvbXBvbmVudHMvQ2hhcnRzL1RyYWRlc09mUGVwcGVyQnlNb250aCdcbmltcG9ydCBOdW1iZXJPZlRyYWRlc1BlcHBlciBmcm9tICdAY29tcG9uZW50cy9DaGFydHMvTnVtYmVyT2ZUcmFkZXNQZXBwZXInXG5pbXBvcnQgQ2hhcnRBcmVhIGZyb20gJ0Bjb21wb25lbnRzL1VJL0NoYXJ0QXJlYSdcblxuaW50ZXJmYWNlIFRyYWRlT2ZQZXBwZXIge1xuXHRfaWQ6IHN0cmluZ1xuXHRjcmVhdG9yOiB7XG5cdFx0X2lkOiBzdHJpbmdcblx0XHRlbWFpbDogc3RyaW5nXG5cdFx0dXNlcm5hbWU6IHN0cmluZ1xuXHRcdGltYWdlOiBzdHJpbmdcblx0fVxuXHRwb2ludE9mU2FsZUlkOiBzdHJpbmdcblx0ZGF0ZTogc3RyaW5nXG5cdGNsYXM6IG51bWJlclxuXHRjb2xvcjogbnVtYmVyXG5cdHByaWNlOiBudW1iZXJcblx0d2VpZ2h0OiBudW1iZXJcblx0dmF0UmF0ZTogbnVtYmVyXG5cdHRvdGFsU3VtOiBudW1iZXJcbn1cblxuZnVuY3Rpb24gQmFsYW5jZU9mUGVwcGVyVHJhZGVzKCkge1xuXHRjb25zdCBbYWxsVHJhZGVzLCBzZXRBbGxUcmFkZXNdID0gdXNlU3RhdGU8VHJhZGVPZlBlcHBlcltdPihbXSlcblx0Y29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcblx0Y29uc3QgeyBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKClcblx0Y29uc3QgdXNlcklkID0gKHNlc3Npb24/LnVzZXIgYXMgeyBpZD86IHN0cmluZyB9KT8uaWQgPz8gJydcblxuXHRjb25zdCBmZXRjaFRyYWRlc09mUGVwcGVyID0gYXN5bmMgKCkgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL3RyYWRlLW9mLXBlcHBlcicpXG5cdFx0XHRjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cblx0XHRcdGNvbnN0IGZpbHRlcmVkVHJhZGVzID0gZGF0YS5maWx0ZXIoKHRyYWRlOiBUcmFkZU9mUGVwcGVyKSA9PiB0cmFkZS5jcmVhdG9yLl9pZC50b1N0cmluZygpID09PSB1c2VySWQudG9TdHJpbmcoKSlcblxuXHRcdFx0c2V0QWxsVHJhZGVzKGZpbHRlcmVkVHJhZGVzKVxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhlcnJvcilcblx0XHR9IGZpbmFsbHkge1xuXHRcdFx0c2V0TG9hZGluZyhmYWxzZSlcblx0XHR9XG5cdH1cblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGZldGNoVHJhZGVzT2ZQZXBwZXIoKVxuXHR9LCBbbG9hZGluZ10pXG5cblx0Y29uc3QgY2FsY3VsYXRlTW9udGhseVN1bXMgPSAodHJhZGVzOiBUcmFkZU9mUGVwcGVyW10pOiBudW1iZXJbXSA9PiB7XG5cdFx0Y29uc3QgY3VycmVudFllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKClcblx0XHRjb25zdCBtb250aGx5U3VtczogbnVtYmVyW10gPSBbMCwgMCwgMCwgMCwgMCwgMF1cblxuXHRcdHRyYWRlcy5mb3JFYWNoKHRyYWRlID0+IHtcblx0XHRcdGNvbnN0IHllYXIgPSBuZXcgRGF0ZSh0cmFkZS5kYXRlKS5nZXRGdWxsWWVhcigpXG5cdFx0XHRjb25zdCBtb250aCA9IG5ldyBEYXRlKHRyYWRlLmRhdGUpLmdldE1vbnRoKClcblxuXHRcdFx0aWYgKHllYXIgPT09IGN1cnJlbnRZZWFyICYmIG1vbnRoID49IDUgJiYgbW9udGggPD0gMTApIHtcblx0XHRcdFx0bW9udGhseVN1bXNbbW9udGggLSA1XSArPSB0cmFkZS50b3RhbFN1bVxuXHRcdFx0fVxuXHRcdH0pXG5cblx0XHRyZXR1cm4gbW9udGhseVN1bXMubWFwKHN1bSA9PiBwYXJzZUZsb2F0KHN1bS50b0ZpeGVkKDIpKSlcblx0fVxuXG5cdGNvbnN0IGNhbGN1bGF0ZU1vbnRobHlXZWlnaHRzID0gKHRyYWRlczogVHJhZGVPZlBlcHBlcltdKTogbnVtYmVyW10gPT4ge1xuXHRcdGNvbnN0IGN1cnJlbnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpXG5cdFx0Y29uc3QgbW9udGhseVdlaWdodHM6IG51bWJlcltdID0gWzAsIDAsIDAsIDAsIDAsIDBdXG5cblx0XHR0cmFkZXMuZm9yRWFjaCh0cmFkZSA9PiB7XG5cdFx0XHRjb25zdCB5ZWFyID0gbmV3IERhdGUodHJhZGUuZGF0ZSkuZ2V0RnVsbFllYXIoKVxuXHRcdFx0Y29uc3QgbW9udGggPSBuZXcgRGF0ZSh0cmFkZS5kYXRlKS5nZXRNb250aCgpXG5cblx0XHRcdGlmICh5ZWFyID09PSBjdXJyZW50WWVhciAmJiBtb250aCA+PSA1ICYmIG1vbnRoIDw9IDEwKSB7XG5cdFx0XHRcdG1vbnRobHlXZWlnaHRzW21vbnRoIC0gNV0gKz0gdHJhZGUud2VpZ2h0XG5cdFx0XHR9XG5cdFx0fSlcblxuXHRcdHJldHVybiBtb250aGx5V2VpZ2h0cy5tYXAod2VpZ2h0ID0+IHBhcnNlRmxvYXQod2VpZ2h0LnRvRml4ZWQoMikpKVxuXHR9XG5cblx0Y29uc3QgY2FsY3VsYXRlTW9udGhseVRyYW5zYWN0aW9uQ291bnQgPSAodHJhZGVzOiBUcmFkZU9mUGVwcGVyW10pOiBudW1iZXJbXSA9PiB7XG5cdFx0Y29uc3QgY3VycmVudFllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKClcblx0XHRjb25zdCBtb250aGx5VHJhbnNhY3Rpb25Db3VudHM6IG51bWJlcltdID0gWzAsIDAsIDAsIDAsIDAsIDBdXG5cblx0XHR0cmFkZXMuZm9yRWFjaCh0cmFkZSA9PiB7XG5cdFx0XHRjb25zdCB5ZWFyID0gbmV3IERhdGUodHJhZGUuZGF0ZSkuZ2V0RnVsbFllYXIoKVxuXHRcdFx0Y29uc3QgbW9udGggPSBuZXcgRGF0ZSh0cmFkZS5kYXRlKS5nZXRNb250aCgpXG5cblx0XHRcdGlmICh5ZWFyID09PSBjdXJyZW50WWVhciAmJiBtb250aCA+PSA1ICYmIG1vbnRoIDw9IDEwKSB7XG5cdFx0XHRcdG1vbnRobHlUcmFuc2FjdGlvbkNvdW50c1ttb250aCAtIDVdICs9IDFcblx0XHRcdH1cblx0XHR9KVxuXG5cdFx0cmV0dXJuIG1vbnRobHlUcmFuc2FjdGlvbkNvdW50c1xuXHR9XG5cblx0Y29uc3QgbW9udGhseVN1bXMgPSBjYWxjdWxhdGVNb250aGx5U3VtcyhhbGxUcmFkZXMpXG5cdGNvbnN0IG1vbnRobHlXZWlnaHRzID0gY2FsY3VsYXRlTW9udGhseVdlaWdodHMoYWxsVHJhZGVzKVxuXG5cdGNvbnN0IGFubnVhbFByb2ZpdCA9IG1vbnRobHlTdW1zLnJlZHVjZSgodG90YWwsIHN1bSkgPT4gdG90YWwgKyBzdW0sIDApXG5cdGNvbnN0IGZvcm1hdHRlZEFubnVhbFByb2ZpdCA9IGFubnVhbFByb2ZpdC50b0xvY2FsZVN0cmluZygncGwtUEwnKVxuXG5cdGNvbnN0IGFubnVhbEhhcnZlc3QgPSBtb250aGx5V2VpZ2h0cy5yZWR1Y2UoKHRvdGFsLCB3ZWlnaHQpID0+IHRvdGFsICsgd2VpZ2h0LCAwKVxuXHRjb25zdCBmb3JtYXR0ZWRBbm51YWxIYXJ2ZXN0ID0gYW5udWFsSGFydmVzdC50b0xvY2FsZVN0cmluZygncGwtUEwnKVxuXG5cdGNvbnN0IG1vbnRobHlUcmFuc2FjdGlvbkNvdW50cyA9IGNhbGN1bGF0ZU1vbnRobHlUcmFuc2FjdGlvbkNvdW50KGFsbFRyYWRlcylcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGlmIChhbGxUcmFkZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0Y29uc3QgbW9udGhseVN1bXMgPSBjYWxjdWxhdGVNb250aGx5U3VtcyhhbGxUcmFkZXMpXG5cdFx0XHRjb25zdCBtb250aGx5V2VpZ2h0cyA9IGNhbGN1bGF0ZU1vbnRobHlXZWlnaHRzKGFsbFRyYWRlcylcblxuXHRcdFx0Y29uc3QgYW5udWFsUHJvZml0ID0gbW9udGhseVN1bXMucmVkdWNlKCh0b3RhbCwgc3VtKSA9PiB0b3RhbCArIHN1bSwgMClcblx0XHRcdGNvbnN0IGZvcm1hdHRlZEFubnVhbFByb2ZpdCA9IGFubnVhbFByb2ZpdC50b0xvY2FsZVN0cmluZygncGwtUEwnKVxuXG5cdFx0XHRjb25zdCBhbm51YWxIYXJ2ZXN0ID0gbW9udGhseVdlaWdodHMucmVkdWNlKCh0b3RhbCwgd2VpZ2h0KSA9PiB0b3RhbCArIHdlaWdodCwgMClcblx0XHRcdGNvbnN0IGZvcm1hdHRlZEFubnVhbEhhcnZlc3QgPSBhbm51YWxIYXJ2ZXN0LnRvTG9jYWxlU3RyaW5nKCdwbC1QTCcpXG5cblx0XHRcdGNvbnN0IG1vbnRobHlUcmFuc2FjdGlvbkNvdW50cyA9IGNhbGN1bGF0ZU1vbnRobHlUcmFuc2FjdGlvbkNvdW50KGFsbFRyYWRlcylcblx0XHR9XG5cdH0sIFthbGxUcmFkZXNdKVxuXG5cdHJldHVybiAoXG5cdFx0PHNlY3Rpb24gY2xhc3NOYW1lPSdjb250YWluZXIgcHktMjAgdGV4dC1ibGFjayc+XG5cdFx0XHQ8U2VjdGlvblRpdGxlIHRpdGxlPSdCaWxhbnMgc3ByemVkYcW8eSBwYXByeWtpJyAvPlxuXHRcdFx0e2FsbFRyYWRlcy5sZW5ndGggPiAwID8gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBmbGV4LXdyYXAgZ2FwLTYganVzdGlmeS1jZW50ZXInPlxuXHRcdFx0XHRcdDxDaGFydEFyZWEgY2xhc3NOYW1lPSdtdC00IHctZnVsbCBtZDp3LVs3NzBweF0nPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIG14LTEwJz5cblx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHQ8cD5Sb2N6bmUgenlza2k6PC9wPlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0ndGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtbWFpbkNvbG9yJz57Zm9ybWF0dGVkQW5udWFsUHJvZml0fSB6xYI8L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndGV4dC1yaWdodCc+XG5cdFx0XHRcdFx0XHRcdFx0PHA+Um9jem5lIHpiaW9yeTo8L3A+XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSd0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgdGV4dC1tYWluQ29sb3InPntmb3JtYXR0ZWRBbm51YWxIYXJ2ZXN0fSBrZzwvcD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxUcmFkZXNPZlBlcHBlckJ5TW9udGggbW9udGhseVN1bXM9e21vbnRobHlTdW1zfSBtb250aGx5V2VpZ2h0cz17bW9udGhseVdlaWdodHN9IC8+XG5cdFx0XHRcdFx0PC9DaGFydEFyZWE+XG5cdFx0XHRcdFx0PENoYXJ0QXJlYSBjbGFzc05hbWU9J210LTQgdy1mdWxsIGxnOnctWzM0MHB4XSc+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXInPlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J3RleHQtY2VudGVyIG1iLTMnPlxuXHRcdFx0XHRcdFx0XHRcdExpY3piYSB0cmFuc2FrY2ppIHNwcnplZGHFvHkgcGFwcnlraSBuYSBwcnplc3RyemVuaSBrb2xlam55Y2ggbWllc2nEmWN5IHNlem9udVxuXHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdDxOdW1iZXJPZlRyYWRlc1BlcHBlciBtb250aGx5VHJhbnNhY3Rpb25Db3VudHM9e21vbnRobHlUcmFuc2FjdGlvbkNvdW50c30gLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvQ2hhcnRBcmVhPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCkgOiAoXG5cdFx0XHRcdDxwIGNsYXNzTmFtZT0nbXQtMTAgbWQ6dGV4dC1sZyB0ZXh0LWNlbnRlcic+V2N6eXR5d2FuaWUgZGFueWNoLi4uPC9wPlxuXHRcdFx0KX1cblx0XHQ8L3NlY3Rpb24+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFsYW5jZU9mUGVwcGVyVHJhZGVzXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VTZXNzaW9uIiwiU2VjdGlvblRpdGxlIiwiUmVhY3QiLCJUcmFkZXNPZlBlcHBlckJ5TW9udGgiLCJOdW1iZXJPZlRyYWRlc1BlcHBlciIsIkNoYXJ0QXJlYSIsIkJhbGFuY2VPZlBlcHBlclRyYWRlcyIsImFsbFRyYWRlcyIsInNldEFsbFRyYWRlcyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZGF0YSIsInNlc3Npb24iLCJ1c2VySWQiLCJ1c2VyIiwiaWQiLCJmZXRjaFRyYWRlc09mUGVwcGVyIiwicmVzcG9uc2UiLCJmZXRjaCIsImpzb24iLCJmaWx0ZXJlZFRyYWRlcyIsImZpbHRlciIsInRyYWRlIiwiY3JlYXRvciIsIl9pZCIsInRvU3RyaW5nIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiY2FsY3VsYXRlTW9udGhseVN1bXMiLCJ0cmFkZXMiLCJjdXJyZW50WWVhciIsIkRhdGUiLCJnZXRGdWxsWWVhciIsIm1vbnRobHlTdW1zIiwiZm9yRWFjaCIsInllYXIiLCJkYXRlIiwibW9udGgiLCJnZXRNb250aCIsInRvdGFsU3VtIiwibWFwIiwic3VtIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJjYWxjdWxhdGVNb250aGx5V2VpZ2h0cyIsIm1vbnRobHlXZWlnaHRzIiwid2VpZ2h0IiwiY2FsY3VsYXRlTW9udGhseVRyYW5zYWN0aW9uQ291bnQiLCJtb250aGx5VHJhbnNhY3Rpb25Db3VudHMiLCJhbm51YWxQcm9maXQiLCJyZWR1Y2UiLCJ0b3RhbCIsImZvcm1hdHRlZEFubnVhbFByb2ZpdCIsInRvTG9jYWxlU3RyaW5nIiwiYW5udWFsSGFydmVzdCIsImZvcm1hdHRlZEFubnVhbEhhcnZlc3QiLCJsZW5ndGgiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwidGl0bGUiLCJkaXYiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/balance-of-pepper-trades/page.tsx\n"));

/***/ })

});