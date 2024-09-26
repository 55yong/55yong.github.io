"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9498],{467:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>a});var i=n(4848),o=n(8453);const s={slug:"boj1748",title:"[BOJ][JS] 1748 \uc218 \uc774\uc5b4 \uc4f0\uae30 1",sidebar_position:3},l=void 0,r={id:"likelion-study/algorithm/implement/1748",title:"[BOJ][JS] 1748 \uc218 \uc774\uc5b4 \uc4f0\uae30 1",description:"[BOJ] 1748 \uc218 \uc774\uc5b4\uc4f0\uae30 1",source:"@site/docs/likelion-study/algorithm/implement/1748.md",sourceDirName:"likelion-study/algorithm/implement",slug:"/likelion-study/algorithm/implement/boj1748",permalink:"/docs/likelion-study/algorithm/implement/boj1748",draft:!1,unlisted:!1,editUrl:"https://github.com/55yong/55yong.github.io/tree/main/packages/create-docusaurus/templates/shared/docs/likelion-study/algorithm/implement/1748.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{slug:"boj1748",title:"[BOJ][JS] 1748 \uc218 \uc774\uc5b4 \uc4f0\uae30 1",sidebar_position:3},sidebar:"likelionStudy",previous:{title:"[BOJ][JS] 1475 \ubc29 \ubc88\ud638",permalink:"/docs/likelion-study/algorithm/implement/boj1475"},next:{title:"[BOJ][JS] 12871 \ubb34\ud55c \ubb38\uc790\uc5f4",permalink:"/docs/likelion-study/algorithm/implement/boj12871"}},c={},a=[{value:"[BOJ] 1748 \uc218 \uc774\uc5b4\uc4f0\uae30 1",id:"boj-1748-\uc218-\uc774\uc5b4\uc4f0\uae30-1",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"boj-1748-\uc218-\uc774\uc5b4\uc4f0\uae30-1",children:(0,i.jsx)(t.a,{href:"https://www.acmicpc.net/problem/1748",children:"[BOJ] 1748 \uc218 \uc774\uc5b4\uc4f0\uae30 1"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'const fs = require("fs");\nconst filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";\nconst input = fs.readFileSync(filepath).toString().trim().split("\\n");\n\nlet result = 0;\n\nfor (let i = 1; i <= input; i *= 10) {\n  result += input - i + 1;\n}\n\nconsole.log(result);\n\n/**\n * \uc785\ub825\uac12\uc774 821\uc778 \uacbd\uc6b0\n * input - i + 1\uc774\ub2c8\uc634\n * 1   ~   9\uc758 \uac1c\uc218\ub294 9 - 1 + 1 = 9\uac1c\n * 10  ~  99\uc758 \uac1c\uc218\ub294 99 - 10 + 1 = 90\uac1c\n * 100 ~ 821\uc758 \uac1c\uc218\ub294 821 - 100 + 1 = 722\uac1c\ub85c \uacc4\uc0b0\ud560 \uc218 \uc788\uc74c\n * \uadf8\ub9ac\uace0 \uc790\ub9bf\uc218\ub97c \uacc4\uc0b0\ud574\uc11c \uc790\ub9bf\uc218\ub9cc\ud07c \uacf1\ud574\uc11c \ub367\uc148\ud558\uba74 \ub428\n * (9 * 1) + (90 * 2) + (722 * 3) = 2355\n */\n'})})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>r});var i=n(6540);const o={},s=i.createContext(o);function l(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);