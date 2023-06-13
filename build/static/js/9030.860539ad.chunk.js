"use strict";(self.webpackChunkkennekt_front_end_client=self.webpackChunkkennekt_front_end_client||[]).push([[9030],{59030:function(e,r,t){t.r(r),t.d(r,{default:function(){return b}});var a=t(1413),n=t(70885),s=t(47313),o=t(52557),i=t(94715),l=t(3463),d=t(92241),m=t(17480),c=t(32),u=t(77344),h=t(28303),p=t(90182),g=t(46417),f=c.Z.entity.formRequest,x=l.Ry({username:l.Z_().email("Enter a valid email").required("Email is required"),first_name:l.Z_().trim().required("Firstname is required"),last_name:l.Z_().trim().required("Lastname is required"),mobile:l.Z_().required("Mobile number is required"),password:l.Z_().strict(!0).trim("Password cannot be blank").min(6,"Password should be of minimum 6 characters length").required("Password is required"),passwordConfirmation:l.Z_().oneOf([l.iH("password")],"Passwords are not the same!").required("Password confirmation is required!")});var b=function(){var e=(0,d.I0)(),r=(0,u.m)().setRegisterInfo,t=(0,s.useState)(!1),l=(0,n.Z)(t,2),c=l[0],b=l[1],v=(0,s.useState)(!1),w=(0,n.Z)(v,2),_=w[0],y=w[1],k=(0,i.TA)({initialValues:{username:"",password:"",passwordConfirmation:"",first_name:"",last_name:"",mobile:""},validationSchema:x,onSubmit:function(t,n){n.setFieldError;var s=n.setSubmitting,o=(0,a.Z)({},t);b(!1),delete o.passwordConfirmation,e(f({entity:"signup",name:"signup",url:"/user/register-individual/",method:"post",params:{},values:o,cb:{success:function(e){r(e),s(!1),y(!0)},error:function(t){var a,n,i,l;console.log("error in signup",t),"username_exist_not_register"===(null===(a=t.response)||void 0===a||null===(n=a.data)||void 0===n?void 0:n.code)&&e(f({entity:"re-signup",name:"re-signup",url:"/user/re-register-individual/",method:"patch",params:{},values:o,cb:{success:function(e){r(o),y(!0)},error:function(e){var r,t;console.dir("error obj",e),"username_exist"===(null===(r=e.response)||void 0===r||null===(t=r.data)||void 0===t?void 0:t.code)&&b(!0)},finally:function(){s(!1)}}})),"username_exist"===(null===(i=t.response)||void 0===i||null===(l=i.data)||void 0===l?void 0:l.code)&&b(!0),s(!1)},finally:function(){}}}))}});return(0,g.jsx)(o.P,{title:"Get started with KENNEKT",description:"The most effective business management system",goToPageLink:"/signin",goToPage:"Already have an account?",goToPageLinkText:"Sign In",back:!0,content:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(p.q,{children:(0,g.jsx)("title",{children:"KENNEKT | Sign up"})}),(0,g.jsx)("form",{onSubmit:k.handleSubmit,children:(0,g.jsx)("div",{className:" w-full md:w-[423px] font-poppins",children:_?(0,g.jsx)(g.Fragment,{children:(0,g.jsx)("p",{className:"font-medium",children:"A confirmation email has been sent to your email. Please, follow instructions to activate your account."})}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(m.Qp,{name:"username",placeholder:"Enter your email",label:"Email address",required:!0,onChange:k.handleChange,type:"email",value:k.values.username,error:k.touched.username&&Boolean(k.errors.username),helperText:k.touched.username&&k.errors.username}),(0,g.jsx)(m.Qp,{name:"first_name",placeholder:"Enter you first name",label:"First name",required:!0,onChange:k.handleChange,value:k.values.first_name,error:k.touched.first_name&&Boolean(k.errors.first_name),helperText:k.touched.first_name&&k.errors.first_name}),(0,g.jsx)(m.Qp,{name:"last_name",placeholder:"Enter you last name",label:"Last name",required:!0,onChange:k.handleChange,value:k.values.last_name,error:k.touched.last_name&&Boolean(k.errors.last_name),helperText:k.touched.last_name&&k.errors.last_name}),(0,g.jsx)(m.wi,{name:"mobile",placeholder:"Enter your mobile phone number",label:"Phone number",required:!0,setPhoneValue:k.setFieldValue,value:k.values.mobile,error:k.touched.mobile&&Boolean(k.errors.mobile),helperText:k.touched.mobile&&k.errors.mobile,enableSearch:!0}),(0,g.jsx)(m.Qp,{name:"password",placeholder:"Password",label:"Password",required:!0,onChange:k.handleChange,type:"password",value:k.values.password,error:k.touched.password&&Boolean(k.errors.password),helperText:k.touched.password&&k.errors.password}),(0,g.jsx)(m.Qp,{name:"passwordConfirmation",placeholder:"Confirm password",label:"Password confirmation",required:!0,onChange:k.handleChange,type:"password",value:k.values.passwordConfirmation,error:k.touched.passwordConfirmation&&Boolean(k.errors.passwordConfirmation),helperText:k.touched.passwordConfirmation&&k.errors.passwordConfirmation,classNames:"mb-8"}),c?(0,g.jsxs)("p",{className:"text-sm text-red-500 mb-5",children:["User account already exists."," ",(0,g.jsx)(h.rU,{to:"/request-password",className:"underline hover:no-underline",children:"Would like recover password?"})]}):null,(0,g.jsx)("button",{disabled:k.isSubmitting,className:"uppercase bg-primary transition py-3.5 hover:bg-primary-dark text-white rounded-lg w-full text-center font-light text-sm",children:k.isSubmitting?"Signing up. Please wait a while":"Sign up"}),(0,g.jsx)("p",{className:"text-center text-xs font-light text-kgrey-welcome mt-5 ",children:"By signing in you agree to KENNEKT's"})]})})})]})})}},52557:function(e,r,t){t.d(r,{P:function(){return g}});var a,n=t(30168),s=t(30686),o=t(32335),i=t(28303),l=t(63830),d=t(83061),m=t(46225),c=t(41559),u=(t(47313),t(32916)),h=t(1568),p="".concat(o.Z.PUBLIC_ASSETS,"img/");function g(e){var r=e.content,t=e.title,o=e.description,g=e.goToPage,f=e.goToPageLinkText,x=e.goToPageLink,b=e.back,v=e.isInitialPage,w=(0,l.k6)();return(0,h.BX)("div",{className:"welcome flex min-h-full font-poppins ",children:[(0,h.tZ)("div",{className:"hidden md:block welcome__left md:w-[52%] bg-no-repeat bg-cover py-14 px-20",css:(0,s.iv)(a||(a=(0,n.Z)(["\n\t\t\t\t\tbackground-image: url(","bg-welcome.jpg);\n\t\t\t\t"])),p),children:(0,h.tZ)(i.rU,{to:"/",className:"w-40 h-8",children:(0,h.tZ)("img",{src:"".concat(p,"logo-kennekt-2.svg"),alt:"",className:"object-cover"})})}),(0,h.BX)("div",{className:"w-full md:w-[48%] md:pl-12 md:pt-14 md:pr-20 md:pb-14 p-4 flex flex-col md:block justify-between",children:[(0,h.BX)("div",{className:(0,d.Z)("top",{"flex items-center justify-between":m.tq&&v}),children:[(0,h.tZ)("div",{className:"mobile-logo lg:hidden mb-2",children:(0,h.tZ)(i.rU,{to:"/",className:"w-32 h-6 block",children:(0,h.tZ)("img",{src:"".concat(p,"logo-kennekt-2.svg"),alt:"",className:"object-cover"})})}),(0,h.BX)("div",{className:(0,d.Z)("top-nav flex justify-between md:mb-28"),children:[(0,h.BX)("div",{className:(0,d.Z)("flex items-center text-kgrey-welcome group cursor-pointer",!b&&"opacity-0",v&&"hidden",!v&&!m.tq&&"md:flex"),onClick:function(){return w.goBack()},children:[(0,h.tZ)("span",{className:"text-2xl group-hover:text-primary transition",children:(0,h.tZ)(u.YFh,{})}),(0,h.tZ)("span",{className:"font-medium mr-4 md:ml-3 group-hover:text-primary transition text-sm md:text-base",children:"Back"})]}),(0,h.BX)("div",{className:"flex items-center font-light text-sm md:text-lg",children:[(0,h.tZ)("span",{className:"text-kgrey-welcome hidden md:block ",children:g}),(0,h.tZ)(i.rU,{to:x,className:"text-primary transitions hover:text-primary-dark ml-2 whitespace-nowrap ",children:f})]})]})]}),(0,h.BX)("div",{className:"content-wrapper",children:[(0,h.BX)("div",{className:"welcome__header mb-8 md:mb-12",children:[(0,h.tZ)("div",{className:"font-bold text-2xl md:text-3xl mb-1 md:mb-2.5",children:t}),(0,h.tZ)("p",{className:"font-light text-kgrey-welcome md:text-base text-sm",children:(0,h.tZ)(c._S,{text:o})})]}),(0,h.tZ)("div",{className:"welcome__content",children:r})]}),(0,h.tZ)("div",{className:"opacity-0",children:"Footer"})]})]})}}}]);