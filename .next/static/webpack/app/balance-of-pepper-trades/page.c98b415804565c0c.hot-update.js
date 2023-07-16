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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-client)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_UI_SectionTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/UI/SectionTitle */ \"(app-client)/./components/UI/SectionTitle.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction BalanceOfPepperTrades() {\n    var _ref;\n    _s();\n    const [allTrades, setAllTrades] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    var _id;\n    const userId = (_id = (_ref = session === null || session === void 0 ? void 0 : session.user) === null || _ref === void 0 ? void 0 : _ref.id) !== null && _id !== void 0 ? _id : \"\";\n    const fetchTradesOfPepper = async ()=>{\n        try {\n            const response = await fetch(\"/api/trade-of-pepper\");\n            const data = await response.json();\n            const filteredTrades = data.filter((trade)=>trade.creator._id.toString() === userId.toString());\n            setAllTrades(filteredTrades);\n        } catch (error) {\n            console.log(error);\n        } finally{\n            setLoading(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchTradesOfPepper();\n    }, [\n        loading\n    ]);\n    const calculateMonthlySums = (trades)=>{\n        const currentYear = new Date().getFullYear();\n        const monthlySums = [\n            0,\n            0,\n            0,\n            0,\n            0,\n            0\n        ];\n        trades.forEach((trade)=>{\n            const year = new Date(trade.date).getFullYear();\n            const month = new Date(trade.date).getMonth();\n            if (year === currentYear && month >= 5 && month <= 10) {\n                monthlySums[month - 5] += trade.totalSum;\n            }\n        });\n        return monthlySums.map((sum)=>parseFloat(sum.toFixed(2)));\n    };\n    const calculateMonthlyWeights = (trades)=>{\n        const currentYear = new Date().getFullYear();\n        const monthlyWeights = [\n            0,\n            0,\n            0,\n            0,\n            0,\n            0\n        ];\n        trades.forEach((trade)=>{\n            const year = new Date(trade.date).getFullYear();\n            const month = new Date(trade.date).getMonth();\n            if (year === currentYear && month >= 5 && month <= 10) {\n                monthlyWeights[month - 5] += trade.weight;\n            }\n        });\n        return monthlyWeights.map((weight)=>parseFloat(weight.toFixed(2)));\n    };\n    const calculateMonthlyTransactionCount = (trades)=>{\n        const currentYear = new Date().getFullYear();\n        const monthlyTransactionCounts = [\n            0,\n            0,\n            0,\n            0,\n            0,\n            0\n        ];\n        trades.forEach((trade)=>{\n            const year = new Date(trade.date).getFullYear();\n            const month = new Date(trade.date).getMonth();\n            if (year === currentYear && month >= 5 && month <= 10) {\n                monthlyTransactionCounts[month - 5] += 1;\n            }\n        });\n        return monthlyTransactionCounts;\n    };\n    const calculateColorWeights = (trades)=>{\n        const currentYear = new Date().getFullYear();\n        const colorWeights = {};\n        trades.forEach((trade)=>{\n            const year = new Date(trade.date).getFullYear();\n            const color = trade.color;\n            const weight = trade.weight;\n            if (year === currentYear) {\n                if (colorWeights[color]) {\n                    colorWeights[color] += weight;\n                } else {\n                    colorWeights[color] = weight;\n                }\n            }\n        });\n        const colorWeightValues = Object.values(colorWeights);\n        return colorWeightValues;\n    };\n    const calculateClassWeights = (trades)=>{\n        const currentYear = new Date().getFullYear();\n        const classWeights = {};\n        trades.forEach((trade)=>{\n            const year = new Date(trade.date).getFullYear();\n            const clas = trade.clas;\n            const weight = trade.weight;\n            if (year === currentYear) {\n                if (classWeights[clas]) {\n                    classWeights[clas] += weight;\n                } else {\n                    classWeights[clas] = weight;\n                }\n            }\n        });\n        const classWeightValues = Object.values(classWeights);\n        return classWeightValues;\n    };\n    const monthlySums = calculateMonthlySums(allTrades);\n    const monthlyWeights = calculateMonthlyWeights(allTrades);\n    const annualProfit = monthlySums.reduce((total, sum)=>total + sum, 0);\n    const formattedAnnualProfit = annualProfit.toLocaleString(\"pl-PL\");\n    const annualHarvest = monthlyWeights.reduce((total, weight)=>total + weight, 0);\n    const formattedAnnualHarvest = annualHarvest.toLocaleString(\"pl-PL\");\n    const monthlyTransactionCounts = calculateMonthlyTransactionCount(allTrades);\n    const colorWeights = calculateColorWeights(allTrades);\n    const classWeights = calculateClassWeights(allTrades);\n    console.log(colorWeights);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (allTrades.length > 0) {\n            const monthlySums = calculateMonthlySums(allTrades);\n            const monthlyWeights = calculateMonthlyWeights(allTrades);\n            const annualProfit = monthlySums.reduce((total, sum)=>total + sum, 0);\n            const formattedAnnualProfit = annualProfit.toLocaleString(\"pl-PL\");\n            const annualHarvest = monthlyWeights.reduce((total, weight)=>total + weight, 0);\n            const formattedAnnualHarvest = annualHarvest.toLocaleString(\"pl-PL\");\n            const monthlyTransactionCounts = calculateMonthlyTransactionCount(allTrades);\n            const colorWeights = calculateColorWeights(allTrades);\n            const classWeights = calculateClassWeights(allTrades);\n        }\n    }, [\n        allTrades\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"container py-20 text-black\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_SectionTitle__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                title: \"Bilans sprzedaży papryki\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                lineNumber: 192,\n                columnNumber: 4\n            }, this),\n            allTrades.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row flex-wrap gap-6 justify-center\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                lineNumber: 194,\n                columnNumber: 5\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-10 md:text-lg text-center\",\n                children: \"Wczytywanie danych...\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n                lineNumber: 323,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-pepper-trades/page.tsx\",\n        lineNumber: 191,\n        columnNumber: 3\n    }, this);\n}\n_s(BalanceOfPepperTrades, \"uvolFXoM9kh3jJrFNJwfdWegKEQ=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = BalanceOfPepperTrades;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BalanceOfPepperTrades);\nvar _c;\n$RefreshReg$(_c, \"BalanceOfPepperTrades\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2JhbGFuY2Utb2YtcGVwcGVyLXRyYWRlcy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDMkM7QUFDQztBQUNVO0FBQzdCO0FBOEJ6QixTQUFTSztRQUlPOztJQUhmLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHUCwrQ0FBUUEsQ0FBa0IsRUFBRTtJQUM5RCxNQUFNLENBQUNRLFNBQVNDLFdBQVcsR0FBR1QsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxFQUFFVSxNQUFNQyxPQUFPLEVBQUUsR0FBR1QsMkRBQVVBO1FBQ3JCO0lBQWYsTUFBTVUsU0FBUyxlQUFDRCxvQkFBQUEscUJBQUFBLEtBQUFBLElBQUFBLFFBQVNFLGtCQUFWLGdDQUFvQ0MsZ0JBQXBDLHVCQUEwQztJQUV6RCxNQUFNQyxzQkFBc0I7UUFDM0IsSUFBSTtZQUNILE1BQU1DLFdBQVcsTUFBTUMsTUFBTTtZQUM3QixNQUFNUCxPQUFPLE1BQU1NLFNBQVNFO1lBRTVCLE1BQU1DLGlCQUFpQlQsS0FBS1UsT0FBTyxDQUFDQyxRQUF5QkEsTUFBTUMsUUFBUUMsSUFBSUMsZUFBZVosT0FBT1k7WUFFckdqQixhQUFhWTtRQUNkLEVBQUUsT0FBT00sT0FBTztZQUNmQyxRQUFRQyxJQUFJRjtRQUNiLFNBQVU7WUFDVGhCLFdBQVc7UUFDWjtJQUNEO0lBRUFSLGdEQUFTQSxDQUFDO1FBQ1RjO0lBQ0QsR0FBRztRQUFDUDtLQUFRO0lBRVosTUFBTW9CLHVCQUF1QixDQUFDQztRQUM3QixNQUFNQyxjQUFjLElBQUlDLE9BQU9DO1FBQy9CLE1BQU1DLGNBQXdCO1lBQUM7WUFBRztZQUFHO1lBQUc7WUFBRztZQUFHO1NBQUU7UUFFaERKLE9BQU9LLFFBQVFiLENBQUFBO1lBQ2QsTUFBTWMsT0FBTyxJQUFJSixLQUFLVixNQUFNZSxNQUFNSjtZQUNsQyxNQUFNSyxRQUFRLElBQUlOLEtBQUtWLE1BQU1lLE1BQU1FO1lBRW5DLElBQUlILFNBQVNMLGVBQWVPLFNBQVMs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ZixTQUFXZSxRQUFRZixRQUFRO0lBQy9FLE1BQU1tQix5QkFBeUJELGNBQWNELGVBQWU7SUFFNUQsTUFBTWYsMkJBQTJCRCxpQ0FBaUN6QztJQUVsRSxNQUFNNEMsZUFBZUQsc0JBQXNCM0M7SUFFM0MsTUFBTWtELGVBQWVELHNCQUFzQmpEO0lBRTNDb0IsUUFBUUMsSUFBSXVCO0lBRVpqRCxnREFBU0EsQ0FBQztRQUNULElBQUlLLFVBQVU0RCxTQUFTLEdBQUc7WUFDekIsTUFBTWpDLGNBQWNMLHFCQUFxQnRCO1lBQ3pDLE1BQU11QyxpQkFBaUJELHdCQUF3QnRDO1lBRS9DLE1BQU1xRCxlQUFlMUIsWUFBWTJCLE9BQU8sQ0FBQ0MsT0FBT3BCLE1BQVFvQixRQUFRcEIsS0FBSztZQUNyRSxNQUFNcUIsd0JBQXdCSCxhQUFhSSxlQUFlO1lBRTFELE1BQU1DLGdCQUFnQm5CLGVBQWVlLE9BQU8sQ0FBQ0MsT0FBT2YsU0FBV2UsUUFBUWYsUUFBUTtZQUMvRSxNQUFNbUIseUJBQXlCRCxjQUFjRCxlQUFlO1lBRTVELE1BQU1mLDJCQUEyQkQsaUNBQWlDekM7WUFFbEUsTUFBTTRDLGVBQWVELHNCQUFzQjNDO1lBRTNDLE1BQU1rRCxlQUFlRCxzQkFBc0JqRDtRQUM1QztJQUNELEdBQUc7UUFBQ0E7S0FBVTtJQUVkLHFCQUNDLDhEQUFDNkQ7UUFBUUMsV0FBVTs7MEJBQ2xCLDhEQUFDakUsbUVBQVlBO2dCQUFDa0UsT0FBTTs7Ozs7O1lBQ25CL0QsVUFBVTRELFNBQVMsa0JBQ25CLDhEQUFDSTtnQkFBSUYsV0FBVTs7Ozs7cUNBaUlmLDhEQUFDRztnQkFBRUgsV0FBVTswQkFBK0I7Ozs7Ozs7Ozs7OztBQUloRDtHQXBTUy9EOztRQUdrQkgsdURBQVVBOzs7S0FINUJHO0FBc1NULCtEQUFlQSxxQkFBcUJBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2JhbGFuY2Utb2YtcGVwcGVyLXRyYWRlcy9wYWdlLnRzeD8zNmJmIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCdcbmltcG9ydCBTZWN0aW9uVGl0bGUgZnJvbSAnQGNvbXBvbmVudHMvVUkvU2VjdGlvblRpdGxlJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFRyYWRlc09mUGVwcGVyQnlNb250aCBmcm9tICdAY29tcG9uZW50cy9DaGFydHMvVHJhZGVzT2ZQZXBwZXJCeU1vbnRoJ1xuaW1wb3J0IE51bWJlck9mVHJhZGVzUGVwcGVyIGZyb20gJ0Bjb21wb25lbnRzL0NoYXJ0cy9OdW1iZXJPZlRyYWRlc1BlcHBlcidcbmltcG9ydCBDbGFzc2VzT2ZQZXBwZXIgZnJvbSAnQGNvbXBvbmVudHMvQ2hhcnRzL0NsYXNzZXNPZlBlcHBlcidcbmltcG9ydCBDaGFydEFyZWEgZnJvbSAnQGNvbXBvbmVudHMvVUkvQ2hhcnRBcmVhJ1xuXG5pbXBvcnQgcmVkIGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvaW1nL2ltYWdlX3JlZF9wZXBwZXIucG5nJ1xuaW1wb3J0IHllbGxvdyBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2ltZy9pbWFnZV95ZWxsb3dfcGVwcGVyLnBuZydcbmltcG9ydCBncmVlbiBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2ltZy9pbWFnZV9ncmVlbl9wZXBwZXIucG5nJ1xuaW1wb3J0IG9yYW5nZSBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2ltZy9pbWFnZV9vcmFuZ2VfcGVwcGVyLnBuZydcbmltcG9ydCBibG9uZCBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2ltZy9pbWFnZV9ibG9uZF9wZXBwZXIucG5nJ1xuXG5pbnRlcmZhY2UgVHJhZGVPZlBlcHBlciB7XG5cdF9pZDogc3RyaW5nXG5cdGNyZWF0b3I6IHtcblx0XHRfaWQ6IHN0cmluZ1xuXHRcdGVtYWlsOiBzdHJpbmdcblx0XHR1c2VybmFtZTogc3RyaW5nXG5cdFx0aW1hZ2U6IHN0cmluZ1xuXHR9XG5cdHBvaW50T2ZTYWxlSWQ6IHN0cmluZ1xuXHRkYXRlOiBzdHJpbmdcblx0Y2xhczogbnVtYmVyXG5cdGNvbG9yOiBudW1iZXJcblx0cHJpY2U6IG51bWJlclxuXHR3ZWlnaHQ6IG51bWJlclxuXHR2YXRSYXRlOiBudW1iZXJcblx0dG90YWxTdW06IG51bWJlclxufVxuXG5mdW5jdGlvbiBCYWxhbmNlT2ZQZXBwZXJUcmFkZXMoKSB7XG5cdGNvbnN0IFthbGxUcmFkZXMsIHNldEFsbFRyYWRlc10gPSB1c2VTdGF0ZTxUcmFkZU9mUGVwcGVyW10+KFtdKVxuXHRjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuXHRjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKVxuXHRjb25zdCB1c2VySWQgPSAoc2Vzc2lvbj8udXNlciBhcyB7IGlkPzogc3RyaW5nIH0pPy5pZCA/PyAnJ1xuXG5cdGNvbnN0IGZldGNoVHJhZGVzT2ZQZXBwZXIgPSBhc3luYyAoKSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvdHJhZGUtb2YtcGVwcGVyJylcblx0XHRcdGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcblxuXHRcdFx0Y29uc3QgZmlsdGVyZWRUcmFkZXMgPSBkYXRhLmZpbHRlcigodHJhZGU6IFRyYWRlT2ZQZXBwZXIpID0+IHRyYWRlLmNyZWF0b3IuX2lkLnRvU3RyaW5nKCkgPT09IHVzZXJJZC50b1N0cmluZygpKVxuXG5cdFx0XHRzZXRBbGxUcmFkZXMoZmlsdGVyZWRUcmFkZXMpXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUubG9nKGVycm9yKVxuXHRcdH0gZmluYWxseSB7XG5cdFx0XHRzZXRMb2FkaW5nKGZhbHNlKVxuXHRcdH1cblx0fVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0ZmV0Y2hUcmFkZXNPZlBlcHBlcigpXG5cdH0sIFtsb2FkaW5nXSlcblxuXHRjb25zdCBjYWxjdWxhdGVNb250aGx5U3VtcyA9ICh0cmFkZXM6IFRyYWRlT2ZQZXBwZXJbXSk6IG51bWJlcltdID0+IHtcblx0XHRjb25zdCBjdXJyZW50WWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKVxuXHRcdGNvbnN0IG1vbnRobHlTdW1zOiBudW1iZXJbXSA9IFswLCAwLCAwLCAwLCAwLCAwXVxuXG5cdFx0dHJhZGVzLmZvckVhY2godHJhZGUgPT4ge1xuXHRcdFx0Y29uc3QgeWVhciA9IG5ldyBEYXRlKHRyYWRlLmRhdGUpLmdldEZ1bGxZZWFyKClcblx0XHRcdGNvbnN0IG1vbnRoID0gbmV3IERhdGUodHJhZGUuZGF0ZSkuZ2V0TW9udGgoKVxuXG5cdFx0XHRpZiAoeWVhciA9PT0gY3VycmVudFllYXIgJiYgbW9udGggPj0gNSAmJiBtb250aCA8PSAxMCkge1xuXHRcdFx0XHRtb250aGx5U3Vtc1ttb250aCAtIDVdICs9IHRyYWRlLnRvdGFsU3VtXG5cdFx0XHR9XG5cdFx0fSlcblxuXHRcdHJldHVybiBtb250aGx5U3Vtcy5tYXAoc3VtID0+IHBhcnNlRmxvYXQoc3VtLnRvRml4ZWQoMikpKVxuXHR9XG5cblx0Y29uc3QgY2FsY3VsYXRlTW9udGhseVdlaWdodHMgPSAodHJhZGVzOiBUcmFkZU9mUGVwcGVyW10pOiBudW1iZXJbXSA9PiB7XG5cdFx0Y29uc3QgY3VycmVudFllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKClcblx0XHRjb25zdCBtb250aGx5V2VpZ2h0czogbnVtYmVyW10gPSBbMCwgMCwgMCwgMCwgMCwgMF1cblxuXHRcdHRyYWRlcy5mb3JFYWNoKHRyYWRlID0+IHtcblx0XHRcdGNvbnN0IHllYXIgPSBuZXcgRGF0ZSh0cmFkZS5kYXRlKS5nZXRGdWxsWWVhcigpXG5cdFx0XHRjb25zdCBtb250aCA9IG5ldyBEYXRlKHRyYWRlLmRhdGUpLmdldE1vbnRoKClcblxuXHRcdFx0aWYgKHllYXIgPT09IGN1cnJlbnRZZWFyICYmIG1vbnRoID49IDUgJiYgbW9udGggPD0gMTApIHtcblx0XHRcdFx0bW9udGhseVdlaWdodHNbbW9udGggLSA1XSArPSB0cmFkZS53ZWlnaHRcblx0XHRcdH1cblx0XHR9KVxuXG5cdFx0cmV0dXJuIG1vbnRobHlXZWlnaHRzLm1hcCh3ZWlnaHQgPT4gcGFyc2VGbG9hdCh3ZWlnaHQudG9GaXhlZCgyKSkpXG5cdH1cblxuXHRjb25zdCBjYWxjdWxhdGVNb250aGx5VHJhbnNhY3Rpb25Db3VudCA9ICh0cmFkZXM6IFRyYWRlT2ZQZXBwZXJbXSk6IG51bWJlcltdID0+IHtcblx0XHRjb25zdCBjdXJyZW50WWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKVxuXHRcdGNvbnN0IG1vbnRobHlUcmFuc2FjdGlvbkNvdW50czogbnVtYmVyW10gPSBbMCwgMCwgMCwgMCwgMCwgMF1cblxuXHRcdHRyYWRlcy5mb3JFYWNoKHRyYWRlID0+IHtcblx0XHRcdGNvbnN0IHllYXIgPSBuZXcgRGF0ZSh0cmFkZS5kYXRlKS5nZXRGdWxsWWVhcigpXG5cdFx0XHRjb25zdCBtb250aCA9IG5ldyBEYXRlKHRyYWRlLmRhdGUpLmdldE1vbnRoKClcblxuXHRcdFx0aWYgKHllYXIgPT09IGN1cnJlbnRZZWFyICYmIG1vbnRoID49IDUgJiYgbW9udGggPD0gMTApIHtcblx0XHRcdFx0bW9udGhseVRyYW5zYWN0aW9uQ291bnRzW21vbnRoIC0gNV0gKz0gMVxuXHRcdFx0fVxuXHRcdH0pXG5cblx0XHRyZXR1cm4gbW9udGhseVRyYW5zYWN0aW9uQ291bnRzXG5cdH1cblxuXHRjb25zdCBjYWxjdWxhdGVDb2xvcldlaWdodHMgPSAodHJhZGVzOiBUcmFkZU9mUGVwcGVyW10pOiBudW1iZXJbXSA9PiB7XG5cdFx0Y29uc3QgY3VycmVudFllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKClcblx0XHRjb25zdCBjb2xvcldlaWdodHM6IHsgW2NvbG9yOiBudW1iZXJdOiBudW1iZXIgfSA9IHt9XG5cblx0XHR0cmFkZXMuZm9yRWFjaCh0cmFkZSA9PiB7XG5cdFx0XHRjb25zdCB5ZWFyID0gbmV3IERhdGUodHJhZGUuZGF0ZSkuZ2V0RnVsbFllYXIoKVxuXHRcdFx0Y29uc3QgY29sb3IgPSB0cmFkZS5jb2xvclxuXHRcdFx0Y29uc3Qgd2VpZ2h0ID0gdHJhZGUud2VpZ2h0XG5cblx0XHRcdGlmICh5ZWFyID09PSBjdXJyZW50WWVhcikge1xuXHRcdFx0XHRpZiAoY29sb3JXZWlnaHRzW2NvbG9yXSkge1xuXHRcdFx0XHRcdGNvbG9yV2VpZ2h0c1tjb2xvcl0gKz0gd2VpZ2h0XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y29sb3JXZWlnaHRzW2NvbG9yXSA9IHdlaWdodFxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSlcblxuXHRcdGNvbnN0IGNvbG9yV2VpZ2h0VmFsdWVzID0gT2JqZWN0LnZhbHVlcyhjb2xvcldlaWdodHMpXG5cblx0XHRyZXR1cm4gY29sb3JXZWlnaHRWYWx1ZXNcblx0fVxuXG5cdGNvbnN0IGNhbGN1bGF0ZUNsYXNzV2VpZ2h0cyA9ICh0cmFkZXM6IFRyYWRlT2ZQZXBwZXJbXSk6IG51bWJlcltdID0+IHtcblx0XHRjb25zdCBjdXJyZW50WWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKVxuXHRcdGNvbnN0IGNsYXNzV2VpZ2h0czogeyBbY2xhczogbnVtYmVyXTogbnVtYmVyIH0gPSB7fVxuXG5cdFx0dHJhZGVzLmZvckVhY2godHJhZGUgPT4ge1xuXHRcdFx0Y29uc3QgeWVhciA9IG5ldyBEYXRlKHRyYWRlLmRhdGUpLmdldEZ1bGxZZWFyKClcblx0XHRcdGNvbnN0IGNsYXMgPSB0cmFkZS5jbGFzXG5cdFx0XHRjb25zdCB3ZWlnaHQgPSB0cmFkZS53ZWlnaHRcblxuXHRcdFx0aWYgKHllYXIgPT09IGN1cnJlbnRZZWFyKSB7XG5cdFx0XHRcdGlmIChjbGFzc1dlaWdodHNbY2xhc10pIHtcblx0XHRcdFx0XHRjbGFzc1dlaWdodHNbY2xhc10gKz0gd2VpZ2h0XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y2xhc3NXZWlnaHRzW2NsYXNdID0gd2VpZ2h0XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KVxuXG5cdFx0Y29uc3QgY2xhc3NXZWlnaHRWYWx1ZXMgPSBPYmplY3QudmFsdWVzKGNsYXNzV2VpZ2h0cylcblxuXHRcdHJldHVybiBjbGFzc1dlaWdodFZhbHVlc1xuXHR9XG5cblx0Y29uc3QgbW9udGhseVN1bXMgPSBjYWxjdWxhdGVNb250aGx5U3VtcyhhbGxUcmFkZXMpXG5cdGNvbnN0IG1vbnRobHlXZWlnaHRzID0gY2FsY3VsYXRlTW9udGhseVdlaWdodHMoYWxsVHJhZGVzKVxuXG5cdGNvbnN0IGFubnVhbFByb2ZpdCA9IG1vbnRobHlTdW1zLnJlZHVjZSgodG90YWwsIHN1bSkgPT4gdG90YWwgKyBzdW0sIDApXG5cdGNvbnN0IGZvcm1hdHRlZEFubnVhbFByb2ZpdCA9IGFubnVhbFByb2ZpdC50b0xvY2FsZVN0cmluZygncGwtUEwnKVxuXG5cdGNvbnN0IGFubnVhbEhhcnZlc3QgPSBtb250aGx5V2VpZ2h0cy5yZWR1Y2UoKHRvdGFsLCB3ZWlnaHQpID0+IHRvdGFsICsgd2VpZ2h0LCAwKVxuXHRjb25zdCBmb3JtYXR0ZWRBbm51YWxIYXJ2ZXN0ID0gYW5udWFsSGFydmVzdC50b0xvY2FsZVN0cmluZygncGwtUEwnKVxuXG5cdGNvbnN0IG1vbnRobHlUcmFuc2FjdGlvbkNvdW50cyA9IGNhbGN1bGF0ZU1vbnRobHlUcmFuc2FjdGlvbkNvdW50KGFsbFRyYWRlcylcblxuXHRjb25zdCBjb2xvcldlaWdodHMgPSBjYWxjdWxhdGVDb2xvcldlaWdodHMoYWxsVHJhZGVzKVxuXG5cdGNvbnN0IGNsYXNzV2VpZ2h0cyA9IGNhbGN1bGF0ZUNsYXNzV2VpZ2h0cyhhbGxUcmFkZXMpXG5cblx0Y29uc29sZS5sb2coY29sb3JXZWlnaHRzKVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYgKGFsbFRyYWRlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRjb25zdCBtb250aGx5U3VtcyA9IGNhbGN1bGF0ZU1vbnRobHlTdW1zKGFsbFRyYWRlcylcblx0XHRcdGNvbnN0IG1vbnRobHlXZWlnaHRzID0gY2FsY3VsYXRlTW9udGhseVdlaWdodHMoYWxsVHJhZGVzKVxuXG5cdFx0XHRjb25zdCBhbm51YWxQcm9maXQgPSBtb250aGx5U3Vtcy5yZWR1Y2UoKHRvdGFsLCBzdW0pID0+IHRvdGFsICsgc3VtLCAwKVxuXHRcdFx0Y29uc3QgZm9ybWF0dGVkQW5udWFsUHJvZml0ID0gYW5udWFsUHJvZml0LnRvTG9jYWxlU3RyaW5nKCdwbC1QTCcpXG5cblx0XHRcdGNvbnN0IGFubnVhbEhhcnZlc3QgPSBtb250aGx5V2VpZ2h0cy5yZWR1Y2UoKHRvdGFsLCB3ZWlnaHQpID0+IHRvdGFsICsgd2VpZ2h0LCAwKVxuXHRcdFx0Y29uc3QgZm9ybWF0dGVkQW5udWFsSGFydmVzdCA9IGFubnVhbEhhcnZlc3QudG9Mb2NhbGVTdHJpbmcoJ3BsLVBMJylcblxuXHRcdFx0Y29uc3QgbW9udGhseVRyYW5zYWN0aW9uQ291bnRzID0gY2FsY3VsYXRlTW9udGhseVRyYW5zYWN0aW9uQ291bnQoYWxsVHJhZGVzKVxuXG5cdFx0XHRjb25zdCBjb2xvcldlaWdodHMgPSBjYWxjdWxhdGVDb2xvcldlaWdodHMoYWxsVHJhZGVzKVxuXG5cdFx0XHRjb25zdCBjbGFzc1dlaWdodHMgPSBjYWxjdWxhdGVDbGFzc1dlaWdodHMoYWxsVHJhZGVzKVxuXHRcdH1cblx0fSwgW2FsbFRyYWRlc10pXG5cblx0cmV0dXJuIChcblx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9J2NvbnRhaW5lciBweS0yMCB0ZXh0LWJsYWNrJz5cblx0XHRcdDxTZWN0aW9uVGl0bGUgdGl0bGU9J0JpbGFucyBzcHJ6ZWRhxbx5IHBhcHJ5a2knIC8+XG5cdFx0XHR7YWxsVHJhZGVzLmxlbmd0aCA+IDAgPyAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IGZsZXgtd3JhcCBnYXAtNiBqdXN0aWZ5LWNlbnRlcic+XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0ey8qIDxDaGFydEFyZWEgY2xhc3NOYW1lPSd3LWZ1bGwgbWQ6dy1bMzQwcHhdIGgtWzM4MHB4XSc+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXInPlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J21iLTMgdGV4dC1jZW50ZXIgZm9udC1zZW1pYm9sZCc+XG5cdFx0XHRcdFx0XHRcdFx0TGljemJhIHRyYW5zYWtjamkgc3ByemVkYcW8eSBwYXByeWtpIG5hIHByemVzdHJ6ZW5pIGtvbGVqbnljaCBtaWVzacSZY3kgc2V6b251XG5cdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0PE51bWJlck9mVHJhZGVzUGVwcGVyIG1vbnRobHlUcmFuc2FjdGlvbkNvdW50cz17bW9udGhseVRyYW5zYWN0aW9uQ291bnRzfSAvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9DaGFydEFyZWE+XG5cdFx0XHRcdFx0PENoYXJ0QXJlYSBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wganVzdGlmeS1ldmVubHkgdy1mdWxsIGgtWzcwMHB4XSBtZDp3LVs0NTBweF0nPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdmb250LXNlbWlib2xkIHRleHQtY2VudGVyJz5aYmlvcnkgcGFwcnlraSB3IGJpZcW8xIVjeW0gc2V6b25pZSB3IHphbGXFvG5vxZtjaSBvZCBqZWoga29sb3J1PC9wPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgdy1mdWxsIGdhcC0yJz5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlcic+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyJz5cblx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtyZWQuc3JjfSBhbHQ9J2lrb25hIGN6ZXJ3b25laiBwYXByeWtpJyBjbGFzc05hbWU9J3ctNiBtci0zJyAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHA+UGFwcnlrYSBjemVyd29uYTwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J2p1c3RpZnktc2VsZi1lbmQnPlxuXHRcdFx0XHRcdFx0XHRcdFx0e2NvbG9yV2VpZ2h0c1swXVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ/LnRvTG9jYWxlU3RyaW5nKCdwbC1QTCcsIHsgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAwLCBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDAgfSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0LnJlcGxhY2UoLyhcXGQpKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJyQxICcpIHx8ICcwJ317JyAnfVxuXHRcdFx0XHRcdFx0XHRcdFx0a2dcblx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyJz5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXInPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e3llbGxvdy5zcmN9IGFsdD0naWtvbmEgxbzDs8WCdGVqIHBhcHJ5a2knIGNsYXNzTmFtZT0ndy02IG1yLTMnIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cD5QYXByeWthIMW8w7PFgnRhPC9wPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0nanVzdGlmeS1zZWxmLWVuZCc+XG5cdFx0XHRcdFx0XHRcdFx0XHR7Y29sb3JXZWlnaHRzWzFdXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD8udG9Mb2NhbGVTdHJpbmcoJ3BsLVBMJywgeyBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDAsIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMCB9KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQucmVwbGFjZSgvKFxcZCkoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnJDEgJykgfHwgJzAnfXsnICd9XG5cdFx0XHRcdFx0XHRcdFx0XHRrZ1xuXHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXInPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlcic+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17Z3JlZW4uc3JjfSBhbHQ9J2lrb25hIHppZWxvbmVqIHBhcHJ5a2knIGNsYXNzTmFtZT0ndy02IG1yLTMnIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cD5QYXByeWthIHppZWxvbmE8L3A+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdqdXN0aWZ5LXNlbGYtZW5kJz5cblx0XHRcdFx0XHRcdFx0XHRcdHtjb2xvcldlaWdodHNbMl1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Py50b0xvY2FsZVN0cmluZygncGwtUEwnLCB7IG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMCwgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAwIH0pXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC5yZXBsYWNlKC8oXFxkKSg/PShcXGR7M30pKyg/IVxcZCkpL2csICckMSAnKSB8fCAnMCd9eycgJ31cblx0XHRcdFx0XHRcdFx0XHRcdGtnXG5cdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlcic+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyJz5cblx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtvcmFuZ2Uuc3JjfSBhbHQ9J2lrb25hIHBvbWFyYcWEY3pvd2VqIHBhcHJ5a2knIGNsYXNzTmFtZT0ndy02IG1yLTMnIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cD5QYXByeWthIHBvbWFyYcWEY3pvd2E8L3A+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdqdXN0aWZ5LXNlbGYtZW5kJz5cblx0XHRcdFx0XHRcdFx0XHRcdHtjb2xvcldlaWdodHNbM11cblx0XHRcdFx0XHRcdFx0XHRcdFx0Py50b0xvY2FsZVN0cmluZygncGwtUEwnLCB7IG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMCwgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAwIH0pXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC5yZXBsYWNlKC8oXFxkKSg/PShcXGR7M30pKyg/IVxcZCkpL2csICckMSAnKSB8fCAnMCd9eycgJ31cblx0XHRcdFx0XHRcdFx0XHRcdGtnXG5cdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlcic+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyJz5cblx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtibG9uZC5zcmN9IGFsdD0naWtvbmEgYmxvbmQgcGFwcnlraScgY2xhc3NOYW1lPSd3LTYgbXItMycgLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxwPlBhcHJ5a2EgYmxvbmR5bmE8L3A+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdqdXN0aWZ5LXNlbGYtZW5kJz5cblx0XHRcdFx0XHRcdFx0XHRcdHtjb2xvcldlaWdodHNbNF1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Py50b0xvY2FsZVN0cmluZygncGwtUEwnLCB7IG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMCwgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAwIH0pXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC5yZXBsYWNlKC8oXFxkKSg/PShcXGR7M30pKyg/IVxcZCkpL2csICckMSAnKSB8fCAnMCd9eycgJ31cblx0XHRcdFx0XHRcdFx0XHRcdGtnXG5cdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlcic+XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdmb250LXNlbWlib2xkJz5TdW1hOjwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8cD57Zm9ybWF0dGVkQW5udWFsSGFydmVzdH0ga2c8L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8Q2xhc3Nlc09mUGVwcGVyIC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L0NoYXJ0QXJlYT5cblx0XHRcdFx0XHQ8Q2hhcnRBcmVhIGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWV2ZW5seSB3LWZ1bGwgaC1bNzAwcHhdIG1kOnctWzQ1MHB4XSc+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J2ZvbnQtc2VtaWJvbGQgdGV4dC1jZW50ZXInPlpiaW9yeSBwYXByeWtpIHcgYmllxbzEhWN5bSBzZXpvbmllIHcgemFsZcW8bm/Fm2NpIG9kIGplaiBrbGFzeTwvcD5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIHctZnVsbCBnYXAtMic+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXInPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlcic+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9J2ZhLXNvbGlkIGZhLTEgZm9udC1zZW1pYm9sZCBtci0zIHRleHQtMnhsJz48L2k+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cD5LbGFzYTwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J2p1c3RpZnktc2VsZi1lbmQnPlxuXHRcdFx0XHRcdFx0XHRcdFx0e2NvbG9yV2VpZ2h0c1swXVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ/LnRvTG9jYWxlU3RyaW5nKCdwbC1QTCcsIHsgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAwLCBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDAgfSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0LnJlcGxhY2UoLyhcXGQpKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJyQxICcpIHx8ICcwJ317JyAnfVxuXHRcdFx0XHRcdFx0XHRcdFx0a2dcblx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyJz5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXInPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPSdmYS1zb2xpZCBmYS0yIGZvbnQtc2VtaWJvbGQgbXItMyB0ZXh0LTJ4bCc+PC9pPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHA+S2xhc2E8L3A+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdqdXN0aWZ5LXNlbGYtZW5kJz5cblx0XHRcdFx0XHRcdFx0XHRcdHtjb2xvcldlaWdodHNbMV1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Py50b0xvY2FsZVN0cmluZygncGwtUEwnLCB7IG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMCwgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAwIH0pXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC5yZXBsYWNlKC8oXFxkKSg/PShcXGR7M30pKyg/IVxcZCkpL2csICckMSAnKSB8fCAnMCd9eycgJ31cblx0XHRcdFx0XHRcdFx0XHRcdGtnXG5cdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlcic+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYS1zb2xpZCBmYS0zIGZvbnQtc2VtaWJvbGQgbXItMyB0ZXh0LTJ4bCc+PC9pPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHA+S2xhc2EgKGtyb2pvbmEpPC9wPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0nanVzdGlmeS1zZWxmLWVuZCc+XG5cdFx0XHRcdFx0XHRcdFx0XHR7Y29sb3JXZWlnaHRzWzJdXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD8udG9Mb2NhbGVTdHJpbmcoJ3BsLVBMJywgeyBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDAsIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMCB9KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQucmVwbGFjZSgvKFxcZCkoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnJDEgJykgfHwgJzAnfXsnICd9XG5cdFx0XHRcdFx0XHRcdFx0XHRrZ1xuXHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyJz5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J2ZvbnQtc2VtaWJvbGQnPlN1bWE6PC9wPlxuXHRcdFx0XHRcdFx0XHRcdDxwPntmb3JtYXR0ZWRBbm51YWxIYXJ2ZXN0fSBrZzwvcD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxDbGFzc2VzT2ZQZXBwZXIgIC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L0NoYXJ0QXJlYT4gKi99XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KSA6IChcblx0XHRcdFx0PHAgY2xhc3NOYW1lPSdtdC0xMCBtZDp0ZXh0LWxnIHRleHQtY2VudGVyJz5XY3p5dHl3YW5pZSBkYW55Y2guLi48L3A+XG5cdFx0XHQpfVxuXHRcdDwvc2VjdGlvbj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYWxhbmNlT2ZQZXBwZXJUcmFkZXNcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVNlc3Npb24iLCJTZWN0aW9uVGl0bGUiLCJSZWFjdCIsIkJhbGFuY2VPZlBlcHBlclRyYWRlcyIsImFsbFRyYWRlcyIsInNldEFsbFRyYWRlcyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZGF0YSIsInNlc3Npb24iLCJ1c2VySWQiLCJ1c2VyIiwiaWQiLCJmZXRjaFRyYWRlc09mUGVwcGVyIiwicmVzcG9uc2UiLCJmZXRjaCIsImpzb24iLCJmaWx0ZXJlZFRyYWRlcyIsImZpbHRlciIsInRyYWRlIiwiY3JlYXRvciIsIl9pZCIsInRvU3RyaW5nIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiY2FsY3VsYXRlTW9udGhseVN1bXMiLCJ0cmFkZXMiLCJjdXJyZW50WWVhciIsIkRhdGUiLCJnZXRGdWxsWWVhciIsIm1vbnRobHlTdW1zIiwiZm9yRWFjaCIsInllYXIiLCJkYXRlIiwibW9udGgiLCJnZXRNb250aCIsInRvdGFsU3VtIiwibWFwIiwic3VtIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJjYWxjdWxhdGVNb250aGx5V2VpZ2h0cyIsIm1vbnRobHlXZWlnaHRzIiwid2VpZ2h0IiwiY2FsY3VsYXRlTW9udGhseVRyYW5zYWN0aW9uQ291bnQiLCJtb250aGx5VHJhbnNhY3Rpb25Db3VudHMiLCJjYWxjdWxhdGVDb2xvcldlaWdodHMiLCJjb2xvcldlaWdodHMiLCJjb2xvciIsImNvbG9yV2VpZ2h0VmFsdWVzIiwiT2JqZWN0IiwidmFsdWVzIiwiY2FsY3VsYXRlQ2xhc3NXZWlnaHRzIiwiY2xhc3NXZWlnaHRzIiwiY2xhcyIsImNsYXNzV2VpZ2h0VmFsdWVzIiwiYW5udWFsUHJvZml0IiwicmVkdWNlIiwidG90YWwiLCJmb3JtYXR0ZWRBbm51YWxQcm9maXQiLCJ0b0xvY2FsZVN0cmluZyIsImFubnVhbEhhcnZlc3QiLCJmb3JtYXR0ZWRBbm51YWxIYXJ2ZXN0IiwibGVuZ3RoIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsInRpdGxlIiwiZGl2IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/balance-of-pepper-trades/page.tsx\n"));

/***/ })

});