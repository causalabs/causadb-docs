---
sidebar_position: 2
---

# Model Structure

Causal AI models are built around causal graphs, which represent the relationships between variables in a system. In causal graphs, nodes represent variables, and edges represent causal relationships between variables. These relationships are directed, meaning that the arrow points from the cause to the effect. A typical causal graph might look something like this:

<!-- Image of a causal graph -->
![Causal Graph](causadb_quickstart_8_0.png)

One of the most important properties of causal graphs is that they are acyclic, meaning that there are no loops in the graph. This is because a causal relationship between two variables implies a temporal ordering, where the cause must precede the effect, so a loop would imply causality acting backwards in time. See the section below on time series for more information on how to handle time series data.

The strongest assumptions when building a causal graph are the missing edges. These are the edges that are not present in the graph, and represent the assumption that there is no direct causal relationship between the variables. This means that the AI model won't attempt to learn a relationship between these variables.

## Defining a Causal Graph

When building a causal AI model, the first step is to define the nodes and edges of the causal graph. This can be done manually by specifying the nodes and edges in code, or by using a graphical interface to build the graph visually. Our model builder tool allows you to drag and drop nodes and edges to define the structure of your model, and then export the model to code for training and querying: [CausaDB Model Builder](https://builder.causadb.com).

## Learning a Causal Graph

An alternative to manually defining the causal graph is to learn the structure of the graph from data. This can be done using causal discovery algorithms, which infer the causal relationships between variables from observational data. These algorithms can be limited by the assumptions they make about the data, and may not always be able to accurately infer the true causal relationships. However, they can often be a useful tool for exploring the causal relationships in your data and generating hypotheses for further investigation.

:::note

We have some exciting updates coming soon to CausaDB that will make it easier to learn causal graphs from data. Stay tuned for more information!

:::

## Feedback Loops in Time Series

Time series data are a common use case for causal AI models, as many real-world systems are dynamic and evolve over time. But as mentioned earlier, feedback loops in causal graphs are not allowed. When working with time series data, this problem is solved by assigning variables to different time points. For example a variable `x` at time `t` can be represented as `x_t`, and the causal relationship between `x_t` and `x_{t-1}` can be represented as an edge in the causal graph. This allows the model to capture the temporal relationships between variables without introducing loops in the graph.

:::note

We're currently working on adding explicit support for time series data in CausaDB, including built-in functions for handling time series data and temporal relationships in the causal graph. Stay tuned for updates on this feature!

:::