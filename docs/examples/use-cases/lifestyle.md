---
sidebar_position: 2
---

# Recommending health and lifestyle interventions

The availability of big data and the advancement of machine learning technologies has promised a revolution in personalised healthcare. ML and AI technologies could help to personalise treatments and recommendations to a person's specific needs. This technology has started to be used in both clinical and non-clinical settings, with popular apps helping people to manage their nutrition in a way that is tailor-made to their own needs. However a major limitation of these technologies is that they are rarely built using causally-aware algorithms. This makes it easy for AI algorithms to give poor and even potentially harmful recommendations. In this use case we'll explore how conventional AI gets this wrong, and how causal AI can be used to give trustworthy lifestyle recommendations.

> **Note:** We are not medical professionals. None of the content of this page should be taken as medical advice, and is simply intended to demonstrate the potential of integrating causal AI with professional medical expertise.

## Scenario

To keep things simple we'll consider a case where a user's goal is to reduce their BMI by changing the percentage of saturated fats in their diet. Data collected from previous users and/or medical records is available, and takes the form:

| UserID | SaturatedFatsInDiet (%) | Weight (kg) | BMI (kg/m²) |
|--------|-------------------------|-------------|-------------|
| U001   | 12                      | 70          | 22.5        |
| U002   | 7                       | 65          | 21.0        |
| U003   | 15                      | 80          | 25.5        |
| U004   | 10                      | 75          | 23.8        |
| U005   | 5                       | 60          | 20.3        |

* `UserID`: A unique identifier for each user in the dataset.
* `SaturatedFatsInDiet (%)`: The percentage of saturated fats in the user's diet.
* `Weight (kg)`: The weight of the user in kilograms.
* `BMI (kg/m²)`: The Body Mass Index of the user, calculated as weight in kilograms divided by the square of height in meters.

## What's wrong with standard AI?

Our goal is to help a user achieve their desired BMI by reducing the amount of saturated fats in their diet. A standard AI approach would be to train a model to predict BMI based on the available variables, and then use that model to find the ideal percentage of saturated fats in the diet that achieves the desired BMI. However this approach is flawed because by including all variables, some of the important causal pathways can become "blocked". In this example, including the `weight` variable in the AI model means that changes in saturated fat intake can't change weight, and in turn won't affect BMI. This is where causal AI is needed.

## Set up CausaDB

CausaDB can be initialised and the dataset can be attached in the usual way:

```js
const causadb = require('causadb');

causadb.setToken("<YOUR_API_KEY>");

const model = causadb.createModel("bmi");

model.attachDataFromDB("bmi_db");
```

If you don't already have an API key, [get in touch](https://causa.tech) to set one up.

## Fitting the causal model

Now we've initialised CausaDB and created our model instance, we need to define the causal model with the relevant variables and their relationships. This means specifying the input features and the causal relationships between them. We'll define these manually in this example, but there are also automated and semi-automated approaches that we explore in other examples. This only needs to be done once when first setting up the model or when updating it.

### Defining the Causal Relationships

The causal model in CausaDB allows us to incorporate domain knowledge about potential causal relationships between variables. In our case, we have:

We have `SaturatedFatsInDiet` as a potential cause of a user's `Weight` as well as `Weight` as an intermediary variable which affects `BMI`. This can be defined in CausaDB using:

```js
model.setNodes(["SaturatedFatsInDiet", "Weight", "BMI"]);

model.setEdges([
    ("SaturatedFatsInDiet", "Weight"),
    ("Weight", "BMI"),
]);
```
In this setup, we define the nodes and edges in our causal model. The edges represent the hypothesized causal relationships, such as the influence of saturated fat intake on weight, and subsequently on BMI. This model will help us understand and quantify the effects of dietary habits on overall health outcomes.

### Running training

After defining the variables and their causal relationships, we can fit the model to our dataset. This process takes place on the CausaDB cloud and for a small dataset with a few columns (like our example), should take less than a second. 

```js
model.train();
```

With the train method, the model learns from the historical data in our dataset. This training process allows CausaDB to understand how different variables interact causally and how interventions on diet can influence the weight and BMI of a user. This also makes the model ready for production, and it can now be queried to make recommendations within a health app to help users make informed decisions about their lifestyle choices.

## Using the model in production to make recommendations

CausaDB is cloud-first, so once training is complete, the model is already available in production. This means that from a NodeJS server that handles API calls from your frontend, you can simply connect to CausaDB as we did earlier, retrieve the model, and then run the query needed for your application. We'll retrieve the model using:

```js
const model = CausaDB.getModel("bmi");
```

This will pull in the model from your CausaDB model database ready for querying. In our use case, the goal is to give a user access to a slider that they can adjust to see how changing their saturated fat intake will impact their BMI. For this, we can use CausaDB's simulated actions functionality. At the NodeJS server for the app, we'll assume the user's slider value request is available as `sliderValue`:

```js
const actionOutcome = model.simulateAction({'SaturatedFatsInDiet': sliderValue});
```

The NodeJS server can then respond with the expected outcome using `actionOutcome.BMI`.

## Conclusion

This case study highlights the potential of CausaDB in the realm of personalized health and lifestyle recommendations. By using causal AI, we avoid the limitations and pitfalls of traditional predictive models, enabling us to understand and act upon the complex relationships between variables. The future of AI in healthcare and beyond lies in the ability to not just predict, but to understand and influence outcomes in a responsible and informed manner.