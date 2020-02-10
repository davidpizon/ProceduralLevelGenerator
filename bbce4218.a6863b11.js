(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{153:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(9),o=(n(0),n(168)),i=n(169),s=n(174),c={id:"differentShapesMapDescription",title:"Different shapes",sidebar_label:"Different shapes"},l={id:"version-1.0.6/differentShapesMapDescription",title:"Different shapes",description:'import useBaseUrl from "@docusaurus/useBaseUrl";\r',source:"@site/versioned_docs\\version-1.0.6\\differentShapesMapDescription.md",permalink:"/ProceduralLevelGenerator/docs/differentShapesMapDescription",editUrl:"https://github.com/OndrejNepozitek/ProceduralLevelGenerator/tree/docusaurus/versioned_docs/version-1.0.6/differentShapesMapDescription.md",version:"1.0.6",sidebar_label:"Different shapes",sidebar:"version-1.0.6/someSidebar",previous:{title:"Basics",permalink:"/ProceduralLevelGenerator/docs/basicMapDescription"},next:{title:"Different probabilities",permalink:"/ProceduralLevelGenerator/docs/differentProbabilitiesMapDescription"}},p=[{value:"Setup",id:"setup",children:[]},{value:"Adding custom shapes",id:"adding-custom-shapes",children:[{value:"Using C# api",id:"using-c-api",children:[]},{value:"Using config files",id:"using-config-files",children:[]}]},{value:"Summary",id:"summary",children:[]},{value:"Results",id:"results",children:[]}],d={rightToc:p};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"User can easily specify that some rooms should have different shapes from the others. It can be useful for example when you want to set a special rooms shape for your boss room or any other rooms with a special meaning."),Object(o.b)("h2",{id:"setup"},"Setup"),Object(o.b)("p",null,"In this tutorial, we will use a graph with 9 vertices codenamed ",Object(o.b)("em",{parentName:"p"},"Example2"),":"),Object(o.b)("img",{alt:"Graph",src:Object(i.a)("img/graphs/example2.svg")}),";",Object(o.b)("p",null,"We will use basic default shapes for rooms - a square and a rectangle - as they are not important for this tutorial."),Object(o.b)("h2",{id:"adding-custom-shapes"},"Adding custom shapes"),Object(o.b)("p",null,"In this tutorial, we imagine that the room with number 8 is a boss In  room and that we want to make it look special."),Object(o.b)("h3",{id:"using-c-api"},"Using C# api"),Object(o.b)("p",null,"In the code snippet below you can see that we used a special overload of ",Object(o.b)("inlineCode",{parentName:"p"},"AddRoomShapes")," to add a shape for a specific node."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),"var mapDescription = new MapDescription<int>();\n\n// Graph and default shapes are set here.\n\n// Add boss room shape\nvar bossRoom = new RoomDescription(\n  new GridPolygonBuilder()\n    .AddPoint(2, 0).AddPoint(2, 1).AddPoint(1, 1).AddPoint(1, 2)\n    .AddPoint(0, 2).AddPoint(0, 7).AddPoint(1, 7).AddPoint(1, 8)\n    .AddPoint(2, 8).AddPoint(2, 9).AddPoint(7, 9).AddPoint(7, 8)\n    .AddPoint(8, 8).AddPoint(8, 7).AddPoint(9, 7).AddPoint(9, 2)\n    .AddPoint(8, 2).AddPoint(8, 1).AddPoint(7, 1).AddPoint(7, 0)\n  .Build().Scale(new IntVector2(2, 2)),\n  new OverlapMode(1, 1)\n);\n\nmapDescription.AddRoomShapes(8, bossRoom);\n")),Object(o.b)("h3",{id:"using-config-files"},"Using config files"),Object(o.b)("p",null,"In the config file below you can see 2 new things:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"We do not have to always create a file for our room descriptions. If we have a room description that is specific for the current map description, we can put it in the same file under the ",Object(o.b)("inlineCode",{parentName:"li"},"customRoomDescriptionsSet")," section. This set can be referred to with the name ",Object(o.b)("inlineCode",{parentName:"li"},"custom"),". This approach is also good if we want to contain the whole map description in one file."),Object(o.b)("li",{parentName:"ul"},"We created a new section named ",Object(o.b)("inlineCode",{parentName:"li"},"rooms"),". This section is used to define behaviour that is specific for a given node. In our case, we specified that the node ",Object(o.b)("em",{parentName:"li"},"8")," should use our ",Object(o.b)("em",{parentName:"li"},"bossRoom")," shape instead of default room shapes.")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"# Resources/Maps/tutorial_differentShapes.yml\n\n# Rooms and passages are added here.\n\n# Default room shapes are added here.\n\nrooms:\n  [8]:\n    roomShapes:\n      -\n        setName: custom\n        roomDescriptionName: bossRoom\n        scale: [2,2]\n\ncustomRoomDescriptionsSet:\n  roomDescriptions:\n    bossRoom:\n      shape: [\n          [2,0], [2,1], [1,1], [1,2],\n          [0,2], [0,7], [1,7], [1,8],\n          [2,8], [2,9], [7,9], [7,8],\n          [8,8], [8,7], [9,7], [9,2],\n          [8,2], [8,1], [7,1], [7,0]\n      ]\n      doorMode: !OverlapMode\n        cornerDistance: 1\n        doorLength: 1\n")),Object(o.b)("h2",{id:"summary"},"Summary"),Object(o.b)("p",null,"The map description is now ready to be used in a layout generator. You can find the full C# source code ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/OndrejNepozitek/ProceduralLevelGenerator/blob/master/Sandbox/Examples/DifferentShapesExample.cs"}),"here")," and the config files ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/OndrejNepozitek/ProceduralLevelGenerator/tree/master/Resources"}),"here"),"."),Object(o.b)("h2",{id:"results"},"Results"),Object(o.b)(s.a,{cols:2,mdxType:"Gallery"},Object(o.b)(s.b,{src:"img/differentShapes/0.jpg",mdxType:"GalleryImage"}),Object(o.b)(s.b,{src:"img/differentShapes/1.jpg",mdxType:"GalleryImage"}),Object(o.b)(s.b,{src:"img/differentShapes/2.jpg",mdxType:"GalleryImage"}),Object(o.b)(s.b,{src:"img/differentShapes/3.jpg",mdxType:"GalleryImage"})),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," Click on images to see them in a full size."))}u.isMDXComponent=!0},168:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},d=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,b=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return n?a.a.createElement(b,s({ref:t},l,{components:n})):a.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},169:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(173);var r=n(170);function a(e){var t=(Object(r.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},170:function(e,t,n){"use strict";var r=n(0),a=n(48);t.a=function(){return Object(r.useContext)(a.a)}},171:function(e,t,n){var r=n(66),a=n(23);e.exports=function(e,t,n){if(r(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(a(e))}},172:function(e,t,n){var r=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,!"/./"[e](t)}catch(a){}}return!0}},173:function(e,t,n){"use strict";var r=n(17),a=n(34),o=n(171),i="".startsWith;r(r.P+r.F*n(172)("startsWith"),"String",{startsWith:function(e){var t=o(this,e,"startsWith"),n=a(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),r=String(e);return i?i.call(t,r,n):t.slice(n,n+r.length)===r}})},174:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return c}));var r=n(0),a=n.n(r),o=n(169),i=function(e){return a.a.createElement("div",{style:{display:"inline-block",margin:2,overflow:"hidden",position:"relative",width:"calc("+100/e.cols+"% - 4px)"}},e.children)},s=function(e){return a.a.createElement("div",{style:{fontSize:"0px"}},a.a.Children.map(e.children,(function(t){return a.a.cloneElement(t,{cols:e.cols||4})})))},c=function(e){return a.a.createElement("a",{href:Object(o.a)(e.src),target:"_blank"},a.a.createElement(i,{cols:e.cols},a.a.createElement("img",{src:Object(o.a)(e.src),alt:"result"})))}}}]);