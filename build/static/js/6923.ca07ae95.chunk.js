"use strict";(self.webpackChunkkennekt_front_end_client=self.webpackChunkkennekt_front_end_client||[]).push([[6923],{96923:function(e,n,t){t.r(n),t.d(n,{default:function(){return z}});var a=t(1413),o=t(47313),s=t(84365),l=t(45522),r=t.n(l),i=t(11760),d=t(22934),c=t(92241),m=t(32),u=t(49835),p=t(94715),b=t(17480),h=t(61818),y=t(77344),g=t(37753),x=t(63876),f=t(83061),k=t(4058),v=t(54070),j=t(46417);function N(e){var n,t=e.field,s=e.setFieldValue,l=(0,u.j)(),r=l.uploadMeta,i=l.setUploadMeta,d=l.cancelSending,c=l.setCancelSending,m=l.setFiles,p=l.files;return(0,o.useEffect)((function(){p[t]&&s(t,p[t])}),[p]),(0,j.jsxs)("div",{className:"lg:flex",children:[(0,j.jsx)(x.bA,{uploadMeta:r,setUploadMeta:i,cancelSending:d,setCancelSending:c,setFile:m,isBusinessProfile:!0,field:t}),(0,j.jsxs)("div",{className:"flex-grow-1 lg:ml-6 mt-4 lg:mt-0",children:[(0,j.jsxs)("div",{className:(0,f.Z)("overflow-hidden relative border border-kgrey-border-solid",{"w-24 h-24 rounded-full":t.includes("icon"),"w-64 h-16 rounded-md":t.includes("logo")}),children:[(0,j.jsx)("img",{src:(null===p||void 0===p||null===(n=p[t])||void 0===n?void 0:n.url)||("icon"===t?"https://via.placeholder.com/96x96/":"https://via.placeholder.com/263x60/"),alt:t,className:"object-cover h-full w-full"}),null!==r.progress&&r.field===t&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("div",{className:"absolute z-10  position-centered",children:(0,j.jsx)(x.aN,{variant:"static",value:r.progress})}),(0,j.jsx)(v.Z,{onClick:function(){c(!0),i((function(e){return(0,a.Z)((0,a.Z)({},e),{},{progress:null})}))},className:"!absolute z-20 position-centered text-white",children:(0,j.jsx)(k.Z,{className:"text-primary"})})]})]}),(0,j.jsx)("div",{className:"text-xs text-kgrey mt-1",children:t.includes("icon")?"Please use 1:1 image for best fit":"Please use (260x63)px or 4:1 image for best fit"})]})]})}var w=t(69082),S=t(33538),E=t(57864),C=t(57718),_=t(26926),K=t(68323),F=t(52654),L={width:"100%",height:"400px"};function I(e){var n,t,a,s=(0,y.m)(),l=s.isAdmin,c=s.companyId,m=(s.isDarkMode,(0,i.a)()),f=m.company,k=m.userData,I=(null===f||void 0===f||null===(n=f.company)||void 0===n||null===(t=n.owner)||void 0===t?void 0:t.id)===k.id,M=(0,C.eC)().showNotification,Z=(0,C.h9)({darkIcon:!1}),z=Z.checked,T=Z.handleChange,D=(0,C.h9)({darkLogo:!1}),A=D.checked,V=D.handleChange,O=(0,u.j)(!0),P=O.searchInputRef,U=O.calcedLat,B=O.calcedLng,q=O.onLoad,W=O.onUnmount,R=O.selected,J=O.onMarkerDrag,Y=O.isLoaded,H=O.placeAddress,G=O.files,Q=O.map,X=e.values,$=e.setFieldValue,ee=e.isSubmitting,ne=e.errors,te=e.setFieldError;return(0,w.Y)({setFieldValue:$,searchInputRef:P}),(0,o.useEffect)((function(){r()(H)||($("city",H.city),$("address",H.plain()),$("state",H.state),$("country",H.country),$("zipcode",H.zip))}),[H]),(0,o.useEffect)((function(){R&&"lat"in R&&"lng"in R&&($("lat",Number(null===R||void 0===R?void 0:R.lat).toFixed(9)),$("lng",Number(null===R||void 0===R?void 0:R.lng).toFixed(9)))}),[R]),(0,o.useEffect)((function(){G.icon&&$("icon",G.icon),G.icon_dark&&$("icon_dark",G.icon_dark),G.logo&&$("logo",G.logo),G.logo_dark&&$("logo_dark",G.logo_dark)}),[G]),(0,o.useEffect)((function(){r()(ne)||(0,d.lZ)("business-profile-form")}),[ne]),(0,o.useEffect)((function(){$("sub_industry",null)}),[X.industry]),(0,o.useEffect)((function(){ee&&!r()(ne)&&Object.keys(ne).forEach((function(e){return te(e,!1)}))}),[ee]),(0,o.useEffect)((function(){if(Y&&Q){var e=new google.maps.LatLng(Number(null===X||void 0===X?void 0:X.lat),Number(null===X||void 0===X?void 0:X.lng));Q.panTo(e)}}),[Y,Q]),(0,j.jsxs)("div",{className:"lg:grid w-100 lg:grid-cols-2 mt-6 gap-x-11",id:"business-profile-form",children:[(0,j.jsxs)("div",{className:"col-1",children:[(0,j.jsx)(p.gN,{label:"Name",name:"name",component:b.Mg,placeholder:"Enter name here",inputElementClassNames:"dark:bg-kdark-lighter font-medium dark:text-white",disabled:!I}),(0,j.jsx)(p.gN,{label:"Website",name:"website",component:b.Mg,placeholder:"Enter Website here",inputElementClassNames:"dark:bg-kdark-lighter font-medium dark:text-white"}),(0,j.jsxs)("div",{className:"mb-4 react-select-dropdown",children:[(0,j.jsxs)("div",{className:"ml-2 text-sm font-light text-kgrey-menuText mb-2 block",children:[(0,j.jsx)("span",{children:"Industry"}),(0,j.jsx)("sup",{children:"*"})]}),(0,j.jsx)(p.gN,{component:h.Z,customStylesProps:d.gb,name:"industry",placeholder:"Industry name here",optionLabel:"name",optionValue:"id",isSearchable:!0,isClearable:!1,loadOptionsKey:"results",isDisabled:!l,loadOptionsUrl:"/industries/",loadOptionsParams:function(e){return{extra:{search:e}}}})]}),X.industry?(0,j.jsxs)("div",{className:"mb-4 react-select-dropdown",id:"industry",children:[(0,j.jsxs)("div",{className:"ml-2 text-sm font-light text-kgrey-menuText mb-2 block",children:[(0,j.jsx)("span",{children:"Sub Industry"}),(0,j.jsx)("sup",{children:"*"})]}),(0,j.jsx)(p.gN,{component:h.Z,customStylesProps:d.gb,name:"sub_industry",placeholder:"Sub industry name here",optionLabel:"name",optionValue:"id",isSearchable:!0,isClearable:!1,loadOptionsKey:"results",isDisabled:!l,loadOptionsUrl:"/industries/".concat(null===(a=X.industry)||void 0===a?void 0:a.id,"/sub_industries/"),loadOptionsParams:function(e){return{extra:{search:e}}}})]}):null,(0,j.jsx)(p.gN,{label:"About",name:"about",type:"textarea",component:b.Mg,placeholder:"Enter Company description here",rows:"5",inputElementClassNames:"dark:bg-kdark-lighter font-medium dark:text-white"}),(0,j.jsx)(_.D8,{control:(0,j.jsx)(F.k,{checked:z.darkIcon,onChange:T,name:"darkIcon"}),label:"Icon for dark mode",className:"mb-4",classes:{label:"!text-xs font-light text-kgrey-welcome"}}),(0,j.jsxs)("div",{className:"mb-4 react-select-dropdown",children:[(0,j.jsx)("div",{className:"ml-2 text-sm font-light text-kgrey-menuText mb-2 block",children:(0,j.jsxs)("span",{children:["Business ",z.darkIcon?"dark":""," icon "]})}),(0,j.jsx)(N,{field:z.darkIcon?"icon_dark":"icon",setFieldValue:$})]}),(0,j.jsx)(_.D8,{control:(0,j.jsx)(F.k,{checked:A.darkLogo,onChange:V,name:"darkLogo"}),label:"Logo for dark mode",className:"mb-4",classes:{label:"!text-xs font-light text-kgrey-welcome"}}),(0,j.jsxs)("div",{className:"mb-4 react-select-dropdown",children:[(0,j.jsx)("div",{className:"ml-2 text-sm font-light text-kgrey-menuText mb-2 block",children:(0,j.jsxs)("span",{children:["Business ",A.darkLogo?"dark":""," logo"]})}),(0,j.jsx)(N,{field:A.darkLogo?"logo_dark":"logo",setFieldValue:$})]}),(0,j.jsx)("h1",{className:"font-bold text-2xl mb-4 dark:text-white",children:"Social connection"}),(0,j.jsx)(p.gN,{label:"Facebook",name:"facebook_url",component:b.Mg,placeholder:"Enter facebook address here",disabled:!l,inputElementClassNames:"dark:bg-kdark-lighter font-medium dark:text-white"}),(0,j.jsx)(p.gN,{label:"Twitter",name:"twitter_url",component:b.Mg,placeholder:"Enter twitter address here",disabled:!l,inputElementClassNames:"dark:bg-kdark-lighter font-medium dark:text-white"}),(0,j.jsxs)("div",{className:"profile__header-user-name ",children:[(0,j.jsx)(S.CopyToClipboard,{text:"https://t.me/KennektFeedbackBot?start=".concat(c),onCopy:function(){M({message:"Feedback link has been copied",variant:"success"})},children:(0,j.jsx)(_.zx,{variant:"contained",className:"!mb-2",children:"Copy Feedback Link"})}),(0,j.jsx)(K.ZP,{title:(0,j.jsx)("div",{className:"text-sm",children:"Please copy and share feedback link for your application developers. They need to add this link into support part of your own(custom) applications, such as mobile applications or web sites. When your clients click to related button or link in your application they will be directed related telegram messenger bot. By the way they can be connected to your Business from your own application or website. Now your clients can open cases inside KENNEKT and you can manage client and staff cases in one platform. Also please feel free with your further questions. We are glad to help you."}),placement:"top",className:"!mb-1 !ml-2",children:(0,j.jsx)(v.Z,{className:"p-0 mr-20",children:(0,j.jsx)(E.kA6,{})})})]})]}),(0,j.jsxs)("div",{className:"col-2",children:[(0,j.jsxs)("div",{className:"mb-4",children:[(0,j.jsx)("label",{htmlFor:"address",className:"ml-2 text-sm font-light text-kgrey-menuText mb-2 block",children:"Address"}),(0,j.jsx)("input",{id:"xyz123",name:"xyz123",autoComplete:"xyz123",type:"search",ref:P,disabled:!l,className:"border bg-kgrey-light-grey-1 font-medium border-transparent rounded-lg text-xs px-6 py-3.5 outline-none transition focus:border-primary focus:shadow-lg w-full placeholder-current placeholder-kgrey dark:bg-kdark-lighter dark:text-white hover:border-primary"})]}),(0,j.jsx)(p.gN,{label:"City",name:"city",component:b.Mg,placeholder:"Enter City here",disabled:!l,inputElementClassNames:"dark:bg-kdark-lighter font-medium dark:text-white"}),(0,j.jsx)(p.gN,{label:"State",name:"state",component:b.Mg,disabled:!l,placeholder:"Enter State here",inputElementClassNames:"dark:bg-kdark-lighter font-medium dark:text-white"}),(0,j.jsx)(p.gN,{label:"Zipcode",name:"zipcode",component:b.Mg,disabled:!l,placeholder:"Enter zipcode here",inputElementClassNames:"dark:bg-kdark-lighter font-medium dark:text-white"}),(0,j.jsx)(p.gN,{label:"Country",name:"country",component:b.Mg,disabled:!l,placeholder:"Enter country here",inputElementClassNames:"dark:bg-kdark-lighter font-medium dark:text-white"}),(0,j.jsx)(p.gN,{label:"Phone number",name:"phone",component:b.UO,disabled:!l,placeholder:"Enter company mobile phone number",enableSearch:!0,onChangeHandler:$,className:"tel-input-profile"}),(0,j.jsxs)("div",{className:"mb-4 react-select-dropdown",children:[(0,j.jsx)("div",{className:"ml-2 text-sm font-light text-kgrey-menuText mb-2 block",children:(0,j.jsx)("span",{children:"Map"})}),Y?(0,j.jsx)(g.b6,{mapContainerStyle:L,center:{lat:Number(U)||-3.745,lng:Number(B)||-38.523},zoom:10,onLoad:q,onUnmount:W,onClick:J,children:(0,j.jsx)(g.Jx,{draggable:!0,position:{lat:Number(null===R||void 0===R?void 0:R.lat)||Number(U),lng:Number(null===R||void 0===R?void 0:R.lng)||Number(B)},onDragEnd:J})}):(0,j.jsx)("p",{className:"dark:text-white",children:"There is problem with loading map or location has not been set."})]}),(0,j.jsx)("div",{className:"flex justify-start",children:(0,j.jsx)(x.Ik,{className:"dark:hover:bg-primary-300 dark:focus:ring-primary-300 dark:text-white",type:"submit",isSubmitting:ee,isDisabled:!l||ee,color:"primary",children:"Update"})})]})]})}var M=t(81246),Z=m.Z.user.setUserCompany;var z=function(){var e,n,t=(0,i.a)().company,o=(0,u.j)(!0),l=o.files,m=o.selected,p=o.placeAddress,b=o.calcedLat,h=o.calcedLng,y=o.companyId,g=(0,C.eC)().showNotification,x=(0,c.I0)(),f=(0,M.y)().loadAllBusiness;return(0,j.jsx)("div",{className:"business-profile",children:t?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(s.Z.Main,{entity:"profile",name:"business-profile",url:"/".concat(y,"/my/company/"),method:"patch",sendAsFormData:!1,normalizeData:"",prependData:!0,fields:[{name:"name",value:t.company.name||"",onSubmitKey:""},{name:"status",value:"ACTIVE",onSubmitKey:""},{name:"created_date",value:t.company.created_date,onSubmitKey:""},{name:"website",value:t.company.website||"",type:"website",onSubmitKey:""},{name:"city",value:(r()(p)?t.company.city:p.city)||"",onSubmitKey:""},{name:"address",value:(r()(p)?t.company.address:p.plain())||"",onSubmitKey:""},{name:"address_2",value:t.company.address_2||"",onSubmitKey:""},{name:"zipcode",value:(r()(p)?t.company.zipcode:p.zip)||"",onSubmitKey:""},{name:"country",value:(r()(p)?"object"===typeof t.company.country&&null!==t.company.country?null===(e=t.company.country)||void 0===e?void 0:e.name:t.company.country:p.country)||"",required:!0,onSubmitKey:""},{name:"state",value:(r()(p)?"object"===typeof t.company.state&&null!==t.company.state?null===(n=t.company.state)||void 0===n?void 0:n.name:t.company.state:p.state)||"",required:!0,onSubmitKey:""},{name:"phone",value:t.company.phone||"",onSubmitKey:""},{name:"about",value:t.company.about||"",onSubmitKey:""},{name:"industry",value:t.company.industry,onSubmitKey:"",type:"object",required:!0},{name:"sub_industry",value:t.company.sub_industry,onSubmitKey:"",type:"object",required:!1},{name:"icon",value:l.icon,onSubmitKey:"",type:"object"},{name:"icon_dark",value:l.icon_dark,onSubmitKey:"",type:"object"},{name:"logo",value:l.logo,onSubmitKey:"",type:"object"},{name:"logo_dark",value:l.logo_dark,onSubmitKey:"",type:"object"},{name:"facebook_url",value:t.company.facebook_url,onSubmitKey:"",type:"website"},{name:"twitter_url",value:t.company.twitter_url||"",onSubmitKey:"",type:"website"},{name:"lat",value:(m?Number(m.lat).toFixed(9):String(b))||"",onSubmitKey:""},{name:"lng",value:(m?Number(m.lng).toFixed(9):String(h))||"",onSubmitKey:""}],onSuccess:function(e,n){var o,s=(0,a.Z)((0,a.Z)({},t),{},{company:(0,a.Z)((0,a.Z)({},e),{},{owner:(null===t||void 0===t||null===(o=t.company)||void 0===o?void 0:o.owner)||{}})});d.tO.set("company",JSON.stringify(s)),x(Z(s)),f(),g({message:"Successfully updated!",variant:"success"})},onError:function(e,n){n(),g({message:"Something went wrong!",variant:"error"})},children:function(e){var n=e.isSubmitting,t=e.values,a=e.setFieldValue,o=e.errors,s=e.setFieldError;return(0,j.jsx)(I,{values:t,setFieldValue:a,isSubmitting:n,errors:o,setFieldError:s})}})," "]}):null})}},69082:function(e,n,t){t.d(n,{Y:function(){return o}});var a=t(47313);function o(e){var n=e.setFieldValue,t=e.searchInputRef,o=e.field,s=void 0===o?"address":o,l=(0,a.useCallback)((function(e){var t=e.target.value;n(s,t)}),[]);(0,a.useEffect)((function(){var e=t.current;return t.current&&t.current.addEventListener("change",l),function(){e.removeEventListener("change",l)}}),[t,l])}}}]);