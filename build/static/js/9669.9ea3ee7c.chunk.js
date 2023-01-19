"use strict";(self.webpackChunkkennekt_front_end_client=self.webpackChunkkennekt_front_end_client||[]).push([[9669],{2213:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(42982),r=(n(47313),n(84365)),l=n(77344),i=n(57718),s=n(87180),o=n(46417);function c(e){switch(e){case"member":return{label:"Member",value:"member"};case"admin":return{label:"Admin",value:"admin"};case"manager":return{label:"Manager",value:"manager"};default:return null}}function d(e){var t=e.entity,n=e.onSuccess,d=(0,l.m)().companyId,u=(0,i.r1)().updateEntities,m=(0,i.eC)().showNotification;return t?(0,o.jsx)("div",{children:d?(0,o.jsx)(r.Z.Main,{entity:"staffEmployee",name:"staffEmployee-".concat(d),url:"".concat(d,"/employee/").concat(t.id,"/"),method:"patch",id:t.id,primaryKey:"id",sendAsFormData:!1,normalizeData:function(e){return e},updateData:!0,fields:[{name:"avatar",required:!1,value:null===t||void 0===t?void 0:t.avatar,onSubmitKey:"",type:"object",onSubmitValue:function(e){return e||null}},{name:"first_name",required:!0,value:null===t||void 0===t?void 0:t.first_name,onSubmitKey:""},{name:"username",required:!0,value:null===t||void 0===t?void 0:t.username,onSubmitKey:""},{name:"last_name",required:!0,value:null===t||void 0===t?void 0:t.last_name,onSubmitKey:""},{name:"mobile",required:!0,value:null===t||void 0===t?void 0:t.mobile,onSubmitKey:""},{name:"roles",required:!0,value:c(null===t||void 0===t?void 0:t.roles[0]),type:"object",onSubmitKey:"",onSubmitValue:function(e){return[e.value]}},{name:"departments",onSubmitValue:function(e){return e.reduce((function(e,t){return[].concat((0,a.Z)(e),[{id:t}])}),[])},required:!0,type:"array",onSubmitKey:""},{name:"can_send_news",required:!1,value:!0,onSubmitKey:""}],onSuccess:function(e,a){m({message:"Success! "}),u({entity:"staffEmployee",entityId:null===t||void 0===t?void 0:t.id,updatingData:{departments:null===e||void 0===e?void 0:e.departments}}),a(),n()},onError:function(e,t){var n,a,r;m({message:null!==(n=null===e||void 0===e||null===(a=e.response)||void 0===a||null===(r=a.data)||void 0===r?void 0:r.message)&&void 0!==n?n:"Something went wrong",variant:"error"}),t()},children:function(e){var a=e.isSubmitting,r=e.values,l=e.setFieldValue,i=e.errors,c=e.setFieldError,d=e.resetForm;return(0,o.jsx)(s.Z,{values:r,setFieldValue:l,setFieldError:c,isSubmitting:a,errors:i,closeModal:n,resetForm:d,departments:null===t||void 0===t?void 0:t.departments,isCreate:!1,isBeingEditedUserOwner:t.is_business_owner})}}):null}):null}d.defaultProps={onSuccess:function(){}}},87180:function(e,t,n){n.d(t,{Z:function(){return k}});var a=n(1413),r=n(42982),l=n(70885),i=n(47313),s=n(94715),o=n(17480),c=n(63876),d=n(22934),u=n(46225),m=n(77344),f=n(26402),p=n(69706),v=n.n(p),h=n(57864),x=n(32335),b=n(95762),g=n(12715),y=n(57718),j=n(11760),w=n(83061),S=n(46417),_="".concat(x.Z.PUBLIC_ASSETS,"img"),N=[{label:"Admin",value:"admin"},{label:"Manager",value:"manager"},{label:"Member",value:"member"}];function k(e){var t,n,p=e.values,x=e.setFieldValue,k=(e.setFieldError,e.isSubmitting),C=e.errors,Z=e.closeModal,E=e.resetForm,D=e.isCreate,F=e.departments,P=e.formValuesSetter,V=void 0===P?function(){}:P,T=e.isBeingEditedUserOwner,M=void 0!==T&&T,A=(0,m.m)(),K=A.companyId,q=A.isDarkMode,L=(0,j.a)(),I=L.company,B=L.userData,O=(0,y.h9)({canSend:!D&&p.can_send_news}),U=O.checked,z=(O.handleChange,(0,i.useState)(null)),R=(0,l.Z)(z,2),X=R[0],Y=R[1],H=(0,i.useState)(!1),G=(0,l.Z)(H,2),J=G[0],Q=G[1],W=(0,i.useState)(D?null===p||void 0===p?void 0:p.avatar:null),$=(0,l.Z)(W,2),ee=$[0],te=$[1],ne=B.id===(null===I||void 0===I||null===(t=I.company)||void 0===t||null===(n=t.owner)||void 0===n?void 0:n.id),ae=(0,i.useState)({clientDeps:F?F.reduce((function(e,t){return t.is_staff?(0,r.Z)(e):[].concat((0,r.Z)(e),[t.id])}),[]):[],staffDeps:F?F.reduce((function(e,t){return t.is_staff?[].concat((0,r.Z)(e),[t.id]):(0,r.Z)(e)}),[]):[]}),re=(0,l.Z)(ae,2),le=re[0],ie=re[1],se=[],oe=[];(0,i.useEffect)((function(){ee&&x("avatar",ee)}),[ee]);var ce=le.clientDeps,de=le.staffDeps;(0,i.useEffect)((function(){x("departments",[].concat((0,r.Z)(ce),(0,r.Z)(de)))}),[le]),(0,i.useEffect)((function(){if(D){var e=["first_name","username","last_name","mobile","departments"],t=Object.keys(p).filter((function(t){if((Array.isArray(p[t])?p[t].length:p[t])&&e.includes(t))return p[t]}));V(t)}}),[p]),(0,i.useEffect)((function(){x("can_send_news",U.canSend)}),[U.canSend]);var ue=window.location.href.includes("qa")||!1;return(0,S.jsxs)("div",{id:"department-form",children:[(0,S.jsxs)("div",{className:"branch-form__header border-b border-kgrey-dark-1/30 px-6 py-4 -mt-5 flex-center-between",children:[(0,S.jsx)("div",{className:"branch-form__heading font-base font-medium",children:"".concat(D?"Create new":"Edit"," staff")}),D?(0,S.jsx)("div",{className:"branch-form__reset text-kgrey text-sm cursor-pointer hover:text-kdark transition",onClick:E,children:"Clear"}):null]}),(0,S.jsxs)("div",{className:" w-100 p-6",children:[(0,S.jsx)("div",{className:"text-sm font-light mb-2 ml-2 text-kgrey-menuText",children:"Profile photo"}),(0,S.jsxs)("div",{className:"flex items-center mb-5",children:[(0,S.jsxs)("div",{className:"user-avatar-box__display relative dark:bg-kdark-lighter  w-20 h-20 rounded-full overflow-hidden flex-centered",children:[(0,S.jsx)("img",{src:D?v()(ee,"thumbnail_150")||"".concat(_,"/chat-placeholder.png"):v()(null===p||void 0===p?void 0:p.avatar,"thumbnail_150")||"".concat(_,"/chat-placeholder.png"),alt:"",className:"object-fit"}),null!==X&&(0,S.jsxs)("div",{className:"absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 z-10",children:[(0,S.jsx)("div",{className:"upload-media-spinner",children:(0,S.jsx)(c.aN,{variant:"determinate",value:X})}),(0,S.jsx)("div",{onClick:function(){Q(!0),Y(null)},className:"absolute w-8 h-8 z-20 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-3xl text-primary-dark hover:text-primary transition cursor-pointer",children:(0,S.jsx)(h.SV5,{})})]})]}),(0,S.jsx)("div",{className:"ml-5",children:(0,S.jsx)(c.bA,{uploadMeta:X,setUploadMeta:Y,cancelSending:J,setCancelSending:Q,setFile:te})})]}),(0,S.jsx)(s.gN,{label:"First name:",name:"first_name",component:o.Mg,placeholder:"Enter First name"}),(0,S.jsx)(s.gN,{label:"Last name",name:"last_name",component:o.Mg,placeholder:"Enter Last name"}),(0,S.jsx)(s.gN,{type:"email",label:"Email",name:"username",component:o.Mg,placeholder:"Enter Email"}),(0,S.jsx)(s.gN,{label:"Phone number",name:"mobile",component:o.UO,placeholder:"Enter company mobile phone number",enableSearch:!0,onChangeHandler:x}),(0,S.jsxs)("div",{className:"row align-user-start remove-inner-label mb-3.5",children:[(0,S.jsx)("div",{className:"text-sm font-light mb-2 ml-2 text-kgrey-menuText",children:"Staff Departments"}),(0,S.jsx)(b.Z.All,{entity:"tree",name:"AllTreeDepartments-Staff-".concat(K),url:"/".concat(K,"/departments/tree/"),params:{limit:100,extra:{is_staff:"True"}},children:function(e){var t=e.items,n=e.isFetched;return se=n&&(0,g.w)(t),(0,S.jsx)(S.Fragment,{children:n?(0,S.jsxs)("div",{children:[(0,S.jsx)(f.ZP,(0,a.Z)({getPopupContainer:function(e){return e.parentNode},className:(0,w.Z)("w-full",{"tree-select-dark-mode":q}),transitionName:"rc-tree-select-dropdown-slide-up",choiceTransitionName:"rc-tree-select-selection__choice-zoom",dropdownStyle:{overflow:"auto"},dropdownPopupAlign:{overflow:{adjustY:0,adjustX:0},offset:[0,2]},placeholder:(0,S.jsx)("i",{children:"Select Staff Departments"}),searchPlaceholder:"please search",treeLine:!0,maxTagTextLength:10,multiple:!0,allowClear:!0,autoClearSearchValue:!0,treeData:se,treeNodeFilterProp:"title",treeCheckable:!0,showCheckedStrategy:f.hT,onChange:function(e){ie((function(t){return(0,a.Z)((0,a.Z)({},t),{},{staffDeps:e})}))}},D?null:{value:(0,r.Z)(de)})),null!==de&&void 0!==de&&de.length?null:(0,S.jsx)(s.Bc,{name:"departments",children:function(e){return(0,S.jsx)("div",{className:"text-xs text-red-500 mt-0.5",children:e})}}),null!==de&&void 0!==de&&de.length||null!==C&&void 0!==C&&C.departments?null:(0,S.jsx)("p",{className:"text-xs text-red-500 mt-0.5",children:"Select at least one staff department"})]}):(0,S.jsx)("div",{className:"flex justify-center",children:(0,S.jsx)(c.aN,{})})})}})]}),(0,S.jsxs)("div",{className:"mb-3.5",children:[(0,S.jsx)("div",{className:"text-sm font-light mb-2 ml-2 text-kgrey-menuText",children:"Client Departments"}),(0,S.jsx)(b.Z.All,{entity:"tree",name:"AllTreeDepartments-Client-".concat(K),url:"/".concat(K,"/departments/tree/"),params:{limit:100,extra:{is_staff:"False"}},children:function(e){var t=e.items,n=e.isFetched;return oe=n&&(0,g.w)(t),(0,S.jsx)(S.Fragment,{children:n?(0,S.jsxs)("div",{children:[(0,S.jsx)(f.ZP,(0,a.Z)({getPopupContainer:function(e){return e.parentNode},className:(0,w.Z)("w-full",{"tree-select-dark-mode":q}),transitionName:"rc-tree-select-dropdown-slide-up",choiceTransitionName:"rc-tree-select-selection__choice-zoom",dropdownStyle:{overflow:"auto"},dropdownPopupAlign:{overflow:{adjustY:0,adjustX:0},offset:[0,2]},placeholder:(0,S.jsx)("i",{children:"Select \u0421lient Departments"}),searchPlaceholder:"please search",treeLine:!0,maxTagTextLength:10,multiple:!0,allowClear:!0,autoClearSearchValue:!0,treeData:oe,treeNodeFilterProp:"title",treeCheckable:!0,showCheckedStrategy:f.hT,onChange:function(e){ie((function(t){return(0,a.Z)((0,a.Z)({},t),{},{clientDeps:e})}))}},D?null:{value:(0,r.Z)(ce)})),null!==ce&&void 0!==ce&&ce.length?null:(0,S.jsx)(s.Bc,{name:"departments",children:function(e){return(0,S.jsx)("div",{className:"text-xs text-red-500 mt-0.5",children:e})}})]}):(0,S.jsx)("div",{className:"flex justify-center",children:(0,S.jsx)(c.aN,{})})})}})]}),(0,S.jsxs)("div",{className:"mb-3.5",children:[(0,S.jsx)("div",{className:"text-sm font-light mb-2 text-kgrey-menuText ml-2",children:"Roles"}),(0,S.jsx)(s.gN,{component:o.mg,styles:d.gb,name:"roles",defaultValue:N[2],options:[].concat(N,(0,r.Z)(ne&&ue?[{label:"Owner",value:"owner"}]:[])),isSearchable:!u.tq,isDisabled:M})]})]}),(0,S.jsxs)("div",{className:"branch-form__footer px-6 pt-4 pb-9 flex justify-end",children:[(0,S.jsx)(c.Ik,{className:"text-kgrey border-kgrey border mr-5",color:"default",onClick:Z,children:"Cancel"}),(0,S.jsx)(c.Ik,{className:"dark:hover:bg-primary-300 dark:focus:ring-primary-300 dark:text-white",type:"submit",isSubmitting:k,color:"primary",isDisabled:!(null!==de&&void 0!==de&&de.length)&&!(null!==C&&void 0!==C&&C.departments),children:D?"Create":"Update"})]}),k?(0,S.jsx)("div",{className:"absolute inset-0 flex items-center justify-center bg-white bg-opacity-70",children:(0,S.jsx)(c.aN,{})}):null]})}k.defaultProps={isCreate:!0,department:null,resetForm:function(){}}},23867:function(e,t,n){n.d(t,{O:function(){return f}});var a=n(15861),r=n(70885),l=n(64687),i=n.n(l),s=n(57718),o=n(77344),c=n(93905),d=n(92241),u=n(47313),m=n(11760);function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},t=(0,o.m)(),n=t.companyId,l=(0,m.a)(),f=l.companies,p=(0,d.I0)(),v=(0,s.eC)(),h=v.showNotification,x=(0,s.r1)(),b=x.updateEntities,g=(0,u.useState)(0),y=(0,r.Z)(g,2),j=y[0],w=y[1],S=(0,s.iR)(),_=S.visible,N=S.showVisible,k=S.loading,C=S.toggleLoading,Z=S.closePopup,E=(0,s.iR)(),D=E.visible,F=E.showVisible,P=E.closePopup,V=(0,u.useMemo)((function(){return"/".concat(n,"/companies/staffs_count/")}),[n]),T=(0,s.bK)({url:V}),M=T.fetchData,A=T.response,K=T.loading;(0,u.useEffect)((function(){n&&(0,a.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M();case 2:case"end":return e.stop()}}),e)})))()}),[n]),(0,u.useEffect)((function(){if(n&&f.length){var e=f.find((function(e){return e.company.id===n})),t=null===e||void 0===e?void 0:e.company.comp_subscription;t&&w(t.paid_staffs_count)}}),[f,n]);var q=function(){b({entity:"staffEmployee",entityId:null===_||void 0===_?void 0:_.id,updatingData:{roles:[]}})},L=function(t){C(),p((0,c.Bi)({entity:"staffEmployee",name:"staffEmployee-".concat(n),method:"delete",url:"/".concat(n,"/employee/").concat(t.id,"/"),deleteData:!0,id:t.id,cb:{success:function(){h({message:"Successfully deleted",variant:"success"}),p((0,c.KX)("staffEmployee","staffEmployee-".concat(n))),q(),e()},error:function(e){var t,n;h({message:null===e||void 0===e||null===(t=e.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.message,variant:"error"})},finally:function(){C(),Z()}},params:{},primaryKey:"id",values:{}}))};return{deleteLoading:k,handleClientDelete:L,showDeleteVisible:N,closeDeletePopup:Z,deleteVisible:_,editVisible:D,showEditVisible:F,closeEditPopup:P,staffCountLoading:K,staffCountResponse:A,paidMemberCount:j,fetchStaffCount:M}}},12715:function(e,t,n){n.d(t,{w:function(){return r}});var a=n(42982),r=function e(t){return t.reduce((function(t,n){if(!(n.sub_departments.length>0))return[].concat((0,a.Z)(t),[{title:n.name,key:n.id,value:n.id}]);for(;n.sub_departments.length>0;)return[].concat((0,a.Z)(t),[{title:n.name,key:n.id,value:n.id,children:e(n.sub_departments)}])}),[])}}}]);