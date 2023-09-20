"use strict";(self.webpackChunklightning_docs=self.webpackChunklightning_docs||[]).push([[9465],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>g});var a=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),u=s(n),m=i,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(g,l(l({ref:e},c),{},{components:n})):a.createElement(g,l({ref:e},c))}));function g(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[u]="string"==typeof t?t:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2997:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const r={},l="Actions",o={unversionedId:"Animations/Actions",id:"Animations/Actions",title:"Actions",description:"The actions of an animation define what happens with the specified views and properties while the animation is executed.",source:"@site/docs/Animations/Actions.md",sourceDirName:"Animations",slug:"/Animations/Actions",permalink:"/lightning-docs/docs/Animations/Actions",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Animations/Actions.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Action Value",permalink:"/lightning-docs/docs/Animations/ActionValue"},next:{title:"Attributes",permalink:"/lightning-docs/docs/Animations/Attributes"}},p={},s=[{value:"Attributes",id:"attributes",level:2},{value:"Value Function",id:"value-function",level:2},{value:"Live Demo",id:"live-demo",level:2}],c={toc:s},u="wrapper";function d(t){let{components:e,...n}=t;return(0,i.kt)(u,(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"actions"},"Actions"),(0,i.kt)("p",null,"The actions of an animation define what happens with the specified views and properties while the animation is executed."),(0,i.kt)("h2",{id:"attributes"},"Attributes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Values"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"t")),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"none"),(0,i.kt)("td",{parentName:"tr",align:null},"Tag selector (see View.tag function) on which the animation must be applied"),(0,i.kt)("td",{parentName:"tr",align:null},"SomeTag,SomeTag.SomeSubTag")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"p")),(0,i.kt)("td",{parentName:"tr",align:null},"Property"),(0,i.kt)("td",{parentName:"tr",align:null},"none"),(0,i.kt)("td",{parentName:"tr",align:null},"Object property you want to animate"),(0,i.kt)("td",{parentName:"tr",align:null},"x, y, w, h, alpha, rotation, scale, texture.x, shader.someProp")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"v")),(0,i.kt)("td",{parentName:"tr",align:null},"Object"),(0,i.kt)("td",{parentName:"tr",align:null},"{}"),(0,i.kt)("td",{parentName:"tr",align:null},"Definition of time-value function"),(0,i.kt)("td",{parentName:"tr",align:null},"See description")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"rv")),(0,i.kt)("td",{parentName:"tr",align:null},"*"),(0,i.kt)("td",{parentName:"tr",align:null},"none"),(0,i.kt)("td",{parentName:"tr",align:null},"After stopping, the defined value ",(0,i.kt)("inlineCode",{parentName:"td"},"v")," at progress 0 is used. If another value is desired, ",(0,i.kt)("inlineCode",{parentName:"td"},"rv")," can be used."),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h2",{id:"value-function"},"Value Function"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"v")," attribute defines the progress-to-value function over time."),(0,i.kt)("h2",{id:"live-demo"},"Live Demo"),(0,i.kt)("p",null,"The example below contains some of the actions you can perform on an animation property, such as changing the ",(0,i.kt)("inlineCode",{parentName:"p"},"src"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"y")," position, and the ",(0,i.kt)("inlineCode",{parentName:"p"},"scale"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\nclass BasicUsageExample extends lng.Application {\n    static _template() {\n        return {\n            LilLightning:{\n                x: 50, y: 250, src: '/Lightning/img/LngDocs_LilLightningIdle.png'\n            }\n        }\n    }\n        \n    _init(){\n        const lilLightningFlying = this.tag('LilLightning').animation({\n            duration: 4, repeat: -1, stopMethod: 'immediate',\n            actions: [\n                { p: 'src', v: { 0: '/Lightning/img/LngDocs_LilLightningIdle.png', 0.2:  '/Lightning/img/LngDocs_LilLightningRun.png', 0.6:  '/Lightning/img/LngDocs_LilLightningFlying.png'} },\n                { p: 'x', v: { 0: {v: 50, se: 0}, 0.2: {v: 50, s: 0}, 0.6: {v: 250, s: 0}, 1: 700 } },\n                { p: 'y', v: { 0: {v: 250, se: 0}, 0.2: {v: 250, s: 0}, 0.6: {v: 250, s: 0}, 1: -150 } },\n                { p: 'scale', v: { 0: {v: 1, se: 0}, 0.2: {v: 1, s: 0}, 0.6: {v: 1, s: 0}, 1: 0.2 } }\n            ]\n        });\n        lilLightningFlying.start();\n    }\n}\n\nconst App = new BasicUsageExample({stage: {w: window.innerWidth, h: window.innerHeight, useImageWorker: false}});\ndocument.body.appendChild(App.stage.getCanvas());\n")))}d.isMDXComponent=!0}}]);