"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6080],{7576:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var i=t(4848),s=t(8453);const l={slug:"boj14719",title:"[BOJ][JS] 14719 \ube57\ubb3c",sidebar_position:8},r=void 0,o={id:"likelion-study/algorithm/implement/14719",title:"[BOJ][JS] 14719 \ube57\ubb3c",description:"[BOJ] 14719 \ube57\ubb3c",source:"@site/docs/likelion-study/algorithm/implement/14719.md",sourceDirName:"likelion-study/algorithm/implement",slug:"/likelion-study/algorithm/implement/boj14719",permalink:"/docs/likelion-study/algorithm/implement/boj14719",draft:!1,unlisted:!1,editUrl:"https://github.com/55yong/55yong.github.io/tree/main/packages/create-docusaurus/templates/shared/docs/likelion-study/algorithm/implement/14719.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{slug:"boj14719",title:"[BOJ][JS] 14719 \ube57\ubb3c",sidebar_position:8},sidebar:"likelionStudy",previous:{title:"[BOJ][JS] 1713 \ud6c4\ubcf4 \ucd94\ucc9c\ud558\uae30",permalink:"/docs/likelion-study/algorithm/implement/boj1713"},next:{title:"\ud22c \ud3ec\uc778\ud130",permalink:"/docs/category/\ud22c-\ud3ec\uc778\ud130-1"}},a={},c=[{value:"[BOJ] 14719 \ube57\ubb3c",id:"boj-14719-\ube57\ubb3c",level:2},{value:"\ubb38\uc81c",id:"\ubb38\uc81c",level:3},{value:"\uc785\ub825",id:"\uc785\ub825",level:3},{value:"\ucd9c\ub825",id:"\ucd9c\ub825",level:3},{value:"\ubb38\uc81c \ud480\uc774",id:"\ubb38\uc81c-\ud480\uc774",level:3}];function d(n){const e={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"boj-14719-\ube57\ubb3c",children:(0,i.jsx)(e.a,{href:"https://www.acmicpc.net/problem/14719",children:"[BOJ] 14719 \ube57\ubb3c"})}),"\n",(0,i.jsx)(e.p,{children:"2024-10-02"}),"\n",(0,i.jsxs)(e.p,{children:["\uc2dc\uac04 \uc81c\ud55c : 1\ucd08",(0,i.jsx)(e.br,{}),"\n","\uba54\ubaa8\ub9ac \uc81c\ud55c : 256MB"]}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.h3,{id:"\ubb38\uc81c",children:"\ubb38\uc81c"}),"\n",(0,i.jsx)(e.p,{children:"2\ucc28\uc6d0 \uc138\uacc4\uc5d0 \ube14\ub85d\uc774 \uc313\uc5ec\uc788\ub2e4. \ube44\uac00 \uc624\uba74 \ube14\ub85d \uc0ac\uc774\uc5d0 \ube57\ubb3c\uc774 \uace0\uc778\ub2e4."}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.img,{src:"https://onlinejudgeimages.s3-ap-northeast-1.amazonaws.com/problem/14719/1.png",alt:"img"})," ",(0,i.jsx)(e.img,{src:"https://onlinejudgeimages.s3-ap-northeast-1.amazonaws.com/problem/14719/2.png",alt:"img"})]}),"\n",(0,i.jsx)(e.p,{children:"\ube44\ub294 \ucda9\ubd84\ud788 \ub9ce\uc774 \uc628\ub2e4. \uace0\uc774\ub294 \ube57\ubb3c\uc758 \ucd1d\ub7c9\uc740 \uc5bc\ub9c8\uc77c\uae4c?"}),"\n",(0,i.jsx)(e.h3,{id:"\uc785\ub825",children:"\uc785\ub825"}),"\n",(0,i.jsx)(e.p,{children:"\uccab \ubc88\uc9f8 \uc904\uc5d0\ub294 2\ucc28\uc6d0 \uc138\uacc4\uc758 \uc138\ub85c \uae38\uc774 H\uacfc 2\ucc28\uc6d0 \uc138\uacc4\uc758 \uac00\ub85c \uae38\uc774 W\uac00 \uc8fc\uc5b4\uc9c4\ub2e4. (1 \u2264 H, W \u2264 500)"}),"\n",(0,i.jsx)(e.p,{children:"\ub450 \ubc88\uc9f8 \uc904\uc5d0\ub294 \ube14\ub85d\uc774 \uc313\uc778 \ub192\uc774\ub97c \uc758\ubbf8\ud558\ub294 0\uc774\uc0c1 H\uc774\ud558\uc758 \uc815\uc218\uac00 2\ucc28\uc6d0 \uc138\uacc4\uc758 \ub9e8 \uc67c\ucabd \uc704\uce58\ubd80\ud130 \ucc28\ub840\ub300\ub85c W\uac1c \uc8fc\uc5b4\uc9c4\ub2e4."}),"\n",(0,i.jsx)(e.p,{children:"\ub530\ub77c\uc11c \ube14\ub85d \ub0b4\ubd80\uc758 \ube48 \uacf5\uac04\uc774 \uc0dd\uae38 \uc218 \uc5c6\ub2e4. \ub610 2\ucc28\uc6d0 \uc138\uacc4\uc758 \ubc14\ub2e5\uc740 \ud56d\uc0c1 \ub9c9\ud600\uc788\ub2e4\uace0 \uac00\uc815\ud558\uc5ec\ub3c4 \uc88b\ub2e4."}),"\n",(0,i.jsx)(e.h3,{id:"\ucd9c\ub825",children:"\ucd9c\ub825"}),"\n",(0,i.jsx)(e.p,{children:"2\ucc28\uc6d0 \uc138\uacc4\uc5d0\uc11c\ub294 \ud55c \uce78\uc758 \uc6a9\ub7c9\uc740 1\uc774\ub2e4. \uace0\uc774\ub294 \ube57\ubb3c\uc758 \ucd1d\ub7c9\uc744 \ucd9c\ub825\ud558\uc5ec\ub77c."}),"\n",(0,i.jsx)(e.p,{children:"\ube57\ubb3c\uc774 \uc804\ud600 \uace0\uc774\uc9c0 \uc54a\uc744 \uacbd\uc6b0 0\uc744 \ucd9c\ub825\ud558\uc5ec\ub77c."}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.h3,{id:"\ubb38\uc81c-\ud480\uc774",children:"\ubb38\uc81c \ud480\uc774"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:'const filepath =\n  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";\nconst input = require("fs")\n  .readFileSync(filepath)\n  .toString()\n  .trim()\n  .split("\\n");\n\nconst [h, w] = input[0].split(" ");\nconst rain = input[1].split(" ").map(Number);\nlet water = 0;\n\nfor (let i = 0; i < rain.length; i++) {\n  // \ud604\uc7ac \ube14\ub85d\uc5d0\uc11c \uc790\uc2e0\uc744 \ud3ec\ud568\ud55c \uc67c\ucabd\uacfc \uc624\ub978\ucabd\uc5d0\uc11c \uac00\uc7a5 \ub192\uc740 \ube14\ub85d\ub4e4 \uc911\n  // \ub354 \uc791\uc740 \ube14\ub85d\uc758 \ub192\uc774\uac00 \ud604\uc7ac \ube14\ub85d\uc5d0 \ucc44\uc6cc\uc9c8 \ubb3c\uc758 \ub192\uc774\uac00 \ub428\n  const max = Math.max(...rain.slice(0, i + 1));\n  const min = Math.max(...rain.slice(i));\n  const minBlock = Math.min(max, min);\n  water += minBlock - rain[i];\n}\n\nconsole.log(water);\n'})})]})}function m(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>o});var i=t(6540);const s={},l=i.createContext(s);function r(n){const e=i.useContext(l);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);