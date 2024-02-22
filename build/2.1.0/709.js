"use strict";(globalThis.webpackChunknewfold_Onboarding=globalThis.webpackChunknewfold_Onboarding||[]).push([[709],{2772:(e,t,n)=>{n.d(t,{A:()=>d});var a=n(1609),o=n(7723);var r=n(7143),i=n(148),s=n(8468),l=n(7675);const d=(0,s.memo)((({customNavPercentage:e,watcher:t=null})=>{let n=0;const d={title:(0,o.__)("Building Website","wp-module-onboarding"),status:[{title:(0,o.__)("Generating Website","wp-module-onboarding")},{title:(0,o.__)("Finding Font Pairings","wp-module-onboarding")},{title:(0,o.__)("Building Custom Color Palettes","wp-module-onboarding")},{title:(0,o.__)("Populating Images","wp-module-onboarding")},{title:(0,o.__)("Finalizing Previews","wp-module-onboarding")},{title:(0,o.__)("Packaging Website","wp-module-onboarding")}]},c=(0,i.Zp)(),[_,g]=(0,s.useState)(0),[u,m]=(0,s.useState)(d.status[n].title),{currentData:p,nextStep:b}=(0,r.useSelect)((e=>({currentData:e(l.M).getCurrentOnboardingData(),nextStep:e(l.M).getNextStep()})));return(0,s.useEffect)((()=>{const e=setInterval((()=>{n+=1,n===d.status.length&&(n=0),m(d.status[n].title)}),3e3);return()=>{clearInterval(e)}}),[]),(0,s.useEffect)((()=>{g(p?.sitegen?.siteGenMetaStatus?.currentStatus/p?.sitegen?.siteGenMetaStatus?.totalCount*100)}),[p?.sitegen?.siteGenMetaStatus?.currentStatus]),(0,s.useEffect)((()=>{if(_===e&&b){if(null!==t&&!1===t)return;c(b.path)}}),[_,t]),(0,a.createElement)("div",{className:"nfd-sg-loader"},(0,a.createElement)("div",{className:"nfd-sg-loader__title"},d.title),(0,a.createElement)("div",{className:"nfd-sg-loader__progress"},(0,a.createElement)("div",{className:"nfd-sg-loader__progress_bars"},(0,a.createElement)("div",{className:"nfd-sg-loader__progress_bars_bg"}),(0,a.createElement)("div",{className:"nfd-sg-loader__progress_bars_bar",style:{width:`${_}%`}}))),(0,a.createElement)("div",{className:"nfd-sg-loader__status"},`${u}...`))}))},7673:(e,t,n)=>{n.d(t,{A:()=>r});var a=n(1609),o=n(8468);const r=({height:e="80px"})=>{const t={"--wnd-ai-logo-size":e,height:`var(--wnd-ai-logo-size, ${e})`};return(0,o.useEffect)((()=>{document.querySelectorAll("[data-wnd-ai-logo]").forEach((function(e){let t=!1,n=null;const a=()=>{t?document.body.classList.add("wnd-ai-logo-keydown"):document.body.classList.remove("wnd-ai-logo-keydown"),n=null};e.addEventListener("keydown",(function(){t||(t=!0,n||(n=window.requestAnimationFrame(a)))})),e.addEventListener("keyup",(function(){t=!1,n||(n=window.requestAnimationFrame(a))}))}))}),[]),(0,a.createElement)("span",{className:"wnd-ai-logo",style:t},(0,a.createElement)("span",{className:"wnd-ai-logo__circle wnd-ai-logo__circle--bg"}),(0,a.createElement)("span",{className:"wnd-ai-logo__circle wnd-ai-logo__circle--1"}),(0,a.createElement)("span",{className:"wnd-ai-logo__circle wnd-ai-logo__circle--2"}),(0,a.createElement)("span",{className:"wnd-ai-logo__circle wnd-ai-logo__circle--3"}),(0,a.createElement)("span",{className:"wnd-ai-logo__circle wnd-ai-logo__circle--4"}),(0,a.createElement)("span",{className:"wnd-ai-logo__circle wnd-ai-logo__circle--5"}),(0,a.createElement)("span",{className:"wnd-ai-logo__circle wnd-ai-logo__circle--6"}),(0,a.createElement)("span",{className:"wnd-ai-logo__spinner"}))}},8844:(e,t,n)=>{n.d(t,{A:()=>f});var a=n(1609),o=n(8468),r=n(9491),i=n(7143),s=n(7723);var l=n(6427),d=n(7675),c=n(3988),_=n(7673),g=n(8744),u=n(2940),m=n(9861),p=n(148),b=n(8969);const w=()=>{const e=(0,p.Zp)(),{setIsHeaderEnabled:t,setSidebarActiveView:n,setHeaderActiveView:w,setDrawerActiveView:f,setHideFooterNav:E,setIsHeaderNavigationEnabled:h,updateAllSteps:v,updateTopSteps:N,updateRoutes:S,updateDesignRoutes:y,updateInitialize:x,setCurrentOnboardingData:k,updateSiteGenErrorStatus:A}=(0,i.useDispatch)(d.M);(0,o.useEffect)((()=>{E(!0),t(!0),n(!1),w(b.Ix),h(!0),f(!1)}));const{brandConfig:C,currentData:D}=(0,i.useSelect)((e=>({brandConfig:e(d.M).getNewfoldBrandConfig(),currentData:e(d.M).getCurrentOnboardingData()}))),I=(0,r.useViewportMatch)("small"),F={heading:(0,s.__)("Sorry, we're having trouble communicating with our AI service.","wp-module-onboarding"),subHeading:(0,s.__)("Do you keep getting this error?","wp-module-onboarding"),message:(0,s.__)("If you continue to get this error, you may either continue creating your site without using our AI assistant, or you can ","wp-module-onboarding"),buttonText:(0,s.__)("Try again","wp-module-onboarding"),buttonSkip:(0,s.__)("Continue without AI","wp-module-onboarding"),buttonExit:(0,s.__)("exit to WordPress","wp-module-onboarding")},M=window.nfdOnboarding?.oldFlow?window.nfdOnboarding.oldFlow:g.rA,O=()=>{A(!1)};return(0,a.createElement)(c.A,{className:"nfd-onboarding-step--site-gen__error"},(0,a.createElement)("div",{className:"nfd-onboarding-step--site-gen__error__container"},(0,a.createElement)("div",{className:"nfd-onboarding-step--site-gen__error__container__orb"},(0,a.createElement)(_.A,{height:"100px"})),(0,a.createElement)("div",{className:"nfd-onboarding-step--site-gen__error__container__heading"},(0,a.createElement)("p",{className:"nfd-onboarding-step--site-gen__error__container__heading__text"},F.heading)),(0,a.createElement)("div",{className:"nfd-onboarding-step--site-gen__error__container__sub-heading"},(0,a.createElement)("p",{className:"nfd-onboarding-step--site-gen__error__container__sub-heading__text"},F.subHeading),(0,a.createElement)("p",{className:"nfd-onboarding-step--site-gen__error__container__sub-heading__message"},F.message,(0,a.createElement)("a",{className:"nfd-onboarding-step--site-gen__error__container__sub-heading__exit",href:b.R0},F.buttonExit))),(0,a.createElement)("div",{className:"nfd-onboarding-step--site-gen__error__container__buttons"},(0,a.createElement)(l.Button,{className:"nfd-onboarding-step--site-gen__error__container__buttons__skip",onClick:()=>{(t=>{if(!(0,u.nC)(C,t))return!1;const n=window.nfdOnboarding.currentFlow,a=(0,m.Sg)(t)();v(a.steps),N(a?.topSteps),S(a.routes),y(a?.designRoutes),g.d0!==n&&(window.nfdOnboarding.oldFlow=n),window.nfdOnboarding.currentFlow=t,D.activeFlow=t,k(D),g.d0!==t&&x(!0),e(a.steps[1].path)})(M)}},F.buttonSkip),I?(0,a.createElement)(l.Button,{className:"nfd-onboarding-step--site-gen__error__container__buttons__retry",onClick:()=>{O()}},(0,a.createElement)("p",{className:"nfd-onboarding-button--site-gen-next--text"},F.buttonText)):(0,a.createElement)(l.Fill,{name:`${b.Sr}/${b.gb}`},(0,a.createElement)(l.Button,{className:"nfd-onboarding-step--site-gen__error__container__buttons__retry",onClick:()=>{O()}},(0,a.createElement)("p",{className:"nfd-onboarding-button--site-gen-next--text"},F.buttonText))))))},f=({children:e})=>{const{siteGenErrorStatus:t}=(0,i.useSelect)((e=>({siteGenErrorStatus:e(d.M).getSiteGenErrorStatus()})));return(0,a.createElement)(o.Fragment,null,t?(0,a.createElement)(w,null):e)}},8709:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var a=n(1609),o=n(7143),r=n(8468),i=n(7723);var s=n(8969),l=n(7675),d=n(3988),c=n(6942),_=n.n(c),g=n(7677),u=n(6655);const m=(0,r.memo)((({idx:e,title:t,desc:n,isSelected:o,callback:r})=>(0,a.createElement)("div",{key:e,role:"button",tabIndex:0,className:"nfd__option_heading_subheading",onClick:()=>{r&&"function"==typeof r&&r(e+1)},onKeyDown:()=>{r&&"function"==typeof r&&r(e+1)}},(0,a.createElement)("div",{className:_()("nfd__option_heading_subheading__wrapper",o&&"nfd__option_heading_subheading__wrapper--selected")},(0,a.createElement)("div",{className:"nfd__option_heading_subheading__left"},(0,a.createElement)("div",{className:"nfd__option_heading_subheading__left_top"},t),(0,a.createElement)("div",{className:"nfd__option_heading_subheading__left_bottom"},n)),(0,a.createElement)(g.A,{className:"nfd__option_heading_subheading__right",icon:u.A}))))),p=(0,r.memo)((({title:e,options:t,selection:n,callback:o})=>(0,a.createElement)("div",{className:"nfd-sg-card"},(0,a.createElement)("div",{className:"nfd-sg-card__title"},e),(0,a.createElement)("div",{className:"nfd-sg-card__data"},t.map(((e,t)=>(0,a.createElement)(m,{key:t,idx:t,title:e.title,desc:e.desc,isSelected:e.key===n,callback:o})))))));var b=n(2772),w=n(8844);const f=()=>{const e={heading:(0,i.__)("How familiar are you with using WordPress?","wp-module-onboarding"),options:[{key:1,title:(0,i.__)("Beginner","wp-module-onboarding"),desc:(0,i.__)("First time building a website using WordPress","wp-module-onboarding")},{key:2,title:(0,i.__)("Intermediate","wp-module-onboarding"),desc:(0,i.__)("I’ve built a few sites for myself or others","wp-module-onboarding")},{key:3,title:(0,i.__)("Expert","wp-module-onboarding"),desc:(0,i.__)("I do this frequently","wp-module-onboarding")}]},[t,n]=(0,r.useState)(0),{currentData:c}=(0,o.useSelect)((e=>({currentData:e(l.M).getCurrentOnboardingData()}))),{setIsHeaderEnabled:_,setSidebarActiveView:g,setHeaderActiveView:u,setDrawerActiveView:m,setHideFooterNav:f,setCurrentOnboardingData:E,setIsHeaderNavigationEnabled:h}=(0,o.useDispatch)(l.M);return(0,r.useEffect)((()=>{f(!0),_(!0),g(!1),h(!1),u(s.Ix),m(!1),c.sitegen.experience?.level&&n(c.sitegen.experience.level)})),(0,a.createElement)(w.A,null,(0,a.createElement)(d.A,{isCentered:!0},(0,a.createElement)("div",{className:"nfd-sg-experience-level"},(0,a.createElement)(b.A,{watcher:0!==t,customNavPercentage:50}),(0,a.createElement)(p,{title:e.heading,options:e.options,selection:t,callback:e=>{n(e),c.sitegen.experience.level=e,E(c)}}))))}}}]);