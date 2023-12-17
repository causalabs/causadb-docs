"use strict";(self.webpackChunkcausadb_docs=self.webpackChunkcausadb_docs||[]).push([[1689],{8770:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>r});var i=t(5893),a=t(1151);const s={sidebar_position:2},o="Installation",l={id:"guide/installation",title:"Installation",description:"Installing the CLI/Python interface",source:"@site/docs/guide/installation.mdx",sourceDirName:"guide",slug:"/guide/installation",permalink:"/docs/guide/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guide/installation.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"guideSidebar",previous:{title:"Introduction",permalink:"/docs/guide/intro"},next:{title:"Quickstart",permalink:"/docs/guide/quickstart"}},c={},r=[{value:"Installing the CLI/Python interface",id:"installing-the-clipython-interface",level:2},{value:"Authenticating the Python interface",id:"authenticating-the-python-interface",level:3},{value:"Installing the Node.js interface",id:"installing-the-nodejs-interface",level:2},{value:"Next steps",id:"next-steps",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(n.h2,{id:"installing-the-clipython-interface",children:"Installing the CLI/Python interface"}),"\n",(0,i.jsx)(n.p,{children:"CausaDB is managed through a CLI tool that can be installed through pip. We also provide Python, Node.js, and REST API interfaces. The CLI tool is bundled with the Python interface, but should be installed regardless of whether you want to use the Python interface. The CLI (and bundled Python interface) can be installed from PyPI using:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pip install causadb\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Once the CLI is installed, you'll need to set it up with your access credentials. You can do this by running the ",(0,i.jsx)(n.code,{children:"login"})," command:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"causadb login\n"})}),"\n",(0,i.jsx)(n.p,{children:"Follow the instructions in the CLI to link it with your cloud account."}),"\n",(0,i.jsx)(n.h3,{id:"authenticating-the-python-interface",children:"Authenticating the Python interface"}),"\n",(0,i.jsx)(n.p,{children:"When using the Python interface on a remote instance (such as a server or Colab notebook) you'll need to authenticate within the Python interface. This can be done using the following code snippet:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'import causadb\n\ncausadb.set_token("AHFDOIEUBDKSDVXHFSKH")\n'})}),"\n",(0,i.jsx)(n.h2,{id:"installing-the-nodejs-interface",children:"Installing the Node.js interface"}),"\n",(0,i.jsx)(n.p,{children:"The Node.js client is available on npm, and can be installed in the standard way:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm install causadb\n"})}),"\n",(0,i.jsx)(n.p,{children:"To authenticate the Node.js interface, run:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'import { CausaDB } from "causadb";\n\nCausaDB.setToken("AHFDOIEUBDKSDVXHFSKH");\n'})}),"\n",(0,i.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,i.jsxs)(n.p,{children:["Once you've set up your CLI and whichever interface you're working with, it's time to get started working with causal AI on the cloud. Follow our ",(0,i.jsx)(n.a,{href:"./quickstart",children:"quickstart guide"})," to get started."]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>o});var i=t(7294);const a={},s=i.createContext(a);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);