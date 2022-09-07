"use strict";(self.webpackChunkkennekt_front_end_client=self.webpackChunkkennekt_front_end_client||[]).push([[8193],{38193:function(e,i,n){n.r(i),n.d(i,{default:function(){return v}});var t=n(70885),s=n(47313),a=n(95762),l=n(94435),c=n(51328),r=n(28303),d=n(10658),o=n.n(d),h=n(77344),u=n(79447),m=n(94024),p=n(22206),x=n(63256),j=n(93905),f=n(92241);var g=n(46417);var v=function(){var e=(0,h.m)(),i=e.companyId,n=e.isPermitted,d=(0,u.h0)(),v=d.page,y=d.handlePage,b=d.removePage,w=(0,p.vd)().searchQuery,k=(0,u.tv)(),_=k.match,C=k.history,D=function(){var e=(0,h.m)().companyId,i=(0,f.I0)(),n=(0,u.eC)().showNotification,t=(0,u.iR)(),s=t.visible,a=t.showVisible,l=t.loading,c=t.toggleLoading,r=t.closePopup,d=(0,u.iR)(),o=d.visible,m=d.showVisible,p=d.closePopup;return{deleteLoading:l,handleCampaignDelete:function(t){c(),i((0,j.Bi)({entity:"campaigns",name:"AllCampaigns",method:"delete",url:"/".concat(e,"/campaigns/").concat(t.id,"/"),deleteData:!0,id:t.id,cb:{success:function(){n({message:"Successfully deleted",variant:"success"})},error:function(e){n({message:"Something went wrong",variant:"error"})},finally:function(){c(),r()}},params:{},primaryKey:"id",values:{}}))},showDeleteVisible:a,closeDeletePopup:r,deleteVisible:s,editVisible:o,showEditVisible:m,closeEditPopup:p}}(),P=D.deleteLoading,E=D.handleCampaignDelete,V=D.showDeleteVisible,Y=D.closeDeletePopup,A=D.deleteVisible,N=D.editVisible,B=D.showEditVisible,U=D.closeEditPopup,M=(0,m.Z)(w,500),H=(0,t.Z)(M,1)[0];return(0,s.useEffect)((function(){return function(){return b()}}),[]),(0,g.jsx)("div",{children:i?(0,g.jsx)(a.Z.All,{entity:"campaigns",name:"AllCampaigns",url:"/".concat(i,"/campaigns/"),params:{limit:10,extra:{search:H},page:v},children:function(e){var i=e.items,t=e.isFetched,s=e.meta,a=i;return(0,g.jsxs)("div",{children:[(0,g.jsxs)(l.xJ,{classes:{root:"relative "},children:[(0,g.jsxs)(c.k6,{"aria-label":"simple table",classes:{root:"table-fixed dark-mode-styled-table"},children:[(0,g.jsx)(l.ss,{children:(0,g.jsxs)(c.AF,{children:[(0,g.jsx)(c.EU,{style:{width:"20%"},children:"Campaign"}),(0,g.jsx)(c.EU,{style:{width:"20%"},children:"Created Date"}),(0,g.jsx)(c.EU,{style:{width:"17%"},children:"Author"}),(0,g.jsx)(c.EU,{style:{width:"10%"},children:"Business"}),(0,g.jsx)(c.EU,{style:{width:"22%"},children:"Client Groups"}),(0,g.jsx)(c.EU,{style:{width:"11%"},children:"Actions"})]})}),(0,g.jsx)(l.RM,{children:a.map((function(e){var i=e.id,t=e.name,s=e.categories,a=e.created_date,l=e.created_by,d=e.total_companies;return(0,g.jsxs)(c.AF,{children:[(0,g.jsx)(c.Yk,{children:(0,g.jsx)(r.rU,{to:"".concat(_.path,"/view/").concat(e.id),children:(0,g.jsx)("span",{className:"text-primary transition hover:text-primary-dark",children:t})})}),(0,g.jsx)(c.Yk,{children:o()(a).format("MMMM D YYYY, h:mm a")}),(0,g.jsx)(c.Yk,{children:"".concat(l.first_name," ").concat(l.last_name)}),(0,g.jsx)(c.Yk,{children:d}),(0,g.jsx)(c.Yk,{children:(0,g.jsx)("div",{children:s.map((function(e){return(0,g.jsx)("span",{className:"mr-2",children:"".concat(e.name,",")},e.id)}))})}),(0,g.jsx)(c.Yk,{children:(0,g.jsxs)("div",{className:"flex items-center justify-end ",children:[(0,g.jsx)(c.cP.DeleteButton,{isDisabled:!n,clickHandler:function(){return V(e)}}),(0,g.jsx)(c.cP.ViewButton,{isDisabled:!n,clickHandler:function(){return C.push("".concat(_.path,"/view/").concat(e.id))}}),(0,g.jsx)(c.cP.EditButton,{isDisabled:!n,clickHandler:function(){return B(e)}})]})})]},i)}))})]}),!t&&(0,g.jsx)(c.aN,{tiled:!0,withOverlay:!0})]}),(0,g.jsx)(c.sm,{featureHandler:function(){return E(A)},isOpen:Boolean(A),toggleHandler:Y,title:"Are you sure to delete the campaign ".concat(null===A||void 0===A?void 0:A.name,"?"),hasLoader:!0,isLoading:P}),(0,g.jsx)(l.Cx,{handleModalOpen:U,open:Boolean(N),children:(0,g.jsx)(x.F,{onSuccess:U,entity:N})}),(0,g.jsx)("div",{className:"news__pagination my-4",children:i.length?(0,g.jsx)(l.tl,{count:null===s||void 0===s?void 0:s.last_page,page:v?+v:1,defaultPage:6,siblingCount:1,color:"primary",onChange:y}):null})]})}}):(0,g.jsx)("div",{className:"flex justify-center",children:(0,g.jsx)(c.aN,{})})})}}}]);