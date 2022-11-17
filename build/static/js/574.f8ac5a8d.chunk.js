"use strict";(self.webpackChunkkennekt_front_end_client=self.webpackChunkkennekt_front_end_client||[]).push([[574],{30574:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});n(47313);var a=n(28303),r=n(95762),l=n(90182),s=n(57009),c=n(57730),i=n(79513),o=n(47735),d=n(77344),m=n(85457),p=n(46417),u=function(){var e=(0,d.m)().companyId,t=(0,m.tv)().params,n=parseInt(null===t||void 0===t?void 0:t.templateId);return(0,p.jsx)(r.Z.One,{id:n,entity:"templates",name:"SingleTemplate-".concat(n),url:"".concat(e,"/notification-templates/").concat(n),params:{},relations:"",children:function(e){var t=e.item,n=e.isFetched,r=t;return(0,p.jsxs)("div",{className:"news-page mb-2.5 py-6",children:[(0,p.jsxs)(l.Z,{children:[(0,p.jsxs)("title",{children:["KENNEKT | ","".concat(r.title)]}),(0,p.jsx)("meta",{name:"description",content:"KENNEKT Announcement"})]}),(0,p.jsx)("div",{className:"flex-center-between mb-4",children:n?(0,p.jsx)("h1",{className:"text-2xl font-bold dark:text-white",children:r.title}):(0,p.jsx)("div",{className:"w-[200px]",children:(0,p.jsx)(o.Z,{})})}),(0,p.jsx)("div",{className:"news-breadcrumb mb-5",children:n?(0,p.jsxs)(c.Z,{"aria-label":"breadcrumb",children:[(0,p.jsx)(a.rU,{color:"inherit",to:"/news/templates",children:(0,p.jsx)("span",{className:"text-primary transition hover:text-primary-dark",children:"All Templates"})}),(0,p.jsx)(s.Z,{color:"textPrimary",children:r.title})]}):(0,p.jsx)("div",{className:"w-[200px]",children:(0,p.jsx)(o.Z,{})})}),(0,p.jsxs)("div",{className:"uni-page__content dark:text-white",children:[(0,p.jsx)(s.Z,{variant:"h6",gutterBottom:!0,children:"Template content"}),(0,p.jsx)("div",{className:"p-5 mb-5",children:n?(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(i._S,{text:r.body})}):(0,p.jsx)(i.aN,{tiled:!0,withOverlay:!0})})]})]})}})};var h=function(){return(0,p.jsx)(i.SV,{children:(0,p.jsx)(u,{})})}},57730:function(e,t,n){n.d(t,{Z:function(){return x}});var a=n(87462),r=n(42982),l=n(45987),s=n(47313),c=(n(96214),n(83061)),i=n(80454),o=n(57009),d=n(13644),m=(0,n(14214).Z)(s.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),p=n(22327);var u=(0,i.Z)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:(0,d._4)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var t=e.classes,n=(0,l.Z)(e,["classes"]);return s.createElement(p.Z,(0,a.Z)({component:"li",className:t.root,focusRipple:!0},n),s.createElement(m,{className:t.icon}))}));var h=s.forwardRef((function(e,t){var n=e.children,i=e.classes,d=e.className,m=e.component,p=void 0===m?"nav":m,h=e.expandText,x=void 0===h?"Show path":h,f=e.itemsAfterCollapse,v=void 0===f?1:f,g=e.itemsBeforeCollapse,b=void 0===g?1:g,j=e.maxItems,N=void 0===j?8:j,y=e.separator,Z=void 0===y?"/":y,k=(0,l.Z)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),w=s.useState(!1),E=w[0],C=w[1],S=s.Children.toArray(n).filter((function(e){return s.isValidElement(e)})).map((function(e,t){return s.createElement("li",{className:i.li,key:"child-".concat(t)},e)}));return s.createElement(o.Z,(0,a.Z)({ref:t,component:p,color:"textSecondary",className:(0,c.Z)(i.root,d)},k),s.createElement("ol",{className:i.ol},function(e,t,n){return e.reduce((function(a,r,l){return l<e.length-1?a=a.concat(r,s.createElement("li",{"aria-hidden":!0,key:"separator-".concat(l),className:t},n)):a.push(r),a}),[])}(E||N&&S.length<=N?S:function(e){return b+v>=e.length?e:[].concat((0,r.Z)(e.slice(0,b)),[s.createElement(u,{"aria-label":x,key:"ellipsis",onClick:function(e){C(!0);var t=e.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");t&&t.focus()}})],(0,r.Z)(e.slice(e.length-v,e.length)))}(S),i.separator,Z)))})),x=(0,i.Z)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(h)}}]);