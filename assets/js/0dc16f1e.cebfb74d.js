"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6233],{6846:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var t=s(4848),i=s(8453);const r={slug:"boj18111",title:"[BOJ][JS] 18111 \ub9c8\uc778\ud06c\ub798\ud504\ud2b8",sidebar_position:5},l=void 0,o={id:"likelion-study/algorithm/bruteforce/04-18111",title:"[BOJ][JS] 18111 \ub9c8\uc778\ud06c\ub798\ud504\ud2b8",description:"[BOJ] 18111 \ub9c8\uc778\ud06c\ub798\ud504\ud2b8",source:"@site/docs/likelion-study/algorithm/bruteforce/04-18111.md",sourceDirName:"likelion-study/algorithm/bruteforce",slug:"/likelion-study/algorithm/bruteforce/boj18111",permalink:"/docs/likelion-study/algorithm/bruteforce/boj18111",draft:!1,unlisted:!1,editUrl:"https://github.com/55yong/55yong.github.io/tree/main/packages/create-docusaurus/templates/shared/docs/likelion-study/algorithm/bruteforce/04-18111.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{slug:"boj18111",title:"[BOJ][JS] 18111 \ub9c8\uc778\ud06c\ub798\ud504\ud2b8",sidebar_position:5},sidebar:"likelionStudy",previous:{title:"[BOJ][JS] 1065 \ud55c\uc218",permalink:"/docs/likelion-study/algorithm/bruteforce/boj1065"}},a={},c=[{value:"[BOJ] 18111 \ub9c8\uc778\ud06c\ub798\ud504\ud2b8",id:"boj-18111-\ub9c8\uc778\ud06c\ub798\ud504\ud2b8",level:2},{value:"\ubb38\uc81c",id:"\ubb38\uc81c",level:3},{value:"\uc785\ub825",id:"\uc785\ub825",level:3},{value:"\ucd9c\ub825",id:"\ucd9c\ub825",level:3},{value:"\ubb38\uc81c \ud480\uc774",id:"\ubb38\uc81c-\ud480\uc774",level:3}];function h(n){const e={a:"a",annotation:"annotation",br:"br",code:"code",h2:"h2",h3:"h3",hr:"hr",math:"math",mn:"mn",mrow:"mrow",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"boj-18111-\ub9c8\uc778\ud06c\ub798\ud504\ud2b8",children:(0,t.jsx)(e.a,{href:"https://www.acmicpc.net/problem/18111",children:"[BOJ] 18111 \ub9c8\uc778\ud06c\ub798\ud504\ud2b8"})}),"\n",(0,t.jsx)(e.p,{children:"2024-11-04"}),"\n",(0,t.jsxs)(e.p,{children:["\uc2dc\uac04 \uc81c\ud55c : 1\ucd08",(0,t.jsx)(e.br,{}),"\n","\uba54\ubaa8\ub9ac \uc81c\ud55c : 1024MB"]}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsx)(e.h3,{id:"\ubb38\uc81c",children:"\ubb38\uc81c"}),"\n",(0,t.jsx)(e.p,{children:"\ud300 \ub808\ub4dc\uc2dc\ud504\ud2b8\ub294 \ub300\ud68c \uc900\ube44\ub97c \ud558\ub2e4\uac00 \uc9c0\ub8e8\ud574\uc838\uc11c \uc0cc\ub4dc\ubc15\uc2a4 \uac8c\uc784\uc778 \u2018\ub9c8\uc778\ud06c\ub798\ud504\ud2b8\u2019\ub97c \ucf30\ub2e4. \ub9c8\uc778\ud06c\ub798\ud504\ud2b8\ub294 1 \xd7 1 \xd7 1(\uc138\ub85c, \uac00\ub85c, \ub192\uc774) \ud06c\uae30\uc758 \ube14\ub85d\ub4e4\ub85c \uc774\ub8e8\uc5b4\uc9c4 3\ucc28\uc6d0 \uc138\uacc4\uc5d0\uc11c \uc790\uc720\ub86d\uac8c \ub545\uc744 \ud30c\uac70\ub098 \uc9d1\uc744 \uc9c0\uc744 \uc218 \uc788\ub294 \uac8c\uc784\uc774\ub2e4."}),"\n",(0,t.jsx)(e.p,{children:"\ubaa9\uc7ac\ub97c \ucda9\ubd84\ud788 \ubaa8\uc740 lvalue\ub294 \uc9d1\uc744 \uc9d3\uae30\ub85c \ud558\uc600\ub2e4. \ud558\uc9c0\ub9cc \uace0\ub974\uc9c0 \uc54a\uc740 \ub545\uc5d0\ub294 \uc9d1\uc744 \uc9c0\uc744 \uc218 \uc5c6\uae30 \ub54c\ubb38\uc5d0 \ub545\uc758 \ub192\uc774\ub97c \ubaa8\ub450 \ub3d9\uc77c\ud558\uac8c \ub9cc\ub4dc\ub294 \u2018\ub545 \uace0\ub974\uae30\u2019 \uc791\uc5c5\uc744 \ud574\uc57c \ud55c\ub2e4."}),"\n",(0,t.jsx)(e.p,{children:"lvalue\ub294 \uc138\ub85c N, \uac00\ub85c M \ud06c\uae30\uc758 \uc9d1\ud130\ub97c \uace8\ub790\ub2e4. \uc9d1\ud130 \ub9e8 \uc67c\ucabd \uc704\uc758 \uc88c\ud45c\ub294 (0, 0)\uc774\ub2e4. \uc6b0\ub9ac\uc758 \ubaa9\uc801\uc740 \uc774 \uc9d1\ud130 \ub0b4\uc758 \ub545\uc758 \ub192\uc774\ub97c \uc77c\uc815\ud558\uac8c \ubc14\uafb8\ub294 \uac83\uc774\ub2e4. \uc6b0\ub9ac\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \ub450 \uc885\ub958\uc758 \uc791\uc5c5\uc744 \ud560 \uc218 \uc788\ub2e4."}),"\n",(0,t.jsx)(e.p,{children:"\uc88c\ud45c (i, j)\uc758 \uac00\uc7a5 \uc704\uc5d0 \uc788\ub294 \ube14\ub85d\uc744 \uc81c\uac70\ud558\uc5ec \uc778\ubca4\ud1a0\ub9ac\uc5d0 \ub123\ub294\ub2e4.\n\uc778\ubca4\ud1a0\ub9ac\uc5d0\uc11c \ube14\ub85d \ud558\ub098\ub97c \uaebc\ub0b4\uc5b4 \uc88c\ud45c (i, j)\uc758 \uac00\uc7a5 \uc704\uc5d0 \uc788\ub294 \ube14\ub85d \uc704\uc5d0 \ub193\ub294\ub2e4.\n1\ubc88 \uc791\uc5c5\uc740 2\ucd08\uac00 \uac78\ub9ac\uba70, 2\ubc88 \uc791\uc5c5\uc740 1\ucd08\uac00 \uac78\ub9b0\ub2e4. \ubc24\uc5d0\ub294 \ubb34\uc11c\uc6b4 \ubaac\uc2a4\ud130\ub4e4\uc774 \ub098\uc624\uae30 \ub54c\ubb38\uc5d0 \ucd5c\ub300\ud55c \ube68\ub9ac \ub545 \uace0\ub974\uae30 \uc791\uc5c5\uc744 \ub9c8\uccd0\uc57c \ud55c\ub2e4. \u2018\ub545 \uace0\ub974\uae30\u2019 \uc791\uc5c5\uc5d0 \uac78\ub9ac\ub294 \ucd5c\uc18c \uc2dc\uac04\uacfc \uadf8 \uacbd\uc6b0 \ub545\uc758 \ub192\uc774\ub97c \ucd9c\ub825\ud558\uc2dc\uc624."}),"\n",(0,t.jsx)(e.p,{children:"\ub2e8, \uc9d1\ud130 \uc544\ub798\uc5d0 \ub3d9\uad74 \ub4f1 \ube48 \uacf5\uac04\uc740 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc73c\uba70, \uc9d1\ud130 \ubc14\uae65\uc5d0\uc11c \ube14\ub85d\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\ub2e4. \ub610\ud55c, \uc791\uc5c5\uc744 \uc2dc\uc791\ud560 \ub54c \uc778\ubca4\ud1a0\ub9ac\uc5d0\ub294 B\uac1c\uc758 \ube14\ub85d\uc774 \ub4e4\uc5b4 \uc788\ub2e4. \ub545\uc758 \ub192\uc774\ub294 256\ube14\ub85d\uc744 \ucd08\uacfc\ud560 \uc218 \uc5c6\uc73c\uba70, \uc74c\uc218\uac00 \ub420 \uc218 \uc5c6\ub2e4."}),"\n",(0,t.jsx)(e.h3,{id:"\uc785\ub825",children:"\uc785\ub825"}),"\n",(0,t.jsxs)(e.p,{children:["\uccab\uc9f8 \uc904\uc5d0 N, M, B\uac00 \uc8fc\uc5b4\uc9c4\ub2e4. (1 \u2264 M, N \u2264 500, 0 \u2264 B \u2264 6.4 \xd7 ",(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsxs)(e.mrow,{children:[(0,t.jsx)(e.mn,{children:"1"}),(0,t.jsxs)(e.msup,{children:[(0,t.jsx)(e.mn,{children:"0"}),(0,t.jsx)(e.mn,{children:"7"})]})]}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"10^7"})]})})}),(0,t.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.8141em"}}),(0,t.jsx)(e.span,{className:"mord",children:"1"}),(0,t.jsxs)(e.span,{className:"mord",children:[(0,t.jsx)(e.span,{className:"mord",children:"0"}),(0,t.jsx)(e.span,{className:"msupsub",children:(0,t.jsx)(e.span,{className:"vlist-t",children:(0,t.jsx)(e.span,{className:"vlist-r",children:(0,t.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,t.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,t.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,t.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,t.jsx)(e.span,{className:"mord mtight",children:"7"})})]})})})})})]})]})})]}),")"]}),"\n",(0,t.jsx)(e.p,{children:"\ub458\uc9f8 \uc904\ubd80\ud130 N\uac1c\uc758 \uc904\uc5d0 \uac01\uac01 M\uac1c\uc758 \uc815\uc218\ub85c \ub545\uc758 \ub192\uc774\uac00 \uc8fc\uc5b4\uc9c4\ub2e4. (i + 2)\ubc88\uc9f8 \uc904\uc758 (j + 1)\ubc88\uc9f8 \uc218\ub294 \uc88c\ud45c (i, j)\uc5d0\uc11c\uc758 \ub545\uc758 \ub192\uc774\ub97c \ub098\ud0c0\ub0b8\ub2e4. \ub545\uc758 \ub192\uc774\ub294 256\ubcf4\ub2e4 \uc791\uac70\ub098 \uac19\uc740 \uc790\uc5f0\uc218 \ub610\ub294 0\uc774\ub2e4."}),"\n",(0,t.jsx)(e.h3,{id:"\ucd9c\ub825",children:"\ucd9c\ub825"}),"\n",(0,t.jsx)(e.p,{children:"\uccab\uc9f8 \uc904\uc5d0 \ub545\uc744 \uace0\ub974\ub294 \ub370 \uac78\ub9ac\ub294 \uc2dc\uac04\uacfc \ub545\uc758 \ub192\uc774\ub97c \ucd9c\ub825\ud558\uc2dc\uc624. \ub2f5\uc774 \uc5ec\ub7ec \uac1c \uc788\ub2e4\uba74 \uadf8\uc911\uc5d0\uc11c \ub545\uc758 \ub192\uc774\uac00 \uac00\uc7a5 \ub192\uc740 \uac83\uc744 \ucd9c\ub825\ud558\uc2dc\uc624."}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsx)(e.h3,{id:"\ubb38\uc81c-\ud480\uc774",children:"\ubb38\uc81c \ud480\uc774"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:'const filepath =\n  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";\nconst input = require("fs")\n  .readFileSync(filepath)\n  .toString()\n  .trim()\n  .split("\\n");\n\nlet [h, w, inven] = input.shift().split(" ").map(Number);\nlet map = [];\nlet highist = 0;\nlet shortist = 256;\nlet overBlock = 0;\nlet shortBlack = 0;\nlet floor = 0;\nlet answer = [Number.MAX_VALUE, 0];\n\n// \uac01 \uc904\uc5d0\uc11c \ub545\uc758 \ub192\uc774\ub97c \uc22b\uc790 \ubc30\uc5f4\ub85c \ubcc0\ud658\ud558\uc5ec map\uc5d0 \ucd94\uac00\nfor (let i = 0; i < h; i++) {\n  const v = input[i].split(" ").map(Number);\n\n  const max = Math.max(...v);\n  const min = Math.min(...v);\n\n  if (max > highist) highist = max;\n  if (min < shortist) shortist = min;\n\n  map.push(v);\n}\n\nfloor = highist;\n\n// \ucd5c\uc800 \ub192\uc774\uae4c\uc9c0 \ubc18\ubcf5\ud558\uba70 \ubaa8\ub4e0 \uac00\ub2a5\ud55c \ud3c9\ud0c4\ud654 \ub192\uc774\uc5d0 \ub300\ud574 \uc791\uc5c5 \uc2dc\uac04\uc744 \uacc4\uc0b0\nwhile (floor >= shortist) {\n  // \ud604\uc7ac \uce35(floor)\ubcf4\ub2e4 \ub192\uc740 \ube14\ub85d\uc758 \uc218\ub97c \uacc4\uc0b0\n  overBlock = map.reduce((a, y) => {\n    const yValue = y.reduce((b, x) => {\n      if (x - floor > 0) return b + (x - floor);\n      else return b;\n    }, 0);\n    return a + yValue;\n  }, 0);\n\n  // \ud604\uc7ac \uce35(floor)\ubcf4\ub2e4 \ub0ae\uc740 \ube14\ub85d\uc758 \uc218\ub97c \uacc4\uc0b0\n  shortBlack = map.reduce((a, y) => {\n    const yValue = y.reduce((b, x) => {\n      if (floor - x > 0) return b + (floor - x);\n      else return b;\n    }, 0);\n    return a + yValue;\n  }, 0);\n\n  // \uc778\ubca4\ud1a0\ub9ac\uc5d0 \ube14\ub85d\uc744 \ub354\ud574\uc11c \ubd80\uc871\ud55c \ube14\ub85d\uc744 \ucda9\uc871\ud560 \uc218 \uc788\ub294\uc9c0 \ud655\uc778\n  if (inven + overBlock >= shortBlack) {\n    // \uc791\uc5c5 \uc2dc\uac04: \uc81c\uac70\ub41c \ube14\ub85d\uc740 2\ucd08, \ucd94\uac00\ub41c \ube14\ub85d\uc740 1\ucd08 \uc18c\ubaa8\n    const cost = overBlock * 2 + shortBlack;\n\n    // \ucd5c\uc18c \uc2dc\uac04\ubcf4\ub2e4 \uc791\ub2e4\uba74 \uacb0\uacfc\ub97c \uac31\uc2e0\n    if (answer[0] > cost) answer = [cost, floor];\n  }\n\n  // \ud3c9\ud0c4\ud654\ud560 \ub192\uc774\ub97c \ub0ae\ucd94\uc5b4 \ub2e4\uc74c \ub192\uc774\uc5d0 \ub300\ud574 \ubc18\ubcf5\n  floor--;\n}\n\n// \uacb0\uacfc \ucd9c\ub825: \ucd5c\uc18c \uc791\uc5c5 \uc2dc\uac04\uacfc \uadf8\ub54c\uc758 \ub192\uc774\ub97c \ucd9c\ub825\nconsole.log(answer.join(" "));\n'})})]})}function d(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(h,{...n})}):h(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>l,x:()=>o});var t=s(6540);const i={},r=t.createContext(i);function l(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);