"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/balance-of-outgoings/page",{

/***/ "(app-client)/./app/balance-of-outgoings/page.tsx":
/*!*******************************************!*\
  !*** ./app/balance-of-outgoings/page.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-client)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_UI_SectionTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/UI/SectionTitle */ \"(app-client)/./components/UI/SectionTitle.tsx\");\n/* harmony import */ var _components_Charts_Outgoings_OutgoingsByMonth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Charts/Outgoings/OutgoingsByMonth */ \"(app-client)/./components/Charts/Outgoings/OutgoingsByMonth.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction BalanceOfOutgoings() {\n    var _ref;\n    _s();\n    const [allOutgoings, setAllOutgoings] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    var _id;\n    const userId = (_id = (_ref = session === null || session === void 0 ? void 0 : session.user) === null || _ref === void 0 ? void 0 : _ref.id) !== null && _id !== void 0 ? _id : \"\";\n    const fetchOutgoings = async ()=>{\n        try {\n            const response = await fetch(\"/api/outgoing\");\n            const data = await response.json();\n            const currentYear = new Date().getFullYear();\n            const filteredOutgoings = data.filter((outgoing)=>{\n                const outgoingYear = new Date(outgoing.date).getFullYear();\n                return outgoing.creator._id.toString() === userId.toString() && outgoingYear === currentYear;\n            });\n            setAllOutgoings(filteredOutgoings);\n        } catch (error) {\n            console.log(error);\n        } finally{\n            setLoading(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchOutgoings();\n    }, [\n        loading\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"container py-20 text-black\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_SectionTitle__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                title: \"Bilans wydatk\\xf3w\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-outgoings/page.tsx\",\n                lineNumber: 55,\n                columnNumber: 4\n            }, this),\n            allOutgoings.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row justify-center flex-wrap gap-6 py-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Charts_Outgoings_OutgoingsByMonth__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    allOutgoings: allOutgoings\n                }, void 0, false, {\n                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-outgoings/page.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-outgoings/page.tsx\",\n                lineNumber: 57,\n                columnNumber: 5\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-10 md:text-lg text-center\",\n                children: \"Wczytywanie danych...\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-outgoings/page.tsx\",\n                lineNumber: 61,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/balance-of-outgoings/page.tsx\",\n        lineNumber: 54,\n        columnNumber: 3\n    }, this);\n}\n_s(BalanceOfOutgoings, \"NAYW4y2XYoO4Y9NByk+hJxAEhwE=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = BalanceOfOutgoings;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BalanceOfOutgoings);\nvar _c;\n$RefreshReg$(_c, \"BalanceOfOutgoings\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2JhbGFuY2Utb2Ytb3V0Z29pbmdzL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDMkM7QUFDQztBQUNVO0FBQ3NCO0FBbUI1RSxTQUFTSztRQUlPOztJQUhmLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdQLCtDQUFRQSxDQUFhLEVBQUU7SUFDL0QsTUFBTSxDQUFDUSxTQUFTQyxXQUFXLEdBQUdULCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sRUFBRVUsTUFBTUMsT0FBTyxFQUFFLEdBQUdULDJEQUFVQTtRQUNyQjtJQUFmLE1BQU1VLFNBQVMsZUFBQ0Qsb0JBQUFBLHFCQUFBQSxLQUFBQSxJQUFBQSxRQUFTRSxrQkFBVixnQ0FBb0NDLGdCQUFwQyx1QkFBMEM7SUFFekQsTUFBTUMsaUJBQWlCO1FBQ3RCLElBQUk7WUFDSCxNQUFNQyxXQUFXLE1BQU1DLE1BQU07WUFDN0IsTUFBTVAsT0FBTyxNQUFNTSxTQUFTRTtZQUU1QixNQUFNQyxjQUFjLElBQUlDLE9BQU9DO1lBQy9CLE1BQU1DLG9CQUFvQlosS0FBS2EsT0FBTyxDQUFDQztnQkFDdEMsTUFBTUMsZUFBZSxJQUFJTCxLQUFLSSxTQUFTRSxNQUFNTDtnQkFDN0MsT0FBT0csU0FBU0csUUFBUUMsSUFBSUMsZUFBZWpCLE9BQU9pQixjQUFjSixpQkFBaUJOO1lBQ2xGO1lBRUFaLGdCQUFnQmU7UUFDakIsRUFBRSxPQUFPUSxPQUFPO1lBQ2ZDLFFBQVFDLElBQUlGO1FBQ2IsU0FBVTtZQUNUckIsV0FBVztRQUNaO0lBQ0Q7SUFFQVIsZ0RBQVNBLENBQUM7UUFDVGM7SUFDRCxHQUFHO1FBQUNQO0tBQVE7SUFFWixxQkFDQyw4REFBQ3lCO1FBQVFDLFdBQVU7OzBCQUNsQiw4REFBQy9CLG1FQUFZQTtnQkFBQ2dDLE9BQU07Ozs7OztZQUNuQjdCLGFBQWE4QixTQUFTLGtCQUN0Qiw4REFBQ0M7Z0JBQUlILFdBQVU7MEJBQ0MsNEVBQUM5QixxRkFBZ0JBO29CQUFDRSxjQUFjQTs7Ozs7Ozs7OztxQ0FHaEQsOERBQUNnQztnQkFBRUosV0FBVTswQkFBK0I7Ozs7Ozs7Ozs7OztBQUloRDtHQXpDUzdCOztRQUdrQkgsdURBQVVBOzs7S0FINUJHO0FBMkNULCtEQUFlQSxrQkFBa0JBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2JhbGFuY2Utb2Ytb3V0Z29pbmdzL3BhZ2UudHN4P2NjMmEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0J1xuaW1wb3J0IFNlY3Rpb25UaXRsZSBmcm9tICdAY29tcG9uZW50cy9VSS9TZWN0aW9uVGl0bGUnXG5pbXBvcnQgT3V0Z29pbmdzQnlNb250aCBmcm9tICdAY29tcG9uZW50cy9DaGFydHMvT3V0Z29pbmdzL091dGdvaW5nc0J5TW9udGgnXG5cbmludGVyZmFjZSBPdXRnb2luZyB7XG5cdF9pZDogc3RyaW5nXG5cdGNyZWF0b3I6IHtcblx0XHRfaWQ6IHN0cmluZ1xuXHRcdGVtYWlsOiBzdHJpbmdcblx0XHR1c2VybmFtZTogc3RyaW5nXG5cdFx0aW1hZ2U6IHN0cmluZ1xuXHR9XG5cdG5hbWU6IHN0cmluZ1xuXHRjYXRlZ29yeTogbnVtYmVyXG5cdGRhdGU6IHN0cmluZ1xuXHRwcmljZTogbnVtYmVyXG5cdGFtb3VudDogbnVtYmVyXG5cdHRvdGFsU3VtOiBudW1iZXJcblx0ZGVzY3JpYmU6IHN0cmluZ1xufVxuXG5mdW5jdGlvbiBCYWxhbmNlT2ZPdXRnb2luZ3MoKSB7XG5cdGNvbnN0IFthbGxPdXRnb2luZ3MsIHNldEFsbE91dGdvaW5nc10gPSB1c2VTdGF0ZTxPdXRnb2luZ1tdPihbXSlcblx0Y29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcblx0Y29uc3QgeyBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKClcblx0Y29uc3QgdXNlcklkID0gKHNlc3Npb24/LnVzZXIgYXMgeyBpZD86IHN0cmluZyB9KT8uaWQgPz8gJydcblxuXHRjb25zdCBmZXRjaE91dGdvaW5ncyA9IGFzeW5jICgpID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9vdXRnb2luZycpXG5cdFx0XHRjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cblx0XHRcdGNvbnN0IGN1cnJlbnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpXG5cdFx0XHRjb25zdCBmaWx0ZXJlZE91dGdvaW5ncyA9IGRhdGEuZmlsdGVyKChvdXRnb2luZzogT3V0Z29pbmcpID0+IHtcblx0XHRcdFx0Y29uc3Qgb3V0Z29pbmdZZWFyID0gbmV3IERhdGUob3V0Z29pbmcuZGF0ZSkuZ2V0RnVsbFllYXIoKVxuXHRcdFx0XHRyZXR1cm4gb3V0Z29pbmcuY3JlYXRvci5faWQudG9TdHJpbmcoKSA9PT0gdXNlcklkLnRvU3RyaW5nKCkgJiYgb3V0Z29pbmdZZWFyID09PSBjdXJyZW50WWVhclxuXHRcdFx0fSlcblxuXHRcdFx0c2V0QWxsT3V0Z29pbmdzKGZpbHRlcmVkT3V0Z29pbmdzKVxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhlcnJvcilcblx0XHR9IGZpbmFsbHkge1xuXHRcdFx0c2V0TG9hZGluZyhmYWxzZSlcblx0XHR9XG5cdH1cblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGZldGNoT3V0Z29pbmdzKClcblx0fSwgW2xvYWRpbmddKVxuXG5cdHJldHVybiAoXG5cdFx0PHNlY3Rpb24gY2xhc3NOYW1lPSdjb250YWluZXIgcHktMjAgdGV4dC1ibGFjayc+XG5cdFx0XHQ8U2VjdGlvblRpdGxlIHRpdGxlPSdCaWxhbnMgd3lkYXRrw7N3JyAvPlxuXHRcdFx0e2FsbE91dGdvaW5ncy5sZW5ndGggPiAwID8gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBmbGV4LXdyYXAgZ2FwLTYgcHktNic+XG4gICAgICAgICAgICAgICAgICAgIDxPdXRnb2luZ3NCeU1vbnRoIGFsbE91dGdvaW5ncz17YWxsT3V0Z29pbmdzfS8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cdFx0XHQpIDogKFxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9J210LTEwIG1kOnRleHQtbGcgdGV4dC1jZW50ZXInPldjenl0eXdhbmllIGRhbnljaC4uLjwvcD5cblx0XHRcdCl9XG5cdFx0PC9zZWN0aW9uPlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhbGFuY2VPZk91dGdvaW5nc1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlU2Vzc2lvbiIsIlNlY3Rpb25UaXRsZSIsIk91dGdvaW5nc0J5TW9udGgiLCJCYWxhbmNlT2ZPdXRnb2luZ3MiLCJhbGxPdXRnb2luZ3MiLCJzZXRBbGxPdXRnb2luZ3MiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImRhdGEiLCJzZXNzaW9uIiwidXNlcklkIiwidXNlciIsImlkIiwiZmV0Y2hPdXRnb2luZ3MiLCJyZXNwb25zZSIsImZldGNoIiwianNvbiIsImN1cnJlbnRZZWFyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZmlsdGVyZWRPdXRnb2luZ3MiLCJmaWx0ZXIiLCJvdXRnb2luZyIsIm91dGdvaW5nWWVhciIsImRhdGUiLCJjcmVhdG9yIiwiX2lkIiwidG9TdHJpbmciLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwidGl0bGUiLCJsZW5ndGgiLCJkaXYiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/balance-of-outgoings/page.tsx\n"));

/***/ })

});