"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8142],{3854:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>a});var i=e(4848),o=e(8453);const s={slug:"boj12871",title:"[BOJ][JS] 12871 \ubb34\ud55c \ubb38\uc790\uc5f4",sidebar_position:4},l=void 0,r={id:"likelion-study/algorithm/implement/12871",title:"[BOJ][JS] 12871 \ubb34\ud55c \ubb38\uc790\uc5f4",description:"[BOJ] 12871 \ubb34\ud55c \ubb38\uc790\uc5f4",source:"@site/docs/likelion-study/algorithm/implement/12871.md",sourceDirName:"likelion-study/algorithm/implement",slug:"/likelion-study/algorithm/implement/boj12871",permalink:"/docs/likelion-study/algorithm/implement/boj12871",draft:!1,unlisted:!1,editUrl:"https://github.com/55yong/55yong.github.io/tree/main/packages/create-docusaurus/templates/shared/docs/likelion-study/algorithm/implement/12871.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{slug:"boj12871",title:"[BOJ][JS] 12871 \ubb34\ud55c \ubb38\uc790\uc5f4",sidebar_position:4},sidebar:"likelionStudy",previous:{title:"[BOJ][JS] 1748 \uc218 \uc774\uc5b4 \uc4f0\uae30 1",permalink:"/docs/likelion-study/algorithm/implement/boj1748"},next:{title:"[BOJ][JS] 20006 \ub7ad\ud0b9\uc804 \ub300\uae30\uc5f4",permalink:"/docs/likelion-study/algorithm/implement/boj20006"}},c={},a=[{value:"[BOJ] 12871 \ubb34\ud55c \ubb38\uc790\uc5f4",id:"boj-12871-\ubb34\ud55c-\ubb38\uc790\uc5f4",level:2}];function m(t){const n={a:"a",code:"code",h2:"h2",pre:"pre",...(0,o.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"boj-12871-\ubb34\ud55c-\ubb38\uc790\uc5f4",children:(0,i.jsx)(n.a,{href:"https://www.acmicpc.net/problem/12871",children:"[BOJ] 12871 \ubb34\ud55c \ubb38\uc790\uc5f4"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'const fs = require("fs");\nconst filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";\nconst input = fs.readFileSync(filepath).toString().trim().split("\\n");\n\nconst s = input[0];\nconst t = input[1];\n\n// \ucd5c\ub300\uacf5\ubc30\uc218 \uad6c\ud558\ub294 \ud568\uc218\nconst GCD = (a, b) => {\n  while (b != 0) {\n    let n = a % b;\n    a = b;\n    b = n;\n  }\n  return a;\n};\n\n// \ucd5c\ub300\uacf5\ubc30\uc218 \uad6c\ud574\uc11c \ubcc0\uc218\uc5d0 \ub2f4\uae30\nlet gcd = GCD(s.length, t.length);\n\n// \uc784\uc2dc\ub85c \ub2f4\uc744 temp \ubc30\uc5f4 \uc0dd\uc131\nlet temp = [];\n\n// \ubb38\uc790\uc5f4 s\ub97c \ucd5c\ub300\uacf5\ubc30\uc218\ub9cc\ud07c \uc790\ub974\uae30\nfor (let i = 0; i < s.length; i += gcd) {\n  temp.push(s.substring(i, i + gcd));\n}\n\n// \ubb38\uc790\uc5f4 t\ub97c \ucd5c\ub300\uacf5\ubc30\uc218\ub9cc\ud07c \uc790\ub974\uae30\nfor (let i = 0; i < t.length; i += gcd) {\n  temp.push(t.substring(i, i + gcd));\n}\n\n// \uc790\ub978 \ubb38\uc790\uc5f4\uc744 \ubaa8\ub450 \ube44\uad50\ud574\uc11c \ubaa8\ub450 \ub0b4\uc6a9\uc774 \uac19\uc73c\uba74 1, \uc544\ub2c8\uba74 0\nfor (let i = 0; i < temp.length; i++) {\n  if (temp[i] !== temp[0]) {\n    console.log(0);\n    return 0;\n  }\n}\n\nconsole.log(1);\n'})})]})}function p(t={}){const{wrapper:n}={...(0,o.R)(),...t.components};return n?(0,i.jsx)(n,{...t,children:(0,i.jsx)(m,{...t})}):m(t)}},8453:(t,n,e)=>{e.d(n,{R:()=>l,x:()=>r});var i=e(6540);const o={},s=i.createContext(o);function l(t){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function r(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:l(t.components),i.createElement(s.Provider,{value:n},t.children)}}}]);