!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="eb244433-92d9-43af-854a-c3c16af2acc8",e._sentryDebugIdIdentifier="sentry-dbid-eb244433-92d9-43af-854a-c3c16af2acc8")}catch(e){}}();var _global="undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{};_global.SENTRY_RELEASE={id:"a086bfaddc61e7dbbcac0a9c42145052439dbbf3"},(self.webpackChunkkennekt_front_end_client=self.webpackChunkkennekt_front_end_client||[]).push([[4076],{24076:function(e,t,a){a.d(t,{Z:function(){return I}});var n=a(42982),r=a(70885),o=a(45987),i=a(87462),l=a(72791),c=a(28182),u=a(38317),s=a(23364),d=a(13108),v=a(81175),f=a(54667),m=a(72216),p=a(69806),b=a(91122),h=a(92497);var g=(0,u.Z)((function(e){return{thumb:{"&$open":{"& $offset":{transform:"scale(1) translateY(-10px)"}}},open:{},offset:(0,i.Z)({zIndex:1},e.typography.body2,{fontSize:e.typography.pxToRem(12),lineHeight:1.2,transition:e.transitions.create(["transform"],{duration:e.transitions.duration.shortest}),top:-34,transformOrigin:"bottom center",transform:"scale(0)",position:"absolute"}),circle:{display:"flex",alignItems:"center",justifyContent:"center",width:32,height:32,borderRadius:"50% 50% 50% 0",backgroundColor:"currentColor",transform:"rotate(-45deg)"},label:{color:e.palette.primary.contrastText,transform:"rotate(45deg)"}}}),{name:"PrivateValueLabel"})((function(e){var t=e.children,a=e.classes,n=e.className,r=e.open,o=e.value,i=e.valueLabelDisplay;return"off"===i?t:l.cloneElement(t,{className:(0,c.Z)(t.props.className,(r||"on"===i)&&a.open,a.thumb)},l.createElement("span",{className:(0,c.Z)(a.offset,n)},l.createElement("span",{className:a.circle},l.createElement("span",{className:a.label},o))))}));function x(e,t){return e-t}function y(e,t,a){return Math.min(Math.max(t,e),a)}function w(e,t){return e.reduce((function(e,a,n){var r=Math.abs(t-a);return null===e||r<e.distance||r===e.distance?{distance:r,index:n}:e}),null).index}function k(e,t){if(void 0!==t.current&&e.changedTouches){for(var a=0;a<e.changedTouches.length;a+=1){var n=e.changedTouches[a];if(n.identifier===t.current)return{x:n.clientX,y:n.clientY}}return!1}return{x:e.clientX,y:e.clientY}}function L(e,t,a){return 100*(e-t)/(a-t)}function E(e,t,a){var n=Math.round((e-a)/t)*t+a;return Number(n.toFixed(function(e){if(Math.abs(e)<1){var t=e.toExponential().split("e-"),a=t[0].split(".")[1];return(a?a.length:0)+parseInt(t[1],10)}var n=e.toString().split(".")[1];return n?n.length:0}(t)))}function Z(e){var t=e.values,a=e.source,n=e.newValue,r=e.index;if(t[r]===n)return a;var o=t.slice();return o[r]=n,o}function C(e){var t=e.sliderRef,a=e.activeIndex,n=e.setActive;t.current.contains(document.activeElement)&&Number(document.activeElement.getAttribute("data-index"))===a||t.current.querySelector('[role="slider"][data-index="'.concat(a,'"]')).focus(),n&&n(a)}var A={horizontal:{offset:function(e){return{left:"".concat(e,"%")}},leap:function(e){return{width:"".concat(e,"%")}}},"horizontal-reverse":{offset:function(e){return{right:"".concat(e,"%")}},leap:function(e){return{width:"".concat(e,"%")}}},vertical:{offset:function(e){return{bottom:"".concat(e,"%")}},leap:function(e){return{height:"".concat(e,"%")}}}},R=function(e){return e},$=l.forwardRef((function(e,t){var a=e["aria-label"],u=e["aria-labelledby"],d=e["aria-valuetext"],$=e.classes,I=e.className,N=e.color,S=void 0===N?"primary":N,V=e.component,D=void 0===V?"span":V,T=e.defaultValue,_=e.disabled,M=void 0!==_&&_,F=e.getAriaLabel,O=e.getAriaValueText,z=e.marks,B=void 0!==z&&z,U=e.max,j=void 0===U?100:U,P=e.min,Y=void 0===P?0:P,H=e.name,X=e.onChange,q=e.onChangeCommitted,K=e.onMouseDown,W=e.orientation,G=void 0===W?"horizontal":W,J=e.scale,Q=void 0===J?R:J,ee=e.step,te=void 0===ee?1:ee,ae=e.ThumbComponent,ne=void 0===ae?"span":ae,re=e.track,oe=void 0===re?"normal":re,ie=e.value,le=e.ValueLabelComponent,ce=void 0===le?g:le,ue=e.valueLabelDisplay,se=void 0===ue?"off":ue,de=e.valueLabelFormat,ve=void 0===de?R:de,fe=(0,o.Z)(e,["aria-label","aria-labelledby","aria-valuetext","classes","className","color","component","defaultValue","disabled","getAriaLabel","getAriaValueText","marks","max","min","name","onChange","onChangeCommitted","onMouseDown","orientation","scale","step","ThumbComponent","track","value","ValueLabelComponent","valueLabelDisplay","valueLabelFormat"]),me=(0,s.Z)(),pe=l.useRef(),be=l.useState(-1),he=be[0],ge=be[1],xe=l.useState(-1),ye=xe[0],we=xe[1],ke=(0,h.Z)({controlled:ie,default:T,name:"Slider"}),Le=(0,r.Z)(ke,2),Ee=Le[0],Ze=Le[1],Ce=Array.isArray(Ee),Ae=Ce?Ee.slice().sort(x):[Ee];Ae=Ae.map((function(e){return y(e,Y,j)}));var Re=!0===B&&null!==te?(0,n.Z)(Array(Math.floor((j-Y)/te)+1)).map((function(e,t){return{value:Y+te*t}})):B||[],$e=(0,v.Z)(),Ie=$e.isFocusVisible,Ne=$e.onBlurVisible,Se=$e.ref,Ve=l.useState(-1),De=Ve[0],Te=Ve[1],_e=l.useRef(),Me=(0,p.Z)(Se,_e),Fe=(0,p.Z)(t,Me),Oe=(0,m.Z)((function(e){var t=Number(e.currentTarget.getAttribute("data-index"));Ie(e)&&Te(t),we(t)})),ze=(0,m.Z)((function(){-1!==De&&(Te(-1),Ne()),we(-1)})),Be=(0,m.Z)((function(e){var t=Number(e.currentTarget.getAttribute("data-index"));we(t)})),Ue=(0,m.Z)((function(){we(-1)})),je="rtl"===me.direction,Pe=(0,m.Z)((function(e){var t,a=Number(e.currentTarget.getAttribute("data-index")),n=Ae[a],r=(j-Y)/10,o=Re.map((function(e){return e.value})),i=o.indexOf(n),l=je?"ArrowLeft":"ArrowRight",c=je?"ArrowRight":"ArrowLeft";switch(e.key){case"Home":t=Y;break;case"End":t=j;break;case"PageUp":te&&(t=n+r);break;case"PageDown":te&&(t=n-r);break;case l:case"ArrowUp":t=te?n+te:o[i+1]||o[o.length-1];break;case c:case"ArrowDown":t=te?n-te:o[i-1]||o[0];break;default:return}if(e.preventDefault(),te&&(t=E(t,te,Y)),t=y(t,Y,j),Ce){var u=t;t=Z({values:Ae,source:Ee,newValue:t,index:a}).sort(x),C({sliderRef:_e,activeIndex:t.indexOf(u)})}Ze(t),Te(a),X&&X(e,t),q&&q(e,t)})),Ye=l.useRef(),He=G;je&&"vertical"!==G&&(He+="-reverse");var Xe=function(e){var t,a,n=e.finger,r=e.move,o=void 0!==r&&r,i=e.values,l=e.source,c=_e.current.getBoundingClientRect(),u=c.width,s=c.height,d=c.bottom,v=c.left;if(t=0===He.indexOf("vertical")?(d-n.y)/s:(n.x-v)/u,-1!==He.indexOf("-reverse")&&(t=1-t),a=function(e,t,a){return(a-t)*e+t}(t,Y,j),te)a=E(a,te,Y);else{var f=Re.map((function(e){return e.value}));a=f[w(f,a)]}a=y(a,Y,j);var m=0;if(Ce){var p=a;m=(a=Z({values:i,source:l,newValue:a,index:m=o?Ye.current:w(i,a)}).sort(x)).indexOf(p),Ye.current=m}return{newValue:a,activeIndex:m}},qe=(0,m.Z)((function(e){var t=k(e,pe);if(t){var a=Xe({finger:t,move:!0,values:Ae,source:Ee}),n=a.newValue,r=a.activeIndex;C({sliderRef:_e,activeIndex:r,setActive:ge}),Ze(n),X&&X(e,n)}})),Ke=(0,m.Z)((function(e){var t=k(e,pe);if(t){var a=Xe({finger:t,values:Ae,source:Ee}).newValue;ge(-1),"touchend"===e.type&&we(-1),q&&q(e,a),pe.current=void 0;var n=(0,f.Z)(_e.current);n.removeEventListener("mousemove",qe),n.removeEventListener("mouseup",Ke),n.removeEventListener("touchmove",qe),n.removeEventListener("touchend",Ke)}})),We=(0,m.Z)((function(e){e.preventDefault();var t=e.changedTouches[0];null!=t&&(pe.current=t.identifier);var a=k(e,pe),n=Xe({finger:a,values:Ae,source:Ee}),r=n.newValue,o=n.activeIndex;C({sliderRef:_e,activeIndex:o,setActive:ge}),Ze(r),X&&X(e,r);var i=(0,f.Z)(_e.current);i.addEventListener("touchmove",qe),i.addEventListener("touchend",Ke)}));l.useEffect((function(){var e=_e.current;e.addEventListener("touchstart",We);var t=(0,f.Z)(e);return function(){e.removeEventListener("touchstart",We),t.removeEventListener("mousemove",qe),t.removeEventListener("mouseup",Ke),t.removeEventListener("touchmove",qe),t.removeEventListener("touchend",Ke)}}),[Ke,qe,We]);var Ge=(0,m.Z)((function(e){K&&K(e),e.preventDefault();var t=k(e,pe),a=Xe({finger:t,values:Ae,source:Ee}),n=a.newValue,r=a.activeIndex;C({sliderRef:_e,activeIndex:r,setActive:ge}),Ze(n),X&&X(e,n);var o=(0,f.Z)(_e.current);o.addEventListener("mousemove",qe),o.addEventListener("mouseup",Ke)})),Je=L(Ce?Ae[0]:Y,Y,j),Qe=L(Ae[Ae.length-1],Y,j)-Je,et=(0,i.Z)({},A[He].offset(Je),A[He].leap(Qe));return l.createElement(D,(0,i.Z)({ref:Fe,className:(0,c.Z)($.root,$["color".concat((0,b.Z)(S))],I,M&&$.disabled,Re.length>0&&Re.some((function(e){return e.label}))&&$.marked,!1===oe&&$.trackFalse,"vertical"===G&&$.vertical,"inverted"===oe&&$.trackInverted),onMouseDown:Ge},fe),l.createElement("span",{className:$.rail}),l.createElement("span",{className:$.track,style:et}),l.createElement("input",{value:Ae.join(","),name:H,type:"hidden"}),Re.map((function(e,t){var a,n=L(e.value,Y,j),r=A[He].offset(n);return a=!1===oe?-1!==Ae.indexOf(e.value):"normal"===oe&&(Ce?e.value>=Ae[0]&&e.value<=Ae[Ae.length-1]:e.value<=Ae[0])||"inverted"===oe&&(Ce?e.value<=Ae[0]||e.value>=Ae[Ae.length-1]:e.value>=Ae[0]),l.createElement(l.Fragment,{key:e.value},l.createElement("span",{style:r,"data-index":t,className:(0,c.Z)($.mark,a&&$.markActive)}),null!=e.label?l.createElement("span",{"aria-hidden":!0,"data-index":t,style:r,className:(0,c.Z)($.markLabel,a&&$.markLabelActive)},e.label):null)})),Ae.map((function(e,t){var n=L(e,Y,j),r=A[He].offset(n);return l.createElement(ce,{key:t,valueLabelFormat:ve,valueLabelDisplay:se,className:$.valueLabel,value:"function"===typeof ve?ve(Q(e),t):ve,index:t,open:ye===t||he===t||"on"===se,disabled:M},l.createElement(ne,{className:(0,c.Z)($.thumb,$["thumbColor".concat((0,b.Z)(S))],he===t&&$.active,M&&$.disabled,De===t&&$.focusVisible),tabIndex:M?null:0,role:"slider",style:r,"data-index":t,"aria-label":F?F(t):a,"aria-labelledby":u,"aria-orientation":G,"aria-valuemax":Q(j),"aria-valuemin":Q(Y),"aria-valuenow":Q(e),"aria-valuetext":O?O(Q(e),t):d,onKeyDown:Pe,onFocus:Oe,onBlur:ze,onMouseOver:Be,onMouseLeave:Ue}))})))})),I=(0,u.Z)((function(e){return{root:{height:2,width:"100%",boxSizing:"content-box",padding:"13px 0",display:"inline-block",position:"relative",cursor:"pointer",touchAction:"none",color:e.palette.primary.main,WebkitTapHighlightColor:"transparent","&$disabled":{pointerEvents:"none",cursor:"default",color:e.palette.grey[400]},"&$vertical":{width:2,height:"100%",padding:"0 13px"},"@media (pointer: coarse)":{padding:"20px 0","&$vertical":{padding:"0 20px"}},"@media print":{colorAdjust:"exact"}},colorPrimary:{},colorSecondary:{color:e.palette.secondary.main},marked:{marginBottom:20,"&$vertical":{marginBottom:"auto",marginRight:20}},vertical:{},disabled:{},rail:{display:"block",position:"absolute",width:"100%",height:2,borderRadius:1,backgroundColor:"currentColor",opacity:.38,"$vertical &":{height:"100%",width:2}},track:{display:"block",position:"absolute",height:2,borderRadius:1,backgroundColor:"currentColor","$vertical &":{width:2}},trackFalse:{"& $track":{display:"none"}},trackInverted:{"& $track":{backgroundColor:"light"===e.palette.type?(0,d.$n)(e.palette.primary.main,.62):(0,d._j)(e.palette.primary.main,.5)},"& $rail":{opacity:1}},thumb:{position:"absolute",width:12,height:12,marginLeft:-6,marginTop:-5,boxSizing:"border-box",borderRadius:"50%",outline:0,backgroundColor:"currentColor",display:"flex",alignItems:"center",justifyContent:"center",transition:e.transitions.create(["box-shadow"],{duration:e.transitions.duration.shortest}),"&::after":{position:"absolute",content:'""',borderRadius:"50%",left:-15,top:-15,right:-15,bottom:-15},"&$focusVisible,&:hover":{boxShadow:"0px 0px 0px 8px ".concat((0,d.U1)(e.palette.primary.main,.16)),"@media (hover: none)":{boxShadow:"none"}},"&$active":{boxShadow:"0px 0px 0px 14px ".concat((0,d.U1)(e.palette.primary.main,.16))},"&$disabled":{width:8,height:8,marginLeft:-4,marginTop:-3,"&:hover":{boxShadow:"none"}},"$vertical &":{marginLeft:-5,marginBottom:-6},"$vertical &$disabled":{marginLeft:-3,marginBottom:-4}},thumbColorPrimary:{},thumbColorSecondary:{"&$focusVisible,&:hover":{boxShadow:"0px 0px 0px 8px ".concat((0,d.U1)(e.palette.secondary.main,.16))},"&$active":{boxShadow:"0px 0px 0px 14px ".concat((0,d.U1)(e.palette.secondary.main,.16))}},active:{},focusVisible:{},valueLabel:{left:"calc(-50% - 4px)"},mark:{position:"absolute",width:2,height:2,borderRadius:1,backgroundColor:"currentColor"},markActive:{backgroundColor:e.palette.background.paper,opacity:.8},markLabel:(0,i.Z)({},e.typography.body2,{color:e.palette.text.secondary,position:"absolute",top:26,transform:"translateX(-50%)",whiteSpace:"nowrap","$vertical &":{top:"auto",left:26,transform:"translateY(50%)"},"@media (pointer: coarse)":{top:40,"$vertical &":{left:31}}}),markLabelActive:{color:e.palette.text.primary}}}),{name:"MuiSlider"})($)}}]);
//# sourceMappingURL=4076.c9ecbac0.chunk.js.map