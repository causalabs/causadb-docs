"use strict";(self.webpackChunkcausadb_docs=self.webpackChunkcausadb_docs||[]).push([[8784],{1954:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>n,metadata:()=>o,toc:()=>d});var s=t(5893),i=t(1151);const n={sidebar_position:2},r="Model Structure",o={id:"guide/causal-ai/model-structure",title:"Model Structure",description:"Causal AI models are built around causal graphs, which represent the relationships between variables in a system. In causal graphs, nodes represent variables, and edges represent causal relationships between variables. These relationships are directed, meaning that the arrow points from the cause to the effect. A typical causal graph might look something like this:",source:"@site/docs/guide/causal-ai/model-structure.md",sourceDirName:"guide/causal-ai",slug:"/guide/causal-ai/model-structure",permalink:"/docs/guide/causal-ai/model-structure",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guide/causal-ai/model-structure.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"guideSidebar",previous:{title:"Causal Inference",permalink:"/docs/guide/causal-ai/causal-inference"},next:{title:"Latent Confounding",permalink:"/docs/guide/causal-ai/latent-confounding"}},l={},d=[{value:"Defining a Causal Graph",id:"defining-a-causal-graph",level:2},{value:"Learning a Causal Graph",id:"learning-a-causal-graph",level:2},{value:"Feedback Loops in Time Series",id:"feedback-loops-in-time-series",level:2}];function c(e){const a={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h1,{id:"model-structure",children:"Model Structure"}),"\n",(0,s.jsx)(a.p,{children:"Causal AI models are built around causal graphs, which represent the relationships between variables in a system. In causal graphs, nodes represent variables, and edges represent causal relationships between variables. These relationships are directed, meaning that the arrow points from the cause to the effect. A typical causal graph might look something like this:"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"Causal Graph",src:t(5551).Z+"",width:"660",height:"499"})}),"\n",(0,s.jsx)(a.p,{children:"One of the most important properties of causal graphs is that they are acyclic, meaning that there are no loops in the graph. This is because a causal relationship between two variables implies a temporal ordering, where the cause must precede the effect, so a loop would imply causality acting backwards in time. See the section below on time series for more information on how to handle time series data."}),"\n",(0,s.jsx)(a.p,{children:"The strongest assumptions when building a causal graph are the missing edges. These are the edges that are not present in the graph, and represent the assumption that there is no direct causal relationship between the variables. This means that the AI model won't attempt to learn a relationship between these variables."}),"\n",(0,s.jsx)(a.h2,{id:"defining-a-causal-graph",children:"Defining a Causal Graph"}),"\n",(0,s.jsxs)(a.p,{children:["When building a causal AI model, the first step is to define the nodes and edges of the causal graph. This can be done manually by specifying the nodes and edges in code, or by using a graphical interface to build the graph visually. Our model builder tool allows you to drag and drop nodes and edges to define the structure of your model, and then export the model to code for training and querying: ",(0,s.jsx)(a.a,{href:"https://builder.causadb.com",children:"CausaDB Model Builder"}),"."]}),"\n",(0,s.jsx)(a.h2,{id:"learning-a-causal-graph",children:"Learning a Causal Graph"}),"\n",(0,s.jsx)(a.p,{children:"An alternative to manually defining the causal graph is to learn the structure of the graph from data. This can be done using causal discovery algorithms, which infer the causal relationships between variables from observational data. These algorithms can be limited by the assumptions they make about the data, and may not always be able to accurately infer the true causal relationships. However, they can often be a useful tool for exploring the causal relationships in your data and generating hypotheses for further investigation."}),"\n",(0,s.jsx)(a.admonition,{type:"note",children:(0,s.jsx)(a.p,{children:"We have some exciting updates coming soon to CausaDB that will make it easier to learn causal graphs from data. Stay tuned for more information!"})}),"\n",(0,s.jsx)(a.h2,{id:"feedback-loops-in-time-series",children:"Feedback Loops in Time Series"}),"\n",(0,s.jsxs)(a.p,{children:["Time series data are a common use case for causal AI models, as many real-world systems are dynamic and evolve over time. But as mentioned earlier, feedback loops in causal graphs are not allowed. When working with time series data, this problem is solved by assigning variables to different time points. For example a variable ",(0,s.jsx)(a.code,{children:"x"})," at time ",(0,s.jsx)(a.code,{children:"t"})," can be represented as ",(0,s.jsx)(a.code,{children:"x_t"}),", and the causal relationship between ",(0,s.jsx)(a.code,{children:"x_t"})," and ",(0,s.jsx)(a.code,{children:"x_{t-1}"})," can be represented as an edge in the causal graph. This allows the model to capture the temporal relationships between variables without introducing loops in the graph."]}),"\n",(0,s.jsx)(a.admonition,{type:"note",children:(0,s.jsx)(a.p,{children:"We're currently working on adding explicit support for time series data in CausaDB, including built-in functions for handling time series data and temporal relationships in the causal graph. Stay tuned for updates on this feature!"})})]})}function h(e={}){const{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},5551:(e,a,t)=>{t.d(a,{Z:()=>s});const s=t.p+"assets/images/causadb_quickstart_8_0-ad902a5ce494fffcfb96c17970894f05.png"},1151:(e,a,t)=>{t.d(a,{Z:()=>o,a:()=>r});var s=t(7294);const i={},n=s.createContext(i);function r(e){const a=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(n.Provider,{value:a},e.children)}}}]);