!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="5e384517-870a-4251-84dd-e08a534a7d87",e._sentryDebugIdIdentifier="sentry-dbid-5e384517-870a-4251-84dd-e08a534a7d87")}catch(e){}}();var _global="undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{};_global.SENTRY_RELEASE={id:"fb1fa34f10cc71f430d2612c84ee00a7489f3038"},(self.webpackChunkkennekt_front_end_client=self.webpackChunkkennekt_front_end_client||[]).push([[7099],{87099:function(e,n,a){a.r(n),a.d(n,{default:function(){return D}});var t=a(1413),o=a(72791),s=a(27945),l=a(66364),r=a.n(l),i=a(97689),d=a(81201),c=a(87818),u=a(32380),m=a(49078),p=a(26864),b=a(67688),h=a(37099),y=a(40084),g=a(7993),f=a(16293),x=a(28182),k=a(30014),v=a(67025),j=a(80184);function N(e){var n,a=e.field,s=e.setFieldValue,l=(0,m.j)(),r=l.uploadMeta,i=l.setUploadMeta,d=l.cancelSending,c=l.setCancelSending,u=l.setFiles,p=l.files;return(0,o.useEffect)((function(){p[a]&&s(a,p[a])}),[p]),(0,j.jsxs)("div",{className:"lg:flex",children:[(0,j.jsx)(f.bA,{uploadMeta:r,setUploadMeta:i,cancelSending:d,setCancelSending:c,setFile:u,isBusinessProfile:!0,field:a}),(0,j.jsxs)("div",{className:"flex-grow-1 mt-4 lg:ml-6 lg:mt-0",children:[(0,j.jsxs)("div",{className:(0,x.Z)("relative overflow-hidden border border-kgrey-border-solid",{"h-24 w-24 rounded-full":a.includes("icon"),"h-16 w-64 rounded-md":a.includes("logo")}),children:[(0,j.jsx)("img",{src:(null===p||void 0===p||null===(n=p[a])||void 0===n?void 0:n.url)||("icon"===a?"https://via.placeholder.com/96x96/":"https://via.placeholder.com/263x60/"),alt:a,className:"h-full w-full object-cover"}),null!==r.progress&&r.field===a&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("div",{className:"position-centered absolute  z-10",children:(0,j.jsx)(f.aN,{variant:"static",value:r.progress})}),(0,j.jsx)(v.Z,{onClick:function(){c(!0),i((function(e){return(0,t.Z)((0,t.Z)({},e),{},{progress:null})}))},className:"position-centered !absolute z-20 text-white",children:(0,j.jsx)(k.Z,{className:"text-primary"})})]})]}),(0,j.jsx)("div",{className:"mt-1 text-xs text-kgrey",children:a.includes("icon")?"Please use 1:1 image for best fit":"Please use (260x63)px or 4:1 image for best fit"})]})]})}var w=a(50576),S=a(78029),E=a(78820),_=a(55636),C=a(30874),K=a(63509),F=a(86053),I={width:"100%",height:"400px"};function L(e){var n,a,t,s=(0,y.m)(),l=s.isAdmin,c=s.companyId,u=(s.isDarkMode,(0,i.a)()),x=u.company,k=u.userData,L=(null===x||void 0===x||null===(n=x.company)||void 0===n||null===(a=n.owner)||void 0===a?void 0:a.id)===k.id,M=(0,_.eC)().showNotification,Z=(0,_.h9)({darkIcon:!1}),D=Z.checked,z=Z.handleChange,T=(0,_.h9)({darkLogo:!1}),A=T.checked,V=T.handleChange,O=(0,m.j)(!0),P=O.searchInputRef,U=O.calcedLat,B=O.calcedLng,q=O.onLoad,R=O.onUnmount,W=O.selected,Y=O.onMarkerDrag,J=O.isLoaded,H=O.placeAddress,G=O.files,Q=O.map,X=e.values,$=e.setFieldValue,ee=e.isSubmitting,ne=e.errors,ae=e.setFieldError;return(0,w.Y)({setFieldValue:$,searchInputRef:P}),(0,o.useEffect)((function(){r()(H)||($("city",H.city),$("address",H.plain()),$("state",H.state),$("country",H.country),$("zipcode",H.zip))}),[H]),(0,o.useEffect)((function(){W&&"lat"in W&&"lng"in W&&($("lat",Number(null===W||void 0===W?void 0:W.lat).toFixed(9)),$("lng",Number(null===W||void 0===W?void 0:W.lng).toFixed(9)))}),[W]),(0,o.useEffect)((function(){G.icon&&$("icon",G.icon),G.icon_dark&&$("icon_dark",G.icon_dark),G.logo&&$("logo",G.logo),G.logo_dark&&$("logo_dark",G.logo_dark)}),[G]),(0,o.useEffect)((function(){r()(ne)||(0,d.lZ)("business-profile-form")}),[ne]),(0,o.useEffect)((function(){$("sub_industry",null)}),[X.industry]),(0,o.useEffect)((function(){ee&&!r()(ne)&&Object.keys(ne).forEach((function(e){return ae(e,!1)}))}),[ee]),(0,o.useEffect)((function(){if(J&&Q){var e=new google.maps.LatLng(Number(null===X||void 0===X?void 0:X.lat),Number(null===X||void 0===X?void 0:X.lng));Q.panTo(e)}}),[J,Q]),(0,j.jsxs)("div",{className:"w-100 mt-6 gap-x-11 lg:grid lg:grid-cols-2",id:"business-profile-form",children:[(0,j.jsxs)("div",{className:"col-1",children:[(0,j.jsx)(p.gN,{label:"Name",name:"name",component:b.Mg,placeholder:"Enter name here",inputElementClassNames:"dark:bg-kdark-lighter font-medium dark:text-white",disabled:!L}),(0,j.jsx)(p.gN,{label:"Website",name:"website",component:b.Mg,placeholder:"Enter Website here",inputElementClassNames:"dark:bg-kdark-lighter font-medium dark:text-white"}),(0,j.jsxs)("div",{className:"react-select-dropdown mb-4",children:[(0,j.jsxs)("div",{className:"ml-2 mb-2 block text-sm font-light text-kgrey-menuText",children:[(0,j.jsx)("span",{children:"Industry"}),(0,j.jsx)("sup",{children:"*"})]}),(0,j.jsx)(p.gN,{component:h.Z,customStylesProps:d.gb,name:"industry",placeholder:"Industry name here",optionLabel:"name",optionValue:"id",isSearchable:!0,isClearable:!1,loadOptionsKey:"results",isDisabled:!l,loadOptionsUrl:"/industries/",loadOptionsParams:function(e){return{extra:{search:e}}}})]}),X.industry?(0,j.jsxs)("div",{className:"react-select-dropdown mb-4",id:"industry",children:[(0,j.jsxs)("div",{className:"ml-2 mb-2 block text-sm font-light text-kgrey-menuText",children:[(0,j.jsx)("span",{children:"Sub Industry"}),(0,j.jsx)("sup",{children:"*"})]}),(0,j.jsx)(p.gN,{component:h.Z,customStylesProps:d.gb,name:"sub_industry",placeholder:"Sub industry name here",optionLabel:"name",optionValue:"id",isSearchable:!0,isClearable:!1,loadOptionsKey:"results",isDisabled:!l,loadOptionsUrl:"/industries/".concat(null===(t=X.industry)||void 0===t?void 0:t.id,"/sub_industries/"),loadOptionsParams:function(e){return{extra:{search:e}}}})]}):null,(0,j.jsx)(p.gN,{label:"About",name:"about",type:"textarea",component:b.Mg,placeholder:"Enter Company description here",rows:"5",inputElementClassNames:"dark:bg-kdark-lighter font-medium dark:text-white"}),(0,j.jsx)(C.D8,{control:(0,j.jsx)(F.k,{checked:D.darkIcon,onChange:z,name:"darkIcon"}),label:"Icon for dark mode",className:"mb-4",classes:{label:"!text-xs font-light text-kgrey-welcome"}}),(0,j.jsxs)("div",{className:"react-select-dropdown mb-4",children:[(0,j.jsx)("div",{className:"ml-2 mb-2 block text-sm font-light text-kgrey-menuText",children:(0,j.jsxs)("span",{children:["Business ",D.darkIcon?"dark":""," icon "]})}),(0,j.jsx)(N,{field:D.darkIcon?"icon_dark":"icon",setFieldValue:$})]}),(0,j.jsx)(C.D8,{control:(0,j.jsx)(F.k,{checked:A.darkLogo,onChange:V,name:"darkLogo"}),label:"Logo for dark mode",className:"mb-4",classes:{label:"!text-xs font-light text-kgrey-welcome"}}),(0,j.jsxs)("div",{className:"react-select-dropdown mb-4",children:[(0,j.jsx)("div",{className:"ml-2 mb-2 block text-sm font-light text-kgrey-menuText",children:(0,j.jsxs)("span",{children:["Business ",A.darkLogo?"dark":""," logo"]})}),(0,j.jsx)(N,{field:A.darkLogo?"logo_dark":"logo",setFieldValue:$})]}),(0,j.jsx)("h1",{className:"mb-4 text-2xl font-bold dark:text-white",children:"Social connection"}),(0,j.jsx)(p.gN,{label:"Facebook",name:"facebook_url",component:b.Mg,placeholder:"Enter facebook address here",disabled:!l,inputElementClassNames:"dark:bg-kdark-lighter font-medium dark:text-white"}),(0,j.jsx)(p.gN,{label:"Twitter",name:"twitter_url",component:b.Mg,placeholder:"Enter twitter address here",disabled:!l,inputElementClassNames:"dark:bg-kdark-lighter font-medium dark:text-white"}),(0,j.jsxs)("div",{className:"profile__header-user-name ",children:[(0,j.jsx)(S.CopyToClipboard,{text:"https://t.me/KennektFeedbackBot?start=".concat(c),onCopy:function(){M({message:"Feedback link has been copied",variant:"success"})},children:(0,j.jsx)(C.zx,{variant:"contained",className:"!mb-2",children:"Copy Feedback Link"})}),(0,j.jsx)(K.ZP,{title:(0,j.jsx)("div",{className:"text-sm",children:"Please copy and share feedback link for your application developers. They need to add this link into support part of your own(custom) applications, such as mobile applications or web sites. When your clients click to related button or link in your application they will be directed related telegram messenger bot. By the way they can be connected to your Business from your own application or website. Now your clients can open cases inside KENNEKT and you can manage client and staff cases in one platform. Also please feel free with your further questions. We are glad to help you."}),placement:"top",className:"!mb-1 !ml-2",children:(0,j.jsx)(v.Z,{className:"mr-20 p-0",children:(0,j.jsx)(E.kA6,{})})})]})]}),(0,j.jsxs)("div",{className:"col-2",children:[(0,j.jsxs)("div",{className:"mb-4",children:[(0,j.jsx)("label",{htmlFor:"address",className:"ml-2 mb-2 block text-sm font-light text-kgrey-menuText",children:"Address"}),(0,j.jsx)("input",{id:"xyz123",name:"xyz123",autoComplete:"xyz123",type:"search",ref:P,disabled:!l,className:"w-full rounded-lg border border-transparent bg-kgrey-light-grey-1 px-6 py-3.5 text-xs font-medium placeholder-current placeholder-kgrey outline-none transition hover:border-primary focus:border-primary focus:shadow-lg dark:bg-kdark-lighter dark:text-white"})]}),(0,j.jsx)(p.gN,{label:"City",name:"city",component:b.Mg,placeholder:"Enter City here",disabled:!l,inputElementClassNames:"dark:bg-kdark-lighter font-medium dark:text-white"}),(0,j.jsx)(p.gN,{label:"State",name:"state",component:b.Mg,disabled:!l,placeholder:"Enter State here",inputElementClassNames:"dark:bg-kdark-lighter font-medium dark:text-white"}),(0,j.jsx)(p.gN,{label:"Zipcode",name:"zipcode",component:b.Mg,disabled:!l,placeholder:"Enter zipcode here",inputElementClassNames:"dark:bg-kdark-lighter font-medium dark:text-white"}),(0,j.jsx)(p.gN,{label:"Country",name:"country",component:b.Mg,disabled:!l,placeholder:"Enter country here",inputElementClassNames:"dark:bg-kdark-lighter font-medium dark:text-white"}),(0,j.jsx)(p.gN,{label:"Phone number",name:"phone",component:b.UO,disabled:!l,placeholder:"Enter company mobile phone number",enableSearch:!0,onChangeHandler:$,className:"tel-input-profile"}),(0,j.jsxs)("div",{className:"react-select-dropdown mb-4",children:[(0,j.jsx)("div",{className:"ml-2 mb-2 block text-sm font-light text-kgrey-menuText",children:(0,j.jsx)("span",{children:"Map"})}),J?(0,j.jsx)(g.b6,{mapContainerStyle:I,center:{lat:Number(U)||-3.745,lng:Number(B)||-38.523},zoom:10,onLoad:q,onUnmount:R,onClick:Y,children:(0,j.jsx)(g.Jx,{draggable:!0,position:{lat:Number(null===W||void 0===W?void 0:W.lat)||Number(U),lng:Number(null===W||void 0===W?void 0:W.lng)||Number(B)},onDragEnd:Y})}):(0,j.jsx)("p",{className:"dark:text-white",children:"There is problem with loading map or location has not been set."})]}),(0,j.jsx)("div",{className:"flex justify-start",children:(0,j.jsx)(f.Ik,{className:"dark:text-white dark:hover:bg-primary-300 dark:focus:ring-primary-300",type:"submit",isSubmitting:ee,isDisabled:!l||ee,color:"primary",children:"Update"})})]})]})}var M=a(92017),Z=u.Z.user.setUserCompany;var D=function(){var e,n,a=(0,i.a)().company,o=(0,m.j)(!0),l=o.files,u=o.selected,p=o.placeAddress,b=o.calcedLat,h=o.calcedLng,y=o.companyId,g=(0,_.eC)().showNotification,f=(0,c.I0)(),x=(0,M.y)().loadAllBusiness;return(0,j.jsx)("div",{className:"business-profile",children:a?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(s.Z.Main,{entity:"profile",name:"business-profile",url:"/".concat(y,"/my/company/"),method:"patch",sendAsFormData:!1,normalizeData:"",prependData:!0,fields:[{name:"name",value:a.company.name||"",onSubmitKey:""},{name:"status",value:"ACTIVE",onSubmitKey:""},{name:"created_date",value:a.company.created_date,onSubmitKey:""},{name:"website",value:a.company.website||"",type:"website",onSubmitKey:""},{name:"city",value:(r()(p)?a.company.city:p.city)||"",onSubmitKey:""},{name:"address",value:(r()(p)?a.company.address:p.plain())||"",onSubmitKey:""},{name:"address_2",value:a.company.address_2||"",onSubmitKey:""},{name:"zipcode",value:(r()(p)?a.company.zipcode:p.zip)||"",onSubmitKey:""},{name:"country",value:(r()(p)?"object"===typeof a.company.country&&null!==a.company.country?null===(e=a.company.country)||void 0===e?void 0:e.name:a.company.country:p.country)||"",required:!0,onSubmitKey:""},{name:"state",value:(r()(p)?"object"===typeof a.company.state&&null!==a.company.state?null===(n=a.company.state)||void 0===n?void 0:n.name:a.company.state:p.state)||"",required:!0,onSubmitKey:""},{name:"phone",value:a.company.phone||"",onSubmitKey:""},{name:"about",value:a.company.about||"",onSubmitKey:""},{name:"industry",value:a.company.industry,onSubmitKey:"",type:"object",required:!0},{name:"sub_industry",value:a.company.sub_industry,onSubmitKey:"",type:"object",required:!1},{name:"icon",value:l.icon,onSubmitKey:"",type:"object"},{name:"icon_dark",value:l.icon_dark,onSubmitKey:"",type:"object"},{name:"logo",value:l.logo,onSubmitKey:"",type:"object"},{name:"logo_dark",value:l.logo_dark,onSubmitKey:"",type:"object"},{name:"facebook_url",value:a.company.facebook_url,onSubmitKey:"",type:"website"},{name:"twitter_url",value:a.company.twitter_url||"",onSubmitKey:"",type:"website"},{name:"lat",value:(u?Number(u.lat).toFixed(9):String(b))||"",onSubmitKey:""},{name:"lng",value:(u?Number(u.lng).toFixed(9):String(h))||"",onSubmitKey:""}],onSuccess:function(e,n){var o,s=(0,t.Z)((0,t.Z)({},a),{},{company:(0,t.Z)((0,t.Z)({},e),{},{owner:(null===a||void 0===a||null===(o=a.company)||void 0===o?void 0:o.owner)||{}})});d.tO.set("company",JSON.stringify(s)),f(Z(s)),x(),g({message:"Successfully updated!",variant:"success"})},onError:function(e,n){var a;n();var t="Something went wrong!";if(e.response&&null!==(a=e.response)&&void 0!==a&&a.data){var o,s,l=null===(o=e.response)||void 0===o||null===(s=o.data)||void 0===s?void 0:s.message;t=l.match("Company already Exists!")?"The Business Name Already Exists!":l}g({message:t,variant:"error"})},children:function(e){var n=e.isSubmitting,a=e.values,t=e.setFieldValue,o=e.errors,s=e.setFieldError;return(0,j.jsx)(L,{values:a,setFieldValue:t,isSubmitting:n,errors:o,setFieldError:s})}})," "]}):null})}},50576:function(e,n,a){a.d(n,{Y:function(){return o}});var t=a(72791);function o(e){var n=e.setFieldValue,a=e.searchInputRef,o=e.field,s=void 0===o?"address":o,l=(0,t.useCallback)((function(e){var a=e.target.value;n(s,a)}),[]);(0,t.useEffect)((function(){var e=a.current;return a.current&&a.current.addEventListener("change",l),function(){e.removeEventListener("change",l)}}),[a,l])}}}]);
//# sourceMappingURL=7099.236cb73a.chunk.js.map