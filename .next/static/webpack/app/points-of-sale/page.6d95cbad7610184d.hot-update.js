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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-client)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction PointsOfSale() {\n    var _ref;\n    _s();\n    const [allPoints, setAllPoints] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    var _id;\n    const userId = (_id = (_ref = session === null || session === void 0 ? void 0 : session.user) === null || _ref === void 0 ? void 0 : _ref.id) !== null && _id !== void 0 ? _id : \"\";\n    const fetchPosts = async ()=>{\n        const response = await fetch(\"/api/point-of-sale\");\n        const data = await response.json();\n        setAllPoints(data);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchPosts();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"container py-20\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: ()=>{\n                console.log(allPoints);\n            },\n            children: \"Kliknij mnie!\"\n        }, void 0, false, {\n            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/points-of-sale/page.tsx\",\n            lineNumber: 22,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/points-of-sale/page.tsx\",\n        lineNumber: 21,\n        columnNumber: 3\n    }, this);\n}\n_s(PointsOfSale, \"hQecclCQowPUYaI3o4A4il8LbkU=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = PointsOfSale;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PointsOfSale);\nvar _c;\n$RefreshReg$(_c, \"PointsOfSale\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3BvaW50cy1vZi1zYWxlL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRTJDO0FBQ0M7QUFFNUMsU0FBU0c7UUFHTzs7SUFGZixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR0wsK0NBQVFBLENBQUMsRUFBRTtJQUM3QyxNQUFNLEVBQUVNLE1BQU1DLE9BQU8sRUFBRSxHQUFHTCwyREFBVUE7UUFDckI7SUFBZixNQUFNTSxTQUFTLGVBQUNELG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBU0Usa0JBQVYsZ0NBQW9DQyxnQkFBcEMsdUJBQTBDO0lBQ3pELE1BQU1DLGFBQWE7UUFDbEIsTUFBTUMsV0FBVyxNQUFNQyxNQUFNO1FBQzdCLE1BQU1QLE9BQU8sTUFBTU0sU0FBU0U7UUFFNUJULGFBQWFDO0lBQ2Q7SUFFQUwsZ0RBQVNBLENBQUM7UUFDVFU7SUFDRCxHQUFHLEVBQUU7SUFDTCxxQkFDQyw4REFBQ0k7UUFBUUMsV0FBVTtrQkFDbEIsNEVBQUNDO1lBQ0FDLFNBQVM7Z0JBQ1JDLFFBQVFDLElBQUloQjtZQUNiO3NCQUFHOzs7Ozs7Ozs7OztBQUtQO0dBeEJTRDs7UUFFa0JELHVEQUFVQTs7O0tBRjVCQztBQTBCVCwrREFBZUEsWUFBWUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcG9pbnRzLW9mLXNhbGUvcGFnZS50c3g/ZjEwNSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCdcblxuZnVuY3Rpb24gUG9pbnRzT2ZTYWxlKCkge1xuXHRjb25zdCBbYWxsUG9pbnRzLCBzZXRBbGxQb2ludHNdID0gdXNlU3RhdGUoW10pXG5cdGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpXG5cdGNvbnN0IHVzZXJJZCA9IChzZXNzaW9uPy51c2VyIGFzIHsgaWQ/OiBzdHJpbmcgfSk/LmlkID8/ICcnXG5cdGNvbnN0IGZldGNoUG9zdHMgPSBhc3luYyAoKSA9PiB7XG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9wb2ludC1vZi1zYWxlJylcblx0XHRjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cblx0XHRzZXRBbGxQb2ludHMoZGF0YSlcblx0fVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0ZmV0Y2hQb3N0cygpXG5cdH0sIFtdKVxuXHRyZXR1cm4gKFxuXHRcdDxzZWN0aW9uIGNsYXNzTmFtZT0nY29udGFpbmVyIHB5LTIwJz5cblx0XHRcdDxidXR0b25cblx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGFsbFBvaW50cylcblx0XHRcdFx0fX0+XG5cdFx0XHRcdEtsaWtuaWogbW5pZSFcblx0XHRcdDwvYnV0dG9uPlxuXHRcdDwvc2VjdGlvbj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb2ludHNPZlNhbGVcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVNlc3Npb24iLCJQb2ludHNPZlNhbGUiLCJhbGxQb2ludHMiLCJzZXRBbGxQb2ludHMiLCJkYXRhIiwic2Vzc2lvbiIsInVzZXJJZCIsInVzZXIiLCJpZCIsImZldGNoUG9zdHMiLCJyZXNwb25zZSIsImZldGNoIiwianNvbiIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/points-of-sale/page.tsx\n"));

/***/ })

});