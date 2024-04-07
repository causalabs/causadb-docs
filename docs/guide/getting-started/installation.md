---
sidebar_position: 2
---

# Installation

:::tip

Just want to get started without setting up your own environment? Try our [Google Colab notebooks](../../examples/colab_notebooks) to get started with CausaDB in the cloud.

:::

## CLI/Python interface

CausaDB is managed through a CLI tool that can be installed through pip. We also provide Python, Node.js, and REST API interfaces. The CLI tool is bundled with the Python interface, so should be installed regardless of whether you want to use the Python interface. 

### Installing the CLI/Python interface

:::tip

Using Conda? We recommend using the `pip` package manager to install the CLI and Python interface. You can install pip in Conda using `conda install pip`.

:::

The CLI (and bundled Python interface) can be installed from PyPI using:

```bash
pip install causadb
```

Once the CLI is installed, you'll need to set it up with your access credentials. You can do this by running the `login` command:

```bash
causadb account setup
```

Follow the instructions in the CLI to link it with your cloud account.

### Authenticating the Python interface

When using the Python interface on a remote instance (such as a server or Colab notebook) you'll need to authenticate within the Python interface. This is done when you set up the client:

```python
import causadb

client = causadb.CausaDB(token="<YOUR_TOKEN_HERE>")
```

## Node.js interface

:::warning

The Node.js interface is under active development and is not yet feature-complete. Do not use this interface unless you are a developer or beta tester.

:::

The Node.js client is intended for use with JavaScript and Typescript, and is ideal for server-side (not client-side) software.

### Installing the Node.js interface

The Node.js client is available on npm, and can be installed in the standard way:

```bash
npm install causadb
```

### Authenticating the Node.js interface

To authenticate the Node.js interface, run:

```js
import { CausaDB } from "causadb";

CausaDB.setToken("AHFDOIEUBDKSDVXHFSKH");
```

## Next steps

Once you've set up your CLI and whichever interface you're working with, it's time to get started working with causal AI on the cloud. Follow our [quickstart guide](../../examples/causadb_quickstart) to get started. 