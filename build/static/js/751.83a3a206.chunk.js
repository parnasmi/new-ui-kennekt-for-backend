!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},s=(new Error).stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="2cad76f9-d792-4007-9e1f-000929b721d5",e._sentryDebugIdIdentifier="sentry-dbid-2cad76f9-d792-4007-9e1f-000929b721d5")}catch(e){}}();var _global="undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{};_global.SENTRY_RELEASE={id:"a086bfaddc61e7dbbcac0a9c42145052439dbbf3"},(self.webpackChunkkennekt_front_end_client=self.webpackChunkkennekt_front_end_client||[]).push([[751],{60751:function(e,s,a){a.r(s),a.d(s,{default:function(){return I}});var i=a(1413),l=(a(72791),a(91523)),n=a(89526),d=a(35741),t=a(54270),r=a(26181),c=a.n(r),o=a(66364),m=a.n(o),v=a(38302),x=a(2451),u=a(55248),p=a(43264),j=a(1288),h=a(97892),_=a.n(h),w=a(40084),N=a(31102),f=a(80184),b=function(e){return e.split(".").pop()},g=function(e){return e.thumbnail?(0,f.jsx)("div",{className:"files-display__img",children:(0,f.jsx)("img",{src:c()(e,"url"),alt:""})}):"wav"===b(e.name)||"mp3"===b(e.name)?(0,f.jsxs)("audio",{controls:!0,children:[(0,f.jsx)("source",{src:e&&e.url,type:"audio/wav"}),(0,f.jsx)("source",{src:e&&e.url,type:"audio/mpeg"}),"Your browser does not support the audio element."]}):(0,f.jsx)("span",{children:e.name})},y=function(e,s,a){var i;return null!==e&&void 0!==e&&null!==(i=e.receiver)&&void 0!==i&&i.campaign?"/news/campaigns/view/".concat(a):"/news/news-list"},Z=function(e){var s;return null!==e&&void 0!==e&&null!==(s=e.receiver)&&void 0!==s&&s.campaign?"".concat(c()(e,"receiver.campaign.name")," news list"):"News List"},k=function(e){var s=(0,w.m)(),a=s.isPermitted,i=s.companyId,r=(0,N.tv)().params,o=parseInt(null===r||void 0===r?void 0:r.campaignId),h=parseInt(null===r||void 0===r?void 0:r.newsId);return(0,f.jsx)(d.Z.One,{id:h,entity:"news",name:"SingleNews-".concat(h),url:"/".concat(i,"/notifications/").concat(h,"/"),params:{},relations:"",children:function(e){var s,i,d,r,w,N,b=e.item,k=e.isFetched,I=b,E=null===I||void 0===I||null===(s=I.receiver)||void 0===s||null===(i=s.campaign)||void 0===i?void 0:i.categories;return(0,f.jsxs)("div",{className:"news-page mb-2.5 py-6",children:[(0,f.jsxs)(t.Z,{children:[(0,f.jsxs)("title",{children:["KENNEKT | ","".concat(I.subject)]}),(0,f.jsx)("meta",{name:"description",content:"KENNEKT Announcement"})]}),(0,f.jsxs)("div",{className:"flex-center-between mb-4",children:[k?(0,f.jsx)("h1",{className:"text-2xl font-bold dark:text-white",children:I.subject}):(0,f.jsx)("div",{className:"w-[200px]",children:(0,f.jsx)(p.Z,{})}),(0,f.jsx)(u.Ik,{children:(0,f.jsx)(l.rU,{to:o?"/news/campaigns/edit/".concat(o,"/").concat(h):"/news/edit/".concat(h),children:"Edit News"})})]}),(0,f.jsx)("div",{className:"news-breadcrumb mb-5",children:k?(0,f.jsxs)(x.Z,{"aria-label":"breadcrumb",children:[(0,f.jsx)(l.rU,{color:"inherit",to:y(I,0,o),children:(0,f.jsx)("span",{className:"text-primary transition hover:text-primary-dark",children:Z(I)})}),(0,f.jsx)(v.Z,{color:"textPrimary",children:I.subject})]}):(0,f.jsx)("div",{className:"w-[200px]",children:(0,f.jsx)(p.Z,{})})}),(0,f.jsx)("div",{className:"uni-page__content",children:(0,f.jsxs)(n.Z,{className:"uni-page__paper",children:[(0,f.jsx)("div",{className:"p-5",children:(0,f.jsx)("div",{className:"mb-5",children:(0,f.jsx)(j.Z,{container:!0,spacing:3,children:(0,f.jsx)(j.Z,{item:!0,xs:12,children:(0,f.jsxs)("div",{className:"data-list",children:[(0,f.jsxs)("div",{className:"data-list__row news-view-row",children:[(0,f.jsx)("div",{className:"data-list__prop",children:"Author: "}),k?(0,f.jsx)("div",{className:"data-list__value",children:c()(b,"author.name","")}):(0,f.jsx)("div",{className:"w-[200px]",children:(0,f.jsx)(p.Z,{})})]}),a&&(0,f.jsxs)("div",{className:"data-list__row news-view-row",children:[(0,f.jsx)("div",{className:"data-list__prop",children:"Status: "}),k?(0,f.jsx)("div",{className:"data-list__value",children:c()(b,"status","")}):(0,f.jsx)("div",{className:"w-[200px]",children:(0,f.jsx)(p.Z,{})})]}),a&&(0,f.jsxs)("div",{className:"data-list__row news-view-row",children:[(0,f.jsx)("div",{className:"data-list__prop",children:"Frequency: "}),k?(0,f.jsx)("div",{className:"data-list__value",children:c()(b,"frequency","")}):(0,f.jsx)("div",{className:"w-[200px]",children:(0,f.jsx)(p.Z,{})})]}),a&&(0,f.jsxs)("div",{className:"data-list__row news-view-row",children:[(0,f.jsx)("div",{className:"data-list__prop",children:"Timezone: "}),k?(0,f.jsx)("div",{className:"data-list__value",children:c()(b,"timezone.title","")}):(0,f.jsx)("div",{className:"w-[200px]",children:(0,f.jsx)(p.Z,{})})]}),a&&(0,f.jsxs)("div",{className:"data-list__row news-view-row",children:[(0,f.jsx)("div",{className:"data-list__prop",children:"Start Time: "}),k?(0,f.jsx)("div",{className:"data-list__value",children:_()(c()(b,"start_time","")).format("YYYY-MM-DD HH:mm")}):(0,f.jsx)("div",{className:"w-[200px]",children:(0,f.jsx)(p.Z,{})})]}),a&&(0,f.jsxs)("div",{className:"data-list__row news-view-row",children:[(0,f.jsx)("div",{className:"data-list__prop",children:"Allow Case Creation: "}),k?(0,f.jsx)("div",{className:"data-list__value",children:c()(b,"open_for_cases")?"Yes":"No"}):(0,f.jsx)("div",{className:"w-[200px]",children:(0,f.jsx)(p.Z,{})})]}),null!==I&&void 0!==I&&null!==(d=I.receiver)&&void 0!==d&&null!==(r=d.staff_departments)&&void 0!==r&&r.length?(0,f.jsxs)("div",{className:"data-list__row news-view-row",children:[(0,f.jsx)("div",{className:"data-list__prop",children:"Related Departments: "}),k?(0,f.jsx)("div",{className:"data-list__value",children:null===I||void 0===I||null===(w=I.receiver)||void 0===w||null===(N=w.staff_departments)||void 0===N?void 0:N.map((function(e,s){var a,i;return(0,f.jsx)("span",{children:"".concat(e.name).concat((null===I||void 0===I||null===(a=I.receiver)||void 0===a||null===(i=a.staff_departments)||void 0===i?void 0:i.length)-1!==s?", ":"")},s)}))}):(0,f.jsx)("div",{className:"w-[200px]",children:(0,f.jsx)(p.Z,{})})]}):null,null!==E&&void 0!==E&&E.length?(0,f.jsxs)("div",{className:"data-list__row news-view-row",children:[(0,f.jsx)("div",{className:"data-list__prop",children:"Related Client Groups: "}),k?(0,f.jsx)("div",{className:"data-list__value",children:E.map((function(e,s){return(0,f.jsx)("span",{children:"".concat(e.name).concat(E.length-1!==s?", ":"")},s)}))}):(0,f.jsx)("div",{className:"w-[200px]",children:(0,f.jsx)(p.Z,{})})]}):null,c()(b,"department.name")&&(0,f.jsxs)("div",{className:"data-list__row news-view-row",children:[(0,f.jsx)("div",{className:"data-list__prop",children:"Department: "}),k?(0,f.jsx)("div",{className:"data-list__value",children:c()(b,"department.name")}):(0,f.jsx)("div",{className:"w-[200px]",children:(0,f.jsx)(p.Z,{})})]}),c()(b,"sub_department.name")&&(0,f.jsxs)("div",{className:"data-list__row news-view-row",children:[(0,f.jsx)("div",{className:"data-list__prop",children:"Sub department: "}),k?(0,f.jsx)("div",{className:"data-list__value",children:c()(b,"sub_department.name")}):(0,f.jsx)("div",{className:"w-[200px]",children:(0,f.jsx)(p.Z,{})})]})]})})})})}),(0,f.jsx)("div",{className:"mb-5 pl-5",children:(0,f.jsx)(v.Z,{variant:"h4",gutterBottom:!0,children:"News content"})}),(0,f.jsx)("div",{className:"mb-5 p-5",children:k?(0,f.jsx)(u._S,{text:I.body}):(0,f.jsx)(u.aN,{tiled:!0,withOverlay:!0})}),(0,f.jsx)("div",{className:"p-5",children:!m()(c()(I,"files",[]))&&(0,f.jsxs)("div",{className:"data-list__row mb-2.5  flex",children:[(0,f.jsx)("div",{className:"data-list__prop",children:"Files: "}),(0,f.jsx)("div",{className:"data-list__value",children:(0,f.jsx)("div",{className:"files-display",children:c()(I,"files",[]).map((function(e){return(0,f.jsx)("div",{className:"files-display__item mb-5",children:g(e)},e.name)}))})})]})})]})})]})}})};var I=function(e){return(0,f.jsx)(u.SV,{children:(0,f.jsx)(k,(0,i.Z)({},e))})}}}]);
//# sourceMappingURL=751.83a3a206.chunk.js.map