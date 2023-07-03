"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/edit-point-of-sale/page",{

/***/ "(app-client)/./app/edit-point-of-sale/page.tsx":
/*!*****************************************!*\
  !*** ./app/edit-point-of-sale/page.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Forms_NewPointOfSaleForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Forms/NewPointOfSaleForm */ \"(app-client)/./components/Forms/NewPointOfSaleForm.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction EditPointOfSale() {\n    _s();\n    const [pointOfSale, setPointOfSale] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        address: \"\",\n        type: 0,\n        latitude: \"\",\n        longitude: \"\"\n    });\n    const [submitting, setIsSubmitting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams)();\n    const pointId = searchParams.get(\"id\");\n    const addPointOfSale = async (e)=>{};\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getPointtDetails = async ()=>{\n            const response = await fetch(\"/api/point-of-sale/\".concat(pointId));\n            const data = await response.json();\n            setPointOfSale({\n                name: data.name,\n                address: data.address,\n                type: data.type,\n                latitude: data.latitude,\n                longitude: data.name\n            });\n        };\n        if (pointId) getPointtDetails();\n    }, [\n        pointId\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"container py-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Forms_NewPointOfSaleForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                pointOfSale: pointOfSale,\n                setPointOfSale: setPointOfSale,\n                submitting: submitting,\n                handleSubmit: addPointOfSale,\n                error: error\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/edit-point-of-sale/page.tsx\",\n                lineNumber: 41,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"text-black\",\n                onClick: ()=>{\n                    console.log(pointOfSale);\n                },\n                children: \"Butonik\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/edit-point-of-sale/page.tsx\",\n                lineNumber: 48,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/edit-point-of-sale/page.tsx\",\n        lineNumber: 40,\n        columnNumber: 3\n    }, this);\n}\n_s(EditPointOfSale, \"KW++sip9esImBeSa3Aa1A87A8R0=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams\n    ];\n});\n_c = EditPointOfSale;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditPointOfSale);\nvar _c;\n$RefreshReg$(_c, \"EditPointOfSale\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2VkaXQtcG9pbnQtb2Ytc2FsZS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDc0Q7QUFDTTtBQUNTO0FBRXJFLFNBQVNLOztJQUNSLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHUCwrQ0FBUUEsQ0FBQztRQUM5Q1EsTUFBTTtRQUNOQyxTQUFTO1FBQ1RDLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxXQUFXO0lBQ1o7SUFDQSxNQUFNLENBQUNDLFlBQVlDLGdCQUFnQixHQUFHZCwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNlLE9BQU9DLFNBQVMsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU1pQixTQUFTZiwwREFBU0E7SUFDeEIsTUFBTWdCLGVBQWVmLGdFQUFlQTtJQUNwQyxNQUFNZ0IsVUFBVUQsYUFBYUUsSUFBSTtJQUVqQyxNQUFNQyxpQkFBaUIsT0FBT0MsS0FBbUM7SUFFakVyQixnREFBU0EsQ0FBQztRQUNULE1BQU1zQixtQkFBbUI7WUFDeEIsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLHNCQUE4QixPQUFSTjtZQUNuRCxNQUFNTyxPQUFPLE1BQU1GLFNBQVNHO1lBRTVCcEIsZUFBZTtnQkFDZEMsTUFBTWtCLEtBQUtsQjtnQkFDWEMsU0FBU2lCLEtBQUtqQjtnQkFDZEMsTUFBTWdCLEtBQUtoQjtnQkFDWEMsVUFBVWUsS0FBS2Y7Z0JBQ2ZDLFdBQVdjLEtBQUtsQjtZQUNqQjtRQUNEO1FBRUEsSUFBSVcsU0FBU0k7SUFDZCxHQUFHO1FBQUNKO0tBQVE7SUFFWixxQkFDQyw4REFBQ1M7UUFBUUMsV0FBVTs7MEJBQ2xCLDhEQUFDekIsNEVBQWtCQTtnQkFDbEJFLGFBQWFBO2dCQUNiQyxnQkFBZ0JBO2dCQUNoQk0sWUFBWUE7Z0JBQ1ppQixjQUFjVDtnQkFDZE4sT0FBT0E7Ozs7OzswQkFFUiw4REFBQ2dCO2dCQUNBRixXQUFVO2dCQUNWRyxTQUFTO29CQUNSQyxRQUFRQyxJQUFJNUI7Z0JBQ2I7MEJBQUc7Ozs7Ozs7Ozs7OztBQUtQO0dBbkRTRDs7UUFVT0gsc0RBQVNBO1FBQ0hDLDREQUFlQTs7O0tBWDVCRTtBQXFEVCwrREFBZUEsZUFBZUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZWRpdC1wb2ludC1vZi1zYWxlL3BhZ2UudHN4PzkxMGQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBGb3JtRXZlbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciwgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xuaW1wb3J0IE5ld1BvaW50T2ZTYWxlRm9ybSBmcm9tICdAY29tcG9uZW50cy9Gb3Jtcy9OZXdQb2ludE9mU2FsZUZvcm0nXG5cbmZ1bmN0aW9uIEVkaXRQb2ludE9mU2FsZSgpIHtcblx0Y29uc3QgW3BvaW50T2ZTYWxlLCBzZXRQb2ludE9mU2FsZV0gPSB1c2VTdGF0ZSh7XG5cdFx0bmFtZTogJycsXG5cdFx0YWRkcmVzczogJycsXG5cdFx0dHlwZTogMCxcblx0XHRsYXRpdHVkZTogJycsXG5cdFx0bG9uZ2l0dWRlOiAnJyxcblx0fSlcblx0Y29uc3QgW3N1Ym1pdHRpbmcsIHNldElzU3VibWl0dGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcblx0Y29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJylcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblx0Y29uc3Qgc2VhcmNoUGFyYW1zID0gdXNlU2VhcmNoUGFyYW1zKClcblx0Y29uc3QgcG9pbnRJZCA9IHNlYXJjaFBhcmFtcy5nZXQoJ2lkJylcblxuXHRjb25zdCBhZGRQb2ludE9mU2FsZSA9IGFzeW5jIChlOiBGb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge31cblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnN0IGdldFBvaW50dERldGFpbHMgPSBhc3luYyAoKSA9PiB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL3BvaW50LW9mLXNhbGUvJHtwb2ludElkfWApXG5cdFx0XHRjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cblx0XHRcdHNldFBvaW50T2ZTYWxlKHtcblx0XHRcdFx0bmFtZTogZGF0YS5uYW1lLFxuXHRcdFx0XHRhZGRyZXNzOiBkYXRhLmFkZHJlc3MsXG5cdFx0XHRcdHR5cGU6IGRhdGEudHlwZSxcblx0XHRcdFx0bGF0aXR1ZGU6IGRhdGEubGF0aXR1ZGUsXG5cdFx0XHRcdGxvbmdpdHVkZTogZGF0YS5uYW1lLFxuXHRcdFx0fSlcblx0XHR9XG5cblx0XHRpZiAocG9pbnRJZCkgZ2V0UG9pbnR0RGV0YWlscygpXG5cdH0sIFtwb2ludElkXSlcblxuXHRyZXR1cm4gKFxuXHRcdDxzZWN0aW9uIGNsYXNzTmFtZT0nY29udGFpbmVyIHB5LTIwJz5cblx0XHRcdDxOZXdQb2ludE9mU2FsZUZvcm1cblx0XHRcdFx0cG9pbnRPZlNhbGU9e3BvaW50T2ZTYWxlfVxuXHRcdFx0XHRzZXRQb2ludE9mU2FsZT17c2V0UG9pbnRPZlNhbGV9XG5cdFx0XHRcdHN1Ym1pdHRpbmc9e3N1Ym1pdHRpbmd9XG5cdFx0XHRcdGhhbmRsZVN1Ym1pdD17YWRkUG9pbnRPZlNhbGV9XG5cdFx0XHRcdGVycm9yPXtlcnJvcn1cblx0XHRcdC8+XG5cdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdGNsYXNzTmFtZT0ndGV4dC1ibGFjaydcblx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHBvaW50T2ZTYWxlKVxuXHRcdFx0XHR9fT5cblx0XHRcdFx0QnV0b25pa1xuXHRcdFx0PC9idXR0b24+XG5cdFx0PC9zZWN0aW9uPlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRQb2ludE9mU2FsZVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwidXNlU2VhcmNoUGFyYW1zIiwiTmV3UG9pbnRPZlNhbGVGb3JtIiwiRWRpdFBvaW50T2ZTYWxlIiwicG9pbnRPZlNhbGUiLCJzZXRQb2ludE9mU2FsZSIsIm5hbWUiLCJhZGRyZXNzIiwidHlwZSIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwic3VibWl0dGluZyIsInNldElzU3VibWl0dGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJyb3V0ZXIiLCJzZWFyY2hQYXJhbXMiLCJwb2ludElkIiwiZ2V0IiwiYWRkUG9pbnRPZlNhbGUiLCJlIiwiZ2V0UG9pbnR0RGV0YWlscyIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJoYW5kbGVTdWJtaXQiLCJidXR0b24iLCJvbkNsaWNrIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/edit-point-of-sale/page.tsx\n"));

/***/ })

});