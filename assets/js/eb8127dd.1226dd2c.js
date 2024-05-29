"use strict";(self.webpackChunkcausadb_docs=self.webpackChunkcausadb_docs||[]).push([[519],{8836:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>i});var r=n(5893),s=n(1151);const c={},d="create",l={id:"reference/node/Model/create",title:"create",description:"\u25b8 create(modelName, client): Promise\\",source:"@site/docs/reference/node/Model/create.md",sourceDirName:"reference/node/Model",slug:"/reference/node/Model/create",permalink:"/docs/reference/node/Model/create",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"referenceSidebar",previous:{title:"causalEffects",permalink:"/docs/reference/node/Model/causalEffects"},next:{title:"detach",permalink:"/docs/reference/node/Model/detach"}},o={},i=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}];function a(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"create",children:"create"}),"\n",(0,r.jsxs)(t.p,{children:["\u25b8 ",(0,r.jsx)(t.strong,{children:"create"}),"(",(0,r.jsx)(t.code,{children:"modelName"}),", ",(0,r.jsx)(t.code,{children:"client"}),"): ",(0,r.jsx)(t.code,{children:"Promise"}),"<",(0,r.jsx)(t.code,{children:"Model"}),">"]}),"\n",(0,r.jsx)(t.p,{children:"Creates a new model and adds it to the CausaDB system.\nRetrieves any existing configuration from the server and then updates the server with any new configurations."}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"modelName"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"string"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"The name of the model to create."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"client"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"CausaDB"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"A CausaDB client."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Promise"}),"<",(0,r.jsx)(t.code,{children:"Model"}),">"]}),"\n",(0,r.jsx)(t.p,{children:"The current state of the model."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"Throws"})})}),"\n",(0,r.jsx)(t.p,{children:"If the request fails or the model does not exist."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"Example"})})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"const client = new CausaDB();\nawait client.setToken('test-token-secret');\nconst model = await Model.create('test-model', client);\n"})})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>d});var r=n(7294);const s={},c=r.createContext(s);function d(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);