"use strict";(self.webpackChunkkennekt_front_end_client=self.webpackChunkkennekt_front_end_client||[]).push([[6916],{46916:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});a(47313);var n=a(90182),r=a(57730),s=a(28303),i=a(57009),l=a(84365),o=a(77344),c=a(79447),m=a(81449),d=a(95762),u=a(51328),p=a(46417);var h=function(){var e=(0,o.m)().companyId,t=(0,c.tv)(),a=t.history,h=t.params,f=(0,c.eC)().showNotification,x=parseInt(null===h||void 0===h?void 0:h.templateId);return(0,p.jsx)(d.Z.One,{id:x,entity:"templates",name:"Template-".concat(x),url:"/".concat(e,"/notification-templates/").concat(x,"/"),params:{},relations:"",children:function(t){var o=t.item,c=t.isFetched,d=o;return(0,p.jsx)(p.Fragment,{children:c?(0,p.jsxs)("div",{className:"news-page py-4",children:[(0,p.jsxs)(n.Z,{children:[(0,p.jsx)("title",{children:"KENNEKT | Edit Template"}),(0,p.jsx)("meta",{name:"description",content:"KENNEKT Announcement"})]}),(0,p.jsx)("h1",{className:"font-bold text-2xl mb-2",children:"Edit Template"}),(0,p.jsx)("div",{className:"mb-4",children:(0,p.jsxs)(r.Z,{"aria-label":"breadcrumb",children:[(0,p.jsx)(s.rU,{to:"/news/templates/",children:(0,p.jsx)("span",{className:"text-primary transition hover:text-primary-dark text-sm",children:"Templates List"})}),(0,p.jsx)(i.Z,{color:"textPrimary",className:"!text-sm",children:d.title})]})}),(0,p.jsx)("div",{className:"uni-page__content",children:(0,p.jsx)(l.Z.Main,{entity:"templates",name:"AllTemplates",url:"/".concat(e,"/notification-templates/").concat(x,"/"),sendAsFormData:!1,method:"put",fields:[{name:"subject",required:!0,onSubmitKey:"",value:d.subject},{name:"title",required:!0,onSubmitKey:"",value:d.title},{name:"body",required:!0,onSubmitKey:"",value:d.body}],onSuccess:function(){a.push("/news/templates")},onError:function(e){var t,a,n=(null===e||void 0===e||null===(t=e.response)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.message)||"Something went wrong";f({message:n,variant:"error"})},children:function(e){var t=e.isSubmitting;e.values;return(0,p.jsx)(m.g,{isSubmitting:t,isEditing:!0})}})})]}):(0,p.jsx)(u.aN,{tiled:!0,withOverlay:!0})})}})}},81449:function(e,t,a){a.d(t,{g:function(){return u}});a(47313);var n=a(21144),r=a(94715),s=a(17480),i=a(92315),l=a(51328),o=a(28303),c=a(82277),m=a(46417),d=[{name:"Reader First Name",code:"{reader_first_name}"},{name:"Reader Last Name",code:"{reader_last_name}"},{name:"Reader Company",code:"{business_company}"},{name:"Author First Name",code:"{author_first_name}"},{name:"Author Last Name",code:"{author_last_name}"},{name:"Author company",code:"{client_company}"}];function u(e){var t=e.isSubmitting,a=e.isEditing,u=void 0!==a&&a;return(0,m.jsx)(c.Z,{className:"uni-page__paper",children:(0,m.jsxs)("div",{className:"form-page p-5",children:[(0,m.jsx)(n.Z,{container:!0,spacing:3,children:(0,m.jsxs)(n.Z,{item:!0,xs:12,sm:4,children:[(0,m.jsx)("div",{className:"form-page__row mb-5",children:(0,m.jsx)(r.gN,{component:s.Mg,type:"text",label:"Template name",name:"title",variant:"outlined",size:"small",fullWidth:!0,autoComplete:"off",required:!0})}),(0,m.jsx)("div",{className:"form-page__row mb-5",children:(0,m.jsx)(r.gN,{component:s.Mg,type:"text",label:"Template title",name:"subject",variant:"outlined",size:"small",fullWidth:!0,autoComplete:"off",required:!0})})]})}),(0,m.jsxs)("div",{className:"form-page__row mb-5",children:[(0,m.jsx)("div",{className:"form-page__label ml-2 text-sm font-light text-kgrey-menuText mb-2 block",children:"Description*"}),(0,m.jsx)(r.gN,{component:i.Z,type:"text",name:"body",bounds:".form-page",keywords:d})]}),t&&(0,m.jsx)(l.aN,{tiled:!0,withOverlay:!0}),(0,m.jsxs)("div",{className:"form-page__row mb-5 justify-content-between",children:[(0,m.jsx)(l.Ik,{children:(0,m.jsx)(o.rU,{to:"/news/templates",children:"Cancel"})}),(0,m.jsx)(l.Ik,{type:"submit",color:"primary",isDisabled:t,className:"ml-4",children:u?"Update":"Create"})]})]})})}},57730:function(e,t,a){a.d(t,{Z:function(){return f}});var n=a(87462),r=a(42982),s=a(45987),i=a(47313),l=(a(96214),a(83061)),o=a(80454),c=a(57009),m=a(13644),d=(0,a(14214).Z)(i.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),u=a(22327);var p=(0,o.Z)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:(0,m._4)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var t=e.classes,a=(0,s.Z)(e,["classes"]);return i.createElement(u.Z,(0,n.Z)({component:"li",className:t.root,focusRipple:!0},a),i.createElement(d,{className:t.icon}))}));var h=i.forwardRef((function(e,t){var a=e.children,o=e.classes,m=e.className,d=e.component,u=void 0===d?"nav":d,h=e.expandText,f=void 0===h?"Show path":h,x=e.itemsAfterCollapse,g=void 0===x?1:x,v=e.itemsBeforeCollapse,b=void 0===v?1:v,y=e.maxItems,N=void 0===y?8:y,j=e.separator,_=void 0===j?"/":j,w=(0,s.Z)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),Z=i.useState(!1),k=Z[0],C=Z[1],E=i.Children.toArray(a).filter((function(e){return i.isValidElement(e)})).map((function(e,t){return i.createElement("li",{className:o.li,key:"child-".concat(t)},e)}));return i.createElement(c.Z,(0,n.Z)({ref:t,component:u,color:"textSecondary",className:(0,l.Z)(o.root,m)},w),i.createElement("ol",{className:o.ol},function(e,t,a){return e.reduce((function(n,r,s){return s<e.length-1?n=n.concat(r,i.createElement("li",{"aria-hidden":!0,key:"separator-".concat(s),className:t},a)):n.push(r),n}),[])}(k||N&&E.length<=N?E:function(e){return b+g>=e.length?e:[].concat((0,r.Z)(e.slice(0,b)),[i.createElement(p,{"aria-label":f,key:"ellipsis",onClick:function(e){C(!0);var t=e.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");t&&t.focus()}})],(0,r.Z)(e.slice(e.length-g,e.length)))}(E),o.separator,_)))})),f=(0,o.Z)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(h)}}]);