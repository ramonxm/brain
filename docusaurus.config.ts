import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Brain',
  tagline: 'Algorithms and Data Structures',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  // Corrected URL: Base domain for GitHub Pages
  url: 'https://ramonxm.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // Corrected baseUrl: Repository name as the subpath
  baseUrl: '/brain/',

  // GitHub pages deployment config.
  organizationName: 'ramonxm', // Your GitHub org/user name.
  projectName: 'brain', // Your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
      },
      pt: {
        label: 'Português',
        direction: 'ltr',
        htmlLang: 'pt-BR',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/ramonxm/brain/tree/main/',
          routeBasePath: '/', // Serve docs at the site's root
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Brain',
      logo: {
        alt: 'Brain Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/ramonxm/brain',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: "Documentação",
          items: [
            {
              label: "Introdução",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "LinkedIn",
              href: "https://linkedin.com/in/ramonxm",
            },
            {
              label: "GitHub",
              href: "https://github.com/ramonxm",
            },
            {
              label: "X",
              href: "https://x.com/ramonxavierm",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Brain Project. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
