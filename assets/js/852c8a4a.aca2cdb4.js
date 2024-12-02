"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7107],{1983:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>r,contentTitle:()=>m,default:()=>d,frontMatter:()=>i,metadata:()=>t,toc:()=>c});var a=n(4848),l=n(8453);const i={slug:"boj1026",title:"[BOJ][JS] 1026 \ubcf4\ubb3c",sidebar_position:4},m=void 0,t={id:"likelion-study/algorithm/greedy/03-1026",title:"[BOJ][JS] 1026 \ubcf4\ubb3c",description:"[BOJ] 1026 \ubcf4\ubb3c",source:"@site/docs/likelion-study/algorithm/greedy/03-1026.md",sourceDirName:"likelion-study/algorithm/greedy",slug:"/likelion-study/algorithm/greedy/boj1026",permalink:"/docs/likelion-study/algorithm/greedy/boj1026",draft:!1,unlisted:!1,editUrl:"https://github.com/55yong/55yong.github.io/tree/main/packages/create-docusaurus/templates/shared/docs/likelion-study/algorithm/greedy/03-1026.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{slug:"boj1026",title:"[BOJ][JS] 1026 \ubcf4\ubb3c",sidebar_position:4},sidebar:"likelionStudy",previous:{title:"[BOJ][JS] 11047 \ub3d9\uc804 0",permalink:"/docs/likelion-study/algorithm/greedy/boj11047"},next:{title:"[BOJ][JS] 13305 \uc8fc\uc720\uc18c",permalink:"/docs/likelion-study/algorithm/greedy/boj13305"}},r={},c=[{value:"[BOJ] 1026 \ubcf4\ubb3c",id:"boj-1026-\ubcf4\ubb3c",level:2},{value:"\ubb38\uc81c",id:"\ubb38\uc81c",level:3},{value:"\uc785\ub825",id:"\uc785\ub825",level:3},{value:"\ucd9c\ub825",id:"\ucd9c\ub825",level:3},{value:"\ubb38\uc81c \ud480\uc774",id:"\ubb38\uc81c-\ud480\uc774",level:3}];function h(s){const e={a:"a",annotation:"annotation",br:"br",code:"code",h2:"h2",h3:"h3",hr:"hr",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",...(0,l.R)(),...s.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"boj-1026-\ubcf4\ubb3c",children:(0,a.jsx)(e.a,{href:"https://www.acmicpc.net/problem/1026",children:"[BOJ] 1026 \ubcf4\ubb3c"})}),"\n",(0,a.jsx)(e.p,{children:"2024-10-15"}),"\n",(0,a.jsxs)(e.p,{children:["\uc2dc\uac04 \uc81c\ud55c : 2\ucd08",(0,a.jsx)(e.br,{}),"\n","\uba54\ubaa8\ub9ac \uc81c\ud55c : 128MB"]}),"\n",(0,a.jsx)(e.hr,{}),"\n",(0,a.jsx)(e.h3,{id:"\ubb38\uc81c",children:"\ubb38\uc81c"}),"\n",(0,a.jsx)(e.p,{children:"\uc61b\ub0a0 \uc61b\uc801\uc5d0 \uc218\ud559\uc774 \ud56d\uc0c1 \ud070 \uace8\uce6b\uac70\ub9ac\uc600\ub358 \ub098\ub77c\uac00 \uc788\uc5c8\ub2e4. \uc774 \ub098\ub77c\uc758 \uad6d\uc655 \uae40\uc9c0\ubbfc\uc740 \ub2e4\uc74c\uacfc \uac19\uc740 \ubb38\uc81c\ub97c \ub0b4\uace0 \ud070 \uc0c1\uae08\uc744 \uac78\uc5c8\ub2e4."}),"\n",(0,a.jsx)(e.p,{children:"\uae38\uc774\uac00 N\uc778 \uc815\uc218 \ubc30\uc5f4 A\uc640 B\uac00 \uc788\ub2e4. \ub2e4\uc74c\uacfc \uac19\uc774 \ud568\uc218 S\ub97c \uc815\uc758\ud558\uc790."}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mi,{children:"S"}),(0,a.jsx)(e.mo,{children:"="}),(0,a.jsx)(e.mi,{children:"A"}),(0,a.jsx)(e.mo,{stretchy:"false",children:"["}),(0,a.jsx)(e.mn,{children:"0"}),(0,a.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,a.jsx)(e.mo,{children:"\xd7"}),(0,a.jsx)(e.mi,{children:"B"}),(0,a.jsx)(e.mo,{stretchy:"false",children:"["}),(0,a.jsx)(e.mn,{children:"0"}),(0,a.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,a.jsx)(e.mo,{children:"+"}),(0,a.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,a.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,a.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,a.jsx)(e.mo,{children:"+"}),(0,a.jsx)(e.mi,{children:"A"}),(0,a.jsx)(e.mo,{stretchy:"false",children:"["}),(0,a.jsx)(e.mi,{children:"N"}),(0,a.jsx)(e.mo,{children:"\u2212"}),(0,a.jsx)(e.mn,{children:"1"}),(0,a.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,a.jsx)(e.mo,{children:"\xd7"}),(0,a.jsx)(e.mi,{children:"B"}),(0,a.jsx)(e.mo,{stretchy:"false",children:"["}),(0,a.jsx)(e.mi,{children:"N"}),(0,a.jsx)(e.mo,{children:"\u2212"}),(0,a.jsx)(e.mn,{children:"1"}),(0,a.jsx)(e.mo,{stretchy:"false",children:"]"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"S = A[0] \xd7 B[0] + ... + A[N-1] \xd7 B[N-1]"})]})})}),(0,a.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"S"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(e.span,{className:"mrel",children:"="}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"A"}),(0,a.jsx)(e.span,{className:"mopen",children:"["}),(0,a.jsx)(e.span,{className:"mord",children:"0"}),(0,a.jsx)(e.span,{className:"mclose",children:"]"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(e.span,{className:"mbin",children:"\xd7"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05017em"},children:"B"}),(0,a.jsx)(e.span,{className:"mopen",children:"["}),(0,a.jsx)(e.span,{className:"mord",children:"0"}),(0,a.jsx)(e.span,{className:"mclose",children:"]"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(e.span,{className:"mbin",children:"+"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,a.jsx)(e.span,{className:"mord",children:"..."}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(e.span,{className:"mbin",children:"+"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"A"}),(0,a.jsx)(e.span,{className:"mopen",children:"["}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(e.span,{className:"mord",children:"1"}),(0,a.jsx)(e.span,{className:"mclose",children:"]"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(e.span,{className:"mbin",children:"\xd7"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05017em"},children:"B"}),(0,a.jsx)(e.span,{className:"mopen",children:"["}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(e.span,{className:"mord",children:"1"}),(0,a.jsx)(e.span,{className:"mclose",children:"]"})]})]})]})}),"\n",(0,a.jsx)(e.p,{children:"S\uc758 \uac12\uc744 \uac00\uc7a5 \uc791\uac8c \ub9cc\ub4e4\uae30 \uc704\ud574 A\uc758 \uc218\ub97c \uc7ac\ubc30\uc5f4\ud558\uc790. \ub2e8, B\uc5d0 \uc788\ub294 \uc218\ub294 \uc7ac\ubc30\uc5f4\ud558\uba74 \uc548 \ub41c\ub2e4."}),"\n",(0,a.jsx)(e.p,{children:"S\uc758 \ucd5c\uc19f\uac12\uc744 \ucd9c\ub825\ud558\ub294 \ud504\ub85c\uadf8\ub7a8\uc744 \uc791\uc131\ud558\uc2dc\uc624."}),"\n",(0,a.jsx)(e.h3,{id:"\uc785\ub825",children:"\uc785\ub825"}),"\n",(0,a.jsx)(e.p,{children:"\uccab\uc9f8 \uc904\uc5d0 N\uc774 \uc8fc\uc5b4\uc9c4\ub2e4. \ub458\uc9f8 \uc904\uc5d0\ub294 A\uc5d0 \uc788\ub294 N\uac1c\uc758 \uc218\uac00 \uc21c\uc11c\ub300\ub85c \uc8fc\uc5b4\uc9c0\uace0, \uc14b\uc9f8 \uc904\uc5d0\ub294 B\uc5d0 \uc788\ub294 \uc218\uac00 \uc21c\uc11c\ub300\ub85c \uc8fc\uc5b4\uc9c4\ub2e4. N\uc740 50\ubcf4\ub2e4 \uc791\uac70\ub098 \uac19\uc740 \uc790\uc5f0\uc218\uc774\uace0, A\uc640 B\uc758 \uac01 \uc6d0\uc18c\ub294 100\ubcf4\ub2e4 \uc791\uac70\ub098 \uac19\uc740 \uc74c\uc774 \uc544\ub2cc \uc815\uc218\uc774\ub2e4."}),"\n",(0,a.jsx)(e.h3,{id:"\ucd9c\ub825",children:"\ucd9c\ub825"}),"\n",(0,a.jsx)(e.p,{children:"\uccab\uc9f8 \uc904\uc5d0 S\uc758 \ucd5c\uc19f\uac12\uc744 \ucd9c\ub825\ud55c\ub2e4."}),"\n",(0,a.jsx)(e.h3,{id:"\ubb38\uc81c-\ud480\uc774",children:"\ubb38\uc81c \ud480\uc774"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:'const filepath =\n  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";\nconst input = require("fs")\n  .readFileSync(filepath)\n  .toString()\n  .trim()\n  .split("\\n");\n\nconst N = input[0];\nconst A = input[1]\n  .split(" ")\n  .map(Number)\n  .sort((a, b) => a - b)\n  .reverse();\nconst B = input[2]\n  .split(" ")\n  .map(Number)\n  .sort((a, b) => a - b);\nlet S = 0;\n\nfor (let i = 0; i < N; i++) {\n  S += A[i] * B[i];\n}\n\nconsole.log(S);\n'})})]})}function d(s={}){const{wrapper:e}={...(0,l.R)(),...s.components};return e?(0,a.jsx)(e,{...s,children:(0,a.jsx)(h,{...s})}):h(s)}},8453:(s,e,n)=>{n.d(e,{R:()=>m,x:()=>t});var a=n(6540);const l={},i=a.createContext(l);function m(s){const e=a.useContext(i);return a.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function t(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:m(s.components),a.createElement(i.Provider,{value:e},s.children)}}}]);