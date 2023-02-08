"use strict";(self.webpackChunknewfold_Onboarding=self.webpackChunknewfold_Onboarding||[]).push([[253],{1211:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(9307),r=n(6974),s=n(9818),l=n(9685),d=e=>{let{text:t,handleClick:n,disabled:r,className:s}=e;return(0,a.createElement)("button",{type:"button",className:`${s} nfd-card-button`,onClick:()=>{n()},disabled:r},t)},i=n(7533),o=n(2200),c=e=>{let{text:t,disabled:n}=e;const c=(0,r.s0)(),u=(0,r.TH)(),{nextStep:m,currentData:p}=(0,s.useSelect)((e=>({nextStep:e(l.h).getNextStep(),currentData:e(l.h).getCurrentOnboardingData()})),[u.path]),g=null===m||!1===m;return(0,a.createElement)(d,{className:"nfd-nav-card-button",text:t,handleClick:()=>g?async function(){p&&(p.isComplete=(new Date).getTime(),(0,i.kB)(p));const e="ecommerce"===window.nfdOnboarding.currentFlow?o.Nj:o.hF;window.location.replace(e)}():c(m.path),disabled:n})}},9519:function(e,t,n){var a=n(9307);n(9196),t.Z=e=>{let{heading:t,subHeading:n,question:r}=e;return(0,a.createElement)("div",null,t&&(0,a.createElement)("h2",{className:"nfd-step-card-heading"},t),n&&(0,a.createElement)("h3",{className:r?"nfd-step-card-subheading-other":"nfd-step-card-subheading"},n),r&&(0,a.createElement)("h3",{className:"nfd-step-card-question"},r))}},5791:function(e,t,n){n.d(t,{Z:function(){return v}});var a=n(9307),r=n(4184),s=n.n(r),l=n(5158),d=n(6974),i=n(2200),o=n(6989),c=n.n(o),u=n(4704),m=e=>{let{className:t="nfd-onboarding-layout__base",children:n}=e;const r=(0,d.TH)(),o=document.querySelector(".nfd-onboard-content");return(0,a.useEffect)((()=>{null==o||o.focus({preventScroll:!0}),function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Showing new Onboarding Page";(0,l.speak)(t,"assertive")}(r,"Override"),new class{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.eventSlug=e,this.eventData=t}send(){c()({url:(0,u.F)("events"),method:"POST",data:{slug:this.eventSlug,data:this.eventData}}).catch((e=>{console.error(e)}))}}(`${i.Db}-pageview`,{stepID:r.pathname,previousStepID:window.nfdOnboarding.previousStepID}).send(),window.nfdOnboarding.previousStepID=r.pathname}),[r.pathname]),(0,a.createElement)("div",{className:s()("nfd-onboarding-layout",t)},n)},p=n(682);const g=e=>{let{children:t}=e;return(0,a.createElement)("section",{className:"is-contained"},t)};var v=e=>{let{className:t="",children:n,isBgPrimary:r=!1,isCentered:l=!1,isVerticallyCentered:d=!1,isContained:i=!1,isPadded:o=!1,isFadeIn:c=!0}=e;const u=i?g:a.Fragment;return(0,a.createElement)(p.Z,{type:c&&"fade-in",duration:"233ms",timingFunction:"ease-in-out"},(0,a.createElement)(m,{className:s()("nfd-onboarding-layout__common",t,{"is-bg-primary":r},{"is-centered":l},{"is-vertically-centered":d},{"is-padded":o})},(0,a.createElement)(u,null,n)))}},950:function(e,t,n){var a=n(9307),r=n(9685),s=n(9818),l=n(5736);t.Z=e=>{let{question:t=(0,l.__)("Need Help?","wp-module-onboarding"),urlLabel:n=(0,l.__)("Hire our Experts","wp-module-onboarding")}=e;const d=(0,s.select)(r.h).getHireExpertsUrl();return(0,a.createElement)("div",{className:"nfd-card-need-help-tag"},t,(0,a.createElement)("a",{href:d,target:"_blank"},n))}},349:function(e,t,n){var a=n(9307),r=(n(5736),n(4184)),s=n.n(r);t.Z=e=>{let{className:t="",children:n}=e;return(0,a.createElement)("div",{className:s()("nfd-onboarding-large-card",t)},n)}},2253:function(e,t,n){n.r(t);var a=n(9307),r=n(5736),s=n(5791),l=n(349),d=n(2200),i=n(9685),o=n(9818),c=n(9519),u=n(1211),m=n(950),p=n(6980),g=n(1392),v=n(682);t.default=()=>{var e,t,n,b,h,f,E;const{setDrawerActiveView:y,setSidebarActiveView:w,setIsDrawerSuppressed:N,setIsHeaderNavigationEnabled:C,setCurrentOnboardingData:S}=(0,o.useDispatch)(i.h);(0,a.useEffect)((()=>{w(d.Jq),N(!0),y(d.mz),C(!0)}),[]);const[_,D]=(0,a.useState)(-1),[k,O]=(0,a.useState)(""),{currentStep:I,currentData:x}=(0,o.useSelect)((e=>({currentStep:e(i.h).getCurrentStep(),currentData:e(i.h).getCurrentOnboardingData()})),[]),Z=null==x||null===(e=x.data)||void 0===e||null===(t=e.siteType)||void 0===t?void 0:t.secondary,H=p.bd,T=null===(n=H[0])||void 0===n?void 0:n.subCategories;return Z&&!k&&-1===T.indexOf(Z)&&"secondaryCategory"!==Z&&O(Z),(0,a.createElement)(s.Z,{isBgPrimary:!0,isCentered:!0},(0,a.createElement)(l.Z,null,(0,a.createElement)("div",{className:"nfd-card-heading center"},(0,a.createElement)(c.Z,{heading:(0,r.__)(null==I?void 0:I.heading,"wp-module-onboarding"),subHeading:(0,r.sprintf)((0,r.__)(p.$I,"wp-module-onboarding"),(0,g.I)("SITE")),question:(0,r.__)(null==I?void 0:I.subheading,"wp-module-onboarding")})),(0,a.createElement)(v.Z,{type:"fade-in-disabled",after:(null===(b=H[0])||void 0===b?void 0:b.subCategories)&&null!==Z},(0,a.createElement)("div",{className:"nfd-setup-secondary-categories"},(0,a.createElement)("div",{className:"nfd-card-category-wrapper"},(0,a.createElement)("div",{className:"category-scrolling-wrapper"},(0,a.createElement)("span",{className:"icon",style:{backgroundImage:H[0].icon}}),(0,a.createElement)("p",{className:"categName"}," ",H[0].name))),(0,a.createElement)("div",{className:"subCategoriesSection"},null===(h=H[0])||void 0===h||null===(f=h.subCategories)||void 0===f?void 0:f.map(((e,t)=>(0,a.createElement)("span",{key:e,onClick:e=>(e=>{var t;D(e),O("");const n=x;n.data.siteType.secondary=null===(t=H[0])||void 0===t?void 0:t.subCategories[e],S(n)})(t),className:(_===t||e===Z?"chosenSecondaryCategory ":"")+"nfd-card-category"},e))))),(0,a.createElement)("div",{className:"nfd-setup-primary-second"},(0,a.createElement)("div",{className:"nfd-setup-primary-second-top"},(0,a.createElement)("div",{className:"blackText"},(0,r.__)(p.jd,"wp-module-onboarding")),(0,a.createElement)("input",{type:"text",onChange:e=>(e=>{var t,n;D(-1),O(null==e||null===(t=e.target)||void 0===t?void 0:t.value);const a=x;a.data.siteType.secondary=null==e||null===(n=e.target)||void 0===n?void 0:n.value,S(a)})(e),className:"tellUsInput",placeholder:(0,r.sprintf)((0,r.__)(p.X6,"wp-module-onboarding"),(0,g.I)("site")),value:k})))),(0,a.createElement)(u.Z,{text:(0,r.__)(p.q5),disabled:null===(null===(E=H[0])||void 0===E?void 0:E.subCategories)}),(0,a.createElement)(m.Z,null)))}},6980:function(e){e.exports=JSON.parse('{"$I":"ABOUT YOUR %s","q5":"Continue Setup","X6":"Enter to search your %s type","jd":"or tell us here:","bd":[{"name":"Business","icon":"var(--business-icon)","iconWhite":"var(--business-white-icon)","subCategories":["Fashion, apparel and accessories","Health and beauty","Electronics and computers","Food and drink","CBD and other hemp-derived products","Jewelry","Pets","Motherhood & Baby","Furniture & Home Decoration","Education & Learning"]}]}')}}]);