"use strict";(globalThis.webpackChunknewfold_Onboarding=globalThis.webpackChunknewfold_Onboarding||[]).push([[187],{4316:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(9307);const r=e=>{let{title:t,subtitle:n,children:r}=e;return(0,a.createElement)("div",{className:"nfd-main-heading"},(0,a.createElement)("h2",{className:"nfd-main-heading__title"},t),n&&(0,a.createElement)("h3",{className:"nfd-main-heading__subtitle"},n),r)}},5791:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(9307),r=n(4184),s=n.n(r),i=n(5158),l=n(6974),d=n(2200),c=n(6989),o=n.n(c),u=n(4704);const m=e=>{let{className:t="nfd-onboarding-layout__base",children:n}=e;const r=(0,l.TH)(),c=document.querySelector(".nfd-onboard-content");return(0,a.useEffect)((()=>{null==c||c.focus({preventScroll:!0}),function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Showing new Onboarding Page";(0,i.speak)(t,"assertive")}(r,"Override"),new class{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.eventSlug=e,this.eventData=t}send(){o()({url:(0,u.F)("events"),method:"POST",data:{slug:this.eventSlug,data:this.eventData}}).catch((e=>{console.error(e)}))}}(`${d.Db}-pageview`,{stepID:r.pathname,previousStepID:window.nfdOnboarding.previousStepID}).send(),window.nfdOnboarding.previousStepID=r.pathname}),[r.pathname]),(0,a.createElement)("div",{className:s()("nfd-onboarding-layout",t)},n)};var h=n(682);const g=e=>{let{children:t}=e;return(0,a.createElement)("section",{className:"is-contained"},t)},p=e=>{let{className:t="",children:n,isBgPrimary:r=!1,isCentered:i=!1,isVerticallyCentered:l=!1,isContained:d=!1,isPadded:c=!1,isFadeIn:o=!0}=e;const u=d?g:a.Fragment;return(0,a.createElement)(h.Z,{type:o&&"fade-in",duration:"233ms",timingFunction:"ease-in-out"},(0,a.createElement)(m,{className:s()("nfd-onboarding-layout__common",t,{"is-bg-primary":r},{"is-centered":i},{"is-vertically-centered":l},{"is-padded":c})},(0,a.createElement)(u,null,n)))}},7187:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var a=n(9307),r=n(9818),s=n(5791),i=n(4316),l=n(2200),d=n(4106),c=n(4333);const o=()=>{const e=(0,c.useViewportMatch)("medium"),{setIsDrawerOpened:t,setDrawerActiveView:n,setSidebarActiveView:o,setIsDrawerSuppressed:u}=(0,r.useDispatch)(d.h);return(0,a.useEffect)((()=>{e&&t(!0),o(l.Jq),u(!1),n(l.BP)}),[]),(0,a.createElement)(s.Z,{isVerticallyCentered:!0},(0,a.createElement)(i.Z,{title:"Error 404",subtitle:"Please Check Again!"}))}}}]);