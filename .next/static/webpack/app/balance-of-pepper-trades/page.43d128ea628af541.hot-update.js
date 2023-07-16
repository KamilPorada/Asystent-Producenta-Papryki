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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apexcharts */ \"(app-client)/./node_modules/react-apexcharts/dist/react-apexcharts.min.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction TradesOfPepperByMonth() {\n    _s();\n    const [series, setSeries] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            name: \"Zbiory (kg)\",\n            type: \"bar\",\n            data: [\n                100,\n                150,\n                120,\n                180,\n                200,\n                160\n            ]\n        },\n        {\n            name: \"Zyski (zł)\",\n            type: \"line\",\n            data: [\n                5000,\n                6000,\n                5500,\n                7000,\n                8000,\n                6500\n            ]\n        }\n    ]);\n    const [options, setOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        chart: {\n            height: 350,\n            type: \"line\",\n            stacked: false\n        },\n        stroke: {\n            width: [\n                0,\n                4\n            ]\n        },\n        plotOptions: {\n            bar: {\n                columnWidth: \"20%\"\n            }\n        },\n        xaxis: {\n            categories: [\n                \"Czerwiec\",\n                \"Lipiec\",\n                \"Sierpień\",\n                \"Wrzesień\",\n                \"Październik\",\n                \"Listopad\"\n            ]\n        },\n        yaxis: [\n            {\n                seriesName: \"Zbiory (kg)\",\n                axisTicks: {\n                    show: true\n                },\n                axisBorder: {\n                    show: true,\n                    color: \"#008FFB\"\n                },\n                labels: {\n                    style: {\n                        colors: \"#008FFB\"\n                    }\n                },\n                title: {\n                    text: \"Zbiory (kg)\",\n                    style: {\n                        color: \"#008FFB\"\n                    }\n                }\n            },\n            {\n                seriesName: \"Zyski (zł)\",\n                opposite: true,\n                axisTicks: {\n                    show: true\n                },\n                axisBorder: {\n                    show: true,\n                    color: \"#00E396\"\n                },\n                labels: {\n                    style: {\n                        colors: \"#00E396\"\n                    }\n                },\n                title: {\n                    text: \"Zyski (zł)\",\n                    style: {\n                        color: \"#00E396\"\n                    }\n                }\n            }\n        ],\n        tooltip: {\n            shared: false,\n            intersect: true,\n            y: {\n                formatter: function(val, param) {\n                    let { seriesName } = param;\n                    if (seriesName === \"Sprzedane kilogramy\") {\n                        return val + \" kg\";\n                    } else if (seriesName === \"Zyski (zł)\") {\n                        return val.toLocaleString(\"pl-PL\") + \" zł\";\n                    }\n                    return val;\n                }\n            }\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"chart\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_apexcharts__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            options: options,\n            series: series,\n            type: \"line\",\n            height: 350\n        }, void 0, false, {\n            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/TradesOfPepperByMonth.tsx\",\n            lineNumber: 105,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/TradesOfPepperByMonth.tsx\",\n        lineNumber: 104,\n        columnNumber: 3\n    }, this);\n}\n_s(TradesOfPepperByMonth, \"AuuRtwJgZo9rMt+d0Q3gdvWT8EA=\");\n_c = TradesOfPepperByMonth;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TradesOfPepperByMonth);\nvar _c;\n$RefreshReg$(_c, \"TradesOfPepperByMonth\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9DaGFydHMvVHJhZGVzT2ZQZXBwZXJCeU1vbnRoLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ3VDO0FBQ007QUFRN0MsU0FBU0c7O0lBQ1IsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdKLCtDQUFRQSxDQUFjO1FBQ2pEO1lBQ0NLLE1BQU07WUFDTkMsTUFBTTtZQUNOQyxNQUFNO2dCQUFDO2dCQUFLO2dCQUFLO2dCQUFLO2dCQUFLO2dCQUFLO2FBQUk7UUFDckM7UUFDQTtZQUNDRixNQUFNO1lBQ05DLE1BQU07WUFDTkMsTUFBTTtnQkFBQztnQkFBTTtnQkFBTTtnQkFBTTtnQkFBTTtnQkFBTTthQUFLO1FBQzNDO0tBQ0E7SUFFRCxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1QsK0NBQVFBLENBQU07UUFDM0NVLE9BQU87WUFDTkMsUUFBUTtZQUNSTCxNQUFNO1lBQ05NLFNBQVM7UUFDVjtRQUNBQyxRQUFRO1lBQ1BDLE9BQU87Z0JBQUM7Z0JBQUc7YUFBRTtRQUNkO1FBQ0FDLGFBQWE7WUFDWkMsS0FBSztnQkFDSkMsYUFBYTtZQUNkO1FBQ0Q7UUFDQUMsT0FBTztZQUNOQyxZQUFZO2dCQUFDO2dCQUFZO2dCQUFVO2dCQUFZO2dCQUFZO2dCQUFlO2FBQVc7UUFDdEY7UUFDQUMsT0FBTztZQUNOO2dCQUNDQyxZQUFZO2dCQUNaQyxXQUFXO29CQUNWQyxNQUFNO2dCQUNQO2dCQUNBQyxZQUFZO29CQUNYRCxNQUFNO29CQUNORSxPQUFPO2dCQUNSO2dCQUNBQyxRQUFRO29CQUNQQyxPQUFPO3dCQUNOQyxRQUFRO29CQUNUO2dCQUNEO2dCQUNBQyxPQUFPO29CQUNOQyxNQUFNO29CQUNOSCxPQUFPO3dCQUNORixPQUFPO29CQUNSO2dCQUNEO1lBQ0Q7WUFDQTtnQkFDQ0osWUFBWTtnQkFDWlUsVUFBVTtnQkFDVlQsV0FBVztvQkFDVkMsTUFBTTtnQkFDUDtnQkFDQUMsWUFBWTtvQkFDWEQsTUFBTTtvQkFDTkUsT0FBTztnQkFDUjtnQkFDQUMsUUFBUTtvQkFDUEMsT0FBTzt3QkFDTkMsUUFBUTtvQkFDVDtnQkFDRDtnQkFDQUMsT0FBTztvQkFDTkMsTUFBTTtvQkFDTkgsT0FBTzt3QkFDTkYsT0FBTztvQkFDUjtnQkFDRDtZQUNEO1NBQ0E7UUFDRE8sU0FBUztZQUNSQyxRQUFRO1lBQ1JDLFdBQVc7WUFDWEMsR0FBRztnQkFDRkMsV0FBVyxTQUFVQyxHQUFXLEVBQUUsS0FBc0M7d0JBQXRDLEVBQUVoQixVQUFVLEVBQTBCLEdBQXRDO29CQUNqQyxJQUFJQSxlQUFlLHVCQUF1Qjt3QkFDekMsT0FBT2dCLE1BQU07b0JBQ2QsT0FBTyxJQUFJaEIsZUFBZSxjQUFjO3dCQUN2QyxPQUFPZ0IsSUFBSUMsZUFBZSxXQUFXO29CQUN0QztvQkFDQSxPQUFPRDtnQkFDUjtZQUNEO1FBQ0Q7SUFDRDtJQUVBLHFCQUNDLDhEQUFDRTtRQUFJQyxJQUFHO2tCQUNQLDRFQUFDdkMsd0RBQWNBO1lBQUNPLFNBQVNBO1lBQVNMLFFBQVFBO1lBQVFHLE1BQUs7WUFBT0ssUUFBUTs7Ozs7Ozs7Ozs7QUFHekU7R0FqR1NUO0tBQUFBO0FBbUdULCtEQUFlQSxxQkFBcUJBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGFydHMvVHJhZGVzT2ZQZXBwZXJCeU1vbnRoLnRzeD9iZTMzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RBcGV4Q2hhcnQgZnJvbSAncmVhY3QtYXBleGNoYXJ0cydcblxudHlwZSBDaGFydERhdGEgPSB7XG5cdG5hbWU6IHN0cmluZ1xuXHR0eXBlOiBzdHJpbmdcblx0ZGF0YTogbnVtYmVyW11cbn1cblxuZnVuY3Rpb24gVHJhZGVzT2ZQZXBwZXJCeU1vbnRoKCkge1xuXHRjb25zdCBbc2VyaWVzLCBzZXRTZXJpZXNdID0gdXNlU3RhdGU8Q2hhcnREYXRhW10+KFtcblx0XHR7XG5cdFx0XHRuYW1lOiAnWmJpb3J5IChrZyknLFxuXHRcdFx0dHlwZTogJ2JhcicsXG5cdFx0XHRkYXRhOiBbMTAwLCAxNTAsIDEyMCwgMTgwLCAyMDAsIDE2MF0sXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRuYW1lOiAnWnlza2kgKHrFgiknLFxuXHRcdFx0dHlwZTogJ2xpbmUnLFxuXHRcdFx0ZGF0YTogWzUwMDAsIDYwMDAsIDU1MDAsIDcwMDAsIDgwMDAsIDY1MDBdLFxuXHRcdH0sXG5cdF0pXG5cblx0Y29uc3QgW29wdGlvbnMsIHNldE9wdGlvbnNdID0gdXNlU3RhdGU8YW55Pih7XG5cdFx0Y2hhcnQ6IHtcblx0XHRcdGhlaWdodDogMzUwLFxuXHRcdFx0dHlwZTogJ2xpbmUnLFxuXHRcdFx0c3RhY2tlZDogZmFsc2UsXG5cdFx0fSxcblx0XHRzdHJva2U6IHtcblx0XHRcdHdpZHRoOiBbMCwgNF0sXG5cdFx0fSxcblx0XHRwbG90T3B0aW9uczoge1xuXHRcdFx0YmFyOiB7XG5cdFx0XHRcdGNvbHVtbldpZHRoOiAnMjAlJyxcblx0XHRcdH0sXG5cdFx0fSxcblx0XHR4YXhpczoge1xuXHRcdFx0Y2F0ZWdvcmllczogWydDemVyd2llYycsICdMaXBpZWMnLCAnU2llcnBpZcWEJywgJ1dyemVzaWXFhCcsICdQYcW6ZHppZXJuaWsnLCAnTGlzdG9wYWQnXSxcblx0XHR9LFxuXHRcdHlheGlzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdHNlcmllc05hbWU6ICdaYmlvcnkgKGtnKScsXG5cdFx0XHRcdGF4aXNUaWNrczoge1xuXHRcdFx0XHRcdHNob3c6IHRydWUsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGF4aXNCb3JkZXI6IHtcblx0XHRcdFx0XHRzaG93OiB0cnVlLFxuXHRcdFx0XHRcdGNvbG9yOiAnIzAwOEZGQicsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGxhYmVsczoge1xuXHRcdFx0XHRcdHN0eWxlOiB7XG5cdFx0XHRcdFx0XHRjb2xvcnM6ICcjMDA4RkZCJyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR0aXRsZToge1xuXHRcdFx0XHRcdHRleHQ6ICdaYmlvcnkgKGtnKScsXG5cdFx0XHRcdFx0c3R5bGU6IHtcblx0XHRcdFx0XHRcdGNvbG9yOiAnIzAwOEZGQicsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHNlcmllc05hbWU6ICdaeXNraSAoesWCKScsXG5cdFx0XHRcdG9wcG9zaXRlOiB0cnVlLFxuXHRcdFx0XHRheGlzVGlja3M6IHtcblx0XHRcdFx0XHRzaG93OiB0cnVlLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRheGlzQm9yZGVyOiB7XG5cdFx0XHRcdFx0c2hvdzogdHJ1ZSxcblx0XHRcdFx0XHRjb2xvcjogJyMwMEUzOTYnLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRsYWJlbHM6IHtcblx0XHRcdFx0XHRzdHlsZToge1xuXHRcdFx0XHRcdFx0Y29sb3JzOiAnIzAwRTM5NicsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdFx0dGl0bGU6IHtcblx0XHRcdFx0XHR0ZXh0OiAnWnlza2kgKHrFgiknLFxuXHRcdFx0XHRcdHN0eWxlOiB7XG5cdFx0XHRcdFx0XHRjb2xvcjogJyMwMEUzOTYnLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdF0sXG5cdFx0dG9vbHRpcDoge1xuXHRcdFx0c2hhcmVkOiBmYWxzZSxcblx0XHRcdGludGVyc2VjdDogdHJ1ZSxcblx0XHRcdHk6IHtcblx0XHRcdFx0Zm9ybWF0dGVyOiBmdW5jdGlvbiAodmFsOiBudW1iZXIsIHsgc2VyaWVzTmFtZSB9OiB7IHNlcmllc05hbWU6IHN0cmluZyB9KSB7XG5cdFx0XHRcdFx0aWYgKHNlcmllc05hbWUgPT09ICdTcHJ6ZWRhbmUga2lsb2dyYW15Jykge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHZhbCArICcga2cnXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChzZXJpZXNOYW1lID09PSAnWnlza2kgKHrFgiknKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdmFsLnRvTG9jYWxlU3RyaW5nKCdwbC1QTCcpICsgJyB6xYInXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiB2YWxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSxcblx0fSlcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgaWQ9J2NoYXJ0Jz5cblx0XHRcdDxSZWFjdEFwZXhDaGFydCBvcHRpb25zPXtvcHRpb25zfSBzZXJpZXM9e3Nlcmllc30gdHlwZT0nbGluZScgaGVpZ2h0PXszNTB9IC8+XG5cdFx0PC9kaXY+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJhZGVzT2ZQZXBwZXJCeU1vbnRoXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlJlYWN0QXBleENoYXJ0IiwiVHJhZGVzT2ZQZXBwZXJCeU1vbnRoIiwic2VyaWVzIiwic2V0U2VyaWVzIiwibmFtZSIsInR5cGUiLCJkYXRhIiwib3B0aW9ucyIsInNldE9wdGlvbnMiLCJjaGFydCIsImhlaWdodCIsInN0YWNrZWQiLCJzdHJva2UiLCJ3aWR0aCIsInBsb3RPcHRpb25zIiwiYmFyIiwiY29sdW1uV2lkdGgiLCJ4YXhpcyIsImNhdGVnb3JpZXMiLCJ5YXhpcyIsInNlcmllc05hbWUiLCJheGlzVGlja3MiLCJzaG93IiwiYXhpc0JvcmRlciIsImNvbG9yIiwibGFiZWxzIiwic3R5bGUiLCJjb2xvcnMiLCJ0aXRsZSIsInRleHQiLCJvcHBvc2l0ZSIsInRvb2x0aXAiLCJzaGFyZWQiLCJpbnRlcnNlY3QiLCJ5IiwiZm9ybWF0dGVyIiwidmFsIiwidG9Mb2NhbGVTdHJpbmciLCJkaXYiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/Charts/TradesOfPepperByMonth.tsx\n"));

/***/ })

});