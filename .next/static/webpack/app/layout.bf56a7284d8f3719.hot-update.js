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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"922a80d2317c\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3R5bGVzL2dsb2JhbHMuY3NzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvZ2xvYmFscy5jc3M/N2VmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjkyMmE4MGQyMzE3Y1wiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./styles/globals.css\n"));

/***/ }),

/***/ "(app-client)/./components/HomePage/Navigation.tsx":
/*!********************************************!*\
  !*** ./components/HomePage/Navigation.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_UI_Brand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/UI/Brand */ \"(app-client)/./components/UI/Brand.tsx\");\n/* harmony import */ var _components_UI_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/UI/Button */ \"(app-client)/./components/UI/Button.tsx\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/react */ \"(app-client)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _public_assets_img_google_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @public/assets/img/google.png */ \"(app-client)/./public/assets/img/google.png\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Navigation = ()=>{\n    var _session_user;\n    _s();\n    const [isScrolled, setIsScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession)();\n    const [providers, setProviders] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            var _document_getElementById;\n            const scrollPosition = window.scrollY;\n            const headerHeight = ((_document_getElementById = document.getElementById(\"header\")) === null || _document_getElementById === void 0 ? void 0 : _document_getElementById.offsetHeight) || 0;\n            setIsScrolled(scrollPosition > headerHeight);\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (async ()=>{\n            const res = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.getProviders)();\n            setProviders(res);\n        })();\n    }, []);\n    const [isMenuVisible, setIsMenuVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const handleMenuButton = ()=>{\n        setIsMenuVisible(true);\n    };\n    const handleXButton = ()=>{\n        setIsMenuVisible(false);\n    };\n    if (session === null || session === void 0 ? void 0 : (_session_user = session.user) === null || _session_user === void 0 ? void 0 : _session_user.name) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"fixed top-2 left-2 flex flex-row justify-around items-center w-[100px] px-1/5 uppercase border border-gray-600 bg-mainColor text-white rounded-md cursor-pointer z-20 \",\n                    onClick: handleMenuButton,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            className: \"fa-solid fa-bars\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 6\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"hamburger-menu__text\",\n                            children: \"menu\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 6\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: \"fixed top-0 bottom-0  flex flex-col justify-around items-center w-[160px] h-screen bg-mainColor transform transition-transform duration-300 z-30 \".concat(isMenuVisible ? \"translate-x-0\" : \"-translate-x-full\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            className: \"fa-solid fa-xmark hidden absolute top-5 left-5 text-white cursor-pointer\",\n                            onClick: handleXButton\n                        }, void 0, false, {\n                            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 6\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: \"Kamil\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 7\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: \"Kamil\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 7\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: \"Kamil\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 7\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: \"Kamil\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 7\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: \"Kamil\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 7\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: \"Kamil\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 7\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: \"Kamil\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 7\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 6\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true);\n    } else {\n        var _session_user1, _session_user2, _session_user3;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \"flex flex-row justify-between md:justify-around items-center fixed top-0 left-0 w-screen h-20 transition-colors duration-300 z-100 \".concat(isScrolled ? \"bg-black bg-opacity-60\" : \"\"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_Brand__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                    lineNumber: 90,\n                    columnNumber: 5\n                }, undefined),\n                providers && !(session === null || session === void 0 ? void 0 : (_session_user1 = session.user) === null || _session_user1 === void 0 ? void 0 : _session_user1.name) && Object.values(providers).map((provider)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row justify-between mx-3 sm:text-lg rounded font-semibold bg-mainColor hover:scale-105 cursor-pointer transition-transform\",\n                        onClick: ()=>{\n                            (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.signIn)(provider.id);\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-white p-2 ring-mainColor rounded\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    alt: 'Google \"G\" Logo',\n                                    src: \"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png\",\n                                    className: \"w-7 rounded-sm\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 9\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 8\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"mx-5\",\n                                children: \"Zaloguj się\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                                lineNumber: 107,\n                                columnNumber: 8\n                            }, undefined)\n                        ]\n                    }, provider.id, true, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 7\n                    }, undefined)),\n                (session === null || session === void 0 ? void 0 : (_session_user2 = session.user) === null || _session_user2 === void 0 ? void 0 : _session_user2.name) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            onClick: ()=>{\n                                (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.signOut)();\n                            },\n                            children: \"Wyloguj się\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                            lineNumber: 112,\n                            columnNumber: 7\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: session === null || session === void 0 ? void 0 : (_session_user3 = session.user) === null || _session_user3 === void 0 ? void 0 : _session_user3.name\n                        }, void 0, false, {\n                            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                            lineNumber: 118,\n                            columnNumber: 7\n                        }, undefined),\n                        (session === null || session === void 0 ? void 0 : session.user.image) && typeof session.user.image === \"string\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: session.user.image,\n                            width: 37,\n                            height: 37,\n                            className: \"rounded-full\",\n                            alt: \"profile\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                            lineNumber: 120,\n                            columnNumber: 8\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: _public_assets_img_google_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"].src,\n                            width: 37,\n                            height: 37,\n                            className: \"rounded-full\",\n                            alt: \"profile\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                            lineNumber: 122,\n                            columnNumber: 8\n                        }, undefined)\n                    ]\n                }, void 0, true)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n            lineNumber: 86,\n            columnNumber: 4\n        }, undefined);\n    }\n};\n_s(Navigation, \"RcJNmi5H1HN1PqRkxOouJ97UlH4=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession\n    ];\n});\n_c = Navigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\nvar _c;\n$RefreshReg$(_c, \"Navigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9Ib21lUGFnZS9OYXZpZ2F0aW9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVrRDtBQUNWO0FBQ0U7QUFJaUM7QUFDekI7QUFLbEQsTUFBTVUsYUFBYTtRQXlDZEM7O0lBeENKLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHWiwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLEVBQUVhLE1BQU1ILE9BQU8sRUFBRSxHQUFHSiwyREFBVUE7SUFFcEMsTUFBTSxDQUFDUSxXQUFXQyxhQUFhLEdBQUdmLCtDQUFRQSxDQUdoQztJQUVWQyxnREFBU0EsQ0FBQztRQUNULE1BQU1lLGVBQWU7Z0JBRUNDO1lBRHJCLE1BQU1DLGlCQUFpQkMsT0FBT0M7WUFDOUIsTUFBTUMsZUFBZUosQ0FBQUEsQ0FBQUEsMkJBQUFBLFNBQVNLLGVBQWUsdUJBQXhCTCxzQ0FBQUEsS0FBQUEsSUFBQUEseUJBQW1DTSxZQUFXLEtBQUs7WUFFeEVYLGNBQWNNLGlCQUFpQkc7UUFDaEM7UUFFQUYsT0FBT0ssaUJBQWlCLFVBQVVSO1FBRWxDLE9BQU87WUFDTkcsT0FBT00sb0JBQW9CLFVBQVVUO1FBQ3RDO0lBQ0QsR0FBRyxFQUFFO0lBRUxmLGdEQUFTQSxDQUFDO1FBQ1A7WUFDRCxNQUFNeUIsTUFBTSxNQUFNbkIsNkRBQVlBO1lBQzlCUSxhQUFhVztRQUNkO0lBQ0QsR0FBRyxFQUFFO0lBRUwsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBRzVCLCtDQUFRQSxDQUFDO0lBRW5ELE1BQU02QixtQkFBbUI7UUFDeEJELGlCQUFpQjtJQUNsQjtJQUVBLE1BQU1FLGdCQUFnQjtRQUNyQkYsaUJBQWlCO0lBQ2xCO0lBRUEsSUFBSWxCLG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsQ0FBQUEsZ0JBQUFBLFFBQVNxQixrQkFBVHJCLDJCQUFBQSxLQUFBQSxJQUFBQSxjQUFlc0IsTUFBTTtRQUN4QixxQkFDQzs7OEJBQ0MsOERBQUNDO29CQUNBQyxXQUFVO29CQUNWQyxTQUFTTjs7c0NBQ1QsOERBQUNPOzRCQUFFRixXQUFVOzs7Ozs7c0NBQ2IsOERBQUNHOzRCQUFFSCxXQUFVO3NDQUF1Qjs7Ozs7Ozs7Ozs7OzhCQUVyQyw4REFBQ0k7b0JBQ0FKLFdBQVcsb0pBRVYsT0FEQVAsZ0JBQWdCLGtCQUFrQjs7c0NBRW5DLDhEQUFDUzs0QkFDQUYsV0FBVTs0QkFDVkMsU0FBU0w7Ozs7OztzQ0FDViw4REFBQ1M7OzhDQUNBLDhEQUFDQzs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDQTs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDQTs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDQTs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDQTs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDQTs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDQTs4Q0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFLVCxPQUFPO1lBUUY5QixnQkFrQkRBLGdCQVFLQTtRQWpDUixxQkFDQyw4REFBQzRCO1lBQ0FKLFdBQVcsc0lBRVYsT0FEQXZCLGFBQWEsMkJBQTJCOzs4QkFFekMsOERBQUNULDREQUFLQTs7Ozs7Z0JBQ0xZLGFBQ0EsQ0FBQ0osQ0FBQUEsb0JBQUFBLHFCQUFBQSxLQUFBQSxJQUFBQSxDQUFBQSxpQkFBQUEsUUFBU3FCLGtCQUFUckIsNEJBQUFBLEtBQUFBLElBQUFBLGVBQWVzQixJQUFILEtBQ2JTLE9BQU9DLE9BQU81QixXQUFXNkIsSUFBSUMsQ0FBQUEseUJBQzVCLDhEQUFDWDt3QkFDQUMsV0FBVTt3QkFDVkMsU0FBUzs0QkFDUi9CLHVEQUFNQSxDQUFDd0MsU0FBU0M7d0JBQ2pCOzswQ0FFQSw4REFBQ1o7Z0NBQUlDLFdBQVU7MENBQ2QsNEVBQUNZO29DQUNBQyxLQUFJO29DQUNKQyxLQUFJO29DQUNKZCxXQUFVOzs7Ozs7Ozs7OzswQ0FHWiw4REFBQ2U7Z0NBQU9mLFdBQVU7MENBQU87Ozs7Ozs7dUJBUnBCVSxTQUFTQzs7Ozs7Z0JBV2hCbkMsQ0FBQUEsb0JBQUFBLHFCQUFBQSxLQUFBQSxJQUFBQSxDQUFBQSxpQkFBQUEsUUFBU3FCLGtCQUFUckIsNEJBQUFBLEtBQUFBLElBQUFBLGVBQWVzQixJQUFILG1CQUNaOztzQ0FDQyw4REFBQzdCLDZEQUFNQTs0QkFDTmdDLFNBQVM7Z0NBQ1I5Qix3REFBT0E7NEJBQ1I7c0NBQUc7Ozs7OztzQ0FHSiw4REFBQ2dDO3NDQUFHM0Isb0JBQUFBLHFCQUFBQSxLQUFBQSxJQUFBQSxDQUFBQSxpQkFBQUEsUUFBU3FCLGtCQUFUckIsNEJBQUFBLEtBQUFBLElBQUFBLGVBQWVzQjs7Ozs7O3dCQUNsQnRCLENBQUFBLG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBU3FCLEtBQUttQixVQUFTLE9BQU94QyxRQUFRcUIsS0FBS21CLFVBQVUseUJBQ3JELDhEQUFDSjs0QkFBSUUsS0FBS3RDLFFBQVFxQixLQUFLbUI7NEJBQU9DLE9BQU87NEJBQUlDLFFBQVE7NEJBQUlsQixXQUFVOzRCQUFlYSxLQUFJOzs7OztzREFFbEYsOERBQUNEOzRCQUNBRSxLQUFLeEMscUVBQU1BLENBQUN3Qzs0QkFDWkcsT0FBTzs0QkFDUEMsUUFBUTs0QkFDUmxCLFdBQVU7NEJBQ1ZhLEtBQUk7Ozs7Ozs7Ozs7Ozs7O0lBT1g7QUFDRDtHQXhITXRDOztRQUVxQkgsdURBQVVBOzs7S0FGL0JHO0FBMEhOLCtEQUFlQSxVQUFVQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSG9tZVBhZ2UvTmF2aWdhdGlvbi50c3g/ODEwOSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBCcmFuZCBmcm9tICdAY29tcG9uZW50cy9VSS9CcmFuZCdcbmltcG9ydCBCdXR0b24gZnJvbSAnQGNvbXBvbmVudHMvVUkvQnV0dG9uJ1xuXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IHNpZ25Jbiwgc2lnbk91dCwgdXNlU2Vzc2lvbiwgZ2V0UHJvdmlkZXJzIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0J1xuaW1wb3J0IGdvb2dsZSBmcm9tICdAcHVibGljL2Fzc2V0cy9pbWcvZ29vZ2xlLnBuZydcblxuaW1wb3J0IHsgTGl0ZXJhbFVuaW9uLCBDbGllbnRTYWZlUHJvdmlkZXIgfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnXG5pbXBvcnQgeyBCdWlsdEluUHJvdmlkZXJUeXBlIH0gZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycydcblxuY29uc3QgTmF2aWdhdGlvbiA9ICgpID0+IHtcblx0Y29uc3QgW2lzU2Nyb2xsZWQsIHNldElzU2Nyb2xsZWRdID0gdXNlU3RhdGUoZmFsc2UpXG5cdGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpXG5cblx0Y29uc3QgW3Byb3ZpZGVycywgc2V0UHJvdmlkZXJzXSA9IHVzZVN0YXRlPFJlY29yZDxcblx0XHRMaXRlcmFsVW5pb248QnVpbHRJblByb3ZpZGVyVHlwZSwgc3RyaW5nPixcblx0XHRDbGllbnRTYWZlUHJvdmlkZXJcblx0PiB8IG51bGw+KG51bGwpXG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBzY3JvbGxQb3NpdGlvbiA9IHdpbmRvdy5zY3JvbGxZXG5cdFx0XHRjb25zdCBoZWFkZXJIZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJyk/Lm9mZnNldEhlaWdodCB8fCAwXG5cblx0XHRcdHNldElzU2Nyb2xsZWQoc2Nyb2xsUG9zaXRpb24gPiBoZWFkZXJIZWlnaHQpXG5cdFx0fVxuXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbClcblxuXHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKVxuXHRcdH1cblx0fSwgW10pXG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHQ7KGFzeW5jICgpID0+IHtcblx0XHRcdGNvbnN0IHJlcyA9IGF3YWl0IGdldFByb3ZpZGVycygpXG5cdFx0XHRzZXRQcm92aWRlcnMocmVzKVxuXHRcdH0pKClcblx0fSwgW10pXG5cblx0Y29uc3QgW2lzTWVudVZpc2libGUsIHNldElzTWVudVZpc2libGVdID0gdXNlU3RhdGUodHJ1ZSlcblxuXHRjb25zdCBoYW5kbGVNZW51QnV0dG9uID0gKCkgPT4ge1xuXHRcdHNldElzTWVudVZpc2libGUodHJ1ZSlcblx0fVxuXG5cdGNvbnN0IGhhbmRsZVhCdXR0b24gPSAoKSA9PiB7XG5cdFx0c2V0SXNNZW51VmlzaWJsZShmYWxzZSlcblx0fVxuXG5cdGlmIChzZXNzaW9uPy51c2VyPy5uYW1lKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDw+XG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRjbGFzc05hbWU9J2ZpeGVkIHRvcC0yIGxlZnQtMiBmbGV4IGZsZXgtcm93IGp1c3RpZnktYXJvdW5kIGl0ZW1zLWNlbnRlciB3LVsxMDBweF0gcHgtMS81IHVwcGVyY2FzZSBib3JkZXIgYm9yZGVyLWdyYXktNjAwIGJnLW1haW5Db2xvciB0ZXh0LXdoaXRlIHJvdW5kZWQtbWQgY3Vyc29yLXBvaW50ZXIgei0yMCAnXG5cdFx0XHRcdFx0b25DbGljaz17aGFuZGxlTWVudUJ1dHRvbn0+XG5cdFx0XHRcdFx0PGkgY2xhc3NOYW1lPSdmYS1zb2xpZCBmYS1iYXJzJz48L2k+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdoYW1idXJnZXItbWVudV9fdGV4dCc+bWVudTwvcD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxuYXZcblx0XHRcdFx0XHRjbGFzc05hbWU9e2BmaXhlZCB0b3AtMCBib3R0b20tMCAgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWFyb3VuZCBpdGVtcy1jZW50ZXIgdy1bMTYwcHhdIGgtc2NyZWVuIGJnLW1haW5Db2xvciB0cmFuc2Zvcm0gdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tMzAwIHotMzAgJHtcblx0XHRcdFx0XHRcdGlzTWVudVZpc2libGUgPyAndHJhbnNsYXRlLXgtMCcgOiAnLXRyYW5zbGF0ZS14LWZ1bGwnXG5cdFx0XHRcdFx0fWB9PlxuXHRcdFx0XHRcdDxpXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J2ZhLXNvbGlkIGZhLXhtYXJrIGhpZGRlbiBhYnNvbHV0ZSB0b3AtNSBsZWZ0LTUgdGV4dC13aGl0ZSBjdXJzb3ItcG9pbnRlcidcblx0XHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZVhCdXR0b259PjwvaT5cblx0XHRcdFx0XHQ8dWw+XG5cdFx0XHRcdFx0XHQ8bGk+S2FtaWw8L2xpPlxuXHRcdFx0XHRcdFx0PGxpPkthbWlsPC9saT5cblx0XHRcdFx0XHRcdDxsaT5LYW1pbDwvbGk+XG5cdFx0XHRcdFx0XHQ8bGk+S2FtaWw8L2xpPlxuXHRcdFx0XHRcdFx0PGxpPkthbWlsPC9saT5cblx0XHRcdFx0XHRcdDxsaT5LYW1pbDwvbGk+XG5cdFx0XHRcdFx0XHQ8bGk+S2FtaWw8L2xpPlxuXHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdDwvbmF2PlxuXHRcdFx0PC8+XG5cdFx0KVxuXHR9IGVsc2Uge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8bmF2XG5cdFx0XHRcdGNsYXNzTmFtZT17YGZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIG1kOmp1c3RpZnktYXJvdW5kIGl0ZW1zLWNlbnRlciBmaXhlZCB0b3AtMCBsZWZ0LTAgdy1zY3JlZW4gaC0yMCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0zMDAgei0xMDAgJHtcblx0XHRcdFx0XHRpc1Njcm9sbGVkID8gJ2JnLWJsYWNrIGJnLW9wYWNpdHktNjAnIDogJydcblx0XHRcdFx0fWB9PlxuXHRcdFx0XHQ8QnJhbmQgLz5cblx0XHRcdFx0e3Byb3ZpZGVycyAmJlxuXHRcdFx0XHRcdCFzZXNzaW9uPy51c2VyPy5uYW1lICYmXG5cdFx0XHRcdFx0T2JqZWN0LnZhbHVlcyhwcm92aWRlcnMpLm1hcChwcm92aWRlciA9PiAoXG5cdFx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gbXgtMyBzbTp0ZXh0LWxnIHJvdW5kZWQgZm9udC1zZW1pYm9sZCBiZy1tYWluQ29sb3IgaG92ZXI6c2NhbGUtMTA1IGN1cnNvci1wb2ludGVyIHRyYW5zaXRpb24tdHJhbnNmb3JtJ1xuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0c2lnbkluKHByb3ZpZGVyLmlkKVxuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRrZXk9e3Byb3ZpZGVyLmlkfT5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2JnLXdoaXRlIHAtMiByaW5nLW1haW5Db2xvciByb3VuZGVkJz5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRcdFx0XHRhbHQ9J0dvb2dsZSBcIkdcIiBMb2dvJ1xuXHRcdFx0XHRcdFx0XHRcdFx0c3JjPSdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iLzUvNTMvR29vZ2xlXyUyMkclMjJfTG9nby5zdmcvNTEycHgtR29vZ2xlXyUyMkclMjJfTG9nby5zdmcucG5nJ1xuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSd3LTcgcm91bmRlZC1zbSdcblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9J214LTUnPlphbG9ndWogc2nEmTwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0KSl9XG5cdFx0XHRcdHtzZXNzaW9uPy51c2VyPy5uYW1lICYmIChcblx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0c2lnbk91dCgpXG5cdFx0XHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0XHRXeWxvZ3VqIHNpxJlcblx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0PHA+e3Nlc3Npb24/LnVzZXI/Lm5hbWV9PC9wPlxuXHRcdFx0XHRcdFx0e3Nlc3Npb24/LnVzZXIuaW1hZ2UgJiYgdHlwZW9mIHNlc3Npb24udXNlci5pbWFnZSA9PT0gJ3N0cmluZycgPyAoXG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtzZXNzaW9uLnVzZXIuaW1hZ2V9IHdpZHRoPXszN30gaGVpZ2h0PXszN30gY2xhc3NOYW1lPSdyb3VuZGVkLWZ1bGwnIGFsdD0ncHJvZmlsZScgLz5cblx0XHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdFx0XHRzcmM9e2dvb2dsZS5zcmN9IC8vIFphc3TEhXAgJy9kZWZhdWx0LXByb2ZpbGUtaW1hZ2UucG5nJyBvZHBvd2llZG5pbSDFunLDs2TFgmVtIG9icmF6dSBkb215xZtsbmVnb1xuXHRcdFx0XHRcdFx0XHRcdHdpZHRoPXszN31cblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ9ezM3fVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0ncm91bmRlZC1mdWxsJ1xuXHRcdFx0XHRcdFx0XHRcdGFsdD0ncHJvZmlsZSdcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0PC8+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L25hdj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJCcmFuZCIsIkJ1dHRvbiIsInNpZ25JbiIsInNpZ25PdXQiLCJ1c2VTZXNzaW9uIiwiZ2V0UHJvdmlkZXJzIiwiZ29vZ2xlIiwiTmF2aWdhdGlvbiIsInNlc3Npb24iLCJpc1Njcm9sbGVkIiwic2V0SXNTY3JvbGxlZCIsImRhdGEiLCJwcm92aWRlcnMiLCJzZXRQcm92aWRlcnMiLCJoYW5kbGVTY3JvbGwiLCJkb2N1bWVudCIsInNjcm9sbFBvc2l0aW9uIiwid2luZG93Iiwic2Nyb2xsWSIsImhlYWRlckhlaWdodCIsImdldEVsZW1lbnRCeUlkIiwib2Zmc2V0SGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZXMiLCJpc01lbnVWaXNpYmxlIiwic2V0SXNNZW51VmlzaWJsZSIsImhhbmRsZU1lbnVCdXR0b24iLCJoYW5kbGVYQnV0dG9uIiwidXNlciIsIm5hbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiaSIsInAiLCJuYXYiLCJ1bCIsImxpIiwiT2JqZWN0IiwidmFsdWVzIiwibWFwIiwicHJvdmlkZXIiLCJpZCIsImltZyIsImFsdCIsInNyYyIsImJ1dHRvbiIsImltYWdlIiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./components/HomePage/Navigation.tsx\n"));

/***/ })

});