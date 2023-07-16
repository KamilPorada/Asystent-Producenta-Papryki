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

/***/ "(app-client)/./components/Charts/TradesOfPepperByMonth.tsx":
/*!*****************************************************!*\
  !*** ./components/Charts/TradesOfPepperByMonth.tsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apexcharts */ \"(app-client)/./node_modules/react-apexcharts/dist/react-apexcharts.min.js\");\n/* harmony import */ var _components_UI_ChartArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/UI/ChartArea */ \"(app-client)/./components/UI/ChartArea.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction TradesOfPepperByMonth(param) {\n    let { allTrades } = param;\n    _s();\n    const calculateMonthlySums = (trades)=>{\n        const currentYear = new Date().getFullYear();\n        const monthlySums = [\n            0,\n            0,\n            0,\n            0,\n            0,\n            0\n        ];\n        trades.forEach((trade)=>{\n            const year = new Date(trade.date).getFullYear();\n            const month = new Date(trade.date).getMonth();\n            if (year === currentYear && month >= 5 && month <= 10) {\n                monthlySums[month - 5] += trade.totalSum;\n            }\n        });\n        return monthlySums.map((sum)=>parseFloat(sum.toFixed(2)));\n    };\n    const calculateMonthlyWeights = (trades)=>{\n        const currentYear = new Date().getFullYear();\n        const monthlyWeights = [\n            0,\n            0,\n            0,\n            0,\n            0,\n            0\n        ];\n        trades.forEach((trade)=>{\n            const year = new Date(trade.date).getFullYear();\n            const month = new Date(trade.date).getMonth();\n            if (year === currentYear && month >= 5 && month <= 10) {\n                monthlyWeights[month - 5] += trade.weight;\n            }\n        });\n        return monthlyWeights.map((weight)=>parseFloat(weight.toFixed(2)));\n    };\n    const monthlySums = calculateMonthlySums(allTrades);\n    const monthlyWeights = calculateMonthlyWeights(allTrades);\n    const annualProfit = monthlySums.reduce((total, sum)=>total + sum, 0);\n    const formattedAnnualProfit = annualProfit.toLocaleString(\"pl-PL\");\n    const annualHarvest = monthlyWeights.reduce((total, weight)=>total + weight, 0);\n    const formattedAnnualHarvest = annualHarvest.toLocaleString(\"pl-PL\");\n    const [series] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            name: \"Zyski (zł)\",\n            type: \"bar\",\n            data: monthlySums\n        },\n        {\n            name: \"Zbiory (kg)\",\n            type: \"bar\",\n            data: monthlyWeights\n        }\n    ]);\n    const [options] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        chart: {\n            type: \"line\",\n            stacked: false\n        },\n        stroke: {\n            width: [\n                0,\n                1\n            ]\n        },\n        plotOptions: {\n            bar: {\n                columnWidth: \"50%\"\n            }\n        },\n        xaxis: {\n            categories: [\n                \"Czerwiec\",\n                \"Lipiec\",\n                \"Sierpień\",\n                \"Wrzesień\",\n                \"Październik\",\n                \"Listopad\"\n            ]\n        },\n        yaxis: [\n            {\n                seriesName: \"Zyski (zł)\",\n                axisTicks: {\n                    show: true\n                },\n                axisBorder: {\n                    show: true,\n                    color: \"#262626\"\n                },\n                labels: {\n                    style: {\n                        colors: \"#262626\"\n                    }\n                },\n                title: {\n                    text: \"Zyski (zł)\",\n                    style: {\n                        color: \"#262626\"\n                    }\n                }\n            },\n            {\n                seriesName: \"Zbiory (kg)\",\n                opposite: true,\n                axisTicks: {\n                    show: true\n                },\n                axisBorder: {\n                    show: true,\n                    color: \"#262626\"\n                },\n                labels: {\n                    style: {\n                        colors: \"#262626\"\n                    }\n                },\n                title: {\n                    text: \"Zbiory (kg)\",\n                    style: {\n                        color: \"#262626\"\n                    }\n                }\n            }\n        ],\n        tooltip: {\n            shared: false,\n            intersect: true,\n            y: {\n                formatter: function(val, param) {\n                    let { seriesName } = param;\n                    if (seriesName === \"Zbiory (kg)\") {\n                        return val + \" kg\";\n                    } else if (seriesName === \"Zyski (zł)\") {\n                        return val.toLocaleString(\"pl-PL\") + \" zł\";\n                    }\n                    return val;\n                }\n            }\n        },\n        colors: [\n            \"#00b000\",\n            \"#262626\"\n        ]\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_ChartArea__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        className: \"w-full md:w-[760px] h-[380px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row justify-between mx-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-semibold\",\n                                children: \"Roczne zyski:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/TradesOfPepperByMonth.tsx\",\n                                lineNumber: 170,\n                                columnNumber: 6\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-lg font-semibold text-mainColor\",\n                                children: [\n                                    formattedAnnualProfit,\n                                    \" zł\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/TradesOfPepperByMonth.tsx\",\n                                lineNumber: 171,\n                                columnNumber: 6\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/TradesOfPepperByMonth.tsx\",\n                        lineNumber: 169,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-right\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-semibold\",\n                                children: \"Roczne zbiory:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/TradesOfPepperByMonth.tsx\",\n                                lineNumber: 174,\n                                columnNumber: 6\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-lg font-semibold text-mainColor\",\n                                children: [\n                                    formattedAnnualHarvest,\n                                    \" kg\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/TradesOfPepperByMonth.tsx\",\n                                lineNumber: 175,\n                                columnNumber: 6\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/TradesOfPepperByMonth.tsx\",\n                        lineNumber: 173,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/TradesOfPepperByMonth.tsx\",\n                lineNumber: 168,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"chart\",\n                className: \"flex md:justify-center md:items-center overflow-x-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_apexcharts__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    options: options,\n                    series: series,\n                    type: \"line\",\n                    height: 300,\n                    width: 700\n                }, void 0, false, {\n                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/TradesOfPepperByMonth.tsx\",\n                    lineNumber: 179,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/TradesOfPepperByMonth.tsx\",\n                lineNumber: 178,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/TradesOfPepperByMonth.tsx\",\n        lineNumber: 167,\n        columnNumber: 3\n    }, this);\n}\n_s(TradesOfPepperByMonth, \"69L7Z/jr8cwENjwC3WMLceF1720=\");\n_c = TradesOfPepperByMonth;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TradesOfPepperByMonth);\nvar _c;\n$RefreshReg$(_c, \"TradesOfPepperByMonth\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9DaGFydHMvVHJhZGVzT2ZQZXBwZXJCeU1vbnRoLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF1QztBQUNNO0FBQ0c7QUE4QmhELFNBQVNJLHNCQUFzQixLQUFvQjtRQUFwQixFQUFFQyxTQUFTLEVBQVMsR0FBcEI7O0lBQzlCLE1BQU1DLHVCQUF1QixDQUFDQztRQUM3QixNQUFNQyxjQUFjLElBQUlDLE9BQU9DO1FBQy9CLE1BQU1DLGNBQXdCO1lBQUM7WUFBRztZQUFHO1lBQUc7WUFBRztZQUFHO1NBQUU7UUFFaERKLE9BQU9LLFFBQVFDLENBQUFBO1lBQ2QsTUFBTUMsT0FBTyxJQUFJTCxLQUFLSSxNQUFNRSxNQUFNTDtZQUNsQyxNQUFNTSxRQUFRLElBQUlQLEtBQUtJLE1BQU1FLE1BQU1FO1lBRW5DLElBQUlILFNBQVNOLGVBQWVRLFNBQVMsS0FBS0EsU0FBUyxJQUFJO2dCQUN0REwsV0FBVyxDQUFDSyxRQUFRLEVBQUUsSUFBSUgsTUFBTUs7WUFDakM7UUFDRDtRQUVBLE9BQU9QLFlBQVlRLElBQUlDLENBQUFBLE1BQU9DLFdBQVdELElBQUlFLFFBQVE7SUFDdEQ7SUFFQSxNQUFNQywwQkFBMEIsQ0FBQ2hCO1FBQ2hDLE1BQU1DLGNBQWMsSUFBSUMsT0FBT0M7UUFDL0IsTUFBTWMsaUJBQTJCO1lBQUM7WUFBRztZQUFHO1lBQUc7WUFBRztZQUFHO1NBQUU7UUFFbkRqQixPQUFPSyxRQUFRQyxDQUFBQTtZQUNkLE1BQU1DLE9BQU8sSUFBSUwsS0FBS0ksTUFBTUUsTUFBTUw7WUFDbEMsTUFBTU0sUUFBUSxJQUFJUCxLQUFLSSxNQUFNRSxNQUFNRTtZQUVuQyxJQUFJSCxTQUFTTixlQUFlUSxTQUFTLEtBQUtBLFNBQVMsSUFBSTtnQkFDdERRLGNBQWMsQ0FBQ1IsUUFBUSxFQUFFLElBQUlILE1BQU1ZO1lBQ3BDO1FBQ0Q7UUFFQSxPQUFPRCxlQUFlTCxJQUFJTSxDQUFBQSxTQUFVSixXQUFXSSxPQUFPSCxR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QUFlQSxxQkFBcUJBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGFydHMvVHJhZGVzT2ZQZXBwZXJCeU1vbnRoLnRzeD9iZTMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0QXBleENoYXJ0IGZyb20gJ3JlYWN0LWFwZXhjaGFydHMnXG5pbXBvcnQgQ2hhcnRBcmVhIGZyb20gJ0Bjb21wb25lbnRzL1VJL0NoYXJ0QXJlYSdcblxudHlwZSBDaGFydERhdGEgPSB7XG5cdG5hbWU6IHN0cmluZ1xuXHR0eXBlOiBzdHJpbmdcblx0ZGF0YTogbnVtYmVyW11cbn1cblxuaW50ZXJmYWNlIFRyYWRlT2ZQZXBwZXIge1xuXHRfaWQ6IHN0cmluZ1xuXHRjcmVhdG9yOiB7XG5cdFx0X2lkOiBzdHJpbmdcblx0XHRlbWFpbDogc3RyaW5nXG5cdFx0dXNlcm5hbWU6IHN0cmluZ1xuXHRcdGltYWdlOiBzdHJpbmdcblx0fVxuXHRwb2ludE9mU2FsZUlkOiBzdHJpbmdcblx0ZGF0ZTogc3RyaW5nXG5cdGNsYXM6IG51bWJlclxuXHRjb2xvcjogbnVtYmVyXG5cdHByaWNlOiBudW1iZXJcblx0d2VpZ2h0OiBudW1iZXJcblx0dmF0UmF0ZTogbnVtYmVyXG5cdHRvdGFsU3VtOiBudW1iZXJcbn1cblxuaW50ZXJmYWNlIFByb3BzIHtcblx0YWxsVHJhZGVzOiBUcmFkZU9mUGVwcGVyW11cbn1cblxuZnVuY3Rpb24gVHJhZGVzT2ZQZXBwZXJCeU1vbnRoKHsgYWxsVHJhZGVzIH06IFByb3BzKSB7XG5cdGNvbnN0IGNhbGN1bGF0ZU1vbnRobHlTdW1zID0gKHRyYWRlczogVHJhZGVPZlBlcHBlcltdKTogbnVtYmVyW10gPT4ge1xuXHRcdGNvbnN0IGN1cnJlbnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpXG5cdFx0Y29uc3QgbW9udGhseVN1bXM6IG51bWJlcltdID0gWzAsIDAsIDAsIDAsIDAsIDBdXG5cblx0XHR0cmFkZXMuZm9yRWFjaCh0cmFkZSA9PiB7XG5cdFx0XHRjb25zdCB5ZWFyID0gbmV3IERhdGUodHJhZGUuZGF0ZSkuZ2V0RnVsbFllYXIoKVxuXHRcdFx0Y29uc3QgbW9udGggPSBuZXcgRGF0ZSh0cmFkZS5kYXRlKS5nZXRNb250aCgpXG5cblx0XHRcdGlmICh5ZWFyID09PSBjdXJyZW50WWVhciAmJiBtb250aCA+PSA1ICYmIG1vbnRoIDw9IDEwKSB7XG5cdFx0XHRcdG1vbnRobHlTdW1zW21vbnRoIC0gNV0gKz0gdHJhZGUudG90YWxTdW1cblx0XHRcdH1cblx0XHR9KVxuXG5cdFx0cmV0dXJuIG1vbnRobHlTdW1zLm1hcChzdW0gPT4gcGFyc2VGbG9hdChzdW0udG9GaXhlZCgyKSkpXG5cdH1cblxuXHRjb25zdCBjYWxjdWxhdGVNb250aGx5V2VpZ2h0cyA9ICh0cmFkZXM6IFRyYWRlT2ZQZXBwZXJbXSk6IG51bWJlcltdID0+IHtcblx0XHRjb25zdCBjdXJyZW50WWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKVxuXHRcdGNvbnN0IG1vbnRobHlXZWlnaHRzOiBudW1iZXJbXSA9IFswLCAwLCAwLCAwLCAwLCAwXVxuXG5cdFx0dHJhZGVzLmZvckVhY2godHJhZGUgPT4ge1xuXHRcdFx0Y29uc3QgeWVhciA9IG5ldyBEYXRlKHRyYWRlLmRhdGUpLmdldEZ1bGxZZWFyKClcblx0XHRcdGNvbnN0IG1vbnRoID0gbmV3IERhdGUodHJhZGUuZGF0ZSkuZ2V0TW9udGgoKVxuXG5cdFx0XHRpZiAoeWVhciA9PT0gY3VycmVudFllYXIgJiYgbW9udGggPj0gNSAmJiBtb250aCA8PSAxMCkge1xuXHRcdFx0XHRtb250aGx5V2VpZ2h0c1ttb250aCAtIDVdICs9IHRyYWRlLndlaWdodFxuXHRcdFx0fVxuXHRcdH0pXG5cblx0XHRyZXR1cm4gbW9udGhseVdlaWdodHMubWFwKHdlaWdodCA9PiBwYXJzZUZsb2F0KHdlaWdodC50b0ZpeGVkKDIpKSlcblx0fVxuXG5cdGNvbnN0IG1vbnRobHlTdW1zID0gY2FsY3VsYXRlTW9udGhseVN1bXMoYWxsVHJhZGVzKVxuXHRjb25zdCBtb250aGx5V2VpZ2h0cyA9IGNhbGN1bGF0ZU1vbnRobHlXZWlnaHRzKGFsbFRyYWRlcylcblxuXHRjb25zdCBhbm51YWxQcm9maXQgPSBtb250aGx5U3Vtcy5yZWR1Y2UoKHRvdGFsLCBzdW0pID0+IHRvdGFsICsgc3VtLCAwKVxuXHRjb25zdCBmb3JtYXR0ZWRBbm51YWxQcm9maXQgPSBhbm51YWxQcm9maXQudG9Mb2NhbGVTdHJpbmcoJ3BsLVBMJylcblxuXHRjb25zdCBhbm51YWxIYXJ2ZXN0ID0gbW9udGhseVdlaWdodHMucmVkdWNlKCh0b3RhbCwgd2VpZ2h0KSA9PiB0b3RhbCArIHdlaWdodCwgMClcblx0Y29uc3QgZm9ybWF0dGVkQW5udWFsSGFydmVzdCA9IGFubnVhbEhhcnZlc3QudG9Mb2NhbGVTdHJpbmcoJ3BsLVBMJylcblxuXHRjb25zdCBbc2VyaWVzXSA9IHVzZVN0YXRlPENoYXJ0RGF0YVtdPihbXG5cdFx0e1xuXHRcdFx0bmFtZTogJ1p5c2tpICh6xYIpJyxcblx0XHRcdHR5cGU6ICdiYXInLFxuXHRcdFx0ZGF0YTogbW9udGhseVN1bXMsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRuYW1lOiAnWmJpb3J5IChrZyknLFxuXHRcdFx0dHlwZTogJ2JhcicsXG5cdFx0XHRkYXRhOiBtb250aGx5V2VpZ2h0cyxcblx0XHR9LFxuXHRdKVxuXG5cdGNvbnN0IFtvcHRpb25zXSA9IHVzZVN0YXRlPGFueT4oe1xuXHRcdGNoYXJ0OiB7XG5cdFx0XHR0eXBlOiAnbGluZScsXG5cdFx0XHRzdGFja2VkOiBmYWxzZSxcblx0XHR9LFxuXHRcdHN0cm9rZToge1xuXHRcdFx0d2lkdGg6IFswLCAxXSxcblx0XHR9LFxuXHRcdHBsb3RPcHRpb25zOiB7XG5cdFx0XHRiYXI6IHtcblx0XHRcdFx0Y29sdW1uV2lkdGg6ICc1MCUnLFxuXHRcdFx0fSxcblx0XHR9LFxuXHRcdHhheGlzOiB7XG5cdFx0XHRjYXRlZ29yaWVzOiBbJ0N6ZXJ3aWVjJywgJ0xpcGllYycsICdTaWVycGllxYQnLCAnV3J6ZXNpZcWEJywgJ1Bhxbpkemllcm5paycsICdMaXN0b3BhZCddLFxuXHRcdH0sXG5cdFx0eWF4aXM6IFtcblx0XHRcdHtcblx0XHRcdFx0c2VyaWVzTmFtZTogJ1p5c2tpICh6xYIpJyxcblx0XHRcdFx0YXhpc1RpY2tzOiB7XG5cdFx0XHRcdFx0c2hvdzogdHJ1ZSxcblx0XHRcdFx0fSxcblx0XHRcdFx0YXhpc0JvcmRlcjoge1xuXHRcdFx0XHRcdHNob3c6IHRydWUsXG5cdFx0XHRcdFx0Y29sb3I6ICcjMjYyNjI2Jyxcblx0XHRcdFx0fSxcblx0XHRcdFx0bGFiZWxzOiB7XG5cdFx0XHRcdFx0c3R5bGU6IHtcblx0XHRcdFx0XHRcdGNvbG9yczogJyMyNjI2MjYnLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHRpdGxlOiB7XG5cdFx0XHRcdFx0dGV4dDogJ1p5c2tpICh6xYIpJyxcblx0XHRcdFx0XHRzdHlsZToge1xuXHRcdFx0XHRcdFx0Y29sb3I6ICcjMjYyNjI2Jyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0c2VyaWVzTmFtZTogJ1piaW9yeSAoa2cpJyxcblx0XHRcdFx0b3Bwb3NpdGU6IHRydWUsXG5cdFx0XHRcdGF4aXNUaWNrczoge1xuXHRcdFx0XHRcdHNob3c6IHRydWUsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGF4aXNCb3JkZXI6IHtcblx0XHRcdFx0XHRzaG93OiB0cnVlLFxuXHRcdFx0XHRcdGNvbG9yOiAnIzI2MjYyNicsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGxhYmVsczoge1xuXHRcdFx0XHRcdHN0eWxlOiB7XG5cdFx0XHRcdFx0XHRjb2xvcnM6ICcjMjYyNjI2Jyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR0aXRsZToge1xuXHRcdFx0XHRcdHRleHQ6ICdaYmlvcnkgKGtnKScsXG5cdFx0XHRcdFx0c3R5bGU6IHtcblx0XHRcdFx0XHRcdGNvbG9yOiAnIzI2MjYyNicsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XSxcblx0XHR0b29sdGlwOiB7XG5cdFx0XHRzaGFyZWQ6IGZhbHNlLFxuXHRcdFx0aW50ZXJzZWN0OiB0cnVlLFxuXHRcdFx0eToge1xuXHRcdFx0XHRmb3JtYXR0ZXI6IGZ1bmN0aW9uICh2YWw6IG51bWJlciwgeyBzZXJpZXNOYW1lIH06IHsgc2VyaWVzTmFtZTogc3RyaW5nIH0pIHtcblx0XHRcdFx0XHRpZiAoc2VyaWVzTmFtZSA9PT0gJ1piaW9yeSAoa2cpJykge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHZhbCArICcga2cnXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChzZXJpZXNOYW1lID09PSAnWnlza2kgKHrFgiknKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdmFsLnRvTG9jYWxlU3RyaW5nKCdwbC1QTCcpICsgJyB6xYInXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiB2YWxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRjb2xvcnM6IFsnIzAwYjAwMCcsICcjMjYyNjI2J10sXG5cdH0pXG5cblx0cmV0dXJuIChcblx0XHQ8Q2hhcnRBcmVhIGNsYXNzTmFtZT0ndy1mdWxsIG1kOnctWzc2MHB4XSBoLVszODBweF0nPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIG14LTEwJz5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J2ZvbnQtc2VtaWJvbGQnPlJvY3puZSB6eXNraTo8L3A+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSd0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgdGV4dC1tYWluQ29sb3InPntmb3JtYXR0ZWRBbm51YWxQcm9maXR9IHrFgjwvcD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0ZXh0LXJpZ2h0Jz5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J2ZvbnQtc2VtaWJvbGQnPlJvY3puZSB6Ymlvcnk6PC9wPlxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0ndGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtbWFpbkNvbG9yJz57Zm9ybWF0dGVkQW5udWFsSGFydmVzdH0ga2c8L3A+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGlkPSdjaGFydCcgY2xhc3NOYW1lPSdmbGV4IG1kOmp1c3RpZnktY2VudGVyIG1kOml0ZW1zLWNlbnRlciBvdmVyZmxvdy14LWF1dG8nPlxuXHRcdFx0XHQ8UmVhY3RBcGV4Q2hhcnQgb3B0aW9ucz17b3B0aW9uc30gc2VyaWVzPXtzZXJpZXN9IHR5cGU9J2xpbmUnIGhlaWdodD17MzAwfSB3aWR0aD17NzAwfSAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9DaGFydEFyZWE+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJhZGVzT2ZQZXBwZXJCeU1vbnRoXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlJlYWN0QXBleENoYXJ0IiwiQ2hhcnRBcmVhIiwiVHJhZGVzT2ZQZXBwZXJCeU1vbnRoIiwiYWxsVHJhZGVzIiwiY2FsY3VsYXRlTW9udGhseVN1bXMiLCJ0cmFkZXMiLCJjdXJyZW50WWVhciIsIkRhdGUiLCJnZXRGdWxsWWVhciIsIm1vbnRobHlTdW1zIiwiZm9yRWFjaCIsInRyYWRlIiwieWVhciIsImRhdGUiLCJtb250aCIsImdldE1vbnRoIiwidG90YWxTdW0iLCJtYXAiLCJzdW0iLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsImNhbGN1bGF0ZU1vbnRobHlXZWlnaHRzIiwibW9udGhseVdlaWdodHMiLCJ3ZWlnaHQiLCJhbm51YWxQcm9maXQiLCJyZWR1Y2UiLCJ0b3RhbCIsImZvcm1hdHRlZEFubnVhbFByb2ZpdCIsInRvTG9jYWxlU3RyaW5nIiwiYW5udWFsSGFydmVzdCIsImZvcm1hdHRlZEFubnVhbEhhcnZlc3QiLCJzZXJpZXMiLCJuYW1lIiwidHlwZSIsImRhdGEiLCJvcHRpb25zIiwiY2hhcnQiLCJzdGFja2VkIiwic3Ryb2tlIiwid2lkdGgiLCJwbG90T3B0aW9ucyIsImJhciIsImNvbHVtbldpZHRoIiwieGF4aXMiLCJjYXRlZ29yaWVzIiwieWF4aXMiLCJzZXJpZXNOYW1lIiwiYXhpc1RpY2tzIiwic2hvdyIsImF4aXNCb3JkZXIiLCJjb2xvciIsImxhYmVscyIsInN0eWxlIiwiY29sb3JzIiwidGl0bGUiLCJ0ZXh0Iiwib3Bwb3NpdGUiLCJ0b29sdGlwIiwic2hhcmVkIiwiaW50ZXJzZWN0IiwieSIsImZvcm1hdHRlciIsInZhbCIsImNsYXNzTmFtZSIsImRpdiIsInAiLCJpZCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/Charts/TradesOfPepperByMonth.tsx\n"));

/***/ })

});