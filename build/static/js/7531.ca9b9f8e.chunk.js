"use strict";(self.webpackChunkkennekt_front_end_client=self.webpackChunkkennekt_front_end_client||[]).push([[7531],{17531:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var a=n(1413),r=n(70885),l=n(47313),s=n(63876),i=n(90182),u=n(57718),o=n(3925),c=n(15103),d=n(46417);function m(){var e=(0,c.tT)(),t=e.searchQuery,n=e.setSearchQuery;return(0,d.jsxs)("div",{className:"group-sidebar__search relative",children:[(0,d.jsx)("input",{type:"search",value:t,className:"group-sidebar__search-input w-full md:w-36 outline-none border-b border-kgrey-border-solid dark:border-white dark:text-white focus:border-primary transition pl-7 placeholder-[rgba(45, 45, 45, 0.3)] pt-2 pb-2 dark:bg-kdark dark:focus:border-primary",placeholder:"Search",onChange:function(e){return n(e.target.value)}}),(0,d.jsx)("div",{className:"absolute top-1/2 -translate-y-1/2 left-0",children:(0,d.jsx)("div",{className:"text-kgrey",children:(0,d.jsx)(o.lnn,{})})})]})}var f=n(28303),p=n(63830),b=n(26926),h=n(84365),x=n(77344),v=n(8279),S=n(69706),y=n.n(S);function j(e){var t=e.handleModalOpen,n=e.page,a=e.isStaff,s=e.hasToShowGuard,i=e.formValuesSetter,o=(0,x.m)().companyId,m=(0,l.useCallback)((function(){return t(null)}),[]),f=(0,u.eC)().showNotification,p=(0,u.Zp)().reloadEntityAll,b=(0,c.tT)().searchQuery,S=(0,l.useState)(!1),j=(0,r.Z)(S,2),k=j[0],g=j[1];return(0,d.jsx)("div",{children:o?(0,d.jsx)(h.Z.Main,{entity:"departments",name:"AllDepartments-".concat(o),url:"".concat(o,"/departments/"),method:"post",primaryKey:"id",sendAsFormData:!1,normalizeData:function(e){return e},appendData:!0,fields:[{name:"icon",required:!1,value:null,onSubmitKey:"",type:"object",onSubmitValue:function(e){return e||null}},{name:"name",required:!0,value:"",onSubmitKey:""},{name:"link",required:!1,value:null,onSubmitKey:"",onSubmitValue:function(e){return e||null}},{name:"phone",required:!1,value:null,onSubmitKey:""},{name:"is_staff",required:!1,value:"true",onSubmitKey:""},{name:"case_escalation_time",required:!1,value:null,onSubmitKey:"",onSubmitValue:function(e){return e?parseInt(e):null}},{name:"case_escalation_time_unit",required:!1,value:{label:"minutes",value:"MINUTES"},onSubmitKey:"",onSubmitValue:function(e){return e.value},type:"object"},{name:"initial_response_time",required:!1,value:null,onSubmitKey:""},{name:"initial_response_time_unit",required:!1,value:{label:"minutes",value:"MINUTES"},onSubmitKey:"",onSubmitValue:function(e){return e.value},type:"object"},{name:"auto_case_create",required:!1,value:!1,onSubmitKey:""},{name:"acc_status",onSubmitValue:function(e){return y()(e,"id")},onSubmitKey:"",type:"object",required:k},{name:"acc_linked_email",required:!1,value:null,onSubmitValue:function(e){return e||null},onSubmitKey:""}],onSuccess:function(e,t){f({message:"Success! "}),t(),p({entity:"departments",name:"AllDepartments-".concat(o),url:"/".concat(o,"/departments/"),params:{page:n,limit:10,extra:{is_staff:a,search:b}}}),m()},onError:function(e,t){var n,a;f({message:null===e||void 0===e||null===(n=e.response)||void 0===n||null===(a=n.data)||void 0===a?void 0:a.message,variant:"error"}),t()},children:function(e){var t=e.isSubmitting,n=e.values,a=e.setFieldValue,r=e.errors,l=e.setFieldError,u=e.resetForm;return(0,d.jsx)(v.Z,{values:n,setFieldValue:a,setFieldError:l,isSubmitting:t,errors:r,resetForm:u,formValuesSetter:i,closeModal:s,setAccStatusRequired:g})}}):null})}s.Dy.defaultProps={onSuccess:function(){}};var k=(0,l.lazy)((function(){return n.e(2828).then(n.bind(n,12828))}));function g(e){return{id:"simple-tabpanel-".concat(e),"aria-controls":"simple-tab-".concat(e)}}function _(e){var t=e.match,n=(0,x.m)(),o=n.isPermitted,h=n.isAdmin,v=l.useState(0),S=(0,r.Z)(v,2),y=S[0],_=S[1],w=t.url,N=t.path,K=(0,u.gQ)("Departments"),V=K.unreadCasesQuantity,q=K.isHidden,C=(0,c.tT)(),T=C.setIsStaff,E=C.isStaff,D=(0,p.k6)(),Z=(0,l.useState)(!1),A=(0,r.Z)(Z,2),F=A[0],M=A[1],O=(0,u.h0)().page,I=(0,u.Tn)(),Q=I.formValues,U=I.guardOpen,G=I.setGuardOpen,H=I.formValuesSetter,J=function(){return M((function(e){return!e}))},P=(0,l.useCallback)((function(){G((function(e){return!e}))}),[]),W=(0,l.useCallback)((function(){G(!1),H([]),J()}),[F]),z=(0,l.useCallback)((function(){Q.length?G(!0):J()}),[Q]);return(0,l.useEffect)((function(){0===y&&D.push("".concat(w,"?is-staff=true"))}),[D]),(0,l.useEffect)((function(){_("true"===E?0:1),D.push("".concat(w,"?is-staff=").concat(E))}),[E]),(0,d.jsxs)("div",{className:"p-4 w-full flex flex-col min-h-full flex-grow relative",children:[(!q||0===V)&&(0,d.jsx)(i.q,{children:(0,d.jsx)("title",{children:"KENNEKT | Departments "})}),(0,d.jsxs)("div",{className:"mb-5",children:[(0,d.jsx)("div",{className:" w-full bg-kred-pink-200 absolute top-0 left-0",children:h?null:(0,d.jsx)("p",{className:"text-kred-pink text-center text-xs my-1",children:"You do not have permission to perform some actions, please check with admin"})}),(0,d.jsxs)("div",{className:"flex items-center justify-between flex-wrap w-full mt-5",children:[(0,d.jsx)("h2",{className:"text-xl md:text-3xl font-bold dark:text-white py-4 mr-5",children:"Departments"}),(0,d.jsxs)("div",{className:"flex items-center w-full md:w-auto",children:[(0,d.jsx)(m,{}),(0,d.jsx)("button",{disabled:!o,className:"bg-kgrey-bg rounded-xl ml-2 sm:ml-5 text-sm md:text-base font-poppins text-center px-4 py-2 hover:bg-primary-200 transition dark:bg-primary-300 dark:text-white disabled:opacity-60",onClick:J,children:"New department"})]})]})]}),(0,d.jsx)("div",{className:"prime-tabs",children:(0,d.jsxs)(s.sJ.Tabs,{roundedTop:!0,value:y,onChange:function(e,t){switch(t){case 0:T("true");break;case 1:T("false");break;default:return null}_(t)},"aria-label":"simple tabs",children:[(0,d.jsx)(s.sJ.Tab,(0,a.Z)({label:"Staff departments",component:f.rU,to:"".concat(w,"?is-staff=true")},g(0))),(0,d.jsx)(s.sJ.Tab,(0,a.Z)({label:"Client departments",component:f.rU,to:"".concat(w,"?is-staff=false")},g(1)))]})}),(0,d.jsx)("div",{className:"max-w-full flex-grow flex flex-col relative",children:(0,d.jsx)("div",{className:"relative flex-grow",children:(0,d.jsx)(l.Suspense,{fallback:(0,d.jsx)(s.aN,{tiled:!0}),children:(0,d.jsx)(p.rs,{children:(0,d.jsx)(p.AW,{exact:!0,path:N,component:k})})})})}),(0,d.jsx)(b.Cx,{maxWidth:466,minWidth:466,handleModalOpen:function(){Q.length?G(!0):J()},open:Boolean(F),scrollable:!0,noPadding:!0,children:(0,d.jsx)(j,{page:O,isStaff:E,hasToShowGuard:z,formValuesSetter:H,handleModalOpen:J})}),(0,d.jsx)(s.sm,{featureHandler:W,isOpen:U,toggleHandler:P,title:"You have unsaved changes, Are you sure to cancel?"})]})}var w=function(e){return(0,d.jsx)(s.SV,{children:(0,d.jsx)(c.$i,{children:(0,d.jsx)(_,(0,a.Z)({},e))})})}}}]);