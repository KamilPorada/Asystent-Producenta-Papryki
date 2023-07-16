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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-client)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_UI_SectionTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/UI/SectionTitle */ \"(app-client)/./components/UI/SectionTitle.tsx\");\n/* harmony import */ var _components_Charts_TradesOfPepperByMonth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Charts/TradesOfPepperByMonth */ \"(app-client)/./components/Charts/TradesOfPepperByMonth.tsx\");\n/* harmony import */ var _components_Charts_NumberOfTradesPepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/Charts/NumberOfTradesPepper */ \"(app-client)/./components/Charts/NumberOfTradesPepper.tsx\");\n/* harmony import */ var _components_UI_ChartArea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/UI/ChartArea */ \"(app-client)/./components/UI/ChartArea.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction BalanceOfPepperTrades() {\n    var _ref;\n    _s();\n    const [allTrades, setAllTrades] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    var _id;\n    const userId = (_id = (_ref = session === null || session === void 0 ? void 0 : session.user) === null || _ref === void 0 ? void 0 : _ref.id) !== null && _id !== void 0 ? _id : \"\";\n    const fetchTradesOfPepper = async ()=>{\n        try {\n            const response = await fetch(\"/api/trade-of-pepper\");\n            const data = await response.json();\n            const filteredTrades = data.filter((trade)=>trade.creator._id.toString() === userId.toString());\n            setAllTrades(filteredTrades);\n        } catch (error) {\n            console.log(error);\n        } finally{\n            setLoading(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchTradesOfPepper();\n    }, [\n        loading\n    ]);\n    const calculateMonthlySums = (trades)=>{\n        const currentYear = new Date().getFullYear();\n        const monthlySums = [\n            0,\n            0,\n            0,\n            0,\n            0,\n            0\n        ];\n        trades.forEach((trade)=>{\n            const year = new Date(trade.date).getFullYear();\n            const month = new Date(trade.date).getMonth();\n            if (year === currentYear && month >= 5 && month <= 10) {\n                monthlySums[month - 5] += trade.totalSum;\n            }\n        });\n        return monthlySums.map((sum)=>parseFloat(sum.toFixed(2)));\n    };\n    const calculateMonthlyWeights = (trades)=>{\n        const currentYear = new Date().getFullYear();\n        const monthlyWeights = [\n            0,\n            0,\n            0,\n            0,\n            0,\n            0\n        ];\n        trades.forEach((trade)=>{\n            const year = new Date(trade.date).getFullYear();\n            const month = new Date(trade.date).getMonth();\n            if (year === currentYear && month >= 5 && month <= 10) {\n                monthlyWeights[month - 5] += trade.weight;\n            }\n        });\n        return monthlyWeights.map((weight)=>parseFloat(weight.toFixed(2)));\n    };\n    const calculateMonthlyTransactionCount = (trades)=>{\n        const currentYear = new Date().getFullYear();\n        const monthlyTransactionCounts = [\n            0,\n            0,\n            0,\n            0,\n            0,\n            0\n        ];\n        trades.forEach((trade)=>{\n            const year = new Date(trade.date).getFullYear();\n            const month = new Date(trade.date).getMonth();\n            if (year === currentYear && month >= 5 && month <= 10) {\n                monthlyTransactionCounts[month - 5] += 1;\n            }\n        });\n        return monthlyTransactionCounts;\n    };\n    const calculateColorWeights = (trades)=>{\n        const currentYear = new Date().getFullYear();\n        const colorWeights = {};\n        trades.forEach((trade)=>{\n            const year = new Date(trade.date).getFullYear();\n            const color = trade.color;\n            const weight = trade.weight;\n            if (year === currentYear) {\n                if (colorWeights[color]) {\n                    colorWeights[color] += weight;\n                } else {\n                    colorWeights[color] = weight;\n                }\n            }\n        });\n        return colorWeights;\n    };\n    const monthlySums = calculateMonthlySums(allTrades);\n    const monthlyWeights = calculateMonthlyWeights(allTrades);\n    const annualProfit = monthlySums.reduce((total, sum)=>total + sum, 0);\n    const formattedAnnualProfit = annualProfit.toLocaleString(\"pl-PL\");\n    const annualHarvest = monthlyWeights.reduce((total, weight)=>total + weight, 0);\n    const formattedAnnualHarvest = annualHarvest.toLocaleString(\"pl-PL\");\n    const monthlyTransactionCounts = calculateMonthlyTransactionCount(allTrades);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (allTrades.length > 0) {\n            const monthlySums = calculateMonthlySums(allTrades);\n            const monthlyWeights = calculateMonthlyWeights(allTrades);\n            const annualProfit = monthlySums.reduce((total, sum)=>total + sum, 0);\n            const formattedAnnualProfit = annualProfit.toLocaleString(\"pl-PL\");\n            const annualHarvest = monthlyWeights.reduce((total, weight)=>total + weight, 0);\n            const formattedAnnualHarvest = annualHarvest.toLocaleString(\"pl-PL\");\n            const monthlyTransactionCounts = calculateMonthlyTransactionCount(allTrades);\n        }\n    }, [\n        allTrades\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"container py-20 text-black\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_SectionTitle__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                title: \"Bilans sprzedaży papryki\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                lineNumber: 151,\n                columnNumber: 4\n            }, this),\n            allTrades.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row flex-wrap gap-6 justify-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_ChartArea__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        className: \"mt-4 w-full md:w-[770px]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-row justify-between mx-10\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: \"Roczne zyski:\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                                                lineNumber: 157,\n                                                columnNumber: 9\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-lg font-semibold text-mainColor\",\n                                                children: [\n                                                    formattedAnnualProfit,\n                                                    \" zł\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                                                lineNumber: 158,\n                                                columnNumber: 9\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                                        lineNumber: 156,\n                                        columnNumber: 8\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-right\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: \"Roczne zbiory:\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                                                lineNumber: 161,\n                                                columnNumber: 9\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-lg font-semibold text-mainColor\",\n                                                children: [\n                                                    formattedAnnualHarvest,\n                                                    \" kg\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                                                lineNumber: 162,\n                                                columnNumber: 9\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                                        lineNumber: 160,\n                                        columnNumber: 8\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                                lineNumber: 155,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Charts_TradesOfPepperByMonth__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                monthlySums: monthlySums,\n                                monthlyWeights: monthlyWeights\n                            }, void 0, false, {\n                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                                lineNumber: 165,\n                                columnNumber: 7\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                        lineNumber: 154,\n                        columnNumber: 6\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_ChartArea__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        className: \"mt-4 w-full md:w-[340px]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col justify-center items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-center mb-3\",\n                                    children: \"Liczba transakcji sprzedaży papryki na przestrzeni kolejnych miesięcy sezonu\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                                    lineNumber: 169,\n                                    columnNumber: 8\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Charts_NumberOfTradesPepper__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    monthlyTransactionCounts: monthlyTransactionCounts\n                                }, void 0, false, {\n                                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                                    lineNumber: 172,\n                                    columnNumber: 8\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                            lineNumber: 168,\n                            columnNumber: 7\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                        lineNumber: 167,\n                        columnNumber: 6\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                lineNumber: 153,\n                columnNumber: 5\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-10 md:text-lg text-center\",\n                children: \"Wczytywanie danych...\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                lineNumber: 177,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n        lineNumber: 150,\n        columnNumber: 3\n    }, this);\n}\n_s(BalanceOfPepperTrades, \"uvolFXoM9kh3jJrFNJwfdWegKEQ=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = BalanceOfPepperTrades;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BalanceOfPepperTrades);\nvar _c;\n$RefreshReg$(_c, \"BalanceOfPepperTrades\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2JhbGFuY2Utb2YtcGVwcGVyLXRyYWRlcy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDMkM7QUFDQztBQUNVO0FBQzdCO0FBQ21EO0FBQ0Y7QUFDMUI7QUFvQmhELFNBQVNRO1FBSU87O0lBSGYsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdWLCtDQUFRQSxDQUFrQixFQUFFO0lBQzlELE1BQU0sQ0FBQ1csU0FBU0MsV0FBVyxHQUFHWiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLEVBQUVhLE1BQU1DLE9BQU8sRUFBRSxHQUFHWiwyREFBVUE7UUFDckI7SUFBZixNQUFNYSxTQUFTLGVBQUNELG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBU0Usa0JBQVYsZ0NBQW9DQyxnQkFBcEMsdUJBQTBDO0lBRXpELE1BQU1DLHNCQUFzQjtRQUMzQixJQUFJO1lBQ0gsTUFBTUMsV0FBVyxNQUFNQyxNQUFNO1lBQzdCLE1BQU1QLE9BQU8sTUFBTU0sU0FBU0U7WUFFNUIsTUFBTUMsaUJBQWlCVCxLQUFLVSxPQUFPLENBQUNDLFFBQXlCQSxNQUFNQyxRQUFRQyxJQUFJQyxlQUFlWixPQUFPWTtZQUVyR2pCLGFBQWFZO1FBQ2QsRUFBRSxPQUFPTSxPQUFPO1lBQ2ZDLFFBQVFDLElBQUlGO1FBQ2IsU0FBVTtZQUNUaEIsV0FBVztRQUNaO0lBQ0Q7SUFFQVgsZ0RBQVNBLENBQUM7UUFDVGlCO0lBQ0QsR0FBRztRQUFDUDtLQUFRO0lBRVosTUFBTW9CLHVCQUF1QixDQUFDQztRQUM3QixNQUFNQyxjQUFjLElBQUlDLE9BQU9DO1FBQy9CLE1BQU1DLGNBQXdCO1lBQUM7WUFBRztZQUFHO1lBQUc7WUFBRztZQUFHO1NBQUU7UUFFaERKLE9BQU9LLFFBQVFiLENBQUFBO1lBQ2QsTUFBTWMsT0FBTyxJQUFJSixLQUFLVixNQUFNZSxNQUFNSjtZQUNsQyxNQUFNSyxRQUFRLElBQUlOLEtBQUtWLE1BQU1lLE1BQU1FO1lBRW5DLElB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QUFHO1FBQUNBO0tBQVU7SUFFZCxxQkFDQyw4REFBQ3NEO1FBQVFDLFdBQVU7OzBCQUNsQiw4REFBQzdELG1FQUFZQTtnQkFBQzhELE9BQU07Ozs7OztZQUNuQnhELFVBQVVxRCxTQUFTLGtCQUNuQiw4REFBQ0k7Z0JBQUlGLFdBQVU7O2tDQUNkLDhEQUFDekQsZ0VBQVNBO3dCQUFDeUQsV0FBVTs7MENBQ3BCLDhEQUFDRTtnQ0FBSUYsV0FBVTs7a0RBQ2QsOERBQUNFOzswREFDQSw4REFBQ0M7MERBQUU7Ozs7OzswREFDSCw4REFBQ0E7Z0RBQUVILFdBQVU7O29EQUF3Q047b0RBQXNCOzs7Ozs7Ozs7Ozs7O2tEQUU1RSw4REFBQ1E7d0NBQUlGLFdBQVU7OzBEQUNkLDhEQUFDRzswREFBRTs7Ozs7OzBEQUNILDhEQUFDQTtnREFBRUgsV0FBVTs7b0RBQXdDSDtvREFBdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBRzlFLDhEQUFDeEQsZ0ZBQXFCQTtnQ0FBQytCLGFBQWFBO2dDQUFhWSxnQkFBZ0JBOzs7Ozs7Ozs7Ozs7a0NBRWxFLDhEQUFDekMsZ0VBQVNBO3dCQUFDeUQsV0FBVTtrQ0FDcEIsNEVBQUNFOzRCQUFJRixXQUFVOzs4Q0FDZCw4REFBQ0c7b0NBQUVILFdBQVU7OENBQW1COzs7Ozs7OENBR2hDLDhEQUFDMUQsK0VBQW9CQTtvQ0FBQzZDLDBCQUEwQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUNBS25ELDhEQUFDZ0I7Z0JBQUVILFdBQVU7MEJBQStCOzs7Ozs7Ozs7Ozs7QUFJaEQ7R0F6SlN4RDs7UUFHa0JOLHVEQUFVQTs7O0tBSDVCTTtBQTJKVCwrREFBZUEscUJBQXFCQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9iYWxhbmNlLW9mLXBlcHBlci10cmFkZXMvcGFnZS50c3g/MzZiZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnXG5pbXBvcnQgU2VjdGlvblRpdGxlIGZyb20gJ0Bjb21wb25lbnRzL1VJL1NlY3Rpb25UaXRsZSdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBUcmFkZXNPZlBlcHBlckJ5TW9udGggZnJvbSAnQGNvbXBvbmVudHMvQ2hhcnRzL1RyYWRlc09mUGVwcGVyQnlNb250aCdcbmltcG9ydCBOdW1iZXJPZlRyYWRlc1BlcHBlciBmcm9tICdAY29tcG9uZW50cy9DaGFydHMvTnVtYmVyT2ZUcmFkZXNQZXBwZXInXG5pbXBvcnQgQ2hhcnRBcmVhIGZyb20gJ0Bjb21wb25lbnRzL1VJL0NoYXJ0QXJlYSdcblxuaW50ZXJmYWNlIFRyYWRlT2ZQZXBwZXIge1xuXHRfaWQ6IHN0cmluZ1xuXHRjcmVhdG9yOiB7XG5cdFx0X2lkOiBzdHJpbmdcblx0XHRlbWFpbDogc3RyaW5nXG5cdFx0dXNlcm5hbWU6IHN0cmluZ1xuXHRcdGltYWdlOiBzdHJpbmdcblx0fVxuXHRwb2ludE9mU2FsZUlkOiBzdHJpbmdcblx0ZGF0ZTogc3RyaW5nXG5cdGNsYXM6IG51bWJlclxuXHRjb2xvcjogbnVtYmVyXG5cdHByaWNlOiBudW1iZXJcblx0d2VpZ2h0OiBudW1iZXJcblx0dmF0UmF0ZTogbnVtYmVyXG5cdHRvdGFsU3VtOiBudW1iZXJcbn1cblxuZnVuY3Rpb24gQmFsYW5jZU9mUGVwcGVyVHJhZGVzKCkge1xuXHRjb25zdCBbYWxsVHJhZGVzLCBzZXRBbGxUcmFkZXNdID0gdXNlU3RhdGU8VHJhZGVPZlBlcHBlcltdPihbXSlcblx0Y29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcblx0Y29uc3QgeyBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKClcblx0Y29uc3QgdXNlcklkID0gKHNlc3Npb24/LnVzZXIgYXMgeyBpZD86IHN0cmluZyB9KT8uaWQgPz8gJydcblxuXHRjb25zdCBmZXRjaFRyYWRlc09mUGVwcGVyID0gYXN5bmMgKCkgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL3RyYWRlLW9mLXBlcHBlcicpXG5cdFx0XHRjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cblx0XHRcdGNvbnN0IGZpbHRlcmVkVHJhZGVzID0gZGF0YS5maWx0ZXIoKHRyYWRlOiBUcmFkZU9mUGVwcGVyKSA9PiB0cmFkZS5jcmVhdG9yLl9pZC50b1N0cmluZygpID09PSB1c2VySWQudG9TdHJpbmcoKSlcblxuXHRcdFx0c2V0QWxsVHJhZGVzKGZpbHRlcmVkVHJhZGVzKVxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhlcnJvcilcblx0XHR9IGZpbmFsbHkge1xuXHRcdFx0c2V0TG9hZGluZyhmYWxzZSlcblx0XHR9XG5cdH1cblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGZldGNoVHJhZGVzT2ZQZXBwZXIoKVxuXHR9LCBbbG9hZGluZ10pXG5cblx0Y29uc3QgY2FsY3VsYXRlTW9udGhseVN1bXMgPSAodHJhZGVzOiBUcmFkZU9mUGVwcGVyW10pOiBudW1iZXJbXSA9PiB7XG5cdFx0Y29uc3QgY3VycmVudFllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKClcblx0XHRjb25zdCBtb250aGx5U3VtczogbnVtYmVyW10gPSBbMCwgMCwgMCwgMCwgMCwgMF1cblxuXHRcdHRyYWRlcy5mb3JFYWNoKHRyYWRlID0+IHtcblx0XHRcdGNvbnN0IHllYXIgPSBuZXcgRGF0ZSh0cmFkZS5kYXRlKS5nZXRGdWxsWWVhcigpXG5cdFx0XHRjb25zdCBtb250aCA9IG5ldyBEYXRlKHRyYWRlLmRhdGUpLmdldE1vbnRoKClcblxuXHRcdFx0aWYgKHllYXIgPT09IGN1cnJlbnRZZWFyICYmIG1vbnRoID49IDUgJiYgbW9udGggPD0gMTApIHtcblx0XHRcdFx0bW9udGhseVN1bXNbbW9udGggLSA1XSArPSB0cmFkZS50b3RhbFN1bVxuXHRcdFx0fVxuXHRcdH0pXG5cblx0XHRyZXR1cm4gbW9udGhseVN1bXMubWFwKHN1bSA9PiBwYXJzZUZsb2F0KHN1bS50b0ZpeGVkKDIpKSlcblx0fVxuXG5cdGNvbnN0IGNhbGN1bGF0ZU1vbnRobHlXZWlnaHRzID0gKHRyYWRlczogVHJhZGVPZlBlcHBlcltdKTogbnVtYmVyW10gPT4ge1xuXHRcdGNvbnN0IGN1cnJlbnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpXG5cdFx0Y29uc3QgbW9udGhseVdlaWdodHM6IG51bWJlcltdID0gWzAsIDAsIDAsIDAsIDAsIDBdXG5cblx0XHR0cmFkZXMuZm9yRWFjaCh0cmFkZSA9PiB7XG5cdFx0XHRjb25zdCB5ZWFyID0gbmV3IERhdGUodHJhZGUuZGF0ZSkuZ2V0RnVsbFllYXIoKVxuXHRcdFx0Y29uc3QgbW9udGggPSBuZXcgRGF0ZSh0cmFkZS5kYXRlKS5nZXRNb250aCgpXG5cblx0XHRcdGlmICh5ZWFyID09PSBjdXJyZW50WWVhciAmJiBtb250aCA+PSA1ICYmIG1vbnRoIDw9IDEwKSB7XG5cdFx0XHRcdG1vbnRobHlXZWlnaHRzW21vbnRoIC0gNV0gKz0gdHJhZGUud2VpZ2h0XG5cdFx0XHR9XG5cdFx0fSlcblxuXHRcdHJldHVybiBtb250aGx5V2VpZ2h0cy5tYXAod2VpZ2h0ID0+IHBhcnNlRmxvYXQod2VpZ2h0LnRvRml4ZWQoMikpKVxuXHR9XG5cblx0Y29uc3QgY2FsY3VsYXRlTW9udGhseVRyYW5zYWN0aW9uQ291bnQgPSAodHJhZGVzOiBUcmFkZU9mUGVwcGVyW10pOiBudW1iZXJbXSA9PiB7XG5cdFx0Y29uc3QgY3VycmVudFllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKClcblx0XHRjb25zdCBtb250aGx5VHJhbnNhY3Rpb25Db3VudHM6IG51bWJlcltdID0gWzAsIDAsIDAsIDAsIDAsIDBdXG5cblx0XHR0cmFkZXMuZm9yRWFjaCh0cmFkZSA9PiB7XG5cdFx0XHRjb25zdCB5ZWFyID0gbmV3IERhdGUodHJhZGUuZGF0ZSkuZ2V0RnVsbFllYXIoKVxuXHRcdFx0Y29uc3QgbW9udGggPSBuZXcgRGF0ZSh0cmFkZS5kYXRlKS5nZXRNb250aCgpXG5cblx0XHRcdGlmICh5ZWFyID09PSBjdXJyZW50WWVhciAmJiBtb250aCA+PSA1ICYmIG1vbnRoIDw9IDEwKSB7XG5cdFx0XHRcdG1vbnRobHlUcmFuc2FjdGlvbkNvdW50c1ttb250aCAtIDVdICs9IDFcblx0XHRcdH1cblx0XHR9KVxuXG5cdFx0cmV0dXJuIG1vbnRobHlUcmFuc2FjdGlvbkNvdW50c1xuXHR9XG5cbiAgICBjb25zdCBjYWxjdWxhdGVDb2xvcldlaWdodHMgPSAodHJhZGVzOiBUcmFkZU9mUGVwcGVyW10pOiB7IFtjb2xvcjogbnVtYmVyXTogbnVtYmVyIH0gPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50WWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgY29uc3QgY29sb3JXZWlnaHRzOiB7IFtjb2xvcjogbnVtYmVyXTogbnVtYmVyIH0gPSB7fTtcbiAgICAgIFxuICAgICAgICB0cmFkZXMuZm9yRWFjaCgodHJhZGUpID0+IHtcbiAgICAgICAgICBjb25zdCB5ZWFyID0gbmV3IERhdGUodHJhZGUuZGF0ZSkuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgICBjb25zdCBjb2xvciA9IHRyYWRlLmNvbG9yO1xuICAgICAgICAgIGNvbnN0IHdlaWdodCA9IHRyYWRlLndlaWdodDtcbiAgICAgIFxuICAgICAgICAgIGlmICh5ZWFyID09PSBjdXJyZW50WWVhcikge1xuICAgICAgICAgICAgaWYgKGNvbG9yV2VpZ2h0c1tjb2xvcl0pIHtcbiAgICAgICAgICAgICAgY29sb3JXZWlnaHRzW2NvbG9yXSArPSB3ZWlnaHQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb2xvcldlaWdodHNbY29sb3JdID0gd2VpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICBcbiAgICAgICAgcmV0dXJuIGNvbG9yV2VpZ2h0cztcbiAgICAgIH07XG4gICAgICBcblxuXHRjb25zdCBtb250aGx5U3VtcyA9IGNhbGN1bGF0ZU1vbnRobHlTdW1zKGFsbFRyYWRlcylcblx0Y29uc3QgbW9udGhseVdlaWdodHMgPSBjYWxjdWxhdGVNb250aGx5V2VpZ2h0cyhhbGxUcmFkZXMpXG5cblx0Y29uc3QgYW5udWFsUHJvZml0ID0gbW9udGhseVN1bXMucmVkdWNlKCh0b3RhbCwgc3VtKSA9PiB0b3RhbCArIHN1bSwgMClcblx0Y29uc3QgZm9ybWF0dGVkQW5udWFsUHJvZml0ID0gYW5udWFsUHJvZml0LnRvTG9jYWxlU3RyaW5nKCdwbC1QTCcpXG5cblx0Y29uc3QgYW5udWFsSGFydmVzdCA9IG1vbnRobHlXZWlnaHRzLnJlZHVjZSgodG90YWwsIHdlaWdodCkgPT4gdG90YWwgKyB3ZWlnaHQsIDApXG5cdGNvbnN0IGZvcm1hdHRlZEFubnVhbEhhcnZlc3QgPSBhbm51YWxIYXJ2ZXN0LnRvTG9jYWxlU3RyaW5nKCdwbC1QTCcpXG5cblx0Y29uc3QgbW9udGhseVRyYW5zYWN0aW9uQ291bnRzID0gY2FsY3VsYXRlTW9udGhseVRyYW5zYWN0aW9uQ291bnQoYWxsVHJhZGVzKVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYgKGFsbFRyYWRlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRjb25zdCBtb250aGx5U3VtcyA9IGNhbGN1bGF0ZU1vbnRobHlTdW1zKGFsbFRyYWRlcylcblx0XHRcdGNvbnN0IG1vbnRobHlXZWlnaHRzID0gY2FsY3VsYXRlTW9udGhseVdlaWdodHMoYWxsVHJhZGVzKVxuXG5cdFx0XHRjb25zdCBhbm51YWxQcm9maXQgPSBtb250aGx5U3Vtcy5yZWR1Y2UoKHRvdGFsLCBzdW0pID0+IHRvdGFsICsgc3VtLCAwKVxuXHRcdFx0Y29uc3QgZm9ybWF0dGVkQW5udWFsUHJvZml0ID0gYW5udWFsUHJvZml0LnRvTG9jYWxlU3RyaW5nKCdwbC1QTCcpXG5cblx0XHRcdGNvbnN0IGFubnVhbEhhcnZlc3QgPSBtb250aGx5V2VpZ2h0cy5yZWR1Y2UoKHRvdGFsLCB3ZWlnaHQpID0+IHRvdGFsICsgd2VpZ2h0LCAwKVxuXHRcdFx0Y29uc3QgZm9ybWF0dGVkQW5udWFsSGFydmVzdCA9IGFubnVhbEhhcnZlc3QudG9Mb2NhbGVTdHJpbmcoJ3BsLVBMJylcblxuXHRcdFx0Y29uc3QgbW9udGhseVRyYW5zYWN0aW9uQ291bnRzID0gY2FsY3VsYXRlTW9udGhseVRyYW5zYWN0aW9uQ291bnQoYWxsVHJhZGVzKVxuXHRcdH1cblx0fSwgW2FsbFRyYWRlc10pXG5cblx0cmV0dXJuIChcblx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9J2NvbnRhaW5lciBweS0yMCB0ZXh0LWJsYWNrJz5cblx0XHRcdDxTZWN0aW9uVGl0bGUgdGl0bGU9J0JpbGFucyBzcHJ6ZWRhxbx5IHBhcHJ5a2knIC8+XG5cdFx0XHR7YWxsVHJhZGVzLmxlbmd0aCA+IDAgPyAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IGZsZXgtd3JhcCBnYXAtNiBqdXN0aWZ5LWNlbnRlcic+XG5cdFx0XHRcdFx0PENoYXJ0QXJlYSBjbGFzc05hbWU9J210LTQgdy1mdWxsIG1kOnctWzc3MHB4XSc+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gbXgtMTAnPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxwPlJvY3puZSB6eXNraTo8L3A+XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSd0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgdGV4dC1tYWluQ29sb3InPntmb3JtYXR0ZWRBbm51YWxQcm9maXR9IHrFgjwvcD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0ZXh0LXJpZ2h0Jz5cblx0XHRcdFx0XHRcdFx0XHQ8cD5Sb2N6bmUgemJpb3J5OjwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J3RleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LW1haW5Db2xvcic+e2Zvcm1hdHRlZEFubnVhbEhhcnZlc3R9IGtnPC9wPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PFRyYWRlc09mUGVwcGVyQnlNb250aCBtb250aGx5U3Vtcz17bW9udGhseVN1bXN9IG1vbnRobHlXZWlnaHRzPXttb250aGx5V2VpZ2h0c30gLz5cblx0XHRcdFx0XHQ8L0NoYXJ0QXJlYT5cblx0XHRcdFx0XHQ8Q2hhcnRBcmVhIGNsYXNzTmFtZT0nbXQtNCB3LWZ1bGwgbWQ6dy1bMzQwcHhdJz5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcic+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgbWItMyc+XG5cdFx0XHRcdFx0XHRcdFx0TGljemJhIHRyYW5zYWtjamkgc3ByemVkYcW8eSBwYXByeWtpIG5hIHByemVzdHJ6ZW5pIGtvbGVqbnljaCBtaWVzacSZY3kgc2V6b251XG5cdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0PE51bWJlck9mVHJhZGVzUGVwcGVyIG1vbnRobHlUcmFuc2FjdGlvbkNvdW50cz17bW9udGhseVRyYW5zYWN0aW9uQ291bnRzfSAvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9DaGFydEFyZWE+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KSA6IChcblx0XHRcdFx0PHAgY2xhc3NOYW1lPSdtdC0xMCBtZDp0ZXh0LWxnIHRleHQtY2VudGVyJz5XY3p5dHl3YW5pZSBkYW55Y2guLi48L3A+XG5cdFx0XHQpfVxuXHRcdDwvc2VjdGlvbj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYWxhbmNlT2ZQZXBwZXJUcmFkZXNcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVNlc3Npb24iLCJTZWN0aW9uVGl0bGUiLCJSZWFjdCIsIlRyYWRlc09mUGVwcGVyQnlNb250aCIsIk51bWJlck9mVHJhZGVzUGVwcGVyIiwiQ2hhcnRBcmVhIiwiQmFsYW5jZU9mUGVwcGVyVHJhZGVzIiwiYWxsVHJhZGVzIiwic2V0QWxsVHJhZGVzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJkYXRhIiwic2Vzc2lvbiIsInVzZXJJZCIsInVzZXIiLCJpZCIsImZldGNoVHJhZGVzT2ZQZXBwZXIiLCJyZXNwb25zZSIsImZldGNoIiwianNvbiIsImZpbHRlcmVkVHJhZGVzIiwiZmlsdGVyIiwidHJhZGUiLCJjcmVhdG9yIiwiX2lkIiwidG9TdHJpbmciLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJjYWxjdWxhdGVNb250aGx5U3VtcyIsInRyYWRlcyIsImN1cnJlbnRZZWFyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwibW9udGhseVN1bXMiLCJmb3JFYWNoIiwieWVhciIsImRhdGUiLCJtb250aCIsImdldE1vbnRoIiwidG90YWxTdW0iLCJtYXAiLCJzdW0iLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsImNhbGN1bGF0ZU1vbnRobHlXZWlnaHRzIiwibW9udGhseVdlaWdodHMiLCJ3ZWlnaHQiLCJjYWxjdWxhdGVNb250aGx5VHJhbnNhY3Rpb25Db3VudCIsIm1vbnRobHlUcmFuc2FjdGlvbkNvdW50cyIsImNhbGN1bGF0ZUNvbG9yV2VpZ2h0cyIsImNvbG9yV2VpZ2h0cyIsImNvbG9yIiwiYW5udWFsUHJvZml0IiwicmVkdWNlIiwidG90YWwiLCJmb3JtYXR0ZWRBbm51YWxQcm9maXQiLCJ0b0xvY2FsZVN0cmluZyIsImFubnVhbEhhcnZlc3QiLCJmb3JtYXR0ZWRBbm51YWxIYXJ2ZXN0IiwibGVuZ3RoIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsInRpdGxlIiwiZGl2IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/balance-of-pepper-trades/page.tsx\n"));

/***/ })

});