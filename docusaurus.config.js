// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "55yong blog",
  tagline: "FE 개발자 지망생",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://55yong.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "55yong", // Usually your GitHub org/user name.
  projectName: "55yong.github.io", // Usually your repo name.

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
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/55yong/55yong.github.io/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/55yong/55yong.github.io/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        gtag: {
          trackingID: "G-FCK7N4C2CP",
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      metadata: [
        {
          name: "google-site-verification",
          content: "57_ZmsJRk90_3o1KQ42dpcFN0ain4CGn7NeKz25ua5U",
        },
      ],
      navbar: {
        title: "55yong blog",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "portfolio",
            position: "left",
            label: "📝 포트폴리오",
          },
          {
            type: "docSidebar",
            sidebarId: "likelionStudy",
            position: "left",
            label: "🦁 멋사대학 12기 스터디",
          },

          { to: "/blog", label: "✏️ TIL", position: "left" },
          {
            href: "https://github.com/55yong",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        // links: [
        //   {
        //     title: "Docs",
        //     // items: [
        //     //   {
        //     //     label: "Tutorial",
        //     //     to: "/docs/intro",
        //     //   },
        //     // ],
        //   },
        //   {
        //     title: "Community",
        //     items: [
        //       {
        //         label: "LinkedIn",
        //         href: "https://www.linkedin.com/in/55yong",
        //       },
        //       //   {
        //       //     label: "Discord",
        //       //     href: "https://discordapp.com/invite/docusaurus",
        //       //   },
        //       //   {
        //       //     label: "Twitter",
        //       //     href: "https://twitter.com/docusaurus",
        //       //   },
        //     ],
        //   },
        //   {
        //     title: "More",
        //     items: [
        //       {
        //         label: "TIL",
        //         to: "/blog",
        //       },
        //       {
        //         label: "GitHub",
        //         href: "https://github.com/55yong",
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} 55yong Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;