---
sidebar_position: 3
---
# Supply chain optimisation

The use of AI in supply chain management, specifically for demand prediction, has become increasingly vital for retailers seeking to optimize their inventory and resources. Traditional predictive models have limitations, particularly in their ability to forecast over extended time horizons. This is due to their inability to account for dynamic relationships between variables such as seasonality and temperature. Here, we introduce a use case leveraging causal AI to address these challenges, demonstrating its potential in supply chain optimisation.

## Scenario: Retail demand prediction

Consider a retailer aiming to predict the demand for a seasonal product. Two critical factors influencing this demand are the time of year (weeks 1 - 52) and the average outside temperature. A traditional predictive model would struggle to forecast demand beyond a single timestep as it fails to account for how temperature changes with the season. To overcome this, we can opt for a causal AI approach.

## Data source

The retailer collects historical data, including:

* **Week:** Represents the week of the year, ranging from 1 to 52.
* **OutsideTemp**: The average outside temperature (°C) recorded in degrees Celsius for that week.
* **UnitsSold**: The quantity of the product sold during that week.

The data might look something like this:

| Week | AvgTemp | UnitsSold |
|------|------------------------|------------------------|
| 1    | 5                      | 100                    |
| 15   | 20                     | 400                    |
| 30   | 30                     | 500                    |
| 40   | 15                     | 300                    |
| 52   | 2                      | 150                    |

## Set up CausaDB

Before we can train a causal AI model, CausaDB must be initialised and a dataset ttached. This can be done in the usual way:

```js
const causadb = require('causadb');

causadb.setToken("<YOUR_API_KEY>");

const model = causadb.createModel("customer_intent");

model.attachDataFromDB("customer_intent_db");
```

If you don't already have an API key, [get in touch](https://causa.tech) to set one up.

## Causal Model Development

Using CausaDB, we can set up a model that understands and predicts the dynamic relationship between the season, temperature, and product demand. This model can predict future demand accurately by understanding how temperature typically varies across the year.

### Defining the Causal Relationships

The causal model can be defined with the following relationships:

* Season influences Average Outside Temperature.
* Both Season and Average Outside Temperature influence Product Demand.

This can be implemented in CausaDB as:

```js
model.setNodes(["Week", "AvgTemp", "UnitsSold"]);

model.setEdges([
    ("Week", "AvgTemp"),
    ("Week", "UnitsSold"),
    ("AvgTemp", "UnitsSold"),
]);
```

Since the `Week` variable is seasonal (e.g. week 52 in one year is only one week before week 1 in the next year), it's also good practice to define `Week` as a seasonal variable. This can be done using the `setNodeTypes` function:

```js
model.setNodeTypes({
    "Week": {type: "seasonal", min: 1, max: 52}
})
```

### Model Training and Deployment

Once the causal relationships are defined, the model can be trained on historical data. Post-training, it will be capable of forecasting product demand for future seasons, taking into account the predicted temperature changes. The training process takes place on the CausaDB cloud and for a small dataset with a few columns (like our example), should take less than a second. 

```js
model.train();
```

With the train method, the model learns from the historical data in our dataset. This training process allows CausaDB to understand how different variables interact causally and how time of the year will affect average temperature, and how they will both affect demand for a seasonal product.

Once the training is complete, the model will immediately be ready for production. It can now be queried to forecast product demand into the future.

## Using the model in production to make recommendations

CausaDB is cloud-first, so once training is complete, the model is already available in production. A common use case is to run a causal query from a REST API. This has the benefit of being accessible from virtually any software environment with internet access, regardless of what language the application is written in. To forecast the demand for a particular week in the future (let's say week 25), we can simply send a query to the `simulate-action` endpoint to simulate the action of setting the week to the 25th week of the year:

* **Endpoint:** `api.causadb.com/v1/simulate-action/customer_intent`
* **Method:** POST

Request Body:

```
{
  "Week": 25
}
```

> **Note:** You'll need to include your API key in the request headers. Follow the guide in the API reference for how to do this.

The response body will contain the estimated state of the variables in week 25.

Response Body:

```
{
  "Week": 25,
  "AvgTemp": 22,
  "UnitsSold": 450
}
```

## Conclusion

This case study demonstrates how causal AI can be used in supply chain management and optimisation by predicting demand for retail items. By using causal AI, businesses and organisations can avoid the pitfalls of traditional predictive models through a deeper understanding of the causal links between variables (such as time and temperature, in this case). Though we focused on a physical retail product example in this case, a similar approach could be used for digital products, predicting infrastructure load, and more. The future of AI in fields like supply chain management lies in its ability to understand cause and effect. If you think causal AI can help your business, get in touch with us.