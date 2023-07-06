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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-client)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_UI_SectionTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/UI/SectionTitle */ \"(app-client)/./components/UI/SectionTitle.tsx\");\n/* harmony import */ var _components_UI_SearchInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/UI/SearchInput */ \"(app-client)/./components/UI/SearchInput.tsx\");\n/* harmony import */ var _components_Items_OutgoingItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/Items/OutgoingItem */ \"(app-client)/./components/Items/OutgoingItem.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction page() {\n    var _ref;\n    _s();\n    const [allOutgoings, setAllOutgoings] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [filteredOutgoings, setFilteredOutgoings] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    var _id;\n    const userId = (_id = (_ref = session === null || session === void 0 ? void 0 : session.user) === null || _ref === void 0 ? void 0 : _ref.id) !== null && _id !== void 0 ? _id : \"\";\n    const fetchOutgoinhs = async ()=>{\n        try {\n            const response = await fetch(\"/api/outgoing\");\n            const data = await response.json();\n            const filteredOutgoings = data.filter((outgoing)=>outgoing.creator._id.toString() === userId.toString());\n            setAllOutgoings(filteredOutgoings);\n            setFilteredOutgoings(filteredOutgoings);\n        } catch (error) {\n            console.log(error);\n        } finally{\n            setLoading(false);\n        }\n    };\n    const handleDelete = async (outgoing)=>{\n        try {\n            await fetch(\"/api/outgoing/\".concat(outgoing._id.toString()), {\n                method: \"DELETE\"\n            });\n            const filteredOutgoings = allOutgoings.filter((item)=>item._id !== outgoing._id);\n            setAllOutgoings(filteredOutgoings);\n            setLoading(true);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const handleSearch = (searchTerm)=>{\n        const filteredPoints = allOutgoings.filter((point)=>point.name.toLowerCase().includes(searchTerm.toLowerCase()));\n        setFilteredPoints(filteredPoints);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchOutgoinhs();\n    }, [\n        loading\n    ]);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"container py-20\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-10 text-black text-center\",\n                children: \"Wczytywanie danych...\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/outgoings/page.tsx\",\n                lineNumber: 79,\n                columnNumber: 5\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/outgoings/page.tsx\",\n            lineNumber: 78,\n            columnNumber: 4\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"container py-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_SectionTitle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                title: \"Moje wydatki\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/outgoings/page.tsx\",\n                lineNumber: 86,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_SearchInput__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                onSearch: handleSearch\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/outgoings/page.tsx\",\n                lineNumber: 87,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row justify-between flex-wrap\",\n                children: filteredOutgoings.length > 0 ? filteredOutgoings.map((outgoing)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Items_OutgoingItem__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        name: outgoing.name,\n                        category: outgoing.category,\n                        date: outgoing.date,\n                        price: outgoing.price,\n                        amount: outgoing.amount,\n                        totalSum: outgoing.totalSum,\n                        describe: outgoing.describe,\n                        handleDelete: ()=>handleDelete(outgoing)\n                    }, outgoing._id, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/outgoings/page.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 7\n                    }, this)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"mt-10 text-black text-center\",\n                    children: \"Brak wydatk\\xf3w\"\n                }, void 0, false, {\n                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/outgoings/page.tsx\",\n                    lineNumber: 104,\n                    columnNumber: 6\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/outgoings/page.tsx\",\n                lineNumber: 88,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/outgoings/page.tsx\",\n        lineNumber: 85,\n        columnNumber: 3\n    }, this);\n}\n_s(page, \"2nelzu0Wv98TqXP+3hQfn7WQ3go=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbidcbmltcG9ydCBTZWN0aW9uVGl0bGUgZnJvbSAnQGNvbXBvbmVudHMvVUkvU2VjdGlvblRpdGxlJ1xuaW1wb3J0IFNlYXJjaElucHV0IGZyb20gJ0Bjb21wb25lbnRzL1VJL1NlYXJjaElucHV0J1xuaW1wb3J0IE91dGdvaW5nSXRlbSBmcm9tICdAY29tcG9uZW50cy9JdGVtcy9PdXRnb2luZ0l0ZW0nXG5cbmludGVyZmFjZSBPdXRnb2luZyB7XG5cdF9pZDogc3RyaW5nXG5cdGNyZWF0b3I6IHtcblx0XHRfaWQ6IHN0cmluZ1xuXHRcdGVtYWlsOiBzdHJpbmdcblx0XHR1c2VybmFtZTogc3RyaW5nXG5cdFx0aW1hZ2U6IHN0cmluZ1xuXHR9XG5cdG5hbWU6IHN0cmluZ1xuXHRjYXRlZ29yeTogbnVtYmVyXG5cdGRhdGU6IHN0cmluZ1xuXHRwcmljZTogbnVtYmVyXG5cdGFtb3VudDogbnVtYmVyXG5cdHRvdGFsU3VtOiBudW1iZXJcblx0ZGVzY3JpYmU6IHN0cmluZ1xufVxuXG5mdW5jdGlvbiBwYWdlKCkge1xuXHRjb25zdCBbYWxsT3V0Z29pbmdzLCBzZXRBbGxPdXRnb2luZ3NdID0gdXNlU3RhdGU8T3V0Z29pbmdbXT4oW10pXG5cdGNvbnN0IFtmaWx0ZXJlZE91dGdvaW5ncywgc2V0RmlsdGVyZWRPdXRnb2luZ3NdID0gdXNlU3RhdGU8T3V0Z29pbmdbXT4oW10pXG5cdGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cdGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpXG5cdGNvbnN0IHVzZXJJZCA9IChzZXNzaW9uPy51c2VyIGFzIHsgaWQ/OiBzdHJpbmcgfSk/LmlkID8/ICcnXG5cblx0Y29uc3QgZmV0Y2hPdXRnb2luaHMgPSBhc3luYyAoKSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvb3V0Z29pbmcnKVxuXHRcdFx0Y29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuXG5cdFx0XHRjb25zdCBmaWx0ZXJlZE91dGdvaW5ncyA9IGRhdGEuZmlsdGVyKFxuXHRcdFx0XHQob3V0Z29pbmc6IE91dGdvaW5nKSA9PiBvdXRnb2luZy5jcmVhdG9yLl9pZC50b1N0cmluZygpID09PSB1c2VySWQudG9TdHJpbmcoKVxuXHRcdFx0KVxuXG5cdFx0XHRzZXRBbGxPdXRnb2luZ3MoZmlsdGVyZWRPdXRnb2luZ3MpXG5cdFx0XHRzZXRGaWx0ZXJlZE91dGdvaW5ncyhmaWx0ZXJlZE91dGdvaW5ncylcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5sb2coZXJyb3IpXG5cdFx0fSBmaW5hbGx5IHtcblx0XHRcdHNldExvYWRpbmcoZmFsc2UpXG5cdFx0fVxuXHR9XG5cdGNvbnN0IGhhbmRsZURlbGV0ZSA9IGFzeW5jIChvdXRnb2luZzogT3V0Z29pbmcpID0+IHtcblx0XHR0cnkge1xuXHRcdFx0YXdhaXQgZmV0Y2goYC9hcGkvb3V0Z29pbmcvJHtvdXRnb2luZy5faWQudG9TdHJpbmcoKX1gLCB7XG5cdFx0XHRcdG1ldGhvZDogJ0RFTEVURScsXG5cdFx0XHR9KVxuXG5cdFx0XHRjb25zdCBmaWx0ZXJlZE91dGdvaW5ncyA9IGFsbE91dGdvaW5ncy5maWx0ZXIoaXRlbSA9PiBpdGVtLl9pZCAhPT0gb3V0Z29pbmcuX2lkKVxuXG5cdFx0XHRzZXRBbGxPdXRnb2luZ3MoZmlsdGVyZWRPdXRnb2luZ3MpXG5cdFx0XHRzZXRMb2FkaW5nKHRydWUpXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUubG9nKGVycm9yKVxuXHRcdH1cblx0fVxuXG5cdGNvbnN0IGhhbmRsZVNlYXJjaCA9IChzZWFyY2hUZXJtOiBzdHJpbmcpID0+IHtcblx0XHRjb25zdCBmaWx0ZXJlZFBvaW50cyA9IGFsbE91dGdvaW5ncy5maWx0ZXIocG9pbnQgPT4gcG9pbnQubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKSkpXG5cblx0XHRzZXRGaWx0ZXJlZFBvaW50cyhmaWx0ZXJlZFBvaW50cylcblx0fVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0ZmV0Y2hPdXRnb2luaHMoKVxuXHR9LCBbbG9hZGluZ10pXG5cblx0aWYgKGxvYWRpbmcpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPSdjb250YWluZXIgcHktMjAnPlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9J210LTEwIHRleHQtYmxhY2sgdGV4dC1jZW50ZXInPldjenl0eXdhbmllIGRhbnljaC4uLjwvcD5cblx0XHRcdDwvc2VjdGlvbj5cblx0XHQpXG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxzZWN0aW9uIGNsYXNzTmFtZT0nY29udGFpbmVyIHB5LTIwJz5cblx0XHRcdDxTZWN0aW9uVGl0bGUgdGl0bGU9J01vamUgd3lkYXRraScgLz5cblx0XHRcdDxTZWFyY2hJbnB1dCBvblNlYXJjaD17aGFuZGxlU2VhcmNofSAvPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGZsZXgtd3JhcCc+XG5cdFx0XHRcdHtmaWx0ZXJlZE91dGdvaW5ncy5sZW5ndGggPiAwID8gKFxuXHRcdFx0XHRcdGZpbHRlcmVkT3V0Z29pbmdzLm1hcChvdXRnb2luZyA9PiAoXG5cdFx0XHRcdFx0XHQ8T3V0Z29pbmdJdGVtXG5cdFx0XHRcdFx0XHRcdGtleT17b3V0Z29pbmcuX2lkfVxuXHRcdFx0XHRcdFx0XHRuYW1lPXtvdXRnb2luZy5uYW1lfVxuXHRcdFx0XHRcdFx0XHRjYXRlZ29yeT17b3V0Z29pbmcuY2F0ZWdvcnl9XG5cdFx0XHRcdFx0XHRcdGRhdGU9e291dGdvaW5nLmRhdGV9XG5cdFx0XHRcdFx0XHRcdHByaWNlPXtvdXRnb2luZy5wcmljZX1cblx0XHRcdFx0XHRcdFx0YW1vdW50PXtvdXRnb2luZy5hbW91bnR9XG5cdFx0XHRcdFx0XHRcdHRvdGFsU3VtPXtvdXRnb2luZy50b3RhbFN1bX1cblx0XHRcdFx0XHRcdFx0ZGVzY3JpYmU9e291dGdvaW5nLmRlc2NyaWJlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZURlbGV0ZT17KCkgPT4gaGFuZGxlRGVsZXRlKG91dGdvaW5nKX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0KSlcblx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J210LTEwIHRleHQtYmxhY2sgdGV4dC1jZW50ZXInPkJyYWsgd3lkYXRrw7N3PC9wPlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9zZWN0aW9uPlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IHBhZ2VcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVNlc3Npb24iLCJ1c2VSb3V0ZXIiLCJTZWN0aW9uVGl0bGUiLCJTZWFyY2hJbnB1dCIsIk91dGdvaW5nSXRlbSIsInBhZ2UiLCJhbGxPdXRnb2luZ3MiLCJzZXRBbGxPdXRnb2luZ3MiLCJmaWx0ZXJlZE91dGdvaW5ncyIsInNldEZpbHRlcmVkT3V0Z29pbmdzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJyb3V0ZXIiLCJkYXRhIiwic2Vzc2lvbiIsInVzZXJJZCIsInVzZXIiLCJpZCIsImZldGNoT3V0Z29pbmhzIiwicmVzcG9uc2UiLCJmZXRjaCIsImpzb24iLCJmaWx0ZXIiLCJvdXRnb2luZyIsImNyZWF0b3IiLCJfaWQiLCJ0b1N0cmluZyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImhhbmRsZURlbGV0ZSIsIm1ldGhvZCIsIml0ZW0iLCJoYW5kbGVTZWFyY2giLCJzZWFyY2hUZXJtIiwiZmlsdGVyZWRQb2ludHMiLCJwb2ludCIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwic2V0RmlsdGVyZWRQb2ludHMiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwicCIsInRpdGxlIiwib25TZWFyY2giLCJkaXYiLCJsZW5ndGgiLCJtYXAiLCJjYXRlZ29yeSIsImRhdGUiLCJwcmljZSIsImFtb3VudCIsInRvdGFsU3VtIiwiZGVzY3JpYmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/outgoings/page.tsx\n"));

/***/ })

});