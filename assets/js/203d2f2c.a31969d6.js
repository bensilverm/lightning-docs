"use strict";(self.webpackChunklightning_docs=self.webpackChunklightning_docs||[]).push([[5841],{3905:(t,n,e)=>{e.d(n,{Zo:()=>p,kt:()=>m});var r=e(7294);function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function i(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function o(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?i(Object(e),!0).forEach((function(n){a(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function s(t,n){if(null==t)return{};var e,r,a=function(t,n){if(null==t)return{};var e,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(a[e]=t[e]);return a}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}var l=r.createContext({}),g=function(t){var n=r.useContext(l),e=n;return t&&(e="function"==typeof t?t(n):o(o({},n),t)),e},p=function(t){var n=g(t.components);return r.createElement(l.Provider,{value:n},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var n=t.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(t,n){var e=t.components,a=t.mdxType,i=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),c=g(e),u=a,m=c["".concat(l,".").concat(u)]||c[u]||d[u]||i;return e?r.createElement(m,o(o({ref:n},p),{},{components:e})):r.createElement(m,o({ref:n},p))}));function m(t,n){var e=arguments,a=n&&n.mdxType;if("string"==typeof t||a){var i=e.length,o=new Array(i);o[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=t,s[c]="string"==typeof t?t:a,o[1]=s;for(var g=2;g<i;g++)o[g]=e[g];return r.createElement.apply(null,o)}return r.createElement.apply(null,e)}u.displayName="MDXCreateElement"},9325:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>g});var r=e(7462),a=(e(7294),e(3905));const i={},o="Events",s={unversionedId:"Transitions/Events",id:"Transitions/Events",title:"Events",description:"A transition is an EventEmitter that can emit the following events:",source:"@site/docs/Transitions/Events.md",sourceDirName:"Transitions",slug:"/Transitions/Events",permalink:"/lightning-docs/docs/Transitions/Events",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Transitions/Events.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Attributes",permalink:"/lightning-docs/docs/Transitions/Attributes"},next:{title:"Methods",permalink:"/lightning-docs/docs/Transitions/Methods"}},l={},g=[{value:"Live Demo",id:"live-demo",level:2}],p={toc:g},c="wrapper";function d(t){let{components:n,...e}=t;return(0,a.kt)(c,(0,r.Z)({},p,e,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"events"},"Events"),(0,a.kt)("p",null,"A transition is an ",(0,a.kt)("em",{parentName:"p"},"EventEmitter")," that can emit the following events:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"start")),(0,a.kt)("td",{parentName:"tr",align:null},"Transition starts")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"delayEnd")),(0,a.kt)("td",{parentName:"tr",align:null},"Delay has ended")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"progress")),(0,a.kt)("td",{parentName:"tr",align:null},"Transition has progressed (argument: progress value between 0 and 1)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"finish")),(0,a.kt)("td",{parentName:"tr",align:null},"Transition has finished")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"stop")),(0,a.kt)("td",{parentName:"tr",align:null},"Transition is stopped")))),(0,a.kt)("h2",{id:"live-demo"},"Live Demo"),(0,a.kt)("p",null,"Press ",(0,a.kt)("strong",{parentName:"p"},"left"),", ",(0,a.kt)("strong",{parentName:"p"},"right"),", ",(0,a.kt)("strong",{parentName:"p"},"up")," or ",(0,a.kt)("strong",{parentName:"p"},"down")," to move LilLightning. See how the text changes\nwhen the ",(0,a.kt)("inlineCode",{parentName:"p"},"start")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"finish")," events are triggered after completion of each transition."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'class BasicUsageExample extends lng.Application {\n    static _template() {\n        return {\n            LilLightning: {\n                x: 300, y: 300, src: \'/Lightning/img/LngDocs_LilLightningFlying.png\',\n                transitions: {x: {duration: 1}, y: {duration: 1, timingFunction: \'linear\'}}\n            },\n            Message: {\n                x: 50, y: 50, text: {fontSize: 32}\n            }\n        };\n    }\n\n    _handleLeft(){\n        const subject = this.tag("LilLightning");\n        const targetX = subject.getSmooth(\'x\') - 100;\n        subject.setSmooth(\'x\', targetX);\n    }\n\n    _handleRight(){\n        const subject = this.tag("LilLightning");\n        const targetX = subject.getSmooth(\'x\') + 100;\n        subject.setSmooth(\'x\', targetX);\n    }\n\n    _handleUp(){\n        const subject = this.tag("LilLightning");\n        const targetY = subject.getSmooth(\'y\') - 100;\n        subject.setSmooth(\'y\', targetY);\n    }\n\n    _handleDown(){\n        const subject = this.tag("LilLightning");\n        const targetY = subject.getSmooth(\'y\') + 100;\n        subject.setSmooth(\'y\', targetY);\n    }\n\n    _init(){\n        this.tag("LilLightning").transition(\'x\').on(\'start\', () => {\n            this.tag("Message").text.text = "Started X transition to " + this.tag("LilLightning").getSmooth(\'x\');\n        });\n        this.tag("LilLightning").transition(\'x\').on(\'finish\', () => {\n            this.tag("Message").text.text = "Finished X transition";\n        });\n        this.tag("LilLightning").transition(\'y\').on(\'start\', () => {\n            this.tag("Message").text.text = "Started Y transition to " + this.tag("LilLightning").getSmooth(\'y\');\n        });\n        this.tag("LilLightning").transition(\'y\').on(\'finish\', () => {\n            this.tag("Message").text.text = "Finished Y transition";\n        });\n    }\n\n}\n\nconst options = {stage: {w: window.innerWidth, h: window.innerHeight, clearColor: 0x00000000, Canvas2D: false, useImageWorker: false}, debug: true}\noptions.keys = {\n    38: "Up",\n    40: "Down",\n    37: "Left",\n    39: "Right",\n    13: "Enter",\n    9: "Back",\n    8: "Back",\n    93: "Back",\n    174: "Back",\n    175: "Menu",\n    83: "Search"\n};\nconst App = new BasicUsageExample(options);\ndocument.body.appendChild(App.stage.getCanvas());\n')))}d.isMDXComponent=!0}}]);