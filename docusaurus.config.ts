import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const organizationName = "ramonxm";
const projectName = "brain";


const config: Config = {
  title: "brain.xavier",
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
      title: "Home",
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'conceptsSidebar',
          position: 'left',
          label: 'Conceitos',
        },
      
        {
          type: 'docSidebar',
          sidebarId: 'topicsSidebar',
          position: 'left',
          label: 'Tópicos',
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
          label: 'Buy me a coffee',
          href: 'https://www.buymeacoffee.com/ramonxm',
          position: 'right',
        },
        {
          label: 'GitHub',
          href: `https://github.com/${organizationName}/${projectName}`,
          position: 'right',
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
      style: 'dark',
      links: [
        {
          title: 'Content',
          items: [
            {
              label: 'Intro',
              to: '/docs/concepts/big-o-notation',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/ramonxavierm',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/ramonxm/brain',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/ramonxm/',
            },
            
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Dev.to',
              href: 'https://dev.to/ramonxm',
            },
            {
              label: 'Medium',
              href: 'https://medium.com/@ramonxm',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ramon Xavier`,
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
