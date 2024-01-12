---
sidebar_position: 1
---

# Predicting customer intent

In the competitive retail landscape, understanding customer intent and optimising discount strategies can have a large impact on profitability. This use case explores how CausaDB can be used to predict whether or not to offer a discount to a specific user, based on their viewing and buying history.

> **Note** This is a minimal example with a small dataset, binary variables, and only a few variables. CausaDB can handle much more complex problems than this. But here is a good place to start to get the hang of how CausaDB works.

## Scenario

Our retail business has a wealth of data on customer interactions, including whether a user has viewed similar items, purchased similar items, and whether they were previously offered a discount. These input variables will often be causally related, so its important to use causal AI and not conventional AI to understand how to optimise discounting strategies. In this example we'll predict the likelihood of a user making a purchase if offered a discount, thereby optimizing our marketing strategies and improving sales efficiency.

## Dataset

For this example we'll use a synthetic dataset that looks something like this:

| UserID | ViewedSimilarItem | BoughtSimilarItem | OfferedDiscount | BoughtItem |
|--------|-------------------|-------------------|-----------------|------------|
| 101    | 1                 | 0                 | 0               | 0          |
| 102    | 0                 | 1                 | 1               | 1          |
| 103    | 1                 | 0                 | 1               | 0          |
| 104    | 0                 | 1                 | 0               | 1          |
| 105    | 1                 | 1                 | 1               | 1          |

* `UserID`: A unique identifier for each user in the dataset.
* `ViewedSimilarItem`: Indicates whether the user has viewed a similar item. 
* `BoughtSimilarItem`: Shows if the user has previously purchased a similar item.
* `OfferedDiscount`: Denotes whether the user was offered a discount on their purchase.
* `BoughtItem`: Represents whether the user made a purchase.

Each row corresponds to a customer in the customer interaction database, and their browsing and purchasing behaviour, along with whether they were offered a discount. This is the dataset we'll be using to train our causal model.

## Set up CausaDB

CausaDB can be initialised and the dataset can be attached in the usual way:

```js
const causadb = require('causadb');

causadb.setToken("<YOUR_API_KEY>");

const model = causadb.createModel("customer_intent");

model.attachDataFromDB("customer_intent_db");
```

If you don't already have an API key, [get in touch](https://causa.tech) to set one up.

## Fitting the causal model

Once we have initialised CausaDB and created our model instance, the next step is to define the causal model with the relevant variables and their relationships. This means specifying the input features and the causal relationships between them. We'll define these manually in this example, but there are also automated and semi-automated approaches that we explore in other examples. This only needs to be done once when first setting up the model or when updating it.

### Defining the causal relationships

The causal model in CausaDB allows us to incorporate domain knowledge about potential causal relationships between variables. In our case, we have:

- `ViewedSimilarItem` and `BoughtSimilarItem` as potential causes that might influence a user's decision to purchase. `ViewedSimilarItem` may also be a cause of `BoughtSimilarItem`.
- `OfferedDiscount` as an intervention variable, which we can control to observe its effect on the likelihood of purchase.
- `BoughtItem` as the target variable, indicating whether the user ended up purchasing the item.

This can be defined in CausaDB using

```js
model.setNodes(["ViewedSimilarItem", "BoughtSimilarItem", "OfferedDiscount", "BoughtItem"]);

model.setEdges([
    ("ViewedSimilarItem", "BoughtSimilarItem"),
    ("ViewedSimilarItem", "OfferedDiscount"),
    ("BoughtSimilarItem", "OfferedDiscount"),
    ("BoughtSimilarItem", "BoughtItem"),
    ("BoughtSimilarItem", "OfferedDiscount"),
    ("OfferedDiscount", "BoughtItem")
]);
```

### Running training

After defining the variables and their causal relationships, we can fit the model to our dataset. This process takes place on the CausaDB cloud and for a small dataset with a few columns (like our example), should take less than a second. 

```js
model.train();
```

With the train method, the model learns from the historical data in our dataset. This training process allows CausaDB to understand how different variables interact causally and how interventions (like offering a discount) can influence the likelihood of a user making a purchase. This also makes the model ready for production, and it can now be queried to understand when to offer a discount to a user.

## Using the model in production

CausaDB is cloud-first, so once training is complete, the model is already available in production. This means that from a NodeJS server that handles API calls from your frontend, you can simply connect to CausaDB as we did earlier, retrieve the model, and then run the query needed for your application. In this case we'll retrieve the model using:

```js
const model = CausaDB.getModel("customer_intent");
```

This will pull in the model from your CausaDB model database ready for querying. Our goal is to determine whether or not to offer a discount to a current user to maximise the chance they'll purchase an item. The information we have about the current user will be `ViewedSimilarItem` and `BoughtSimilarItem`, let's assume these are available at the NodeJS server by the same variable names.

```js
const optimalAction = model.optimalActions({
    actions: ['OfferedDiscount'],
    outcomes: [
        {'node': 'BoughtItem', 'target': 1}
    ],
    variables: [
        {'node': 'ViewedSimilarItem', 'value': ViewedSimilarItem},
        {'node': 'BoughtSimilarItem', 'value': BoughtSimilarItem},
    ],
})
```

The response `optimalAction` will contain the recommended action for this specific user:

```js
{
    actions: [
        {'OfferedDiscount': 1}
    ]
}
```

This can then be accessed programmatically to inform the frontend whether to show the discount/offer a coupon/etc or not.

## Conclusion

This was a minimal example with a simple problem to demonstrate how CausaDB can be used in production to boost sales strategy. By leveraging CausaDB's capabilities, we can make informed decisions about offering discounts to customers, ultimately leading to more effective marketing strategies and increased sales. This approach allows us to move beyond traditional correlation-based analysis and into the realm of causal inference, providing deeper and trustworthy insights into customer behavior and decision-making processes. For a comparison of how our causal AI model performs compared to a more conventional correlational AI, see our blog.