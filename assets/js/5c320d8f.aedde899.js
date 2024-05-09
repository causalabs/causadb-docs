"use strict";(self.webpackChunkcausadb_docs=self.webpackChunkcausadb_docs||[]).push([[9651],{3251:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>i});var r=n(5893),s=n(1151);const d={},l="getModel",o={id:"reference/node/CausaDB/getModel",title:"getModel",description:"\u25b8 getModel(modelName): Promise\\",source:"@site/docs/reference/node/CausaDB/getModel.md",sourceDirName:"reference/node/CausaDB",slug:"/reference/node/CausaDB/getModel",permalink:"/docs/reference/node/CausaDB/getModel",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"referenceSidebar",previous:{title:"getData",permalink:"/docs/reference/node/CausaDB/getData"},next:{title:"listData",permalink:"/docs/reference/node/CausaDB/listData"}},c={},i=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}];function a(e){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"getmodel",children:"getModel"}),"\n",(0,r.jsxs)(t.p,{children:["\u25b8 ",(0,r.jsx)(t.strong,{children:"getModel"}),"(",(0,r.jsx)(t.code,{children:"modelName"}),"): ",(0,r.jsx)(t.code,{children:"Promise"}),"<",(0,r.jsx)(t.code,{children:"Model"}),">"]}),"\n",(0,r.jsx)(t.p,{children:"Get a model by name. This will return a model object that can be used to interact with the model on the CausaDB cloud."}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"modelName"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"string"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"The name of the model."})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Promise"}),"<",(0,r.jsx)(t.code,{children:"Model"}),">"]}),"\n",(0,r.jsx)(t.p,{children:"The model object."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"Throws"})})}),"\n",(0,r.jsx)(t.p,{children:"If the model is not found."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"Example"})})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"const client = new CausaDB();\nawait client.setToken('test-token-id', 'test-token-secret');\nconst model = await client.getModel('test-model');\n"})}),"\n",(0,r.jsx)(t.hr,{})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>l});var r=n(7294);const s={},d=r.createContext(s);function l(e){const t=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(d.Provider,{value:t},e.children)}}}]);