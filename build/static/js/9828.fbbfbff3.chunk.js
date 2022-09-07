"use strict";(self.webpackChunkkennekt_front_end_client=self.webpackChunkkennekt_front_end_client||[]).push([[9828],{79828:function(a,e,n){n.r(e),n.d(e,{default:function(){return Y}});var t=n(90325),l=n(79447),i=n(90182),s=n(51328),r=n(47313),m=n(95762),d=n(77344),c=n(94435),o=n(1413),g=n(83061),u=n(46417);var L=function(a){var e=a.hasUnread;return(0,u.jsx)(u.Fragment,{children:e?(0,u.jsx)("div",{className:"w-6 h-6 rounded-full bg-primary text-center text-white text-sm font-semibold ml-2 leading-6",children:e}):null})},h=n(70131);function x(a){var e=a.department,n=a.caseId,t=a.lastMessageAuthor,l=a.lastMessageText,i=a.lastMessageType,r=a.onClickHandler,m=(0,d.m)().unreadMessagesCount,c=null===m||void 0===m?void 0:m[n];return(0,u.jsx)(s.Yk,{onClick:r,children:(0,u.jsxs)("div",{children:[(0,u.jsx)("p",{className:"mb-1.5 text-sm font-semibold",children:null===e||void 0===e?void 0:e.name}),(0,u.jsxs)("div",{className:"flex items-center",children:[t?(0,u.jsx)(h.cm,{last_message_type:i,last_message_text:l,last_message_author:t}):null,(0,u.jsx)(L,{hasUnread:c})]})]})})}function p(a){return(0,u.jsx)(s.SV,{children:(0,u.jsx)(x,(0,o.Z)({},a))})}var v=n(10658),b=n.n(v);function f(a){var e=a.caseNumber,n=a.status,t=a.priority,l=a.createdDate,i=a.onClickHandler;return(0,u.jsx)(s.Yk,{onClick:i,children:(0,u.jsxs)("div",{children:[(0,u.jsxs)("p",{className:"mb-1 text-sm text-kgrey-dark-3 font-medium",children:["#",e]}),(0,u.jsx)("div",{className:(0,g.Z)("font-medium text-10px leading-5 inline-block uppercase mb-1.5 px-6 rounded-full h-5",{"bg-dpriority-high":"HIGH"===t,"bg-dpriority-normal":"NORMAL"===t,"bg-dpriority-low":"LOW"===t,"bg-dpriority-critical":"CRITICAL"===t}),children:null===n||void 0===n?void 0:n.title}),(0,u.jsx)("p",{className:"text-xs leading-5 font-medium",children:b()(l).format("MMMM DD hh:mm a")})]})})}function j(a){return(0,u.jsx)(s.SV,{children:(0,u.jsx)(f,(0,o.Z)({},a))})}var y=n(3187),N=function(a,e){var n,t,l,i;return e?e.icon?(0,u.jsx)(y.Z,{className:"inline-block",alt:e.name,src:(null===(n=e.icon)||void 0===n?void 0:n.thumbnail_150)||(null===(t=e.icon)||void 0===t?void 0:t.url)}):(0,u.jsx)(y.Z,{className:"inline-block",style:{color:"#fff"},children:e.name[0].toUpperCase()}):a?a.icon?(0,u.jsx)(y.Z,{className:"inline-block",alt:a.name,src:(null===a||void 0===a||null===(l=a.icon)||void 0===l?void 0:l.thumbnail_150)||(null===a||void 0===a||null===(i=a.icon)||void 0===i?void 0:i.url)}):(0,u.jsx)(y.Z,{className:"inline-block",style:{color:"#fff"},children:null===a||void 0===a?void 0:a.name[0].toUpperCase()}):void 0};var k=function(a){var e=a.department,n=a.subDepartment,t=a.onClickHandler;return(0,u.jsx)(s.Yk,{onClick:t,children:(0,u.jsxs)("div",{className:"flex items-center",children:[N(e,n),(0,u.jsx)("span",{className:"ml-2.5 text-sm font-medium",children:null===e||void 0===e?void 0:e.name})]})})};function C(a){var e=a.id,n=a.department,t=a.createdDate,i=a.lastMessageAuthor,r=a.lastMessageText,m=a.caseNumber,d=a.status,c=a.priority,o=a.lastMessageType,L=a.subDepartment,h=(0,l.tv)().history,x=function(){var a={pathname:"/case-messages",search:"?case=".concat(e,"&status=").concat(d.id)};h.push(a)};return(0,u.jsxs)(s.AF,{className:(0,g.Z)("dashboard-item hover:bg-primary-200 transition cursor-pointer",{"is-critical":"CRITICAL"===c,"is-normal":"NORMAL"===c,"is-high":"HIGH"===c,"is-low":"LOW"===c}),children:[(0,u.jsx)(p,{caseId:e,department:n,lastMessageAuthor:i,lastMessageText:r,lastMessageType:o,onClickHandler:x}),(0,u.jsx)(k,{subDepartment:L,department:n,onClickHandler:x}),(0,u.jsx)(j,{caseNumber:m,status:d,createdDate:t,priority:c,onClickHandler:x})]})}function M(a){return(0,u.jsx)(s.SV,{children:(0,u.jsx)(C,(0,o.Z)({},a))})}function w(){var a=(0,d.m)().companyId,e=(0,l.h0)().page;return(0,u.jsx)("div",{children:a?(0,u.jsx)(m.Z.All,{entity:"dashboard",name:"Dashboard-".concat(a),url:"/".concat(a,"/widgets/cases/as_business/"),params:{limit:5,extra:{ordering:"last_view_time"},page:e},children:function(a){var e=a.items,n=a.isFetched,t=e.map((function(a){return a}));return(0,u.jsxs)("div",{children:[(0,u.jsx)("div",{className:"prime-tabs text-base font-medium px-4 pt-4 pb-6 bg-kgrey-bg rounded-t-lg dark:text-white dark:bg-primary-300",children:"Recent Case Activity"}),(0,u.jsxs)(c.xJ,{classes:{root:"relative "},children:[(0,u.jsxs)(s.k6,{"aria-label":"simple table",classes:{root:"table-fixed dark-mode-styled-table"},children:[(0,u.jsx)(c.ss,{children:(0,u.jsxs)(s.AF,{children:[(0,u.jsx)(s.EU,{style:{width:"50%"},children:"Latest Case Activity"}),(0,u.jsx)(s.EU,{style:{width:"25%"},children:"Department"}),(0,u.jsx)(s.EU,{style:{width:"25%"},children:"Case"})]})}),(0,u.jsx)(c.RM,{children:t.map((function(a){var e=a.id,n=a.business_company,t=a.department,l=a.created_date,i=a.last_message_author,s=a.last_message_text,r=a.case_number,m=a.status,d=a.priority,c=a.last_message_type,o=a.sub_department;return(0,u.jsx)(M,{id:e,subDepartment:o,businessCompany:n,department:t,createdDate:l,lastMessageAuthor:i,lastMessageText:s,caseNumber:r,status:m,priority:d,lastMessageType:c},e)}))})]}),!n&&(0,u.jsx)(s.aN,{tiled:!0,withOverlay:!0})]})]})}}):(0,u.jsx)("div",{className:"flex justify-center",children:(0,u.jsx)(s.aN,{})})})}function S(){return(0,u.jsx)(s.SV,{children:(0,u.jsx)(w,{})})}var Z=n(34636),A=n(7012),D=n(56977);function B(a){var e=a.percent;return(0,u.jsx)("div",{className:"rounded-full overflow-hidden",children:(0,u.jsx)("div",{children:(0,u.jsxs)("div",{className:"relative",children:[(0,u.jsx)("div",{className:"absolute z-10 left-2/4 flex text-xs font-bold text-white",children:(0,u.jsxs)("span",{children:[e,"%"]})}),(0,u.jsx)(D.Z,{variant:"determinate",value:e,style:{height:"18px",borderRadius:"10px"}})]})})})}var T=n(30806),E=n(11760);var R=function(a){var e,n=a.percent,t=(0,E.a)().company;return(0,u.jsxs)("div",{className:"rounded-10 bg-white p-3.5 dark:bg-kdark-lighter dark:border-zinc-700 dark:border-[0.5px]",children:[(0,u.jsxs)("div",{className:"flex items-center mb-4",children:[(0,u.jsx)("div",{className:"w-9 h-9",children:(0,T.w)(null===t||void 0===t||null===(e=t.company.icon)||void 0===e?void 0:e.thumbnail_150,null===t||void 0===t?void 0:t.company.name)}),(0,u.jsx)("h4",{className:"text-sm font-medium text-kgrey-2d2d2d ml-2.5 dark:text-white",children:"Profile Completeness"})]}),(0,u.jsx)(B,{percent:n})]})},G=n(43746);function I(){var a=(0,d.m)().companyId,e=(0,l.dY)().reloadEntityOne,n=function(){e({primaryKey:"#businessDetails",entityId:"#businessDetails",entity:"businessDetails",name:"businessDetails-".concat(a),url:"".concat(a,"/my/company/dashboard/")})};return(0,u.jsx)("div",{className:"flex-grow mb-4 lg:mb-0",children:a?(0,u.jsx)(m.Z.One,{primaryKey:"#businessDetails",id:"#businessDetails",entity:"businessDetails",name:"businessDetails-".concat(a),url:"".concat(a,"/my/company/dashboard/"),params:{},relations:"",children:function(a){var e=a.item,t=a.isFetched,l=e;return(0,u.jsxs)("div",{className:"px-3 py-4 bg-kgrey-bg rounded-10 relative dark:bg-kdark-lighter",children:[(0,u.jsxs)("div",{className:"mb-3 px-1.5 flex items-center justify-between",children:[(0,u.jsx)("h3",{className:"text-base font-medium dark:text-white",children:"Business Details"}),(0,u.jsx)("div",{className:"cursor-pointer",onClick:n,children:(0,u.jsx)(G.Z,{fontSize:"small",className:"w-4 h-4 inline-block text-kgrey-2d2d2d dark:text-primary"})})]}),(0,u.jsxs)("div",{className:"flex mx-[-10px] flex-wrap",children:[(0,u.jsx)("div",{className:"mb-4 mx-2.5",children:(0,u.jsx)(Z.Z,{title:"Departments",count:l.departments,children:(0,u.jsx)(A.KZ,{})})}),(0,u.jsx)("div",{className:"mb-4 mx-2.5",children:(0,u.jsx)(Z.Z,{title:"Clients",count:l.clients,children:(0,u.jsx)(A.i_,{})})}),(0,u.jsx)("div",{className:"mb-4 mx-2.5",children:(0,u.jsx)(Z.Z,{title:"News",count:l.notifications,children:(0,u.jsx)(A.Gv,{})})}),(0,u.jsx)("div",{className:"mb-4 mx-2.5",children:(0,u.jsx)(Z.Z,{title:"Staffs",count:l.employee,children:(0,u.jsx)(A.hc,{})})})]}),(0,u.jsx)(R,{percent:l.percent}),!t&&(0,u.jsx)(s.aN,{tiled:!0,withOverlay:!0})]})}}):null})}function _(){return(0,u.jsx)(s.SV,{children:(0,u.jsx)(I,{})})}var U=n(70885),F=n(8558),H={AF:{name:"Afghanistan",latLng:[33,65]},AL:{name:"Albania",latLng:[41,20]},DZ:{name:"Algeria",latLng:[28,3]},AO:{name:"Angola",latLng:[-12.5,18.5]},AR:{name:"Argentina",latLng:[-34,-64]},AM:{name:"Armenia",latLng:[40,45]},AU:{name:"Australia",latLng:[-27,133]},AT:{name:"Austria",latLng:[47.3333,13.3333]},AZ:{name:"Azerbaijan",latLng:[40.5,47.5]},BS:{name:"Bahamas",latLng:[24.25,-76]},BD:{name:"Bangladesh",latLng:[24,90]},BY:{name:"Belarus",latLng:[53,28]},BE:{name:"Belgium",latLng:[50.8333,4]},BZ:{name:"Belize",latLng:[17.25,-88.75]},BJ:{name:"Benin",latLng:[9.5,2.25]},BT:{name:"Bhutan",latLng:[27.5,90.5]},BO:{name:"Bolivia",latLng:[-17,-65]},BA:{name:"Bosnia and Herz.",latLng:[44,18]},BW:{name:"Botswana",latLng:[-22,24]},BR:{name:"Brazil",latLng:[-10,-55]},BN:{name:"Brunei",latLng:[4.5,114.6667]},BG:{name:"Bulgaria",latLng:[43,25]},BF:{name:"Burkina Faso",latLng:[13,-2]},BI:{name:"Burundi",latLng:[-3.5,30]},KH:{name:"Cambodia",latLng:[13,105]},CM:{name:"Cameroon",latLng:[6,12]},CA:{name:"Canada",latLng:[60,-95]},CF:{name:"Central African Rep.",latLng:[7,21]},TD:{name:"Chad",latLng:[15,19]},CL:{name:"Chile",latLng:[-30,-71]},CN:{name:"China",latLng:[35,105]},CO:{name:"Colombia",latLng:[4,-72]},CG:{name:"Congo",latLng:[-1,15]},CR:{name:"Costa Rica",latLng:[10,-84]},HR:{name:"Croatia",latLng:[45.1667,15.5]},CU:{name:"Cuba",latLng:[21.5,-80]},CY:{name:"Cyprus",latLng:[35,33]},CZ:{name:"Czech Rep.",latLng:[49.75,15.5]},CI:{name:"C\xf4te d'Ivoire",latLng:[8,-5]},CD:{name:"Dem. Rep. Congo",latLng:[0,25]},KP:{name:"Dem. Rep. Korea",latLng:[40,127]},DK:{name:"Denmark",latLng:[56,10]},DJ:{name:"Djibouti",latLng:[11.5,43]},DO:{name:"Dominican Rep.",latLng:[19,-70.6667]},EC:{name:"Ecuador",latLng:[-2,-77.5]},EG:{name:"Egypt",latLng:[27,30]},SV:{name:"El Salvador",latLng:[13.8333,-88.9167]},GQ:{name:"Eq. Guinea",latLng:[2,10]},ER:{name:"Eritrea",latLng:[15,39]},EE:{name:"Estonia",latLng:[59,26]},ET:{name:"Ethiopia",latLng:[8,38]},FK:{name:"Falkland Is.",latLng:[-51.75,-59]},FJ:{name:"Fiji",latLng:[-18,175]},FI:{name:"Finland",latLng:[64,26]},TF:{name:"Fr. S. Antarctic Lands",latLng:[-43,67]},FR:{name:"France",latLng:[46,2]},GA:{name:"Gabon",latLng:[-1,11.75]},GM:{name:"Gambia",latLng:[13.4667,-16.5667]},GE:{name:"Georgia",latLng:[42,43.5]},DE:{name:"Germany",latLng:[51,9]},GH:{name:"Ghana",latLng:[8,-2]},GR:{name:"Greece",latLng:[39,22]},GL:{name:"Greenland",latLng:[72,-40]},GT:{name:"Guatemala",latLng:[15.5,-90.25]},GN:{name:"Guinea",latLng:[11,-10]},GW:{name:"Guinea-Bissau",latLng:[12,-15]},GY:{name:"Guyana",latLng:[5,-59]},HT:{name:"Haiti",latLng:[19,-72.4167]},HN:{name:"Honduras",latLng:[15,-86.5]},HU:{name:"Hungary",latLng:[47,20]},IS:{name:"Iceland",latLng:[65,-18]},IN:{name:"India",latLng:[20,77]},ID:{name:"Indonesia",latLng:[-5,120]},IR:{name:"Iran",latLng:[32,53]},IQ:{name:"Iraq",latLng:[33,44]},IE:{name:"Ireland",latLng:[53,-8]},IL:{name:"Israel",latLng:[31.5,34.75]},IT:{name:"Italy",latLng:[42.8333,12.8333]},JM:{name:"Jamaica",latLng:[18.25,-77.5]},JP:{name:"Japan",latLng:[36,138]},JO:{name:"Jordan",latLng:[31,36]},KZ:{name:"Kazakhstan",latLng:[48,68]},KE:{name:"Kenya",latLng:[1,38]},KR:{name:"Korea",latLng:[37,127.5]},KW:{name:"Kuwait",latLng:[29.3375,47.6581]},KG:{name:"Kyrgyzstan",latLng:[41,75]},LA:{name:"Lao PDR",latLng:[18,105]},LV:{name:"Latvia",latLng:[57,25]},LB:{name:"Lebanon",latLng:[33.8333,35.8333]},LS:{name:"Lesotho",latLng:[-29.5,28.5]},LR:{name:"Liberia",latLng:[6.5,-9.5]},LY:{name:"Libya",latLng:[25,17]},LT:{name:"Lithuania",latLng:[56,24]},LU:{name:"Luxembourg",latLng:[49.75,6.1667]},MK:{name:"Macedonia",latLng:[41.8333,22]},MG:{name:"Madagascar",latLng:[-20,47]},MW:{name:"Malawi",latLng:[-13.5,34]},MY:{name:"Malaysia",latLng:[2.5,112.5]},ML:{name:"Mali",latLng:[17,-4]},MR:{name:"Mauritania",latLng:[20,-12]},MX:{name:"Mexico",latLng:[23,-102]},MD:{name:"Moldova",latLng:[47,29]},MN:{name:"Mongolia",latLng:[46,105]},ME:{name:"Montenegro",latLng:[42,19]},MA:{name:"Morocco",latLng:[32,-5]},MZ:{name:"Mozamb",latLng:[-18.25,35]},MM:{name:"Myanmar",latLng:[22,98]},NA:{name:"Namibia",latLng:[-22,17]},NP:{name:"Nepal",latLng:[28,84]},NL:{name:"Netherlands",latLng:[52.5,5.75]},NC:{name:"New Caledonia",latLng:[-21.5,165.5]},NZ:{name:"New Zealand",latLng:[-41,174]},NI:{name:"Nicaragua",latLng:[13,-85]},NE:{name:"Niger",latLng:[16,8]},NG:{name:"Nigeria",latLng:[10,8]},NO:{name:"Norway",latLng:[62,10]},OM:{name:"Oman",latLng:[21,57]},PK:{name:"Pakistan",latLng:[30,70]},PS:{name:"Palestine",latLng:[32,35.25]},PA:{name:"Panama",latLng:[9,-80]},PG:{name:"Papua New Guinea",latLng:[-6,147]},PY:{name:"Paraguay",latLng:[-23,-58]},PE:{name:"Peru",latLng:[-10,-76]},PH:{name:"Philippines",latLng:[13,122]},PL:{name:"Poland",latLng:[52,20]},PT:{name:"Portugal",latLng:[39.5,-8]},PR:{name:"Puerto Rico",latLng:[18.25,-66.5]},QA:{name:"Qatar",latLng:[25.5,51.25]},RO:{name:"Romania",latLng:[46,25]},RU:{name:"Russia",latLng:[60,100]},RW:{name:"Rwanda",latLng:[-2,30]},SA:{name:"Saudi Arabia",latLng:[25,45]},SN:{name:"Senegal",latLng:[14,-14]},RS:{name:"Serbia",latLng:[44,21]},SL:{name:"Sierra Leone",latLng:[8.5,-11.5]},SK:{name:"Slovakia",latLng:[48.6667,19.5]},SI:{name:"Slovenia",latLng:[46,15]},SB:{name:"Solomon Is.",latLng:[-8,159]},SO:{name:"Somalia",latLng:[10,49]},ZA:{name:"South Africa",latLng:[-29,24]},ES:{name:"Spain",latLng:[40,-4]},LK:{name:"Sri Lanka",latLng:[7,81]},SD:{name:"Sudan",latLng:[15,30]},SR:{name:"Suriname",latLng:[4,-56]},SZ:{name:"Swaziland",latLng:[-26.5,31.5]},SE:{name:"Sweden",latLng:[62,15]},CH:{name:"Switzerland",latLng:[47,8]},SY:{name:"Syria",latLng:[35,38]},TW:{name:"Taiwan",latLng:[23.5,121]},TJ:{name:"Tajikistan",latLng:[39,71]},TZ:{name:"Tanzania",latLng:[-6,35]},TH:{name:"Thailand",latLng:[15,100]},TG:{name:"Togo",latLng:[8,1.1667]},TT:{name:"Trinidad and Tobago",latLng:[11,-61]},TN:{name:"Tunisia",latLng:[34,9]},TR:{name:"Turkey",latLng:[39,35]},TM:{name:"Turkmenistan",latLng:[40,60]},UG:{name:"Uganda",latLng:[1,32]},UA:{name:"Ukraine",latLng:[49,32]},AE:{name:"United Arab Emirates",latLng:[24,54]},GB:{name:"United Kingdom",latLng:[54,-2]},US:{name:"United States",latLng:[38,-97]},UY:{name:"Uruguay",latLng:[-33,-56]},UZ:{name:"Uzbekistan",latLng:[41,64]},VU:{name:"Vanuatu",latLng:[-16,167]},VE:{name:"Venezuela",latLng:[8,-66]},VN:{name:"Vietnam",latLng:[16,106]},EH:{name:"W. Sahara",latLng:[24.5,-13]},YE:{name:"Yemen",latLng:[15,48]},ZM:{name:"Zambia",latLng:[-15,30]},ZW:{name:"Zimbabwe",latLng:[-20,30]}},K=function(a){var e=a.onlineClients,n=a.reloadMapRequest,t=(0,r.useState)([]),l=(0,U.Z)(t,2),i=l[0],s=l[1],m=function(){var a=document.getElementsByClassName("jvectormap-tip"),e=a.length;if(e>0)for(var n=0;n<e-1;n++){var t;if(a[n]&&a[n].innerHTML)null===(t=a[n])||void 0===t||t.parentNode.removeChild(a[n])}};return(0,r.useEffect)((function(){if(e){var a=e.map((function(a){var e;return{latLng:a.latitude?[+a.latitude,+a.longitude]:H[a.country_code].latLng,name:"".concat(a.first_name," ").concat(a.last_name,", ").concat(null===(e=H[a.country_code])||void 0===e?void 0:e.name),style:{fill:"".concat(a.is_staff?"#34a9f7":"rgb(0, 208, 189)")}}}));s(a)}}),[e]),(0,u.jsx)("div",{className:"p-3 h-100 w-100 bg-kgrey-bg rounded-10 dark:bg-kdark-lighter",onMouseMove:m,onMouseOver:m,children:(0,u.jsxs)("div",{className:"h-100 w-100 ",children:[(0,u.jsxs)("div",{className:"mb-3 flex items-center justify-between",children:[(0,u.jsxs)("div",{className:"flex items-center dark:text-white",children:[(0,u.jsx)("span",{className:"text-base font-medium",children:" Recent Case Activity "}),(0,u.jsx)("span",{className:"text-base font-medium ml-2",children:i.length?"+".concat(i.length):null})]}),(0,u.jsx)("div",{onClick:n,className:"contextual-link cursor-pointer",children:(0,u.jsx)(G.Z,{fontSize:"small",className:"w-4 h-4 inline-block dark:text-primary"})})]}),(0,u.jsx)("div",{className:"w-100 rounded-10 overflow-hidden",style:{height:"calc(100% - 50px)"},children:(0,u.jsx)(F.VectorMap,{map:"world_mill",backgroundColor:"white",containerStyle:{width:"100%",height:"300px"},regionStyle:{initial:{fill:"#DEE4E8"}},markerStyle:{initial:{fill:"#00D0BD",stroke:"#FFFFFF"}},zoomButtons:!1,zoomOnScroll:!1,containerClassName:"map",markers:i})})]})})};function P(){var a=(0,d.m)().companyId,e=(0,l.Zp)().reloadEntityAll,n=function(){e({entity:"onlineUsers",name:"onlineUsers-".concat(a),url:"".concat(a,"/my/company/online/")})};return(0,u.jsx)("div",{className:"w-full lg:ml-6 lg:w-6/12",children:a?(0,u.jsx)(m.Z.All,{entity:"onlineUsers",name:"onlineUsers-".concat(a),url:"".concat(a,"/my/company/online/"),params:{},children:function(a){var e=a.items,t=a.isFetched,l=e;return(0,u.jsxs)("div",{className:"relative",children:[(0,u.jsx)(K,{reloadMapRequest:n,onlineClients:l}),!t&&(0,u.jsx)(s.aN,{tiled:!0,withOverlay:!0})]})}}):null})}function z(){return(0,u.jsx)(s.SV,{children:(0,u.jsx)(P,{})})}var O=n(1568);function V(){var a=(0,l.gQ)("Dashboard"),e=a.unreadCasesQuantity,n=a.isHidden;return(0,O.BX)(t.d,{children:[(0,O.tZ)("div",{className:"dashboard",children:(!n||0===e)&&(0,O.tZ)(i.q,{children:(0,O.tZ)("title",{children:" KENNEKT | User profile "})})}),(0,O.BX)("div",{className:"dashboard__inner",children:[(0,O.tZ)("h2",{className:"text-xl md:text-3xl font-bold mb-6 dark:text-white",children:"Dashboard"}),(0,O.tZ)(S,{}),(0,O.BX)("div",{className:"flex justify-between mt-8 flex-col lg:flex-row",children:[(0,O.tZ)(_,{}),(0,O.tZ)(z,{})]})]})]})}var Y=function(){return(0,O.tZ)(s.SV,{children:(0,O.tZ)(V,{})})}},34636:function(a,e,n){n(47313);var t=n(83061),l=n(46417);e.Z=function(a){var e=a.title,n=a.children,i=a.count,s=a.bgColor,r=a.color,m=a.fontSize;return(0,l.jsxs)("div",{className:(0,t.Z)("p-3.5 rounded-10 dark:bg-kdark-lighter dark:border-zinc-700 dark:border-sm",s||"bg-white"),children:[(0,l.jsx)("h4",{className:"mb-2.5 text-sm font-medium text-kgrey",children:e}),(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)("span",{className:"flex w-9 h-9 justify-center items-center bg-kgrey-bgDashboardItem dark:bg-black rounded-full",children:n}),(0,l.jsx)("p",{className:(0,t.Z)("ml-4 leading-5 font-semibold",r||"text-primary-dark",m||"text-2xl"),children:i})]})]})}},30806:function(a,e,n){n.d(e,{w:function(){return i}});var t=n(3187),l=n(46417),i=function(a,e){return a?(0,l.jsx)(t.Z,{className:"inline-block",alt:e||"Business icon",src:a,style:{width:"100%",height:"100%"}}):(0,l.jsx)(t.Z,{className:"inline-block",style:{color:"#fff",width:"100%",height:"100%"},children:e?e[0].toUpperCase():null})}}}]);