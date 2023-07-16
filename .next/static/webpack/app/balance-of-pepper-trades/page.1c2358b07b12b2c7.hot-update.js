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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apexcharts */ \"(app-client)/./node_modules/react-apexcharts/dist/react-apexcharts.min.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction TradesOfPepperByMonth(param) {\n    let { monthlySums, monthlyWeights } = param;\n    _s();\n    const [series] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            name: \"Zyski (zł)\",\n            type: \"bar\",\n            data: monthlySums\n        },\n        {\n            name: \"Zbiory (kg)\",\n            type: \"bar\",\n            data: monthlyWeights\n        }\n    ]);\n    const [options] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        chart: {\n            type: \"line\",\n            stacked: false\n        },\n        stroke: {\n            width: [\n                0,\n                1\n            ]\n        },\n        plotOptions: {\n            bar: {\n                columnWidth: \"50%\"\n            }\n        },\n        xaxis: {\n            categories: [\n                \"Czerwiec\",\n                \"Lipiec\",\n                \"Sierpień\",\n                \"Wrzesień\",\n                \"Październik\",\n                \"Listopad\"\n            ]\n        },\n        yaxis: [\n            {\n                seriesName: \"Zyski (zł)\",\n                axisTicks: {\n                    show: true\n                },\n                axisBorder: {\n                    show: true,\n                    color: \"#262626\"\n                },\n                labels: {\n                    style: {\n                        colors: \"#262626\"\n                    }\n                },\n                title: {\n                    text: \"Zyski (zł)\",\n                    style: {\n                        color: \"#262626\"\n                    }\n                }\n            },\n            {\n                seriesName: \"Zbiory (kg)\",\n                opposite: true,\n                axisTicks: {\n                    show: true\n                },\n                axisBorder: {\n                    show: true,\n                    color: \"#262626\"\n                },\n                labels: {\n                    style: {\n                        colors: \"#262626\"\n                    }\n                },\n                title: {\n                    text: \"Zbiory (kg)\",\n                    style: {\n                        color: \"#262626\"\n                    }\n                }\n            }\n        ],\n        tooltip: {\n            shared: false,\n            intersect: true,\n            y: {\n                formatter: function(val, param) {\n                    let { seriesName } = param;\n                    if (seriesName === \"Zbiory (kg)\") {\n                        return val + \" kg\";\n                    } else if (seriesName === \"Zyski (zł)\") {\n                        return val.toLocaleString(\"pl-PL\") + \" zł\";\n                    }\n                    return val;\n                }\n            }\n        },\n        colors: [\n            \"#00b000\",\n            \"#262626\"\n        ]\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"chart\",\n        className: \"flex justify-center items-center overflow-x-auto\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_apexcharts__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            options: options,\n            series: series,\n            type: \"line\",\n            height: 300,\n            width: 600\n        }, void 0, false, {\n            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/TradesOfPepperByMonth.tsx\",\n            lineNumber: 109,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/TradesOfPepperByMonth.tsx\",\n        lineNumber: 108,\n        columnNumber: 3\n    }, this);\n}\n_s(TradesOfPepperByMonth, \"69L7Z/jr8cwENjwC3WMLceF1720=\");\n_c = TradesOfPepperByMonth;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TradesOfPepperByMonth);\nvar _c;\n$RefreshReg$(_c, \"TradesOfPepperByMonth\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9DaGFydHMvVHJhZGVzT2ZQZXBwZXJCeU1vbnRoLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXVDO0FBQ007QUFhN0MsU0FBU0csc0JBQXNCLEtBQXNDO1FBQXRDLEVBQUVDLFdBQVcsRUFBRUMsY0FBYyxFQUFTLEdBQXRDOztJQUM5QixNQUFNLENBQUNDLE9BQU8sR0FBR0wsK0NBQVFBLENBQWM7UUFDdEM7WUFDQ00sTUFBTTtZQUNOQyxNQUFNO1lBQ05DLE1BQU1MO1FBQ1A7UUFDQTtZQUNDRyxNQUFNO1lBQ05DLE1BQU07WUFDTkMsTUFBTUo7UUFDUDtLQUNBO0lBRUQsTUFBTSxDQUFDSyxRQUFRLEdBQUdULCtDQUFRQSxDQUFNO1FBQy9CVSxPQUFPO1lBQ05ILE1BQU07WUFDTkksU0FBUztRQUNWO1FBQ0FDLFFBQVE7WUFDUEMsT0FBTztnQkFBQztnQkFBRzthQUFFO1FBQ2Q7UUFDQUMsYUFBYTtZQUNaQyxLQUFLO2dCQUNKQyxhQUFhO1lBQ2Q7UUFDRDtRQUNBQyxPQUFPO1lBQ05DLFlBQVk7Z0JBQUM7Z0JBQVk7Z0JBQVU7Z0JBQVk7Z0JBQVk7Z0JBQWU7YUFBVztRQUN0RjtRQUNBQyxPQUFPO1lBQ047Z0JBQ0NDLFlBQVk7Z0JBQ1pDLFdBQVc7b0JBQ1ZDLE1BQU07Z0JBQ1A7Z0JBQ0FDLFlBQVk7b0JBQ1hELE1BQU07b0JBQ05FLE9BQU87Z0JBQ1I7Z0JBQ0FDLFFBQVE7b0JBQ1BDLE9BQU87d0JBQ05DLFFBQVE7b0JBQ1Q7Z0JBQ0Q7Z0JBQ0FDLE9BQU87b0JBQ05DLE1BQU07b0JBQ05ILE9BQU87d0JBQ05GLE9BQU87b0JBQ1I7Z0JBQ0Q7WUFDRDtZQUNBO2dCQUNDSixZQUFZO2dCQUNaVSxVQUFVO2dCQUNWVCxXQUFXO29CQUNWQyxNQUFNO2dCQUNQO2dCQUNBQyxZQUFZO29CQUNYRCxNQUFNO29CQUNORSxPQUFPO2dCQUNSO2dCQUNBQyxRQUFRO29CQUNQQyxPQUFPO3dCQUNOQyxRQUFRO29CQUNUO2dCQUNEO2dCQUNBQyxPQUFPO29CQUNOQyxNQUFNO29CQUNOSCxPQUFPO3dCQUNORixPQUFPO29CQUNSO2dCQUNEO1lBQ0Q7U0FDQTtRQUNETyxTQUFTO1lBQ1JDLFFBQVE7WUFDUkMsV0FBVztZQUNYQyxHQUFHO2dCQUNGQyxXQUFXLFNBQVVDLEdBQVcsRUFBRSxLQUFzQzt3QkFBdEMsRUFBRWhCLFVBQVUsRUFBMEIsR0FBdEM7b0JBQ2pDLElBQUlBLGVBQWUsZUFBZTt3QkFDakMsT0FBT2dCLE1BQU07b0JBQ2QsT0FBTyxJQUFJaEIsZUFBZSxjQUFjO3dCQUN2QyxPQUFPZ0IsSUFBSUMsZUFBZSxXQUFXO29CQUN0QztvQkFDQSxPQUFPRDtnQkFDUjtZQUNEO1FBQ0Q7UUFDQVQsUUFBUTtZQUFDO1lBQVc7U0FBVTtJQUMvQjtJQUVBLHFCQUNDLDhEQUFDVztRQUFJQyxJQUFHO1FBQVFDLFdBQVU7a0JBQ3pCLDRFQUFDdkMsd0RBQWNBO1lBQUNRLFNBQVNBO1lBQVNKLFFBQVFBO1lBQVFFLE1BQUs7WUFBT2tDLFFBQVE7WUFBSzVCLE9BQU87Ozs7Ozs7Ozs7O0FBR3JGO0dBakdTWDtLQUFBQTtBQW1HVCwrREFBZUEscUJBQXFCQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2hhcnRzL1RyYWRlc09mUGVwcGVyQnlNb250aC50c3g/YmUzMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdEFwZXhDaGFydCBmcm9tICdyZWFjdC1hcGV4Y2hhcnRzJ1xuXG50eXBlIENoYXJ0RGF0YSA9IHtcblx0bmFtZTogc3RyaW5nXG5cdHR5cGU6IHN0cmluZ1xuXHRkYXRhOiBudW1iZXJbXVxufVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuXHRtb250aGx5U3VtczogbnVtYmVyW11cblx0bW9udGhseVdlaWdodHM6IG51bWJlcltdXG59XG5cbmZ1bmN0aW9uIFRyYWRlc09mUGVwcGVyQnlNb250aCh7IG1vbnRobHlTdW1zLCBtb250aGx5V2VpZ2h0cyB9OiBQcm9wcykge1xuXHRjb25zdCBbc2VyaWVzXSA9IHVzZVN0YXRlPENoYXJ0RGF0YVtdPihbXG5cdFx0e1xuXHRcdFx0bmFtZTogJ1p5c2tpICh6xYIpJyxcblx0XHRcdHR5cGU6ICdiYXInLFxuXHRcdFx0ZGF0YTogbW9udGhseVN1bXMsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRuYW1lOiAnWmJpb3J5IChrZyknLFxuXHRcdFx0dHlwZTogJ2JhcicsXG5cdFx0XHRkYXRhOiBtb250aGx5V2VpZ2h0cyxcblx0XHR9LFxuXHRdKVxuXG5cdGNvbnN0IFtvcHRpb25zXSA9IHVzZVN0YXRlPGFueT4oe1xuXHRcdGNoYXJ0OiB7XG5cdFx0XHR0eXBlOiAnbGluZScsXG5cdFx0XHRzdGFja2VkOiBmYWxzZSxcblx0XHR9LFxuXHRcdHN0cm9rZToge1xuXHRcdFx0d2lkdGg6IFswLCAxXSxcblx0XHR9LFxuXHRcdHBsb3RPcHRpb25zOiB7XG5cdFx0XHRiYXI6IHtcblx0XHRcdFx0Y29sdW1uV2lkdGg6ICc1MCUnLFxuXHRcdFx0fSxcblx0XHR9LFxuXHRcdHhheGlzOiB7XG5cdFx0XHRjYXRlZ29yaWVzOiBbJ0N6ZXJ3aWVjJywgJ0xpcGllYycsICdTaWVycGllxYQnLCAnV3J6ZXNpZcWEJywgJ1Bhxbpkemllcm5paycsICdMaXN0b3BhZCddLFxuXHRcdH0sXG5cdFx0eWF4aXM6IFtcblx0XHRcdHtcblx0XHRcdFx0c2VyaWVzTmFtZTogJ1p5c2tpICh6xYIpJyxcblx0XHRcdFx0YXhpc1RpY2tzOiB7XG5cdFx0XHRcdFx0c2hvdzogdHJ1ZSxcblx0XHRcdFx0fSxcblx0XHRcdFx0YXhpc0JvcmRlcjoge1xuXHRcdFx0XHRcdHNob3c6IHRydWUsXG5cdFx0XHRcdFx0Y29sb3I6ICcjMjYyNjI2Jyxcblx0XHRcdFx0fSxcblx0XHRcdFx0bGFiZWxzOiB7XG5cdFx0XHRcdFx0c3R5bGU6IHtcblx0XHRcdFx0XHRcdGNvbG9yczogJyMyNjI2MjYnLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHRpdGxlOiB7XG5cdFx0XHRcdFx0dGV4dDogJ1p5c2tpICh6xYIpJyxcblx0XHRcdFx0XHRzdHlsZToge1xuXHRcdFx0XHRcdFx0Y29sb3I6ICcjMjYyNjI2Jyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0c2VyaWVzTmFtZTogJ1piaW9yeSAoa2cpJyxcblx0XHRcdFx0b3Bwb3NpdGU6IHRydWUsXG5cdFx0XHRcdGF4aXNUaWNrczoge1xuXHRcdFx0XHRcdHNob3c6IHRydWUsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGF4aXNCb3JkZXI6IHtcblx0XHRcdFx0XHRzaG93OiB0cnVlLFxuXHRcdFx0XHRcdGNvbG9yOiAnIzI2MjYyNicsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGxhYmVsczoge1xuXHRcdFx0XHRcdHN0eWxlOiB7XG5cdFx0XHRcdFx0XHRjb2xvcnM6ICcjMjYyNjI2Jyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR0aXRsZToge1xuXHRcdFx0XHRcdHRleHQ6ICdaYmlvcnkgKGtnKScsXG5cdFx0XHRcdFx0c3R5bGU6IHtcblx0XHRcdFx0XHRcdGNvbG9yOiAnIzI2MjYyNicsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XSxcblx0XHR0b29sdGlwOiB7XG5cdFx0XHRzaGFyZWQ6IGZhbHNlLFxuXHRcdFx0aW50ZXJzZWN0OiB0cnVlLFxuXHRcdFx0eToge1xuXHRcdFx0XHRmb3JtYXR0ZXI6IGZ1bmN0aW9uICh2YWw6IG51bWJlciwgeyBzZXJpZXNOYW1lIH06IHsgc2VyaWVzTmFtZTogc3RyaW5nIH0pIHtcblx0XHRcdFx0XHRpZiAoc2VyaWVzTmFtZSA9PT0gJ1piaW9yeSAoa2cpJykge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHZhbCArICcga2cnXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChzZXJpZXNOYW1lID09PSAnWnlza2kgKHrFgiknKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdmFsLnRvTG9jYWxlU3RyaW5nKCdwbC1QTCcpICsgJyB6xYInXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiB2YWxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRjb2xvcnM6IFsnIzAwYjAwMCcsICcjMjYyNjI2J10sXG5cdH0pXG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGlkPSdjaGFydCcgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBvdmVyZmxvdy14LWF1dG8nPlxuXHRcdFx0PFJlYWN0QXBleENoYXJ0IG9wdGlvbnM9e29wdGlvbnN9IHNlcmllcz17c2VyaWVzfSB0eXBlPSdsaW5lJyBoZWlnaHQ9ezMwMH0gd2lkdGg9ezYwMH0gLz5cblx0XHQ8L2Rpdj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmFkZXNPZlBlcHBlckJ5TW9udGhcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiUmVhY3RBcGV4Q2hhcnQiLCJUcmFkZXNPZlBlcHBlckJ5TW9udGgiLCJtb250aGx5U3VtcyIsIm1vbnRobHlXZWlnaHRzIiwic2VyaWVzIiwibmFtZSIsInR5cGUiLCJkYXRhIiwib3B0aW9ucyIsImNoYXJ0Iiwic3RhY2tlZCIsInN0cm9rZSIsIndpZHRoIiwicGxvdE9wdGlvbnMiLCJiYXIiLCJjb2x1bW5XaWR0aCIsInhheGlzIiwiY2F0ZWdvcmllcyIsInlheGlzIiwic2VyaWVzTmFtZSIsImF4aXNUaWNrcyIsInNob3ciLCJheGlzQm9yZGVyIiwiY29sb3IiLCJsYWJlbHMiLCJzdHlsZSIsImNvbG9ycyIsInRpdGxlIiwidGV4dCIsIm9wcG9zaXRlIiwidG9vbHRpcCIsInNoYXJlZCIsImludGVyc2VjdCIsInkiLCJmb3JtYXR0ZXIiLCJ2YWwiLCJ0b0xvY2FsZVN0cmluZyIsImRpdiIsImlkIiwiY2xhc3NOYW1lIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/Charts/TradesOfPepperByMonth.tsx\n"));

/***/ })

});