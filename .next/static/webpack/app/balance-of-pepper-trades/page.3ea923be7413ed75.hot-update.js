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

/***/ "(app-client)/./components/Charts/AveragePepperPrices.tsx":
/*!***************************************************!*\
  !*** ./components/Charts/AveragePepperPrices.tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apexcharts */ \"(app-client)/./node_modules/react-apexcharts/dist/react-apexcharts.min.js\");\n/* harmony import */ var _components_UI_ChartArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/UI/ChartArea */ \"(app-client)/./components/UI/ChartArea.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst PepperPrices = (param)=>{\n    let { allTrades } = param;\n    _s();\n    const calculateAveragePrices = (trades)=>{\n        const monthlyPrices = [\n            0,\n            0,\n            0,\n            0,\n            0,\n            0\n        ];\n        const monthlyCounts = [\n            0,\n            0,\n            0,\n            0,\n            0,\n            0\n        ];\n        trades.forEach((trade)=>{\n            const month = new Date(trade.date).getMonth();\n            if (month >= 5 && month <= 10) {\n                monthlyPrices[month - 5] += trade.price * trade.weight;\n                monthlyCounts[month - 5]++;\n            }\n        });\n        const averagePrices = monthlyPrices.map((price, index)=>{\n            const count = monthlyCounts[index];\n            return count > 0 ? price / count : 0;\n        });\n        return averagePrices;\n    };\n    const calculateAverageSeasonPrice = (trades)=>{\n        let totalPrice = 0;\n        let totalCount = 0;\n        trades.forEach((trade)=>{\n            totalPrice += trade.price * trade.weight;\n            totalCount++;\n            console.log(totalCount);\n        });\n        return totalCount > 0 ? totalPrice / totalCount : 0;\n    };\n    const averagePrices = calculateAveragePrices(allTrades);\n    const averageSeasonPrice = calculateAverageSeasonPrice(allTrades);\n    console.log(averageSeasonPrice);\n    const [chartData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        series: [\n            {\n                data: averagePrices\n            }\n        ],\n        options: {\n            chart: {\n                type: \"line\"\n            },\n            xaxis: {\n                categories: [\n                    \"Czerwiec\",\n                    \"Lipiec\",\n                    \"Sierpień\",\n                    \"Wrzesień\",\n                    \"Październik\",\n                    \"Listopad\"\n                ]\n            },\n            yaxis: {\n                title: {\n                    text: \"Średnia cena (zł)\"\n                }\n            },\n            stroke: {\n                curve: \"smooth\"\n            },\n            tooltip: {\n                y: {\n                    formatter: (value)=>value.toFixed(2) + \" zł\"\n                }\n            }\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_ChartArea__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        className: \"w-full h-[420px]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: \"chart\",\n            className: \"h-full flex flex-col justify-start items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"font-semibold text-center\",\n                    children: \"Kształtowanie się cen papryki na przestrzeni miesięcy sezonu\"\n                }, void 0, false, {\n                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                    lineNumber: 95,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-5\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_apexcharts__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        options: chartData.options,\n                        series: chartData.series,\n                        type: \"line\",\n                        width: 500,\n                        height: 350\n                    }, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 6\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                    lineNumber: 96,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n            lineNumber: 94,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n        lineNumber: 93,\n        columnNumber: 3\n    }, undefined);\n};\n_s(PepperPrices, \"YtHPljcVF+ghTX9yCztR8gZ5dvM=\");\n_c = PepperPrices;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PepperPrices);\nvar _c;\n$RefreshReg$(_c, \"PepperPrices\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9DaGFydHMvQXZlcmFnZVBlcHBlclByaWNlcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBdUM7QUFDTTtBQUNHO0FBd0JoRCxNQUFNSSxlQUFnQztRQUFDLEVBQUVDLFNBQVMsRUFBRTs7SUFDbkQsTUFBTUMseUJBQXlCLENBQUNDO1FBQy9CLE1BQU1DLGdCQUEwQjtZQUFDO1lBQUc7WUFBRztZQUFHO1lBQUc7WUFBRztTQUFFO1FBQ2xELE1BQU1DLGdCQUEwQjtZQUFDO1lBQUc7WUFBRztZQUFHO1lBQUc7WUFBRztTQUFFO1FBRWxERixPQUFPRyxRQUFRQyxDQUFBQTtZQUNkLE1BQU1DLFFBQVEsSUFBSUMsS0FBS0YsTUFBTUcsTUFBTUM7WUFFbkMsSUFBSUgsU0FBUyxLQUFLQSxTQUFTLElBQUk7Z0JBQzlCSixhQUFhLENBQUNJLFFBQVEsRUFBRSxJQUFJRCxNQUFNSyxRQUFRTCxNQUFNTTtnQkFDaERSLGFBQWEsQ0FBQ0csUUFBUSxFQUFFO1lBQ3pCO1FBQ0Q7UUFFQSxNQUFNTSxnQkFBZ0JWLGNBQWNXLElBQUksQ0FBQ0gsT0FBT0k7WUFDL0MsTUFBTUMsUUFBUVosYUFBYSxDQUFDVyxNQUFNO1lBQ2xDLE9BQU9DLFFBQVEsSUFBSUwsUUFBUUssUUFBUTtRQUNwQztRQUVBLE9BQU9IO0lBQ1I7SUFFQSxNQUFNSSw4QkFBOEIsQ0FBQ2Y7UUFDcEMsSUFBSWdCLGFBQWE7UUFDakIsSUFBSUMsYUFBYTtRQUVqQmpCLE9BQU9HLFFBQVFDLENBQUFBO1lBQ2RZLGNBQWNaLE1BQU1LLFFBQVFMLE1BQU1NO1lBQ2xDTztZQUNTQyxRQUFRQyxJQUFJRjtRQUN0QjtRQUVBLE9BQU9BLGFBQWEsSUFBSUQsYUFBYUMsYUFBYTtJQUNuRDtJQUVBLE1BQU1OLGdCQUFnQlosdUJBQXVCRDtJQUM3QyxNQUFNc0IscUJBQXFCTCw0QkFBNEJqQjtJQUV2RG9CLFFBQVFDLElBQUlDO0lBRVosTUFBTSxDQUFDQyxVQUFVLEdBQUczQiwrQ0FBUUEsQ0FBb0U7UUFDL0Y0QixRQUFRO1lBQUM7Z0JBQUVDLE1BQU1aO1lBQWM7U0FBRTtRQUNqQ2EsU0FBUztZQUNSQyxPQUFPO2dCQUNOQyxNQUFNO1lBQ1A7WUFDQUMsT0FBTztnQkFDTkMsWUFBWTtvQkFBQztvQkFBWTtvQkFBVTtvQkFBWTtvQkFBWTtvQkFBZTtpQkFBVztZQUN0RjtZQUNBQyxPQUFPO2dCQUNOQyxPQUFPO29CQUNOQyxNQUFNO2dCQUNQO1lBQ0Q7WUFDQUMsUUFBUTtnQkFDUEMsT0FBTztZQUNSO1lBQ0FDLFNBQVM7Z0JBQ1JDLEdBQUc7b0JBQ0ZDLFdBQVdDLENBQUFBLFFBQVNBLE1BQU1DLFFBQVEsS0FBSztnQkFDeEM7WUFDRDtRQUNEO0lBQ0Q7SUFFQSxxQkFDQyw4REFBQzFDLGdFQUFTQTtRQUFDMkMsV0FBVTtrQkFDcEIsNEVBQUNDO1lBQUlDLElBQUc7WUFBUUYsV0FBVTs7OEJBQ3pCLDhEQUFDRztvQkFBRUgsV0FBVTs4QkFBNEI7Ozs7Ozs4QkFDekMsOERBQUNDO29CQUFJRCxXQUFVOzhCQUNkLDRFQUFDNUMsd0RBQWNBO3dCQUFDNkIsU0FBU0gsVUFBVUc7d0JBQVNGLFFBQVFELFVBQVVDO3dCQUFRSSxNQUFLO3dCQUFPaUIsT0FBTzt3QkFBS0MsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUszRztHQTNFTS9DO0tBQUFBO0FBNkVOLCtEQUFlQSxZQUFZQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2hhcnRzL0F2ZXJhZ2VQZXBwZXJQcmljZXMudHN4PzQ1ODgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RBcGV4Q2hhcnQgZnJvbSAncmVhY3QtYXBleGNoYXJ0cydcbmltcG9ydCBDaGFydEFyZWEgZnJvbSAnQGNvbXBvbmVudHMvVUkvQ2hhcnRBcmVhJ1xuXG5pbnRlcmZhY2UgVHJhZGVPZlBlcHBlciB7XG5cdF9pZDogc3RyaW5nXG5cdGNyZWF0b3I6IHtcblx0XHRfaWQ6IHN0cmluZ1xuXHRcdGVtYWlsOiBzdHJpbmdcblx0XHR1c2VybmFtZTogc3RyaW5nXG5cdFx0aW1hZ2U6IHN0cmluZ1xuXHR9XG5cdHBvaW50T2ZTYWxlSWQ6IHN0cmluZ1xuXHRkYXRlOiBzdHJpbmdcblx0Y2xhczogbnVtYmVyXG5cdGNvbG9yOiBudW1iZXJcblx0cHJpY2U6IG51bWJlclxuXHR3ZWlnaHQ6IG51bWJlclxuXHR2YXRSYXRlOiBudW1iZXJcblx0dG90YWxTdW06IG51bWJlclxufVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuXHRhbGxUcmFkZXM6IFRyYWRlT2ZQZXBwZXJbXVxufVxuXG5jb25zdCBQZXBwZXJQcmljZXM6IFJlYWN0LkZDPFByb3BzPiA9ICh7IGFsbFRyYWRlcyB9KSA9PiB7XG5cdGNvbnN0IGNhbGN1bGF0ZUF2ZXJhZ2VQcmljZXMgPSAodHJhZGVzOiBUcmFkZU9mUGVwcGVyW10pID0+IHtcblx0XHRjb25zdCBtb250aGx5UHJpY2VzOiBudW1iZXJbXSA9IFswLCAwLCAwLCAwLCAwLCAwXVxuXHRcdGNvbnN0IG1vbnRobHlDb3VudHM6IG51bWJlcltdID0gWzAsIDAsIDAsIDAsIDAsIDBdXG5cblx0XHR0cmFkZXMuZm9yRWFjaCh0cmFkZSA9PiB7XG5cdFx0XHRjb25zdCBtb250aCA9IG5ldyBEYXRlKHRyYWRlLmRhdGUpLmdldE1vbnRoKClcblxuXHRcdFx0aWYgKG1vbnRoID49IDUgJiYgbW9udGggPD0gMTApIHtcblx0XHRcdFx0bW9udGhseVByaWNlc1ttb250aCAtIDVdICs9IHRyYWRlLnByaWNlICogdHJhZGUud2VpZ2h0XG5cdFx0XHRcdG1vbnRobHlDb3VudHNbbW9udGggLSA1XSArK1xuXHRcdFx0fVxuXHRcdH0pXG5cblx0XHRjb25zdCBhdmVyYWdlUHJpY2VzID0gbW9udGhseVByaWNlcy5tYXAoKHByaWNlLCBpbmRleCkgPT4ge1xuXHRcdFx0Y29uc3QgY291bnQgPSBtb250aGx5Q291bnRzW2luZGV4XVxuXHRcdFx0cmV0dXJuIGNvdW50ID4gMCA/IHByaWNlIC8gY291bnQgOiAwXG5cdFx0fSlcblxuXHRcdHJldHVybiBhdmVyYWdlUHJpY2VzXG5cdH1cblxuXHRjb25zdCBjYWxjdWxhdGVBdmVyYWdlU2Vhc29uUHJpY2UgPSAodHJhZGVzOiBUcmFkZU9mUGVwcGVyW10pOiBudW1iZXIgPT4ge1xuXHRcdGxldCB0b3RhbFByaWNlID0gMFxuXHRcdGxldCB0b3RhbENvdW50ID0gMFxuXG5cdFx0dHJhZGVzLmZvckVhY2godHJhZGUgPT4ge1xuXHRcdFx0dG90YWxQcmljZSArPSB0cmFkZS5wcmljZSAqIHRyYWRlLndlaWdodFxuXHRcdFx0dG90YWxDb3VudCsrXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0b3RhbENvdW50KVxuXHRcdH0pXG5cblx0XHRyZXR1cm4gdG90YWxDb3VudCA+IDAgPyB0b3RhbFByaWNlIC8gdG90YWxDb3VudCA6IDBcblx0fVxuXG5cdGNvbnN0IGF2ZXJhZ2VQcmljZXMgPSBjYWxjdWxhdGVBdmVyYWdlUHJpY2VzKGFsbFRyYWRlcylcblx0Y29uc3QgYXZlcmFnZVNlYXNvblByaWNlID0gY2FsY3VsYXRlQXZlcmFnZVNlYXNvblByaWNlKGFsbFRyYWRlcylcblxuXHRjb25zb2xlLmxvZyhhdmVyYWdlU2Vhc29uUHJpY2UpXG5cblx0Y29uc3QgW2NoYXJ0RGF0YV0gPSB1c2VTdGF0ZTx7IHNlcmllczogeyBkYXRhOiBudW1iZXJbXSB9W107IG9wdGlvbnM6IEFwZXhDaGFydHMuQXBleE9wdGlvbnMgfT4oe1xuXHRcdHNlcmllczogW3sgZGF0YTogYXZlcmFnZVByaWNlcyB9XSxcblx0XHRvcHRpb25zOiB7XG5cdFx0XHRjaGFydDoge1xuXHRcdFx0XHR0eXBlOiAnbGluZScsXG5cdFx0XHR9LFxuXHRcdFx0eGF4aXM6IHtcblx0XHRcdFx0Y2F0ZWdvcmllczogWydDemVyd2llYycsICdMaXBpZWMnLCAnU2llcnBpZcWEJywgJ1dyemVzaWXFhCcsICdQYcW6ZHppZXJuaWsnLCAnTGlzdG9wYWQnXSxcblx0XHRcdH0sXG5cdFx0XHR5YXhpczoge1xuXHRcdFx0XHR0aXRsZToge1xuXHRcdFx0XHRcdHRleHQ6ICfFmnJlZG5pYSBjZW5hICh6xYIpJyxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHRzdHJva2U6IHtcblx0XHRcdFx0Y3VydmU6ICdzbW9vdGgnLFxuXHRcdFx0fSxcblx0XHRcdHRvb2x0aXA6IHtcblx0XHRcdFx0eToge1xuXHRcdFx0XHRcdGZvcm1hdHRlcjogdmFsdWUgPT4gdmFsdWUudG9GaXhlZCgyKSArICcgesWCJyxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSxcblx0fSlcblxuXHRyZXR1cm4gKFxuXHRcdDxDaGFydEFyZWEgY2xhc3NOYW1lPSd3LWZ1bGwgaC1bNDIwcHhdJz5cblx0XHRcdDxkaXYgaWQ9J2NoYXJ0JyBjbGFzc05hbWU9J2gtZnVsbCBmbGV4IGZsZXgtY29sIGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyJz5cblx0XHRcdFx0PHAgY2xhc3NOYW1lPSdmb250LXNlbWlib2xkIHRleHQtY2VudGVyJz5Lc3p0YcWCdG93YW5pZSBzacSZIGNlbiBwYXByeWtpIG5hIHByemVzdHJ6ZW5pIG1pZXNpxJljeSBzZXpvbnU8L3A+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdtdC01Jz5cblx0XHRcdFx0XHQ8UmVhY3RBcGV4Q2hhcnQgb3B0aW9ucz17Y2hhcnREYXRhLm9wdGlvbnN9IHNlcmllcz17Y2hhcnREYXRhLnNlcmllc30gdHlwZT0nbGluZScgd2lkdGg9ezUwMH0gaGVpZ2h0PXszNTB9IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9DaGFydEFyZWE+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGVwcGVyUHJpY2VzXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlJlYWN0QXBleENoYXJ0IiwiQ2hhcnRBcmVhIiwiUGVwcGVyUHJpY2VzIiwiYWxsVHJhZGVzIiwiY2FsY3VsYXRlQXZlcmFnZVByaWNlcyIsInRyYWRlcyIsIm1vbnRobHlQcmljZXMiLCJtb250aGx5Q291bnRzIiwiZm9yRWFjaCIsInRyYWRlIiwibW9udGgiLCJEYXRlIiwiZGF0ZSIsImdldE1vbnRoIiwicHJpY2UiLCJ3ZWlnaHQiLCJhdmVyYWdlUHJpY2VzIiwibWFwIiwiaW5kZXgiLCJjb3VudCIsImNhbGN1bGF0ZUF2ZXJhZ2VTZWFzb25QcmljZSIsInRvdGFsUHJpY2UiLCJ0b3RhbENvdW50IiwiY29uc29sZSIsImxvZyIsImF2ZXJhZ2VTZWFzb25QcmljZSIsImNoYXJ0RGF0YSIsInNlcmllcyIsImRhdGEiLCJvcHRpb25zIiwiY2hhcnQiLCJ0eXBlIiwieGF4aXMiLCJjYXRlZ29yaWVzIiwieWF4aXMiLCJ0aXRsZSIsInRleHQiLCJzdHJva2UiLCJjdXJ2ZSIsInRvb2x0aXAiLCJ5IiwiZm9ybWF0dGVyIiwidmFsdWUiLCJ0b0ZpeGVkIiwiY2xhc3NOYW1lIiwiZGl2IiwiaWQiLCJwIiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./components/Charts/AveragePepperPrices.tsx\n"));

/***/ })

});