"use strict";(self.webpackChunklightning_docs=self.webpackChunklightning_docs||[]).push([[7802],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,g=c["".concat(o,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:a,l[1]=p;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1617:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={},l="Clipping",p={unversionedId:"Templates/Clipping",id:"Templates/Clipping",title:"Clipping",description:"It's possible to use only a selected part of the currently set texture. Because the dimensions might also change, the element behaves as if the texture was only the selected part.",source:"@site/docs/Templates/Clipping.md",sourceDirName:"Templates",slug:"/Templates/Clipping",permalink:"/lightning-docs/docs/Templates/Clipping",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Templates/Clipping.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Templates",permalink:"/lightning-docs/docs/Templates/"},next:{title:"Events",permalink:"/lightning-docs/docs/Templates/Events"}},o={},s=[{value:"Enable / Disable Clipping",id:"enable--disable-clipping",level:2},{value:"ResizeMode",id:"resizemode",level:2},{value:"Cover",id:"cover",level:3},{value:"Contain",id:"contain",level:3},{value:"Live Demo",id:"live-demo",level:2}],u={toc:s},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"clipping"},"Clipping"),(0,a.kt)("p",null,"It's possible to use only a selected ",(0,a.kt)("em",{parentName:"p"},"part")," of the currently set texture. Because the dimensions might also change, the element behaves as if the texture was only the selected part."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Texture clipping provides a high-performance way of implementing ",(0,a.kt)("em",{parentName:"p"},"spritemaps")," and rendering only part of a texture.")),(0,a.kt)("h2",{id:"enable--disable-clipping"},"Enable / Disable Clipping"),(0,a.kt)("p",null,"You can ",(0,a.kt)("em",{parentName:"p"},"enable")," texture clipping using the ",(0,a.kt)("inlineCode",{parentName:"p"},"enableClipping()")," method, which uses ",(0,a.kt)("inlineCode",{parentName:"p"},"x"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"y"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"w")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"h")," as parameters."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"x")),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"The x-position of the texture object (in pixels)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"y")),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"The y-position of the texture object (in pixels)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"w")),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"The width of the texture object (in pixels)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"h")),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"The height of the texture object (in pixels_)")))),(0,a.kt)("p",null,"To ",(0,a.kt)("em",{parentName:"p"},"disable")," the active texture clipping, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"disableClipping()")," method."),(0,a.kt)("h2",{id:"resizemode"},"ResizeMode"),(0,a.kt)("p",null,"You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"resizeMode")," to determine the clipping automatically from the width and\nheight of the source texture. This can be convenient if you are unsure about the exact image sizes but want the image to cover a specific area."),(0,a.kt)("p",null,"The resize modes ",(0,a.kt)("inlineCode",{parentName:"p"},"cover")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"contain")," are supported (see ",(0,a.kt)("a",{parentName:"p",href:"#cover"},"below"),")."),(0,a.kt)("p",null,"When the texture is loaded, the clipping is automatically\ndefined. If the ",(0,a.kt)("inlineCode",{parentName:"p"},"resizeMode")," value of the already loaded texture changes, it is immediately applied."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Because ",(0,a.kt)("inlineCode",{parentName:"p"},"resizeMode")," actually changes the clipping attributes, you should either set the clipping attributes manually or specify the resizeMode (but not both).")),(0,a.kt)("h3",{id:"cover"},"Cover"),(0,a.kt)("p",null,"Using the ",(0,a.kt)("inlineCode",{parentName:"p"},"cover")," resize mode, you can ensure that a texture covers a specific rectangular area."),(0,a.kt)("p",null,"You can clip part of\na texture. To control which part is clipped, you can set the ",(0,a.kt)("inlineCode",{parentName:"p"},"clipX")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"clipY")," properties, which are\nvalues from 0 to 1."),(0,a.kt)("p",null,"To clip the top, set ",(0,a.kt)("inlineCode",{parentName:"p"},"clipY")," to 0. To clip the bottom, set ",(0,a.kt)("inlineCode",{parentName:"p"},"clipY")," to 1."),(0,a.kt)("p",null,"By default, (",(0,a.kt)("inlineCode",{parentName:"p"},"clipX"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"clipY"),")\nis set to (0.5, 0.5). This causes an equal amount to be clipped away from left / right or top / bottom."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Cover: {\n    texture: {resizeMode: {type: 'cover', w: 200, h: 200, clipY: 0},\n      type: lng.textures.ImageTexture, src: 'image.png'}\n}\n")),(0,a.kt)("h3",{id:"contain"},"Contain"),(0,a.kt)("p",null,"Using the ",(0,a.kt)("inlineCode",{parentName:"p"},"contain")," resize mode, you can fit an image in a specific rectangular area."),(0,a.kt)("p",null,"One axis will fit to the specified size, while the other will be less than specified. To properly align the texture within the area, use a ",(0,a.kt)("em",{parentName:"p"},"wrapper")," element as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Wrapper: {\n    rect: true, w: 200, h: 200, color: 0xFFAAAAAA,\n    Contain: {\n        x: w=>w/2, y: h=>h/2, mount: 0.5,\n        texture: {type: lng.textures.ImageTexture, src: 'image.png',\n          resizeMode: {type: 'contain', w: 200, h: 200}}\n    }\n}\n")),(0,a.kt)("h2",{id:"live-demo"},"Live Demo"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"class TextureDemo extends lng.Application {\n    static _template() {\n        return {\n            MyTexture: {\n                x: 200,\n                y: 250,\n                texture: {type: lng.textures.ImageTexture, src: '/Lightning/img/LngDocs_LilLightningIdle.png'},\n                transitions: {\n                    'texture.x': {duration: 4}\n                }\n            },\n            Wrapper: {\n                rect: true, w: 200, h: 200, color: 0xFFAAAAAA,\n                Contain: {\n                    x: w=>w/2, y: h=>h/2, mount: 0.5,\n                    texture: {type: lng.textures.ImageTexture, src: '/Lightning/img/LngDocs_LilLightningIdle.png', resizeMode: {type: 'contain', w: 200, h: 200}}\n                }\n            },\n            Cover: {\n                x: 200, y: 0,\n                texture: {type: lng.textures.ImageTexture, src: '/Lightning/img/LngDocs_LilLightningIdle.png', resizeMode: {type: 'cover', w: 200, h: 200, clipY: 0}}\n            }\n        }\n    };\n    \n    _init() {\n        const myTexture = this.tag(\"MyTexture\");\n        myTexture.transition('texture.x').on('finish', () => {\n            const current = myTexture.getSmooth('texture.x');\n            myTexture.setSmooth('texture.x', current ? 0 : 50);\n        })\n        myTexture.setSmooth('texture.x', 50); \n    }\n}\n\nconst options = {stage: {w: window.innerWidth, h: window.innerHeight, useImageWorker: false}};\nconst App = new TextureDemo(options);\ndocument.body.appendChild(App.stage.getCanvas());\n")))}m.isMDXComponent=!0}}]);