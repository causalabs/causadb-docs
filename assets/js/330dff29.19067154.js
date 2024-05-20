"use strict";(self.webpackChunkcausadb_docs=self.webpackChunkcausadb_docs||[]).push([[7655],{4480:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var n=i(5893),s=i(1151);const l={title:"Optimising Yield in Production Lines with CausaDB",description:"Using CausaDB to optimise yield in production lines"},r="Optimising Yield in Production Lines with CausaDB",d={id:"examples/use-cases/production_lines_optimise_yield",title:"Optimising Yield in Production Lines with CausaDB",description:"Using CausaDB to optimise yield in production lines",source:"@site/docs/examples/use-cases/production_lines_optimise_yield.md",sourceDirName:"examples/use-cases",slug:"/examples/use-cases/production_lines_optimise_yield",permalink:"/docs/examples/use-cases/production_lines_optimise_yield",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Optimising Yield in Production Lines with CausaDB",description:"Using CausaDB to optimise yield in production lines"},sidebar:"exampleSidebar",previous:{title:"Building Energy Optimisation",permalink:"/docs/examples/use-cases/causadb_heating"}},a={},o=[{value:"Setup",id:"setup",level:2},{value:"Data",id:"data",level:2},{value:"Building a Causal Model",id:"building-a-causal-model",level:2},{value:"Visualising the Model",id:"visualising-the-model",level:2},{value:"Find optimal machine configurations to maximise yield",id:"find-optimal-machine-configurations-to-maximise-yield",level:2},{value:"Explain the causes of yield",id:"explain-the-causes-of-yield",level:2},{value:"Summary",id:"summary",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"optimising-yield-in-production-lines-with-causadb",children:"Optimising Yield in Production Lines with CausaDB"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/causalabs/causadb-examples/blob/main/python/production_line/main.ipynb",children:(0,n.jsx)(t.img,{src:"https://img.shields.io/badge/Open%20in-Github-lightgrey?logo=github",alt:"Open In Github"})})}),"\n",(0,n.jsx)(t.p,{children:"Manufacturing production and assembly lines are how most modern products are made, from silicon computer chips to vaccines. They are inherently complex systems with a large number of moving parts and interdependencies. The complex nature of production lines and their interconnected nature makes it difficult to adjust and optimise their performance without a deep understanding of how they work. Traditional methods of optimising production lines are often based on trial and error or bespoke digital twins, both of which are time-consuming and expensive in their own ways."}),"\n",(0,n.jsxs)(t.p,{children:["Standard AI and ML techniques are not well-suited to this task because they do not capture the causal relationships between variables in the system. This makes many AI-driven approaches to optimising production lines ineffective at best and even harmful at worst. Fortunately, causal ML models ",(0,n.jsx)(t.em,{children:"can"})," build a deep understanding of complex systems with relatively minimal data. This makes causal ML extremely well-suited to the problem of optimising production lines to maximise yield, reduce energy wastage, and minimise byproducts."]}),"\n",(0,n.jsx)(t.p,{children:"In this technical example, we will show how to use CausaDB to build a causal model of a production line and use it to optimise yield. We'll be using simulated data for this example, but the same principles apply to real-world data. Our simulations are based on a production line like the one shown below:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Production Line",src:i(3964).Z+"",width:"1004",height:"679"})}),"\n",(0,n.jsx)(t.p,{children:"Here there are three inputs, leading to different areas of the production line, each with their own set of machines and processes. The machines and processes are controlled by a set of configuration settings, and the output of the production line is the final product. There may also be byproducts or waste that are produced as part of the process."}),"\n",(0,n.jsx)(t.h2,{id:"setup",children:"Setup"}),"\n",(0,n.jsxs)(t.p,{children:["We won't go into the details of setting up CausaDB in this example. If you haven't already set up CausaDB, you can follow the instructions in the ",(0,n.jsx)(t.a,{href:"../causadb_quickstart",children:"Quickstart Guide"}),". You can visit the ",(0,n.jsx)(t.a,{href:"https://github.com/causalabs/causadb-examples/blob/main/python/production_line/main.ipynb",children:"Github repository"})," for this example to see the full code."]}),"\n",(0,n.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,n.jsx)(t.p,{children:"We'll be using a simulated dataset for this example. The dataset contains the following columns:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Input_A"}),", ",(0,n.jsx)(t.code,{children:"Input_B"}),", ",(0,n.jsx)(t.code,{children:"Input_C"}),": The input materials for the production line, this could be raw stock, chemicals, or components coming into the production line from another source."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Setting_*"}),": Configuration settings for the production line, these could be things like temperature, pressure, or speed settings for each machine at different points along the production line."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Yield_*"}),": The yield of the production line at different points, this could be the proportion of good products to bad products, or the proportion of raw materials that are lost as waste."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Output"}),": The final output of the production line, again, this could be the proportion of good products to bad products, or the proportion of raw materials that are lost as waste."]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"data = pd.read_csv('production_data.csv')\ndata.head()\n"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"right"}}),(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"Input_A"}),(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"Input_B"}),(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"Input_C"}),(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"Setting_A1"}),(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"Setting_B1"}),(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"Setting_B2"}),(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"Setting_C1"}),(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"Setting_C2"}),(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"Yield_A1"}),(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"Setting_A2"}),(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"Yield_B1"}),(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"Setting_B3"}),(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"Yield_A2"}),(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"Setting_A3"}),(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"Yield_B2"}),(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"Yield_C1"}),(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"Yield_A3"}),(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"Yield_B3"}),(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"Yield_C2"}),(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"Output"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"62.21"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"91.48"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"72.55"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.34"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.42"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.39"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.52"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.87"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.64"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.54"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.52"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.51"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.62"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.62"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.53"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.38"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.6"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.63"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.68"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.88"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"1"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"74"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"124.91"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"75.04"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.65"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.34"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.35"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.27"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.63"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.54"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.74"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.47"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.54"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.73"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.69"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.45"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.2"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.75"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.57"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.41"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.85"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"2"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"121.3"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"121.1"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"87.57"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.51"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.59"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.62"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.32"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.44"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.69"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.49"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.6"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.64"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.59"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.69"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.77"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.38"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.65"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.78"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.35"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.85"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"3"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"116.46"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"115.3"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"94.24"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.84"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.36"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.7"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.36"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.66"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.56"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.76"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.5"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.85"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.7"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.77"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.68"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.35"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.8"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.88"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.46"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.95"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"4"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"67.43"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"145.29"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"94.29"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.68"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.39"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.59"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.49"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.7"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.44"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.81"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.53"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.67"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.65"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.94"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.63"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.49"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.82"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.84"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.66"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.99"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"building-a-causal-model",children:"Building a Causal Model"}),"\n",(0,n.jsx)(t.p,{children:"The complexity of production lines means that the causal graphs can be quite large, with many nodes and edges. Fortunately they can often be automatically extracted from schematics like the one above programmatically. We've already done this and stored the nodes and edges as JSON files, so we can load them directly from file."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"with open('nodes.json', 'r') as f:\n    nodes = json.load(f)\n\nwith open('edges.json', 'r') as f:\n    edges = json.load(f)\n\nmodel = client.create_model(\"example-production-model\")\nmodel.set_nodes(nodes)\nmodel.set_edges(edges)\n\nmodel.train(\"example-production-data\")\n"})}),"\n",(0,n.jsx)(t.h2,{id:"visualising-the-model",children:"Visualising the Model"}),"\n",(0,n.jsx)(t.p,{children:"Using the built-in plotting tools in CausaDB, we can visualise the causal graph of the production line. This can be useful for manual checking and debugging. Here we'll set the style to flowchart, as this style is particularly useful for visualising production lines and other systems with a linear flow."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'plot_causal_graph(model, style="flowchart", theme="dark", direction="LR")\n'})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Production Line Causal Graph",src:i(6803).Z+"",width:"1646",height:"1198"})}),"\n",(0,n.jsxs)(t.p,{children:["Here we can see the causal relationships between different variables in the production line. The ",(0,n.jsx)(t.code,{children:"Setting_*"})," nodes are the configuration settings for the machines and processes in the production line. These settings are modifiable and can be used to optimise the production line for maximum yield."]}),"\n",(0,n.jsx)(t.h2,{id:"find-optimal-machine-configurations-to-maximise-yield",children:"Find optimal machine configurations to maximise yield"}),"\n",(0,n.jsxs)(t.p,{children:["To find the best set of configuration settings to set, we can use the ",(0,n.jsx)(t.code,{children:"find_best_actions"})," function to find the combination of configuration settings that will maximise yield. In this case our goal will be solely to maximise the output yield, but in real-world scenarios you may want to balance multiple objectives, such as minimising energy usage or waste production while maximising yield."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'optimal_config = model.find_best_actions(\n    targets={"Output": "maximise"},\n    actionable=["Setting_A1", "Setting_A2", "Setting_A3", "Setting_B1", "Setting_B2", "Setting_B3", "Setting_C1", "Setting_C2"],\n)\n\noptimal_config.round(2)\n'})}),"\n",(0,n.jsxs)(t.p,{children:["This set of configuration settings can then be applied to the machines in the production line to maximise yield. More precise control for specific scenarios could be achieved by also setting some of the variable inputs to the process using ",(0,n.jsx)(t.code,{children:"fixed"})," in the ",(0,n.jsx)(t.code,{children:"find_best_actions"})," function. But in this example we are optimising across a range of input scenarios that match the data we have."]}),"\n",(0,n.jsxs)(t.p,{children:["If running ",(0,n.jsx)(t.code,{children:"find_best_actions"})," in multi-target mode, the multiple targets can be weighted to reflect the relative importance of each objective using the ",(0,n.jsx)(t.code,{children:"target_importance"})," parameter. We'll show an example of using this feature in practice in a future example."]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["We could go even further here. In this example ",(0,n.jsx)(t.code,{children:"find_best_actions"})," is being used to find the best configuration settings for the production line over multiple scenarios (usually by day or shift). However, we could also use it to find the best configuration settings for a specific scenario, by setting the ",(0,n.jsx)(t.code,{children:"fixed"})," parameter to the specific input values for that scenario. This would allow us to optimise the production line for a specific set of input values, rather than across a range of values, giving much more precise control and even greater improvements. However this also requires being able to set the machine settings in real-time, which may not be possible in all cases. If it is possible, then this can be a very powerful tool for improving yield and reducing waste."]})}),"\n",(0,n.jsx)(t.h2,{id:"explain-the-causes-of-yield",children:"Explain the causes of yield"}),"\n",(0,n.jsxs)(t.p,{children:["Unlike standard AI/ML models that only understand correlations, causal models can explain the true causes of an outcome. We can use the ",(0,n.jsx)(t.code,{children:"causal_attributions"})," function to find the causes of yield ",(0,n.jsx)(t.code,{children:"Output"})," and their relative magnitudes."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'plot_causal_attributions(model, "Output")\n'})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Causal Attributions",src:i(1523).Z+"",width:"620",height:"455"})}),"\n",(0,n.jsx)(t.p,{children:"Unlike standard AI models, causal attribution plots show the causal effect of making a tweak to one of the input factors. This is important in systems such as production lines where there are long chains of causality as machines feed their outputs into each other sequentially. Standard AI models usually attribute most cause to the factors nearest to the outcome node because that is where the signal is strongest. Causal models are the only way to accurately attribute causality and make correct optimisation decisions. This is import both for explainability and for making sure that the optimisation decisions are actually correct."}),"\n",(0,n.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,n.jsx)(t.p,{children:"In this example, we've shown how CausaDB can be used to optimise yield on a production line. By modelling the causal relationships between machines and their settings, we can create a kind of causal twin of the real world system. This can be used to find the optimal configuration settings required to maximise yield. We can also use the causal model to explain the causes of yield and their relative magnitudes."}),"\n",(0,n.jsxs)(t.p,{children:["If you're interested in learning more about how CausaDB can be used to optimise production lines or complex systems, please get in touch with us at ",(0,n.jsx)(t.a,{href:"mailto:causadb@causa.tech",children:"causadb@causa.tech"}),"."]})]})}function c(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},3964:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/assembly_line_diagram-122b2688f19fee07f00744c6a6ce9f6e.png"},1523:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/causal_attributions-e38b14c0d3909df97cc2c0b3f96fde92.png"},6803:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/causal_diagram-e50d2cd928a412b46f8eb625e93333be.png"},1151:(e,t,i)=>{i.d(t,{Z:()=>d,a:()=>r});var n=i(7294);const s={},l=n.createContext(s);function r(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);