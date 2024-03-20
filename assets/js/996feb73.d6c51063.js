"use strict";(self.webpackChunkcausadb_docs=self.webpackChunkcausadb_docs||[]).push([[9465],{6847:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var s=t(5893),o=t(1151);const i={},c="Simulate Actions",r={id:"reference/python/Model/simulate_actions",title:"Simulate Actions",description:"Simulate an action on the model.",source:"@site/docs/reference/python/Model/simulate_actions.md",sourceDirName:"reference/python/Model",slug:"/reference/python/Model/simulate_actions",permalink:"/docs/reference/python/Model/simulate_actions",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/reference/python/Model/simulate_actions.md",tags:[],version:"current",frontMatter:{},sidebar:"referenceSidebar",previous:{title:"Set Nodes",permalink:"/docs/reference/python/Model/set_nodes"},next:{title:"Status",permalink:"/docs/reference/python/Model/status"}},l={},d=[];function a(e){const n={blockquote:"blockquote",code:"code",em:"em",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"simulate-actions",children:"Simulate Actions"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def simulate_actions(actions: dict,\n                     fixed: dict = \\{\\},\n                     interval: float = 0.9,\n                     observation_noise: bool = False) -> dict\n"})}),"\n",(0,s.jsx)(n.p,{children:"Simulate an action on the model."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"actions"})," ",(0,s.jsx)(n.em,{children:"dict"})," - A dictionary representing the actions."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"fixed"})," ",(0,s.jsx)(n.em,{children:"dict"})," - A dictionary representing the fixed nodes."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"interval"})," ",(0,s.jsx)(n.em,{children:"float"})," - The interval at which to simulate the action."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"observation_noise"})," ",(0,s.jsx)(n.em,{children:"bool"})," - Whether to include observation noise."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"dict"})," - A dictionary representing the result of the action."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Example"}),":"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:'model.simulate_actions(\n...     {"x": [0, 1]}\n... )'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)("a",{id:"model.Model.causal_effects"})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>c});var s=t(7294);const o={},i=s.createContext(o);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);