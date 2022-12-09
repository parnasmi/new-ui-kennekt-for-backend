"use strict";(self.webpackChunkkennekt_front_end_client=self.webpackChunkkennekt_front_end_client||[]).push([[9789],{49789:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var i=n(70885),a=n(47313),l=n(79513),s=n(90182),r=n(26926),d=n(63830),c=n(90325),o=n(57718);var u=n(2213),f=n(23867),x=n(77344),h=n(11760),m=n(46417),p=(0,a.lazy)((function(){return n.e(9014).then(n.bind(n,89014))})),v=(0,a.lazy)((function(){return n.e(363).then(n.bind(n,30363))}));function b(){var e,t,n=(0,x.m)().isAdmin,b=function(){var e=a.useState(0),t=(0,i.Z)(e,2),n=t[0],l=t[1],s=a.useState("Clients List"),r=(0,i.Z)(s,2),d=r[0],c=r[1],u=(0,a.useState)(!1),f=(0,i.Z)(u,2),x=f[0],h=f[1],m=(0,o.tv)(),p=m.location,v=m.match,b=v.url,g=v.path,j=(0,o.gQ)("ClientsManagement"),k=j.unreadCasesQuantity,w=j.isHidden;return(0,a.useEffect)((function(){var e=p.pathname.split("/").filter(Boolean).filter(String),t=e[e.length-1]||"";!function(){switch(t){case"general":l(0),c("General");break;case"cases":l(1),c("Cases")}}()}),[p]),{primeTab:n,pageName:d,url:b,path:g,unreadCasesQuantity:k,isHidden:w,handleChangePrime:function(e,t){l(t)},setEditStaff:h,editStaff:x,toggleEditStaff:function(){return h((function(e){return!e}))}}}(),g=b.pageName,j=b.path,k=b.unreadCasesQuantity,w=b.isHidden,y=(0,f.O)(),S=y.editVisible,C=y.closeEditPopup,N=y.showEditVisible,E=(0,a.useState)(null),_=(0,i.Z)(E,2),P=_[0],Z=_[1],Q=(0,h.a)(),W=Q.company,A=Q.userData.id===(null===W||void 0===W||null===(e=W.company)||void 0===e||null===(t=e.owner)||void 0===t?void 0:t.id);return(0,m.jsx)(c.d,{children:(0,m.jsxs)("div",{className:"p-4 max-w-full flex flex-col min-h-full flex-grow relative",children:[(!w||0===k)&&(0,m.jsx)(s.q,{children:(0,m.jsx)("title",{children:"KENNEKT | ".concat(g)})}),(0,m.jsxs)("div",{children:[(0,m.jsxs)("div",{className:"flex justify-between items-center mb-5 w-full",children:[(0,m.jsx)("h2",{className:"text-xl md:text-3xl font-bold dark:text-white",children:"Staff Details"}),(0,m.jsx)("button",{type:"button",disabled:A?"Pending"===(null===P||void 0===P?void 0:P.state):(null===P||void 0===P?void 0:P.is_business_owner)||!n||"Pending"===(null===P||void 0===P?void 0:P.state),onClick:function(){return N(P)},className:"bg-kgrey-bg rounded-xl text-sm md:text-base font-poppins text-center ml-5 px-4 py-2 hover:bg-primary-200 transition dark:bg-primary-300 dark:text-white disabled:opacity-70",children:"Edit staff"})]}),(0,m.jsx)(r.Cx,{handleModalOpen:C,open:Boolean(S),scrollable:!0,maxWidth:490,minWidth:490,noPadding:!0,children:(0,m.jsx)(u.Z,{entity:S,onSuccess:C})}),(0,m.jsx)("div",{className:"max-w-full flex-grow flex flex-col relative",children:(0,m.jsx)("div",{className:"relative flex-grow",children:(0,m.jsx)(a.Suspense,{fallback:(0,m.jsx)(l.aN,{tiled:!0}),children:(0,m.jsxs)(d.rs,{children:[(0,m.jsx)(d.AW,{exact:!0,path:"".concat(j,"/"),children:(0,m.jsx)(v,{setModalItem:Z})}),(0,m.jsx)(d.AW,{exact:!0,path:"".concat(j,"/cases/"),component:p})]})})})})]})]})})}var g=function(){return(0,m.jsx)(l.SV,{children:(0,m.jsx)(b,{})})}}}]);