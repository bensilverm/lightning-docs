"use strict";(self.webpackChunklightning_docs=self.webpackChunklightning_docs||[]).push([[639],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2896:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={},i="State Creation",s={unversionedId:"Components/CompStates/StateCreation",id:"Components/CompStates/StateCreation",title:"State Creation",description:"You define component states by populating the _state definition with states, which are class objects.",source:"@site/docs/Components/CompStates/StateCreation.md",sourceDirName:"Components/CompStates",slug:"/Components/CompStates/StateCreation",permalink:"/lightning-docs/docs/Components/CompStates/StateCreation",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Components/CompStates/StateCreation.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Change Events",permalink:"/lightning-docs/docs/Components/CompStates/StateChEvents"},next:{title:"State Switching",permalink:"/lightning-docs/docs/Components/CompStates/SwitchingStates"}},c={},p=[],l={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"state-creation"},"State Creation"),(0,o.kt)("p",null,"You define component states by populating the ",(0,o.kt)("inlineCode",{parentName:"p"},"_state")," definition with ",(0,o.kt)("em",{parentName:"p"},"states"),", which are class objects."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"static _states() {\n    return [\n        class MyFirstState extends this {\n                              \n        }\n    ]\n}\n")),(0,o.kt)("p",null,"States can overwrite the default component behavior, as shown in the following example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"_handleEnter(){\n    // I am triggered when you press Enter\n}\n\nstatic _states() {\n    return [\n        class MyFirstState extends this {\n            _handleEnter() {\n                // Overwrites root function when we are on this state\n            }\n        }\n    ]\n}\n")))}m.isMDXComponent=!0}}]);