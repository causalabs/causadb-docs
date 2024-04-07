"use strict";(self.webpackChunkcausadb_docs=self.webpackChunkcausadb_docs||[]).push([[9722],{784:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var s=n(5893),a=n(1151);const i={title:"CausaDB Quickstart",description:"A quickstart guide to using CausaDB in Python",position:1},r="CausaDB Quickstart",d={id:"examples/causadb_quickstart",title:"CausaDB Quickstart",description:"A quickstart guide to using CausaDB in Python",source:"@site/docs/examples/1_causadb_quickstart.md",sourceDirName:"examples",slug:"/examples/causadb_quickstart",permalink:"/docs/examples/causadb_quickstart",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"CausaDB Quickstart",description:"A quickstart guide to using CausaDB in Python",position:1},sidebar:"exampleSidebar",next:{title:"Google Colab Notebooks",permalink:"/docs/examples/colab_notebooks"}},o={},l=[{value:"Initialise a client",id:"initialise-a-client",level:2},{value:"Registering a data source",id:"registering-a-data-source",level:2},{value:"Defining a causal model",id:"defining-a-causal-model",level:2},{value:"Visualising the model",id:"visualising-the-model",level:2},{value:"Training a causal model",id:"training-a-causal-model",level:2},{value:"Simulating actions",id:"simulating-actions",level:2},{value:"Finding the best action(s) to take",id:"finding-the-best-actions-to-take",level:2},{value:"Finding the causal effects of a variable",id:"finding-the-causal-effects-of-a-variable",level:2},{value:"Attributing causes of an outcome",id:"attributing-causes-of-an-outcome",level:2},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"causadb-quickstart",children:"CausaDB Quickstart"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://colab.research.google.com/drive/1k3UD2B0hQbqljOBi91TlWPD4Xmtz5PNP?usp=sharing",children:(0,s.jsx)(t.img,{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})})}),"\n",(0,s.jsxs)(t.p,{children:["This is a simple notebook to help you get started with CausaDB in Python. For more information, visit the ",(0,s.jsx)(t.a,{href:"https://docs.causadb.com",children:"CausaDB docs"}),". In this notebook we'll give a broad overview and whistle-stop tour of some of the core features of CausaDB. This notebook isn't intended to be a full guide. For that, please refer to the documentation."]}),"\n",(0,s.jsx)(t.h2,{id:"initialise-a-client",children:"Initialise a client"}),"\n",(0,s.jsxs)(t.p,{children:["Before you can use CausaDB, you need to create a client. You can do this by providing your token key. We'll load from Google colab secrets in this example, but in production the token could be loaded from environment variables or a secret manager. In this example you can replace ",(0,s.jsx)(t.code,{children:"<YOUR_TOKEN>"})," with your token."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'from causadb import CausaDB\nfrom causadb.plotting import plot_causal_graph, plot_causal_attributions\nimport numpy as np\n\nclient = CausaDB(token="<YOUR_TOKEN>")\n'})}),"\n",(0,s.jsx)(t.h2,{id:"registering-a-data-source",children:"Registering a data source"}),"\n",(0,s.jsxs)(t.p,{children:["CausaDB works by first registering data with the cloud service, and then attaching it to your model. Data can be loaded from a live database or a file. Loading from a database is preferred because it avoids duplication and keeps a single source of truth, but sometimes it will be necessary to load from a local file like a ",(0,s.jsx)(t.code,{children:".csv"})," or ",(0,s.jsx)(t.code,{children:".xlsx"}),", or even a Python ",(0,s.jsx)(t.code,{children:"pandas"})," dataframe."]}),"\n",(0,s.jsx)(t.p,{children:"In this example we'll show how to load data from a pandas dataframe. The data we'll use are from one of the built-in example datasets that are included in the CausaDB Python library."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'from causadb.examples.heating import get_heating_dataset, set_heating\ndata = get_heating_dataset()\n\nclient \\\n  .add_data("quickstart-heating-data") \\\n  .from_pandas(data)\n\ndata.head()\n'})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"day"}),(0,s.jsx)(t.th,{children:"outdoor_temp"}),(0,s.jsx)(t.th,{children:"heating"}),(0,s.jsx)(t.th,{children:"indoor_temp"}),(0,s.jsx)(t.th,{children:"energy"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"0"}),(0,s.jsx)(t.td,{children:"0"}),(0,s.jsx)(t.td,{children:"14.73"}),(0,s.jsx)(t.td,{children:"55.0"}),(0,s.jsx)(t.td,{children:"17.80"}),(0,s.jsx)(t.td,{children:"673.0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"1"}),(0,s.jsx)(t.td,{children:"1"}),(0,s.jsx)(t.td,{children:"12.07"}),(0,s.jsx)(t.td,{children:"61.0"}),(0,s.jsx)(t.td,{children:"20.47"}),(0,s.jsx)(t.td,{children:"729.0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"2"}),(0,s.jsx)(t.td,{children:"2"}),(0,s.jsx)(t.td,{children:"14.30"}),(0,s.jsx)(t.td,{children:"58.0"}),(0,s.jsx)(t.td,{children:"19.47"}),(0,s.jsx)(t.td,{children:"703.0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"3"}),(0,s.jsx)(t.td,{children:"3"}),(0,s.jsx)(t.td,{children:"15.27"}),(0,s.jsx)(t.td,{children:"51.0"}),(0,s.jsx)(t.td,{children:"17.49"}),(0,s.jsx)(t.td,{children:"649.0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"4"}),(0,s.jsx)(t.td,{children:"4"}),(0,s.jsx)(t.td,{children:"15.18"}),(0,s.jsx)(t.td,{children:"53.0"}),(0,s.jsx)(t.td,{children:"18.73"}),(0,s.jsx)(t.td,{children:"650.0"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"defining-a-causal-model",children:"Defining a causal model"}),"\n",(0,s.jsxs)(t.p,{children:["The code below creates a causal model and defines its causal structure. This can be done through code, as below, or through our ",(0,s.jsx)(t.a,{href:"https://builder.causadb.com",children:"BETA model builder web interface"}),". In the first two lines of set_edges, for example, we're saying that the outdoor temperature might effect both the indoor temperature and the heating setting. This allows the model to learn any relationship between those variables when it is trained."]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["For information on defining the causal structure structure see ",(0,s.jsx)(t.a,{href:"../guide/causal-ai/model-structure/",children:"Model Structure Concepts"})]})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'# Define a causal model (can also be done in the UI)\nmodel = client.create_model("quickstart-heating-model")\nmodel.set_nodes(["outdoor_temp", "heating", "indoor_temp", "energy"])\nmodel.set_edges([\n    ("outdoor_temp", "heating"),\n    ("outdoor_temp", "indoor_temp"),\n    ("heating", "indoor_temp"),\n    ("heating", "energy"),\n    ("indoor_temp", "energy")\n])\n'})}),"\n",(0,s.jsx)(t.h2,{id:"visualising-the-model",children:"Visualising the model"}),"\n",(0,s.jsx)(t.p,{children:"We can see what this causal model looks like for manual checking by visualising it using CausaDB's built-in plotting tools."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"plot_causal_graph(model)\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"png",src:n(9342).Z+"",width:"660",height:"499"})}),"\n",(0,s.jsx)(t.h2,{id:"training-a-causal-model",children:"Training a causal model"}),"\n",(0,s.jsx)(t.p,{children:"Now we can train the model on the loaded data. This will learn the causal relationships according to the structure defined above. This model will then be ready to query."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'model.train("quickstart-heating-data")\n'})}),"\n",(0,s.jsx)(t.h2,{id:"simulating-actions",children:"Simulating actions"}),"\n",(0,s.jsx)(t.p,{children:"One of the common use cases unique to causal models is to simulate the effect of actions to see how they change the outcome. We can do this by setting the value of a variable to a specific value, and then seeing how the other variables change. This is useful for understanding the impact of actions/decisions/interventions, or for making predictions."}),"\n",(0,s.jsxs)(t.p,{children:["CausaDB is fully Bayesian. This has the advantage of allowing easily access the lower and upper bounds of the predictions as well as the expected (average) value, using the ",(0,s.jsx)(t.code,{children:"lower"}),", ",(0,s.jsx)(t.code,{children:"upper"}),", and ",(0,s.jsx)(t.code,{children:"median"})," keys."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'model.simulate_actions(actions={\n  "heating": [46, 54],\n  "outdoor_temp": [12, 14]\n})["median"]\n'})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"day"}),(0,s.jsx)(t.th,{children:"outdoor_temp"}),(0,s.jsx)(t.th,{children:"heating"}),(0,s.jsx)(t.th,{children:"indoor_temp"}),(0,s.jsx)(t.th,{children:"energy"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"0"}),(0,s.jsx)(t.td,{children:"0.0"}),(0,s.jsx)(t.td,{children:"12.0"}),(0,s.jsx)(t.td,{children:"46.0"}),(0,s.jsx)(t.td,{children:"16.533552"}),(0,s.jsx)(t.td,{children:"599.737037"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"1"}),(0,s.jsx)(t.td,{children:"0.0"}),(0,s.jsx)(t.td,{children:"14.0"}),(0,s.jsx)(t.td,{children:"54.0"}),(0,s.jsx)(t.td,{children:"18.653116"}),(0,s.jsx)(t.td,{children:"668.615622"})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["It also works for single values, shown below using the ",(0,s.jsx)(t.code,{children:"lower"})," key for demonstration."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'model.simulate_actions(actions={\n  "heating": 46,\n  "outdoor_temp": 12\n})["lower"]\n'})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"day"}),(0,s.jsx)(t.th,{children:"outdoor_temp"}),(0,s.jsx)(t.th,{children:"heating"}),(0,s.jsx)(t.th,{children:"indoor_temp"}),(0,s.jsx)(t.th,{children:"energy"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"0"}),(0,s.jsx)(t.td,{children:"0.0"}),(0,s.jsx)(t.td,{children:"12.0"}),(0,s.jsx)(t.td,{children:"46.0"}),(0,s.jsx)(t.td,{children:"15.687185"}),(0,s.jsx)(t.td,{children:"593.513125"})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"finding-the-best-actions-to-take",children:"Finding the best action(s) to take"}),"\n",(0,s.jsxs)(t.p,{children:["Probably the most common use case is to find the best action to take. This could be a decision, an optimisation, or a recommendation. We can do this using the ",(0,s.jsx)(t.code,{children:"find_best_action"})," method, which will find the action that achieves an outcome closest to a target value. This can be done while respecting constraints on other variables, or by setting the value of other variables to specific values using the ",(0,s.jsx)(t.code,{children:"fixed"})," parameter."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'best_actions = model.find_best_actions(\n    targets={"indoor_temp": 19},\n    actionable=["heating"],\n    fixed={"outdoor_temp": 16}\n)\n\nachieved_indoor_temp = set_heating(best_actions["heating"].values, np.array([16]), noise=False)[0]\n\nprint(f"Best heating setting: {best_actions[\'heating\'].values[0]:.1f}")\nprint(f"Indoor temperature achieved: {achieved_indoor_temp[0]:.1f}\xb0C")\n'})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"Best heating setting: 54.3\nIndoor temperature achieved: 19.0\xb0C\n"})}),"\n",(0,s.jsx)(t.h2,{id:"finding-the-causal-effects-of-a-variable",children:"Finding the causal effects of a variable"}),"\n",(0,s.jsxs)(t.p,{children:["Another useful query is to find the causal effect of a variable on the others. This can be done using the ",(0,s.jsx)(t.code,{children:"causal_effect"})," method, which will return the expected change in the target variable for a given change in the causal variable. This can be done for a range of values, or for a single value."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'model.causal_effects({"heating": [50, 55]}, fixed={"outdoor_temp": 15})\n'})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"median"}),(0,s.jsx)(t.th,{children:"lower"}),(0,s.jsx)(t.th,{children:"upper"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"day"}),(0,s.jsx)(t.td,{children:"0.000000"}),(0,s.jsx)(t.td,{children:"0.000000"}),(0,s.jsx)(t.td,{children:"0.000000"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"outdoor_temp"}),(0,s.jsx)(t.td,{children:"0.000000"}),(0,s.jsx)(t.td,{children:"0.000000"}),(0,s.jsx)(t.td,{children:"0.000000"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"heating"}),(0,s.jsx)(t.td,{children:"5.000000"}),(0,s.jsx)(t.td,{children:"5.000000"}),(0,s.jsx)(t.td,{children:"5.000000"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"indoor_temp"}),(0,s.jsx)(t.td,{children:"1.295403"}),(0,s.jsx)(t.td,{children:"1.135942"}),(0,s.jsx)(t.td,{children:"1.454892"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"energy"}),(0,s.jsx)(t.td,{children:"43.059056"}),(0,s.jsx)(t.td,{children:"40.899418"}),(0,s.jsx)(t.td,{children:"45.263778"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"attributing-causes-of-an-outcome",children:"Attributing causes of an outcome"}),"\n",(0,s.jsxs)(t.p,{children:["A similar but distinct query to ",(0,s.jsx)(t.code,{children:"causal_effects"})," is ",(0,s.jsx)(t.code,{children:"causal_attributions"}),", which calculates how much each variable contributes to the value of an outcome variable. This can be useful for understanding the importance of different variables in a system. It's important to interpret these results in the context of the model, as the causal pathways can sometimes be indirect (through another variable)."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'causal_attributions = model.causal_attributions("energy")\ncausal_attributions\n'})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"energy"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"outdoor_temp"}),(0,s.jsx)(t.td,{children:"-25.130205"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"heating"}),(0,s.jsx)(t.td,{children:"8.639587"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"indoor_temp"}),(0,s.jsx)(t.td,{children:"2.948999"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"Causal attributions can also be plotted to visualise the impacts of various variables on the outcome. Positive-valued attributions mean that greater values of the cause node will positively affect the outcome node, and negative-valued attributions mean that greater values of the cause node will negatively affect the outcome node."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'plot_causal_attributions(model, "energy", normalise=False)\n'})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"png",src:n(8307).Z+"",width:"648",height:"455"})}),"\n",(0,s.jsx)(t.p,{children:"There is also a normalised version of the function to show the relative importance of each variable, scaled to sum to 1."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'plot_causal_attributions(model, "energy", normalise=True)\n'})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"png",src:n(1569).Z+"",width:"647",height:"455"})}),"\n",(0,s.jsx)(t.p,{children:"It's interesting to note that indoor temperature has a small effect on energy usage. This is because refrigeration units will work harder to maintain a lower temperature, and heating units will work harder to maintain a higher temperature. This is a good example of how causal models can capture these complex relationships."}),"\n",(0,s.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsxs)(t.p,{children:["This has been a quick overview of some of the core features of CausaDB. For more information, please refer to the documentation or get in touch with us via email: ",(0,s.jsx)(t.a,{href:"mailto:causadb@causa.tech",children:"causadb@causa.tech"})," or our ",(0,s.jsx)(t.a,{href:"https://join.slack.com/t/causadbcommunity/shared_invite/zt-2gahl1s0j-gsAf9ZJsR0SKcAZe3AVBIQ",children:"Slack community"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8307:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/causadb_quickstart_22_1-421870e33245f90cb6f0d1624199b9f2.png"},1569:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/causadb_quickstart_24_1-d575088f757a7b5e013781e8b61038d2.png"},9342:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/causadb_quickstart_8_0-ad902a5ce494fffcfb96c17970894f05.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>r});var s=n(7294);const a={},i=s.createContext(a);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);