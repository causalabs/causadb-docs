---
sidebar_position: 1
---

# Data Sources

CausaDB supports a variety of data sources, including databases, data lakes, and local files. The data sources can be used to ingest data into CausaDB for training purposes. Inference is typically performed via the API (or SDK) using the data sources directly.

## Local Files

Local files can be uploaded to CausaDB using the web interface. The supported file formats include CSV, JSON, and Pandas DataFrames. The data is then stored in CausaDB and can be used for training models. This method is useful for small datasets or for quick prototyping, but is not recommended for large datasets or for production use.

There are a number of downsides to using local files as the data source:

- **Duplication**: Data is stored in CausaDB and in the local file, which can lead to inconsistencies.
- **Freshness**: Changes to the file are not automatically updated in CausaDB, so the data can become stale.
- **Performance**: Reading and uploading data from a local file can be slow for very large datasets.

## Databases

:::note

**Coming soon**: This feature is not yet publicly available, but is planned for a near-term release.

:::

CausaDB can connect to a variety of databases and data lakes to ingest data for training models. The databases we're planning to support include SQL, BigQuery, Snowflake, and others. The data is read directly from the database and stored in CausaDB, which avoids duplication and ensures that the data is always up-to-date. This method is recommended for production use and for large datasets.