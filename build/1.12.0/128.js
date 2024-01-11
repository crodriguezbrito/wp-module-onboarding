"use strict";(globalThis.webpackChunknewfold_Onboarding=globalThis.webpackChunknewfold_Onboarding||[]).push([[128],{4401:(e,t,r)=>{r.d(t,{V:()=>l});var a=r(9196),o=r(5634),s=r(1526),n=r(950);const l=({title:e,subtitle:t,error:r})=>(0,a.createElement)(o.Z,{className:"step-error-state",isVerticallyCentered:!0},(0,a.createElement)(s.Z,{title:e,subtitle:t}),(0,a.createElement)("div",{className:"step-error-state__logo"}),(0,a.createElement)("h3",{className:"step-error-state__error"},r),(0,a.createElement)(n.Z,null))},9291:(e,t,r)=>{r.d(t,{L:()=>n,Y:()=>a.Z});var a=r(35),o=r(9196),s=r(682);const n=()=>(0,o.createElement)("div",{className:"image-upload-loader--loading-box"},(0,o.createElement)(s.Z,{type:"load",className:"image-upload-loader--loading-box__loader"}))},8707:(e,t,r)=>{r.d(t,{U:()=>w});var a=r(9196),o=r(9818),s=r(9307),n=r(4333),l=r(5736),i=r(9291),d=r(2503),u=r(7625),c=r(2200),m=r(4401);var h=r(1589);const w=({children:e,navigationStateCallback:t=!1,refresh:r=!0})=>{const w=(0,n.useViewportMatch)("medium"),{storedThemeStatus:_,brandName:b}=(0,o.useSelect)((e=>({storedThemeStatus:e(d.h).getThemeStatus(),brandName:e(d.h).getNewfoldBrandName()})),[]),p=(e=>({loader:{title:(0,l.sprintf)(/* translators: %s: Brand */ /* translators: %s: Brand */
(0,l.__)("Preparing your %s design studio","wp-module-onboarding"),e),subtitle:(0,l.__)("Hang tight while we show you some of the best WordPress has to offer!","wp-module-onboarding")},errorState:{title:(0,l.sprintf)(/* translators: %s: Brand */ /* translators: %s: Brand */
(0,l.__)("Preparing your %s design studio","wp-module-onboarding"),e),subtitle:(0,l.__)("Hang tight while we show you some of the best WordPress has to offer!","wp-module-onboarding"),error:(0,l.__)("Uh-oh, something went wrong. Please contact support.","wp-module-onboarding")}}))(b),{updateThemeStatus:g,setIsDrawerOpened:v,setIsDrawerSuppressed:E,setIsHeaderNavigationEnabled:f}=(0,o.useDispatch)(d.h),y=()=>{switch(_){case c.Rq:case c.GV:return(()=>{if("function"==typeof t)return t();w&&v(!0),E(!1),f(!0)})();default:v(!1),E(!0),f(!1)}};(0,s.useEffect)((()=>{y(),_===c.a0&&(async()=>{const e=await(async()=>{const e=await(0,u.YL)(c.DY);return e?.error?c.vv:e.body.status})();switch(e){case c.Zh:(async()=>{(await(0,u.sN)(c.DY)).error||!0!==r?N():window.location.reload()})();break;case c.GV:!0===r&&window.location.reload();break;default:g(e)}})()}),[_]);const N=async()=>{if(g(c.Zh),(await(0,u.N9)(c.DY,!0,!1)).error)return g(c.Rq);!0===r&&window.location.reload()};return(0,a.createElement)(s.Fragment,null,(()=>{switch(_){case c.vv:return(0,a.createElement)(h.Z,{showButton:!1,isModalOpen:!0,modalTitle:(0,l.__)("It looks like you may have an existing website","wp-module-onboarding"),modalText:(0,l.__)("Going through this setup will change your active theme, WordPress settings, add content – would you like to continue?","wp-module-onboarding"),modalOnClose:N,modalExitButtonText:(0,l.__)("Exit to WordPress","wp-module-onboarding")});case c.Rq:return(0,a.createElement)(m.V,{title:p.errorState.title,subtitle:p.errorState.subtitle,error:p.errorState.error});case c.GV:return e;default:return(0,a.createElement)(i.Y,{title:p.loader.title,subtitle:p.loader.subtitle})}})())}},128:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c});var a=r(9196),o=r(9818),s=r(9307),n=r(5634),l=r(8707),i=r(6332),d=r(2200),u=r(2503);const c=()=>{const{headerMenu:e}=(0,o.useSelect)((e=>({headerMenu:e(u.h).getHeaderMenuData()})),[]),[t,r]=(0,s.useState)(),{setDrawerActiveView:c,setSidebarActiveView:m}=(0,o.useDispatch)(u.h);return(0,s.useLayoutEffect)((()=>{r(e)}),[e]),(0,s.useEffect)((()=>{m(d.Jq),c(d.qO)}),[]),(0,a.createElement)(l.U,null,(0,a.createElement)(i.V3,null,(0,a.createElement)(n.Z,{className:"theme-header-menu-preview"},(0,a.createElement)("div",{className:"theme-header-menu-preview__title-bar"},(0,a.createElement)("div",{className:"theme-header-menu-preview__title-bar__browser"},(0,a.createElement)("span",{className:"theme-header-menu-preview__title-bar__browser__dot"}),(0,a.createElement)("span",{className:"theme-header-menu-preview__title-bar__browser__dot"}),(0,a.createElement)("span",{className:"theme-header-menu-preview__title-bar__browser__dot"}))),!t&&(0,a.createElement)(i.i5,{styling:"large",viewportWidth:1300}),t&&(0,a.createElement)(i.i5,{blockGrammer:t,styling:"large",viewportWidth:1300}))))}}}]);