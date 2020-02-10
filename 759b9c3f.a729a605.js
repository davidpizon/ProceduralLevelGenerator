(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{145:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return s})),o.d(t,"metadata",(function(){return i})),o.d(t,"rightToc",(function(){return l})),o.d(t,"default",(function(){return b}));var r=o(1),a=o(9),n=(o(0),o(168)),s={id:"configFormat",title:"Config format",sidebar_label:"Config format"},i={id:"configFormat",title:"Config format",description:"Config files are used when working with the GUI. They should cover most of the API of the C# library. They sometimes even support features that are not directly possible with the API.\r",source:"@site/docs\\configFormat.md",permalink:"/ProceduralLevelGenerator/docs/next/configFormat",editUrl:"https://github.com/OndrejNepozitek/ProceduralLevelGenerator/tree/docusaurus/docs/configFormat.md",version:"next",sidebar_label:"Config format",sidebar:"someSidebar",previous:{title:"GUI",permalink:"/ProceduralLevelGenerator/docs/next/gui"}},l=[{value:"Sections",id:"sections",children:[{value:"<code>roomsRange</code> (required)",id:"roomsrange-required",children:[]},{value:"<code>passages</code> (required)",id:"passages-required",children:[]},{value:"<code>rooms</code> (optional)",id:"rooms-optional",children:[]},{value:"<code>defaultRoomShapes</code> (optional)",id:"defaultroomshapes-optional",children:[]},{value:"<code>corridors</code> (optional)",id:"corridors-optional",children:[]}]},{value:"Misc",id:"misc",children:[{value:"roomShapesModel",id:"roomshapesmodel",children:[]}]}],c={rightToc:l};function b(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Config files are used when working with the GUI. They should cover most of the API of the C# library. They sometimes even support features that are not directly possible with the API."),Object(n.b)("h1",{id:"reference"},"Reference"),Object(n.b)("h2",{id:"sections"},"Sections"),Object(n.b)("p",null,"Bellow you can find a list of all sections that can be used in config files. The order of sections is not important."),Object(n.b)("h3",{id:"roomsrange-required"},Object(n.b)("inlineCode",{parentName:"h3"},"roomsRange")," (required)"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"roomsRange:\n  from: # int, required\n  to: # int, required\n")),Object(n.b)("p",null,"This section describe what rooms should be added to the map description. ",Object(n.b)("em",{parentName:"p"},"to")," must be greater than ",Object(n.b)("em",{parentName:"p"},"from")," - that mean that there must always be at least one room in the map description."),Object(n.b)("p",null,"For example:"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"roomsRange:\n  from: 1      \n  to: 10\n")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"passages-required"},Object(n.b)("inlineCode",{parentName:"h3"},"passages")," (required)"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"passages:\n  - # [int, int]   \n")),Object(n.b)("p",null,"This section describes passages between pairs of rooms. Map description represents an undirected graph so both ",Object(n.b)("inlineCode",{parentName:"p"},"[x, y]")," and ",Object(n.b)("inlineCode",{parentName:"p"},"[y, x]")," represent the same passage. Every passage can be added at most once."),Object(n.b)("p",null,"Rooms together with passages must form a ",Object(n.b)("strong",{parentName:"p"},"connected graph"),". That means that there must be a path between every pair of rooms."),Object(n.b)("p",null,"For example:"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"passages:\n  - [1, 2]\n  - [2, 5] \n")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Note"),": Passages are described as ",Object(n.b)("em",{parentName:"p"},"yaml")," arrays suggesting that there could be more than two elements. But the parser expects every such array to contain ",Object(n.b)("strong",{parentName:"p"},"exactly")," two elements and will throw an exception otherwise."),Object(n.b)("hr",null),Object(n.b)("h3",{id:"rooms-optional"},Object(n.b)("inlineCode",{parentName:"h3"},"rooms")," (optional)"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"rooms:\n  [array of room numbers]:\n    roomShapes: # roomShapesModel, optional - see below\n")),Object(n.b)("p",null,"This section describes properties of individual rooms. It overrides default settings."),Object(n.b)("p",null,"For example:"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"rooms:\n  [8]:\n    roomShapes:\n      -\n        setName: bossRooms\n        roomDescriptionName: bossRoom1\n        scale: [2,2]\n  [1,2,3]:\n    roomShapes:\n      -\n        setName: basicRoom\n        roomDescriptionName: basicRooms\n")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Note:")," This section is ",Object(n.b)("strong",{parentName:"p"},"required")," if defaults are not set."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Typical usage:"),"\nWhen all but one room should have common settings. Settings of that one special room can then be overriden in this section. See the ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/ProceduralLevelGenerator/docs/next/differentShapesMapDescription"}),"different shapes for some rooms")," documentation."),Object(n.b)("hr",null),Object(n.b)("h3",{id:"defaultroomshapes-optional"},Object(n.b)("inlineCode",{parentName:"h3"},"defaultRoomShapes")," (optional)"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"defaultRoomShapes: # [roomShapesModel - see below]\n")),Object(n.b)("p",null,"This section describes default room shapes to be used by all rooms. Values from this section are used only when they are not overriden in the ",Object(n.b)("em",{parentName:"p"},"rooms")," section."),Object(n.b)("p",null,"For example:"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"defaultRoomShapes:\n  -\n    setName: rectangles\n    roomDescriptionName: square\n    rotate: false\n  -\n    setName: otherShapes\n")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Note:")," This section is ",Object(n.b)("strong",{parentName:"p"},"required")," to be non empty if not all rooms have their room shapes described in the ",Object(n.b)("em",{parentName:"p"},"rooms")," section."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Typical usage:")," When there are many rooms that should use the same room shapes. Special rooms can then override defaults in the ",Object(n.b)("em",{parentName:"p"},"rooms")," section."),Object(n.b)("h3",{id:"corridors-optional"},Object(n.b)("inlineCode",{parentName:"h3"},"corridors")," (optional)"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"corridors:\n  enable: # bool, optional, default true\n  offsets: # [positive int], required if enabled\n  corridorShapes: # [roomShapesModel - see below], required if enabled\n")),Object(n.b)("p",null,"This section describes whether we want to add corridors between rooms. And if so, it lets us set them up."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"enable"),": Whether we want to enable corridors."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"offsets"),": What should be the distance between neighbouring non-corridor rooms. It would be often only a single number - the length of the corridor shape. But it is also possible to have multiple corridor shapes and thus multiple offsets. (See the Corridors tutorial for details about why is this field needed.)"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"corridorShapes"),": Room shapes that we want to use for our corridors.")),Object(n.b)("p",null,"For example:"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"corridors:\n  enable: true\n  offsets: [1]\n  corridorShapes:\n    -\n      setName: tutorial_corridors\n")),Object(n.b)("h2",{id:"misc"},"Misc"),Object(n.b)("h3",{id:"roomshapesmodel"},"roomShapesModel"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"setName: # string, optional\nroomDescriptionName: # string, optional\nrotate: # bool, optional\nprobability: # double, optional\nnormalizeProbabilities: # bool, optional\nscale: # [positive int, positive int], optional\n")),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"setName: basicSet\nroomDescriptionName: square\nrotate: false\nprobability: 1.2\nnormalizeProbabilities: true\nscale: [2,2]\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"setName"),": Name of the set when having a room shapes set in a different file. Defaults to ",Object(n.b)("em",{parentName:"li"},"custom"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"roomDescriptionName"),": Name of the room description to be used. Defaults to all room descriptions in the set."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"rotate"),": Whether room shapes should be rotated. Defaults to ",Object(n.b)("em",{parentName:"li"},"true"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"probability"),": Probability of choosing the room shape when randomly perturbing shapes. Defaults to ",Object(n.b)("em",{parentName:"li"},"1"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"normalizeProbabilities"),": Whether probabilities should be normalized when rotating shapes. That means that if a room shape has ",Object(n.b)("em",{parentName:"li"},"4")," different rotations the probability of each such rotation will be equal to ",Object(n.b)("em",{parentName:"li"},"probability / 4"),". Defaults to ",Object(n.b)("em",{parentName:"li"},"true"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"scale"),": Whether room shapes should be scaled. Defaults to ",Object(n.b)("em",{parentName:"li"},"[1,1]"),".")))}b.isMDXComponent=!0},168:function(e,t,o){"use strict";o.d(t,"a",(function(){return p})),o.d(t,"b",(function(){return d}));var r=o(0),a=o.n(r);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=a.a.createContext({}),b=function(e){var t=a.a.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i({},t,{},e)),o},p=function(e){var t=b(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=b(o),u=r,d=p["".concat(s,".").concat(u)]||p[u]||m[u]||n;return o?a.a.createElement(d,i({ref:t},c,{components:o})):a.a.createElement(d,i({ref:t},c))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,s=new Array(n);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<n;c++)s[c]=o[c];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,o)}u.displayName="MDXCreateElement"}}]);