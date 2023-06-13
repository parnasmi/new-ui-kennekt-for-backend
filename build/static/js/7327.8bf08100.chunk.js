"use strict";(self.webpackChunkkennekt_front_end_client=self.webpackChunkkennekt_front_end_client||[]).push([[7327],{87327:function(e,n,t){t.r(n),t.d(n,{default:function(){return _}});var c=t(70885),l=t(47313),i=t(23405),a=t(53446),r=t(19106),s=t(95762),o=t(41559),d=t(77344),u=t(90214),h=t(44329),j=t(54070),x=t(49911),m=t(4058),p=t(1413),v=t(26926),f=t(73923),y=t(46417);function g(e){var n,t=e.handleModalOpen,i=e.open,a=(0,d.m)().companyId,r=(0,l.useState)(!1),s=(0,c.Z)(r,2),u=s[0],h=s[1],j=(0,f.v)({entity:"incomingRequest",name:"AllIncomingRequest-".concat(a),method:"post",url:"/".concat(a,"/my/company/user_connection_requests/").concat(null===i||void 0===i?void 0:i.id,"/reject/"),deleteData:!0,id:null===i||void 0===i?void 0:i.id,cb:{success:function(e){t(null,"reject"),h(!1)},error:function(e){h(!1)},finally:function(){}}}).handleRequest,x=function(){t(null,"reject")};return(0,y.jsx)("div",{className:"relative",children:(0,y.jsxs)(v.Cx,{handleModalOpen:x,open:Boolean(i),children:[(0,y.jsxs)(v.$N,{id:"alert-dialog-title",children:["Are you sure to reject the request from ",(0,y.jsx)("strong",{children:null===i||void 0===i||null===(n=i.requested_company)||void 0===n?void 0:n.name}),"?"]}),(0,y.jsx)(v.cZ,{children:(0,y.jsx)(v.fS,{id:"alert-dialog-description",children:"You will not be able to accept it again until the company sends request again."})}),(0,y.jsxs)(v.kX,{children:[(0,y.jsx)(v.zx,{onClick:x,autoFocus:!0,variant:"contained",children:"Cancel"}),(0,y.jsx)(v.zx,{onClick:function(){i&&(h(!0),j())},variant:"contained",color:"secondary",children:"Reject"})]}),u&&(0,y.jsx)("div",{className:"absolute inset-0 flex items-center justify-center bg-white bg-opacity-70",children:(0,y.jsx)(o.aN,{})})]})})}function k(e){return(0,y.jsx)(o.SV,{children:(0,y.jsx)(g,(0,p.Z)({},e))})}function b(e){var n,t=e.handleModalOpen,i=e.open,a=(0,d.m)().companyId,r=(0,l.useState)(!1),s=(0,c.Z)(r,2),u=s[0],h=s[1],j=(0,f.v)({entity:"incomingRequest",name:"AllIncomingRequest-".concat(a),method:"post",url:"/".concat(a,"/my/company/user_connection_requests/").concat(null===i||void 0===i?void 0:i.id,"/accept/"),deleteData:!0,id:null===i||void 0===i?void 0:i.id,cb:{success:function(e){t(null,"accept"),h(!1)},error:function(e){h(!1)}}}).handleRequest,x=function(){t(null,"reject")};return(0,y.jsx)("div",{className:"relative",children:(0,y.jsxs)(v.Cx,{handleModalOpen:x,open:Boolean(i),children:[(0,y.jsxs)(v.$N,{id:"alert-dialog-title",children:["Are you sure to accept the request from ",(0,y.jsx)("strong",{children:null===i||void 0===i||null===(n=i.requested_company)||void 0===n?void 0:n.name}),"?"]}),(0,y.jsxs)(v.kX,{children:[(0,y.jsx)(v.zx,{onClick:x,autoFocus:!0,variant:"contained",children:"Cancel"}),(0,y.jsx)(v.zx,{onClick:function(){i&&(h(!0),j())},variant:"contained",color:"secondary",children:"Accept"})]}),u&&(0,y.jsx)("div",{className:"absolute inset-0 flex items-center justify-center bg-white bg-opacity-70",children:(0,y.jsx)(o.aN,{})})]})})}var q=t(3203);function Z(){var e=(0,d.m)().companyId,n=(0,u.h0)(),t=n.page,p=n.handlePage,v=n.handlePageChange,f=(0,u.A3)(),g=f.searchQuery,Z=f.setQuery,_=f.query,C=(0,l.useState)(null),w=(0,c.Z)(C,2),N=w[0],A=w[1],R=(0,l.useState)(null),S=(0,c.Z)(R,2),M=S[0],O=S[1],E=function(e){v(1),Z(e.target.value)},I=function(e,n){if(e)return"accept"===n&&O(e),void("reject"===n&&A(e));A(null),O(null)};return(0,y.jsx)("div",{children:e?(0,y.jsx)(s.Z.All,{entity:"incomingRequest",name:"AllIncomingRequest-".concat(e),url:"/".concat(e,"/my/company/user_connection_requests/"),params:{limit:10,extra:{search:g},page:t},children:function(e){var n=e.items,c=e.isFetched,l=e.meta,s=n.map((function(e){return e}));return(0,y.jsxs)("div",{children:[(0,y.jsxs)(i.Z,{classes:{root:"relative"},children:[(0,y.jsxs)(o.k6,{"aria-label":"simple table",classes:{root:"table-fixed dark-mode-styled-table"},children:[(0,y.jsx)(a.Z,{children:(0,y.jsxs)(o.AF,{children:[(0,y.jsx)(o.EU,{style:{width:"7%"},children:"\u2116"}),(0,y.jsx)(o.EU,{style:{width:"26%"},children:"Requested company"}),(0,y.jsx)(o.EU,{style:{width:"15%"},children:"User role"}),(0,y.jsx)(o.EU,{style:{width:"25%"},children:"Actions"}),(0,y.jsx)(o.EU,{style:{width:"26%"},children:(0,y.jsx)(q.P,{query:_,handleSearch:E,placeholder:"Search by Business company name"})})]})}),(0,y.jsx)(r.Z,{children:s.map((function(e,n){var t;return(0,y.jsxs)(o.AF,{children:[(0,y.jsx)(o.Yk,{component:"th",scope:"row",children:"".concat(n+1,".")}),(0,y.jsx)(o.Yk,{children:null===e||void 0===e||null===(t=e.requested_company)||void 0===t?void 0:t.name}),(0,y.jsx)(o.Yk,{children:null===e||void 0===e?void 0:e.role}),(0,y.jsx)(o.Yk,{children:(0,y.jsxs)("div",{className:"flex",children:[(0,y.jsx)(j.Z,{"aria-label":"accept",color:"primary",onClick:function(){return I(e,"accept")},children:(0,y.jsx)(x.Z,{})}),(0,y.jsx)(j.Z,{"aria-label":"reject",color:"primary",onClick:function(){return I(e,"reject")},children:(0,y.jsx)(m.Z,{})})]})}),(0,y.jsx)(o.Yk,{})]},e.id)}))})]}),!c&&(0,y.jsx)(o.aN,{tiled:!0,withOverlay:!0})]}),(0,y.jsx)(b,{open:M,handleModalOpen:I}),(0,y.jsx)(k,{open:N,handleModalOpen:I}),(0,y.jsx)("div",{className:"mt-4 mb-4",children:(0,y.jsx)(h.Z,{count:null===l||void 0===l?void 0:l.last_page,page:t||1,onChange:p})})]})}}):(0,y.jsx)(o.aN,{})})}function _(){return(0,y.jsx)(o.SV,{children:(0,y.jsx)(Z,{})})}},49911:function(e,n,t){var c=t(64836),l=t(75263);n.Z=void 0;var i=l(t(47313)),a=(0,c(t(52293)).default)(i.createElement("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");n.Z=a}}]);