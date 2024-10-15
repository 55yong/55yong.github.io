"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[398],{3434:(n,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var e=t(4848),s=t(8453);const o={slug:"boj12891",title:"[BOJ][JS] 12891 DNA \ube44\ubc00\ubc88\ud638",sidebar_position:4},l=void 0,r={id:"likelion-study/algorithm/slidingwindow/02-12891",title:"[BOJ][JS] 12891 DNA \ube44\ubc00\ubc88\ud638",description:"[BOJ] 12891 DNA \ube44\ubc00\ubc88\ud638",source:"@site/docs/likelion-study/algorithm/slidingwindow/02-12891.md",sourceDirName:"likelion-study/algorithm/slidingwindow",slug:"/likelion-study/algorithm/slidingwindow/boj12891",permalink:"/docs/likelion-study/algorithm/slidingwindow/boj12891",draft:!1,unlisted:!1,editUrl:"https://github.com/55yong/55yong.github.io/tree/main/packages/create-docusaurus/templates/shared/docs/likelion-study/algorithm/slidingwindow/02-12891.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{slug:"boj12891",title:"[BOJ][JS] 12891 DNA \ube44\ubc00\ubc88\ud638",sidebar_position:4},sidebar:"likelionStudy",previous:{title:"[BOJ][JS] 15565 \uadc0\uc5ec\uc6b4 \ub77c\uc774\uc5b8",permalink:"/docs/likelion-study/algorithm/slidingwindow/boj15565"},next:{title:"[BOJ][JS] 10025 \uac8c\uc73c\ub978 \ubc31\uacf0",permalink:"/docs/likelion-study/algorithm/slidingwindow/boj10025"}},c={},d=[{value:"[BOJ] 12891 DNA \ube44\ubc00\ubc88\ud638",id:"boj-12891-dna-\ube44\ubc00\ubc88\ud638",level:2},{value:"\ubb38\uc81c",id:"\ubb38\uc81c",level:3},{value:"\uc785\ub825",id:"\uc785\ub825",level:3},{value:"\ucd9c\ub825",id:"\ucd9c\ub825",level:3},{value:"\ubb38\uc81c \ud480\uc774",id:"\ubb38\uc81c-\ud480\uc774",level:3}];function a(n){const i={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",...(0,s.R)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.h2,{id:"boj-12891-dna-\ube44\ubc00\ubc88\ud638",children:(0,e.jsx)(i.a,{href:"https://www.acmicpc.net/problem/12891",children:"[BOJ] 12891 DNA \ube44\ubc00\ubc88\ud638"})}),"\n",(0,e.jsx)(i.p,{children:"2024-10-03"}),"\n",(0,e.jsxs)(i.p,{children:["\uc2dc\uac04 \uc81c\ud55c : 2\ucd08",(0,e.jsx)(i.br,{}),"\n","\uba54\ubaa8\ub9ac \uc81c\ud55c : 512MB"]}),"\n",(0,e.jsx)(i.hr,{}),"\n",(0,e.jsx)(i.h3,{id:"\ubb38\uc81c",children:"\ubb38\uc81c"}),"\n",(0,e.jsxs)(i.p,{children:["\ud3c9\uc18c\uc5d0 \ubb38\uc790\uc5f4\uc744 \uac00\uc9c0\uace0 \ub178\ub294 \uac83\uc744 \uc88b\uc544\ud558\ub294 \ubbfc\ud638\ub294 DNA \ubb38\uc790\uc5f4\uc744 \uc54c\uac8c \ub418\uc5c8\ub2e4. DNA \ubb38\uc790\uc5f4\uc740 \ubaa8\ub4e0 \ubb38\uc790\uc5f4\uc5d0 \ub4f1\uc7a5\ud558\ub294 \ubb38\uc790\uac00 ","T",' \uc778 \ubb38\uc790\uc5f4\uc744 \ub9d0\ud55c\ub2e4. \uc608\ub97c \ub4e4\uc5b4 "ACKA"\ub294 DNA \ubb38\uc790\uc5f4\uc774 \uc544\ub2c8\uc9c0\ub9cc "ACCA"\ub294 DNA \ubb38\uc790\uc5f4\uc774\ub2e4. \uc774\ub7f0 \uc2e0\ube44\ud55c \ubb38\uc790\uc5f4\uc5d0 \uc644\uc804\ud788 \ub9e4\ub8cc\ub41c \ubbfc\ud638\ub294 \uc784\uc758\uc758 DNA \ubb38\uc790\uc5f4\uc744 \ub9cc\ub4e4\uace0 \ub9cc\ub4e4\uc5b4\uc9c4 DNA \ubb38\uc790\uc5f4\uc758 \ubd80\ubd84\ubb38\uc790\uc5f4\uc744 \ube44\ubc00\ubc88\ud638\ub85c \uc0ac\uc6a9\ud558\uae30\ub85c \ub9c8\uc74c\uba39\uc5c8\ub2e4.']}),"\n",(0,e.jsx)(i.p,{children:'\ud558\uc9c0\ub9cc \ubbfc\ud638\ub294 \uc774\ub7ec\ud55c \ubc29\ubc95\uc5d0\ub294 \ud070 \ubb38\uc81c\uac00 \uc788\ub2e4\ub294 \uac83\uc744 \ubc1c\uacac\ud588\ub2e4. \uc784\uc758\uc758 DNA \ubb38\uc790\uc5f4\uc758 \ubd80\ubd84\ubb38\uc790\uc5f4\uc744 \ubf51\uc558\uc744 \ub54c "AAAA"\uc640 \uac19\uc774 \ubcf4\uc548\uc5d0 \ucde8\uc57d\ud55c \ube44\ubc00\ubc88\ud638\uac00 \ub9cc\ub4e4\uc5b4 \uc9c8 \uc218 \uc788\uae30 \ub54c\ubb38\uc774\ub2e4. \uadf8\ub798\uc11c \ubbfc\ud638\ub294 \ubd80\ubd84\ubb38\uc790\uc5f4\uc5d0\uc11c \ub4f1\uc7a5\ud558\ub294 \ubb38\uc790\uc758 \uac1c\uc218\uac00 \ud2b9\uc815 \uac1c\uc218 \uc774\uc0c1\uc774\uc5ec\uc57c \ube44\ubc00\ubc88\ud638\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4\ub294 \uaddc\uce59\uc744 \ub9cc\ub4e4\uc5c8\ub2e4.'}),"\n",(0,e.jsx)(i.p,{children:"\uc784\uc758\uc758 DNA\ubb38\uc790\uc5f4\uc774 \"AAACCTGCCAA\" \uc774\uace0 \ubbfc\ud638\uac00 \ubf51\uc744 \ubd80\ubd84\ubb38\uc790\uc5f4\uc758 \uae38\uc774\ub97c 4\ub77c\uace0 \ud558\uc790. \uadf8\ub9ac\uace0 \ubd80\ubd84\ubb38\uc790\uc5f4\uc5d0 'A' \ub294 1\uac1c \uc774\uc0c1, 'C'\ub294 1\uac1c \uc774\uc0c1, 'G'\ub294 1\uac1c \uc774\uc0c1, 'T'\ub294 0\uac1c \uc774\uc0c1\uc774 \ub4f1\uc7a5\ud574\uc57c \ube44\ubc00\ubc88\ud638\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4\uace0 \ud558\uc790. \uc774\ub54c \"ACCT\" \ub294 'G' \uac00 1 \uac1c \uc774\uc0c1 \ub4f1\uc7a5\ud574\uc57c \ud55c\ub2e4\ub294 \uc870\uac74\uc744 \ub9cc\uc871\ud558\uc9c0 \ubabb\ud574 \ube44\ubc00\ubc88\ud638\ub85c \uc0ac\uc6a9\ud558\uc9c0 \ubabb\ud55c\ub2e4. \ud558\uc9c0\ub9cc \"GCCA\" \uc740 \ubaa8\ub4e0 \uc870\uac74\uc744 \ub9cc\uc871\ud558\uae30 \ub54c\ubb38\uc5d0 \ube44\ubc00\ubc88\ud638\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4."}),"\n",(0,e.jsxs)(i.p,{children:["\ubbfc\ud638\uac00 \ub9cc\ub4e0 \uc784\uc758\uc758 DNA \ubb38\uc790\uc5f4\uacfc \ube44\ubc00\ubc88\ud638\ub85c \uc0ac\uc6a9\ud560 \ubd80\ubd84\ubd84\uc790\uc5f4\uc758 \uae38\uc774, \uadf8\ub9ac\uace0 ","T"," \uac00 \uac01\uac01 \uba87\ubc88 \uc774\uc0c1 \ub4f1\uc7a5\ud574\uc57c \ube44\ubc00\ubc88\ud638\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294\uc9c0 \uc21c\uc11c\ub300\ub85c \uc8fc\uc5b4\uc84c\uc744 \ub54c \ubbfc\ud638\uac00 \ub9cc\ub4e4 \uc218 \uc788\ub294 \ube44\ubc00\ubc88\ud638\uc758 \uc885\ub958\uc758 \uc218\ub97c \uad6c\ud558\ub294 \ud504\ub85c\uadf8\ub7a8\uc744 \uc791\uc131\ud558\uc790. \ub2e8 \ubd80\ubd84\ubb38\uc790\uc5f4\uc774 \ub4f1\uc7a5\ud558\ub294 \uc704\uce58\uac00 \ub2e4\ub974\ub2e4\uba74 \ubd80\ubd84\ubb38\uc790\uc5f4\uc774 \uac19\ub2e4\uace0 \ud558\ub354\ub77c\ub3c4 \ub2e4\ub978 \ubb38\uc790\uc5f4\ub85c \ucde8\uae09\ud55c\ub2e4."]}),"\n",(0,e.jsx)(i.h3,{id:"\uc785\ub825",children:"\uc785\ub825"}),"\n",(0,e.jsx)(i.p,{children:"\uccab \ubc88\uc9f8 \uc904\uc5d0 \ubbfc\ud638\uac00 \uc784\uc758\ub85c \ub9cc\ub4e0 DNA \ubb38\uc790\uc5f4 \uae38\uc774 |S|\uc640 \ube44\ubc00\ubc88\ud638\ub85c \uc0ac\uc6a9\ud560 \ubd80\ubd84\ubb38\uc790\uc5f4\uc758 \uae38\uc774 |P| \uac00 \uc8fc\uc5b4\uc9c4\ub2e4. (1 \u2264 |P| \u2264 |S| \u2264 1,000,000)"}),"\n",(0,e.jsx)(i.p,{children:"\ub450\ubc88 \uc9f8 \uc904\uc5d0\ub294 \ubbfc\ud638\uac00 \uc784\uc758\ub85c \ub9cc\ub4e0 DNA \ubb38\uc790\uc5f4\uc774 \uc8fc\uc5b4\uc9c4\ub2e4."}),"\n",(0,e.jsxs)(i.p,{children:["\uc138\ubc88 \uc9f8 \uc904\uc5d0\ub294 \ubd80\ubd84\ubb38\uc790\uc5f4\uc5d0 \ud3ec\ud568\ub418\uc5b4\uc57c \ud560 ","T"," \uc758 \ucd5c\uc18c \uac1c\uc218\uac00 \uacf5\ubc31\uc744 \uad6c\ubd84\uc73c\ub85c \uc8fc\uc5b4\uc9c4\ub2e4. \uac01\uac01\uc758 \uc218\ub294 |S| \ubcf4\ub2e4 \uc791\uac70\ub098 \uac19\uc740 \uc74c\uc774 \uc544\ub2cc \uc815\uc218\uc774\uba70 \ucd1d \ud569\uc740 |S| \ubcf4\ub2e4 \uc791\uac70\ub098 \uac19\uc74c\uc774 \ubcf4\uc7a5\ub41c\ub2e4."]}),"\n",(0,e.jsx)(i.h3,{id:"\ucd9c\ub825",children:"\ucd9c\ub825"}),"\n",(0,e.jsx)(i.p,{children:"\uccab \ubc88\uc9f8 \uc904\uc5d0 \ubbfc\ud638\uac00 \ub9cc\ub4e4 \uc218 \uc788\ub294 \ube44\ubc00\ubc88\ud638\uc758 \uc885\ub958\uc758 \uc218\ub97c \ucd9c\ub825\ud574\ub77c."}),"\n",(0,e.jsx)(i.hr,{}),"\n",(0,e.jsx)(i.h3,{id:"\ubb38\uc81c-\ud480\uc774",children:"\ubb38\uc81c \ud480\uc774"}),"\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-js",children:'const filepath =\n  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";\nconst input = require("fs")\n  .readFileSync(filepath)\n  .toString()\n  .trim()\n  .split("\\n")\n  .map((item) => item.split(" "));\n\nconst [S, P] = input.shift().map(Number);\nconst DNA = input[0].toString();\nconst [A, C, G, T] = input[1].map(Number);\n\nfunction solution(S, P, DNA, A, C, G, T) {\n  const check = () => {\n    if (dict["A"] >= A && dict["C"] >= C && dict["G"] >= G && dict["T"] >= T)\n      return true;\n    else return false;\n  };\n\n  const dict = {};\n  [dict["A"], dict["C"], dict["G"], dict["T"]] = [0, 0, 0, 0];\n  let cnt = 0;\n  for (let i = 0; i < P; i++) dict[DNA[i]] += 1;\n  cnt = check() === true ? cnt + 1 : cnt;\n  for (let j = 0; j < S - P; j++) {\n    dict[DNA[j]] -= 1;\n    dict[DNA[P + j]] += 1;\n    cnt = check() === true ? cnt + 1 : cnt;\n  }\n  return cnt;\n}\n\nconsole.log(solution(S, P, DNA, A, C, G, T));\n\n/**\n * 0\ubc88 \uc778\ub371\uc2a4\ubd80\ud130 P\uc790\ub9ac\uae4c\uc9c0 \uac01\uac01 dict\uc5d0 \ub2f4\uc544 \ucd5c\uc18c\uac2f\uc218\ub97c \ucda9\uc871\ud588\ub294\uc9c0 \uccb4\ud06c\n * \uc774\ud6c4 \ud55c\uc790\ub9ac \uc778\ub371\uc2a4\uc529 \ub298\ub824\uac00\uba74\uc11c dict\ub97c \ub2e8\uc5b4\uc5d0 \ub9de\uac8c \ubcc0\uacbd\uc2dc\ud0a8 \ub4a4 \uccb4\ud06c\ud558\uba74\uc11c \uc870\uac74\uc5d0 \ucda9\uc871\ud558\uba74 \uce74\uc6b4\ud2b8\ud574\uc90c\n */\n'})})]})}function u(n={}){const{wrapper:i}={...(0,s.R)(),...n.components};return i?(0,e.jsx)(i,{...n,children:(0,e.jsx)(a,{...n})}):a(n)}},8453:(n,i,t)=>{t.d(i,{R:()=>l,x:()=>r});var e=t(6540);const s={},o=e.createContext(s);function l(n){const i=e.useContext(o);return e.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function r(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),e.createElement(o.Provider,{value:i},n.children)}}}]);