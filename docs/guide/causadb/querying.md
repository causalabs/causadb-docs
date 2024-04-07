---
sidebar_position: 1
---

# Model Querying

CausaDB models are designed to understand the causal structure of your data. This means that you can query the model to understand the causal relationships between variables, make predictions about the effects of actions, and attribute causality to different variables, among other things.

Once a model is trained on your data, you can run a variety of queries for different purposes. This guide will walk you through some of the most common queries you might want to run on your model.

## Simulate actions

Simulating actions is a common use case for causal models. You can simulate the effects of setting a node or set of nodes to a specific value, and then see how the remaining variables change. Only nodes downstream of the actionable nodes will change, as causality cannot act backwards. This function is useful for understanding the impact of taking actions, or for making predictions.

**Example:**

```python
model.simulate_actions(actions={
  "heating": 46,
  "outdoor_temp": 13
})["median"]
```

This will return the expected values of all nodes in the model when the `heating` node is set to 46 and the `outdoor_temp` node is set to 13.

This is a useful function for making predictions or understanding the impact of potential interventions and actions.

## Find best actions

As well as simulating actions, another common use case is to find the best actions to take in order to achieve a specific goal. This is done by optimising the values of actionable node for a given target node. This can be done while unactionable nodes are fixed to specific values or allowed to vary.

**Example:**

```python
best_actions = model.find_best_actions(
    targets={"indoor_temp": 19},
    actionable=["heating"],
    fixed={"outdoor_temp": 16}
)
```

This will return the optimal value for the `heating` node in order to achieve an `indoor_temp` of 19, while the `outdoor_temp` is fixed at 16.

This is a useful function for making recommendations or optimising decisions.

## Causal effects

Causal effects are the effects of changing a node or set of nodes on the other nodes in the model. This function allows you to understand the change in outcomes when an action is taken. Causal effects are always calculated between the current state of the model and the state after the action is taken. This is akin to regression coefficients or marginal effects in classical causal inference methods, but with the added benefit of being able to calculate the effects of multiple actions simultaneously.

**Example:**

```python
model.causal_effects({"heating": [50, 55]}, fixed={"outdoor_temp": 15})
```

|               | median   | lower    | upper    |
|---------------|----------|----------|----------|
| day           | 0.000000 | 0.000000 | 0.000000 |
| outdoor_temp  | 0.000000 | 0.000000 | 0.000000 |
| heating       | 5.000000 | 5.000000 | 5.000000 |
| indoor_temp   | 1.295403 | 1.135942 | 1.454892 |
| energy        | 43.059056| 40.899418| 45.263778|

In this example, the causal effects of setting the `heating` node to 55 from 50 are calculated, while the `outdoor_temp` node is fixed at 15. This will return the expected change in all other nodes in the model. Downstream nodes such as `outdoor_temp` and `day` will not change, as they are not affected by the `heating` node.

## Causal attribution

Causal attribution is the process of attributing the value of an outcome node to the values of the input nodes. This function allows you to understand the importance of different nodes in the model for a particular outcome node. It is similar to feature importance in machine learning models, but with a causal interpretation.

**Example:**

```python
causal_attributions = model.causal_attributions("energy")
causal_attributions
```

|               | energy    |
|---------------|-----------|
| outdoor_temp  | -25.130205|
| heating       | 8.639587  |
| indoor_temp   | 2.948999  |

In this example, the causal attributions of the `energy` node are calculated. This will return the expected contribution of each node to the value of the `energy` node. It is important to interpret these results in the context of the model, as the causal pathways can sometimes be indirect.

:::note

We're working on adding new explainability features to CausaDB that go beyond causal attributions, so stay tuned for more updates.

:::