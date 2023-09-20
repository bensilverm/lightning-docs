"use strict";(self.webpackChunklightning_docs=self.webpackChunklightning_docs||[]).push([[7839],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>g});var a=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,s=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),u=p(n),c=i,g=u["".concat(s,".").concat(c)]||u[c]||m[c]||r;return n?a.createElement(g,o(o({ref:e},d),{},{components:n})):a.createElement(g,o({ref:e},d))}));function g(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[u]="string"==typeof t?t:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6914:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={},o="Attributes",l={unversionedId:"Transitions/Attributes",id:"Transitions/Attributes",title:"Attributes",description:"You can use transition attributes to define the general behavior of a transition.",source:"@site/docs/Transitions/Attributes.md",sourceDirName:"Transitions",slug:"/Transitions/Attributes",permalink:"/lightning-docs/docs/Transitions/Attributes",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Transitions/Attributes.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Transitions",permalink:"/lightning-docs/docs/Transitions/"},next:{title:"Events",permalink:"/lightning-docs/docs/Transitions/Events"}},s={},p=[{value:"Timing Function Settings",id:"timing-function-settings",level:2},{value:"Live Demo",id:"live-demo",level:2}],d={toc:p},u="wrapper";function m(t){let{components:e,...n}=t;return(0,i.kt)(u,(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"attributes"},"Attributes"),(0,i.kt)("p",null,"You can use transition attributes to define the general behavior of a transition."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"duration")),(0,i.kt)("td",{parentName:"tr",align:null},"Float"),(0,i.kt)("td",{parentName:"tr",align:null},"0"),(0,i.kt)("td",{parentName:"tr",align:null},"Duration in seconds of the transition from start to end")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"delay")),(0,i.kt)("td",{parentName:"tr",align:null},"Float"),(0,i.kt)("td",{parentName:"tr",align:null},"0"),(0,i.kt)("td",{parentName:"tr",align:null},"Delay in seconds before transition starts")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"timingFunction")),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"'ease'"),(0,i.kt)("td",{parentName:"tr",align:null},"Timing function (see settings ",(0,i.kt)("a",{parentName:"td",href:"#Timing-Function-Settings"},"below"),")")))),(0,i.kt)("h2",{id:"timing-function-settings"},"Timing Function Settings"),(0,i.kt)("p",null,"You can specify the following settings for the ",(0,i.kt)("inlineCode",{parentName:"p"},"timingFunction"),", which behave identical to the CSS timing function:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"linear")),(0,i.kt)("td",{parentName:"tr",align:null},"Straight point-to-point animation")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ease")),(0,i.kt)("td",{parentName:"tr",align:null},"Transition starts at a constant speed and ends slowing down")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ease-in")),(0,i.kt)("td",{parentName:"tr",align:null},"Transition starts slow and continues in a constant speed")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ease-out")),(0,i.kt)("td",{parentName:"tr",align:null},"Transition starts at a constant speed and ends slowing down")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ease-in-out")),(0,i.kt)("td",{parentName:"tr",align:null},"Transition starts slow, continues at a constant speed, and ends slowing down")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"step-start")),(0,i.kt)("td",{parentName:"tr",align:null},"Transition steps to start position")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"step-end")),(0,i.kt)("td",{parentName:"tr",align:null},"Transition steps to end position")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"cubic-bezier(a,b,c,d)")),(0,i.kt)("td",{parentName:"tr",align:null},"Custom bezier curve")))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"You can see all options in action at ",(0,i.kt)("a",{parentName:"p",href:"http://cubic-bezier.com/"},"cubic-bezier.com"),".")),(0,i.kt)("h2",{id:"live-demo"},"Live Demo"),(0,i.kt)("p",null,"The example below demonstrates the various ",(0,i.kt)("inlineCode",{parentName:"p"},"timingFunction")," states in action. By pressing ",(0,i.kt)("strong",{parentName:"p"},"left")," or ",(0,i.kt)("strong",{parentName:"p"},"right"),", you can see the differences between the ",(0,i.kt)("inlineCode",{parentName:"p"},"linear"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ease"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ease-in"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ease-out"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ease-in-out"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"step-start"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"step-end")," states."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"class BasicUsageExample extends lng.Application {\n    static _template() {\n        return {\n            ExamplanationText:{ x: 50, y: 28, text:{ text: 'Press left or right to swap transitions.', fontSize: 22, wordWrap: true, wordWrapWidth: 450, lineHeight: 30 }},\n            LilLightning:{ x: 100, y: 50, src: '/Lightning/img/LngDocs_LilLightningIdle.png'}\n        }\n    }\n    \n    _handleLeft(){\n        if(this._index &amp;gt; 0){\n            this._index --;\n            this._currentTransition = this._transitions[this._index];\n            this.changeSmoothing();\n        }\n    }\n    \n    _handleRight(){\n        if(this._index &amp;lt; 6){\n            this._index ++;\n            this._currentTransition = this._transitions[this._index];\n            this.changeSmoothing();\n        }\n    }\n    \n    changeSmoothing(){\n        this.tag('ExamplanationText').patch({ text:{ text: 'This is the \"${this._currentTransition}\" transition.' }});\n        this.tag(\"LilLightning\").patch({ x: 100 }); // Reset to start position;\n        //Try to change the parameters of the line below, like duration and delay to see what they change.\n        this.tag('LilLightning').patch({ smooth:{ x: [400, { duration: 2, delay: 0, timingFunction: this._currentTransition } ]}});\n    }\n    \n    _init(){\n        this._index = 0;\n        this._transitions = ['linear','ease','ease-in','ease-out','ease-in-out','step-start','step-end'];\n        this._currentTransition = 'linear';\n    }\n    \n}\n\nconst options = {stage: {w: window.innerWidth, h: window.innerHeight, useImageWorker: false}};\nconst App = new BasicUsageExample(options);\ndocument.body.appendChild(App.stage.getCanvas());\n")))}m.isMDXComponent=!0}}]);