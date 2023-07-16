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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apexcharts */ \"(app-client)/./node_modules/react-apexcharts/dist/react-apexcharts.min.js\");\n/* harmony import */ var _components_UI_ChartArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/UI/ChartArea */ \"(app-client)/./components/UI/ChartArea.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst PepperPrices = (param)=>{\n    let { allTrades } = param;\n    _s();\n    const calculateAveragePrices = (trades)=>{\n        const monthlyPrices = [\n            0,\n            0,\n            0,\n            0,\n            0,\n            0\n        ];\n        const monthlyCounts = [\n            0,\n            0,\n            0,\n            0,\n            0,\n            0\n        ];\n        trades.forEach((trade)=>{\n            const month = new Date(trade.date).getMonth();\n            if (month >= 5 && month <= 10) {\n                monthlyPrices[month - 5] += trade.price * trade.weight;\n                monthlyCounts[month - 5]++;\n            }\n        });\n        const averagePrices = monthlyPrices.map((price, index)=>{\n            const count = monthlyCounts[index];\n            return count > 0 ? price / count : 0;\n        });\n        return averagePrices;\n    };\n    const calculateAverageSeasonPrice = (trades)=>{\n        let totalPrice = 0;\n        let totalCount = 0;\n        trades.forEach((trade)=>{\n            totalPrice += trade.price * trade.weight;\n            totalCount++;\n            console.log(trade.price);\n        });\n        return totalCount > 0 ? totalPrice / totalCount : 0;\n    };\n    const averagePrices = calculateAveragePrices(allTrades);\n    const averageSeasonPrice = calculateAverageSeasonPrice(allTrades);\n    console.log(averageSeasonPrice);\n    const [chartData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        series: [\n            {\n                data: averagePrices\n            }\n        ],\n        options: {\n            chart: {\n                type: \"line\"\n            },\n            xaxis: {\n                categories: [\n                    \"Czerwiec\",\n                    \"Lipiec\",\n                    \"Sierpień\",\n                    \"Wrzesień\",\n                    \"Październik\",\n                    \"Listopad\"\n                ]\n            },\n            yaxis: {\n                title: {\n                    text: \"Średnia cena (zł)\"\n                }\n            },\n            stroke: {\n                curve: \"smooth\"\n            },\n            tooltip: {\n                y: {\n                    formatter: (value)=>value.toFixed(2) + \" zł\"\n                }\n            }\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_ChartArea__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        className: \"w-full h-[420px]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: \"chart\",\n            className: \"h-full flex flex-col justify-start items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"font-semibold text-center\",\n                    children: \"Kształtowanie się cen papryki na przestrzeni miesięcy sezonu\"\n                }, void 0, false, {\n                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                    lineNumber: 95,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-5\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_apexcharts__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        options: chartData.options,\n                        series: chartData.series,\n                        type: \"line\",\n                        width: 500,\n                        height: 350\n                    }, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 6\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                    lineNumber: 96,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n            lineNumber: 94,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n        lineNumber: 93,\n        columnNumber: 3\n    }, undefined);\n};\n_s(PepperPrices, \"YtHPljcVF+ghTX9yCztR8gZ5dvM=\");\n_c = PepperPrices;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PepperPrices);\nvar _c;\n$RefreshReg$(_c, \"PepperPrices\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9DaGFydHMvQXZlcmFnZVBlcHBlclByaWNlcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBdUM7QUFDTTtBQUNHO0FBd0JoRCxNQUFNSSxlQUFnQztRQUFDLEVBQUVDLFNBQVMsRUFBRTs7SUFDbkQsTUFBTUMseUJBQXlCLENBQUNDO1FBQy9CLE1BQU1DLGdCQUEwQjtZQUFDO1lBQUc7WUFBRztZQUFHO1lBQUc7WUFBRztTQUFFO1FBQ2xELE1BQU1DLGdCQUEwQjtZQUFDO1lBQUc7WUFBRztZQUFHO1lBQUc7WUFBRztTQUFFO1FBRWxERixPQUFPRyxRQUFRQyxDQUFBQTtZQUNkLE1BQU1DLFFBQVEsSUFBSUMsS0FBS0YsTUFBTUcsTUFBTUM7WUFFbkMsSUFBSUgsU0FBUyxLQUFLQSxTQUFTLElBQUk7Z0JBQzlCSixhQUFhLENBQUNJLFFBQVEsRUFBRSxJQUFJRCxNQUFNSyxRQUFRTCxNQUFNTTtnQkFDaERSLGFBQWEsQ0FBQ0csUUFBUSxFQUFFO1lBQ3pCO1FBQ0Q7UUFFQSxNQUFNTSxnQkFBZ0JWLGNBQWNXLElBQUksQ0FBQ0gsT0FBT0k7WUFDL0MsTUFBTUMsUUFBUVosYUFBYSxDQUFDVyxNQUFNO1lBQ2xDLE9BQU9DLFFBQVEsSUFBSUwsUUFBUUssUUFBUTtRQUNwQztRQUVBLE9BQU9IO0lBQ1I7SUFFQSxNQUFNSSw4QkFBOEIsQ0FBQ2Y7UUFDcEMsSUFBSWdCLGFBQWE7UUFDakIsSUFBSUMsYUFBYTtRQUVqQmpCLE9BQU9HLFFBQVFDLENBQUFBO1lBQ2RZLGNBQWNaLE1BQU1LLFFBQVFMLE1BQU1NO1lBQ2xDTztZQUNTQyxRQUFRQyxJQUFJZixNQUFNSztRQUM1QjtRQUVBLE9BQU9RLGFBQWEsSUFBSUQsYUFBYUMsYUFBYTtJQUNuRDtJQUVBLE1BQU1OLGdCQUFnQlosdUJBQXVCRDtJQUM3QyxNQUFNc0IscUJBQXFCTCw0QkFBNEJqQjtJQUV2RG9CLFFBQVFDLElBQUlDO0lBRVosTUFBTSxDQUFDQyxVQUFVLEdBQUczQiwrQ0FBUUEsQ0FBb0U7UUFDL0Y0QixRQUFRO1lBQUM7Z0JBQUVDLE1BQU1aO1lBQWM7U0FBRTtRQUNqQ2EsU0FBUztZQUNSQyxPQUFPO2dCQUNOQyxNQUFNO1lBQ1A7WUFDQUMsT0FBTztnQkFDTkMsWUFBWTtvQkFBQztvQkFBWTtvQkFBVTtvQkFBWTtvQkFBWTtvQkFBZTtpQkFBVztZQUN0RjtZQUNBQyxPQUFPO2dCQUNOQyxPQUFPO29CQUNOQyxNQUFNO2dCQUNQO1lBQ0Q7WUFDQUMsUUFBUTtnQkFDUEMsT0FBTztZQUNSO1lBQ0FDLFNBQVM7Z0JBQ1JDLEdBQUc7b0JBQ0ZDLFdBQVdDLENBQUFBLFFBQVNBLE1BQU1DLFFBQVEsS0FBSztnQkFDeEM7WUFDRDtRQUNEO0lBQ0Q7SUFFQSxxQkFDQyw4REFBQzFDLGdFQUFTQTtRQUFDMkMsV0FBVTtrQkFDcEIsNEVBQUNDO1lBQUlDLElBQUc7WUFBUUYsV0FBVTs7OEJBQ3pCLDhEQUFDRztvQkFBRUgsV0FBVTs4QkFBNEI7Ozs7Ozs4QkFDekMsOERBQUNDO29CQUFJRCxXQUFVOzhCQUNkLDRFQUFDNUMsd0RBQWNBO3dCQUFDNkIsU0FBU0gsVUFBVUc7d0JBQVNGLFFBQVFELFVBQVVDO3dCQUFRSSxNQUFLO3dCQUFPaUIsT0FBTzt3QkFBS0MsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUszRztHQTNFTS9DO0tBQUFBO0FBNkVOLCtEQUFlQSxZQUFZQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2hhcnRzL0F2ZXJhZ2VQZXBwZXJQcmljZXMudHN4PzQ1ODgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RBcGV4Q2hhcnQgZnJvbSAncmVhY3QtYXBleGNoYXJ0cydcbmltcG9ydCBDaGFydEFyZWEgZnJvbSAnQGNvbXBvbmVudHMvVUkvQ2hhcnRBcmVhJ1xuXG5pbnRlcmZhY2UgVHJhZGVPZlBlcHBlciB7XG5cdF9pZDogc3RyaW5nXG5cdGNyZWF0b3I6IHtcblx0XHRfaWQ6IHN0cmluZ1xuXHRcdGVtYWlsOiBzdHJpbmdcblx0XHR1c2VybmFtZTogc3RyaW5nXG5cdFx0aW1hZ2U6IHN0cmluZ1xuXHR9XG5cdHBvaW50T2ZTYWxlSWQ6IHN0cmluZ1xuXHRkYXRlOiBzdHJpbmdcblx0Y2xhczogbnVtYmVyXG5cdGNvbG9yOiBudW1iZXJcblx0cHJpY2U6IG51bWJlclxuXHR3ZWlnaHQ6IG51bWJlclxuXHR2YXRSYXRlOiBudW1iZXJcblx0dG90YWxTdW06IG51bWJlclxufVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuXHRhbGxUcmFkZXM6IFRyYWRlT2ZQZXBwZXJbXVxufVxuXG5jb25zdCBQZXBwZXJQcmljZXM6IFJlYWN0LkZDPFByb3BzPiA9ICh7IGFsbFRyYWRlcyB9KSA9PiB7XG5cdGNvbnN0IGNhbGN1bGF0ZUF2ZXJhZ2VQcmljZXMgPSAodHJhZGVzOiBUcmFkZU9mUGVwcGVyW10pID0+IHtcblx0XHRjb25zdCBtb250aGx5UHJpY2VzOiBudW1iZXJbXSA9IFswLCAwLCAwLCAwLCAwLCAwXVxuXHRcdGNvbnN0IG1vbnRobHlDb3VudHM6IG51bWJlcltdID0gWzAsIDAsIDAsIDAsIDAsIDBdXG5cblx0XHR0cmFkZXMuZm9yRWFjaCh0cmFkZSA9PiB7XG5cdFx0XHRjb25zdCBtb250aCA9IG5ldyBEYXRlKHRyYWRlLmRhdGUpLmdldE1vbnRoKClcblxuXHRcdFx0aWYgKG1vbnRoID49IDUgJiYgbW9udGggPD0gMTApIHtcblx0XHRcdFx0bW9udGhseVByaWNlc1ttb250aCAtIDVdICs9IHRyYWRlLnByaWNlICogdHJhZGUud2VpZ2h0XG5cdFx0XHRcdG1vbnRobHlDb3VudHNbbW9udGggLSA1XSArK1xuXHRcdFx0fVxuXHRcdH0pXG5cblx0XHRjb25zdCBhdmVyYWdlUHJpY2VzID0gbW9udGhseVByaWNlcy5tYXAoKHByaWNlLCBpbmRleCkgPT4ge1xuXHRcdFx0Y29uc3QgY291bnQgPSBtb250aGx5Q291bnRzW2luZGV4XVxuXHRcdFx0cmV0dXJuIGNvdW50ID4gMCA/IHByaWNlIC8gY291bnQgOiAwXG5cdFx0fSlcblxuXHRcdHJldHVybiBhdmVyYWdlUHJpY2VzXG5cdH1cblxuXHRjb25zdCBjYWxjdWxhdGVBdmVyYWdlU2Vhc29uUHJpY2UgPSAodHJhZGVzOiBUcmFkZU9mUGVwcGVyW10pOiBudW1iZXIgPT4ge1xuXHRcdGxldCB0b3RhbFByaWNlID0gMFxuXHRcdGxldCB0b3RhbENvdW50ID0gMFxuXG5cdFx0dHJhZGVzLmZvckVhY2godHJhZGUgPT4ge1xuXHRcdFx0dG90YWxQcmljZSArPSB0cmFkZS5wcmljZSAqIHRyYWRlLndlaWdodFxuXHRcdFx0dG90YWxDb3VudCsrXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0cmFkZS5wcmljZSlcblx0XHR9KVxuXG5cdFx0cmV0dXJuIHRvdGFsQ291bnQgPiAwID8gdG90YWxQcmljZSAvIHRvdGFsQ291bnQgOiAwXG5cdH1cblxuXHRjb25zdCBhdmVyYWdlUHJpY2VzID0gY2FsY3VsYXRlQXZlcmFnZVByaWNlcyhhbGxUcmFkZXMpXG5cdGNvbnN0IGF2ZXJhZ2VTZWFzb25QcmljZSA9IGNhbGN1bGF0ZUF2ZXJhZ2VTZWFzb25QcmljZShhbGxUcmFkZXMpXG5cblx0Y29uc29sZS5sb2coYXZlcmFnZVNlYXNvblByaWNlKVxuXG5cdGNvbnN0IFtjaGFydERhdGFdID0gdXNlU3RhdGU8eyBzZXJpZXM6IHsgZGF0YTogbnVtYmVyW10gfVtdOyBvcHRpb25zOiBBcGV4Q2hhcnRzLkFwZXhPcHRpb25zIH0+KHtcblx0XHRzZXJpZXM6IFt7IGRhdGE6IGF2ZXJhZ2VQcmljZXMgfV0sXG5cdFx0b3B0aW9uczoge1xuXHRcdFx0Y2hhcnQ6IHtcblx0XHRcdFx0dHlwZTogJ2xpbmUnLFxuXHRcdFx0fSxcblx0XHRcdHhheGlzOiB7XG5cdFx0XHRcdGNhdGVnb3JpZXM6IFsnQ3plcndpZWMnLCAnTGlwaWVjJywgJ1NpZXJwaWXFhCcsICdXcnplc2llxYQnLCAnUGHFumR6aWVybmlrJywgJ0xpc3RvcGFkJ10sXG5cdFx0XHR9LFxuXHRcdFx0eWF4aXM6IHtcblx0XHRcdFx0dGl0bGU6IHtcblx0XHRcdFx0XHR0ZXh0OiAnxZpyZWRuaWEgY2VuYSAoesWCKScsXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0c3Ryb2tlOiB7XG5cdFx0XHRcdGN1cnZlOiAnc21vb3RoJyxcblx0XHRcdH0sXG5cdFx0XHR0b29sdGlwOiB7XG5cdFx0XHRcdHk6IHtcblx0XHRcdFx0XHRmb3JtYXR0ZXI6IHZhbHVlID0+IHZhbHVlLnRvRml4ZWQoMikgKyAnIHrFgicsXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH0sXG5cdH0pXG5cblx0cmV0dXJuIChcblx0XHQ8Q2hhcnRBcmVhIGNsYXNzTmFtZT0ndy1mdWxsIGgtWzQyMHB4XSc+XG5cdFx0XHQ8ZGl2IGlkPSdjaGFydCcgY2xhc3NOYW1lPSdoLWZ1bGwgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlcic+XG5cdFx0XHRcdDxwIGNsYXNzTmFtZT0nZm9udC1zZW1pYm9sZCB0ZXh0LWNlbnRlcic+S3N6dGHFgnRvd2FuaWUgc2nEmSBjZW4gcGFwcnlraSBuYSBwcnplc3RyemVuaSBtaWVzacSZY3kgc2V6b251PC9wPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbXQtNSc+XG5cdFx0XHRcdFx0PFJlYWN0QXBleENoYXJ0IG9wdGlvbnM9e2NoYXJ0RGF0YS5vcHRpb25zfSBzZXJpZXM9e2NoYXJ0RGF0YS5zZXJpZXN9IHR5cGU9J2xpbmUnIHdpZHRoPXs1MDB9IGhlaWdodD17MzUwfSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvQ2hhcnRBcmVhPlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBlcHBlclByaWNlc1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJSZWFjdEFwZXhDaGFydCIsIkNoYXJ0QXJlYSIsIlBlcHBlclByaWNlcyIsImFsbFRyYWRlcyIsImNhbGN1bGF0ZUF2ZXJhZ2VQcmljZXMiLCJ0cmFkZXMiLCJtb250aGx5UHJpY2VzIiwibW9udGhseUNvdW50cyIsImZvckVhY2giLCJ0cmFkZSIsIm1vbnRoIiwiRGF0ZSIsImRhdGUiLCJnZXRNb250aCIsInByaWNlIiwid2VpZ2h0IiwiYXZlcmFnZVByaWNlcyIsIm1hcCIsImluZGV4IiwiY291bnQiLCJjYWxjdWxhdGVBdmVyYWdlU2Vhc29uUHJpY2UiLCJ0b3RhbFByaWNlIiwidG90YWxDb3VudCIsImNvbnNvbGUiLCJsb2ciLCJhdmVyYWdlU2Vhc29uUHJpY2UiLCJjaGFydERhdGEiLCJzZXJpZXMiLCJkYXRhIiwib3B0aW9ucyIsImNoYXJ0IiwidHlwZSIsInhheGlzIiwiY2F0ZWdvcmllcyIsInlheGlzIiwidGl0bGUiLCJ0ZXh0Iiwic3Ryb2tlIiwiY3VydmUiLCJ0b29sdGlwIiwieSIsImZvcm1hdHRlciIsInZhbHVlIiwidG9GaXhlZCIsImNsYXNzTmFtZSIsImRpdiIsImlkIiwicCIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/Charts/AveragePepperPrices.tsx\n"));

/***/ })

});