---
sidebar_position: 2
---

# Command Line Interface

The command line interface is a tool for interacting with CausaDB and managing your account. The CLI is bundled with the Python interface, so should be installed regardless of whether you want to use the Python interface.

## Setup

The CLI (and bundled Python interface) can be installed from PyPI using:

```bash
pip install causadb
```

Once the CLI is installed, you'll need to set it up with your access credentials. You can do this by running the `setup` command:

```bash
causadb account setup
```

Follow the instructions in the CLI to link it with your cloud account.

## Usage

The CLI provides a number of commands for managing your account and interacting with CausaDB. You can see a list of available commands by running:

```bash
causadb --help
```

You can also get help on a specific command by running:

```bash
causadb <command> --help
```
