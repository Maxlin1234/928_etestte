import{_ as p}from"./nuxt-link.0fe674ad.js";import{i as v,p as h,o as r,b as i,f as o,e as c,w as d,l as m}from"./entry.241c1a29.js";const _=""+globalThis.__publicAssetsURL("dark/assets/imgs/LOGO.png"),b=""+globalThis.__publicAssetsURL("dark/assets/imgs/LOGOwhite.png"),f={class:"container"},w={class:"logo icon-img-100",href:"#"},x={key:0,src:_,alt:"logo"},M={key:1,src:b,style:{width:"160px",height:"24px"},alt:"logo"},k={class:"navbar-nav"},y=o("a",{class:"nav-link dropdown-toggle","data-toggle":"dropdown",href:"#",role:"button","aria-haspopup":"true","aria-expanded":"false"},[o("a",{href:"/"},[o("span",{class:"rolling-text",style:{"font-size":"1.5em"}},"首頁")])],-1),L=[y],S={class:"nav-link dropdown-toggle","data-toggle":"dropdown",href:"#",role:"button","aria-haspopup":"true","aria-expanded":"false"},B=o("span",{class:"rolling-text",style:{"font-size":"1.5em"}},"關於我們",-1),C={class:"nav-link dropdown-toggle","data-toggle":"dropdown",href:"#",role:"button","aria-haspopup":"true","aria-expanded":"false"},$=o("span",{class:"rolling-text",style:{"font-size":"1.5em"}},"四大單元",-1),z={class:"nav-link dropdown-toggle","data-toggle":"dropdown",href:"#",role:"button","aria-haspopup":"true","aria-expanded":"false"},N=o("span",{class:"rolling-text",style:{"font-size":"1.5em"}},"節目場次",-1),O={__name:"Navbar",props:["lightMode","mainBg","subBg","noStatic","curve"],setup(e){function g(){const a=window.scrollY,n=document.querySelector(".navbar");a>300?n.classList.add("nav-scroll"):n.classList.remove("nav-scroll")}function t(a){a.currentTarget.querySelector(".dropdown-menu").classList.add("show")}function s(a){a.currentTarget.querySelector(".dropdown-menu").classList.remove("show")}function u(){document.querySelector(".navbar .navbar-collapse").classList.toggle("show")}return v(()=>{window.addEventListener("scroll",g)}),h(()=>{window.removeEventListener("scroll",g)}),(a,n)=>{const l=p;return r(),i("nav",{class:m(`navbar navbar-expand-lg ${e.curve?"nav-crev":""} ${e.noStatic?"":"static"} ${e.mainBg?"main-bg":""} ${e.subBg?"sub-bg":""}`)},[o("div",f,[o("a",w,[e.lightMode?(r(),i("img",x)):(r(),i("img",M))]),o("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[o("span",{class:"icon-bar"},[o("i",{class:"fas fa-bars",onClick:u})])]),o("div",{class:"collapse navbar-collapse justify-content-center",id:"navbarSupportedContent",onClick:u},[o("ul",k,[o("li",{class:"nav-item dropdown",onMousemove:t,onMouseleave:s},L,32),o("li",{class:"nav-item dropdown",onMousemove:t,onMouseleave:s},[o("a",S,[c(l,{class:"nav-item",to:`/${e.lightMode?"light":"dark"}/page-about`},{default:d(()=>[B]),_:1},8,["to"])])],32),o("li",{class:"nav-item dropdown",onMousemove:t,onMouseleave:s},[o("a",C,[c(l,{class:"nav-item",to:`/${e.lightMode?"light":"dark"}/sessions`},{default:d(()=>[$]),_:1},8,["to"])])],32),o("li",{class:"nav-item dropdown",onMousemove:t,onMouseleave:s},[o("a",z,[c(l,{class:"nav-item",to:`/${e.lightMode?"light":"dark"}/schedule`},{default:d(()=>[N]),_:1},8,["to"])])],32)])])])],2)}}};export{O as _};
