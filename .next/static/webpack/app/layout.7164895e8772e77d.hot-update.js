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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"599efada21cb\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3R5bGVzL2dsb2JhbHMuY3NzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvZ2xvYmFscy5jc3M/N2VmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjU5OWVmYWRhMjFjYlwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./styles/globals.css\n"));

/***/ }),

/***/ "(app-client)/./components/HomePage/Navigation.tsx":
/*!********************************************!*\
  !*** ./components/HomePage/Navigation.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_UI_Brand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/UI/Brand */ \"(app-client)/./components/UI/Brand.tsx\");\n/* harmony import */ var _components_UI_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/UI/Button */ \"(app-client)/./components/UI/Button.tsx\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/react */ \"(app-client)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Navigation = ()=>{\n    var _session_user, _session_user1, _session_user2;\n    _s();\n    const [isScrolled, setIsScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession)();\n    const [providers, setProviders] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            var _document_getElementById;\n            const scrollPosition = window.scrollY;\n            const headerHeight = ((_document_getElementById = document.getElementById(\"header\")) === null || _document_getElementById === void 0 ? void 0 : _document_getElementById.offsetHeight) || 0;\n            setIsScrolled(scrollPosition > headerHeight);\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (async ()=>{\n            const res = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.getProviders)();\n            setProviders(res);\n        })();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-row justify-between md:justify-around items-center fixed top-0 left-0 w-screen h-20 transition-colors duration-300 z-100 \".concat(isScrolled ? \"bg-black bg-opacity-60\" : \"\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_Brand__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                lineNumber: 51,\n                columnNumber: 4\n            }, undefined),\n            providers && !(session === null || session === void 0 ? void 0 : (_session_user = session.user) === null || _session_user === void 0 ? void 0 : _session_user.name) && Object.values(providers).map((provider)=>// <Button\n                // \tkey={provider.name}\n                // \tonClick={() => {\n                // \t\tsignIn(provider.id)\n                // \t}}\n                // \tclassName='hover:bg-red-600 transition-colors duration-300'>\n                // \tZaloguj się\n                // \t<i className='fa-brands fa-google ml-3 text-white'></i>\n                // </Button>\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"px-6 py-2 mx-3 sm:text-lg rounded-md font-semibold bg-blue-600\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            width: \"25\",\n                            alt: 'Google \"G\" Logo',\n                            src: \"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 7\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            children: \"Zaloguj się\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 7\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 6\n                }, undefined)),\n            (session === null || session === void 0 ? void 0 : (_session_user1 = session.user) === null || _session_user1 === void 0 ? void 0 : _session_user1.name) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: ()=>{\n                            (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.signOut)();\n                        },\n                        children: \"Wyloguj się\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 6\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: session === null || session === void 0 ? void 0 : (_session_user2 = session.user) === null || _session_user2 === void 0 ? void 0 : _session_user2.name\n                    }, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 6\n                    }, undefined)\n                ]\n            }, void 0, true)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n        lineNumber: 47,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Navigation, \"RP92uhgvDK+S9pT364Ild75TfII=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession\n    ];\n});\n_c = Navigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\nvar _c;\n$RefreshReg$(_c, \"Navigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9Ib21lUGFnZS9OYXZpZ2F0aW9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRWtEO0FBQ1Y7QUFDRTtBQUlpQztBQU0zRSxNQUFNUSxhQUFhO1FBc0NkQyxlQWdCREEsZ0JBUUtBOztJQTdEUixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR1YsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxFQUFFVyxNQUFNSCxPQUFPLEVBQUUsR0FBR0gsMkRBQVVBO0lBRXBDLE1BQU0sQ0FBQ08sV0FBV0MsYUFBYSxHQUFHYiwrQ0FBUUEsQ0FHaEM7SUFFVkMsZ0RBQVNBLENBQUM7UUFDVCxNQUFNYSxlQUFlO2dCQUVDQztZQURyQixNQUFNQyxpQkFBaUJDLE9BQU9DO1lBQzlCLE1BQU1DLGVBQWVKLENBQUFBLENBQUFBLDJCQUFBQSxTQUFTSyxlQUFlLHVCQUF4Qkwsc0NBQUFBLEtBQUFBLElBQUFBLHlCQUFtQ00sWUFBVyxLQUFLO1lBRXhFWCxjQUFjTSxpQkFBaUJHO1FBQ2hDO1FBRUFGLE9BQU9LLGlCQUFpQixVQUFVUjtRQUVsQyxPQUFPO1lBQ05HLE9BQU9NLG9CQUFvQixVQUFVVDtRQUN0QztJQUNELEdBQUcsRUFBRTtJQUVMYixnREFBU0EsQ0FBQztRQUNQO1lBQ0QsTUFBTXVCLE1BQU0sTUFBTWxCLDZEQUFZQTtZQUM5Qk8sYUFBYVc7UUFDZDtJQUNELEdBQUcsRUFBRTtJQUVMLHFCQUNDLDhEQUFDQztRQUNBQyxXQUFXLHNJQUVWLE9BREFqQixhQUFhLDJCQUEyQjs7MEJBRXpDLDhEQUFDUCw0REFBS0E7Ozs7O1lBQ0xVLGFBQ0EsQ0FBQ0osQ0FBQUEsb0JBQUFBLHFCQUFBQSxLQUFBQSxJQUFBQSxDQUFBQSxnQkFBQUEsUUFBU21CLGtCQUFUbkIsMkJBQUFBLEtBQUFBLElBQUFBLGNBQWVvQixJQUFILEtBQ2JDLE9BQU9DLE9BQU9sQixXQUFXbUIsSUFBSUMsQ0FBQUEsV0FDNUIsVUFBVTtnQkFDVix1QkFBdUI7Z0JBQ3ZCLG9CQUFvQjtnQkFDcEIsd0JBQXdCO2dCQUN4QixNQUFNO2dCQUNOLGdFQUFnRTtnQkFDaEUsZUFBZTtnQkFDZiwyREFBMkQ7Z0JBQzNELFlBQVk7OEJBQ1osOERBQUNQO29CQUFJQyxXQUFVOztzQ0FDZCw4REFBQ087NEJBQUlDLE9BQU07NEJBQUtDLEtBQUk7NEJBQTRCQyxLQUFJOzs7Ozs7c0NBQ3BELDhEQUFDQztzQ0FBTzs7Ozs7Ozs7Ozs7O1lBR1Y3QixDQUFBQSxvQkFBQUEscUJBQUFBLEtBQUFBLElBQUFBLENBQUFBLGlCQUFBQSxRQUFTbUIsa0JBQVRuQiw0QkFBQUEsS0FBQUEsSUFBQUEsZUFBZW9CLElBQUgsbUJBQ1o7O2tDQUNDLDhEQUFDekIsNkRBQU1BO3dCQUNObUMsU0FBUzs0QkFDUmxDLHdEQUFPQTt3QkFDUjtrQ0FBRzs7Ozs7O2tDQUdKLDhEQUFDbUM7a0NBQUcvQixvQkFBQUEscUJBQUFBLEtBQUFBLElBQUFBLENBQUFBLGlCQUFBQSxRQUFTbUIsa0JBQVRuQiw0QkFBQUEsS0FBQUEsSUFBQUEsZUFBZW9COzs7Ozs7Ozs7Ozs7OztBQUt4QjtHQW5FTXJCOztRQUVxQkYsdURBQVVBOzs7S0FGL0JFO0FBcUVOLCtEQUFlQSxVQUFVQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSG9tZVBhZ2UvTmF2aWdhdGlvbi50c3g/ODEwOSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBCcmFuZCBmcm9tICdAY29tcG9uZW50cy9VSS9CcmFuZCdcbmltcG9ydCBCdXR0b24gZnJvbSAnQGNvbXBvbmVudHMvVUkvQnV0dG9uJ1xuXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IHNpZ25Jbiwgc2lnbk91dCwgdXNlU2Vzc2lvbiwgZ2V0UHJvdmlkZXJzIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0J1xuaW1wb3J0IGdvb2dsZSBmcm9tICdAcHVibGljL2Fzc2V0cy9pbWcvZ29vZ2xlLnBuZydcblxuaW1wb3J0IHsgTGl0ZXJhbFVuaW9uLCBDbGllbnRTYWZlUHJvdmlkZXIgfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnXG5pbXBvcnQgeyBCdWlsdEluUHJvdmlkZXJUeXBlIH0gZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycydcblxuY29uc3QgTmF2aWdhdGlvbiA9ICgpID0+IHtcblx0Y29uc3QgW2lzU2Nyb2xsZWQsIHNldElzU2Nyb2xsZWRdID0gdXNlU3RhdGUoZmFsc2UpXG5cdGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpXG5cblx0Y29uc3QgW3Byb3ZpZGVycywgc2V0UHJvdmlkZXJzXSA9IHVzZVN0YXRlPFJlY29yZDxcblx0XHRMaXRlcmFsVW5pb248QnVpbHRJblByb3ZpZGVyVHlwZSwgc3RyaW5nPixcblx0XHRDbGllbnRTYWZlUHJvdmlkZXJcblx0PiB8IG51bGw+KG51bGwpXG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBzY3JvbGxQb3NpdGlvbiA9IHdpbmRvdy5zY3JvbGxZXG5cdFx0XHRjb25zdCBoZWFkZXJIZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJyk/Lm9mZnNldEhlaWdodCB8fCAwXG5cblx0XHRcdHNldElzU2Nyb2xsZWQoc2Nyb2xsUG9zaXRpb24gPiBoZWFkZXJIZWlnaHQpXG5cdFx0fVxuXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbClcblxuXHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKVxuXHRcdH1cblx0fSwgW10pXG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHQ7KGFzeW5jICgpID0+IHtcblx0XHRcdGNvbnN0IHJlcyA9IGF3YWl0IGdldFByb3ZpZGVycygpXG5cdFx0XHRzZXRQcm92aWRlcnMocmVzKVxuXHRcdH0pKClcblx0fSwgW10pXG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2XG5cdFx0XHRjbGFzc05hbWU9e2BmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBtZDpqdXN0aWZ5LWFyb3VuZCBpdGVtcy1jZW50ZXIgZml4ZWQgdG9wLTAgbGVmdC0wIHctc2NyZWVuIGgtMjAgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMzAwIHotMTAwICR7XG5cdFx0XHRcdGlzU2Nyb2xsZWQgPyAnYmctYmxhY2sgYmctb3BhY2l0eS02MCcgOiAnJ1xuXHRcdFx0fWB9PlxuXHRcdFx0PEJyYW5kIC8+XG5cdFx0XHR7cHJvdmlkZXJzICYmXG5cdFx0XHRcdCFzZXNzaW9uPy51c2VyPy5uYW1lICYmXG5cdFx0XHRcdE9iamVjdC52YWx1ZXMocHJvdmlkZXJzKS5tYXAocHJvdmlkZXIgPT4gKFxuXHRcdFx0XHRcdC8vIDxCdXR0b25cblx0XHRcdFx0XHQvLyBcdGtleT17cHJvdmlkZXIubmFtZX1cblx0XHRcdFx0XHQvLyBcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHQvLyBcdFx0c2lnbkluKHByb3ZpZGVyLmlkKVxuXHRcdFx0XHRcdC8vIFx0fX1cblx0XHRcdFx0XHQvLyBcdGNsYXNzTmFtZT0naG92ZXI6YmctcmVkLTYwMCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0zMDAnPlxuXHRcdFx0XHRcdC8vIFx0WmFsb2d1aiBzacSZXG5cdFx0XHRcdFx0Ly8gXHQ8aSBjbGFzc05hbWU9J2ZhLWJyYW5kcyBmYS1nb29nbGUgbWwtMyB0ZXh0LXdoaXRlJz48L2k+XG5cdFx0XHRcdFx0Ly8gPC9CdXR0b24+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3B4LTYgcHktMiBteC0zIHNtOnRleHQtbGcgcm91bmRlZC1tZCBmb250LXNlbWlib2xkIGJnLWJsdWUtNjAwJz5cblx0XHRcdFx0XHRcdDxpbWcgd2lkdGg9XCIyNVwiIGFsdD1cIkdvb2dsZSAmcXVvdDtHJnF1b3Q7IExvZ29cIiBzcmM9XCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iLzUvNTMvR29vZ2xlXyUyMkclMjJfTG9nby5zdmcvNTEycHgtR29vZ2xlXyUyMkclMjJfTG9nby5zdmcucG5nXCIvPlxuXHRcdFx0XHRcdFx0PGJ1dHRvbj5aYWxvZ3VqIHNpxJk8L2J1dHRvbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KSl9XG5cdFx0XHR7c2Vzc2lvbj8udXNlcj8ubmFtZSAmJiAoXG5cdFx0XHRcdDw+XG5cdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRzaWduT3V0KClcblx0XHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0V3lsb2d1aiBzacSZXG5cdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0PHA+e3Nlc3Npb24/LnVzZXI/Lm5hbWV9PC9wPlxuXHRcdFx0XHQ8Lz5cblx0XHRcdCl9XG5cdFx0PC9kaXY+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJCcmFuZCIsIkJ1dHRvbiIsInNpZ25PdXQiLCJ1c2VTZXNzaW9uIiwiZ2V0UHJvdmlkZXJzIiwiTmF2aWdhdGlvbiIsInNlc3Npb24iLCJpc1Njcm9sbGVkIiwic2V0SXNTY3JvbGxlZCIsImRhdGEiLCJwcm92aWRlcnMiLCJzZXRQcm92aWRlcnMiLCJoYW5kbGVTY3JvbGwiLCJkb2N1bWVudCIsInNjcm9sbFBvc2l0aW9uIiwid2luZG93Iiwic2Nyb2xsWSIsImhlYWRlckhlaWdodCIsImdldEVsZW1lbnRCeUlkIiwib2Zmc2V0SGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJ1c2VyIiwibmFtZSIsIk9iamVjdCIsInZhbHVlcyIsIm1hcCIsInByb3ZpZGVyIiwiaW1nIiwid2lkdGgiLCJhbHQiLCJzcmMiLCJidXR0b24iLCJvbkNsaWNrIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/HomePage/Navigation.tsx\n"));

/***/ })

});