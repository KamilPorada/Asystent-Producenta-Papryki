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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-client)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_UI_SectionTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/UI/SectionTitle */ \"(app-client)/./components/UI/SectionTitle.tsx\");\n/* harmony import */ var _components_UI_SearchInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/UI/SearchInput */ \"(app-client)/./components/UI/SearchInput.tsx\");\n/* harmony import */ var _components_Items_OutgoingItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/Items/OutgoingItem */ \"(app-client)/./components/Items/OutgoingItem.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction page() {\n    var _ref;\n    _s();\n    const [allOutgoings, setAllOutgoings] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [filteredOutgoings, setFilteredOutgoings] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    var _id;\n    const userId = (_id = (_ref = session === null || session === void 0 ? void 0 : session.user) === null || _ref === void 0 ? void 0 : _ref.id) !== null && _id !== void 0 ? _id : \"\";\n    const fetchOutgoinhs = async ()=>{\n        try {\n            const response = await fetch(\"/api/outgoings\");\n            const data = await response.json();\n            const filteredOutgoings = data.filter((outgoing)=>outgoing.creator._id.toString() === userId.toString());\n            setAllOutgoings(filteredOutgoings);\n            setFilteredOutgoings(filteredOutgoings);\n        } catch (error) {\n            console.log(error);\n        } finally{\n            setLoading(false);\n        }\n    };\n    const handleSearch = ()=>{};\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchOutgoinhs();\n    }, [\n        loading\n    ]);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"container py-20\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-10 text-black text-center\",\n                children: \"Wczytywanie danych...\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/outgoings/page.tsx\",\n                lineNumber: 63,\n                columnNumber: 5\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/outgoings/page.tsx\",\n            lineNumber: 62,\n            columnNumber: 4\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"container py-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_SectionTitle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                title: \"Moje wydatki\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/outgoings/page.tsx\",\n                lineNumber: 70,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_SearchInput__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                onSearch: handleSearch\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/outgoings/page.tsx\",\n                lineNumber: 71,\n                columnNumber: 4\n            }, this),\n            filteredOutgoings.length > 0 ? filteredOutgoings.map((outgoing)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Items_OutgoingItem__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    name: outgoing.name,\n                    category: outgoing.category\n                }, outgoing._id, false, {\n                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/outgoings/page.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 6\n                }, this)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-10 text-black text-center\",\n                children: \"Brak punkt\\xf3w sprzedaży\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/outgoings/page.tsx\",\n                lineNumber: 82,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/outgoings/page.tsx\",\n        lineNumber: 69,\n        columnNumber: 3\n    }, this);\n}\n_s(page, \"2nelzu0Wv98TqXP+3hQfn7WQ3go=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL291dGdvaW5ncy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQzJDO0FBQ0M7QUFDRDtBQUNXO0FBQ0Y7QUFDSztBQW1CekQsU0FBU087UUFNTzs7SUFMZixNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHVCwrQ0FBUUEsQ0FBYSxFQUFFO0lBQy9ELE1BQU0sQ0FBQ1UsbUJBQW1CQyxxQkFBcUIsR0FBR1gsK0NBQVFBLENBQWEsRUFBRTtJQUN6RSxNQUFNLENBQUNZLFNBQVNDLFdBQVcsR0FBR2IsK0NBQVFBLENBQUM7SUFDdkMsTUFBTWMsU0FBU1gsMERBQVNBO0lBQ3hCLE1BQU0sRUFBRVksTUFBTUMsT0FBTyxFQUFFLEdBQUdkLDJEQUFVQTtRQUNyQjtJQUFmLE1BQU1lLFNBQVMsZUFBQ0Qsb0JBQUFBLHFCQUFBQSxLQUFBQSxJQUFBQSxRQUFTRSxrQkFBVixnQ0FBb0NDLGdCQUFwQyx1QkFBMEM7SUFFekQsTUFBTUMsaUJBQWlCO1FBQ3RCLElBQUk7WUFDSCxNQUFNQyxXQUFXLE1BQU1DLE1BQU07WUFDN0IsTUFBTVAsT0FBTyxNQUFNTSxTQUFTRTtZQUU1QixNQUFNYixvQkFBb0JLLEtBQUtTLE9BQzlCLENBQUNDLFdBQXVCQSxTQUFTQyxRQUFRQyxJQUFJQyxlQUFlWCxPQUFPVztZQUdwRW5CLGdCQUFnQkM7WUFDaEJDLHFCQUFxQkQ7UUFDdEIsRUFBRSxPQUFPbUIsT0FBTztZQUNmQyxRQUFRQyxJQUFJRjtRQUNiLFNBQVU7WUFDVGhCLFdBQVc7UUFDWjtJQUNEO0lBRUcsTUFBTW1CLGVBQWUsS0FFckI7SUFFQS9CLGdEQUFTQSxDQUFDO1FBQ1ptQjtJQUNELEdBQUc7UUFBQ1I7S0FBUTtJQUVaLElBQUlBLFNBQVM7UUFDWixxQkFDQyw4REFBQ3FCO1lBQVFDLFdBQVU7c0JBQ2xCLDRFQUFDQztnQkFBRUQsV0FBVTswQkFBK0I7Ozs7Ozs7Ozs7O0lBRy9DO0lBRUEscUJBQ0MsOERBQUNEO1FBQVFDLFdBQVU7OzBCQUNsQiw4REFBQzlCLG1FQUFZQTtnQkFBQ2dDLE9BQU07Ozs7OzswQkFDcEIsOERBQUMvQixrRUFBV0E7Z0JBQUNnQyxVQUFVTDs7Ozs7O1lBQ3RCdEIsa0JBQWtCNEIsU0FBUyxJQUMzQjVCLGtCQUFrQjZCLElBQUlkLENBQUFBLHlCQUNyQiw4REFBQ25CLHNFQUFZQTtvQkFFTWtDLE1BQU1mLFNBQVNlO29CQUNmQyxVQUFVaEIsU0FBU2dCO21CQUZoQ2hCLFNBQVNFOzs7OzBDQU9oQiw4REFBQ1E7Z0JBQUVELFdBQVU7MEJBQStCOzs7Ozs7Ozs7Ozs7QUFJaEQ7R0E1RFMzQjs7UUFJT0osc0RBQVNBO1FBQ0VELHVEQUFVQTs7O0FBeURyQywrREFBZUssSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvb3V0Z29pbmdzL3BhZ2UudHN4P2JiZDQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xuaW1wb3J0IFNlY3Rpb25UaXRsZSBmcm9tICdAY29tcG9uZW50cy9VSS9TZWN0aW9uVGl0bGUnXG5pbXBvcnQgU2VhcmNoSW5wdXQgZnJvbSAnQGNvbXBvbmVudHMvVUkvU2VhcmNoSW5wdXQnXG5pbXBvcnQgT3V0Z29pbmdJdGVtIGZyb20gJ0Bjb21wb25lbnRzL0l0ZW1zL091dGdvaW5nSXRlbSdcblxuaW50ZXJmYWNlIE91dGdvaW5nIHtcblx0X2lkOiBzdHJpbmdcblx0Y3JlYXRvcjoge1xuXHRcdF9pZDogc3RyaW5nXG5cdFx0ZW1haWw6IHN0cmluZ1xuXHRcdHVzZXJuYW1lOiBzdHJpbmdcblx0XHRpbWFnZTogc3RyaW5nXG5cdH1cblx0bmFtZTogc3RyaW5nXG5cdGNhdGVnb3J5OiBzdHJpbmdcblx0ZGF0ZTogc3RyaW5nXG5cdHByaWNlOiBudW1iZXJcblx0YW1vdW50OiBudW1iZXJcblx0dG90YWxTdW06IG51bWJlclxuXHRkZXNjcmliZTogc3RyaW5nXG59XG5cbmZ1bmN0aW9uIHBhZ2UoKSB7XG5cdGNvbnN0IFthbGxPdXRnb2luZ3MsIHNldEFsbE91dGdvaW5nc10gPSB1c2VTdGF0ZTxPdXRnb2luZ1tdPihbXSlcblx0Y29uc3QgW2ZpbHRlcmVkT3V0Z29pbmdzLCBzZXRGaWx0ZXJlZE91dGdvaW5nc10gPSB1c2VTdGF0ZTxPdXRnb2luZ1tdPihbXSlcblx0Y29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblx0Y29uc3QgeyBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKClcblx0Y29uc3QgdXNlcklkID0gKHNlc3Npb24/LnVzZXIgYXMgeyBpZD86IHN0cmluZyB9KT8uaWQgPz8gJydcblxuXHRjb25zdCBmZXRjaE91dGdvaW5ocyA9IGFzeW5jICgpID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9vdXRnb2luZ3MnKVxuXHRcdFx0Y29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuXG5cdFx0XHRjb25zdCBmaWx0ZXJlZE91dGdvaW5ncyA9IGRhdGEuZmlsdGVyKFxuXHRcdFx0XHQob3V0Z29pbmc6IE91dGdvaW5nKSA9PiBvdXRnb2luZy5jcmVhdG9yLl9pZC50b1N0cmluZygpID09PSB1c2VySWQudG9TdHJpbmcoKVxuXHRcdFx0KVxuXG5cdFx0XHRzZXRBbGxPdXRnb2luZ3MoZmlsdGVyZWRPdXRnb2luZ3MpXG5cdFx0XHRzZXRGaWx0ZXJlZE91dGdvaW5ncyhmaWx0ZXJlZE91dGdvaW5ncylcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5sb2coZXJyb3IpXG5cdFx0fSBmaW5hbGx5IHtcblx0XHRcdHNldExvYWRpbmcoZmFsc2UpXG5cdFx0fVxuXHR9XG5cbiAgICBjb25zdCBoYW5kbGVTZWFyY2ggPSAoKSA9PntcblxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0ZmV0Y2hPdXRnb2luaHMoKVxuXHR9LCBbbG9hZGluZ10pXG5cblx0aWYgKGxvYWRpbmcpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPSdjb250YWluZXIgcHktMjAnPlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9J210LTEwIHRleHQtYmxhY2sgdGV4dC1jZW50ZXInPldjenl0eXdhbmllIGRhbnljaC4uLjwvcD5cblx0XHRcdDwvc2VjdGlvbj5cblx0XHQpXG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxzZWN0aW9uIGNsYXNzTmFtZT0nY29udGFpbmVyIHB5LTIwJz5cblx0XHRcdDxTZWN0aW9uVGl0bGUgdGl0bGU9J01vamUgd3lkYXRraScgLz5cblx0XHRcdDxTZWFyY2hJbnB1dCBvblNlYXJjaD17aGFuZGxlU2VhcmNofSAvPlxuXHRcdFx0e2ZpbHRlcmVkT3V0Z29pbmdzLmxlbmd0aCA+IDAgPyAoXG5cdFx0XHRcdGZpbHRlcmVkT3V0Z29pbmdzLm1hcChvdXRnb2luZyA9PiAoXG5cdFx0XHRcdFx0PE91dGdvaW5nSXRlbVxuXHRcdFx0XHRcdFx0a2V5PXtvdXRnb2luZy5faWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtvdXRnb2luZy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk9e291dGdvaW5nLmNhdGVnb3J5fVxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KSlcblx0XHRcdCkgOiAoXG5cdFx0XHRcdDxwIGNsYXNzTmFtZT0nbXQtMTAgdGV4dC1ibGFjayB0ZXh0LWNlbnRlcic+QnJhayBwdW5rdMOzdyBzcHJ6ZWRhxbx5PC9wPlxuXHRcdFx0KX1cblx0XHQ8L3NlY3Rpb24+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGFnZVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlU2Vzc2lvbiIsInVzZVJvdXRlciIsIlNlY3Rpb25UaXRsZSIsIlNlYXJjaElucHV0IiwiT3V0Z29pbmdJdGVtIiwicGFnZSIsImFsbE91dGdvaW5ncyIsInNldEFsbE91dGdvaW5ncyIsImZpbHRlcmVkT3V0Z29pbmdzIiwic2V0RmlsdGVyZWRPdXRnb2luZ3MiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJvdXRlciIsImRhdGEiLCJzZXNzaW9uIiwidXNlcklkIiwidXNlciIsImlkIiwiZmV0Y2hPdXRnb2luaHMiLCJyZXNwb25zZSIsImZldGNoIiwianNvbiIsImZpbHRlciIsIm91dGdvaW5nIiwiY3JlYXRvciIsIl9pZCIsInRvU3RyaW5nIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU2VhcmNoIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsInAiLCJ0aXRsZSIsIm9uU2VhcmNoIiwibGVuZ3RoIiwibWFwIiwibmFtZSIsImNhdGVnb3J5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/outgoings/page.tsx\n"));

/***/ })

});