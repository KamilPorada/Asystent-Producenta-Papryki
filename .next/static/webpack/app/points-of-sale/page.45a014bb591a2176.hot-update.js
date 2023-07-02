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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-client)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_UI_SectionTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/UI/SectionTitle */ \"(app-client)/./components/UI/SectionTitle.tsx\");\n/* harmony import */ var _components_Items_PointOfSaleItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Items/PointOfSaleItem */ \"(app-client)/./components/Items/PointOfSaleItem.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction PointsOfSale() {\n    var _ref;\n    _s();\n    const [allPoints, setAllPoints] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    var _id;\n    const userId = (_id = (_ref = session === null || session === void 0 ? void 0 : session.user) === null || _ref === void 0 ? void 0 : _ref.id) !== null && _id !== void 0 ? _id : \"\";\n    const fetchPointsOfSale = async ()=>{\n        try {\n            const response = await fetch(\"/api/point-of-sale\");\n            const data = await response.json();\n            const filteredPoints = data.filter((point)=>point.creator._id.toString() === userId.toString());\n            setAllPoints(filteredPoints);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchPointsOfSale();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"container py-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_SectionTitle__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                title: \"Moje punkty sprzedaży\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/points-of-sale/page.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            allPoints.map((point)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Items_PointOfSaleItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    name: point.name,\n                    address: point.addres\n                }, point._id, false, {\n                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/points-of-sale/page.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/points-of-sale/page.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_s(PointsOfSale, \"hQecclCQowPUYaI3o4A4il8LbkU=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = PointsOfSale;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PointsOfSale);\nvar _c;\n$RefreshReg$(_c, \"PointsOfSale\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3BvaW50cy1vZi1zYWxlL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFMkM7QUFDQztBQUNVO0FBRVM7QUFpQi9ELFNBQVNLO1FBR1E7O0lBRmYsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdQLCtDQUFRQSxDQUFnQixFQUFFO0lBQzVELE1BQU0sRUFBRVEsTUFBTUMsT0FBTyxFQUFFLEdBQUdQLDJEQUFVQTtRQUNyQjtJQUFmLE1BQU1RLFNBQVMsZUFBQ0Qsb0JBQUFBLHFCQUFBQSxLQUFBQSxJQUFBQSxRQUFTRSxrQkFBVixnQ0FBb0NDLGdCQUFwQyx1QkFBMEM7SUFFekQsTUFBTUMsb0JBQW9CO1FBQ3hCLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQU07WUFDN0IsTUFBTVAsT0FBTyxNQUFNTSxTQUFTRTtZQUU1QixNQUFNQyxpQkFBaUJULEtBQUtVLE9BQU8sQ0FBQ0MsUUFBdUJBLE1BQU1DLFFBQVFDLElBQUlDLGVBQWVaLE9BQU9ZO1lBRW5HZixhQUFhVTtRQUNmLEVBQUUsT0FBT00sT0FBTztZQUNkQyxRQUFRQyxJQUFJRjtRQUNkO0lBQ0Y7SUFFQXRCLGdEQUFTQSxDQUFDO1FBQ1JZO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNhO1FBQVFDLFdBQVU7OzBCQUNqQiw4REFBQ3hCLG1FQUFZQTtnQkFBQ3lCLE9BQU07Ozs7OztZQUNuQnRCLFVBQVV1QixJQUFJLENBQUNWLHNCQUNkLDhEQUFDZix5RUFBZUE7b0JBQWlCMEIsTUFBTVgsTUFBTVc7b0JBQU1DLFNBQVNaLE1BQU1hO21CQUE1Q2IsTUFBTUU7Ozs7Ozs7Ozs7O0FBSXBDO0dBOUJTaEI7O1FBRW1CSCx1REFBVUE7OztLQUY3Qkc7QUFnQ1QsK0RBQWVBLFlBQVlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BvaW50cy1vZi1zYWxlL3BhZ2UudHN4P2YxMDUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnXG5pbXBvcnQgU2VjdGlvblRpdGxlIGZyb20gJ0Bjb21wb25lbnRzL1VJL1NlY3Rpb25UaXRsZSdcblxuaW1wb3J0IFBvaW50T2ZTYWxlSXRlbSBmcm9tICdAY29tcG9uZW50cy9JdGVtcy9Qb2ludE9mU2FsZUl0ZW0nXG5cbmludGVyZmFjZSBQb2ludE9mU2FsZSB7XG4gIF9pZDogc3RyaW5nXG4gIGFkZHJlc3M6IHN0cmluZ1xuICBjcmVhdG9yOiB7XG4gICAgX2lkOiBzdHJpbmdcbiAgICBlbWFpbDogc3RyaW5nXG4gICAgdXNlcm5hbWU6IHN0cmluZ1xuICAgIGltYWdlOiBzdHJpbmdcbiAgfVxuICBsYXRpdHVkZTogc3RyaW5nXG4gIGxvbmdpdHVkZTogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICB0eXBlOiBzdHJpbmdcbn1cblxuZnVuY3Rpb24gUG9pbnRzT2ZTYWxlKCkge1xuICBjb25zdCBbYWxsUG9pbnRzLCBzZXRBbGxQb2ludHNdID0gdXNlU3RhdGU8UG9pbnRPZlNhbGVbXT4oW10pXG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpXG4gIGNvbnN0IHVzZXJJZCA9IChzZXNzaW9uPy51c2VyIGFzIHsgaWQ/OiBzdHJpbmcgfSk/LmlkID8/ICcnXG5cbiAgY29uc3QgZmV0Y2hQb2ludHNPZlNhbGUgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvcG9pbnQtb2Ytc2FsZScpXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cbiAgICAgIGNvbnN0IGZpbHRlcmVkUG9pbnRzID0gZGF0YS5maWx0ZXIoKHBvaW50OiBQb2ludE9mU2FsZSkgPT4gcG9pbnQuY3JlYXRvci5faWQudG9TdHJpbmcoKSA9PT0gdXNlcklkLnRvU3RyaW5nKCkpXG5cbiAgICAgIHNldEFsbFBvaW50cyhmaWx0ZXJlZFBvaW50cylcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaFBvaW50c09mU2FsZSgpXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdjb250YWluZXIgcHktMjAnPlxuICAgICAgPFNlY3Rpb25UaXRsZSB0aXRsZT0nTW9qZSBwdW5rdHkgc3ByemVkYcW8eScgLz5cbiAgICAgIHthbGxQb2ludHMubWFwKChwb2ludCkgPT4gKFxuICAgICAgICA8UG9pbnRPZlNhbGVJdGVtIGtleT17cG9pbnQuX2lkfSBuYW1lPXtwb2ludC5uYW1lfSBhZGRyZXNzPXtwb2ludC5hZGRyZXN9IC8+XG4gICAgICApKX1cbiAgICA8L3NlY3Rpb24+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9pbnRzT2ZTYWxlXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VTZXNzaW9uIiwiU2VjdGlvblRpdGxlIiwiUG9pbnRPZlNhbGVJdGVtIiwiUG9pbnRzT2ZTYWxlIiwiYWxsUG9pbnRzIiwic2V0QWxsUG9pbnRzIiwiZGF0YSIsInNlc3Npb24iLCJ1c2VySWQiLCJ1c2VyIiwiaWQiLCJmZXRjaFBvaW50c09mU2FsZSIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIiwiZmlsdGVyZWRQb2ludHMiLCJmaWx0ZXIiLCJwb2ludCIsImNyZWF0b3IiLCJfaWQiLCJ0b1N0cmluZyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJ0aXRsZSIsIm1hcCIsIm5hbWUiLCJhZGRyZXNzIiwiYWRkcmVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/points-of-sale/page.tsx\n"));

/***/ })

});