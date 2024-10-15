"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7629],{1056:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=t(4848),s=t(8453);const r={slug:"boj2491",title:"[BOJ][JS] 2491 \uc218\uc5f4",sidebar_position:7},l=void 0,o={id:"likelion-study/algorithm/dp/05-2491",title:"[BOJ][JS] 2491 \uc218\uc5f4",description:"[BOJ] 2491 \uc218\uc5f4",source:"@site/docs/likelion-study/algorithm/dp/05-2491.md",sourceDirName:"likelion-study/algorithm/dp",slug:"/likelion-study/algorithm/dp/boj2491",permalink:"/docs/likelion-study/algorithm/dp/boj2491",draft:!1,unlisted:!1,editUrl:"https://github.com/55yong/55yong.github.io/tree/main/packages/create-docusaurus/templates/shared/docs/likelion-study/algorithm/dp/05-2491.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{slug:"boj2491",title:"[BOJ][JS] 2491 \uc218\uc5f4",sidebar_position:7},sidebar:"likelionStudy",previous:{title:"[BOJ][JS] 11051 \uc774\ud56d \uacc4\uc218 2",permalink:"/docs/likelion-study/algorithm/dp/boj11051"},next:{title:"[BOJ][JS] 11053 \uac00\uc7a5 \uae34 \uc99d\uac00\ud558\ub294 \ubd80\ubd84 \uc218\uc5f4",permalink:"/docs/likelion-study/algorithm/dp/boj10053"}},a={},d=[{value:"[BOJ] 2491 \uc218\uc5f4",id:"boj-2491-\uc218\uc5f4",level:2},{value:"\ubb38\uc81c",id:"\ubb38\uc81c",level:3},{value:"\uc785\ub825",id:"\uc785\ub825",level:3},{value:"\ucd9c\ub825",id:"\ucd9c\ub825",level:3},{value:"\ubb38\uc81c \ud480\uc774",id:"\ubb38\uc81c-\ud480\uc774",level:3}];function c(e){const n={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"boj-2491-\uc218\uc5f4",children:(0,i.jsx)(n.a,{href:"https://www.acmicpc.net/problem/2491",children:"[BOJ] 2491 \uc218\uc5f4"})}),"\n",(0,i.jsx)(n.p,{children:"2024-10-14"}),"\n",(0,i.jsxs)(n.p,{children:["\uc2dc\uac04 \uc81c\ud55c : 1\ucd08",(0,i.jsx)(n.br,{}),"\n","\uba54\ubaa8\ub9ac \uc81c\ud55c : 128MB"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"\ubb38\uc81c",children:"\ubb38\uc81c"}),"\n",(0,i.jsx)(n.p,{children:"0\uc5d0\uc11c\ubd80\ud130 9\uae4c\uc9c0\uc758 \uc22b\uc790\ub85c \uc774\ub8e8\uc5b4\uc9c4 N\uac1c\uc758 \uc22b\uc790\uac00 \ub098\uc5f4\ub41c \uc218\uc5f4\uc774 \uc788\ub2e4. \uadf8 \uc218\uc5f4 \uc548\uc5d0\uc11c \uc5f0\uc18d\ud574\uc11c \ucee4\uc9c0\uac70\ub098(\uac19\uc740 \uac83 \ud3ec\ud568), \ud639\uc740 \uc5f0\uc18d\ud574\uc11c \uc791\uc544\uc9c0\ub294(\uac19\uc740 \uac83 \ud3ec\ud568) \uc218\uc5f4 \uc911 \uac00\uc7a5 \uae38\uc774\uac00 \uae34 \uac83\uc744 \ucc3e\uc544\ub0b4\uc5b4 \uadf8 \uae38\uc774\ub97c \ucd9c\ub825\ud558\ub294 \ud504\ub85c\uadf8\ub7a8\uc744 \uc791\uc131\ud558\ub77c."}),"\n",(0,i.jsx)(n.p,{children:"\uc608\ub97c \ub4e4\uc5b4 \uc218\uc5f4 1, 2, 2, 4, 4, 5, 7, 7, 2 \uc758 \uacbd\uc6b0\uc5d0\ub294 1 \u2264 2 \u2264 2 \u2264 4 \u2264 4 \u2264 5 \u2264 7 \u2264 7 \uc774 \uac00\uc7a5 \uae34 \uad6c\uac04\uc774 \ub418\ubbc0\ub85c \uadf8 \uae38\uc774 8\uc744 \ucd9c\ub825\ud55c\ub2e4. \uc218\uc5f4 4, 1, 3, 3, 2, 2, 9, 2, 3 \uc758 \uacbd\uc6b0\uc5d0\ub294 3 \u2265 3 \u2265 2 \u2265 2 \uac00 \uac00\uc7a5 \uae34 \uad6c\uac04\uc774 \ub418\ubbc0\ub85c \uadf8 \uae38\uc774 4\ub97c \ucd9c\ub825\ud55c\ub2e4. \ub610 1, 5, 3, 6, 4, 7, 1, 3, 2, 9, 5 \uc758 \uacbd\uc6b0\uc5d0\ub294 \uc5f0\uc18d\ud574\uc11c \ucee4\uc9c0\uac70\ub098 \uc791\uc544\uc9c0\ub294 \uc218\uc5f4\uc758 \uae38\uc774\uac00 3 \uc774\uc0c1\uc778 \uacbd\uc6b0\uac00 \uc5c6\uc73c\ubbc0\ub85c 2\ub97c \ucd9c\ub825\ud558\uc5ec\uc57c \ud55c\ub2e4."}),"\n",(0,i.jsx)(n.h3,{id:"\uc785\ub825",children:"\uc785\ub825"}),"\n",(0,i.jsx)(n.p,{children:"\uccab\uc9f8 \uc904\uc5d0\ub294 \uc218\uc5f4\uc758 \uae38\uc774 N\uc774 \uc8fc\uc5b4\uc9c0\uace0, \ub458\uc9f8 \uc904\uc5d0\ub294 N\uac1c\uc758 \uc22b\uc790\uac00 \ube48\uce78\uc744 \uc0ac\uc774\uc5d0 \ub450\uace0 \uc8fc\uc5b4\uc9c4\ub2e4. N\uc740 1 \uc774\uc0c1 100,000 \uc774\ud558\uc758 \uc815\uc218\uc774\ub2e4."}),"\n",(0,i.jsx)(n.h3,{id:"\ucd9c\ub825",children:"\ucd9c\ub825"}),"\n",(0,i.jsx)(n.p,{children:"\uccab\uc9f8 \uc904\uc5d0 \uac00\uc7a5 \uae34 \uae38\uc774\ub97c \ucd9c\ub825\ud55c\ub2e4."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"\ubb38\uc81c-\ud480\uc774",children:"\ubb38\uc81c \ud480\uc774"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'const filepath =\n  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";\nconst input = require("fs")\n  .readFileSync(filepath)\n  .toString()\n  .trim()\n  .split("\\n");\n\nconst N = input[0];\nconst arr = input[1].split(" ").map(Number);\nlet answer = 0;\nlet asc = 1;\nlet desc = 1;\n\nfor (let i = 0; i < N; i++) {\n  if (arr[i] <= arr[i + 1]) {\n    asc++;\n  } else {\n    asc = 1;\n  }\n  answer = Math.max(asc, answer);\n}\n\nfor (let i = 0; i < N; i++) {\n  if (arr[i] >= arr[i + 1]) {\n    desc++;\n  } else {\n    desc = 1;\n  }\n  answer = Math.max(desc, answer);\n}\n\nconsole.log(answer);\n'})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var i=t(6540);const s={},r=i.createContext(s);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);