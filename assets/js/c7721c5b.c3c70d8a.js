"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9095],{3550:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>a});var i=t(4848),r=t(8453);const s={slug:"boj11501",title:"[BOJ][JS] 11501 \uc8fc\uc2dd",sidebar_position:8},l=void 0,o={id:"likelion-study/algorithm/greedy/07-11501",title:"[BOJ][JS] 11501 \uc8fc\uc2dd",description:"[BOJ] 11501 \uc8fc\uc2dd",source:"@site/docs/likelion-study/algorithm/greedy/07-11501.md",sourceDirName:"likelion-study/algorithm/greedy",slug:"/likelion-study/algorithm/greedy/boj11501",permalink:"/docs/likelion-study/algorithm/greedy/boj11501",draft:!1,unlisted:!1,editUrl:"https://github.com/55yong/55yong.github.io/tree/main/packages/create-docusaurus/templates/shared/docs/likelion-study/algorithm/greedy/07-11501.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{slug:"boj11501",title:"[BOJ][JS] 11501 \uc8fc\uc2dd",sidebar_position:8},sidebar:"likelionStudy",previous:{title:"[BOJ][JS] 1541 \uc783\uc5b4\ubc84\ub9b0 \uad04\ud638",permalink:"/docs/likelion-study/algorithm/greedy/boj1541"},next:{title:"[BOJ][JS] 11497 \ud1b5\ub098\ubb34 \uac74\ub108\ub6f0\uae30",permalink:"/docs/likelion-study/algorithm/greedy/boj11497"}},d={},a=[{value:"[BOJ] 11501 \uc8fc\uc2dd",id:"boj-11501-\uc8fc\uc2dd",level:2},{value:"\ubb38\uc81c",id:"\ubb38\uc81c",level:3},{value:"\uc785\ub825",id:"\uc785\ub825",level:3},{value:"\ucd9c\ub825",id:"\ucd9c\ub825",level:3},{value:"\ubb38\uc81c \ud480\uc774",id:"\ubb38\uc81c-\ud480\uc774",level:3}];function c(e){const n={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"boj-11501-\uc8fc\uc2dd",children:(0,i.jsx)(n.a,{href:"https://www.acmicpc.net/problem/11501",children:"[BOJ] 11501 \uc8fc\uc2dd"})}),"\n",(0,i.jsx)(n.p,{children:"2024-10-28"}),"\n",(0,i.jsxs)(n.p,{children:["\uc2dc\uac04 \uc81c\ud55c : 5\ucd08",(0,i.jsx)(n.br,{}),"\n","\uba54\ubaa8\ub9ac \uc81c\ud55c : 256MB"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"\ubb38\uc81c",children:"\ubb38\uc81c"}),"\n",(0,i.jsx)(n.p,{children:"\ud64d\uc900\uc774\ub294 \uc694\uc998 \uc8fc\uc2dd\uc5d0 \ube60\uc838\uc788\ub2e4. \uadf8\ub294 \ubbf8\ub798\ub97c \ub0b4\ub2e4\ubcf4\ub294 \ub208\uc774 \ub6f0\uc5b4\ub098, \ub0a0 \ubcc4\ub85c \uc8fc\uac00\ub97c \uc608\uc0c1\ud558\uace0 \uc5b8\uc81c\ub098 \uadf8\uac8c \ub9de\uc544\ub5a8\uc5b4\uc9c4\ub2e4. \ub9e4\uc77c \uadf8\ub294 \uc544\ub798 \uc138 \uac00\uc9c0 \uc911 \ud55c \ud589\ub3d9\uc744 \ud55c\ub2e4."}),"\n",(0,i.jsxs)(n.p,{children:["1.\uc8fc\uc2dd \ud558\ub098\ub97c \uc0b0\ub2e4.",(0,i.jsx)(n.br,{}),"\n","2.\uc6d0\ud558\ub294 \ub9cc\ud07c \uac00\uc9c0\uace0 \uc788\ub294 \uc8fc\uc2dd\uc744 \ud310\ub2e4.",(0,i.jsx)(n.br,{}),"\n","3.\uc544\ubb34\uac83\ub3c4 \uc548\ud55c\ub2e4."]}),"\n",(0,i.jsx)(n.p,{children:"\ud64d\uc900\uc774\ub294 \ubbf8\ub798\ub97c \uc608\uc0c1\ud558\ub294 \ub6f0\uc5b4\ub09c \uc548\ubaa9\uc744 \uac00\uc84c\uc9c0\ub9cc, \uc5b4\ub5bb\uac8c \ud574\uc57c \uc790\uc2e0\uc774 \ucd5c\ub300 \uc774\uc775\uc744 \uc5bb\uc744 \uc218 \uc788\ub294\uc9c0 \ubaa8\ub978\ub2e4. \ub530\ub77c\uc11c \ub2f9\uc2e0\uc5d0\uac8c \ub0a0 \ubcc4\ub85c \uc8fc\uc2dd\uc758 \uac00\uaca9\uc744 \uc54c\ub824\uc8fc\uc5c8\uc744 \ub54c, \ucd5c\ub300 \uc774\uc775\uc774 \uc5bc\ub9c8\ub098 \ub418\ub294\uc9c0 \uacc4\uc0b0\uc744 \ud574\ub2ec\ub77c\uace0 \ubd80\ud0c1\ud588\ub2e4."}),"\n",(0,i.jsx)(n.p,{children:"\uc608\ub97c \ub4e4\uc5b4 \ub0a0 \uc218\uac00 3\uc77c\uc774\uace0 \ub0a0 \ubcc4\ub85c \uc8fc\uac00\uac00 10, 7, 6\uc77c \ub54c, \uc8fc\uac00\uac00 \uacc4\uc18d \uac10\uc18c\ud558\ubbc0\ub85c \ucd5c\ub300 \uc774\uc775\uc740 0\uc774 \ub41c\ub2e4. \uadf8\ub7ec\ub098 \ub9cc\uc57d \ub0a0 \ubcc4\ub85c \uc8fc\uac00\uac00 3, 5, 9\uc77c \ub54c\ub294 \ucc98\uc74c \ub450 \ub0a0\uc5d0 \uc8fc\uc2dd\uc744 \ud558\ub098\uc529 \uc0ac\uace0, \ub9c8\uc9c0\ub9c9\ub0a0 \ub2e4 \ud314\uc544 \ubc84\ub9ac\uba74 \uc774\uc775\uc774 10\uc774 \ub41c\ub2e4."}),"\n",(0,i.jsx)(n.h3,{id:"\uc785\ub825",children:"\uc785\ub825"}),"\n",(0,i.jsx)(n.p,{children:"\uc785\ub825\uc758 \uccab \uc904\uc5d0\ub294 \ud14c\uc2a4\ud2b8\ucf00\uc774\uc2a4 \uc218\ub97c \ub098\ud0c0\ub0b4\ub294 \uc790\uc5f0\uc218 T\uac00 \uc8fc\uc5b4\uc9c4\ub2e4. \uac01 \ud14c\uc2a4\ud2b8\ucf00\uc774\uc2a4 \ubcc4\ub85c \uccab \uc904\uc5d0\ub294 \ub0a0\uc758 \uc218\ub97c \ub098\ud0c0\ub0b4\ub294 \uc790\uc5f0\uc218 N(2 \u2264 N \u2264 1,000,000)\uc774 \uc8fc\uc5b4\uc9c0\uace0, \ub458\uc9f8 \uc904\uc5d0\ub294 \ub0a0 \ubcc4 \uc8fc\uac00\ub97c \ub098\ud0c0\ub0b4\ub294 N\uac1c\uc758 \uc790\uc5f0\uc218\ub4e4\uc774 \uacf5\ubc31\uc73c\ub85c \uad6c\ubd84\ub418\uc5b4 \uc21c\uc11c\ub300\ub85c \uc8fc\uc5b4\uc9c4\ub2e4. \ub0a0 \ubcc4 \uc8fc\uac00\ub294 10,000\uc774\ud558\ub2e4."}),"\n",(0,i.jsx)(n.h3,{id:"\ucd9c\ub825",children:"\ucd9c\ub825"}),"\n",(0,i.jsx)(n.p,{children:"\uac01 \ud14c\uc2a4\ud2b8\ucf00\uc774\uc2a4 \ubcc4\ub85c \ucd5c\ub300 \uc774\uc775\uc744 \ub098\ud0c0\ub0b4\ub294 \uc815\uc218 \ud558\ub098\ub97c \ucd9c\ub825\ud55c\ub2e4. \ub2f5\uc740 \ubd80\ud638\uc788\ub294 64bit \uc815\uc218\ud615\uc73c\ub85c \ud45c\ud604 \uac00\ub2a5\ud558\ub2e4."}),"\n",(0,i.jsx)(n.h3,{id:"\ubb38\uc81c-\ud480\uc774",children:"\ubb38\uc81c \ud480\uc774"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'const filepath =\n  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";\nconst input = require("fs")\n  .readFileSync(filepath)\n  .toString()\n  .trim()\n  .split("\\n");\n\nconst T = input.shift();\n\nfor (let i = 0; i < T * 2; i += 2) {\n  let answer = 0;\n  let max = 0;\n  let N = input[i];\n  let arr = input[i + 1].split(" ").map(Number);\n\n  for (let j = N - 1; j > -1; j--) {\n    if (arr[j] > max) max = arr[j];\n    else if (arr[j] < max) answer += max - arr[j];\n  }\n  console.log(answer);\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var i=t(6540);const r={},s=i.createContext(r);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);