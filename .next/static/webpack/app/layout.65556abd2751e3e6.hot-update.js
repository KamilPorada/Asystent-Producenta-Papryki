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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"45ce60d2d4f3\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3R5bGVzL2dsb2JhbHMuY3NzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvZ2xvYmFscy5jc3M/N2VmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjQ1Y2U2MGQyZDRmM1wiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./styles/globals.css\n"));

/***/ }),

/***/ "(app-client)/./components/HomePage/Navigation.tsx":
/*!********************************************!*\
  !*** ./components/HomePage/Navigation.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_UI_Brand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/UI/Brand */ \"(app-client)/./components/UI/Brand.tsx\");\n/* harmony import */ var _components_UI_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/UI/Button */ \"(app-client)/./components/UI/Button.tsx\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/react */ \"(app-client)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Navigation = ()=>{\n    var _session_user, _session_user1, _session_user2;\n    _s();\n    const [isScrolled, setIsScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession)();\n    const [providers, setProviders] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            var _document_getElementById;\n            const scrollPosition = window.scrollY;\n            const headerHeight = ((_document_getElementById = document.getElementById(\"header\")) === null || _document_getElementById === void 0 ? void 0 : _document_getElementById.offsetHeight) || 0;\n            setIsScrolled(scrollPosition > headerHeight);\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (async ()=>{\n            const res = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.getProviders)();\n            setProviders(res);\n        })();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-row justify-between md:justify-around items-center fixed top-0 left-0 w-screen h-20 transition-colors duration-300 z-100 \".concat(isScrolled ? \"bg-black bg-opacity-60\" : \"\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_Brand__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                lineNumber: 51,\n                columnNumber: 4\n            }, undefined),\n            providers && !(session === null || session === void 0 ? void 0 : (_session_user = session.user) === null || _session_user === void 0 ? void 0 : _session_user.name) && Object.values(providers).map((provider)=>// <Button\n                // \tkey={provider.name}\n                // \tonClick={() => {\n                // \t\tsignIn(provider.id)\n                // \t}}\n                // \tclassName='hover:bg-red-600 transition-colors duration-300'>\n                // \tZaloguj się\n                // \t<i className='fa-brands fa-google ml-3 text-white'></i>\n                // </Button>\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row justify-between mx-3 sm:text-lg rounded font-semibold bg-blue-600\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-white p-2 m-1\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                alt: 'Google \"G\" Logo',\n                                src: \"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png\",\n                                className: \"w-7\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 8\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 7\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            children: \"Zaloguj się\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 7\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 6\n                }, undefined)),\n            (session === null || session === void 0 ? void 0 : (_session_user1 = session.user) === null || _session_user1 === void 0 ? void 0 : _session_user1.name) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: ()=>{\n                            (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.signOut)();\n                        },\n                        children: \"Wyloguj się\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 6\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: session === null || session === void 0 ? void 0 : (_session_user2 = session.user) === null || _session_user2 === void 0 ? void 0 : _session_user2.name\n                    }, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 6\n                    }, undefined)\n                ]\n            }, void 0, true)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n        lineNumber: 47,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Navigation, \"RP92uhgvDK+S9pT364Ild75TfII=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession\n    ];\n});\n_c = Navigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\nvar _c;\n$RefreshReg$(_c, \"Navigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9Ib21lUGFnZS9OYXZpZ2F0aW9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRWtEO0FBQ1Y7QUFDRTtBQUlpQztBQU0zRSxNQUFNUSxhQUFhO1FBc0NkQyxlQXNCREEsZ0JBUUtBOztJQW5FUixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR1YsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxFQUFFVyxNQUFNSCxPQUFPLEVBQUUsR0FBR0gsMkRBQVVBO0lBRXBDLE1BQU0sQ0FBQ08sV0FBV0MsYUFBYSxHQUFHYiwrQ0FBUUEsQ0FHaEM7SUFFVkMsZ0RBQVNBLENBQUM7UUFDVCxNQUFNYSxlQUFlO2dCQUVDQztZQURyQixNQUFNQyxpQkFBaUJDLE9BQU9DO1lBQzlCLE1BQU1DLGVBQWVKLENBQUFBLENBQUFBLDJCQUFBQSxTQUFTSyxlQUFlLHVCQUF4Qkwsc0NBQUFBLEtBQUFBLElBQUFBLHlCQUFtQ00sWUFBVyxLQUFLO1lBRXhFWCxjQUFjTSxpQkFBaUJHO1FBQ2hDO1FBRUFGLE9BQU9LLGlCQUFpQixVQUFVUjtRQUVsQyxPQUFPO1lBQ05HLE9BQU9NLG9CQUFvQixVQUFVVDtRQUN0QztJQUNELEdBQUcsRUFBRTtJQUVMYixnREFBU0EsQ0FBQztRQUNQO1lBQ0QsTUFBTXVCLE1BQU0sTUFBTWxCLDZEQUFZQTtZQUM5Qk8sYUFBYVc7UUFDZDtJQUNELEdBQUcsRUFBRTtJQUVMLHFCQUNDLDhEQUFDQztRQUNBQyxXQUFXLHNJQUVWLE9BREFqQixhQUFhLDJCQUEyQjs7MEJBRXpDLDhEQUFDUCw0REFBS0E7Ozs7O1lBQ0xVLGFBQ0EsQ0FBQ0osQ0FBQUEsb0JBQUFBLHFCQUFBQSxLQUFBQSxJQUFBQSxDQUFBQSxnQkFBQUEsUUFBU21CLGtCQUFUbkIsMkJBQUFBLEtBQUFBLElBQUFBLGNBQWVvQixJQUFILEtBQ2JDLE9BQU9DLE9BQU9sQixXQUFXbUIsSUFBSUMsQ0FBQUEsV0FDNUIsVUFBVTtnQkFDVix1QkFBdUI7Z0JBQ3ZCLG9CQUFvQjtnQkFDcEIsd0JBQXdCO2dCQUN4QixNQUFNO2dCQUNOLGdFQUFnRTtnQkFDaEUsZUFBZTtnQkFDZiwyREFBMkQ7Z0JBQzNELFlBQVk7OEJBQ1osOERBQUNQO29CQUFJQyxXQUFVOztzQ0FDZCw4REFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ2QsNEVBQUNPO2dDQUNBQyxLQUFJO2dDQUNKQyxLQUFJO2dDQUNKVCxXQUFVOzs7Ozs7Ozs7OztzQ0FHWiw4REFBQ1U7c0NBQU87Ozs7Ozs7Ozs7OztZQUdWNUIsQ0FBQUEsb0JBQUFBLHFCQUFBQSxLQUFBQSxJQUFBQSxDQUFBQSxpQkFBQUEsUUFBU21CLGtCQUFUbkIsNEJBQUFBLEtBQUFBLElBQUFBLGVBQWVvQixJQUFILG1CQUNaOztrQ0FDQyw4REFBQ3pCLDZEQUFNQTt3QkFDTmtDLFNBQVM7NEJBQ1JqQyx3REFBT0E7d0JBQ1I7a0NBQUc7Ozs7OztrQ0FHSiw4REFBQ2tDO2tDQUFHOUIsb0JBQUFBLHFCQUFBQSxLQUFBQSxJQUFBQSxDQUFBQSxpQkFBQUEsUUFBU21CLGtCQUFUbkIsNEJBQUFBLEtBQUFBLElBQUFBLGVBQWVvQjs7Ozs7Ozs7Ozs7Ozs7QUFLeEI7R0F6RU1yQjs7UUFFcUJGLHVEQUFVQTs7O0tBRi9CRTtBQTJFTiwrREFBZUEsVUFBVUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hvbWVQYWdlL05hdmlnYXRpb24udHN4PzgxMDkiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQnJhbmQgZnJvbSAnQGNvbXBvbmVudHMvVUkvQnJhbmQnXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0Bjb21wb25lbnRzL1VJL0J1dHRvbidcblxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyBzaWduSW4sIHNpZ25PdXQsIHVzZVNlc3Npb24sIGdldFByb3ZpZGVycyB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCdcbmltcG9ydCBnb29nbGUgZnJvbSAnQHB1YmxpYy9hc3NldHMvaW1nL2dvb2dsZS5wbmcnXG5cbmltcG9ydCB7IExpdGVyYWxVbmlvbiwgQ2xpZW50U2FmZVByb3ZpZGVyIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0J1xuaW1wb3J0IHsgQnVpbHRJblByb3ZpZGVyVHlwZSB9IGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMnXG5cbmNvbnN0IE5hdmlnYXRpb24gPSAoKSA9PiB7XG5cdGNvbnN0IFtpc1Njcm9sbGVkLCBzZXRJc1Njcm9sbGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuXHRjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKVxuXG5cdGNvbnN0IFtwcm92aWRlcnMsIHNldFByb3ZpZGVyc10gPSB1c2VTdGF0ZTxSZWNvcmQ8XG5cdFx0TGl0ZXJhbFVuaW9uPEJ1aWx0SW5Qcm92aWRlclR5cGUsIHN0cmluZz4sXG5cdFx0Q2xpZW50U2FmZVByb3ZpZGVyXG5cdD4gfCBudWxsPihudWxsKVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuXHRcdFx0Y29uc3Qgc2Nyb2xsUG9zaXRpb24gPSB3aW5kb3cuc2Nyb2xsWVxuXHRcdFx0Y29uc3QgaGVhZGVySGVpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcicpPy5vZmZzZXRIZWlnaHQgfHwgMFxuXG5cdFx0XHRzZXRJc1Njcm9sbGVkKHNjcm9sbFBvc2l0aW9uID4gaGVhZGVySGVpZ2h0KVxuXHRcdH1cblxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpXG5cblx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbClcblx0XHR9XG5cdH0sIFtdKVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Oyhhc3luYyAoKSA9PiB7XG5cdFx0XHRjb25zdCByZXMgPSBhd2FpdCBnZXRQcm92aWRlcnMoKVxuXHRcdFx0c2V0UHJvdmlkZXJzKHJlcylcblx0XHR9KSgpXG5cdH0sIFtdKVxuXG5cdHJldHVybiAoXG5cdFx0PGRpdlxuXHRcdFx0Y2xhc3NOYW1lPXtgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gbWQ6anVzdGlmeS1hcm91bmQgaXRlbXMtY2VudGVyIGZpeGVkIHRvcC0wIGxlZnQtMCB3LXNjcmVlbiBoLTIwIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTMwMCB6LTEwMCAke1xuXHRcdFx0XHRpc1Njcm9sbGVkID8gJ2JnLWJsYWNrIGJnLW9wYWNpdHktNjAnIDogJydcblx0XHRcdH1gfT5cblx0XHRcdDxCcmFuZCAvPlxuXHRcdFx0e3Byb3ZpZGVycyAmJlxuXHRcdFx0XHQhc2Vzc2lvbj8udXNlcj8ubmFtZSAmJlxuXHRcdFx0XHRPYmplY3QudmFsdWVzKHByb3ZpZGVycykubWFwKHByb3ZpZGVyID0+IChcblx0XHRcdFx0XHQvLyA8QnV0dG9uXG5cdFx0XHRcdFx0Ly8gXHRrZXk9e3Byb3ZpZGVyLm5hbWV9XG5cdFx0XHRcdFx0Ly8gXHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0Ly8gXHRcdHNpZ25Jbihwcm92aWRlci5pZClcblx0XHRcdFx0XHQvLyBcdH19XG5cdFx0XHRcdFx0Ly8gXHRjbGFzc05hbWU9J2hvdmVyOmJnLXJlZC02MDAgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMzAwJz5cblx0XHRcdFx0XHQvLyBcdFphbG9ndWogc2nEmVxuXHRcdFx0XHRcdC8vIFx0PGkgY2xhc3NOYW1lPSdmYS1icmFuZHMgZmEtZ29vZ2xlIG1sLTMgdGV4dC13aGl0ZSc+PC9pPlxuXHRcdFx0XHRcdC8vIDwvQnV0dG9uPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBteC0zIHNtOnRleHQtbGcgcm91bmRlZCBmb250LXNlbWlib2xkIGJnLWJsdWUtNjAwJz5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdiZy13aGl0ZSBwLTIgbS0xJz5cblx0XHRcdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0XHRcdGFsdD0nR29vZ2xlIFwiR1wiIExvZ28nXG5cdFx0XHRcdFx0XHRcdFx0c3JjPSdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iLzUvNTMvR29vZ2xlXyUyMkclMjJfTG9nby5zdmcvNTEycHgtR29vZ2xlXyUyMkclMjJfTG9nby5zdmcucG5nJ1xuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0ndy03J1xuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uPlphbG9ndWogc2nEmTwvYnV0dG9uPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQpKX1cblx0XHRcdHtzZXNzaW9uPy51c2VyPy5uYW1lICYmIChcblx0XHRcdFx0PD5cblx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHNpZ25PdXQoKVxuXHRcdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0XHRXeWxvZ3VqIHNpxJlcblx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHQ8cD57c2Vzc2lvbj8udXNlcj8ubmFtZX08L3A+XG5cdFx0XHRcdDwvPlxuXHRcdFx0KX1cblx0XHQ8L2Rpdj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkJyYW5kIiwiQnV0dG9uIiwic2lnbk91dCIsInVzZVNlc3Npb24iLCJnZXRQcm92aWRlcnMiLCJOYXZpZ2F0aW9uIiwic2Vzc2lvbiIsImlzU2Nyb2xsZWQiLCJzZXRJc1Njcm9sbGVkIiwiZGF0YSIsInByb3ZpZGVycyIsInNldFByb3ZpZGVycyIsImhhbmRsZVNjcm9sbCIsImRvY3VtZW50Iiwic2Nyb2xsUG9zaXRpb24iLCJ3aW5kb3ciLCJzY3JvbGxZIiwiaGVhZGVySGVpZ2h0IiwiZ2V0RWxlbWVudEJ5SWQiLCJvZmZzZXRIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlcyIsImRpdiIsImNsYXNzTmFtZSIsInVzZXIiLCJuYW1lIiwiT2JqZWN0IiwidmFsdWVzIiwibWFwIiwicHJvdmlkZXIiLCJpbWciLCJhbHQiLCJzcmMiLCJidXR0b24iLCJvbkNsaWNrIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/HomePage/Navigation.tsx\n"));

/***/ })

});