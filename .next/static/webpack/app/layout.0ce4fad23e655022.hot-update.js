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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"c587baa716dd\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3R5bGVzL2dsb2JhbHMuY3NzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvZ2xvYmFscy5jc3M/N2VmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImM1ODdiYWE3MTZkZFwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./styles/globals.css\n"));

/***/ }),

/***/ "(app-client)/./components/Navigation/SideBar.tsx":
/*!*******************************************!*\
  !*** ./components/Navigation/SideBar.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-client)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_UI_Brand__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/UI/Brand */ \"(app-client)/./components/UI/Brand.tsx\");\n/* harmony import */ var _MenuButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MenuButton */ \"(app-client)/./components/Navigation/MenuButton.tsx\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"(app-client)/./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"(app-client)/./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction SideBar() {\n    _s();\n    const [isMenuVisible, setIsMenuVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [activeMenuButton, setActiveMenuButton] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"dashboard\");\n    const currentYear = new Date().getFullYear();\n    const handleMenuButton = ()=>{\n        setIsMenuVisible(true);\n    };\n    const handleXButton = ()=>{\n        setIsMenuVisible(false);\n    };\n    const handleSignOut = ()=>{\n        (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)({\n            callbackUrl: \"/\"\n        });\n    };\n    const handleMenuButtonClick = (title)=>{\n        setActiveMenuButton(title);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed top-5 left-2 flex flex-row justify-around items-center w-[100px] px-1/5 uppercase bg-secondaryColor text-white rounded-md cursor-pointer z-20\",\n                onClick: handleMenuButton,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {\n                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faBars\n                    }, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Navigation/SideBar.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"hamburger-menu__text\",\n                        children: \"menu\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Navigation/SideBar.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Navigation/SideBar.tsx\",\n                lineNumber: 34,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"fixed top-0 bottom-0 flex flex-col justify-start w-[200px] sm:w-[220px] h-screen pt-14 px-2 bg-secondaryColor transform transition-transform duration-300 z-30  \".concat(isMenuVisible ? \"translate-x-0\" : \"-translate-x-full\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute top-5 left-5 text-white cursor-pointer\",\n                        onClick: handleXButton,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {\n                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faXmark\n                        }, void 0, false, {\n                            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Navigation/SideBar.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 5\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Navigation/SideBar.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_Brand__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Navigation/SideBar.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col space-y-2 mt-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"h-px w-full bg-zinc-600\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Navigation/SideBar.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 6\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MenuButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                links: [\n                                    \"/\"\n                                ],\n                                title: \"Strona gł\\xf3wna\",\n                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faCompass,\n                                active: activeMenuButton === \"dashboard\",\n                                onClick: ()=>handleMenuButtonClick(\"dashboard\")\n                            }, void 0, false, {\n                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Navigation/SideBar.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 6\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"h-px w-full bg-zinc-600\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Navigation/SideBar.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 6\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MenuButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                links: [\n                                    \"/new-trade-of-pepper\",\n                                    \"/trades-of-pepper\",\n                                    \"/new-point-of-sale\",\n                                    \"/points-of-sale\"\n                                ],\n                                title: \"Sprzedaż papryki\",\n                                icon: \"fa-solid fa-arrow-trend-up\",\n                                submenuIcon: true,\n                                active: activeMenuButton === \"trade\",\n                                submenuItems: [\n                                    \"Nowa transakcja\",\n                                    \"Lista transakcji\",\n                                    \"Nowy punkt sprzedaży\",\n                                    \"Punkty sprzedaży\"\n                                ],\n                                onClick: ()=>handleMenuButtonClick(\"trade\")\n                            }, void 0, false, {\n                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Navigation/SideBar.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 6\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MenuButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                links: [\n                                    \"/new-outgoing\",\n                                    \"/outgoings\"\n                                ],\n                                title: \"Wydatki\",\n                                icon: \"fa-solid fa-arrow-trend-down\",\n                                submenuIcon: true,\n                                active: activeMenuButton === \"outgoings\",\n                                submenuItems: [\n                                    \"Nowy wydatek\",\n                                    \"Lista wydatk\\xf3w\"\n                                ],\n                                onClick: ()=>handleMenuButtonClick(\"outgoings\")\n                            }, void 0, false, {\n                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Navigation/SideBar.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 6\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MenuButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                links: [\n                                    \"balance-of-pepper-trades/\",\n                                    \"/\"\n                                ],\n                                title: \"Bilans zysk\\xf3w i strat\",\n                                icon: \"fa-solid fa-scale-balanced\",\n                                submenuIcon: true,\n                                active: activeMenuButton === \"balanced\",\n                                submenuItems: [\n                                    \"Bilans sprzedaży papryki\",\n                                    \"Bilans wydatk\\xf3w\"\n                                ],\n                                onClick: ()=>handleMenuButtonClick(\"balanced\")\n                            }, void 0, false, {\n                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Navigation/SideBar.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 6\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MenuButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                links: [\n                                    \"/\",\n                                    \"/\"\n                                ],\n                                title: \"Zabiegi cheminizacyjne\",\n                                icon: \"fa-solid fa-skull-crossbones\",\n                                submenuIcon: true,\n                                active: activeMenuButton === \"pesticides\",\n                                submenuItems: [\n                                    \"Nowy zabieg\",\n                                    \"Lista zabieg\\xf3w\"\n                                ],\n                                onClick: ()=>handleMenuButtonClick(\"pesticides\")\n                            }, void 0, false, {\n                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Navigation/SideBar.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 6\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MenuButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                links: [\n                                    \"/\",\n                                    \"/\"\n                                ],\n                                title: \"Dziennik fertygacji\",\n                                icon: \"fa-solid fa-droplet\",\n                                submenuIcon: true,\n                                active: activeMenuButton === \"fertigation\",\n                                submenuItems: [\n                                    \"Nowa fertgacja\",\n                                    \"Lista fertygacji\"\n                                ],\n                                onClick: ()=>handleMenuButtonClick(\"fertigation\")\n                            }, void 0, false, {\n                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Navigation/SideBar.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 6\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MenuButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                links: [\n                                    \"/\",\n                                    \"/\",\n                                    \"/\"\n                                ],\n                                title: \"Notatki\",\n                                icon: \"fa-regular fa-clipboard\",\n                                submenuIcon: true,\n                                active: activeMenuButton === \"notes\",\n                                submenuItems: [\n                                    \"Nowa notatka\",\n                                    \"Lista notatek\",\n                                    \"Ważne daty\"\n                                ],\n                                onClick: ()=>handleMenuButtonClick(\"notes\")\n                            }, void 0, false, {\n                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Navigation/SideBar.tsx\",\n                                lineNumber: 103,\n                                columnNumber: 6\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"h-px w-full bg-zinc-600\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Navigation/SideBar.tsx\",\n                                lineNumber: 112,\n                                columnNumber: 6\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MenuButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                links: [\n                                    \"/\"\n                                ],\n                                title: \"Ustawienia\",\n                                icon: \"fa-solid fa-right-from-bracket\",\n                                active: activeMenuButton === \"settings\",\n                                onClick: ()=>handleMenuButtonClick(\"settings\")\n                            }, void 0, false, {\n                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Navigation/SideBar.tsx\",\n                                lineNumber: 113,\n                                columnNumber: 6\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MenuButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                links: [\n                                    \"/\"\n                                ],\n                                title: \"Wyloguj się\",\n                                icon: \"fa-solid fa-gear\",\n                                onClick: handleSignOut\n                            }, void 0, false, {\n                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Navigation/SideBar.tsx\",\n                                lineNumber: 120,\n                                columnNumber: 6\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Navigation/SideBar.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                        className: \"absolute bottom-0 w-full -mx-2 mb-2 flex flex-col text-center text-white text-xs sm:text-sm font-light\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"\\xa9 \",\n                                    currentYear,\n                                    \" Asystent Producenta Papryki\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Navigation/SideBar.tsx\",\n                                lineNumber: 123,\n                                columnNumber: 6\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Wszelkie prawa zastrzeżone\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Navigation/SideBar.tsx\",\n                                lineNumber: 124,\n                                columnNumber: 6\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Navigation/SideBar.tsx\",\n                        lineNumber: 122,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Navigation/SideBar.tsx\",\n                lineNumber: 40,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(SideBar, \"ztypnFRkom1jX8+dkmJw5SVm7Ow=\");\n_c = SideBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SideBar);\nvar _c;\n$RefreshReg$(_c, \"SideBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uL1NpZGVCYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF1QztBQUNFO0FBQ0Q7QUFDSDtBQUMyQjtBQUN3STtBQUV4TSxTQUFTUzs7SUFDUixNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHViwrQ0FBUUEsQ0FBQztJQUNuRCxNQUFNLENBQUNXLGtCQUFrQkMsb0JBQW9CLEdBQUdaLCtDQUFRQSxDQUFDO0lBRXpELE1BQU1hLGNBQWMsSUFBSUMsT0FBT0M7SUFFL0IsTUFBTUMsbUJBQW1CO1FBQ3hCTixpQkFBaUI7SUFDbEI7SUFFQSxNQUFNTyxnQkFBZ0I7UUFDckJQLGlCQUFpQjtJQUNsQjtJQUVBLE1BQU1RLGdCQUFnQjtRQUNyQmpCLHdEQUFPQSxDQUFDO1lBQ1BrQixhQUFhO1FBQ2Q7SUFDRDtJQUVBLE1BQU1DLHdCQUF3QixDQUFDQztRQUM5QlQsb0JBQW9CUztJQUNyQjtJQUVBLHFCQUNDOzswQkFDQyw4REFBQ0M7Z0JBQ0FDLFdBQVU7Z0JBQ1ZDLFNBQVNSOztrQ0FDVCw4REFBQ1osMkVBQWVBO3dCQUFDcUIsTUFBTXBCLHFFQUFNQTs7Ozs7O2tDQUM3Qiw4REFBQ3FCO3dCQUFFSCxXQUFVO2tDQUF1Qjs7Ozs7Ozs7Ozs7OzBCQUVyQyw4REFBQ0k7Z0JBQ0FKLFdBQVcsbUtBRVYsT0FEQWQsZ0JBQWdCLGtCQUFrQjs7a0NBRW5DLDhEQUFDYTt3QkFBSUMsV0FBVTt3QkFBa0RDLFNBQVNQO2tDQUMxRSw0RUFBQ2IsMkVBQWVBOzRCQUFDcUIsTUFBTW5CLHNFQUFPQTs7Ozs7Ozs7Ozs7a0NBRTlCLDhEQUFDSiw0REFBS0E7Ozs7O2tDQUNOLDhEQUFDb0I7d0JBQUlDLFdBQVU7OzBDQUNkLDhEQUFDRDtnQ0FBSUMsV0FBVTs7Ozs7OzBDQUNmLDhEQUFDcEIsbURBQVVBO2dDQUNWeUIsT0FBTztvQ0FBQztpQ0FBSTtnQ0FDWlAsT0FBTTtnQ0FDTkksTUFBTWxCLHdFQUFTQTtnQ0FDZnNCLFFBQVFsQixxQkFBcUI7Z0NBQzdCYSxTQUFTLElBQU1KLHNCQUFzQjs7Ozs7OzBDQUV0Qyw4REFBQ0U7Z0NBQUlDLFdBQVU7Ozs7OzswQ0FDZiw4REFBQ3BCLG1EQUFVQTtnQ0FDVnlCLE9BQU87b0NBQUM7b0NBQXdCO29DQUFxQjtvQ0FBc0I7aUNBQWtCO2dDQUM3RlAsT0FBTTtnQ0FDTkksTUFBSztnQ0FDTEssYUFBYTtnQ0FDYkQsUUFBUWxCLHFCQUFxQjtnQ0FDN0JvQixjQUFjO29DQUFDO29DQUFtQjtvQ0FBb0I7b0NBQXdCO2lDQUFtQjtnQ0FDakdQLFNBQVMsSUFBTUosc0JBQXNCOzs7Ozs7MENBRXRDLDhEQUFDakIsbURBQVVBO2dDQUNWeUIsT0FBTztvQ0FBQztvQ0FBaUI7aUNBQWE7Z0NBQ3RDUCxPQUFNO2dDQUNOSSxNQUFLO2dDQUNMSyxhQUFhO2dDQUNiRCxRQUFRbEIscUJBQXFCO2dDQUM3Qm9CLGNBQWM7b0NBQUM7b0NBQWdCO2lDQUFpQjtnQ0FDaERQLFNBQVMsSUFBTUosc0JBQXNCOzs7Ozs7MENBRXRDLDhEQUFDakIsbURBQVVBO2dDQUNWeUIsT0FBTztvQ0FBQztvQ0FBNkI7aUNBQUk7Z0NBQ3pDUCxPQUFNO2dDQUNOSSxNQUFLO2dDQUNMSyxhQUFhO2dDQUNiRCxRQUFRbEIscUJBQXFCO2dDQUM3Qm9CLGNBQWM7b0NBQUM7b0NBQTRCO2lDQUFrQjtnQ0FDN0RQLFNBQVMsSUFBTUosc0JBQXNCOzs7Ozs7MENBRXRDLDhEQUFDakIsbURBQVVBO2dDQUNWeUIsT0FBTztvQ0FBQztvQ0FBSztpQ0FBSTtnQ0FDakJQLE9BQU07Z0NBQ05JLE1BQUs7Z0NBQ0xLLGFBQWE7Z0NBQ2JELFFBQVFsQixxQkFBcUI7Z0NBQzdCb0IsY0FBYztvQ0FBQztvQ0FBZTtpQ0FBaUI7Z0NBQy9DUCxTQUFTLElBQU1KLHNCQUFzQjs7Ozs7OzBDQUV0Qyw4REFBQ2pCLG1EQUFVQTtnQ0FDVnlCLE9BQU87b0NBQUM7b0NBQUs7aUNBQUs7Z0NBQ2xCUCxPQUFNO2dDQUNOSSxNQUFLO2dDQUNMSyxhQUFhO2dDQUNiRCxRQUFRbEIscUJBQXFCO2dDQUM3Qm9CLGNBQWM7b0NBQUM7b0NBQWtCO2lDQUFtQjtnQ0FDcERQLFNBQVMsSUFBTUosc0JBQXNCOzs7Ozs7MENBRXRDLDhEQUFDakIsbURBQVVBO2dDQUNWeUIsT0FBTztvQ0FBQztvQ0FBSztvQ0FBSztpQ0FBSTtnQ0FDdEJQLE9BQU07Z0NBQ05JLE1BQUs7Z0NBQ0xLLGFBQWE7Z0NBQ2JELFFBQVFsQixxQkFBcUI7Z0NBQzdCb0IsY0FBYztvQ0FBQztvQ0FBZ0I7b0NBQWlCO2lDQUFhO2dDQUM3RFAsU0FBUyxJQUFNSixzQkFBc0I7Ozs7OzswQ0FFdEMsOERBQUNFO2dDQUFJQyxXQUFVOzs7Ozs7MENBQ2YsOERBQUNwQixtREFBVUE7Z0NBQ1Z5QixPQUFPO29DQUFDO2lDQUFJO2dDQUNaUCxPQUFNO2dDQUNOSSxNQUFLO2dDQUNMSSxRQUFRbEIscUJBQXFCO2dDQUM3QmEsU0FBUyxJQUFNSixzQkFBc0I7Ozs7OzswQ0FFdEMsOERBQUNqQixtREFBVUE7Z0NBQUN5QixPQUFPO29DQUFDO2lDQUFJO2dDQUFFUCxPQUFNO2dDQUFjSSxNQUFLO2dDQUFtQkQsU0FBU047Ozs7Ozs7Ozs7OztrQ0FFaEYsOERBQUNjO3dCQUFPVCxXQUFVOzswQ0FDakIsOERBQUNHOztvQ0FBRTtvQ0FBUWI7b0NBQVk7Ozs7Ozs7MENBQ3ZCLDhEQUFDYTswQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLUjtHQXpIU2xCO0tBQUFBO0FBMkhULCtEQUFlQSxPQUFPQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9TaWRlQmFyLnRzeD81MjE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgc2lnbk91dCB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCdcbmltcG9ydCBCcmFuZCBmcm9tICdAY29tcG9uZW50cy9VSS9CcmFuZCdcbmltcG9ydCBNZW51QnV0dG9uIGZyb20gJy4vTWVudUJ1dHRvbidcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcbmltcG9ydCB7IGZhQmFycywgZmFYbWFyaywgZmFDb21wYXNzLCBmYUFycm93VHJlbmRVcCwgZmFBcnJvd1RyZW5kRG93biwgZmFTY2FsZUJhbGFuY2VkLCBmYVNrdWxsQ3Jvc3Nib25lcywgZmFEcm9wbGV0LCBmYUNsaXBib2FyZCwgZmFSaWdodEZyb21CcmFja2V0LCBmYUdlYXIgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXG5cbmZ1bmN0aW9uIFNpZGVCYXIoKSB7XG5cdGNvbnN0IFtpc01lbnVWaXNpYmxlLCBzZXRJc01lbnVWaXNpYmxlXSA9IHVzZVN0YXRlKHRydWUpXG5cdGNvbnN0IFthY3RpdmVNZW51QnV0dG9uLCBzZXRBY3RpdmVNZW51QnV0dG9uXSA9IHVzZVN0YXRlKCdkYXNoYm9hcmQnKVxuXG5cdGNvbnN0IGN1cnJlbnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpXG5cblx0Y29uc3QgaGFuZGxlTWVudUJ1dHRvbiA9ICgpID0+IHtcblx0XHRzZXRJc01lbnVWaXNpYmxlKHRydWUpXG5cdH1cblxuXHRjb25zdCBoYW5kbGVYQnV0dG9uID0gKCkgPT4ge1xuXHRcdHNldElzTWVudVZpc2libGUoZmFsc2UpXG5cdH1cblxuXHRjb25zdCBoYW5kbGVTaWduT3V0ID0gKCkgPT4ge1xuXHRcdHNpZ25PdXQoe1xuXHRcdFx0Y2FsbGJhY2tVcmw6ICcvJyxcblx0XHR9KVxuXHR9XG5cblx0Y29uc3QgaGFuZGxlTWVudUJ1dHRvbkNsaWNrID0gKHRpdGxlOiBzdHJpbmcpID0+IHtcblx0XHRzZXRBY3RpdmVNZW51QnV0dG9uKHRpdGxlKVxuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PGRpdlxuXHRcdFx0XHRjbGFzc05hbWU9J2ZpeGVkIHRvcC01IGxlZnQtMiBmbGV4IGZsZXgtcm93IGp1c3RpZnktYXJvdW5kIGl0ZW1zLWNlbnRlciB3LVsxMDBweF0gcHgtMS81IHVwcGVyY2FzZSBiZy1zZWNvbmRhcnlDb2xvciB0ZXh0LXdoaXRlIHJvdW5kZWQtbWQgY3Vyc29yLXBvaW50ZXIgei0yMCdcblx0XHRcdFx0b25DbGljaz17aGFuZGxlTWVudUJ1dHRvbn0+XG5cdFx0XHRcdDxGb250QXdlc29tZUljb24gaWNvbj17ZmFCYXJzfS8+XG5cdFx0XHRcdDxwIGNsYXNzTmFtZT0naGFtYnVyZ2VyLW1lbnVfX3RleHQnPm1lbnU8L3A+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxuYXZcblx0XHRcdFx0Y2xhc3NOYW1lPXtgZml4ZWQgdG9wLTAgYm90dG9tLTAgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IHctWzIwMHB4XSBzbTp3LVsyMjBweF0gaC1zY3JlZW4gcHQtMTQgcHgtMiBiZy1zZWNvbmRhcnlDb2xvciB0cmFuc2Zvcm0gdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tMzAwIHotMzAgICR7XG5cdFx0XHRcdFx0aXNNZW51VmlzaWJsZSA/ICd0cmFuc2xhdGUteC0wJyA6ICctdHJhbnNsYXRlLXgtZnVsbCdcblx0XHRcdFx0fWB9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nYWJzb2x1dGUgdG9wLTUgbGVmdC01IHRleHQtd2hpdGUgY3Vyc29yLXBvaW50ZXInIG9uQ2xpY2s9e2hhbmRsZVhCdXR0b259PlxuXHRcdFx0XHQ8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhWG1hcmt9Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxCcmFuZCAvPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBzcGFjZS15LTIgbXQtNSc+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2gtcHggdy1mdWxsIGJnLXppbmMtNjAwJz48L2Rpdj5cblx0XHRcdFx0XHQ8TWVudUJ1dHRvblxuXHRcdFx0XHRcdFx0bGlua3M9e1snLyddfVxuXHRcdFx0XHRcdFx0dGl0bGU9J1N0cm9uYSBnxYLDs3duYSdcblx0XHRcdFx0XHRcdGljb249e2ZhQ29tcGFzc31cblx0XHRcdFx0XHRcdGFjdGl2ZT17YWN0aXZlTWVudUJ1dHRvbiA9PT0gJ2Rhc2hib2FyZCd9XG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBoYW5kbGVNZW51QnV0dG9uQ2xpY2soJ2Rhc2hib2FyZCcpfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2gtcHggdy1mdWxsIGJnLXppbmMtNjAwJz48L2Rpdj5cblx0XHRcdFx0XHQ8TWVudUJ1dHRvblxuXHRcdFx0XHRcdFx0bGlua3M9e1snL25ldy10cmFkZS1vZi1wZXBwZXInLCAnL3RyYWRlcy1vZi1wZXBwZXInLCAnL25ldy1wb2ludC1vZi1zYWxlJywgJy9wb2ludHMtb2Ytc2FsZSddfVxuXHRcdFx0XHRcdFx0dGl0bGU9J1NwcnplZGHFvCBwYXByeWtpJ1xuXHRcdFx0XHRcdFx0aWNvbj0nZmEtc29saWQgZmEtYXJyb3ctdHJlbmQtdXAnXG5cdFx0XHRcdFx0XHRzdWJtZW51SWNvbj17dHJ1ZX1cblx0XHRcdFx0XHRcdGFjdGl2ZT17YWN0aXZlTWVudUJ1dHRvbiA9PT0gJ3RyYWRlJ31cblx0XHRcdFx0XHRcdHN1Ym1lbnVJdGVtcz17WydOb3dhIHRyYW5zYWtjamEnLCAnTGlzdGEgdHJhbnNha2NqaScsICdOb3d5IHB1bmt0IHNwcnplZGHFvHknLCAnUHVua3R5IHNwcnplZGHFvHknXX1cblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IGhhbmRsZU1lbnVCdXR0b25DbGljaygndHJhZGUnKX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxNZW51QnV0dG9uXG5cdFx0XHRcdFx0XHRsaW5rcz17WycvbmV3LW91dGdvaW5nJywgJy9vdXRnb2luZ3MnXX1cblx0XHRcdFx0XHRcdHRpdGxlPSdXeWRhdGtpJ1xuXHRcdFx0XHRcdFx0aWNvbj0nZmEtc29saWQgZmEtYXJyb3ctdHJlbmQtZG93bidcblx0XHRcdFx0XHRcdHN1Ym1lbnVJY29uPXt0cnVlfVxuXHRcdFx0XHRcdFx0YWN0aXZlPXthY3RpdmVNZW51QnV0dG9uID09PSAnb3V0Z29pbmdzJ31cblx0XHRcdFx0XHRcdHN1Ym1lbnVJdGVtcz17WydOb3d5IHd5ZGF0ZWsnLCAnTGlzdGEgd3lkYXRrw7N3J119XG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBoYW5kbGVNZW51QnV0dG9uQ2xpY2soJ291dGdvaW5ncycpfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PE1lbnVCdXR0b25cblx0XHRcdFx0XHRcdGxpbmtzPXtbJ2JhbGFuY2Utb2YtcGVwcGVyLXRyYWRlcy8nLCAnLyddfVxuXHRcdFx0XHRcdFx0dGl0bGU9J0JpbGFucyB6eXNrw7N3IGkgc3RyYXQnXG5cdFx0XHRcdFx0XHRpY29uPSdmYS1zb2xpZCBmYS1zY2FsZS1iYWxhbmNlZCdcblx0XHRcdFx0XHRcdHN1Ym1lbnVJY29uPXt0cnVlfVxuXHRcdFx0XHRcdFx0YWN0aXZlPXthY3RpdmVNZW51QnV0dG9uID09PSAnYmFsYW5jZWQnfVxuXHRcdFx0XHRcdFx0c3VibWVudUl0ZW1zPXtbJ0JpbGFucyBzcHJ6ZWRhxbx5IHBhcHJ5a2knLCAnQmlsYW5zIHd5ZGF0a8OzdyddfVxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gaGFuZGxlTWVudUJ1dHRvbkNsaWNrKCdiYWxhbmNlZCcpfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PE1lbnVCdXR0b25cblx0XHRcdFx0XHRcdGxpbmtzPXtbJy8nLCAnLyddfVxuXHRcdFx0XHRcdFx0dGl0bGU9J1phYmllZ2kgY2hlbWluaXphY3lqbmUnXG5cdFx0XHRcdFx0XHRpY29uPSdmYS1zb2xpZCBmYS1za3VsbC1jcm9zc2JvbmVzJ1xuXHRcdFx0XHRcdFx0c3VibWVudUljb249e3RydWV9XG5cdFx0XHRcdFx0XHRhY3RpdmU9e2FjdGl2ZU1lbnVCdXR0b24gPT09ICdwZXN0aWNpZGVzJ31cblx0XHRcdFx0XHRcdHN1Ym1lbnVJdGVtcz17WydOb3d5IHphYmllZycsICdMaXN0YSB6YWJpZWfDs3cnXX1cblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IGhhbmRsZU1lbnVCdXR0b25DbGljaygncGVzdGljaWRlcycpfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PE1lbnVCdXR0b25cblx0XHRcdFx0XHRcdGxpbmtzPXtbJy8nLCAnLycsXX1cblx0XHRcdFx0XHRcdHRpdGxlPSdEemllbm5payBmZXJ0eWdhY2ppJ1xuXHRcdFx0XHRcdFx0aWNvbj0nZmEtc29saWQgZmEtZHJvcGxldCdcblx0XHRcdFx0XHRcdHN1Ym1lbnVJY29uPXt0cnVlfVxuXHRcdFx0XHRcdFx0YWN0aXZlPXthY3RpdmVNZW51QnV0dG9uID09PSAnZmVydGlnYXRpb24nfVxuXHRcdFx0XHRcdFx0c3VibWVudUl0ZW1zPXtbJ05vd2EgZmVydGdhY2phJywgJ0xpc3RhIGZlcnR5Z2FjamknXX1cblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IGhhbmRsZU1lbnVCdXR0b25DbGljaygnZmVydGlnYXRpb24nKX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxNZW51QnV0dG9uXG5cdFx0XHRcdFx0XHRsaW5rcz17WycvJywgJy8nLCAnLyddfVxuXHRcdFx0XHRcdFx0dGl0bGU9J05vdGF0a2knXG5cdFx0XHRcdFx0XHRpY29uPSdmYS1yZWd1bGFyIGZhLWNsaXBib2FyZCdcblx0XHRcdFx0XHRcdHN1Ym1lbnVJY29uPXt0cnVlfVxuXHRcdFx0XHRcdFx0YWN0aXZlPXthY3RpdmVNZW51QnV0dG9uID09PSAnbm90ZXMnfVxuXHRcdFx0XHRcdFx0c3VibWVudUl0ZW1zPXtbJ05vd2Egbm90YXRrYScsICdMaXN0YSBub3RhdGVrJywgJ1dhxbxuZSBkYXR5J119XG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBoYW5kbGVNZW51QnV0dG9uQ2xpY2soJ25vdGVzJyl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0naC1weCB3LWZ1bGwgYmctemluYy02MDAnPjwvZGl2PlxuXHRcdFx0XHRcdDxNZW51QnV0dG9uXG5cdFx0XHRcdFx0XHRsaW5rcz17WycvJ119XG5cdFx0XHRcdFx0XHR0aXRsZT0nVXN0YXdpZW5pYSdcblx0XHRcdFx0XHRcdGljb249J2ZhLXNvbGlkIGZhLXJpZ2h0LWZyb20tYnJhY2tldCdcblx0XHRcdFx0XHRcdGFjdGl2ZT17YWN0aXZlTWVudUJ1dHRvbiA9PT0gJ3NldHRpbmdzJ31cblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IGhhbmRsZU1lbnVCdXR0b25DbGljaygnc2V0dGluZ3MnKX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxNZW51QnV0dG9uIGxpbmtzPXtbJy8nXX0gdGl0bGU9J1d5bG9ndWogc2nEmScgaWNvbj0nZmEtc29saWQgZmEtZ2Vhcicgb25DbGljaz17aGFuZGxlU2lnbk91dH0gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxmb290ZXIgY2xhc3NOYW1lPSdhYnNvbHV0ZSBib3R0b20tMCB3LWZ1bGwgLW14LTIgbWItMiBmbGV4IGZsZXgtY29sIHRleHQtY2VudGVyIHRleHQtd2hpdGUgdGV4dC14cyBzbTp0ZXh0LXNtIGZvbnQtbGlnaHQnPlxuXHRcdFx0XHRcdDxwPiZjb3B5OyB7Y3VycmVudFllYXJ9IEFzeXN0ZW50IFByb2R1Y2VudGEgUGFwcnlraTwvcD5cblx0XHRcdFx0XHQ8cD5Xc3plbGtpZSBwcmF3YSB6YXN0cnplxbxvbmU8L3A+XG5cdFx0XHRcdDwvZm9vdGVyPlxuXHRcdFx0PC9uYXY+XG5cdFx0PC8+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lkZUJhclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJzaWduT3V0IiwiQnJhbmQiLCJNZW51QnV0dG9uIiwiRm9udEF3ZXNvbWVJY29uIiwiZmFCYXJzIiwiZmFYbWFyayIsImZhQ29tcGFzcyIsIlNpZGVCYXIiLCJpc01lbnVWaXNpYmxlIiwic2V0SXNNZW51VmlzaWJsZSIsImFjdGl2ZU1lbnVCdXR0b24iLCJzZXRBY3RpdmVNZW51QnV0dG9uIiwiY3VycmVudFllYXIiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJoYW5kbGVNZW51QnV0dG9uIiwiaGFuZGxlWEJ1dHRvbiIsImhhbmRsZVNpZ25PdXQiLCJjYWxsYmFja1VybCIsImhhbmRsZU1lbnVCdXR0b25DbGljayIsInRpdGxlIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsImljb24iLCJwIiwibmF2IiwibGlua3MiLCJhY3RpdmUiLCJzdWJtZW51SWNvbiIsInN1Ym1lbnVJdGVtcyIsImZvb3RlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/Navigation/SideBar.tsx\n"));

/***/ })

});