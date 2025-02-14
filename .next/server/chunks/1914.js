"use strict";
exports.id = 1914;
exports.ids = [1914];
exports.modules = {

/***/ 7720:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97270);
// axiosInterceptor.ts

const axiosInterceptor = (http)=>{
    http.interceptors.request.use((request)=>{
        const token = js_cookie__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get("tokenAdmin");
        if (token) {
            const tokenJson = JSON.parse(token);
            request.headers.setAccept("application/json");
            request.headers.setAuthorization("Bearer " + tokenJson.accessToken); // Thực hiện bất kỳ thay đổi nào bạn muốn vào config trước khi gửi request
        }
        return request;
    }, (error)=>{
        console.error("Request interceptor error:", error);
        return Promise.reject(error);
    }); // Thêm interceptor cho response
    http.interceptors.response.use((response)=>{
        // Thực hiện bất kỳ thay đổi nào bạn muốn vào response trước khi nó được trả về
        return response;
    }, (error)=>{
        console.error("Response interceptor error:", error);
        js_cookie__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.remove("tokenAdmin");
        window.location.assign("/auth/login");
        return Promise.reject(error);
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axiosInterceptor);


/***/ }),

/***/ 46:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ BASE_URL)
/* harmony export */ });
const BASE_URL = "https://coffeewebapi-production.up.railway.app";


/***/ })

};
;