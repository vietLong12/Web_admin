(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1755],{1360:function(e,t,i){Promise.resolve().then(i.bind(i,7607))},7607:function(e,t,i){"use strict";i.r(t);var r=i(9268),a=i(3702),n=i(716),s=i(5818),o=i(8176),l=i(4390),c=i(315),d=i(3062),u=i(5066),p=i(4046),h=i(6006),m=i(113);t.default=()=>{var e;let[t,i]=(0,h.useState)(!1),[x,g]=(0,h.useState)(!1),[y,j]=(0,h.useState)(!1),[v,f]=(0,h.useState)(!1),[b,w]=(0,h.useState)(!1),[S,k]=(0,h.useState)(!1),[C,N]=(0,h.useState)(!1),[z,A]=(0,h.useState)([]),[R,E]=(0,h.useState)(null),P=(0,h.useRef)(null),I=(0,h.useRef)(null),q=(0,h.useRef)(null),T=()=>{var e;null===(e=q.current)||void 0===e||e.show({severity:"info",summary:"Confirmed",detail:"You have accepted",life:3e3})},Y=()=>{var e;null===(e=q.current)||void 0===e||e.show({severity:"error",summary:"Rejected",detail:"You have rejected",life:3e3})};(0,h.useEffect)(()=>{m.M.getProductsSmall().then(e=>A(e))},[]);let Z=e=>e.toLocaleString("en-US",{style:"currency",currency:"USD"}),_=(0,r.jsx)(a.z,{type:"button",label:"OK",onClick:()=>i(!1),icon:"pi pi-check",outlined:!0}),L=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.z,{type:"button",label:"No",icon:"pi pi-times",onClick:()=>g(!1),text:!0}),(0,r.jsx)(a.z,{type:"button",label:"Yes",icon:"pi pi-check",onClick:()=>g(!1),text:!0,autoFocus:!0})]});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(p.F,{ref:q}),(0,r.jsxs)("div",{className:"grid",children:[(0,r.jsxs)("div",{className:"col-12 lg:col-6",children:[(0,r.jsxs)("div",{className:"card",children:[(0,r.jsx)("h5",{children:"Dialog"}),(0,r.jsx)(l.V,{header:"Dialog",visible:t,style:{width:"30vw"},modal:!0,footer:_,onHide:()=>i(!1),children:(0,r.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})}),(0,r.jsx)("div",{className:"grid",children:(0,r.jsx)("div",{className:"col-12",children:(0,r.jsx)(a.z,{outlined:!0,type:"button",label:"Show",icon:"pi pi-external-link",onClick:()=>i(!0)})})})]}),(0,r.jsxs)("div",{className:"card",children:[(0,r.jsx)("h5",{children:"Overlay Panel"}),(0,r.jsxs)("div",{className:"flex flex-wrap gap-2",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(a.z,{type:"button",label:"Image",onClick:e=>{var t;null===(t=P.current)||void 0===t||t.toggle(e)},outlined:!0}),(0,r.jsx)(d.T,{ref:P,appendTo:document.body,showCloseIcon:!0,children:(0,r.jsx)("img",{src:"/demo/images/nature/nature9.jpg",alt:"nature1"})})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(a.z,{type:"button",label:"DataTable",onClick:e=>{var t;null===(t=I.current)||void 0===t||t.toggle(e)},outlined:!0}),(0,r.jsx)(d.T,{ref:I,appendTo:document.body,showCloseIcon:!0,id:"overlay_panel",style:{width:"450px"},children:(0,r.jsxs)(o.w,{value:z,selection:R||void 0,onSelectionChange:e=>{E(e.value)},selectionMode:"single",responsiveLayout:"scroll",paginator:!0,rows:5,onRowSelect:e=>{var t,i;null===(t=I.current)||void 0===t||t.hide(),null===(i=q.current)||void 0===i||i.show({severity:"info",summary:"Product Selected",detail:e.data.name,life:3e3})},children:[(0,r.jsx)(n.s,{field:"name",header:"Name",sortable:!0,headerStyle:{minWidth:"10rem"}}),(0,r.jsx)(n.s,{header:"Image",body:e=>(0,r.jsx)("img",{src:"/demo/images/product/".concat(e.image),alt:e.image,className:"product-image",width:"60",style:{boxShadow:"0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)"}}),headerStyle:{minWidth:"10rem"}}),(0,r.jsx)(n.s,{field:"price",header:"Price",body:t=>Z(null!==(e=t.price)&&void 0!==e?e:0),sortable:!0,headerStyle:{minWidth:"8rem"}})]})})]})]})]})]}),(0,r.jsxs)("div",{className:"col-12 lg:col-6",children:[(0,r.jsxs)("div",{className:"card",children:[(0,r.jsx)("h5",{children:"Confirmation"}),(0,r.jsx)(a.z,{label:"Delete",icon:"pi pi-trash",severity:"danger",onClick:()=>g(!0)}),(0,r.jsx)(l.V,{header:"Confirmation",visible:x,onHide:()=>g(!1),style:{width:"350px"},modal:!0,footer:L,children:(0,r.jsxs)("div",{className:"flex align-items-center justify-content-center",children:[(0,r.jsx)("i",{className:"pi pi-exclamation-triangle mr-3",style:{fontSize:"2rem"}}),(0,r.jsx)("span",{children:"Are you sure you want to proceed?"})]})})]}),(0,r.jsxs)("div",{className:"card",children:[(0,r.jsx)("h5",{children:"Sidebar"}),(0,r.jsx)(u.Y,{visible:y,onHide:()=>j(!1),baseZIndex:1e3,children:(0,r.jsx)("h1",{style:{fontWeight:"normal"},children:"Left Sidebar"})}),(0,r.jsx)(u.Y,{visible:v,onHide:()=>f(!1),baseZIndex:1e3,position:"right",children:(0,r.jsx)("h1",{style:{fontWeight:"normal"},children:"Right Sidebar"})}),(0,r.jsx)(u.Y,{visible:b,onHide:()=>w(!1),baseZIndex:1e3,position:"top",children:(0,r.jsx)("h1",{style:{fontWeight:"normal"},children:"Top Sidebar"})}),(0,r.jsx)(u.Y,{visible:S,onHide:()=>k(!1),baseZIndex:1e3,position:"bottom",children:(0,r.jsx)("h1",{style:{fontWeight:"normal"},children:"Bottom Sidebar"})}),(0,r.jsx)(u.Y,{visible:C,onHide:()=>N(!1),baseZIndex:1e3,fullScreen:!0,children:(0,r.jsx)("h1",{style:{fontWeight:"normal"},children:"Full Screen"})}),(0,r.jsx)(a.z,{type:"button",icon:"pi pi-arrow-right",severity:"warning",onClick:()=>j(!0),style:{marginRight:".25em"}}),(0,r.jsx)(a.z,{type:"button",icon:"pi pi-arrow-left",severity:"warning",onClick:()=>f(!0),style:{marginRight:".25em"}}),(0,r.jsx)(a.z,{type:"button",icon:"pi pi-arrow-down",severity:"warning",onClick:()=>w(!0),style:{marginRight:".25em"}}),(0,r.jsx)(a.z,{type:"button",icon:"pi pi-arrow-up",severity:"warning",onClick:()=>k(!0),style:{marginRight:".25em"}}),(0,r.jsx)(a.z,{type:"button",icon:"pi pi-external-link",severity:"warning",onClick:()=>N(!0)})]})]}),(0,r.jsx)("div",{className:"col-12 lg:col-6",children:(0,r.jsxs)("div",{className:"card",children:[(0,r.jsx)("h5",{children:"Tooltip"}),(0,r.jsxs)("div",{className:"flex align-items-center gap-2",children:[(0,r.jsx)("span",{children:(0,r.jsx)(c.o,{type:"text",placeholder:"Username",tooltip:"Your username"})}),(0,r.jsx)(a.z,{type:"button",label:"Save",icon:"pi pi-check",tooltip:"Click to proceed"})]})]})}),(0,r.jsxs)("div",{className:"col-12 lg:col-6",children:[(0,r.jsx)(p.F,{ref:q}),(0,r.jsxs)("div",{className:"card",children:[(0,r.jsx)("h5",{children:"ConfirmPopup"}),(0,r.jsx)(s.P,{}),(0,r.jsx)(a.z,{onClick:e=>{(0,s.w)({target:e.currentTarget,message:"Are you sure you want to proceed?",icon:"pi pi-exclamation-triangle",accept:T,reject:Y})},icon:"pi pi-check",label:"Confirm"})]})]})]})]})}},9496:function(e,t,i){"use strict";var r=i(1712);t.Z=e=>{e.interceptors.request.use(e=>{let t=r.Z.get("tokenAdmin");if(t){let i=JSON.parse(t);e.headers.setAccept("application/json"),e.headers.setAuthorization("Bearer "+i.accessToken)}return e},e=>(console.error("Request interceptor error:",e),Promise.reject(e))),e.interceptors.response.use(e=>e,e=>(console.error("Response interceptor error:",e),r.Z.remove("tokenAdmin"),window.location.assign("/auth/login"),Promise.reject(e)))}},113:function(e,t,i){"use strict";i.d(t,{M:function(){return c}});var r=i(856),a=i.n(r),n=i(447),s=i(7014),o=i(9496);let l=n.Z.create({baseURL:s._});(0,o.Z)(l);class c{static async postCategory(e){try{let t=await l.post("/products/category",{category:e});return t.data}catch(e){c.handleApiError(e)}}static async getListProduct(e){try{let{page:t="",limit:i="",keyword:r="",depth:a="3"}=e||{},n=await l.get("/products?page=".concat(t,"&limit=").concat(i,"&keyword=").concat(r,"&depth=").concat(a));return n.data}catch(e){c.handleApiError(e)}}static async postProduct(e){try{let t=await l.post("/products",e);return t.data}catch(e){c.handleApiError(e)}}static async getListCategory(){try{let e=await l.get("/products/category");return e.data}catch(e){c.handleApiError(e)}}static async getProductById(e){try{let t=await l.get("/products/".concat(e));return t.data}catch(e){c.handleApiError(e)}}static async getListCommentById(e){try{let t=await l.get("/products/rate/".concat(e));return t.data}catch(e){c.handleApiError(e)}}static async postComment(e){try{let t=await l.post("/products/rate",e);return t.data}catch(e){c.handleApiError(e)}}static async deleteProduct(e){try{let t=await l.delete("/products/".concat(e));return t.data}catch(e){c.handleApiError(e)}}static async putProduct(e){try{let t=await l.put("/products",e);return t.data}catch(e){c.handleApiError(e)}}static handleApiError(e){console.log("error: ",e.response.data.message),"Category is exits"===e.response.data.message?a().fire({icon:"warning",title:"Bad Request",text:"T\xean ph\xe2n loại đ\xe3 tồn tại vui l\xf2ng kiểm tra lại"}):a().fire({icon:"warning",title:"Bad Request",text:"Request failed with status code 400"===e.message?"Y\xeau cầu kh\xf4ng hợp lệ":e.message})}}},7014:function(e,t,i){"use strict";i.d(t,{_:function(){return r}});let r="https://coffeewebapi-production.up.railway.app"}},function(e){e.O(0,[1987,8123,434,2713,9424,543,8285,9683,6486,3081,4307,7633,6324,2698,4046,4390,8322,9253,9257,1744],function(){return e(e.s=1360)}),_N_E=e.O()}]);