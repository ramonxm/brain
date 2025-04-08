import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Ramon Xavier',
  tagline: 'Documentação de estudos e implementações',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ramonxm', // Usually your GitHub org/user name.
  projectName: 'algorithm-and-data-structures', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Internationalization configuration
  i18n: {
    defaultLocale: 'pt',
    locales: ['en', 'pt'],
    localeConfigs: {
      en: {
        htmlLang: 'en-US',
        label: 'English',
      },
      pt: {
        htmlLang: 'pt-BR',
        label: 'Português',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
          editUrl: 'https://github.com/ramonxm/algorithm-and-data-structures/tree/main/',
          path: 'docs',
          // Configure docs for i18n
          includeCurrentVersion: true,
        },
    
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Ramon Xavier',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          to: '/docs/concepts',
          position: 'left',
          label: 'Concepts',
        },
        {
          to: '/docs/data-structures',
          position: 'left',
          label: 'Data Structures',
        },
        {
          to: '/docs/algorithms',
          position: 'left',
          label: 'Algorithms',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/ramonxm/algorithm-and-data-structures',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentação',
          items: [
            {
              label: 'Introdução',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://linkedin.com/in/ramonxm',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/ramonxm',
            },
            {
              label: 'X',
              href: 'https://x.com/ramonxavierm',
            },
          ],
        },
        {
          title: 'Mais',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Repositório',
              href: 'https://github.com/ramonxm/algorithm-and-data-structures',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ramon Xavier. Feito com Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
