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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"56f2739d94f9\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3R5bGVzL2dsb2JhbHMuY3NzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvZ2xvYmFscy5jc3M/N2VmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjU2ZjI3MzlkOTRmOVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./styles/globals.css\n"));

/***/ }),

/***/ "(app-client)/./components/Navigation/MenuButton.tsx":
/*!**********************************************!*\
  !*** ./components/Navigation/MenuButton.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"(app-client)/./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst MenuButton = (props)=>{\n    _s();\n    const [isSubMenuOpen, setIsSubMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const padding = props.title === \"Menu gł\\xf3wne\" || props.title === \"Ustawienia\" ? \"py-2\" : \"py-1\";\n    const activeStyle = props.active ? \"text-mainColor font-semibold\" : \"\";\n    const handleSubMenuToggle = ()=>{\n        setIsSubMenuOpen(!isSubMenuOpen);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const closeSubMenu = ()=>{\n            setIsSubMenuOpen(false);\n        };\n        document.body.addEventListener(\"click\", closeSubMenu);\n        return ()=>{\n            document.body.removeEventListener(\"click\", closeSubMenu);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            props.links && props.links.length === 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: props.links[0],\n                className: \"flex flex-col\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row justify-between items-center \".concat(activeStyle),\n                    onClick: handleSubMenuToggle,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"flex items-center justify-start text-sm sm:text-base transition-colors duration-300 hover:text-mainColor hover:font-semibold \".concat(padding),\n                            onClick: props.onClick,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-6 h-6 mr-2\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                        icon: props.icon\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Navigation/MenuButton.tsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 9\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Navigation/MenuButton.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 8\n                                }, undefined),\n                                props.title\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Navigation/MenuButton.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 7\n                        }, undefined),\n                        props.submenuIcon && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            className: \"fa-solid fa-sort-down mb-2 cursor-pointer\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Navigation/MenuButton.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 29\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Navigation/MenuButton.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 6\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Navigation/MenuButton.tsx\",\n                lineNumber: 40,\n                columnNumber: 5\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row justify-between items-center \".concat(activeStyle),\n                    onClick: handleSubMenuToggle,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"flex items-center justify-start text-sm sm:text-base transition-colors duration-300 hover:text-mainColor hover:font-semibold \".concat(padding),\n                            onClick: props.onClick,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-6 h-6 mr-2\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                        icon: props.icon\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Navigation/MenuButton.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 9\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Navigation/MenuButton.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 8\n                                }, undefined),\n                                props.title\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Navigation/MenuButton.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 7\n                        }, undefined),\n                        props.submenuIcon && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            className: \"fa-solid fa-sort-down mb-2 cursor-pointer\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Navigation/MenuButton.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 29\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Navigation/MenuButton.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 6\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Navigation/MenuButton.tsx\",\n                lineNumber: 54,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-end \".concat(props.active && isSubMenuOpen ? \"h-auto max-h-screen transition-all duration-300\" : \"max-h-0 transition-all duration-300\"),\n                children: props.submenuItems && props.submenuItems.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: props.links[index],\n                                    className: \"\".concat(props.active && isSubMenuOpen ? \"block\" : \"hidden\", \" hover:text-mainColor transition-colors text-sm sm:text-base\"),\n                                    onClick: ()=>{\n                                        setIsSubMenuOpen(false);\n                                    },\n                                    children: item\n                                }, void 0, false, {\n                                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Navigation/MenuButton.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 9\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Navigation/MenuButton.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 8\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"h-px w-full bg-zinc-600\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Navigation/MenuButton.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 8\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Navigation/MenuButton.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 7\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Navigation/MenuButton.tsx\",\n                lineNumber: 68,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(MenuButton, \"J7NE/MFv9pZVOXMCjnvWYBJEHsY=\");\n_c = MenuButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MenuButton);\nvar _c;\n$RefreshReg$(_c, \"MenuButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uL01lbnVCdXR0b24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFrRDtBQUN0QjtBQUNvQztBQWFoRSxNQUFNSyxhQUF3Q0MsQ0FBQUE7O0lBQzdDLE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ25ELE1BQU1RLFVBQVVILE1BQU1JLFVBQVUsb0JBQWlCSixNQUFNSSxVQUFVLGVBQWUsU0FBUztJQUN6RixNQUFNQyxjQUFjTCxNQUFNTSxTQUFTLGlDQUFpQztJQUVwRSxNQUFNQyxzQkFBc0I7UUFDM0JMLGlCQUFpQixDQUFDRDtJQUNuQjtJQUVBTCxnREFBU0EsQ0FBQztRQUNULE1BQU1ZLGVBQWU7WUFDcEJOLGlCQUFpQjtRQUNsQjtRQUVBTyxTQUFTQyxLQUFLQyxpQkFBaUIsU0FBU0g7UUFFeEMsT0FBTztZQUNOQyxTQUFTQyxLQUFLRSxvQkFBb0IsU0FBU0o7UUFDNUM7SUFDRCxHQUFHLEVBQUU7SUFFTCxxQkFDQzs7WUFDRVIsTUFBTWEsU0FBU2IsTUFBTWEsTUFBTUMsV0FBVyxrQkFDdEMsOERBQUNqQixrREFBSUE7Z0JBQUNrQixNQUFNZixNQUFNYSxLQUFLLENBQUMsRUFBRTtnQkFBRUcsV0FBVTswQkFDckMsNEVBQUNDO29CQUFJRCxXQUFXLDhDQUEwRCxPQUFaWDtvQkFBZWEsU0FBU1g7O3NDQUNyRiw4REFBQ1k7NEJBQ0FILFdBQVcsZ0lBQXdJLE9BQVJiOzRCQUMzSWUsU0FBU2xCLE1BQU1rQjs7OENBQ2YsOERBQUNEO29DQUFJRCxXQUFVOzhDQUNkLDRFQUFDbEIsMkVBQWVBO3dDQUFDc0IsTUFBTXBCLE1BQU1vQjs7Ozs7Ozs7Ozs7Z0NBRTdCcEIsTUFBTUk7Ozs7Ozs7d0JBRVBKLE1BQU1xQiw2QkFBZSw4REFBQ0M7NEJBQUVOLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7MENBSXJDLDhEQUFDQztnQkFBSUQsV0FBVTswQkFDZCw0RUFBQ0M7b0JBQUlELFdBQVcsOENBQTBELE9BQVpYO29CQUFlYSxTQUFTWDs7c0NBQ3JGLDhEQUFDWTs0QkFDQUgsV0FBVyxnSUFBd0ksT0FBUmI7NEJBQzNJZSxTQUFTbEIsTUFBTWtCOzs4Q0FDZiw4REFBQ0Q7b0NBQUlELFdBQVU7OENBQ2QsNEVBQUNsQiwyRUFBZUE7d0NBQUNzQixNQUFNcEIsTUFBTW9COzs7Ozs7Ozs7OztnQ0FFN0JwQixNQUFNSTs7Ozs7Ozt3QkFFUEosTUFBTXFCLDZCQUFlLDhEQUFDQzs0QkFBRU4sV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSXRDLDhEQUFDQztnQkFDQUQsV0FBVywyQkFJVixPQUhBaEIsTUFBTU0sVUFBVUwsZ0JBQ2Isb0RBQ0E7MEJBRUhELE1BQU11QixnQkFDTnZCLE1BQU11QixhQUFhQyxJQUFJLENBQUNDLE1BQWNDLHNCQUNyQyw4REFBQ2hDLHVEQUFjaUM7OzBDQUNkLDhEQUFDVjswQ0FDQSw0RUFBQ3BCLGtEQUFJQTtvQ0FDSmtCLE1BQU1mLE1BQU1hLEtBQUssQ0FBQ2EsTUFBTTtvQ0FDeEJWLFdBQVcsR0FFVixPQURBaEIsTUFBTU0sVUFBVUwsZ0JBQWdCLFVBQVUsVUFDMUM7b0NBQ0RpQixTQUFTO3dDQUNSaEIsaUJBQWlCO29DQUNsQjs4Q0FDQ3VCOzs7Ozs7Ozs7OzswQ0FHSCw4REFBQ1I7Z0NBQUlELFdBQVU7Ozs7Ozs7dUJBYktVOzs7Ozs7Ozs7Ozs7QUFtQjNCO0dBL0VNM0I7S0FBQUE7QUFpRk4sK0RBQWVBLFVBQVVBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uL01lbnVCdXR0b24udHN4PzQyZjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcbmltcG9ydCB7IEljb25Qcm9wIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcblxuaW50ZXJmYWNlIE1lbnVCdXR0b25Qcm9wcyB7XG5cdGxpbmtzOiBzdHJpbmdbXVxuXHR0aXRsZTogc3RyaW5nXG5cdGljb246IEljb25Qcm9wXG5cdHN1Ym1lbnVJY29uPzogYm9vbGVhblxuXHRhY3RpdmU/OiBib29sZWFuXG5cdHN1Ym1lbnVJdGVtcz86IHN0cmluZ1tdXG5cdG9uQ2xpY2s/OiAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB2b2lkXG59XG5cbmNvbnN0IE1lbnVCdXR0b246IFJlYWN0LkZDPE1lbnVCdXR0b25Qcm9wcz4gPSBwcm9wcyA9PiB7XG5cdGNvbnN0IFtpc1N1Yk1lbnVPcGVuLCBzZXRJc1N1Yk1lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuXHRjb25zdCBwYWRkaW5nID0gcHJvcHMudGl0bGUgPT09ICdNZW51IGfFgsOzd25lJyB8fCBwcm9wcy50aXRsZSA9PT0gJ1VzdGF3aWVuaWEnID8gJ3B5LTInIDogJ3B5LTEnXG5cdGNvbnN0IGFjdGl2ZVN0eWxlID0gcHJvcHMuYWN0aXZlID8gJ3RleHQtbWFpbkNvbG9yIGZvbnQtc2VtaWJvbGQnIDogJydcblxuXHRjb25zdCBoYW5kbGVTdWJNZW51VG9nZ2xlID0gKCkgPT4ge1xuXHRcdHNldElzU3ViTWVudU9wZW4oIWlzU3ViTWVudU9wZW4pXG5cdH1cblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnN0IGNsb3NlU3ViTWVudSA9ICgpID0+IHtcblx0XHRcdHNldElzU3ViTWVudU9wZW4oZmFsc2UpXG5cdFx0fVxuXG5cdFx0ZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlU3ViTWVudSlcblxuXHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHRkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VTdWJNZW51KVxuXHRcdH1cblx0fSwgW10pXG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0e3Byb3BzLmxpbmtzICYmIHByb3BzLmxpbmtzLmxlbmd0aCA9PT0gMSA/IChcblx0XHRcdFx0PExpbmsgaHJlZj17cHJvcHMubGlua3NbMF19IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCc+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2BmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgJHthY3RpdmVTdHlsZX1gfSBvbkNsaWNrPXtoYW5kbGVTdWJNZW51VG9nZ2xlfT5cblx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1zdGFydCB0ZXh0LXNtIHNtOnRleHQtYmFzZSB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0zMDAgaG92ZXI6dGV4dC1tYWluQ29sb3IgaG92ZXI6Zm9udC1zZW1pYm9sZCAke3BhZGRpbmd9YH1cblx0XHRcdFx0XHRcdFx0b25DbGljaz17cHJvcHMub25DbGlja30+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3LTYgaC02IG1yLTInPlxuXHRcdFx0XHRcdFx0XHRcdDxGb250QXdlc29tZUljb24gaWNvbj17cHJvcHMuaWNvbn0vPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0e3Byb3BzLnRpdGxlfVxuXHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHR7cHJvcHMuc3VibWVudUljb24gJiYgPGkgY2xhc3NOYW1lPSdmYS1zb2xpZCBmYS1zb3J0LWRvd24gbWItMiBjdXJzb3ItcG9pbnRlcic+PC9pPn1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0KSA6IChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wnPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyICR7YWN0aXZlU3R5bGV9YH0gb25DbGljaz17aGFuZGxlU3ViTWVudVRvZ2dsZX0+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktc3RhcnQgdGV4dC1zbSBzbTp0ZXh0LWJhc2UgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMzAwIGhvdmVyOnRleHQtbWFpbkNvbG9yIGhvdmVyOmZvbnQtc2VtaWJvbGQgJHtwYWRkaW5nfWB9XG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndy02IGgtNiBtci0yJz5cblx0XHRcdFx0XHRcdFx0XHQ8Rm9udEF3ZXNvbWVJY29uIGljb249e3Byb3BzLmljb259Lz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdHtwcm9wcy50aXRsZX1cblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0e3Byb3BzLnN1Ym1lbnVJY29uICYmIDxpIGNsYXNzTmFtZT0nZmEtc29saWQgZmEtc29ydC1kb3duIG1iLTIgY3Vyc29yLXBvaW50ZXInPjwvaT59XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KX1cblx0XHRcdDxkaXZcblx0XHRcdFx0Y2xhc3NOYW1lPXtgZmxleCBmbGV4LWNvbCBpdGVtcy1lbmQgJHtcblx0XHRcdFx0XHRwcm9wcy5hY3RpdmUgJiYgaXNTdWJNZW51T3BlblxuXHRcdFx0XHRcdFx0PyAnaC1hdXRvIG1heC1oLXNjcmVlbiB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAnXG5cdFx0XHRcdFx0XHQ6ICdtYXgtaC0wIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCdcblx0XHRcdFx0fWB9PlxuXHRcdFx0XHR7cHJvcHMuc3VibWVudUl0ZW1zICYmXG5cdFx0XHRcdFx0cHJvcHMuc3VibWVudUl0ZW1zLm1hcCgoaXRlbTogc3RyaW5nLCBpbmRleDogbnVtYmVyKSA9PiAoXG5cdFx0XHRcdFx0XHQ8UmVhY3QuRnJhZ21lbnQga2V5PXtpbmRleH0+XG5cdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0PExpbmtcblx0XHRcdFx0XHRcdFx0XHRcdGhyZWY9e3Byb3BzLmxpbmtzW2luZGV4XX1cblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YCR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHByb3BzLmFjdGl2ZSAmJiBpc1N1Yk1lbnVPcGVuID8gJ2Jsb2NrJyA6ICdoaWRkZW4nXG5cdFx0XHRcdFx0XHRcdFx0XHR9IGhvdmVyOnRleHQtbWFpbkNvbG9yIHRyYW5zaXRpb24tY29sb3JzIHRleHQtc20gc206dGV4dC1iYXNlYH1cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0SXNTdWJNZW51T3BlbihmYWxzZSlcblx0XHRcdFx0XHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0e2l0ZW19XG5cdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2gtcHggdy1mdWxsIGJnLXppbmMtNjAwJz48L2Rpdj5cblx0XHRcdFx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdFx0KSl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8Lz5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBNZW51QnV0dG9uXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxpbmsiLCJGb250QXdlc29tZUljb24iLCJNZW51QnV0dG9uIiwicHJvcHMiLCJpc1N1Yk1lbnVPcGVuIiwic2V0SXNTdWJNZW51T3BlbiIsInBhZGRpbmciLCJ0aXRsZSIsImFjdGl2ZVN0eWxlIiwiYWN0aXZlIiwiaGFuZGxlU3ViTWVudVRvZ2dsZSIsImNsb3NlU3ViTWVudSIsImRvY3VtZW50IiwiYm9keSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibGlua3MiLCJsZW5ndGgiLCJocmVmIiwiY2xhc3NOYW1lIiwiZGl2Iiwib25DbGljayIsImJ1dHRvbiIsImljb24iLCJzdWJtZW51SWNvbiIsImkiLCJzdWJtZW51SXRlbXMiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJGcmFnbWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/Navigation/MenuButton.tsx\n"));

/***/ })

});