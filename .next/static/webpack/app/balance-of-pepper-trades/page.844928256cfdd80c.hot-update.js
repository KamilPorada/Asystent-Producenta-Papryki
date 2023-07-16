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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apexcharts */ \"(app-client)/./node_modules/react-apexcharts/dist/react-apexcharts.min.js\");\n/* harmony import */ var _components_UI_ChartArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/UI/ChartArea */ \"(app-client)/./components/UI/ChartArea.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst PepperPrices = (param)=>{\n    let { allTrades } = param;\n    _s();\n    const calculateAveragePrices = (trades)=>{\n        const monthlyPrices = [\n            0,\n            0,\n            0,\n            0,\n            0,\n            0\n        ];\n        const monthlyCounts = [\n            0,\n            0,\n            0,\n            0,\n            0,\n            0\n        ];\n        trades.forEach((trade)=>{\n            const month = new Date(trade.date).getMonth();\n            if (month >= 5 && month <= 10) {\n                monthlyPrices[month - 5] += trade.price * trade.weight;\n                monthlyCounts[month - 5]++;\n            }\n        });\n        const averagePrices = monthlyPrices.map((price, index)=>{\n            const count = monthlyCounts[index];\n            return count > 0 ? price / count : 0;\n        });\n        return averagePrices;\n    };\n    const calculateAverageSeasonPrice = (trades)=>{\n        let totalPrice = 0;\n        let totalWeight = 0;\n        trades.forEach((trade)=>{\n            totalPrice += trade.price * trade.weight;\n            totalWeight += trade.weight;\n        });\n        return totalWeight > 0 ? totalPrice / totalWeight : 0;\n    };\n    const averagePrices = calculateAveragePrices(allTrades);\n    const averageSeasonPrice = calculateAverageSeasonPrice(allTrades);\n    console.log(averageSeasonPrice);\n    const [chartData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        series: [\n            {\n                data: averagePrices\n            }\n        ],\n        options: {\n            chart: {\n                type: \"line\"\n            },\n            xaxis: {\n                categories: [\n                    \"Czerwiec\",\n                    \"Lipiec\",\n                    \"Sierpień\",\n                    \"Wrzesień\",\n                    \"Październik\",\n                    \"Listopad\"\n                ]\n            },\n            yaxis: {\n                title: {\n                    text: \"Średnia cena (zł)\"\n                }\n            },\n            stroke: {\n                curve: \"smooth\"\n            },\n            tooltip: {\n                y: {\n                    formatter: (value)=>value.toFixed(2) + \" zł\"\n                }\n            }\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_ChartArea__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        className: \"w-full h-[420px]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: \"chart\",\n            className: \"h-full flex flex-col justify-start items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"font-semibold text-center\",\n                    children: \"Kształtowanie się cen papryki na przestrzeni miesięcy sezonu\"\n                }, void 0, false, {\n                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                    lineNumber: 94,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-5\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_apexcharts__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        options: chartData.options,\n                        series: chartData.series,\n                        type: \"line\",\n                        width: 500,\n                        height: 350\n                    }, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 6\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                    lineNumber: 95,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n            lineNumber: 93,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n        lineNumber: 92,\n        columnNumber: 3\n    }, undefined);\n};\n_s(PepperPrices, \"YtHPljcVF+ghTX9yCztR8gZ5dvM=\");\n_c = PepperPrices;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PepperPrices);\nvar _c;\n$RefreshReg$(_c, \"PepperPrices\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9DaGFydHMvQXZlcmFnZVBlcHBlclByaWNlcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBdUM7QUFDTTtBQUNHO0FBd0JoRCxNQUFNSSxlQUFnQztRQUFDLEVBQUVDLFNBQVMsRUFBRTs7SUFDbkQsTUFBTUMseUJBQXlCLENBQUNDO1FBQy9CLE1BQU1DLGdCQUEwQjtZQUFDO1lBQUc7WUFBRztZQUFHO1lBQUc7WUFBRztTQUFFO1FBQ2xELE1BQU1DLGdCQUEwQjtZQUFDO1lBQUc7WUFBRztZQUFHO1lBQUc7WUFBRztTQUFFO1FBRWxERixPQUFPRyxRQUFRQyxDQUFBQTtZQUNkLE1BQU1DLFFBQVEsSUFBSUMsS0FBS0YsTUFBTUcsTUFBTUM7WUFFbkMsSUFBSUgsU0FBUyxLQUFLQSxTQUFTLElBQUk7Z0JBQzlCSixhQUFhLENBQUNJLFFBQVEsRUFBRSxJQUFJRCxNQUFNSyxRQUFRTCxNQUFNTTtnQkFDaERSLGFBQWEsQ0FBQ0csUUFBUSxFQUFFO1lBQ3pCO1FBQ0Q7UUFFQSxNQUFNTSxnQkFBZ0JWLGNBQWNXLElBQUksQ0FBQ0gsT0FBT0k7WUFDL0MsTUFBTUMsUUFBUVosYUFBYSxDQUFDVyxNQUFNO1lBQ2xDLE9BQU9DLFFBQVEsSUFBSUwsUUFBUUssUUFBUTtRQUNwQztRQUVBLE9BQU9IO0lBQ1I7SUFFQSxNQUFNSSw4QkFBOEIsQ0FBQ2Y7UUFDcEMsSUFBSWdCLGFBQWE7UUFDakIsSUFBSUMsY0FBYztRQUVsQmpCLE9BQU9HLFFBQVFDLENBQUFBO1lBQ2RZLGNBQWUsTUFBT1AsUUFBU0wsTUFBTU07WUFDckNPLGVBQWViLE1BQU1NO1FBQ3RCO1FBRUEsT0FBT08sY0FBYyxJQUFJRCxhQUFhQyxjQUFjO0lBQ3JEO0lBRUEsTUFBTU4sZ0JBQWdCWix1QkFBdUJEO0lBQzdDLE1BQU1vQixxQkFBcUJILDRCQUE0QmpCO0lBRXZEcUIsUUFBUUMsSUFBSUY7SUFFWixNQUFNLENBQUNHLFVBQVUsR0FBRzNCLCtDQUFRQSxDQUFvRTtRQUMvRjRCLFFBQVE7WUFBQztnQkFBRUMsTUFBTVo7WUFBYztTQUFFO1FBQ2pDYSxTQUFTO1lBQ1JDLE9BQU87Z0JBQ05DLE1BQU07WUFDUDtZQUNBQyxPQUFPO2dCQUNOQyxZQUFZO29CQUFDO29CQUFZO29CQUFVO29CQUFZO29CQUFZO29CQUFlO2lCQUFXO1lBQ3RGO1lBQ0FDLE9BQU87Z0JBQ05DLE9BQU87b0JBQ05DLE1BQU07Z0JBQ1A7WUFDRDtZQUNBQyxRQUFRO2dCQUNQQyxPQUFPO1lBQ1I7WUFDQUMsU0FBUztnQkFDUkMsR0FBRztvQkFDRkMsV0FBV0MsQ0FBQUEsUUFBU0EsTUFBTUMsUUFBUSxLQUFLO2dCQUN4QztZQUNEO1FBQ0Q7SUFDRDtJQUVBLHFCQUNDLDhEQUFDMUMsZ0VBQVNBO1FBQUMyQyxXQUFVO2tCQUNwQiw0RUFBQ0M7WUFBSUMsSUFBRztZQUFRRixXQUFVOzs4QkFDekIsOERBQUNHO29CQUFFSCxXQUFVOzhCQUE0Qjs7Ozs7OzhCQUN6Qyw4REFBQ0M7b0JBQUlELFdBQVU7OEJBQ2QsNEVBQUM1Qyx3REFBY0E7d0JBQUM2QixTQUFTSCxVQUFVRzt3QkFBU0YsUUFBUUQsVUFBVUM7d0JBQVFJLE1BQUs7d0JBQU9pQixPQUFPO3dCQUFLQyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzNHO0dBMUVNL0M7S0FBQUE7QUE0RU4sK0RBQWVBLFlBQVlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGFydHMvQXZlcmFnZVBlcHBlclByaWNlcy50c3g/NDU4OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdEFwZXhDaGFydCBmcm9tICdyZWFjdC1hcGV4Y2hhcnRzJ1xuaW1wb3J0IENoYXJ0QXJlYSBmcm9tICdAY29tcG9uZW50cy9VSS9DaGFydEFyZWEnXG5cbmludGVyZmFjZSBUcmFkZU9mUGVwcGVyIHtcblx0X2lkOiBzdHJpbmdcblx0Y3JlYXRvcjoge1xuXHRcdF9pZDogc3RyaW5nXG5cdFx0ZW1haWw6IHN0cmluZ1xuXHRcdHVzZXJuYW1lOiBzdHJpbmdcblx0XHRpbWFnZTogc3RyaW5nXG5cdH1cblx0cG9pbnRPZlNhbGVJZDogc3RyaW5nXG5cdGRhdGU6IHN0cmluZ1xuXHRjbGFzOiBudW1iZXJcblx0Y29sb3I6IG51bWJlclxuXHRwcmljZTogbnVtYmVyXG5cdHdlaWdodDogbnVtYmVyXG5cdHZhdFJhdGU6IG51bWJlclxuXHR0b3RhbFN1bTogbnVtYmVyXG59XG5cbmludGVyZmFjZSBQcm9wcyB7XG5cdGFsbFRyYWRlczogVHJhZGVPZlBlcHBlcltdXG59XG5cbmNvbnN0IFBlcHBlclByaWNlczogUmVhY3QuRkM8UHJvcHM+ID0gKHsgYWxsVHJhZGVzIH0pID0+IHtcblx0Y29uc3QgY2FsY3VsYXRlQXZlcmFnZVByaWNlcyA9ICh0cmFkZXM6IFRyYWRlT2ZQZXBwZXJbXSkgPT4ge1xuXHRcdGNvbnN0IG1vbnRobHlQcmljZXM6IG51bWJlcltdID0gWzAsIDAsIDAsIDAsIDAsIDBdXG5cdFx0Y29uc3QgbW9udGhseUNvdW50czogbnVtYmVyW10gPSBbMCwgMCwgMCwgMCwgMCwgMF1cblxuXHRcdHRyYWRlcy5mb3JFYWNoKHRyYWRlID0+IHtcblx0XHRcdGNvbnN0IG1vbnRoID0gbmV3IERhdGUodHJhZGUuZGF0ZSkuZ2V0TW9udGgoKVxuXG5cdFx0XHRpZiAobW9udGggPj0gNSAmJiBtb250aCA8PSAxMCkge1xuXHRcdFx0XHRtb250aGx5UHJpY2VzW21vbnRoIC0gNV0gKz0gdHJhZGUucHJpY2UgKiB0cmFkZS53ZWlnaHRcblx0XHRcdFx0bW9udGhseUNvdW50c1ttb250aCAtIDVdICsrXG5cdFx0XHR9XG5cdFx0fSlcblxuXHRcdGNvbnN0IGF2ZXJhZ2VQcmljZXMgPSBtb250aGx5UHJpY2VzLm1hcCgocHJpY2UsIGluZGV4KSA9PiB7XG5cdFx0XHRjb25zdCBjb3VudCA9IG1vbnRobHlDb3VudHNbaW5kZXhdXG5cdFx0XHRyZXR1cm4gY291bnQgPiAwID8gcHJpY2UgLyBjb3VudCA6IDBcblx0XHR9KVxuXG5cdFx0cmV0dXJuIGF2ZXJhZ2VQcmljZXNcblx0fVxuXG5cdGNvbnN0IGNhbGN1bGF0ZUF2ZXJhZ2VTZWFzb25QcmljZSA9ICh0cmFkZXM6IFRyYWRlT2ZQZXBwZXJbXSk6IG51bWJlciA9PiB7XG5cdFx0bGV0IHRvdGFsUHJpY2UgPSAwXG5cdFx0bGV0IHRvdGFsV2VpZ2h0ID0gMFxuXG5cdFx0dHJhZGVzLmZvckVhY2godHJhZGUgPT4ge1xuXHRcdFx0dG90YWxQcmljZSArPSAoKHRyYWRlLnByaWNlKSAqIHRyYWRlLndlaWdodClcblx0XHRcdHRvdGFsV2VpZ2h0ICs9IHRyYWRlLndlaWdodFxuXHRcdH0pXG5cblx0XHRyZXR1cm4gdG90YWxXZWlnaHQgPiAwID8gdG90YWxQcmljZSAvIHRvdGFsV2VpZ2h0IDogMFxuXHR9XG5cblx0Y29uc3QgYXZlcmFnZVByaWNlcyA9IGNhbGN1bGF0ZUF2ZXJhZ2VQcmljZXMoYWxsVHJhZGVzKVxuXHRjb25zdCBhdmVyYWdlU2Vhc29uUHJpY2UgPSBjYWxjdWxhdGVBdmVyYWdlU2Vhc29uUHJpY2UoYWxsVHJhZGVzKVxuXG5cdGNvbnNvbGUubG9nKGF2ZXJhZ2VTZWFzb25QcmljZSlcblxuXHRjb25zdCBbY2hhcnREYXRhXSA9IHVzZVN0YXRlPHsgc2VyaWVzOiB7IGRhdGE6IG51bWJlcltdIH1bXTsgb3B0aW9uczogQXBleENoYXJ0cy5BcGV4T3B0aW9ucyB9Pih7XG5cdFx0c2VyaWVzOiBbeyBkYXRhOiBhdmVyYWdlUHJpY2VzIH1dLFxuXHRcdG9wdGlvbnM6IHtcblx0XHRcdGNoYXJ0OiB7XG5cdFx0XHRcdHR5cGU6ICdsaW5lJyxcblx0XHRcdH0sXG5cdFx0XHR4YXhpczoge1xuXHRcdFx0XHRjYXRlZ29yaWVzOiBbJ0N6ZXJ3aWVjJywgJ0xpcGllYycsICdTaWVycGllxYQnLCAnV3J6ZXNpZcWEJywgJ1Bhxbpkemllcm5paycsICdMaXN0b3BhZCddLFxuXHRcdFx0fSxcblx0XHRcdHlheGlzOiB7XG5cdFx0XHRcdHRpdGxlOiB7XG5cdFx0XHRcdFx0dGV4dDogJ8WacmVkbmlhIGNlbmEgKHrFgiknLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdHN0cm9rZToge1xuXHRcdFx0XHRjdXJ2ZTogJ3Ntb290aCcsXG5cdFx0XHR9LFxuXHRcdFx0dG9vbHRpcDoge1xuXHRcdFx0XHR5OiB7XG5cdFx0XHRcdFx0Zm9ybWF0dGVyOiB2YWx1ZSA9PiB2YWx1ZS50b0ZpeGVkKDIpICsgJyB6xYInLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9KVxuXG5cdHJldHVybiAoXG5cdFx0PENoYXJ0QXJlYSBjbGFzc05hbWU9J3ctZnVsbCBoLVs0MjBweF0nPlxuXHRcdFx0PGRpdiBpZD0nY2hhcnQnIGNsYXNzTmFtZT0naC1mdWxsIGZsZXggZmxleC1jb2wganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXInPlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9J2ZvbnQtc2VtaWJvbGQgdGV4dC1jZW50ZXInPktzenRhxYJ0b3dhbmllIHNpxJkgY2VuIHBhcHJ5a2kgbmEgcHJ6ZXN0cnplbmkgbWllc2nEmWN5IHNlem9udTwvcD5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J210LTUnPlxuXHRcdFx0XHRcdDxSZWFjdEFwZXhDaGFydCBvcHRpb25zPXtjaGFydERhdGEub3B0aW9uc30gc2VyaWVzPXtjaGFydERhdGEuc2VyaWVzfSB0eXBlPSdsaW5lJyB3aWR0aD17NTAwfSBoZWlnaHQ9ezM1MH0gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L0NoYXJ0QXJlYT5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBQZXBwZXJQcmljZXNcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiUmVhY3RBcGV4Q2hhcnQiLCJDaGFydEFyZWEiLCJQZXBwZXJQcmljZXMiLCJhbGxUcmFkZXMiLCJjYWxjdWxhdGVBdmVyYWdlUHJpY2VzIiwidHJhZGVzIiwibW9udGhseVByaWNlcyIsIm1vbnRobHlDb3VudHMiLCJmb3JFYWNoIiwidHJhZGUiLCJtb250aCIsIkRhdGUiLCJkYXRlIiwiZ2V0TW9udGgiLCJwcmljZSIsIndlaWdodCIsImF2ZXJhZ2VQcmljZXMiLCJtYXAiLCJpbmRleCIsImNvdW50IiwiY2FsY3VsYXRlQXZlcmFnZVNlYXNvblByaWNlIiwidG90YWxQcmljZSIsInRvdGFsV2VpZ2h0IiwiYXZlcmFnZVNlYXNvblByaWNlIiwiY29uc29sZSIsImxvZyIsImNoYXJ0RGF0YSIsInNlcmllcyIsImRhdGEiLCJvcHRpb25zIiwiY2hhcnQiLCJ0eXBlIiwieGF4aXMiLCJjYXRlZ29yaWVzIiwieWF4aXMiLCJ0aXRsZSIsInRleHQiLCJzdHJva2UiLCJjdXJ2ZSIsInRvb2x0aXAiLCJ5IiwiZm9ybWF0dGVyIiwidmFsdWUiLCJ0b0ZpeGVkIiwiY2xhc3NOYW1lIiwiZGl2IiwiaWQiLCJwIiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./components/Charts/AveragePepperPrices.tsx\n"));

/***/ })

});