"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9293],{7788:(n,i,e)=>{e.r(i),e.d(i,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var t=e(4848),c=e(8453);const r={slug:"boj1003",title:"[BOJ][JS] 1003 \ud53c\ubcf4\ub098\uce58 \ud568\uc218",sidebar_position:3},l=void 0,o={id:"likelion-study/algorithm/dp/01-1003",title:"[BOJ][JS] 1003 \ud53c\ubcf4\ub098\uce58 \ud568\uc218",description:"[BOJ] 1003 \ud53c\ubcf4\ub098\uce58 \ud568\uc218",source:"@site/docs/likelion-study/algorithm/dp/01-1003.md",sourceDirName:"likelion-study/algorithm/dp",slug:"/likelion-study/algorithm/dp/boj1003",permalink:"/docs/likelion-study/algorithm/dp/boj1003",draft:!1,unlisted:!1,editUrl:"https://github.com/55yong/55yong.github.io/tree/main/packages/create-docusaurus/templates/shared/docs/likelion-study/algorithm/dp/01-1003.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{slug:"boj1003",title:"[BOJ][JS] 1003 \ud53c\ubcf4\ub098\uce58 \ud568\uc218",sidebar_position:3},sidebar:"likelionStudy",previous:{title:"\ub2e4\uc774\ub098\ubbf9 \ud504\ub85c\uadf8\ub798\ubc0d",permalink:"/docs/category/\ub2e4\uc774\ub098\ubbf9-\ud504\ub85c\uadf8\ub798\ubc0d-1"},next:{title:"[BOJ][JS] 9095 1,2,3 \ub354\ud558\uae30",permalink:"/docs/likelion-study/algorithm/dp/boj9095"}},s={},d=[{value:"[BOJ] 1003 \ud53c\ubcf4\ub098\uce58 \ud568\uc218",id:"boj-1003-\ud53c\ubcf4\ub098\uce58-\ud568\uc218",level:2},{value:"\ubb38\uc81c",id:"\ubb38\uc81c",level:3},{value:"\uc785\ub825",id:"\uc785\ub825",level:3},{value:"\ucd9c\ub825",id:"\ucd9c\ub825",level:3},{value:"\ubb38\uc81c \ud480\uc774",id:"\ubb38\uc81c-\ud480\uc774",level:3}];function a(n){const i={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h2,{id:"boj-1003-\ud53c\ubcf4\ub098\uce58-\ud568\uc218",children:(0,t.jsx)(i.a,{href:"https://www.acmicpc.net/problem/1003",children:"[BOJ] 1003 \ud53c\ubcf4\ub098\uce58 \ud568\uc218"})}),"\n",(0,t.jsx)(i.p,{children:"2024-10-08"}),"\n",(0,t.jsxs)(i.p,{children:["\uc2dc\uac04 \uc81c\ud55c : 0.25\ucd08",(0,t.jsx)(i.br,{}),"\n","\uba54\ubaa8\ub9ac \uc81c\ud55c : 128MB"]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h3,{id:"\ubb38\uc81c",children:"\ubb38\uc81c"}),"\n",(0,t.jsx)(i.p,{children:"\ub2e4\uc74c \uc18c\uc2a4\ub294 N\ubc88\uc9f8 \ud53c\ubcf4\ub098\uce58 \uc218\ub97c \uad6c\ud558\ub294 C++ \ud568\uc218\uc774\ub2e4."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-cpp",children:'int fibonacci(int n) {\n    if (n == 0) {\n        printf("0");\n        return 0;\n    } else if (n == 1) {\n        printf("1");\n        return 1;\n    } else {\n        return fibonacci(n\u20101) + fibonacci(n\u20102);\n    }\n}\n'})}),"\n",(0,t.jsx)(i.p,{children:"fibonacci(3)\uc744 \ud638\ucd9c\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc740 \uc77c\uc774 \uc77c\uc5b4\ub09c\ub2e4."}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"fibonacci(3)\uc740 fibonacci(2)\uc640 fibonacci(1) (\uccab \ubc88\uc9f8 \ud638\ucd9c)\uc744 \ud638\ucd9c\ud55c\ub2e4."}),"\n",(0,t.jsx)(i.li,{children:"fibonacci(2)\ub294 fibonacci(1) (\ub450 \ubc88\uc9f8 \ud638\ucd9c)\uacfc fibonacci(0)\uc744 \ud638\ucd9c\ud55c\ub2e4."}),"\n",(0,t.jsx)(i.li,{children:"\ub450 \ubc88\uc9f8 \ud638\ucd9c\ud55c fibonacci(1)\uc740 1\uc744 \ucd9c\ub825\ud558\uace0 1\uc744 \ub9ac\ud134\ud55c\ub2e4."}),"\n",(0,t.jsx)(i.li,{children:"fibonacci(0)\uc740 0\uc744 \ucd9c\ub825\ud558\uace0, 0\uc744 \ub9ac\ud134\ud55c\ub2e4."}),"\n",(0,t.jsx)(i.li,{children:"fibonacci(2)\ub294 fibonacci(1)\uacfc fibonacci(0)\uc758 \uacb0\uacfc\ub97c \uc5bb\uace0, 1\uc744 \ub9ac\ud134\ud55c\ub2e4."}),"\n",(0,t.jsx)(i.li,{children:"\uccab \ubc88\uc9f8 \ud638\ucd9c\ud55c fibonacci(1)\uc740 1\uc744 \ucd9c\ub825\ud558\uace0, 1\uc744 \ub9ac\ud134\ud55c\ub2e4."}),"\n",(0,t.jsx)(i.li,{children:"fibonacci(3)\uc740 fibonacci(2)\uc640 fibonacci(1)\uc758 \uacb0\uacfc\ub97c \uc5bb\uace0, 2\ub97c \ub9ac\ud134\ud55c\ub2e4."}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"1\uc740 2\ubc88 \ucd9c\ub825\ub418\uace0, 0\uc740 1\ubc88 \ucd9c\ub825\ub41c\ub2e4. N\uc774 \uc8fc\uc5b4\uc84c\uc744 \ub54c, fibonacci(N)\uc744 \ud638\ucd9c\ud588\uc744 \ub54c, 0\uacfc 1\uc774 \uac01\uac01 \uba87 \ubc88 \ucd9c\ub825\ub418\ub294\uc9c0 \uad6c\ud558\ub294 \ud504\ub85c\uadf8\ub7a8\uc744 \uc791\uc131\ud558\uc2dc\uc624."}),"\n",(0,t.jsx)(i.h3,{id:"\uc785\ub825",children:"\uc785\ub825"}),"\n",(0,t.jsx)(i.p,{children:"\uccab\uc9f8 \uc904\uc5d0 \ud14c\uc2a4\ud2b8 \ucf00\uc774\uc2a4\uc758 \uac1c\uc218 T\uac00 \uc8fc\uc5b4\uc9c4\ub2e4."}),"\n",(0,t.jsx)(i.p,{children:"\uac01 \ud14c\uc2a4\ud2b8 \ucf00\uc774\uc2a4\ub294 \ud55c \uc904\ub85c \uc774\ub8e8\uc5b4\uc838 \uc788\uace0, N\uc774 \uc8fc\uc5b4\uc9c4\ub2e4. N\uc740 40\ubcf4\ub2e4 \uc791\uac70\ub098 \uac19\uc740 \uc790\uc5f0\uc218 \ub610\ub294 0\uc774\ub2e4."}),"\n",(0,t.jsx)(i.h3,{id:"\ucd9c\ub825",children:"\ucd9c\ub825"}),"\n",(0,t.jsx)(i.p,{children:"\uac01 \ud14c\uc2a4\ud2b8 \ucf00\uc774\uc2a4\ub9c8\ub2e4 0\uc774 \ucd9c\ub825\ub418\ub294 \ud69f\uc218\uc640 1\uc774 \ucd9c\ub825\ub418\ub294 \ud69f\uc218\ub97c \uacf5\ubc31\uc73c\ub85c \uad6c\ubd84\ud574\uc11c \ucd9c\ub825\ud55c\ub2e4."}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h3,{id:"\ubb38\uc81c-\ud480\uc774",children:"\ubb38\uc81c \ud480\uc774"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-js",children:'const filepath =\n  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";\nconst [T, ...N] = require("fs")\n  .readFileSync(filepath)\n  .toString()\n  .trim()\n  .split("\\n")\n  .map(Number);\n\n// N\uc740 0 ~ 40\uc774\uace0 0\ub610\ub294 1\uc758 \ucd9c\ub825 \ud69f\uc218\ub97c \uc800\uc7a5\ud558\uae30 \ub54c\ubb38\uc5d0 2\ucc28\uc6d0 \ubc30\uc5f4 (41, 2) \ud06c\uae30\ub85c \uc0dd\uc131\nconst dp = Array.from(Array(41), () => new Array(2).fill(0));\n\n// \ucd08\uae30\uac12 \uc124\uc815 (fib(0)\uc77c \uacbd\uc6b0 0\uc774 1\ubc88, fib(1)\uc77c \uacbd\uc6b0 1\uc774 1\ubc88 \ud638\ucd9c\ub418\uae30 \ub54c\ubb38)\ndp[0][0] = 1;\ndp[1][1] = 1;\n\n// fib(2) ~ fib(40)\uae4c\uc9c0 0\uacfc 1\uc774 \ud638\ucd9c\ub41c \ud69f\uc218\ub97c \uacc4\uc0b0\nfor (let i = 2; i < 41; i++) {\n  // fib(i)\uc5d0\uc11c 0\uc774 \ud638\ucd9c\ub41c \ud69f\uc218\ub97c \uad6c\ud558\ub294 \uacfc\uc815, f(i - 1)\uacfc f(i - 2)\uc5d0\uc11c 0\uc774 \ud638\ucd9c\ub41c \ud69f\uc218\uc758 \ud569\uc784\n  dp[i][0] = dp[i - 1][0] + dp[i - 2][0];\n  // fib(i)\uc5d0\uc11c 1\uc774 \ud638\ucd9c\ub41c \ud69f\uc218\ub97c \uad6c\ud558\ub294 \uacfc\uc815, f(i - 1)\uacfc f(i - 2)\uc5d0\uc11c 1\uc774 \ud638\ucd9c\ub41c \ud69f\uc218\uc758 \ud569\uc784\n  dp[i][1] = dp[i - 1][1] + dp[i - 2][1];\n}\n\n// \uac01 \ud14c\uc2a4\ud2b8 \ucf00\uc774\uc2a4\uc5d0 \ub300\ud558\uc5ec dp \ubc30\uc5f4\uc5d0\uc11c \ud574\ub2f9 \uac12\uc758 \uacb0\uacfc \uac00\uc838\uc624\uae30\nconst result = N.map((e) => dp[e].join(" "));\n\nconsole.log(result.join("\\n"));\n'})})]})}function p(n={}){const{wrapper:i}={...(0,c.R)(),...n.components};return i?(0,t.jsx)(i,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},8453:(n,i,e)=>{e.d(i,{R:()=>l,x:()=>o});var t=e(6540);const c={},r=t.createContext(c);function l(n){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function o(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:l(n.components),t.createElement(r.Provider,{value:i},n.children)}}}]);