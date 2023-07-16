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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-client)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_UI_SectionTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/UI/SectionTitle */ \"(app-client)/./components/UI/SectionTitle.tsx\");\n/* harmony import */ var _components_Charts_TradesOfPepperByMonth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Charts/TradesOfPepperByMonth */ \"(app-client)/./components/Charts/TradesOfPepperByMonth.tsx\");\n/* harmony import */ var _components_UI_ChartArea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/UI/ChartArea */ \"(app-client)/./components/UI/ChartArea.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction BalanceOfPepperTrades() {\n    var _ref;\n    _s();\n    const [allTrades, setAllTrades] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    var _id;\n    const userId = (_id = (_ref = session === null || session === void 0 ? void 0 : session.user) === null || _ref === void 0 ? void 0 : _ref.id) !== null && _id !== void 0 ? _id : \"\";\n    const fetchTradesOfPepper = async ()=>{\n        try {\n            const response = await fetch(\"/api/trade-of-pepper\");\n            const data = await response.json();\n            const filteredTrades = data.filter((trade)=>trade.creator._id.toString() === userId.toString());\n            setAllTrades(filteredTrades);\n        } catch (error) {\n            console.log(error);\n        } finally{\n            setLoading(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchTradesOfPepper();\n    }, [\n        loading\n    ]);\n    const calculateMonthlySums = (trades)=>{\n        const monthlySums = [\n            0,\n            0,\n            0,\n            0,\n            0,\n            0\n        ] // Inicjalizacja tablicy z zerowymi sumami\n        ;\n        trades.forEach((trade)=>{\n            const month = new Date(trade.date).getMonth();\n            if (month >= 5 && month <= 10) {\n                // Uwzględnienie transakcji z czerwca do listopada (indeksy 5-10)\n                monthlySums[month - 5] += trade.totalSum;\n            }\n        });\n        return monthlySums.map((sum)=>parseFloat(sum.toFixed(2)));\n    };\n    const calculateMonthlyWeights = (trades)=>{\n        const monthlyWeights = [\n            0,\n            0,\n            0,\n            0,\n            0,\n            0\n        ] // Inicjalizacja tablicy z zerowymi wagami\n        ;\n        trades.forEach((trade)=>{\n            const month = new Date(trade.date).getMonth();\n            if (month >= 5 && month <= 10) {\n                // Uwzględnienie transakcji z czerwca do listopada (indeksy 5-10)\n                monthlyWeights[month - 5] += trade.weight;\n            }\n        });\n        return monthlyWeights.map((weight)=>parseFloat(weight.toFixed(2)));\n    };\n    const calculateMonthlyTransactionCount = (trades)=>{\n        const monthlyTransactionCounts = [\n            0,\n            0,\n            0,\n            0,\n            0,\n            0\n        ] // Inicjalizacja tablicy z zerową liczbą transakcji\n        ;\n        trades.forEach((trade)=>{\n            const month = new Date(trade.date).getMonth();\n            if (month >= 5 && month <= 10) {\n                // Uwzględnienie transakcji z czerwca do listopada (indeksy 5-10)\n                monthlyTransactionCounts[month - 5] += 1;\n            }\n        });\n        return monthlyTransactionCounts;\n    };\n    const monthlySums = calculateMonthlySums(allTrades);\n    const monthlyWeights = calculateMonthlyWeights(allTrades);\n    const annualProfit = monthlySums.reduce((total, sum)=>total + sum, 0);\n    const formattedAnnualProfit = annualProfit.toLocaleString(\"pl-PL\");\n    const annualHarvest = monthlyWeights.reduce((total, weight)=>total + weight, 0);\n    const formattedAnnualHarvest = annualHarvest.toLocaleString(\"pl-PL\");\n    const monthlyTransactionCounts = calculateMonthlyTransactionCount(allTrades);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (allTrades.length > 0) {\n            const monthlySums = calculateMonthlySums(allTrades);\n            const monthlyWeights = calculateMonthlyWeights(allTrades);\n            const annualProfit = monthlySums.reduce((total, sum)=>total + sum, 0);\n            const formattedAnnualProfit = annualProfit.toLocaleString(\"pl-PL\");\n            const annualHarvest = monthlyWeights.reduce((total, weight)=>total + weight, 0);\n            const formattedAnnualHarvest = annualHarvest.toLocaleString(\"pl-PL\");\n        }\n    }, [\n        allTrades\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"container py-20 text-black\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_SectionTitle__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                title: \"Bilans sprzedaży papryki\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                lineNumber: 123,\n                columnNumber: 4\n            }, this),\n            allTrades.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_ChartArea__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                className: \"mt-4 w-full md:w-[820px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row justify-between mx-10\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Roczne zyski:\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                                        lineNumber: 128,\n                                        columnNumber: 8\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-lg font-semibold text-mainColor\",\n                                        children: [\n                                            formattedAnnualProfit,\n                                            \" zł\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                                        lineNumber: 129,\n                                        columnNumber: 8\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                                lineNumber: 127,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-right\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Roczne zbiory:\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                                        lineNumber: 132,\n                                        columnNumber: 8\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-lg font-semibold text-mainColor\",\n                                        children: [\n                                            formattedAnnualHarvest,\n                                            \" kg\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                                        lineNumber: 133,\n                                        columnNumber: 8\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                                lineNumber: 131,\n                                columnNumber: 7\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                        lineNumber: 126,\n                        columnNumber: 6\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Charts_TradesOfPepperByMonth__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        monthlySums: monthlySums,\n                        monthlyWeights: monthlyWeights\n                    }, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                        lineNumber: 136,\n                        columnNumber: 6\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                lineNumber: 125,\n                columnNumber: 5\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-10 md:text-lg text-center\",\n                children: \"Wczytywanie danych...\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                lineNumber: 139,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n        lineNumber: 122,\n        columnNumber: 3\n    }, this);\n}\n_s(BalanceOfPepperTrades, \"uvolFXoM9kh3jJrFNJwfdWegKEQ=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = BalanceOfPepperTrades;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BalanceOfPepperTrades);\nvar _c;\n$RefreshReg$(_c, \"BalanceOfPepperTrades\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2JhbGFuY2Utb2YtcGVwcGVyLXRyYWRlcy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUMyQztBQUNDO0FBQ1U7QUFDN0I7QUFDbUQ7QUFDNUI7QUFvQmhELFNBQVNPO1FBSU87O0lBSGYsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdULCtDQUFRQSxDQUFrQixFQUFFO0lBQzlELE1BQU0sQ0FBQ1UsU0FBU0MsV0FBVyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLEVBQUVZLE1BQU1DLE9BQU8sRUFBRSxHQUFHWCwyREFBVUE7UUFDckI7SUFBZixNQUFNWSxTQUFTLGVBQUNELG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBU0Usa0JBQVYsZ0NBQW9DQyxnQkFBcEMsdUJBQTBDO0lBRXpELE1BQU1DLHNCQUFzQjtRQUMzQixJQUFJO1lBQ0gsTUFBTUMsV0FBVyxNQUFNQyxNQUFNO1lBQzdCLE1BQU1QLE9BQU8sTUFBTU0sU0FBU0U7WUFFNUIsTUFBTUMsaUJBQWlCVCxLQUFLVSxPQUFPLENBQUNDLFFBQXlCQSxNQUFNQyxRQUFRQyxJQUFJQyxlQUFlWixPQUFPWTtZQUVyR2pCLGFBQWFZO1FBQ2QsRUFBRSxPQUFPTSxPQUFPO1lBQ2ZDLFFBQVFDLElBQUlGO1FBQ2IsU0FBVTtZQUNUaEIsV0FBVztRQUNaO0lBQ0Q7SUFFQVYsZ0RBQVNBLENBQUM7UUFDVGdCO0lBQ0QsR0FBRztRQUFDUDtLQUFRO0lBRVosTUFBTW9CLHVCQUF1QixDQUFDQztRQUM3QixNQUFNQyxjQUF3QjtZQUFDO1lBQUc7WUFBRztZQUFHO1lBQUc7WUFBRztTQUFFLENBQUMsMENBQTBDOztRQUUzRkQsT0FBT0UsUUFBUVYsQ0FBQUE7WUFDZCxNQUFNVyxRQUFRLElBQUlDLEtBQUtaLE1BQU1hLE1BQU1DO1lBRW5DLElBQUlILFNBQVMsS0FBS0EsU0FBUyxJQUFJO2dCQUM5QixpRUFBaUU7Z0JBQ2pFRixXQUFXLENBQUNFLFFBQVEsRUFBRSxJQUFJWCxNQUFNZTtZQUNqQztRQUNEO1FBRUEsT0FBT04sWUFBWU8sSUFBSUMsQ0FBQUEsTUFBT0MsV0FBV0QsSUFBSUUsUUFBUTtJQUN0RDtJQUVBLE1BQU1DLDBCQUEwQixDQUFDWjtRQUNoQyxNQUFNYSxpQkFBMkI7WUFBQztZQUFHO1lBQUc7WUFBRztZQUFHO1lBQUc7U0FBRSxDQUFDLDBDQUEwQzs7UUFFOUZiLE9BQU9FLFFBQVFWLENBQUFBO1lBQ2QsTUFBTVcsUUFBUSxJQUFJQyxLQUFLWixNQUFNYSxNQUFNQztZQUVuQyxJQUFJSCxTQUFTLEtBQUtBLFNBQVMsSUFBSTtnQkFDOUIsaUVBQWlFO2dCQUNqRVUsY0FBYyxDQUFDVixRQUFRLEVBQUUsSUFBSVgsTUFBTXNCO1lBQ3BDO1FBQ0Q7UUFFQSxPQUFPRCxlQUFlTCxJQUFJTSxDQUFBQSxTQUFVSixXQUFXSSxPQUFPSCxRQUFRO0lBQy9EO0lBRUEsTUFBTUksbUNBQW1DLENBQUNmO1FBQ3pDLE1BQU1nQiwyQkFBcUM7WUFBQztZQUFHO1lBQUc7WUFBRztZQUFHO1lBQUc7U0FBRSxDQUFDLG1EQUFtRDs7UUFFakhoQixPQUFPRSxRQUFRVixDQUFBQTtZQUNkLE1BQU1XLFFBQVEsSUFBSUMsS0FBS1osTUFBTWEsTUFBTUM7WUFFbkMsSUFBSUgsU0FBUyxLQUFLQSxTQUFTLElBQUk7Z0JBQzlCLGlFQUFpRTtnQkFDakVhLHdCQUF3QixDQUFDYixRQUFRLEVBQUUsSUFBSTtZQUN4QztRQUNEO1FBRUEsT0FBT2E7SUFDUjtJQUVBLE1BQU1mLGNBQWNGLHFCQUFxQnRCO0lBQ3pDLE1BQU1vQyxpQkFBaUJELHdCQUF3Qm5DO0lBRS9DLE1BQU13QyxlQUFlaEIsWUFBWWlCLE9BQU8sQ0FBQ0MsT0FBT1YsTUFBUVUsUUFBUVYsS0FBSztJQUNyRSxNQUFNVyx3QkFBd0JILGFBQWFJLGVBQWU7SUFFMUQsTUFBTUMsZ0JBQWdCVCxlQUFlSyxPQUFPLENBQUNDLE9BQU9MLFNBQVdLLFFBQVFMLFFBQVE7SUFDL0UsTUFBTVMseUJBQXlCRCxjQUFjRCxlQUFlO0lBRXpELE1BQU1MLDJCQUEyQkQsaUNBQWlDdEM7SUFFckVQLGdEQUFTQSxDQUFDO1FBQ1QsSUFBSU8sVUFBVStDLFNBQVMsR0FBRztZQUN6QixNQUFNdkIsY0FBY0YscUJBQXFCdEI7WUFDekMsTUFBTW9DLGlCQUFpQkQsd0JBQXdCbkM7WUFFL0MsTUFBTXdDLGVBQWVoQixZQUFZaUIsT0FBTyxDQUFDQyxPQUFPVixNQUFRVSxRQUFRVixLQUFLO1lBQ3JFLE1BQU1XLHdCQUF3QkgsYUFBYUksZUFBZTtZQUUxRCxNQUFNQyxnQkFBZ0JULGVBQWVLLE9BQU8sQ0FBQ0MsT0FBT0wsU0FBV0ssUUFBUUwsUUFBUTtZQUMvRSxNQUFNUyx5QkFBeUJELGNBQWNELGVBQWU7UUFDN0Q7SUFDRCxHQUFHO1FBQUM1QztLQUFVO0lBRWQscUJBQ0MsOERBQUNnRDtRQUFRQyxXQUFVOzswQkFDbEIsOERBQUN0RCxtRUFBWUE7Z0JBQUN1RCxPQUFNOzs7Ozs7WUFDbkJsRCxVQUFVK0MsU0FBUyxrQkFDbkIsOERBQUNqRCxnRUFBU0E7Z0JBQUNtRCxXQUFVOztrQ0FDcEIsOERBQUNFO3dCQUFJRixXQUFVOzswQ0FDZCw4REFBQ0U7O2tEQUNBLDhEQUFDQztrREFBRTs7Ozs7O2tEQUNILDhEQUFDQTt3Q0FBRUgsV0FBVTs7NENBQXdDTjs0Q0FBc0I7Ozs7Ozs7Ozs7Ozs7MENBRTVFLDhEQUFDUTtnQ0FBSUYsV0FBVTs7a0RBQ2QsOERBQUNHO2tEQUFFOzs7Ozs7a0RBQ0gsOERBQUNBO3dDQUFFSCxXQUFVOzs0Q0FBd0NIOzRDQUF1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHOUUsOERBQUNqRCxnRkFBcUJBO3dCQUFDMkIsYUFBYUE7d0JBQWFZLGdCQUFnQkE7Ozs7Ozs7Ozs7O3FDQUdsRSw4REFBQ2dCO2dCQUFFSCxXQUFVOzBCQUErQjs7Ozs7Ozs7Ozs7O0FBSWhEO0dBcEhTbEQ7O1FBR2tCTCx1REFBVUE7OztLQUg1Qks7QUFzSFQsK0RBQWVBLHFCQUFxQkEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvYmFsYW5jZS1vZi1wZXBwZXItdHJhZGVzL3BhZ2UudHN4PzM2YmYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0J1xuaW1wb3J0IFNlY3Rpb25UaXRsZSBmcm9tICdAY29tcG9uZW50cy9VSS9TZWN0aW9uVGl0bGUnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgVHJhZGVzT2ZQZXBwZXJCeU1vbnRoIGZyb20gJ0Bjb21wb25lbnRzL0NoYXJ0cy9UcmFkZXNPZlBlcHBlckJ5TW9udGgnXG5pbXBvcnQgQ2hhcnRBcmVhIGZyb20gJ0Bjb21wb25lbnRzL1VJL0NoYXJ0QXJlYSdcblxuaW50ZXJmYWNlIFRyYWRlT2ZQZXBwZXIge1xuXHRfaWQ6IHN0cmluZ1xuXHRjcmVhdG9yOiB7XG5cdFx0X2lkOiBzdHJpbmdcblx0XHRlbWFpbDogc3RyaW5nXG5cdFx0dXNlcm5hbWU6IHN0cmluZ1xuXHRcdGltYWdlOiBzdHJpbmdcblx0fVxuXHRwb2ludE9mU2FsZUlkOiBzdHJpbmdcblx0ZGF0ZTogc3RyaW5nXG5cdGNsYXM6IG51bWJlclxuXHRjb2xvcjogbnVtYmVyXG5cdHByaWNlOiBudW1iZXJcblx0d2VpZ2h0OiBudW1iZXJcblx0dmF0UmF0ZTogbnVtYmVyXG5cdHRvdGFsU3VtOiBudW1iZXJcbn1cblxuZnVuY3Rpb24gQmFsYW5jZU9mUGVwcGVyVHJhZGVzKCkge1xuXHRjb25zdCBbYWxsVHJhZGVzLCBzZXRBbGxUcmFkZXNdID0gdXNlU3RhdGU8VHJhZGVPZlBlcHBlcltdPihbXSlcblx0Y29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcblx0Y29uc3QgeyBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKClcblx0Y29uc3QgdXNlcklkID0gKHNlc3Npb24/LnVzZXIgYXMgeyBpZD86IHN0cmluZyB9KT8uaWQgPz8gJydcblxuXHRjb25zdCBmZXRjaFRyYWRlc09mUGVwcGVyID0gYXN5bmMgKCkgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL3RyYWRlLW9mLXBlcHBlcicpXG5cdFx0XHRjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cblx0XHRcdGNvbnN0IGZpbHRlcmVkVHJhZGVzID0gZGF0YS5maWx0ZXIoKHRyYWRlOiBUcmFkZU9mUGVwcGVyKSA9PiB0cmFkZS5jcmVhdG9yLl9pZC50b1N0cmluZygpID09PSB1c2VySWQudG9TdHJpbmcoKSlcblxuXHRcdFx0c2V0QWxsVHJhZGVzKGZpbHRlcmVkVHJhZGVzKVxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhlcnJvcilcblx0XHR9IGZpbmFsbHkge1xuXHRcdFx0c2V0TG9hZGluZyhmYWxzZSlcblx0XHR9XG5cdH1cblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGZldGNoVHJhZGVzT2ZQZXBwZXIoKVxuXHR9LCBbbG9hZGluZ10pXG5cblx0Y29uc3QgY2FsY3VsYXRlTW9udGhseVN1bXMgPSAodHJhZGVzOiBUcmFkZU9mUGVwcGVyW10pOiBudW1iZXJbXSA9PiB7XG5cdFx0Y29uc3QgbW9udGhseVN1bXM6IG51bWJlcltdID0gWzAsIDAsIDAsIDAsIDAsIDBdIC8vIEluaWNqYWxpemFjamEgdGFibGljeSB6IHplcm93eW1pIHN1bWFtaVxuXG5cdFx0dHJhZGVzLmZvckVhY2godHJhZGUgPT4ge1xuXHRcdFx0Y29uc3QgbW9udGggPSBuZXcgRGF0ZSh0cmFkZS5kYXRlKS5nZXRNb250aCgpXG5cblx0XHRcdGlmIChtb250aCA+PSA1ICYmIG1vbnRoIDw9IDEwKSB7XG5cdFx0XHRcdC8vIFV3emdsxJlkbmllbmllIHRyYW5zYWtjamkgeiBjemVyd2NhIGRvIGxpc3RvcGFkYSAoaW5kZWtzeSA1LTEwKVxuXHRcdFx0XHRtb250aGx5U3Vtc1ttb250aCAtIDVdICs9IHRyYWRlLnRvdGFsU3VtXG5cdFx0XHR9XG5cdFx0fSlcblxuXHRcdHJldHVybiBtb250aGx5U3Vtcy5tYXAoc3VtID0+IHBhcnNlRmxvYXQoc3VtLnRvRml4ZWQoMikpKVxuXHR9XG5cblx0Y29uc3QgY2FsY3VsYXRlTW9udGhseVdlaWdodHMgPSAodHJhZGVzOiBUcmFkZU9mUGVwcGVyW10pOiBudW1iZXJbXSA9PiB7XG5cdFx0Y29uc3QgbW9udGhseVdlaWdodHM6IG51bWJlcltdID0gWzAsIDAsIDAsIDAsIDAsIDBdIC8vIEluaWNqYWxpemFjamEgdGFibGljeSB6IHplcm93eW1pIHdhZ2FtaVxuXG5cdFx0dHJhZGVzLmZvckVhY2godHJhZGUgPT4ge1xuXHRcdFx0Y29uc3QgbW9udGggPSBuZXcgRGF0ZSh0cmFkZS5kYXRlKS5nZXRNb250aCgpXG5cblx0XHRcdGlmIChtb250aCA+PSA1ICYmIG1vbnRoIDw9IDEwKSB7XG5cdFx0XHRcdC8vIFV3emdsxJlkbmllbmllIHRyYW5zYWtjamkgeiBjemVyd2NhIGRvIGxpc3RvcGFkYSAoaW5kZWtzeSA1LTEwKVxuXHRcdFx0XHRtb250aGx5V2VpZ2h0c1ttb250aCAtIDVdICs9IHRyYWRlLndlaWdodFxuXHRcdFx0fVxuXHRcdH0pXG5cblx0XHRyZXR1cm4gbW9udGhseVdlaWdodHMubWFwKHdlaWdodCA9PiBwYXJzZUZsb2F0KHdlaWdodC50b0ZpeGVkKDIpKSlcblx0fVxuXG5cdGNvbnN0IGNhbGN1bGF0ZU1vbnRobHlUcmFuc2FjdGlvbkNvdW50ID0gKHRyYWRlczogVHJhZGVPZlBlcHBlcltdKTogbnVtYmVyW10gPT4ge1xuXHRcdGNvbnN0IG1vbnRobHlUcmFuc2FjdGlvbkNvdW50czogbnVtYmVyW10gPSBbMCwgMCwgMCwgMCwgMCwgMF0gLy8gSW5pY2phbGl6YWNqYSB0YWJsaWN5IHogemVyb3fEhSBsaWN6YsSFIHRyYW5zYWtjamlcblxuXHRcdHRyYWRlcy5mb3JFYWNoKHRyYWRlID0+IHtcblx0XHRcdGNvbnN0IG1vbnRoID0gbmV3IERhdGUodHJhZGUuZGF0ZSkuZ2V0TW9udGgoKVxuXG5cdFx0XHRpZiAobW9udGggPj0gNSAmJiBtb250aCA8PSAxMCkge1xuXHRcdFx0XHQvLyBVd3pnbMSZZG5pZW5pZSB0cmFuc2FrY2ppIHogY3plcndjYSBkbyBsaXN0b3BhZGEgKGluZGVrc3kgNS0xMClcblx0XHRcdFx0bW9udGhseVRyYW5zYWN0aW9uQ291bnRzW21vbnRoIC0gNV0gKz0gMVxuXHRcdFx0fVxuXHRcdH0pXG5cblx0XHRyZXR1cm4gbW9udGhseVRyYW5zYWN0aW9uQ291bnRzXG5cdH1cblxuXHRjb25zdCBtb250aGx5U3VtcyA9IGNhbGN1bGF0ZU1vbnRobHlTdW1zKGFsbFRyYWRlcylcblx0Y29uc3QgbW9udGhseVdlaWdodHMgPSBjYWxjdWxhdGVNb250aGx5V2VpZ2h0cyhhbGxUcmFkZXMpXG5cblx0Y29uc3QgYW5udWFsUHJvZml0ID0gbW9udGhseVN1bXMucmVkdWNlKCh0b3RhbCwgc3VtKSA9PiB0b3RhbCArIHN1bSwgMClcblx0Y29uc3QgZm9ybWF0dGVkQW5udWFsUHJvZml0ID0gYW5udWFsUHJvZml0LnRvTG9jYWxlU3RyaW5nKCdwbC1QTCcpXG5cblx0Y29uc3QgYW5udWFsSGFydmVzdCA9IG1vbnRobHlXZWlnaHRzLnJlZHVjZSgodG90YWwsIHdlaWdodCkgPT4gdG90YWwgKyB3ZWlnaHQsIDApXG5cdGNvbnN0IGZvcm1hdHRlZEFubnVhbEhhcnZlc3QgPSBhbm51YWxIYXJ2ZXN0LnRvTG9jYWxlU3RyaW5nKCdwbC1QTCcpXG5cbiAgICBjb25zdCBtb250aGx5VHJhbnNhY3Rpb25Db3VudHMgPSBjYWxjdWxhdGVNb250aGx5VHJhbnNhY3Rpb25Db3VudChhbGxUcmFkZXMpO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYgKGFsbFRyYWRlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRjb25zdCBtb250aGx5U3VtcyA9IGNhbGN1bGF0ZU1vbnRobHlTdW1zKGFsbFRyYWRlcylcblx0XHRcdGNvbnN0IG1vbnRobHlXZWlnaHRzID0gY2FsY3VsYXRlTW9udGhseVdlaWdodHMoYWxsVHJhZGVzKVxuXG5cdFx0XHRjb25zdCBhbm51YWxQcm9maXQgPSBtb250aGx5U3Vtcy5yZWR1Y2UoKHRvdGFsLCBzdW0pID0+IHRvdGFsICsgc3VtLCAwKVxuXHRcdFx0Y29uc3QgZm9ybWF0dGVkQW5udWFsUHJvZml0ID0gYW5udWFsUHJvZml0LnRvTG9jYWxlU3RyaW5nKCdwbC1QTCcpXG5cblx0XHRcdGNvbnN0IGFubnVhbEhhcnZlc3QgPSBtb250aGx5V2VpZ2h0cy5yZWR1Y2UoKHRvdGFsLCB3ZWlnaHQpID0+IHRvdGFsICsgd2VpZ2h0LCAwKVxuXHRcdFx0Y29uc3QgZm9ybWF0dGVkQW5udWFsSGFydmVzdCA9IGFubnVhbEhhcnZlc3QudG9Mb2NhbGVTdHJpbmcoJ3BsLVBMJylcblx0XHR9XG5cdH0sIFthbGxUcmFkZXNdKVxuXG5cdHJldHVybiAoXG5cdFx0PHNlY3Rpb24gY2xhc3NOYW1lPSdjb250YWluZXIgcHktMjAgdGV4dC1ibGFjayc+XG5cdFx0XHQ8U2VjdGlvblRpdGxlIHRpdGxlPSdCaWxhbnMgc3ByemVkYcW8eSBwYXByeWtpJyAvPlxuXHRcdFx0e2FsbFRyYWRlcy5sZW5ndGggPiAwID8gKFxuXHRcdFx0XHQ8Q2hhcnRBcmVhIGNsYXNzTmFtZT0nbXQtNCB3LWZ1bGwgbWQ6dy1bODIwcHhdJz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gbXgtMTAnPlxuXHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0PHA+Um9jem5lIHp5c2tpOjwvcD5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSd0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgdGV4dC1tYWluQ29sb3InPntmb3JtYXR0ZWRBbm51YWxQcm9maXR9IHrFgjwvcD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3RleHQtcmlnaHQnPlxuXHRcdFx0XHRcdFx0XHQ8cD5Sb2N6bmUgemJpb3J5OjwvcD5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSd0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgdGV4dC1tYWluQ29sb3InPntmb3JtYXR0ZWRBbm51YWxIYXJ2ZXN0fSBrZzwvcD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxUcmFkZXNPZlBlcHBlckJ5TW9udGggbW9udGhseVN1bXM9e21vbnRobHlTdW1zfSBtb250aGx5V2VpZ2h0cz17bW9udGhseVdlaWdodHN9IC8+XG5cdFx0XHRcdDwvQ2hhcnRBcmVhPlxuXHRcdFx0KSA6IChcblx0XHRcdFx0PHAgY2xhc3NOYW1lPSdtdC0xMCBtZDp0ZXh0LWxnIHRleHQtY2VudGVyJz5XY3p5dHl3YW5pZSBkYW55Y2guLi48L3A+XG5cdFx0XHQpfVxuXHRcdDwvc2VjdGlvbj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYWxhbmNlT2ZQZXBwZXJUcmFkZXNcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVNlc3Npb24iLCJTZWN0aW9uVGl0bGUiLCJSZWFjdCIsIlRyYWRlc09mUGVwcGVyQnlNb250aCIsIkNoYXJ0QXJlYSIsIkJhbGFuY2VPZlBlcHBlclRyYWRlcyIsImFsbFRyYWRlcyIsInNldEFsbFRyYWRlcyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZGF0YSIsInNlc3Npb24iLCJ1c2VySWQiLCJ1c2VyIiwiaWQiLCJmZXRjaFRyYWRlc09mUGVwcGVyIiwicmVzcG9uc2UiLCJmZXRjaCIsImpzb24iLCJmaWx0ZXJlZFRyYWRlcyIsImZpbHRlciIsInRyYWRlIiwiY3JlYXRvciIsIl9pZCIsInRvU3RyaW5nIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiY2FsY3VsYXRlTW9udGhseVN1bXMiLCJ0cmFkZXMiLCJtb250aGx5U3VtcyIsImZvckVhY2giLCJtb250aCIsIkRhdGUiLCJkYXRlIiwiZ2V0TW9udGgiLCJ0b3RhbFN1bSIsIm1hcCIsInN1bSIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwiY2FsY3VsYXRlTW9udGhseVdlaWdodHMiLCJtb250aGx5V2VpZ2h0cyIsIndlaWdodCIsImNhbGN1bGF0ZU1vbnRobHlUcmFuc2FjdGlvbkNvdW50IiwibW9udGhseVRyYW5zYWN0aW9uQ291bnRzIiwiYW5udWFsUHJvZml0IiwicmVkdWNlIiwidG90YWwiLCJmb3JtYXR0ZWRBbm51YWxQcm9maXQiLCJ0b0xvY2FsZVN0cmluZyIsImFubnVhbEhhcnZlc3QiLCJmb3JtYXR0ZWRBbm51YWxIYXJ2ZXN0IiwibGVuZ3RoIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsInRpdGxlIiwiZGl2IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/balance-of-pepper-trades/page.tsx\n"));

/***/ })

});