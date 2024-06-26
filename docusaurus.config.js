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
                },
                theme: {
                    customCss: "./src/css/custom.css",
                },
                blog: {
                    path: "updates",
                    routeBasePath: "updates",
                    blogSidebarTitle: "All Updates",
                    blogTitle: "Updates",
                    blogDescription: "CausaDB updates.",
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: "img/causadb-social-card.png",
            colorMode: {
                defaultMode: "dark",
                disableSwitch: false,
            },
            announcementBar: {
                id: "supportus",
                content:
                    "🛠️ Documentation site is under active development. If you have any feedback, please email us or join our Slack community.",
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
                    { to: "/updates", label: "Updates", position: "right" },
                    {
                        href: "https://join.slack.com/t/causadbcommunity/shared_invite/zt-2gahl1s0j-gsAf9ZJsR0SKcAZe3AVBIQ",
                        "aria-label": "Slack",
                        position: "right",
                        className: "header-slack-link",
                    },
                    {
                        href: "https://github.com/causalabs",
                        "aria-label": "GitHub repository",
                        position: "right",
                        className: "header-github-link",
                    },
                ],
            },
            footer: {
                style: "light",
                copyright: `Copyright © ${new Date().getFullYear()} Causa Ltd.<br />Last built: ${new Date().toUTCString()}`,
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
