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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Forms_PointOfSaleForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Forms/PointOfSaleForm */ \"(app-client)/./components/Forms/PointOfSaleForm.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction EditPointOfSale() {\n    _s();\n    const [pointOfSale, setPointOfSale] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        address: \"\",\n        type: 0,\n        latitude: \"\",\n        longitude: \"\"\n    });\n    const [submitting, setIsSubmitting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams)();\n    const pointId = searchParams.get(\"id\");\n    const addPointOfSale = async (e)=>{\n        e.preventDefault();\n        setIsSubmitting(true);\n        if (!pointOfSale.name || !pointOfSale.address || !pointOfSale.type || !pointOfSale.latitude || !pointOfSale.longitude) {\n            setError(\"Wypełnij wszystkie pola formularza!\");\n            setIsSubmitting(false);\n            return;\n        }\n        try {\n            const response = await fetch(\"/api/point-of-sale/new\", {\n                method: \"POST\",\n                body: JSON.stringify({\n                    userId: userId,\n                    name: pointOfSale.name,\n                    address: pointOfSale.address,\n                    type: pointOfSale.type,\n                    latitude: pointOfSale.latitude,\n                    longitude: pointOfSale.longitude\n                })\n            });\n            setError(\"\");\n            if (response.ok) {\n                router.push(\"/\");\n            } else {\n                throw new Error(\"Błąd podczas dodawania punktu sprzedaży\");\n            }\n        } catch (error) {\n            console.log(error);\n        } finally{\n            setIsSubmitting(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getPointtDetails = async ()=>{\n            const response = await fetch(\"/api/point-of-sale/\".concat(pointId));\n            const data = await response.json();\n            setPointOfSale({\n                name: data.name,\n                address: data.address,\n                type: data.type,\n                latitude: data.latitude,\n                longitude: data.longitude\n            });\n        };\n        if (pointId) getPointtDetails();\n    }, [\n        pointId\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"container py-20\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Forms_PointOfSaleForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            type: \"EDIT\",\n            pointOfSale: pointOfSale,\n            setPointOfSale: setPointOfSale,\n            submitting: submitting,\n            handleSubmit: addPointOfSale,\n            error: error\n        }, void 0, false, {\n            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/edit-point-of-sale/page.tsx\",\n            lineNumber: 80,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/edit-point-of-sale/page.tsx\",\n        lineNumber: 79,\n        columnNumber: 3\n    }, this);\n}\n_s(EditPointOfSale, \"KW++sip9esImBeSa3Aa1A87A8R0=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams\n    ];\n});\n_c = EditPointOfSale;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditPointOfSale);\nvar _c;\n$RefreshReg$(_c, \"EditPointOfSale\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2VkaXQtcG9pbnQtb2Ytc2FsZS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDc0Q7QUFDTTtBQUNNO0FBRWxFLFNBQVNLOztJQUNSLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHUCwrQ0FBUUEsQ0FBQztRQUM5Q1EsTUFBTTtRQUNOQyxTQUFTO1FBQ1RDLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxXQUFXO0lBQ1o7SUFDQSxNQUFNLENBQUNDLFlBQVlDLGdCQUFnQixHQUFHZCwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNlLE9BQU9DLFNBQVMsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU1pQixTQUFTZiwwREFBU0E7SUFDeEIsTUFBTWdCLGVBQWVmLGdFQUFlQTtJQUNwQyxNQUFNZ0IsVUFBVUQsYUFBYUUsSUFBSTtJQUVqQyxNQUFNQyxpQkFBaUIsT0FBT0M7UUFDN0JBLEVBQUVDO1FBQ0ZULGdCQUFnQjtRQUVoQixJQUNDLENBQUNSLFlBQVlFLFFBQ2IsQ0FBQ0YsWUFBWUcsV0FDYixDQUFDSCxZQUFZSSxRQUNiLENBQUNKLFlBQVlLLFlBQ2IsQ0FBQ0wsWUFBWU0sV0FDWjtZQUNESSxTQUFTO1lBQ1RGLGdCQUFnQjtZQUNoQjtRQUNEO1FBRUEsSUFBSTtZQUNILE1BQU1VLFdBQVcsTUFBTUMsTUFBTSwwQkFBMEI7Z0JBQ3REQyxRQUFRO2dCQUNSQyxNQUFNQyxLQUFLQyxVQUFVO29CQUNwQkMsUUFBUUE7b0JBQ1J0QixNQUFNRixZQUFZRTtvQkFDbEJDLFNBQVNILFlBQVlHO29CQUNyQkMsTUFBTUosWUFBWUk7b0JBQ2xCQyxVQUFVTCxZQUFZSztvQkFDdEJDLFdBQVdOLFlBQVlNO2dCQUN4QjtZQUNEO1lBQ0FJLFNBQVM7WUFDVCxJQUFJUSxTQUFTTyxJQUFJO2dCQUNoQmQsT0FBT2UsS0FBSztZQUNiLE9BQU87Z0JBQ04sTUFBTSxJQUFJQyxNQUFNO1lBQ2pCO1FBQ0QsRUFBRSxPQUFPbEIsT0FBTztZQUNmbUIsUUFBUUMsSUFBSXBCO1FBQ2IsU0FBVTtZQUNURCxnQkFBZ0I7UUFDakI7SUFDRDtJQUVBYixnREFBU0EsQ0FBQztRQUNULE1BQU1tQyxtQkFBbUI7WUFDeEIsTUFBTVosV0FBVyxNQUFNQyxNQUFNLHNCQUE4QixPQUFSTjtZQUNuRCxNQUFNa0IsT0FBTyxNQUFNYixTQUFTYztZQUU1Qi9CLGVBQWU7Z0JBQ2RDLE1BQU02QixLQUFLN0I7Z0JBQ1hDLFNBQVM0QixLQUFLNUI7Z0JBQ2RDLE1BQU0yQixLQUFLM0I7Z0JBQ1hDLFVBQVUwQixLQUFLMUI7Z0JBQ2ZDLFdBQVd5QixLQUFLekI7WUFDakI7UUFDRDtRQUVBLElBQUlPLFNBQVNpQjtJQUNkLEdBQUc7UUFBQ2pCO0tBQVE7SUFFWixxQkFDQyw4REFBQ29CO1FBQVFDLFdBQVU7a0JBQ2xCLDRFQUFDcEMseUVBQWtCQTtZQUNsQk0sTUFBSztZQUNMSixhQUFhQTtZQUNiQyxnQkFBZ0JBO1lBQ2hCTSxZQUFZQTtZQUNaNEIsY0FBY3BCO1lBQ2ROLE9BQU9BOzs7Ozs7Ozs7OztBQUlYO0dBcEZTVjs7UUFVT0gsc0RBQVNBO1FBQ0hDLDREQUFlQTs7O0tBWDVCRTtBQXNGVCwrREFBZUEsZUFBZUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZWRpdC1wb2ludC1vZi1zYWxlL3BhZ2UudHN4PzkxMGQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBGb3JtRXZlbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciwgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xuaW1wb3J0IE5ld1BvaW50T2ZTYWxlRm9ybSBmcm9tICdAY29tcG9uZW50cy9Gb3Jtcy9Qb2ludE9mU2FsZUZvcm0nXG5cbmZ1bmN0aW9uIEVkaXRQb2ludE9mU2FsZSgpIHtcblx0Y29uc3QgW3BvaW50T2ZTYWxlLCBzZXRQb2ludE9mU2FsZV0gPSB1c2VTdGF0ZSh7XG5cdFx0bmFtZTogJycsXG5cdFx0YWRkcmVzczogJycsXG5cdFx0dHlwZTogMCxcblx0XHRsYXRpdHVkZTogJycsXG5cdFx0bG9uZ2l0dWRlOiAnJyxcblx0fSlcblx0Y29uc3QgW3N1Ym1pdHRpbmcsIHNldElzU3VibWl0dGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcblx0Y29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJylcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblx0Y29uc3Qgc2VhcmNoUGFyYW1zID0gdXNlU2VhcmNoUGFyYW1zKClcblx0Y29uc3QgcG9pbnRJZCA9IHNlYXJjaFBhcmFtcy5nZXQoJ2lkJylcblxuXHRjb25zdCBhZGRQb2ludE9mU2FsZSA9IGFzeW5jIChlOiBGb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdHNldElzU3VibWl0dGluZyh0cnVlKVxuXG5cdFx0aWYgKFxuXHRcdFx0IXBvaW50T2ZTYWxlLm5hbWUgfHxcblx0XHRcdCFwb2ludE9mU2FsZS5hZGRyZXNzIHx8XG5cdFx0XHQhcG9pbnRPZlNhbGUudHlwZSB8fFxuXHRcdFx0IXBvaW50T2ZTYWxlLmxhdGl0dWRlIHx8XG5cdFx0XHQhcG9pbnRPZlNhbGUubG9uZ2l0dWRlXG5cdFx0KSB7XG5cdFx0XHRzZXRFcnJvcignV3lwZcWCbmlqIHdzenlzdGtpZSBwb2xhIGZvcm11bGFyemEhJylcblx0XHRcdHNldElzU3VibWl0dGluZyhmYWxzZSlcblx0XHRcdHJldHVyblxuXHRcdH1cblxuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL3BvaW50LW9mLXNhbGUvbmV3Jywge1xuXHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHRcdHVzZXJJZDogdXNlcklkLFxuXHRcdFx0XHRcdG5hbWU6IHBvaW50T2ZTYWxlLm5hbWUsXG5cdFx0XHRcdFx0YWRkcmVzczogcG9pbnRPZlNhbGUuYWRkcmVzcyxcblx0XHRcdFx0XHR0eXBlOiBwb2ludE9mU2FsZS50eXBlLFxuXHRcdFx0XHRcdGxhdGl0dWRlOiBwb2ludE9mU2FsZS5sYXRpdHVkZSxcblx0XHRcdFx0XHRsb25naXR1ZGU6IHBvaW50T2ZTYWxlLmxvbmdpdHVkZSxcblx0XHRcdFx0fSksXG5cdFx0XHR9KVxuXHRcdFx0c2V0RXJyb3IoJycpXG5cdFx0XHRpZiAocmVzcG9uc2Uub2spIHtcblx0XHRcdFx0cm91dGVyLnB1c2goJy8nKVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdCxYLEhWQgcG9kY3phcyBkb2Rhd2FuaWEgcHVua3R1IHNwcnplZGHFvHknKVxuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhlcnJvcilcblx0XHR9IGZpbmFsbHkge1xuXHRcdFx0c2V0SXNTdWJtaXR0aW5nKGZhbHNlKVxuXHRcdH1cblx0fVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc3QgZ2V0UG9pbnR0RGV0YWlscyA9IGFzeW5jICgpID0+IHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvcG9pbnQtb2Ytc2FsZS8ke3BvaW50SWR9YClcblx0XHRcdGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcblxuXHRcdFx0c2V0UG9pbnRPZlNhbGUoe1xuXHRcdFx0XHRuYW1lOiBkYXRhLm5hbWUsXG5cdFx0XHRcdGFkZHJlc3M6IGRhdGEuYWRkcmVzcyxcblx0XHRcdFx0dHlwZTogZGF0YS50eXBlLFxuXHRcdFx0XHRsYXRpdHVkZTogZGF0YS5sYXRpdHVkZSxcblx0XHRcdFx0bG9uZ2l0dWRlOiBkYXRhLmxvbmdpdHVkZSxcblx0XHRcdH0pXG5cdFx0fVxuXG5cdFx0aWYgKHBvaW50SWQpIGdldFBvaW50dERldGFpbHMoKVxuXHR9LCBbcG9pbnRJZF0pXG5cblx0cmV0dXJuIChcblx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9J2NvbnRhaW5lciBweS0yMCc+XG5cdFx0XHQ8TmV3UG9pbnRPZlNhbGVGb3JtXG5cdFx0XHRcdHR5cGU9J0VESVQnXG5cdFx0XHRcdHBvaW50T2ZTYWxlPXtwb2ludE9mU2FsZX1cblx0XHRcdFx0c2V0UG9pbnRPZlNhbGU9e3NldFBvaW50T2ZTYWxlfVxuXHRcdFx0XHRzdWJtaXR0aW5nPXtzdWJtaXR0aW5nfVxuXHRcdFx0XHRoYW5kbGVTdWJtaXQ9e2FkZFBvaW50T2ZTYWxlfVxuXHRcdFx0XHRlcnJvcj17ZXJyb3J9XG5cdFx0XHQvPlxuXHRcdDwvc2VjdGlvbj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0UG9pbnRPZlNhbGVcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsInVzZVNlYXJjaFBhcmFtcyIsIk5ld1BvaW50T2ZTYWxlRm9ybSIsIkVkaXRQb2ludE9mU2FsZSIsInBvaW50T2ZTYWxlIiwic2V0UG9pbnRPZlNhbGUiLCJuYW1lIiwiYWRkcmVzcyIsInR5cGUiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsInN1Ym1pdHRpbmciLCJzZXRJc1N1Ym1pdHRpbmciLCJlcnJvciIsInNldEVycm9yIiwicm91dGVyIiwic2VhcmNoUGFyYW1zIiwicG9pbnRJZCIsImdldCIsImFkZFBvaW50T2ZTYWxlIiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidXNlcklkIiwib2siLCJwdXNoIiwiRXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZ2V0UG9pbnR0RGV0YWlscyIsImRhdGEiLCJqc29uIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImhhbmRsZVN1Ym1pdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/edit-point-of-sale/page.tsx\n"));

/***/ })

});