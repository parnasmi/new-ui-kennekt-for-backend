!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="58fa128c-22aa-48ec-b461-03d19dcae2cd",e._sentryDebugIdIdentifier="sentry-dbid-58fa128c-22aa-48ec-b461-03d19dcae2cd")}catch(e){}}();var _global="undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{};_global.SENTRY_RELEASE={id:"679831ce0b54925e28194bc104f85683e4de96a1"},(self.webpackChunkkennekt_front_end_client=self.webpackChunkkennekt_front_end_client||[]).push([[2667],{72667:function(e,t,a){a.r(t),a.d(t,{default:function(){return z}});var r=a(30168),l=a(59028),n=a(97689),i=a(52554),s=a(28182),d=a(31102),o=a(15861),c=a(1413),u=a(70885),m=a(37762),h=a(64687),f=a.n(h),b=a(72791),v=a(26864),p=a(42339),x=a(81724),g=a(9478),_=a(57090),w=a(26181),Z=a.n(w),y=a(38596),N=a(6330),k=a(51859),j=a(66828),S=a(29403),E=a(87818),C=a(32380),B=a(78820),M=a(80184),q="".concat(g.Z.PUBLIC_ASSETS,"img/");var F=x.Ry({username:x.Z_().strict().trim("Field cannot be blank").email("Enter a valid email").required("Email is required"),first_name:x.Z_().strict().trim("Field cannot be blank").required("Firstname is required"),last_name:x.Z_().strict().trim("Field cannot be blank").required("Lastname is required"),mobile:x.Z_().required("Mobile number is required"),gender:x.Z_()}),P=(0,y.Z)((0,N.Z)({selectMenu:{paddingTop:"13px",paddingBottom:"13px",borderColor:"#e0e0e0",fontSize:"13px"},root:{width:"100%","MuiInputBase-formControl":{color:"red"}},formControl:{borderRadius:"8px"}}));function I(e){var t,a=e.modalHandler,r=(0,n.a)().userData,l=(0,b.useState)(!1),i=(0,u.Z)(l,2),s=i[0],h=i[1],x=(0,b.useState)(null),g=(0,u.Z)(x,2),w=g[0],y=g[1],N=(0,b.useState)(!1),I=(0,u.Z)(N,2),T=I[0],X=I[1],D=(0,b.useState)(r.avatar?r.avatar:null),H=(0,u.Z)(D,2),A=H[0],L=H[1],V=(0,b.useState)(r.gender?r.gender:"other"),z=(0,u.Z)(V,2),U=z[0],Q=z[1],R=P(),G=(0,E.I0)(),K=(0,d.eC)().showNotification,O=(0,v.TA)({initialValues:{username:r.username,first_name:r.first_name,last_name:r.last_name,mobile:r.mobile,avatar:null===(t=r.avatar)||void 0===t?void 0:t.id,gender:U},validationSchema:F,onSubmit:function(e,t){t.setFieldError,t.setSubmitting;var a=(0,c.Z)((0,c.Z)({},e),{},{avatar:null===A||void 0===A?void 0:A.id});$({values:a})}}),W=(0,d.bK)({url:"/my/profile/avatar/delete/",method:"delete",cb:{success:function(e){K({message:"Profile photo deleted!"}),L(null),G(C.Z.auth.GetMe.success({data:(0,c.Z)((0,c.Z)({},r),{},{avatar:null})})),te()},error:function(e){var t,a;K({message:(null===e||void 0===e||null===(t=e.response)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.message)||"Something went wrong",variant:"error"})}}}),Y=W.fetchData,J=W.loading,$=(0,d.bK)({url:"/my/profile/",dynamicValues:!0,method:"put",cb:{success:function(e,t){O.setSubmitting(!1),G(C.Z.auth.GetMe.success({data:e})),K({message:"Profile updated"}),a()},error:function(e,t){var a,r,l;O.setSubmitting(!1);var n=function(e){var t,a={},r=e.split("\n").filter(Boolean),l=(0,m.Z)(r);try{for(l.s();!(t=l.n()).done;){var n=t.value.split(":"),i=(0,u.Z)(n,2),s=i[0],d=i[1];a[s.trim()]=d.trim()}}catch(o){l.e(o)}finally{l.f()}return a}(null===e||void 0===e||null===(a=e.response)||void 0===a||null===(r=a.data)||void 0===r||null===(l=r.message)||void 0===l?void 0:l.replace("display name","user name"));O.setErrors(n)}}}).fetchData,ee=function(){var e=(0,o.Z)(f().mark((function e(){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function te(){h((function(e){return!e}))}return(0,M.jsx)("div",{children:(0,M.jsxs)("form",{onSubmit:O.handleSubmit,children:[(0,M.jsx)("div",{className:"mb-6 text-xl font-semibold",children:"Edit Profile"}),(0,M.jsxs)("div",{className:"flex-center-center mb-4",children:[(0,M.jsx)("div",{className:"mr-4",children:(0,M.jsx)(_.bA,{uploadMeta:w,setUploadMeta:y,cancelSending:T,setCancelSending:X,setFile:L})}),(0,M.jsxs)("div",{className:"user-avatar-box__display flex-centered group relative h-20 w-20 overflow-hidden rounded-full",children:[(0,M.jsx)("img",{src:Z()(A,"thumbnail_150")||"".concat(q,"chat-placeholder.png"),alt:"",className:"h-full object-cover"}),A&&!w&&(0,M.jsx)("div",{className:"absolute bottom-0 left-0 hidden h-1/3 w-full justify-center bg-kgrey-bg group-hover:flex",children:(0,M.jsx)(_.cP.DeleteButton,{clickHandler:te})}),null!==w&&(0,M.jsxs)("div",{className:"absolute top-1/2 left-1/2 z-10 h-10 w-10 -translate-y-1/2 -translate-x-1/2",children:[(0,M.jsx)("div",{className:"upload-media-spinner",children:(0,M.jsx)(_.aN,{variant:"determinate",value:w})}),(0,M.jsx)("div",{onClick:function(){X(!0),y(null)},className:"absolute top-1/2 left-1/2 z-20 h-8 w-8 -translate-y-1/2 -translate-x-1/2 cursor-pointer text-3xl text-primary-dark transition hover:text-primary",children:(0,M.jsx)(B.SV5,{})})]})]})]}),(0,M.jsx)(p.Qp,{name:"first_name",placeholder:"Enter you first name",label:"First name",required:!0,onChange:O.handleChange,value:O.values.first_name,error:O.touched.first_name&&Boolean(O.errors.first_name),helperText:O.touched.first_name&&O.errors.first_name}),(0,M.jsx)(p.Qp,{name:"last_name",placeholder:"Enter you last name",label:"Last name",required:!0,onChange:O.handleChange,value:O.values.last_name,error:O.touched.last_name&&Boolean(O.errors.last_name),helperText:O.touched.last_name&&O.errors.last_name}),(0,M.jsx)(p.Qp,{name:"username",placeholder:"Enter your email",label:"Email address",required:!0,onChange:O.handleChange,type:"email",value:O.values.username,error:O.touched.username&&Boolean(O.errors.username),helperText:O.touched.username&&O.errors.username}),(0,M.jsx)(p.wi,{name:"mobile",placeholder:"Enter your mobile phone number",label:"Phone number",required:!0,setPhoneValue:O.setFieldValue,value:O.values.mobile,error:O.touched.mobile&&Boolean(O.errors.mobile),helperText:O.touched.mobile&&O.errors.mobile,enableSearch:!0}),(0,M.jsx)("div",{className:"mb-4",children:(0,M.jsxs)(j.Z,{classes:{root:R.root},children:[(0,M.jsx)("p",{className:"ml-6 mb-2 block text-xs font-light text-kgrey-welcome",children:"Gender"}),(0,M.jsxs)(S.Z,{labelId:"Gender-select",id:"gender-select",value:U,variant:"outlined",onChange:function(e){Q(e.target.value),O.setFieldValue("gender",e.target.value)},autoWidth:!0,classes:{selectMenu:R.selectMenu,root:R.root},children:[(0,M.jsx)(k.Z,{value:"OTHER",children:"Other"}),(0,M.jsx)(k.Z,{value:"MALE",children:"Male"}),(0,M.jsx)(k.Z,{value:"FEMALE",children:"Female"})]})]})}),(0,M.jsxs)("div",{className:"flex-center-between",children:[(0,M.jsx)("button",{type:"submit",disabled:O.isSubmitting,className:"bg-primary py-3.5 uppercase transition w-full rounded-lg text-center text-sm font-light text-white hover:bg-primary-dark",children:O.isSubmitting?"Updating. Please wait a while":"Update"}),(0,M.jsx)("button",{disabled:O.isSubmitting,className:"bg-primary py-3.5 uppercase transition ml-2 w-full rounded-lg text-center text-sm font-light text-white hover:bg-primary-dark sm:ml-0 sm:hidden",type:"button",onClick:a,children:"Cancel"})]}),(0,M.jsx)(_.sm,{isLoading:J,toggleHandler:te,isOpen:s,featureHandler:ee,title:"Are you sure to delete the profile photo?"})]})})}var T,X=a(70629),D=a(54270),H=a(16856),A=a(64923);function L(){var e,t=(0,n.a)().userData,a=(0,d.dF)(),o=a.open,c=a.modalHandler,u=a.WhiteModal,m=(0,d.gQ)("User Profile"),h=m.unreadCasesQuantity,f=m.isHidden;return(0,A.tZ)(l.d,{children:(0,A.BX)("div",{className:"profile",children:[(!f||0===h)&&(0,A.tZ)(D.q,{children:(0,A.tZ)("title",{children:"KENNEKT | User profile"})}),(0,A.BX)("div",{className:"profile__header mb-20 h-40 w-full rounded-xl bg-user-profile p-4 text-white",children:[(0,A.tZ)("div",{className:"profile__header-heading text-2xl font-medium ",children:"Profile"}),(0,A.BX)("div",{className:"profile__header-info  relative mx-2  mt-12 overflow-hidden rounded-2xl p-5 shadow-xl",children:[(0,A.tZ)("div",{className:"blurred absolute inset-0 z-0 bg-white/80 backdrop-blur-sm dark:bg-kdark/40"}),(0,A.tZ)("div",{className:"profile__header-info-inner relative z-10 flex items-center justify-between",children:(0,A.BX)("div",{className:"profile__header-user flex items-center",children:[(0,A.tZ)("div",{className:(0,s.Z)("profile__header-user-img flex-centered h-20 w-20 overflow-hidden rounded-2xl shadow-xl",{"bg-white":!t.avatar}),children:t.avatar?(0,A.tZ)("img",{src:null===t||void 0===t||null===(e=t.avatar)||void 0===e?void 0:e.thumbnail,alt:"Image",className:"object-fit h-full w-full"}):(0,A.tZ)("p",{className:"text-2xl text-kgrey",children:"".concat(t.first_name[0]).concat(t.last_name[0])})}),(0,A.tZ)("div",{className:"profile__header-user-name ml-5 w-[500px]",children:(0,A.tZ)("div",{className:"truncate text-2xl font-semibold text-kdark dark:text-white",children:"".concat(t.first_name," ").concat(t.last_name)})})]})})]})]}),(0,A.BX)("div",{className:"content",children:[(0,A.BX)("div",{className:"profile-info min-h-[215px] rounded-2xl border border-transparent border-white/30 bg-white px-5 py-4 shadow-lg dark:bg-kdark",css:(0,i.iv)(T||(T=(0,r.Z)(["\n\t\t\t\t\t\t\twidth: ",";\n\t\t\t\t\t\t"])),X.tq?"100%":"428px"),children:[(0,A.BX)("div",{className:"profile-info__top flex-center-between border-b border-[#f0f0f0] pb-4",children:[(0,A.tZ)("div",{className:"font-semibold text-kdark dark:text-white",children:"Profile information"}),(0,A.tZ)("button",{className:"flex-centered h-4 w-4 text-[#67748E] transition hover:text-primary",type:"button",onClick:c,children:(0,A.tZ)(H.zmo,{})})]}),(0,A.BX)("div",{className:"profile-info__content py-4",children:[(0,A.tZ)(V,{field:"Full Name",value:"".concat(t.first_name," ").concat(t.last_name)}),(0,A.tZ)(V,{field:"Mobile",value:t.mobile}),(0,A.tZ)(V,{field:"Email",value:t.username})]})]}),(0,A.tZ)(u,{handleModalOpen:c,open:o,children:(0,A.tZ)(I,{modalHandler:c})})]})]})})}function V(e){var t=e.field,a=e.value;return(0,A.BX)("div",{className:"profile-info__item flex-center-y mb-4 text-sm font-medium",children:[(0,A.BX)("div",{className:"text-[#67748E]",children:[t,":"]}),(0,A.tZ)("div",{className:"ml-2 truncate text-kdark dark:text-white",children:a})]})}var z=function(){return(0,A.tZ)(_.SV,{children:(0,A.tZ)(L,{})})}}}]);
//# sourceMappingURL=2667.95facef5.chunk.js.map