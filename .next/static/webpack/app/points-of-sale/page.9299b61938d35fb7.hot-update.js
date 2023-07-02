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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-client)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_UI_SectionTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/UI/SectionTitle */ \"(app-client)/./components/UI/SectionTitle.tsx\");\n/* harmony import */ var _components_Items_PointOfSaleItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Items/PointOfSaleItem */ \"(app-client)/./components/Items/PointOfSaleItem.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction PointsOfSale() {\n    var _ref;\n    _s();\n    const [allPoints, setAllPoints] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    var _id;\n    const userId = (_id = (_ref = session === null || session === void 0 ? void 0 : session.user) === null || _ref === void 0 ? void 0 : _ref.id) !== null && _id !== void 0 ? _id : \"\";\n    const handleDelete = async (point)=>{\n        const hasConfirmed = confirm(\"Are you sure you want to delete this prompt?\");\n        if (hasConfirmed) {\n            try {\n                await fetch(\"/api/prompt/\".concat(post._id.toString()), {\n                    method: \"DELETE\"\n                });\n                const filteredPosts = myPosts.filter((item)=>item._id !== post._id);\n                setMyPosts(filteredPosts);\n            } catch (error) {\n                console.log(error);\n            }\n        }\n    };\n    const fetchPointsOfSale = async ()=>{\n        try {\n            const response = await fetch(\"/api/point-of-sale\");\n            const data = await response.json();\n            const filteredPoints = data.filter((point)=>point.creator._id.toString() === userId.toString());\n            setAllPoints(filteredPoints);\n        } catch (error) {\n            console.log(error);\n        } finally{\n            setLoading(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchPointsOfSale();\n    }, []);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"container py-20\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-10 text-black text-center\",\n                children: \"Wczytywanie danych...\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/points-of-sale/page.tsx\",\n                lineNumber: 70,\n                columnNumber: 5\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/points-of-sale/page.tsx\",\n            lineNumber: 69,\n            columnNumber: 4\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"container py-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_SectionTitle__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                title: \"Moje punkty sprzedaży\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/points-of-sale/page.tsx\",\n                lineNumber: 77,\n                columnNumber: 4\n            }, this),\n            allPoints.length > 0 ? allPoints.map((point)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Items_PointOfSaleItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    name: point.name,\n                    address: point.address,\n                    type: point.type,\n                    latitude: point.latitude,\n                    longitude: point.longitude\n                }, point._id, false, {\n                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/points-of-sale/page.tsx\",\n                    lineNumber: 80,\n                    columnNumber: 6\n                }, this)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-10 text-black text-center\",\n                children: \"Brak punkt\\xf3w sprzedaży\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/points-of-sale/page.tsx\",\n                lineNumber: 90,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/points-of-sale/page.tsx\",\n        lineNumber: 76,\n        columnNumber: 3\n    }, this);\n}\n_s(PointsOfSale, \"arCP5M6WtLp8ObxR/w0NUOzBIAQ=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = PointsOfSale;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PointsOfSale);\nvar _c;\n$RefreshReg$(_c, \"PointsOfSale\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3BvaW50cy1vZi1zYWxlL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFMkM7QUFDQztBQUNVO0FBRVM7QUFpQi9ELFNBQVNLO1FBSU87O0lBSGYsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdQLCtDQUFRQSxDQUFnQixFQUFFO0lBQzVELE1BQU0sQ0FBQ1EsU0FBU0MsV0FBVyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLEVBQUVVLE1BQU1DLE9BQU8sRUFBRSxHQUFHVCwyREFBVUE7UUFDckI7SUFBZixNQUFNVSxTQUFTLGVBQUNELG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBU0Usa0JBQVYsZ0NBQW9DQyxnQkFBcEMsdUJBQTBDO0lBRXpELE1BQU1DLGVBQWUsT0FBTUM7UUFDMUIsTUFBTUMsZUFBZUMsUUFBUTtRQUU3QixJQUFJRCxjQUFjO1lBQ2pCLElBQUk7Z0JBQ0gsTUFBTUUsTUFBTSxlQUFtQyxPQUFwQkMsS0FBS0MsSUFBSUMsYUFBYztvQkFDakRDLFFBQVE7Z0JBQ1Q7Z0JBRUEsTUFBTUMsZ0JBQWdCQyxRQUFRQyxPQUFPQyxDQUFBQSxPQUFRQSxLQUFLTixRQUFRRCxLQUFLQztnQkFFL0RPLFdBQVdKO1lBQ1osRUFBRSxPQUFPSyxPQUFPO2dCQUNmQyxRQUFRQyxJQUFJRjtZQUNiO1FBQ0Q7SUFDRDtJQUVBLE1BQU1HLG9CQUFvQjtRQUN6QixJQUFJO1lBQ0gsTUFBTUMsV0FBVyxNQUFNZCxNQUFNO1lBQzdCLE1BQU1ULE9BQU8sTUFBTXVCLFNBQVNDO1lBRTVCLE1BQU1DLGlCQUFpQnpCLEtBQUtnQixPQUFPLENBQUNWLFFBQXVCQSxNQUFNb0IsUUFBUWYsSUFBSUMsZUFBZVYsT0FBT1U7WUFFbkdmLGFBQWE0QjtRQUNkLEVBQUUsT0FBT04sT0FBTztZQUNmQyxRQUFRQyxJQUFJRjtRQUNiLFNBQVU7WUFDVHBCLFdBQVc7UUFDWjtJQUNEO0lBRUFSLGdEQUFTQSxDQUFDO1FBQ1QrQjtJQUNELEdBQUcsRUFBRTtJQUVMLElBQUl4QixTQUFTO1FBQ1oscUJBQ0MsOERBQUM2QjtZQUFRQyxXQUFVO3NCQUNsQiw0RUFBQ0M7Z0JBQUVELFdBQVU7MEJBQStCOzs7Ozs7Ozs7OztJQUcvQztJQUVBLHFCQUNDLDhEQUFDRDtRQUFRQyxXQUFVOzswQkFDbEIsOERBQUNuQyxtRUFBWUE7Z0JBQUNxQyxPQUFNOzs7Ozs7WUFDbkJsQyxVQUFVbUMsU0FBUyxJQUNuQm5DLFVBQVVvQyxJQUFJMUIsQ0FBQUEsc0JBQ2IsOERBQUNaLHlFQUFlQTtvQkFFZnVDLE1BQU0zQixNQUFNMkI7b0JBQ1pDLFNBQVM1QixNQUFNNEI7b0JBQ2ZDLE1BQU03QixNQUFNNkI7b0JBQ1pDLFVBQVU5QixNQUFNOEI7b0JBQ2hCQyxXQUFXL0IsTUFBTStCO21CQUxaL0IsTUFBTUs7Ozs7MENBU2IsOERBQUNrQjtnQkFBRUQsV0FBVTswQkFBK0I7Ozs7Ozs7Ozs7OztBQUloRDtHQXRFU2pDOztRQUdrQkgsdURBQVVBOzs7S0FINUJHO0FBd0VULCtEQUFlQSxZQUFZQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wb2ludHMtb2Ytc2FsZS9wYWdlLnRzeD9mMTA1Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0J1xuaW1wb3J0IFNlY3Rpb25UaXRsZSBmcm9tICdAY29tcG9uZW50cy9VSS9TZWN0aW9uVGl0bGUnXG5cbmltcG9ydCBQb2ludE9mU2FsZUl0ZW0gZnJvbSAnQGNvbXBvbmVudHMvSXRlbXMvUG9pbnRPZlNhbGVJdGVtJ1xuXG5pbnRlcmZhY2UgUG9pbnRPZlNhbGUge1xuXHRfaWQ6IHN0cmluZ1xuXHRhZGRyZXNzOiBzdHJpbmdcblx0Y3JlYXRvcjoge1xuXHRcdF9pZDogc3RyaW5nXG5cdFx0ZW1haWw6IHN0cmluZ1xuXHRcdHVzZXJuYW1lOiBzdHJpbmdcblx0XHRpbWFnZTogc3RyaW5nXG5cdH1cblx0bGF0aXR1ZGU6IHN0cmluZ1xuXHRsb25naXR1ZGU6IHN0cmluZ1xuXHRuYW1lOiBzdHJpbmdcblx0dHlwZTogc3RyaW5nXG59XG5cbmZ1bmN0aW9uIFBvaW50c09mU2FsZSgpIHtcblx0Y29uc3QgW2FsbFBvaW50cywgc2V0QWxsUG9pbnRzXSA9IHVzZVN0YXRlPFBvaW50T2ZTYWxlW10+KFtdKVxuXHRjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuXHRjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKVxuXHRjb25zdCB1c2VySWQgPSAoc2Vzc2lvbj8udXNlciBhcyB7IGlkPzogc3RyaW5nIH0pPy5pZCA/PyAnJ1xuXG5cdGNvbnN0IGhhbmRsZURlbGV0ZSA9IGFzeW5jIHBvaW50ID0+IHtcblx0XHRjb25zdCBoYXNDb25maXJtZWQgPSBjb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgcHJvbXB0PycpXG5cblx0XHRpZiAoaGFzQ29uZmlybWVkKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRhd2FpdCBmZXRjaChgL2FwaS9wcm9tcHQvJHtwb3N0Ll9pZC50b1N0cmluZygpfWAsIHtcblx0XHRcdFx0XHRtZXRob2Q6ICdERUxFVEUnLFxuXHRcdFx0XHR9KVxuXG5cdFx0XHRcdGNvbnN0IGZpbHRlcmVkUG9zdHMgPSBteVBvc3RzLmZpbHRlcihpdGVtID0+IGl0ZW0uX2lkICE9PSBwb3N0Ll9pZClcblxuXHRcdFx0XHRzZXRNeVBvc3RzKGZpbHRlcmVkUG9zdHMpXG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcilcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRjb25zdCBmZXRjaFBvaW50c09mU2FsZSA9IGFzeW5jICgpID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9wb2ludC1vZi1zYWxlJylcblx0XHRcdGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcblxuXHRcdFx0Y29uc3QgZmlsdGVyZWRQb2ludHMgPSBkYXRhLmZpbHRlcigocG9pbnQ6IFBvaW50T2ZTYWxlKSA9PiBwb2ludC5jcmVhdG9yLl9pZC50b1N0cmluZygpID09PSB1c2VySWQudG9TdHJpbmcoKSlcblxuXHRcdFx0c2V0QWxsUG9pbnRzKGZpbHRlcmVkUG9pbnRzKVxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhlcnJvcilcblx0XHR9IGZpbmFsbHkge1xuXHRcdFx0c2V0TG9hZGluZyhmYWxzZSlcblx0XHR9XG5cdH1cblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGZldGNoUG9pbnRzT2ZTYWxlKClcblx0fSwgW10pXG5cblx0aWYgKGxvYWRpbmcpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPSdjb250YWluZXIgcHktMjAnPlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9J210LTEwIHRleHQtYmxhY2sgdGV4dC1jZW50ZXInPldjenl0eXdhbmllIGRhbnljaC4uLjwvcD5cblx0XHRcdDwvc2VjdGlvbj5cblx0XHQpXG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxzZWN0aW9uIGNsYXNzTmFtZT0nY29udGFpbmVyIHB5LTIwJz5cblx0XHRcdDxTZWN0aW9uVGl0bGUgdGl0bGU9J01vamUgcHVua3R5IHNwcnplZGHFvHknIC8+XG5cdFx0XHR7YWxsUG9pbnRzLmxlbmd0aCA+IDAgPyAoXG5cdFx0XHRcdGFsbFBvaW50cy5tYXAocG9pbnQgPT4gKFxuXHRcdFx0XHRcdDxQb2ludE9mU2FsZUl0ZW1cblx0XHRcdFx0XHRcdGtleT17cG9pbnQuX2lkfVxuXHRcdFx0XHRcdFx0bmFtZT17cG9pbnQubmFtZX1cblx0XHRcdFx0XHRcdGFkZHJlc3M9e3BvaW50LmFkZHJlc3N9XG5cdFx0XHRcdFx0XHR0eXBlPXtwb2ludC50eXBlfVxuXHRcdFx0XHRcdFx0bGF0aXR1ZGU9e3BvaW50LmxhdGl0dWRlfVxuXHRcdFx0XHRcdFx0bG9uZ2l0dWRlPXtwb2ludC5sb25naXR1ZGV9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KSlcblx0XHRcdCkgOiAoXG5cdFx0XHRcdDxwIGNsYXNzTmFtZT0nbXQtMTAgdGV4dC1ibGFjayB0ZXh0LWNlbnRlcic+QnJhayBwdW5rdMOzdyBzcHJ6ZWRhxbx5PC9wPlxuXHRcdFx0KX1cblx0XHQ8L3NlY3Rpb24+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9pbnRzT2ZTYWxlXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VTZXNzaW9uIiwiU2VjdGlvblRpdGxlIiwiUG9pbnRPZlNhbGVJdGVtIiwiUG9pbnRzT2ZTYWxlIiwiYWxsUG9pbnRzIiwic2V0QWxsUG9pbnRzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJkYXRhIiwic2Vzc2lvbiIsInVzZXJJZCIsInVzZXIiLCJpZCIsImhhbmRsZURlbGV0ZSIsInBvaW50IiwiaGFzQ29uZmlybWVkIiwiY29uZmlybSIsImZldGNoIiwicG9zdCIsIl9pZCIsInRvU3RyaW5nIiwibWV0aG9kIiwiZmlsdGVyZWRQb3N0cyIsIm15UG9zdHMiLCJmaWx0ZXIiLCJpdGVtIiwic2V0TXlQb3N0cyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImZldGNoUG9pbnRzT2ZTYWxlIiwicmVzcG9uc2UiLCJqc29uIiwiZmlsdGVyZWRQb2ludHMiLCJjcmVhdG9yIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsInAiLCJ0aXRsZSIsImxlbmd0aCIsIm1hcCIsIm5hbWUiLCJhZGRyZXNzIiwidHlwZSIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/points-of-sale/page.tsx\n"));

/***/ })

});