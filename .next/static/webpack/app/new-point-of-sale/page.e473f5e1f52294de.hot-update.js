"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/new-point-of-sale/page",{

/***/ "(app-client)/./app/new-point-of-sale/page.tsx":
/*!****************************************!*\
  !*** ./app/new-point-of-sale/page.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-client)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Forms_NewPointOfSaleForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Forms/NewPointOfSaleForm */ \"(app-client)/./components/Forms/NewPointOfSaleForm.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Page() {\n    var _ref;\n    _s();\n    const [pointOfSale, setPointOfSale] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        address: \"\",\n        type: 0,\n        latitude: \"\",\n        longitude: \"\"\n    });\n    const [submitting, setIsSubmitting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    var _id;\n    const userId = (_id = (_ref = session === null || session === void 0 ? void 0 : session.user) === null || _ref === void 0 ? void 0 : _ref.id) !== null && _id !== void 0 ? _id : \"\";\n    const addPointOfSale = async (e)=>{\n        e.preventDefault();\n        setIsSubmitting(true);\n        if (!pointOfSale.name || !pointOfSale.address || !pointOfSale.type || !pointOfSale.latitude || !pointOfSale.longitude) {\n            setError(\"Wypełnij wszystkie pola formularza!\");\n            setIsSubmitting(false);\n            return;\n        }\n        try {\n            const response = await fetch(\"/api/point-of-sale/new\", {\n                method: \"POST\",\n                body: JSON.stringify({\n                    userId: userId,\n                    name: pointOfSale.name,\n                    address: pointOfSale.address,\n                    type: pointOfSale.type,\n                    latitude: pointOfSale.latitude,\n                    longitude: pointOfSale.longitude\n                })\n            });\n            setError(\"\");\n            if (response.ok) {\n                router.push(\"/\");\n            } else {\n                throw new Error(\"Błąd podczas dodawania punktu sprzedaży\");\n            }\n        } catch (error) {\n            console.log(error);\n        } finally{\n            setIsSubmitting(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"container py-20\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Forms_NewPointOfSaleForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            type: \"ADD\",\n            pointOfSale: pointOfSale,\n            setPointOfSale: setPointOfSale,\n            submitting: submitting,\n            handleSubmit: addPointOfSale,\n            error: error\n        }, void 0, false, {\n            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/new-point-of-sale/page.tsx\",\n            lineNumber: 64,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/new-point-of-sale/page.tsx\",\n        lineNumber: 63,\n        columnNumber: 3\n    }, this);\n}\n_s(Page, \"6tSCt5cLgAIRXuVzP/QwKTIwEPY=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL25ldy1wb2ludC1vZi1zYWxlL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQzBDO0FBQ0U7QUFDRDtBQUMwQjtBQUVyRSxTQUFTSTtRQVlPOztJQVhmLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHTiwrQ0FBUUEsQ0FBQztRQUM5Q08sTUFBTTtRQUNOQyxTQUFTO1FBQ1RDLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxXQUFXO0lBQ1o7SUFDQSxNQUFNLENBQUNDLFlBQVlDLGdCQUFnQixHQUFHYiwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNjLE9BQU9DLFNBQVMsR0FBR2YsK0NBQVFBLENBQUM7SUFDbkMsTUFBTWdCLFNBQVNkLDBEQUFTQTtJQUN4QixNQUFNLEVBQUVlLE1BQU1DLE9BQU8sRUFBRSxHQUFHakIsMkRBQVVBO1FBQ3JCO0lBQWYsTUFBTWtCLFNBQVMsZUFBQ0Qsb0JBQUFBLHFCQUFBQSxLQUFBQSxJQUFBQSxRQUFTRSxrQkFBVixnQ0FBb0NDLGdCQUFwQyx1QkFBMEM7SUFFekQsTUFBTUMsaUJBQWlCLE9BQU9DO1FBQzdCQSxFQUFFQztRQUNGWCxnQkFBZ0I7UUFFaEIsSUFDQyxDQUFDUixZQUFZRSxRQUNiLENBQUNGLFlBQVlHLFdBQ2IsQ0FBQ0gsWUFBWUksUUFDYixDQUFDSixZQUFZSyxZQUNiLENBQUNMLFlBQVlNLFdBQ1o7WUFDREksU0FBUztZQUNURixnQkFBZ0I7WUFDaEI7UUFDRDtRQUVBLElBQUk7WUFDSCxNQUFNWSxXQUFXLE1BQU1DLE1BQU0sMEJBQTBCO2dCQUN0REMsUUFBUTtnQkFDUkMsTUFBTUMsS0FBS0MsVUFBVTtvQkFDcEJYLFFBQVFBO29CQUNSWixNQUFNRixZQUFZRTtvQkFDbEJDLFNBQVNILFlBQVlHO29CQUNyQkMsTUFBTUosWUFBWUk7b0JBQ2xCQyxVQUFVTCxZQUFZSztvQkFDdEJDLFdBQVdOLFlBQVlNO2dCQUN4QjtZQUNEO1lBQ0FJLFNBQVM7WUFDVCxJQUFJVSxTQUFTTSxJQUFJO2dCQUNoQmYsT0FBT2dCLEtBQUs7WUFDYixPQUFPO2dCQUNOLE1BQU0sSUFBSUMsTUFBTTtZQUNqQjtRQUNELEVBQUUsT0FBT25CLE9BQU87WUFDZm9CLFFBQVFDLElBQUlyQjtRQUNiLFNBQVU7WUFDVEQsZ0JBQWdCO1FBQ2pCO0lBQ0Q7SUFFQSxxQkFDQyw4REFBQ3VCO1FBQVFDLFdBQVU7a0JBQ2xCLDRFQUFDbEMsNEVBQWtCQTtZQUNsQk0sTUFBSztZQUNMSixhQUFhQTtZQUNiQyxnQkFBZ0JBO1lBQ2hCTSxZQUFZQTtZQUNaMEIsY0FBY2hCO1lBQ2RSLE9BQU9BOzs7Ozs7Ozs7OztBQUlYO0dBbkVTVjs7UUFVT0Ysc0RBQVNBO1FBQ0VELHVEQUFVQTs7O0tBWDVCRztBQXFFVCwrREFBZUEsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvbmV3LXBvaW50LW9mLXNhbGUvcGFnZS50c3g/MzhjYyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB7IHVzZVN0YXRlLCBGb3JtRXZlbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbidcbmltcG9ydCBOZXdQb2ludE9mU2FsZUZvcm0gZnJvbSAnQGNvbXBvbmVudHMvRm9ybXMvTmV3UG9pbnRPZlNhbGVGb3JtJ1xuXG5mdW5jdGlvbiBQYWdlKCkge1xuXHRjb25zdCBbcG9pbnRPZlNhbGUsIHNldFBvaW50T2ZTYWxlXSA9IHVzZVN0YXRlKHtcblx0XHRuYW1lOiAnJyxcblx0XHRhZGRyZXNzOiAnJyxcblx0XHR0eXBlOiAwLFxuXHRcdGxhdGl0dWRlOiAnJyxcblx0XHRsb25naXR1ZGU6ICcnLFxuXHR9KVxuXHRjb25zdCBbc3VibWl0dGluZywgc2V0SXNTdWJtaXR0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuXHRjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKVxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXHRjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKVxuXHRjb25zdCB1c2VySWQgPSAoc2Vzc2lvbj8udXNlciBhcyB7IGlkPzogc3RyaW5nIH0pPy5pZCA/PyAnJ1xuXG5cdGNvbnN0IGFkZFBvaW50T2ZTYWxlID0gYXN5bmMgKGU6IEZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0c2V0SXNTdWJtaXR0aW5nKHRydWUpXG5cblx0XHRpZiAoXG5cdFx0XHQhcG9pbnRPZlNhbGUubmFtZSB8fFxuXHRcdFx0IXBvaW50T2ZTYWxlLmFkZHJlc3MgfHxcblx0XHRcdCFwb2ludE9mU2FsZS50eXBlIHx8XG5cdFx0XHQhcG9pbnRPZlNhbGUubGF0aXR1ZGUgfHxcblx0XHRcdCFwb2ludE9mU2FsZS5sb25naXR1ZGVcblx0XHQpIHtcblx0XHRcdHNldEVycm9yKCdXeXBlxYJuaWogd3N6eXN0a2llIHBvbGEgZm9ybXVsYXJ6YSEnKVxuXHRcdFx0c2V0SXNTdWJtaXR0aW5nKGZhbHNlKVxuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvcG9pbnQtb2Ytc2FsZS9uZXcnLCB7XG5cdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdFx0dXNlcklkOiB1c2VySWQsXG5cdFx0XHRcdFx0bmFtZTogcG9pbnRPZlNhbGUubmFtZSxcblx0XHRcdFx0XHRhZGRyZXNzOiBwb2ludE9mU2FsZS5hZGRyZXNzLFxuXHRcdFx0XHRcdHR5cGU6IHBvaW50T2ZTYWxlLnR5cGUsXG5cdFx0XHRcdFx0bGF0aXR1ZGU6IHBvaW50T2ZTYWxlLmxhdGl0dWRlLFxuXHRcdFx0XHRcdGxvbmdpdHVkZTogcG9pbnRPZlNhbGUubG9uZ2l0dWRlLFxuXHRcdFx0XHR9KSxcblx0XHRcdH0pXG5cdFx0XHRzZXRFcnJvcignJylcblx0XHRcdGlmIChyZXNwb25zZS5vaykge1xuXHRcdFx0XHRyb3V0ZXIucHVzaCgnLycpXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0LFgsSFZCBwb2RjemFzIGRvZGF3YW5pYSBwdW5rdHUgc3ByemVkYcW8eScpXG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUubG9nKGVycm9yKVxuXHRcdH0gZmluYWxseSB7XG5cdFx0XHRzZXRJc1N1Ym1pdHRpbmcoZmFsc2UpXG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9J2NvbnRhaW5lciBweS0yMCc+XG5cdFx0XHQ8TmV3UG9pbnRPZlNhbGVGb3JtXG5cdFx0XHRcdHR5cGU9J0FERCdcblx0XHRcdFx0cG9pbnRPZlNhbGU9e3BvaW50T2ZTYWxlfVxuXHRcdFx0XHRzZXRQb2ludE9mU2FsZT17c2V0UG9pbnRPZlNhbGV9XG5cdFx0XHRcdHN1Ym1pdHRpbmc9e3N1Ym1pdHRpbmd9XG5cdFx0XHRcdGhhbmRsZVN1Ym1pdD17YWRkUG9pbnRPZlNhbGV9XG5cdFx0XHRcdGVycm9yPXtlcnJvcn1cblx0XHRcdC8+XG5cdFx0PC9zZWN0aW9uPlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVNlc3Npb24iLCJ1c2VSb3V0ZXIiLCJOZXdQb2ludE9mU2FsZUZvcm0iLCJQYWdlIiwicG9pbnRPZlNhbGUiLCJzZXRQb2ludE9mU2FsZSIsIm5hbWUiLCJhZGRyZXNzIiwidHlwZSIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwic3VibWl0dGluZyIsInNldElzU3VibWl0dGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJyb3V0ZXIiLCJkYXRhIiwic2Vzc2lvbiIsInVzZXJJZCIsInVzZXIiLCJpZCIsImFkZFBvaW50T2ZTYWxlIiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJwdXNoIiwiRXJyb3IiLCJjb25zb2xlIiwibG9nIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImhhbmRsZVN1Ym1pdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/new-point-of-sale/page.tsx\n"));

/***/ })

});