"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8875],{6786:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>a,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var t=i(4848),s=i(8453);const l={slug:"boj1713",title:"[BOJ][JS] 1713 \ud6c4\ubcf4 \ucd94\ucc9c\ud558\uae30",sidebar_position:7},o=void 0,r={id:"likelion-study/algorithm/implement/06-1713",title:"[BOJ][JS] 1713 \ud6c4\ubcf4 \ucd94\ucc9c\ud558\uae30",description:"[BOJ] 1713 \ud6c4\ubcf4 \ucd94\ucc9c\ud558\uae30",source:"@site/docs/likelion-study/algorithm/implement/06-1713.md",sourceDirName:"likelion-study/algorithm/implement",slug:"/likelion-study/algorithm/implement/boj1713",permalink:"/docs/likelion-study/algorithm/implement/boj1713",draft:!1,unlisted:!1,editUrl:"https://github.com/55yong/55yong.github.io/tree/main/packages/create-docusaurus/templates/shared/docs/likelion-study/algorithm/implement/06-1713.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{slug:"boj1713",title:"[BOJ][JS] 1713 \ud6c4\ubcf4 \ucd94\ucc9c\ud558\uae30",sidebar_position:7},sidebar:"likelionStudy",previous:{title:"[BOJ][JS] 3107 IPv6",permalink:"/docs/likelion-study/algorithm/implement/boj3107"},next:{title:"[BOJ][JS] 14719 \ube57\ubb3c",permalink:"/docs/likelion-study/algorithm/implement/boj14719"}},a={},d=[{value:"[BOJ] 1713 \ud6c4\ubcf4 \ucd94\ucc9c\ud558\uae30",id:"boj-1713-\ud6c4\ubcf4-\ucd94\ucc9c\ud558\uae30",level:2},{value:"\ubb38\uc81c",id:"\ubb38\uc81c",level:3},{value:"\uc785\ub825",id:"\uc785\ub825",level:3},{value:"\ucd9c\ub825",id:"\ucd9c\ub825",level:3},{value:"\ubb38\uc81c \ud480\uc774",id:"\ubb38\uc81c-\ud480\uc774",level:3}];function c(n){const e={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"boj-1713-\ud6c4\ubcf4-\ucd94\ucc9c\ud558\uae30",children:(0,t.jsx)(e.a,{href:"https://www.acmicpc.net/problem/1713",children:"[BOJ] 1713 \ud6c4\ubcf4 \ucd94\ucc9c\ud558\uae30"})}),"\n",(0,t.jsx)(e.p,{children:"2024-09-27"}),"\n",(0,t.jsxs)(e.p,{children:["\uc2dc\uac04 \uc81c\ud55c : 1\ucd08",(0,t.jsx)(e.br,{}),"\n","\uba54\ubaa8\ub9ac \uc81c\ud55c : 128MB"]}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsx)(e.h3,{id:"\ubb38\uc81c",children:"\ubb38\uc81c"}),"\n",(0,t.jsx)(e.p,{children:"\uc6d4\ub4dc\ucd08\ub4f1\ud559\uad50 \ud559\uc0dd\ud68c\uc7a5 \ud6c4\ubcf4\ub294 \uc77c\uc815 \uae30\uac04 \ub3d9\uc548 \uc804\uccb4 \ud559\uc0dd\uc758 \ucd94\ucc9c\uc5d0 \uc758\ud558\uc5ec \uc815\ud574\uc9c4 \uc218\ub9cc\ud07c \uc120\uc815\ub41c\ub2e4. \uadf8\ub798\uc11c \ud559\uad50 \ud648\ud398\uc774\uc9c0\uc5d0 \ucd94\ucc9c\ubc1b\uc740 \ud559\uc0dd\uc758 \uc0ac\uc9c4\uc744 \uac8c\uc2dc\ud560 \uc218 \uc788\ub294 \uc0ac\uc9c4\ud2c0\uc744 \ud6c4\ubcf4\uc758 \uc218\ub9cc\ud07c \ub9cc\ub4e4\uc5c8\ub2e4. \ucd94\ucc9c\ubc1b\uc740 \ud559\uc0dd\uc758 \uc0ac\uc9c4\uc744 \uc0ac\uc9c4\ud2c0\uc5d0 \uac8c\uc2dc\ud558\uace0 \ucd94\ucc9c\ubc1b\uc740 \ud69f\uc218\ub97c \ud45c\uc2dc\ud558\ub294 \uaddc\uce59\uc740 \ub2e4\uc74c\uacfc \uac19\ub2e4."}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"\ud559\uc0dd\ub4e4\uc774 \ucd94\ucc9c\uc744 \uc2dc\uc791\ud558\uae30 \uc804\uc5d0 \ubaa8\ub4e0 \uc0ac\uc9c4\ud2c0\uc740 \ube44\uc5b4\uc788\ub2e4."}),"\n",(0,t.jsx)(e.li,{children:"\uc5b4\ub5a4 \ud559\uc0dd\uc774 \ud2b9\uc815 \ud559\uc0dd\uc744 \ucd94\ucc9c\ud558\uba74, \ucd94\ucc9c\ubc1b\uc740 \ud559\uc0dd\uc758 \uc0ac\uc9c4\uc774 \ubc18\ub4dc\uc2dc \uc0ac\uc9c4\ud2c0\uc5d0 \uac8c\uc2dc\ub418\uc5b4\uc57c \ud55c\ub2e4."}),"\n",(0,t.jsx)(e.li,{children:"\ube44\uc5b4\uc788\ub294 \uc0ac\uc9c4\ud2c0\uc774 \uc5c6\ub294 \uacbd\uc6b0\uc5d0\ub294 \ud604\uc7ac\uae4c\uc9c0 \ucd94\ucc9c \ubc1b\uc740 \ud69f\uc218\uac00 \uac00\uc7a5 \uc801\uc740 \ud559\uc0dd\uc758 \uc0ac\uc9c4\uc744 \uc0ad\uc81c\ud558\uace0, \uadf8 \uc790\ub9ac\uc5d0 \uc0c8\ub86d\uac8c \ucd94\ucc9c\ubc1b\uc740 \ud559\uc0dd\uc758 \uc0ac\uc9c4\uc744 \uac8c\uc2dc\ud55c\ub2e4. \uc774\ub54c, \ud604\uc7ac\uae4c\uc9c0 \ucd94\ucc9c \ubc1b\uc740 \ud69f\uc218\uac00 \uac00\uc7a5 \uc801\uc740 \ud559\uc0dd\uc774 \ub450 \uba85 \uc774\uc0c1\uc77c \uacbd\uc6b0\uc5d0\ub294 \uadf8\ub7ec\ud55c \ud559\uc0dd\ub4e4 \uc911 \uac8c\uc2dc\ub41c \uc9c0 \uac00\uc7a5 \uc624\ub798\ub41c \uc0ac\uc9c4\uc744 \uc0ad\uc81c\ud55c\ub2e4."}),"\n",(0,t.jsx)(e.li,{children:"\ud604\uc7ac \uc0ac\uc9c4\uc774 \uac8c\uc2dc\ub41c \ud559\uc0dd\uc774 \ub2e4\ub978 \ud559\uc0dd\uc758 \ucd94\ucc9c\uc744 \ubc1b\uc740 \uacbd\uc6b0\uc5d0\ub294 \ucd94\ucc9c\ubc1b\uc740 \ud69f\uc218\ub9cc \uc99d\uac00\uc2dc\ud0a8\ub2e4."}),"\n",(0,t.jsx)(e.li,{children:"\uc0ac\uc9c4\ud2c0\uc5d0 \uac8c\uc2dc\ub41c \uc0ac\uc9c4\uc774 \uc0ad\uc81c\ub418\ub294 \uacbd\uc6b0\uc5d0\ub294 \ud574\ub2f9 \ud559\uc0dd\uc774 \ucd94\ucc9c\ubc1b\uc740 \ud69f\uc218\ub294 0\uc73c\ub85c \ubc14\ub010\ub2e4."}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"\ud6c4\ubcf4\uc758 \uc218 \uc989, \uc0ac\uc9c4\ud2c0\uc758 \uac1c\uc218\uc640 \uc804\uccb4 \ud559\uc0dd\uc758 \ucd94\ucc9c \uacb0\uacfc\uac00 \ucd94\ucc9c\ubc1b\uc740 \uc21c\uc11c\ub300\ub85c \uc8fc\uc5b4\uc84c\uc744 \ub54c, \ucd5c\uc885 \ud6c4\ubcf4\uac00 \ub204\uad6c\uc778\uc9c0 \uacb0\uc815\ud558\ub294 \ud504\ub85c\uadf8\ub7a8\uc744 \uc791\uc131\ud558\uc2dc\uc624."}),"\n",(0,t.jsx)(e.h3,{id:"\uc785\ub825",children:"\uc785\ub825"}),"\n",(0,t.jsx)(e.p,{children:"\uccab\uc9f8 \uc904\uc5d0\ub294 \uc0ac\uc9c4\ud2c0\uc758 \uac1c\uc218 N\uc774 \uc8fc\uc5b4\uc9c4\ub2e4. (1 \u2264 N \u2264 20) \ub458\uc9f8 \uc904\uc5d0\ub294 \uc804\uccb4 \ud559\uc0dd\uc758 \ucd1d \ucd94\ucc9c \ud69f\uc218\uac00 \uc8fc\uc5b4\uc9c0\uace0, \uc14b\uc9f8 \uc904\uc5d0\ub294 \ucd94\ucc9c\ubc1b\uc740 \ud559\uc0dd\uc744 \ub098\ud0c0\ub0b4\ub294 \ubc88\ud638\uac00 \ube48 \uce78\uc744 \uc0ac\uc774\uc5d0 \ub450\uace0 \ucd94\ucc9c\ubc1b\uc740 \uc21c\uc11c\ub300\ub85c \uc8fc\uc5b4\uc9c4\ub2e4. \ucd1d \ucd94\ucc9c \ud69f\uc218\ub294 1,000\ubc88 \uc774\ud558\uc774\uba70 \ud559\uc0dd\uc744 \ub098\ud0c0\ub0b4\ub294 \ubc88\ud638\ub294 1\ubd80\ud130 100\uae4c\uc9c0\uc758 \uc790\uc5f0\uc218\uc774\ub2e4."}),"\n",(0,t.jsx)(e.h3,{id:"\ucd9c\ub825",children:"\ucd9c\ub825"}),"\n",(0,t.jsx)(e.p,{children:"\uc0ac\uc9c4\ud2c0\uc5d0 \uc0ac\uc9c4\uc774 \uac8c\uc7ac\ub41c \ucd5c\uc885 \ud6c4\ubcf4\uc758 \ud559\uc0dd \ubc88\ud638\ub97c \uc99d\uac00\ud558\ub294 \uc21c\uc11c\ub300\ub85c \ucd9c\ub825\ud55c\ub2e4."}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsx)(e.h3,{id:"\ubb38\uc81c-\ud480\uc774",children:"\ubb38\uc81c \ud480\uc774"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-javascript",children:'const fs = require("fs");\nconst filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";\nconst input = require("fs")\n  .readFileSync(filepath)\n  .toString()\n  .trim()\n  .split("\\n");\n\nconst N = +input[0]; // \uc0ac\uc9c4\ud2c0 \uac1c\uc218\nconst K = +input[1]; // \ucd1d \ucd94\ucc9c \ud69f\uc218\nconst arr = input[2].split(" ").map(Number); // \ucd94\ucc9c\ubc1b\uc740 \ud559\uc0dd \ubc88\ud638\ub97c \ubc30\uc5f4\ub85c \ubcc0\ud658\nconst candidates = new Map(); // \ud6c4\ubcf4\uc790 \uc815\ubcf4\ub97c \uc800\uc7a5\ud560 Map \uac1d\uccb4\n\nfor (let i = 0; i < K; i++) {\n  let num = arr[i]; // \ud604\uc7ac \ucd94\ucc9c\ubc1b\uc740 \ud559\uc0dd \ubc88\ud638\n\n  // \uc774\ubbf8 \ud6c4\ubcf4\ub85c \ub4f1\ub85d\ub41c \ud559\uc0dd\uc774\ub77c\uba74 \ucd94\ucc9c \ud69f\uc218\ub9cc \uc99d\uac00\n  if (candidates.has(num)) {\n    candidates.get(num)[0]++; // \ucd94\ucc9c \ud69f\uc218 \uc99d\uac00\n  } else {\n    // \uc0ac\uc9c4\ud2c0\uc774 \uaf49 \ucc3c\ub2e4\uba74 \ud6c4\ubcf4 \uc911 \ucd94\ucc9c \ud69f\uc218\uac00 \uac00\uc7a5 \uc801\uc740 \ud559\uc0dd\uc744 \uc81c\uac70\n    if (candidates.size === N) {\n      let min = null; // \ucd94\ucc9c \ud69f\uc218\uac00 \uac00\uc7a5 \uc801\uc740 \ud559\uc0dd\uc744 \ucc3e\uae30 \uc704\ud55c \ubcc0\uc218\n\n      // Map\uc758 \ubaa8\ub4e0 \ud6c4\ubcf4\ub97c \uc21c\ud68c\n      for ([key, value] of candidates.entries()) {\n        if (!min) {\n          min = [key, value]; // \uccab \ubc88\uc9f8 \ud559\uc0dd\uc744 \ucd5c\uc18c\uac12\uc73c\ub85c \uc124\uc815\n          continue;\n        }\n\n        const [minCnt, minTime] = min[1]; // \ucd5c\uc18c\uac12\uc758 \ucd94\ucc9c \ud69f\uc218\uc640 \ub4f1\ub85d \uc2dc\uac04\n        const [nowCnt, nowTime] = value; // \ud604\uc7ac \ud559\uc0dd\uc758 \ucd94\ucc9c \ud69f\uc218\uc640 \ub4f1\ub85d \uc2dc\uac04\n\n        // \ucd94\ucc9c \ud69f\uc218\uac00 \ub354 \uc801\uac70\ub098, \ub3d9\uc77c\ud55c \uacbd\uc6b0 \ub4f1\ub85d \uc2dc\uac04\uc774 \ub354 \uc624\ub798\ub41c \ud559\uc0dd \uc120\ud0dd\n        if (nowCnt < minCnt || (nowCnt === minCnt && nowTime < minTime)) {\n          min = [key, value]; // \uc0c8\ub85c\uc6b4 \ucd5c\uc18c\uac12 \uac31\uc2e0\n        }\n      }\n\n      candidates.delete(min[0]); // \ucd5c\uc18c\uac12\uc778 \ud559\uc0dd \uc81c\uac70\n    }\n\n    candidates.set(num, [1, i]); // \uc0c8\ub85c\uc6b4 \ud559\uc0dd\uc744 Map\uc5d0 \ub4f1\ub85d (\ucd94\ucc9c \ud69f\uc218 1, \ub4f1\ub85d \uc2dc\uac04 i)\n  }\n}\n\nlet answer = "";\n// \ud6c4\ubcf4 \ud559\uc0dd\ub4e4\uc744 \ubc88\ud638\uc21c\uc73c\ub85c \uc815\ub82c\ud55c \ud6c4 \ucd9c\ub825\n[...candidates.keys()]\n  .sort((a, b) => a - b) // \ubc88\ud638\uc21c \uc815\ub82c\n  .forEach((candidate) => (answer += candidate + " ")); // \uacb0\uacfc \ubb38\uc790\uc5f4\uc5d0 \ucd94\uac00\nconsole.log(answer); // \uacb0\uacfc \ucd9c\ub825\n'})})]})}function m(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(c,{...n})}):c(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>o,x:()=>r});var t=i(6540);const s={},l=t.createContext(s);function o(n){const e=t.useContext(l);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),t.createElement(l.Provider,{value:e},n.children)}}}]);