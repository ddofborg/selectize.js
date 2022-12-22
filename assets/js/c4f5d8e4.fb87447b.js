"use strict";(self.webpackChunkselectize_dev=self.webpackChunkselectize_dev||[]).push([[4195],{6706:(e,t,a)=>{a.d(t,{K:()=>l});var n=a(7462),r=a(7294);function l(e){let{width:t,height:a,x:l,y:i,squares:s,...o}=e;return r.createElement("svg",(0,n.Z)({"aria-hidden":"true"},o),r.createElement("defs",null,r.createElement("pattern",{width:t,height:a,patternUnits:"userSpaceOnUse",x:l,y:i},r.createElement("path",{d:`M.5 ${a}V.5H${t}`,fill:"none"}))),r.createElement("rect",{width:"100%",height:"100%",strokeWidth:0,fill:"url(#)"}),s&&r.createElement("svg",{x:l,y:i,className:"overflow-visible"},s.map((e=>{let[n,l]=e;return r.createElement("rect",{strokeWidth:"0",key:`${n}-${l}`,width:t+1,height:a+1,x:n*t,y:l*a})}))))}},5220:(e,t,a)=>{a.d(t,{h:()=>l});var n=a(7294),r=a(6706);function l(){return n.createElement("div",{className:"absolute inset-0 mx-0 overflow-hidden -z-10 max-w-none"},n.createElement("div",{className:"absolute left-1/2 top-0 ml-[-38rem] h-[25rem] w-[81.25rem]"},n.createElement("div",{className:"absolute inset-0 bg-gradient-to-r from-[#366bb4] to-[#8eb6f1] opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]"},n.createElement(r.K,{width:72,height:64,x:"-12",y:"4",squares:[[4,3],[2,1],[7,3],[10,6],[14,6]],className:"absolute inset-x-0 inset-y-[-50%] h-[200%] w-full skew-y-[-18deg] fill-black/40 stroke-black/50 mix-blend-overlay"})),n.createElement("svg",{viewBox:"0 0 1113 440","aria-hidden":"true",className:"absolute top-0 left-1/2 ml-[-19rem] w-[69.5625rem] fill-white blur-[26px]"},n.createElement("path",{d:"M.016 439.5s-9.5-300 434-300S882.516 20 882.516 20V0h230.004v439.5H.016Z"}))))}},3287:(e,t,a)=>{a.d(t,{M:()=>i});var n=a(7462),r=a(7294),l=a(6010);function i(e){let{as:t="div",className:a,...i}=e;return r.createElement(t,(0,n.Z)({className:(0,l.Z)(a,"content-trap")},i))}},2820:(e,t,a)=>{a.r(t),a.d(t,{default:()=>q});var n=a(7294),r=a(6102),l=a(7462),i=a(6010),s=a(4960),o=a(9376),c=a(3695),m=a(6706),d=a(5220),u=a(3287);const p=[{href:"",name:"Easy to use and customize",description:"Selectize Includes default styles as well as packaged LESS and SCSS sources available for all Bootstrap versions.",icon:"fa-pencil-paintbrush",pattern:{y:16,squares:[[0,1],[1,3]]}},{href:"",name:"Smart Ranking / Multi-Property Searching & Sorting",description:"Want to search an item's title <em>and</em> description? No problem. You can even override the scoring function used for sorting if you want to get crazy.",icon:"fa-rocket",pattern:{y:-6,squares:[[-1,2],[1,3]]}},{href:"",name:"Clean API & Extensible code",description:"Interface & make addons like a boss with a powerfull plugin system.",icon:"fa-laptop-code",pattern:{y:32,squares:[[0,2],[1,4]]}},{href:"",name:"Remote Data Loading",description:"For when you have thousands of options and want them provided by the server as the user types.",icon:"fa-cloud-upload",pattern:{y:120,squares:[[0,1],[1,2],[3,1]]}},{href:"",name:"Keyboard Navigation",description:"Order matters sometimes. Use the <kbd>left</kbd> and <kbd>right</kbd> arrow keys to move between items.",icon:"fa-keyboard",pattern:{y:6,squares:[[-1,2],[1,3]]}},{href:"",name:"Right-to-Left + D\xed\xe5crit\xee\xe7s supported",description:"Great for international environments.",icon:"fa-language",pattern:{y:16,squares:[[0,1],[1,3]]}},{href:"",name:"Item Creation",description:"Allow users to create items on the fly (and it's async friendly; the control locks until you invoke a callback)",icon:"fa-octagon-plus",pattern:{y:8,squares:[[-1,2],[1,3]]}},{href:"",name:"Select & Delete multiple items at once",description:"Hold down <kbd>option</kbd> on Mac or <kbd>ctrl</kbd> on Windows to select more than one item to delete.",icon:"fa-hand-pointer",pattern:{y:12,squares:[[0,2],[1,4]]}}];function g(e){let{feature:t}=e,a=(0,s.c)(0),r=(0,s.c)(0);return n.createElement("div",{onMouseMove:function(e){let{currentTarget:t,clientX:n,clientY:l}=e,{left:i,top:s}=t.getBoundingClientRect();a.set(n-i),r.set(l-s)},className:(0,i.Z)("group relative flex","rounded-2xl","bg-zinc-50","transition-shadow shadow-lg hover:shadow-lg hover:shadow-zinc-900/5")},n.createElement(h,(0,l.Z)({},t.pattern,{mouseX:a,mouseY:r})),n.createElement("div",{className:"absolute inset-0 rounded-2xl ring-1 ring-inset"}),n.createElement("div",{className:"relative px-4 pt-16 pb-4 rounded-2xl"},n.createElement("div",{className:"float-left px-4 pb-4 text--center"},n.createElement(f,{icon:t.icon})),n.createElement(u.M,null,n.createElement("h3",{className:"text-xl text-transparent font-display bg-gradient-to-r from-cyan-500 to-indigo-800 bg-clip-text"},t.name),n.createElement("p",{className:"pt-5 font-sans"},t.description))))}function f(e){let{icon:t}=e;return n.createElement("div",{className:"flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900/5 backdrop-blur-[2px] transition duration-300"},n.createElement("span",{className:(0,i.Z)("icon",t,"fa-duotone","w-7 h-7 transition-colors duration-300 fill-zinc-700/10 stroke-zinc-700 group-hover:stroke-zinc-900","text-sky-500/75")}))}function h(e){let{mouseX:t,mouseY:a,...r}=e,i=o.Y`radial-gradient(180px at ${t}px ${a}px, white, transparent)`,s={maskImage:i,WebkitMaskImage:i};return n.createElement("div",{className:"pointer-events-none"},n.createElement("div",{className:"absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50"},n.createElement(m.K,(0,l.Z)({width:72,height:56,x:"50%",className:"absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5"},r))),n.createElement(c.E.div,{className:"absolute inset-0 rounded-2xl bg-gradient-to-r from-[#d7e6ed] to-[#e0e8f6] opacity-0 transition duration-300 group-hover:opacity-100",style:s}),n.createElement(c.E.div,{className:"absolute inset-0 transition duration-300 opacity-0 rounded-2xl mix-blend-overlay group-hover:opacity-100",style:s},n.createElement(m.K,(0,l.Z)({width:72,height:56,x:"50%",className:"absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70"},r))))}function b(){return n.createElement("section",{className:(0,i.Z)("my-0 p-8 w-full max-w-none relative")},n.createElement(d.h,null),n.createElement("div",{className:"w-full text-center"},n.createElement("h2",{className:"text-4xl text-transparent font-display bg-gradient-to-t from-cyan-500 to-indigo-800 bg-clip-text"},"Features")),n.createElement("div",{className:(0,i.Z)("not-prose grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 sm:grid-cols-2 xl:grid-cols-4")},p.map(((e,t)=>n.createElement(g,{key:t,feature:e})))))}var v=a(9960);const x={primary:"rounded-full bg-sky-300 py-2 px-4 text-sm font-semibold text-slate-900 hover:bg-sky-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300/50 active:bg-sky-500",secondary:"rounded-full bg-slate-800 py-2 px-4 text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 active:text-slate-400"};function y(e){let{variant:t="primary",className:a,href:r,...s}=e;return a=(0,i.Z)(x[t],a),r?n.createElement(v.Z,(0,l.Z)({href:r,className:a},s)):n.createElement("button",(0,l.Z)({className:a},s))}var E=a(6733),k=a(9244),w=a(2110);const N='npm install @selectize/selectize\n--\n<script>\n$(function () {\n  $("select").selectize(options);\n});\n<\/script>',z=[{name:"selectize.js",isActive:!0},{name:"package.json",isActive:!1},{name:"application.js",isActive:!1}];function Z(e){return n.createElement("svg",(0,l.Z)({"aria-hidden":"true",viewBox:"0 0 42 10",fill:"none"},e),n.createElement("circle",{cx:"5",cy:"5",r:"4.5"}),n.createElement("circle",{cx:"21",cy:"5",r:"4.5"}),n.createElement("circle",{cx:"37",cy:"5",r:"4.5"}))}function S(){return n.createElement("div",{className:"overflow-hidden bg-slate-900 dark:-mb-32 dark:mt-[-4.5rem] dark:pb-32 dark:pt-[4.5rem] dark:lg:mt-[-4.75rem] dark:lg:pt-[4.75rem]"},n.createElement("div",{className:"py-16 sm:px-2 lg:relative lg:py-20 lg:px-0"},n.createElement("div",{className:"grid items-center grid-cols-1 px-4 mx-auto gap-y-16 gap-x-8 lg:grid-cols-2 lg:px-8 xl:gap-x-16 xl:px-12"},n.createElement("div",{className:"relative z-10 md:text-center lg:text-left"},n.createElement("img",{className:"absolute -mb-56 opacity-50 bottom-full right-full -mr-72",src:k.Z,alt:"",width:530,height:530}),n.createElement("div",{className:"relative"},n.createElement("p",{className:"inline text-5xl tracking-tight text-transparent bg-gradient-to-r from-indigo-200 via-cyan-400 to-indigo-200 bg-clip-text font-display"},"Selectize"),n.createElement("p",{className:"mt-3 font-sans text-2xl tracking-tight text-slate-400"},"Selectize is the hybrid of a textbox and <select> box. It's jQuery-based and it's useful for tagging, contact lists, country selectors, and so on."),n.createElement("div",{className:"flex gap-4 mt-8 md:justify-center lg:justify-start"},n.createElement(y,{href:"/docs/intro"},"Get started"),n.createElement(y,{href:"https://github.com/selectize/selectize.js",variant:"secondary"},"View on GitHub")))),n.createElement("div",{className:"relative lg:static xl:pl-10"},n.createElement("div",{className:"absolute inset-x-[-50vw] -top-32 -bottom-48 [mask-image:linear-gradient(transparent,white,white)] dark:[mask-image:linear-gradient(transparent,white,transparent)] lg:left-[calc(50%+14rem)] lg:right-0 lg:-top-32 lg:-bottom-32 lg:[mask-image:none] lg:dark:[mask-image:linear-gradient(white,white,transparent)]"},n.createElement(E.M,{className:"absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 lg:translate-y-[-60%]"})),n.createElement("div",{className:"relative"},n.createElement("img",{className:"absolute -top-64 -right-64",src:k.Z,alt:"",width:530,height:530}),n.createElement("img",{className:"absolute -bottom-40 -right-44",src:w.Z,alt:"",width:567,height:567}),n.createElement("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-tr from-cyan-300 via-cyan-300/70 to-indigo-300 opacity-10 blur-lg"}),n.createElement("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-tr from-cyan-300 via-cyan-300/70 to-indigo-300 opacity-10"}),n.createElement("div",{className:"relative rounded-2xl bg-[#0A101F]/80 ring-1 ring-white/10 backdrop-blur"},n.createElement("div",{className:"absolute h-px -top-px left-20 right-11 bg-gradient-to-r from-cyan-300/0 via-cyan-300/70 to-cyan-300/0"}),n.createElement("div",{className:"absolute h-px -bottom-px left-11 right-20 bg-gradient-to-r from-indigo-400/0 via-indigo-400 to-indigo-400/0"}),n.createElement("div",{className:"pt-4 pl-4"},n.createElement(Z,{className:"h-2.5 w-auto stroke-slate-500/30"}),n.createElement("div",{className:"flex mt-4 space-x-2 text-xs"},z.map((e=>n.createElement("div",{key:e.name,className:(0,i.Z)("flex h-6 rounded-full",e.isActive?"bg-gradient-to-r from-cyan-400/30 via-cyan-400 to-indigo-400/30 p-px font-medium text-indigo-300":"text-slate-500")},n.createElement("div",{className:(0,i.Z)("flex items-center rounded-full px-2.5",e.isActive&&"bg-slate-800")},e.name))))),n.createElement("div",{className:"flex items-start px-1 mt-6 text-sm"},n.createElement("div",{"aria-hidden":"true",className:"pr-4 font-mono border-r select-none border-slate-300/5 text-slate-600"},Array.from({length:N.split("\n").length}).map(((e,t)=>n.createElement(n.Fragment,{key:t},(t+1).toString().padStart(2,"0"),n.createElement("br",null))))),n.createElement("pre",{className:(0,i.Z)("hero-code flex overflow-x-auto p-0 m-0 pb-b-4 w-full")},n.createElement("code",null,N))))))))))}function q(){return n.createElement(r.Z,{title:"",description:"Documentation and demos for the selectize.js library"},n.createElement(S,null),n.createElement("main",null,n.createElement(b,null)))}}}]);