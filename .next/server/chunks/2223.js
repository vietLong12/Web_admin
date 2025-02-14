exports.id = 2223;
exports.ids = [2223];
exports.modules = {

/***/ 89776:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 75000))

/***/ }),

/***/ 55453:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SimpleLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(3483);
;// CONCATENATED MODULE: ./layout/AppConfig.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`D:\Work\Coffee_web\COFFEE_WEB_ADMIN\layout\AppConfig.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const AppConfig = (__default__);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(29312);
;// CONCATENATED MODULE: ./app/(full-page)/layout.tsx



const metadata = {
    title: "Monster Coffee",
    description: "The ultimate collection of design-agnostic, flexible and accessible React UI Components."
};
function SimpleLayout({ children }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_shared_subset.Fragment, {
        children: [
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(AppConfig, {
                simple: true
            })
        ]
    });
}


/***/ })

};
;