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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-client)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_UI_SectionTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/UI/SectionTitle */ \"(app-client)/./components/UI/SectionTitle.tsx\");\n/* harmony import */ var _components_Charts_TradesOfPepperByMonth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Charts/TradesOfPepperByMonth */ \"(app-client)/./components/Charts/TradesOfPepperByMonth.tsx\");\n/* harmony import */ var _components_UI_ChartArea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/UI/ChartArea */ \"(app-client)/./components/UI/ChartArea.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction BalanceOfPepperTrades() {\n    var _ref;\n    _s();\n    const [allTrades, setAllTrades] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    var _id;\n    const userId = (_id = (_ref = session === null || session === void 0 ? void 0 : session.user) === null || _ref === void 0 ? void 0 : _ref.id) !== null && _id !== void 0 ? _id : \"\";\n    const fetchTradesOfPepper = async ()=>{\n        try {\n            const response = await fetch(\"/api/trade-of-pepper\");\n            const data = await response.json();\n            const filteredTrades = data.filter((trade)=>trade.creator._id.toString() === userId.toString());\n            setAllTrades(filteredTrades);\n        } catch (error) {\n            console.log(error);\n        } finally{\n            setLoading(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchTradesOfPepper();\n    }, [\n        loading\n    ]);\n    const calculateMonthlySums = (trades)=>{\n        const monthlySums = [\n            0,\n            0,\n            0,\n            0,\n            0,\n            0\n        ] // Inicjalizacja tablicy z zerowymi sumami\n        ;\n        trades.forEach((trade)=>{\n            const month = new Date(trade.date).getMonth();\n            if (month >= 5 && month <= 10) {\n                monthlySums[month - 5] += trade.totalSum;\n            }\n        });\n        return monthlySums.map((sum)=>parseFloat(sum.toFixed(2)));\n    };\n    const calculateMonthlyWeights = (trades)=>{\n        const monthlyWeights = [\n            0,\n            0,\n            0,\n            0,\n            0,\n            0\n        ] // Inicjalizacja tablicy z zerowymi wagami\n        ;\n        trades.forEach((trade)=>{\n            const month = new Date(trade.date).getMonth();\n            if (month >= 5 && month <= 10) {\n                monthlyWeights[month - 5] += trade.weight;\n            }\n        });\n        return monthlyWeights.map((weight)=>parseFloat(weight.toFixed(2)));\n    };\n    const monthlySums = calculateMonthlySums(allTrades);\n    const monthlyWeights = calculateMonthlyWeights(allTrades);\n    const annualProfit = monthlySums.reduce((total, sum)=>total + sum, 0);\n    const formattedAnnualProfit = annualProfit.toLocaleString(\"pl-PL\");\n    const annualHarvest = monthlyWeights.reduce((total, weight)=>total + weight, 0);\n    const formattedAnnualHarvest = annualHarvest.toLocaleString(\"pl-PL\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"container py-20 text-black\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_SectionTitle__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                title: \"Bilans sprzedaży papryki\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_ChartArea__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row justify-between mx-10\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Roczne zyski:\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                                        lineNumber: 95,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-lg font-semibold text-mainColor\",\n                                        children: [\n                                            formattedAnnualProfit,\n                                            \" zł\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                                        lineNumber: 96,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-right\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Roczne zbiory:\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                                        lineNumber: 99,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-lg font-semibold text-mainColor\",\n                                        children: [\n                                            formattedAnnualHarvest,\n                                            \" kg\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                                        lineNumber: 100,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                                lineNumber: 98,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Charts_TradesOfPepperByMonth__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        monthlySums: monthlySums,\n                        monthlyWeights: monthlyWeights\n                    }, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n        lineNumber: 90,\n        columnNumber: 5\n    }, this);\n}\n_s(BalanceOfPepperTrades, \"iuSt3lLnJg8E9BZZxdQpE3CsXvQ=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = BalanceOfPepperTrades;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BalanceOfPepperTrades);\nvar _c;\n$RefreshReg$(_c, \"BalanceOfPepperTrades\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2JhbGFuY2Utb2YtcGVwcGVyLXRyYWRlcy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUMyQztBQUNDO0FBQ1U7QUFDN0I7QUFDbUQ7QUFDNUI7QUFvQmhELFNBQVNPO1FBSVE7O0lBSGYsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdULCtDQUFRQSxDQUFrQixFQUFFO0lBQzlELE1BQU0sQ0FBQ1UsU0FBU0MsV0FBVyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLEVBQUVZLE1BQU1DLE9BQU8sRUFBRSxHQUFHWCwyREFBVUE7UUFDckI7SUFBZixNQUFNWSxTQUFTLGVBQUNELG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBU0Usa0JBQVYsZ0NBQW9DQyxnQkFBcEMsdUJBQTBDO0lBRXpELE1BQU1DLHNCQUFzQjtRQUMxQixJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNO1lBQzdCLE1BQU1QLE9BQU8sTUFBTU0sU0FBU0U7WUFFNUIsTUFBTUMsaUJBQWlCVCxLQUFLVSxPQUFPLENBQUNDLFFBQXlCQSxNQUFNQyxRQUFRQyxJQUFJQyxlQUFlWixPQUFPWTtZQUVyR2pCLGFBQWFZO1FBQ2YsRUFBRSxPQUFPTSxPQUFPO1lBQ2RDLFFBQVFDLElBQUlGO1FBQ2QsU0FBVTtZQUNSaEIsV0FBVztRQUNiO0lBQ0Y7SUFFQVYsZ0RBQVNBLENBQUM7UUFDUmdCO0lBQ0YsR0FBRztRQUFDUDtLQUFRO0lBRVosTUFBTW9CLHVCQUF1QixDQUFDQztRQUM1QixNQUFNQyxjQUF3QjtZQUFDO1lBQUc7WUFBRztZQUFHO1lBQUc7WUFBRztTQUFFLENBQUMsMENBQTBDOztRQUUzRkQsT0FBT0UsUUFBUSxDQUFDVjtZQUNkLE1BQU1XLFFBQVEsSUFBSUMsS0FBS1osTUFBTWEsTUFBTUM7WUFFbkMsSUFBSUgsU0FBUyxLQUFLQSxTQUFTLElBQUk7Z0JBQzdCRixXQUFXLENBQUNFLFFBQVEsRUFBRSxJQUFJWCxNQUFNZTtZQUNsQztRQUNGO1FBRUEsT0FBT04sWUFBWU8sSUFBSSxDQUFDQyxNQUFRQyxXQUFXRCxJQUFJRSxRQUFRO0lBQ3pEO0lBRUEsTUFBTUMsMEJBQTBCLENBQUNaO1FBQy9CLE1BQU1hLGlCQUEyQjtZQUFDO1lBQUc7WUFBRztZQUFHO1lBQUc7WUFBRztTQUFFLENBQUMsMENBQTBDOztRQUU5RmIsT0FBT0UsUUFBUSxDQUFDVjtZQUNkLE1BQU1XLFFBQVEsSUFBSUMsS0FBS1osTUFBTWEsTUFBTUM7WUFFbkMsSUFBSUgsU0FBUyxLQUFLQSxTQUFTLElBQUk7Z0JBQzdCVSxjQUFjLENBQUNWLFFBQVEsRUFBRSxJQUFJWCxNQUFNc0I7WUFDckM7UUFDRjtRQUVBLE9BQU9ELGVBQWVMLElBQUksQ0FBQ00sU0FBV0osV0FBV0ksT0FBT0gsUUFBUTtJQUNsRTtJQUVBLE1BQU1WLGNBQWNGLHFCQUFxQnRCO0lBQ3pDLE1BQU1vQyxpQkFBaUJELHdCQUF3Qm5DO0lBRS9DLE1BQU1zQyxlQUFlZCxZQUFZZSxPQUFPLENBQUNDLE9BQU9SLE1BQVFRLFFBQVFSLEtBQUs7SUFDckUsTUFBTVMsd0JBQXdCSCxhQUFhSSxlQUFlO0lBRTFELE1BQU1DLGdCQUFnQlAsZUFBZUcsT0FBTyxDQUFDQyxPQUFPSCxTQUFXRyxRQUFRSCxRQUFRO0lBQy9FLE1BQU1PLHlCQUF5QkQsY0FBY0QsZUFBZTtJQUU1RCxxQkFDRSw4REFBQ0c7UUFBUUMsV0FBVTs7MEJBQ2pCLDhEQUFDbkQsbUVBQVlBO2dCQUFDb0QsT0FBTTs7Ozs7OzBCQUNwQiw4REFBQ2pELGdFQUFTQTs7a0NBQ1IsOERBQUNrRDt3QkFBSUYsV0FBVTs7MENBQ2IsOERBQUNFOztrREFDQyw4REFBQ0M7a0RBQUU7Ozs7OztrREFDSCw4REFBQ0E7d0NBQUVILFdBQVU7OzRDQUF3Q0w7NENBQXNCOzs7Ozs7Ozs7Ozs7OzBDQUU3RSw4REFBQ087Z0NBQUlGLFdBQVU7O2tEQUNiLDhEQUFDRztrREFBRTs7Ozs7O2tEQUNILDhEQUFDQTt3Q0FBRUgsV0FBVTs7NENBQXdDRjs0Q0FBdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSWhGLDhEQUFDL0MsZ0ZBQXFCQTt3QkFBQzJCLGFBQWFBO3dCQUFhWSxnQkFBZ0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJekU7R0FqRlNyQzs7UUFHbUJMLHVEQUFVQTs7O0tBSDdCSztBQW1GVCwrREFBZUEscUJBQXFCQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9iYWxhbmNlLW9mLXBlcHBlci10cmFkZXMvcGFnZS50c3g/MzZiZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnXG5pbXBvcnQgU2VjdGlvblRpdGxlIGZyb20gJ0Bjb21wb25lbnRzL1VJL1NlY3Rpb25UaXRsZSdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBUcmFkZXNPZlBlcHBlckJ5TW9udGggZnJvbSAnQGNvbXBvbmVudHMvQ2hhcnRzL1RyYWRlc09mUGVwcGVyQnlNb250aCdcbmltcG9ydCBDaGFydEFyZWEgZnJvbSAnQGNvbXBvbmVudHMvVUkvQ2hhcnRBcmVhJ1xuXG5pbnRlcmZhY2UgVHJhZGVPZlBlcHBlciB7XG4gIF9pZDogc3RyaW5nXG4gIGNyZWF0b3I6IHtcbiAgICBfaWQ6IHN0cmluZ1xuICAgIGVtYWlsOiBzdHJpbmdcbiAgICB1c2VybmFtZTogc3RyaW5nXG4gICAgaW1hZ2U6IHN0cmluZ1xuICB9XG4gIHBvaW50T2ZTYWxlSWQ6IHN0cmluZ1xuICBkYXRlOiBzdHJpbmdcbiAgY2xhczogbnVtYmVyXG4gIGNvbG9yOiBudW1iZXJcbiAgcHJpY2U6IG51bWJlclxuICB3ZWlnaHQ6IG51bWJlclxuICB2YXRSYXRlOiBudW1iZXJcbiAgdG90YWxTdW06IG51bWJlclxufVxuXG5mdW5jdGlvbiBCYWxhbmNlT2ZQZXBwZXJUcmFkZXMoKSB7XG4gIGNvbnN0IFthbGxUcmFkZXMsIHNldEFsbFRyYWRlc10gPSB1c2VTdGF0ZTxUcmFkZU9mUGVwcGVyW10+KFtdKVxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuICBjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKVxuICBjb25zdCB1c2VySWQgPSAoc2Vzc2lvbj8udXNlciBhcyB7IGlkPzogc3RyaW5nIH0pPy5pZCA/PyAnJ1xuXG4gIGNvbnN0IGZldGNoVHJhZGVzT2ZQZXBwZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvdHJhZGUtb2YtcGVwcGVyJylcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcblxuICAgICAgY29uc3QgZmlsdGVyZWRUcmFkZXMgPSBkYXRhLmZpbHRlcigodHJhZGU6IFRyYWRlT2ZQZXBwZXIpID0+IHRyYWRlLmNyZWF0b3IuX2lkLnRvU3RyaW5nKCkgPT09IHVzZXJJZC50b1N0cmluZygpKVxuXG4gICAgICBzZXRBbGxUcmFkZXMoZmlsdGVyZWRUcmFkZXMpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hUcmFkZXNPZlBlcHBlcigpXG4gIH0sIFtsb2FkaW5nXSlcblxuICBjb25zdCBjYWxjdWxhdGVNb250aGx5U3VtcyA9ICh0cmFkZXM6IFRyYWRlT2ZQZXBwZXJbXSk6IG51bWJlcltdID0+IHtcbiAgICBjb25zdCBtb250aGx5U3VtczogbnVtYmVyW10gPSBbMCwgMCwgMCwgMCwgMCwgMF0gLy8gSW5pY2phbGl6YWNqYSB0YWJsaWN5IHogemVyb3d5bWkgc3VtYW1pXG5cbiAgICB0cmFkZXMuZm9yRWFjaCgodHJhZGUpID0+IHtcbiAgICAgIGNvbnN0IG1vbnRoID0gbmV3IERhdGUodHJhZGUuZGF0ZSkuZ2V0TW9udGgoKVxuXG4gICAgICBpZiAobW9udGggPj0gNSAmJiBtb250aCA8PSAxMCkgeyAvLyBVd3pnbMSZZG5pZW5pZSB0cmFuc2FrY2ppIHogY3plcndjYSBkbyBsaXN0b3BhZGEgKGluZGVrc3kgNS0xMClcbiAgICAgICAgbW9udGhseVN1bXNbbW9udGggLSA1XSArPSB0cmFkZS50b3RhbFN1bVxuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gbW9udGhseVN1bXMubWFwKChzdW0pID0+IHBhcnNlRmxvYXQoc3VtLnRvRml4ZWQoMikpKVxuICB9XG5cbiAgY29uc3QgY2FsY3VsYXRlTW9udGhseVdlaWdodHMgPSAodHJhZGVzOiBUcmFkZU9mUGVwcGVyW10pOiBudW1iZXJbXSA9PiB7XG4gICAgY29uc3QgbW9udGhseVdlaWdodHM6IG51bWJlcltdID0gWzAsIDAsIDAsIDAsIDAsIDBdIC8vIEluaWNqYWxpemFjamEgdGFibGljeSB6IHplcm93eW1pIHdhZ2FtaVxuXG4gICAgdHJhZGVzLmZvckVhY2goKHRyYWRlKSA9PiB7XG4gICAgICBjb25zdCBtb250aCA9IG5ldyBEYXRlKHRyYWRlLmRhdGUpLmdldE1vbnRoKClcblxuICAgICAgaWYgKG1vbnRoID49IDUgJiYgbW9udGggPD0gMTApIHsgLy8gVXd6Z2zEmWRuaWVuaWUgdHJhbnNha2NqaSB6IGN6ZXJ3Y2EgZG8gbGlzdG9wYWRhIChpbmRla3N5IDUtMTApXG4gICAgICAgIG1vbnRobHlXZWlnaHRzW21vbnRoIC0gNV0gKz0gdHJhZGUud2VpZ2h0XG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiBtb250aGx5V2VpZ2h0cy5tYXAoKHdlaWdodCkgPT4gcGFyc2VGbG9hdCh3ZWlnaHQudG9GaXhlZCgyKSkpXG4gIH1cblxuICBjb25zdCBtb250aGx5U3VtcyA9IGNhbGN1bGF0ZU1vbnRobHlTdW1zKGFsbFRyYWRlcylcbiAgY29uc3QgbW9udGhseVdlaWdodHMgPSBjYWxjdWxhdGVNb250aGx5V2VpZ2h0cyhhbGxUcmFkZXMpXG5cbiAgY29uc3QgYW5udWFsUHJvZml0ID0gbW9udGhseVN1bXMucmVkdWNlKCh0b3RhbCwgc3VtKSA9PiB0b3RhbCArIHN1bSwgMClcbiAgY29uc3QgZm9ybWF0dGVkQW5udWFsUHJvZml0ID0gYW5udWFsUHJvZml0LnRvTG9jYWxlU3RyaW5nKCdwbC1QTCcpXG5cbiAgY29uc3QgYW5udWFsSGFydmVzdCA9IG1vbnRobHlXZWlnaHRzLnJlZHVjZSgodG90YWwsIHdlaWdodCkgPT4gdG90YWwgKyB3ZWlnaHQsIDApXG4gIGNvbnN0IGZvcm1hdHRlZEFubnVhbEhhcnZlc3QgPSBhbm51YWxIYXJ2ZXN0LnRvTG9jYWxlU3RyaW5nKCdwbC1QTCcpXG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2NvbnRhaW5lciBweS0yMCB0ZXh0LWJsYWNrJz5cbiAgICAgIDxTZWN0aW9uVGl0bGUgdGl0bGU9J0JpbGFucyBzcHJ6ZWRhxbx5IHBhcHJ5a2knIC8+XG4gICAgICA8Q2hhcnRBcmVhPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gbXgtMTAnPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cD5Sb2N6bmUgenlza2k6PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgdGV4dC1tYWluQ29sb3InPntmb3JtYXR0ZWRBbm51YWxQcm9maXR9IHrFgjwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1yaWdodCc+XG4gICAgICAgICAgICA8cD5Sb2N6bmUgemJpb3J5OjwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtbWFpbkNvbG9yJz57Zm9ybWF0dGVkQW5udWFsSGFydmVzdH0ga2c8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7fVxuICAgICAgICA8VHJhZGVzT2ZQZXBwZXJCeU1vbnRoIG1vbnRobHlTdW1zPXttb250aGx5U3Vtc30gbW9udGhseVdlaWdodHM9e21vbnRobHlXZWlnaHRzfSAvPlxuICAgICAgPC9DaGFydEFyZWE+XG4gICAgPC9zZWN0aW9uPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhbGFuY2VPZlBlcHBlclRyYWRlc1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlU2Vzc2lvbiIsIlNlY3Rpb25UaXRsZSIsIlJlYWN0IiwiVHJhZGVzT2ZQZXBwZXJCeU1vbnRoIiwiQ2hhcnRBcmVhIiwiQmFsYW5jZU9mUGVwcGVyVHJhZGVzIiwiYWxsVHJhZGVzIiwic2V0QWxsVHJhZGVzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJkYXRhIiwic2Vzc2lvbiIsInVzZXJJZCIsInVzZXIiLCJpZCIsImZldGNoVHJhZGVzT2ZQZXBwZXIiLCJyZXNwb25zZSIsImZldGNoIiwianNvbiIsImZpbHRlcmVkVHJhZGVzIiwiZmlsdGVyIiwidHJhZGUiLCJjcmVhdG9yIiwiX2lkIiwidG9TdHJpbmciLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJjYWxjdWxhdGVNb250aGx5U3VtcyIsInRyYWRlcyIsIm1vbnRobHlTdW1zIiwiZm9yRWFjaCIsIm1vbnRoIiwiRGF0ZSIsImRhdGUiLCJnZXRNb250aCIsInRvdGFsU3VtIiwibWFwIiwic3VtIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJjYWxjdWxhdGVNb250aGx5V2VpZ2h0cyIsIm1vbnRobHlXZWlnaHRzIiwid2VpZ2h0IiwiYW5udWFsUHJvZml0IiwicmVkdWNlIiwidG90YWwiLCJmb3JtYXR0ZWRBbm51YWxQcm9maXQiLCJ0b0xvY2FsZVN0cmluZyIsImFubnVhbEhhcnZlc3QiLCJmb3JtYXR0ZWRBbm51YWxIYXJ2ZXN0Iiwic2VjdGlvbiIsImNsYXNzTmFtZSIsInRpdGxlIiwiZGl2IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/balance-of-pepper-trades/page.tsx\n"));

/***/ })

});