"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8925],{4853:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var i=t(4848),s=t(8453);const o={slug:"boj1260",title:"[BOJ][JS] 1260 DFS\uc640 BFS",sidebar_position:2},r=void 0,l={id:"likelion-study/algorithm/BFSDFS/01-1260",title:"[BOJ][JS] 1260 DFS\uc640 BFS",description:"[BOJ] 1260 DFS\uc640 BFS",source:"@site/docs/likelion-study/algorithm/BFSDFS/01-1260.md",sourceDirName:"likelion-study/algorithm/BFSDFS",slug:"/likelion-study/algorithm/BFSDFS/boj1260",permalink:"/docs/likelion-study/algorithm/BFSDFS/boj1260",draft:!1,unlisted:!1,editUrl:"https://github.com/55yong/55yong.github.io/tree/main/packages/create-docusaurus/templates/shared/docs/likelion-study/algorithm/BFSDFS/01-1260.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{slug:"boj1260",title:"[BOJ][JS] 1260 DFS\uc640 BFS",sidebar_position:2},sidebar:"likelionStudy",previous:{title:"BFS, DFS",permalink:"/docs/category/bfs-dfs-1"},next:{title:"[BOJ][JS] 2644 \ucd0c\uc218\uacc4\uc0b0",permalink:"/docs/likelion-study/algorithm/BFSDFS/boj2644"}},c={},a=[{value:"[BOJ] 1260 DFS\uc640 BFS",id:"boj-1260-dfs\uc640-bfs",level:2},{value:"\ubb38\uc81c",id:"\ubb38\uc81c",level:3},{value:"\uc785\ub825",id:"\uc785\ub825",level:3},{value:"\ucd9c\ub825",id:"\ucd9c\ub825",level:3},{value:"\ubb38\uc81c \ud480\uc774",id:"\ubb38\uc81c-\ud480\uc774",level:3}];function d(n){const e={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"boj-1260-dfs\uc640-bfs",children:(0,i.jsx)(e.a,{href:"https://www.acmicpc.net/problem/1260",children:"[BOJ] 1260 DFS\uc640 BFS"})}),"\n",(0,i.jsx)(e.p,{children:"2024-11-04"}),"\n",(0,i.jsxs)(e.p,{children:["\uc2dc\uac04 \uc81c\ud55c : 2\ucd08",(0,i.jsx)(e.br,{}),"\n","\uba54\ubaa8\ub9ac \uc81c\ud55c : 128MB"]}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.h3,{id:"\ubb38\uc81c",children:"\ubb38\uc81c"}),"\n",(0,i.jsx)(e.p,{children:"\uadf8\ub798\ud504\ub97c DFS\ub85c \ud0d0\uc0c9\ud55c \uacb0\uacfc\uc640 BFS\ub85c \ud0d0\uc0c9\ud55c \uacb0\uacfc\ub97c \ucd9c\ub825\ud558\ub294 \ud504\ub85c\uadf8\ub7a8\uc744 \uc791\uc131\ud558\uc2dc\uc624. \ub2e8, \ubc29\ubb38\ud560 \uc218 \uc788\ub294 \uc815\uc810\uc774 \uc5ec\ub7ec \uac1c\uc778 \uacbd\uc6b0\uc5d0\ub294 \uc815\uc810 \ubc88\ud638\uac00 \uc791\uc740 \uac83\uc744 \uba3c\uc800 \ubc29\ubb38\ud558\uace0, \ub354 \uc774\uc0c1 \ubc29\ubb38\ud560 \uc218 \uc788\ub294 \uc810\uc774 \uc5c6\ub294 \uacbd\uc6b0 \uc885\ub8cc\ud55c\ub2e4. \uc815\uc810 \ubc88\ud638\ub294 1\ubc88\ubd80\ud130 N\ubc88\uae4c\uc9c0\uc774\ub2e4."}),"\n",(0,i.jsx)(e.h3,{id:"\uc785\ub825",children:"\uc785\ub825"}),"\n",(0,i.jsx)(e.p,{children:"\uccab\uc9f8 \uc904\uc5d0 \uc815\uc810\uc758 \uac1c\uc218 N(1 \u2264 N \u2264 1,000), \uac04\uc120\uc758 \uac1c\uc218 M(1 \u2264 M \u2264 10,000), \ud0d0\uc0c9\uc744 \uc2dc\uc791\ud560 \uc815\uc810\uc758 \ubc88\ud638 V\uac00 \uc8fc\uc5b4\uc9c4\ub2e4. \ub2e4\uc74c M\uac1c\uc758 \uc904\uc5d0\ub294 \uac04\uc120\uc774 \uc5f0\uacb0\ud558\ub294 \ub450 \uc815\uc810\uc758 \ubc88\ud638\uac00 \uc8fc\uc5b4\uc9c4\ub2e4. \uc5b4\ub5a4 \ub450 \uc815\uc810 \uc0ac\uc774\uc5d0 \uc5ec\ub7ec \uac1c\uc758 \uac04\uc120\uc774 \uc788\uc744 \uc218 \uc788\ub2e4. \uc785\ub825\uc73c\ub85c \uc8fc\uc5b4\uc9c0\ub294 \uac04\uc120\uc740 \uc591\ubc29\ud5a5\uc774\ub2e4."}),"\n",(0,i.jsx)(e.h3,{id:"\ucd9c\ub825",children:"\ucd9c\ub825"}),"\n",(0,i.jsx)(e.p,{children:"\uccab\uc9f8 \uc904\uc5d0 DFS\ub97c \uc218\ud589\ud55c \uacb0\uacfc\ub97c, \uadf8 \ub2e4\uc74c \uc904\uc5d0\ub294 BFS\ub97c \uc218\ud589\ud55c \uacb0\uacfc\ub97c \ucd9c\ub825\ud55c\ub2e4. V\ubd80\ud130 \ubc29\ubb38\ub41c \uc810\uc744 \uc21c\uc11c\ub300\ub85c \ucd9c\ub825\ud558\uba74 \ub41c\ub2e4."}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.h3,{id:"\ubb38\uc81c-\ud480\uc774",children:"\ubb38\uc81c \ud480\uc774"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:'const filepath =\n  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";\nconst input = require("fs")\n  .readFileSync(filepath)\n  .toString()\n  .trim()\n  .split("\\n");\n\nconst [N, M, V] = input.shift().split(" ").map(Number);\nconst line = input.map((e) => e.split(" ").map(Number));\n\nconst Dfs = [];\nconst Bfs = [];\nconst queue = [];\n\nconst graph = Array.from({ length: N + 1 }, () => []);\nlet visited = Array.from({ length: N + 1 }, () => 0);\n\nconst DFS = (cnt) => {\n  if (Dfs.length === N) return;\n  // \ud604\uc7ac \uc815\uc810\uc744 DFS \ubc30\uc5f4\uc5d0 \ucd94\uac00\ud558\uace0, \ubc29\ubb38 \ucc98\ub9ac\n  Dfs.push(cnt);\n  visited[cnt] = 1;\n\n  // \ud604\uc7ac \uc815\uc810\uacfc \uc5f0\uacb0\ub41c \uc815\uc810\uc744 \uc21c\uc11c\ub300\ub85c \ubc29\ubb38\n  for (let next of graph[cnt]) {\n    if (!visited[next]) {\n      visited[next] = 1;\n      DFS(next); // \uc7ac\uadc0\uc801\uc73c\ub85c \ub2e4\uc74c \uc815\uc810\uc744 \ud0d0\uc0c9\n    }\n  }\n};\n\nconst BFS = () => {\n  // \uc2dc\uc791 \uc815\uc810\uc744 \ud050\uc5d0 \ucd94\uac00\ud558\uace0, \ubc29\ubb38 \ucc98\ub9ac\n  queue.push(V);\n  visited[V] = 1;\n\n  // \ud050\uac00 \ube4c \ub54c\uae4c\uc9c0 \ubc18\ubcf5\n  while (queue.length !== 0) {\n    const now = queue.shift(); // \ud604\uc7ac \uc815\uc810\uc744 \ud050\uc5d0\uc11c \uaebc\ub0b4\uc5b4 BFS \ubc30\uc5f4\uc5d0 \ucd94\uac00\ud569\ub2c8\ub2e4.\n    Bfs.push(now);\n\n    // \ud604\uc7ac \uc815\uc810\uacfc \uc5f0\uacb0\ub41c \uc815\uc810\uc744 \uc21c\uc11c\ub300\ub85c \ud050\uc5d0 \ucd94\uac00\ud569\ub2c8\ub2e4.\n    for (let next of graph[now]) {\n      if (!visited[next]) {\n        queue.push(next);\n        visited[next] = 1;\n      }\n    }\n  }\n};\n\nconst main = () => {\n  // \uadf8\ub798\ud504\uc5d0 \uac04\uc120 \ucd94\uac00\n  for (let [from, to] of line) {\n    graph[from].push(to);\n    graph[to].push(from);\n  }\n\n  // \ubaa8\ub4e0 \uc815\uc810\uc758 \uc778\uc811 \ub9ac\uc2a4\ud2b8\ub97c \uc624\ub984\ucc28\uc21c\uc73c\ub85c \uc815\ub82c\ud558\uc5ec \ub0ae\uc740 \ubc88\ud638\ubd80\ud130 \ud0d0\uc0c9\ub418\ub3c4\ub85d \ud568\n  for (let i = 0; i < graph.length; i++) {\n    graph[i].sort((a, b) => a - b);\n  }\n\n  // DFS \uc218\ud589\n  DFS(V);\n\n  // BFS \uc218\ud589\uc744 \uc704\ud574 \ubc29\ubb38 \ubc30\uc5f4\uc744 \ucd08\uae30\ud654\n  visited = visited.map(() => 0);\n  BFS();\n\n  console.log(Dfs.join(" "));\n  console.log(Bfs.join(" "));\n};\n\nmain();\n'})})]})}function u(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>l});var i=t(6540);const s={},o=i.createContext(s);function r(n){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),i.createElement(o.Provider,{value:e},n.children)}}}]);