"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1039],{3038:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=t(4848),i=t(8453);const o={sidebar_position:2},s=void 0,a={id:"likelion-study/algorithm/implement/1475",title:"1475",description:"\ubc29 \ubc88\ud638",source:"@site/docs/likelion-study/algorithm/implement/1475.md",sourceDirName:"likelion-study/algorithm/implement",slug:"/likelion-study/algorithm/implement/1475",permalink:"/docs/likelion-study/algorithm/implement/1475",draft:!1,unlisted:!1,editUrl:"https://github.com/55yong/55yong.github.io/tree/main/packages/create-docusaurus/templates/shared/docs/likelion-study/algorithm/implement/1475.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"likelionStudy",previous:{title:"\uad6c\ud604",permalink:"/docs/category/\uad6c\ud604-1"}},l={},c=[{value:"\ubc29 \ubc88\ud638",id:"\ubc29-\ubc88\ud638",level:2}];function u(e){const n={code:"code",h2:"h2",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\ubc29-\ubc88\ud638",children:"\ubc29 \ubc88\ud638"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const fs = require("fs");\nconst filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";\nconst input = fs.readFileSync(filepath).toString().trim().split("");\n\n// 10 \ud06c\uae30\uc758 0\uc73c\ub85c \uac00\ub4dd\ucc2c \ubc30\uc5f4 \uc0dd\uc131\nconst arr = new Array(10).fill(0);\n\n// \uc785\ub825\ub41c \uac12 for\ubb38\uc73c\ub85c \uc21c\ud68c\ud558\uba70 \ub9cc\uc57d 1\uc774 \uc788\ub2e4\uba74 arr[1]\uc5d0 +1 \ud558\ub294 \uc2dd\uc73c\ub85c \uac12 \uad6c\ubcc4\nfor (let i = 0; i < input.length; i++) {\n  arr[input[i]]++;\n}\n\n// \ub9cc\uc57d arr[9]\uc5d0 \uac12\uc774 \uc788\ub2e4\uba74 \uc81c\uac70 \ud6c4 arr[6]\uc5d0 \ub2e4 \ucd94\uac00\nif (arr[9]) {\n  arr[6] += arr.pop();\n}\n\n// \uadf8 \ud6c4 arr[6]\uc744 2\ub85c \ub098\ub208 \ud6c4 \uc18c\uc218\uc810 \uc62c\ub9bc\narr[6] = Math.ceil(arr[6] / 2);\n\n// \ucd5c\ub300\uac12 \ucc3e\uae30 (\ucd5c\ub300\uac12\uc774 \ubc29 \ubc88\ud638\ub97c \ub9cc\ub4dc\ub294\ub370 \ud544\uc694\ud55c \uc138\ud2b8 \uac2f\uc218\uc774\ub2c8\uae4c)\nconst max = Math.max.apply(null, arr);\n\n// \ucd9c\ub825\nconsole.log(max);\n'})})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var r=t(6540);const i={},o=r.createContext(i);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);