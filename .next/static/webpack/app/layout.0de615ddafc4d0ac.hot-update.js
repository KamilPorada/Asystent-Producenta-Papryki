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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"049af04482b5\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3R5bGVzL2dsb2JhbHMuY3NzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvZ2xvYmFscy5jc3M/N2VmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjA0OWFmMDQ0ODJiNVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./styles/globals.css\n"));

/***/ }),

/***/ "(app-client)/./components/HomePage/Navigation.tsx":
/*!********************************************!*\
  !*** ./components/HomePage/Navigation.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_UI_Brand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/UI/Brand */ \"(app-client)/./components/UI/Brand.tsx\");\n/* harmony import */ var _components_UI_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/UI/Button */ \"(app-client)/./components/UI/Button.tsx\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/react */ \"(app-client)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Navigation = ()=>{\n    _s();\n    const [isScrolled, setIsScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession)();\n    const [providers, setProviders] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            var _document_getElementById;\n            const scrollPosition = window.scrollY;\n            const headerHeight = ((_document_getElementById = document.getElementById(\"header\")) === null || _document_getElementById === void 0 ? void 0 : _document_getElementById.offsetHeight) || 0;\n            setIsScrolled(scrollPosition > headerHeight);\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (async ()=>{\n            const res = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.getProviders)();\n            setProviders(res);\n        })();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-row justify-between md:justify-around items-center fixed top-0 left-0 w-screen h-20 transition-colors duration-300 z-100 \".concat(isScrolled ? \"bg-black bg-opacity-60\" : \"\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_Brand__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                lineNumber: 50,\n                columnNumber: 4\n            }, undefined),\n            providers && Object.values(providers).map((provider)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    onClick: ()=>{\n                        (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.signIn)(provider.id);\n                    },\n                    children: \"Zaloguj się\"\n                }, provider.name, false, {\n                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 6\n                }, undefined)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: ()=>{\n                    (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.signOut)();\n                },\n                children: \"Wyloguj się\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                lineNumber: 61,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: session.user.email\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                lineNumber: 67,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n        lineNumber: 46,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Navigation, \"RP92uhgvDK+S9pT364Ild75TfII=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession\n    ];\n});\n_c = Navigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\nvar _c;\n$RefreshReg$(_c, \"Navigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9Ib21lUGFnZS9OYXZpZ2F0aW9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRWtEO0FBQ1Y7QUFDRTtBQUlpQztBQUszRSxNQUFNUyxhQUFhOztJQUNsQixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR1YsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxFQUFFVyxNQUFNQyxPQUFPLEVBQUUsR0FBR04sMkRBQVVBO0lBRXBDLE1BQU0sQ0FBQ08sV0FBV0MsYUFBYSxHQUFHZCwrQ0FBUUEsQ0FHaEM7SUFFVkMsZ0RBQVNBLENBQUM7UUFDVCxNQUFNYyxlQUFlO2dCQUVDQztZQURyQixNQUFNQyxpQkFBaUJDLE9BQU9DO1lBQzlCLE1BQU1DLGVBQWVKLENBQUFBLENBQUFBLDJCQUFBQSxTQUFTSyxlQUFlLHVCQUF4Qkwsc0NBQUFBLEtBQUFBLElBQUFBLHlCQUFtQ00sWUFBVyxLQUFLO1lBRXhFWixjQUFjTyxpQkFBaUJHO1FBQ2hDO1FBRUFGLE9BQU9LLGlCQUFpQixVQUFVUjtRQUVsQyxPQUFPO1lBQ05HLE9BQU9NLG9CQUFvQixVQUFVVDtRQUN0QztJQUNELEdBQUcsRUFBRTtJQUVMZCxnREFBU0EsQ0FBQztRQUNQO1lBQ0QsTUFBTXdCLE1BQU0sTUFBTWxCLDZEQUFZQTtZQUM5Qk8sYUFBYVc7UUFDZDtJQUNELEdBQUcsRUFBRTtJQUVMLHFCQUNDLDhEQUFDQztRQUNBQyxXQUFXLHNJQUVWLE9BREFsQixhQUFhLDJCQUEyQjs7MEJBRXpDLDhEQUFDUCw0REFBS0E7Ozs7O1lBQ0xXLGFBQ0FlLE9BQU9DLE9BQU9oQixXQUFXaUIsSUFBSUMsQ0FBQUEseUJBQzVCLDhEQUFDNUIsNkRBQU1BO29CQUVONkIsU0FBUzt3QkFDUjVCLHVEQUFNQSxDQUFDMkIsU0FBU0U7b0JBQ2pCOzhCQUFHO21CQUhFRixTQUFTRzs7Ozs7MEJBT2pCLDhEQUFDL0IsNkRBQU1BO2dCQUNONkIsU0FBUztvQkFDUjNCLHdEQUFPQTtnQkFDUjswQkFBRzs7Ozs7OzBCQUdKLDhEQUFDOEI7MEJBQUd2QixRQUFRd0IsS0FBS0M7Ozs7Ozs7Ozs7OztBQUdwQjtHQXhETTdCOztRQUVxQkYsdURBQVVBOzs7S0FGL0JFO0FBMEROLCtEQUFlQSxVQUFVQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSG9tZVBhZ2UvTmF2aWdhdGlvbi50c3g/ODEwOSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBCcmFuZCBmcm9tICdAY29tcG9uZW50cy9VSS9CcmFuZCdcbmltcG9ydCBCdXR0b24gZnJvbSAnQGNvbXBvbmVudHMvVUkvQnV0dG9uJ1xuXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IHNpZ25Jbiwgc2lnbk91dCwgdXNlU2Vzc2lvbiwgZ2V0UHJvdmlkZXJzIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0J1xuXG5pbXBvcnQgeyBMaXRlcmFsVW5pb24sIENsaWVudFNhZmVQcm92aWRlciB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCdcbmltcG9ydCB7IEJ1aWx0SW5Qcm92aWRlclR5cGUgfSBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzJ1xuXG5jb25zdCBOYXZpZ2F0aW9uID0gKCkgPT4ge1xuXHRjb25zdCBbaXNTY3JvbGxlZCwgc2V0SXNTY3JvbGxlZF0gPSB1c2VTdGF0ZShmYWxzZSlcblx0Y29uc3QgeyBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKClcblxuXHRjb25zdCBbcHJvdmlkZXJzLCBzZXRQcm92aWRlcnNdID0gdXNlU3RhdGU8UmVjb3JkPFxuXHRcdExpdGVyYWxVbmlvbjxCdWlsdEluUHJvdmlkZXJUeXBlLCBzdHJpbmc+LFxuXHRcdENsaWVudFNhZmVQcm92aWRlclxuXHQ+IHwgbnVsbD4obnVsbClcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcblx0XHRcdGNvbnN0IHNjcm9sbFBvc2l0aW9uID0gd2luZG93LnNjcm9sbFlcblx0XHRcdGNvbnN0IGhlYWRlckhlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXInKT8ub2Zmc2V0SGVpZ2h0IHx8IDBcblxuXHRcdFx0c2V0SXNTY3JvbGxlZChzY3JvbGxQb3NpdGlvbiA+IGhlYWRlckhlaWdodClcblx0XHR9XG5cblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKVxuXG5cdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpXG5cdFx0fVxuXHR9LCBbXSlcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdDsoYXN5bmMgKCkgPT4ge1xuXHRcdFx0Y29uc3QgcmVzID0gYXdhaXQgZ2V0UHJvdmlkZXJzKClcblx0XHRcdHNldFByb3ZpZGVycyhyZXMpXG5cdFx0fSkoKVxuXHR9LCBbXSlcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXZcblx0XHRcdGNsYXNzTmFtZT17YGZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIG1kOmp1c3RpZnktYXJvdW5kIGl0ZW1zLWNlbnRlciBmaXhlZCB0b3AtMCBsZWZ0LTAgdy1zY3JlZW4gaC0yMCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0zMDAgei0xMDAgJHtcblx0XHRcdFx0aXNTY3JvbGxlZCA/ICdiZy1ibGFjayBiZy1vcGFjaXR5LTYwJyA6ICcnXG5cdFx0XHR9YH0+XG5cdFx0XHQ8QnJhbmQgLz5cblx0XHRcdHtwcm92aWRlcnMgJiZcblx0XHRcdFx0T2JqZWN0LnZhbHVlcyhwcm92aWRlcnMpLm1hcChwcm92aWRlciA9PiAoXG5cdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0a2V5PXtwcm92aWRlci5uYW1lfVxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRzaWduSW4ocHJvdmlkZXIuaWQpXG5cdFx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHRcdFphbG9ndWogc2nEmVxuXHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHQpKX1cblx0XHRcdDxCdXR0b25cblx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdHNpZ25PdXQoKVxuXHRcdFx0XHR9fT5cblx0XHRcdFx0V3lsb2d1aiBzacSZXG5cdFx0XHQ8L0J1dHRvbj5cblx0XHRcdDxwPntzZXNzaW9uLnVzZXIuZW1haWx9PC9wPlxuXHRcdDwvZGl2PlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb25cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQnJhbmQiLCJCdXR0b24iLCJzaWduSW4iLCJzaWduT3V0IiwidXNlU2Vzc2lvbiIsImdldFByb3ZpZGVycyIsIk5hdmlnYXRpb24iLCJpc1Njcm9sbGVkIiwic2V0SXNTY3JvbGxlZCIsImRhdGEiLCJzZXNzaW9uIiwicHJvdmlkZXJzIiwic2V0UHJvdmlkZXJzIiwiaGFuZGxlU2Nyb2xsIiwiZG9jdW1lbnQiLCJzY3JvbGxQb3NpdGlvbiIsIndpbmRvdyIsInNjcm9sbFkiLCJoZWFkZXJIZWlnaHQiLCJnZXRFbGVtZW50QnlJZCIsIm9mZnNldEhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVzIiwiZGl2IiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwidmFsdWVzIiwibWFwIiwicHJvdmlkZXIiLCJvbkNsaWNrIiwiaWQiLCJuYW1lIiwicCIsInVzZXIiLCJlbWFpbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/HomePage/Navigation.tsx\n"));

/***/ })

});