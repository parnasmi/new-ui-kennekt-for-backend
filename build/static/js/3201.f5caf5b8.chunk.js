"use strict";(self.webpackChunkkennekt_front_end_client=self.webpackChunkkennekt_front_end_client||[]).push([[3201],{3201:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var i=t(70885),s=t(47313),r=t(51328),l=t(77344),a=t(95762),c=t(94435),o=t(79447),d=t(981),u=t(28303),h=t(94024),m=t(930),x=t(84365),j=t(33361),p=t(46417);function v(e){var n=e.onSuccess,t=e.entity,i=(0,l.m)().companyId,s=(0,o.eC)().showNotification;return t?(0,p.jsx)("div",{className:"max-w-[446px]",children:(0,p.jsx)(a.Z.One,{id:t.id,relations:"",entity:"clientsGroup",name:"AllClientGroup",url:"/".concat(i,"/categories/").concat(t.id,"/"),params:{},children:function(e){var l=e.item,a=e.isFetched,c=l;return(0,p.jsxs)(p.Fragment,{children:[a?null:(0,p.jsx)(r.aN,{tiled:!0,withOverlay:!0}),(0,p.jsx)(x.Z.Main,{entity:"clientsGroups",name:"AllClientsGroups",url:"/".concat(i,"/categories/").concat(t.id,"/"),method:"put",primaryKey:"id",sendAsFormData:!1,normalizeData:function(e){return e},updateData:!0,fields:[{name:"clients",onSubmitKey:"",required:!1,type:"object",value:c.clients},{name:"name",onSubmitKey:"",required:!0,value:c.name}],onSuccess:function(e,t){s({message:"Successfully updated.."}),n(),t()},onError:function(e,n){var t,i,r=(null===e||void 0===e||null===(t=e.response)||void 0===t||null===(i=t.data)||void 0===i?void 0:i.message)||"Something went wrong";s({message:r,variant:"error"})},children:function(e){var t=e.isSubmitting,i=(e.values,e.resetForm);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r.ph,{resetForm:i,title:"Edit Client Group",isEditing:!0}),(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("div",{className:"flex items-center",children:[(0,p.jsx)(j.Z,{isSubmitting:t,onSuccess:n,isEditing:!0}),t&&(0,p.jsx)(r.aN,{tiled:!0,withOverlay:!0})]})})]})}})]})}})}):null}function f(){var e=(0,l.m)(),n=e.companyId,t=e.isPermitted,x=(0,o.h0)(),j=x.page,f=x.handlePage,g=x.removePage,y=(0,d.k0)().searchQuery,b=(0,h.Z)(y,500),k=(0,i.Z)(b,1)[0],w=(0,o.tv)(),N=w.match,C=w.history;(0,s.useEffect)((function(){return function(){return g()}}),[]);var E=(0,m.Nt)(),S=E.deleteClientGroupHandler,A=E.deleteVisible,F=E.showDeleteVisible,_=E.deleteLoading,G=E.closeDeletePopup,P=E.showEditVisible,D=E.closeEditPopup,H=E.editVisible;return(0,p.jsx)("div",{children:n?(0,p.jsx)(a.Z.All,{entity:"clientsGroups",name:"AllClientsGroups",url:"/".concat(n,"/categories/"),params:{limit:10,extra:{search:k},page:j},children:function(e){var n=e.items,i=e.isFetched,s=e.meta,l=n;return(0,p.jsxs)("div",{children:[(0,p.jsxs)(c.xJ,{classes:{root:"relative "},children:[(0,p.jsxs)(r.k6,{"aria-label":"simple table",classes:{root:"table-fixed dark-mode-styled-table"},children:[(0,p.jsx)(c.ss,{children:(0,p.jsxs)(r.AF,{children:[(0,p.jsx)(r.EU,{style:{width:"60%"},children:"Group Name"}),(0,p.jsx)(r.EU,{style:{width:"20%"},children:"Clients"}),(0,p.jsx)(r.EU,{style:{width:"20%",textAlign:"center"},children:"Actions"})]})}),(0,p.jsx)(c.RM,{children:l.map((function(e){var n=e.clients_count,i=e.name,s=e.id;return(0,p.jsxs)(r.AF,{children:[(0,p.jsx)(r.Yk,{children:(0,p.jsx)(u.rU,{to:"".concat(N.path).concat(e.id),children:(0,p.jsx)("span",{className:"text-primary transition hover:text-primary-dark",children:i})})}),(0,p.jsx)(r.Yk,{children:n}),(0,p.jsx)(r.Yk,{children:(0,p.jsxs)("div",{className:"flex items-center justify-end ",children:[(0,p.jsx)(r.cP.DeleteButton,{isDisabled:!t,clickHandler:function(){return F(e)}}),(0,p.jsx)(r.cP.ViewButton,{clickHandler:function(){return C.push("".concat(N.path).concat(e.id))}}),(0,p.jsx)(r.cP.EditButton,{isDisabled:!t,clickHandler:function(){return P(e)}})]})})]},s)}))})]}),!i&&(0,p.jsx)(r.aN,{tiled:!0,withOverlay:!0})]}),(0,p.jsx)(r.sm,{featureHandler:S(),isOpen:Boolean(A),toggleHandler:G,title:"Are you sure to delete the ".concat(null===A||void 0===A?void 0:A.name,"?"),hasLoader:!0,isLoading:_}),(0,p.jsx)(c.Cx,{handleModalOpen:D,open:Boolean(H),children:(0,p.jsx)(v,{onSuccess:D,entity:H})}),(0,p.jsx)("div",{className:"news__pagination my-4",children:n.length?(0,p.jsx)(c.tl,{count:null===s||void 0===s?void 0:s.last_page,page:j?+j:1,defaultPage:6,siblingCount:1,color:"primary",onChange:f}):null})]})}}):(0,p.jsx)("div",{className:"flex justify-center",children:(0,p.jsx)(r.aN,{})})})}var g=function(){return(0,p.jsx)(r.SV,{children:(0,p.jsx)(f,{})})}}}]);