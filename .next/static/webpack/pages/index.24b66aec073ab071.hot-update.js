"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/views/dashboard/DepositWithdraw.js":
/*!************************************************!*\
  !*** ./src/views/dashboard/DepositWithdraw.js ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/styles/index.js\");\n/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Divider */ \"./node_modules/@mui/material/Divider/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n// ** MUI Imports\n\n\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nvar withdrawData = [\n    {\n        logoWidth: 29,\n        logoHeight: 30,\n        amount: '-$145',\n        title: 'Google Adsense',\n        subtitle: 'Paypal deposit',\n        logo: '/images/logos/google.png'\n    },\n    {\n        logoWidth: 34,\n        logoHeight: 34,\n        amount: '-$1870',\n        title: 'Github Enterprise',\n        logo: '/images/logos/github.png',\n        subtitle: 'Security & compliance'\n    },\n    {\n        logoWidth: 30,\n        logoHeight: 30,\n        amount: '-$450',\n        title: 'Upgrade Slack Plan',\n        subtitle: 'Debit card deposit',\n        logo: '/images/logos/slack.png'\n    },\n    {\n        logoWidth: 30,\n        logoHeight: 30,\n        amount: '-$540',\n        title: 'Digital Ocean',\n        subtitle: 'Cloud Hosting',\n        logo: '/images/logos/digital-ocean.png'\n    },\n    {\n        logoWidth: 36,\n        logoHeight: 21,\n        amount: '-$21',\n        title: 'AWS Account',\n        logo: '/images/logos/aws.png',\n        subtitle: 'Choosing a Cloud Platform'\n    }\n];\n// Styled Divider component\nvar Divider = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.styled)(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(function(param) {\n    var theme = param.theme;\n    return _defineProperty({\n        margin: theme.spacing(5, 0),\n        borderRight: \"1px solid \".concat(theme.palette.divider)\n    }, theme.breakpoints.down('md'), {\n        borderRight: 'none',\n        margin: theme.spacing(0, 5),\n        borderBottom: \"1px solid \".concat(theme.palette.divider)\n    });\n});\nvar DepositWithdraw = function() {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    }));\n};\n_c = DepositWithdraw;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DepositWithdraw);\nvar _c;\n$RefreshReg$(_c, \"DepositWithdraw\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdmlld3MvZGFzaGJvYXJkL0RlcG9zaXRXaXRoZHJhdy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsRUFBaUI7QUFDa0I7QUFDRTtBQUNRO0FBQ0k7QUFDQTtBQUNFO0FBQ0w7Ozs7Ozs7Ozs7Ozs7O0FBSTlDLEdBQUssQ0FBQ08sWUFBWSxHQUFHLENBQUM7SUFDcEIsQ0FBQztRQUNDQyxTQUFTLEVBQUUsRUFBRTtRQUNiQyxVQUFVLEVBQUUsRUFBRTtRQUNkQyxNQUFNLEVBQUUsQ0FBTztRQUNmQyxLQUFLLEVBQUUsQ0FBZ0I7UUFDdkJDLFFBQVEsRUFBRSxDQUFnQjtRQUMxQkMsSUFBSSxFQUFFLENBQTBCO0lBQ2xDLENBQUM7SUFDRCxDQUFDO1FBQ0NMLFNBQVMsRUFBRSxFQUFFO1FBQ2JDLFVBQVUsRUFBRSxFQUFFO1FBQ2RDLE1BQU0sRUFBRSxDQUFRO1FBQ2hCQyxLQUFLLEVBQUUsQ0FBbUI7UUFDMUJFLElBQUksRUFBRSxDQUEwQjtRQUNoQ0QsUUFBUSxFQUFFLENBQXVCO0lBQ25DLENBQUM7SUFDRCxDQUFDO1FBQ0NKLFNBQVMsRUFBRSxFQUFFO1FBQ2JDLFVBQVUsRUFBRSxFQUFFO1FBQ2RDLE1BQU0sRUFBRSxDQUFPO1FBQ2ZDLEtBQUssRUFBRSxDQUFvQjtRQUMzQkMsUUFBUSxFQUFFLENBQW9CO1FBQzlCQyxJQUFJLEVBQUUsQ0FBeUI7SUFDakMsQ0FBQztJQUNELENBQUM7UUFDQ0wsU0FBUyxFQUFFLEVBQUU7UUFDYkMsVUFBVSxFQUFFLEVBQUU7UUFDZEMsTUFBTSxFQUFFLENBQU87UUFDZkMsS0FBSyxFQUFFLENBQWU7UUFDdEJDLFFBQVEsRUFBRSxDQUFlO1FBQ3pCQyxJQUFJLEVBQUUsQ0FBaUM7SUFDekMsQ0FBQztJQUNELENBQUM7UUFDQ0wsU0FBUyxFQUFFLEVBQUU7UUFDYkMsVUFBVSxFQUFFLEVBQUU7UUFDZEMsTUFBTSxFQUFFLENBQU07UUFDZEMsS0FBSyxFQUFFLENBQWE7UUFDcEJFLElBQUksRUFBRSxDQUF1QjtRQUM3QkQsUUFBUSxFQUFFLENBQTJCO0lBQ3ZDLENBQUM7QUFDSCxDQUFDO0FBRUQsRUFBMkI7QUFDM0IsR0FBSyxDQUFDRSxPQUFPLEdBQUdaLDREQUFNLENBQUNJLDZEQUFVLEVBQUUsUUFBUTtRQUFMUyxLQUFLLFNBQUxBLEtBQUs7SUFBTyxNQUMvQztRQUFEQyxNQUFNLEVBQUVELEtBQUssQ0FBQ0UsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzFCQyxXQUFXLEVBQUcsQ0FBVSxZQUF3QixPQUF0QkgsS0FBSyxDQUFDSSxPQUFPLENBQUNDLE9BQU87T0FDOUNMLEtBQUssQ0FBQ00sV0FBVyxDQUFDQyxJQUFJLENBQUMsQ0FBSSxNQUFJLENBQUM7UUFDL0JKLFdBQVcsRUFBRSxDQUFNO1FBQ25CRixNQUFNLEVBQUVELEtBQUssQ0FBQ0UsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzFCTSxZQUFZLEVBQUcsQ0FBVSxZQUF3QixPQUF0QlIsS0FBSyxDQUFDSSxPQUFPLENBQUNDLE9BQU87SUFDbEQsQ0FBQzs7QUFHSCxHQUFLLENBQUNJLGVBQWUsR0FBRyxRQUN4QixHQUQ4QixDQUFDO0lBQzdCLE1BQU07O0FBR1IsQ0FBQztLQUpLQSxlQUFlO0FBTXJCLCtEQUFlQSxlQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy92aWV3cy9kYXNoYm9hcmQvRGVwb3NpdFdpdGhkcmF3LmpzPzRmYTIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gKiogTVVJIEltcG9ydHNcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnXG5pbXBvcnQgQ2FyZCBmcm9tICdAbXVpL21hdGVyaWFsL0NhcmQnXG5pbXBvcnQgeyBzdHlsZWQgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcydcbmltcG9ydCBDYXJkSGVhZGVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ2FyZEhlYWRlcidcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeSdcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbXVpL21hdGVyaWFsL0NhcmRDb250ZW50J1xuaW1wb3J0IE11aURpdmlkZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9EaXZpZGVyJ1xuXG5cblxuY29uc3Qgd2l0aGRyYXdEYXRhID0gW1xuICB7XG4gICAgbG9nb1dpZHRoOiAyOSxcbiAgICBsb2dvSGVpZ2h0OiAzMCxcbiAgICBhbW91bnQ6ICctJDE0NScsXG4gICAgdGl0bGU6ICdHb29nbGUgQWRzZW5zZScsXG4gICAgc3VidGl0bGU6ICdQYXlwYWwgZGVwb3NpdCcsXG4gICAgbG9nbzogJy9pbWFnZXMvbG9nb3MvZ29vZ2xlLnBuZydcbiAgfSxcbiAge1xuICAgIGxvZ29XaWR0aDogMzQsXG4gICAgbG9nb0hlaWdodDogMzQsXG4gICAgYW1vdW50OiAnLSQxODcwJyxcbiAgICB0aXRsZTogJ0dpdGh1YiBFbnRlcnByaXNlJyxcbiAgICBsb2dvOiAnL2ltYWdlcy9sb2dvcy9naXRodWIucG5nJyxcbiAgICBzdWJ0aXRsZTogJ1NlY3VyaXR5ICYgY29tcGxpYW5jZSdcbiAgfSxcbiAge1xuICAgIGxvZ29XaWR0aDogMzAsXG4gICAgbG9nb0hlaWdodDogMzAsXG4gICAgYW1vdW50OiAnLSQ0NTAnLFxuICAgIHRpdGxlOiAnVXBncmFkZSBTbGFjayBQbGFuJyxcbiAgICBzdWJ0aXRsZTogJ0RlYml0IGNhcmQgZGVwb3NpdCcsXG4gICAgbG9nbzogJy9pbWFnZXMvbG9nb3Mvc2xhY2sucG5nJ1xuICB9LFxuICB7XG4gICAgbG9nb1dpZHRoOiAzMCxcbiAgICBsb2dvSGVpZ2h0OiAzMCxcbiAgICBhbW91bnQ6ICctJDU0MCcsXG4gICAgdGl0bGU6ICdEaWdpdGFsIE9jZWFuJyxcbiAgICBzdWJ0aXRsZTogJ0Nsb3VkIEhvc3RpbmcnLFxuICAgIGxvZ286ICcvaW1hZ2VzL2xvZ29zL2RpZ2l0YWwtb2NlYW4ucG5nJ1xuICB9LFxuICB7XG4gICAgbG9nb1dpZHRoOiAzNixcbiAgICBsb2dvSGVpZ2h0OiAyMSxcbiAgICBhbW91bnQ6ICctJDIxJyxcbiAgICB0aXRsZTogJ0FXUyBBY2NvdW50JyxcbiAgICBsb2dvOiAnL2ltYWdlcy9sb2dvcy9hd3MucG5nJyxcbiAgICBzdWJ0aXRsZTogJ0Nob29zaW5nIGEgQ2xvdWQgUGxhdGZvcm0nXG4gIH1cbl1cblxuLy8gU3R5bGVkIERpdmlkZXIgY29tcG9uZW50XG5jb25zdCBEaXZpZGVyID0gc3R5bGVkKE11aURpdmlkZXIpKCh7IHRoZW1lIH0pID0+ICh7XG4gIG1hcmdpbjogdGhlbWUuc3BhY2luZyg1LCAwKSxcbiAgYm9yZGVyUmlnaHQ6IGAxcHggc29saWQgJHt0aGVtZS5wYWxldHRlLmRpdmlkZXJ9YCxcbiAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ21kJyldOiB7XG4gICAgYm9yZGVyUmlnaHQ6ICdub25lJyxcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMCwgNSksXG4gICAgYm9yZGVyQm90dG9tOiBgMXB4IHNvbGlkICR7dGhlbWUucGFsZXR0ZS5kaXZpZGVyfWBcbiAgfVxufSkpXG5cbmNvbnN0IERlcG9zaXRXaXRoZHJhdyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PjwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERlcG9zaXRXaXRoZHJhd1xuIl0sIm5hbWVzIjpbIkJveCIsIkNhcmQiLCJzdHlsZWQiLCJDYXJkSGVhZGVyIiwiVHlwb2dyYXBoeSIsIkNhcmRDb250ZW50IiwiTXVpRGl2aWRlciIsIndpdGhkcmF3RGF0YSIsImxvZ29XaWR0aCIsImxvZ29IZWlnaHQiLCJhbW91bnQiLCJ0aXRsZSIsInN1YnRpdGxlIiwibG9nbyIsIkRpdmlkZXIiLCJ0aGVtZSIsIm1hcmdpbiIsInNwYWNpbmciLCJib3JkZXJSaWdodCIsInBhbGV0dGUiLCJkaXZpZGVyIiwiYnJlYWtwb2ludHMiLCJkb3duIiwiYm9yZGVyQm90dG9tIiwiRGVwb3NpdFdpdGhkcmF3Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/views/dashboard/DepositWithdraw.js\n");

/***/ })

});