"use strict";(self.webpackChunklightning_docs=self.webpackChunklightning_docs||[]).push([[4543],{3905:(t,n,e)=>{e.d(n,{Zo:()=>c,kt:()=>h});var i=e(7294);function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function r(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,i)}return e}function o(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?r(Object(e),!0).forEach((function(n){a(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function s(t,n){if(null==t)return{};var e,i,a=function(t,n){if(null==t)return{};var e,i,a={},r=Object.keys(t);for(i=0;i<r.length;i++)e=r[i],n.indexOf(e)>=0||(a[e]=t[e]);return a}(t,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)e=r[i],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}var l=i.createContext({}),p=function(t){var n=i.useContext(l),e=n;return t&&(e="function"==typeof t?t(n):o(o({},n),t)),e},c=function(t){var n=p(t.components);return i.createElement(l.Provider,{value:n},t.children)},u="mdxType",g={inlineCode:"code",wrapper:function(t){var n=t.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(t,n){var e=t.components,a=t.mdxType,r=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),u=p(e),d=a,h=u["".concat(l,".").concat(d)]||u[d]||g[d]||r;return e?i.createElement(h,o(o({ref:n},c),{},{components:e})):i.createElement(h,o({ref:n},c))}));function h(t,n){var e=arguments,a=n&&n.mdxType;if("string"==typeof t||a){var r=e.length,o=new Array(r);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=t,s[u]="string"==typeof t?t:a,o[1]=s;for(var p=2;p<r;p++)o[p]=e[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,e)}d.displayName="MDXCreateElement"},5951:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var i=e(7462),a=(e(7294),e(3905));const r={},o="Transitions",s={unversionedId:"Transitions/index",id:"Transitions/index",title:"Transitions",description:"A transition is a gradual change of a property value. Transitions are able to accept dynamic values, as opposed to animations, which use fixed values.",source:"@site/docs/Transitions/index.md",sourceDirName:"Transitions",slug:"/Transitions/",permalink:"/lightning-docs/docs/Transitions/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Transitions/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tags",permalink:"/lightning-docs/docs/Templates/Tags"},next:{title:"Attributes",permalink:"/lightning-docs/docs/Transitions/Attributes"}},l={},p=[{value:"Defining a Transition",id:"defining-a-transition",level:2},{value:"Starting a Transition",id:"starting-a-transition",level:2},{value:"Removing a Transition",id:"removing-a-transition",level:2},{value:"Transition Target Value",id:"transition-target-value",level:2},{value:"Fast Forward",id:"fast-forward",level:2},{value:"Live Demo",id:"live-demo",level:2}],c={toc:p},u="wrapper";function g(t){let{components:n,...e}=t;return(0,a.kt)(u,(0,i.Z)({},c,e,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"transitions"},"Transitions"),(0,a.kt)("p",null,"A transition is a ",(0,a.kt)("em",{parentName:"p"},"gradual")," change of a property value. Transitions are able to accept ",(0,a.kt)("em",{parentName:"p"},"dynamic")," values, as opposed to ",(0,a.kt)("a",{parentName:"p",href:"/lightning-docs/docs/Animations/"},"animations"),", which use ",(0,a.kt)("em",{parentName:"p"},"fixed")," values."),(0,a.kt)("h2",{id:"defining-a-transition"},"Defining a Transition"),(0,a.kt)("p",null,"You define a transition within the template:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"static _template() {\n    return {\n        MyTarget:{ transitions: {x: {duration: 2, timingFunction: 'ease'},\n          color: {duration: 1} }}\n    }\n}\n")),(0,a.kt)("h2",{id:"starting-a-transition"},"Starting a Transition"),(0,a.kt)("p",null,"You can start a transition from within a patch:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"this.tag('MyObject').patch({ smooth:{ x: 10, color: 0xFFFF0000 }});\n")),(0,a.kt)("p",null,"or using the ",(0,a.kt)("inlineCode",{parentName:"p"},"setSmooth")," function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"this.tag('MyObject').setSmooth('x', 10);\n")),(0,a.kt)("p",null,"If required, you can also modify the transition settings as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"this.tag('MyObject').setSmooth('x', 10, {duration: 1});\n")),(0,a.kt)("p",null,"or from within a patch:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"this.tag('MyObject').patch({ smooth:{ x: [10, \n   {duration: 4, delay: 4, timingFunction: 'linear' }\n ]}});\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A property name that contains the string ",(0,a.kt)("inlineCode",{parentName:"p"},"color")," (case insensitive), has values that are interpolated as ARGB values. This means,\nthat you can specify a color animation as follows:\n",(0,a.kt)("inlineCode",{parentName:"p"},"{p: 'color', v: {0: 0xFFFF0000, 1: 0xFF0000FF}}"),".")),(0,a.kt)("h2",{id:"removing-a-transition"},"Removing a Transition"),(0,a.kt)("p",null,"You can remove a transition by setting 'undefined' (using ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"this.tag('MyObject').patch({ transitions:{ x: null }});\n")),(0,a.kt)("p",null,"or using the ",(0,a.kt)("inlineCode",{parentName:"p"},"setSmooth")," function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"this.tag('MyObject').setSmooth('x', undefined);\n")),(0,a.kt)("h2",{id:"transition-target-value"},"Transition Target Value"),(0,a.kt)("p",null,"A transition changes the property itself. If you set a value to the same property while a transition is\nrunning, the value is immediately ",(0,a.kt)("em",{parentName:"p"},"overwritten")," by the transition before the next frame is drawn. Also, getting the\nproperty value returns the ",(0,a.kt)("em",{parentName:"p"},"current")," property value instead of the property transition target value."),(0,a.kt)("p",null,"You can get the transition target value as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"const targetX = this.tag('MyObject').getSmooth('x');\n")),(0,a.kt)("h2",{id:"fast-forward"},"Fast Forward"),(0,a.kt)("p",null,"You can fast-forward the transition to the target value as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"this.tag('MyObject').fastForward('x');\n")),(0,a.kt)("h2",{id:"live-demo"},"Live Demo"),(0,a.kt)("p",null,"In this demo, we let ",(0,a.kt)("em",{parentName:"p"},"LilLightning")," compete with itself by using ",(0,a.kt)("em",{parentName:"p"},"three")," different ways of transitioning.\nPress ",(0,a.kt)("strong",{parentName:"p"},"right")," to start the transitions, or ",(0,a.kt)("strong",{parentName:"p"},"left")," to reset."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"class BasicUsageExample extends lng.Application {\n    static _template() {\n        return {\n            FinishLine:{ w: 5, h: 300, colorTop: 0xFFABABAB, colorBottom: 0xFFFFFFFF, rect: true, x: 500, y: 200 },\n            LilLightningA:{ x: 50, y: 100, src: '/Lightning/img/LngDocs_LilLightningRun.png'},\n            LilLightningB:{ x: 50, y: 200, src: '/Lightning/img/LngDocs_LilLightningRun.png'},\n            LilLightningC:{ x: 50, y: 300, src: '/Lightning/img/LngDocs_LilLightningRun.png'}\n        }\n    }\n    \n    _handleLeft(){\n        this.resetTransitions();\n    }\n    \n    _handleRight(){\n        this.startTransitions();\n    }\n        \n    startTransitions(){\n        //Face candidates to the right\n        this.setCandidatesDirection('right');\n        \n        //Start transitions\n        this.tag('LilLightningA').setSmooth('x', 500);\n        this.tag('LilLightningB').setSmooth('x', 500, {duration: 2});\n        this.tag('LilLightningC').patch({ smooth:{ x: [500, { duration: 2.5, delay: 1, timingFunction: 'ease-out' } ]}});\n    }\n    \n    resetTransitions(){\n        //Face candidates to the left\n        this.setCandidatesDirection('left');\n        \n        //Start transitions\n        this.tag('LilLightningA').patch({ smooth:{ x: [50, { duration: 0.5, delay: 0.2, timingFunction: 'ease-in' } ]}});\n        this.tag('LilLightningB').patch({ smooth:{ x: [50, { duration: 0.5, delay: 0.4, timingFunction: 'ease-in' } ]}});\n        this.tag('LilLightningC').patch({ smooth:{ x: [50, { duration: 0.5, delay: 0.6, timingFunction: 'ease-in' } ]}});\n    }\n    \n    setCandidatesDirection(direction){\n        let dir = (direction === 'left')?-1:1;\n        this.tag('LilLightningA').scaleX = dir;\n        this.tag('LilLightningB').scaleX = dir;\n        this.tag('LilLightningC').scaleX = dir;\n    }\n       \n}\n\nconst options = {stage: {w: window.innerWidth, h: window.innerHeight, useImageWorker: false}};\nconst App = new BasicUsageExample(options);\ndocument.body.appendChild(App.stage.getCanvas());\n")))}g.isMDXComponent=!0}}]);