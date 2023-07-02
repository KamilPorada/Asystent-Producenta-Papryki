"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/points-of-sale/page",{

/***/ "(app-client)/./app/points-of-sale/page.tsx":
/*!*************************************!*\
  !*** ./app/points-of-sale/page.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-client)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_UI_SectionTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/UI/SectionTitle */ \"(app-client)/./components/UI/SectionTitle.tsx\");\n/* harmony import */ var _components_Items_PointOfSaleItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Items/PointOfSaleItem */ \"(app-client)/./components/Items/PointOfSaleItem.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction PointsOfSale() {\n    var _ref;\n    _s();\n    const [allPoints, setAllPoints] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    var _id;\n    const userId = (_id = (_ref = session === null || session === void 0 ? void 0 : session.user) === null || _ref === void 0 ? void 0 : _ref.id) !== null && _id !== void 0 ? _id : \"\";\n    const handleDelete = async (point)=>{\n        if (confirmed) {\n            try {\n                await fetch(\"/api/point-of-sale/\".concat(point._id.toString()), {\n                    method: \"DELETE\"\n                });\n                const filteredPoints = allPoints.filter((item)=>item._id !== point._id);\n                setAllPoints(filteredPoints);\n            } catch (error) {\n                console.log(error);\n            }\n        }\n    };\n    const fetchPointsOfSale = async ()=>{\n        try {\n            const response = await fetch(\"/api/point-of-sale\");\n            const data = await response.json();\n            const filteredPoints = data.filter((point)=>point.creator._id.toString() === userId.toString());\n            setAllPoints(filteredPoints);\n        } catch (error) {\n            console.log(error);\n        } finally{\n            setLoading(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchPointsOfSale();\n    }, []);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"container py-20\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-10 text-black text-center\",\n                children: \"Wczytywanie danych...\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/points-of-sale/page.tsx\",\n                lineNumber: 69,\n                columnNumber: 5\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/points-of-sale/page.tsx\",\n            lineNumber: 68,\n            columnNumber: 4\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"container py-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_SectionTitle__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                title: \"Moje punkty sprzedaży\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/points-of-sale/page.tsx\",\n                lineNumber: 76,\n                columnNumber: 4\n            }, this),\n            allPoints.length > 0 ? allPoints.map((point)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Items_PointOfSaleItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    name: point.name,\n                    address: point.address,\n                    type: point.type,\n                    latitude: point.latitude,\n                    longitude: point.longitude,\n                    handleDelete: ()=>handleDelete(point)\n                }, point._id, false, {\n                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/points-of-sale/page.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 6\n                }, this)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-10 text-black text-center\",\n                children: \"Brak punkt\\xf3w sprzedaży\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/points-of-sale/page.tsx\",\n                lineNumber: 90,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/points-of-sale/page.tsx\",\n        lineNumber: 75,\n        columnNumber: 3\n    }, this);\n}\n_s(PointsOfSale, \"arCP5M6WtLp8ObxR/w0NUOzBIAQ=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = PointsOfSale;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PointsOfSale);\nvar _c;\n$RefreshReg$(_c, \"PointsOfSale\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3BvaW50cy1vZi1zYWxlL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDMkM7QUFDQztBQUNVO0FBRVM7QUFpQi9ELFNBQVNLO1FBSU87O0lBSGYsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdQLCtDQUFRQSxDQUFnQixFQUFFO0lBQzVELE1BQU0sQ0FBQ1EsU0FBU0MsV0FBVyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLEVBQUVVLE1BQU1DLE9BQU8sRUFBRSxHQUFHVCwyREFBVUE7UUFDckI7SUFBZixNQUFNVSxTQUFTLGVBQUNELG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBU0Usa0JBQVYsZ0NBQW9DQyxnQkFBcEMsdUJBQTBDO0lBRXpELE1BQU1DLGVBQWUsT0FBT0M7UUFHM0IsSUFBSUMsV0FBVztZQUNkLElBQUk7Z0JBQ0gsTUFBTUMsTUFBTSxzQkFBMkMsT0FBckJGLE1BQU1HLElBQUlDLGFBQWM7b0JBQ3pEQyxRQUFRO2dCQUNUO2dCQUVBLE1BQU1DLGlCQUFpQmhCLFVBQVVpQixPQUFPQyxDQUFBQSxPQUFRQSxLQUFLTCxRQUFRSCxNQUFNRztnQkFFbkVaLGFBQWFlO1lBQ2QsRUFBRSxPQUFPRyxPQUFPO2dCQUNmQyxRQUFRQyxJQUFJRjtZQUNiO1FBQ0Q7SUFDRDtJQUVBLE1BQU1HLG9CQUFvQjtRQUN6QixJQUFJO1lBQ0gsTUFBTUMsV0FBVyxNQUFNWCxNQUFNO1lBQzdCLE1BQU1SLE9BQU8sTUFBTW1CLFNBQVNDO1lBRTVCLE1BQU1SLGlCQUFpQlosS0FBS2EsT0FBTyxDQUFDUCxRQUF1QkEsTUFBTWUsUUFBUVosSUFBSUMsZUFBZVIsT0FBT1E7WUFFbkdiLGFBQWFlO1FBQ2QsRUFBRSxPQUFPRyxPQUFPO1lBQ2ZDLFFBQVFDLElBQUlGO1FBQ2IsU0FBVTtZQUNUaEIsV0FBVztRQUNaO0lBQ0Q7SUFFQVIsZ0RBQVNBLENBQUM7UUFDVDJCO0lBQ0QsR0FBRyxFQUFFO0lBRUwsSUFBSXBCLFNBQVM7UUFDWixxQkFDQyw4REFBQ3dCO1lBQVFDLFdBQVU7c0JBQ2xCLDRFQUFDQztnQkFBRUQsV0FBVTswQkFBK0I7Ozs7Ozs7Ozs7O0lBRy9DO0lBRUEscUJBQ0MsOERBQUNEO1FBQVFDLFdBQVU7OzBCQUNsQiw4REFBQzlCLG1FQUFZQTtnQkFBQ2dDLE9BQU07Ozs7OztZQUNuQjdCLFVBQVU4QixTQUFTLElBQ25COUIsVUFBVStCLElBQUlyQixDQUFBQSxzQkFDYiw4REFBQ1oseUVBQWVBO29CQUVma0MsTUFBTXRCLE1BQU1zQjtvQkFDWkMsU0FBU3ZCLE1BQU11QjtvQkFDZkMsTUFBTXhCLE1BQU13QjtvQkFDWkMsVUFBVXpCLE1BQU15QjtvQkFDaEJDLFdBQVcxQixNQUFNMEI7b0JBQ2pCM0IsY0FBYyxJQUFNQSxhQUFhQzttQkFONUJBLE1BQU1HOzs7OzBDQVViLDhEQUFDZTtnQkFBRUQsV0FBVTswQkFBK0I7Ozs7Ozs7Ozs7OztBQUloRDtHQXZFUzVCOztRQUdrQkgsdURBQVVBOzs7S0FINUJHO0FBeUVULCtEQUFlQSxZQUFZQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wb2ludHMtb2Ytc2FsZS9wYWdlLnRzeD9mMTA1Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCdcbmltcG9ydCBTZWN0aW9uVGl0bGUgZnJvbSAnQGNvbXBvbmVudHMvVUkvU2VjdGlvblRpdGxlJ1xuXG5pbXBvcnQgUG9pbnRPZlNhbGVJdGVtIGZyb20gJ0Bjb21wb25lbnRzL0l0ZW1zL1BvaW50T2ZTYWxlSXRlbSdcblxuaW50ZXJmYWNlIFBvaW50T2ZTYWxlIHtcblx0X2lkOiBzdHJpbmdcblx0YWRkcmVzczogc3RyaW5nXG5cdGNyZWF0b3I6IHtcblx0XHRfaWQ6IHN0cmluZ1xuXHRcdGVtYWlsOiBzdHJpbmdcblx0XHR1c2VybmFtZTogc3RyaW5nXG5cdFx0aW1hZ2U6IHN0cmluZ1xuXHR9XG5cdGxhdGl0dWRlOiBzdHJpbmdcblx0bG9uZ2l0dWRlOiBzdHJpbmdcblx0bmFtZTogc3RyaW5nXG5cdHR5cGU6IHN0cmluZ1xufVxuXG5mdW5jdGlvbiBQb2ludHNPZlNhbGUoKSB7XG5cdGNvbnN0IFthbGxQb2ludHMsIHNldEFsbFBvaW50c10gPSB1c2VTdGF0ZTxQb2ludE9mU2FsZVtdPihbXSlcblx0Y29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcblx0Y29uc3QgeyBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKClcblx0Y29uc3QgdXNlcklkID0gKHNlc3Npb24/LnVzZXIgYXMgeyBpZD86IHN0cmluZyB9KT8uaWQgPz8gJydcblxuXHRjb25zdCBoYW5kbGVEZWxldGUgPSBhc3luYyAocG9pbnQ6IFBvaW50T2ZTYWxlKSA9PiB7XG5cblxuXHRcdGlmIChjb25maXJtZWQpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGF3YWl0IGZldGNoKGAvYXBpL3BvaW50LW9mLXNhbGUvJHtwb2ludC5faWQudG9TdHJpbmcoKX1gLCB7XG5cdFx0XHRcdFx0bWV0aG9kOiAnREVMRVRFJyxcblx0XHRcdFx0fSlcblxuXHRcdFx0XHRjb25zdCBmaWx0ZXJlZFBvaW50cyA9IGFsbFBvaW50cy5maWx0ZXIoaXRlbSA9PiBpdGVtLl9pZCAhPT0gcG9pbnQuX2lkKVxuXG5cdFx0XHRcdHNldEFsbFBvaW50cyhmaWx0ZXJlZFBvaW50cylcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGNvbnN0IGZldGNoUG9pbnRzT2ZTYWxlID0gYXN5bmMgKCkgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL3BvaW50LW9mLXNhbGUnKVxuXHRcdFx0Y29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuXG5cdFx0XHRjb25zdCBmaWx0ZXJlZFBvaW50cyA9IGRhdGEuZmlsdGVyKChwb2ludDogUG9pbnRPZlNhbGUpID0+IHBvaW50LmNyZWF0b3IuX2lkLnRvU3RyaW5nKCkgPT09IHVzZXJJZC50b1N0cmluZygpKVxuXG5cdFx0XHRzZXRBbGxQb2ludHMoZmlsdGVyZWRQb2ludHMpXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUubG9nKGVycm9yKVxuXHRcdH0gZmluYWxseSB7XG5cdFx0XHRzZXRMb2FkaW5nKGZhbHNlKVxuXHRcdH1cblx0fVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0ZmV0Y2hQb2ludHNPZlNhbGUoKVxuXHR9LCBbXSlcblxuXHRpZiAobG9hZGluZykge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9J2NvbnRhaW5lciBweS0yMCc+XG5cdFx0XHRcdDxwIGNsYXNzTmFtZT0nbXQtMTAgdGV4dC1ibGFjayB0ZXh0LWNlbnRlcic+V2N6eXR5d2FuaWUgZGFueWNoLi4uPC9wPlxuXHRcdFx0PC9zZWN0aW9uPlxuXHRcdClcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PHNlY3Rpb24gY2xhc3NOYW1lPSdjb250YWluZXIgcHktMjAnPlxuXHRcdFx0PFNlY3Rpb25UaXRsZSB0aXRsZT0nTW9qZSBwdW5rdHkgc3ByemVkYcW8eScgLz5cblx0XHRcdHthbGxQb2ludHMubGVuZ3RoID4gMCA/IChcblx0XHRcdFx0YWxsUG9pbnRzLm1hcChwb2ludCA9PiAoXG5cdFx0XHRcdFx0PFBvaW50T2ZTYWxlSXRlbVxuXHRcdFx0XHRcdFx0a2V5PXtwb2ludC5faWR9XG5cdFx0XHRcdFx0XHRuYW1lPXtwb2ludC5uYW1lfVxuXHRcdFx0XHRcdFx0YWRkcmVzcz17cG9pbnQuYWRkcmVzc31cblx0XHRcdFx0XHRcdHR5cGU9e3BvaW50LnR5cGV9XG5cdFx0XHRcdFx0XHRsYXRpdHVkZT17cG9pbnQubGF0aXR1ZGV9XG5cdFx0XHRcdFx0XHRsb25naXR1ZGU9e3BvaW50LmxvbmdpdHVkZX1cblx0XHRcdFx0XHRcdGhhbmRsZURlbGV0ZT17KCkgPT4gaGFuZGxlRGVsZXRlKHBvaW50KX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpKVxuXHRcdFx0KSA6IChcblx0XHRcdFx0PHAgY2xhc3NOYW1lPSdtdC0xMCB0ZXh0LWJsYWNrIHRleHQtY2VudGVyJz5CcmFrIHB1bmt0w7N3IHNwcnplZGHFvHk8L3A+XG5cdFx0XHQpfVxuXHRcdDwvc2VjdGlvbj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb2ludHNPZlNhbGVcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVNlc3Npb24iLCJTZWN0aW9uVGl0bGUiLCJQb2ludE9mU2FsZUl0ZW0iLCJQb2ludHNPZlNhbGUiLCJhbGxQb2ludHMiLCJzZXRBbGxQb2ludHMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImRhdGEiLCJzZXNzaW9uIiwidXNlcklkIiwidXNlciIsImlkIiwiaGFuZGxlRGVsZXRlIiwicG9pbnQiLCJjb25maXJtZWQiLCJmZXRjaCIsIl9pZCIsInRvU3RyaW5nIiwibWV0aG9kIiwiZmlsdGVyZWRQb2ludHMiLCJmaWx0ZXIiLCJpdGVtIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2hQb2ludHNPZlNhbGUiLCJyZXNwb25zZSIsImpzb24iLCJjcmVhdG9yIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsInAiLCJ0aXRsZSIsImxlbmd0aCIsIm1hcCIsIm5hbWUiLCJhZGRyZXNzIiwidHlwZSIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/points-of-sale/page.tsx\n"));

/***/ })

});