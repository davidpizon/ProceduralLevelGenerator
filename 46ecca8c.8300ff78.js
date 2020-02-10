(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(9),i=(n(0),n(168)),o={id:"benchmarks",title:"Benchmarks",sidebar_label:"Benchmarks"},c={id:"benchmarks",title:"Benchmarks",description:"*You can find the most recent implementation with a detailed api documentation on [github](https://github.com/OndrejNepozitek/MapGeneration/tree/master/MapGeneration/Benchmarks).*\r",source:"@site/docs\\benchmarks.md",permalink:"/ProceduralLevelGenerator/docs/next/benchmarks",editUrl:"https://github.com/OndrejNepozitek/ProceduralLevelGenerator/tree/docusaurus/docs/benchmarks.md",version:"next",sidebar_label:"Benchmarks"},s=[{value:"<code>Benchmark</code> class",id:"benchmark-class",children:[{value:"Benchmarking a single map description",id:"benchmarking-a-single-map-description",children:[]},{value:"Benchmarking multiple map descriptions",id:"benchmarking-multiple-map-descriptions",children:[]}]},{value:"<code>BenchmarkScenario</code> class",id:"benchmarkscenario-class",children:[]},{value:"Tips and tricks",id:"tips-and-tricks",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"You can find the most recent implementation with a detailed api documentation on ",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/OndrejNepozitek/MapGeneration/tree/master/MapGeneration/Benchmarks"}),"github"),".")),Object(i.b)("p",null,"When working with probabilistic algorithms, it is often hard to say if recent changes made it converge faster or not. One should run the algorithm at least tens of times to get a meaningful result and this process can be really time consuming if not automated."),Object(i.b)("h2",{id:"benchmark-class"},Object(i.b)("inlineCode",{parentName:"h2"},"Benchmark")," class"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Benchmark")," class was implemented to make the process of benchmarking the algorithm as easy as possible. It provides various overloads of the ",Object(i.b)("inlineCode",{parentName:"p"},"Execute()")," method that run the benchmarks."),Object(i.b)("h3",{id:"benchmarking-a-single-map-description"},"Benchmarking a single map description"),Object(i.b)("p",null,"The first version is the simplest one. It lets you specify a generator and a single map description and run the algorithm for a given number of times. The method returns ",Object(i.b)("inlineCode",{parentName:"p"},"BenchmarkResult")," class and you must process the information yourself."),Object(i.b)("p",null,"The following code demonstrates how to start a benchmark that will run 20 times and in each run call the generator to generate 5 layouts:"),Object(i.b)("p",null,"(generic and constructor parameters were omitted for simplicity)"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-C#"}),'var benchmark = new Benchmark();\nvar layoutGenerator = new LayoutGenerator();\nvar mapDescription = new MapDescription();\n\n// Run the benchmark 20 times, generate 5 layouts in each run\nvar result = benchmark.Execute(layoutGenerator, "Basic benchmark", mapDescription, repeats: 20, numberOfLayouts: 5);\n')),Object(i.b)("h3",{id:"benchmarking-multiple-map-descriptions"},"Benchmarking multiple map descriptions"),Object(i.b)("p",null,"When optimizing a layout generator, one should try to run the algorithm on multiple different map descriptions. It often happens that optimizing for only one map description results in making others run significantly worse. And here comes into play the second version of the ",Object(i.b)("inlineCode",{parentName:"p"},"Execute()")," method. It lets you run the benchmark on multiple map descriptions and also outputs the result to the console (and a given TextWriter if specified)."),Object(i.b)("p",null,"The following code demonstrates how to start a benchmark that will make 20 runs on both given map descriptions:"),Object(i.b)("p",null,"(generic and constructor parameters were omitted for simplicity)"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-C#"}),'var benchmark = new Benchmark();\nvar layoutGenerator = new LayoutGenerator();\n\nvar mapDescription1 = new MapDescription();\nvar mapDescription2 = new MapDescription();\n\nvar mapDescriptions = new List<Tuple<string, MapDescription>>() {\n    Tuple.Create("First map description", mapDescription1),\n    Tuple.Create("Second map description", mapDescription2)\n};\n\nvar result = benchmark.Execute(layoutGenerator, "Benchmark of 2 map descriptions", mapDescriptions, repeats: 20, numberOfLayouts: 5);\n')),Object(i.b)("h2",{id:"benchmarkscenario-class"},Object(i.b)("inlineCode",{parentName:"h2"},"BenchmarkScenario")," class"),Object(i.b)("p",null,"TODO"),Object(i.b)("p",null,"In an ideal world, parameters of a generator would be indepenent. It would suffice to fix all but one parameter, optimize the free one and then move to another one. In the real world, parameters influence one another. One could use an algorithm like CMA-ES to optimize the vector of all available parameters but it would probably be very slow as the layout generation takes some time."),Object(i.b)("h2",{id:"tips-and-tricks"},"Tips and tricks"),Object(i.b)("p",null,"All overloads of the ",Object(i.b)("inlineCode",{parentName:"p"},"Execute()")," accept an optional ",Object(i.b)("inlineCode",{parentName:"p"},"debugWriter")," parameter that, if present, makes the benchmark output (sometimes) useful debug information to a given ",Object(i.b)("inlineCode",{parentName:"p"},"TextWriter"),"."))}p.isMDXComponent=!0},168:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},m=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(n),b=r,d=m["".concat(o,".").concat(b)]||m[b]||u[b]||i;return n?a.a.createElement(d,c({ref:t},l,{components:n})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);