"use strict";(self.webpackChunkkennekt_front_end_client=self.webpackChunkkennekt_front_end_client||[]).push([[4309],{64309:function(e,s,t){t.r(s),t.d(s,{default:function(){return k}});t(47313);var n=t(77344),l=t(90214),a=t(95762),i=t(26926),c=t(80233),r=t(41559),d=t(83061),o=t(51425),h=t(54070),x=t(10658),m=t.n(x),j=t(26672),u=t(28303),p=t(46417),f=function(e){return e?m()(e).format("DD/MM/YYYY"):"No Date"};var k=function(){var e=(0,n.m)().companyId,s=(0,l.h0)(),t=s.page,x=s.handlePage;return(0,p.jsx)("div",{children:!!e&&(0,p.jsx)(a.Z.All,{entity:"invoices",name:"AllInvoices",url:"payment/".concat(e,"/invoices/"),replaceIds:!0,params:{limit:10,extra:{},page:t},children:function(e){var s=e.items,n=e.isFetched,l=e.meta,a=s;return(0,p.jsxs)(p.Fragment,{children:[!!a.length&&(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(i.xJ,{classes:{root:"relative "},children:(0,p.jsxs)(r.k6,{"aria-label":"simple table",classes:{root:"table-fixed dark-mode-styled-table"},children:[(0,p.jsx)(i.ss,{children:(0,p.jsxs)(r.AF,{children:[(0,p.jsx)(r.EU,{style:{width:"10%"},children:"Invoice ID"}),(0,p.jsx)(r.EU,{style:{width:"15%"},children:"Start date"}),(0,p.jsx)(r.EU,{style:{width:"15%"},children:"End date"}),(0,p.jsx)(r.EU,{style:{width:"10%"},children:"Members"}),(0,p.jsx)(r.EU,{style:{width:"20%"},children:"Invoice amount"}),(0,p.jsx)(r.EU,{style:{width:"15%"},children:"Status"}),(0,p.jsx)(r.EU,{style:{width:"15%"},children:"Actions"})]})}),(0,p.jsx)(i.RM,{className:"text-sm font-poppins",children:a.map((function(e,s){var t=e.id,n=e.start_date,l=e.end_date,a=e.staffs_count,c=e.payment_status,x=e.amount,m=e.is_paid,k=e.is_monthly,y=e.invoice;return(0,p.jsxs)(r.AF,{children:[(0,p.jsx)(r.Yk,{className:"!font-medium",children:"#".concat(t)}),(0,p.jsx)(r.Yk,{children:(0,p.jsx)("span",{children:f(n)})}),(0,p.jsx)(r.Yk,{children:(0,p.jsx)("span",{children:f(l)})}),(0,p.jsx)(r.Yk,{children:(0,p.jsxs)("div",{className:" flex-center-y",children:[(0,p.jsx)(j.I$,{className:"opacity-20 mr-2 text-lg"}),(0,p.jsx)("span",{className:"font-semibold",children:a})]})}),(0,p.jsx)(r.Yk,{children:(0,p.jsx)("strong",{className:"font-semibold",children:"$".concat(x)})}),(0,p.jsx)(r.Yk,{children:(0,p.jsx)("strong",{className:(0,d.Z)("font-semibold",{"text-primary-dark":m,"text-kred-pink":!m}),children:c})}),(0,p.jsx)(r.Yk,{children:(0,p.jsxs)("div",{className:"flex-center-y",children:[(0,p.jsx)(i.R9,{color:m?"default":"primary",disabled:m,className:(0,d.Z)("relative w-16",{"opacity-50":m}),children:(0,p.jsx)(u.rU,{className:"absolute inset-0 dark:text-white",to:"/checkout/".concat(t,"/").concat(k?"1":"0","/").concat(a),children:"Pay"})}),(0,p.jsx)(h.Z,{className:"!ml-2 w-12 h-12",disabled:!(null!==y&&void 0!==y&&y.url),classes:{label:"block absolute inset-0"},children:(0,p.jsx)("a",{href:null===y||void 0===y?void 0:y.url,download:!0,className:"absolute inset-0 flex-centered",children:(0,p.jsx)(o.Dj,{className:(0,d.Z)("text-xl",{"!text-kblue":!m,"!text-kgrey":m})})})})]})})]},t)}))})]})})}),!n&&(0,p.jsx)(c.Z,{tiled:!0,withOverlay:!0}),(0,p.jsx)("div",{className:"news__pagination my-4",children:s.length?(0,p.jsx)(i.tl,{count:null===l||void 0===l?void 0:l.last_page,page:t?+t:1,defaultPage:6,siblingCount:1,color:"primary",onChange:x}):null})]})}})})}}}]);