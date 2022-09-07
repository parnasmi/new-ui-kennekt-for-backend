"use strict";(self.webpackChunkkennekt_front_end_client=self.webpackChunkkennekt_front_end_client||[]).push([[3696],{73696:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});var a=t(1413),r=(t(47313),t(28303)),i=t(90182),u=t(57009),o=t(57730),s=t(51328),c=t(3084),m=t(46417),l=function(){return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("div",{className:"news-page py-4",children:[(0,m.jsxs)(i.Z,{children:[(0,m.jsx)("title",{children:"KENNEKT | Create News"}),(0,m.jsx)("meta",{name:"description",content:"KENNEKT Announcement"})]}),(0,m.jsx)("h1",{className:"font-bold text-2xl mb-2 dark:text-white",children:"Create News"}),(0,m.jsx)("div",{className:"mb-4",children:(0,m.jsxs)(o.Z,{"aria-label":"breadcrumb",children:[(0,m.jsx)(r.rU,{to:"/news/news-list/",children:(0,m.jsx)("span",{className:"text-primary transition hover:text-primary-dark text-sm",children:"News List"})}),(0,m.jsx)(u.Z,{color:"textPrimary",className:"!text-sm",children:"Create news"})]})}),(0,m.jsx)("div",{className:"uni-page__content",children:(0,m.jsx)(c.Z,{})})]})})};var d=function(e){return(0,m.jsx)(s.SV,{children:(0,m.jsx)(l,(0,a.Z)({},e))})}},3084:function(e,n,t){var a=t(42982),r=t(15861),i=t(70885),u=t(64687),o=t.n(u),s=t(47313),c=t(84365),m=t(90146),l=t(38251),d=t(63830),b=t(69706),f=t.n(b),v=t(79447),p=t(77344),y=t(50474),h=t(10658),S=t.n(h),_=t(46417),x=[{name:"Reader First Name",code:"{reader_first_name}"},{name:"Reader Last Name",code:"{reader_last_name}"},{name:"Reader Company",code:"{business_company}"},{name:"Author First Name",code:"{author_first_name}"},{name:"Author Last Name",code:"{author_last_name}"},{name:"Author company",code:"{client_company}"}],j=[{name:"Daily",code:"DAILY"},{name:"Weekly",code:"WEEKLY"},{name:"Monthly",code:"MONTHLY"},{name:"Yearly",code:"YEARLY"},{name:"Quarterly",code:"QUARTERLY"}],N=[{value:"ACTIVE",label:"Active"},{label:"On hold",value:"ON_HOLD"}];n.Z=function(){var e=(0,s.useState)({}),n=(0,i.Z)(e,2),t=n[0],u=n[1],b=-(new Date).getTimezoneOffset(),h=(0,d.k6)(),w=(0,v.tv)().params,K=parseInt(null===w||void 0===w?void 0:w.campaignId),g=(0,p.m)().companyId,E=(0,v.eC)().showNotification,k=S()().hour(8).minute(0).format(),V=S()().format();return(0,s.useEffect)((function(){(0,r.Z)(o().mark((function e(){var n,t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.hi.request.get((0,l.kB)("/timezones/current_timezone/".concat(b,"/"),{}));case 3:n=e.sent,t=n.data,u(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}),[]),(0,_.jsx)(c.Z.Main,{entity:"news",name:"".concat(K?"AllNews-".concat(K):"AllRegularNews"),url:"/".concat(g,"/notifications/"),primaryKey:"id",sendAsFormData:!1,normalizeData:function(e){return e},prependData:!0,method:"post",fields:[{name:"subject",required:!0,value:"",onSubmitKey:""},{name:"body",required:!0,value:"",onSubmitKey:""},{name:"files",value:[],onSubmitKey:"",type:"object"},{name:"type",value:"staff",onSubmitValue:function(e){return K?"campaign":e},onSubmitKey:""},{name:"status",value:"ACTIVE",onSubmitKey:""},{name:"open_for_cases",value:!1,onSubmitKey:""},{name:"frequency",value:"ONE_TIME",onSubmitKey:""},{name:"timezone",onSubmitValue:function(e){return{id:f()(e,"id")}},value:t,onSubmitKey:"",type:"object"},{name:"campaign",value:null,onSubmitValue:function(){return K?Number(K):void 0},onSubmitKey:""},{name:"start_time",value:k,onSubmitValue:function(e){return(0,y.L)(e)},onSubmitKey:""},{name:"end_time",value:V,onSubmitValue:function(e){return(0,y.L)(e)},onSubmitKey:""},{name:"event_times",onSubmitValue:function(e,n){return"EVENTS"===n.frequency?e:null},onSubmitKey:"",type:"object"},{name:"department",onSubmitValue:function(e){return f()(e,"id")},onSubmitKey:"",type:"object"},{name:"sub_department",onSubmitValue:function(e){return f()(e,"id")},onSubmitKey:"",type:"object"},{name:"staff_departments",value:null,onSubmitValue:function(e){return null===e||void 0===e?void 0:e.reduce((function(e,n){return[].concat((0,a.Z)(e),[n.id])}),[])},onSubmitKey:"",type:"object"},{name:"staff_sub_departments",value:void 0,onSubmitKey:"",type:"object"},{name:"categories",value:null,onSubmitValue:function(e){return null===e||void 0===e?void 0:e.reduce((function(e,n){return[].concat((0,a.Z)(e),[n.id])}),[])},onSubmitKey:"",type:"object"}],onSuccess:function(e,n){n(),K||null!==e&&void 0!==e&&e.receiver.campaign?h.push("/news/campaigns/view/".concat(K)):h.push("/news/news-list")},onError:function(e,n){var t,a,r=(null===e||void 0===e||null===(t=e.response)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.message)||"Something went wrong";E({message:r,variant:"error"})},children:function(e){var n=e.isSubmitting,t=e.values,a=e.setFieldValue,r=e.errors,i=e.setFieldError;return(0,_.jsx)(m.Z,{isSubmitting:n,values:t,setFieldValue:a,keywords:x,frequencies:j,statuses:N,campaignId:K,setFieldError:i,errors:r})}})}}}]);