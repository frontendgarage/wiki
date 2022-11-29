// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Frontend Garage',
  tagline: 'Learn the foundation of Software Engineering - Algorithms, OOP, design patterns and more!',
  url: 'https://frontendgarage.io',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'frontendgarage', // Usually your GitHub org/user name.
  projectName: 'frontendgarage', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      ({
        docs: {
          path: './contents',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/frontendgarage/website/contents/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/frontendgarage/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Frontend Garage',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            to: 'introduction', label: 'Core', position: 'left'
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/frontendgarage/website',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'General',
            items: [
              {
                label: 'Get started',
                to: '/docs/intro'
              },
              {
                label: 'Blog',
                to: '/blog'
              },
            ],
          },
          {
            title: 'Core',
            items: [
              {
                label: 'Data Structures',
                to: 'docs/category/data-structures'
              },
              {
                label: 'Algorithms',
                to: 'docs/category/algorithms'
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/frontendgarage',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Kemil Beltre. Built with Docusaurus.`,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
