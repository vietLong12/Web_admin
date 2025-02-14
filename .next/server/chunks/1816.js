"use strict";
exports.id = 1816;
exports.ids = [1816];
exports.modules = {

/***/ 41816:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ ProductService)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(113);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3679);
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46);
/* harmony import */ var _axiosInterceptors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7720);




const request = axios__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.create({
    baseURL: _type__WEBPACK_IMPORTED_MODULE_3__/* .BASE_URL */ ._
});
(0,_axiosInterceptors__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(request);
class ProductService {
    static async postCategory(category) {
        try {
            const response = await request.post(`/products/category`, {
                category: category
            });
            return response.data;
        } catch (error) {
            ProductService.handleApiError(error);
        }
    }
    static async getListProduct(q) {
        try {
            const { page = "", limit = "", keyword = "", depth = "3" } = q || {};
            const response = await request.get(`/products?page=${page}&limit=${limit}&keyword=${keyword}&depth=${depth}`);
            return response.data;
        } catch (error) {
            ProductService.handleApiError(error);
        }
    }
    static async postProduct(req) {
        try {
            const response = await request.post(`/products`, req);
            return response.data;
        } catch (error) {
            ProductService.handleApiError(error);
        }
    }
    static async getListCategory() {
        try {
            const response = await request.get("/products/category");
            return response.data;
        } catch (error) {
            ProductService.handleApiError(error);
        }
    }
    static async getProductById(_id) {
        try {
            const response = await request.get(`/products/${_id}`);
            return response.data;
        } catch (error) {
            ProductService.handleApiError(error);
        }
    }
    static async getListCommentById(_id) {
        try {
            const response = await request.get(`/products/rate/${_id}`);
            return response.data;
        } catch (error) {
            ProductService.handleApiError(error);
        }
    }
    static async postComment(reqBody) {
        try {
            const response = await request.post("/products/rate", reqBody);
            return response.data;
        } catch (error) {
            ProductService.handleApiError(error);
        }
    }
    static async deleteProduct(productId) {
        try {
            const response = await request.delete(`/products/${productId}`);
            return response.data;
        } catch (error) {
            ProductService.handleApiError(error);
        }
    }
    static async putProduct(reqBody) {
        try {
            const response = await request.put("/products", reqBody);
            return response.data;
        } catch (error) {
            ProductService.handleApiError(error);
        }
    }
    static handleApiError(error) {
        console.log("error: ", error.response.data.message);
        if (error.response.data.message === "Category is exits") {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                icon: "warning",
                title: "Bad Request",
                text: "T\xean ph\xe2n loại đ\xe3 tồn tại vui l\xf2ng kiểm tra lại"
            });
        } else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                icon: "warning",
                title: "Bad Request",
                text: error.message === "Request failed with status code 400" ? "Y\xeau cầu kh\xf4ng hợp lệ" : error.message
            });
        }
    }
}


/***/ })

};
;