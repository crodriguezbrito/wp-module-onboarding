"use strict";(globalThis.webpackChunknewfold_Onboarding=globalThis.webpackChunknewfold_Onboarding||[]).push([[662],{4401:(e,t,a)=>{a.d(t,{V:()=>i});var r=a(9196),o=a(5634),n=a(1526),s=a(950);const i=({title:e,subtitle:t,error:a})=>(0,r.createElement)(o.Z,{className:"step-error-state",isVerticallyCentered:!0},(0,r.createElement)(n.Z,{title:e,subtitle:t}),(0,r.createElement)("div",{className:"step-error-state__logo"}),(0,r.createElement)("h3",{className:"step-error-state__error"},a),(0,r.createElement)(s.Z,null))},1760:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(9196),o=a(3967),n=a.n(o);const s=({className:e="",size:t,colGap:a=0,children:o})=>(0,r.createElement)("div",{className:n()("nfd-onboarding-grid",e),style:{gridTemplateColumns:`repeat(${t}, 1fr)`,gridColumnGap:`${a}px`}},o)},9291:(e,t,a)=>{a.d(t,{L:()=>s,Y:()=>r.Z});var r=a(35),o=a(9196),n=a(682);const s=()=>(0,o.createElement)("div",{className:"image-upload-loader--loading-box"},(0,o.createElement)(n.Z,{type:"load",className:"image-upload-loader--loading-box__loader"}))},8707:(e,t,a)=>{a.d(t,{U:()=>g});var r=a(9196),o=a(9818),n=a(9307),s=a(4333),i=a(5736),l=a(9291),d=a(2503),c=a(7625),u=a(2200),m=a(4401);var h=a(1589);const g=({children:e,navigationStateCallback:t=!1,refresh:a=!0})=>{const g=(0,s.useViewportMatch)("medium"),{storedThemeStatus:p,brandName:w}=(0,o.useSelect)((e=>({storedThemeStatus:e(d.h).getThemeStatus(),brandName:e(d.h).getNewfoldBrandName()})),[]),b=(e=>({loader:{title:(0,i.sprintf)(/* translators: %s: Brand */ /* translators: %s: Brand */
(0,i.__)("Preparing your %s design studio","wp-module-onboarding"),e),subtitle:(0,i.__)("Hang tight while we show you some of the best WordPress has to offer!","wp-module-onboarding")},errorState:{title:(0,i.sprintf)(/* translators: %s: Brand */ /* translators: %s: Brand */
(0,i.__)("Preparing your %s design studio","wp-module-onboarding"),e),subtitle:(0,i.__)("Hang tight while we show you some of the best WordPress has to offer!","wp-module-onboarding"),error:(0,i.__)("Uh-oh, something went wrong. Please contact support.","wp-module-onboarding")}}))(w),{updateThemeStatus:_,setIsDrawerOpened:f,setIsDrawerSuppressed:v,setIsHeaderNavigationEnabled:E}=(0,o.useDispatch)(d.h),y=()=>{switch(p){case u.Rq:case u.GV:return(()=>{if("function"==typeof t)return t();g&&f(!0),v(!1),E(!0)})();default:f(!1),v(!0),E(!1)}};(0,n.useEffect)((()=>{y(),p===u.a0&&(async()=>{const e=await(async()=>{const e=await(0,c.YL)(u.DY);return e?.error?u.vv:e.body.status})();switch(e){case u.Zh:(async()=>{(await(0,c.sN)(u.DY)).error||!0!==a?S():window.location.reload()})();break;case u.GV:!0===a&&window.location.reload();break;default:_(e)}})()}),[p]);const S=async()=>{if(_(u.Zh),(await(0,c.N9)(u.DY,!0,!1)).error)return _(u.Rq);!0===a&&window.location.reload()};return(0,r.createElement)(n.Fragment,null,(()=>{switch(p){case u.vv:return(0,r.createElement)(h.Z,{showButton:!1,isModalOpen:!0,modalTitle:(0,i.__)("It looks like you may have an existing website","wp-module-onboarding"),modalText:(0,i.__)("Going through this setup will change your active theme, WordPress settings, add content – would you like to continue?","wp-module-onboarding"),modalOnClose:S,modalExitButtonText:(0,i.__)("Exit to WordPress","wp-module-onboarding")});case u.Rq:return(0,r.createElement)(m.V,{title:b.errorState.title,subtitle:b.errorState.subtitle,error:b.errorState.error});case u.GV:return e;default:return(0,r.createElement)(l.Y,{title:b.loader.title,subtitle:b.loader.subtitle})}})())}},2662:(e,t,a)=>{a.r(t),a.d(t,{default:()=>_});var r=a(9196),o=a(9250),n=a(9307),s=a(9818),i=a(6138),l=a(2503),d=a(5634),c=a(2200),u=a(1526),m=a(8707),h=a(6332),g=a(8297),p=a(5736);var w=a(6342),b=a(1760);const _=()=>{const e=(0,o.TH)(),[t,a]=(0,n.useState)(),[_,f]=(0,n.useState)([]),[v,E]=(0,n.useState)(0),{currentStep:y,currentData:S,themeStatus:N,themeVariations:k}=(0,s.useSelect)((t=>({currentStep:t(l.h).getStepFromPath(e.pathname),currentData:t(l.h).getCurrentOnboardingData(),themeStatus:t(l.h).getThemeStatus(),themeVariations:t(l.h).getStepPreviewData()})),[]),{setDrawerActiveView:P,setSidebarActiveView:T,setCurrentOnboardingData:D,updateThemeStatus:V}=(0,s.useDispatch)(l.h);(0,n.useEffect)((()=>{T(c.Jq),P(c.Yl)}),[]),(0,n.useEffect)((()=>{N===c.GV&&async function(){const e=await(0,i.C)(y?.data?.patternId);if(e?.error)return V(c.a0);a(function(e){const t=[];return e.forEach((e=>{t.push(e.content),_.push(e.slug)})),f(_),t}(e?.body)),""!==S?.data.sitePages.homepage?E(_?.indexOf(S?.data.sitePages.homepage)):(S.data.sitePages={...S.data.sitePages,homepage:_[0]},D(S))}()}),[N]);const Z={heading:(0,p.__)("There’s no place like a great home page","wp-module-onboarding"),subheading:(0,p.__)("Pick a starter layout you can refine and remix with your content","wp-module-onboarding")};return(0,r.createElement)(m.U,null,(0,r.createElement)(h.V3,null,(0,r.createElement)(d.Z,null,(0,r.createElement)("div",{className:"homepage_preview"},(0,r.createElement)(u.Z,{title:Z.heading,subtitle:Z.subheading}),(0,r.createElement)("div",{className:"homepage_preview__list"},(0,r.createElement)(b.Z,{size:3,colGap:50},(0,r.createElement)(h.r9,{watch:t,count:k[y?.data?.patternId]?.previewCount,callback:function(){return t?.map(((e,t)=>e?(0,r.createElement)(h.H,{key:t,className:"homepage_preview__list__item",selected:t===v,blockGrammer:e,viewportWidth:1200,styling:"custom",overlay:!1,onClick:()=>function(e){E(e);const t=_[e];S.data.sitePages={...S.data.sitePages,homepage:t},D(S),(0,g.tH)(new g.Z_(w.El,t))}(t)}):null))},className:"homepage_preview__list__item",viewportWidth:1200})))))))}}}]);