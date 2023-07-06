"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/edit-outgoing/page",{

/***/ "(app-client)/./app/edit-outgoing/page.tsx":
/*!************************************!*\
  !*** ./app/edit-outgoing/page.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Forms_OutgoingForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Forms/OutgoingForm */ \"(app-client)/./components/Forms/OutgoingForm.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction EditOutgoing() {\n    _s();\n    const [outgoing, setOutgoing] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        category: 0,\n        price: 0,\n        amount: 0,\n        describe: \"\"\n    });\n    const [submitting, setIsSubmitting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams)();\n    const outgoingId = searchParams.get(\"id\");\n    const editPointOfSale = async (e)=>{\n        e.preventDefault();\n        setIsSubmitting(true);\n        if (!outgoing.name || outgoing.price === 0 || outgoing.amount === 0 || !outgoing.describe) {\n            setError(\"Wypełnij wszystkie pola formularza!\");\n            setIsSubmitting(false);\n            return;\n        }\n        try {\n            const totalSum = (outgoing.amount * outgoing.price).toFixed(2);\n            const response = await fetch(\"/api/outgoing/\".concat(outgoingId), {\n                method: \"PATCH\",\n                body: JSON.stringify({\n                    name: outgoing.name,\n                    category: outgoing.category,\n                    price: outgoing.price,\n                    amount: outgoing.amount,\n                    totalSum: parseFloat(totalSum),\n                    describe: outgoing.describe\n                })\n            });\n            console.log(outgoing.name, outgoing.category, outgoing.price, outgoing.amount);\n            if (response.ok) {\n                router.push(\"/outgoings\");\n            }\n        } catch (error) {\n            console.log(error);\n        } finally{\n            setIsSubmitting(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getOutgoingDetails = async ()=>{\n            const response = await fetch(\"/api/outgoing/\".concat(outgoingId));\n            const data = await response.json();\n            setOutgoing({\n                name: data.name,\n                category: data.category,\n                price: data.price,\n                amount: data.amount,\n                describe: data.describe\n            });\n        };\n        if (outgoingId) getOutgoingDetails();\n    }, [\n        outgoingId\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"container py-20\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Forms_OutgoingForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            type: \"EDIT\",\n            outgoing: outgoing,\n            setOutgoing: setOutgoing,\n            submitting: submitting,\n            handleSubmit: editPointOfSale,\n            error: error\n        }, void 0, false, {\n            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/edit-outgoing/page.tsx\",\n            lineNumber: 74,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/edit-outgoing/page.tsx\",\n        lineNumber: 73,\n        columnNumber: 3\n    }, this);\n}\n_s(EditOutgoing, \"oSLHZTU48zl7Qc9o2aBiYo+Zd6k=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams\n    ];\n});\n_c = EditOutgoing;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditOutgoing);\nvar _c;\n$RefreshReg$(_c, \"EditOutgoing\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2VkaXQtb3V0Z29pbmcvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ3NEO0FBQ007QUFDQztBQUU3RCxTQUFTSzs7SUFDUixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1AsK0NBQVFBLENBQUM7UUFDeENRLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxPQUFPO1FBQ1BDLFFBQVE7UUFDUkMsVUFBVTtJQUNYO0lBQ0EsTUFBTSxDQUFDQyxZQUFZQyxnQkFBZ0IsR0FBR2QsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDZSxPQUFPQyxTQUFTLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNaUIsU0FBU2YsMERBQVNBO0lBQ3hCLE1BQU1nQixlQUFlZixnRUFBZUE7SUFDcEMsTUFBTWdCLGFBQWFELGFBQWFFLElBQUk7SUFFcEMsTUFBTUMsa0JBQWtCLE9BQU9DO1FBQzlCQSxFQUFFQztRQUNGVCxnQkFBZ0I7UUFFaEIsSUFBSSxDQUFDUixTQUFTRSxRQUFRRixTQUFTSSxVQUFVLEtBQUtKLFNBQVNLLFdBQVcsS0FBSyxDQUFDTCxTQUFTTSxVQUFVO1lBQzFGSSxTQUFTO1lBQ1RGLGdCQUFnQjtZQUNoQjtRQUNEO1FBRUEsSUFBSTtZQUNILE1BQU1VLFdBQVcsQ0FBQ2xCLFNBQVNLLFNBQVNMLFNBQVNJLEtBQUksRUFBR2UsUUFBUTtZQUM1RCxNQUFNQyxXQUFXLE1BQU1DLE1BQU0saUJBQTRCLE9BQVhSLGFBQWM7Z0JBQzNEUyxRQUFRO2dCQUNSQyxNQUFNQyxLQUFLQyxVQUFVO29CQUNwQnZCLE1BQU1GLFNBQVNFO29CQUNmQyxVQUFVSCxTQUFTRztvQkFDbkJDLE9BQU9KLFNBQVNJO29CQUNoQkMsUUFBUUwsU0FBU0s7b0JBQ2pCYSxVQUFVUSxXQUFXUjtvQkFDckJaLFVBQVVOLFNBQVNNO2dCQUNwQjtZQUNEO1lBQ0FxQixRQUFRQyxJQUFJNUIsU0FBU0UsTUFBTUYsU0FBU0csVUFBVUgsU0FBU0ksT0FBT0osU0FBU0s7WUFFdkUsSUFBSWUsU0FBU1MsSUFBSTtnQkFDaEJsQixPQUFPbUIsS0FBSztZQUNiO1FBQ0QsRUFBRSxPQUFPckIsT0FBTztZQUNma0IsUUFBUUMsSUFBSW5CO1FBQ2IsU0FBVTtZQUNURCxnQkFBZ0I7UUFDakI7SUFDRDtJQUVBYixnREFBU0EsQ0FBQztRQUNULE1BQU1vQyxxQkFBcUI7WUFDMUIsTUFBTVgsV0FBVyxNQUFNQyxNQUFNLGlCQUE0QixPQUFYUjtZQUM5QyxNQUFNbUIsT0FBTyxNQUFNWixTQUFTYTtZQUU1QmhDLFlBQVk7Z0JBQ1hDLE1BQU04QixLQUFLOUI7Z0JBQ1hDLFVBQVU2QixLQUFLN0I7Z0JBQ2ZDLE9BQU80QixLQUFLNUI7Z0JBQ1pDLFFBQVEyQixLQUFLM0I7Z0JBQ2JDLFVBQVUwQixLQUFLMUI7WUFDaEI7UUFDRDtRQUVBLElBQUlPLFlBQVlrQjtJQUNqQixHQUFHO1FBQUNsQjtLQUFXO0lBRWYscUJBQ0MsOERBQUNxQjtRQUFRQyxXQUFVO2tCQUNsQiw0RUFBQ3JDLHNFQUFnQkE7WUFDaEJzQyxNQUFLO1lBQ0xwQyxVQUFVQTtZQUNWQyxhQUFhQTtZQUNiTSxZQUFZQTtZQUNaOEIsY0FBY3RCO1lBQ2ROLE9BQU9BOzs7Ozs7Ozs7OztBQUlYO0dBOUVTVjs7UUFVT0gsc0RBQVNBO1FBQ0hDLDREQUFlQTs7O0tBWDVCRTtBQWdGVCwrREFBZUEsWUFBWUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZWRpdC1vdXRnb2luZy9wYWdlLnRzeD81OTNmIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgRm9ybUV2ZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIsIHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gJ25leHQvbmF2aWdhdGlvbidcbmltcG9ydCBFZGl0T3V0Z29pbmdGb3JtIGZyb20gJ0Bjb21wb25lbnRzL0Zvcm1zL091dGdvaW5nRm9ybSdcblxuZnVuY3Rpb24gRWRpdE91dGdvaW5nKCkge1xuXHRjb25zdCBbb3V0Z29pbmcsIHNldE91dGdvaW5nXSA9IHVzZVN0YXRlKHtcblx0XHRuYW1lOiAnJyxcblx0XHRjYXRlZ29yeTogMCxcblx0XHRwcmljZTogMCxcblx0XHRhbW91bnQ6IDAsXG5cdFx0ZGVzY3JpYmU6ICcnLFxuXHR9KVxuXHRjb25zdCBbc3VibWl0dGluZywgc2V0SXNTdWJtaXR0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuXHRjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKVxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXHRjb25zdCBzZWFyY2hQYXJhbXMgPSB1c2VTZWFyY2hQYXJhbXMoKVxuXHRjb25zdCBvdXRnb2luZ0lkID0gc2VhcmNoUGFyYW1zLmdldCgnaWQnKVxuXG5cdGNvbnN0IGVkaXRQb2ludE9mU2FsZSA9IGFzeW5jIChlOiBGb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdHNldElzU3VibWl0dGluZyh0cnVlKVxuXG5cdFx0aWYgKCFvdXRnb2luZy5uYW1lIHx8IG91dGdvaW5nLnByaWNlID09PSAwIHx8IG91dGdvaW5nLmFtb3VudCA9PT0gMCB8fCAhb3V0Z29pbmcuZGVzY3JpYmUpIHtcblx0XHRcdHNldEVycm9yKCdXeXBlxYJuaWogd3N6eXN0a2llIHBvbGEgZm9ybXVsYXJ6YSEnKVxuXHRcdFx0c2V0SXNTdWJtaXR0aW5nKGZhbHNlKVxuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHRvdGFsU3VtID0gKG91dGdvaW5nLmFtb3VudCAqIG91dGdvaW5nLnByaWNlKS50b0ZpeGVkKDIpXG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL291dGdvaW5nLyR7b3V0Z29pbmdJZH1gLCB7XG5cdFx0XHRcdG1ldGhvZDogJ1BBVENIJyxcblx0XHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHRcdG5hbWU6IG91dGdvaW5nLm5hbWUsXG5cdFx0XHRcdFx0Y2F0ZWdvcnk6IG91dGdvaW5nLmNhdGVnb3J5LFxuXHRcdFx0XHRcdHByaWNlOiBvdXRnb2luZy5wcmljZSxcblx0XHRcdFx0XHRhbW91bnQ6IG91dGdvaW5nLmFtb3VudCxcblx0XHRcdFx0XHR0b3RhbFN1bTogcGFyc2VGbG9hdCh0b3RhbFN1bSksXG5cdFx0XHRcdFx0ZGVzY3JpYmU6IG91dGdvaW5nLmRlc2NyaWJlLFxuXHRcdFx0XHR9KSxcblx0XHRcdH0pXG5cdFx0XHRjb25zb2xlLmxvZyhvdXRnb2luZy5uYW1lLCBvdXRnb2luZy5jYXRlZ29yeSwgb3V0Z29pbmcucHJpY2UsIG91dGdvaW5nLmFtb3VudCwgKVxuXG5cdFx0XHRpZiAocmVzcG9uc2Uub2spIHtcblx0XHRcdFx0cm91dGVyLnB1c2goJy9vdXRnb2luZ3MnKVxuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhlcnJvcilcblx0XHR9IGZpbmFsbHkge1xuXHRcdFx0c2V0SXNTdWJtaXR0aW5nKGZhbHNlKVxuXHRcdH1cblx0fVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc3QgZ2V0T3V0Z29pbmdEZXRhaWxzID0gYXN5bmMgKCkgPT4ge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS9vdXRnb2luZy8ke291dGdvaW5nSWR9YClcblx0XHRcdGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcblxuXHRcdFx0c2V0T3V0Z29pbmcoe1xuXHRcdFx0XHRuYW1lOiBkYXRhLm5hbWUsXG5cdFx0XHRcdGNhdGVnb3J5OiBkYXRhLmNhdGVnb3J5LFxuXHRcdFx0XHRwcmljZTogZGF0YS5wcmljZSxcblx0XHRcdFx0YW1vdW50OiBkYXRhLmFtb3VudCxcblx0XHRcdFx0ZGVzY3JpYmU6IGRhdGEuZGVzY3JpYmUsXG5cdFx0XHR9KVxuXHRcdH1cblxuXHRcdGlmIChvdXRnb2luZ0lkKSBnZXRPdXRnb2luZ0RldGFpbHMoKVxuXHR9LCBbb3V0Z29pbmdJZF0pXG5cblx0cmV0dXJuIChcblx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9J2NvbnRhaW5lciBweS0yMCc+XG5cdFx0XHQ8RWRpdE91dGdvaW5nRm9ybVxuXHRcdFx0XHR0eXBlPSdFRElUJ1xuXHRcdFx0XHRvdXRnb2luZz17b3V0Z29pbmd9XG5cdFx0XHRcdHNldE91dGdvaW5nPXtzZXRPdXRnb2luZ31cblx0XHRcdFx0c3VibWl0dGluZz17c3VibWl0dGluZ31cblx0XHRcdFx0aGFuZGxlU3VibWl0PXtlZGl0UG9pbnRPZlNhbGV9XG5cdFx0XHRcdGVycm9yPXtlcnJvcn1cblx0XHRcdC8+XG5cdFx0PC9zZWN0aW9uPlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRPdXRnb2luZ1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwidXNlU2VhcmNoUGFyYW1zIiwiRWRpdE91dGdvaW5nRm9ybSIsIkVkaXRPdXRnb2luZyIsIm91dGdvaW5nIiwic2V0T3V0Z29pbmciLCJuYW1lIiwiY2F0ZWdvcnkiLCJwcmljZSIsImFtb3VudCIsImRlc2NyaWJlIiwic3VibWl0dGluZyIsInNldElzU3VibWl0dGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJyb3V0ZXIiLCJzZWFyY2hQYXJhbXMiLCJvdXRnb2luZ0lkIiwiZ2V0IiwiZWRpdFBvaW50T2ZTYWxlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidG90YWxTdW0iLCJ0b0ZpeGVkIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicGFyc2VGbG9hdCIsImNvbnNvbGUiLCJsb2ciLCJvayIsInB1c2giLCJnZXRPdXRnb2luZ0RldGFpbHMiLCJkYXRhIiwianNvbiIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJ0eXBlIiwiaGFuZGxlU3VibWl0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/edit-outgoing/page.tsx\n"));

/***/ })

});