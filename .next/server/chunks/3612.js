exports.id = 3612;
exports.ids = [3612];
exports.modules = {

/***/ 34721:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 23361))

/***/ }),

/***/ 50246:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 58037, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 31861, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 94777, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 13359, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 22401, 23))

/***/ }),

/***/ 23361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layout_context_layoutcontext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69270);
/* harmony import */ var primereact_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(90284);
/* harmony import */ var primereact_resources_primereact_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84732);
/* harmony import */ var primereact_resources_primereact_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primereact_resources_primereact_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primeflex_primeflex_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63468);
/* harmony import */ var primeflex_primeflex_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeflex_primeflex_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeicons_primeicons_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51091);
/* harmony import */ var primeicons_primeicons_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeicons_primeicons_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_layout_layout_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97993);
/* harmony import */ var _styles_layout_layout_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_layout_layout_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_demo_Demos_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63114);
/* harmony import */ var _styles_demo_Demos_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_demo_Demos_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _layout_context_authContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9418);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(97270);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3679);
/* __next_internal_client_entry_do_not_use__ default auto */ 











function RootLayout({ children }) {
    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{
        const timeout = setInterval(()=>{
            const token = js_cookie__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z.get("tokenAdmin");
            if (token) {
                let tokenJson = JSON.parse(token);
                axios__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.post("https://server-management-production.up.railway.app/token", {
                    refreshToken: tokenJson.refreshToken
                }).then((res)=>{
                    tokenJson = {
                        ...tokenJson,
                        refreshToken: res.data.refreshToken,
                        accessToken: res.data.accessToken
                    };
                    js_cookie__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z.set("tokenAdmin", JSON.stringify(tokenJson));
                });
            }
        }, 25000);
        return ()=>clearTimeout(timeout);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("html", {
        lang: "en",
        suppressHydrationWarning: true,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("head", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                    id: "theme-css",
                    href: `/themes/lara-light-indigo/theme.css`,
                    rel: "stylesheet"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("body", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_api__WEBPACK_IMPORTED_MODULE_11__.PrimeReactProvider, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_context_authContext__WEBPACK_IMPORTED_MODULE_7__/* .AuthProvider */ .H, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_context_layoutcontext__WEBPACK_IMPORTED_MODULE_1__/* .LayoutProvider */ .a, {
                            children: children
                        })
                    })
                })
            })
        ]
    });
}


/***/ }),

/***/ 75000:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var primereact_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90284);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18176);
/* harmony import */ var primereact_inputswitch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63579);
/* harmony import */ var primereact_radiobutton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23064);
/* harmony import */ var primereact_sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63862);
/* harmony import */ var primereact_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7666);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_layoutcontext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69270);
/* __next_internal_client_entry_do_not_use__ default auto */ 








const AppConfig = (props)=>{
    const [scales] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([
        12,
        13,
        14,
        15,
        16
    ]);
    const { layoutConfig, setLayoutConfig, layoutState, setLayoutState } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_layoutcontext__WEBPACK_IMPORTED_MODULE_2__/* .LayoutContext */ .V);
    const { setRipple, changeTheme } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(primereact_api__WEBPACK_IMPORTED_MODULE_3__.PrimeReactContext);
    const onConfigButtonClick = ()=>{
        setLayoutState((prevState)=>({
                ...prevState,
                configSidebarVisible: true
            }));
    };
    const onConfigSidebarHide = ()=>{
        setLayoutState((prevState)=>({
                ...prevState,
                configSidebarVisible: false
            }));
    };
    const changeInputStyle = (e)=>{
        setLayoutConfig((prevState)=>({
                ...prevState,
                inputStyle: e.value
            }));
    };
    const changeRipple = (e)=>{
        setRipple(e.value);
        setLayoutConfig((prevState)=>({
                ...prevState,
                ripple: e.value
            }));
    };
    const changeMenuMode = (e)=>{
        setLayoutConfig((prevState)=>({
                ...prevState,
                menuMode: e.value
            }));
    };
    const _changeTheme = (theme, colorScheme)=>{
        changeTheme?.(layoutConfig.theme, theme, "theme-css", ()=>{
            setLayoutConfig((prevState)=>({
                    ...prevState,
                    theme,
                    colorScheme
                }));
        });
    };
    const decrementScale = ()=>{
        setLayoutConfig((prevState)=>({
                ...prevState,
                scale: prevState.scale - 1
            }));
    };
    const incrementScale = ()=>{
        setLayoutConfig((prevState)=>({
                ...prevState,
                scale: prevState.scale + 1
            }));
    };
    const applyScale = ()=>{
        document.documentElement.style.fontSize = layoutConfig.scale + "px";
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        applyScale(); // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        layoutConfig.scale
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(primereact_sidebar__WEBPACK_IMPORTED_MODULE_4__/* .Sidebar */ .Y, {
            visible: layoutState.configSidebarVisible,
            onHide: onConfigSidebarHide,
            position: "right",
            className: "layout-config-sidebar w-20rem",
            children: [
                !props.simple && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                            children: "Scale"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex align-items-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_5__.Button, {
                                    icon: "pi pi-minus",
                                    type: "button",
                                    onClick: decrementScale,
                                    rounded: true,
                                    text: true,
                                    className: "w-2rem h-2rem mr-2",
                                    disabled: layoutConfig.scale === scales[0]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex gap-2 align-items-center",
                                    children: scales.map((item, index)=>{
                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: (0,primereact_utils__WEBPACK_IMPORTED_MODULE_6__.classNames)("pi pi-circle-fill", {
                                                "text-primary-500": item === layoutConfig.scale,
                                                "text-300": item !== layoutConfig.scale
                                            })
                                        }, index);
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_5__.Button, {
                                    icon: "pi pi-plus",
                                    type: "button",
                                    onClick: incrementScale,
                                    rounded: true,
                                    text: true,
                                    className: "w-2rem h-2rem ml-2",
                                    disabled: layoutConfig.scale === scales[scales.length - 1]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                            children: "Menu Type"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "field-radiobutton flex-1",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_radiobutton__WEBPACK_IMPORTED_MODULE_7__/* .RadioButton */ .E, {
                                            name: "menuMode",
                                            value: "static",
                                            checked: layoutConfig.menuMode === "static",
                                            onChange: (e)=>changeMenuMode(e),
                                            inputId: "mode1"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            htmlFor: "mode1",
                                            children: "Static"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "field-radiobutton flex-1",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_radiobutton__WEBPACK_IMPORTED_MODULE_7__/* .RadioButton */ .E, {
                                            name: "menuMode",
                                            value: "overlay",
                                            checked: layoutConfig.menuMode === "overlay",
                                            onChange: (e)=>changeMenuMode(e),
                                            inputId: "mode2"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            htmlFor: "mode2",
                                            children: "Overlay"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                            children: "Input Style"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "field-radiobutton flex-1",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_radiobutton__WEBPACK_IMPORTED_MODULE_7__/* .RadioButton */ .E, {
                                            name: "inputStyle",
                                            value: "outlined",
                                            checked: layoutConfig.inputStyle === "outlined",
                                            onChange: (e)=>changeInputStyle(e),
                                            inputId: "outlined_input"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            htmlFor: "outlined_input",
                                            children: "Outlined"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "field-radiobutton flex-1",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_radiobutton__WEBPACK_IMPORTED_MODULE_7__/* .RadioButton */ .E, {
                                            name: "inputStyle",
                                            value: "filled",
                                            checked: layoutConfig.inputStyle === "filled",
                                            onChange: (e)=>changeInputStyle(e),
                                            inputId: "filled_input"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            htmlFor: "filled_input",
                                            children: "Filled"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                            children: "Ripple Effect"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputswitch__WEBPACK_IMPORTED_MODULE_8__/* .InputSwitch */ .Q, {
                            checked: layoutConfig.ripple,
                            onChange: (e)=>changeRipple(e)
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                    children: "Bootstrap"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "grid",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "p-link w-2rem h-2rem",
                                onClick: ()=>_changeTheme("bootstrap4-light-blue", "light"),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/layout/images/themes/bootstrap4-light-blue.svg",
                                    className: "w-2rem h-2rem",
                                    alt: "Bootstrap Light Blue"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "p-link w-2rem h-2rem",
                                onClick: ()=>_changeTheme("bootstrap4-light-purple", "light"),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/layout/images/themes/bootstrap4-light-purple.svg",
                                    className: "w-2rem h-2rem",
                                    alt: "Bootstrap Light Purple"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "p-link w-2rem h-2rem",
                                onClick: ()=>_changeTheme("bootstrap4-dark-blue", "dark"),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/layout/images/themes/bootstrap4-dark-blue.svg",
                                    className: "w-2rem h-2rem",
                                    alt: "Bootstrap Dark Blue"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "p-link w-2rem h-2rem",
                                onClick: ()=>_changeTheme("bootstrap4-dark-purple", "dark"),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/layout/images/themes/bootstrap4-dark-purple.svg",
                                    className: "w-2rem h-2rem",
                                    alt: "Bootstrap Dark Purple"
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                    children: "Material Design"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "grid",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "p-link w-2rem h-2rem",
                                onClick: ()=>_changeTheme("md-light-indigo", "light"),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/layout/images/themes/md-light-indigo.svg",
                                    className: "w-2rem h-2rem",
                                    alt: "Material Light Indigo"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "p-link w-2rem h-2rem",
                                onClick: ()=>_changeTheme("md-light-deeppurple", "light"),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/layout/images/themes/md-light-deeppurple.svg",
                                    className: "w-2rem h-2rem",
                                    alt: "Material Light DeepPurple"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "p-link w-2rem h-2rem",
                                onClick: ()=>_changeTheme("md-dark-indigo", "dark"),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/layout/images/themes/md-dark-indigo.svg",
                                    className: "w-2rem h-2rem",
                                    alt: "Material Dark Indigo"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "p-link w-2rem h-2rem",
                                onClick: ()=>_changeTheme("md-dark-deeppurple", "dark"),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/layout/images/themes/md-dark-deeppurple.svg",
                                    className: "w-2rem h-2rem",
                                    alt: "Material Dark DeepPurple"
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                    children: "Material Design Compact"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "grid",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "p-link w-2rem h-2rem",
                                onClick: ()=>_changeTheme("mdc-light-indigo", "light"),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/layout/images/themes/md-light-indigo.svg",
                                    className: "w-2rem h-2rem",
                                    alt: "Material Light Indigo"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "p-link w-2rem h-2rem",
                                onClick: ()=>_changeTheme("mdc-light-deeppurple", "light"),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/layout/images/themes/md-light-deeppurple.svg",
                                    className: "w-2rem h-2rem",
                                    alt: "Material Light Deep Purple"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "p-link w-2rem h-2rem",
                                onClick: ()=>_changeTheme("mdc-dark-indigo", "dark"),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/layout/images/themes/md-dark-indigo.svg",
                                    className: "w-2rem h-2rem",
                                    alt: "Material Dark Indigo"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "p-link w-2rem h-2rem",
                                onClick: ()=>_changeTheme("mdc-dark-deeppurple", "dark"),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/layout/images/themes/md-dark-deeppurple.svg",
                                    className: "w-2rem h-2rem",
                                    alt: "Material Dark Deep Purple"
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                    children: "Tailwind"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "grid",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-3",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "p-link w-2rem h-2rem",
                            onClick: ()=>_changeTheme("tailwind-light", "light"),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "/layout/images/themes/tailwind-light.png",
                                className: "w-2rem h-2rem",
                                alt: "Tailwind Light"
                            })
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                    children: "Fluent UI"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "grid",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-3",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "p-link w-2rem h-2rem",
                            onClick: ()=>_changeTheme("fluent-light", "light"),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "/layout/images/themes/fluent-light.png",
                                className: "w-2rem h-2rem",
                                alt: "Fluent Light"
                            })
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                    children: "PrimeOne Design - 2022"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "grid",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "p-link w-2rem h-2rem",
                                onClick: ()=>_changeTheme("lara-light-indigo", "light"),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/layout/images/themes/lara-light-indigo.png",
                                    className: "w-2rem h-2rem",
                                    alt: "Lara Light Indigo"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "p-link w-2rem h-2rem",
                                onClick: ()=>_changeTheme("lara-light-blue", "light"),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/layout/images/themes/lara-light-blue.png",
                                    className: "w-2rem h-2rem",
                                    alt: "Lara Light Blue"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "p-link w-2rem h-2rem",
                                onClick: ()=>_changeTheme("lara-light-purple", "light"),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/layout/images/themes/lara-light-purple.png",
                                    className: "w-2rem h-2rem",
                                    alt: "Lara Light Purple"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "p-link w-2rem h-2rem",
                                onClick: ()=>_changeTheme("lara-light-teal", "light"),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/layout/images/themes/lara-light-teal.png",
                                    className: "w-2rem h-2rem",
                                    alt: "Lara Light Teal"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "p-link w-2rem h-2rem",
                                onClick: ()=>_changeTheme("lara-dark-indigo", "dark"),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/layout/images/themes/lara-dark-indigo.png",
                                    className: "w-2rem h-2rem",
                                    alt: "Lara Dark Indigo"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "p-link w-2rem h-2rem",
                                onClick: ()=>_changeTheme("lara-dark-blue", "dark"),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/layout/images/themes/lara-dark-blue.png",
                                    className: "w-2rem h-2rem",
                                    alt: "Lara Dark Blue"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "p-link w-2rem h-2rem",
                                onClick: ()=>_changeTheme("lara-dark-purple", "dark"),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/layout/images/themes/lara-dark-purple.png",
                                    className: "w-2rem h-2rem",
                                    alt: "Lara Dark Purple"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "p-link w-2rem h-2rem",
                                onClick: ()=>_changeTheme("lara-dark-teal", "dark"),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/layout/images/themes/lara-dark-teal.png",
                                    className: "w-2rem h-2rem",
                                    alt: "Lara Dark Teal"
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                    children: "PrimeOne Design - 2021"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "grid",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "p-link w-2rem h-2rem",
                                onClick: ()=>_changeTheme("saga-blue", "light"),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/layout/images/themes/saga-blue.png",
                                    className: "w-2rem h-2rem",
                                    alt: "Saga Blue"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "p-link w-2rem h-2rem",
                                onClick: ()=>_changeTheme("saga-green", "light"),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/layout/images/themes/saga-green.png",
                                    className: "w-2rem h-2rem",
                                    alt: "Saga Green"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "p-link w-2rem h-2rem",
                                onClick: ()=>_changeTheme("saga-orange", "light"),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/layout/images/themes/saga-orange.png",
                                    className: "w-2rem h-2rem",
                                    alt: "Saga Orange"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "p-link w-2rem h-2rem",
                                onClick: ()=>_changeTheme("saga-purple", "light"),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/layout/images/themes/saga-purple.png",
                                    className: "w-2rem h-2rem",
                                    alt: "Saga Purple"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "p-link w-2rem h-2rem",
                                onClick: ()=>_changeTheme("vela-blue", "dark"),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/layout/images/themes/vela-blue.png",
                                    className: "w-2rem h-2rem",
                                    alt: "Vela Blue"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "p-link w-2rem h-2rem",
                                onClick: ()=>_changeTheme("vela-green", "dark"),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/layout/images/themes/vela-green.png",
                                    className: "w-2rem h-2rem",
                                    alt: "Vela Green"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "p-link w-2rem h-2rem",
                                onClick: ()=>_changeTheme("vela-orange", "dark"),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/layout/images/themes/vela-orange.png",
                                    className: "w-2rem h-2rem",
                                    alt: "Vela Orange"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "p-link w-2rem h-2rem",
                                onClick: ()=>_changeTheme("vela-purple", "dark"),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/layout/images/themes/vela-purple.png",
                                    className: "w-2rem h-2rem",
                                    alt: "Vela Purple"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "p-link w-2rem h-2rem",
                                onClick: ()=>_changeTheme("arya-blue", "dark"),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/layout/images/themes/arya-blue.png",
                                    className: "w-2rem h-2rem",
                                    alt: "Arya Blue"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "p-link w-2rem h-2rem",
                                onClick: ()=>_changeTheme("arya-green", "dark"),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/layout/images/themes/arya-green.png",
                                    className: "w-2rem h-2rem",
                                    alt: "Arya Green"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "p-link w-2rem h-2rem",
                                onClick: ()=>_changeTheme("arya-orange", "dark"),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/layout/images/themes/arya-orange.png",
                                    className: "w-2rem h-2rem",
                                    alt: "Arya Orange"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "p-link w-2rem h-2rem",
                                onClick: ()=>_changeTheme("arya-purple", "dark"),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/layout/images/themes/arya-purple.png",
                                    className: "w-2rem h-2rem",
                                    alt: "Arya Purple"
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppConfig);


/***/ }),

/***/ 9418:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ AuthProvider),
/* harmony export */   V: () => (/* binding */ AuthContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
const AuthProvider = ({ children })=>{
    const [token, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        accessToken: "",
        refreshToken: ""
    });
    const value = {
        token,
        setToken
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthContext.Provider, {
        value: value,
        children: children
    });
};


/***/ }),

/***/ 69270:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  V: () => (/* binding */ LayoutContext),
  a: () => (/* binding */ LayoutProvider)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
;// CONCATENATED MODULE: ./app/(main)/management/loading.tsx


const Loading = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: "Loading..."
    });
};
/* harmony default export */ const management_loading = (Loading);

;// CONCATENATED MODULE: ./layout/context/layoutcontext.tsx
/* __next_internal_client_entry_do_not_use__ LayoutContext,LayoutProvider auto */ 


const LayoutContext = /*#__PURE__*/ (0,react_.createContext)({});
const LayoutProvider = ({ children })=>{
    const [layoutConfig, setLayoutConfig] = (0,react_.useState)({
        ripple: false,
        inputStyle: "outlined",
        menuMode: "static",
        colorScheme: "light",
        theme: "lara-light-indigo",
        scale: 14
    });
    const [layoutState, setLayoutState] = (0,react_.useState)({
        staticMenuDesktopInactive: false,
        overlayMenuActive: false,
        profileSidebarVisible: false,
        configSidebarVisible: false,
        staticMenuMobileActive: false,
        menuHoverActive: false
    });
    const [loading, setLoading] = (0,react_.useState)(false);
    const onMenuToggle = ()=>{
        if (isOverlay()) {
            setLayoutState((prevLayoutState)=>({
                    ...prevLayoutState,
                    overlayMenuActive: !prevLayoutState.overlayMenuActive
                }));
        }
        if (isDesktop()) {
            setLayoutState((prevLayoutState)=>({
                    ...prevLayoutState,
                    staticMenuDesktopInactive: !prevLayoutState.staticMenuDesktopInactive
                }));
        } else {
            setLayoutState((prevLayoutState)=>({
                    ...prevLayoutState,
                    staticMenuMobileActive: !prevLayoutState.staticMenuMobileActive
                }));
        }
    };
    const showProfileSidebar = ()=>{
        setLayoutState((prevLayoutState)=>({
                ...prevLayoutState,
                profileSidebarVisible: !prevLayoutState.profileSidebarVisible
            }));
    };
    const isOverlay = ()=>{
        return layoutConfig.menuMode === "overlay";
    };
    const isDesktop = ()=>{
        return window.innerWidth > 991;
    };
    const value = {
        layoutConfig,
        setLayoutConfig,
        layoutState,
        setLayoutState,
        onMenuToggle,
        showProfileSidebar,
        setLoading,
        loading
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(LayoutContext.Provider, {
        value: value,
        children: [
            loading ? /*#__PURE__*/ jsx_runtime_.jsx(management_loading, {}) : "",
            children
        ]
    });
};


/***/ }),

/***/ 86991:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3483);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`D:\Work\Coffee_web\COFFEE_WEB_ADMIN\app\layout.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 83174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20165);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 63114:
/***/ (() => {



/***/ }),

/***/ 97993:
/***/ (() => {



/***/ })

};
;