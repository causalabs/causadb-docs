// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";
import lunrSearch from "docusaurus-lunr-search";

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "CausaDB Docs",
    tagline: "Build, manage, and deploy causal AI in the cloud",
    favicon: "img/favicon.ico",

    // Set the production url of your site here
    url: "https://docs.causadb.com",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "causalabs", // Usually your GitHub org/user name.
    projectName: "causadb-docs", // Usually your repo name.

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarCollapsible: false,
                    sidebarPath: "./sidebars.js",
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                },
                theme: {
                    customCss: "./src/css/custom.css",
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: "img/docusaurus-social-card.jpg",
            colorMode: {
                defaultMode: "dark",
                disableSwitch: false,
            },
            announcementBar: {
                id: "supportus",
                content:
                    "🛠️ Documentation site is under active development and changes on a daily basis.",
                backgroundColor: "#009489",
                textColor: "#fff",
                isCloseable: false,
            },
            navbar: {
                title: "CausaDB",
                logo: {
                    alt: "CausaDB Logo",
                    src: "img/causadb_logo.svg",
                    srcDark: "img/causadb_logo_white.svg",
                },
                items: [
                    {
                        type: "docSidebar",
                        sidebarId: "guideSidebar",
                        position: "left",
                        label: "Guide",
                    },
                    {
                        type: "docSidebar",
                        sidebarId: "exampleSidebar",
                        position: "left",
                        label: "Examples",
                    },
                    {
                        type: "docSidebar",
                        sidebarId: "referenceSidebar",
                        position: "left",
                        label: "Reference",
                    },
                    {
                        to: "https://causa.tech",
                        label: "Home",
                        position: "right",
                    },
                    {
                        to: "https://status.causadb.com",
                        label: "Status",
                        position: "right",
                    },
                    // { to: "/blog", label: "Blog", position: "right" },
                    // {
                    //     href: "https://github.com/facebook/docusaurus",
                    //     label: "GitHub",
                    //     position: "right",
                    // },
                ],
            },
            footer: {
                style: "light",
                // links: [
                //     {
                //         title: "Docs",
                //         items: [
                //             {
                //                 label: "Tutorial",
                //                 to: "/docs/guide/intro",
                //             },
                //         ],
                //     },
                //     {
                //         title: "Community",
                //         items: [
                //             {
                //                 label: "Slack",
                //                 href: "https://discordapp.com/invite/docusaurus",
                //             },
                //             {
                //                 label: "X",
                //                 href: "https://twitter.com/docusaurus",
                //             },
                //         ],
                //     },
                //     {
                //         title: "More",
                //         items: [
                //             {
                //                 label: "Blog",
                //                 to: "/blog",
                //             },
                //             {
                //                 label: "GitHub",
                //                 href: "https://github.com/facebook/docusaurus",
                //             },
                //         ],
                //     },
                // ],

                copyright: `Copyright © ${new Date().getFullYear()} Causa Ltd.`,
            },
            prism: {
                theme: prismThemes.dracula,
                darkTheme: prismThemes.dracula,
            },
        }),
    plugins: [lunrSearch],
    themes: ["docusaurus-theme-openapi-docs"],
};

export default config;
