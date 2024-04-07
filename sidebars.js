/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    guideSidebar: [
        {
            type: "category",
            label: "Getting Started",
            items: [
                { type: "autogenerated", dirName: "guide/getting-started" },
                "examples/causadb_quickstart",
            ],
        },
        {
            type: "category",
            label: "CausaDB Concepts",
            items: [{ type: "autogenerated", dirName: "guide/causadb" }],
        },
        {
            type: "category",
            label: "Causal AI Concepts",
            items: [{ type: "autogenerated", dirName: "guide/causal-ai" }],
        },
    ],
    exampleSidebar: [{ type: "autogenerated", dirName: "examples" }],
    referenceSidebar: [{ type: "autogenerated", dirName: "reference" }],
};

export default sidebars;