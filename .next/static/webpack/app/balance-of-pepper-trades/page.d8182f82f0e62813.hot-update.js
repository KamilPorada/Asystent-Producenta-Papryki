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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apexcharts */ \"(app-client)/./node_modules/react-apexcharts/dist/react-apexcharts.min.js\");\n\n\n\nconst ClassesOfPepper = (param)=>{\n    let { colorWeights } = param;\n    const totalSum = Object.values(colorWeights).reduce((a, b)=>a + b, 0);\n    const seriesTemp = Object.values(colorWeights).map((weight)=>(weight / totalSum * 100).toFixed(2));\n    const series = seriesTemp.map((value)=>parseFloat(value));\n    const options = {\n        chart: {\n            height: 350,\n            type: \"radialBar\"\n        },\n        plotOptions: {\n            radialBar: {\n                dataLabels: {\n                    name: {\n                        fontSize: \"22px\"\n                    },\n                    value: {\n                        fontSize: \"16px\"\n                    },\n                    total: {\n                        show: true,\n                        label: \"Suma\",\n                        formatter: ()=>\"\".concat(totalSum, \" kg\")\n                    }\n                }\n            }\n        },\n        labels: [\n            \"Czerwona\",\n            \"ż\\xf3łta\",\n            \"zielona\",\n            \"pomarańczowa\",\n            \"blondyna\"\n        ],\n        colors: [\n            \"#FF0000\",\n            \"#FFFF00\",\n            \"#008000\",\n            \"#FFA500\",\n            \"#F5DEB3\"\n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"chart\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_apexcharts__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            options: options,\n            series: series,\n            type: \"radialBar\",\n            height: 350\n        }, void 0, false, {\n            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/ClassesOfPepper.tsx\",\n            lineNumber: 43,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/ClassesOfPepper.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ClassesOfPepper;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ClassesOfPepper);\nvar _c;\n$RefreshReg$(_c, \"ClassesOfPepper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9DaGFydHMvQ2xhc3Nlc09mUGVwcGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEI7QUFDb0I7QUFNOUMsTUFBTUUsa0JBQW1DO1FBQUMsRUFBRUMsWUFBWSxFQUFFO0lBQ3hELE1BQU1DLFdBQVdDLE9BQU9DLE9BQU9ILGNBQWNJLE9BQU8sQ0FBQ0MsR0FBR0MsSUFBTUQsSUFBSUMsR0FBRztJQUNyRSxNQUFNQyxhQUFhTCxPQUFPQyxPQUFPSCxjQUFjUSxJQUFJLENBQUNDLFNBQ2xELENBQUMsU0FBVVIsV0FBWSxHQUFFLEVBQUdTLFFBQVE7SUFFdEMsTUFBTUMsU0FBaUNKLFdBQVdDLElBQUksQ0FBQ0ksUUFBVUMsV0FBV0Q7SUFFNUUsTUFBTUUsVUFBa0M7UUFDdENDLE9BQU87WUFDTEMsUUFBUTtZQUNSQyxNQUFNO1FBQ1I7UUFDQUMsYUFBYTtZQUNYQyxXQUFXO2dCQUNUQyxZQUFZO29CQUNWQyxNQUFNO3dCQUNKQyxVQUFVO29CQUNaO29CQUNBVixPQUFPO3dCQUNMVSxVQUFVO29CQUNaO29CQUNBQyxPQUFPO3dCQUNMQyxNQUFNO3dCQUNOQyxPQUFPO3dCQUNQQyxXQUFXLElBQU0sR0FBWSxPQUFUekIsVUFBUztvQkFDL0I7Z0JBQ0Y7WUFDRjtRQUNGO1FBQ0EwQixRQUFRO1lBQUM7WUFBWTtZQUFTO1lBQVc7WUFBZ0I7U0FBVztRQUNwRUMsUUFBUTtZQUFDO1lBQVc7WUFBVztZQUFXO1lBQVc7U0FBVTtJQUNqRTtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxJQUFHO2tCQUNOLDRFQUFDaEMsd0RBQWNBO1lBQ2JnQixTQUFTQTtZQUNUSCxRQUFRQTtZQUNSTSxNQUFLO1lBQ0xELFFBQVE7Ozs7Ozs7Ozs7O0FBSWhCO0tBM0NNakI7QUE2Q04sK0RBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGFydHMvQ2xhc3Nlc09mUGVwcGVyLnRzeD85NzMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RBcGV4Q2hhcnQgZnJvbSAncmVhY3QtYXBleGNoYXJ0cyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGNvbG9yV2VpZ2h0czogeyBbY29sb3I6IG51bWJlcl06IG51bWJlciB9O1xufVxuXG5jb25zdCBDbGFzc2VzT2ZQZXBwZXI6IFJlYWN0LkZDPFByb3BzPiA9ICh7IGNvbG9yV2VpZ2h0cyB9KSA9PiB7XG4gIGNvbnN0IHRvdGFsU3VtID0gT2JqZWN0LnZhbHVlcyhjb2xvcldlaWdodHMpLnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApO1xuICBjb25zdCBzZXJpZXNUZW1wID0gT2JqZWN0LnZhbHVlcyhjb2xvcldlaWdodHMpLm1hcCgod2VpZ2h0KSA9PlxuICAgICgod2VpZ2h0IC8gdG90YWxTdW0pICogMTAwKS50b0ZpeGVkKDIpXG4gICk7XG4gIGNvbnN0IHNlcmllczogQXBleE5vbkF4aXNDaGFydFNlcmllcyA9IHNlcmllc1RlbXAubWFwKCh2YWx1ZSkgPT4gcGFyc2VGbG9hdCh2YWx1ZSkpO1xuXG4gIGNvbnN0IG9wdGlvbnM6IEFwZXhDaGFydHMuQXBleE9wdGlvbnMgPSB7XG4gICAgY2hhcnQ6IHtcbiAgICAgIGhlaWdodDogMzUwLFxuICAgICAgdHlwZTogJ3JhZGlhbEJhcicsXG4gICAgfSxcbiAgICBwbG90T3B0aW9uczoge1xuICAgICAgcmFkaWFsQmFyOiB7XG4gICAgICAgIGRhdGFMYWJlbHM6IHtcbiAgICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICBmb250U2l6ZTogJzIycHgnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0b3RhbDoge1xuICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgIGxhYmVsOiAnU3VtYScsXG4gICAgICAgICAgICBmb3JtYXR0ZXI6ICgpID0+IGAke3RvdGFsU3VtfSBrZ2AsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBsYWJlbHM6IFsnQ3plcndvbmEnLCAnxbzDs8WCdGEnLCAnemllbG9uYScsICdwb21hcmHFhGN6b3dhJywgJ2Jsb25keW5hJ10sXG4gICAgY29sb3JzOiBbJyNGRjAwMDAnLCAnI0ZGRkYwMCcsICcjMDA4MDAwJywgJyNGRkE1MDAnLCAnI0Y1REVCMyddLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD0nY2hhcnQnPlxuICAgICAgPFJlYWN0QXBleENoYXJ0XG4gICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAgIHNlcmllcz17c2VyaWVzfVxuICAgICAgICB0eXBlPSdyYWRpYWxCYXInXG4gICAgICAgIGhlaWdodD17MzUwfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENsYXNzZXNPZlBlcHBlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlJlYWN0QXBleENoYXJ0IiwiQ2xhc3Nlc09mUGVwcGVyIiwiY29sb3JXZWlnaHRzIiwidG90YWxTdW0iLCJPYmplY3QiLCJ2YWx1ZXMiLCJyZWR1Y2UiLCJhIiwiYiIsInNlcmllc1RlbXAiLCJtYXAiLCJ3ZWlnaHQiLCJ0b0ZpeGVkIiwic2VyaWVzIiwidmFsdWUiLCJwYXJzZUZsb2F0Iiwib3B0aW9ucyIsImNoYXJ0IiwiaGVpZ2h0IiwidHlwZSIsInBsb3RPcHRpb25zIiwicmFkaWFsQmFyIiwiZGF0YUxhYmVscyIsIm5hbWUiLCJmb250U2l6ZSIsInRvdGFsIiwic2hvdyIsImxhYmVsIiwiZm9ybWF0dGVyIiwibGFiZWxzIiwiY29sb3JzIiwiZGl2IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./components/Charts/ClassesOfPepper.tsx\n"));

/***/ })

});