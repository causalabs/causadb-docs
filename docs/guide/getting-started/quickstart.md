---
sidebar_position: 3
---

# Quickstart (Node.js)

To get up and running quickly with CausaDB using Node.js, follow the steps below.

## Connect to CausaDB with the Node client

Firstly, we need to set up the client with your API key. The API key can be provided as an environment variable `CAUSA_API_KEY` or, as below, by providing the API key when the client is initialised.

```js
const causadb = require('causadb');

causadb.setToken("<YOUR_API_KEY>");

model = causadb.createModel("my_model_name");
```

## Connect a data source

You can load data from a database or a file. To load data from a database, you'll first need to register it with CausaDB. To find out how to do this, follow the CLI guide. For the purposes of this tutorial we'll assume you've already registered a database called `data`.

### From a database

To load data from a database registered with CausaDB, use `attachDataFromDB`:

```js
model.attachDataFromDB("my_database");
```

> **Note** You'll need to have registered a database called "my_database" with CausaDB first using the command line interface (CLI). See the examples page of this documentation for an example of how to do this.

### From a file

To load data from a local file, use `attachDataFromFile`:

```js
model.attachDataFromFile("path/to/data.csv");
```

## Specify a model

A causal model is defined by its causal structure. To assign a causal structure, we can add graph features using `setNodes` and `setEdges`:

```js
model.setNodes(["x1", "x2", "x3"])

model.setEdges([
    ("x1", "x2"),
    ("x2", "x3")
])
```

The node variables `x1`, `x2`, and `x3` should be present as columns in the data source.

## Fit the model

Once a data source and structure have been defined, it's time to fit a causal model to the data. This is simple using the default model settings:

```js
model.fit()
```

Additional parameters can be passed to the model `fit` function, but we'll keep things simple for now.

Running the `fit` function will initialise the model fitting process. Depending on the size of the dataset and complexity of the causal structure, this can take anywhere from a few milliseconds to several hours. If the model fitting is being run programmatically, it could be useful to check model fitting progress by running:

```js
model.status()
```

If the model fitting process is still running, the response will look something like:

```
{
    'status': 'fitting', 
    'details': {
        'running_time': 134,
    },
    ...
}
```

If the model fitting has already finished, you'll get a response like this:

```
{
    'status': 'ready', 
    ...
}
```

## Deploying your model

The model definition and fitting process is all run in the cloud, so once a model has been defined and fit, it is ready to be used in production. To use a model in production, it can be referred to either by its model name (we set this as "my_model_name" earlier) or its model reference ID, which can be obtained using:

```js
model.id
```

```
xGl3baAzQasWC0KW
```

The model ID will refer to this specific version of the model, whereas the name will refer to the latest model with the same name, so we recommend using the ID where possible.

## Using the model

The core value of causal AI can be accessed through a series of core functions. We'll cover some common use cases below.

### Simulating outcomes

One of the central features of causal AI is the ability to simulate outcomes after a change in the inputs. This can be used to estimate how taking an action will change the outcome. This is something that non-causal models struggle with because they don't understand how the input variables are causally related. In CausaDB, we can estimate the impact of an action using:

```js
model.simulateAction({'x1': 1});
```

```
{
    'x1': 1.000,
    'x2': 0.551,
    'x3': -0.382,
    ...
}
```

This will estimate the value of each variable after setting `x1` equal to 1. This can be used to estimate how taking an action or making a recommendation is likely to change a target outcome, and any side-effects such an action might have.

### Finding optimal actions

Following on from simulating the outcomes of actions, an obvious next step is to find the optimal set of actions needed to achieve a target outcome. This problem can be solved in CausaDB using the `optimalActions` function:

```js
model.optimalActions({
    actions: ['x1'],
    outcomes: [
        {'node': 'x3', 'target': -0.5}
    ],
    constraints: [
        {'node': 'x2', 'bounds': [-1, 1]}
    ],
})
```

```
{
    actions: [
        {'x1': 1.289}
    ],
    outcomes: [
        {'x3': -0.498}
    ],
    constraints: [
        {'x2': 0.736}
    ]
}
```

This will find the optimal value of `x1` to achieve the target outcome of `x3 = -0.5` subject to a set of constraints (optional) that `x2` must be between -1 and 1.

<!-- ### Precision outcomes

Causal AI models are able to into account differences between individuals (or units, or whatever the rows in your database represent). This makes it possible to predict how an action will affect an outcome for a specific individual. A common use case for this functionality would be recommending changes to a user's choices in a healthcare or lifestyle app. To run precision predictions in CausaDB, we can use `simulateAction`:

```js
model.simulateAction({
    action: {'x1': 1},

});
```

```
{
    'x1': 1.000,
    'x2': 0.551,
    'x3': -0.382,
    ...
}
``` -->

## Next steps

This quickstart guide is designed to give you a quick overview of how to get started with CausaDB. To learn more about the full functionality of CausaDB, read the (examples)[ww.google.com] and reference sections of the documentation to see how CausaDB can help to solve your specific use cases.