import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Ramon Xavier',
  baseUrl: '/',
  tagline: 'Documentação de estudos e implementações',
  favicon: 'img/favicon.ico',
  url: 'https://ramonxm.github.io',
  organizationName: 'ramonxm',
  projectName: 'brain', 
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
          editUrl: 'https://github.com/ramonxm/algorithm-and-data-structures/tree/main/',
          path: 'docs',
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
          to: '/docs/concepts',
          position: 'left',
          label: 'Conceitos',
        },
        {
          to: '/docs/data-structures',
          position: 'left',
          label: 'Estruturas de Dados',
        },
        {
          to: '/docs/algorithms',
          position: 'left',
          label: 'Algoritmos',
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
        }
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
