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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-client)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_UI_SectionTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/UI/SectionTitle */ \"(app-client)/./components/UI/SectionTitle.tsx\");\n/* harmony import */ var _components_Charts_TradesOfPepperByMonth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Charts/TradesOfPepperByMonth */ \"(app-client)/./components/Charts/TradesOfPepperByMonth.tsx\");\n/* harmony import */ var _components_UI_ChartArea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/UI/ChartArea */ \"(app-client)/./components/UI/ChartArea.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction BalanceOfPepperTrades() {\n    var _ref;\n    _s();\n    const [allTrades, setAllTrades] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    var _id;\n    const userId = (_id = (_ref = session === null || session === void 0 ? void 0 : session.user) === null || _ref === void 0 ? void 0 : _ref.id) !== null && _id !== void 0 ? _id : \"\";\n    const fetchTradesOfPepper = async ()=>{\n        try {\n            const response = await fetch(\"/api/trade-of-pepper\");\n            const data = await response.json();\n            const filteredTrades = data.filter((trade)=>trade.creator._id.toString() === userId.toString());\n            setAllTrades(filteredTrades);\n        } catch (error) {\n            console.log(error);\n        } finally{\n            setLoading(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchTradesOfPepper();\n    }, [\n        loading\n    ]);\n    const calculateMonthlySums = (trades)=>{\n        const monthlySums = [\n            0,\n            0,\n            0,\n            0,\n            0,\n            0\n        ] // Inicjalizacja tablicy z zerowymi sumami\n        ;\n        trades.forEach((trade)=>{\n            const month = new Date(trade.date).getMonth();\n            if (month >= 5 && month <= 10) {\n                // Uwzględnienie transakcji z czerwca do listopada (indeksy 5-10)\n                monthlySums[month - 5] += trade.totalSum;\n            }\n        });\n        return monthlySums.map((sum)=>parseFloat(sum.toFixed(2)));\n    };\n    const calculateMonthlyWeights = (trades)=>{\n        const monthlyWeights = [\n            0,\n            0,\n            0,\n            0,\n            0,\n            0\n        ] // Inicjalizacja tablicy z zerowymi wagami\n        ;\n        trades.forEach((trade)=>{\n            const month = new Date(trade.date).getMonth();\n            if (month >= 5 && month <= 10) {\n                // Uwzględnienie transakcji z czerwca do listopada (indeksy 5-10)\n                monthlyWeights[month - 5] += trade.weight;\n            }\n        });\n        return monthlyWeights.map((weight)=>parseFloat(weight.toFixed(2)));\n    };\n    const calculateMonthlyTransactionCount = (trades)=>{\n        const monthlyTransactionCounts = [\n            0,\n            0,\n            0,\n            0,\n            0,\n            0\n        ] // Inicjalizacja tablicy z zerową liczbą transakcji\n        ;\n        trades.forEach((trade)=>{\n            const month = new Date(trade.date).getMonth();\n            if (month >= 5 && month <= 10) {\n                // Uwzględnienie transakcji z czerwca do listopada (indeksy 5-10)\n                monthlyTransactionCounts[month - 5] += 1;\n            }\n        });\n        return monthlyTransactionCounts;\n    };\n    const monthlySums = calculateMonthlySums(allTrades);\n    const monthlyWeights = calculateMonthlyWeights(allTrades);\n    const annualProfit = monthlySums.reduce((total, sum)=>total + sum, 0);\n    const formattedAnnualProfit = annualProfit.toLocaleString(\"pl-PL\");\n    const annualHarvest = monthlyWeights.reduce((total, weight)=>total + weight, 0);\n    const formattedAnnualHarvest = annualHarvest.toLocaleString(\"pl-PL\");\n    const monthlyTransactionCounts = calculateMonthlyTransactionCount(allTrades);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (allTrades.length > 0) {\n            const monthlySums = calculateMonthlySums(allTrades);\n            const monthlyWeights = calculateMonthlyWeights(allTrades);\n            const annualProfit = monthlySums.reduce((total, sum)=>total + sum, 0);\n            const formattedAnnualProfit = annualProfit.toLocaleString(\"pl-PL\");\n            const annualHarvest = monthlyWeights.reduce((total, weight)=>total + weight, 0);\n            const formattedAnnualHarvest = annualHarvest.toLocaleString(\"pl-PL\");\n            const monthlyTransactionCounts = calculateMonthlyTransactionCount(allTrades);\n        }\n    }, [\n        allTrades\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"container py-20 text-black\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_SectionTitle__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                title: \"Bilans sprzedaży papryki\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                lineNumber: 125,\n                columnNumber: 4\n            }, this),\n            allTrades.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_ChartArea__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        className: \"mt-4 w-full md:w-[820px]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-row justify-between mx-10\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: \"Roczne zyski:\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                                                lineNumber: 131,\n                                                columnNumber: 9\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-lg font-semibold text-mainColor\",\n                                                children: [\n                                                    formattedAnnualProfit,\n                                                    \" zł\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                                                lineNumber: 132,\n                                                columnNumber: 9\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                                        lineNumber: 130,\n                                        columnNumber: 8\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-right\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: \"Roczne zbiory:\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                                                lineNumber: 135,\n                                                columnNumber: 9\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-lg font-semibold text-mainColor\",\n                                                children: [\n                                                    formattedAnnualHarvest,\n                                                    \" kg\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                                                lineNumber: 136,\n                                                columnNumber: 9\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                                        lineNumber: 134,\n                                        columnNumber: 8\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                                lineNumber: 129,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Charts_TradesOfPepperByMonth__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                monthlySums: monthlySums,\n                                monthlyWeights: monthlyWeights\n                            }, void 0, false, {\n                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                                lineNumber: 139,\n                                columnNumber: 7\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                        lineNumber: 128,\n                        columnNumber: 6\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_ChartArea__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                            lineNumber: 142,\n                            columnNumber: 7\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                        lineNumber: 141,\n                        columnNumber: 6\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                lineNumber: 127,\n                columnNumber: 5\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-10 md:text-lg text-center\",\n                children: \"Wczytywanie danych...\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                lineNumber: 146,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n        lineNumber: 124,\n        columnNumber: 3\n    }, this);\n}\n_s(BalanceOfPepperTrades, \"uvolFXoM9kh3jJrFNJwfdWegKEQ=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = BalanceOfPepperTrades;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BalanceOfPepperTrades);\nvar _c;\n$RefreshReg$(_c, \"BalanceOfPepperTrades\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2JhbGFuY2Utb2YtcGVwcGVyLXRyYWRlcy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUMyQztBQUNDO0FBQ1U7QUFDN0I7QUFDbUQ7QUFDNUI7QUFvQmhELFNBQVNPO1FBSU87O0lBSGYsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdULCtDQUFRQSxDQUFrQixFQUFFO0lBQzlELE1BQU0sQ0FBQ1UsU0FBU0MsV0FBVyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLEVBQUVZLE1BQU1DLE9BQU8sRUFBRSxHQUFHWCwyREFBVUE7UUFDckI7SUFBZixNQUFNWSxTQUFTLGVBQUNELG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBU0Usa0JBQVYsZ0NBQW9DQyxnQkFBcEMsdUJBQTBDO0lBRXpELE1BQU1DLHNCQUFzQjtRQUMzQixJQUFJO1lBQ0gsTUFBTUMsV0FBVyxNQUFNQyxNQUFNO1lBQzdCLE1BQU1QLE9BQU8sTUFBTU0sU0FBU0U7WUFFNUIsTUFBTUMsaUJBQWlCVCxLQUFLVSxPQUFPLENBQUNDLFFBQXlCQSxNQUFNQyxRQUFRQyxJQUFJQyxlQUFlWixPQUFPWTtZQUVyR2pCLGFBQWFZO1FBQ2QsRUFBRSxPQUFPTSxPQUFPO1lBQ2ZDLFFBQVFDLElBQUlGO1FBQ2IsU0FBVTtZQUNUaEIsV0FBVztRQUNaO0lBQ0Q7SUFFQVYsZ0RBQVNBLENBQUM7UUFDVGdCO0lBQ0QsR0FBRztRQUFDUDtLQUFRO0lBRVosTUFBTW9CLHVCQUF1QixDQUFDQztRQUM3QixNQUFNQyxjQUF3QjtZQUFDO1lBQUc7WUFBRztZQUFHO1lBQUc7WUFBRztTQUFFLENBQUMsMENBQTBDOztRQUUzRkQsT0FBT0UsUUFBUVYsQ0FBQUE7WUFDZCxNQUFNVyxRQUFRLElBQUlDLEtBQUtaLE1BQU1hLE1BQU1DO1lBRW5DLElBQUlILFNBQVMsS0FBS0EsU0FBUyxJQUFJO2dCQUM5QixpRUFBaUU7Z0JBQ2pFRixXQUFXLENBQUNFLFFBQVEs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Ozs7OztBQUloRDtHQTNIU2xEOztRQUdrQkwsdURBQVVBOzs7S0FINUJLO0FBNkhULCtEQUFlQSxxQkFBcUJBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2JhbGFuY2Utb2YtcGVwcGVyLXRyYWRlcy9wYWdlLnRzeD8zNmJmIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCdcbmltcG9ydCBTZWN0aW9uVGl0bGUgZnJvbSAnQGNvbXBvbmVudHMvVUkvU2VjdGlvblRpdGxlJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFRyYWRlc09mUGVwcGVyQnlNb250aCBmcm9tICdAY29tcG9uZW50cy9DaGFydHMvVHJhZGVzT2ZQZXBwZXJCeU1vbnRoJ1xuaW1wb3J0IENoYXJ0QXJlYSBmcm9tICdAY29tcG9uZW50cy9VSS9DaGFydEFyZWEnXG5cbmludGVyZmFjZSBUcmFkZU9mUGVwcGVyIHtcblx0X2lkOiBzdHJpbmdcblx0Y3JlYXRvcjoge1xuXHRcdF9pZDogc3RyaW5nXG5cdFx0ZW1haWw6IHN0cmluZ1xuXHRcdHVzZXJuYW1lOiBzdHJpbmdcblx0XHRpbWFnZTogc3RyaW5nXG5cdH1cblx0cG9pbnRPZlNhbGVJZDogc3RyaW5nXG5cdGRhdGU6IHN0cmluZ1xuXHRjbGFzOiBudW1iZXJcblx0Y29sb3I6IG51bWJlclxuXHRwcmljZTogbnVtYmVyXG5cdHdlaWdodDogbnVtYmVyXG5cdHZhdFJhdGU6IG51bWJlclxuXHR0b3RhbFN1bTogbnVtYmVyXG59XG5cbmZ1bmN0aW9uIEJhbGFuY2VPZlBlcHBlclRyYWRlcygpIHtcblx0Y29uc3QgW2FsbFRyYWRlcywgc2V0QWxsVHJhZGVzXSA9IHVzZVN0YXRlPFRyYWRlT2ZQZXBwZXJbXT4oW10pXG5cdGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG5cdGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpXG5cdGNvbnN0IHVzZXJJZCA9IChzZXNzaW9uPy51c2VyIGFzIHsgaWQ/OiBzdHJpbmcgfSk/LmlkID8/ICcnXG5cblx0Y29uc3QgZmV0Y2hUcmFkZXNPZlBlcHBlciA9IGFzeW5jICgpID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS90cmFkZS1vZi1wZXBwZXInKVxuXHRcdFx0Y29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuXG5cdFx0XHRjb25zdCBmaWx0ZXJlZFRyYWRlcyA9IGRhdGEuZmlsdGVyKCh0cmFkZTogVHJhZGVPZlBlcHBlcikgPT4gdHJhZGUuY3JlYXRvci5faWQudG9TdHJpbmcoKSA9PT0gdXNlcklkLnRvU3RyaW5nKCkpXG5cblx0XHRcdHNldEFsbFRyYWRlcyhmaWx0ZXJlZFRyYWRlcylcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5sb2coZXJyb3IpXG5cdFx0fSBmaW5hbGx5IHtcblx0XHRcdHNldExvYWRpbmcoZmFsc2UpXG5cdFx0fVxuXHR9XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRmZXRjaFRyYWRlc09mUGVwcGVyKClcblx0fSwgW2xvYWRpbmddKVxuXG5cdGNvbnN0IGNhbGN1bGF0ZU1vbnRobHlTdW1zID0gKHRyYWRlczogVHJhZGVPZlBlcHBlcltdKTogbnVtYmVyW10gPT4ge1xuXHRcdGNvbnN0IG1vbnRobHlTdW1zOiBudW1iZXJbXSA9IFswLCAwLCAwLCAwLCAwLCAwXSAvLyBJbmljamFsaXphY2phIHRhYmxpY3kgeiB6ZXJvd3ltaSBzdW1hbWlcblxuXHRcdHRyYWRlcy5mb3JFYWNoKHRyYWRlID0+IHtcblx0XHRcdGNvbnN0IG1vbnRoID0gbmV3IERhdGUodHJhZGUuZGF0ZSkuZ2V0TW9udGgoKVxuXG5cdFx0XHRpZiAobW9udGggPj0gNSAmJiBtb250aCA8PSAxMCkge1xuXHRcdFx0XHQvLyBVd3pnbMSZZG5pZW5pZSB0cmFuc2FrY2ppIHogY3plcndjYSBkbyBsaXN0b3BhZGEgKGluZGVrc3kgNS0xMClcblx0XHRcdFx0bW9udGhseVN1bXNbbW9udGggLSA1XSArPSB0cmFkZS50b3RhbFN1bVxuXHRcdFx0fVxuXHRcdH0pXG5cblx0XHRyZXR1cm4gbW9udGhseVN1bXMubWFwKHN1bSA9PiBwYXJzZUZsb2F0KHN1bS50b0ZpeGVkKDIpKSlcblx0fVxuXG5cdGNvbnN0IGNhbGN1bGF0ZU1vbnRobHlXZWlnaHRzID0gKHRyYWRlczogVHJhZGVPZlBlcHBlcltdKTogbnVtYmVyW10gPT4ge1xuXHRcdGNvbnN0IG1vbnRobHlXZWlnaHRzOiBudW1iZXJbXSA9IFswLCAwLCAwLCAwLCAwLCAwXSAvLyBJbmljamFsaXphY2phIHRhYmxpY3kgeiB6ZXJvd3ltaSB3YWdhbWlcblxuXHRcdHRyYWRlcy5mb3JFYWNoKHRyYWRlID0+IHtcblx0XHRcdGNvbnN0IG1vbnRoID0gbmV3IERhdGUodHJhZGUuZGF0ZSkuZ2V0TW9udGgoKVxuXG5cdFx0XHRpZiAobW9udGggPj0gNSAmJiBtb250aCA8PSAxMCkge1xuXHRcdFx0XHQvLyBVd3pnbMSZZG5pZW5pZSB0cmFuc2FrY2ppIHogY3plcndjYSBkbyBsaXN0b3BhZGEgKGluZGVrc3kgNS0xMClcblx0XHRcdFx0bW9udGhseVdlaWdodHNbbW9udGggLSA1XSArPSB0cmFkZS53ZWlnaHRcblx0XHRcdH1cblx0XHR9KVxuXG5cdFx0cmV0dXJuIG1vbnRobHlXZWlnaHRzLm1hcCh3ZWlnaHQgPT4gcGFyc2VGbG9hdCh3ZWlnaHQudG9GaXhlZCgyKSkpXG5cdH1cblxuXHRjb25zdCBjYWxjdWxhdGVNb250aGx5VHJhbnNhY3Rpb25Db3VudCA9ICh0cmFkZXM6IFRyYWRlT2ZQZXBwZXJbXSk6IG51bWJlcltdID0+IHtcblx0XHRjb25zdCBtb250aGx5VHJhbnNhY3Rpb25Db3VudHM6IG51bWJlcltdID0gWzAsIDAsIDAsIDAsIDAsIDBdIC8vIEluaWNqYWxpemFjamEgdGFibGljeSB6IHplcm93xIUgbGljemLEhSB0cmFuc2FrY2ppXG5cblx0XHR0cmFkZXMuZm9yRWFjaCh0cmFkZSA9PiB7XG5cdFx0XHRjb25zdCBtb250aCA9IG5ldyBEYXRlKHRyYWRlLmRhdGUpLmdldE1vbnRoKClcblxuXHRcdFx0aWYgKG1vbnRoID49IDUgJiYgbW9udGggPD0gMTApIHtcblx0XHRcdFx0Ly8gVXd6Z2zEmWRuaWVuaWUgdHJhbnNha2NqaSB6IGN6ZXJ3Y2EgZG8gbGlzdG9wYWRhIChpbmRla3N5IDUtMTApXG5cdFx0XHRcdG1vbnRobHlUcmFuc2FjdGlvbkNvdW50c1ttb250aCAtIDVdICs9IDFcblx0XHRcdH1cblx0XHR9KVxuXG5cdFx0cmV0dXJuIG1vbnRobHlUcmFuc2FjdGlvbkNvdW50c1xuXHR9XG5cblx0Y29uc3QgbW9udGhseVN1bXMgPSBjYWxjdWxhdGVNb250aGx5U3VtcyhhbGxUcmFkZXMpXG5cdGNvbnN0IG1vbnRobHlXZWlnaHRzID0gY2FsY3VsYXRlTW9udGhseVdlaWdodHMoYWxsVHJhZGVzKVxuXG5cdGNvbnN0IGFubnVhbFByb2ZpdCA9IG1vbnRobHlTdW1zLnJlZHVjZSgodG90YWwsIHN1bSkgPT4gdG90YWwgKyBzdW0sIDApXG5cdGNvbnN0IGZvcm1hdHRlZEFubnVhbFByb2ZpdCA9IGFubnVhbFByb2ZpdC50b0xvY2FsZVN0cmluZygncGwtUEwnKVxuXG5cdGNvbnN0IGFubnVhbEhhcnZlc3QgPSBtb250aGx5V2VpZ2h0cy5yZWR1Y2UoKHRvdGFsLCB3ZWlnaHQpID0+IHRvdGFsICsgd2VpZ2h0LCAwKVxuXHRjb25zdCBmb3JtYXR0ZWRBbm51YWxIYXJ2ZXN0ID0gYW5udWFsSGFydmVzdC50b0xvY2FsZVN0cmluZygncGwtUEwnKVxuXG5cdGNvbnN0IG1vbnRobHlUcmFuc2FjdGlvbkNvdW50cyA9IGNhbGN1bGF0ZU1vbnRobHlUcmFuc2FjdGlvbkNvdW50KGFsbFRyYWRlcylcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGlmIChhbGxUcmFkZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0Y29uc3QgbW9udGhseVN1bXMgPSBjYWxjdWxhdGVNb250aGx5U3VtcyhhbGxUcmFkZXMpXG5cdFx0XHRjb25zdCBtb250aGx5V2VpZ2h0cyA9IGNhbGN1bGF0ZU1vbnRobHlXZWlnaHRzKGFsbFRyYWRlcylcblxuXHRcdFx0Y29uc3QgYW5udWFsUHJvZml0ID0gbW9udGhseVN1bXMucmVkdWNlKCh0b3RhbCwgc3VtKSA9PiB0b3RhbCArIHN1bSwgMClcblx0XHRcdGNvbnN0IGZvcm1hdHRlZEFubnVhbFByb2ZpdCA9IGFubnVhbFByb2ZpdC50b0xvY2FsZVN0cmluZygncGwtUEwnKVxuXG5cdFx0XHRjb25zdCBhbm51YWxIYXJ2ZXN0ID0gbW9udGhseVdlaWdodHMucmVkdWNlKCh0b3RhbCwgd2VpZ2h0KSA9PiB0b3RhbCArIHdlaWdodCwgMClcblx0XHRcdGNvbnN0IGZvcm1hdHRlZEFubnVhbEhhcnZlc3QgPSBhbm51YWxIYXJ2ZXN0LnRvTG9jYWxlU3RyaW5nKCdwbC1QTCcpXG5cblx0XHRcdGNvbnN0IG1vbnRobHlUcmFuc2FjdGlvbkNvdW50cyA9IGNhbGN1bGF0ZU1vbnRobHlUcmFuc2FjdGlvbkNvdW50KGFsbFRyYWRlcylcblx0XHR9XG5cdH0sIFthbGxUcmFkZXNdKVxuXG5cdHJldHVybiAoXG5cdFx0PHNlY3Rpb24gY2xhc3NOYW1lPSdjb250YWluZXIgcHktMjAgdGV4dC1ibGFjayc+XG5cdFx0XHQ8U2VjdGlvblRpdGxlIHRpdGxlPSdCaWxhbnMgc3ByemVkYcW8eSBwYXByeWtpJyAvPlxuXHRcdFx0e2FsbFRyYWRlcy5sZW5ndGggPiAwID8gKFxuXHRcdFx0XHQ8ZGl2ID5cblx0XHRcdFx0XHQ8Q2hhcnRBcmVhIGNsYXNzTmFtZT0nbXQtNCB3LWZ1bGwgbWQ6dy1bODIwcHhdJz5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBteC0xMCc+XG5cdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0PHA+Um9jem5lIHp5c2tpOjwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J3RleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LW1haW5Db2xvcic+e2Zvcm1hdHRlZEFubnVhbFByb2ZpdH0gesWCPC9wPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3RleHQtcmlnaHQnPlxuXHRcdFx0XHRcdFx0XHRcdDxwPlJvY3puZSB6Ymlvcnk6PC9wPlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0ndGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtbWFpbkNvbG9yJz57Zm9ybWF0dGVkQW5udWFsSGFydmVzdH0ga2c8L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8VHJhZGVzT2ZQZXBwZXJCeU1vbnRoIG1vbnRobHlTdW1zPXttb250aGx5U3Vtc30gbW9udGhseVdlaWdodHM9e21vbnRobHlXZWlnaHRzfSAvPlxuXHRcdFx0XHRcdDwvQ2hhcnRBcmVhPlxuXHRcdFx0XHRcdDxDaGFydEFyZWE+XG5cdFx0XHRcdFx0XHQ8ZGl2PjwvZGl2PlxuXHRcdFx0XHRcdDwvQ2hhcnRBcmVhPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCkgOiAoXG5cdFx0XHRcdDxwIGNsYXNzTmFtZT0nbXQtMTAgbWQ6dGV4dC1sZyB0ZXh0LWNlbnRlcic+V2N6eXR5d2FuaWUgZGFueWNoLi4uPC9wPlxuXHRcdFx0KX1cblx0XHQ8L3NlY3Rpb24+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFsYW5jZU9mUGVwcGVyVHJhZGVzXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VTZXNzaW9uIiwiU2VjdGlvblRpdGxlIiwiUmVhY3QiLCJUcmFkZXNPZlBlcHBlckJ5TW9udGgiLCJDaGFydEFyZWEiLCJCYWxhbmNlT2ZQZXBwZXJUcmFkZXMiLCJhbGxUcmFkZXMiLCJzZXRBbGxUcmFkZXMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImRhdGEiLCJzZXNzaW9uIiwidXNlcklkIiwidXNlciIsImlkIiwiZmV0Y2hUcmFkZXNPZlBlcHBlciIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIiwiZmlsdGVyZWRUcmFkZXMiLCJmaWx0ZXIiLCJ0cmFkZSIsImNyZWF0b3IiLCJfaWQiLCJ0b1N0cmluZyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNhbGN1bGF0ZU1vbnRobHlTdW1zIiwidHJhZGVzIiwibW9udGhseVN1bXMiLCJmb3JFYWNoIiwibW9udGgiLCJEYXRlIiwiZGF0ZSIsImdldE1vbnRoIiwidG90YWxTdW0iLCJtYXAiLCJzdW0iLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsImNhbGN1bGF0ZU1vbnRobHlXZWlnaHRzIiwibW9udGhseVdlaWdodHMiLCJ3ZWlnaHQiLCJjYWxjdWxhdGVNb250aGx5VHJhbnNhY3Rpb25Db3VudCIsIm1vbnRobHlUcmFuc2FjdGlvbkNvdW50cyIsImFubnVhbFByb2ZpdCIsInJlZHVjZSIsInRvdGFsIiwiZm9ybWF0dGVkQW5udWFsUHJvZml0IiwidG9Mb2NhbGVTdHJpbmciLCJhbm51YWxIYXJ2ZXN0IiwiZm9ybWF0dGVkQW5udWFsSGFydmVzdCIsImxlbmd0aCIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJ0aXRsZSIsImRpdiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/balance-of-pepper-trades/page.tsx\n"));

/***/ })

});