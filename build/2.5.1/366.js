"use strict";(self.webpackChunknewfold_Onboarding=self.webpackChunknewfold_Onboarding||[]).push([[366],{9964:(e,t,a)=>{a.d(t,{A:()=>r});var s=a(1609),i=a(6942),n=a.n(i);const r=({className:e="",size:t,colGap:a=0,children:i})=>(0,s.createElement)("div",{className:n()("nfd-onboarding-grid",e),style:{gridTemplateColumns:`repeat(${t}, 1fr)`,gridColumnGap:`${a}px`}},i)},5366:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var s=a(1609),i=a(7143),n=a(8468),r=a(148),l=a(7675),c=a(3988),o=a(4639),d=a(8520),u=a(8969),g=a(1032),m=a(7044),h=a(8616),p=a(7723);var b=a(9964);const f=()=>{const e=(0,r.zy)(),[t,a]=(0,n.useState)(),[f,v]=(0,n.useState)([]),{currentStep:_,currentData:w,themeStatus:y,themeVariations:E}=(0,i.useSelect)((t=>({currentStep:t(l.M).getStepFromPath(e.pathname),currentData:t(l.M).getCurrentOnboardingData(),themeStatus:t(l.M).getThemeStatus(),themeVariations:t(l.M).getStepPreviewData()})),[]),{setDrawerActiveView:S,setSidebarActiveView:k,updateThemeStatus:C,setCurrentOnboardingData:A}=(0,i.useDispatch)(l.M);(0,n.useEffect)((()=>{k(u.Qe),S(u.VG)}),[]);const D=(e,t=!1)=>{v(e),w.data.sitePages.other=0!==e.length&&((e,t)=>!1!==t?t?.reduce(((t,a)=>e.includes(a.slug)?t.concat({slug:a.slug,title:a.title,key:void 0!==a.key?a.key:a.title}):t),[]):void 0)(e,t),A(w)},P=(e,a)=>{!0!==e||f.includes(a)?!1===e&&D(f.filter((e=>e!==a)),t):D(f.concat(a),t)};(0,n.useEffect)((()=>{y===u.Er&&(async()=>{const e=await(0,d.O)(_?.data?.patternId);if(e?.error)return C(u.So);if(e?.body){if(w.data.sitePages?.other)if(!1===w.data.sitePages.other)v([]);else if(0!==w.data.sitePages.other.length)v(w.data.sitePages.other.map((e=>e.slug)));else{const t=e.body.reduce(((e,t)=>t?.selected?e.concat(t.slug):e),[]);D(t,e.body)}a(e.body)}})()}),[y]);const N={heading:(0,p.__)("You have ideas, we have page templates","wp-module-onboarding"),subheading:(0,p.__)("Begin closer to the finish line than a blank canvas.","wp-module-onboarding")};return(0,s.createElement)(g.UX,null,(0,s.createElement)(m.Th,null,(0,s.createElement)(c.A,null,(0,s.createElement)("div",{className:"site-pages"},(0,s.createElement)(o.A,{title:N.heading,subtitle:N.subheading}),(0,s.createElement)("div",{className:"site-pages__list"},(0,s.createElement)(b.A,{size:2},(0,s.createElement)(h.A,{className:"site-pages__list__item",count:E[_?.data?.patternId]?.previewCount,watch:t,isWithCard:!0,callback:()=>f&&t?.map(((e,t)=>(0,s.createElement)(m.z_,{key:t,className:"site-pages__list__item",blockGrammer:e.content,viewportWidth:1200,styling:"custom",overlay:!0,title:e?.title,slug:e.slug,selected:f.includes(e.slug),onClick:P,description:e?.description}))),viewportWidth:1200})))))))}}}]);