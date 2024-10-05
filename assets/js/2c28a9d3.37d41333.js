"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4701],{1088:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var i=s(4848),t=s(8453);const l={slug:"boj15565",title:"[BOJ][JS] 15565 \uadc0\uc5ec\uc6b4 \ub77c\uc774\uc5b8",sidebar_position:3},a=void 0,r={id:"likelion-study/algorithm/slidingwindow/15565",title:"[BOJ][JS] 15565 \uadc0\uc5ec\uc6b4 \ub77c\uc774\uc5b8",description:"[BOJ] 15565 \uadc0\uc5ec\uc6b4 \ub77c\uc774\uc5b8",source:"@site/docs/likelion-study/algorithm/slidingwindow/15565.md",sourceDirName:"likelion-study/algorithm/slidingwindow",slug:"/likelion-study/algorithm/slidingwindow/boj15565",permalink:"/docs/likelion-study/algorithm/slidingwindow/boj15565",draft:!1,unlisted:!1,editUrl:"https://github.com/55yong/55yong.github.io/tree/main/packages/create-docusaurus/templates/shared/docs/likelion-study/algorithm/slidingwindow/15565.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{slug:"boj15565",title:"[BOJ][JS] 15565 \uadc0\uc5ec\uc6b4 \ub77c\uc774\uc5b8",sidebar_position:3},sidebar:"likelionStudy",previous:{title:"\uc2ac\ub77c\uc774\ub529 \uc708\ub3c4\uc6b0",permalink:"/docs/category/\uc2ac\ub77c\uc774\ub529-\uc708\ub3c4\uc6b0-1"},next:{title:"[BOJ][JS] 12891 DNA \ube44\ubc00\ubc88\ud638",permalink:"/docs/likelion-study/algorithm/slidingwindow/boj12891"}},o={},c=[{value:"[BOJ] 15565 \uadc0\uc5ec\uc6b4 \ub77c\uc774\uc5b8",id:"boj-15565-\uadc0\uc5ec\uc6b4-\ub77c\uc774\uc5b8",level:2},{value:"\ubb38\uc81c",id:"\ubb38\uc81c",level:3},{value:"\uc785\ub825",id:"\uc785\ub825",level:3},{value:"\ucd9c\ub825",id:"\ucd9c\ub825",level:3},{value:"\ubb38\uc81c \ud480\uc774",id:"\ubb38\uc81c-\ud480\uc774",level:3}];function d(n){const e={a:"a",annotation:"annotation",br:"br",code:"code",h2:"h2",h3:"h3",hr:"hr",math:"math",mn:"mn",mrow:"mrow",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",...(0,t.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"boj-15565-\uadc0\uc5ec\uc6b4-\ub77c\uc774\uc5b8",children:(0,i.jsx)(e.a,{href:"https://www.acmicpc.net/problem/15565",children:"[BOJ] 15565 \uadc0\uc5ec\uc6b4 \ub77c\uc774\uc5b8"})}),"\n",(0,i.jsx)(e.p,{children:"2024-10-03"}),"\n",(0,i.jsxs)(e.p,{children:["\uc2dc\uac04 \uc81c\ud55c : 1\ucd08",(0,i.jsx)(e.br,{}),"\n","\uba54\ubaa8\ub9ac \uc81c\ud55c : 256MB"]}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.h3,{id:"\ubb38\uc81c",children:"\ubb38\uc81c"}),"\n",(0,i.jsx)(e.p,{children:"\uafc0\uadc0 \ub77c\uc774\uc5b8 \uc778\ud615\uacfc, \ub9c8\ucc2c\uac00\uc9c0\ub85c \uafc0\uadc0\uc778 \uc5b4\ud53c\uce58 \uc778\ud615\uc774 N\uac1c \uc77c\ub82c\ub85c \ub193\uc5ec \uc788\ub2e4. \ub77c\uc774\uc5b8 \uc778\ud615\uc740 1, \uc5b4\ud53c\uce58 \uc778\ud615\uc740 2\ub85c \ud45c\ud604\ud558\uc790. \ub77c\uc774\uc5b8 \uc778\ud615\uc774 K\uac1c \uc774\uc0c1 \uc788\ub294 \uac00\uc7a5 \uc791\uc740 \uc5f0\uc18d\ub41c \uc778\ud615\ub4e4\uc758 \uc9d1\ud569\uc758 \ud06c\uae30\ub97c \uad6c\ud558\uc5ec\ub77c."}),"\n",(0,i.jsx)(e.h3,{id:"\uc785\ub825",children:"\uc785\ub825"}),"\n",(0,i.jsxs)(e.p,{children:["\uccab \uc904\uc5d0 N\uacfc K\uac00 \uc8fc\uc5b4\uc9c4\ub2e4. (1\u2009\u2264\u2009K\u2009\u2264\u2009N\u2009\u2264\u2009",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mn,{children:"1"}),(0,i.jsxs)(e.msup,{children:[(0,i.jsx)(e.mn,{children:"0"}),(0,i.jsx)(e.mn,{children:"6"})]})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"10^6"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.8141em"}}),(0,i.jsx)(e.span,{className:"mord",children:"1"}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{className:"mord",children:"0"}),(0,i.jsx)(e.span,{className:"msupsub",children:(0,i.jsx)(e.span,{className:"vlist-t",children:(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,i.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(e.span,{className:"mord mtight",children:"6"})})]})})})})})]})]})})]}),")"]}),"\n",(0,i.jsx)(e.p,{children:"\ub458\uc9f8 \uc904\uc5d0 N\uac1c\uc758 \uc778\ud615\uc758 \uc815\ubcf4\uac00 \uc8fc\uc5b4\uc9c4\ub2e4. (1 \ub610\ub294 2)"}),"\n",(0,i.jsx)(e.h3,{id:"\ucd9c\ub825",children:"\ucd9c\ub825"}),"\n",(0,i.jsx)(e.p,{children:"K\uac1c \uc774\uc0c1\uc758 \ub77c\uc774\uc5b8 \uc778\ud615\uc744 \ud3ec\ud568\ud558\ub294 \uac00\uc7a5 \uc791\uc740 \uc5f0\uc18d\ub41c \uc778\ud615\ub4e4\uc758 \uc9d1\ud569\uc758 \ud06c\uae30\ub97c \ucd9c\ub825\ud55c\ub2e4. \uadf8\ub7f0 \uc9d1\ud569\uc774 \uc5c6\ub2e4\uba74 -1\uc744 \ucd9c\ub825\ud55c\ub2e4."}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.h3,{id:"\ubb38\uc81c-\ud480\uc774",children:"\ubb38\uc81c \ud480\uc774"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:'const filepath =\n  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";\nconst input = require("fs")\n  .readFileSync(filepath)\n  .toString()\n  .trim()\n  .split("\\n");\n\nconst [n, k] = input[0].split(" ").map(Number);\nconst info = input[1].split(" ").map(Number);\n\nlet cnt = 0;\nlet min = Infinity;\nlet i = 0;\nlet j = 0;\n\nwhile (j < n) {\n  // j \uc778\ub371\uc2a4\uc758 \uac12\uc774 1\uc77c\ub54c\uae4c\uc9c0 cnt \uc99d\uac00\n  if (info[j] === 1) cnt++;\n\n  // \ub9cc\uc57d cnt\uac00 k\uac12\uc774 \ub418\uba74 \ubc18\ubcf5\n  while (cnt === k) {\n    // i \uc778\ub371\uc2a4\uc758 \uac12\uc774 1\uc77c\ub54c \uae4c\uc9c0 cnt \uac10\uc18c\n    if (info[i] === 1) cnt--;\n\n    // j\uc778\ub371\uc2a4 - i + 1\uc778\ub371\uc2a4 \ud574\uc11c \ub098\uc628 \uac12\uc774\ub791 min\uc774\ub791 \ube44\uad50\n    min = Math.min(min, j - i + 1);\n    i++;\n  }\n  j++;\n}\n\nconsole.log(min === Infinity ? -1 : min);\n'})})]})}function m(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>a,x:()=>r});var i=s(6540);const t={},l=i.createContext(t);function a(n){const e=i.useContext(l);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:a(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);