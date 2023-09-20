"use strict";(self.webpackChunklightning_docs=self.webpackChunklightning_docs||[]).push([[9227],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=i.createContext({}),p=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(o.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,g=u["".concat(o,".").concat(h)]||u[h]||c[h]||a;return n?i.createElement(g,l(l({ref:t},d),{},{components:n})):i.createElement(g,l({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=h;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<a;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6308:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var i=n(7462),r=(n(7294),n(3905));const a={},l="Pixelate",s={unversionedId:"RenderEngine/Shaders/Pixelate",id:"RenderEngine/Shaders/Pixelate",title:"Pixelate",description:"With the Pixelate shader, you can pixelate the texture to be rendered with a specific pixel size.",source:"@site/docs/RenderEngine/Shaders/Pixelate.md",sourceDirName:"RenderEngine/Shaders",slug:"/RenderEngine/Shaders/Pixelate",permalink:"/lightning-docs/docs/RenderEngine/Shaders/Pixelate",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/RenderEngine/Shaders/Pixelate.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Perspective",permalink:"/lightning-docs/docs/RenderEngine/Shaders/Perspective"},next:{title:"Radial Gradient",permalink:"/lightning-docs/docs/RenderEngine/Shaders/RadialGradient"}},o={},p=[{value:"Usage",id:"usage",level:2},{value:"Initialize",id:"initialize",level:3},{value:"Setters",id:"setters",level:2},{value:"size",id:"size",level:3},{value:"x",id:"x",level:3},{value:"y",id:"y",level:3},{value:"Getters",id:"getters",level:2},{value:"size",id:"size-1",level:3},{value:"x",id:"x-1",level:3},{value:"y",id:"y-1",level:3},{value:"Examples",id:"examples",level:2}],d={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pixelate"},"Pixelate"),(0,r.kt)("p",null,"With the Pixelate shader, you can pixelate the texture to be rendered with a specific pixel size."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"If you want to use shaders that come with the Lightning framework you need to import Lightning first."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import Lightning from '@lightningjs/core'\n")),(0,r.kt)("h3",{id:"initialize"},"Initialize"),(0,r.kt)("p",null,"To use the Pixelate shader you need to apply it to the shader property of an element:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"//in template\nclass MyApp extends Lightning.Application {\n    static _template() {\n        return {\n            Picture: {w: 300, h: 300, src: 'MyImage.jpg', shader: {type: Lightning.shaders.Pixelate, size: 20}}\n        }\n    }\n}\n\n//in a component\nthis.tag('Picture').shader = {type: Lightning.shaders.Pixelate, size: 20}\n")),(0,r.kt)("p",null,"You can customize the appearance of the Pixelate shader with the following setters."),(0,r.kt)("h2",{id:"setters"},"Setters"),(0,r.kt)("h3",{id:"size"},"size"),(0,r.kt)("p",null,"You can set the size of the pixels in the Pixelate shader with a ",(0,r.kt)("inlineCode",{parentName:"p"},"float")," value."),(0,r.kt)("h3",{id:"x"},"x"),(0,r.kt)("p",null,"You can set the width of the pixel with a ",(0,r.kt)("inlineCode",{parentName:"p"},"float"),"."),(0,r.kt)("h3",{id:"y"},"y"),(0,r.kt)("p",null,"You can set the height of the pixel with a ",(0,r.kt)("inlineCode",{parentName:"p"},"float"),"."),(0,r.kt)("h2",{id:"getters"},"Getters"),(0,r.kt)("h3",{id:"size-1"},"size"),(0,r.kt)("p",null,"returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"float")," with the value of the size."),(0,r.kt)("h3",{id:"x-1"},"x"),(0,r.kt)("p",null,"returns the current ",(0,r.kt)("inlineCode",{parentName:"p"},"width")," of the pixel size."),(0,r.kt)("h3",{id:"y-1"},"y"),(0,r.kt)("p",null,"returns the current ",(0,r.kt)("inlineCode",{parentName:"p"},"height")," of the pixel size."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Visit the following site to see various examples of the Rounded Rectangle Shader."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://lightningjs.io/examples/#/shaders/pixelate"},"https://lightningjs.io/examples/#/shaders/pixelate")))}c.isMDXComponent=!0}}]);