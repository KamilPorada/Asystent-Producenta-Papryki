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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"2d246251a805\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3R5bGVzL2dsb2JhbHMuY3NzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvZ2xvYmFscy5jc3M/N2VmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjJkMjQ2MjUxYTgwNVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./styles/globals.css\n"));

/***/ }),

/***/ "(app-client)/./components/HomePage/Navigation.tsx":
/*!********************************************!*\
  !*** ./components/HomePage/Navigation.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_UI_Brand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/UI/Brand */ \"(app-client)/./components/UI/Brand.tsx\");\n/* harmony import */ var _components_UI_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/UI/Button */ \"(app-client)/./components/UI/Button.tsx\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/react */ \"(app-client)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _public_assets_img_google_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @public/assets/img/google.png */ \"(app-client)/./public/assets/img/google.png\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Navigation = ()=>{\n    var _session_user, _session_user1, _session_user2, _session_user3;\n    _s();\n    const [isScrolled, setIsScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession)();\n    const [providers, setProviders] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            var _document_getElementById;\n            const scrollPosition = window.scrollY;\n            const headerHeight = ((_document_getElementById = document.getElementById(\"header\")) === null || _document_getElementById === void 0 ? void 0 : _document_getElementById.offsetHeight) || 0;\n            setIsScrolled(scrollPosition > headerHeight);\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (async ()=>{\n            const res = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.getProviders)();\n            setProviders(res);\n        })();\n    }, []);\n    const handleSignUp = async (e)=>{\n        e.preventDefault();\n        try {\n            const response = await fetch(\"/api/auth/signup\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    email,\n                    password\n                })\n            });\n            const data = await response.json();\n            if (response.ok) {\n            // Obsłuż udaną rejestrację\n            // np. wyświetl komunikat o sukcesie lub przekieruj na nową stronę\n            } else {\n            // Obsłuż błąd rejestracji\n            // np. wyświetl komunikat o błędzie dla użytkownika\n            }\n        } catch (error) {\n            console.error(\"Błąd podczas rejestracji:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-row justify-between md:justify-around items-center fixed top-0 left-0 w-screen h-20 transition-colors duration-300 z-100 \".concat(isScrolled ? \"bg-black bg-opacity-60\" : \"\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_Brand__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                lineNumber: 80,\n                columnNumber: 4\n            }, undefined),\n            providers && !(session === null || session === void 0 ? void 0 : (_session_user = session.user) === null || _session_user === void 0 ? void 0 : _session_user.name) && Object.values(providers).map((provider)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row justify-between mx-3 sm:text-lg rounded font-semibold bg-mainColor hover:scale-105 cursor-pointer transition-transform\",\n                    onClick: ()=>{\n                        (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.signIn)(provider.id);\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-white p-2 ring-mainColor rounded\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                alt: \"Google 'G' Logo\",\n                                src: \"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png\",\n                                className: \"w-7 rounded-sm\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 8\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 7\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"mx-5\",\n                            children: \"Zaloguj się\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 7\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                    lineNumber: 84,\n                    columnNumber: 6\n                }, undefined)),\n            !(session === null || session === void 0 ? void 0 : (_session_user1 = session.user) === null || _session_user1 === void 0 ? void 0 : _session_user1.name) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSignUp,\n                className: \"text-black\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"email\",\n                        placeholder: \"Email\",\n                        value: email,\n                        onChange: (e)=>setEmail(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 6\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        placeholder: \"Password\",\n                        value: password,\n                        onChange: (e)=>setPassword(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 6\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Zarejestruj się\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 6\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                lineNumber: 100,\n                columnNumber: 5\n            }, undefined),\n            (session === null || session === void 0 ? void 0 : (_session_user2 = session.user) === null || _session_user2 === void 0 ? void 0 : _session_user2.name) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: ()=>{\n                            (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.signOut)();\n                        },\n                        children: \"Wyloguj się\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                        lineNumber: 108,\n                        columnNumber: 6\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: session === null || session === void 0 ? void 0 : (_session_user3 = session.user) === null || _session_user3 === void 0 ? void 0 : _session_user3.name\n                    }, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                        lineNumber: 114,\n                        columnNumber: 6\n                    }, undefined),\n                    (session === null || session === void 0 ? void 0 : session.user.image) && typeof session.user.image === \"string\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: session.user.image,\n                        width: 37,\n                        height: 37,\n                        className: \"rounded-full\",\n                        alt: \"profile\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                        lineNumber: 116,\n                        columnNumber: 7\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: _public_assets_img_google_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"].src,\n                        width: 37,\n                        height: 37,\n                        className: \"rounded-full\",\n                        alt: \"profile\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n                        lineNumber: 118,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/HomePage/Navigation.tsx\",\n        lineNumber: 76,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Navigation, \"mX0W7QaI2z2SqTJRyCqJ1vROL9Y=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession\n    ];\n});\n_c = Navigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\nvar _c;\n$RefreshReg$(_c, \"Navigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9Ib21lUGFnZS9OYXZpZ2F0aW9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVrRDtBQUNWO0FBQ0U7QUFJaUM7QUFDekI7QUFLbEQsTUFBTVUsYUFBYTtRQW1FZEMsZUFpQkFBLGdCQU9EQSxnQkFRS0E7O0lBbEdSLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHWiwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLEVBQUVhLE1BQU1ILE9BQU8sRUFBRSxHQUFHSiwyREFBVUE7SUFFcEMsTUFBTSxDQUFDUSxXQUFXQyxhQUFhLEdBQUdmLCtDQUFRQSxDQUdoQztJQUVWLE1BQU0sQ0FBQ2dCLE9BQU9DLFNBQVMsR0FBR2pCLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ2tCLFVBQVVDLFlBQVksR0FBR25CLCtDQUFRQSxDQUFDO0lBRXpDQyxnREFBU0EsQ0FBQztRQUNULE1BQU1tQixlQUFlO2dCQUVDQztZQURyQixNQUFNQyxpQkFBaUJDLE9BQU9DO1lBQzlCLE1BQU1DLGVBQWVKLENBQUFBLENBQUFBLDJCQUFBQSxTQUFTSyxlQUFlLHVCQUF4Qkwsc0NBQUFBLEtBQUFBLElBQUFBLHlCQUFtQ00sWUFBVyxLQUFLO1lBRXhFZixjQUFjVSxpQkFBaUJHO1FBQ2hDO1FBRUFGLE9BQU9LLGlCQUFpQixVQUFVUjtRQUVsQyxPQUFPO1lBQ05HLE9BQU9NLG9CQUFvQixVQUFVVDtRQUN0QztJQUNELEdBQUcsRUFBRTtJQUVMbkIsZ0RBQVNBLENBQUM7UUFDUDtZQUNELE1BQU02QixNQUFNLE1BQU12Qiw2REFBWUE7WUFDOUJRLGFBQWFlO1FBQ2Q7SUFDRCxHQUFHLEVBQUU7SUFFTCxNQUFNQyxlQUFlLE9BQU9DO1FBQzNCQSxFQUFFQztRQUVGLElBQUk7WUFDSCxNQUFNQyxXQUFXLE1BQU1DLE1BQU0sb0JBQW9CO2dCQUNoREMsUUFBUTtnQkFDUkMsU0FBUztvQkFDUixnQkFBZ0I7Z0JBQ2pCO2dCQUNBQyxNQUFNQyxLQUFLQyxVQUFVO29CQUFFeEI7b0JBQU9FO2dCQUFTO1lBQ3hDO1lBRUEsTUFBTUwsT0FBTyxNQUFNcUIsU0FBU087WUFFNUIsSUFBSVAsU0FBU1EsSUFBSTtZQUNoQiwyQkFBMkI7WUFDM0Isa0VBQWtFO1lBQ25FLE9BQU87WUFDTiwwQkFBMEI7WUFDMUIsbURBQW1EO1lBQ3BEO1FBQ0QsRUFBRSxPQUFPQyxPQUFPO1lBQ2ZDLFFBQVFELE1BQU0sNkJBQTZCQTtRQUM1QztJQUNEO0lBRUEscUJBQ0MsOERBQUNFO1FBQ0FDLFdBQVcsc0lBRVYsT0FEQW5DLGFBQWEsMkJBQTJCOzswQkFFekMsOERBQUNULDREQUFLQTs7Ozs7WUFDTFksYUFDQSxDQUFDSixDQUFBQSxvQkFBQUEscUJBQUFBLEtBQUFBLElBQUFBLENBQUFBLGdCQUFBQSxRQUFTcUMsa0JBQVRyQywyQkFBQUEsS0FBQUEsSUFBQUEsY0FBZXNDLElBQUgsS0FDYkMsT0FBT0MsT0FBT3BDLFdBQVdxQyxJQUFJQyxDQUFBQSx5QkFDNUIsOERBQUNQO29CQUNBQyxXQUFVO29CQUNWTyxTQUFTO3dCQUNSakQsdURBQU1BLENBQUNnRCxTQUFTRTtvQkFDakI7O3NDQUNBLDhEQUFDVDs0QkFBSUMsV0FBVTtzQ0FDZCw0RUFBQ1M7Z0NBQ0FDLEtBQUk7Z0NBQ0pDLEtBQUk7Z0NBQ0pYLFdBQVU7Ozs7Ozs7Ozs7O3NDQUdaLDhEQUFDWTs0QkFBT1osV0FBVTtzQ0FBTzs7Ozs7Ozs7Ozs7O1lBRzNCLENBQUNwQyxDQUFBQSxvQkFBQUEscUJBQUFBLEtBQUFBLElBQUFBLENBQUFBLGlCQUFBQSxRQUFTcUMsa0JBQVRyQyw0QkFBQUEsS0FBQUEsSUFBQUEsZUFBZXNDLElBQUgsbUJBQ2IsOERBQUNXO2dCQUFLQyxVQUFVN0I7Z0JBQWNlLFdBQVU7O2tDQUN2Qyw4REFBQ2U7d0JBQU1DLE1BQUs7d0JBQVFDLGFBQVk7d0JBQVFDLE9BQU9oRDt3QkFBUWlELFVBQVVqQyxDQUFBQSxJQUFLZixTQUFTZSxFQUFFa0MsT0FBT0Y7Ozs7OztrQ0FDeEYsOERBQUNIO3dCQUFNQyxNQUFLO3dCQUFXQyxhQUFZO3dCQUFXQyxPQUFPOUM7d0JBQVUrQyxVQUFVakMsQ0FBQUEsSUFBS2IsWUFBWWEsRUFBRWtDLE9BQU9GOzs7Ozs7a0NBQ25HLDhEQUFDTjt3QkFBT0ksTUFBSztrQ0FBUzs7Ozs7Ozs7Ozs7O1lBR3ZCcEQsQ0FBQUEsb0JBQUFBLHFCQUFBQSxLQUFBQSxJQUFBQSxDQUFBQSxpQkFBQUEsUUFBU3FDLGtCQUFUckMsNEJBQUFBLEtBQUFBLElBQUFBLGVBQWVzQyxJQUFILG1CQUNaOztrQ0FDQyw4REFBQzdDLDZEQUFNQTt3QkFDTmtELFNBQVM7NEJBQ1JoRCx3REFBT0E7d0JBQ1I7a0NBQUc7Ozs7OztrQ0FHSiw4REFBQzhEO2tDQUFHekQsb0JBQUFBLHFCQUFBQSxLQUFBQSxJQUFBQSxDQUFBQSxpQkFBQUEsUUFBU3FDLGtCQUFUckMsNEJBQUFBLEtBQUFBLElBQUFBLGVBQWVzQzs7Ozs7O29CQUNsQnRDLENBQUFBLG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBU3FDLEtBQUtxQixVQUFTLE9BQU8xRCxRQUFRcUMsS0FBS3FCLFVBQVUseUJBQ3JELDhEQUFDYjt3QkFBSUUsS0FBSy9DLFFBQVFxQyxLQUFLcUI7d0JBQU9DLE9BQU87d0JBQUlDLFFBQVE7d0JBQUl4QixXQUFVO3dCQUFlVSxLQUFJOzs7OztrREFFbEYsOERBQUNEO3dCQUNBRSxLQUFLakQscUVBQU1BLENBQUNpRDt3QkFDWlksT0FBTzt3QkFDUEMsUUFBUTt3QkFDUnhCLFdBQVU7d0JBQ1ZVLEtBQUk7Ozs7Ozs7Ozs7Ozs7O0FBT1g7R0FuSE0vQzs7UUFFcUJILHVEQUFVQTs7O0tBRi9CRztBQXFITiwrREFBZUEsVUFBVUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hvbWVQYWdlL05hdmlnYXRpb24udHN4PzgxMDkiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQnJhbmQgZnJvbSAnQGNvbXBvbmVudHMvVUkvQnJhbmQnXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0Bjb21wb25lbnRzL1VJL0J1dHRvbidcblxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyBzaWduSW4sIHNpZ25PdXQsIHVzZVNlc3Npb24sIGdldFByb3ZpZGVycyB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCdcbmltcG9ydCBnb29nbGUgZnJvbSAnQHB1YmxpYy9hc3NldHMvaW1nL2dvb2dsZS5wbmcnXG5cbmltcG9ydCB7IExpdGVyYWxVbmlvbiwgQ2xpZW50U2FmZVByb3ZpZGVyIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0J1xuaW1wb3J0IHsgQnVpbHRJblByb3ZpZGVyVHlwZSB9IGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMnXG5cbmNvbnN0IE5hdmlnYXRpb24gPSAoKSA9PiB7XG5cdGNvbnN0IFtpc1Njcm9sbGVkLCBzZXRJc1Njcm9sbGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuXHRjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKVxuXG5cdGNvbnN0IFtwcm92aWRlcnMsIHNldFByb3ZpZGVyc10gPSB1c2VTdGF0ZTxSZWNvcmQ8XG5cdFx0TGl0ZXJhbFVuaW9uPEJ1aWx0SW5Qcm92aWRlclR5cGUsIHN0cmluZz4sXG5cdFx0Q2xpZW50U2FmZVByb3ZpZGVyXG5cdD4gfCBudWxsPihudWxsKVxuXG5cdGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpXG5cdGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpXG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBzY3JvbGxQb3NpdGlvbiA9IHdpbmRvdy5zY3JvbGxZXG5cdFx0XHRjb25zdCBoZWFkZXJIZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJyk/Lm9mZnNldEhlaWdodCB8fCAwXG5cblx0XHRcdHNldElzU2Nyb2xsZWQoc2Nyb2xsUG9zaXRpb24gPiBoZWFkZXJIZWlnaHQpXG5cdFx0fVxuXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbClcblxuXHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKVxuXHRcdH1cblx0fSwgW10pXG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHQ7KGFzeW5jICgpID0+IHtcblx0XHRcdGNvbnN0IHJlcyA9IGF3YWl0IGdldFByb3ZpZGVycygpXG5cdFx0XHRzZXRQcm92aWRlcnMocmVzKVxuXHRcdH0pKClcblx0fSwgW10pXG5cblx0Y29uc3QgaGFuZGxlU2lnblVwID0gYXN5bmMgKGU6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9hdXRoL3NpZ251cCcsIHtcblx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7IGVtYWlsLCBwYXNzd29yZCB9KSxcblx0XHRcdH0pXG5cblx0XHRcdGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcblxuXHRcdFx0aWYgKHJlc3BvbnNlLm9rKSB7XG5cdFx0XHRcdC8vIE9ic8WCdcW8IHVkYW7EhSByZWplc3RyYWNqxJlcblx0XHRcdFx0Ly8gbnAuIHd5xZt3aWV0bCBrb211bmlrYXQgbyBzdWtjZXNpZSBsdWIgcHJ6ZWtpZXJ1aiBuYSBub3fEhSBzdHJvbsSZXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBPYnPFgnXFvCBixYLEhWQgcmVqZXN0cmFjamlcblx0XHRcdFx0Ly8gbnAuIHd5xZt3aWV0bCBrb211bmlrYXQgbyBixYLEmWR6aWUgZGxhIHXFvHl0a293bmlrYVxuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKCdCxYLEhWQgcG9kY3phcyByZWplc3RyYWNqaTonLCBlcnJvcilcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxkaXZcblx0XHRcdGNsYXNzTmFtZT17YGZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIG1kOmp1c3RpZnktYXJvdW5kIGl0ZW1zLWNlbnRlciBmaXhlZCB0b3AtMCBsZWZ0LTAgdy1zY3JlZW4gaC0yMCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0zMDAgei0xMDAgJHtcblx0XHRcdFx0aXNTY3JvbGxlZCA/ICdiZy1ibGFjayBiZy1vcGFjaXR5LTYwJyA6ICcnXG5cdFx0XHR9YH0+XG5cdFx0XHQ8QnJhbmQgLz5cblx0XHRcdHtwcm92aWRlcnMgJiZcblx0XHRcdFx0IXNlc3Npb24/LnVzZXI/Lm5hbWUgJiZcblx0XHRcdFx0T2JqZWN0LnZhbHVlcyhwcm92aWRlcnMpLm1hcChwcm92aWRlciA9PiAoXG5cdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBteC0zIHNtOnRleHQtbGcgcm91bmRlZCBmb250LXNlbWlib2xkIGJnLW1haW5Db2xvciBob3ZlcjpzY2FsZS0xMDUgY3Vyc29yLXBvaW50ZXIgdHJhbnNpdGlvbi10cmFuc2Zvcm0nXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHNpZ25Jbihwcm92aWRlci5pZClcblx0XHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2JnLXdoaXRlIHAtMiByaW5nLW1haW5Db2xvciByb3VuZGVkJz5cblx0XHRcdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0XHRcdGFsdD1cIkdvb2dsZSAnRycgTG9nb1wiXG5cdFx0XHRcdFx0XHRcdFx0c3JjPSdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iLzUvNTMvR29vZ2xlXyUyMkclMjJfTG9nby5zdmcvNTEycHgtR29vZ2xlXyUyMkclMjJfTG9nby5zdmcucG5nJ1xuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0ndy03IHJvdW5kZWQtc20nXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPSdteC01Jz5aYWxvZ3VqIHNpxJk8L2J1dHRvbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KSl9XG5cdFx0XHR7IXNlc3Npb24/LnVzZXI/Lm5hbWUgJiYgKFxuXHRcdFx0XHQ8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU2lnblVwfSBjbGFzc05hbWU9J3RleHQtYmxhY2snPlxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPSdlbWFpbCcgcGxhY2Vob2xkZXI9J0VtYWlsJyB2YWx1ZT17ZW1haWx9ICBvbkNoYW5nZT17ZSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9IC8+XG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9J3Bhc3N3b3JkJyBwbGFjZWhvbGRlcj0nUGFzc3dvcmQnIHZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9e2UgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfSAvPlxuXHRcdFx0XHRcdDxidXR0b24gdHlwZT0nc3VibWl0Jz5aYXJlamVzdHJ1aiBzacSZPC9idXR0b24+XG5cdFx0XHRcdDwvZm9ybT5cblx0XHRcdCl9XG5cdFx0XHR7c2Vzc2lvbj8udXNlcj8ubmFtZSAmJiAoXG5cdFx0XHRcdDw+XG5cdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRzaWduT3V0KClcblx0XHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0V3lsb2d1aiBzacSZXG5cdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0PHA+e3Nlc3Npb24/LnVzZXI/Lm5hbWV9PC9wPlxuXHRcdFx0XHRcdHtzZXNzaW9uPy51c2VyLmltYWdlICYmIHR5cGVvZiBzZXNzaW9uLnVzZXIuaW1hZ2UgPT09ICdzdHJpbmcnID8gKFxuXHRcdFx0XHRcdFx0PGltZyBzcmM9e3Nlc3Npb24udXNlci5pbWFnZX0gd2lkdGg9ezM3fSBoZWlnaHQ9ezM3fSBjbGFzc05hbWU9J3JvdW5kZWQtZnVsbCcgYWx0PSdwcm9maWxlJyAvPlxuXHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRcdHNyYz17Z29vZ2xlLnNyY30gLy8gWmFzdMSFcCAnL2RlZmF1bHQtcHJvZmlsZS1pbWFnZS5wbmcnIG9kcG93aWVkbmltIMW6csOzZMWCZW0gb2JyYXp1IGRvbXnFm2xuZWdvXG5cdFx0XHRcdFx0XHRcdHdpZHRoPXszN31cblx0XHRcdFx0XHRcdFx0aGVpZ2h0PXszN31cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdyb3VuZGVkLWZ1bGwnXG5cdFx0XHRcdFx0XHRcdGFsdD0ncHJvZmlsZSdcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0PC8+XG5cdFx0XHQpfVxuXHRcdDwvZGl2PlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb25cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQnJhbmQiLCJCdXR0b24iLCJzaWduSW4iLCJzaWduT3V0IiwidXNlU2Vzc2lvbiIsImdldFByb3ZpZGVycyIsImdvb2dsZSIsIk5hdmlnYXRpb24iLCJzZXNzaW9uIiwiaXNTY3JvbGxlZCIsInNldElzU2Nyb2xsZWQiLCJkYXRhIiwicHJvdmlkZXJzIiwic2V0UHJvdmlkZXJzIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJoYW5kbGVTY3JvbGwiLCJkb2N1bWVudCIsInNjcm9sbFBvc2l0aW9uIiwid2luZG93Iiwic2Nyb2xsWSIsImhlYWRlckhlaWdodCIsImdldEVsZW1lbnRCeUlkIiwib2Zmc2V0SGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZXMiLCJoYW5kbGVTaWduVXAiLCJlIiwicHJldmVudERlZmF1bHQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwianNvbiIsIm9rIiwiZXJyb3IiLCJjb25zb2xlIiwiZGl2IiwiY2xhc3NOYW1lIiwidXNlciIsIm5hbWUiLCJPYmplY3QiLCJ2YWx1ZXMiLCJtYXAiLCJwcm92aWRlciIsIm9uQ2xpY2siLCJpZCIsImltZyIsImFsdCIsInNyYyIsImJ1dHRvbiIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInAiLCJpbWFnZSIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/HomePage/Navigation.tsx\n"));

/***/ })

});