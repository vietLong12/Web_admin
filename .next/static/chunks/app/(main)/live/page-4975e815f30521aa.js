(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8753],{3364:function(e,s,n){Promise.resolve().then(n.bind(n,78))},78:function(e,s,n){"use strict";n.r(s);var c=n(9268),r=n(9688),a=n(3702),i=n(6006),t=n(2449),l=n(1648),o=n(7014);let d=t.ZP.connect(o._);s.default=()=>{let[e,s]=(0,i.useState)([]),n=(0,i.useRef)(null),t=(0,i.useRef)(null),[o,u]=(0,i.useState)(!0),[m,h]=(0,i.useState)(!0),[p,f]=(0,i.useState)(!0);return(0,i.useEffect)(()=>{let e=new l.ZP;return navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then(s=>{n.current.srcObject=s,e.on("open",e=>{console.log("Peer ID:",e),d.emit("stream",e)}),e.on("call",e=>{e.answer(s)}),t.current=e}).catch(e=>{console.error("Error accessing webcam:",e)}),()=>{n.current&&n.current.srcObject&&n.current.srcObject.getTracks().forEach(e=>e.stop()),t&&t.current.disconnect(),d.disconnect(!0)}},[d]),(0,i.useEffect)(()=>{d.emit("adminLive"),d.on("adminComment",e=>{s(e)}),d.on("user-admin-id",e=>{t.current.call(e,n.current.srcObject)})},[d]),(0,c.jsx)("div",{className:"card h-full",children:(0,c.jsxs)("div",{className:"grid",children:[(0,c.jsx)("div",{className:"col-8",children:(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{className:"border-round",children:p?(0,c.jsx)("video",{className:"border-round w-full",ref:n,autoPlay:m,playsInline:!0,muted:o}):""}),(0,c.jsxs)("div",{className:"flex justify-content-center mt-4",children:[(0,c.jsx)(a.z,{icon:"pi pi-volume-".concat(o?"up":"off"),severity:"".concat(o?"help":"danger"),className:"mb-2",onClick:()=>u(!o),rounded:!0}),(0,c.jsx)(a.z,{icon:"pi pi-video",severity:"".concat(m?"help":"danger"),onClick:()=>h(!m),rounded:!0,className:"ml-2"}),(0,c.jsx)(a.z,{icon:"pi pi-stop",severity:"".concat(p?"danger":"help"),rounded:!0,className:"ml-2"})]})]})}),(0,c.jsxs)("div",{className:"col-4",children:[(0,c.jsx)("h5",{className:"border border-bottom-1 border-black-alpha-70",children:"Tin nhắn h\xe0ng đầu:"}),(0,c.jsx)("div",{className:"border-1 border-round overflow-y-auto",style:{height:"50vh"},children:(0,c.jsx)("div",{className:"p-2",children:e.map((e,s)=>(0,c.jsxs)("div",{className:"flex align-align-items-start mb-2",children:[(0,c.jsx)("div",{className:"inline-block mr-2 mt-1",children:(0,c.jsx)(r.q,{image:"https://images.unsplash.com/photo-1509043759401-136742328bb3?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",size:"normal",className:"inline-block",shape:"circle"})}),(0,c.jsxs)("p",{className:"inline-block",children:[(0,c.jsxs)("span",{className:"font-bold",children:[e.author,": "]}),e.content]})]},s))})})]})]})})}},7014:function(e,s,n){"use strict";n.d(s,{_:function(){return c}});let c="https://coffeewebapi-production.up.railway.app"}},function(e){e.O(0,[434,2713,9424,543,5361,9253,9257,1744],function(){return e(e.s=3364)}),_N_E=e.O()}]);