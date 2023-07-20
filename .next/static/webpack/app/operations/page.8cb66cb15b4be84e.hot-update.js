"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/operations/page",{

/***/ "(app-client)/./app/operations/page.tsx":
/*!*********************************!*\
  !*** ./app/operations/page.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-client)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_UI_SectionTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/UI/SectionTitle */ \"(app-client)/./components/UI/SectionTitle.tsx\");\n/* harmony import */ var _components_Items_OperationItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/Items/OperationItem */ \"(app-client)/./components/Items/OperationItem.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Operations = ()=>{\n    var _ref;\n    _s();\n    const [allOperations, setAllOperations] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [filteredOperations, setFilteredOperations] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    var _id;\n    const userId = (_id = (_ref = session === null || session === void 0 ? void 0 : session.user) === null || _ref === void 0 ? void 0 : _ref.id) !== null && _id !== void 0 ? _id : \"\";\n    const fetchOperations = async ()=>{\n        try {\n            const response = await fetch(\"/api/operation\");\n            const data = await response.json();\n            const filteredOperations = data.filter((operation)=>operation.creator._id.toString() === userId.toString());\n            setAllOperations(filteredOperations);\n            setFilteredOperations(filteredOperations);\n        } catch (error) {\n            console.log(error);\n        } finally{\n            setLoading(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchOperations();\n        console.log(filteredOperations);\n    }, [\n        loading\n    ]);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"container py-20\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-10 text-black text-center\",\n                children: \"Wczytywanie danych...\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/operations/page.tsx\",\n                lineNumber: 62,\n                columnNumber: 5\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/operations/page.tsx\",\n            lineNumber: 61,\n            columnNumber: 4\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"container py-20 ring-1\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_SectionTitle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                title: \"Moje zabiegi cheminizacyjne\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/operations/page.tsx\",\n                lineNumber: 69,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row justify-center  items-center flex-wrap\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Items_OperationItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/operations/page.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Items_OperationItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/operations/page.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Items_OperationItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/operations/page.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Items_OperationItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/operations/page.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Items_OperationItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/operations/page.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Items_OperationItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/operations/page.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Items_OperationItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/operations/page.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Items_OperationItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/operations/page.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Items_OperationItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/operations/page.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Items_OperationItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/operations/page.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/operations/page.tsx\",\n                lineNumber: 70,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-10 text-black text-center\",\n                children: \"Brak zabieg\\xf3w cheminizacyjnych\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/operations/page.tsx\",\n                lineNumber: 83,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/operations/page.tsx\",\n        lineNumber: 68,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Operations, \"ACq3Y+gTKKr0SdaOA3K0+YdLqNc=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = Operations;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Operations);\nvar _c;\n$RefreshReg$(_c, \"Operations\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL29wZXJhdGlvbnMvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQzJDO0FBQ0M7QUFDRDtBQUNXO0FBQ0s7QUFzQjNELE1BQU1NLGFBQWE7UUFNSDs7SUFMZixNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHUiwrQ0FBUUEsQ0FBYyxFQUFFO0lBQ2xFLE1BQU0sQ0FBQ1Msb0JBQW9CQyxzQkFBc0IsR0FBR1YsK0NBQVFBLENBQWMsRUFBRTtJQUM1RSxNQUFNLENBQUNXLFNBQVNDLFdBQVcsR0FBR1osK0NBQVFBLENBQUM7SUFDdkMsTUFBTWEsU0FBU1YsMERBQVNBO0lBQ3hCLE1BQU0sRUFBRVcsTUFBTUMsT0FBTyxFQUFFLEdBQUdiLDJEQUFVQTtRQUNyQjtJQUFmLE1BQU1jLFNBQVMsZUFBQ0Qsb0JBQUFBLHFCQUFBQSxLQUFBQSxJQUFBQSxRQUFTRSxrQkFBVixnQ0FBb0NDLGdCQUFwQyx1QkFBMEM7SUFFekQsTUFBTUMsa0JBQWtCO1FBQ3ZCLElBQUk7WUFDSCxNQUFNQyxXQUFXLE1BQU1DLE1BQU07WUFDN0IsTUFBTVAsT0FBTyxNQUFNTSxTQUFTRTtZQUU1QixNQUFNYixxQkFBcUJLLEtBQUtTLE9BQy9CLENBQUNDLFlBQXlCQSxVQUFVQyxRQUFRQyxJQUFJQyxlQUFlWCxPQUFPVztZQUd2RW5CLGlCQUFpQkM7WUFDakJDLHNCQUFzQkQ7UUFDdkIsRUFBRSxPQUFPbUIsT0FBTztZQUNmQyxRQUFRQyxJQUFJRjtRQUNiLFNBQVU7WUFDVGhCLFdBQVc7UUFDWjtJQUNEO0lBRUFYLGdEQUFTQSxDQUFDO1FBQ1RrQjtRQUNBVSxRQUFRQyxJQUFJckI7SUFDYixHQUFHO1FBQUNFO0tBQVE7SUFFWixJQUFJQSxTQUFTO1FBQ1oscUJBQ0MsOERBQUNvQjtZQUFRQyxXQUFVO3NCQUNsQiw0RUFBQ0M7Z0JBQUVELFdBQVU7MEJBQStCOzs7Ozs7Ozs7OztJQUcvQztJQUVBLHFCQUNDLDhEQUFDRDtRQUFRQyxXQUFVOzswQkFDbEIsOERBQUM1QixtRUFBWUE7Z0JBQUM4QixPQUFNOzs7Ozs7MEJBQ1gsOERBQUNDO2dCQUFJSCxXQUFVOztrQ0FDZiw4REFBQzNCLHVFQUFhQTs7Ozs7a0NBQ2QsOERBQUNBLHVFQUFhQTs7Ozs7a0NBQ2QsOERBQUNBLHVFQUFhQTs7Ozs7a0NBQ2QsOERBQUNBLHVFQUFhQTs7Ozs7a0NBQ2QsOERBQUNBLHVFQUFhQTs7Ozs7a0NBQ2QsOERBQUNBLHVFQUFhQTs7Ozs7a0NBQ2QsOERBQUNBLHVFQUFhQTs7Ozs7a0NBQ2QsOERBQUNBLHVFQUFhQTs7Ozs7a0NBQ2QsOERBQUNBLHVFQUFhQTs7Ozs7a0NBQ2QsOERBQUNBLHVFQUFhQTs7Ozs7Ozs7Ozs7MEJBR3ZCLDhEQUFDNEI7Z0JBQUVELFdBQVU7MEJBQStCOzs7Ozs7Ozs7Ozs7QUFHL0M7R0ExRE0xQjs7UUFJVUgsc0RBQVNBO1FBQ0VELHVEQUFVQTs7O0tBTC9CSTtBQTRETiwrREFBZUEsVUFBVUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvb3BlcmF0aW9ucy9wYWdlLnRzeD83N2UyIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbidcbmltcG9ydCBTZWN0aW9uVGl0bGUgZnJvbSAnQGNvbXBvbmVudHMvVUkvU2VjdGlvblRpdGxlJ1xuaW1wb3J0IE9wZXJhdGlvbkl0ZW0gZnJvbSAnQGNvbXBvbmVudHMvSXRlbXMvT3BlcmF0aW9uSXRlbSdcblxuXG5pbnRlcmZhY2UgT3BlcmF0aW9uIHtcblx0X2lkOiBzdHJpbmdcblx0Y3JlYXRvcjoge1xuXHRcdF9pZDogc3RyaW5nXG5cdFx0ZW1haWw6IHN0cmluZ1xuXHRcdHVzZXJuYW1lOiBzdHJpbmdcblx0XHRpbWFnZTogc3RyaW5nXG5cdH1cblx0ZGF0ZTogc3RyaW5nXG5cdHRpbWU6IHN0cmluZ1xuXHRwZXN0aWNpZGVUeXBlOiBudW1iZXJcblx0cGVzdGljaWRlTmFtZTogc3RyaW5nXG5cdHBlc3RpY2lkZURvc2U6IG51bWJlclxuXHRsaXF1aWRBbW91bnQ6IG51bWJlclxuXHR3YWl0aW5nVGltZTogbnVtYmVyXG5cdHdhaXRpbmdUaW1lRGF0ZTogc3RyaW5nXG5cdHN0YXR1czogYm9vbGVhblxufVxuXG5jb25zdCBPcGVyYXRpb25zID0gKCkgPT4ge1xuXHRjb25zdCBbYWxsT3BlcmF0aW9ucywgc2V0QWxsT3BlcmF0aW9uc10gPSB1c2VTdGF0ZTxPcGVyYXRpb25bXT4oW10pXG5cdGNvbnN0IFtmaWx0ZXJlZE9wZXJhdGlvbnMsIHNldEZpbHRlcmVkT3BlcmF0aW9uc10gPSB1c2VTdGF0ZTxPcGVyYXRpb25bXT4oW10pXG5cdGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cdGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpXG5cdGNvbnN0IHVzZXJJZCA9IChzZXNzaW9uPy51c2VyIGFzIHsgaWQ/OiBzdHJpbmcgfSk/LmlkID8/ICcnXG5cblx0Y29uc3QgZmV0Y2hPcGVyYXRpb25zID0gYXN5bmMgKCkgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL29wZXJhdGlvbicpXG5cdFx0XHRjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cblx0XHRcdGNvbnN0IGZpbHRlcmVkT3BlcmF0aW9ucyA9IGRhdGEuZmlsdGVyKFxuXHRcdFx0XHQob3BlcmF0aW9uOiBPcGVyYXRpb24pID0+IG9wZXJhdGlvbi5jcmVhdG9yLl9pZC50b1N0cmluZygpID09PSB1c2VySWQudG9TdHJpbmcoKVxuXHRcdFx0KVxuXG5cdFx0XHRzZXRBbGxPcGVyYXRpb25zKGZpbHRlcmVkT3BlcmF0aW9ucylcblx0XHRcdHNldEZpbHRlcmVkT3BlcmF0aW9ucyhmaWx0ZXJlZE9wZXJhdGlvbnMpXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUubG9nKGVycm9yKVxuXHRcdH0gZmluYWxseSB7XG5cdFx0XHRzZXRMb2FkaW5nKGZhbHNlKVxuXHRcdH1cblx0fVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0ZmV0Y2hPcGVyYXRpb25zKClcblx0XHRjb25zb2xlLmxvZyhmaWx0ZXJlZE9wZXJhdGlvbnMpXG5cdH0sIFtsb2FkaW5nXSlcblxuXHRpZiAobG9hZGluZykge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9J2NvbnRhaW5lciBweS0yMCc+XG5cdFx0XHRcdDxwIGNsYXNzTmFtZT0nbXQtMTAgdGV4dC1ibGFjayB0ZXh0LWNlbnRlcic+V2N6eXR5d2FuaWUgZGFueWNoLi4uPC9wPlxuXHRcdFx0PC9zZWN0aW9uPlxuXHRcdClcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PHNlY3Rpb24gY2xhc3NOYW1lPSdjb250YWluZXIgcHktMjAgcmluZy0xJz5cblx0XHRcdDxTZWN0aW9uVGl0bGUgdGl0bGU9J01vamUgemFiaWVnaSBjaGVtaW5pemFjeWpuZScgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IGp1c3RpZnktY2VudGVyICBpdGVtcy1jZW50ZXIgZmxleC13cmFwJz5cbiAgICAgICAgICAgIDxPcGVyYXRpb25JdGVtIC8+XG4gICAgICAgICAgICA8T3BlcmF0aW9uSXRlbSAvPlxuICAgICAgICAgICAgPE9wZXJhdGlvbkl0ZW0gLz5cbiAgICAgICAgICAgIDxPcGVyYXRpb25JdGVtIC8+XG4gICAgICAgICAgICA8T3BlcmF0aW9uSXRlbSAvPlxuICAgICAgICAgICAgPE9wZXJhdGlvbkl0ZW0gLz5cbiAgICAgICAgICAgIDxPcGVyYXRpb25JdGVtIC8+XG4gICAgICAgICAgICA8T3BlcmF0aW9uSXRlbSAvPlxuICAgICAgICAgICAgPE9wZXJhdGlvbkl0ZW0gLz5cbiAgICAgICAgICAgIDxPcGVyYXRpb25JdGVtIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblx0XHRcdFxuXHRcdFx0PHAgY2xhc3NOYW1lPSdtdC0xMCB0ZXh0LWJsYWNrIHRleHQtY2VudGVyJz5CcmFrIHphYmllZ8OzdyBjaGVtaW5pemFjeWpueWNoPC9wPlxuXHRcdDwvc2VjdGlvbj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBPcGVyYXRpb25zXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VTZXNzaW9uIiwidXNlUm91dGVyIiwiU2VjdGlvblRpdGxlIiwiT3BlcmF0aW9uSXRlbSIsIk9wZXJhdGlvbnMiLCJhbGxPcGVyYXRpb25zIiwic2V0QWxsT3BlcmF0aW9ucyIsImZpbHRlcmVkT3BlcmF0aW9ucyIsInNldEZpbHRlcmVkT3BlcmF0aW9ucyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicm91dGVyIiwiZGF0YSIsInNlc3Npb24iLCJ1c2VySWQiLCJ1c2VyIiwiaWQiLCJmZXRjaE9wZXJhdGlvbnMiLCJyZXNwb25zZSIsImZldGNoIiwianNvbiIsImZpbHRlciIsIm9wZXJhdGlvbiIsImNyZWF0b3IiLCJfaWQiLCJ0b1N0cmluZyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJwIiwidGl0bGUiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/operations/page.tsx\n"));

/***/ })

});