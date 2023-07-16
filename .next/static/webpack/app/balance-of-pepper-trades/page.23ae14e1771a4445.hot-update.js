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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-client)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_UI_SectionTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/UI/SectionTitle */ \"(app-client)/./components/UI/SectionTitle.tsx\");\n/* harmony import */ var _components_Charts_TradesOfPepperByMonth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Charts/TradesOfPepperByMonth */ \"(app-client)/./components/Charts/TradesOfPepperByMonth.tsx\");\n/* harmony import */ var _components_UI_ChartArea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/UI/ChartArea */ \"(app-client)/./components/UI/ChartArea.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction BalanceOfPepperTrades() {\n    var _ref;\n    _s();\n    const [allTrades, setAllTrades] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    var _id;\n    const userId = (_id = (_ref = session === null || session === void 0 ? void 0 : session.user) === null || _ref === void 0 ? void 0 : _ref.id) !== null && _id !== void 0 ? _id : \"\";\n    const fetchTradesOfPepper = async ()=>{\n        try {\n            const response = await fetch(\"/api/trade-of-pepper\");\n            const data = await response.json();\n            const filteredTrades = data.filter((trade)=>trade.creator._id.toString() === userId.toString());\n            setAllTrades(filteredTrades);\n        } catch (error) {\n            console.log(error);\n        } finally{\n            setLoading(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchTradesOfPepper();\n    }, [\n        loading\n    ]);\n    const calculateMonthlySums = (trades)=>{\n        const monthlySums = [\n            0,\n            0,\n            0,\n            0,\n            0,\n            0\n        ] // Inicjalizacja tablicy z zerowymi sumami\n        ;\n        trades.forEach((trade)=>{\n            const month = new Date(trade.date).getMonth();\n            if (month >= 5 && month <= 10) {\n                monthlySums[month - 5] += trade.totalSum;\n            }\n        });\n        return monthlySums.map((sum)=>parseFloat(sum.toFixed(2)));\n    };\n    const calculateMonthlyWeights = (trades)=>{\n        const monthlyWeights = [\n            0,\n            0,\n            0,\n            0,\n            0,\n            0\n        ] // Inicjalizacja tablicy z zerowymi wagami\n        ;\n        trades.forEach((trade)=>{\n            const month = new Date(trade.date).getMonth();\n            if (month >= 5 && month <= 10) {\n                monthlyWeights[month - 5] += trade.weight;\n            }\n        });\n        return monthlyWeights.map((weight)=>parseFloat(weight.toFixed(2)));\n    };\n    const monthlySums = calculateMonthlySums(allTrades);\n    const monthlyWeights = calculateMonthlyWeights(allTrades);\n    const annualProfit = monthlySums.reduce((total, sum)=>total + sum, 0);\n    const formattedAnnualProfit = annualProfit.toLocaleString(\"pl-PL\");\n    const annualHarvest = monthlyWeights.reduce((total, weight)=>total + weight, 0);\n    const formattedAnnualHarvest = annualHarvest.toLocaleString(\"pl-PL\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"container py-20 text-black\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_SectionTitle__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                title: \"Bilans sprzedaży papryki\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_ChartArea__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row justify-between mx-10\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Roczne zyski:\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                                        lineNumber: 94,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-lg font-semibold text-mainColor\",\n                                        children: [\n                                            formattedAnnualProfit,\n                                            \" zł\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                                        lineNumber: 95,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-right\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Roczne zbiory:\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                                        lineNumber: 98,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-lg font-semibold text-mainColor\",\n                                        children: [\n                                            formattedAnnualHarvest,\n                                            \" kg\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                                        lineNumber: 99,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, this),\n                    monthlySums.length > 0 && monthlyWeights.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Charts_TradesOfPepperByMonth__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        monthlySums: monthlySums,\n                        monthlyWeights: monthlyWeights\n                    }, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 11\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Wczytywanie danych...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n        lineNumber: 89,\n        columnNumber: 5\n    }, this);\n}\n_s(BalanceOfPepperTrades, \"iuSt3lLnJg8E9BZZxdQpE3CsXvQ=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = BalanceOfPepperTrades;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BalanceOfPepperTrades);\nvar _c;\n$RefreshReg$(_c, \"BalanceOfPepperTrades\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2JhbGFuY2Utb2YtcGVwcGVyLXRyYWRlcy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEyQztBQUNDO0FBQ1U7QUFDN0I7QUFDbUQ7QUFDNUI7QUFvQmhELFNBQVNPO1FBSVE7O0lBSGYsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdULCtDQUFRQSxDQUFrQixFQUFFO0lBQzlELE1BQU0sQ0FBQ1UsU0FBU0MsV0FBVyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLEVBQUVZLE1BQU1DLE9BQU8sRUFBRSxHQUFHWCwyREFBVUE7UUFDckI7SUFBZixNQUFNWSxTQUFTLGVBQUNELG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBU0Usa0JBQVYsZ0NBQW9DQyxnQkFBcEMsdUJBQTBDO0lBRXpELE1BQU1DLHNCQUFzQjtRQUMxQixJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNO1lBQzdCLE1BQU1QLE9BQU8sTUFBTU0sU0FBU0U7WUFFNUIsTUFBTUMsaUJBQWlCVCxLQUFLVSxPQUFPLENBQUNDLFFBQXlCQSxNQUFNQyxRQUFRQyxJQUFJQyxlQUFlWixPQUFPWTtZQUVyR2pCLGFBQWFZO1FBQ2YsRUFBRSxPQUFPTSxPQUFPO1lBQ2RDLFFBQVFDLElBQUlGO1FBQ2QsU0FBVTtZQUNSaEIsV0FBVztRQUNiO0lBQ0Y7SUFFQVYsZ0RBQVNBLENBQUM7UUFDUmdCO0lBQ0YsR0FBRztRQUFDUDtLQUFRO0lBRVosTUFBTW9CLHVCQUF1QixDQUFDQztRQUM1QixNQUFNQyxjQUF3QjtZQUFDO1lBQUc7WUFBRztZQUFHO1lBQUc7WUFBRztTQUFFLENBQUMsMENBQTBDOztRQUUzRkQsT0FBT0UsUUFBUSxDQUFDVjtZQUNkLE1BQU1XLFFBQVEsSUFBSUMsS0FBS1osTUFBTWEsTUFBTUM7WUFFbkMsSUFBSUgsU0FBUyxLQUFLQSxTQUFTLElBQUk7Z0JBQzdCRixXQUFXLENBQUNFLFFBQVEsRUFBRSxJQUFJWCxNQUFNZTtZQUNsQztRQUNGO1FBRUEsT0FBT04sWUFBWU8sSUFBSSxDQUFDQyxNQUFRQyxXQUFXRCxJQUFJRSxRQUFRO0lBQ3pEO0lBRUEsTUFBTUMsMEJBQTBCLENBQUNaO1FBQy9CLE1BQU1hLGlCQUEyQjtZQUFDO1lBQUc7WUFBRztZQUFHO1lBQUc7WUFBRztTQUFFLENBQUMsMENBQTBDOztRQUU5RmIsT0FBT0UsUUFBUSxDQUFDVjtZQUNkLE1BQU1XLFFBQVEsSUFBSUMsS0FBS1osTUFBTWEsTUFBTUM7WUFFbkMsSUFBSUgsU0FBUyxLQUFLQSxTQUFTLElBQUk7Z0JBQzdCVSxjQUFjLENBQUNWLFFBQVEsRUFBRSxJQUFJWCxNQUFNc0I7WUFDckM7UUFDRjtRQUVBLE9BQU9ELGVBQWVMLElBQUksQ0FBQ00sU0FBV0osV0FBV0ksT0FBT0gsUUFBUTtJQUNsRTtJQUVBLE1BQU1WLGNBQWNGLHFCQUFxQnRCO0lBQ3pDLE1BQU1vQyxpQkFBaUJELHdCQUF3Qm5DO0lBRS9DLE1BQU1zQyxlQUFlZCxZQUFZZSxPQUFPLENBQUNDLE9BQU9SLE1BQVFRLFFBQVFSLEtBQUs7SUFDckUsTUFBTVMsd0JBQXdCSCxhQUFhSSxlQUFlO0lBRTFELE1BQU1DLGdCQUFnQlAsZUFBZUcsT0FBTyxDQUFDQyxPQUFPSCxTQUFXRyxRQUFRSCxRQUFRO0lBQy9FLE1BQU1PLHlCQUF5QkQsY0FBY0QsZUFBZTtJQUU1RCxxQkFDRSw4REFBQ0c7UUFBUUMsV0FBVTs7MEJBQ2pCLDhEQUFDbkQsbUVBQVlBO2dCQUFDb0QsT0FBTTs7Ozs7OzBCQUNwQiw4REFBQ2pELGdFQUFTQTs7a0NBQ1IsOERBQUNrRDt3QkFBSUYsV0FBVTs7MENBQ2IsOERBQUNFOztrREFDQyw4REFBQ0M7a0RBQUU7Ozs7OztrREFDSCw4REFBQ0E7d0NBQUVILFdBQVU7OzRDQUF3Q0w7NENBQXNCOzs7Ozs7Ozs7Ozs7OzBDQUU3RSw4REFBQ087Z0NBQUlGLFdBQVU7O2tEQUNiLDhEQUFDRztrREFBRTs7Ozs7O2tEQUNILDhEQUFDQTt3Q0FBRUgsV0FBVTs7NENBQXdDRjs0Q0FBdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBRy9FcEIsWUFBWTBCLFNBQVMsS0FBS2QsZUFBZWMsU0FBUyxrQkFDakQsOERBQUNyRCxnRkFBcUJBO3dCQUFDMkIsYUFBYUE7d0JBQWFZLGdCQUFnQkE7Ozs7OzZDQUVqRSw4REFBQ2E7a0NBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtiO0dBcEZTbEQ7O1FBR21CTCx1REFBVUE7OztLQUg3Qks7QUFzRlQsK0RBQWVBLHFCQUFxQkEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvYmFsYW5jZS1vZi1wZXBwZXItdHJhZGVzL3BhZ2UudHN4PzM2YmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCdcbmltcG9ydCBTZWN0aW9uVGl0bGUgZnJvbSAnQGNvbXBvbmVudHMvVUkvU2VjdGlvblRpdGxlJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFRyYWRlc09mUGVwcGVyQnlNb250aCBmcm9tICdAY29tcG9uZW50cy9DaGFydHMvVHJhZGVzT2ZQZXBwZXJCeU1vbnRoJ1xuaW1wb3J0IENoYXJ0QXJlYSBmcm9tICdAY29tcG9uZW50cy9VSS9DaGFydEFyZWEnXG5cbmludGVyZmFjZSBUcmFkZU9mUGVwcGVyIHtcbiAgX2lkOiBzdHJpbmdcbiAgY3JlYXRvcjoge1xuICAgIF9pZDogc3RyaW5nXG4gICAgZW1haWw6IHN0cmluZ1xuICAgIHVzZXJuYW1lOiBzdHJpbmdcbiAgICBpbWFnZTogc3RyaW5nXG4gIH1cbiAgcG9pbnRPZlNhbGVJZDogc3RyaW5nXG4gIGRhdGU6IHN0cmluZ1xuICBjbGFzOiBudW1iZXJcbiAgY29sb3I6IG51bWJlclxuICBwcmljZTogbnVtYmVyXG4gIHdlaWdodDogbnVtYmVyXG4gIHZhdFJhdGU6IG51bWJlclxuICB0b3RhbFN1bTogbnVtYmVyXG59XG5cbmZ1bmN0aW9uIEJhbGFuY2VPZlBlcHBlclRyYWRlcygpIHtcbiAgY29uc3QgW2FsbFRyYWRlcywgc2V0QWxsVHJhZGVzXSA9IHVzZVN0YXRlPFRyYWRlT2ZQZXBwZXJbXT4oW10pXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpXG4gIGNvbnN0IHVzZXJJZCA9IChzZXNzaW9uPy51c2VyIGFzIHsgaWQ/OiBzdHJpbmcgfSk/LmlkID8/ICcnXG5cbiAgY29uc3QgZmV0Y2hUcmFkZXNPZlBlcHBlciA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS90cmFkZS1vZi1wZXBwZXInKVxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuXG4gICAgICBjb25zdCBmaWx0ZXJlZFRyYWRlcyA9IGRhdGEuZmlsdGVyKCh0cmFkZTogVHJhZGVPZlBlcHBlcikgPT4gdHJhZGUuY3JlYXRvci5faWQudG9TdHJpbmcoKSA9PT0gdXNlcklkLnRvU3RyaW5nKCkpXG5cbiAgICAgIHNldEFsbFRyYWRlcyhmaWx0ZXJlZFRyYWRlcylcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaFRyYWRlc09mUGVwcGVyKClcbiAgfSwgW2xvYWRpbmddKVxuXG4gIGNvbnN0IGNhbGN1bGF0ZU1vbnRobHlTdW1zID0gKHRyYWRlczogVHJhZGVPZlBlcHBlcltdKTogbnVtYmVyW10gPT4ge1xuICAgIGNvbnN0IG1vbnRobHlTdW1zOiBudW1iZXJbXSA9IFswLCAwLCAwLCAwLCAwLCAwXSAvLyBJbmljamFsaXphY2phIHRhYmxpY3kgeiB6ZXJvd3ltaSBzdW1hbWlcblxuICAgIHRyYWRlcy5mb3JFYWNoKCh0cmFkZSkgPT4ge1xuICAgICAgY29uc3QgbW9udGggPSBuZXcgRGF0ZSh0cmFkZS5kYXRlKS5nZXRNb250aCgpXG5cbiAgICAgIGlmIChtb250aCA+PSA1ICYmIG1vbnRoIDw9IDEwKSB7IC8vIFV3emdsxJlkbmllbmllIHRyYW5zYWtjamkgeiBjemVyd2NhIGRvIGxpc3RvcGFkYSAoaW5kZWtzeSA1LTEwKVxuICAgICAgICBtb250aGx5U3Vtc1ttb250aCAtIDVdICs9IHRyYWRlLnRvdGFsU3VtXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiBtb250aGx5U3Vtcy5tYXAoKHN1bSkgPT4gcGFyc2VGbG9hdChzdW0udG9GaXhlZCgyKSkpXG4gIH1cblxuICBjb25zdCBjYWxjdWxhdGVNb250aGx5V2VpZ2h0cyA9ICh0cmFkZXM6IFRyYWRlT2ZQZXBwZXJbXSk6IG51bWJlcltdID0+IHtcbiAgICBjb25zdCBtb250aGx5V2VpZ2h0czogbnVtYmVyW10gPSBbMCwgMCwgMCwgMCwgMCwgMF0gLy8gSW5pY2phbGl6YWNqYSB0YWJsaWN5IHogemVyb3d5bWkgd2FnYW1pXG5cbiAgICB0cmFkZXMuZm9yRWFjaCgodHJhZGUpID0+IHtcbiAgICAgIGNvbnN0IG1vbnRoID0gbmV3IERhdGUodHJhZGUuZGF0ZSkuZ2V0TW9udGgoKVxuXG4gICAgICBpZiAobW9udGggPj0gNSAmJiBtb250aCA8PSAxMCkgeyAvLyBVd3pnbMSZZG5pZW5pZSB0cmFuc2FrY2ppIHogY3plcndjYSBkbyBsaXN0b3BhZGEgKGluZGVrc3kgNS0xMClcbiAgICAgICAgbW9udGhseVdlaWdodHNbbW9udGggLSA1XSArPSB0cmFkZS53ZWlnaHRcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIG1vbnRobHlXZWlnaHRzLm1hcCgod2VpZ2h0KSA9PiBwYXJzZUZsb2F0KHdlaWdodC50b0ZpeGVkKDIpKSlcbiAgfVxuXG4gIGNvbnN0IG1vbnRobHlTdW1zID0gY2FsY3VsYXRlTW9udGhseVN1bXMoYWxsVHJhZGVzKVxuICBjb25zdCBtb250aGx5V2VpZ2h0cyA9IGNhbGN1bGF0ZU1vbnRobHlXZWlnaHRzKGFsbFRyYWRlcylcblxuICBjb25zdCBhbm51YWxQcm9maXQgPSBtb250aGx5U3Vtcy5yZWR1Y2UoKHRvdGFsLCBzdW0pID0+IHRvdGFsICsgc3VtLCAwKVxuICBjb25zdCBmb3JtYXR0ZWRBbm51YWxQcm9maXQgPSBhbm51YWxQcm9maXQudG9Mb2NhbGVTdHJpbmcoJ3BsLVBMJylcblxuICBjb25zdCBhbm51YWxIYXJ2ZXN0ID0gbW9udGhseVdlaWdodHMucmVkdWNlKCh0b3RhbCwgd2VpZ2h0KSA9PiB0b3RhbCArIHdlaWdodCwgMClcbiAgY29uc3QgZm9ybWF0dGVkQW5udWFsSGFydmVzdCA9IGFubnVhbEhhcnZlc3QudG9Mb2NhbGVTdHJpbmcoJ3BsLVBMJylcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nY29udGFpbmVyIHB5LTIwIHRleHQtYmxhY2snPlxuICAgICAgPFNlY3Rpb25UaXRsZSB0aXRsZT0nQmlsYW5zIHNwcnplZGHFvHkgcGFwcnlraScgLz5cbiAgICAgIDxDaGFydEFyZWE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBteC0xMCc+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwPlJvY3puZSB6eXNraTo8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LW1haW5Db2xvcic+e2Zvcm1hdHRlZEFubnVhbFByb2ZpdH0gesWCPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LXJpZ2h0Jz5cbiAgICAgICAgICAgIDxwPlJvY3puZSB6Ymlvcnk6PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgdGV4dC1tYWluQ29sb3InPntmb3JtYXR0ZWRBbm51YWxIYXJ2ZXN0fSBrZzwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHttb250aGx5U3Vtcy5sZW5ndGggPiAwICYmIG1vbnRobHlXZWlnaHRzLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgPFRyYWRlc09mUGVwcGVyQnlNb250aCBtb250aGx5U3Vtcz17bW9udGhseVN1bXN9IG1vbnRobHlXZWlnaHRzPXttb250aGx5V2VpZ2h0c30gLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8cD5XY3p5dHl3YW5pZSBkYW55Y2guLi48L3A+XG4gICAgICAgICl9XG4gICAgICA8L0NoYXJ0QXJlYT5cbiAgICA8L3NlY3Rpb24+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFsYW5jZU9mUGVwcGVyVHJhZGVzXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VTZXNzaW9uIiwiU2VjdGlvblRpdGxlIiwiUmVhY3QiLCJUcmFkZXNPZlBlcHBlckJ5TW9udGgiLCJDaGFydEFyZWEiLCJCYWxhbmNlT2ZQZXBwZXJUcmFkZXMiLCJhbGxUcmFkZXMiLCJzZXRBbGxUcmFkZXMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImRhdGEiLCJzZXNzaW9uIiwidXNlcklkIiwidXNlciIsImlkIiwiZmV0Y2hUcmFkZXNPZlBlcHBlciIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIiwiZmlsdGVyZWRUcmFkZXMiLCJmaWx0ZXIiLCJ0cmFkZSIsImNyZWF0b3IiLCJfaWQiLCJ0b1N0cmluZyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNhbGN1bGF0ZU1vbnRobHlTdW1zIiwidHJhZGVzIiwibW9udGhseVN1bXMiLCJmb3JFYWNoIiwibW9udGgiLCJEYXRlIiwiZGF0ZSIsImdldE1vbnRoIiwidG90YWxTdW0iLCJtYXAiLCJzdW0iLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsImNhbGN1bGF0ZU1vbnRobHlXZWlnaHRzIiwibW9udGhseVdlaWdodHMiLCJ3ZWlnaHQiLCJhbm51YWxQcm9maXQiLCJyZWR1Y2UiLCJ0b3RhbCIsImZvcm1hdHRlZEFubnVhbFByb2ZpdCIsInRvTG9jYWxlU3RyaW5nIiwiYW5udWFsSGFydmVzdCIsImZvcm1hdHRlZEFubnVhbEhhcnZlc3QiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwidGl0bGUiLCJkaXYiLCJwIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/balance-of-pepper-trades/page.tsx\n"));

/***/ })

});