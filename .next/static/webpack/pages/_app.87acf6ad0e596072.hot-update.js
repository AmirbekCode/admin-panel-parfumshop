"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/navigation/vertical/index.js":
/*!******************************************!*\
  !*** ./src/navigation/vertical/index.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mdi_material_ui_Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mdi-material-ui/Login */ \"./node_modules/mdi-material-ui/Login.js\");\n/* harmony import */ var mdi_material_ui_Table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mdi-material-ui/Table */ \"./node_modules/mdi-material-ui/Table.js\");\n/* harmony import */ var mdi_material_ui_CubeOutline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mdi-material-ui/CubeOutline */ \"./node_modules/mdi-material-ui/CubeOutline.js\");\n/* harmony import */ var mdi_material_ui_HomeOutline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mdi-material-ui/HomeOutline */ \"./node_modules/mdi-material-ui/HomeOutline.js\");\n/* harmony import */ var mdi_material_ui_FormatLetterCase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mdi-material-ui/FormatLetterCase */ \"./node_modules/mdi-material-ui/FormatLetterCase.js\");\n/* harmony import */ var mdi_material_ui_AccountCogOutline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mdi-material-ui/AccountCogOutline */ \"./node_modules/mdi-material-ui/AccountCogOutline.js\");\n/* harmony import */ var mdi_material_ui_CreditCardOutline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mdi-material-ui/CreditCardOutline */ \"./node_modules/mdi-material-ui/CreditCardOutline.js\");\n/* harmony import */ var mdi_material_ui_AccountPlusOutline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mdi-material-ui/AccountPlusOutline */ \"./node_modules/mdi-material-ui/AccountPlusOutline.js\");\n/* harmony import */ var mdi_material_ui_AlertCircleOutline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mdi-material-ui/AlertCircleOutline */ \"./node_modules/mdi-material-ui/AlertCircleOutline.js\");\n/* harmony import */ var mdi_material_ui_GoogleCirclesExtended__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mdi-material-ui/GoogleCirclesExtended */ \"./node_modules/mdi-material-ui/GoogleCirclesExtended.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n// ** Icon imports\n\n\n\n\n\n\n\n\n\n\nvar navigation = function() {\n    return [\n        {\n            title: 'Dashboard',\n            icon: mdi_material_ui_HomeOutline__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n            path: '/'\n        },\n        {\n            title: 'Account Sozlamasi',\n            icon: mdi_material_ui_AccountCogOutline__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n            path: '/account-settings'\n        },\n        {\n            sectionTitle: 'Pages'\n        },\n        {\n            title: 'Login',\n            icon: mdi_material_ui_Login__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n            path: '/pages/login',\n            openInNewTab: true\n        },\n        {\n            title: 'Registratsiya',\n            icon: mdi_material_ui_AccountPlusOutline__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n            path: '/pages/register',\n            openInNewTab: true\n        },\n        {\n            title: 'Error',\n            icon: mdi_material_ui_AlertCircleOutline__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n            path: '/pages/error',\n            openInNewTab: true\n        },\n        {\n            sectionTitle: 'User Interface'\n        },\n        {\n            title: 'Typography',\n            icon: mdi_material_ui_FormatLetterCase__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n            path: '/typography'\n        },\n        {\n            title: 'Icons',\n            path: '/icons',\n            icon: mdi_material_ui_GoogleCirclesExtended__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n        },\n        {\n            title: 'Cards',\n            icon: mdi_material_ui_CreditCardOutline__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n            path: '/cards'\n        },\n        {\n            title: 'Tables',\n            icon: mdi_material_ui_Table__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n            path: '/tables'\n        },\n        {\n            icon: mdi_material_ui_CubeOutline__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n            title: 'Form Layouts',\n            path: '/form-layouts'\n        }\n    ];\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (navigation);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbmF2aWdhdGlvbi92ZXJ0aWNhbC9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxFQUFrQjtBQUN1QjtBQUNBO0FBQ1k7QUFDQTtBQUNVO0FBQ0U7QUFDQTtBQUNFO0FBQ0E7QUFDTTtBQUV6RSxHQUFLLENBQUNVLFVBQVUsR0FBRyxRQUNuQixHQUR5QixDQUFDO0lBQ3hCLE1BQU0sQ0FBQyxDQUFDO1FBQ04sQ0FBQztZQUNDQyxLQUFLLEVBQUUsQ0FBVztZQUNsQkMsSUFBSSxFQUFFVCxtRUFBVztZQUNqQlUsSUFBSSxFQUFFLENBQUc7UUFDWCxDQUFDO1FBQ0QsQ0FBQztZQUNDRixLQUFLLEVBQUUsQ0FBbUI7WUFDMUJDLElBQUksRUFBRVAseUVBQWlCO1lBQ3ZCUSxJQUFJLEVBQUUsQ0FBbUI7UUFDM0IsQ0FBQztRQUVELENBQUM7WUFDQ0MsWUFBWSxFQUFFLENBQU87UUFDdkIsQ0FBQztRQUNELENBQUM7WUFDQ0gsS0FBSyxFQUFFLENBQU87WUFDZEMsSUFBSSxFQUFFWiw2REFBSztZQUNYYSxJQUFJLEVBQUUsQ0FBYztZQUNwQkUsWUFBWSxFQUFFLElBQUk7UUFDcEIsQ0FBQztRQUNELENBQUM7WUFDQ0osS0FBSyxFQUFFLENBQWU7WUFDdEJDLElBQUksRUFBRUwsMEVBQWtCO1lBQ3hCTSxJQUFJLEVBQUUsQ0FBaUI7WUFDdkJFLFlBQVksRUFBRSxJQUFJO1FBQ3BCLENBQUM7UUFDRCxDQUFDO1lBQ0NKLEtBQUssRUFBRSxDQUFPO1lBQ2RDLElBQUksRUFBRUosMEVBQWtCO1lBQ3hCSyxJQUFJLEVBQUUsQ0FBYztZQUNwQkUsWUFBWSxFQUFFLElBQUk7UUFDcEIsQ0FBQztRQUNELENBQUM7WUFDQ0QsWUFBWSxFQUFFLENBQWdCO1FBQ2hDLENBQUM7UUFDRCxDQUFDO1lBQ0NILEtBQUssRUFBRSxDQUFZO1lBQ25CQyxJQUFJLEVBQUVSLHdFQUFnQjtZQUN0QlMsSUFBSSxFQUFFLENBQWE7UUFDckIsQ0FBQztRQUNELENBQUM7WUFDQ0YsS0FBSyxFQUFFLENBQU87WUFDZEUsSUFBSSxFQUFFLENBQVE7WUFDZEQsSUFBSSxFQUFFSCw2RUFBcUI7UUFDN0IsQ0FBQztRQUNELENBQUM7WUFDQ0UsS0FBSyxFQUFFLENBQU87WUFDZEMsSUFBSSxFQUFFTix5RUFBaUI7WUFDdkJPLElBQUksRUFBRSxDQUFRO1FBQ2hCLENBQUM7UUFDRCxDQUFDO1lBQ0NGLEtBQUssRUFBRSxDQUFRO1lBQ2ZDLElBQUksRUFBRVgsNkRBQUs7WUFDWFksSUFBSSxFQUFFLENBQVM7UUFDakIsQ0FBQztRQUNELENBQUM7WUFDQ0QsSUFBSSxFQUFFVixtRUFBVztZQUNqQlMsS0FBSyxFQUFFLENBQWM7WUFDckJFLElBQUksRUFBRSxDQUFlO1FBQ3ZCLENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQztBQUVELCtEQUFlSCxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9uYXZpZ2F0aW9uL3ZlcnRpY2FsL2luZGV4LmpzP2ZlMWIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gKiogSWNvbiBpbXBvcnRzXG5pbXBvcnQgTG9naW4gZnJvbSAnbWRpLW1hdGVyaWFsLXVpL0xvZ2luJ1xuaW1wb3J0IFRhYmxlIGZyb20gJ21kaS1tYXRlcmlhbC11aS9UYWJsZSdcbmltcG9ydCBDdWJlT3V0bGluZSBmcm9tICdtZGktbWF0ZXJpYWwtdWkvQ3ViZU91dGxpbmUnXG5pbXBvcnQgSG9tZU91dGxpbmUgZnJvbSAnbWRpLW1hdGVyaWFsLXVpL0hvbWVPdXRsaW5lJ1xuaW1wb3J0IEZvcm1hdExldHRlckNhc2UgZnJvbSAnbWRpLW1hdGVyaWFsLXVpL0Zvcm1hdExldHRlckNhc2UnXG5pbXBvcnQgQWNjb3VudENvZ091dGxpbmUgZnJvbSAnbWRpLW1hdGVyaWFsLXVpL0FjY291bnRDb2dPdXRsaW5lJ1xuaW1wb3J0IENyZWRpdENhcmRPdXRsaW5lIGZyb20gJ21kaS1tYXRlcmlhbC11aS9DcmVkaXRDYXJkT3V0bGluZSdcbmltcG9ydCBBY2NvdW50UGx1c091dGxpbmUgZnJvbSAnbWRpLW1hdGVyaWFsLXVpL0FjY291bnRQbHVzT3V0bGluZSdcbmltcG9ydCBBbGVydENpcmNsZU91dGxpbmUgZnJvbSAnbWRpLW1hdGVyaWFsLXVpL0FsZXJ0Q2lyY2xlT3V0bGluZSdcbmltcG9ydCBHb29nbGVDaXJjbGVzRXh0ZW5kZWQgZnJvbSAnbWRpLW1hdGVyaWFsLXVpL0dvb2dsZUNpcmNsZXNFeHRlbmRlZCdcblxuY29uc3QgbmF2aWdhdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICB0aXRsZTogJ0Rhc2hib2FyZCcsXG4gICAgICBpY29uOiBIb21lT3V0bGluZSxcbiAgICAgIHBhdGg6ICcvJ1xuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdBY2NvdW50IFNvemxhbWFzaScsXG4gICAgICBpY29uOiBBY2NvdW50Q29nT3V0bGluZSxcbiAgICAgIHBhdGg6ICcvYWNjb3VudC1zZXR0aW5ncydcbiAgICB9LFxuICAgIFxuICAgIHtcbiAgICAgIHNlY3Rpb25UaXRsZTogJ1BhZ2VzJ1xuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdMb2dpbicsXG4gICAgICBpY29uOiBMb2dpbixcbiAgICAgIHBhdGg6ICcvcGFnZXMvbG9naW4nLFxuICAgICAgb3BlbkluTmV3VGFiOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ1JlZ2lzdHJhdHNpeWEnLFxuICAgICAgaWNvbjogQWNjb3VudFBsdXNPdXRsaW5lLFxuICAgICAgcGF0aDogJy9wYWdlcy9yZWdpc3RlcicsXG4gICAgICBvcGVuSW5OZXdUYWI6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnRXJyb3InLFxuICAgICAgaWNvbjogQWxlcnRDaXJjbGVPdXRsaW5lLFxuICAgICAgcGF0aDogJy9wYWdlcy9lcnJvcicsXG4gICAgICBvcGVuSW5OZXdUYWI6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlY3Rpb25UaXRsZTogJ1VzZXIgSW50ZXJmYWNlJ1xuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdUeXBvZ3JhcGh5JyxcbiAgICAgIGljb246IEZvcm1hdExldHRlckNhc2UsXG4gICAgICBwYXRoOiAnL3R5cG9ncmFwaHknXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ0ljb25zJyxcbiAgICAgIHBhdGg6ICcvaWNvbnMnLFxuICAgICAgaWNvbjogR29vZ2xlQ2lyY2xlc0V4dGVuZGVkXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ0NhcmRzJyxcbiAgICAgIGljb246IENyZWRpdENhcmRPdXRsaW5lLFxuICAgICAgcGF0aDogJy9jYXJkcydcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnVGFibGVzJyxcbiAgICAgIGljb246IFRhYmxlLFxuICAgICAgcGF0aDogJy90YWJsZXMnXG4gICAgfSxcbiAgICB7XG4gICAgICBpY29uOiBDdWJlT3V0bGluZSxcbiAgICAgIHRpdGxlOiAnRm9ybSBMYXlvdXRzJyxcbiAgICAgIHBhdGg6ICcvZm9ybS1sYXlvdXRzJ1xuICAgIH1cbiAgXVxufVxuXG5leHBvcnQgZGVmYXVsdCBuYXZpZ2F0aW9uXG4iXSwibmFtZXMiOlsiTG9naW4iLCJUYWJsZSIsIkN1YmVPdXRsaW5lIiwiSG9tZU91dGxpbmUiLCJGb3JtYXRMZXR0ZXJDYXNlIiwiQWNjb3VudENvZ091dGxpbmUiLCJDcmVkaXRDYXJkT3V0bGluZSIsIkFjY291bnRQbHVzT3V0bGluZSIsIkFsZXJ0Q2lyY2xlT3V0bGluZSIsIkdvb2dsZUNpcmNsZXNFeHRlbmRlZCIsIm5hdmlnYXRpb24iLCJ0aXRsZSIsImljb24iLCJwYXRoIiwic2VjdGlvblRpdGxlIiwib3BlbkluTmV3VGFiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/navigation/vertical/index.js\n");

/***/ })

});