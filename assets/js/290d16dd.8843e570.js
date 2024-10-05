"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[133],{2458:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=t(4848),r=t(8453);const s={slug:"boj2470",title:"[BOJ][JS] 2470 \ub450 \uc6a9\uc561",sidebar_position:3},l=void 0,o={id:"likelion-study/algorithm/binarysearch/2470",title:"[BOJ][JS] 2470 \ub450 \uc6a9\uc561",description:"[BOJ] 2470 \ub450 \uc6a9\uc561",source:"@site/docs/likelion-study/algorithm/binarysearch/2470.md",sourceDirName:"likelion-study/algorithm/binarysearch",slug:"/likelion-study/algorithm/binarysearch/boj2470",permalink:"/docs/likelion-study/algorithm/binarysearch/boj2470",draft:!1,unlisted:!1,editUrl:"https://github.com/55yong/55yong.github.io/tree/main/packages/create-docusaurus/templates/shared/docs/likelion-study/algorithm/binarysearch/2470.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{slug:"boj2470",title:"[BOJ][JS] 2470 \ub450 \uc6a9\uc561",sidebar_position:3},sidebar:"likelionStudy",previous:{title:"\uc774\ubd84 \ud0d0\uc0c9",permalink:"/docs/category/\uc774\ubd84-\ud0d0\uc0c9-1"}},a={},c=[{value:"[BOJ] 2470 \ub450 \uc6a9\uc561",id:"boj-2470-\ub450-\uc6a9\uc561",level:2},{value:"\ubb38\uc81c",id:"\ubb38\uc81c",level:3},{value:"\uc785\ub825",id:"\uc785\ub825",level:3},{value:"\ucd9c\ub825",id:"\ucd9c\ub825",level:3},{value:"\ubb38\uc81c \ud480\uc774",id:"\ubb38\uc81c-\ud480\uc774",level:3}];function d(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"boj-2470-\ub450-\uc6a9\uc561",children:(0,i.jsx)(e.a,{href:"https://www.acmicpc.net/problem/2470",children:"[BOJ] 2470 \ub450 \uc6a9\uc561"})}),"\n",(0,i.jsx)(e.p,{children:"2024-10-04"}),"\n",(0,i.jsx)(e.p,{children:"\uc2dc\uac04 \uc81c\ud55c : 1\ucd08\n\uba54\ubaa8\ub9ac \uc81c\ud55c : 128MB"}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.h3,{id:"\ubb38\uc81c",children:"\ubb38\uc81c"}),"\n",(0,i.jsx)(e.p,{children:"KOI \ubd80\uc124 \uacfc\ud559\uc5f0\uad6c\uc18c\uc5d0\uc11c\ub294 \ub9ce\uc740 \uc885\ub958\uc758 \uc0b0\uc131 \uc6a9\uc561\uacfc \uc54c\uce7c\ub9ac\uc131 \uc6a9\uc561\uc744 \ubcf4\uc720\ud558\uace0 \uc788\ub2e4. \uac01 \uc6a9\uc561\uc5d0\ub294 \uadf8 \uc6a9\uc561\uc758 \ud2b9\uc131\uc744 \ub098\ud0c0\ub0b4\ub294 \ud558\ub098\uc758 \uc815\uc218\uac00 \uc8fc\uc5b4\uc838\uc788\ub2e4. \uc0b0\uc131 \uc6a9\uc561\uc758 \ud2b9\uc131\uac12\uc740 1\ubd80\ud130 1,000,000,000\uae4c\uc9c0\uc758 \uc591\uc758 \uc815\uc218\ub85c \ub098\ud0c0\ub0b4\uace0, \uc54c\uce7c\ub9ac\uc131 \uc6a9\uc561\uc758 \ud2b9\uc131\uac12\uc740 -1\ubd80\ud130 -1,000,000,000\uae4c\uc9c0\uc758 \uc74c\uc758 \uc815\uc218\ub85c \ub098\ud0c0\ub0b8\ub2e4."}),"\n",(0,i.jsx)(e.p,{children:"\uac19\uc740 \uc591\uc758 \ub450 \uc6a9\uc561\uc744 \ud63c\ud569\ud55c \uc6a9\uc561\uc758 \ud2b9\uc131\uac12\uc740 \ud63c\ud569\uc5d0 \uc0ac\uc6a9\ub41c \uac01 \uc6a9\uc561\uc758 \ud2b9\uc131\uac12\uc758 \ud569\uc73c\ub85c \uc815\uc758\ud55c\ub2e4. \uc774 \uc5f0\uad6c\uc18c\uc5d0\uc11c\ub294 \uac19\uc740 \uc591\uc758 \ub450 \uc6a9\uc561\uc744 \ud63c\ud569\ud558\uc5ec \ud2b9\uc131\uac12\uc774 0\uc5d0 \uac00\uc7a5 \uac00\uae4c\uc6b4 \uc6a9\uc561\uc744 \ub9cc\ub4e4\ub824\uace0 \ud55c\ub2e4."}),"\n",(0,i.jsx)(e.p,{children:"\uc608\ub97c \ub4e4\uc5b4, \uc8fc\uc5b4\uc9c4 \uc6a9\uc561\ub4e4\uc758 \ud2b9\uc131\uac12\uc774 [-2, 4, -99, -1, 98]\uc778 \uacbd\uc6b0\uc5d0\ub294 \ud2b9\uc131\uac12\uc774 -99\uc778 \uc6a9\uc561\uacfc \ud2b9\uc131\uac12\uc774 98\uc778 \uc6a9\uc561\uc744 \ud63c\ud569\ud558\uba74 \ud2b9\uc131\uac12\uc774 -1\uc778 \uc6a9\uc561\uc744 \ub9cc\ub4e4 \uc218 \uc788\uace0, \uc774 \uc6a9\uc561\uc774 \ud2b9\uc131\uac12\uc774 0\uc5d0 \uac00\uc7a5 \uac00\uae4c\uc6b4 \uc6a9\uc561\uc774\ub2e4. \ucc38\uace0\ub85c, \ub450 \uc885\ub958\uc758 \uc54c\uce7c\ub9ac\uc131 \uc6a9\uc561\ub9cc\uc73c\ub85c\ub098 \ud639\uc740 \ub450 \uc885\ub958\uc758 \uc0b0\uc131 \uc6a9\uc561\ub9cc\uc73c\ub85c \ud2b9\uc131\uac12\uc774 0\uc5d0 \uac00\uc7a5 \uac00\uae4c\uc6b4 \ud63c\ud569 \uc6a9\uc561\uc744 \ub9cc\ub4dc\ub294 \uacbd\uc6b0\ub3c4 \uc874\uc7ac\ud560 \uc218 \uc788\ub2e4."}),"\n",(0,i.jsx)(e.p,{children:"\uc0b0\uc131 \uc6a9\uc561\uacfc \uc54c\uce7c\ub9ac\uc131 \uc6a9\uc561\uc758 \ud2b9\uc131\uac12\uc774 \uc8fc\uc5b4\uc84c\uc744 \ub54c, \uc774 \uc911 \ub450 \uac1c\uc758 \uc11c\ub85c \ub2e4\ub978 \uc6a9\uc561\uc744 \ud63c\ud569\ud558\uc5ec \ud2b9\uc131\uac12\uc774 0\uc5d0 \uac00\uc7a5 \uac00\uae4c\uc6b4 \uc6a9\uc561\uc744 \ub9cc\ub4e4\uc5b4\ub0b4\ub294 \ub450 \uc6a9\uc561\uc744 \ucc3e\ub294 \ud504\ub85c\uadf8\ub7a8\uc744 \uc791\uc131\ud558\uc2dc\uc624."}),"\n",(0,i.jsx)(e.h3,{id:"\uc785\ub825",children:"\uc785\ub825"}),"\n",(0,i.jsx)(e.p,{children:"\uccab\uc9f8 \uc904\uc5d0\ub294 \uc804\uccb4 \uc6a9\uc561\uc758 \uc218 N\uc774 \uc785\ub825\ub41c\ub2e4. N\uc740 2 \uc774\uc0c1 100,000 \uc774\ud558\uc774\ub2e4. \ub458\uc9f8 \uc904\uc5d0\ub294 \uc6a9\uc561\uc758 \ud2b9\uc131\uac12\uc744 \ub098\ud0c0\ub0b4\ub294 N\uac1c\uc758 \uc815\uc218\uac00 \ube48\uce78\uc744 \uc0ac\uc774\uc5d0 \ub450\uace0 \uc8fc\uc5b4\uc9c4\ub2e4. \uc774 \uc218\ub4e4\uc740 \ubaa8\ub450 -1,000,000,000 \uc774\uc0c1 1,000,000,000 \uc774\ud558\uc774\ub2e4. N\uac1c\uc758 \uc6a9\uc561\ub4e4\uc758 \ud2b9\uc131\uac12\uc740 \ubaa8\ub450 \ub2e4\ub974\uace0, \uc0b0\uc131 \uc6a9\uc561\ub9cc\uc73c\ub85c\ub098 \uc54c\uce7c\ub9ac\uc131 \uc6a9\uc561\ub9cc\uc73c\ub85c \uc785\ub825\uc774 \uc8fc\uc5b4\uc9c0\ub294 \uacbd\uc6b0\ub3c4 \uc788\uc744 \uc218 \uc788\ub2e4."}),"\n",(0,i.jsx)(e.h3,{id:"\ucd9c\ub825",children:"\ucd9c\ub825"}),"\n",(0,i.jsx)(e.p,{children:"\uccab\uc9f8 \uc904\uc5d0 \ud2b9\uc131\uac12\uc774 0\uc5d0 \uac00\uc7a5 \uac00\uae4c\uc6b4 \uc6a9\uc561\uc744 \ub9cc\ub4e4\uc5b4\ub0b4\ub294 \ub450 \uc6a9\uc561\uc758 \ud2b9\uc131\uac12\uc744 \ucd9c\ub825\ud55c\ub2e4. \ucd9c\ub825\ud574\uc57c \ud558\ub294 \ub450 \uc6a9\uc561\uc740 \ud2b9\uc131\uac12\uc758 \uc624\ub984\ucc28\uc21c\uc73c\ub85c \ucd9c\ub825\ud55c\ub2e4. \ud2b9\uc131\uac12\uc774 0\uc5d0 \uac00\uc7a5 \uac00\uae4c\uc6b4 \uc6a9\uc561\uc744 \ub9cc\ub4e4\uc5b4\ub0b4\ub294 \uacbd\uc6b0\uac00 \ub450 \uac1c \uc774\uc0c1\uc77c \uacbd\uc6b0\uc5d0\ub294 \uadf8 \uc911 \uc544\ubb34\uac83\uc774\ub098 \ud558\ub098\ub97c \ucd9c\ub825\ud55c\ub2e4."}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.h3,{id:"\ubb38\uc81c-\ud480\uc774",children:"\ubb38\uc81c \ud480\uc774"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:'const filepath =\n  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";\n\nconst input = require("fs")\n  .readFileSync(filepath)\n  .toString()\n  .trim()\n  .split("\\n");\n\nconst N = input[0];\nconst arr = input[1]\n  .split(" ")\n  .map(Number)\n  .sort((a, b) => a - b);\n\nlet closets = [];\nlet left = 0;\nlet right = N - 1;\nlet min = Infinity;\n\nwhile (left !== right) {\n  let sum = arr[left] + arr[right];\n\n  if (Math.abs(sum) < min) {\n    min = Math.abs(sum);\n    closets = [arr[left], arr[right]];\n  }\n\n  if (sum >= min) {\n    right--;\n  } else {\n    left++;\n  }\n}\n\nconsole.log(closets.join(" "));\n'})})]})}function h(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>l,x:()=>o});var i=t(6540);const r={},s=i.createContext(r);function l(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);