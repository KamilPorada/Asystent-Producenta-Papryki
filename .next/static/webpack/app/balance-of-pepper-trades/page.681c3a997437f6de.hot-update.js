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

/***/ "(app-client)/./components/Charts/ClassesOfPepper.tsx":
/*!***********************************************!*\
  !*** ./components/Charts/ClassesOfPepper.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apexcharts */ \"(app-client)/./node_modules/react-apexcharts/dist/react-apexcharts.min.js\");\n\n\n\nconst ClassesOfPepper = (param)=>{\n    let { colorWeights } = param;\n    const series = Object.values(colorWeights);\n    const totalSum = series.reduce((a, b)=>a + b, 0);\n    const options = {\n        chart: {\n            height: 350,\n            type: \"radialBar\"\n        },\n        plotOptions: {\n            radialBar: {\n                dataLabels: {\n                    name: {\n                        fontSize: \"22px\"\n                    },\n                    value: {\n                        fontSize: \"16px\"\n                    },\n                    total: {\n                        show: true,\n                        label: \"Total\",\n                        formatter: ()=>totalSum.toString() + \"k g\"\n                    }\n                }\n            }\n        },\n        labels: Object.keys(colorWeights).map((color)=>\"Kolor \".concat(color))\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"chart\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_apexcharts__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            options: options,\n            series: series,\n            type: \"radialBar\",\n            height: 350\n        }, void 0, false, {\n            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/ClassesOfPepper.tsx\",\n            lineNumber: 40,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/ClassesOfPepper.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ClassesOfPepper;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ClassesOfPepper);\nvar _c;\n$RefreshReg$(_c, \"ClassesOfPepper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9DaGFydHMvQ2xhc3Nlc09mUGVwcGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEI7QUFDb0I7QUFNOUMsTUFBTUUsa0JBQW1DO1FBQUMsRUFBRUMsWUFBWSxFQUFFO0lBQ3hELE1BQU1DLFNBQVNDLE9BQU9DLE9BQU9IO0lBRTdCLE1BQU1JLFdBQVdILE9BQU9JLE9BQU8sQ0FBQ0MsR0FBR0MsSUFBTUQsSUFBSUMsR0FBRztJQUVoRCxNQUFNQyxVQUFrQztRQUN0Q0MsT0FBTztZQUNMQyxRQUFRO1lBQ1JDLE1BQU07UUFDUjtRQUNBQyxhQUFhO1lBQ1hDLFdBQVc7Z0JBQ1RDLFlBQVk7b0JBQ1ZDLE1BQU07d0JBQ0pDLFVBQVU7b0JBQ1o7b0JBQ0FDLE9BQU87d0JBQ0xELFVBQVU7b0JBQ1o7b0JBQ0FFLE9BQU87d0JBQ0xDLE1BQU07d0JBQ05DLE9BQU87d0JBQ1BDLFdBQVcsSUFBTWpCLFNBQVNrQixhQUFhO29CQUN6QztnQkFDRjtZQUNGO1FBQ0Y7UUFDQUMsUUFBUXJCLE9BQU9zQixLQUFLeEIsY0FBY3lCLElBQUksQ0FBQ0MsUUFBVSxTQUFlLE9BQU5BO0lBQzVEO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLElBQUc7a0JBQ04sNEVBQUM5Qix3REFBY0E7WUFDYlUsU0FBU0E7WUFDVFAsUUFBUUE7WUFDUlUsTUFBSztZQUNMRCxRQUFROzs7Ozs7Ozs7OztBQUloQjtLQXhDTVg7QUEwQ04sK0RBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGFydHMvQ2xhc3Nlc09mUGVwcGVyLnRzeD85NzMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RBcGV4Q2hhcnQgZnJvbSAncmVhY3QtYXBleGNoYXJ0cyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGNvbG9yV2VpZ2h0czogeyBbY29sb3I6IG51bWJlcl06IG51bWJlciB9O1xufVxuXG5jb25zdCBDbGFzc2VzT2ZQZXBwZXI6IFJlYWN0LkZDPFByb3BzPiA9ICh7IGNvbG9yV2VpZ2h0cyB9KSA9PiB7XG4gIGNvbnN0IHNlcmllcyA9IE9iamVjdC52YWx1ZXMoY29sb3JXZWlnaHRzKTtcblxuICBjb25zdCB0b3RhbFN1bSA9IHNlcmllcy5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKTtcblxuICBjb25zdCBvcHRpb25zOiBBcGV4Q2hhcnRzLkFwZXhPcHRpb25zID0ge1xuICAgIGNoYXJ0OiB7XG4gICAgICBoZWlnaHQ6IDM1MCxcbiAgICAgIHR5cGU6ICdyYWRpYWxCYXInLFxuICAgIH0sXG4gICAgcGxvdE9wdGlvbnM6IHtcbiAgICAgIHJhZGlhbEJhcjoge1xuICAgICAgICBkYXRhTGFiZWxzOiB7XG4gICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgZm9udFNpemU6ICcyMnB4JyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgdG90YWw6IHtcbiAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICBsYWJlbDogJ1RvdGFsJyxcbiAgICAgICAgICAgIGZvcm1hdHRlcjogKCkgPT4gdG90YWxTdW0udG9TdHJpbmcoKSArICdrIGcnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgbGFiZWxzOiBPYmplY3Qua2V5cyhjb2xvcldlaWdodHMpLm1hcCgoY29sb3IpID0+IGBLb2xvciAke2NvbG9yfWApLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD0nY2hhcnQnPlxuICAgICAgPFJlYWN0QXBleENoYXJ0XG4gICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAgIHNlcmllcz17c2VyaWVzfVxuICAgICAgICB0eXBlPSdyYWRpYWxCYXInXG4gICAgICAgIGhlaWdodD17MzUwfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENsYXNzZXNPZlBlcHBlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlJlYWN0QXBleENoYXJ0IiwiQ2xhc3Nlc09mUGVwcGVyIiwiY29sb3JXZWlnaHRzIiwic2VyaWVzIiwiT2JqZWN0IiwidmFsdWVzIiwidG90YWxTdW0iLCJyZWR1Y2UiLCJhIiwiYiIsIm9wdGlvbnMiLCJjaGFydCIsImhlaWdodCIsInR5cGUiLCJwbG90T3B0aW9ucyIsInJhZGlhbEJhciIsImRhdGFMYWJlbHMiLCJuYW1lIiwiZm9udFNpemUiLCJ2YWx1ZSIsInRvdGFsIiwic2hvdyIsImxhYmVsIiwiZm9ybWF0dGVyIiwidG9TdHJpbmciLCJsYWJlbHMiLCJrZXlzIiwibWFwIiwiY29sb3IiLCJkaXYiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/Charts/ClassesOfPepper.tsx\n"));

/***/ })

});