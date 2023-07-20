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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-client)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_UI_SectionTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/UI/SectionTitle */ \"(app-client)/./components/UI/SectionTitle.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Operations = ()=>{\n    var _ref;\n    _s();\n    const [allOperations, setAllOperations] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [filteredOperations, setFilteredOperations] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    var _id;\n    const userId = (_id = (_ref = session === null || session === void 0 ? void 0 : session.user) === null || _ref === void 0 ? void 0 : _ref.id) !== null && _id !== void 0 ? _id : \"\";\n    const fetchOperations = async ()=>{\n        try {\n            const response = await fetch(\"/api/operation\");\n            const data = await response.json();\n            const filteredOperations = data.filter((operation)=>operation.creator._id.toString() === userId.toString());\n            setAllOperations(filteredOperations);\n            setFilteredOperations(filteredOperations);\n        } catch (error) {\n            console.log(error);\n        } finally{\n            setLoading(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchOperations();\n        console.log(filteredOperations);\n    }, [\n        loading\n    ]);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"container py-20\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-10 text-black text-center\",\n                children: \"Wczytywanie danych...\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/operations/page.tsx\",\n                lineNumber: 62,\n                columnNumber: 5\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/operations/page.tsx\",\n            lineNumber: 61,\n            columnNumber: 4\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"container py-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_SectionTitle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                title: \"Moje zabiegi cheminizacyjne\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/operations/page.tsx\",\n                lineNumber: 69,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row justify-center items-center flex-wrap gap-x-12 gap-y-2 mt-5\",\n                children: filteredOutgoings.length > 0 ? filteredOutgoings.map((outgoing)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(OutgoingItem, {\n                        name: outgoing.name,\n                        category: outgoing.category,\n                        date: outgoing.date,\n                        price: outgoing.price,\n                        amount: outgoing.amount,\n                        totalSum: outgoing.totalSum,\n                        describe: outgoing.describe,\n                        handleDelete: ()=>handleDelete(outgoing),\n                        handleEdit: ()=>handleEdit(outgoing)\n                    }, outgoing._id, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/operations/page.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 7\n                    }, undefined)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"w-full mt-10 text-black text-center\",\n                    children: \"Brak wydatk\\xf3w\"\n                }, void 0, false, {\n                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/operations/page.tsx\",\n                    lineNumber: 87,\n                    columnNumber: 6\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/operations/page.tsx\",\n                lineNumber: 70,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-10 text-black text-center\",\n                children: \"Brak zabieg\\xf3w cheminizacyjnych\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/operations/page.tsx\",\n                lineNumber: 91,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/operations/page.tsx\",\n        lineNumber: 68,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Operations, \"ACq3Y+gTKKr0SdaOA3K0+YdLqNc=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = Operations;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Operations);\nvar _c;\n$RefreshReg$(_c, \"Operations\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL29wZXJhdGlvbnMvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDMkM7QUFDQztBQUNEO0FBQ1c7QUF1QnRELE1BQU1LLGFBQWE7UUFNSDs7SUFMZixNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHUCwrQ0FBUUEsQ0FBYyxFQUFFO0lBQ2xFLE1BQU0sQ0FBQ1Esb0JBQW9CQyxzQkFBc0IsR0FBR1QsK0NBQVFBLENBQWMsRUFBRTtJQUM1RSxNQUFNLENBQUNVLFNBQVNDLFdBQVcsR0FBR1gsK0NBQVFBLENBQUM7SUFDdkMsTUFBTVksU0FBU1QsMERBQVNBO0lBQ3hCLE1BQU0sRUFBRVUsTUFBTUMsT0FBTyxFQUFFLEdBQUdaLDJEQUFVQTtRQUNyQjtJQUFmLE1BQU1hLFNBQVMsZUFBQ0Qsb0JBQUFBLHFCQUFBQSxLQUFBQSxJQUFBQSxRQUFTRSxrQkFBVixnQ0FBb0NDLGdCQUFwQyx1QkFBMEM7SUFFekQsTUFBTUMsa0JBQWtCO1FBQ3ZCLElBQUk7WUFDSCxNQUFNQyxXQUFXLE1BQU1DLE1BQU07WUFDN0IsTUFBTVAsT0FBTyxNQUFNTSxTQUFTRTtZQUU1QixNQUFNYixxQkFBcUJLLEtBQUtTLE9BQy9CLENBQUNDLFlBQXlCQSxVQUFVQyxRQUFRQyxJQUFJQyxlQUFlWCxPQUFPVztZQUd2RW5CLGlCQUFpQkM7WUFDakJDLHNCQUFzQkQ7UUFDdkIsRUFBRSxPQUFPbUIsT0FBTztZQUNmQyxRQUFRQyxJQUFJRjtRQUNiLFNBQVU7WUFDVGhCLFdBQVc7UUFDWjtJQUNEO0lBRUFWLGdEQUFTQSxDQUFDO1FBQ1RpQjtRQUNBVSxRQUFRQyxJQUFJckI7SUFDYixHQUFHO1FBQUNFO0tBQVE7SUFFWixJQUFJQSxTQUFTO1FBQ1oscUJBQ0MsOERBQUNvQjtZQUFRQyxXQUFVO3NCQUNsQiw0RUFBQ0M7Z0JBQUVELFdBQVU7MEJBQStCOzs7Ozs7Ozs7OztJQUcvQztJQUVBLHFCQUNDLDhEQUFDRDtRQUFRQyxXQUFVOzswQkFDbEIsOERBQUMzQixtRUFBWUE7Z0JBQUM2QixPQUFNOzs7Ozs7MEJBQ1gsOERBQUNDO2dCQUFJSCxXQUFVOzBCQUNkSSxrQkFBa0JDLFNBQVMsSUFDbkNELGtCQUFrQkUsSUFBSUMsQ0FBQUEseUJBQ3JCLDhEQUFDQzt3QkFFQUMsTUFBTUYsU0FBU0U7d0JBQ2ZDLFVBQVVILFNBQVNHO3dCQUNuQkMsTUFBTUosU0FBU0k7d0JBQ2ZDLE9BQU9MLFNBQVNLO3dCQUNoQkMsUUFBUU4sU0FBU007d0JBQ2pCQyxVQUFVUCxTQUFTTzt3QkFDbkJDLFVBQVVSLFNBQVNRO3dCQUNuQkMsY0FBYyxJQUFNQSxhQUFhVDt3QkFDakNVLFlBQVksSUFBTUEsV0FBV1Y7dUJBVHhCQSxTQUFTYjs7OzttREFhaEIsOERBQUNPO29CQUFFRCxXQUFVOzhCQUFzQzs7Ozs7Ozs7Ozs7MEJBSXJELDhEQUFDQztnQkFBRUQsV0FBVTswQkFBK0I7Ozs7Ozs7Ozs7OztBQUcvQztHQWxFTTFCOztRQUlVRixzREFBU0E7UUFDRUQsdURBQVVBOzs7S0FML0JHO0FBb0VOLCtEQUFlQSxVQUFVQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9vcGVyYXRpb25zL3BhZ2UudHN4Pzc3ZTIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xuaW1wb3J0IFNlY3Rpb25UaXRsZSBmcm9tICdAY29tcG9uZW50cy9VSS9TZWN0aW9uVGl0bGUnXG5pbXBvcnQgT3BlcmF0aW9uSXRlbSBmcm9tICdAY29tcG9uZW50cy9JdGVtcy9PcGVyYXRpb25JdGVtJ1xuXG5cbmludGVyZmFjZSBPcGVyYXRpb24ge1xuXHRfaWQ6IHN0cmluZ1xuXHRjcmVhdG9yOiB7XG5cdFx0X2lkOiBzdHJpbmdcblx0XHRlbWFpbDogc3RyaW5nXG5cdFx0dXNlcm5hbWU6IHN0cmluZ1xuXHRcdGltYWdlOiBzdHJpbmdcblx0fVxuXHRkYXRlOiBzdHJpbmdcblx0dGltZTogc3RyaW5nXG5cdHBlc3RpY2lkZVR5cGU6IG51bWJlclxuXHRwZXN0aWNpZGVOYW1lOiBzdHJpbmdcblx0cGVzdGljaWRlRG9zZTogbnVtYmVyXG5cdGxpcXVpZEFtb3VudDogbnVtYmVyXG5cdHdhaXRpbmdUaW1lOiBudW1iZXJcblx0d2FpdGluZ1RpbWVEYXRlOiBzdHJpbmdcblx0c3RhdHVzOiBib29sZWFuXG59XG5cbmNvbnN0IE9wZXJhdGlvbnMgPSAoKSA9PiB7XG5cdGNvbnN0IFthbGxPcGVyYXRpb25zLCBzZXRBbGxPcGVyYXRpb25zXSA9IHVzZVN0YXRlPE9wZXJhdGlvbltdPihbXSlcblx0Y29uc3QgW2ZpbHRlcmVkT3BlcmF0aW9ucywgc2V0RmlsdGVyZWRPcGVyYXRpb25zXSA9IHVzZVN0YXRlPE9wZXJhdGlvbltdPihbXSlcblx0Y29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblx0Y29uc3QgeyBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKClcblx0Y29uc3QgdXNlcklkID0gKHNlc3Npb24/LnVzZXIgYXMgeyBpZD86IHN0cmluZyB9KT8uaWQgPz8gJydcblxuXHRjb25zdCBmZXRjaE9wZXJhdGlvbnMgPSBhc3luYyAoKSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvb3BlcmF0aW9uJylcblx0XHRcdGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcblxuXHRcdFx0Y29uc3QgZmlsdGVyZWRPcGVyYXRpb25zID0gZGF0YS5maWx0ZXIoXG5cdFx0XHRcdChvcGVyYXRpb246IE9wZXJhdGlvbikgPT4gb3BlcmF0aW9uLmNyZWF0b3IuX2lkLnRvU3RyaW5nKCkgPT09IHVzZXJJZC50b1N0cmluZygpXG5cdFx0XHQpXG5cblx0XHRcdHNldEFsbE9wZXJhdGlvbnMoZmlsdGVyZWRPcGVyYXRpb25zKVxuXHRcdFx0c2V0RmlsdGVyZWRPcGVyYXRpb25zKGZpbHRlcmVkT3BlcmF0aW9ucylcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5sb2coZXJyb3IpXG5cdFx0fSBmaW5hbGx5IHtcblx0XHRcdHNldExvYWRpbmcoZmFsc2UpXG5cdFx0fVxuXHR9XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRmZXRjaE9wZXJhdGlvbnMoKVxuXHRcdGNvbnNvbGUubG9nKGZpbHRlcmVkT3BlcmF0aW9ucylcblx0fSwgW2xvYWRpbmddKVxuXG5cdGlmIChsb2FkaW5nKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT0nY29udGFpbmVyIHB5LTIwJz5cblx0XHRcdFx0PHAgY2xhc3NOYW1lPSdtdC0xMCB0ZXh0LWJsYWNrIHRleHQtY2VudGVyJz5XY3p5dHl3YW5pZSBkYW55Y2guLi48L3A+XG5cdFx0XHQ8L3NlY3Rpb24+XG5cdFx0KVxuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9J2NvbnRhaW5lciBweS0yMCc+XG5cdFx0XHQ8U2VjdGlvblRpdGxlIHRpdGxlPSdNb2plIHphYmllZ2kgY2hlbWluaXphY3lqbmUnIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZmxleC13cmFwIGdhcC14LTEyIGdhcC15LTIgbXQtNSc+XG4gICAgICAgICAgICB7ZmlsdGVyZWRPdXRnb2luZ3MubGVuZ3RoID4gMCA/IChcblx0XHRcdFx0XHRmaWx0ZXJlZE91dGdvaW5ncy5tYXAob3V0Z29pbmcgPT4gKFxuXHRcdFx0XHRcdFx0PE91dGdvaW5nSXRlbVxuXHRcdFx0XHRcdFx0XHRrZXk9e291dGdvaW5nLl9pZH1cblx0XHRcdFx0XHRcdFx0bmFtZT17b3V0Z29pbmcubmFtZX1cblx0XHRcdFx0XHRcdFx0Y2F0ZWdvcnk9e291dGdvaW5nLmNhdGVnb3J5fVxuXHRcdFx0XHRcdFx0XHRkYXRlPXtvdXRnb2luZy5kYXRlfVxuXHRcdFx0XHRcdFx0XHRwcmljZT17b3V0Z29pbmcucHJpY2V9XG5cdFx0XHRcdFx0XHRcdGFtb3VudD17b3V0Z29pbmcuYW1vdW50fVxuXHRcdFx0XHRcdFx0XHR0b3RhbFN1bT17b3V0Z29pbmcudG90YWxTdW19XG5cdFx0XHRcdFx0XHRcdGRlc2NyaWJlPXtvdXRnb2luZy5kZXNjcmliZX1cblx0XHRcdFx0XHRcdFx0aGFuZGxlRGVsZXRlPXsoKSA9PiBoYW5kbGVEZWxldGUob3V0Z29pbmcpfVxuXHRcdFx0XHRcdFx0XHRoYW5kbGVFZGl0PXsoKSA9PiBoYW5kbGVFZGl0KG91dGdvaW5nKX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0KSlcblx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J3ctZnVsbCBtdC0xMCB0ZXh0LWJsYWNrIHRleHQtY2VudGVyJz5CcmFrIHd5ZGF0a8OzdzwvcD5cblx0XHRcdFx0KX1cbiAgICAgICAgICAgIDwvZGl2PlxuXHRcdFx0XG5cdFx0XHQ8cCBjbGFzc05hbWU9J210LTEwIHRleHQtYmxhY2sgdGV4dC1jZW50ZXInPkJyYWsgemFiaWVnw7N3IGNoZW1pbml6YWN5am55Y2g8L3A+XG5cdFx0PC9zZWN0aW9uPlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IE9wZXJhdGlvbnNcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVNlc3Npb24iLCJ1c2VSb3V0ZXIiLCJTZWN0aW9uVGl0bGUiLCJPcGVyYXRpb25zIiwiYWxsT3BlcmF0aW9ucyIsInNldEFsbE9wZXJhdGlvbnMiLCJmaWx0ZXJlZE9wZXJhdGlvbnMiLCJzZXRGaWx0ZXJlZE9wZXJhdGlvbnMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJvdXRlciIsImRhdGEiLCJzZXNzaW9uIiwidXNlcklkIiwidXNlciIsImlkIiwiZmV0Y2hPcGVyYXRpb25zIiwicmVzcG9uc2UiLCJmZXRjaCIsImpzb24iLCJmaWx0ZXIiLCJvcGVyYXRpb24iLCJjcmVhdG9yIiwiX2lkIiwidG9TdHJpbmciLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwicCIsInRpdGxlIiwiZGl2IiwiZmlsdGVyZWRPdXRnb2luZ3MiLCJsZW5ndGgiLCJtYXAiLCJvdXRnb2luZyIsIk91dGdvaW5nSXRlbSIsIm5hbWUiLCJjYXRlZ29yeSIsImRhdGUiLCJwcmljZSIsImFtb3VudCIsInRvdGFsU3VtIiwiZGVzY3JpYmUiLCJoYW5kbGVEZWxldGUiLCJoYW5kbGVFZGl0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/operations/page.tsx\n"));

/***/ })

});