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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-client)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_UI_SectionTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/UI/SectionTitle */ \"(app-client)/./components/UI/SectionTitle.tsx\");\n/* harmony import */ var _components_Items_TradeOfPepperTableHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/Items/TradeOfPepperTableHeader */ \"(app-client)/./components/Items/TradeOfPepperTableHeader.tsx\");\n/* harmony import */ var _components_Items_TradeOfPepperItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/Items/TradeOfPepperItem */ \"(app-client)/./components/Items/TradeOfPepperItem.tsx\");\n/* harmony import */ var _components_Items_TradeOfPepperFilterItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/Items/TradeOfPepperFilterItem */ \"(app-client)/./components/Items/TradeOfPepperFilterItem.tsx\");\n/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! exceljs */ \"(app-client)/./node_modules/exceljs/dist/exceljs.min.js\");\n/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(exceljs__WEBPACK_IMPORTED_MODULE_8__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction TradesOfPepper() {\n    var _ref;\n    _s();\n    const [allTrades, setAllTrades] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [filteredTrades, setFilteredTrades] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [showFilters, setShowFilters] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    var _id;\n    const userId = (_id = (_ref = session === null || session === void 0 ? void 0 : session.user) === null || _ref === void 0 ? void 0 : _ref.id) !== null && _id !== void 0 ? _id : \"\";\n    const handleShowFilters = ()=>{\n        setShowFilters(true);\n    };\n    const handleHideFilters = ()=>{\n        setShowFilters(false);\n    };\n    const handleFilter = (filters)=>{\n        const { date, clas, color, pointOfSale } = filters;\n        const filteredItems = allTrades.filter((trade)=>{\n            let matchesFilter = true;\n            // Filtruj po dacie\n            if (date && formatDate(trade.date) !== formatDate(date)) {\n                matchesFilter = false;\n            }\n            // Filtruj po klasie\n            if (clas && trade.clas !== clas) {\n                matchesFilter = false;\n            }\n            // Filtruj po kolorze\n            if (color && trade.color !== color) {\n                matchesFilter = false;\n            }\n            // Filtruj po punkcie sprzedaży\n            if (pointOfSale && trade.pointOfSaleId !== pointOfSale) {\n                matchesFilter = false;\n            }\n            return matchesFilter;\n        });\n        setFilteredTrades(filteredItems);\n    };\n    const formatDate = (dateString)=>{\n        const date = new Date(dateString);\n        const day = date.getDate();\n        const month = date.getMonth() + 1;\n        const year = date.getFullYear();\n        return \"\".concat(day < 10 ? \"0\" + day : day, \".\").concat(month < 10 ? \"0\" + month : month, \".\").concat(year);\n    };\n    const getClassLabel = (index)=>{\n        if (index === 3) {\n            return \"Krojona\";\n        }\n        return index.toString();\n    };\n    const getColorLabel = (index)=>{\n        switch(index){\n            case 1:\n                return \"Czerwona\";\n            case 2:\n                return \"Ż\\xf3łta\";\n            case 3:\n                return \"Zielona\";\n            case 4:\n                return \"Pomarańczowa\";\n            case 5:\n                return \"Blondyna\";\n            default:\n                return \"\";\n        }\n    };\n    const handleDelete = async (trade)=>{\n        try {\n            await fetch(\"/api/trade-of-pepper/\".concat(trade._id.toString()), {\n                method: \"DELETE\"\n            });\n            const filteredTrades = allTrades.filter((item)=>item._id !== trade._id);\n            setAllTrades(filteredTrades);\n            setLoading(true);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const handleEdit = async (trade)=>{\n        router.push(\"/edit-trade-of-pepper?id=\".concat(trade._id));\n    };\n    const fetchTradesOfPepper = async ()=>{\n        try {\n            const response = await fetch(\"/api/trade-of-pepper\");\n            const data = await response.json();\n            const filteredTrades = data.filter((trade)=>trade.creator._id.toString() === userId.toString());\n            setAllTrades(filteredTrades);\n            setFilteredTrades(filteredTrades);\n        } catch (error) {\n            console.log(error);\n        } finally{\n            setLoading(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchTradesOfPepper();\n    }, [\n        loading\n    ]);\n    const exportToXLS = ()=>{\n        const workbook = new (exceljs__WEBPACK_IMPORTED_MODULE_8___default().Workbook)();\n        const worksheet = workbook.addWorksheet(\"Transakcje papryki\");\n        // Ustawianie niestandardowych formatów dla nagłówków kolumn\n        const headerCellStyle = {\n            font: {\n                bold: true,\n                color: {\n                    argb: \"FFFFFF\"\n                }\n            },\n            fill: {\n                type: \"pattern\",\n                pattern: \"solid\",\n                fgColor: {\n                    argb: \"009000\"\n                }\n            },\n            alignment: {\n                horizontal: \"center\"\n            }\n        };\n        // Dodawanie nagłówków kolumn\n        worksheet.addRow([\n            \"L.P.\",\n            \"Data\",\n            \"Klasa\",\n            \"Kolor\",\n            \"Cena\",\n            \"Waga\",\n            \"Stawka VAT\",\n            \"Suma\",\n            \"Punkt sprzedaży\"\n        ]);\n        const headerRow = worksheet.getRow(1);\n        headerRow.eachCell((cell)=>{\n            cell.fill = headerCellStyle.fill;\n            cell.font = headerCellStyle.font;\n            cell.alignment = headerCellStyle.alignment;\n        });\n        // Dodawanie danych\n        filteredTrades.forEach((trade, index)=>{\n            const rowData = [\n                (index + 1).toString(),\n                formatDate(trade.date),\n                getClassLabel(trade.clas),\n                getColorLabel(trade.color),\n                trade.price.toString(),\n                trade.weight.toString(),\n                trade.vatRate.toString(),\n                trade.totalSum.toString(),\n                trade.pointOfSaleId\n            ];\n            worksheet.addRow(rowData);\n        });\n        // Auto dopasowanie szerokości kolumn\n        worksheet.columns.forEach((column)=>{\n            column.width = 25;\n        });\n        // Generowanie pliku XLSX\n        workbook.xlsx.writeBuffer().then((buffer)=>{\n            const blob = new Blob([\n                buffer\n            ], {\n                type: \"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet\"\n            });\n            const url = URL.createObjectURL(blob);\n            const link = document.createElement(\"a\");\n            link.href = url;\n            link.download = \"transakcje_papryki.xlsx\";\n            link.click();\n        });\n    };\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"container py-20\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-10 text-black text-center\",\n                children: \"Wczytywanie danych...\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/trades-of-pepper/page.tsx\",\n                lineNumber: 214,\n                columnNumber: 5\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/trades-of-pepper/page.tsx\",\n            lineNumber: 213,\n            columnNumber: 4\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"container py-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_SectionTitle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                title: \"Moje transakcje sprzedaży papryki\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/trades-of-pepper/page.tsx\",\n                lineNumber: 221,\n                columnNumber: 4\n            }, this),\n            showFilters ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Items_TradeOfPepperFilterItem__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                handleFilter: handleFilter,\n                handleCancel: handleHideFilters\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/trades-of-pepper/page.tsx\",\n                lineNumber: 223,\n                columnNumber: 5\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row justify-end\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"px-2 py-1 mr-3 rounded font-semibold bg-mainColor hover:bg-green-800 transition-colors\",\n                        onClick: exportToXLS,\n                        children: \"Eksport do XLS\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/trades-of-pepper/page.tsx\",\n                        lineNumber: 226,\n                        columnNumber: 6\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"px-2 py-1 rounded font-semibold bg-mainColor hover:bg-green-800 transition-colors\",\n                        onClick: handleShowFilters,\n                        children: \"Zastosuj filtry\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/trades-of-pepper/page.tsx\",\n                        lineNumber: 231,\n                        columnNumber: 6\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/trades-of-pepper/page.tsx\",\n                lineNumber: 225,\n                columnNumber: 5\n            }, this),\n            filteredTrades.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"overflow-x-auto ring-1 ring-black mt-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Items_TradeOfPepperTableHeader__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/trades-of-pepper/page.tsx\",\n                        lineNumber: 240,\n                        columnNumber: 6\n                    }, this),\n                    filteredTrades.length > 0 ? filteredTrades.map((trade, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Items_TradeOfPepperItem__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            index: index + 1,\n                            date: formatDate(trade.date),\n                            clas: getClassLabel(trade.clas),\n                            color: getColorLabel(trade.color),\n                            price: trade.price,\n                            weight: trade.weight,\n                            vatRate: trade.vatRate,\n                            totalSum: trade.totalSum,\n                            pointOfSale: trade.pointOfSaleId,\n                            handleDelete: ()=>handleDelete(trade),\n                            handleEdit: ()=>handleEdit(trade)\n                        }, trade._id, false, {\n                            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/trades-of-pepper/page.tsx\",\n                            lineNumber: 243,\n                            columnNumber: 9\n                        }, this)) : \"\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/trades-of-pepper/page.tsx\",\n                lineNumber: 239,\n                columnNumber: 5\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-10 text-black text-center\",\n                children: \"Brak transakcji sprzedaży papryki\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/trades-of-pepper/page.tsx\",\n                lineNumber: 261,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/trades-of-pepper/page.tsx\",\n        lineNumber: 220,\n        columnNumber: 3\n    }, this);\n}\n_s(TradesOfPepper, \"W8LekS+4C93YSJRg1nocGoVkK5g=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = TradesOfPepper;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TradesOfPepper);\nvar _c;\n$RefreshReg$(_c, \"TradesOfPepper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3RyYWRlcy1vZi1wZXBwZXIvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUMyQztBQUNDO0FBQ0Q7QUFDbEI7QUFDNkI7QUFDMkI7QUFDZDtBQUNZO0FBRWxEO0FBMkI3QixTQUFTVTtRQU9POztJQU5mLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHWiwrQ0FBUUEsQ0FBa0IsRUFBRTtJQUM5RCxNQUFNLENBQUNhLGdCQUFnQkMsa0JBQWtCLEdBQUdkLCtDQUFRQSxDQUFrQixFQUFFO0lBQ3hFLE1BQU0sQ0FBQ2UsYUFBYUMsZUFBZSxHQUFHaEIsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDaUIsU0FBU0MsV0FBVyxHQUFHbEIsK0NBQVFBLENBQUM7SUFDdkMsTUFBTW1CLFNBQVNoQiwwREFBU0E7SUFDeEIsTUFBTSxFQUFFaUIsTUFBTUMsT0FBTyxFQUFFLEdBQUduQiwyREFBVUE7UUFDckI7SUFBZixNQUFNb0IsU0FBUyxlQUFDRCxvQkFBQUEscUJBQUFBLEtBQUFBLElBQUFBLFFBQVNFLGtCQUFWLGdDQUFvQ0MsZ0JBQXBDLHVCQUEwQztJQUV6RCxNQUFNQyxvQkFBb0I7UUFDekJULGVBQWU7SUFDaEI7SUFFQSxNQUFNVSxvQkFBb0I7UUFDekJWLGVBQWU7SUFDaEI7SUFFQSxNQUFNVyxlQUFlLENBQUNDO1FBQ3JCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsV0FBVyxFQUFFLEdBQUdKO1FBRTNDLE1BQU1LLGdCQUFnQnRCLFVBQVV1QixPQUFPQyxDQUFBQTtZQUN0QyxJQUFJQyxnQkFBZ0I7WUFFcEIsbUJBQW1CO1lBQ25CLElBQUlQLFFBQVFRLFdBQVdGLE1BQU1OLFVBQVVRLFdBQVdSLE9BQU87Z0JBQ3hETyxnQkFBZ0I7WUFDakI7WUFFQSxvQkFBb0I7WUFDcEIsSUFBSU4sUUFBUUssTUFBTUwsU0FBU0EsTUFBTTtnQkFDaENNLGdCQUFnQjtZQUNqQjtZ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QUNBTCxXQUFVO3dCQUNWTSxTQUFTM0Y7a0NBQW1COzs7Ozs7Ozs7Ozs7WUFLOUJaLGVBQWV3RyxTQUFTLGtCQUN4Qiw4REFBQ0g7Z0JBQUlKLFdBQVU7O2tDQUNkLDhEQUFDeEcsa0ZBQXdCQTs7Ozs7b0JBQ3hCTyxlQUFld0csU0FBUyxJQUN0QnhHLGVBQWV5RyxJQUFJLENBQUNuRixPQUFPYSxzQkFDM0IsOERBQUN6QywyRUFBaUJBOzRCQUVqQnlDLE9BQU9BLFFBQVE7NEJBQ2ZuQixNQUFNUSxXQUFXRixNQUFNTjs0QkFDdkJDLE1BQU1pQixjQUFjWixNQUFNTDs0QkFDMUJDLE9BQU9tQixjQUFjZixNQUFNSjs0QkFDM0J3RCxPQUFPcEQsTUFBTW9EOzRCQUNiQyxRQUFRckQsTUFBTXFEOzRCQUNkQyxTQUFTdEQsTUFBTXNEOzRCQUNmQyxVQUFVdkQsTUFBTXVEOzRCQUNoQjFELGFBQWFHLE1BQU1HOzRCQUNuQmEsY0FBYyxJQUFNQSxhQUFhaEI7NEJBQ2pDd0IsWUFBWSxJQUFNQSxXQUFXeEI7MkJBWHhCQSxNQUFNa0I7Ozs7b0NBY1o7Ozs7OztxQ0FHSiw4REFBQzBEO2dCQUFFRCxXQUFVOzBCQUErQjs7Ozs7Ozs7Ozs7O0FBSWhEO0dBbk9TcEc7O1FBS09QLHNEQUFTQTtRQUNFRCx1REFBVUE7OztLQU41QlE7QUFxT1QsK0RBQWVBLGNBQWNBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3RyYWRlcy1vZi1wZXBwZXIvcGFnZS50c3g/NTMwNyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgU2VjdGlvblRpdGxlIGZyb20gJ0Bjb21wb25lbnRzL1VJL1NlY3Rpb25UaXRsZSdcbmltcG9ydCBUcmFkZU9mUGVwcGVyVGFibGVIZWFkZXIgZnJvbSAnQGNvbXBvbmVudHMvSXRlbXMvVHJhZGVPZlBlcHBlclRhYmxlSGVhZGVyJ1xuaW1wb3J0IFRyYWRlT2ZQZXBwZXJJdGVtIGZyb20gJ0Bjb21wb25lbnRzL0l0ZW1zL1RyYWRlT2ZQZXBwZXJJdGVtJ1xuaW1wb3J0IFRyYWRlT2ZQZXBwZXJGaWx0ZXJJdGVtIGZyb20gJ0Bjb21wb25lbnRzL0l0ZW1zL1RyYWRlT2ZQZXBwZXJGaWx0ZXJJdGVtJ1xuaW1wb3J0ICogYXMgWExTWCBmcm9tICd4bHN4J1xuaW1wb3J0IEV4Y2VsSlMgZnJvbSAnZXhjZWxqcydcblxuaW50ZXJmYWNlIFRyYWRlT2ZQZXBwZXIge1xuXHRfaWQ6IHN0cmluZ1xuXHRjcmVhdG9yOiB7XG5cdFx0X2lkOiBzdHJpbmdcblx0XHRlbWFpbDogc3RyaW5nXG5cdFx0dXNlcm5hbWU6IHN0cmluZ1xuXHRcdGltYWdlOiBzdHJpbmdcblx0fVxuXHRwb2ludE9mU2FsZUlkOiBzdHJpbmdcblx0ZGF0ZTogc3RyaW5nXG5cdGNsYXM6IG51bWJlclxuXHRjb2xvcjogbnVtYmVyXG5cdHByaWNlOiBudW1iZXJcblx0d2VpZ2h0OiBudW1iZXJcblx0dmF0UmF0ZTogbnVtYmVyXG5cdHRvdGFsU3VtOiBudW1iZXJcbn1cblxuaW50ZXJmYWNlIFRyYWRlT2ZQZXBwZXJGaWx0ZXJzIHtcblx0ZGF0ZTogc3RyaW5nXG5cdGNsYXM6IG51bWJlclxuXHRjb2xvcjogbnVtYmVyXG5cdHBvaW50T2ZTYWxlOiBzdHJpbmdcbn1cblxuZnVuY3Rpb24gVHJhZGVzT2ZQZXBwZXIoKSB7XG5cdGNvbnN0IFthbGxUcmFkZXMsIHNldEFsbFRyYWRlc10gPSB1c2VTdGF0ZTxUcmFkZU9mUGVwcGVyW10+KFtdKVxuXHRjb25zdCBbZmlsdGVyZWRUcmFkZXMsIHNldEZpbHRlcmVkVHJhZGVzXSA9IHVzZVN0YXRlPFRyYWRlT2ZQZXBwZXJbXT4oW10pXG5cdGNvbnN0IFtzaG93RmlsdGVycywgc2V0U2hvd0ZpbHRlcnNdID0gdXNlU3RhdGUoZmFsc2UpXG5cdGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cdGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpXG5cdGNvbnN0IHVzZXJJZCA9IChzZXNzaW9uPy51c2VyIGFzIHsgaWQ/OiBzdHJpbmcgfSk/LmlkID8/ICcnXG5cblx0Y29uc3QgaGFuZGxlU2hvd0ZpbHRlcnMgPSAoKSA9PiB7XG5cdFx0c2V0U2hvd0ZpbHRlcnModHJ1ZSlcblx0fVxuXG5cdGNvbnN0IGhhbmRsZUhpZGVGaWx0ZXJzID0gKCkgPT4ge1xuXHRcdHNldFNob3dGaWx0ZXJzKGZhbHNlKVxuXHR9XG5cblx0Y29uc3QgaGFuZGxlRmlsdGVyID0gKGZpbHRlcnM6IFRyYWRlT2ZQZXBwZXJGaWx0ZXJzKSA9PiB7XG5cdFx0Y29uc3QgeyBkYXRlLCBjbGFzLCBjb2xvciwgcG9pbnRPZlNhbGUgfSA9IGZpbHRlcnNcblxuXHRcdGNvbnN0IGZpbHRlcmVkSXRlbXMgPSBhbGxUcmFkZXMuZmlsdGVyKHRyYWRlID0+IHtcblx0XHRcdGxldCBtYXRjaGVzRmlsdGVyID0gdHJ1ZVxuXG5cdFx0XHQvLyBGaWx0cnVqIHBvIGRhY2llXG5cdFx0XHRpZiAoZGF0ZSAmJiBmb3JtYXREYXRlKHRyYWRlLmRhdGUpICE9PSBmb3JtYXREYXRlKGRhdGUpKSB7XG5cdFx0XHRcdG1hdGNoZXNGaWx0ZXIgPSBmYWxzZVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBGaWx0cnVqIHBvIGtsYXNpZVxuXHRcdFx0aWYgKGNsYXMgJiYgdHJhZGUuY2xhcyAhPT0gY2xhcykge1xuXHRcdFx0XHRtYXRjaGVzRmlsdGVyID0gZmFsc2Vcblx0XHRcdH1cblxuXHRcdFx0Ly8gRmlsdHJ1aiBwbyBrb2xvcnplXG5cdFx0XHRpZiAoY29sb3IgJiYgdHJhZGUuY29sb3IgIT09IGNvbG9yKSB7XG5cdFx0XHRcdG1hdGNoZXNGaWx0ZXIgPSBmYWxzZVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBGaWx0cnVqIHBvIHB1bmtjaWUgc3ByemVkYcW8eVxuXHRcdFx0aWYgKHBvaW50T2ZTYWxlICYmIHRyYWRlLnBvaW50T2ZTYWxlSWQgIT09IHBvaW50T2ZTYWxlKSB7XG5cdFx0XHRcdG1hdGNoZXNGaWx0ZXIgPSBmYWxzZVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gbWF0Y2hlc0ZpbHRlclxuXHRcdH0pXG5cblx0XHRzZXRGaWx0ZXJlZFRyYWRlcyhmaWx0ZXJlZEl0ZW1zKVxuXHR9XG5cblx0Y29uc3QgZm9ybWF0RGF0ZSA9IChkYXRlU3RyaW5nOiBzdHJpbmcpID0+IHtcblx0XHRjb25zdCBkYXRlID0gbmV3IERhdGUoZGF0ZVN0cmluZylcblx0XHRjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKVxuXHRcdGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMVxuXHRcdGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKClcblxuXHRcdHJldHVybiBgJHtkYXkgPCAxMCA/ICcwJyArIGRheSA6IGRheX0uJHttb250aCA8IDEwID8gJzAnICsgbW9udGggOiBtb250aH0uJHt5ZWFyfWBcblx0fVxuXG5cdGNvbnN0IGdldENsYXNzTGFiZWwgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xuXHRcdGlmIChpbmRleCA9PT0gMykge1xuXHRcdFx0cmV0dXJuICdLcm9qb25hJ1xuXHRcdH1cblx0XHRyZXR1cm4gaW5kZXgudG9TdHJpbmcoKVxuXHR9XG5cblx0Y29uc3QgZ2V0Q29sb3JMYWJlbCA9IChpbmRleDogbnVtYmVyKSA9PiB7XG5cdFx0c3dpdGNoIChpbmRleCkge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRyZXR1cm4gJ0N6ZXJ3b25hJ1xuXHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHRyZXR1cm4gJ8W7w7PFgnRhJ1xuXHRcdFx0Y2FzZSAzOlxuXHRcdFx0XHRyZXR1cm4gJ1ppZWxvbmEnXG5cdFx0XHRjYXNlIDQ6XG5cdFx0XHRcdHJldHVybiAnUG9tYXJhxYRjem93YSdcblx0XHRcdGNhc2UgNTpcblx0XHRcdFx0cmV0dXJuICdCbG9uZHluYSdcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiAnJ1xuXHRcdH1cblx0fVxuXG5cdGNvbnN0IGhhbmRsZURlbGV0ZSA9IGFzeW5jICh0cmFkZTogVHJhZGVPZlBlcHBlcikgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRhd2FpdCBmZXRjaChgL2FwaS90cmFkZS1vZi1wZXBwZXIvJHt0cmFkZS5faWQudG9TdHJpbmcoKX1gLCB7XG5cdFx0XHRcdG1ldGhvZDogJ0RFTEVURScsXG5cdFx0XHR9KVxuXG5cdFx0XHRjb25zdCBmaWx0ZXJlZFRyYWRlcyA9IGFsbFRyYWRlcy5maWx0ZXIoaXRlbSA9PiBpdGVtLl9pZCAhPT0gdHJhZGUuX2lkKVxuXG5cdFx0XHRzZXRBbGxUcmFkZXMoZmlsdGVyZWRUcmFkZXMpXG5cdFx0XHRzZXRMb2FkaW5nKHRydWUpXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUubG9nKGVycm9yKVxuXHRcdH1cblx0fVxuXG5cdGNvbnN0IGhhbmRsZUVkaXQgPSBhc3luYyAodHJhZGU6IFRyYWRlT2ZQZXBwZXIpID0+IHtcblx0XHRyb3V0ZXIucHVzaChgL2VkaXQtdHJhZGUtb2YtcGVwcGVyP2lkPSR7dHJhZGUuX2lkfWApXG5cdH1cblxuXHRjb25zdCBmZXRjaFRyYWRlc09mUGVwcGVyID0gYXN5bmMgKCkgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL3RyYWRlLW9mLXBlcHBlcicpXG5cdFx0XHRjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cblx0XHRcdGNvbnN0IGZpbHRlcmVkVHJhZGVzID0gZGF0YS5maWx0ZXIoKHRyYWRlOiBUcmFkZU9mUGVwcGVyKSA9PiB0cmFkZS5jcmVhdG9yLl9pZC50b1N0cmluZygpID09PSB1c2VySWQudG9TdHJpbmcoKSlcblxuXHRcdFx0c2V0QWxsVHJhZGVzKGZpbHRlcmVkVHJhZGVzKVxuXHRcdFx0c2V0RmlsdGVyZWRUcmFkZXMoZmlsdGVyZWRUcmFkZXMpXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUubG9nKGVycm9yKVxuXHRcdH0gZmluYWxseSB7XG5cdFx0XHRzZXRMb2FkaW5nKGZhbHNlKVxuXHRcdH1cblx0fVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0ZmV0Y2hUcmFkZXNPZlBlcHBlcigpXG5cdH0sIFtsb2FkaW5nXSlcblxuXHRjb25zdCBleHBvcnRUb1hMUyA9ICgpID0+IHtcblx0XHRjb25zdCB3b3JrYm9vayA9IG5ldyBFeGNlbEpTLldvcmtib29rKClcblx0XHRjb25zdCB3b3Jrc2hlZXQgPSB3b3JrYm9vay5hZGRXb3Jrc2hlZXQoJ1RyYW5zYWtjamUgcGFwcnlraScpXG5cblx0XHQvLyBVc3Rhd2lhbmllIG5pZXN0YW5kYXJkb3d5Y2ggZm9ybWF0w7N3IGRsYSBuYWfFgsOzd2vDs3cga29sdW1uXG5cdFx0Y29uc3QgaGVhZGVyQ2VsbFN0eWxlID0ge1xuXHRcdFx0Zm9udDogeyBib2xkOiB0cnVlLCBjb2xvcjogeyBhcmdiOiAnRkZGRkZGJyB9IH0sXG5cdFx0XHRmaWxsOiB7IHR5cGU6ICdwYXR0ZXJuJywgcGF0dGVybjogJ3NvbGlkJywgZmdDb2xvcjogeyBhcmdiOiAnMDA5MDAwJyB9IGFzIEV4Y2VsSlMuQ29sb3IgfSxcblx0XHRcdGFsaWdubWVudDogeyBob3Jpem9udGFsOiAnY2VudGVyJyBhcyBFeGNlbEpTLkFsaWdubWVudFsnaG9yaXpvbnRhbCddIH0sXG5cdFx0fVxuXG5cdFx0Ly8gRG9kYXdhbmllIG5hZ8WCw7N3a8OzdyBrb2x1bW5cblx0XHR3b3Jrc2hlZXQuYWRkUm93KFsnTC5QLicsICdEYXRhJywgJ0tsYXNhJywgJ0tvbG9yJywgJ0NlbmEnLCAnV2FnYScsICdTdGF3a2EgVkFUJywgJ1N1bWEnLCAnUHVua3Qgc3ByemVkYcW8eSddKVxuXHRcdGNvbnN0IGhlYWRlclJvdyA9IHdvcmtzaGVldC5nZXRSb3coMSlcblx0XHRoZWFkZXJSb3cuZWFjaENlbGwoY2VsbCA9PiB7XG5cdFx0XHRjZWxsLmZpbGwgPSBoZWFkZXJDZWxsU3R5bGUuZmlsbCBhcyBFeGNlbEpTLkZpbGxQYXR0ZXJuXG5cdFx0XHRjZWxsLmZvbnQgPSBoZWFkZXJDZWxsU3R5bGUuZm9udFxuXHRcdFx0Y2VsbC5hbGlnbm1lbnQgPSBoZWFkZXJDZWxsU3R5bGUuYWxpZ25tZW50XG5cdFx0fSlcblxuXHRcdC8vIERvZGF3YW5pZSBkYW55Y2hcblx0XHRmaWx0ZXJlZFRyYWRlcy5mb3JFYWNoKCh0cmFkZSwgaW5kZXgpID0+IHtcblx0XHRcdGNvbnN0IHJvd0RhdGEgPSBbXG5cdFx0XHRcdChpbmRleCArIDEpLnRvU3RyaW5nKCksXG5cdFx0XHRcdGZvcm1hdERhdGUodHJhZGUuZGF0ZSksXG5cdFx0XHRcdGdldENsYXNzTGFiZWwodHJhZGUuY2xhcyksXG5cdFx0XHRcdGdldENvbG9yTGFiZWwodHJhZGUuY29sb3IpLFxuXHRcdFx0XHR0cmFkZS5wcmljZS50b1N0cmluZygpLFxuXHRcdFx0XHR0cmFkZS53ZWlnaHQudG9TdHJpbmcoKSxcblx0XHRcdFx0dHJhZGUudmF0UmF0ZS50b1N0cmluZygpLFxuXHRcdFx0XHR0cmFkZS50b3RhbFN1bS50b1N0cmluZygpLFxuXHRcdFx0XHR0cmFkZS5wb2ludE9mU2FsZUlkLFxuXHRcdFx0XVxuXHRcdFx0d29ya3NoZWV0LmFkZFJvdyhyb3dEYXRhKVxuXHRcdH0pXG5cblx0XHQvLyBBdXRvIGRvcGFzb3dhbmllIHN6ZXJva2/Fm2NpIGtvbHVtblxuXHRcdHdvcmtzaGVldC5jb2x1bW5zLmZvckVhY2goY29sdW1uID0+IHtcblx0XHRcdGNvbHVtbi53aWR0aCA9IDI1XG5cdFx0fSlcblxuXHRcdC8vIEdlbmVyb3dhbmllIHBsaWt1IFhMU1hcblx0XHR3b3JrYm9vay54bHN4LndyaXRlQnVmZmVyKCkudGhlbihidWZmZXIgPT4ge1xuXHRcdFx0Y29uc3QgYmxvYiA9IG5ldyBCbG9iKFtidWZmZXJdLCB7IHR5cGU6ICdhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQuc3ByZWFkc2hlZXRtbC5zaGVldCcgfSlcblx0XHRcdGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYilcblx0XHRcdGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcblx0XHRcdGxpbmsuaHJlZiA9IHVybFxuXHRcdFx0bGluay5kb3dubG9hZCA9ICd0cmFuc2FrY2plX3BhcHJ5a2kueGxzeCdcblx0XHRcdGxpbmsuY2xpY2soKVxuXHRcdH0pXG5cdH1cblxuXHRpZiAobG9hZGluZykge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9J2NvbnRhaW5lciBweS0yMCc+XG5cdFx0XHRcdDxwIGNsYXNzTmFtZT0nbXQtMTAgdGV4dC1ibGFjayB0ZXh0LWNlbnRlcic+V2N6eXR5d2FuaWUgZGFueWNoLi4uPC9wPlxuXHRcdFx0PC9zZWN0aW9uPlxuXHRcdClcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PHNlY3Rpb24gY2xhc3NOYW1lPSdjb250YWluZXIgcHktMjAnPlxuXHRcdFx0PFNlY3Rpb25UaXRsZSB0aXRsZT0nTW9qZSB0cmFuc2FrY2plIHNwcnplZGHFvHkgcGFwcnlraScgLz5cblx0XHRcdHtzaG93RmlsdGVycyA/IChcblx0XHRcdFx0PFRyYWRlT2ZQZXBwZXJGaWx0ZXJJdGVtIGhhbmRsZUZpbHRlcj17aGFuZGxlRmlsdGVyfSBoYW5kbGVDYW5jZWw9e2hhbmRsZUhpZGVGaWx0ZXJzfSAvPlxuXHRcdFx0KSA6IChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cganVzdGlmeS1lbmQnPlxuXHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0ncHgtMiBweS0xIG1yLTMgcm91bmRlZCBmb250LXNlbWlib2xkIGJnLW1haW5Db2xvciBob3ZlcjpiZy1ncmVlbi04MDAgdHJhbnNpdGlvbi1jb2xvcnMnXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXtleHBvcnRUb1hMU30+XG5cdFx0XHRcdFx0XHRFa3Nwb3J0IGRvIFhMU1xuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0ncHgtMiBweS0xIHJvdW5kZWQgZm9udC1zZW1pYm9sZCBiZy1tYWluQ29sb3IgaG92ZXI6YmctZ3JlZW4tODAwIHRyYW5zaXRpb24tY29sb3JzJ1xuXHRcdFx0XHRcdFx0b25DbGljaz17aGFuZGxlU2hvd0ZpbHRlcnN9PlxuXHRcdFx0XHRcdFx0WmFzdG9zdWogZmlsdHJ5XG5cdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KX1cblx0XHRcdHtmaWx0ZXJlZFRyYWRlcy5sZW5ndGggPiAwID8gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nb3ZlcmZsb3cteC1hdXRvIHJpbmctMSByaW5nLWJsYWNrIG10LTUnPlxuXHRcdFx0XHRcdDxUcmFkZU9mUGVwcGVyVGFibGVIZWFkZXIgLz5cblx0XHRcdFx0XHR7ZmlsdGVyZWRUcmFkZXMubGVuZ3RoID4gMFxuXHRcdFx0XHRcdFx0PyBmaWx0ZXJlZFRyYWRlcy5tYXAoKHRyYWRlLCBpbmRleCkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdDxUcmFkZU9mUGVwcGVySXRlbVxuXHRcdFx0XHRcdFx0XHRcdFx0a2V5PXt0cmFkZS5faWR9XG5cdFx0XHRcdFx0XHRcdFx0XHRpbmRleD17aW5kZXggKyAxfVxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0ZT17Zm9ybWF0RGF0ZSh0cmFkZS5kYXRlKX1cblx0XHRcdFx0XHRcdFx0XHRcdGNsYXM9e2dldENsYXNzTGFiZWwodHJhZGUuY2xhcyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRjb2xvcj17Z2V0Q29sb3JMYWJlbCh0cmFkZS5jb2xvcil9XG5cdFx0XHRcdFx0XHRcdFx0XHRwcmljZT17dHJhZGUucHJpY2V9XG5cdFx0XHRcdFx0XHRcdFx0XHR3ZWlnaHQ9e3RyYWRlLndlaWdodH1cblx0XHRcdFx0XHRcdFx0XHRcdHZhdFJhdGU9e3RyYWRlLnZhdFJhdGV9XG5cdFx0XHRcdFx0XHRcdFx0XHR0b3RhbFN1bT17dHJhZGUudG90YWxTdW19XG5cdFx0XHRcdFx0XHRcdFx0XHRwb2ludE9mU2FsZT17dHJhZGUucG9pbnRPZlNhbGVJZH1cblx0XHRcdFx0XHRcdFx0XHRcdGhhbmRsZURlbGV0ZT17KCkgPT4gaGFuZGxlRGVsZXRlKHRyYWRlKX1cblx0XHRcdFx0XHRcdFx0XHRcdGhhbmRsZUVkaXQ9eygpID0+IGhhbmRsZUVkaXQodHJhZGUpfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQgICkpXG5cdFx0XHRcdFx0XHQ6ICcnfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCkgOiAoXG5cdFx0XHRcdDxwIGNsYXNzTmFtZT0nbXQtMTAgdGV4dC1ibGFjayB0ZXh0LWNlbnRlcic+QnJhayB0cmFuc2FrY2ppIHNwcnplZGHFvHkgcGFwcnlraTwvcD5cblx0XHRcdCl9XG5cdFx0PC9zZWN0aW9uPlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyYWRlc09mUGVwcGVyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VTZXNzaW9uIiwidXNlUm91dGVyIiwiUmVhY3QiLCJTZWN0aW9uVGl0bGUiLCJUcmFkZU9mUGVwcGVyVGFibGVIZWFkZXIiLCJUcmFkZU9mUGVwcGVySXRlbSIsIlRyYWRlT2ZQZXBwZXJGaWx0ZXJJdGVtIiwiRXhjZWxKUyIsIlRyYWRlc09mUGVwcGVyIiwiYWxsVHJhZGVzIiwic2V0QWxsVHJhZGVzIiwiZmlsdGVyZWRUcmFkZXMiLCJzZXRGaWx0ZXJlZFRyYWRlcyIsInNob3dGaWx0ZXJzIiwic2V0U2hvd0ZpbHRlcnMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJvdXRlciIsImRhdGEiLCJzZXNzaW9uIiwidXNlcklkIiwidXNlciIsImlkIiwiaGFuZGxlU2hvd0ZpbHRlcnMiLCJoYW5kbGVIaWRlRmlsdGVycyIsImhhbmRsZUZpbHRlciIsImZpbHRlcnMiLCJkYXRlIiwiY2xhcyIsImNvbG9yIiwicG9pbnRPZlNhbGUiLCJmaWx0ZXJlZEl0ZW1zIiwiZmlsdGVyIiwidHJhZGUiLCJtYXRjaGVzRmlsdGVyIiwiZm9ybWF0RGF0ZSIsInBvaW50T2ZTYWxlSWQiLCJkYXRlU3RyaW5nIiwiRGF0ZSIsImRheSIsImdldERhdGUiLCJtb250aCIsImdldE1vbnRoIiwieWVhciIsImdldEZ1bGxZZWFyIiwiZ2V0Q2xhc3NMYWJlbCIsImluZGV4IiwidG9TdHJpbmciLCJnZXRDb2xvckxhYmVsIiwiaGFuZGxlRGVsZXRlIiwiZmV0Y2giLCJfaWQiLCJtZXRob2QiLCJpdGVtIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlRWRpdCIsInB1c2giLCJmZXRjaFRyYWRlc09mUGVwcGVyIiwicmVzcG9uc2UiLCJqc29uIiwiY3JlYXRvciIsImV4cG9ydFRvWExTIiwid29ya2Jvb2siLCJXb3JrYm9vayIsIndvcmtzaGVldCIsImFkZFdvcmtzaGVldCIsImhlYWRlckNlbGxTdHlsZSIsImZvbnQiLCJib2xkIiwiYXJnYiIsImZpbGwiLCJ0eXBlIiwicGF0dGVybiIsImZnQ29sb3IiLCJhbGlnbm1lbnQiLCJob3Jpem9udGFsIiwiYWRkUm93IiwiaGVhZGVyUm93IiwiZ2V0Um93IiwiZWFjaENlbGwiLCJjZWxsIiwiZm9yRWFjaCIsInJvd0RhdGEiLCJwcmljZSIsIndlaWdodCIsInZhdFJhdGUiLCJ0b3RhbFN1bSIsImNvbHVtbnMiLCJjb2x1bW4iLCJ3aWR0aCIsInhsc3giLCJ3cml0ZUJ1ZmZlciIsInRoZW4iLCJidWZmZXIiLCJibG9iIiwiQmxvYiIsInVybCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImxpbmsiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJocmVmIiwiZG93bmxvYWQiLCJjbGljayIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJwIiwidGl0bGUiLCJoYW5kbGVDYW5jZWwiLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIiwibGVuZ3RoIiwibWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/trades-of-pepper/page.tsx\n"));

/***/ })

});