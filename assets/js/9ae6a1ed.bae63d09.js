"use strict";(self.webpackChunklightning_docs=self.webpackChunklightning_docs||[]).push([[4242],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(r),h=i,g=u["".concat(s,".").concat(h)]||u[h]||d[h]||a;return r?n.createElement(g,l(l({ref:t},c),{},{components:r})):n.createElement(g,l({ref:t},c))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},3481:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var n=r(7462),i=(r(7294),r(3905));const a={},l="Perspective",o={unversionedId:"RenderEngine/Shaders/Perspective",id:"RenderEngine/Shaders/Perspective",title:"Perspective",description:"With the Perspective shader, you can add a lighting & 3D effect to the texture to be rendered.",source:"@site/docs/RenderEngine/Shaders/Perspective.md",sourceDirName:"RenderEngine/Shaders",slug:"/RenderEngine/Shaders/Perspective",permalink:"/lightning-docs/docs/RenderEngine/Shaders/Perspective",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/RenderEngine/Shaders/Perspective.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Magnifier",permalink:"/lightning-docs/docs/RenderEngine/Shaders/Magnifier"},next:{title:"Pixelate",permalink:"/lightning-docs/docs/RenderEngine/Shaders/Pixelate"}},s={},p=[{value:"Usage",id:"usage",level:2},{value:"Initialize",id:"initialize",level:3},{value:"Calculating Rotation",id:"calculating-rotation",level:3},{value:"Setters",id:"setters",level:2},{value:"rx",id:"rx",level:3},{value:"ry",id:"ry",level:3},{value:"z",id:"z",level:3},{value:"Getters",id:"getters",level:2},{value:"rx",id:"rx-1",level:3},{value:"ry",id:"ry-1",level:3},{value:"z",id:"z-1",level:3},{value:"Examples",id:"examples",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"perspective"},"Perspective"),(0,i.kt)("p",null,"With the Perspective shader, you can add a lighting & 3D effect to the texture to be rendered."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"If you want to use shaders that come with the Lightning framework you need to import Lightning first."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import Lightning from '@lightningjs/core'\n")),(0,i.kt)("h3",{id:"initialize"},"Initialize"),(0,i.kt)("p",null,"To use the Perspective shader you need to apply it to the shader property of an element:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"//in template\nclass MyApp extends Lightning.Application {\n    static _template() {\n        return {\n            Picture: {w: 300, h: 300, src: 'MyImage.jpg', shader: {type: Lightning.shaders.Perspective, rx: 49 * Math.PI / 180}}\n        }\n    }\n}\n\n//in a component\nthis.tag('Picture').shader = {type: Lightning.shaders.Perspective, rx: 49 * Math.PI / 180}\n")),(0,i.kt)("h3",{id:"calculating-rotation"},"Calculating Rotation"),(0,i.kt)("p",null,"Rotation in Lightning is done with radian values. You can use the following formula to calculate the correct value from degrees to radians;"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"degrees * Math.PI / 180\n")),(0,i.kt)("p",null,"For example, to rotate a tag 33 degrees;"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"33 * Math.PI / 180\n")),(0,i.kt)("p",null,"You can customize the appearance of the Perspective shader with the following setters."),(0,i.kt)("h2",{id:"setters"},"Setters"),(0,i.kt)("h3",{id:"rx"},"rx"),(0,i.kt)("p",null,"You can rotate the texture over the X-axis with a ",(0,i.kt)("inlineCode",{parentName:"p"},"float"),". Expected input is the degrees in radians."),(0,i.kt)("h3",{id:"ry"},"ry"),(0,i.kt)("p",null,"You can rotate the texture over the Y-axis with a ",(0,i.kt)("inlineCode",{parentName:"p"},"float"),". Expected input is the degrees in radians."),(0,i.kt)("h3",{id:"z"},"z"),(0,i.kt)("p",null,"You can position the texture on the X-axis with a ",(0,i.kt)("inlineCode",{parentName:"p"},"float"),". Expected input is the degrees in radians."),(0,i.kt)("h2",{id:"getters"},"Getters"),(0,i.kt)("h3",{id:"rx-1"},"rx"),(0,i.kt)("p",null,"returns the current ",(0,i.kt)("inlineCode",{parentName:"p"},"rx")," value."),(0,i.kt)("h3",{id:"ry-1"},"ry"),(0,i.kt)("p",null,"returns the current ",(0,i.kt)("inlineCode",{parentName:"p"},"ry")," value."),(0,i.kt)("h3",{id:"z-1"},"z"),(0,i.kt)("p",null,"returns the current ",(0,i.kt)("inlineCode",{parentName:"p"},"z")," value."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Visit the following site to see various examples of the Rounded Rectangle Shader."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://lightningjs.io/examples/#/shaders/light-3d"},"https://lightningjs.io/examples/#/shaders/light-3d")))}d.isMDXComponent=!0}}]);