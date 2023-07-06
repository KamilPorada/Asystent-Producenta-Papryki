"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/outgoings/page",{

/***/ "(app-client)/./app/outgoings/page.tsx":
/*!********************************!*\
  !*** ./app/outgoings/page.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-client)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_UI_SectionTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/UI/SectionTitle */ \"(app-client)/./components/UI/SectionTitle.tsx\");\n/* harmony import */ var _components_UI_SearchInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/UI/SearchInput */ \"(app-client)/./components/UI/SearchInput.tsx\");\n/* harmony import */ var _components_Items_OutgoingItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/Items/OutgoingItem */ \"(app-client)/./components/Items/OutgoingItem.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction page() {\n    var _ref;\n    _s();\n    const [allOutgoings, setAllOutgoings] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [filteredOutgoings, setFilteredOutgoings] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    var _id;\n    const userId = (_id = (_ref = session === null || session === void 0 ? void 0 : session.user) === null || _ref === void 0 ? void 0 : _ref.id) !== null && _id !== void 0 ? _id : \"\";\n    const fetchOutgoinhs = async ()=>{\n        try {\n            const response = await fetch(\"/api/outgoing\");\n            const data = await response.json();\n            const filteredOutgoings = data.filter((outgoing)=>outgoing.creator._id.toString() === userId.toString());\n            setAllOutgoings(filteredOutgoings);\n            setFilteredOutgoings(filteredOutgoings);\n        } catch (error) {\n            console.log(error);\n        } finally{\n            setLoading(false);\n        }\n    };\n    const handleDelete = async (outgoing)=>{\n        try {\n            await fetch(\"/api/outgoing/\".concat(outgoing._id.toString()), {\n                method: \"DELETE\"\n            });\n            const filteredOutgoings = allOutgoings.filter((item)=>item._id !== outgoing._id);\n            setAllOutgoings(filteredOutgoings);\n            setLoading(true);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const handleSearch = (searchTerm)=>{\n        const filteredOutgoings = allOutgoings.filter((outgoing)=>outgoing.name.toLowerCase().includes(searchTerm.toLowerCase()) || outgoing.descr.toLowerCase().includes(searchTerm.toLowerCase()));\n        setFilteredOutgoings(filteredOutgoings);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchOutgoinhs();\n    }, [\n        loading\n    ]);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"container py-20\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-10 text-black text-center\",\n                children: \"Wczytywanie danych...\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/outgoings/page.tsx\",\n                lineNumber: 79,\n                columnNumber: 5\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/outgoings/page.tsx\",\n            lineNumber: 78,\n            columnNumber: 4\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"container py-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_SectionTitle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                title: \"Moje wydatki\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/outgoings/page.tsx\",\n                lineNumber: 86,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_SearchInput__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                onSearch: handleSearch\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/outgoings/page.tsx\",\n                lineNumber: 87,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row justify-between flex-wrap\",\n                children: filteredOutgoings.length > 0 ? filteredOutgoings.map((outgoing)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Items_OutgoingItem__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        name: outgoing.name,\n                        category: outgoing.category,\n                        date: outgoing.date,\n                        price: outgoing.price,\n                        amount: outgoing.amount,\n                        totalSum: outgoing.totalSum,\n                        describe: outgoing.describe,\n                        handleDelete: ()=>handleDelete(outgoing)\n                    }, outgoing._id, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/outgoings/page.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 7\n                    }, this)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"mt-10 text-black text-center\",\n                    children: \"Brak wydatk\\xf3w\"\n                }, void 0, false, {\n                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/outgoings/page.tsx\",\n                    lineNumber: 104,\n                    columnNumber: 6\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/outgoings/page.tsx\",\n                lineNumber: 88,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/outgoings/page.tsx\",\n        lineNumber: 85,\n        columnNumber: 3\n    }, this);\n}\n_s(page, \"2nelzu0Wv98TqXP+3hQfn7WQ3go=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Li9hcHAvb3V0Z29pbmdzL3BhZ2UudHN4P2JiZDQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xuaW1wb3J0IFNlY3Rpb25UaXRsZSBmcm9tICdAY29tcG9uZW50cy9VSS9TZWN0aW9uVGl0bGUnXG5pbXBvcnQgU2VhcmNoSW5wdXQgZnJvbSAnQGNvbXBvbmVudHMvVUkvU2VhcmNoSW5wdXQnXG5pbXBvcnQgT3V0Z29pbmdJdGVtIGZyb20gJ0Bjb21wb25lbnRzL0l0ZW1zL091dGdvaW5nSXRlbSdcblxuaW50ZXJmYWNlIE91dGdvaW5nIHtcblx0X2lkOiBzdHJpbmdcblx0Y3JlYXRvcjoge1xuXHRcdF9pZDogc3RyaW5nXG5cdFx0ZW1haWw6IHN0cmluZ1xuXHRcdHVzZXJuYW1lOiBzdHJpbmdcblx0XHRpbWFnZTogc3RyaW5nXG5cdH1cblx0bmFtZTogc3RyaW5nXG5cdGNhdGVnb3J5OiBudW1iZXJcblx0ZGF0ZTogc3RyaW5nXG5cdHByaWNlOiBudW1iZXJcblx0YW1vdW50OiBudW1iZXJcblx0dG90YWxTdW06IG51bWJlclxuXHRkZXNjcmliZTogc3RyaW5nXG59XG5cbmZ1bmN0aW9uIHBhZ2UoKSB7XG5cdGNvbnN0IFthbGxPdXRnb2luZ3MsIHNldEFsbE91dGdvaW5nc10gPSB1c2VTdGF0ZTxPdXRnb2luZ1tdPihbXSlcblx0Y29uc3QgW2ZpbHRlcmVkT3V0Z29pbmdzLCBzZXRGaWx0ZXJlZE91dGdvaW5nc10gPSB1c2VTdGF0ZTxPdXRnb2luZ1tdPihbXSlcblx0Y29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblx0Y29uc3QgeyBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKClcblx0Y29uc3QgdXNlcklkID0gKHNlc3Npb24/LnVzZXIgYXMgeyBpZD86IHN0cmluZyB9KT8uaWQgPz8gJydcblxuXHRjb25zdCBmZXRjaE91dGdvaW5ocyA9IGFzeW5jICgpID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9vdXRnb2luZycpXG5cdFx0XHRjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cblx0XHRcdGNvbnN0IGZpbHRlcmVkT3V0Z29pbmdzID0gZGF0YS5maWx0ZXIoXG5cdFx0XHRcdChvdXRnb2luZzogT3V0Z29pbmcpID0+IG91dGdvaW5nLmNyZWF0b3IuX2lkLnRvU3RyaW5nKCkgPT09IHVzZXJJZC50b1N0cmluZygpXG5cdFx0XHQpXG5cblx0XHRcdHNldEFsbE91dGdvaW5ncyhmaWx0ZXJlZE91dGdvaW5ncylcblx0XHRcdHNldEZpbHRlcmVkT3V0Z29pbmdzKGZpbHRlcmVkT3V0Z29pbmdzKVxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhlcnJvcilcblx0XHR9IGZpbmFsbHkge1xuXHRcdFx0c2V0TG9hZGluZyhmYWxzZSlcblx0XHR9XG5cdH1cblx0Y29uc3QgaGFuZGxlRGVsZXRlID0gYXN5bmMgKG91dGdvaW5nOiBPdXRnb2luZykgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRhd2FpdCBmZXRjaChgL2FwaS9vdXRnb2luZy8ke291dGdvaW5nLl9pZC50b1N0cmluZygpfWAsIHtcblx0XHRcdFx0bWV0aG9kOiAnREVMRVRFJyxcblx0XHRcdH0pXG5cblx0XHRcdGNvbnN0IGZpbHRlcmVkT3V0Z29pbmdzID0gYWxsT3V0Z29pbmdzLmZpbHRlcihpdGVtID0+IGl0ZW0uX2lkICE9PSBvdXRnb2luZy5faWQpXG5cblx0XHRcdHNldEFsbE91dGdvaW5ncyhmaWx0ZXJlZE91dGdvaW5ncylcblx0XHRcdHNldExvYWRpbmcodHJ1ZSlcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5sb2coZXJyb3IpXG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgaGFuZGxlU2VhcmNoID0gKHNlYXJjaFRlcm06IHN0cmluZykgPT4ge1xuXHRcdGNvbnN0IGZpbHRlcmVkT3V0Z29pbmdzID0gYWxsT3V0Z29pbmdzLmZpbHRlcihvdXRnb2luZyA9PiAob3V0Z29pbmcubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKSkgfHwgb3V0Z29pbmcuZGVzY3IudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpKSlcblxuXHRcdHNldEZpbHRlcmVkT3V0Z29pbmdzKGZpbHRlcmVkT3V0Z29pbmdzKVxuXHR9XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRmZXRjaE91dGdvaW5ocygpXG5cdH0sIFtsb2FkaW5nXSlcblxuXHRpZiAobG9hZGluZykge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9J2NvbnRhaW5lciBweS0yMCc+XG5cdFx0XHRcdDxwIGNsYXNzTmFtZT0nbXQtMTAgdGV4dC1ibGFjayB0ZXh0LWNlbnRlcic+V2N6eXR5d2FuaWUgZGFueWNoLi4uPC9wPlxuXHRcdFx0PC9zZWN0aW9uPlxuXHRcdClcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PHNlY3Rpb24gY2xhc3NOYW1lPSdjb250YWluZXIgcHktMjAnPlxuXHRcdFx0PFNlY3Rpb25UaXRsZSB0aXRsZT0nTW9qZSB3eWRhdGtpJyAvPlxuXHRcdFx0PFNlYXJjaElucHV0IG9uU2VhcmNoPXtoYW5kbGVTZWFyY2h9IC8+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gZmxleC13cmFwJz5cblx0XHRcdFx0e2ZpbHRlcmVkT3V0Z29pbmdzLmxlbmd0aCA+IDAgPyAoXG5cdFx0XHRcdFx0ZmlsdGVyZWRPdXRnb2luZ3MubWFwKG91dGdvaW5nID0+IChcblx0XHRcdFx0XHRcdDxPdXRnb2luZ0l0ZW1cblx0XHRcdFx0XHRcdFx0a2V5PXtvdXRnb2luZy5faWR9XG5cdFx0XHRcdFx0XHRcdG5hbWU9e291dGdvaW5nLm5hbWV9XG5cdFx0XHRcdFx0XHRcdGNhdGVnb3J5PXtvdXRnb2luZy5jYXRlZ29yeX1cblx0XHRcdFx0XHRcdFx0ZGF0ZT17b3V0Z29pbmcuZGF0ZX1cblx0XHRcdFx0XHRcdFx0cHJpY2U9e291dGdvaW5nLnByaWNlfVxuXHRcdFx0XHRcdFx0XHRhbW91bnQ9e291dGdvaW5nLmFtb3VudH1cblx0XHRcdFx0XHRcdFx0dG90YWxTdW09e291dGdvaW5nLnRvdGFsU3VtfVxuXHRcdFx0XHRcdFx0XHRkZXNjcmliZT17b3V0Z29pbmcuZGVzY3JpYmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRGVsZXRlPXsoKSA9PiBoYW5kbGVEZWxldGUob3V0Z29pbmcpfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQpKVxuXHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0nbXQtMTAgdGV4dC1ibGFjayB0ZXh0LWNlbnRlcic+QnJhayB3eWRhdGvDs3c8L3A+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L3NlY3Rpb24+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGFnZVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlU2Vzc2lvbiIsInVzZVJvdXRlciIsIlNlY3Rpb25UaXRsZSIsIlNlYXJjaElucHV0IiwiT3V0Z29pbmdJdGVtIiwicGFnZSIsImFsbE91dGdvaW5ncyIsInNldEFsbE91dGdvaW5ncyIsImZpbHRlcmVkT3V0Z29pbmdzIiwic2V0RmlsdGVyZWRPdXRnb2luZ3MiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJvdXRlciIsImRhdGEiLCJzZXNzaW9uIiwidXNlcklkIiwidXNlciIsImlkIiwiZmV0Y2hPdXRnb2luaHMiLCJyZXNwb25zZSIsImZldGNoIiwianNvbiIsImZpbHRlciIsIm91dGdvaW5nIiwiY3JlYXRvciIsIl9pZCIsInRvU3RyaW5nIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlRGVsZXRlIiwibWV0aG9kIiwiaXRlbSIsImhhbmRsZVNlYXJjaCIsInNlYXJjaFRlcm0iLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsImRlc2NyIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsInAiLCJ0aXRsZSIsIm9uU2VhcmNoIiwiZGl2IiwibGVuZ3RoIiwibWFwIiwiY2F0ZWdvcnkiLCJkYXRlIiwicHJpY2UiLCJhbW91bnQiLCJ0b3RhbFN1bSIsImRlc2NyaWJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/outgoings/page.tsx\n"));

/***/ })

});