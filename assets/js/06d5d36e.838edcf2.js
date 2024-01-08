"use strict";(self.webpackChunkcausadb_docs=self.webpackChunkcausadb_docs||[]).push([[7040],{7578:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var i=n(5893),s=n(1151);const a={sidebar_position:1},r="Predicting customer intent",o={id:"examples/customer_intent",title:"Predicting customer intent",description:"In the competitive retail landscape, understanding customer intent and optimising discount strategies can have a large impact on profitability. This use case explores how CausaDB can be used to predict whether or not to offer a discount to a specific user, based on their viewing and buying history.",source:"@site/docs/examples/customer_intent.md",sourceDirName:"examples",slug:"/examples/customer_intent",permalink:"/docs/examples/customer_intent",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/examples/customer_intent.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"exampleSidebar",next:{title:"Recommending health and lifestyle changes",permalink:"/docs/examples/discounts"}},l={},d=[{value:"Scenario",id:"scenario",level:2},{value:"Dataset",id:"dataset",level:2},{value:"Setup",id:"setup",level:2},{value:"Fitting the causal model",id:"fitting-the-causal-model",level:2},{value:"Defining the Causal Relationships",id:"defining-the-causal-relationships",level:3},{value:"Running training",id:"running-training",level:3},{value:"Using the model in production",id:"using-the-model-in-production",level:2},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const t={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"predicting-customer-intent",children:"Predicting customer intent"}),"\n",(0,i.jsx)(t.p,{children:"In the competitive retail landscape, understanding customer intent and optimising discount strategies can have a large impact on profitability. This use case explores how CausaDB can be used to predict whether or not to offer a discount to a specific user, based on their viewing and buying history."}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note"})," This is a minimal example with a small dataset, binary variables, and only a few variables. CausaDB can handle much more complex problems than this. But here is a good place to start to get the hang of how CausaDB works."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"scenario",children:"Scenario"}),"\n",(0,i.jsx)(t.p,{children:"Our retail business has a wealth of data on customer interactions, including whether a user has viewed similar items, purchased similar items, and whether they were previously offered a discount. These input variables will often be causally related, so its important to use causal AI and not conventional AI to understand how to optimise discounting strategies. In this example we'll predict the likelihood of a user making a purchase if offered a discount, thereby optimizing our marketing strategies and improving sales efficiency."}),"\n",(0,i.jsx)(t.h2,{id:"dataset",children:"Dataset"}),"\n",(0,i.jsx)(t.p,{children:"For this example we'll use a synthetic dataset that looks something like this:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"UserID"}),(0,i.jsx)(t.th,{children:"ViewedSimilarItem"}),(0,i.jsx)(t.th,{children:"BoughtSimilarItem"}),(0,i.jsx)(t.th,{children:"OfferedDiscount"}),(0,i.jsx)(t.th,{children:"BoughtItem"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"101"}),(0,i.jsx)(t.td,{children:"1"}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"0"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"102"}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"1"}),(0,i.jsx)(t.td,{children:"1"}),(0,i.jsx)(t.td,{children:"1"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"103"}),(0,i.jsx)(t.td,{children:"1"}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"1"}),(0,i.jsx)(t.td,{children:"0"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"104"}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"1"}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"1"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"105"}),(0,i.jsx)(t.td,{children:"1"}),(0,i.jsx)(t.td,{children:"1"}),(0,i.jsx)(t.td,{children:"1"}),(0,i.jsx)(t.td,{children:"1"})]})]})]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"UserID"}),": A unique identifier for each user in the dataset."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"ViewedSimilarItem"}),": Indicates whether the user has viewed a similar item."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"BoughtSimilarItem"}),": Shows if the user has previously purchased a similar item."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"OfferedDiscount"}),": Denotes whether the user was offered a discount on their purchase."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"BoughtItem"}),": Represents whether the user made a purchase."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Each row corresponds to a customer in the customer interaction database, and their browsing and purchasing behaviour, along with whether they were offered a discount. This is the dataset we'll be using to train our causal model."}),"\n",(0,i.jsx)(t.h2,{id:"setup",children:"Setup"}),"\n",(0,i.jsx)(t.p,{children:"CausaDB can be initialised and the dataset can be attached in the usual way:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'const causadb = require(\'causadb\');\n\ncausadb.setToken("<YOUR_API_KEY>");\n\nconst model = causadb.createModel("customer_intent");\n'})}),"\n",(0,i.jsx)(t.h2,{id:"fitting-the-causal-model",children:"Fitting the causal model"}),"\n",(0,i.jsx)(t.p,{children:"Once we have initialised CausaDB and created our model instance, the next step is to define the causal model with the relevant variables and their relationships. This means specifying the input features and the causal relationships between them. We'll define these manually in this example, but there are more automated approaches that we explore in other examples."}),"\n",(0,i.jsx)(t.h3,{id:"defining-the-causal-relationships",children:"Defining the Causal Relationships"}),"\n",(0,i.jsx)(t.p,{children:"The causal model in CausaDB allows us to incorporate domain knowledge about potential causal relationships between variables. In our case, we have:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"ViewedSimilarItem"})," and ",(0,i.jsx)(t.code,{children:"BoughtSimilarItem"})," as potential causes that might influence a user's decision to purchase. ",(0,i.jsx)(t.code,{children:"ViewedSimilarItem"})," may also be a cause of ",(0,i.jsx)(t.code,{children:"BoughtSimilarItem"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"OfferedDiscount"})," as an intervention variable, which we can control to observe its effect on the likelihood of purchase."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"BoughtItem"})," as the target variable, indicating whether the user ended up purchasing the item."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"This can be defined in CausaDB using"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'model.setNodes(["ViewedSimilarItem", "BoughtSimilarItem", "OfferedDiscount", "BoughtItem"]);\n\nmodel.setEdges([\n    ("ViewedSimilarItem", "BoughtSimilarItem"),\n    ("ViewedSimilarItem", "OfferedDiscount"),\n    ("BoughtSimilarItem", "OfferedDiscount"),\n    ("BoughtSimilarItem", "BoughtItem"),\n    ("BoughtSimilarItem", "OfferedDiscount"),\n    ("OfferedDiscount", "BoughtItem")\n]);\n'})}),"\n",(0,i.jsx)(t.h3,{id:"running-training",children:"Running training"}),"\n",(0,i.jsx)(t.p,{children:"After defining the variables and their causal relationships, we can fit the model to our dataset. This process takes place on the CausaDB cloud and for a small dataset with a few columns (like our example), should take less than a second."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"model.train();\n"})}),"\n",(0,i.jsx)(t.p,{children:"With the train method, the model learns from the historical data in our dataset. This training process allows CausaDB to understand how different variables interact causally and how interventions (like offering a discount) can influence the likelihood of a user making a purchase. This also makes the model ready for production, and it can now be queried to understand when to offer a discount to a user."}),"\n",(0,i.jsx)(t.h2,{id:"using-the-model-in-production",children:"Using the model in production"}),"\n",(0,i.jsx)(t.p,{children:"CausaDB is cloud-first, so once training is complete, the model is already available in production. This means that from a NodeJS server that handles API calls from your frontend, you can simply connect to CausaDB as above, retrieve the model, and then run the query needed for your application. In this case we'll retrieve the model using:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'const model = CausaDB.getModel("customer_intent");\n'})}),"\n",(0,i.jsxs)(t.p,{children:["This will pull in the model from your CausaDB model database ready for querying. Our goal is to determine whether or not to offer a discount to a current user to maximise the chance they'll purchase an item. The information we have about the current user will be ",(0,i.jsx)(t.code,{children:"ViewedSimilarItem"})," and ",(0,i.jsx)(t.code,{children:"BoughtSimilarItem"}),", let's assume these are available at the NodeJS server by the same variable names."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"const optimalAction = model.optimalActions({\n    actions: ['OfferedDiscount'],\n    outcomes: [\n        {'node': 'BoughtItem', 'target': 1}\n    ],\n    variables: [\n        {'node': 'ViewedSimilarItem', 'value': ViewedSimilarItem},\n        {'node': 'BoughtSimilarItem', 'value': BoughtSimilarItem},\n    ],\n})\n"})}),"\n",(0,i.jsxs)(t.p,{children:["The response ",(0,i.jsx)(t.code,{children:"optimalAction"})," will contain the recommended action for this specific user:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"{\n    actions: [\n        {'OfferedDiscount': 1}\n    ]\n}\n"})}),"\n",(0,i.jsx)(t.p,{children:"This can then be accessed programmatically to inform the frontend whether to show the discount/offer a coupon/etc or not."}),"\n",(0,i.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(t.p,{children:"This was a minimal example with a simple problem to demonstrate how CausaDB can be used in production to boost sales strategy. By leveraging CausaDB's capabilities, we can make informed decisions about offering discounts to customers, ultimately leading to more effective marketing strategies and increased sales. This approach allows us to move beyond traditional correlation-based analysis and into the realm of causal inference, providing deeper and trustworthy insights into customer behavior and decision-making processes. For a comparison of how our causal AI model performs compared to a more conventional correlational AI, see our blog."})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>r});var i=n(7294);const s={},a=i.createContext(s);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);