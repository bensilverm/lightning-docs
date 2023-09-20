"use strict";(self.webpackChunklightning_docs=self.webpackChunklightning_docs||[]).push([[9662],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>f});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),u=d(n),c=r,f=u["".concat(s,".").concat(c)]||u[c]||p[c]||a;return n?i.createElement(f,o(o({ref:t},h),{},{components:n})):i.createElement(f,o({ref:t},h))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<a;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4157:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=n(7462),r=(n(7294),n(3905));const a={},o="Magnifier",l={unversionedId:"RenderEngine/Shaders/Magnifier",id:"RenderEngine/Shaders/Magnifier",title:"Magnifier",description:"The Magnifier shader magnifies a section of the to be rendered of the texture to be rendered.",source:"@site/docs/RenderEngine/Shaders/Magnifier.md",sourceDirName:"RenderEngine/Shaders",slug:"/RenderEngine/Shaders/Magnifier",permalink:"/lightning-docs/docs/RenderEngine/Shaders/Magnifier",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/RenderEngine/Shaders/Magnifier.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Linear Blur",permalink:"/lightning-docs/docs/RenderEngine/Shaders/LinearBlur"},next:{title:"Perspective",permalink:"/lightning-docs/docs/RenderEngine/Shaders/Perspective"}},s={},d=[{value:"Usage",id:"usage",level:2},{value:"Initialize",id:"initialize",level:3},{value:"Setters",id:"setters",level:2},{value:"w",id:"w",level:3},{value:"h",id:"h",level:3},{value:"x",id:"x",level:3},{value:"y",id:"y",level:3},{value:"radius",id:"radius",level:3},{value:"Getters",id:"getters",level:2},{value:"w",id:"w-1",level:3},{value:"h",id:"h-1",level:3},{value:"x",id:"x-1",level:3},{value:"y",id:"y-1",level:3},{value:"radius",id:"radius-1",level:3},{value:"Examples",id:"examples",level:2}],h={toc:d},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"magnifier"},"Magnifier"),(0,r.kt)("p",null,"The Magnifier shader magnifies a section of the to be rendered of the texture to be rendered."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"If you want to use shaders that come with the Lightning framework you need to import Lightning first."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import Lightning from '@lightningjs/core'\n")),(0,r.kt)("h3",{id:"initialize"},"Initialize"),(0,r.kt)("p",null,"To use the Magnifier shader you need to apply it to the shader property of an element:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"//in template\nclass MyApp extends Lightning.Application {\n    static _template() {\n        return {\n            Picture: {w: 300, h: 300, src: 'MyImage.jpg', shader: {type: Lightning.shaders.Magnifier, w: 150, w: 120, x: 40, y: 20}}\n        }\n    }\n}\n\n//in a component\nthis.tag('Picture').shader = {type: Lightning.shaders.Magnifier, w: 150, w: 120, x: 40, y: 20}\n")),(0,r.kt)("p",null,"You can customize the appearance of the Magnifier shader with the following setters."),(0,r.kt)("h2",{id:"setters"},"Setters"),(0,r.kt)("h3",{id:"w"},"w"),(0,r.kt)("p",null,"You can set the width of the magnified section with a ",(0,r.kt)("inlineCode",{parentName:"p"},"float"),","),(0,r.kt)("h3",{id:"h"},"h"),(0,r.kt)("p",null,"You can set the height of the magnified section with a ",(0,r.kt)("inlineCode",{parentName:"p"},"float"),","),(0,r.kt)("h3",{id:"x"},"x"),(0,r.kt)("p",null,"You can set the x position where the magnified section should start with a ",(0,r.kt)("inlineCode",{parentName:"p"},"float"),","),(0,r.kt)("h3",{id:"y"},"y"),(0,r.kt)("p",null,"You can set the y position where the magnified section should start with a ",(0,r.kt)("inlineCode",{parentName:"p"},"float"),","),(0,r.kt)("h3",{id:"radius"},"radius"),(0,r.kt)("p",null,"You can set the radius of the magnified section with a ",(0,r.kt)("inlineCode",{parentName:"p"},"float"),". This shader only supports an even radius for each corner."),(0,r.kt)("h2",{id:"getters"},"Getters"),(0,r.kt)("h3",{id:"w-1"},"w"),(0,r.kt)("p",null,"returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"float")," with the value of the width of the magnified section."),(0,r.kt)("h3",{id:"h-1"},"h"),(0,r.kt)("p",null,"returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"float")," with the value of the height of the magnified section."),(0,r.kt)("h3",{id:"x-1"},"x"),(0,r.kt)("p",null,"returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"float")," with the value of the x position of the magnified section."),(0,r.kt)("h3",{id:"y-1"},"y"),(0,r.kt)("p",null,"returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"float")," with the value of the y position of the magnified section."),(0,r.kt)("h3",{id:"radius-1"},"radius"),(0,r.kt)("p",null,"returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"float")," with the value of the radius of the corners of the magnified section."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Visit the following site to see various examples of the Rounded Rectangle Shader."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://lightningjs.io/examples/#/shaders/Magnifier"},"https://lightningjs.io/examples/#/shaders/Magnifier")))}p.isMDXComponent=!0}}]);