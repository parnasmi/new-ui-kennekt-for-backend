!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="c01bf5aa-b621-48db-88db-3f8736a7bf7e",e._sentryDebugIdIdentifier="sentry-dbid-c01bf5aa-b621-48db-88db-3f8736a7bf7e")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"1d419c3c8a5f66a775a003b801a7dad6c0430a71"},(self.webpackChunkkennekt_front_end_client=self.webpackChunkkennekt_front_end_client||[]).push([[9433],{59433:function(e,n,l){l.r(n),l.d(n,{default:function(){return Z}});var t=l(72791),a=l(16178),s=l(35741),i=l(40084),r=l(66128),o=l(53148),c=l(26181),d=l.n(c),m=l(73677),u=l(27945),h=l(1413),p=l(29439),x=l(9478),y=l(76188),b=l(59099),g=l(80266),f=l(77917),v=l(37099),j=l(66364),_=l.n(j),w=l(17173),N=l(80184),k="".concat(x.Z.PUBLIC_ASSETS,"img/");function C(e){var n=e.setFieldValue,l=e.onSuccess,s=e.isSubmitting,c=(0,i.m)().companyId,m=(0,t.useState)({firstname:"",lastname:"",phone:"",email:"",avatar:"".concat(k,"avatar-placeholder.png"),is_individual:!0,businessName:null}),u=(0,p.Z)(m,2),x=u[0],j=u[1],C=x.firstname,S=x.lastname,F=x.phone,I=x.email,P=x.avatar,A=x.is_individual,E=x.businessName,U=(0,t.useState)({}),O=(0,p.Z)(U,2),L=O[0],D=O[1],q=(0,w.$G)().t;(0,a.ZS)((function(){var e=d()(L,"is_individual"),n=d()(L,"owner.first_name"),l=d()(L,"owner.last_name"),t=d()(L,"owner.mobile"),a=d()(L,"owner.username"),s=d()(L,"owner.avatar.thumbnail_150");return j((function(i){return(0,h.Z)((0,h.Z)({},i),{},{firstname:n||"No Firstname",lastname:l||"No Lastname",phone:e?t:L.phone||"No Phone",email:a||"No Email",avatar:s||null,is_individual:e,businessName:e?null:d()(L,"name")})})),function(){D({})}}),[L]);var K=!_()(L);return(0,N.jsxs)("div",{className:"react-select-dropdown w-full",children:[(0,N.jsx)("div",{className:"react-select-dropdown mb-4",children:(0,N.jsx)(r.qb,{name:"route",customStylesProps:g.gb,placeholder:q("select_client_to_link"),optionLabel:function(e){return d()(e,"first_name")&&d()(e,"last_name")?"".concat(d()(e,"first_name")," ").concat(d()(e,"last_name")," (").concat(d()(e,"name"),") ").concat(d()(e,"is_individual")?" - ".concat(q("individual")):" - ".concat(q("business"))):"".concat(d()(e,"name")," ").concat(d()(e,"is_individual")?" - ".concat(q("individual")):" - ".concat(q("business")))},optionValue:"id",loadOptionsUrl:"/".concat(c,"/client_companies/"),loadOptionsParams:function(e){return{extra:{search:e}}},loadOptionsKey:"results",isSearchable:!0,isClearable:!0,onChange:function(e){e?(n("from_company",e.id),D(e)):D({})}})}),K?(0,N.jsx)(y.gN,{component:v.Z,customStylesProps:g.gb,name:"role",placeholder:q("select_role"),optionLabel:"name",optionValue:"id",isSearchable:!0,isClearable:!1,loadOptionsKey:"results",loadOptionsUrl:"/".concat(c,"/my/company/client/roles/"),loadOptionsParams:function(e){return{extra:{search:e}}}}):null,!A&&K?(0,N.jsx)("div",{className:"mt-4",children:(0,N.jsx)(f.Qp,{name:"businessName",placeholder:"Business name",label:q("business_name"),onChange:function(){},value:E,error:!1,helperText:"",disabled:!0})}):null,A&&K?(0,N.jsx)("div",{className:"mt-4",children:(0,N.jsx)(f.Qp,{name:"fullName",placeholder:"Full name",label:q("full_name"),onChange:function(){},value:"".concat(C," ").concat(S),error:!1,helperText:"",disabled:!0})}):null,K?(0,N.jsxs)("div",{className:"mb-4 flex items-end justify-between",children:[(0,N.jsx)("div",{className:"flex-grow",children:(0,N.jsx)(f.Qp,{name:"phone",placeholder:"Phone",label:q("phone"),onChange:function(){},value:F,error:!1,helperText:"",disabled:!0,classNames:"!mb-0"})}),(0,N.jsx)(o.Rz,{size:40,letter:(null==E?void 0:E[0])||(null==C?void 0:C[0]),alt:E||C,src:P,className:"ml-4 mb-1"})]}):null,A&&K?(0,N.jsx)("div",{className:"mt-4",children:(0,N.jsx)(f.Qp,{name:"email",placeholder:"Email",label:q("email"),onChange:function(){},value:I,error:!1,helperText:"",disabled:!0})}):null,(0,N.jsx)("div",{className:"flex-center-between mt-8",children:(0,N.jsx)(b.p,{onSuccess:l,isSubmitting:s,submitText:q("create"),disableOptions:!K})})]})}function S(e){var n=e.onSuccess,l=e.clientId,t=(0,i.m)().companyId,s=(0,a.eC)().showNotification,o=(0,w.$G)().t;return(0,N.jsx)(N.Fragment,{children:(0,N.jsx)(u.Z.Main,{entity:"linked-clients",name:"AllLinkedClients",url:"/".concat(t,"/my/company/linked_client/"),method:"post",primaryKey:"id",sendAsFormData:!1,normalizeData:function(e){return e},prependData:!0,fields:[{name:"role",onSubmitValue:function(e){return d()(e,"id")},onSubmitKey:"",required:!0,type:"object"},{name:"from_company",onSubmitKey:""},{name:"to_company",value:Number(l),onSubmitKey:""}],onSuccess:function(e,l){s({message:o("successfully_created")}),n(),l()},onError:function(e,n){var l,t,a=(null==e||null===(l=e.response)||void 0===l||null===(t=l.data)||void 0===t?void 0:t.message)||o("something_went_wrong");s({message:a,variant:"error"})},children:function(e){var l=e.isSubmitting,t=(e.values,e.setFieldValue),a=e.resetForm;return(0,N.jsxs)("div",{children:[(0,N.jsx)(r.ph,{resetForm:a,title:o("search_client_to_link"),isEditing:!0}),(0,N.jsx)(N.Fragment,{children:(0,N.jsxs)("div",{className:"flex items-center",children:[(0,N.jsx)(C,{setFieldValue:t,isSubmitting:l,onSuccess:n}),l&&(0,N.jsx)(r.aN,{tiled:!0,withOverlay:!0})]})})]})}})})}function F(e){var n=e.clientId,l=(0,i.m)(),t=l.companyId,c=l.isPermitted,u=(0,a.h0)(),h=u.page,p=u.handlePage,x=(0,a.A3)(),y=x.query,b=x.setQuery,f=x.searchQuery,v=(0,a.dF)(),j=v.open,_=v.modalHandler,k=v.WhiteModal,C=(0,w.$G)().t,F=(0,m.tY)(),I=F.handleRoleUpdate,P=F.deleteVisible,A=F.showDeleteVisible,E=F.deleteLoading,U=F.closeDeletePopup,O=F.handleLinkedClientDelete;return(0,N.jsxs)("div",{className:"relative mb-8",children:[(0,N.jsx)(o.Bu,{title:C("linked_clients"),query:y,isPermitted:c,placeholder:C("search_for_linked_clients"),handleSearch:function(e){return b(e.target.value)},btnHandler:_,btnText:C("new_linked_client")}),t?(0,N.jsx)(s.Z.All,{entity:"linked-clients",name:"AllLinkedClients",url:"/".concat(t,"/my/company/linked_client/"),params:{page:h,limit:5,extra:{search:f,to_company:n.toString()}},children:function(e){var l=e.items,a=e.isFetched,s=e.meta;return(0,N.jsx)(N.Fragment,{children:a?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(o.xJ,{className:"!overflow-visible",classes:{root:"relative "},children:(0,N.jsxs)(r.k6,{"aria-label":"simple table",classes:{root:"table-fixed dark-mode-styled-table"},children:[(0,N.jsx)(o.ss,{children:(0,N.jsxs)(r.AF,{children:[(0,N.jsx)(r.EU,{style:{width:"22%"},children:C("client_name")}),(0,N.jsx)(r.EU,{style:{width:"10%"},children:C("client_type")}),(0,N.jsx)(r.EU,{style:{width:"22%"},children:C("email")}),(0,N.jsx)(r.EU,{style:{width:"13%"},children:C("phone_number")}),(0,N.jsx)(r.EU,{style:{width:"25%"},children:C("role")}),(0,N.jsx)(r.EU,{style:{width:"8%"},children:C("actions")})]})}),(0,N.jsx)(o.RM,{children:l.map((function(e){var n=e.id,l=void 0===n?void 0:n,a=d()(e,"from_company_details.first_name"),s=d()(e,"from_company_details.last_name"),i=d()(e,"from_company_details.username"),o=d()(e,"from_company_details.mobile"),m=d()(e,"from_company_details");return(0,N.jsxs)(r.AF,{children:[(0,N.jsx)(r.Yk,{children:a?"".concat(a," ").concat(s):d()(e,"from_company.name","")}),(0,N.jsx)(r.Yk,{children:C(m?"individual":"business")}),(0,N.jsx)(r.Yk,{children:(0,N.jsx)("div",{className:"truncate",children:i||"No email"})}),(0,N.jsx)(r.Yk,{children:o||d()(e,"from_company.phone","")}),(0,N.jsx)(r.Yk,{children:(0,N.jsx)("div",{className:"react-select-dropdown",children:(0,N.jsx)(r.qb,{name:"route",customStylesProps:g.gb,placeholder:"Choose role here",optionLabel:"name",optionValue:"id",loadOptionsUrl:"/".concat(t,"/my/company/client/roles/"),loadOptionsParams:function(e){return{extra:{search:e}}},value:e.role,loadOptionsKey:"results",isSearchable:!0,isClearable:!0,onChange:function(n){I(n,e)}})})}),(0,N.jsx)(r.Yk,{children:(0,N.jsx)("div",{className:"flex-centered",children:(0,N.jsx)(r.cP.DeleteButton,{isDisabled:!c,clickHandler:function(){return A(e)}})})})]},l)}))})]})}),(0,N.jsx)("div",{className:"news__pagination my-4",children:l.length?(0,N.jsx)(o.tl,{count:null==s?void 0:s.last_page,page:h?+h:1,defaultPage:6,siblingCount:1,color:"primary",onChange:p}):null}),(0,N.jsx)(k,{open:j,handleModalOpen:_,children:(0,N.jsx)(S,{onSuccess:_,clientId:n})}),(0,N.jsx)(r.sm,{featureHandler:function(){return O(P)},isOpen:Boolean(P),toggleHandler:U,title:"Are You Sure To Delete Linked Client?",hasLoader:!0,isLoading:E})]}):(0,N.jsx)(r.aN,{tiled:!0,withOverlay:!0})})}}):null]})}var I=l(73469),P=l(87987),A=l(58617),E=l(56355),U=l(92112),O=l(19053);function L(e){var n=e.clientCompany,l=e.isIndividual,t=(0,w.$G)().t,a=(0,I.$)(l,n.name,n.owner);return(0,N.jsxs)("div",{className:"mb-8 flex flex-wrap items-center",children:[(0,N.jsx)("div",{className:"py-4",children:(0,N.jsx)(o.Rz,{size:108,letter:a[0],alt:a,src:(0,P.n)(l,n.icon,n.owner),className:"!mr-8"})}),(0,N.jsx)(o.ev,{text:t((0,O.u)(n.status)),title:t("status"),wrapperClassnames:"bg-kgrey-bgmenu",textClassName:"!text-lg font-semibold",children:(0,N.jsx)(A.g3P,{className:"text-kgrey"})}),(0,N.jsx)(o.ev,{text:t(l?"individual":"business"),title:t("client_type"),wrapperClassnames:"bg-kgrey-bgmenu",textClassName:"!text-lg font-semibold",children:(0,N.jsx)(E.VRY,{className:"text-kgrey"})}),l?null:(0,N.jsx)(N.Fragment,{children:(0,N.jsx)(o.ev,{text:n.users_count,title:t("client_user_count"),wrapperClassnames:"bg-kgrey-bgmenu",textClassName:"!text-lg font-semibold",children:(0,N.jsx)(U.$P,{className:"text-kgrey"})})}),(0,N.jsx)(o.ev,{text:a,title:t(l?"client_name":"business_name"),wrapperClassnames:"bg-kgrey-bgmenu",textClassName:"!text-lg font-semibold",children:(0,N.jsx)(E.I$,{className:"text-kgrey"})})]})}function D(e){var n=e.onSuccess,l=e.clientId,t=(0,i.m)().companyId,s=(0,a.eC)().showNotification,o=(0,a.Zp)().reloadEntityAll,c=(0,w.$G)().t;return(0,N.jsx)(N.Fragment,{children:(0,N.jsx)(u.Z.Main,{entity:"clients",name:"AllClients",url:"/".concat(t,"/clients/").concat(l,"/employees/"),method:"post",primaryKey:"id",sendAsFormData:!1,fields:[{name:"first_name",required:!0,value:"",onSubmitKey:""},{name:"last_name",required:!0,value:"",onSubmitKey:""},{name:"email",onSubmitKey:"",required:!0,type:"email",value:""},{name:"position",onSubmitKey:"",required:!1,value:null},{name:"mobile",onSubmitKey:"",required:!0,value:""},{name:"is_admin",onSubmitKey:"",value:!1}],onSuccess:function(e,a){s({message:"Success! Waiting for client accepting.."}),o({entity:"client-users",name:"AllClientUser-".concat(l),params:{page:1,limit:10},url:"/".concat(t,"/my/company/clients/").concat(l,"/employee/")}),n(),a()},onError:function(e,n){var l,t;console.log(e);var a=(null==e||null===(l=e.response)||void 0===l||null===(t=l.data)||void 0===t?void 0:t.message)||c("something_went_wrong");s({message:a,variant:"error"})},children:function(e){var l=e.isSubmitting,t=(e.values,e.setFieldValue),a=e.resetForm;return(0,N.jsxs)("div",{children:[(0,N.jsx)(r.ph,{resetForm:a,title:"Invite Business Client User"}),(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(y.gN,{label:"First Name",labelClasses:"ml-6 text-xs font-light text-kgrey-welcome mb-2 block",name:"first_name",component:f.Mg,placeholder:"Type your firstname..",required:!0,autoComplete:"off"}),(0,N.jsx)(y.gN,{label:"Last Name",labelClasses:"ml-6 text-xs font-light text-kgrey-welcome mb-2 block",name:"last_name",component:f.Mg,placeholder:"Type your lastname..",required:!0,autoComplete:"off"}),(0,N.jsx)(y.gN,{type:"email",label:"Email",labelClasses:"ml-6 text-xs font-light text-kgrey-welcome mb-2 block",name:"email",component:f.Mg,placeholder:"Type your email..",required:!0}),(0,N.jsx)(y.gN,{label:"Phone",name:"mobile",component:f.UO,placeholder:"Enter company mobile phone number",enableSearch:!0,required:!0,labelClasses:"!text-xs !ml-6 !text-kgrey-welcome",onChangeHandler:t}),(0,N.jsx)(y.gN,{label:"Position",labelClasses:"ml-6 text-xs font-light text-kgrey-welcome mb-2 block",name:"position",component:f.Mg,placeholder:"Type client user position..",autoComplete:"off"}),(0,N.jsxs)("div",{className:"flex items-center justify-end",children:[l&&(0,N.jsx)(r.aN,{tiled:!0,withOverlay:!0}),(0,N.jsx)(b.p,{onSuccess:n,isSubmitting:l,submitText:"Invite Client User"})]})]})]})}})})}var q=l(1667),K=l(49935),T=l(87818);function Y(e){var n=e.clientId,l=(0,i.m)(),c=l.companyId,d=l.isPermitted,m=l.isAdmin,u=(0,a.h0)(),h=u.page,x=u.handlePage,y=(0,a.A3)(),b=y.query,g=y.setQuery,f=y.searchQuery,v=(0,a.dF)(),j=v.open,_=v.modalHandler,k=v.WhiteModal,C=(0,t.useState)({}),S=(0,p.Z)(C,2),F=S[0],I=S[1],P=(0,T.I0)(),A=(0,w.$G)().t,E=(0,a.Zp)().reloadEntityAll,U=(0,a.eC)().showNotification,L=(0,a.iR)(),Y=L.showVisible,Z=L.visible,B=L.closePopup,H=L.loading,V=L.toggleLoading,M=(0,a.iR)(),$=M.visible,R=M.showVisible,G=M.loading,Q=M.toggleLoading,z=M.closePopup,W=function(){return function(){return e=$,Q(),void P((0,K.Bi)({entity:"client-users",name:"AllClientUser-".concat(n),method:"delete",url:"/".concat(c,"/my/company/clients/").concat(n,"/member/").concat(e.id,"/remove/"),deleteData:!0,id:e.id,cb:{success:function(){J(),U({message:A("successfully_deleted"),variant:"success"})},error:function(e){var n,l;U({message:null==e||null===(n=e.response)||void 0===n||null===(l=n.data)||void 0===l?void 0:l.message,variant:"error"})},finally:function(){Q(),z()}},params:{},primaryKey:"id",values:{}}));var e}},J=(0,a.e)({pageKey:"page",entity:"client-users",entityName:"AllClientUser-".concat(n)}).forwardToPreviousPage;function X(){V(),P((0,K.Bi)({entity:"client-users",method:"patch",name:"AllClientUser-".concat(n),url:"/".concat(c,"/my/company/clients/").concat(n,"/member/").concat(null==F?void 0:F.id,"/"),params:{},values:{},cb:{success:function(e){E({entity:"client-users",name:"AllClientUser-".concat(n),params:{page:h,limit:5},url:"/".concat(c,"/my/company/clients/").concat(n,"/employee/")}),U({message:"Invitation resent successfully",variant:"success"}),B()},error:function(e){U({message:A("something_went_wrong"),variant:"error"}),console.log(e,"client invitation resend error")},finally:function(){V()}},primaryKey:"id"}))}return(0,N.jsxs)("div",{className:"relative mb-8",children:[(0,N.jsx)(o.Bu,{title:A("client_Users"),query:b,placeholder:A("search_for_users"),handleSearch:function(e){return g(e.target.value)},btnHandler:_,btnText:A("invite_new_client"),isPermitted:d}),(0,N.jsx)(s.Z.All,{entity:"client-users",name:"AllClientUser-".concat(n),url:"/".concat(c,"/my/company/clients/").concat(n,"/employee/"),params:{page:h,limit:5,extra:{search:f}},children:function(e){var l=e.items,t=e.isFetched,a=e.meta;return(0,N.jsx)(N.Fragment,{children:t?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(o.xJ,{classes:{root:"relative "},children:(0,N.jsxs)(r.k6,{"aria-label":"simple table",classes:{root:"table-fixed dark-mode-styled-table"},children:[(0,N.jsx)(o.ss,{children:(0,N.jsxs)(r.AF,{children:[(0,N.jsx)(r.EU,{style:{width:"30%"},children:A("full_name")}),(0,N.jsx)(r.EU,{style:{width:"20%"},children:A("email")}),(0,N.jsx)(r.EU,{style:{width:"20%"},children:A("phone_number")}),(0,N.jsx)(r.EU,{style:{width:"10%"},children:A("role")}),(0,N.jsx)(r.EU,{style:{width:"10%"},children:A("status")}),(0,N.jsx)(r.EU,{style:{width:"10%"},children:A("actions")})]})}),(0,N.jsx)(o.RM,{children:l.map((function(e){var n=e.first_name,l=e.last_name,t=e.roles,a=e.email,s=e.mobile,i=(e.status,e.id),c=e.state;return(0,N.jsxs)(r.AF,{children:[(0,N.jsx)(r.Yk,{children:"".concat(n," ").concat(l)}),(0,N.jsx)(r.Yk,{children:(0,N.jsx)("div",{className:"truncate",children:a})}),(0,N.jsx)(r.Yk,{children:s}),(0,N.jsx)(r.Yk,{children:"Pending"===c?(0,N.jsx)(o.Ik,{isDisabled:!m,color:"primary",onClick:function(){return function(e){Y(!0),I(e)}(e)},children:A("resend")}):A((0,O.u)(null==t?void 0:t[0]))}),(0,N.jsx)(r.Yk,{children:(0,N.jsx)(q.N,{status:c,children:c})}),(0,N.jsx)(r.Yk,{children:(0,N.jsx)(r.cP.DeleteButton,{isDisabled:!m,clickHandler:function(){return R(e)}})})]},i)}))})]})}),(0,N.jsx)("div",{className:"news__pagination my-4",children:l.length?(0,N.jsx)(o.tl,{count:null==a?void 0:a.last_page,page:h?+h:1,defaultPage:6,siblingCount:1,color:"primary",onChange:x}):null}),(0,N.jsx)(k,{open:j,handleModalOpen:_,children:(0,N.jsx)(D,{onSuccess:_,clientId:n})}),(0,N.jsx)(r.sm,{isOpen:Boolean(Z),toggleHandler:B,title:"Are you sure to resend the request?",featureHandler:X,isLoading:H,hasLoader:!0}),(0,N.jsx)(r.sm,{featureHandler:W(),isOpen:Boolean($),toggleHandler:z,title:'Are you sure you want to delete the following staff member: "'.concat(null==$?void 0:$.first_name," ").concat(null==$?void 0:$.last_name,'"'),hasLoader:!0,isLoading:G})]}):(0,N.jsx)(r.aN,{tiled:!0,withOverlay:!0})})}})]})}var Z=function(){var e=(0,a.tv)().params,n=(0,i.m)().companyId,l=(0,w.$G)().t,t=parseInt(null==e?void 0:e.clientId);return n?(0,N.jsxs)("div",{className:"py-8",children:[(0,N.jsx)("h1",{className:"mb-6 text-2xl font-semibold dark:text-white",children:l("client_details")}),(0,N.jsx)(s.Z.One,{id:t,relations:"",entity:"clients",name:"AllClients",url:"/".concat(n,"/client_companies/").concat(t,"/"),params:{},children:function(e){var n=e.item,l=e.isFetched,t=n.is_individual;return(0,N.jsx)(N.Fragment,{children:l?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(L,{clientCompany:n,isIndividual:t}),t?null:(0,N.jsx)(Y,{clientId:n.id}),(0,N.jsx)(F,{clientId:n.id})]}):(0,N.jsx)(r.aN,{tiled:!0,withOverlay:!0})})}})]}):null}},1667:function(e,n,l){l.d(n,{N:function(){return r}});var t=l(28182),a=(l(72791),l(17173)),s=l(19053),i=l(80184);function r(e){var n=e.status,l=e.children,r=(0,a.$G)().t;return(0,i.jsx)("span",{className:(0,t.Z)("inline-block rounded-4xl bg-primary py-0.5 px-5 text-10px uppercase leading-4 text-white",{"bg-kgrey-inputBg text-kdark":"Pending"===n,"bg-primary-dark":"Logged"===n}),children:r(null!==l?(0,s.u)(String(l)):"accepted")})}}}]);
//# sourceMappingURL=9433.60108ce8.chunk.js.map