"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3426],{4040:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>t,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>m});var a=n(4848),i=n(8453);const l={slug:"boj11047",title:"[BOJ][JS] 11047 \ub3d9\uc804 0",sidebar_position:3},t=void 0,r={id:"likelion-study/algorithm/greedy/02-11047",title:"[BOJ][JS] 11047 \ub3d9\uc804 0",description:"[BOJ] 11047 \ub3d9\uc804 0",source:"@site/docs/likelion-study/algorithm/greedy/02-11047.md",sourceDirName:"likelion-study/algorithm/greedy",slug:"/likelion-study/algorithm/greedy/boj11047",permalink:"/docs/likelion-study/algorithm/greedy/boj11047",draft:!1,unlisted:!1,editUrl:"https://github.com/55yong/55yong.github.io/tree/main/packages/create-docusaurus/templates/shared/docs/likelion-study/algorithm/greedy/02-11047.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{slug:"boj11047",title:"[BOJ][JS] 11047 \ub3d9\uc804 0",sidebar_position:3},sidebar:"likelionStudy",previous:{title:"[BOJ][JS] 1493 \ub4a4\uc9d1\uae30",permalink:"/docs/likelion-study/algorithm/greedy/boj1493"}},c={},m=[{value:"[BOJ] 11047 \ub3d9\uc804 0",id:"boj-11047-\ub3d9\uc804-0",level:2},{value:"\ubb38\uc81c",id:"\ubb38\uc81c",level:3},{value:"\uc785\ub825",id:"\uc785\ub825",level:3},{value:"\ucd9c\ub825",id:"\ucd9c\ub825",level:3},{value:"\ubb38\uc81c \ud480\uc774",id:"\ubb38\uc81c-\ud480\uc774",level:3}];function h(s){const e={a:"a",annotation:"annotation",br:"br",code:"code",h2:"h2",h3:"h3",hr:"hr",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msub:"msub",p:"p",pre:"pre",semantics:"semantics",span:"span",...(0,i.R)(),...s.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"boj-11047-\ub3d9\uc804-0",children:(0,a.jsx)(e.a,{href:"https://www.acmicpc.net/problem/11047",children:"[BOJ] 11047 \ub3d9\uc804 0"})}),"\n",(0,a.jsx)(e.p,{children:"2024-10-15"}),"\n",(0,a.jsxs)(e.p,{children:["\uc2dc\uac04 \uc81c\ud55c : 1\ucd08",(0,a.jsx)(e.br,{}),"\n","\uba54\ubaa8\ub9ac \uc81c\ud55c : 256MB"]}),"\n",(0,a.jsx)(e.hr,{}),"\n",(0,a.jsx)(e.h3,{id:"\ubb38\uc81c",children:"\ubb38\uc81c"}),"\n",(0,a.jsx)(e.p,{children:"\uc900\uaddc\uac00 \uac00\uc9c0\uace0 \uc788\ub294 \ub3d9\uc804\uc740 \ucd1d N\uc885\ub958\uc774\uace0, \uac01\uac01\uc758 \ub3d9\uc804\uc744 \ub9e4\uc6b0 \ub9ce\uc774 \uac00\uc9c0\uace0 \uc788\ub2e4."}),"\n",(0,a.jsx)(e.p,{children:"\ub3d9\uc804\uc744 \uc801\uc808\ud788 \uc0ac\uc6a9\ud574\uc11c \uadf8 \uac00\uce58\uc758 \ud569\uc744 K\ub85c \ub9cc\ub4e4\ub824\uace0 \ud55c\ub2e4. \uc774\ub54c \ud544\uc694\ud55c \ub3d9\uc804 \uac1c\uc218\uc758 \ucd5c\uc19f\uac12\uc744 \uad6c\ud558\ub294 \ud504\ub85c\uadf8\ub7a8\uc744 \uc791\uc131\ud558\uc2dc\uc624."}),"\n",(0,a.jsx)(e.h3,{id:"\uc785\ub825",children:"\uc785\ub825"}),"\n",(0,a.jsx)(e.p,{children:"\uccab\uc9f8 \uc904\uc5d0 N\uacfc K\uac00 \uc8fc\uc5b4\uc9c4\ub2e4. (1 \u2264 N \u2264 10, 1 \u2264 K \u2264 100,000,000)"}),"\n",(0,a.jsxs)(e.p,{children:["\ub458\uc9f8 \uc904\ubd80\ud130 N\uac1c\uc758 \uc904\uc5d0 \ub3d9\uc804\uc758 \uac00\uce58 Ai\uac00 \uc624\ub984\ucc28\uc21c\uc73c\ub85c \uc8fc\uc5b4\uc9c4\ub2e4. (1 \u2264 ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsxs)(e.msub,{children:[(0,a.jsx)(e.mi,{children:"A"}),(0,a.jsx)(e.mi,{children:"i"})]})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"A_i"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord mathnormal",children:"A"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(e.span,{className:"vlist-r",children:[(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,a.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"})})]})}),(0,a.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,a.jsx)(e.span,{})})})]})})]})]})})]})," \u2264 1,000,000, ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsxs)(e.msub,{children:[(0,a.jsx)(e.mi,{children:"A"}),(0,a.jsx)(e.mn,{children:"1"})]})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"A_1"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord mathnormal",children:"A"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(e.span,{className:"vlist-r",children:[(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,a.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:"1"})})]})}),(0,a.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,a.jsx)(e.span,{})})})]})})]})]})})]})," = 1, i \u2265 2\uc778 \uacbd\uc6b0\uc5d0 ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsxs)(e.msub,{children:[(0,a.jsx)(e.mi,{children:"A"}),(0,a.jsx)(e.mi,{children:"i"})]})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"A_i"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord mathnormal",children:"A"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(e.span,{className:"vlist-r",children:[(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,a.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"})})]})}),(0,a.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,a.jsx)(e.span,{})})})]})})]})]})})]}),"\ub294 ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsxs)(e.msub,{children:[(0,a.jsx)(e.mi,{children:"A"}),(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mi,{children:"i"}),(0,a.jsx)(e.mo,{children:"\u2212"}),(0,a.jsx)(e.mn,{children:"1"})]})]})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"A_{i-1}"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.8917em",verticalAlign:"-0.2083em"}}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord mathnormal",children:"A"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(e.span,{className:"vlist-r",children:[(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,a.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsxs)(e.span,{className:"mord mtight",children:[(0,a.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"}),(0,a.jsx)(e.span,{className:"mbin mtight",children:"\u2212"}),(0,a.jsx)(e.span,{className:"mord mtight",children:"1"})]})})]})}),(0,a.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.2083em"},children:(0,a.jsx)(e.span,{})})})]})})]})]})})]}),"\uc758 \ubc30\uc218)"]}),"\n",(0,a.jsx)(e.h3,{id:"\ucd9c\ub825",children:"\ucd9c\ub825"}),"\n",(0,a.jsx)(e.p,{children:"\uccab\uc9f8 \uc904\uc5d0 K\uc6d0\uc744 \ub9cc\ub4dc\ub294\ub370 \ud544\uc694\ud55c \ub3d9\uc804 \uac1c\uc218\uc758 \ucd5c\uc19f\uac12\uc744 \ucd9c\ub825\ud55c\ub2e4."}),"\n",(0,a.jsx)(e.h3,{id:"\ubb38\uc81c-\ud480\uc774",children:"\ubb38\uc81c \ud480\uc774"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:'const filepath =\n  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";\nconst input = require("fs").readFileSync(filepath).toString().trim();\n\n/**\n * 0 \ub610\ub294 1\ub85c split \ud55c \ub2e4\uc74c\uc5d0 \ube48 \uac12\uc744 \uc5c6\uc564 \ud6c4\n * \uc0bc\ud56d\uc5f0\uc0b0\uc790\ub97c \uc774\uc6a9\ud574 \uae38\uc774\ub97c \ubc18\ud658\uc2dc\ud0a4\uae30\n * */\nconsole.log(\n  input.split("0") < input.split("1")\n    ? input.split("0").filter((e) => e !== "").length\n    : input.split("1").filter((e) => e !== "").length\n);\n'})})]})}function d(s={}){const{wrapper:e}={...(0,i.R)(),...s.components};return e?(0,a.jsx)(e,{...s,children:(0,a.jsx)(h,{...s})}):h(s)}},8453:(s,e,n)=>{n.d(e,{R:()=>t,x:()=>r});var a=n(6540);const i={},l=a.createContext(i);function t(s){const e=a.useContext(l);return a.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function r(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(i):s.components||i:t(s.components),a.createElement(l.Provider,{value:e},s.children)}}}]);