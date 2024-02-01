"use strict";(globalThis.webpackChunknewfold_Onboarding=globalThis.webpackChunknewfold_Onboarding||[]).push([[507],{9978:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(9196),s=n(3967),i=n.n(s),l=n(9250),o=n(9818),r=n(5609),c=n(1984),d=n(5024),m=n(4403);const u=({text:e,className:t,callback:n=null,disabled:s=!1,showChevronRight:u=!0})=>{const g=(0,l.s0)(),{nextStep:p}=(0,o.useSelect)((e=>({nextStep:e(m.h).getNextStep()})));return(0,a.createElement)(r.Button,{className:i()("nfd-onboarding-button--site-gen-next",{"nfd-onboarding-button--site-gen-next--disabled":s},t),onClick:()=>{s||(n&&"function"==typeof n&&n(),p&&g(p.path))}},(0,a.createElement)("p",{className:"nfd-onboarding-button--site-gen-next--text"},e),u&&(0,a.createElement)(c.Z,{className:"nfd-onboarding-button--site-gen-next--icon",icon:d.Z}))}},3467:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(9196),s=n(9307),i=n(3926);const l=(0,s.memo)((({title:e})=>(0,a.createElement)("div",{className:"ai-heading"},(0,a.createElement)(i.Z,{height:"40px"}),(0,a.createElement)("div",{className:"ai-heading--title"},e))))},3926:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(9196),s=n(9307);const i=({height:e="80px"})=>{const t={"--wnd-ai-logo-size":e,height:`var(--wnd-ai-logo-size, ${e})`};return(0,s.useEffect)((()=>{document.querySelectorAll("[data-wnd-ai-logo]").forEach((function(e){let t=!1,n=null;const a=()=>{t?document.body.classList.add("wnd-ai-logo-keydown"):document.body.classList.remove("wnd-ai-logo-keydown"),n=null};e.addEventListener("keydown",(function(){t||(t=!0,n||(n=window.requestAnimationFrame(a)))})),e.addEventListener("keyup",(function(){t=!1,n||(n=window.requestAnimationFrame(a))}))}))}),[]),(0,a.createElement)("span",{className:"wnd-ai-logo",style:t},(0,a.createElement)("span",{className:"wnd-ai-logo__circle wnd-ai-logo__circle--bg"}),(0,a.createElement)("span",{className:"wnd-ai-logo__circle wnd-ai-logo__circle--1"}),(0,a.createElement)("span",{className:"wnd-ai-logo__circle wnd-ai-logo__circle--2"}),(0,a.createElement)("span",{className:"wnd-ai-logo__circle wnd-ai-logo__circle--3"}),(0,a.createElement)("span",{className:"wnd-ai-logo__circle wnd-ai-logo__circle--4"}),(0,a.createElement)("span",{className:"wnd-ai-logo__circle wnd-ai-logo__circle--5"}),(0,a.createElement)("span",{className:"wnd-ai-logo__circle wnd-ai-logo__circle--6"}),(0,a.createElement)("span",{className:"wnd-ai-logo__spinner"}))}},7507:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var a=n(9196),s=n(4333),i=n(9818),l=n(9307),o=n(5736);var r=n(682),c=n(2200),d=n(4403),m=n(3467),u=n(5634),g=n(3967),p=n.n(g);const h=(0,l.memo)((({hint:e,height:t,children:n,placeholder:s,customerInput:i,setIsValidInput:r,setCustomerInput:c,customChildren:d=!1})=>{const m=(0,l.useRef)(null),[u,g]=(0,l.useState)(0),[h,_]=(0,l.useState)("nfd-sg-input-box__field");(0,l.useEffect)((()=>{m.current.style.height=t;const e=m.current.scrollHeight;m.current.style.height=e+"px";const n=w(i?.trim());g(n),r(n>=2)}),[i]);const w=e=>{const t=e?.length;let n=0;return t>200?n=3:t>150?n=2:t>100&&(n=1),n},b=e=>{if(e<=u)return"nfd-sg-input-box__info-icon--selected"};return(0,a.createElement)("div",{className:"nfd-sg-input"},(0,a.createElement)("label",{htmlFor:h},(0,a.createElement)("div",{className:"nfd-sg-input-box"},(0,a.createElement)("textarea",{"data-wnd-ai-logo":!0,type:"text",className:h,ref:m,style:{height:"47px"},placeholder:s,value:i,onChange:e=>(e=>{e.preventDefault(),c(e.target.value),_("nfd-sg-input-box__field")})(e)})),(0,a.createElement)("div",{className:"nfd-sg-input-box_bottom"},i?(0,a.createElement)("div",{className:"nfd-sg-input-box__info"},(0,a.createElement)("div",{className:"nfd-sg-input-box__info-text"},(0,o.__)("Detail","wp-module-onboarding")),(()=>{const e=[];for(let t=1;t<=3;t++)e.push((0,a.createElement)("div",{className:p()("nfd-sg-input-box__info-icon",b(t))}));return e})()):(0,a.createElement)("p",{className:"nfd-sg-input-box__hint"},e),d&&n)))}));var _=n(9978);const w=()=>{const e={heading:(0,o.__)("Tell me some details about the site you want created?","wp-module-onboarding"),inputPlaceholder:(0,o.__)("I want a site for my company that sells…","wp-module-onboarding"),inputHint:(0,o.__)("The more detail the better","wp-module-onboarding"),buttonText:(0,o.__)("Next","wp-module-onboarding"),walkThroughText:(0,o.__)("Not sure what to say? We can walk you through it.","wp-module-onboarding"),walkThroughlink:(0,o.__)("click here","wp-module-onboarding")},t=(0,s.useViewportMatch)("small"),[n,g]=(0,l.useState)(),[p,w]=(0,l.useState)(!1),{currentData:b}=(0,i.useSelect)((e=>({currentData:e(d.h).getCurrentOnboardingData()}))),{setIsFooterNavAllowed:f,setIsHeaderEnabled:E,setSidebarActiveView:x,setHeaderActiveView:N,setDrawerActiveView:v,setHideFooterNav:y,setCurrentOnboardingData:k}=(0,i.useDispatch)(d.h);return(0,l.useEffect)((()=>{if(y(!1),E(!0),x(!1),N(c.G5),v(!1),""!==b.sitegen.siteDetails?.prompt)return w(!0),f(!0),g(b.sitegen.siteDetails.prompt);f(!1)}),[]),(0,l.useEffect)((()=>{void 0!==n&&""!==n&&n!==b.sitegen.siteDetails.prompt&&(b.sitegen.siteDetails.prompt=n?.trim(),b.sitegen.siteDetails.mode="simple",b.sitegen.skipCache=!0,b.sitegen.sitemapPagesGenerated=!1,k(b)),f(p)}),[n]),(0,a.createElement)(u.Z,{isCentered:!0},(0,a.createElement)(r.Z,{type:"fade-in"},(0,a.createElement)("div",{className:"nfd-sg-site-details"},(0,a.createElement)(m.Z,{title:e.heading}),(0,a.createElement)(h,{placeholder:e.inputPlaceholder,hint:e.inputHint,height:"40px",customerInput:n,setIsValidInput:w,setCustomerInput:g,customChildren:!0},t&&(0,a.createElement)("div",{className:"nfd-sg-site-details-endrow"},(0,a.createElement)(_.Z,{className:"nfd-sg-site-details--next-btn",text:e.buttonText,disabled:!p}))))))}}}]);