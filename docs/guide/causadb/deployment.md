---
sidebar_position: 1
---

# Model Deployment

Model deployment is the process of making a trained causal model available for use in other systems, either through the REST API or supported client libraries.

As a cloud-native platform, CausaDB models are designed to be deployment-ready out of the box. This means that once a model is trained, it can be used immediately in your applications.

Once a model has been created, defined, and trained, as below (in Python):

```python
model = client.create_model("my-new-model")
...
model.train("my-data-name")
```

It can be accessed by name in deployment. This is usually in a new session, or in a different application. To access a model by name in Python, use the `get_model` method:

```python
model = client.get_model("my-new-model")
```

:::note

CausaDB will soon support model versioning, allowing you to keep track of changes to your model over time. This is useful for auditing, debugging, and for managing multiple versions of a model in production.

:::