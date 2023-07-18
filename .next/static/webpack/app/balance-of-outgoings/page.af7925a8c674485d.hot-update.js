"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/balance-of-outgoings/page",{

/***/ "(app-client)/./components/Charts/Outgoings/OutgoingsByMonth.tsx":
/*!**********************************************************!*\
  !*** ./components/Charts/Outgoings/OutgoingsByMonth.tsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apexcharts */ \"(app-client)/./node_modules/react-apexcharts/dist/react-apexcharts.min.js\");\n/* harmony import */ var _components_UI_ChartArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/UI/ChartArea */ \"(app-client)/./components/UI/ChartArea.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction OutgoingsByMonth(param) {\n    let { allOutgoings } = param;\n    _s();\n    const calculateMonthlyOutgoings = (outgoings)=>{\n        const monthlyOutgoings = [\n            0,\n            0,\n            0,\n            0,\n            0,\n            0,\n            0,\n            0,\n            0,\n            0,\n            0,\n            0\n        ];\n        outgoings.forEach((outgoing)=>{\n            const month = new Date(outgoing.date).getMonth();\n            monthlyOutgoings[month] += outgoing.totalSum || 0;\n        });\n        return monthlyOutgoings;\n    };\n    const monthlyOutgoings = calculateMonthlyOutgoings(allOutgoings);\n    const seasonOutgoingSum = monthlyOutgoings.reduce((total, outgoing)=>total + outgoing, 0);\n    const formattedSeasonOutgoingSum = seasonOutgoingSum.toLocaleString(\"pl-PL\");\n    const [series] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            name: \"Wydatki (zł)\",\n            type: \"bar\",\n            data: monthlyOutgoings\n        }\n    ]);\n    const [options] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        chart: {\n            type: \"line\",\n            stacked: false\n        },\n        stroke: {\n            width: [\n                0,\n                1\n            ]\n        },\n        plotOptions: {\n            bar: {\n                columnWidth: \"50%\"\n            }\n        },\n        xaxis: {\n            categories: [\n                \"Styczeń\",\n                \"Luty\",\n                \"Marzec\",\n                \"Kwiecień\",\n                \"Maj\",\n                \"Czerwiec\",\n                \"Lipiec\",\n                \"Sierpień\",\n                \"Wrzesień\",\n                \"Październik\",\n                \"Listopad\",\n                \"Grudzień\"\n            ],\n            labels: {\n                style: {\n                    rotate: -45\n                }\n            }\n        },\n        yaxis: [\n            {\n                seriesName: \"Wydatki (zł)\",\n                axisTicks: {\n                    show: true\n                },\n                axisBorder: {\n                    show: true,\n                    color: \"#262626\"\n                },\n                labels: {\n                    style: {\n                        colors: \"#262626\"\n                    }\n                },\n                title: {\n                    text: \"Wydatki (zł)\",\n                    style: {\n                        color: \"#262626\"\n                    }\n                }\n            }\n        ],\n        tooltip: {\n            shared: false,\n            intersect: true,\n            y: {\n                formatter: function(val) {\n                    return val.toLocaleString(\"pl-PL\") + \" zł\";\n                }\n            }\n        },\n        colors: [\n            \"#00b000\"\n        ]\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_ChartArea__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        className: \"w-full md:w-[760px] h-[420px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center mx-10\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"font-semibold\",\n                            children: \"Suma wydatk\\xf3w w sezonie:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/Outgoings/OutgoingsByMonth.tsx\",\n                            lineNumber: 117,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-lg font-semibold text-mainColor\",\n                            children: [\n                                formattedSeasonOutgoingSum,\n                                \" zł\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/Outgoings/OutgoingsByMonth.tsx\",\n                            lineNumber: 118,\n                            columnNumber: 6\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/Outgoings/OutgoingsByMonth.tsx\",\n                    lineNumber: 116,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/Outgoings/OutgoingsByMonth.tsx\",\n                lineNumber: 115,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"chart\",\n                className: \"flex justify-center items-center overflow-x-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_apexcharts__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    options: options,\n                    series: series,\n                    type: \"line\",\n                    height: 320,\n                    width: 700\n                }, void 0, false, {\n                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/Outgoings/OutgoingsByMonth.tsx\",\n                    lineNumber: 122,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/Outgoings/OutgoingsByMonth.tsx\",\n                lineNumber: 121,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/Outgoings/OutgoingsByMonth.tsx\",\n        lineNumber: 114,\n        columnNumber: 3\n    }, this);\n}\n_s(OutgoingsByMonth, \"NP0aiE3zwz72QAYvo7qS/xVI10k=\");\n_c = OutgoingsByMonth;\n/* harmony default export */ __webpack_exports__[\"default\"] = (OutgoingsByMonth);\nvar _c;\n$RefreshReg$(_c, \"OutgoingsByMonth\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9DaGFydHMvT3V0Z29pbmdzL091dGdvaW5nc0J5TW9udGgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXVDO0FBQ007QUFDRztBQTZCaEQsU0FBU0ksaUJBQWlCLEtBQXVCO1FBQXZCLEVBQUVDLFlBQVksRUFBUyxHQUF2Qjs7SUFDekIsTUFBTUMsNEJBQTRCLENBQUNDO1FBQ2xDLE1BQU1DLG1CQUE2QjtZQUFDO1lBQUc7WUFBRztZQUFHO1lBQUc7WUFBRztZQUFHO1lBQUc7WUFBRztZQUFHO1lBQUc7WUFBRztTQUFFO1FBRXZFRCxVQUFVRSxRQUFRQyxDQUFBQTtZQUNqQixNQUFNQyxRQUFRLElBQUlDLEtBQUtGLFNBQVNHLE1BQU1DO1lBQ3RDTixnQkFBZ0IsQ0FBQ0csTUFBTSxJQUFJRCxTQUFTSyxZQUFZO1FBQ2pEO1FBRUEsT0FBT1A7SUFDUjtJQUVBLE1BQU1BLG1CQUFtQkYsMEJBQTBCRDtJQUVuRCxNQUFNVyxvQkFBb0JSLGlCQUFpQlMsT0FBTyxDQUFDQyxPQUFPUixXQUFhUSxRQUFRUixVQUFVO0lBQ3pGLE1BQU1TLDZCQUE2Qkgsa0JBQWtCSSxlQUFlO0lBRXBFLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHcEIsK0NBQVFBLENBQWM7UUFDdEM7WUFDQ3FCLE1BQU07WUFDTkMsTUFBTTtZQUNOQyxNQUFNaEI7UUFDUDtLQUNBO0lBRUQsTUFBTSxDQUFDaUIsUUFBUSxHQUFHeEIsK0NBQVFBLENBQU07UUFDL0J5QixPQUFPO1lBQ05ILE1BQU07WUFDTkksU0FBUztRQUNWO1FBQ0FDLFFBQVE7WUFDUEMsT0FBTztnQkFBQztnQkFBRzthQUFFO1FBQ2Q7UUFDQUMsYUFBYTtZQUNaQyxLQUFLO2dCQUNKQyxhQUFhO1lBQ2Q7UUFDRDtRQUNBQyxPQUFPO1lBQ05DLFlBQVk7Z0JBQUM7Z0JBQVc7Z0JBQVE7Z0JBQVU7Z0JBQVk7Z0JBQU87Z0JBQVk7Z0JBQVU7Z0JBQVk7Z0JBQVk7Z0JBQWU7Z0JBQVk7YUFBVztZQUNqSkMsUUFBUTtnQkFDS0MsT0FBTTtvQkFDRkMsUUFBUSxDQUFDO2dCQUNiO1lBQ2I7UUFDRDtRQUNBQyxPQUFPO1lBQ047Z0JBQ0NDLFlBQVk7Z0JBQ1pDLFdBQVc7b0JBQ1ZDLE1BQU07Z0JBQ1A7Z0JBQ0FDLFlBQVk7b0JBQ1hELE1BQU07b0JBQ05FLE9BQU87Z0JBQ1I7Z0JBQ0FSLFFBQVE7b0JBQ1BDLE9BQU87d0JBQ05RLFFBQVE7b0JBQ1Q7Z0JBQ0Q7Z0JBQ0FDLE9BQU87b0JBQ05DLE1BQU07b0JBQ05WLE9BQU87d0JBQ05PLE9BQU87b0JBQ1I7Z0JBQ0Q7WUFDRDtTQUNBO1FBQ0RJLFNBQVM7WUFDUkMsUUFBUTtZQUNSQyxXQUFXO1lBQ1hDLEdBQUc7Z0JBQ0ZDLFdBQVcsU0FBVUMsR0FBVztvQkFDL0IsT0FBT0EsSUFBSWhDLGVBQWUsV0FBVztnQkFDdEM7WUFDRDtRQUNEO1FBQ0F3QixRQUFRO1lBQUM7U0FBVTtJQUNwQjtJQUVBLHFCQUNDLDhEQUFDekMsZ0VBQVNBO1FBQUNrRCxXQUFVOzswQkFDcEIsOERBQUNDO2dCQUFJRCxXQUFVOzBCQUNkLDRFQUFDQzs7c0NBQ0EsOERBQUNDOzRCQUFFRixXQUFVO3NDQUFnQjs7Ozs7O3NDQUM3Qiw4REFBQ0U7NEJBQUVGLFdBQVU7O2dDQUF3Q2xDO2dDQUEyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUdsRiw4REFBQ21DO2dCQUFJRSxJQUFHO2dCQUFRSCxXQUFVOzBCQUN6Qiw0RUFBQ25ELHdEQUFjQTtvQkFBQ3VCLFNBQVNBO29CQUFTSixRQUFRQTtvQkFBUUUsTUFBSztvQkFBT2tDLFFBQVE7b0JBQUs1QixPQUFPOzs7Ozs7Ozs7Ozs7Ozs7OztBQUl0RjtHQTlGU3pCO0tBQUFBO0FBZ0dULCtEQUFlQSxnQkFBZ0JBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGFydHMvT3V0Z29pbmdzL091dGdvaW5nc0J5TW9udGgudHN4P2MxNWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RBcGV4Q2hhcnQgZnJvbSAncmVhY3QtYXBleGNoYXJ0cydcbmltcG9ydCBDaGFydEFyZWEgZnJvbSAnQGNvbXBvbmVudHMvVUkvQ2hhcnRBcmVhJ1xuXG50eXBlIENoYXJ0RGF0YSA9IHtcblx0bmFtZTogc3RyaW5nXG5cdHR5cGU6IHN0cmluZ1xuXHRkYXRhOiBudW1iZXJbXVxufVxuXG5pbnRlcmZhY2UgT3V0Z29pbmcge1xuXHRfaWQ6IHN0cmluZ1xuXHRjcmVhdG9yOiB7XG5cdFx0X2lkOiBzdHJpbmdcblx0XHRlbWFpbDogc3RyaW5nXG5cdFx0dXNlcm5hbWU6IHN0cmluZ1xuXHRcdGltYWdlOiBzdHJpbmdcblx0fVxuXHRuYW1lOiBzdHJpbmdcblx0Y2F0ZWdvcnk6IG51bWJlclxuXHRkYXRlOiBzdHJpbmdcblx0cHJpY2U6IG51bWJlclxuXHRhbW91bnQ6IG51bWJlclxuXHR0b3RhbFN1bTogbnVtYmVyXG5cdGRlc2NyaWJlOiBzdHJpbmdcbn1cblxuaW50ZXJmYWNlIFByb3BzIHtcblx0YWxsT3V0Z29pbmdzOiBPdXRnb2luZ1tdXG59XG5cbmZ1bmN0aW9uIE91dGdvaW5nc0J5TW9udGgoeyBhbGxPdXRnb2luZ3MgfTogUHJvcHMpIHtcblx0Y29uc3QgY2FsY3VsYXRlTW9udGhseU91dGdvaW5ncyA9IChvdXRnb2luZ3M6IE91dGdvaW5nW10pOiBudW1iZXJbXSA9PiB7XG5cdFx0Y29uc3QgbW9udGhseU91dGdvaW5nczogbnVtYmVyW10gPSBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF1cblxuXHRcdG91dGdvaW5ncy5mb3JFYWNoKG91dGdvaW5nID0+IHtcblx0XHRcdGNvbnN0IG1vbnRoID0gbmV3IERhdGUob3V0Z29pbmcuZGF0ZSkuZ2V0TW9udGgoKVxuXHRcdFx0bW9udGhseU91dGdvaW5nc1ttb250aF0gKz0gb3V0Z29pbmcudG90YWxTdW0gfHwgMFxuXHRcdH0pXG5cblx0XHRyZXR1cm4gbW9udGhseU91dGdvaW5nc1xuXHR9XG5cblx0Y29uc3QgbW9udGhseU91dGdvaW5ncyA9IGNhbGN1bGF0ZU1vbnRobHlPdXRnb2luZ3MoYWxsT3V0Z29pbmdzKVxuXG5cdGNvbnN0IHNlYXNvbk91dGdvaW5nU3VtID0gbW9udGhseU91dGdvaW5ncy5yZWR1Y2UoKHRvdGFsLCBvdXRnb2luZykgPT4gdG90YWwgKyBvdXRnb2luZywgMClcblx0Y29uc3QgZm9ybWF0dGVkU2Vhc29uT3V0Z29pbmdTdW0gPSBzZWFzb25PdXRnb2luZ1N1bS50b0xvY2FsZVN0cmluZygncGwtUEwnKVxuXG5cdGNvbnN0IFtzZXJpZXNdID0gdXNlU3RhdGU8Q2hhcnREYXRhW10+KFtcblx0XHR7XG5cdFx0XHRuYW1lOiAnV3lkYXRraSAoesWCKScsXG5cdFx0XHR0eXBlOiAnYmFyJyxcblx0XHRcdGRhdGE6IG1vbnRobHlPdXRnb2luZ3MsXG5cdFx0fSxcblx0XSlcblxuXHRjb25zdCBbb3B0aW9uc10gPSB1c2VTdGF0ZTxhbnk+KHtcblx0XHRjaGFydDoge1xuXHRcdFx0dHlwZTogJ2xpbmUnLFxuXHRcdFx0c3RhY2tlZDogZmFsc2UsXG5cdFx0fSxcblx0XHRzdHJva2U6IHtcblx0XHRcdHdpZHRoOiBbMCwgMV0sXG5cdFx0fSxcblx0XHRwbG90T3B0aW9uczoge1xuXHRcdFx0YmFyOiB7XG5cdFx0XHRcdGNvbHVtbldpZHRoOiAnNTAlJyxcblx0XHRcdH0sXG5cdFx0fSxcblx0XHR4YXhpczoge1xuXHRcdFx0Y2F0ZWdvcmllczogWydTdHljemXFhCcsICdMdXR5JywgJ01hcnplYycsICdLd2llY2llxYQnLCAnTWFqJywgJ0N6ZXJ3aWVjJywgJ0xpcGllYycsICdTaWVycGllxYQnLCAnV3J6ZXNpZcWEJywgJ1Bhxbpkemllcm5paycsICdMaXN0b3BhZCcsICdHcnVkemllxYQnXSxcblx0XHRcdGxhYmVsczoge1xuICAgICAgICAgICAgICAgIHN0eWxlOntcbiAgICAgICAgICAgICAgICAgICAgcm90YXRlOiAtNDUsXG4gICAgICAgICAgICAgICAgfVxuXHRcdFx0fSxcblx0XHR9LFxuXHRcdHlheGlzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdHNlcmllc05hbWU6ICdXeWRhdGtpICh6xYIpJyxcblx0XHRcdFx0YXhpc1RpY2tzOiB7XG5cdFx0XHRcdFx0c2hvdzogdHJ1ZSxcblx0XHRcdFx0fSxcblx0XHRcdFx0YXhpc0JvcmRlcjoge1xuXHRcdFx0XHRcdHNob3c6IHRydWUsXG5cdFx0XHRcdFx0Y29sb3I6ICcjMjYyNjI2Jyxcblx0XHRcdFx0fSxcblx0XHRcdFx0bGFiZWxzOiB7XG5cdFx0XHRcdFx0c3R5bGU6IHtcblx0XHRcdFx0XHRcdGNvbG9yczogJyMyNjI2MjYnLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHRpdGxlOiB7XG5cdFx0XHRcdFx0dGV4dDogJ1d5ZGF0a2kgKHrFgiknLFxuXHRcdFx0XHRcdHN0eWxlOiB7XG5cdFx0XHRcdFx0XHRjb2xvcjogJyMyNjI2MjYnLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdF0sXG5cdFx0dG9vbHRpcDoge1xuXHRcdFx0c2hhcmVkOiBmYWxzZSxcblx0XHRcdGludGVyc2VjdDogdHJ1ZSxcblx0XHRcdHk6IHtcblx0XHRcdFx0Zm9ybWF0dGVyOiBmdW5jdGlvbiAodmFsOiBudW1iZXIpIHtcblx0XHRcdFx0XHRyZXR1cm4gdmFsLnRvTG9jYWxlU3RyaW5nKCdwbC1QTCcpICsgJyB6xYInXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0Y29sb3JzOiBbJyMwMGIwMDAnXSxcblx0fSlcblxuXHRyZXR1cm4gKFxuXHRcdDxDaGFydEFyZWEgY2xhc3NOYW1lPSd3LWZ1bGwgbWQ6dy1bNzYwcHhdIGgtWzQyMHB4XSc+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlciBteC0xMCc+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdmb250LXNlbWlib2xkJz5TdW1hIHd5ZGF0a8OzdyB3IHNlem9uaWU6PC9wPlxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0ndGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtbWFpbkNvbG9yJz57Zm9ybWF0dGVkU2Vhc29uT3V0Z29pbmdTdW19IHrFgjwvcD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgaWQ9J2NoYXJ0JyBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG92ZXJmbG93LXgtYXV0byc+XG5cdFx0XHRcdDxSZWFjdEFwZXhDaGFydCBvcHRpb25zPXtvcHRpb25zfSBzZXJpZXM9e3Nlcmllc30gdHlwZT0nbGluZScgaGVpZ2h0PXszMjB9IHdpZHRoPXs3MDB9IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L0NoYXJ0QXJlYT5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBPdXRnb2luZ3NCeU1vbnRoXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlJlYWN0QXBleENoYXJ0IiwiQ2hhcnRBcmVhIiwiT3V0Z29pbmdzQnlNb250aCIsImFsbE91dGdvaW5ncyIsImNhbGN1bGF0ZU1vbnRobHlPdXRnb2luZ3MiLCJvdXRnb2luZ3MiLCJtb250aGx5T3V0Z29pbmdzIiwiZm9yRWFjaCIsIm91dGdvaW5nIiwibW9udGgiLCJEYXRlIiwiZGF0ZSIsImdldE1vbnRoIiwidG90YWxTdW0iLCJzZWFzb25PdXRnb2luZ1N1bSIsInJlZHVjZSIsInRvdGFsIiwiZm9ybWF0dGVkU2Vhc29uT3V0Z29pbmdTdW0iLCJ0b0xvY2FsZVN0cmluZyIsInNlcmllcyIsIm5hbWUiLCJ0eXBlIiwiZGF0YSIsIm9wdGlvbnMiLCJjaGFydCIsInN0YWNrZWQiLCJzdHJva2UiLCJ3aWR0aCIsInBsb3RPcHRpb25zIiwiYmFyIiwiY29sdW1uV2lkdGgiLCJ4YXhpcyIsImNhdGVnb3JpZXMiLCJsYWJlbHMiLCJzdHlsZSIsInJvdGF0ZSIsInlheGlzIiwic2VyaWVzTmFtZSIsImF4aXNUaWNrcyIsInNob3ciLCJheGlzQm9yZGVyIiwiY29sb3IiLCJjb2xvcnMiLCJ0aXRsZSIsInRleHQiLCJ0b29sdGlwIiwic2hhcmVkIiwiaW50ZXJzZWN0IiwieSIsImZvcm1hdHRlciIsInZhbCIsImNsYXNzTmFtZSIsImRpdiIsInAiLCJpZCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/Charts/Outgoings/OutgoingsByMonth.tsx\n"));

/***/ })

});