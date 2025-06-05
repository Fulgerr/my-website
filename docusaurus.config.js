// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
const remarkProductName = require('./src/plugins/remark-product-name.js'); // <--- Add this line here


// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Data Service',
  tagline: 'No code data modelling',
  favicon: 'img/fav.svg',

  // Set the production url of your site here
  url: 'https://glowing-adventure-w6n75km.pages.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'UiPath', // Usually your GitHub org/user name.
  projectName: 'docusaurus-poc', // Usually your repo name.
deploymentBranch: 'gh-pages',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({ docs: { // Keep the original docs configuration
          sidebarPath: require.resolve('./sidebars.js'),
		  editUrl: 'https://github.com/UiPath/docusaurus-poc/tree/master',
		  		includeCurrentVersion: false,
				lastVersion: '2025.10',
				     versions: {
          '2024.10': {
            label: '2024.10',
            path: '2024.10', // The path segment for this version
          },
          '2025.10': {
            label: '2025.10', // You can label it as latest if you want
            path: '2025.10', // The path segment for this version
          },
        },
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
navbar: {
        title: 'Documentation',
        logo: {
          alt: 'UiPath',
          src: 'img/logo.svg',
        },
        items: [
          {
            label: 'Delivery Options',
            position: 'right',
            type: 'dropdown',
            items: [
              {
                label: 'Automation Cloud',
                to: '/api-guide/category/data-service-openapi',
              },
              {
                label: 'Automation Suite',
                to: '/api-guide/category/data-service-openapi',
              },
            ],
          },
		
          {
          type: 'docsVersionDropdown',
          position: 'right',

          dropdownActiveClassDisabled: true,
		  dropdownItems: ({ activeVersion, versions }) => {
          return versions
            .filter((version) => version.name !== 'current') // Exclude 'Next'
            .map((version) => ({
              label: version.label,
              to: version.path,
              active: version.name === activeVersion,
            }));
		   },
        },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Support',
            items: [
              {
                label: 'Support and Services',
                to: '/api-guide/category/data-service-openapi',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'UiPath Forum',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'UiPath Academy',
                href: 'https://discordapp.com/invite/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Data Service GitHub POC, Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),  
};
export default config;
