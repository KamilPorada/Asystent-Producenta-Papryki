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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"6bd65e8b5d91\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3R5bGVzL2dsb2JhbHMuY3NzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvZ2xvYmFscy5jc3M/N2VmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjZiZDY1ZThiNWQ5MVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./styles/globals.css\n"));

/***/ }),

/***/ "(app-client)/./components/HomePage/Navigation.tsx":
/*!********************************************!*\
  !*** ./components/HomePage/Navigation.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_UI_Brand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/UI/Brand */ \"(app-client)/./components/UI/Brand.tsx\");\n/* harmony import */ var _components_UI_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/UI/Button */ \"(app-client)/./components/UI/Button.tsx\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/react */ \"(app-client)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Navigation = ()=>{\n    var _session_user, _session_user1, _session_user2;\n    _s();\n    const [isScrolled, setIsScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession)();\n    const [providers, setProviders] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            var _document_getElementById;\n            const scrollPosition = window.scrollY;\n            const headerHeight = ((_document_getElementById = document.getElementById(\"header\")) === null || _document_getElementById === void 0 ? void 0 : _document_getElementById.offsetHeight) || 0;\n            setIsScrolled(scrollPosition > headerHeight);\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (async ()=>{\n            const res = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.getProviders)();\n            setProviders(res);\n        })();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-row justify-between md:justify-around items-center fixed top-0 left-0 w-screen h-20 transition-colors duration-300 z-100 \".concat(isScrolled ? \"bg-black bg-opacity-60\" : \"\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_Brand__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                lineNumber: 51,\n                columnNumber: 4\n            }, undefined),\n            providers && !(session === null || session === void 0 ? void 0 : (_session_user = session.user) === null || _session_user === void 0 ? void 0 : _session_user.name) && Object.values(providers).map((provider)=>// <Button\n                // \tkey={provider.name}\n                // \tonClick={() => {\n                // \t\tsignIn(provider.id)\n                // \t}}\n                // \tclassName='hover:bg-red-600 transition-colors duration-300'>\n                // \tZaloguj się\n                // \t<i className='fa-brands fa-google ml-3 text-white'></i>\n                // </Button>\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            className: \"fa-brands fa-google\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 7\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            children: \"Zaloguj się\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 7\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 6\n                }, undefined)),\n            (session === null || session === void 0 ? void 0 : (_session_user1 = session.user) === null || _session_user1 === void 0 ? void 0 : _session_user1.name) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: ()=>{\n                            (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.signOut)();\n                        },\n                        children: \"Wyloguj się\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 6\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: session === null || session === void 0 ? void 0 : (_session_user2 = session.user) === null || _session_user2 === void 0 ? void 0 : _session_user2.name\n                    }, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 6\n                    }, undefined)\n                ]\n            }, void 0, true)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n        lineNumber: 47,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Navigation, \"RP92uhgvDK+S9pT364Ild75TfII=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession\n    ];\n});\n_c = Navigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\nvar _c;\n$RefreshReg$(_c, \"Navigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9Ib21lUGFnZS9OYXZpZ2F0aW9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRWtEO0FBQ1Y7QUFDRTtBQUlpQztBQU0zRSxNQUFNUSxhQUFhO1FBc0NkQyxlQWdCREEsZ0JBUUtBOztJQTdEUixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR1YsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxFQUFFVyxNQUFNSCxPQUFPLEVBQUUsR0FBR0gsMkRBQVVBO0lBRXBDLE1BQU0sQ0FBQ08sV0FBV0MsYUFBYSxHQUFHYiwrQ0FBUUEsQ0FHaEM7SUFFVkMsZ0RBQVNBLENBQUM7UUFDVCxNQUFNYSxlQUFlO2dCQUVDQztZQURyQixNQUFNQyxpQkFBaUJDLE9BQU9DO1lBQzlCLE1BQU1DLGVBQWVKLENBQUFBLENBQUFBLDJCQUFBQSxTQUFTSyxlQUFlLHVCQUF4Qkwsc0NBQUFBLEtBQUFBLElBQUFBLHlCQUFtQ00sWUFBVyxLQUFLO1lBRXhFWCxjQUFjTSxpQkFBaUJHO1FBQ2hDO1FBRUFGLE9BQU9LLGlCQUFpQixVQUFVUjtRQUVsQyxPQUFPO1lBQ05HLE9BQU9NLG9CQUFvQixVQUFVVDtRQUN0QztJQUNELEdBQUcsRUFBRTtJQUVMYixnREFBU0EsQ0FBQztRQUNQO1lBQ0QsTUFBTXVCLE1BQU0sTUFBTWxCLDZEQUFZQTtZQUM5Qk8sYUFBYVc7UUFDZDtJQUNELEdBQUcsRUFBRTtJQUVMLHFCQUNDLDhEQUFDQztRQUNBQyxXQUFXLHNJQUVWLE9BREFqQixhQUFhLDJCQUEyQjs7MEJBRXpDLDhEQUFDUCw0REFBS0E7Ozs7O1lBQ0xVLGFBQ0EsQ0FBQ0osQ0FBQUEsb0JBQUFBLHFCQUFBQSxLQUFBQSxJQUFBQSxDQUFBQSxnQkFBQUEsUUFBU21CLGtCQUFUbkIsMkJBQUFBLEtBQUFBLElBQUFBLGNBQWVvQixJQUFILEtBQ2JDLE9BQU9DLE9BQU9sQixXQUFXbUIsSUFBSUMsQ0FBQUEsV0FDNUIsVUFBVTtnQkFDVix1QkFBdUI7Z0JBQ3ZCLG9CQUFvQjtnQkFDcEIsd0JBQXdCO2dCQUN4QixNQUFNO2dCQUNOLGdFQUFnRTtnQkFDaEUsZUFBZTtnQkFDZiwyREFBMkQ7Z0JBQzNELFlBQVk7OEJBQ1osOERBQUNQO29CQUFJQyxXQUFVOztzQ0FDZCw4REFBQ087NEJBQUVQLFdBQVU7Ozs7OztzQ0FDYiw4REFBQ1E7c0NBQU87Ozs7Ozs7Ozs7OztZQUdWMUIsQ0FBQUEsb0JBQUFBLHFCQUFBQSxLQUFBQSxJQUFBQSxDQUFBQSxpQkFBQUEsUUFBU21CLGtCQUFUbkIsNEJBQUFBLEtBQUFBLElBQUFBLGVBQWVvQixJQUFILG1CQUNaOztrQ0FDQyw4REFBQ3pCLDZEQUFNQTt3QkFDTmdDLFNBQVM7NEJBQ1IvQix3REFBT0E7d0JBQ1I7a0NBQUc7Ozs7OztrQ0FHSiw4REFBQ2dDO2tDQUFHNUIsb0JBQUFBLHFCQUFBQSxLQUFBQSxJQUFBQSxDQUFBQSxpQkFBQUEsUUFBU21CLGtCQUFUbkIsNEJBQUFBLEtBQUFBLElBQUFBLGVBQWVvQjs7Ozs7Ozs7Ozs7Ozs7QUFLeEI7R0FuRU1yQjs7UUFFcUJGLHVEQUFVQTs7O0tBRi9CRTtBQXFFTiwrREFBZUEsVUFBVUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hvbWVQYWdlL05hdmlnYXRpb24udHN4PzgxMDkiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQnJhbmQgZnJvbSAnQGNvbXBvbmVudHMvVUkvQnJhbmQnXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0Bjb21wb25lbnRzL1VJL0J1dHRvbidcblxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyBzaWduSW4sIHNpZ25PdXQsIHVzZVNlc3Npb24sIGdldFByb3ZpZGVycyB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCdcbmltcG9ydCBnb29nbGUgZnJvbSAnQHB1YmxpYy9hc3NldHMvaW1nL2xvZ28ucG5nJ1xuXG5pbXBvcnQgeyBMaXRlcmFsVW5pb24sIENsaWVudFNhZmVQcm92aWRlciB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCdcbmltcG9ydCB7IEJ1aWx0SW5Qcm92aWRlclR5cGUgfSBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzJ1xuXG5jb25zdCBOYXZpZ2F0aW9uID0gKCkgPT4ge1xuXHRjb25zdCBbaXNTY3JvbGxlZCwgc2V0SXNTY3JvbGxlZF0gPSB1c2VTdGF0ZShmYWxzZSlcblx0Y29uc3QgeyBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKClcblxuXHRjb25zdCBbcHJvdmlkZXJzLCBzZXRQcm92aWRlcnNdID0gdXNlU3RhdGU8UmVjb3JkPFxuXHRcdExpdGVyYWxVbmlvbjxCdWlsdEluUHJvdmlkZXJUeXBlLCBzdHJpbmc+LFxuXHRcdENsaWVudFNhZmVQcm92aWRlclxuXHQ+IHwgbnVsbD4obnVsbClcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcblx0XHRcdGNvbnN0IHNjcm9sbFBvc2l0aW9uID0gd2luZG93LnNjcm9sbFlcblx0XHRcdGNvbnN0IGhlYWRlckhlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXInKT8ub2Zmc2V0SGVpZ2h0IHx8IDBcblxuXHRcdFx0c2V0SXNTY3JvbGxlZChzY3JvbGxQb3NpdGlvbiA+IGhlYWRlckhlaWdodClcblx0XHR9XG5cblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKVxuXG5cdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpXG5cdFx0fVxuXHR9LCBbXSlcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdDsoYXN5bmMgKCkgPT4ge1xuXHRcdFx0Y29uc3QgcmVzID0gYXdhaXQgZ2V0UHJvdmlkZXJzKClcblx0XHRcdHNldFByb3ZpZGVycyhyZXMpXG5cdFx0fSkoKVxuXHR9LCBbXSlcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXZcblx0XHRcdGNsYXNzTmFtZT17YGZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIG1kOmp1c3RpZnktYXJvdW5kIGl0ZW1zLWNlbnRlciBmaXhlZCB0b3AtMCBsZWZ0LTAgdy1zY3JlZW4gaC0yMCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0zMDAgei0xMDAgJHtcblx0XHRcdFx0aXNTY3JvbGxlZCA/ICdiZy1ibGFjayBiZy1vcGFjaXR5LTYwJyA6ICcnXG5cdFx0XHR9YH0+XG5cdFx0XHQ8QnJhbmQgLz5cblx0XHRcdHtwcm92aWRlcnMgJiZcblx0XHRcdFx0IXNlc3Npb24/LnVzZXI/Lm5hbWUgJiZcblx0XHRcdFx0T2JqZWN0LnZhbHVlcyhwcm92aWRlcnMpLm1hcChwcm92aWRlciA9PiAoXG5cdFx0XHRcdFx0Ly8gPEJ1dHRvblxuXHRcdFx0XHRcdC8vIFx0a2V5PXtwcm92aWRlci5uYW1lfVxuXHRcdFx0XHRcdC8vIFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdC8vIFx0XHRzaWduSW4ocHJvdmlkZXIuaWQpXG5cdFx0XHRcdFx0Ly8gXHR9fVxuXHRcdFx0XHRcdC8vIFx0Y2xhc3NOYW1lPSdob3ZlcjpiZy1yZWQtNjAwIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTMwMCc+XG5cdFx0XHRcdFx0Ly8gXHRaYWxvZ3VqIHNpxJlcblx0XHRcdFx0XHQvLyBcdDxpIGNsYXNzTmFtZT0nZmEtYnJhbmRzIGZhLWdvb2dsZSBtbC0zIHRleHQtd2hpdGUnPjwvaT5cblx0XHRcdFx0XHQvLyA8L0J1dHRvbj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nJz5cblx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT0nZmEtYnJhbmRzIGZhLWdvb2dsZSc+PC9pPlxuXHRcdFx0XHRcdFx0PGJ1dHRvbj5aYWxvZ3VqIHNpxJk8L2J1dHRvbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KSl9XG5cdFx0XHR7c2Vzc2lvbj8udXNlcj8ubmFtZSAmJiAoXG5cdFx0XHRcdDw+XG5cdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRzaWduT3V0KClcblx0XHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0V3lsb2d1aiBzacSZXG5cdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0PHA+e3Nlc3Npb24/LnVzZXI/Lm5hbWV9PC9wPlxuXHRcdFx0XHQ8Lz5cblx0XHRcdCl9XG5cdFx0PC9kaXY+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJCcmFuZCIsIkJ1dHRvbiIsInNpZ25PdXQiLCJ1c2VTZXNzaW9uIiwiZ2V0UHJvdmlkZXJzIiwiTmF2aWdhdGlvbiIsInNlc3Npb24iLCJpc1Njcm9sbGVkIiwic2V0SXNTY3JvbGxlZCIsImRhdGEiLCJwcm92aWRlcnMiLCJzZXRQcm92aWRlcnMiLCJoYW5kbGVTY3JvbGwiLCJkb2N1bWVudCIsInNjcm9sbFBvc2l0aW9uIiwid2luZG93Iiwic2Nyb2xsWSIsImhlYWRlckhlaWdodCIsImdldEVsZW1lbnRCeUlkIiwib2Zmc2V0SGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJ1c2VyIiwibmFtZSIsIk9iamVjdCIsInZhbHVlcyIsIm1hcCIsInByb3ZpZGVyIiwiaSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/HomePage/Navigation.tsx\n"));

/***/ })

});