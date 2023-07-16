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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apexcharts */ \"(app-client)/./node_modules/react-apexcharts/dist/react-apexcharts.min.js\");\n/* harmony import */ var _components_UI_ChartArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/UI/ChartArea */ \"(app-client)/./components/UI/ChartArea.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst PepperPrices = (param)=>{\n    let { allTrades } = param;\n    _s();\n    const calculateAveragePrices = (trades)=>{\n        const monthlyPrices = [\n            0,\n            0,\n            0,\n            0,\n            0,\n            0\n        ];\n        const monthlyWeights = [\n            0,\n            0,\n            0,\n            0,\n            0,\n            0\n        ];\n        trades.forEach((trade)=>{\n            const month = new Date(trade.date).getMonth();\n            if (month >= 5 && month <= 10) {\n                monthlyPrices[month - 5] += (trade.price + trade.price * (trade.vatRate / 100)) * trade.weight;\n                monthlyWeights[month - 5] += trade.weight;\n            }\n        });\n        const averagePrices = monthlyPrices.map((price, index)=>{\n            const count = monthlyWeights[index];\n            return count > 0 ? price / count : 0;\n        });\n        return averagePrices;\n    };\n    const calculateAverageSeasonPrice = (trades)=>{\n        let totalPrice = 0;\n        let totalWeight = 0;\n        trades.forEach((trade)=>{\n            totalPrice += (trade.price + trade.price * (trade.vatRate / 100)) * trade.weight;\n            totalWeight += trade.weight;\n        });\n        return totalWeight > 0 ? totalPrice / totalWeight : 0;\n    };\n    const averagePrices = calculateAveragePrices(allTrades);\n    const averageSeasonPrice = calculateAverageSeasonPrice(allTrades);\n    const [chartData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>{\n        const options = {\n            chart: {\n                type: \"line\"\n            },\n            xaxis: {\n                categories: [\n                    \"Czerwiec\",\n                    \"Lipiec\",\n                    \"Sierpień\",\n                    \"Wrzesień\",\n                    \"Październik\",\n                    \"Listopad\"\n                ]\n            },\n            yaxis: {\n                title: {\n                    text: \"Średnia cena (zł)\"\n                },\n                labels: {\n                    formatter: (value)=>value.toFixed(2)\n                },\n                min: 0,\n                max: 8\n            },\n            stroke: {\n                curve: \"smooth\"\n            },\n            tooltip: {\n                y: {\n                    formatter: (value)=>value.toFixed(2) + \" zł\"\n                }\n            }\n        };\n        // Utwórz tablicę etykiet dla punktów danych, zawierając nazwę serii danych\n        const labels = \"Średnia cena papryki\";\n        const seriesData = [\n            {\n                data: averagePrices,\n                name: labels\n            }\n        ];\n        return {\n            series: seriesData,\n            options: options\n        };\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_ChartArea__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        className: \"w-full h-[420px]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: \"chart\",\n            className: \"h-full flex flex-col justify-start items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"font-semibold text-center\",\n                    children: \"Kształtowanie się cen papryki na przestrzeni miesięcy sezonu\"\n                }, void 0, false, {\n                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                    lineNumber: 111,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-5\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_apexcharts__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        options: chartData.options,\n                        series: chartData.series,\n                        type: \"line\",\n                        width: 500,\n                        height: 350\n                    }, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                        lineNumber: 113,\n                        columnNumber: 6\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n                    lineNumber: 112,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n            lineNumber: 110,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Charts/AveragePepperPrices.tsx\",\n        lineNumber: 109,\n        columnNumber: 3\n    }, undefined);\n};\n_s(PepperPrices, \"EcjnXEIm7z0YYAmdwZY1PJRaaUk=\");\n_c = PepperPrices;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PepperPrices);\nvar _c;\n$RefreshReg$(_c, \"PepperPrices\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9DaGFydHMvQXZlcmFnZVBlcHBlclByaWNlcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBdUM7QUFDTTtBQUNHO0FBd0JoRCxNQUFNSSxlQUFnQztRQUFDLEVBQUVDLFNBQVMsRUFBRTs7SUFDbkQsTUFBTUMseUJBQXlCLENBQUNDO1FBQy9CLE1BQU1DLGdCQUEwQjtZQUFDO1lBQUc7WUFBRztZQUFHO1lBQUc7WUFBRztTQUFFO1FBQ2xELE1BQU1DLGlCQUEyQjtZQUFDO1lBQUc7WUFBRztZQUFHO1lBQUc7WUFBRztTQUFFO1FBRW5ERixPQUFPRyxRQUFRQyxDQUFBQTtZQUNkLE1BQU1DLFFBQVEsSUFBSUMsS0FBS0YsTUFBTUcsTUFBTUM7WUFFbkMsSUFBSUgsU0FBUyxLQUFLQSxTQUFTLElBQUk7Z0JBQzlCSixhQUFhLENBQUNJLFFBQVEsRUFBRSxJQUFJLENBQUNELE1BQU1LLFFBQVFMLE1BQU1LLFFBQVNMLENBQUFBLE1BQU1NLFVBQVUsR0FBRSxDQUFDLElBQUtOLE1BQU1PO2dCQUN4RlQsY0FBYyxDQUFDRyxRQUFRLEVBQUUsSUFBSUQsTUFBTU87WUFDcEM7UUFDRDtRQUVBLE1BQU1DLGdCQUFnQlgsY0FBY1ksSUFBSSxDQUFDSixPQUFPSztZQUMvQyxNQUFNQyxRQUFRYixjQUFjLENBQUNZLE1BQU07WUFDbkMsT0FBT0MsUUFBUSxJQUFJTixRQUFRTSxRQUFRO1FBQ3BDO1FBRUEsT0FBT0g7SUFDUjtJQUVBLE1BQU1JLDhCQUE4QixDQUFDaEI7UUFDcEMsSUFBSWlCLGFBQWE7UUFDakIsSUFBSUMsY0FBYztRQUVsQmxCLE9BQU9HLFFBQVFDLENBQUFBO1lBQ2RhLGNBQWMsQ0FBQ2IsTUFBTUssUUFBUUwsTUFBTUssUUFBU0wsQ0FBQUEsTUFBTU0sVUFBVSxHQUFFLENBQUMsSUFBS04sTUFBTU87WUFDMUVPLGVBQWVkLE1BQU1PO1FBQ3RCO1FBRUEsT0FBT08sY0FBYyxJQUFJRCxhQUFhQyxjQUFjO0lBQ3JEO0lBRUEsTUFBTU4sZ0JBQWdCYix1QkFBdUJEO0lBQzdDLE1BQU1xQixxQkFBcUJILDRCQUE0QmxCO0lBRXZELE1BQU0sQ0FBQ3NCLFVBQVUsR0FBRzFCLCtDQUFRQSxDQUFvRTtRQUMvRixNQUFNMkIsVUFBa0M7WUFDdkNDLE9BQU87Z0JBQ05DLE1BQU07WUFDUDtZQUNBQyxPQUFPO2dCQUNOQyxZQUFZO29CQUFDO29CQUFZO29CQUFVO29CQUFZO29CQUFZO29CQUFlO2lCQUFXO1lBQ3RGO1lBQ0FDLE9BQU87Z0JBQ05DLE9BQU87b0JBQ05DLE1BQU07Z0JBQ1A7Z0JBQ0FDLFFBQVE7b0JBQ1BDLFdBQVcsQ0FBQ0MsUUFBa0JBLE1BQU1DLFFBQVE7Z0JBQzdDO2dCQUNBQyxLQUFLO2dCQUNMQyxLQUFLO1lBQ047WUFDQUMsUUFBUTtnQkFDUEMsT0FBTztZQUNSO1lBQ0FDLFNBQVM7Z0JBQ1JDLEdBQUc7b0JBQ0ZSLFdBQVcsQ0FBQ0MsUUFBa0JBLE1BQU1DLFFBQVEsS0FBSztnQkFDbEQ7WUFDRDtRQUNEO1FBRUEsMkVBQTJFO1FBQzNFLE1BQU1ILFNBQVM7UUFFZixNQUFNVSxhQUFhO1lBQ2xCO2dCQUNDQyxNQUFNNUI7Z0JBQ042QixNQUFNWjtZQUNQO1NBQ0E7UUFFRCxPQUFPO1lBQ05hLFFBQVFIO1lBQ1JsQixTQUFTQTtRQUNWO0lBQ0Q7SUFFQSxxQkFDQyw4REFBQ3pCLGdFQUFTQTtRQUFDK0MsV0FBVTtrQkFDcEIsNEVBQUNDO1lBQUlDLElBQUc7WUFBUUYsV0FBVTs7OEJBQ3pCLDhEQUFDRztvQkFBRUgsV0FBVTs4QkFBNEI7Ozs7Ozs4QkFDekMsOERBQUNDO29CQUFJRCxXQUFVOzhCQUNkLDRFQUFDaEQsd0RBQWNBO3dCQUFDMEIsU0FBU0QsVUFBVUM7d0JBQVNxQixRQUFRdEIsVUFBVXNCO3dCQUFRbkIsTUFBSzt3QkFBT3dCLE9BQU87d0JBQUtDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLM0c7R0EzRk1uRDtLQUFBQTtBQTZGTiwrREFBZUEsWUFBWUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NoYXJ0cy9BdmVyYWdlUGVwcGVyUHJpY2VzLnRzeD80NTg4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0QXBleENoYXJ0IGZyb20gJ3JlYWN0LWFwZXhjaGFydHMnXG5pbXBvcnQgQ2hhcnRBcmVhIGZyb20gJ0Bjb21wb25lbnRzL1VJL0NoYXJ0QXJlYSdcblxuaW50ZXJmYWNlIFRyYWRlT2ZQZXBwZXIge1xuXHRfaWQ6IHN0cmluZ1xuXHRjcmVhdG9yOiB7XG5cdFx0X2lkOiBzdHJpbmdcblx0XHRlbWFpbDogc3RyaW5nXG5cdFx0dXNlcm5hbWU6IHN0cmluZ1xuXHRcdGltYWdlOiBzdHJpbmdcblx0fVxuXHRwb2ludE9mU2FsZUlkOiBzdHJpbmdcblx0ZGF0ZTogc3RyaW5nXG5cdGNsYXM6IG51bWJlclxuXHRjb2xvcjogbnVtYmVyXG5cdHByaWNlOiBudW1iZXJcblx0d2VpZ2h0OiBudW1iZXJcblx0dmF0UmF0ZTogbnVtYmVyXG5cdHRvdGFsU3VtOiBudW1iZXJcbn1cblxuaW50ZXJmYWNlIFByb3BzIHtcblx0YWxsVHJhZGVzOiBUcmFkZU9mUGVwcGVyW11cbn1cblxuY29uc3QgUGVwcGVyUHJpY2VzOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBhbGxUcmFkZXMgfSkgPT4ge1xuXHRjb25zdCBjYWxjdWxhdGVBdmVyYWdlUHJpY2VzID0gKHRyYWRlczogVHJhZGVPZlBlcHBlcltdKSA9PiB7XG5cdFx0Y29uc3QgbW9udGhseVByaWNlczogbnVtYmVyW10gPSBbMCwgMCwgMCwgMCwgMCwgMF1cblx0XHRjb25zdCBtb250aGx5V2VpZ2h0czogbnVtYmVyW10gPSBbMCwgMCwgMCwgMCwgMCwgMF1cblxuXHRcdHRyYWRlcy5mb3JFYWNoKHRyYWRlID0+IHtcblx0XHRcdGNvbnN0IG1vbnRoID0gbmV3IERhdGUodHJhZGUuZGF0ZSkuZ2V0TW9udGgoKVxuXG5cdFx0XHRpZiAobW9udGggPj0gNSAmJiBtb250aCA8PSAxMCkge1xuXHRcdFx0XHRtb250aGx5UHJpY2VzW21vbnRoIC0gNV0gKz0gKHRyYWRlLnByaWNlICsgdHJhZGUucHJpY2UgKiAodHJhZGUudmF0UmF0ZSAvIDEwMCkpICogdHJhZGUud2VpZ2h0XG5cdFx0XHRcdG1vbnRobHlXZWlnaHRzW21vbnRoIC0gNV0gKz0gdHJhZGUud2VpZ2h0XG5cdFx0XHR9XG5cdFx0fSlcblxuXHRcdGNvbnN0IGF2ZXJhZ2VQcmljZXMgPSBtb250aGx5UHJpY2VzLm1hcCgocHJpY2UsIGluZGV4KSA9PiB7XG5cdFx0XHRjb25zdCBjb3VudCA9IG1vbnRobHlXZWlnaHRzW2luZGV4XVxuXHRcdFx0cmV0dXJuIGNvdW50ID4gMCA/IHByaWNlIC8gY291bnQgOiAwXG5cdFx0fSlcblxuXHRcdHJldHVybiBhdmVyYWdlUHJpY2VzXG5cdH1cblxuXHRjb25zdCBjYWxjdWxhdGVBdmVyYWdlU2Vhc29uUHJpY2UgPSAodHJhZGVzOiBUcmFkZU9mUGVwcGVyW10pOiBudW1iZXIgPT4ge1xuXHRcdGxldCB0b3RhbFByaWNlID0gMFxuXHRcdGxldCB0b3RhbFdlaWdodCA9IDBcblxuXHRcdHRyYWRlcy5mb3JFYWNoKHRyYWRlID0+IHtcblx0XHRcdHRvdGFsUHJpY2UgKz0gKHRyYWRlLnByaWNlICsgdHJhZGUucHJpY2UgKiAodHJhZGUudmF0UmF0ZSAvIDEwMCkpICogdHJhZGUud2VpZ2h0XG5cdFx0XHR0b3RhbFdlaWdodCArPSB0cmFkZS53ZWlnaHRcblx0XHR9KVxuXG5cdFx0cmV0dXJuIHRvdGFsV2VpZ2h0ID4gMCA/IHRvdGFsUHJpY2UgLyB0b3RhbFdlaWdodCA6IDBcblx0fVxuXG5cdGNvbnN0IGF2ZXJhZ2VQcmljZXMgPSBjYWxjdWxhdGVBdmVyYWdlUHJpY2VzKGFsbFRyYWRlcylcblx0Y29uc3QgYXZlcmFnZVNlYXNvblByaWNlID0gY2FsY3VsYXRlQXZlcmFnZVNlYXNvblByaWNlKGFsbFRyYWRlcylcblxuXHRjb25zdCBbY2hhcnREYXRhXSA9IHVzZVN0YXRlPHsgc2VyaWVzOiB7IGRhdGE6IG51bWJlcltdIH1bXTsgb3B0aW9uczogQXBleENoYXJ0cy5BcGV4T3B0aW9ucyB9PigoKSA9PiB7XG5cdFx0Y29uc3Qgb3B0aW9uczogQXBleENoYXJ0cy5BcGV4T3B0aW9ucyA9IHtcblx0XHRcdGNoYXJ0OiB7XG5cdFx0XHRcdHR5cGU6ICdsaW5lJyxcblx0XHRcdH0sXG5cdFx0XHR4YXhpczoge1xuXHRcdFx0XHRjYXRlZ29yaWVzOiBbJ0N6ZXJ3aWVjJywgJ0xpcGllYycsICdTaWVycGllxYQnLCAnV3J6ZXNpZcWEJywgJ1Bhxbpkemllcm5paycsICdMaXN0b3BhZCddLFxuXHRcdFx0fSxcblx0XHRcdHlheGlzOiB7XG5cdFx0XHRcdHRpdGxlOiB7XG5cdFx0XHRcdFx0dGV4dDogJ8WacmVkbmlhIGNlbmEgKHrFgiknLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRsYWJlbHM6IHtcblx0XHRcdFx0XHRmb3JtYXR0ZXI6ICh2YWx1ZTogbnVtYmVyKSA9PiB2YWx1ZS50b0ZpeGVkKDIpLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRtaW46IDAsXG5cdFx0XHRcdG1heDogOCxcblx0XHRcdH0sXG5cdFx0XHRzdHJva2U6IHtcblx0XHRcdFx0Y3VydmU6ICdzbW9vdGgnLFxuXHRcdFx0fSxcblx0XHRcdHRvb2x0aXA6IHtcblx0XHRcdFx0eToge1xuXHRcdFx0XHRcdGZvcm1hdHRlcjogKHZhbHVlOiBudW1iZXIpID0+IHZhbHVlLnRvRml4ZWQoMikgKyAnIHrFgicsXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH1cblxuXHRcdC8vIFV0d8OzcnogdGFibGljxJkgZXR5a2lldCBkbGEgcHVua3TDs3cgZGFueWNoLCB6YXdpZXJhasSFYyBuYXp3xJkgc2VyaWkgZGFueWNoXG5cdFx0Y29uc3QgbGFiZWxzID0gJ8WacmVkbmlhIGNlbmEgcGFwcnlraSdcblxuXHRcdGNvbnN0IHNlcmllc0RhdGEgPSBbXG5cdFx0XHR7XG5cdFx0XHRcdGRhdGE6IGF2ZXJhZ2VQcmljZXMsXG5cdFx0XHRcdG5hbWU6IGxhYmVscyxcblx0XHRcdH0sXG5cdFx0XVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHNlcmllczogc2VyaWVzRGF0YSxcblx0XHRcdG9wdGlvbnM6IG9wdGlvbnMsXG5cdFx0fVxuXHR9KVxuXG5cdHJldHVybiAoXG5cdFx0PENoYXJ0QXJlYSBjbGFzc05hbWU9J3ctZnVsbCBoLVs0MjBweF0nPlxuXHRcdFx0PGRpdiBpZD0nY2hhcnQnIGNsYXNzTmFtZT0naC1mdWxsIGZsZXggZmxleC1jb2wganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXInPlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9J2ZvbnQtc2VtaWJvbGQgdGV4dC1jZW50ZXInPktzenRhxYJ0b3dhbmllIHNpxJkgY2VuIHBhcHJ5a2kgbmEgcHJ6ZXN0cnplbmkgbWllc2nEmWN5IHNlem9udTwvcD5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J210LTUnPlxuXHRcdFx0XHRcdDxSZWFjdEFwZXhDaGFydCBvcHRpb25zPXtjaGFydERhdGEub3B0aW9uc30gc2VyaWVzPXtjaGFydERhdGEuc2VyaWVzfSB0eXBlPSdsaW5lJyB3aWR0aD17NTAwfSBoZWlnaHQ9ezM1MH0gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L0NoYXJ0QXJlYT5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBQZXBwZXJQcmljZXNcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiUmVhY3RBcGV4Q2hhcnQiLCJDaGFydEFyZWEiLCJQZXBwZXJQcmljZXMiLCJhbGxUcmFkZXMiLCJjYWxjdWxhdGVBdmVyYWdlUHJpY2VzIiwidHJhZGVzIiwibW9udGhseVByaWNlcyIsIm1vbnRobHlXZWlnaHRzIiwiZm9yRWFjaCIsInRyYWRlIiwibW9udGgiLCJEYXRlIiwiZGF0ZSIsImdldE1vbnRoIiwicHJpY2UiLCJ2YXRSYXRlIiwid2VpZ2h0IiwiYXZlcmFnZVByaWNlcyIsIm1hcCIsImluZGV4IiwiY291bnQiLCJjYWxjdWxhdGVBdmVyYWdlU2Vhc29uUHJpY2UiLCJ0b3RhbFByaWNlIiwidG90YWxXZWlnaHQiLCJhdmVyYWdlU2Vhc29uUHJpY2UiLCJjaGFydERhdGEiLCJvcHRpb25zIiwiY2hhcnQiLCJ0eXBlIiwieGF4aXMiLCJjYXRlZ29yaWVzIiwieWF4aXMiLCJ0aXRsZSIsInRleHQiLCJsYWJlbHMiLCJmb3JtYXR0ZXIiLCJ2YWx1ZSIsInRvRml4ZWQiLCJtaW4iLCJtYXgiLCJzdHJva2UiLCJjdXJ2ZSIsInRvb2x0aXAiLCJ5Iiwic2VyaWVzRGF0YSIsImRhdGEiLCJuYW1lIiwic2VyaWVzIiwiY2xhc3NOYW1lIiwiZGl2IiwiaWQiLCJwIiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./components/Charts/AveragePepperPrices.tsx\n"));

/***/ })

});