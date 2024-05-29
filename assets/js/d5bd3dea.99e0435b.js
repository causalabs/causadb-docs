"use strict";(self.webpackChunkcausadb_docs=self.webpackChunkcausadb_docs||[]).push([[4920],{1083:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var a=n(5893),r=n(1151);const s={},d="getData",c={id:"reference/node/CausaDB/getData",title:"getData",description:"\u25b8 getData(dataName): Promise\\",source:"@site/docs/reference/node/CausaDB/getData.md",sourceDirName:"reference/node/CausaDB",slug:"/reference/node/CausaDB/getData",permalink:"/docs/reference/node/CausaDB/getData",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"referenceSidebar",previous:{title:"createModel",permalink:"/docs/reference/node/CausaDB/createModel"},next:{title:"getModel",permalink:"/docs/reference/node/CausaDB/getModel"}},o={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}];function i(e){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"getdata",children:"getData"}),"\n",(0,a.jsxs)(t.p,{children:["\u25b8 ",(0,a.jsx)(t.strong,{children:"getData"}),"(",(0,a.jsx)(t.code,{children:"dataName"}),"): ",(0,a.jsx)(t.code,{children:"Promise"}),"<",(0,a.jsx)(t.code,{children:"Data"}),">"]}),"\n",(0,a.jsx)(t.p,{children:"Get a data object by name. This will return a data object that can be used to interact with the data on the CausaDB cloud."}),"\n",(0,a.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,a.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,a.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"left"},children:(0,a.jsx)(t.code,{children:"dataName"})}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:(0,a.jsx)(t.code,{children:"string"})}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"The name of the data."})]})})]}),"\n",(0,a.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"Promise"}),"<",(0,a.jsx)(t.code,{children:"Data"}),">"]}),"\n",(0,a.jsx)(t.p,{children:"The data object."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"Throws"})})}),"\n",(0,a.jsx)(t.p,{children:"If the data is not found."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"Example"})})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"const client = new CausaDB();\nawait client.setToken('test-token-secret');\nconst data = await client.getData('test-data');\n"})}),"\n",(0,a.jsx)(t.hr,{})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(i,{...e})}):i(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>d});var a=n(7294);const r={},s=a.createContext(r);function d(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);