"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7316],{1641:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>t,metadata:()=>r,toc:()=>c});var a=n(4848),i=n(8453);const t={slug:"boj15270",title:"[BOJ][JS] 15270 \uce5c\uad6c \ud330\ub9b0\ub4dc\ub86c",sidebar_position:6},l=void 0,r={id:"likelion-study/algorithm/BFSDFS/05-15270",title:"[BOJ][JS] 15270 \uce5c\uad6c \ud330\ub9b0\ub4dc\ub86c",description:"[BOJ] 15270 \uce5c\uad6c \ud330\ub9b0\ub4dc\ub86c",source:"@site/docs/likelion-study/algorithm/BFSDFS/05-15270.md",sourceDirName:"likelion-study/algorithm/BFSDFS",slug:"/likelion-study/algorithm/BFSDFS/boj15270",permalink:"/docs/likelion-study/algorithm/BFSDFS/boj15270",draft:!1,unlisted:!1,editUrl:"https://github.com/55yong/55yong.github.io/tree/main/packages/create-docusaurus/templates/shared/docs/likelion-study/algorithm/BFSDFS/05-15270.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{slug:"boj15270",title:"[BOJ][JS] 15270 \uce5c\uad6c \ud330\ub9b0\ub4dc\ub86c",sidebar_position:6},sidebar:"likelionStudy",previous:{title:"[BOJ][JS] 10026 \uc801\ub85d\uc0c9\uc57d",permalink:"/docs/likelion-study/algorithm/BFSDFS/boj10026"},next:{title:"[BOJ][JS] 14503 \ub85c\ubd07 \uccad\uc18c\uae30",permalink:"/docs/likelion-study/algorithm/BFSDFS/boj14503"}},m={},c=[{value:"[BOJ] 15270 \uce5c\uad6c \ud330\ub9b0\ub4dc\ub86c",id:"boj-15270-\uce5c\uad6c-\ud330\ub9b0\ub4dc\ub86c",level:2},{value:"\ubb38\uc81c",id:"\ubb38\uc81c",level:3},{value:"\uc785\ub825",id:"\uc785\ub825",level:3},{value:"\ucd9c\ub825",id:"\ucd9c\ub825",level:3},{value:"\ubb38\uc81c \ud480\uc774",id:"\ubb38\uc81c-\ud480\uc774",level:3}];function h(s){const e={a:"a",annotation:"annotation",br:"br",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",...(0,i.R)(),...s.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"boj-15270-\uce5c\uad6c-\ud330\ub9b0\ub4dc\ub86c",children:(0,a.jsx)(e.a,{href:"https://www.acmicpc.net/problem/15270",children:"[BOJ] 15270 \uce5c\uad6c \ud330\ub9b0\ub4dc\ub86c"})}),"\n",(0,a.jsx)(e.p,{children:"2024-11-07"}),"\n",(0,a.jsxs)(e.p,{children:["\uc2dc\uac04 \uc81c\ud55c : 2\ucd08",(0,a.jsx)(e.br,{}),"\n","\uba54\ubaa8\ub9ac \uc81c\ud55c : 512MB"]}),"\n",(0,a.jsx)(e.hr,{}),"\n",(0,a.jsx)(e.h3,{id:"\ubb38\uc81c",children:"\ubb38\uc81c"}),"\n",(0,a.jsx)(e.p,{children:"\ucd08\ub4f1\ud559\uc0dd\uc778 \uc7ac\ud64d\uc774\ub294 \uc774\ubc88 \ubd04 \ud559\uc608\ud68c \ub54c, \uc7ac\ud64d\uc774\uac00 \uc9c0\ud718\ub97c \ub9e1\uace0 \ubc18 \uce5c\uad6c\ub4e4\uc774 \ucda4\uc744 \ucd94\uae30\ub85c \uacc4\ud68d\ud588\ub2e4. \uc774 \ucda4\uc740 \uc2dc\uc791\ud560 \ub54c \ucda4\ucd94\ub294 \uce5c\uad6c\ub4e4\uc774 \uc77c\ub82c\ub85c \ucb49 \uc11c\uc11c \uac01\uc790 \ub9c9\ucda4\uc744 \ucd94\ub2e4\uac00, \uac00\uc6b4\ub370 \uc788\ub294 \uce5c\uad6c\ub97c \uae30\uc900\uc73c\ub85c \uc67c\ucabd\uacfc \uc624\ub978\ucabd\uc5d0 \uc788\ub358 \uce5c\uad6c\ub4e4\uc774 \ub450\uc190\uc744 \ub9c8\uc8fc\uc7a1\uace0 \ucda4\uc744 \ucd98\ub2e4. \uc989 5\uba85\uc758 \uce5c\uad6c\uac00 \uc77c\ub82c\ub85c \uc11c\uc788\uc5c8\ub2e4\uba74, \uccab \ubc88\uc9f8 \uce5c\uad6c\uc640 \ub2e4\uc12f \ubc88\uc9f8 \uce5c\uad6c\uac00 \ud568\uaed8 \ucda4\uc744 \ucd94\uac8c \ub418\uba70, \ub450 \ubc88\uc9f8 \uce5c\uad6c\uc640 \ub124 \ubc88\uc9f8 \uce5c\uad6c\uac00 \ud568\uaed8 \ucda4\uc744 \ucd94\uac8c \ub41c\ub2e4. \uc138 \ubc88\uc9f8\uc5d0 \uc788\ub358 \uce5c\uad6c\ub294 \uac19\uc774 \ucd9c \uc218 \uc788\ub294 \uce5c\uad6c\uac00 \uc5c6\uae30 \ub54c\ubb38\uc5d0 \ud63c\uc790 \ub85c\ubd07 \ub304\uc2a4\ub97c \ucd98\ub2e4."}),"\n",(0,a.jsx)(e.p,{children:"\uc7ac\ud64d\uc774\ub124 \ubc18 \uce5c\uad6c\ub4e4\uc740 \ubaa8\ub450 \uc790\uc2e0\uacfc \uce5c\ud55c \uce5c\uad6c\ud558\uace0\ub9cc \ucda4\uc744 \ucd94\uace0 \uc2f6\uc5b4\ud55c\ub2e4. \uc7ac\ud64d\uc774\ub294 \uc774\ubc88 \ud559\uc608\ud68c\uc5d0 \uc2a4\ucf00\uc77c \ud06c\uac8c \ud574\ubcf4\uace0 \uc2f6\uae30 \ub54c\ubb38\uc5d0 \ucd5c\ub300\ud55c \ub9ce\uc740 \uce5c\uad6c\ub97c \ubb34\ub300\uc5d0 \uc138\uc6b0\ub824\uace0 \ud55c\ub2e4. \uce5c\uad6c \uad00\uacc4\ub3c4\uac00 \uc8fc\uc5b4\uc84c\uc744 \ub54c, \ucd5c\ub300 \uba87 \uba85\uc744 \ubb34\ub300\ub85c \uc62c\ub824\ubcf4\ub0bc \uc218 \uc788\ub294\uc9c0 \uad6c\ud574\uc11c \uc7ac\ud64d\uc774\uc5d0\uac8c \uc54c\ub824\uc8fc\uc790. \uce5c\uad6c\ub4e4\uc740 \ucd9c\uc11d\ubc88\ud638\ub85c \ub098\ud0c0\ub0b4\uba70, 1\ubd80\ud130 \uc2dc\uc791\ud574\uc11c N\uae4c\uc9c0 \uc788\ub2e4. \uac01 \uce5c\uad6c\ub294 \uc624\ub85c\uc9c0 \ud558\ub098\uc758 \ucd9c\uc11d\ubc88\ud638\ub97c \uac16\ub294\ub2e4."}),"\n",(0,a.jsx)(e.p,{children:"A\uc640 B\uac00 \uce5c\ud55c \uce5c\uad6c\uace0, B\uc640 C\uac00 \uce5c\ud55c \uce5c\uad6c\ub77c\uace0\ud574\uc11c \ubc18\ub4dc\uc2dc A\uc640 C\uac00 \uce5c\ud55c \uce5c\uad6c\ub294 \uc544\ub2c8\ub2e4. \ub85c\ubd07 \ub304\uc2a4\ub97c \ucd94\ub294 \uce5c\uad6c\ub97c \uc81c\uc678\ud55c \ubb34\ub300\uc5d0 \uc62c\ub77c\uac00\ub294 \uce5c\uad6c\ub4e4\uc740 \ubaa8\ub450 \uac01\uc790 \uc790\uc2e0\uacfc \uce5c\ud55c \uce5c\uad6c\ud558\uace0\ub9cc \ucda4\uc744 \ucdb0\uc57c\ud55c\ub2e4. \ub610\ud55c \uc7ac\ud64d\uc774 \ubc18 \uce5c\uad6c\ub4e4\uc740 \ubaa8\ub450 \ub85c\ubd07 \ub304\uc2a4\ub97c \ucd9c \uc218 \uc788\ub2e4."}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{src:"https://onlinejudgeimages.s3-ap-northeast-1.amazonaws.com/problem/15270/1.png",alt:"img"})}),"\n",(0,a.jsx)(e.h3,{id:"\uc785\ub825",children:"\uc785\ub825"}),"\n",(0,a.jsxs)(e.p,{children:["\uccab\uc9f8 \uc904\uc5d0 \ucd1d \ubc18\uce5c\uad6c \uc218 N(",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mn,{children:"2"}),(0,a.jsx)(e.mo,{children:"<"}),(0,a.jsx)(e.mo,{children:"="}),(0,a.jsx)(e.mi,{children:"N"}),(0,a.jsx)(e.mo,{children:"<"}),(0,a.jsx)(e.mo,{children:"="}),(0,a.jsx)(e.mn,{children:"20"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"2<=N<=20"})]})})}),(0,a.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6835em",verticalAlign:"-0.0391em"}}),(0,a.jsx)(e.span,{className:"mord",children:"2"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(e.span,{className:"mrel",children:"<="}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.7224em",verticalAlign:"-0.0391em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(e.span,{className:"mrel",children:"<="}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(e.span,{className:"mord",children:"20"})]})]})]}),", \uc7ac\ud64d\uc774 \uc81c\uc678)\uc640 \uad00\uacc4\ub3c4 \uc218 M(",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mn,{children:"0"}),(0,a.jsx)(e.mo,{children:"<"}),(0,a.jsx)(e.mo,{children:"="}),(0,a.jsx)(e.mi,{children:"M"}),(0,a.jsx)(e.mo,{children:"<"}),(0,a.jsx)(e.mo,{children:"="}),(0,a.jsx)(e.mo,{stretchy:"false",children:"("}),(0,a.jsxs)(e.msup,{children:[(0,a.jsx)(e.mi,{children:"N"}),(0,a.jsx)(e.mn,{children:"2"})]}),(0,a.jsx)(e.mo,{children:"\u2212"}),(0,a.jsx)(e.mi,{children:"N"}),(0,a.jsx)(e.mo,{stretchy:"false",children:")"}),(0,a.jsx)(e.mi,{mathvariant:"normal",children:"/"}),(0,a.jsx)(e.mn,{children:"2"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"0<=M<=(N^2-N)/2"})]})})}),(0,a.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6835em",verticalAlign:"-0.0391em"}}),(0,a.jsx)(e.span,{className:"mord",children:"0"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(e.span,{className:"mrel",children:"<="}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.7224em",verticalAlign:"-0.0391em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"M"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(e.span,{className:"mrel",children:"<="}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,a.jsx)(e.span,{className:"mopen",children:"("}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsx)(e.span,{className:"vlist-t",children:(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,a.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:"2"})})]})})})})})]}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),(0,a.jsx)(e.span,{className:"mclose",children:")"}),(0,a.jsx)(e.span,{className:"mord",children:"/2"})]})]})]}),", \ucd5c\ub300 50 \uc81c\ud55c)\uc774 \uc8fc\uc5b4\uc9c4\ub2e4. \ub458\uc9f8 \uc904\ubd80\ud130 M+1\uc904\uae4c\uc9c0 \uce5c\ud55c \uce5c\uad6c \uad00\uacc4\ub294 \ucd9c\uc11d\ubc88\ud638 u, v\ub85c \ub098\ud0c0\ub098\uba70 u\uc640 v\ub294 \uac19\uc9c0 \uc54a\uace0, u\uc640 v\uac00 \uce5c\ud55c \uce5c\uad6c\ub77c\uba74 v\uc640 u\ub3c4 \uce5c\ud55c \uce5c\uad6c\ub2e4."]}),"\n",(0,a.jsx)(e.p,{children:"\ub611\uac19\uc740 \uc785\ub825\uc740 \ub450 \ubc88 \uc774\uc0c1 \ub098\uc624\uc9c0 \uc54a\ub294\ub2e4. \uac00\ub839 1 2 \uac00 \uc774\ubbf8 \ub098\uc654\ub2e4\uba74 1 2 \ub610\ub294 2 1\ub294 \uc785\ub825\uc73c\ub85c \ub4e4\uc5b4\uc624\uc9c0 \uc54a\ub294\ub2e4."}),"\n",(0,a.jsx)(e.h3,{id:"\ucd9c\ub825",children:"\ucd9c\ub825"}),"\n",(0,a.jsx)(e.p,{children:"\ubb34\ub300\uc5d0 \ucd5c\ub300\ud55c \uc138\uc6b8 \uc218 \uc788\ub294 \uce5c\uad6c\uc758 \uc218\ub97c \ucd9c\ub825\ud55c\ub2e4."}),"\n",(0,a.jsx)(e.hr,{}),"\n",(0,a.jsx)(e.h3,{id:"\ubb38\uc81c-\ud480\uc774",children:"\ubb38\uc81c \ud480\uc774"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:'const { match } = require("assert");\n\nconst filepath =\n  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";\nconst input = require("fs")\n  .readFileSync(filepath)\n  .toString()\n  .trim()\n  .split("\\n");\n\nconst [N, M] = input.shift().split(" ").map(Number);\nconst friend = input.map((e) => e.split(" ").map(Number));\nconst graph = Array.from({ length: N + 1 }, () => []);\nconst visited = Array.from({ length: N + 1 }, () => 0);\nlet answer = 0;\n\nconst dfs = (index, count) => {\n  // \ubaa8\ub4e0 \uad00\uacc4\ub97c \ud655\uc778\ud588\uc744 \ub54c \ucd5c\ub300 \uc9dd\uc758 \uc218 \uac31\uc2e0\n  if (index >= M) {\n    answer = Math.max(answer, count);\n    return;\n  }\n\n  const [a, b] = friend[index];\n\n  // \ud604\uc7ac \uce5c\uad6c \uad00\uacc4 \uc911 \ud55c \uba85\uc774\ub77c\ub3c4 \uc9dd\uc774 \uc788\ub294 \uacbd\uc6b0\n  if (visited[a] || visited[b]) {\n    dfs(index + 1, count); // \uace0\ub824 X\n  } else {\n    visited[a] = true;\n    visited[b] = true;\n\n    dfs(index + 1, count + 1); // \uc9dd\uc744 \uc774\ub8ec \uacbd\uc6b0\n\n    visited[a] = false;\n    visited[b] = false;\n\n    dfs(index + 1, count); // \uc9dd\uc744 \uc774\ub8e8\uc9c0 \uc54a\uc740 \uacbd\uc6b0\n  }\n};\n\nconst main = () => {\n  for (let [from, to] of friend) {\n    if (graph[from].length < 1) graph[from].push(to);\n  }\n\n  for (let i = 0; i < graph.length; i++) {\n    graph[i].sort((a, b) => a - b);\n  }\n\n  dfs(0, 0);\n\n  // \uc9dd\uc740 \ub450\uba85\uc774\ubbc0\ub85c \uacb0\uacfc\uc5d0 2 \uacf1\ud558\uae30\n  answer *= 2;\n\n  // \uc9dd\uc774 \ub418\uc9c0 \uc54a\uc740 \uc0ac\ub78c \uace0\ub824\n  if (answer < N) {\n    answer++;\n  }\n\n  console.log(answer);\n};\n\nmain();\n'})})]})}function d(s={}){const{wrapper:e}={...(0,i.R)(),...s.components};return e?(0,a.jsx)(e,{...s,children:(0,a.jsx)(h,{...s})}):h(s)}},8453:(s,e,n)=>{n.d(e,{R:()=>l,x:()=>r});var a=n(6540);const i={},t=a.createContext(i);function l(s){const e=a.useContext(t);return a.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function r(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(i):s.components||i:l(s.components),a.createElement(t.Provider,{value:e},s.children)}}}]);