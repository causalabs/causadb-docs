---
sidebar_position: 1
---

# Clients

CausaDB provides Python and Node.js libraries to interact with the CausaDB server. These libraries are object-oriented and make use of **client** objects to interact with the server. This concept is similar to the Python libraries for popular databases like MongoDB, Pinecone, and others.

A typical client initialisation looks something like this (in Python):

```python
import causadb

client = causadb.CausaDB(token="<YOUR_TOKEN_HERE>")
```

This code initialises a connection to the CausaDB server using the provided token and handles all the necessary authentication and communication with the server. The text `"<YOUR_TOKEN_HERE>"` above would be replaced by the CausaDB token provided by us. The client object can then be used to interact with the CausaDB server. For example, to create a new model, you would use the following code:

```python
model = client.create_model("my-new-model")
```

REST API access is also available, but as REST is stateless, it requires you to manage the authentication and session state yourself.