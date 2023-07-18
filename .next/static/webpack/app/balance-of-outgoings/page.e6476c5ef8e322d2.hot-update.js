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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apexcharts */ \"(app-client)/./node_modules/react-apexcharts/dist/react-apexcharts.min.js\");\n/* harmony import */ var _components_UI_ChartArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/UI/ChartArea */ \"(app-client)/./components/UI/ChartArea.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction OutgoingsByMonth(param) {\n    let { allOutgoings } = param;\n    _s();\n    const calculateMonthlyOutgoings = (outgoings)=>{\n        const monthlyOutgoings = [\n            0,\n            0,\n            0,\n            0,\n            0,\n            0,\n            0,\n            0,\n            0,\n            0,\n            0,\n            0\n        ];\n        outgoings.forEach((outgoing)=>{\n            const month = new Date(outgoing.date).getMonth();\n            monthlyOutgoings[month] += outgoing.totalSum || 0;\n        });\n        return monthlyOutgoings;\n    };\n    const monthlyOutgoings = calculateMonthlyOutgoings(allOutgoings);\n    const seasonOutgoingSum = monthlyOutgoings.reduce((total, outgoing)=>total + outgoing, 0);\n    const formattedSeasonOutgoingSum = seasonOutgoingSum.toLocaleString(\"pl-PL\");\n    const [series] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            name: \"Wydatki (zł)\",\n            type: \"bar\",\n            data: monthlyOutgoings\n        }\n    ]);\n    const [options] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        chart: {\n            type: \"line\",\n            stacked: false\n        },\n        stroke: {\n            width: [\n                0,\n                1\n            ]\n        },\n        plotOptions: {\n            bar: {\n                columnWidth: \"50%\"\n            }\n        },\n        xaxis: {\n            categories: [\n                \"Styczeń\",\n                \"Luty\",\n                \"Marzec\",\n                \"Kwiecień\",\n                \"Maj\",\n                \"Czerwiec\",\n                \"Lipiec\",\n                \"Sierpień\",\n                \"Wrzesień\",\n                \"Październik\",\n                \"Listopad\",\n                \"Grudzień\"\n            ]\n        },\n        yaxis: [\n            {\n                seriesName: \"Wydatki (zł)\",\n                axisTicks: {\n                    show: true\n                },\n                axisBorder: {\n                    show: true,\n                    color: \"#262626\"\n                },\n                labels: {\n                    style: {\n                        colors: \"#262626\"\n                    }\n                },\n                title: {\n                    text: \"Wydatki (zł)\",\n                    style: {\n                        color: \"#262626\"\n                    }\n                }\n            }\n        ],\n        tooltip: {\n            shared: false,\n            intersect: true,\n            y: {\n                formatter: function(val) {\n                    return val.toLocaleString(\"pl-PL\") + \" zł\";\n                }\n            }\n        },\n        colors: [\n            \"#00b000\"\n        ]\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_ChartArea__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        className: \"w-full  h-[420px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-start mx-10\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"font-semibold\",\n                            children: \"Suma wydatk\\xf3w w sezonie:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/Outgoings/OutgoingsByMonth.tsx\",\n                            lineNumber: 125,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-lg font-semibold text-mainColor\",\n                            children: [\n                                formattedSeasonOutgoingSum,\n                                \" zł\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/Outgoings/OutgoingsByMonth.tsx\",\n                            lineNumber: 126,\n                            columnNumber: 6\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/Outgoings/OutgoingsByMonth.tsx\",\n                    lineNumber: 124,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/Outgoings/OutgoingsByMonth.tsx\",\n                lineNumber: 123,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"chart\",\n                className: \"flex md:justify-center md:items-center overflow-x-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_apexcharts__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    options: options,\n                    series: series,\n                    type: \"line\",\n                    height: 320,\n                    width: 900\n                }, void 0, false, {\n                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/Outgoings/OutgoingsByMonth.tsx\",\n                    lineNumber: 130,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/Outgoings/OutgoingsByMonth.tsx\",\n                lineNumber: 129,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/Outgoings/OutgoingsByMonth.tsx\",\n        lineNumber: 122,\n        columnNumber: 3\n    }, this);\n}\n_s(OutgoingsByMonth, \"jXoouybhXYv4vCTrFXG/Qe7/Ec4=\");\n_c = OutgoingsByMonth;\n/* harmony default export */ __webpack_exports__[\"default\"] = (OutgoingsByMonth);\nvar _c;\n$RefreshReg$(_c, \"OutgoingsByMonth\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9DaGFydHMvT3V0Z29pbmdzL091dGdvaW5nc0J5TW9udGgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXVDO0FBQ007QUFDRztBQTZCaEQsU0FBU0ksaUJBQWlCLEtBQXVCO1FBQXZCLEVBQUVDLFlBQVksRUFBUyxHQUF2Qjs7SUFDekIsTUFBTUMsNEJBQTRCLENBQUNDO1FBQ2xDLE1BQU1DLG1CQUE2QjtZQUFDO1lBQUc7WUFBRztZQUFHO1lBQUc7WUFBRztZQUFHO1lBQUc7WUFBRztZQUFHO1lBQUc7WUFBRztTQUFFO1FBRXZFRCxVQUFVRSxRQUFRQyxDQUFBQTtZQUNqQixNQUFNQyxRQUFRLElBQUlDLEtBQUtGLFNBQVNHLE1BQU1DO1lBQ3RDTixnQkFBZ0IsQ0FBQ0csTUFBTSxJQUFJRCxTQUFTSyxZQUFZO1FBQ2pEO1FBRUEsT0FBT1A7SUFDUjtJQUVBLE1BQU1BLG1CQUFtQkYsMEJBQTBCRDtJQUVuRCxNQUFNVyxvQkFBb0JSLGlCQUFpQlMsT0FBTyxDQUFDQyxPQUFPUixXQUFhUSxRQUFRUixVQUFVO0lBQ3pGLE1BQU1TLDZCQUE2Qkgsa0JBQWtCSSxlQUFlO0lBRXBFLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHcEIsK0NBQVFBLENBQWM7UUFDdEM7WUFDQ3FCLE1BQU07WUFDTkMsTUFBTTtZQUNOQyxNQUFNaEI7UUFDUDtLQUNBO0lBRUQsTUFBTSxDQUFDaUIsUUFBUSxHQUFHeEIsK0NBQVFBLENBQU07UUFDL0J5QixPQUFPO1lBQ05ILE1BQU07WUFDTkksU0FBUztRQUNWO1FBQ0FDLFFBQVE7WUFDUEMsT0FBTztnQkFBQztnQkFBRzthQUFFO1FBQ2Q7UUFDQUMsYUFBYTtZQUNaQyxLQUFLO2dCQUNKQyxhQUFhO1lBQ2Q7UUFDRDtRQUNBQyxPQUFPO1lBQ05DLFlBQVk7Z0JBQ1g7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7YUFDQTtRQUNGO1FBQ0FDLE9BQU87WUFDTjtnQkFDQ0MsWUFBWTtnQkFDWkMsV0FBVztvQkFDVkMsTUFBTTtnQkFDUDtnQkFDQUMsWUFBWTtvQkFDWEQsTUFBTTtvQkFDTkUsT0FBTztnQkFDUjtnQkFDQUMsUUFBUTtvQkFDUEMsT0FBTzt3QkFDTkMsUUFBUTtvQkFDVDtnQkFDRDtnQkFDQUMsT0FBTztvQkFDTkMsTUFBTTtvQkFDTkgsT0FBTzt3QkFDTkYsT0FBTztvQkFDUjtnQkFDRDtZQUNEO1NBQ0E7UUFDRE0sU0FBUztZQUNSQyxRQUFRO1lBQ1JDLFdBQVc7WUFDWEMsR0FBRztnQkFDRkMsV0FBVyxTQUFVQyxHQUFXO29CQUMvQixPQUFPQSxJQUFJL0IsZUFBZSxXQUFXO2dCQUN0QztZQUNEO1FBQ0Q7UUFDQXVCLFFBQVE7WUFBQztTQUFVO0lBQ3BCO0lBRUEscUJBQ0MsOERBQUN4QyxnRUFBU0E7UUFBQ2lELFdBQVU7OzBCQUNwQiw4REFBQ0M7Z0JBQUlELFdBQVU7MEJBQ2QsNEVBQUNDOztzQ0FDQSw4REFBQ0M7NEJBQUVGLFdBQVU7c0NBQWdCOzs7Ozs7c0NBQzdCLDhEQUFDRTs0QkFBRUYsV0FBVTs7Z0NBQXdDakM7Z0NBQTJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR2xGLDhEQUFDa0M7Z0JBQUlFLElBQUc7Z0JBQVFILFdBQVU7MEJBQ3pCLDRFQUFDbEQsd0RBQWNBO29CQUFDdUIsU0FBU0E7b0JBQVNKLFFBQVFBO29CQUFRRSxNQUFLO29CQUFPaUMsUUFBUTtvQkFBSzNCLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXRGO0dBdEdTekI7S0FBQUE7QUF3R1QsK0RBQWVBLGdCQUFnQkEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NoYXJ0cy9PdXRnb2luZ3MvT3V0Z29pbmdzQnlNb250aC50c3g/YzE1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdEFwZXhDaGFydCBmcm9tICdyZWFjdC1hcGV4Y2hhcnRzJ1xuaW1wb3J0IENoYXJ0QXJlYSBmcm9tICdAY29tcG9uZW50cy9VSS9DaGFydEFyZWEnXG5cbnR5cGUgQ2hhcnREYXRhID0ge1xuXHRuYW1lOiBzdHJpbmdcblx0dHlwZTogc3RyaW5nXG5cdGRhdGE6IG51bWJlcltdXG59XG5cbmludGVyZmFjZSBPdXRnb2luZyB7XG5cdF9pZDogc3RyaW5nXG5cdGNyZWF0b3I6IHtcblx0XHRfaWQ6IHN0cmluZ1xuXHRcdGVtYWlsOiBzdHJpbmdcblx0XHR1c2VybmFtZTogc3RyaW5nXG5cdFx0aW1hZ2U6IHN0cmluZ1xuXHR9XG5cdG5hbWU6IHN0cmluZ1xuXHRjYXRlZ29yeTogbnVtYmVyXG5cdGRhdGU6IHN0cmluZ1xuXHRwcmljZTogbnVtYmVyXG5cdGFtb3VudDogbnVtYmVyXG5cdHRvdGFsU3VtOiBudW1iZXJcblx0ZGVzY3JpYmU6IHN0cmluZ1xufVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuXHRhbGxPdXRnb2luZ3M6IE91dGdvaW5nW11cbn1cblxuZnVuY3Rpb24gT3V0Z29pbmdzQnlNb250aCh7IGFsbE91dGdvaW5ncyB9OiBQcm9wcykge1xuXHRjb25zdCBjYWxjdWxhdGVNb250aGx5T3V0Z29pbmdzID0gKG91dGdvaW5nczogT3V0Z29pbmdbXSk6IG51bWJlcltdID0+IHtcblx0XHRjb25zdCBtb250aGx5T3V0Z29pbmdzOiBudW1iZXJbXSA9IFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXVxuXG5cdFx0b3V0Z29pbmdzLmZvckVhY2gob3V0Z29pbmcgPT4ge1xuXHRcdFx0Y29uc3QgbW9udGggPSBuZXcgRGF0ZShvdXRnb2luZy5kYXRlKS5nZXRNb250aCgpXG5cdFx0XHRtb250aGx5T3V0Z29pbmdzW21vbnRoXSArPSBvdXRnb2luZy50b3RhbFN1bSB8fCAwXG5cdFx0fSlcblxuXHRcdHJldHVybiBtb250aGx5T3V0Z29pbmdzXG5cdH1cblxuXHRjb25zdCBtb250aGx5T3V0Z29pbmdzID0gY2FsY3VsYXRlTW9udGhseU91dGdvaW5ncyhhbGxPdXRnb2luZ3MpXG5cblx0Y29uc3Qgc2Vhc29uT3V0Z29pbmdTdW0gPSBtb250aGx5T3V0Z29pbmdzLnJlZHVjZSgodG90YWwsIG91dGdvaW5nKSA9PiB0b3RhbCArIG91dGdvaW5nLCAwKVxuXHRjb25zdCBmb3JtYXR0ZWRTZWFzb25PdXRnb2luZ1N1bSA9IHNlYXNvbk91dGdvaW5nU3VtLnRvTG9jYWxlU3RyaW5nKCdwbC1QTCcpXG5cblx0Y29uc3QgW3Nlcmllc10gPSB1c2VTdGF0ZTxDaGFydERhdGFbXT4oW1xuXHRcdHtcblx0XHRcdG5hbWU6ICdXeWRhdGtpICh6xYIpJyxcblx0XHRcdHR5cGU6ICdiYXInLFxuXHRcdFx0ZGF0YTogbW9udGhseU91dGdvaW5ncyxcblx0XHR9LFxuXHRdKVxuXG5cdGNvbnN0IFtvcHRpb25zXSA9IHVzZVN0YXRlPGFueT4oe1xuXHRcdGNoYXJ0OiB7XG5cdFx0XHR0eXBlOiAnbGluZScsXG5cdFx0XHRzdGFja2VkOiBmYWxzZSxcblx0XHR9LFxuXHRcdHN0cm9rZToge1xuXHRcdFx0d2lkdGg6IFswLCAxXSxcblx0XHR9LFxuXHRcdHBsb3RPcHRpb25zOiB7XG5cdFx0XHRiYXI6IHtcblx0XHRcdFx0Y29sdW1uV2lkdGg6ICc1MCUnLFxuXHRcdFx0fSxcblx0XHR9LFxuXHRcdHhheGlzOiB7XG5cdFx0XHRjYXRlZ29yaWVzOiBbXG5cdFx0XHRcdCdTdHljemXFhCcsXG5cdFx0XHRcdCdMdXR5Jyxcblx0XHRcdFx0J01hcnplYycsXG5cdFx0XHRcdCdLd2llY2llxYQnLFxuXHRcdFx0XHQnTWFqJyxcblx0XHRcdFx0J0N6ZXJ3aWVjJyxcblx0XHRcdFx0J0xpcGllYycsXG5cdFx0XHRcdCdTaWVycGllxYQnLFxuXHRcdFx0XHQnV3J6ZXNpZcWEJyxcblx0XHRcdFx0J1Bhxbpkemllcm5paycsXG5cdFx0XHRcdCdMaXN0b3BhZCcsXG5cdFx0XHRcdCdHcnVkemllxYQnLFxuXHRcdFx0XSxcblx0XHR9LFxuXHRcdHlheGlzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdHNlcmllc05hbWU6ICdXeWRhdGtpICh6xYIpJyxcblx0XHRcdFx0YXhpc1RpY2tzOiB7XG5cdFx0XHRcdFx0c2hvdzogdHJ1ZSxcblx0XHRcdFx0fSxcblx0XHRcdFx0YXhpc0JvcmRlcjoge1xuXHRcdFx0XHRcdHNob3c6IHRydWUsXG5cdFx0XHRcdFx0Y29sb3I6ICcjMjYyNjI2Jyxcblx0XHRcdFx0fSxcblx0XHRcdFx0bGFiZWxzOiB7XG5cdFx0XHRcdFx0c3R5bGU6IHtcblx0XHRcdFx0XHRcdGNvbG9yczogJyMyNjI2MjYnLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHRpdGxlOiB7XG5cdFx0XHRcdFx0dGV4dDogJ1d5ZGF0a2kgKHrFgiknLFxuXHRcdFx0XHRcdHN0eWxlOiB7XG5cdFx0XHRcdFx0XHRjb2xvcjogJyMyNjI2MjYnLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdF0sXG5cdFx0dG9vbHRpcDoge1xuXHRcdFx0c2hhcmVkOiBmYWxzZSxcblx0XHRcdGludGVyc2VjdDogdHJ1ZSxcblx0XHRcdHk6IHtcblx0XHRcdFx0Zm9ybWF0dGVyOiBmdW5jdGlvbiAodmFsOiBudW1iZXIpIHtcblx0XHRcdFx0XHRyZXR1cm4gdmFsLnRvTG9jYWxlU3RyaW5nKCdwbC1QTCcpICsgJyB6xYInXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0Y29sb3JzOiBbJyMwMGIwMDAnXSxcblx0fSlcblxuXHRyZXR1cm4gKFxuXHRcdDxDaGFydEFyZWEgY2xhc3NOYW1lPSd3LWZ1bGwgIGgtWzQyMHB4XSc+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LXN0YXJ0IG14LTEwJz5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J2ZvbnQtc2VtaWJvbGQnPlN1bWEgd3lkYXRrw7N3IHcgc2V6b25pZTo8L3A+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSd0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgdGV4dC1tYWluQ29sb3InPntmb3JtYXR0ZWRTZWFzb25PdXRnb2luZ1N1bX0gesWCPC9wPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBpZD0nY2hhcnQnIGNsYXNzTmFtZT0nZmxleCBtZDpqdXN0aWZ5LWNlbnRlciBtZDppdGVtcy1jZW50ZXIgb3ZlcmZsb3cteC1hdXRvJz5cblx0XHRcdFx0PFJlYWN0QXBleENoYXJ0IG9wdGlvbnM9e29wdGlvbnN9IHNlcmllcz17c2VyaWVzfSB0eXBlPSdsaW5lJyBoZWlnaHQ9ezMyMH0gd2lkdGg9ezkwMH0gLz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvQ2hhcnRBcmVhPlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IE91dGdvaW5nc0J5TW9udGhcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiUmVhY3RBcGV4Q2hhcnQiLCJDaGFydEFyZWEiLCJPdXRnb2luZ3NCeU1vbnRoIiwiYWxsT3V0Z29pbmdzIiwiY2FsY3VsYXRlTW9udGhseU91dGdvaW5ncyIsIm91dGdvaW5ncyIsIm1vbnRobHlPdXRnb2luZ3MiLCJmb3JFYWNoIiwib3V0Z29pbmciLCJtb250aCIsIkRhdGUiLCJkYXRlIiwiZ2V0TW9udGgiLCJ0b3RhbFN1bSIsInNlYXNvbk91dGdvaW5nU3VtIiwicmVkdWNlIiwidG90YWwiLCJmb3JtYXR0ZWRTZWFzb25PdXRnb2luZ1N1bSIsInRvTG9jYWxlU3RyaW5nIiwic2VyaWVzIiwibmFtZSIsInR5cGUiLCJkYXRhIiwib3B0aW9ucyIsImNoYXJ0Iiwic3RhY2tlZCIsInN0cm9rZSIsIndpZHRoIiwicGxvdE9wdGlvbnMiLCJiYXIiLCJjb2x1bW5XaWR0aCIsInhheGlzIiwiY2F0ZWdvcmllcyIsInlheGlzIiwic2VyaWVzTmFtZSIsImF4aXNUaWNrcyIsInNob3ciLCJheGlzQm9yZGVyIiwiY29sb3IiLCJsYWJlbHMiLCJzdHlsZSIsImNvbG9ycyIsInRpdGxlIiwidGV4dCIsInRvb2x0aXAiLCJzaGFyZWQiLCJpbnRlcnNlY3QiLCJ5IiwiZm9ybWF0dGVyIiwidmFsIiwiY2xhc3NOYW1lIiwiZGl2IiwicCIsImlkIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/Charts/Outgoings/OutgoingsByMonth.tsx\n"));

/***/ })

});