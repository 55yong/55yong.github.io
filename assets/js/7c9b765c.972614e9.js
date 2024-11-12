"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[639],{4050:(s,a,e)=>{e.r(a),e.d(a,{assets:()=>m,contentTitle:()=>t,default:()=>x,frontMatter:()=>i,metadata:()=>c,toc:()=>r});var n=e(4848),l=e(8453);const i={slug:"boj14503",title:"[BOJ][JS] 14503 \ub85c\ubd07 \uccad\uc18c\uae30",sidebar_position:6},t=void 0,c={id:"likelion-study/algorithm/BFSDFS/06-14503",title:"[BOJ][JS] 14503 \ub85c\ubd07 \uccad\uc18c\uae30",description:"[BOJ] 14503 \ub85c\ubd07 \uccad\uc18c\uae30",source:"@site/docs/likelion-study/algorithm/BFSDFS/06-14503.md",sourceDirName:"likelion-study/algorithm/BFSDFS",slug:"/likelion-study/algorithm/BFSDFS/boj14503",permalink:"/docs/likelion-study/algorithm/BFSDFS/boj14503",draft:!1,unlisted:!1,editUrl:"https://github.com/55yong/55yong.github.io/tree/main/packages/create-docusaurus/templates/shared/docs/likelion-study/algorithm/BFSDFS/06-14503.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{slug:"boj14503",title:"[BOJ][JS] 14503 \ub85c\ubd07 \uccad\uc18c\uae30",sidebar_position:6},sidebar:"likelionStudy",previous:{title:"[BOJ][JS] 15270 \uce5c\uad6c \ud330\ub9b0\ub4dc\ub86c",permalink:"/docs/likelion-study/algorithm/BFSDFS/boj15270"},next:{title:"[BOJ][JS] 7576 \ud1a0\ub9c8\ud1a0",permalink:"/docs/likelion-study/algorithm/BFSDFS/boj7576"}},m={},r=[{value:"[BOJ] 14503 \ub85c\ubd07 \uccad\uc18c\uae30",id:"boj-14503-\ub85c\ubd07-\uccad\uc18c\uae30",level:2},{value:"\ubb38\uc81c",id:"\ubb38\uc81c",level:3},{value:"\uc785\ub825",id:"\uc785\ub825",level:3},{value:"\ucd9c\ub825",id:"\ucd9c\ub825",level:3},{value:"\ubb38\uc81c \ud480\uc774",id:"\ubb38\uc81c-\ud480\uc774",level:3}];function h(s){const a={a:"a",annotation:"annotation",br:"br",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",ol:"ol",p:"p",pre:"pre",semantics:"semantics",span:"span",...(0,l.R)(),...s.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h2,{id:"boj-14503-\ub85c\ubd07-\uccad\uc18c\uae30",children:(0,n.jsx)(a.a,{href:"https://www.acmicpc.net/problem/14503",children:"[BOJ] 14503 \ub85c\ubd07 \uccad\uc18c\uae30"})}),"\n",(0,n.jsx)(a.p,{children:"2024-11-07"}),"\n",(0,n.jsxs)(a.p,{children:["\uc2dc\uac04 \uc81c\ud55c : 2\ucd08",(0,n.jsx)(a.br,{}),"\n","\uba54\ubaa8\ub9ac \uc81c\ud55c : 512MB"]}),"\n",(0,n.jsx)(a.hr,{}),"\n",(0,n.jsx)(a.h3,{id:"\ubb38\uc81c",children:"\ubb38\uc81c"}),"\n",(0,n.jsx)(a.p,{children:"\ub85c\ubd07 \uccad\uc18c\uae30\uc640 \ubc29\uc758 \uc0c1\ud0dc\uac00 \uc8fc\uc5b4\uc84c\uc744 \ub54c, \uccad\uc18c\ud558\ub294 \uc601\uc5ed\uc758 \uac1c\uc218\ub97c \uad6c\ud558\ub294 \ud504\ub85c\uadf8\ub7a8\uc744 \uc791\uc131\ud558\uc2dc\uc624."}),"\n",(0,n.jsxs)(a.p,{children:["\ub85c\ubd07 \uccad\uc18c\uae30\uac00 \uc788\ub294 \ubc29\uc740 ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"N"}),(0,n.jsx)(a.mo,{children:"\xd7"}),(0,n.jsx)(a.mi,{children:"M"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"N \\times M"})]})})}),(0,n.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.7667em",verticalAlign:"-0.0833em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(a.span,{className:"mbin",children:"\xd7"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"M"})]})]})]})," \ud06c\uae30\uc758 \uc9c1\uc0ac\uac01\ud615\uc73c\ub85c \ub098\ud0c0\ub0bc \uc218 \uc788\uc73c\uba70, ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mn,{children:"1"}),(0,n.jsx)(a.mo,{children:"\xd7"}),(0,n.jsx)(a.mn,{children:"1"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"1 \\times 1"})]})})}),(0,n.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,n.jsx)(a.span,{className:"mord",children:"1"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(a.span,{className:"mbin",children:"\xd7"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(a.span,{className:"mord",children:"1"})]})]})]})," \ud06c\uae30\uc758 \uc815\uc0ac\uac01\ud615 \uce78\uc73c\ub85c \ub098\ub204\uc5b4\uc838 \uc788\ub2e4. \uac01\uac01\uc758 \uce78\uc740 \ubcbd \ub610\ub294 \ube48 \uce78\uc774\ub2e4. \uccad\uc18c\uae30\ub294 \ubc14\ub77c\ubcf4\ub294 \ubc29\ud5a5\uc774 \uc788\uc73c\uba70, \uc774 \ubc29\ud5a5\uc740 \ub3d9, \uc11c, \ub0a8, \ubd81 \uc911 \ud558\ub098\uc774\ub2e4. \ubc29\uc758 \uac01 \uce78\uc740 \uc88c\ud45c ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mo,{stretchy:"false",children:"("}),(0,n.jsx)(a.mi,{children:"r"}),(0,n.jsx)(a.mo,{separator:"true",children:","}),(0,n.jsx)(a.mi,{children:"c"}),(0,n.jsx)(a.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"(r, c)"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mopen",children:"("}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,n.jsx)(a.span,{className:"mpunct",children:","}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"c"}),(0,n.jsx)(a.span,{className:"mclose",children:")"})]})})]}),"\ub85c \ub098\ud0c0\ub0bc \uc218 \uc788\uace0, \uac00\uc7a5 \ubd81\ucabd \uc904\uc758 \uac00\uc7a5 \uc11c\ucabd \uce78\uc758 \uc88c\ud45c\uac00 ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mo,{stretchy:"false",children:"("}),(0,n.jsx)(a.mn,{children:"0"}),(0,n.jsx)(a.mo,{separator:"true",children:","}),(0,n.jsx)(a.mn,{children:"0"}),(0,n.jsx)(a.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"(0, 0)"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mopen",children:"("}),(0,n.jsx)(a.span,{className:"mord",children:"0"}),(0,n.jsx)(a.span,{className:"mpunct",children:","}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(a.span,{className:"mord",children:"0"}),(0,n.jsx)(a.span,{className:"mclose",children:")"})]})})]}),", \uac00\uc7a5 \ub0a8\ucabd \uc904\uc758 \uac00\uc7a5 \ub3d9\ucabd \uce78\uc758 \uc88c\ud45c\uac00 ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mo,{stretchy:"false",children:"("}),(0,n.jsx)(a.mi,{children:"N"}),(0,n.jsx)(a.mo,{children:"\u2212"}),(0,n.jsx)(a.mn,{children:"1"}),(0,n.jsx)(a.mo,{separator:"true",children:","}),(0,n.jsx)(a.mi,{children:"M"}),(0,n.jsx)(a.mo,{children:"\u2212"}),(0,n.jsx)(a.mn,{children:"1"}),(0,n.jsx)(a.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"(N-1, M-1)"})]})})}),(0,n.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mopen",children:"("}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(a.span,{className:"mbin",children:"\u2212"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.8778em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(a.span,{className:"mord",children:"1"}),(0,n.jsx)(a.span,{className:"mpunct",children:","}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"M"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(a.span,{className:"mbin",children:"\u2212"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mord",children:"1"}),(0,n.jsx)(a.span,{className:"mclose",children:")"})]})]})]}),"\uc774\ub2e4. \uc989, \uc88c\ud45c ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mo,{stretchy:"false",children:"("}),(0,n.jsx)(a.mi,{children:"r"}),(0,n.jsx)(a.mo,{separator:"true",children:","}),(0,n.jsx)(a.mi,{children:"c"}),(0,n.jsx)(a.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"(r, c)"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mopen",children:"("}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,n.jsx)(a.span,{className:"mpunct",children:","}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"c"}),(0,n.jsx)(a.span,{className:"mclose",children:")"})]})})]}),"\ub294 \ubd81\ucabd\uc5d0\uc11c ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mo,{stretchy:"false",children:"("}),(0,n.jsx)(a.mi,{children:"r"}),(0,n.jsx)(a.mo,{children:"+"}),(0,n.jsx)(a.mn,{children:"1"}),(0,n.jsx)(a.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"(r+1)"})]})})}),(0,n.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mopen",children:"("}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(a.span,{className:"mbin",children:"+"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mord",children:"1"}),(0,n.jsx)(a.span,{className:"mclose",children:")"})]})]})]}),"\ubc88\uc9f8\uc5d0 \uc788\ub294 \uc904\uc758 \uc11c\ucabd\uc5d0\uc11c ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mo,{stretchy:"false",children:"("}),(0,n.jsx)(a.mi,{children:"c"}),(0,n.jsx)(a.mo,{children:"+"}),(0,n.jsx)(a.mn,{children:"1"}),(0,n.jsx)(a.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"(c+1)"})]})})}),(0,n.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mopen",children:"("}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"c"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(a.span,{className:"mbin",children:"+"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mord",children:"1"}),(0,n.jsx)(a.span,{className:"mclose",children:")"})]})]})]}),"\ubc88\uc9f8 \uce78\uc744 \uac00\ub9ac\ud0a8\ub2e4. \ucc98\uc74c\uc5d0 \ube48 \uce78\uc740 \uc804\ubd80 \uccad\uc18c\ub418\uc9c0 \uc54a\uc740 \uc0c1\ud0dc\uc774\ub2e4."]}),"\n",(0,n.jsx)(a.p,{children:"\ub85c\ubd07 \uccad\uc18c\uae30\ub294 \ub2e4\uc74c\uacfc \uac19\uc774 \uc791\ub3d9\ud55c\ub2e4."}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"\ud604\uc7ac \uce78\uc774 \uc544\uc9c1 \uccad\uc18c\ub418\uc9c0 \uc54a\uc740 \uacbd\uc6b0, \ud604\uc7ac \uce78\uc744 \uccad\uc18c\ud55c\ub2e4."}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:["\ud604\uc7ac \uce78\uc758 \uc8fc\ubcc0 ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mn,{children:"4"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"4"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(a.span,{className:"mord",children:"4"})]})})]}),"\uce78 \uc911 \uccad\uc18c\ub418\uc9c0 \uc54a\uc740 \ube48 \uce78\uc774 \uc5c6\ub294 \uacbd\uc6b0,"]}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsx)(a.li,{children:"\ubc14\ub77c\ubcf4\ub294 \ubc29\ud5a5\uc744 \uc720\uc9c0\ud55c \ucc44\ub85c \ud55c \uce78 \ud6c4\uc9c4\ud560 \uc218 \uc788\ub2e4\uba74 \ud55c \uce78 \ud6c4\uc9c4\ud558\uace0 1\ubc88\uc73c\ub85c \ub3cc\uc544\uac04\ub2e4."}),"\n",(0,n.jsx)(a.li,{children:"\ubc14\ub77c\ubcf4\ub294 \ubc29\ud5a5\uc758 \ub4a4\ucabd \uce78\uc774 \ubcbd\uc774\ub77c \ud6c4\uc9c4\ud560 \uc218 \uc5c6\ub2e4\uba74 \uc791\ub3d9\uc744 \uba48\ucd98\ub2e4."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:["\ud604\uc7ac \uce78\uc758 \uc8fc\ubcc0 ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mn,{children:"4"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"4"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(a.span,{className:"mord",children:"4"})]})})]}),"\uce78 \uc911 \uccad\uc18c\ub418\uc9c0 \uc54a\uc740 \ube48 \uce78\uc774 \uc788\ub294 \uacbd\uc6b0,"]}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsxs)(a.li,{children:["\ubc18\uc2dc\uacc4 \ubc29\ud5a5\uc73c\ub85c ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mn,{children:"9"}),(0,n.jsxs)(a.msup,{children:[(0,n.jsx)(a.mn,{children:"0"}),(0,n.jsx)(a.mo,{children:"\u2218"})]})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"90^\\circ"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6741em"}}),(0,n.jsx)(a.span,{className:"mord",children:"9"}),(0,n.jsxs)(a.span,{className:"mord",children:[(0,n.jsx)(a.span,{className:"mord",children:"0"}),(0,n.jsx)(a.span,{className:"msupsub",children:(0,n.jsx)(a.span,{className:"vlist-t",children:(0,n.jsx)(a.span,{className:"vlist-r",children:(0,n.jsx)(a.span,{className:"vlist",style:{height:"0.6741em"},children:(0,n.jsxs)(a.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(a.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(a.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(a.span,{className:"mbin mtight",children:"\u2218"})})]})})})})})]})]})})]})," \ud68c\uc804\ud55c\ub2e4."]}),"\n",(0,n.jsx)(a.li,{children:"\ubc14\ub77c\ubcf4\ub294 \ubc29\ud5a5\uc744 \uae30\uc900\uc73c\ub85c \uc55e\ucabd \uce78\uc774 \uccad\uc18c\ub418\uc9c0 \uc54a\uc740 \ube48 \uce78\uc778 \uacbd\uc6b0 \ud55c \uce78 \uc804\uc9c4\ud55c\ub2e4."}),"\n",(0,n.jsx)(a.li,{children:"1\ubc88\uc73c\ub85c \ub3cc\uc544\uac04\ub2e4."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.h3,{id:"\uc785\ub825",children:"\uc785\ub825"}),"\n",(0,n.jsxs)(a.p,{children:["\uccab\uc9f8 \uc904\uc5d0 \ubc29\uc758 \ud06c\uae30 ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mi,{children:"N"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"N"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"})]})})]}),"\uacfc ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mi,{children:"M"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"M"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"M"})]})})]}),"\uc774 \uc785\ub825\ub41c\ub2e4. ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mo,{stretchy:"false",children:"("}),(0,n.jsx)(a.mn,{children:"3"}),(0,n.jsx)(a.mo,{children:"\u2264"}),(0,n.jsx)(a.mi,{children:"N"}),(0,n.jsx)(a.mo,{separator:"true",children:","}),(0,n.jsx)(a.mi,{children:"M"}),(0,n.jsx)(a.mo,{children:"\u2264"}),(0,n.jsx)(a.mn,{children:"50"}),(0,n.jsx)(a.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"(3 \\le N, M \\le 50)"})]})})}),(0,n.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mopen",children:"("}),(0,n.jsx)(a.span,{className:"mord",children:"3"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(a.span,{className:"mrel",children:"\u2264"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.8778em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),(0,n.jsx)(a.span,{className:"mpunct",children:","}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"M"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(a.span,{className:"mrel",children:"\u2264"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mord",children:"50"}),(0,n.jsx)(a.span,{className:"mclose",children:")"})]})]})]}),"\u200a \ub458\uc9f8 \uc904\uc5d0 \ucc98\uc74c\uc5d0 \ub85c\ubd07 \uccad\uc18c\uae30\uac00 \uc788\ub294 \uce78\uc758 \uc88c\ud45c ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mo,{stretchy:"false",children:"("}),(0,n.jsx)(a.mi,{children:"r"}),(0,n.jsx)(a.mo,{separator:"true",children:","}),(0,n.jsx)(a.mi,{children:"c"}),(0,n.jsx)(a.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"(r, c)"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mopen",children:"("}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,n.jsx)(a.span,{className:"mpunct",children:","}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"c"}),(0,n.jsx)(a.span,{className:"mclose",children:")"})]})})]}),"\uc640 \ucc98\uc74c\uc5d0 \ub85c\ubd07 \uccad\uc18c\uae30\uac00 \ubc14\ub77c\ubcf4\ub294 \ubc29\ud5a5 ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mi,{children:"d"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"d"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6944em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"d"})]})})]}),"\uac00 \uc785\ub825\ub41c\ub2e4. ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mi,{children:"d"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"d"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6944em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"d"})]})})]}),"\uac00 ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mn,{children:"0"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"0"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(a.span,{className:"mord",children:"0"})]})})]}),"\uc778 \uacbd\uc6b0 \ubd81\ucabd, ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mn,{children:"1"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"1"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(a.span,{className:"mord",children:"1"})]})})]}),"\uc778 \uacbd\uc6b0 \ub3d9\ucabd, ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mn,{children:"2"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"2"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(a.span,{className:"mord",children:"2"})]})})]}),"\uc778 \uacbd\uc6b0 \ub0a8\ucabd, ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mn,{children:"3"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"3"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(a.span,{className:"mord",children:"3"})]})})]}),"\uc778 \uacbd\uc6b0 \uc11c\ucabd\uc744 \ubc14\ub77c\ubcf4\uace0 \uc788\ub294 \uac83\uc774\ub2e4."]}),"\n",(0,n.jsxs)(a.p,{children:["\uc14b\uc9f8 \uc904\ubd80\ud130 ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mi,{children:"N"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"N"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"})]})})]}),"\uac1c\uc758 \uc904\uc5d0 \uac01 \uc7a5\uc18c\uc758 \uc0c1\ud0dc\ub97c \ub098\ud0c0\ub0b4\ub294 ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"N"}),(0,n.jsx)(a.mo,{children:"\xd7"}),(0,n.jsx)(a.mi,{children:"M"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"N \\times M"})]})})}),(0,n.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.7667em",verticalAlign:"-0.0833em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(a.span,{className:"mbin",children:"\xd7"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"M"})]})]})]}),"\uac1c\uc758 \uac12\uc774 \ud55c \uc904\uc5d0 ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mi,{children:"M"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"M"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"M"})]})})]}),"\uac1c\uc529 \uc785\ub825\ub41c\ub2e4. ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mi,{children:"i"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6595em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"i"})]})})]}),"\ubc88\uc9f8 \uc904\uc758 ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mi,{children:"j"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"j"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"})]})})]}),"\ubc88\uc9f8 \uac12\uc740 \uce78 ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mo,{stretchy:"false",children:"("}),(0,n.jsx)(a.mi,{children:"i"}),(0,n.jsx)(a.mo,{separator:"true",children:","}),(0,n.jsx)(a.mi,{children:"j"}),(0,n.jsx)(a.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"(i, j)"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mopen",children:"("}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(a.span,{className:"mpunct",children:","}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,n.jsx)(a.span,{className:"mclose",children:")"})]})})]}),"\uc758 \uc0c1\ud0dc\ub97c \ub098\ud0c0\ub0b4\uba70, \uc774 \uac12\uc774 ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mn,{children:"0"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"0"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(a.span,{className:"mord",children:"0"})]})})]}),"\uc778 \uacbd\uc6b0 ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mo,{stretchy:"false",children:"("}),(0,n.jsx)(a.mi,{children:"i"}),(0,n.jsx)(a.mo,{separator:"true",children:","}),(0,n.jsx)(a.mi,{children:"j"}),(0,n.jsx)(a.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"(i, j)"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mopen",children:"("}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(a.span,{className:"mpunct",children:","}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,n.jsx)(a.span,{className:"mclose",children:")"})]})})]}),"\uac00 \uccad\uc18c\ub418\uc9c0 \uc54a\uc740 \ube48 \uce78\uc774\uace0, ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mn,{children:"1"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"1"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(a.span,{className:"mord",children:"1"})]})})]}),"\uc778 \uacbd\uc6b0 ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mo,{stretchy:"false",children:"("}),(0,n.jsx)(a.mi,{children:"i"}),(0,n.jsx)(a.mo,{separator:"true",children:","}),(0,n.jsx)(a.mi,{children:"j"}),(0,n.jsx)(a.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"(i, j)"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mopen",children:"("}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(a.span,{className:"mpunct",children:","}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,n.jsx)(a.span,{className:"mclose",children:")"})]})})]}),"\uc5d0 \ubcbd\uc774 \uc788\ub294 \uac83\uc774\ub2e4. \ubc29\uc758 \uac00\uc7a5 \ubd81\ucabd, \uac00\uc7a5 \ub0a8\ucabd, \uac00\uc7a5 \uc11c\ucabd, \uac00\uc7a5 \ub3d9\ucabd \uc904 \uc911 \ud558\ub098 \uc774\uc0c1\uc5d0 \uc704\uce58\ud55c \ubaa8\ub4e0 \uce78\uc5d0\ub294 \ubcbd\uc774 \uc788\ub2e4. \ub85c\ubd07 \uccad\uc18c\uae30\uac00 \uc788\ub294 \uce78\uc740 \ud56d\uc0c1 \ube48 \uce78\uc774\ub2e4."]}),"\n",(0,n.jsx)(a.h3,{id:"\ucd9c\ub825",children:"\ucd9c\ub825"}),"\n",(0,n.jsx)(a.p,{children:"\ub85c\ubd07 \uccad\uc18c\uae30\uac00 \uc791\ub3d9\uc744 \uc2dc\uc791\ud55c \ud6c4 \uc791\ub3d9\uc744 \uba48\ucd9c \ub54c\uae4c\uc9c0 \uccad\uc18c\ud558\ub294 \uce78\uc758 \uac1c\uc218\ub97c \ucd9c\ub825\ud55c\ub2e4."}),"\n",(0,n.jsx)(a.h3,{id:"\ubb38\uc81c-\ud480\uc774",children:"\ubb38\uc81c \ud480\uc774"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-js",children:'const filepath =\n  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";\nconst input = require("fs")\n  .readFileSync(filepath)\n  .toString()\n  .trim()\n  .split("\\n");\n\n// \uc0c1, \uc6b0, \ud558, \uc88c\nconst ds = [\n  [-1, 0],\n  [0, 1],\n  [1, 0],\n  [0, -1],\n];\nconst [N, M] = input.shift().split(" ").map(Number);\nconst [startX, startY, direction] = input.shift().split(" ").map(Number);\nconst graph = input.map((v) => v.split(" ").map(Number));\nconst visited = Array.from(Array(N), () => Array(M).fill(0));\n\nconst maxDs = ds.length;\nconst getPositivePosition = (num) => (num < 0 ? num + maxDs : num);\n\nlet count = 0;\nconst queue = [[startX, startY, direction]];\nwhile (queue.length) {\n  let [x, y, dir] = queue.shift();\n\n  // 1. \ud604\uc7ac \uc704\uce58 \uccad\uc18c\n  if (!graph[x][y] && !visited[x][y]) {\n    count++;\n    visited[x][y] = 1;\n  }\n\n  // \ub3d9, \uc11c, \ub0a8, \ubd81 \uccb4\ud06c\n  for (let i = 0; i < 4; i++) {\n    // 2. \uc67c\ucabd\ubc29\ud5a5 \ud68c\uc804\n    dir = getPositivePosition(--dir);\n    const nx = x + ds[dir][0];\n    const ny = y + ds[dir][1];\n\n    // 2-1 \uc67c\ucabd\ubc29\ud5a5\uc5d0 \uccad\uc18c\uac00 \uac00\ub2a5\ud558\uba74 \uc774\ub3d9\n    if (!graph[nx][ny] && !visited[nx][ny]) {\n      queue.push([nx, ny, dir]);\n      break;\n    }\n\n    // 2-3, 2-4 \ub124 \ubc29\ud5a5 \ubaa8\ub450 \uccad\uc18c\uac00 \uc774\ubbf8 \ub418\uc5b4\uc788\uac70\ub098 \ubcbd\uc778 \uacbd\uc6b0 \uc9c4\uc785\n    if (i === 3) {\n      const backDir = getPositivePosition(dir - 2);\n      const bx = x + ds[backDir][0];\n      const by = y + ds[backDir][1];\n      // \ud6c4\uc9c4\uc774 \uac00\ub2a5\ud55c \uacbd\uc6b0 \ud6c4\uc9c4 (\uc774\ubbf8 \uccad\uc18c\ud588\ub358 \ubd80\ubd84\uc774\uc5ec\ub3c4 \uc0c1\uad00\uc5c6\uc74c \ubcbd\ub9cc \uc544\ub2c8\uba74)\n      if (!graph[bx][by]) {\n        queue.push([bx, by, dir]);\n        break;\n      }\n    }\n    // 2-2 \uc67c\ucabd \ubc29\ud5a5\uc5d0 \uccad\uc18c\ud560 \uacf5\uac04\uc774 \uc5c6\ub2e4\uba74 \ud68c\uc804\ub9cc \ud558\uace0 \ub2e4\uc2dc \ucee8\ud2f0\ub274\n  }\n}\nconsole.log(count);\n'})})]})}function x(s={}){const{wrapper:a}={...(0,l.R)(),...s.components};return a?(0,n.jsx)(a,{...s,children:(0,n.jsx)(h,{...s})}):h(s)}},8453:(s,a,e)=>{e.d(a,{R:()=>t,x:()=>c});var n=e(6540);const l={},i=n.createContext(l);function t(s){const a=n.useContext(i);return n.useMemo((function(){return"function"==typeof s?s(a):{...a,...s}}),[a,s])}function c(s){let a;return a=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:t(s.components),n.createElement(i.Provider,{value:a},s.children)}}}]);