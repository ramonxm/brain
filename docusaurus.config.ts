import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const organizationName = "ramonxm";
const projectName = "brain";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Brain - Algoritmos e Estruturas de Dados",
  baseUrl: "/brain/",
  tagline: "Documentação completa sobre algoritmos, estruturas de dados e conceitos fundamentais de computação",
  favicon: "img/favicon.ico",
  url: "https://ramonxm.github.io",
  organizationName,
  projectName,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Internationalization configuration
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR', 'en'],
    path: 'i18n',
    localeConfigs: {
      'pt-BR': {
        label: 'Português (Brasil)',
        direction: 'ltr',
        htmlLang: 'pt-BR',
        calendar: 'gregory',
        path: 'pt-BR',
      },
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
        path: 'en',
      },
    },
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "docs",
          path: "docs",
          editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/`,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          includeCurrentVersion: true,
          breadcrumbs: true,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        gtag: {
          trackingID: 'G-XXXXXXXXXX', // Substitua pelo seu ID do Google Analytics
          anonymizeIP: true,
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
        disableInDev: false,
      },
    ],
  ],

  themeConfig: {
    // SEO and social media meta
    metadata: [
      {name: 'keywords', content: 'algoritmos, estruturas de dados, programação, computer science, data structures, algorithms'},
      {name: 'twitter:card', content: 'summary_large_image'},
    ],
    
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    
    image: "img/brain-social-card.jpg",
    
    navbar: {
      title: "Brain",
      logo: {
        alt: 'Brain Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo-dark.svg',
        width: 32,
        height: 32,
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'conceptsSidebar',
          position: 'left',
          label: 'Conceitos',
        },
        {
          type: 'docSidebar',
          sidebarId: 'dataStructuresSidebar',
          position: 'left',
          label: 'Estruturas de Dados',
        },
        {
          type: 'docSidebar',
          sidebarId: 'algorithmsSidebar',
          position: 'left',
          label: 'Algoritmos',
        },
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          type: 'search',
          position: 'right',
        },
        {
          href: `https://github.com/${organizationName}/${projectName}`,
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
      hideOnScroll: true,
    },
    
    footer: {
      style: "dark",
      links: [
        {
          title: "📚 Documentação",
          items: [
            {
              label: "Introdução",
              to: "/docs/intro",
            },
            {
              label: "Conceitos Fundamentais",
              to: "/docs/concepts",
            },
            {
              label: "Estruturas de Dados",
              to: "/docs/data-structures/array",
            },
            {
              label: "Algoritmos",
              to: "/docs/algorithms/greedy/index",
            },
          ],
        },
        {
          title: "🌐 Comunidade",
          items: [
            {
              label: "GitHub Discussions",
              href: `https://github.com/${organizationName}/${projectName}/discussions`,
            },
            {
              label: "Contribuir",
              href: `https://github.com/${organizationName}/${projectName}/blob/main/CONTRIBUTING.md`,
            },
            {
              label: "Issues",
              href: `https://github.com/${organizationName}/${projectName}/issues`,
            },
          ],
        },
        {
          title: "👨‍💻 Social",
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
              label: "X (Twitter)",
              href: "https://x.com/ramonxavierm",
            },
          ],
        },
        {
          title: "📄 Recursos",
          items: [
        
            {
              label: "Changelog",
              href: `https://github.com/${organizationName}/${projectName}/releases`,
            },
            {
              label: "Licença MIT",
              href: `https://github.com/${organizationName}/${projectName}/blob/main/LICENSE`,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ramon Xavier. Construído com ❤️ usando Docusaurus.`,
    },
    
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: [
        'java',
        'python',
        'cpp',
        'c',
        'csharp',
        'php',
        'ruby',
        'go',
        'rust',
        'kotlin',
        'swift',
        'dart',
        'scala',
        'bash',
        'powershell',
        'sql',
        'json',
        'yaml',
        'toml',
        'diff',
      ],
    },

    // Algolia search configuration (uncomment and configure when ready)
    // algolia: {
    //   appId: 'YOUR_APP_ID',
    //   apiKey: 'YOUR_SEARCH_API_KEY',
    //   indexName: 'brain-algorithms',
    //   contextualSearch: true,
    //   searchParameters: {},
    //   searchPagePath: 'search',
    // },

    // Table of contents configuration
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },

    // Announcement bar (uncomment when needed)
    // announcementBar: {
    //   id: 'support_us',
    //   content:
    //     '⭐️ Se este projeto te ajudou, considere dar uma estrela no <a target="_blank" rel="noopener noreferrer" href="https://github.com/ramonxm/brain">GitHub</a>! ⭐️',
    //   backgroundColor: '#fafbfc',
    //   textColor: '#091E42',
    //   isCloseable: false,
    // },

  } satisfies Preset.ThemeConfig,
  
  // Additional configurations
  markdown: {
    mermaid: true,
  },
  
  themes: ['@docusaurus/theme-mermaid'],
};

export default config;
