"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-client)/./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"0d145a7ff838\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3R5bGVzL2dsb2JhbHMuY3NzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvZ2xvYmFscy5jc3M/N2VmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjBkMTQ1YTdmZjgzOFwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./styles/globals.css\n"));

/***/ }),

/***/ "(app-client)/./components/HomePage/Navigation.tsx":
/*!********************************************!*\
  !*** ./components/HomePage/Navigation.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_UI_Brand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/UI/Brand */ \"(app-client)/./components/UI/Brand.tsx\");\n/* harmony import */ var _components_UI_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/UI/Button */ \"(app-client)/./components/UI/Button.tsx\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/react */ \"(app-client)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Navigation = ()=>{\n    var _session_user;\n    _s();\n    const [isScrolled, setIsScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession)();\n    const [providers, setProviders] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            var _document_getElementById;\n            const scrollPosition = window.scrollY;\n            const headerHeight = ((_document_getElementById = document.getElementById(\"header\")) === null || _document_getElementById === void 0 ? void 0 : _document_getElementById.offsetHeight) || 0;\n            setIsScrolled(scrollPosition > headerHeight);\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (async ()=>{\n            const res = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.getProviders)();\n            setProviders(res);\n        })();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-row justify-between md:justify-around items-center fixed top-0 left-0 w-screen h-20 transition-colors duration-300 z-100 \".concat(isScrolled ? \"bg-black bg-opacity-60\" : \"\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_Brand__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                lineNumber: 50,\n                columnNumber: 4\n            }, undefined),\n            providers && Object.values(providers).map((provider)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    onClick: ()=>{\n                        (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.signIn)(provider.id);\n                    },\n                    children: \"Zaloguj się\"\n                }, provider.name, false, {\n                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 6\n                }, undefined)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: ()=>{\n                    (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.signOut)();\n                },\n                children: \"Wyloguj się\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                lineNumber: 61,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: session === null || session === void 0 ? void 0 : (_session_user = session.user) === null || _session_user === void 0 ? void 0 : _session_user.email\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                lineNumber: 67,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n        lineNumber: 46,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Navigation, \"RP92uhgvDK+S9pT364Ild75TfII=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession\n    ];\n});\n_c = Navigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\nvar _c;\n$RefreshReg$(_c, \"Navigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9Ib21lUGFnZS9OYXZpZ2F0aW9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRWtEO0FBQ1Y7QUFDRTtBQUlpQztBQUszRSxNQUFNUyxhQUFhO1FBcURaQzs7SUFwRE4sTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdYLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sRUFBRVksTUFBTUgsT0FBTyxFQUFFLEdBQUdILDJEQUFVQTtJQUVwQyxNQUFNLENBQUNPLFdBQVdDLGFBQWEsR0FBR2QsK0NBQVFBLENBR2hDO0lBRVZDLGdEQUFTQSxDQUFDO1FBQ1QsTUFBTWMsZUFBZTtnQkFFQ0M7WUFEckIsTUFBTUMsaUJBQWlCQyxPQUFPQztZQUM5QixNQUFNQyxlQUFlSixDQUFBQSxDQUFBQSwyQkFBQUEsU0FBU0ssZUFBZSx1QkFBeEJMLHNDQUFBQSxLQUFBQSxJQUFBQSx5QkFBbUNNLFlBQVcsS0FBSztZQUV4RVgsY0FBY00saUJBQWlCRztRQUNoQztRQUVBRixPQUFPSyxpQkFBaUIsVUFBVVI7UUFFbEMsT0FBTztZQUNORyxPQUFPTSxvQkFBb0IsVUFBVVQ7UUFDdEM7SUFDRCxHQUFHLEVBQUU7SUFFTGQsZ0RBQVNBLENBQUM7UUFDUDtZQUNELE1BQU13QixNQUFNLE1BQU1sQiw2REFBWUE7WUFDOUJPLGFBQWFXO1FBQ2Q7SUFDRCxHQUFHLEVBQUU7SUFFTCxxQkFDQyw4REFBQ0M7UUFDQUMsV0FBVyxzSUFFVixPQURBakIsYUFBYSwyQkFBMkI7OzBCQUV6Qyw4REFBQ1IsNERBQUtBOzs7OztZQUNMVyxhQUNBZSxPQUFPQyxPQUFPaEIsV0FBV2lCLElBQUlDLENBQUFBLHlCQUM1Qiw4REFBQzVCLDZEQUFNQTtvQkFFTjZCLFNBQVM7d0JBQ1I1Qix1REFBTUEsQ0FBQzJCLFNBQVNFO29CQUNqQjs4QkFBRzttQkFIRUYsU0FBU0c7Ozs7OzBCQU9qQiw4REFBQy9CLDZEQUFNQTtnQkFDTjZCLFNBQVM7b0JBQ1IzQix3REFBT0E7Z0JBQ1I7MEJBQUc7Ozs7OzswQkFHSiw4REFBQzhCOzBCQUFHMUIsb0JBQUFBLHFCQUFBQSxLQUFBQSxJQUFBQSxDQUFBQSxnQkFBQUEsUUFBUzJCLGtCQUFUM0IsMkJBQUFBLEtBQUFBLElBQUFBLGNBQWU0Qjs7Ozs7Ozs7Ozs7O0FBSXRCO0dBekRNN0I7O1FBRXFCRix1REFBVUE7OztLQUYvQkU7QUEyRE4sK0RBQWVBLFVBQVVBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lUGFnZS9OYXZpZ2F0aW9uLnRzeD84MTA5Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJyYW5kIGZyb20gJ0Bjb21wb25lbnRzL1VJL0JyYW5kJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAY29tcG9uZW50cy9VSS9CdXR0b24nXG5cbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgc2lnbkluLCBzaWduT3V0LCB1c2VTZXNzaW9uLCBnZXRQcm92aWRlcnMgfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnXG5cbmltcG9ydCB7IExpdGVyYWxVbmlvbiwgQ2xpZW50U2FmZVByb3ZpZGVyIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0J1xuaW1wb3J0IHsgQnVpbHRJblByb3ZpZGVyVHlwZSB9IGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMnXG5cbmNvbnN0IE5hdmlnYXRpb24gPSAoKSA9PiB7XG5cdGNvbnN0IFtpc1Njcm9sbGVkLCBzZXRJc1Njcm9sbGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuXHRjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKVxuXG5cdGNvbnN0IFtwcm92aWRlcnMsIHNldFByb3ZpZGVyc10gPSB1c2VTdGF0ZTxSZWNvcmQ8XG5cdFx0TGl0ZXJhbFVuaW9uPEJ1aWx0SW5Qcm92aWRlclR5cGUsIHN0cmluZz4sXG5cdFx0Q2xpZW50U2FmZVByb3ZpZGVyXG5cdD4gfCBudWxsPihudWxsKVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuXHRcdFx0Y29uc3Qgc2Nyb2xsUG9zaXRpb24gPSB3aW5kb3cuc2Nyb2xsWVxuXHRcdFx0Y29uc3QgaGVhZGVySGVpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcicpPy5vZmZzZXRIZWlnaHQgfHwgMFxuXG5cdFx0XHRzZXRJc1Njcm9sbGVkKHNjcm9sbFBvc2l0aW9uID4gaGVhZGVySGVpZ2h0KVxuXHRcdH1cblxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpXG5cblx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbClcblx0XHR9XG5cdH0sIFtdKVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Oyhhc3luYyAoKSA9PiB7XG5cdFx0XHRjb25zdCByZXMgPSBhd2FpdCBnZXRQcm92aWRlcnMoKVxuXHRcdFx0c2V0UHJvdmlkZXJzKHJlcylcblx0XHR9KSgpXG5cdH0sIFtdKVxuXG5cdHJldHVybiAoXG5cdFx0PGRpdlxuXHRcdFx0Y2xhc3NOYW1lPXtgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gbWQ6anVzdGlmeS1hcm91bmQgaXRlbXMtY2VudGVyIGZpeGVkIHRvcC0wIGxlZnQtMCB3LXNjcmVlbiBoLTIwIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTMwMCB6LTEwMCAke1xuXHRcdFx0XHRpc1Njcm9sbGVkID8gJ2JnLWJsYWNrIGJnLW9wYWNpdHktNjAnIDogJydcblx0XHRcdH1gfT5cblx0XHRcdDxCcmFuZCAvPlxuXHRcdFx0e3Byb3ZpZGVycyAmJlxuXHRcdFx0XHRPYmplY3QudmFsdWVzKHByb3ZpZGVycykubWFwKHByb3ZpZGVyID0+IChcblx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRrZXk9e3Byb3ZpZGVyLm5hbWV9XG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHNpZ25Jbihwcm92aWRlci5pZClcblx0XHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0WmFsb2d1aiBzacSZXG5cdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdCkpfVxuXHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0c2lnbk91dCgpXG5cdFx0XHRcdH19PlxuXHRcdFx0XHRXeWxvZ3VqIHNpxJlcblx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0PHA+e3Nlc3Npb24/LnVzZXI/LmVtYWlsfTwvcD5cblx0XHRcdFxuXHRcdDwvZGl2PlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb25cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQnJhbmQiLCJCdXR0b24iLCJzaWduSW4iLCJzaWduT3V0IiwidXNlU2Vzc2lvbiIsImdldFByb3ZpZGVycyIsIk5hdmlnYXRpb24iLCJzZXNzaW9uIiwiaXNTY3JvbGxlZCIsInNldElzU2Nyb2xsZWQiLCJkYXRhIiwicHJvdmlkZXJzIiwic2V0UHJvdmlkZXJzIiwiaGFuZGxlU2Nyb2xsIiwiZG9jdW1lbnQiLCJzY3JvbGxQb3NpdGlvbiIsIndpbmRvdyIsInNjcm9sbFkiLCJoZWFkZXJIZWlnaHQiLCJnZXRFbGVtZW50QnlJZCIsIm9mZnNldEhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVzIiwiZGl2IiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwidmFsdWVzIiwibWFwIiwicHJvdmlkZXIiLCJvbkNsaWNrIiwiaWQiLCJuYW1lIiwicCIsInVzZXIiLCJlbWFpbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/HomePage/Navigation.tsx\n"));

/***/ })

});