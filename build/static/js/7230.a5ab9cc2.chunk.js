"use strict";(self.webpackChunkkennekt_front_end_client=self.webpackChunkkennekt_front_end_client||[]).push([[7230],{57230:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var i=t(70885),s=t(47313),l=t(95762),r=t(26926),c=t(79513),a=t(28303),d=t(10658),o=t.n(d),h=t(77344),u=t(94024),x=t(57718),j=t(22206),f=t(62238),m=t(46417);var v=function(){var e=(0,h.m)(),n=e.companyId,t=e.isPermitted,d=(0,x.h0)(),v=d.page,y=d.handlePage,p=d.removePage,k=(0,j.vd)(),w=k.searchQuery,g=k.isStaff,_=(0,x.tv)().history,b=(0,u.Z)(w,500),N=(0,i.Z)(b,1)[0];(0,s.useEffect)((function(){return function(){return p()}}),[]);var Y=(0,f.c2)(),E=Y.deleteLoading,P=Y.handleNewsDelete,A=Y.showDeleteVisible,U=Y.closeDeletePopup,D=Y.deleteVisible;return(0,m.jsx)("div",{children:n?(0,m.jsx)(l.Z.All,{entity:"news",name:"AllNews",url:"/".concat(n,"/").concat(t?"":"my-","notifications/"),params:{limit:10,extra:{search:N,type:g?"staff":"client"},page:v},children:function(e){var n=e.items,i=e.isFetched,s=e.meta,l=n;return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("div",{children:[(0,m.jsxs)(r.xJ,{classes:{root:"relative "},children:[(0,m.jsxs)(c.k6,{"aria-label":"simple table",classes:{root:"table-fixed dark-mode-styled-table"},children:[(0,m.jsx)(r.ss,{children:(0,m.jsxs)(c.AF,{children:[(0,m.jsx)(c.EU,{style:{width:"20%"},children:"Title"}),(0,m.jsx)(c.EU,{style:{width:"10%"},children:"Status"}),(0,m.jsx)(c.EU,{style:{width:"10%"},children:"Frequency"}),(0,m.jsx)(c.EU,{style:{width:"20%"},children:"Author"}),(0,m.jsx)(c.EU,{style:{width:"20%"},children:"Date"}),t&&(0,m.jsx)(c.EU,{style:{width:"20%"},children:(0,m.jsx)("div",{className:" flex-center-y",children:(0,m.jsx)("div",{className:"ml-2",children:"Actions"})})})]})}),(0,m.jsx)(r.RM,{children:l.map((function(e){var n=null!==e&&void 0!==e?e:{},i=n.frequency,s=n.start_time,l=n.status,r=n.author,d=n.subject,h=n.id;return(0,m.jsxs)(c.AF,{children:[(0,m.jsx)(c.Yk,{children:(0,m.jsx)(a.rU,{to:"/news/view/".concat(t?e.id:e.notification_id),children:(0,m.jsx)("span",{className:"text-primary transition hover:text-primary-dark",children:d})})}),(0,m.jsx)(c.Yk,{children:l}),(0,m.jsx)(c.Yk,{children:i}),(0,m.jsx)(c.Yk,{children:(0,m.jsx)("div",{className:"truncate",children:r.name})}),(0,m.jsx)(c.Yk,{children:o()(s).format("MMMM D YYYY, h:mm a")}),(0,m.jsx)(c.Yk,{children:(0,m.jsxs)("div",{children:[(0,m.jsx)(c.cP.DeleteButton,{clickHandler:function(){return A(e)}}),(0,m.jsx)(c.cP.ViewButton,{clickHandler:function(){return _.push("/news/view/".concat(t?e.id:e.notification_id))}}),(0,m.jsx)(c.cP.EditButton,{clickHandler:function(){return _.push("/news/edit/".concat(t?e.id:null===e||void 0===e?void 0:e.notification_id))}})]})})]},h)}))})]}),!i&&(0,m.jsx)(c.aN,{tiled:!0,withOverlay:!0})]}),(0,m.jsx)(c.sm,{featureHandler:function(){return P(D)},isOpen:Boolean(D),toggleHandler:U,title:"Are you sure to delete  ".concat(null===D||void 0===D?void 0:D.subject,"?"),hasLoader:!0,isLoading:E}),(0,m.jsx)("div",{className:"news__pagination my-4",children:n.length?(0,m.jsx)(r.tl,{count:null===s||void 0===s?void 0:s.last_page,page:v?+v:1,defaultPage:6,siblingCount:1,color:"primary",onChange:y}):null})]})})}}):(0,m.jsx)("div",{className:"flex justify-center",children:(0,m.jsx)(c.aN,{})})})}}}]);