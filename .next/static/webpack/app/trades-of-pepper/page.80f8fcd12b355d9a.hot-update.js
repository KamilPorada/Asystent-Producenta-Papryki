"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/trades-of-pepper/page",{

/***/ "(app-client)/./app/trades-of-pepper/page.tsx":
/*!***************************************!*\
  !*** ./app/trades-of-pepper/page.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-client)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_UI_SectionTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/UI/SectionTitle */ \"(app-client)/./components/UI/SectionTitle.tsx\");\n/* harmony import */ var _components_Items_TradeOfPepperTableHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/Items/TradeOfPepperTableHeader */ \"(app-client)/./components/Items/TradeOfPepperTableHeader.tsx\");\n/* harmony import */ var _components_Items_TradeOfPepperItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/Items/TradeOfPepperItem */ \"(app-client)/./components/Items/TradeOfPepperItem.tsx\");\n/* harmony import */ var _components_Items_TradeOfPepperFilterItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/Items/TradeOfPepperFilterItem */ \"(app-client)/./components/Items/TradeOfPepperFilterItem.tsx\");\n/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! xlsx */ \"(app-client)/./node_modules/xlsx/xlsx.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction TradesOfPepper() {\n    var _ref;\n    _s();\n    const [allTrades, setAllTrades] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [filteredTrades, setFilteredTrades] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [showFilters, setShowFilters] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    var _id;\n    const userId = (_id = (_ref = session === null || session === void 0 ? void 0 : session.user) === null || _ref === void 0 ? void 0 : _ref.id) !== null && _id !== void 0 ? _id : \"\";\n    const handleShowFilters = ()=>{\n        setShowFilters(true);\n    };\n    const handleHideFilters = ()=>{\n        setShowFilters(false);\n    };\n    const handleFilter = (filters)=>{\n        const { date, clas, color, pointOfSale } = filters;\n        const filteredItems = allTrades.filter((trade)=>{\n            let matchesFilter = true;\n            // Filtruj po dacie\n            if (date && formatDate(trade.date) !== formatDate(date)) {\n                matchesFilter = false;\n            }\n            // Filtruj po klasie\n            if (clas && trade.clas !== clas) {\n                matchesFilter = false;\n            }\n            // Filtruj po kolorze\n            if (color && trade.color !== color) {\n                matchesFilter = false;\n            }\n            // Filtruj po punkcie sprzedaży\n            if (pointOfSale && trade.pointOfSaleId !== pointOfSale) {\n                matchesFilter = false;\n            }\n            return matchesFilter;\n        });\n        setFilteredTrades(filteredItems);\n    };\n    const formatDate = (dateString)=>{\n        const date = new Date(dateString);\n        const day = date.getDate();\n        const month = date.getMonth() + 1;\n        const year = date.getFullYear();\n        return \"\".concat(day < 10 ? \"0\" + day : day, \".\").concat(month < 10 ? \"0\" + month : month, \".\").concat(year);\n    };\n    const getClassLabel = (index)=>{\n        if (index === 3) {\n            return \"Krojona\";\n        }\n        return index.toString();\n    };\n    const getColorLabel = (index)=>{\n        switch(index){\n            case 1:\n                return \"Czerwona\";\n            case 2:\n                return \"Ż\\xf3łta\";\n            case 3:\n                return \"Zielona\";\n            case 4:\n                return \"Pomarańczowa\";\n            case 5:\n                return \"Blondyna\";\n            default:\n                return \"\";\n        }\n    };\n    const handleDelete = async (trade)=>{\n        try {\n            await fetch(\"/api/trade-of-pepper/\".concat(trade._id.toString()), {\n                method: \"DELETE\"\n            });\n            const filteredTrades = allTrades.filter((item)=>item._id !== trade._id);\n            setAllTrades(filteredTrades);\n            setLoading(true);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const handleEdit = async (trade)=>{\n        router.push(\"/edit-trade-of-pepper?id=\".concat(trade._id));\n    };\n    const fetchTradesOfPepper = async ()=>{\n        try {\n            const response = await fetch(\"/api/trade-of-pepper\");\n            const data = await response.json();\n            const filteredTrades = data.filter((trade)=>trade.creator._id.toString() === userId.toString());\n            setAllTrades(filteredTrades);\n            setFilteredTrades(filteredTrades);\n        } catch (error) {\n            console.log(error);\n        } finally{\n            setLoading(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchTradesOfPepper();\n    }, [\n        loading\n    ]);\n    const exportToXLS = ()=>{\n        const workbook = xlsx__WEBPACK_IMPORTED_MODULE_8__.utils.book_new();\n        const sheetData = [\n            [\n                \"Index\",\n                \"Data\",\n                \"Klasa\",\n                \"Kolor\",\n                \"Cena\",\n                \"Waga\",\n                \"Stawka VAT\",\n                \"Suma\",\n                \"Punkt sprzedaży\"\n            ]\n        ];\n        filteredTrades.forEach((trade, index)=>{\n            const rowData = [\n                (index + 1).toString(),\n                formatDate(trade.date),\n                getClassLabel(trade.clas),\n                getColorLabel(trade.color),\n                trade.price.toString(),\n                trade.weight.toString(),\n                trade.vatRate.toString(),\n                trade.totalSum.toString(),\n                trade.pointOfSaleId\n            ];\n            sheetData.push(rowData);\n        });\n        const sheet = xlsx__WEBPACK_IMPORTED_MODULE_8__.utils.aoa_to_sheet(sheetData);\n        xlsx__WEBPACK_IMPORTED_MODULE_8__.utils.book_append_sheet(workbook, sheet, \"Transakcje papryki\");\n        xlsx__WEBPACK_IMPORTED_MODULE_8__.writeFile(workbook, \"transakcje_papryki.xlsx\");\n    };\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"container py-20\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-10 text-black text-center\",\n                children: \"Wczytywanie danych...\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/trades-of-pepper/page.tsx\",\n                lineNumber: 188,\n                columnNumber: 5\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/trades-of-pepper/page.tsx\",\n            lineNumber: 187,\n            columnNumber: 4\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"container py-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_SectionTitle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                title: \"Moje transakcje sprzedaży papryki\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/trades-of-pepper/page.tsx\",\n                lineNumber: 195,\n                columnNumber: 4\n            }, this),\n            showFilters ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Items_TradeOfPepperFilterItem__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                handleFilter: handleFilter,\n                handleCancel: handleHideFilters\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/trades-of-pepper/page.tsx\",\n                lineNumber: 197,\n                columnNumber: 5\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row justify-end\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"px-2 py-1  rounded font-semibold bg-mainColor hover:bg-green-800 transition-colors\",\n                        children: \"Eksport do XLS\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/trades-of-pepper/page.tsx\",\n                        lineNumber: 200,\n                        columnNumber: 6\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"px-2 py-1 rounded font-semibold bg-mainColor hover:bg-green-800 transition-colors\",\n                        onClick: handleShowFilters,\n                        children: \"Zastosuj filtry\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/trades-of-pepper/page.tsx\",\n                        lineNumber: 204,\n                        columnNumber: 6\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/trades-of-pepper/page.tsx\",\n                lineNumber: 199,\n                columnNumber: 5\n            }, this),\n            filteredTrades.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"overflow-x-auto ring-1 ring-black mt-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Items_TradeOfPepperTableHeader__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/trades-of-pepper/page.tsx\",\n                        lineNumber: 213,\n                        columnNumber: 6\n                    }, this),\n                    filteredTrades.length > 0 ? filteredTrades.map((trade, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Items_TradeOfPepperItem__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            index: index + 1,\n                            date: formatDate(trade.date),\n                            clas: getClassLabel(trade.clas),\n                            color: getColorLabel(trade.color),\n                            price: trade.price,\n                            weight: trade.weight,\n                            vatRate: trade.vatRate,\n                            totalSum: trade.totalSum,\n                            pointOfSale: trade.pointOfSaleId,\n                            handleDelete: ()=>handleDelete(trade),\n                            handleEdit: ()=>handleEdit(trade)\n                        }, trade._id, false, {\n                            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/trades-of-pepper/page.tsx\",\n                            lineNumber: 216,\n                            columnNumber: 9\n                        }, this)) : \"\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/trades-of-pepper/page.tsx\",\n                lineNumber: 212,\n                columnNumber: 5\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-10 text-black text-center\",\n                children: \"Brak transakcji sprzedaży papryki\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/trades-of-pepper/page.tsx\",\n                lineNumber: 234,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/trades-of-pepper/page.tsx\",\n        lineNumber: 194,\n        columnNumber: 3\n    }, this);\n}\n_s(TradesOfPepper, \"W8LekS+4C93YSJRg1nocGoVkK5g=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = TradesOfPepper;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TradesOfPepper);\nvar _c;\n$RefreshReg$(_c, \"TradesOfPepper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3RyYWRlcy1vZi1wZXBwZXIvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQzJDO0FBQ0M7QUFDRDtBQUNsQjtBQUM2QjtBQUMyQjtBQUNkO0FBQ1k7QUFDbkQ7QUE0QjVCLFNBQVNVO1FBT087O0lBTmYsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdaLCtDQUFRQSxDQUFrQixFQUFFO0lBQzlELE1BQU0sQ0FBQ2EsZ0JBQWdCQyxrQkFBa0IsR0FBR2QsK0NBQVFBLENBQWtCLEVBQUU7SUFDeEUsTUFBTSxDQUFDZSxhQUFhQyxlQUFlLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNpQixTQUFTQyxXQUFXLEdBQUdsQiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNbUIsU0FBU2hCLDBEQUFTQTtJQUN4QixNQUFNLEVBQUVpQixNQUFNQyxPQUFPLEVBQUUsR0FBR25CLDJEQUFVQTtRQUNyQjtJQUFmLE1BQU1vQixTQUFTLGVBQUNELG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBU0Usa0JBQVYsZ0NBQW9DQyxnQkFBcEMsdUJBQTBDO0lBRXpELE1BQU1DLG9CQUFvQjtRQUN6QlQsZUFBZTtJQUNoQjtJQUVBLE1BQU1VLG9CQUFvQjtRQUN6QlYsZUFBZTtJQUNoQjtJQUVBLE1BQU1XLGVBQWUsQ0FBQ0M7UUFDckIsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxXQUFXLEVBQUUsR0FBR0o7UUFFM0MsTUFBTUssZ0JBQWdCdEIsVUFBVXVCLE9BQU9DLENBQUFBO1lBQ3RDLElBQUlDLGdCQUFnQjtZQUVwQixtQkFBbUI7WUFDbkIsSUFBSVAsUUFBUVEsV0FBV0YsTUFBTU4sVUFBVVEsV0FBV1IsT0FBTztnQkFDeERPLGdCQUFnQjtZQUNqQjtZQUVBLG9CQUFvQjtZQUNwQixJQUFJTixRQUFRSyxNQUFNTCxTQUFTQSxNQUFNO2dCQUNoQ00sZ0JBQWdCO1lBQ2pCO1lB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QUFlQSxjQUFjQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC90cmFkZXMtb2YtcGVwcGVyL3BhZ2UudHN4PzUzMDciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFNlY3Rpb25UaXRsZSBmcm9tICdAY29tcG9uZW50cy9VSS9TZWN0aW9uVGl0bGUnXG5pbXBvcnQgVHJhZGVPZlBlcHBlclRhYmxlSGVhZGVyIGZyb20gJ0Bjb21wb25lbnRzL0l0ZW1zL1RyYWRlT2ZQZXBwZXJUYWJsZUhlYWRlcidcbmltcG9ydCBUcmFkZU9mUGVwcGVySXRlbSBmcm9tICdAY29tcG9uZW50cy9JdGVtcy9UcmFkZU9mUGVwcGVySXRlbSdcbmltcG9ydCBUcmFkZU9mUGVwcGVyRmlsdGVySXRlbSBmcm9tICdAY29tcG9uZW50cy9JdGVtcy9UcmFkZU9mUGVwcGVyRmlsdGVySXRlbSdcbmltcG9ydCAqIGFzIFhMU1ggZnJvbSAneGxzeCdcbmltcG9ydCBCdXR0b24gZnJvbSAnQGNvbXBvbmVudHMvVUkvQnV0dG9uJ1xuXG5pbnRlcmZhY2UgVHJhZGVPZlBlcHBlciB7XG5cdF9pZDogc3RyaW5nXG5cdGNyZWF0b3I6IHtcblx0XHRfaWQ6IHN0cmluZ1xuXHRcdGVtYWlsOiBzdHJpbmdcblx0XHR1c2VybmFtZTogc3RyaW5nXG5cdFx0aW1hZ2U6IHN0cmluZ1xuXHR9XG5cdHBvaW50T2ZTYWxlSWQ6IHN0cmluZ1xuXHRkYXRlOiBzdHJpbmdcblx0Y2xhczogbnVtYmVyXG5cdGNvbG9yOiBudW1iZXJcblx0cHJpY2U6IG51bWJlclxuXHR3ZWlnaHQ6IG51bWJlclxuXHR2YXRSYXRlOiBudW1iZXJcblx0dG90YWxTdW06IG51bWJlclxufVxuXG5pbnRlcmZhY2UgVHJhZGVPZlBlcHBlckZpbHRlcnMge1xuXHRkYXRlOiBzdHJpbmdcblx0Y2xhczogbnVtYmVyXG5cdGNvbG9yOiBudW1iZXJcblx0cG9pbnRPZlNhbGU6IHN0cmluZ1xufVxuXG5mdW5jdGlvbiBUcmFkZXNPZlBlcHBlcigpIHtcblx0Y29uc3QgW2FsbFRyYWRlcywgc2V0QWxsVHJhZGVzXSA9IHVzZVN0YXRlPFRyYWRlT2ZQZXBwZXJbXT4oW10pXG5cdGNvbnN0IFtmaWx0ZXJlZFRyYWRlcywgc2V0RmlsdGVyZWRUcmFkZXNdID0gdXNlU3RhdGU8VHJhZGVPZlBlcHBlcltdPihbXSlcblx0Y29uc3QgW3Nob3dGaWx0ZXJzLCBzZXRTaG93RmlsdGVyc10gPSB1c2VTdGF0ZShmYWxzZSlcblx0Y29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblx0Y29uc3QgeyBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKClcblx0Y29uc3QgdXNlcklkID0gKHNlc3Npb24/LnVzZXIgYXMgeyBpZD86IHN0cmluZyB9KT8uaWQgPz8gJydcblxuXHRjb25zdCBoYW5kbGVTaG93RmlsdGVycyA9ICgpID0+IHtcblx0XHRzZXRTaG93RmlsdGVycyh0cnVlKVxuXHR9XG5cblx0Y29uc3QgaGFuZGxlSGlkZUZpbHRlcnMgPSAoKSA9PiB7XG5cdFx0c2V0U2hvd0ZpbHRlcnMoZmFsc2UpXG5cdH1cblxuXHRjb25zdCBoYW5kbGVGaWx0ZXIgPSAoZmlsdGVyczogVHJhZGVPZlBlcHBlckZpbHRlcnMpID0+IHtcblx0XHRjb25zdCB7IGRhdGUsIGNsYXMsIGNvbG9yLCBwb2ludE9mU2FsZSB9ID0gZmlsdGVyc1xuXG5cdFx0Y29uc3QgZmlsdGVyZWRJdGVtcyA9IGFsbFRyYWRlcy5maWx0ZXIodHJhZGUgPT4ge1xuXHRcdFx0bGV0IG1hdGNoZXNGaWx0ZXIgPSB0cnVlXG5cblx0XHRcdC8vIEZpbHRydWogcG8gZGFjaWVcblx0XHRcdGlmIChkYXRlICYmIGZvcm1hdERhdGUodHJhZGUuZGF0ZSkgIT09IGZvcm1hdERhdGUoZGF0ZSkpIHtcblx0XHRcdFx0bWF0Y2hlc0ZpbHRlciA9IGZhbHNlXG5cdFx0XHR9XG5cblx0XHRcdC8vIEZpbHRydWogcG8ga2xhc2llXG5cdFx0XHRpZiAoY2xhcyAmJiB0cmFkZS5jbGFzICE9PSBjbGFzKSB7XG5cdFx0XHRcdG1hdGNoZXNGaWx0ZXIgPSBmYWxzZVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBGaWx0cnVqIHBvIGtvbG9yemVcblx0XHRcdGlmIChjb2xvciAmJiB0cmFkZS5jb2xvciAhPT0gY29sb3IpIHtcblx0XHRcdFx0bWF0Y2hlc0ZpbHRlciA9IGZhbHNlXG5cdFx0XHR9XG5cblx0XHRcdC8vIEZpbHRydWogcG8gcHVua2NpZSBzcHJ6ZWRhxbx5XG5cdFx0XHRpZiAocG9pbnRPZlNhbGUgJiYgdHJhZGUucG9pbnRPZlNhbGVJZCAhPT0gcG9pbnRPZlNhbGUpIHtcblx0XHRcdFx0bWF0Y2hlc0ZpbHRlciA9IGZhbHNlXG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBtYXRjaGVzRmlsdGVyXG5cdFx0fSlcblxuXHRcdHNldEZpbHRlcmVkVHJhZGVzKGZpbHRlcmVkSXRlbXMpXG5cdH1cblxuXHRjb25zdCBmb3JtYXREYXRlID0gKGRhdGVTdHJpbmc6IHN0cmluZykgPT4ge1xuXHRcdGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkYXRlU3RyaW5nKVxuXHRcdGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpXG5cdFx0Y29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxXG5cdFx0Y29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKVxuXG5cdFx0cmV0dXJuIGAke2RheSA8IDEwID8gJzAnICsgZGF5IDogZGF5fS4ke21vbnRoIDwgMTAgPyAnMCcgKyBtb250aCA6IG1vbnRofS4ke3llYXJ9YFxuXHR9XG5cblx0Y29uc3QgZ2V0Q2xhc3NMYWJlbCA9IChpbmRleDogbnVtYmVyKSA9PiB7XG5cdFx0aWYgKGluZGV4ID09PSAzKSB7XG5cdFx0XHRyZXR1cm4gJ0tyb2pvbmEnXG5cdFx0fVxuXHRcdHJldHVybiBpbmRleC50b1N0cmluZygpXG5cdH1cblxuXHRjb25zdCBnZXRDb2xvckxhYmVsID0gKGluZGV4OiBudW1iZXIpID0+IHtcblx0XHRzd2l0Y2ggKGluZGV4KSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHJldHVybiAnQ3plcndvbmEnXG5cdFx0XHRjYXNlIDI6XG5cdFx0XHRcdHJldHVybiAnxbvDs8WCdGEnXG5cdFx0XHRjYXNlIDM6XG5cdFx0XHRcdHJldHVybiAnWmllbG9uYSdcblx0XHRcdGNhc2UgNDpcblx0XHRcdFx0cmV0dXJuICdQb21hcmHFhGN6b3dhJ1xuXHRcdFx0Y2FzZSA1OlxuXHRcdFx0XHRyZXR1cm4gJ0Jsb25keW5hJ1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuICcnXG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgaGFuZGxlRGVsZXRlID0gYXN5bmMgKHRyYWRlOiBUcmFkZU9mUGVwcGVyKSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGF3YWl0IGZldGNoKGAvYXBpL3RyYWRlLW9mLXBlcHBlci8ke3RyYWRlLl9pZC50b1N0cmluZygpfWAsIHtcblx0XHRcdFx0bWV0aG9kOiAnREVMRVRFJyxcblx0XHRcdH0pXG5cblx0XHRcdGNvbnN0IGZpbHRlcmVkVHJhZGVzID0gYWxsVHJhZGVzLmZpbHRlcihpdGVtID0+IGl0ZW0uX2lkICE9PSB0cmFkZS5faWQpXG5cblx0XHRcdHNldEFsbFRyYWRlcyhmaWx0ZXJlZFRyYWRlcylcblx0XHRcdHNldExvYWRpbmcodHJ1ZSlcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5sb2coZXJyb3IpXG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgaGFuZGxlRWRpdCA9IGFzeW5jICh0cmFkZTogVHJhZGVPZlBlcHBlcikgPT4ge1xuXHRcdHJvdXRlci5wdXNoKGAvZWRpdC10cmFkZS1vZi1wZXBwZXI/aWQ9JHt0cmFkZS5faWR9YClcblx0fVxuXG5cdGNvbnN0IGZldGNoVHJhZGVzT2ZQZXBwZXIgPSBhc3luYyAoKSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvdHJhZGUtb2YtcGVwcGVyJylcblx0XHRcdGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcblxuXHRcdFx0Y29uc3QgZmlsdGVyZWRUcmFkZXMgPSBkYXRhLmZpbHRlcigodHJhZGU6IFRyYWRlT2ZQZXBwZXIpID0+IHRyYWRlLmNyZWF0b3IuX2lkLnRvU3RyaW5nKCkgPT09IHVzZXJJZC50b1N0cmluZygpKVxuXG5cdFx0XHRzZXRBbGxUcmFkZXMoZmlsdGVyZWRUcmFkZXMpXG5cdFx0XHRzZXRGaWx0ZXJlZFRyYWRlcyhmaWx0ZXJlZFRyYWRlcylcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5sb2coZXJyb3IpXG5cdFx0fSBmaW5hbGx5IHtcblx0XHRcdHNldExvYWRpbmcoZmFsc2UpXG5cdFx0fVxuXHR9XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRmZXRjaFRyYWRlc09mUGVwcGVyKClcblx0fSwgW2xvYWRpbmddKVxuXG5cdGNvbnN0IGV4cG9ydFRvWExTID0gKCkgPT4ge1xuXHRcdGNvbnN0IHdvcmtib29rID0gWExTWC51dGlscy5ib29rX25ldygpXG5cdFx0Y29uc3Qgc2hlZXREYXRhOiBzdHJpbmdbXVtdID0gW1xuXHRcdFx0WydJbmRleCcsICdEYXRhJywgJ0tsYXNhJywgJ0tvbG9yJywgJ0NlbmEnLCAnV2FnYScsICdTdGF3a2EgVkFUJywgJ1N1bWEnLCAnUHVua3Qgc3ByemVkYcW8eSddLFxuXHRcdF1cblxuXHRcdGZpbHRlcmVkVHJhZGVzLmZvckVhY2goKHRyYWRlLCBpbmRleCkgPT4ge1xuXHRcdFx0Y29uc3Qgcm93RGF0YTogc3RyaW5nW10gPSBbXG5cdFx0XHRcdChpbmRleCArIDEpLnRvU3RyaW5nKCksXG5cdFx0XHRcdGZvcm1hdERhdGUodHJhZGUuZGF0ZSksXG5cdFx0XHRcdGdldENsYXNzTGFiZWwodHJhZGUuY2xhcyksXG5cdFx0XHRcdGdldENvbG9yTGFiZWwodHJhZGUuY29sb3IpLFxuXHRcdFx0XHR0cmFkZS5wcmljZS50b1N0cmluZygpLFxuXHRcdFx0XHR0cmFkZS53ZWlnaHQudG9TdHJpbmcoKSxcblx0XHRcdFx0dHJhZGUudmF0UmF0ZS50b1N0cmluZygpLFxuXHRcdFx0XHR0cmFkZS50b3RhbFN1bS50b1N0cmluZygpLFxuXHRcdFx0XHR0cmFkZS5wb2ludE9mU2FsZUlkLFxuXHRcdFx0XVxuXHRcdFx0c2hlZXREYXRhLnB1c2gocm93RGF0YSlcblx0XHR9KVxuXG5cdFx0Y29uc3Qgc2hlZXQgPSBYTFNYLnV0aWxzLmFvYV90b19zaGVldChzaGVldERhdGEpXG5cdFx0WExTWC51dGlscy5ib29rX2FwcGVuZF9zaGVldCh3b3JrYm9vaywgc2hlZXQsICdUcmFuc2FrY2plIHBhcHJ5a2knKVxuXHRcdFhMU1gud3JpdGVGaWxlKHdvcmtib29rLCAndHJhbnNha2NqZV9wYXByeWtpLnhsc3gnKVxuXHR9XG5cblx0aWYgKGxvYWRpbmcpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPSdjb250YWluZXIgcHktMjAnPlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9J210LTEwIHRleHQtYmxhY2sgdGV4dC1jZW50ZXInPldjenl0eXdhbmllIGRhbnljaC4uLjwvcD5cblx0XHRcdDwvc2VjdGlvbj5cblx0XHQpXG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxzZWN0aW9uIGNsYXNzTmFtZT0nY29udGFpbmVyIHB5LTIwJz5cblx0XHRcdDxTZWN0aW9uVGl0bGUgdGl0bGU9J01vamUgdHJhbnNha2NqZSBzcHJ6ZWRhxbx5IHBhcHJ5a2knIC8+XG5cdFx0XHR7c2hvd0ZpbHRlcnMgPyAoXG5cdFx0XHRcdDxUcmFkZU9mUGVwcGVyRmlsdGVySXRlbSBoYW5kbGVGaWx0ZXI9e2hhbmRsZUZpbHRlcn0gaGFuZGxlQ2FuY2VsPXtoYW5kbGVIaWRlRmlsdGVyc30gLz5cblx0XHRcdCkgOiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IGp1c3RpZnktZW5kJz5cblx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J3B4LTIgcHktMSAgcm91bmRlZCBmb250LXNlbWlib2xkIGJnLW1haW5Db2xvciBob3ZlcjpiZy1ncmVlbi04MDAgdHJhbnNpdGlvbi1jb2xvcnMnPlxuXHRcdFx0XHRcdFx0RWtzcG9ydCBkbyBYTFNcblx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J3B4LTIgcHktMSByb3VuZGVkIGZvbnQtc2VtaWJvbGQgYmctbWFpbkNvbG9yIGhvdmVyOmJnLWdyZWVuLTgwMCB0cmFuc2l0aW9uLWNvbG9ycydcblx0XHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZVNob3dGaWx0ZXJzfT5cblx0XHRcdFx0XHRcdFphc3Rvc3VqIGZpbHRyeVxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCl9XG5cdFx0XHR7ZmlsdGVyZWRUcmFkZXMubGVuZ3RoID4gMCA/IChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J292ZXJmbG93LXgtYXV0byByaW5nLTEgcmluZy1ibGFjayBtdC01Jz5cblx0XHRcdFx0XHQ8VHJhZGVPZlBlcHBlclRhYmxlSGVhZGVyIC8+XG5cdFx0XHRcdFx0e2ZpbHRlcmVkVHJhZGVzLmxlbmd0aCA+IDBcblx0XHRcdFx0XHRcdD8gZmlsdGVyZWRUcmFkZXMubWFwKCh0cmFkZSwgaW5kZXgpID0+IChcblx0XHRcdFx0XHRcdFx0XHQ8VHJhZGVPZlBlcHBlckl0ZW1cblx0XHRcdFx0XHRcdFx0XHRcdGtleT17dHJhZGUuX2lkfVxuXHRcdFx0XHRcdFx0XHRcdFx0aW5kZXg9e2luZGV4ICsgMX1cblx0XHRcdFx0XHRcdFx0XHRcdGRhdGU9e2Zvcm1hdERhdGUodHJhZGUuZGF0ZSl9XG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzPXtnZXRDbGFzc0xhYmVsKHRyYWRlLmNsYXMpfVxuXHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I9e2dldENvbG9yTGFiZWwodHJhZGUuY29sb3IpfVxuXHRcdFx0XHRcdFx0XHRcdFx0cHJpY2U9e3RyYWRlLnByaWNlfVxuXHRcdFx0XHRcdFx0XHRcdFx0d2VpZ2h0PXt0cmFkZS53ZWlnaHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR2YXRSYXRlPXt0cmFkZS52YXRSYXRlfVxuXHRcdFx0XHRcdFx0XHRcdFx0dG90YWxTdW09e3RyYWRlLnRvdGFsU3VtfVxuXHRcdFx0XHRcdFx0XHRcdFx0cG9pbnRPZlNhbGU9e3RyYWRlLnBvaW50T2ZTYWxlSWR9XG5cdFx0XHRcdFx0XHRcdFx0XHRoYW5kbGVEZWxldGU9eygpID0+IGhhbmRsZURlbGV0ZSh0cmFkZSl9XG5cdFx0XHRcdFx0XHRcdFx0XHRoYW5kbGVFZGl0PXsoKSA9PiBoYW5kbGVFZGl0KHRyYWRlKX1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0ICApKVxuXHRcdFx0XHRcdFx0OiAnJ31cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpIDogKFxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9J210LTEwIHRleHQtYmxhY2sgdGV4dC1jZW50ZXInPkJyYWsgdHJhbnNha2NqaSBzcHJ6ZWRhxbx5IHBhcHJ5a2k8L3A+XG5cdFx0XHQpfVxuXHRcdDwvc2VjdGlvbj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmFkZXNPZlBlcHBlclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlU2Vzc2lvbiIsInVzZVJvdXRlciIsIlJlYWN0IiwiU2VjdGlvblRpdGxlIiwiVHJhZGVPZlBlcHBlclRhYmxlSGVhZGVyIiwiVHJhZGVPZlBlcHBlckl0ZW0iLCJUcmFkZU9mUGVwcGVyRmlsdGVySXRlbSIsIlhMU1giLCJUcmFkZXNPZlBlcHBlciIsImFsbFRyYWRlcyIsInNldEFsbFRyYWRlcyIsImZpbHRlcmVkVHJhZGVzIiwic2V0RmlsdGVyZWRUcmFkZXMiLCJzaG93RmlsdGVycyIsInNldFNob3dGaWx0ZXJzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJyb3V0ZXIiLCJkYXRhIiwic2Vzc2lvbiIsInVzZXJJZCIsInVzZXIiLCJpZCIsImhhbmRsZVNob3dGaWx0ZXJzIiwiaGFuZGxlSGlkZUZpbHRlcnMiLCJoYW5kbGVGaWx0ZXIiLCJmaWx0ZXJzIiwiZGF0ZSIsImNsYXMiLCJjb2xvciIsInBvaW50T2ZTYWxlIiwiZmlsdGVyZWRJdGVtcyIsImZpbHRlciIsInRyYWRlIiwibWF0Y2hlc0ZpbHRlciIsImZvcm1hdERhdGUiLCJwb2ludE9mU2FsZUlkIiwiZGF0ZVN0cmluZyIsIkRhdGUiLCJkYXkiLCJnZXREYXRlIiwibW9udGgiLCJnZXRNb250aCIsInllYXIiLCJnZXRGdWxsWWVhciIsImdldENsYXNzTGFiZWwiLCJpbmRleCIsInRvU3RyaW5nIiwiZ2V0Q29sb3JMYWJlbCIsImhhbmRsZURlbGV0ZSIsImZldGNoIiwiX2lkIiwibWV0aG9kIiwiaXRlbSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUVkaXQiLCJwdXNoIiwiZmV0Y2hUcmFkZXNPZlBlcHBlciIsInJlc3BvbnNlIiwianNvbiIsImNyZWF0b3IiLCJleHBvcnRUb1hMUyIsIndvcmtib29rIiwidXRpbHMiLCJib29rX25ldyIsInNoZWV0RGF0YSIsImZvckVhY2giLCJyb3dEYXRhIiwicHJpY2UiLCJ3ZWlnaHQiLCJ2YXRSYXRlIiwidG90YWxTdW0iLCJzaGVldCIsImFvYV90b19zaGVldCIsImJvb2tfYXBwZW5kX3NoZWV0Iiwid3JpdGVGaWxlIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsInAiLCJ0aXRsZSIsImhhbmRsZUNhbmNlbCIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJsZW5ndGgiLCJtYXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/trades-of-pepper/page.tsx\n"));

/***/ })

});