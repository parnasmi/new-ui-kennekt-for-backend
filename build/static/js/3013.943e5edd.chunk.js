"use strict";(self.webpackChunkkennekt_front_end_client=self.webpackChunkkennekt_front_end_client||[]).push([[3013],{25434:function(e,n,t){t.d(n,{I:function(){return i},m:function(){return m}});var a=t(70885),s=t(47313),r=t(57718);function i(){var e=s.useState(0),n=(0,a.Z)(e,2),t=n[0],i=n[1],l=s.useState("Billing"),o=(0,a.Z)(l,2),c=o[0],u=o[1],d=(0,r.tv)(),m=d.location,f=d.match,h=f.url,p=f.path,x=(0,r.gQ)("Billing"),v=x.unreadCasesQuantity,b=x.isHidden;return(0,s.useEffect)((function(){var e=m.pathname.split("/").filter(Boolean).filter(String),n=e[e.length-1]||"";!function(){switch(n){case"billing":i(0),u("Billing");break;case"invoice":i(1),u("Invoice");break;default:;}}()}),[m]),{primeTab:t,pageName:c,url:h,path:p,unreadCasesQuantity:v,setPrimeTab:i,isHidden:b,handleChangePrime:function(e,n){i(n)}}}var l=t(15861),o=t(64687),c=t.n(o),u=t(77344),d=t(11760);function m(){var e=(0,u.m)().companyId,n=(0,d.a)().companies,t=(0,r.tv)().history,i=(0,s.useState)(!1),o=(0,a.Z)(i,2),m=o[0],f=o[1],h=(0,s.useState)(!1),p=(0,a.Z)(h,2),x=p[0],v=p[1],b=(0,r.eC)().showNotification,y=(0,s.useState)(null),g=(0,a.Z)(y,2),j=g[0],k=g[1],w=(0,r.bK)({url:"/".concat(e,"/payment/").concat(e,"/cancel-subscription/"),method:"put",cb:{success:function(){b({message:"Your subscription has been cancelled",variant:"success"}),f(!1),v(!1)},error:function(e,n){var t,a;b({message:(null===e||void 0===e||null===(t=e.response)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.message)||"Something went wrong",variant:"error"}),f(!1)}}}).fetchData;(0,s.useEffect)((function(){if(e&&n.length){var t=n.find((function(n){return n.company.id===e})),a=null===t||void 0===t?void 0:t.company.comp_subscription;a&&k(a)}}),[n,e]);var S=(0,s.useCallback)((0,l.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.next=3,w();case 3:case"end":return e.stop()}}),e)}))),[]);return{navigateToCheckout:(0,s.useCallback)((function(){return t.push("/checkout")}),[]),subscription:j,handleCancelRequest:S,setCancelSubscription:v,cancelSubscription:x,cancelLoading:m}}},53013:function(e,n,t){t.r(n),t.d(n,{default:function(){return O}});var a=t(70885),s=t(47313),r=t(22489),i=t(1413),l=t(46417),o=(0,s.createContext)(null),c=function(e,n){return"SET_SEARCH_QUERY"===n.type?(0,i.Z)((0,i.Z)({},e),{},{searchQuery:n.payload}):e};function u(e){var n=e.children,t=(0,s.useReducer)(c,{searchQuery:""}),r=(0,a.Z)(t,2),i=r[0],u=r[1],d=(0,s.useCallback)((function(e){u({type:"SET_SEARCH_QUERY",payload:e})}),[]),m={searchQuery:i.searchQuery,setSearchQuery:d};return(0,l.jsx)(o.Provider,{value:m,children:n})}var d=function(){var e=(0,s.useContext)(o);if(!e)throw new Error("useBusinessContext must be used within the BusinessContextProvider");return e},m=t(90182),f=t(57718),h=t(3925);function p(){var e=d(),n=e.searchQuery,t=e.setSearchQuery;return(0,l.jsxs)("div",{className:"group-sidebar__search relative",children:[(0,l.jsx)("input",{type:"search",value:n,className:"group-sidebar__search-input w-full md:w-36 outline-none border-b border-kgrey-border-solid dark:border-white dark:text-white focus:border-primary dark:focus:border-primary transition pl-7 placeholder-[rgba(45, 45, 45, 0.3)] pt-2 pb-2 dark:bg-kdark",placeholder:"Search for staff",onChange:function(e){return t(e.target.value)}}),(0,l.jsx)("div",{className:"absolute top-1/2 -translate-y-1/2 left-0",children:(0,l.jsx)("div",{className:"text-kgrey",children:(0,l.jsx)(h.lnn,{})})})]})}var x=t(77344),v=t(95762),b=t(26926),y=t(58821),g=t(44329),j=t(94024),k=t(2213),w=t(23867),S=t(30806),C=t(28303),N=t(83061),_=t(93905),E=t(92241),Z=t(11760),P="No mobile number";function H(e){var n,t,i=e.fetchStaffCount,o=void 0===i?function(){}:i,c=(0,x.m)(),u=c.companyId,m=c.isAdmin,h=d().searchQuery,p=(0,Z.a)(),H=p.company,V=p.userData,R=(0,f.h0)(),A=R.page,B=R.handlePage,Q=R.removePage,D=(0,f.tv)(),K=D.match,O=D.history,M=(0,f.eC)().showNotification,Y=(0,E.I0)(),q=(0,f.Zp)().reloadEntityAll,F=(null===V||void 0===V?void 0:V.id)===(null===H||void 0===H||null===(n=H.company)||void 0===n||null===(t=n.owner)||void 0===t?void 0:t.id),L=(0,w.O)(o),U=L.deleteLoading,T=L.handleClientDelete,I=L.showDeleteVisible,G=L.closeDeletePopup,W=L.deleteVisible,z=L.editVisible,J=L.showEditVisible,X=L.closeEditPopup,$=L.staffCountLoading,ee=(0,j.Z)(h,500),ne=(0,a.Z)(ee,1)[0];(0,s.useEffect)((function(){return function(){return Q()}}),[]);var te=(0,f.iR)(),ae=te.visible,se=te.showVisible,re=te.loading,ie=te.toggleLoading,le=te.closePopup,oe=function(){return function(){return e=ae,ie(),void Y((0,_.Bi)({entity:"staffEmployee",name:"staffEmployee-".concat(u),method:"post",url:"/".concat(u,"/employee/").concat(e,"/resend_invitation/"),values:{},cb:{success:function(){q({entity:"staffEmployee",name:"staffEmployee-".concat(u),url:"/".concat(u,"/employee/"),params:{page:1,limit:10}}),le(),M({message:"Successfully resended",variant:"success"})},error:function(e){M({message:"Something went wrong",variant:"error"})},finally:function(){ie()}},params:{},primaryKey:"id"}));var e}};return(0,l.jsx)("div",{children:u?(0,l.jsx)(v.Z.All,{entity:"staffEmployee",name:"staffEmployee-".concat(u),url:"/".concat(u,"/employee/"),replaceIds:!0,params:{limit:10,extra:{search:ne},page:A},children:function(e){var n=e.items,t=e.isFetched,a=e.meta,s=n.map((function(e){return e}));return(0,l.jsxs)("div",{children:[(0,l.jsxs)(b.xJ,{classes:{root:"relative "},children:[(0,l.jsxs)(r.k6,{"aria-label":"simple table",classes:{root:"table-fixed dark-mode-styled-table"},children:[(0,l.jsx)(b.ss,{children:(0,l.jsxs)(r.AF,{children:[(0,l.jsx)(r.EU,{style:{width:"22%"},children:"Full name"}),(0,l.jsx)(r.EU,{style:{width:"24%"},children:"Email"}),(0,l.jsx)(r.EU,{style:{width:"18%"},children:"Phone number"}),(0,l.jsx)(r.EU,{style:{width:"12%"},children:"Role"}),(0,l.jsx)(r.EU,{style:{width:"10%"},children:"Status"}),(0,l.jsx)(r.EU,{style:{width:"14%"},children:"Actions"})]})}),(0,l.jsx)(b.RM,{children:s.map((function(e){var n=e.id,t=e.first_name,a=e.last_name,s=e.username,i=e.mobile,o=e.roles,c=e.state,u=e.avatar,d=e.is_business_owner,f=i?"+"===i[0]?i:"+".concat(i):P;return(0,l.jsxs)(r.AF,{children:[(0,l.jsx)(r.Yk,{children:(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)("div",{className:"w-9 h-9 flex-shrink-0",children:(0,S.w)((null===u||void 0===u?void 0:u.thumbnail)||(null===u||void 0===u?void 0:u.thumbnail_150),t)}),"Pending"===c?(0,l.jsx)("div",{className:"truncate",children:(0,l.jsxs)("span",{className:"ml-2 text-sm font-medium",children:[t," ",a]})}):(0,l.jsx)(C.rU,{className:"truncate",to:"".concat(K.path,"/view/").concat(e.id),children:(0,l.jsxs)("span",{className:"ml-2 text-sm font-medium text-primary transition hover:text-primary-dark",children:[t," ",a]})})]})}),(0,l.jsx)(r.Yk,{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:(0,l.jsx)("span",{className:"text-sm test-kdark-text",children:s})}),(0,l.jsx)(r.Yk,{children:f?(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)(y.lfG,{color:"#979797",size:"15px"}),(0,l.jsx)("a",{href:"tel:".concat(f),className:(0,N.Z)("ml-2 text-sm test-kdark-text align-middle ",{"text-primary hover:text-primary-dark":f!==P,"pointer-events-none":f===P}),children:f})]}):null}),(0,l.jsxs)(r.Yk,{children:[o.map((function(e,n){return(0,l.jsxs)("span",{className:"text-sx text-kgrey",children:[" "+e+" ",o.length>1?(0,l.jsx)("span",{className:"text-kgrey",children:"|"}):null,d?(0,l.jsx)("span",{children:"| owner"}):null]},"".concat(n,"_").concat(e))})),"Pending"===c?(0,l.jsx)(r.Ik,{color:"primary",onClick:function(){return se(n)},children:"Resend"}):null]}),(0,l.jsx)(r.Yk,{children:(0,l.jsx)("span",{className:(0,N.Z)("inline-block bg-primary text-white py-0.5 px-5 uppercase text-10px leading-4 rounded-4xl",{"bg-kgrey-inputBg text-kdark":"Pending"===c,"bg-primary-dark":"Logged"===c}),children:c})}),(0,l.jsx)(r.Yk,{children:(0,l.jsxs)("div",{className:"flex items-center justify-end ",children:[!d&&(0,l.jsx)(r.cP.DeleteButton,{isDisabled:!F&&(d||!m),clickHandler:function(){return I(e)}}),(0,l.jsx)(r.cP.ViewButton,{isDisabled:!m||"Pending"===c,clickHandler:function(){return O.push("".concat(K.path,"/view/").concat(n))}}),(0,l.jsx)(r.cP.EditButton,{isDisabled:F?"Pending"===c:d||!m||"Pending"===c,clickHandler:function(){return J(e)}})]})})]},n)}))})]}),t&&$&&(0,l.jsx)(r.aN,{tiled:!0,withOverlay:!0})]}),(0,l.jsx)(r.sm,{featureHandler:function(){return T(W)},isOpen:Boolean(W),toggleHandler:G,title:'Are you sure you want to delete the following staff member: "'.concat(null===W||void 0===W?void 0:W.first_name," ").concat(null===W||void 0===W?void 0:W.last_name,'"'),hasLoader:!0,isLoading:U}),(0,l.jsx)(r.sm,{featureHandler:oe(),isOpen:Boolean(ae),toggleHandler:le,title:"Are you sure to resend the Request",hasLoader:!0,isLoading:re}),(0,l.jsx)(b.Cx,{handleModalOpen:X,open:Boolean(z),maxWidth:490,minWidth:490,scrollable:!0,noPadding:!0,children:(0,l.jsx)(k.Z,{entity:z,onSuccess:X})}),(0,l.jsxs)("div",{className:"news__pagination my-4 flex items-center justify-between",children:[n.length?(0,l.jsx)(g.Z,{count:null===a||void 0===a?void 0:a.last_page,page:A?+A:1,defaultPage:6,siblingCount:1,color:"primary",onChange:B}):null,(0,l.jsx)("div",{className:"ml-4",children:(0,l.jsxs)("div",{className:"text-base font-medium dark:text-white",children:["Staff Count:"," ",(0,l.jsx)("span",{className:"ml-2 text-base font-semibold text-primary ",children:null===a||void 0===a?void 0:a.count})]})})]})]})}}):(0,l.jsx)("div",{className:"flex justify-center",children:(0,l.jsx)(r.aN,{})})})}function V(e){return(0,l.jsx)(r.SV,{children:(0,l.jsx)(H,(0,i.Z)({},e))})}var R=t(42982),A=t(84365),B=t(87180);function Q(e){var n=e.modalHandler,t=e.hasToShowGuard,a=e.formValuesSetter,r=e.fetchStaffCount,i=(0,x.m)().companyId,o=(0,s.useCallback)((function(){return n(null)}),[]),c=(0,f.eC)().showNotification;return(0,l.jsx)("div",{children:i?(0,l.jsx)(A.Z.Main,{entity:"staffEmployee",name:"staffEmployee-".concat(i),url:"".concat(i,"/employee/"),method:"post",primaryKey:"id",sendAsFormData:!1,normalizeData:function(e){return e},prependData:!0,fields:[{name:"avatar",required:!1,value:null,onSubmitKey:"",type:"object",onSubmitValue:function(e){return e||null}},{name:"first_name",required:!0,value:"",onSubmitKey:""},{name:"username",required:!0,value:"",onSubmitKey:""},{name:"last_name",required:!0,value:"",onSubmitKey:""},{name:"mobile",required:!0,value:"",onSubmitKey:""},{name:"roles",required:!0,value:{label:"Member",value:"member"},type:"object",onSubmitKey:"",onSubmitValue:function(e){return[e.value]}},{name:"departments",onSubmitValue:function(e){return e.reduce((function(e,n){return[].concat((0,R.Z)(e),[{id:n}])}),[])},value:[],required:!0,type:"array",onSubmitKey:""},{name:"can_send_news",required:!1,value:!0,onSubmitKey:""}],onSuccess:function(e,n){c({message:"Success! "}),r(),n(),o()},onError:function(e,n){var t,a,s;c({message:null!==(t=null===e||void 0===e||null===(a=e.response)||void 0===a||null===(s=a.data)||void 0===s?void 0:s.message)&&void 0!==t?t:"Something went wrong",variant:"error"}),n()},children:function(e){var n=e.isSubmitting,s=e.values,r=e.setFieldValue,i=e.errors,o=e.setFieldError,c=e.resetForm;return(0,l.jsx)(B.Z,{values:s,setFieldValue:r,setFieldError:o,isSubmitting:n,errors:i,formValuesSetter:a,closeModal:t,resetForm:c})}}):null})}Q.defaultProps={onSuccess:function(){}};var D=t(25434);function K(){var e,n,t,i=(0,x.m)(),o=i.isAdmin,c=i.isPermitted,u=(0,f.gQ)("Staff Management"),d=u.unreadCasesQuantity,h=u.isHidden,v=(0,s.useState)(!1),y=(0,a.Z)(v,2),g=y[0],j=y[1],k=(0,f.Tn)(),S=k.formValues,C=k.guardOpen,_=k.setGuardOpen,E=k.formValuesSetter,P=(0,s.useState)(!1),H=(0,a.Z)(P,2),R=H[0],A=H[1],B=(0,w.O)(),K=B.staffCountLoading,O=B.staffCountResponse,M=B.paidMemberCount,Y=B.fetchStaffCount,q=(0,f.tv)().history,F=(0,D.m)().subscription,L=(0,Z.a)(),U=L.company,T=L.userData,I=(null===U||void 0===U||null===(e=U.company)||void 0===e||null===(n=e.owner)||void 0===n?void 0:n.id)===T.id,G=(0,s.useRef)({});G.current.subscription=F,G.current.staffCountResponse=O,G.current.paidMemberCount=M;var W=(0,s.useCallback)((function(){var e=G.current||{},n=e.staffCountResponse,t=e.subscription,a=e.paidMemberCount;(null===n||void 0===n?void 0:n.staffs_count)<a||"TRIAL"===(null===t||void 0===t?void 0:t.subscription_type)&&null!==t&&void 0!==t&&t.is_available?j((function(e){return!e})):A(!0)}),[O,F,M]),z=(0,s.useCallback)((function(){_((function(e){return!e}))}),[]),J=(0,s.useCallback)((function(){_(!1),E([]),W()}),[g]),X=(0,s.useCallback)((function(){S.length?_(!0):W()}),[S]);return(0,l.jsxs)("div",{className:"p-4 max-w-full flex flex-col min-h-full flex-grow relative",children:[(!h||!I||0===d)&&(0,l.jsx)(m.q,{children:(0,l.jsx)("title",{children:"KENNEKT | Staff Management"})}),(0,l.jsxs)("div",{className:"mb-5",children:[(0,l.jsx)("div",{className:" w-full bg-kred-pink-200 absolute top-0 left-0",children:o?null:(0,l.jsx)("p",{className:"text-kred-pink text-center text-xs my-1",children:"You do not have permission to perform some actions, please check with admin"})}),(0,l.jsxs)("div",{className:"flex items-center justify-between flex-wrap w-full mt-6",children:[(0,l.jsxs)("div",{className:"flex flex-1 items-center font-bold mb-4",children:[(0,l.jsx)("h2",{className:"text-xl md:text-3xl dark:text-white ",children:"Staff Management"}),F&&F.order&&F.paid_staffs_count?(0,l.jsxs)("span",{className:"ml-4",children:[(0,l.jsx)("span",{className:"mr-1 text-sm text-kgrey-dark-3 font-light dark:text-white",children:"Users count:"}),(0,l.jsxs)("span",{className:"text-base font-semibold text-primary",children:[null!==(t=null===O||void 0===O?void 0:O.staffs_count)&&void 0!==t?t:0,"/",F.paid_staffs_count]})]}):null]}),(0,l.jsxs)("div",{className:"flex items-center  ml-auto max-w-full mb-4",children:[(0,l.jsx)(p,{}),(0,l.jsx)("button",{disabled:!c,type:"button",onClick:W,className:(0,N.Z)("bg-kgrey-bg rounded-xl text-sm md:text-base font-poppins text-center ml-5 px-4 py-2 hover:bg-primary-200 transition dark:bg-primary-300 dark:text-white",{"opacity-20 pointer-events-none":K}),children:"Add staff"})]})]})]}),(0,l.jsx)(V,{fetchStaffCount:Y}),(0,l.jsx)(r.sm,{featureHandler:function(){return q.push("/checkout")},isOpen:R,toggleHandler:function(){A(!1)},title:"You have reached limit to add staffs. Open checkout page?"}),(0,l.jsx)(b.Cx,{handleModalOpen:function(){S.length?_(!0):W()},open:g,maxWidth:446,noPadding:!0,scrollable:!0,children:(0,l.jsx)(Q,{modalHandler:W,hasToShowGuard:X,formValuesSetter:E,fetchStaffCount:Y})}),(0,l.jsx)(r.sm,{featureHandler:J,isOpen:C,toggleHandler:z,title:"You have unsaved changes, Are you sure to cancel?"})]})}var O=function(){return(0,l.jsx)(r.SV,{children:(0,l.jsx)(u,{children:(0,l.jsx)(K,{})})})}},30806:function(e,n,t){t.d(n,{w:function(){return r}});var a=t(3187),s=t(46417),r=function(e,n){return e?(0,s.jsx)(a.Z,{className:"inline-block",alt:n||"Business icon",src:e,style:{width:"100%",height:"100%"}}):(0,s.jsx)(a.Z,{className:"inline-block",style:{color:"#fff",width:"100%",height:"100%"},children:n?n[0].toUpperCase():null})}}}]);