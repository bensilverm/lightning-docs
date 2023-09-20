"use strict";(self.webpackChunklightning_docs=self.webpackChunklightning_docs||[]).push([[2161],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),h=o,g=u["".concat(d,".").concat(h)]||u[h]||c[h]||a;return n?r.createElement(g,l(l({ref:t},p),{},{components:n})):r.createElement(g,l({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=h;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4126:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={},l="Rounded Rectangle",i={unversionedId:"RenderEngine/Shaders/RoundedRectangle",id:"RenderEngine/Shaders/RoundedRectangle",title:"Rounded Rectangle",description:"The Rounded Rectangle shader clips a texture from a rectangle with sharp points into a rectangle with corners that are curved into an arc.",source:"@site/docs/RenderEngine/Shaders/RoundedRectangle.md",sourceDirName:"RenderEngine/Shaders",slug:"/RenderEngine/Shaders/RoundedRectangle",permalink:"/lightning-docs/docs/RenderEngine/Shaders/RoundedRectangle",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/RenderEngine/Shaders/RoundedRectangle.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Radial Gradient",permalink:"/lightning-docs/docs/RenderEngine/Shaders/RadialGradient"},next:{title:"Spinner2",permalink:"/lightning-docs/docs/RenderEngine/Shaders/Spinner2"}},d={},s=[{value:"Usage",id:"usage",level:2},{value:"Initialize",id:"initialize",level:3},{value:"Setters",id:"setters",level:2},{value:"radius",id:"radius",level:3},{value:"topLeft",id:"topleft",level:3},{value:"topRight",id:"topright",level:3},{value:"bottomRight",id:"bottomright",level:3},{value:"bottomLeft",id:"bottomleft",level:3},{value:"stroke",id:"stroke",level:3},{value:"strokeColor",id:"strokecolor",level:3},{value:"fillColor",id:"fillcolor",level:3},{value:"blend",id:"blend",level:3},{value:"Getters",id:"getters",level:2},{value:"radius",id:"radius-1",level:3},{value:"topLeft",id:"topleft-1",level:3},{value:"topRight",id:"topright-1",level:3},{value:"bottomRight",id:"bottomright-1",level:3},{value:"bottomLeft",id:"bottomleft-1",level:3},{value:"stroke",id:"stroke-1",level:3},{value:"strokeColor",id:"strokecolor-1",level:3},{value:"fillColor",id:"fillcolor-1",level:3},{value:"blend",id:"blend-1",level:3},{value:"Examples",id:"examples",level:2}],p={toc:s},u="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rounded-rectangle"},"Rounded Rectangle"),(0,o.kt)("p",null,"The Rounded Rectangle shader clips a texture from a rectangle with sharp points into a rectangle with corners that are curved into an arc."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"If you want to use shaders that come with the Lightning framework you need to import Lightning first."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import Lightning from '@lightningjs/core'\n")),(0,o.kt)("h3",{id:"initialize"},"Initialize"),(0,o.kt)("p",null,"To use the Rounded Rectangle shader you need to apply it to the shader property of an element:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"//in template\nclass MyApp extends Lightning.Application {\n    static _template() {\n        return {\n            RoundedRectangle: {w: 300, h: 300, rect: true, shader: {type: Lightning.shaders.RoundedRectangle, radius: 20}}\n        }\n    }\n}\n\n//in a component\nthis.tag('RoundedRectangle').shader = {type: Lightning.shaders.RoundedRectangle, radius: 20}\n")),(0,o.kt)("p",null,"You can customize the appearance of the Rounded Rectangle shader with the following setters."),(0,o.kt)("h2",{id:"setters"},"Setters"),(0,o.kt)("h3",{id:"radius"},"radius"),(0,o.kt)("p",null,"You can set the radius of the Rounded Rectangle shader with a ",(0,o.kt)("inlineCode",{parentName:"p"},"float")," or an ",(0,o.kt)("inlineCode",{parentName:"p"},"array"),"."),(0,o.kt)("p",null,"When a ",(0,o.kt)("inlineCode",{parentName:"p"},"float")," value is given the shader will appoint that value to each corner of the rectangle. When an ",(0,o.kt)("inlineCode",{parentName:"p"},"array")," is given the shader checks the length of the given array in order to appoint the correct value to each corner."),(0,o.kt)("p",null,"When the ",(0,o.kt)("inlineCode",{parentName:"p"},"array")," length is two:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const radius = [50, 90];\n\n//expected output\nconst corners = {\n  topLeft: 50,\n  topRight: 90,\n  bottomRight: 50,\n  bottomLeft: 90\n}\n")),(0,o.kt)("p",null,"When the ",(0,o.kt)("inlineCode",{parentName:"p"},"array")," length is three:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const radius = [50, 90, 40];\n\n//expected output\nconst corners = {\n  topLeft: 50,\n  topRight: 90,\n  bottomRight: 40,\n  bottomLeft: 1\n}\n")),(0,o.kt)("p",null,"When the ",(0,o.kt)("inlineCode",{parentName:"p"},"array")," length is four it will copy it as is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const radius = [20, 30, 40, 50];\n\n//expected output\nconst corners = {\n  topLeft: 20,\n  topRight: 30,\n  bottomRight: 40,\n  bottomLeft: 50\n}\n")),(0,o.kt)("p",null,"When the ",(0,o.kt)("inlineCode",{parentName:"p"},"array")," length is something different than the first three examples:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const radius = [20, 30, 40, 50];\n\n//expected output\nconst corners = {\n  topLeft: 20,\n  topRight: 30,\n  bottomRight: 40,\n  bottomLeft: 50\n}\n")),(0,o.kt)("h3",{id:"topleft"},"topLeft"),(0,o.kt)("p",null,"You can set the radius of the topLeft corner with a ",(0,o.kt)("inlineCode",{parentName:"p"},"float"),"."),(0,o.kt)("h3",{id:"topright"},"topRight"),(0,o.kt)("p",null,"You can set the radius of the topRight corner with a ",(0,o.kt)("inlineCode",{parentName:"p"},"float"),"."),(0,o.kt)("h3",{id:"bottomright"},"bottomRight"),(0,o.kt)("p",null,"You can set the radius of the bottomRight corner with a ",(0,o.kt)("inlineCode",{parentName:"p"},"float"),"."),(0,o.kt)("h3",{id:"bottomleft"},"bottomLeft"),(0,o.kt)("p",null,"You can set the radius of the bottomLeft corner with a ",(0,o.kt)("inlineCode",{parentName:"p"},"float"),"."),(0,o.kt)("h3",{id:"stroke"},"stroke"),(0,o.kt)("p",null,"You can add a stroke to the Rounded Rectangle shader by setting a ",(0,o.kt)("inlineCode",{parentName:"p"},"float")," bigger than 0."),(0,o.kt)("h3",{id:"strokecolor"},"strokeColor"),(0,o.kt)("p",null,"You can set the strokeColor with an ",(0,o.kt)("inlineCode",{parentName:"p"},"argb")," value typically used in Lightning. Default is ",(0,o.kt)("inlineCode",{parentName:"p"},"0x00ffffff")),(0,o.kt)("h3",{id:"fillcolor"},"fillColor"),(0,o.kt)("p",null,"You can set the fillColor of the RoundedRectangle with an ",(0,o.kt)("inlineCode",{parentName:"p"},"argb")," value typically used in Lightning. Default is ",(0,o.kt)("inlineCode",{parentName:"p"},"0xffffffff"),"."),(0,o.kt)("h3",{id:"blend"},"blend"),(0,o.kt)("p",null,"The blend property allows you to use the Rounded Rectangle to blend with the texture. The expected value is a ",(0,o.kt)("inlineCode",{parentName:"p"},"float")," that ranges from 0 - 1;"),(0,o.kt)("h2",{id:"getters"},"Getters"),(0,o.kt)("h3",{id:"radius-1"},"radius"),(0,o.kt)("p",null,"returns the current ",(0,o.kt)("inlineCode",{parentName:"p"},"radius")," values per corner."),(0,o.kt)("h3",{id:"topleft-1"},"topLeft"),(0,o.kt)("p",null,"returns the current value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"topLeft")," corner."),(0,o.kt)("h3",{id:"topright-1"},"topRight"),(0,o.kt)("p",null,"returns the current value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"topLeft")," corner."),(0,o.kt)("h3",{id:"bottomright-1"},"bottomRight"),(0,o.kt)("p",null,"returns the current value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"topLeft")," corner."),(0,o.kt)("h3",{id:"bottomleft-1"},"bottomLeft"),(0,o.kt)("p",null,"returns the current value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"topLeft")," corner."),(0,o.kt)("h3",{id:"stroke-1"},"stroke"),(0,o.kt)("p",null,"returns the current ",(0,o.kt)("inlineCode",{parentName:"p"},"stroke")," value."),(0,o.kt)("h3",{id:"strokecolor-1"},"strokeColor"),(0,o.kt)("p",null,"returns the current ",(0,o.kt)("inlineCode",{parentName:"p"},"strokeColor")," of the stroke."),(0,o.kt)("h3",{id:"fillcolor-1"},"fillColor"),(0,o.kt)("p",null,"returns the current ",(0,o.kt)("inlineCode",{parentName:"p"},"fillColor")," of the Rounded Rectangle."),(0,o.kt)("h3",{id:"blend-1"},"blend"),(0,o.kt)("p",null,"returns the current ",(0,o.kt)("inlineCode",{parentName:"p"},"blend")," value."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Visit the following site to see various examples of the Rounded Rectangle Shader."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://lightningjs.io/examples/#/shaders/rounded-rectangle"},"https://lightningjs.io/examples/#/shaders/rounded-rectangle")))}c.isMDXComponent=!0}}]);