!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},r=(new Error).stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="b3f68734-9599-4aab-ac80-2d32561a2d14",e._sentryDebugIdIdentifier="sentry-dbid-b3f68734-9599-4aab-ac80-2d32561a2d14")}catch(e){}}();var _global="undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{};_global.SENTRY_RELEASE={id:"a086bfaddc61e7dbbcac0a9c42145052439dbbf3"},(self.webpackChunkkennekt_front_end_client=self.webpackChunkkennekt_front_end_client||[]).push([[4365],{34365:function(e,r,t){t.r(r),t.d(r,{default:function(){return S}});var s=t(72791),n=t(84230),a=t(23331),i={small:{id:1,type:"small",price:{month:6.5,year:Math.round(390)/100},name:"Small team",description:"All the basics for businesses that are just getting started.",members:"1-5"},pro:{id:2,type:"pro",price:{month:5.5,year:Math.round(330)/100},name:"Pro team",description:"Better for growing businesses that want more customers.",members:"6-20"},enterprise:{id:3,type:"enterprise",price:{month:4.5,year:Math.round(270)/100},name:"Enterprise team",description:"Advanced features for pros who need more customization.",members:"21-50"},custom:{id:4,type:"custom",price:{month:4,year:Math.round(240)/100},name:"Custom bundle",description:"Advanced features for pros who need more customization.",members:"50<"}},l=(Object.keys(i).map((function(e){return i[e]})),[{value:"year",title:"Bill Yearly",description:"Pay annually and save 25%"},{value:"month",title:"Bill Monthly",description:"Pay monthly"}]),o=t(56909),d=t(31102),c=t(80184);function u(e){var r=e.yearlyDiscount,t=(0,a.JL)().setPaymentFrequency,n=(0,d.h9)({frequency:!1}),i=n.checked,u=n.handleChange;return(0,s.useEffect)((function(){t(i.frequency?"month":"year")}),[i]),(0,c.jsx)("div",{className:"py-10 px-4",children:(0,c.jsxs)("div",{className:"flex-center-y",children:[(0,c.jsx)(m,{title:l[0].title,description:"Pay annually and save up to ".concat(r,"%")}),(0,c.jsx)(o.h,{checked:i.frequency,onChange:u,name:"frequency"}),(0,c.jsx)(m,{title:l[1].title,description:l[1].description})]})})}function m(e){var r=e.title,t=e.description;return(0,c.jsxs)("dl",{className:"mr-3.5",children:[(0,c.jsx)("dd",{className:"text-md font-semibold dark:text-white",children:r}),(0,c.jsx)("dt",{className:"text-10px text-primary-dark",children:t})]})}var p=t(70885),x=t(28182),f=function(e){var r=e.name,t=e.className,s=void 0===t?"":t;return(0,c.jsx)("div",{className:(0,x.Z)("bill-subscr__name mb-1.5 text-xl font-semibold text-primary-dark",s),children:r})},h=function(e){var r=e.description,t=e.className,s=void 0===t?"":t;return(0,c.jsx)("div",{className:(0,x.Z)("bill-subscr__descr mb-4 text-xs text-kgrey-dark-4",s),children:r})},b=t(72248);function y(e){var r=e.price,t=e.title,s=e.description,n=e.featuresList,i=e.isMuted,l=void 0!==i&&i,o=e.isCustom,d=void 0!==o&&o,u=e.range,m=void 0===u?null:u,p=e.total,y=void 0===p?0:p,g="year"===(0,a.JL)().paymentFrequency;return(0,c.jsxs)("div",{className:(0,x.Z)(" p-tariff mr-4 rounded-lg border-t-4 bg-white py-5 px-4 font-poppins shadow-p-tariff dark:bg-kdark-dark333 lg:w-[255px]",{"border-primary-dark":!l,"border-kblue-3F598A":l}),children:[(0,c.jsxs)("div",{className:"p-tariff__price mb-3 align-bottom",children:[(0,c.jsxs)("strong",{className:(0,x.Z)("text-3xl font-semibold",{"text-primary-dark":!l,"text-kdark-183B56":l}),children:["$",r]}),(0,c.jsx)("span",{className:"ml-1.5 text-xs text-kgrey-dark-4",children:"/ per member per month"})]}),(0,c.jsxs)("div",{className:(0,x.Z)("p-tariff__info pb-3",{"border-b border-kgrey-light-grey-6":!d}),children:[(0,c.jsx)(f,{name:t,className:l?"!text-kdark-183B56":""}),(0,c.jsx)(h,{description:s})]}),d&&(0,c.jsxs)("div",{className:"flex-center-end",children:[(0,c.jsxs)("strong",{className:"font-bold text-primary-dark",children:["$",(0,b.QV)(g?12*y:y)]}),(0,c.jsx)("span",{className:"ml-2 text-xs text-kgrey-dark-4",children:g?"per year":"per month"})]}),!!d&&m,(0,c.jsx)("div",{className:"p-tariff__features pb-2.5 pt-4",children:n})]})}var g=t(24076),v=t(98582);function k(e){var r=e.planItems,t=(0,s.useState)(1),n=(0,p.Z)(t,2),i=n[0],l=n[1],o=(0,a.JL)().paymentFrequency,d=(0,s.useState)({month:0,year:0}),u=(0,p.Z)(d,2),m=u[0],x=u[1],f=(0,s.useMemo)((function(){return(0,v.P)(r)}),[r]);return(0,s.useEffect)((function(){if(f){var e=(0,b.gJ)(i,f);if(!e)return;x(e.price)}}),[f]),(0,c.jsx)(y,{description:(0,c.jsxs)("p",{children:["Cost for ",(0,c.jsx)("strong",{children:i})," users"]}),featuresList:(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("p",{className:"text-xs text-kgrey-menuText",children:"Slide dot to calculate your cost"})}),price:m[o],total:Math.round(i*m[o]*100)/100,title:"Your Rate",isCustom:!0,range:(0,c.jsx)("div",{children:(0,c.jsx)(g.Z,{value:i,onChange:function(e,r){var t=(0,b.gJ)(r,f);l(+r),x(t.price)},"aria-labelledby":"input-slider",min:1,className:"!text-primary-dark"})})})}function j(e){var r=e.planItems,t=(0,a.JL)().paymentFrequency,s=(0,v.P)(r);return(0,c.jsxs)("div",{className:"rounded-lg border-t-4 border-kblue-3F598A bg-kgrey-light-grey-2 py-10 px-7 dark:border-kblue dark:bg-kdark-dark333 ",children:[(0,c.jsx)("h3",{className:"mb-6 text-xl font-semibold text-kblue-3F598A dark:text-kblue",children:"Monthly Discount Plan:"}),(0,c.jsx)(c.Fragment,{children:s.map((function(e){var r=e.price[t];return(0,c.jsxs)("div",{className:"flex-center-y mb-4 last:mb-0",children:[(0,c.jsx)(n.DU,{}),(0,c.jsxs)("p",{className:"ml-2.5 text-xs text-kdark-183B56 dark:text-kblue",children:[(0,c.jsxs)("strong",{children:["$",r]})," per user :"," ",(0,c.jsx)("strong",{children:e.members})," users"]})]},e.id)}))})]})}var _=t(70828),N=t(35741),w=t(40084),C=t(55248),Z=t(43682);function P(){var e=(0,w.m)().companyId,r=(0,d.tv)().history,t=(0,Z.m)().hasUserAlreadyPaidInvoice,s=function(){return r.push("/checkout")};return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(N.Z.All,{entity:"plans",name:"AllPlan",url:"/".concat(e,"/payment/plans/"),params:{limit:10},children:function(e){var r,n=e.items,a=e.isFetched,i=n;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(u,{yearlyDiscount:parseInt(null===i||void 0===i||null===(r=i[0])||void 0===r?void 0:r.yearly_discount)}),(0,c.jsxs)("div",{className:"relative inline-flex flex-col items-end",id:"plans-description",children:[a&&n.length?(0,c.jsxs)("div",{className:"mb-6 flex",children:[(0,c.jsx)(k,{planItems:i}),(0,c.jsx)(j,{planItems:i})]}):(0,c.jsx)(C.aN,{tiled:!0,withOverlay:!0}),(0,c.jsxs)("button",{className:(0,x.Z)("h-8  rounded-full border border-primary-dark leading-8 inline-flex items-center justify-between  text-13px font-medium transition bg-primary-dark px-6 text-white hover:bg-white hover:text-primary-dark "),onClick:s,children:[(0,c.jsx)("span",{className:"mr-24",children:t?"Upgrade":"Sign Up"}),(0,c.jsx)(_.OJV,{})]})]})]})}})})}function B(e){var r=e.name,t=e.description,s=e.children;return(0,c.jsxs)("div",{className:"mt-3 rounded-lg border border-kgrey-light-grey-6 p-5 lg:mr-12",children:[(0,c.jsx)(f,{name:r}),(0,c.jsx)(h,{description:t}),(0,c.jsx)("div",{className:"bill-subscr__features",children:s})]})}function D(e){var r=e.prop,t=e.value,s=e.propClassName,n=void 0===s?"":s,a=e.valueClassName,i=void 0===a?"":a,l=e.noTopPadding,o=void 0!==l&&l,d=e.noBottomPadding,u=void 0!==d&&d,m=e.noBorder,p=void 0!==m&&m;return(0,c.jsxs)("div",{className:(0,x.Z)("bill-subscr__next-row  flex-center-between w-full text-sm",{"pt-2":!o,"pb-2":!u,"border-b border-kgrey-light-grey-6":!p}),children:[(0,c.jsx)("div",{className:(0,x.Z)("text-kgrey-menuText",n),children:r}),(0,c.jsx)("div",{className:(0,x.Z)("font-medium text-kdark dark:text-white",i),children:t})]})}var F=t(97689),A=t(97892),I=t.n(A);function M(e){e.type;var r=(0,F.a)().companies,t=(0,Z.m)(),s=t.navigateToCheckout,a=t.subscription,i=t.handleCancelRequest,l=t.setCancelSubscription,o=t.cancelSubscription,d=t.cancelLoading;if(!r.length)return(0,c.jsx)(C.aN,{withOverlay:!0});var u=function(){return l((function(e){return!e}))};return(0,c.jsxs)("div",{className:"bill-subscr border-b border-kgrey-d8d8d8 pb-9",children:[(0,c.jsx)("h3",{className:"bill-subscr__heading mb-2.5 text-xl font-medium dark:text-white",children:"Subscription"}),"PRO"===(null===a||void 0===a?void 0:a.subscription_type)?(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("div",{className:"bill-subscr__col-wrapper flex flex-col lg:flex-row",children:[(0,c.jsxs)("div",{className:"bill-subscr__col w-full lg:w-[421px]",children:[(0,c.jsx)("h5",{className:"bill-subscr__col-heading uppercase text-kgrey-menuText ",children:"Your plan"}),(0,c.jsx)(B,{name:"",description:"",children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.Os,{text:"".concat(a.paid_staffs_count," / members")}),(0,c.jsx)(n.Os,{text:"Phone Support"})]})})]}),(0,c.jsxs)("div",{className:"billing-subscription__col w-full lg:w-[421px]",children:[(0,c.jsx)("h5",{className:"bill-subscr__col-heading mb-3 uppercase text-kgrey-menuText",children:"Bill Details"}),(0,c.jsxs)("div",{className:"bill-subscr__col-wrapper flex-center-between mt-9",children:[(0,c.jsxs)("div",{className:"left w-[227px] flex-shrink-0",children:[(0,c.jsx)(D,{prop:"Start date:",value:I()(a.start_date).format("DD/MM/YYYY"),noBorder:!0,noTopPadding:!0,noBottomPadding:!0}),(0,c.jsx)(D,{prop:"End date:",value:I()(a.end_date).format("DD/MM/YYYY")}),(0,c.jsx)(D,{prop:"Paid Users Count:",value:"".concat(null===a||void 0===a?void 0:a.paid_staffs_count)}),(0,c.jsx)(D,{prop:"Total amount:",value:"$ ".concat(a.total_amount),noBorder:!0,noBottomPadding:!0,propClassName:"text-kdark dark:text-white",valueClassName:"!font-bold !font-base"})]}),(0,c.jsxs)("div",{className:"right w-full pl-20",children:[(0,c.jsx)(n.R9,{fullWidth:!0,className:"mb-4 dark:bg-primary-dark dark:text-white dark:hover:bg-primary-300 dark:focus:ring-primary-300",onClick:s,children:"Upgrade"}),a.is_cancelled?(0,c.jsx)("div",{className:"text-xs dark:text-white",children:"Your subscription has been cancelled. But you can use the app till subscription expires."}):(0,c.jsx)(n.R9,{fullWidth:!0,color:"secondary",className:"dark:bg-kred-pink dark:text-white dark:hover:bg-kred-red",onClick:u,children:"Cancel"}),(0,c.jsx)(C.sm,{featureHandler:i,isOpen:Boolean(o),toggleHandler:u,title:"Are you sure to cancel your subscription? It will be applied from next month.",hasLoader:!0,isLoading:d})]})]})]})]})}):(0,c.jsx)("p",{className:"text-md mt-10 mb-4 text-kgrey-menuText",children:"No Subscription"})]})}var S=function(){return(0,c.jsxs)("div",{className:"py-5",children:[(0,c.jsx)(M,{}),(0,c.jsx)(P,{})]})}},98582:function(e,r,t){t.d(r,{P:function(){return n}});var s=t(42982);function n(e){var r=function(e){return e>50};return e.sort((function(e,r){return e.staffs_count_from-r.staffs_count_from})).reduce((function(e,t){return[].concat((0,s.Z)(e),[{id:t.id,name:t.title,members:"".concat(t.staffs_count_from).concat(r(t.staffs_count_to)?"":"-").concat(r(t.staffs_count_to)?"+":t.staffs_count_to),memberFrom:t.staffs_count_from,memberTo:t.staffs_count_to,price:{month:parseFloat(t.monthly_price),year:parseFloat(t.yearly_price)},yearlyDiscount:parseInt(t.yearly_discount),type:t.type}])}),[])}},56909:function(e,r,t){t.d(r,{h:function(){return u}});var s=t(1413),n=t(45987),a=(t(72791),t(38317)),i=t(6330),l=t(38596),o=(t(94135),t(58528)),d=t(80184),c=["classes"],u=(0,a.Z)((function(e){return(0,i.Z)({root:{width:30,height:18,padding:0,margin:e.spacing(1)},switchBase:{padding:1,top:"1px",left:"1px","&$checked":{transform:"translateX(13px)",color:e.palette.common.white,"& + $track":{backgroundColor:"#00A09D",opacity:1,border:"none"}},"&$focusVisible $thumb":{color:"#00A09D",border:"2px solid #fff"}},thumb:{width:13,height:13},track:{borderRadius:13,backgroundColor:"#00A09D",opacity:1,transition:e.transitions.create(["background-color","border"])},checked:{},focusVisible:{},disabled:{}})}))((function(e){var r=e.classes,t=(0,n.Z)(e,c);return(0,d.jsx)(o.Z,(0,s.Z)({focusVisibleClassName:r.focusVisible,disableRipple:!0,classes:{root:r.root,switchBase:r.switchBase,thumb:r.thumb,track:r.track,checked:r.checked}},t))}));(0,l.Z)((function(){return(0,i.Z)({formControlRoot:{margin:0}})}))}}]);
//# sourceMappingURL=4365.3c85285f.chunk.js.map