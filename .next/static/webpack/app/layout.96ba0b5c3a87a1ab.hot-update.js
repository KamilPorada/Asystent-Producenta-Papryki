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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"a26c0849d787\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3R5bGVzL2dsb2JhbHMuY3NzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvZ2xvYmFscy5jc3M/N2VmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImEyNmMwODQ5ZDc4N1wiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./styles/globals.css\n"));

/***/ }),

/***/ "(app-client)/./components/HomePage/Navigation.tsx":
/*!********************************************!*\
  !*** ./components/HomePage/Navigation.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_UI_Brand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/UI/Brand */ \"(app-client)/./components/UI/Brand.tsx\");\n/* harmony import */ var _components_UI_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/UI/Button */ \"(app-client)/./components/UI/Button.tsx\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/react */ \"(app-client)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _public_assets_img_google_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @public/assets/img/google.png */ \"(app-client)/./public/assets/img/google.png\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Navigation = ()=>{\n    var _session_user;\n    _s();\n    const [isScrolled, setIsScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession)();\n    const [providers, setProviders] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            var _document_getElementById;\n            const scrollPosition = window.scrollY;\n            const headerHeight = ((_document_getElementById = document.getElementById(\"header\")) === null || _document_getElementById === void 0 ? void 0 : _document_getElementById.offsetHeight) || 0;\n            setIsScrolled(scrollPosition > headerHeight);\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (async ()=>{\n            const res = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.getProviders)();\n            setProviders(res);\n        })();\n    }, []);\n    const [isMenuVisible, setIsMenuVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const handleMenuButton = ()=>{\n        setIsMenuVisible(true);\n    };\n    const handleXButton = ()=>{\n        setIsMenuVisible(false);\n    };\n    if (session === null || session === void 0 ? void 0 : (_session_user = session.user) === null || _session_user === void 0 ? void 0 : _session_user.name) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"fixed top-2 left-2 flex flex-row justify-around items-center w-[100px] px-1/5 uppercase border border-gray-600 bg-mainColor text-white rounded-md cursor-pointer z-20 \",\n                    onClick: handleMenuButton,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            className: \"fa-solid fa-bars\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 6\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"hamburger-menu__text\",\n                            children: \"menu\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 6\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: \"fixed top-0 bottom-0  flex flex-col justify-around items-center w-[160px] h-screen bg-mainColor transform transition-transform duration-300 z-30 \".concat(isMenuVisible ? \"translate-x-0\" : \"-translate-x-full\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            className: \"fa-solid fa-xmark text-black absolute top-5 left-5 text-white cursor-pointer\",\n                            onClick: handleXButton\n                        }, void 0, false, {\n                            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 6\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: \"Kamil\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 7\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: \"Kamil\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 7\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: \"Kamil\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 7\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: \"Kamil\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 7\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: \"Kamil\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 7\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: \"Kamil\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 7\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: \"Kamil\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 7\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 6\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true);\n    } else {\n        var _session_user1, _session_user2, _session_user3;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \"flex flex-row justify-between md:justify-around items-center fixed top-0 left-0 w-screen h-20 transition-colors duration-300 z-100 \".concat(isScrolled ? \"bg-black bg-opacity-60\" : \"\"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_Brand__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                    lineNumber: 90,\n                    columnNumber: 5\n                }, undefined),\n                providers && !(session === null || session === void 0 ? void 0 : (_session_user1 = session.user) === null || _session_user1 === void 0 ? void 0 : _session_user1.name) && Object.values(providers).map((provider)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row justify-between mx-3 sm:text-lg rounded font-semibold bg-mainColor hover:scale-105 cursor-pointer transition-transform\",\n                        onClick: ()=>{\n                            (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.signIn)(provider.id);\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-white p-2 ring-mainColor rounded\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    alt: 'Google \"G\" Logo',\n                                    src: \"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png\",\n                                    className: \"w-7 rounded-sm\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 9\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 8\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"mx-5\",\n                                children: \"Zaloguj się\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                                lineNumber: 107,\n                                columnNumber: 8\n                            }, undefined)\n                        ]\n                    }, provider.id, true, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 7\n                    }, undefined)),\n                (session === null || session === void 0 ? void 0 : (_session_user2 = session.user) === null || _session_user2 === void 0 ? void 0 : _session_user2.name) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            onClick: ()=>{\n                                (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.signOut)();\n                            },\n                            children: \"Wyloguj się\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                            lineNumber: 112,\n                            columnNumber: 7\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: session === null || session === void 0 ? void 0 : (_session_user3 = session.user) === null || _session_user3 === void 0 ? void 0 : _session_user3.name\n                        }, void 0, false, {\n                            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                            lineNumber: 118,\n                            columnNumber: 7\n                        }, undefined),\n                        (session === null || session === void 0 ? void 0 : session.user.image) && typeof session.user.image === \"string\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: session.user.image,\n                            width: 37,\n                            height: 37,\n                            className: \"rounded-full\",\n                            alt: \"profile\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                            lineNumber: 120,\n                            columnNumber: 8\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: _public_assets_img_google_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"].src,\n                            width: 37,\n                            height: 37,\n                            className: \"rounded-full\",\n                            alt: \"profile\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                            lineNumber: 122,\n                            columnNumber: 8\n                        }, undefined)\n                    ]\n                }, void 0, true)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n            lineNumber: 86,\n            columnNumber: 4\n        }, undefined);\n    }\n};\n_s(Navigation, \"RcJNmi5H1HN1PqRkxOouJ97UlH4=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession\n    ];\n});\n_c = Navigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\nvar _c;\n$RefreshReg$(_c, \"Navigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9Ib21lUGFnZS9OYXZpZ2F0aW9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVrRDtBQUNWO0FBQ0U7QUFJaUM7QUFDekI7QUFLbEQsTUFBTVUsYUFBYTtRQXlDZEM7O0lBeENKLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHWiwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLEVBQUVhLE1BQU1ILE9BQU8sRUFBRSxHQUFHSiwyREFBVUE7SUFFcEMsTUFBTSxDQUFDUSxXQUFXQyxhQUFhLEdBQUdmLCtDQUFRQSxDQUdoQztJQUVWQyxnREFBU0EsQ0FBQztRQUNULE1BQU1lLGVBQWU7Z0JBRUNDO1lBRHJCLE1BQU1DLGlCQUFpQkMsT0FBT0M7WUFDOUIsTUFBTUMsZUFBZUosQ0FBQUEsQ0FBQUEsMkJBQUFBLFNBQVNLLGVBQWUsdUJBQXhCTCxzQ0FBQUEsS0FBQUEsSUFBQUEseUJBQW1DTSxZQUFXLEtBQUs7WUFFeEVYLGNBQWNNLGlCQUFpQkc7UUFDaEM7UUFFQUYsT0FBT0ssaUJBQWlCLFVBQVVSO1FBRWxDLE9BQU87WUFDTkcsT0FBT00sb0JBQW9CLFVBQVVUO1FBQ3RDO0lBQ0QsR0FBRyxFQUFFO0lBRUxmLGdEQUFTQSxDQUFDO1FBQ1A7WUFDRCxNQUFNeUIsTUFBTSxNQUFNbkIsNkRBQVlBO1lBQzlCUSxhQUFhVztRQUNkO0lBQ0QsR0FBRyxFQUFFO0lBRUwsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBRzVCLCtDQUFRQSxDQUFDO0lBRW5ELE1BQU02QixtQkFBbUI7UUFDeEJELGlCQUFpQjtJQUNsQjtJQUVBLE1BQU1FLGdCQUFnQjtRQUNyQkYsaUJBQWlCO0lBQ2xCO0lBRUEsSUFBSWxCLG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsQ0FBQUEsZ0JBQUFBLFFBQVNxQixrQkFBVHJCLDJCQUFBQSxLQUFBQSxJQUFBQSxjQUFlc0IsTUFBTTtRQUN4QixxQkFDQzs7OEJBQ0MsOERBQUNDO29CQUNBQyxXQUFVO29CQUNWQyxTQUFTTjs7c0NBQ1QsOERBQUNPOzRCQUFFRixXQUFVOzs7Ozs7c0NBQ2IsOERBQUNHOzRCQUFFSCxXQUFVO3NDQUF1Qjs7Ozs7Ozs7Ozs7OzhCQUVyQyw4REFBQ0k7b0JBQ0FKLFdBQVcsb0pBRVYsT0FEQVAsZ0JBQWdCLGtCQUFrQjs7c0NBRW5DLDhEQUFDUzs0QkFDQUYsV0FBVTs0QkFDVkMsU0FBU0w7Ozs7OztzQ0FDViw4REFBQ1M7OzhDQUNBLDhEQUFDQzs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDQTs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDQTs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDQTs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDQTs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDQTs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDQTs4Q0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFLVCxPQUFPO1lBUUY5QixnQkFrQkRBLGdCQVFLQTtRQWpDUixxQkFDQyw4REFBQzRCO1lBQ0FKLFdBQVcsc0lBRVYsT0FEQXZCLGFBQWEsMkJBQTJCOzs4QkFFekMsOERBQUNULDREQUFLQTs7Ozs7Z0JBQ0xZLGFBQ0EsQ0FBQ0osQ0FBQUEsb0JBQUFBLHFCQUFBQSxLQUFBQSxJQUFBQSxDQUFBQSxpQkFBQUEsUUFBU3FCLGtCQUFUckIsNEJBQUFBLEtBQUFBLElBQUFBLGVBQWVzQixJQUFILEtBQ2JTLE9BQU9DLE9BQU81QixXQUFXNkIsSUFBSUMsQ0FBQUEseUJBQzVCLDhEQUFDWDt3QkFDQUMsV0FBVTt3QkFDVkMsU0FBUzs0QkFDUi9CLHVEQUFNQSxDQUFDd0MsU0FBU0M7d0JBQ2pCOzswQ0FFQSw4REFBQ1o7Z0NBQUlDLFdBQVU7MENBQ2QsNEVBQUNZO29DQUNBQyxLQUFJO29DQUNKQyxLQUFJO29DQUNKZCxXQUFVOzs7Ozs7Ozs7OzswQ0FHWiw4REFBQ2U7Z0NBQU9mLFdBQVU7MENBQU87Ozs7Ozs7dUJBUnBCVSxTQUFTQzs7Ozs7Z0JBV2hCbkMsQ0FBQUEsb0JBQUFBLHFCQUFBQSxLQUFBQSxJQUFBQSxDQUFBQSxpQkFBQUEsUUFBU3FCLGtCQUFUckIsNEJBQUFBLEtBQUFBLElBQUFBLGVBQWVzQixJQUFILG1CQUNaOztzQ0FDQyw4REFBQzdCLDZEQUFNQTs0QkFDTmdDLFNBQVM7Z0NBQ1I5Qix3REFBT0E7NEJBQ1I7c0NBQUc7Ozs7OztzQ0FHSiw4REFBQ2dDO3NDQUFHM0Isb0JBQUFBLHFCQUFBQSxLQUFBQSxJQUFBQSxDQUFBQSxpQkFBQUEsUUFBU3FCLGtCQUFUckIsNEJBQUFBLEtBQUFBLElBQUFBLGVBQWVzQjs7Ozs7O3dCQUNsQnRCLENBQUFBLG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBU3FCLEtBQUttQixVQUFTLE9BQU94QyxRQUFRcUIsS0FBS21CLFVBQVUseUJBQ3JELDhEQUFDSjs0QkFBSUUsS0FBS3RDLFFBQVFxQixLQUFLbUI7NEJBQU9DLE9BQU87NEJBQUlDLFFBQVE7NEJBQUlsQixXQUFVOzRCQUFlYSxLQUFJOzs7OztzREFFbEYsOERBQUNEOzRCQUNBRSxLQUFLeEMscUVBQU1BLENBQUN3Qzs0QkFDWkcsT0FBTzs0QkFDUEMsUUFBUTs0QkFDUmxCLFdBQVU7NEJBQ1ZhLEtBQUk7Ozs7Ozs7Ozs7Ozs7O0lBT1g7QUFDRDtHQXhITXRDOztRQUVxQkgsdURBQVVBOzs7S0FGL0JHO0FBMEhOLCtEQUFlQSxVQUFVQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSG9tZVBhZ2UvTmF2aWdhdGlvbi50c3g/ODEwOSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBCcmFuZCBmcm9tICdAY29tcG9uZW50cy9VSS9CcmFuZCdcbmltcG9ydCBCdXR0b24gZnJvbSAnQGNvbXBvbmVudHMvVUkvQnV0dG9uJ1xuXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IHNpZ25Jbiwgc2lnbk91dCwgdXNlU2Vzc2lvbiwgZ2V0UHJvdmlkZXJzIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0J1xuaW1wb3J0IGdvb2dsZSBmcm9tICdAcHVibGljL2Fzc2V0cy9pbWcvZ29vZ2xlLnBuZydcblxuaW1wb3J0IHsgTGl0ZXJhbFVuaW9uLCBDbGllbnRTYWZlUHJvdmlkZXIgfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnXG5pbXBvcnQgeyBCdWlsdEluUHJvdmlkZXJUeXBlIH0gZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycydcblxuY29uc3QgTmF2aWdhdGlvbiA9ICgpID0+IHtcblx0Y29uc3QgW2lzU2Nyb2xsZWQsIHNldElzU2Nyb2xsZWRdID0gdXNlU3RhdGUoZmFsc2UpXG5cdGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpXG5cblx0Y29uc3QgW3Byb3ZpZGVycywgc2V0UHJvdmlkZXJzXSA9IHVzZVN0YXRlPFJlY29yZDxcblx0XHRMaXRlcmFsVW5pb248QnVpbHRJblByb3ZpZGVyVHlwZSwgc3RyaW5nPixcblx0XHRDbGllbnRTYWZlUHJvdmlkZXJcblx0PiB8IG51bGw+KG51bGwpXG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBzY3JvbGxQb3NpdGlvbiA9IHdpbmRvdy5zY3JvbGxZXG5cdFx0XHRjb25zdCBoZWFkZXJIZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJyk/Lm9mZnNldEhlaWdodCB8fCAwXG5cblx0XHRcdHNldElzU2Nyb2xsZWQoc2Nyb2xsUG9zaXRpb24gPiBoZWFkZXJIZWlnaHQpXG5cdFx0fVxuXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbClcblxuXHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKVxuXHRcdH1cblx0fSwgW10pXG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHQ7KGFzeW5jICgpID0+IHtcblx0XHRcdGNvbnN0IHJlcyA9IGF3YWl0IGdldFByb3ZpZGVycygpXG5cdFx0XHRzZXRQcm92aWRlcnMocmVzKVxuXHRcdH0pKClcblx0fSwgW10pXG5cblx0Y29uc3QgW2lzTWVudVZpc2libGUsIHNldElzTWVudVZpc2libGVdID0gdXNlU3RhdGUodHJ1ZSlcblxuXHRjb25zdCBoYW5kbGVNZW51QnV0dG9uID0gKCkgPT4ge1xuXHRcdHNldElzTWVudVZpc2libGUodHJ1ZSlcblx0fVxuXG5cdGNvbnN0IGhhbmRsZVhCdXR0b24gPSAoKSA9PiB7XG5cdFx0c2V0SXNNZW51VmlzaWJsZShmYWxzZSlcblx0fVxuXG5cdGlmIChzZXNzaW9uPy51c2VyPy5uYW1lKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDw+XG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRjbGFzc05hbWU9J2ZpeGVkIHRvcC0yIGxlZnQtMiBmbGV4IGZsZXgtcm93IGp1c3RpZnktYXJvdW5kIGl0ZW1zLWNlbnRlciB3LVsxMDBweF0gcHgtMS81IHVwcGVyY2FzZSBib3JkZXIgYm9yZGVyLWdyYXktNjAwIGJnLW1haW5Db2xvciB0ZXh0LXdoaXRlIHJvdW5kZWQtbWQgY3Vyc29yLXBvaW50ZXIgei0yMCAnXG5cdFx0XHRcdFx0b25DbGljaz17aGFuZGxlTWVudUJ1dHRvbn0+XG5cdFx0XHRcdFx0PGkgY2xhc3NOYW1lPSdmYS1zb2xpZCBmYS1iYXJzJz48L2k+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdoYW1idXJnZXItbWVudV9fdGV4dCc+bWVudTwvcD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxuYXZcblx0XHRcdFx0XHRjbGFzc05hbWU9e2BmaXhlZCB0b3AtMCBib3R0b20tMCAgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWFyb3VuZCBpdGVtcy1jZW50ZXIgdy1bMTYwcHhdIGgtc2NyZWVuIGJnLW1haW5Db2xvciB0cmFuc2Zvcm0gdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tMzAwIHotMzAgJHtcblx0XHRcdFx0XHRcdGlzTWVudVZpc2libGUgPyAndHJhbnNsYXRlLXgtMCcgOiAnLXRyYW5zbGF0ZS14LWZ1bGwnXG5cdFx0XHRcdFx0fWB9PlxuXHRcdFx0XHRcdDxpXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J2ZhLXNvbGlkIGZhLXhtYXJrIHRleHQtYmxhY2sgYWJzb2x1dGUgdG9wLTUgbGVmdC01IHRleHQtd2hpdGUgY3Vyc29yLXBvaW50ZXInXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVYQnV0dG9ufT48L2k+XG5cdFx0XHRcdFx0PHVsPlxuXHRcdFx0XHRcdFx0PGxpPkthbWlsPC9saT5cblx0XHRcdFx0XHRcdDxsaT5LYW1pbDwvbGk+XG5cdFx0XHRcdFx0XHQ8bGk+S2FtaWw8L2xpPlxuXHRcdFx0XHRcdFx0PGxpPkthbWlsPC9saT5cblx0XHRcdFx0XHRcdDxsaT5LYW1pbDwvbGk+XG5cdFx0XHRcdFx0XHQ8bGk+S2FtaWw8L2xpPlxuXHRcdFx0XHRcdFx0PGxpPkthbWlsPC9saT5cblx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHQ8L25hdj5cblx0XHRcdDwvPlxuXHRcdClcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PG5hdlxuXHRcdFx0XHRjbGFzc05hbWU9e2BmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBtZDpqdXN0aWZ5LWFyb3VuZCBpdGVtcy1jZW50ZXIgZml4ZWQgdG9wLTAgbGVmdC0wIHctc2NyZWVuIGgtMjAgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMzAwIHotMTAwICR7XG5cdFx0XHRcdFx0aXNTY3JvbGxlZCA/ICdiZy1ibGFjayBiZy1vcGFjaXR5LTYwJyA6ICcnXG5cdFx0XHRcdH1gfT5cblx0XHRcdFx0PEJyYW5kIC8+XG5cdFx0XHRcdHtwcm92aWRlcnMgJiZcblx0XHRcdFx0XHQhc2Vzc2lvbj8udXNlcj8ubmFtZSAmJlxuXHRcdFx0XHRcdE9iamVjdC52YWx1ZXMocHJvdmlkZXJzKS5tYXAocHJvdmlkZXIgPT4gKFxuXHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIG14LTMgc206dGV4dC1sZyByb3VuZGVkIGZvbnQtc2VtaWJvbGQgYmctbWFpbkNvbG9yIGhvdmVyOnNjYWxlLTEwNSBjdXJzb3ItcG9pbnRlciB0cmFuc2l0aW9uLXRyYW5zZm9ybSdcblx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHNpZ25Jbihwcm92aWRlci5pZClcblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0a2V5PXtwcm92aWRlci5pZH0+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdiZy13aGl0ZSBwLTIgcmluZy1tYWluQ29sb3Igcm91bmRlZCc+XG5cdFx0XHRcdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0XHRcdFx0YWx0PSdHb29nbGUgXCJHXCIgTG9nbydcblx0XHRcdFx0XHRcdFx0XHRcdHNyYz0naHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi81LzUzL0dvb2dsZV8lMjJHJTIyX0xvZ28uc3ZnLzUxMnB4LUdvb2dsZV8lMjJHJTIyX0xvZ28uc3ZnLnBuZydcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0ndy03IHJvdW5kZWQtc20nXG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPSdteC01Jz5aYWxvZ3VqIHNpxJk8L2J1dHRvbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdCkpfVxuXHRcdFx0XHR7c2Vzc2lvbj8udXNlcj8ubmFtZSAmJiAoXG5cdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHNpZ25PdXQoKVxuXHRcdFx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHRcdFx0V3lsb2d1aiBzacSZXG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdDxwPntzZXNzaW9uPy51c2VyPy5uYW1lfTwvcD5cblx0XHRcdFx0XHRcdHtzZXNzaW9uPy51c2VyLmltYWdlICYmIHR5cGVvZiBzZXNzaW9uLnVzZXIuaW1hZ2UgPT09ICdzdHJpbmcnID8gKFxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17c2Vzc2lvbi51c2VyLmltYWdlfSB3aWR0aD17Mzd9IGhlaWdodD17Mzd9IGNsYXNzTmFtZT0ncm91bmRlZC1mdWxsJyBhbHQ9J3Byb2ZpbGUnIC8+XG5cdFx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRcdFx0c3JjPXtnb29nbGUuc3JjfSAvLyBaYXN0xIVwICcvZGVmYXVsdC1wcm9maWxlLWltYWdlLnBuZycgb2Rwb3dpZWRuaW0gxbpyw7NkxYJlbSBvYnJhenUgZG9tecWbbG5lZ29cblx0XHRcdFx0XHRcdFx0XHR3aWR0aD17Mzd9XG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0PXszN31cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J3JvdW5kZWQtZnVsbCdcblx0XHRcdFx0XHRcdFx0XHRhbHQ9J3Byb2ZpbGUnXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdDwvPlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9uYXY+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb25cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQnJhbmQiLCJCdXR0b24iLCJzaWduSW4iLCJzaWduT3V0IiwidXNlU2Vzc2lvbiIsImdldFByb3ZpZGVycyIsImdvb2dsZSIsIk5hdmlnYXRpb24iLCJzZXNzaW9uIiwiaXNTY3JvbGxlZCIsInNldElzU2Nyb2xsZWQiLCJkYXRhIiwicHJvdmlkZXJzIiwic2V0UHJvdmlkZXJzIiwiaGFuZGxlU2Nyb2xsIiwiZG9jdW1lbnQiLCJzY3JvbGxQb3NpdGlvbiIsIndpbmRvdyIsInNjcm9sbFkiLCJoZWFkZXJIZWlnaHQiLCJnZXRFbGVtZW50QnlJZCIsIm9mZnNldEhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVzIiwiaXNNZW51VmlzaWJsZSIsInNldElzTWVudVZpc2libGUiLCJoYW5kbGVNZW51QnV0dG9uIiwiaGFuZGxlWEJ1dHRvbiIsInVzZXIiLCJuYW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsImkiLCJwIiwibmF2IiwidWwiLCJsaSIsIk9iamVjdCIsInZhbHVlcyIsIm1hcCIsInByb3ZpZGVyIiwiaWQiLCJpbWciLCJhbHQiLCJzcmMiLCJidXR0b24iLCJpbWFnZSIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/HomePage/Navigation.tsx\n"));

/***/ })

});