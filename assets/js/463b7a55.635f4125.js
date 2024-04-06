"use strict";(self.webpackChunkcausadb_docs=self.webpackChunkcausadb_docs||[]).push([[6276],{9523:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var i=t(5893),a=t(1151);const s={sidebar_position:2},o="Installation",c={id:"guide/getting-started/installation",title:"Installation",description:"CLI/Python interface",source:"@site/docs/guide/getting-started/installation.md",sourceDirName:"guide/getting-started",slug:"/guide/getting-started/installation",permalink:"/docs/guide/getting-started/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guide/getting-started/installation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"guideSidebar",previous:{title:"Introduction",permalink:"/docs/guide/getting-started/intro"}},r={},d=[{value:"CLI/Python interface",id:"clipython-interface",level:2},{value:"Installing the CLI/Python interface",id:"installing-the-clipython-interface",level:3},{value:"Authenticating the Python interface",id:"authenticating-the-python-interface",level:3},{value:"Node.js interface",id:"nodejs-interface",level:2},{value:"Installing the Node.js interface",id:"installing-the-nodejs-interface",level:3},{value:"Authenticating the Node.js interface",id:"authenticating-the-nodejs-interface",level:3},{value:"Next steps",id:"next-steps",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(n.h2,{id:"clipython-interface",children:"CLI/Python interface"}),"\n",(0,i.jsx)(n.p,{children:"CausaDB is managed through a CLI tool that can be installed through pip. We also provide Python, Node.js, and REST API interfaces. The CLI tool is bundled with the Python interface, so should be installed regardless of whether you want to use the Python interface."}),"\n",(0,i.jsx)(n.h3,{id:"installing-the-clipython-interface",children:"Installing the CLI/Python interface"}),"\n",(0,i.jsx)(n.p,{children:"The CLI (and bundled Python interface) can be installed from PyPI using:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pip install causadb\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Once the CLI is installed, you'll need to set it up with your access credentials. You can do this by running the ",(0,i.jsx)(n.code,{children:"login"})," command:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"causadb account setup\n"})}),"\n",(0,i.jsx)(n.p,{children:"Follow the instructions in the CLI to link it with your cloud account."}),"\n",(0,i.jsx)(n.h3,{id:"authenticating-the-python-interface",children:"Authenticating the Python interface"}),"\n",(0,i.jsx)(n.p,{children:"When using the Python interface on a remote instance (such as a server or Colab notebook) you'll need to authenticate within the Python interface. This is done when you set up the client:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'import causadb\n\nclient = causadb.CausaDB(token="<YOUR_TOKEN_HERE>")\n'})}),"\n",(0,i.jsx)(n.h2,{id:"nodejs-interface",children:"Node.js interface"}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"The Node.js interface is under active development and is not yet feature-complete. We recommend using the Python interface for now."})}),"\n",(0,i.jsx)(n.p,{children:"The Node.js client is intended for use with JavaScript and Typescript, and is ideal for server-side (not client-side) software."}),"\n",(0,i.jsx)(n.h3,{id:"installing-the-nodejs-interface",children:"Installing the Node.js interface"}),"\n",(0,i.jsx)(n.p,{children:"The Node.js client is available on npm, and can be installed in the standard way:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm install causadb\n"})}),"\n",(0,i.jsx)(n.h3,{id:"authenticating-the-nodejs-interface",children:"Authenticating the Node.js interface"}),"\n",(0,i.jsx)(n.p,{children:"To authenticate the Node.js interface, run:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'import { CausaDB } from "causadb";\n\nCausaDB.setToken("AHFDOIEUBDKSDVXHFSKH");\n'})}),"\n",(0,i.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,i.jsxs)(n.p,{children:["Once you've set up your CLI and whichever interface you're working with, it's time to get started working with causal AI on the cloud. Follow our ",(0,i.jsx)(n.a,{href:"../../examples/causadb_quickstart",children:"quickstart guide"})," to get started."]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>o});var i=t(7294);const a={},s=i.createContext(a);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);